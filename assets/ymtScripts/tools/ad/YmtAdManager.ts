import YmtConstant from "../const/YmtConstant";
import GameSys from "../game_sys/GameSys";
import mTimer from "../mTimer";
import YmtUtils from "../YmtUtils";
import { ad_native_state, ad_native_type, privacy_type } from "./ymt_enum";

export enum RECORDER_STATE {
    NO,
    START,
    STOP,
    PAUSE,
    RESUME
}

export default class YmtAdManager {

    protected bannerAd = null;
    protected videoAd = null;
    protected interAd = null;
    protected bannerNode = null;
    protected innerInter = null;
    protected nativeInter = null;
    protected nativeIcon = null;
    protected portalAd = null;
    protected videocallback: (res: boolean) => void;
    protected _native_data_cache = [];
    protected isNeedShowBanner = false;
    protected isGameCd = false;
    protected isInitAd = false;
    protected addIconNode = null;
    protected interShowTime = 0;
    protected gameRecorder = null;
    protected videoPath = null;
    protected gameRecorderState = RECORDER_STATE.NO;
    protected bannerTimer: mTimer = null;
    protected nativeInterTimer: mTimer = null;
    protected bannerDelayTimer: mTimer = null;
    protected cur_show_ad_index = 0;
    protected gameStartTime = 0;
    protected addDeskTime = 0;

    private toastView;
    private authorizeView = null;
    private gameLoadingView = null;
    private privacyView = null;
    private companyView = null;

    protected static instance = null;
    boxNode: any;

    static getInstance(): YmtAdManager {
        if (this.instance == null) {
            this.instance = new YmtAdManager();
        }
        return this.instance;
    }

    /////////////////////////protected///////////////////////////

    protected initBanner() {
        this.bannerTimer = new mTimer();
    }

    protected initNativeAd() { }

    protected get_time() {
        if (window['cc']) {
            return window['cc'].sys.now();
        } else if (window['Laya']) {
            return window['Laya'].timer.currTimer;
        } else {
            return (new Date()).getTime();
        }
    }

    /**
     * 检查全部原生数据是否都为已曝光过的
     */
    protected check_native_data_list_is_reprot(native_data_list) {
        if (native_data_list.length > 0) {
            for (let i in native_data_list) {
                if (native_data_list[i].state == ad_native_state.need_show) {
                    return false
                }
            }
        }
        return true
    }

    /**
     * 最近拉取到的原生数据  或者 没有上报过的数据
     */
    protected get_latest_native_data(native_data_list) {
        // 需要曝光列表
        let need_show_list = [];
        for (let i in native_data_list) {
            if (native_data_list[i].state == ad_native_state.need_show) {
                return native_data_list[i]
            }
        }

        if (need_show_list.length > 0) {
            return need_show_list[YmtUtils.randomInt(0, need_show_list.length - 1)];
        } else if (native_data_list.length > 0) {
            return native_data_list[YmtUtils.randomInt(0, native_data_list.length - 1)];
        }
        return null
    }

    /**
     * 储存原生数据
     * @param native_data 原生数据
     */
    protected add_native_data(native_data) {

        for (let i in this._native_data_cache) {
            if (this._native_data_cache[i].adId == native_data.adId) {
                return
            }
        }
        this.reportAdShow(native_data);
        native_data.state = ad_native_state.need_show;
        this._native_data_cache.push(native_data);
    }

    /**
     * 点击上报了—-->移除原生数据
     */
    protected remove_native_data(native_data) {

        for (let i in this._native_data_cache) {
            if (this._native_data_cache[i].adId == native_data.adId) {
                console.log("remove native_data:", native_data)
                this._native_data_cache.splice(parseInt(i), 1)
                return
            }
        }
    }

    protected is_limit_native_length(ad_type) {
        let count = 0;
        for (let i in this._native_data_cache) {
            if (this._native_data_cache[i].type == ad_type && this._native_data_cache[i].state != ad_native_state.click) {
                ++count;
            }
        }
        return count >= GameSys.adInfo.nativeAdLimitCount;
    }

    /////////////////////////private/////////////////////////
    private _setClickNative(type, cbk, rto = null) {
        if (this.isGameCd || GameSys.isShieldArea || GameSys.isShenHe || rto == null || rto == 0) {
            cbk && cbk();
            return console.log("%c[YMT_GAME]广告CD中", "color: #33ccff");
        }
        let time = 0;

        if (type == ad_native_type.interstitial && this.innerInter && !this.innerInter.destroyed) {

            rto = rto || GameSys.adInfo.nativeInnerInstitialClickWarp;

            if (YmtUtils.randomInt(1, 100) <= rto && !this.innerInter.has_click_warp) {
                this.innerInter.click_adv_warp();
                time = 500;
            }
        } else if (type == ad_native_type.banner && this.bannerNode && !this.bannerNode.destroyed) {

            rto = rto || GameSys.adInfo.nativeBannerClickWarp;

            if (YmtUtils.randomInt(1, 100) <= rto && !this.bannerNode.has_click_warp) {
                this.bannerNode.click_adv_warp();
                time = 500;
            }
        }
        setTimeout(() => {
            cbk && cbk();
        }, time);
    }

    /////////////////////////public/////////////////////////

    public isServer: boolean = false;

    /**广告初始化 */
    initAd() {
        console.log('[YMT_GAME]广告初始化');
        this.gameStartTime = Date.now();
        YmtUtils.loadResDir('hs_ui', cc.Prefab);
    }

    /**
     * 展示banner
     * 优先展示原生Banner，若广告ID不存在/无广告数据，自动切换普通Banner
     */
    showBanner(top = null) { }
    /**隐藏Banner */
    hideBanner() {
        if (this.bannerTimer) this.bannerTimer.clear();
        if (this.bannerDelayTimer) this.bannerDelayTimer.clear();
        if (this.bannerNode && this.bannerNode !== undefined && cc.isValid(this.bannerNode.node, true)) {
            this.bannerNode.node.destroy();
        }
        this.bannerNode = null;
    }

    /**
     * 激励视频
     * @param complete 参数表示是否完成
     */
    showVideo(complete?: (res: boolean) => void, key?: string) { complete && complete(true) }

    /**
     * 上报原生广告曝光
     * @param native_data
     */
    reportAdShow(native_data) {
        if (!native_data || native_data === undefined) return;

        native_data.ad && native_data.ad.reportAdShow({
            adId: native_data.adId
        })

        for (let i in this._native_data_cache) {
            if (this._native_data_cache[i].adId == native_data.adId) {
                this._native_data_cache[i].state = ad_native_state.show;
                break;
            }
        }
    }

    /**
     * 上报原生广告点击
     * @param native_data
     */
    reportAdClick(native_data) {
        if (!native_data || native_data === undefined) return;

        native_data.ad && native_data.ad.reportAdClick({
            adId: native_data.adId
        });

        this.remove_native_data(native_data);
    }

    /**
     * 获取原生广告数据
     * @param ad_type 广告类型ad_native_type
     * @returns native_data
     */
    getLocalNativeData(ad_type) {
        if (GameSys.adInfo.switchPool) {

            let cur_data_cache = [];

            for (let data of this._native_data_cache) {
                if (data.type == ad_type) {
                    cur_data_cache.push(data);
                }
            }

            if (this.check_native_data_list_is_reprot(cur_data_cache)) {
                return cur_data_cache.length > 0 ? cur_data_cache[YmtUtils.randomInt(0, cur_data_cache.length - 1)] : null;
            } else {
                //有数据没有上报过曝光  用最新数据
                return this.get_latest_native_data(cur_data_cache);
            }
        } else {
            if (this.cur_show_ad_index >= this._native_data_cache.length) {
                this.cur_show_ad_index = 0;
            }
            return this._native_data_cache[this.cur_show_ad_index++];
        }
    }

    getAllNativeData() {
        return this._native_data_cache;
    }

    removeNativeData(native_data) {
        this.remove_native_data(native_data);
    }

    /**
     * 原生大图
     * @param parent 
     * @param on_click 
     * @param on_show 
     * @param on_hide
     */
    showInterstitialNative(parent, on_click?: () => void, on_show?: () => void, on_hide?: () => void) { }
    /**隐藏原生大图 */
    hideInterstitialNative() {
        if (this.innerInter && this.innerInter !== undefined && cc.isValid(this.innerInter.node, true)) {
            this.innerInter.node.destroy();
        }
        this.innerInter = null;
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail deprecated
     * @returns 
     */
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 1, type?: string, key?: string, forceShow: boolean = false) { }
    /**隐藏原生插屏 */
    hideNativeInterstitial() {
        if (this.nativeInter && this.nativeInter !== undefined && cc.isValid(this.nativeInter.node, true)) {
            this.nativeInter.node.destroy();
        }
        this.nativeInter = null;
        this.nativeInterTimer && this.nativeInterTimer.clear();
        this.nativeInterTimer = null;
    }

    /**
     * 原生ICON
     * @param parent 
     */
    showNativeIcon(parent) { }
    /**隐藏原生ICON */
    hideNativeIcon() {
        if (this.nativeIcon && this.nativeIcon !== undefined && cc.isValid(this.nativeIcon.node, true)) {
            this.nativeIcon.node.destroy();
        }
        this.nativeIcon = null;
    }

    /**获取平台版本 */
    platformVersion() {
        if (YmtConstant.IS_OPPO_GAME) {
            return qg.getSystemInfoSync()['platformVersion'];
        } else if (YmtConstant.IS_VIVO_GAME) {
            return qg.getSystemInfoSync()['platformVersionCode'];
        }
        return 0;
    }

    /**
     * 展示添加桌面界面，界面已接入添加桌面功能（addDesktop）
     * @param on_succ 添加成功回调
     */
    showAddDesktop(on_close?: () => void, on_succ?: () => void) { }

    /**
     * 判断是否支持添加桌面
     * @param can_add 可以添加回调
     * @param has_add 已经添加回调
     * @param on_fail 失败回调
     */
    hasAddDesktop(can_add?: () => void, has_add?: () => void, on_fail?: () => void) { }

    /**
     * 创建桌面图标
     * @param on_succe 添加成功回调
     * @param on_fail 添加失败回调
     */
    addDesktop(on_succe?: () => void, on_fail?: () => void) { }

    /**
     * 提示框
     * @param desc 
     */
    createToast(desc) {
        if (this.toastView == null || !cc.isValid(this.toastView.node, true)) {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_toast', cc.Prefab));
            this.toastView = node.getComponent('ymt_ui_toast');
        }
        this.toastView && this.toastView.show && this.toastView.show(desc);
    }

    /**是否支持九宫格 */
    supportGameBox(): boolean {
        if (YmtConstant.IS_OPPO_GAME) {
            return this.platformVersion() >= 1076
        }
        return false;
    }

    /**
     * 展示九宫格
     * @param on_show 展示回调
     * @param on_hide 隐藏回调
     * @param show_toast 是否展示提示
     * @param image 按钮图片（vivo）
     * @param marginTop 距顶部距离（vivo）
     */
    showGamePortal(on_show?: () => void, on_hide?: () => void, show_toast = true, image = '', marginTop = 300) { }

    /**隐藏九宫格 */
    hideGamePortal() { }

    /**点击按钮触发原生横幅 */
    setClickInnerInterstitialBtn(cbk, rto?) {
        this._setClickNative(ad_native_type.interstitial, cbk, rto);
    }

    /**点击按钮触发原生Banner */
    setClickNativeBanner(cbk, rto?) {
        this._setClickNative(ad_native_type.banner, cbk, rto);
    }

    /**原生大图点击查看详情 */
    clickNativeInnerInterstitial() {
        if (this.isGameCd) {
            return console.log("%c[YMT_GAME]广告CD中", "color: #33ccff");
        }
        if (this.innerInter && cc.isValid(this.innerInter.node, true)) {
            this.innerInter.report_click();
        }
    }

    getNativeData() {
        let native_data = this.getLocalNativeData(ad_native_type.inner_interstitial);
        if (native_data == null) {
            native_data = this.getLocalNativeData(ad_native_type.banner);
        }
        if (native_data == null) {
            native_data = this.getLocalNativeData(ad_native_type.interstitial);
        }
        if (native_data == null) {
            native_data = this.getLocalNativeData(ad_native_type.native_icon);
        }

        return native_data;
    }

    /**
     * 主动点击跳转广告
     */
    clickNative(native_data = null) {
        if (this.isGameCd || GameSys.isShieldArea) {
            return console.log("%c[YMT_GAME]广告CD中", "color: #33ccff");
        }

        if (native_data == null) {
            native_data = this.getNativeData();
        }

        if (native_data) {
            this.reportAdShow(native_data);
            this.reportAdClick(native_data);
        }
    }

    isYLH(native_data) {
        if (native_data == null) return false;
        if (native_data.title.indexOf("优量汇") >= 0) {
            return true;
        }

        if (native_data.iconUrlList.indexOf("mob_ad") >= 0) {
            return true;
        }

        if (native_data.imgUrlList.indexOf("mob_ad") >= 0) {
            return true;
        }
        return false;
    }
    /**
     * 开始录屏(快手、头条)
     */
    recorderStart() { }

    /**
     * 结束录屏(快手、头条)
     */
    recorderStop(on_stop?: (ret) => void) { on_stop && on_stop(false) }

    /**
     * 判断录屏是否存在(快手、头条)
     */
    hasRecorderPath() {
        return this.videoPath != null;
    }

    /**
     * 录屏分享(快手、头条)
     * @param on_succ 
     * @param on_fail 
     */
    shareRecorder(on_succ?: () => void, on_fail?: () => void) { on_fail && on_fail(); }

    showRecorderLayer(on_succ?: () => void, on_fail?: () => void) { };

    /**
     * 平台登入
     * @param on_succ 
     * @param on_fail 
     */
    login(on_succ?: (res) => void, on_fail?: (err) => void) { }

    /**
     * 砸宝箱
     * @param on_show 展示回调
     * @param on_get 点击获取按钮
     */
    showClickBox(on_show?: () => void, on_get?: (is_double?: boolean) => void) {
        if (GameSys.adInfo.boxSwitch && !GameSys.isShenHe && !GameSys.isShieldArea) {
            if (!this.boxNode) {
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_click_box', cc.Prefab));
                this.boxNode = node.getComponent('hs_ui_click_box');
                this.boxNode.show(on_show, on_get);
            }
        } else {
            on_get && on_get(null);
        }
    }

    /**
     * 展示授权界面
     * @param on_agree      同意
     * @param on_refuse     拒绝
     */
    showAuthorize(on_agree?: () => void, on_refuse?: () => void) {
        if (!GameSys.isShowAuthorize && !GameSys.isShenHe && !GameSys.isShieldArea) {
            on_agree && on_agree();
        } else {
            cc.loader.loadRes('ymtView/AuthorizeView', cc.Prefab, (err, prefab: cc.Prefab) => {
                if (this.authorizeView == null || !cc.isValid(this.authorizeView.node, true)) {
                    let node = cc.instantiate(prefab);
                    this.authorizeView = node.getComponent('ymt_ui_authorize');
                    this.authorizeView.show(on_agree, on_refuse);
                }
            })
        }
    }

    /**
     * 展示授权界面
     * @param on_agree      同意
     * @param on_refuse     拒绝
     */
    showGameLoading() {
        console.log("显示GameLoading");
        cc.loader.loadRes('hs_ui/hs_ui_gameLoading', cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                return console.log('[YMT_GAME] hs_ui_gameLoading load error: ' + JSON.stringify(err));
            }
            if (this.gameLoadingView == null || !cc.isValid(this.gameLoadingView.node, true)) {
                let node = cc.instantiate(prefab);
                this.gameLoadingView = node.getComponent('hs_ui_gameLoading');
                this.gameLoadingView.show();
            }
        })
    }

    hideGameLoading() {
        console.log("hideGameLoading");
        if (this.gameLoadingView != null) {
            this.gameLoadingView.node.destroy();
        }
    }


    /**
     * 展示协议界面
     * @param type  类型
     */
    showPrivacy(type?: privacy_type) {
        cc.loader.loadRes('hs_ui/hs_ui_privacy', cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                return console.log('[YMT_GAME] hs_ui_privacy load error: ' + JSON.stringify(err));
            }
            if (this.privacyView == null || !cc.isValid(this.privacyView.node, true)) {
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/hs_ui_privacy', cc.Prefab));
                this.privacyView = node.getComponent('hs_ui_privacy');
                this.privacyView.show(type);
            }
        })
    }

    /**
     * 展示软著信息
     * @param company 著作权人
     * @param copyright 软著登记号
     */
    showCompany(company = null, copyright = null) {
        cc.loader.loadRes('hs_ui/hs_ui_company', cc.Prefab, (err, prefab: cc.Prefab) => {
            if (err) {
                return console.log('[YMT_GAME] hs_ui_company load error: ' + JSON.stringify(err));
            }
            if (this.companyView == null || !cc.isValid(this.companyView.node, true)) {
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/hs_ui_company', cc.Prefab));
                this.companyView = node.getComponent('hs_ui_company');
                this.companyView.show(company, copyright);
            }
        })
    }

    /**
     * 隐藏软著信息
     */
    hideCompany() {
        if (this.companyView && this.companyView !== undefined && cc.isValid(this.companyView.node, true)) {
            this.companyView.node.destroy();
        }
        this.companyView = null;
    }

    ////////////////////////////// 原生接口 //////////////////////////////

    /**展示插屏视频（小米原生） */
    showInterVideo(on_show?: () => void, on_close?: () => void) { on_close && on_close(); }

    /**销毁插屏视频（小米原生） */
    destroyInterVideo() { }

    showFeedAd(on_show?: () => void, on_close?: () => void) { on_close && on_close(); }

    destroyFeedAd() { }

    openUrl(url) { }
    /**
     * 开局自动跳转原生
     * @returns 
     */
    openGameAd() { }

    setRank(obj) {

    }

    async getRank(obj): Promise<any> {

    }

    async getAIUser(count: number = 10): Promise<any> {
        var path = "data/aiCfg"
        return new Promise<boolean>((resolve, reject) => {
            cc["resources"].load(path, (err, assets) => {
                if (err) {
                    console.log("加载失败:", path);
                    resolve(null);
                }

                if (assets instanceof cc.JsonAsset) {
                    resolve(assets.json);
                } else {
                    resolve(null);
                }

            });
        });
    }

    public async setUserCloudStorage(key: string, value: string) {

    }

    public async getUserCloudStorage(key: string): Promise<any> {

    }

    async saveRemoteData(data: string) {

    }

    async loadRemoteData(): Promise<any> {

    }

    async payItem(item): Promise<any> {

    }

    public hasPaySys(): boolean {
        return false;
    }

    public hasRankSys(): boolean {
        return false;
    }

    openPrivaceUrl(){
        this.onOpenUrl("https://doc-hosting.flycricket.io/relexing-bus-trip-privacy-policy/478efbff-2663-4b78-8e6d-59064506a5ad/privacy")
    }

    onOpenUrl(url:string){
        if(window["GooglePlay"]) {
            window["android"].OpenUrl(url);
        }
    }
}