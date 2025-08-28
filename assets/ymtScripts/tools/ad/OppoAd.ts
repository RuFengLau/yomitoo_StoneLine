import GameSys from "../game_sys/GameSys";
import YmtLog from "../YmtLog";
import mTimer from "../mTimer";
import YmtUserData from "../YmtUserData";
import YmtUtils from "../YmtUtils";
import YmtAdManager from "./YmtAdManager";
import { ad_native_type } from "./ymt_enum";

export default class OppoAd extends YmtAdManager {
    customBanner = null;
    customInter = null;
    gameBannerAd: any;
    private customeInterMask:cc.Node = null;
    private _game_portal_hide: () => void;

    static getInstance(): OppoAd {
        if (this.instance == null) {
            this.instance = new OppoAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;

        this.getDeviceId();

        this.getGameInfo();

        if (GameSys.isShenHe) {
            GameSys.adInfo.bannerDelay = 60;
        }

        this.isGameCd = GameSys.adInfo.bannerDelay > 0;

        super.initAd();

        this._gameCd();
        this.initBanner();
        this.initNormalBanner();
        this.initVideo();
        this.initNativeAd();

        this.initGamePortal();

        // ocpx 上传
        mTimer.loop(()=>{
            GameSys.uploadOcpx('gtime');
        }, 6e4)
    }

    private getDeviceId() {
        if (qg.getDeviceId) {
            qg.getDeviceId({
                success: data => {
                    console.log(`handling success: ${data}`);
                    if (data && data.deviceId && YmtUserData.deviceid != data.deviceId) {
                        YmtUserData.deviceid = data.deviceId;
                    }
                    console.log(YmtUserData.deviceid);
                },
                fail: (data, code) => {
                    console.log(`handling fail, code = ${code}`);
                },
            });
        }
    }

    private getGameInfo() {

        if (qg.getManifestInfo) {
            qg.getManifestInfo({
                success: res => {
                    const ret = JSON.parse(res.manifest);
                    GameSys.gameInfo = {
                        package: ret.package,
                        name: ret.name,
                        versionName: ret.versionName,
                        versionCode: ret.versionCode
                    };
                    YmtLog.i(JSON.stringify(GameSys.gameInfo));
                }
            })
        }
    }

    private _gameCd() {
        let timer = new mTimer();
        timer.once(()=>{
            this.isGameCd = false;
            if (this.isNeedShowBanner) {
                this.showBanner();
            }
        }, GameSys.adInfo.bannerDelay * 1000);
    }

    /**
     * 初始化普通banner
     */
    initNormalBanner() {
        if (this.platformVersion() < 1051 || GameSys.adInfo.adunit_banner.length <= 0) return;

        this.destroyNormalBanner();

        this.bannerAd = qg.createBannerAd({
            adUnitId: GameSys.adInfo.adunit_banner[0],
            style: {}
        })

        this.bannerAd.onError(err=>{
            console.log('[YMT_GAME]normal banner error: ', JSON.stringify(err));
        });
    }

    /**
     * 展示普通banner
     */
    showNormalBanner() {
        if (this.bannerAd == null) {
            this.initNormalBanner();
        }
        if (this.bannerAd == null) return;

        this.bannerAd.show().then(()=>{
            console.log("%c[YMT_GAME]normal banner show success", "color: #33ccff");

            if (this.bannerTimer) this.bannerTimer.stop();
        });
    }

    /**
     * 隐藏普通banner
     */
    hideNormalBanner() {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }

    /**
     * 销毁普通banner
     */
    destroyNormalBanner() {
        if (this.bannerAd) {
            this.bannerAd.destroy();
        }
    }

    initBanner() {
        super.initBanner();
    }

    showBanner(top = null) {
        if (this.isGameCd) {
            this.isNeedShowBanner = true;
            return console.log("%c[YMT_GAME]showBanner 广告CD中", "color: #33ccff");
        }

        if(GameSys.canShowBanner == false) return;

        this.hideBanner();
        // this.showNormalBanner()
        // return;
        // this.bannerDelayTimer = mTimer.once(()=>{
        
	        if (GameSys.adInfo.bannerUpdateTime > 0) {
	            if (this.bannerTimer == null) this.bannerTimer = new mTimer();
	            this.bannerTimer && this.bannerTimer.once(()=>{
	                this.showBanner(top);
	            }, GameSys.adInfo.bannerUpdateTime * 1000);
	        }

            if (GameSys.isShenHe || GameSys.isShieldArea || GameSys.adInfo.showCustomBanner) {
	            this.showCustomBanner(top);
            } else {
                let native_data = this.getLocalNativeData(ad_native_type.banner);

                if (native_data == null || native_data === undefined) {
                    this.showCustomBanner(top);
                } else {
                    let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_banner', cc.Prefab));
                    this.bannerNode = node.getComponent('hs_ui_banner');
                    this.bannerNode.show(native_data, ()=>{
    
                    }, ()=>{
                        this.bannerTimer && this.bannerTimer.clear();
                    });
                    this.hideNormalBanner();
                }
                
            }
        // }, 1000);

    }

    hideBanner() {
        super.hideBanner();
        this.isNeedShowBanner = false;
        this.destroyCustomBanner();
        this.hideNormalBanner();

    }

    initVideo() {
        if (GameSys.adInfo.adunit_video == null) return;
        this.destroyVideo();
        this.videoAd = qg.createRewardedVideoAd({
            posId: GameSys.adInfo.adunit_video
        });

        this.videoAd.onLoad(function () {
            console.log("%c[YMT_GAME]video load succ", "color: #33ccff");
        });

        this.videoAd.onError(function (err) {
            console.log("%c[YMT_GAME]video error: " + JSON.stringify(err), "color: red");
        });

        this.videoAd.onClose(res => {
            if (res && res.isEnded) {
                this.videocallback && this.videocallback(true);
            } else {
                this.videocallback && this.videocallback(false);
            }
            this.videoAd.load();
        });
        this.videoAd.load();
    }

    showVideo(complete?: (res: boolean) => void) {

        if (this.videoAd == null) {
            this.initVideo();
        }

        if (this.videoAd == null) {
            complete && complete(true);
            return;
        }

        this.videocallback = complete;

        
        this.videoAd.show().then(() => {

        }).catch(() => {
            this.createToast('暂无视频，请稍后再试');
        })

    }

    destroyVideo() {
        if (this.videoAd) {
            this.videoAd.offLoad();
            this.videoAd.offError();
            this.videoAd.offClose();
        }
        this.videoAd = null;
    }

    create_ad(ad_type) {
        return new Promise((resolve, reject) => {
            let posId = GameSys.adInfo.adunit_native[ad_type];
    
            console.log(ad_type, 'posId = ', posId);
    
            if (posId == '' || posId === undefined || posId == null || this.is_limit_native_length(ad_type) || this.platformVersion() < 1051) return resolve(null);

            if (GameSys.isShenHe || GameSys.isShieldArea
                || GameSys.adInfo.showCustomBanner && ad_type == ad_native_type.banner
                || GameSys.adInfo.showCustomInner && ad_type == ad_native_type.inner_interstitial) return resolve(null);

                
            let nativeAd = qg.createNativeAd({
                posId: posId
            })

            let on_load = (res) => {
                console.log("%c[YMT_GAME]native data load:", "color: #33ccff");
                if (res && res.adList) {
                    let data = res.adList.pop();
                    data.ad = nativeAd;
                    data.type = ad_type;
                    this.add_native_data(data);
                    console.log("%c[YMT_GAME]native data load succ:" + JSON.stringify(data), "color: #33ccff");
                    nativeAd.offLoad(on_load);
                }
            }
            nativeAd.onLoad(on_load);

            let on_error = (err) => {
                console.log("%c[YMT_GAME]native data error: " + JSON.stringify(err), "color: red");
                nativeAd.offError(on_error);
            }
            nativeAd.onError(on_error);

            nativeAd.load();
            
            setTimeout(resolve, 500);
        });
    }

    /**原生广告 */
    initNativeAd() {
        // 拉取间隔1s
        this.create_ad(ad_native_type.banner).then(()=>{
            return this.create_ad(ad_native_type.native_icon);
        }).then(()=>{
            return this.create_ad(ad_native_type.inner_interstitial);
        }).then(()=>{
            return this.create_ad(ad_native_type.interstitial);
        }).then(()=>{
            this.loop_get_native_data();
        })
    }

    showInterstitialNative(parent, on_click?: () => void, on_show?: () => void, on_hide?: () => void) {
        if(GameSys.canShowInter == false){
            return;
        }
        if (this.isGameCd) {
            on_hide && on_hide();
            return console.log("%c[YMT_GAME]广告CD中", "color: #33ccff");
        }
        this.hideInterstitialNative();

        let native_data = this.getLocalNativeData(ad_native_type.inner_interstitial);

        if (native_data == null || native_data === undefined) {
            on_hide && on_hide();
        } else {

            this.isNeedShowBanner = false;
            
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_inner_interstitial', cc.Prefab));
            this.innerInter = node.getComponent('hs_ui_inner_interstitial');
            this.innerInter && this.innerInter.show(parent, native_data, on_click, () => {
                this.hideBanner();
                on_show && on_show();
            }, on_hide);
        }
    }

    /**隐藏原生横幅 */
    hideInterstitialNative() {
        super.hideInterstitialNative();
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail 
     * @returns 
     */
     showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 1) {
        if (this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000 || YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInterRto
        || GameSys.isShenHe || GameSys.isShieldArea || !GameSys.adInfo.cpzs) return on_hide && on_hide();
        this.nativeInterTimer = mTimer.once(()=>{
            
            this.hideNativeInterstitial();
            this.hideBanner();
            
            let ad_id = GameSys.adInfo.adunit_custom_inter;
            if (ad_id == null || ad_id === undefined || ad_id == '') {
                let native_data = this.getLocalNativeData(ad_native_type.interstitial);
                if (native_data == null || native_data === undefined) {
                    on_hide && on_hide();
                } else {
                    let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_interstitial', cc.Prefab));
                    this.nativeInter = node.getComponent('hs_ui_interstitial');
                    this.nativeInter && this.nativeInter.show(native_data, () => {
                        this.interShowTime = this.get_time();
                        this.hideBanner();
                        on_show && on_show();
                    }, on_hide);
                }
            } else {
                this.showCustomInter(on_show, on_hide);
            }
        }, (GameSys.isShenHe || GameSys.isShieldArea) ? 0 : delay_time * 1000)
    }
    
    hideNativeInterstitial() {
        super.hideNativeInterstitial();

        this.destroyCustomInter();
    }

    /**
     * 原生ICON
     * @param parent 
     */
    showNativeIcon(parent) {
        if (this.isGameCd) {
            return console.log("%c[YMT_GAME]showNativeIcon 广告CD中", "color: #33ccff");
        }


        // 特殊处理
        let type = ad_native_type.native_icon;
        let posId = GameSys.adInfo.adunit_native[type];
        if (posId == GameSys.adInfo.adunit_native[ad_native_type.inner_interstitial]) {
            type = ad_native_type.inner_interstitial;
        } else if (posId == GameSys.adInfo.adunit_native[ad_native_type.banner]) {
            type = ad_native_type.banner;
        }
        let native_data = this.getLocalNativeData(type);

        if (native_data == null || native_data === undefined) {
            return console.log("%c[YMT_GAME]showNativeIcon 暂无广告数据", "color: #33ccff");
        } else {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_native_icon', cc.Prefab));
            this.nativeIcon = node.getComponent('hs_ui_native_icon');
            this.nativeIcon && this.nativeIcon.show(parent, native_data);
        }
    }

    /**隐藏原生ICON */
    hideNativeIcon() {
        super.hideNativeIcon();
    }

    /**
     * 每隔n秒加载一条数据，保持数组内各类型数据有5条
     */
    private loop_get_native_data() {
        let nextTimeLeft = this._native_data_cache.length < 5 ? YmtUtils.randomInt(15, 20) * 1000 : 30000;
        setTimeout(this.initNativeAd.bind(this), nextTimeLeft);
    }

    /**
     * 盒子9宫格
     */
    initGamePortal() {
        if (this.supportGameBox() && GameSys.adInfo.adunit_portal && qg.createGamePortalAd) {
            this.destroyGamePortal()

            this.portalAd = qg.createGamePortalAd({
                adUnitId: GameSys.adInfo.adunit_portal
            });

            this.portalAd.onLoad(function () {
                console.log("%c[YMT_GAME]game portal ad load succ", "color: #33ccff");
            })

            this.portalAd.onClose(() => {
                this._game_portal_hide && this._game_portal_hide();
            })

            this.portalAd.onError(function (err) {
                console.log("%c[YMT_GAME]game portal ad error: " + JSON.stringify(err), "color: red");
            })

        }
    }

    showGamePortal(on_show?: () => void, on_hide?: () => void, show_toast = true) {
        if (!this.supportGameBox()) return on_hide && on_hide();

        if (!this.portalAd) {
            this.initGamePortal();
        }
        if (!this.portalAd) {
            on_hide && on_hide();
            show_toast && this.createToast('努力加载中,请稍后再试~');
            return
        }
        this._game_portal_hide = on_hide;
        this.portalAd.load().then(() => {
            this.portalAd.show().then(() => {
                console.log('show success')
                this.hideBanner();
                on_show && on_show();
            }).catch(error => {
                console.log('showGamePortal show error:', error)
                on_hide && on_hide();
                show_toast && this.createToast('努力加载中,请稍后再试~');
            })
        }).catch(error => {
            console.log('showGamePortal load error:', error)
            on_hide && on_hide();
            show_toast && this.createToast('努力加载中,请稍后再试~');
        });
    }

    destroyGamePortal() {
        if (!this.portalAd) return;

        this.portalAd.destroy();
        this.portalAd = null;
    }

    /**
    * 盒子横幅
    */
    initGameBanner() {
        if (qg.getSystemInfoSync()['platformVersion'] >= 1076 && GameSys.adInfo.adunit_game_banner && qg.createGameBannerAd) {
            this.destroyGameBanner();

            this.gameBannerAd = qg.createGameBannerAd({
                adUnitId: GameSys.adInfo.adunit_game_banner
            });

            this.gameBannerAd.onLoad(function () {
                console.log('盒子横幅广告加载成功')
            })

            this.gameBannerAd.onError(function (err) {
                console.log(err)
            })

        } else {
        }
    }

    showGameBanner() {
        if (!this.gameBannerAd) {
            this.initGameBanner();
        }
        if (!this.gameBannerAd) return;

        this.gameBannerAd.show().then(function () {
            console.log('show success')
        }).catch(function (error) {
            console.log('show fail with:' + error.errCode + ',' + error.errMsg)
        })
    }

    hideGameBanner() {
        if (!this.gameBannerAd) return;

        this.gameBannerAd.hide();
    }

    destroyGameBanner() {
        if (!this.gameBannerAd) return;

        this.gameBannerAd.destroy();
        this.gameBannerAd = null;
    }

    /**
     * 展示添加桌面界面
     * @param on_hide 
     * @param on_succ 
     */
    showAddDesktop(on_close?: () => void, on_succ?: () => void) {
    	if (cc.winSize.width >= cc.winSize.height) {
            this.addDesktop(on_succ, on_close);
            return;
        }
        if (this.addIconNode && this.addIconNode !== undefined && cc.isValid(this.addIconNode.node)) return;

        let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_add_icon', cc.Prefab));
        this.addIconNode = node.getComponent('hs_ui_add_icon');
        this.addIconNode && this.addIconNode.show(on_close, on_succ);
    }

    /**判断是否支持添加桌面 */
    hasAddDesktop(can_add?: () => void, has_add?: () => void, on_fail?: () => void) {
        if (this.platformVersion() >= 1044 && qg.hasShortcutInstalled) {
            qg.hasShortcutInstalled({
                success: res => {
                    // 判断图标未存在时，创建图标
                    console.log("%c[YMT_GAME] hasShortcutInstalled " + (res? 'has add':'can add'), "color: #33ccff");
                    if (res == false) {
                        can_add && can_add();
                    } else {
                        has_add && has_add();
                    }
                },
                fail: err => {
                    GameSys.Ad().createToast('操作频繁，请稍后再试~~')
                    console.log(`[YMT_GAME] hasShortcutInstalled error: ${JSON.stringify(err)}`);
                    on_fail && on_fail();
                },
                complete: function () { }
            })
        } else {
            on_fail && on_fail();
        }
    }

    /**创建桌面图标 */
    addDesktop(on_succ?: () => void, on_fail?: () => void) {
        if (this.platformVersion() >= 1040 && qg.installShortcut) {
            qg.installShortcut({
                success: () => {
                    setTimeout(() => {
                        this.hasAddDesktop(() => {
                            on_fail && on_fail();
                        }, () => {
                            on_succ && on_succ();
                        })
                    }, 1000);
                },
                fail: err => {
                    GameSys.Ad().createToast('操作频繁，请稍后再试~~');
                    console.log(`[YMT_GAME] installShortcut error: ${JSON.stringify(err)}`);
                    on_fail && on_fail();
                }
            })
        } else {
            on_fail && on_fail();
        }
    }

    login(on_succ?: (res) => void, on_fail?: (err) => void) {
        if (this.platformVersion() >= 1040 && qg.login) {
            qg.login({
                success: res=>{
                    on_succ && on_succ(res);
                },
                fail: (err)=>{
                    on_fail && on_fail(err);
                }
            })
        }
    }

    reportAdClick(native_data: any): void {
        super.reportAdClick(native_data);
        // ocpx 上传
        GameSys.uploadOcpx('gads');
    }
    
    /**
     * 开局自动跳转原生
     * @returns 
     */
    openGameAd() {
        if (!GameSys.isShenHe && !GameSys.isShieldArea && GameSys.adInfo.showBanner > 0) {
            mTimer.once(()=>{
                this.clickNative();
            }, GameSys.adInfo.showBanner * 1000);
        }
    }

    /**
     * 原生模板
     */
     private showCustomBanner(top) {
        let ad_id = GameSys.adInfo.adunit_custom_banner;
        if (ad_id == null || ad_id === undefined || ad_id == '' || ad_id.length == 0  || !qg.createCustomAd) {
            return this.showNormalBanner();
        }
        
        let style: any = {};
        if (top != null) {
            style.top = top * GameSys.scale;
        }  

        const {screenWidth, screenHeight} = qg.getSystemInfoSync();

        const h = screenHeight - style.top;
        YmtLog.i('screenHeight - top = ', h)
        if (h < 318) {
            ad_id = ad_id[0];
            style = {}
        } else {
            ad_id = ad_id[1] || GameSys.adInfo.adunit_custom_inter;
            style.width = screenWidth * 0.6;
        }
        YmtLog.i('showCustomBanner = ', ad_id)
        if (ad_id == null || ad_id === undefined || ad_id == '') {
            return this.showNormalBanner();
        }

        this.destroyCustomBanner();

        
        this.customBanner = qg.createCustomAd({
            adUnitId: ad_id,
            style:style
        });

        this.customBanner.show().then(()=>{
            YmtLog.i('showCustomBanner succ ')

        }).catch(err=>{
            YmtLog.e('custom banner show error: ' + JSON.stringify(err));
            this.destroyCustomBanner();
            this.showNormalBanner();
        })
        let on_hide = ()=>{
            this.customBanner.offHide(on_hide)
            this.destroyCustomBanner();
        }
        this.customBanner.onHide(on_hide)
    }

    private destroyCustomBanner() {
        if (this.customBanner) {
            this.customBanner.destroy();
        }
        this.customBanner = null;
    }

    private showCustomInter(on_show?: () => void, on_close?: () => void) {
        let ad_id = GameSys.adInfo.adunit_custom_inter;
        
        if (ad_id == null || ad_id === undefined || ad_id == '' || !qg.createCustomAd) {
            return on_close && on_close();
        }
        this.destroyCustomInter();
        
        const {screenWidth, screenHeight} = qg.getSystemInfoSync();
        
        YmtLog.i(screenWidth, screenHeight)
        const width = Math.min(screenWidth, 720) * 0.9;
        this.customInter = qg.createCustomAd({
            adUnitId: ad_id,
            style:{
                top: (screenHeight - width * 0.8) / 2,
                left: (screenWidth - width) / 2,
                width: width
            }
        });

        this.customInter.show().then(()=>{

            cc.resources.load('hs_ui/hs_ui_inter_mask', cc.Prefab, (error, asset: cc.Prefab)=>{
                if (error) {
                    return;
                }
                this.customeInterMask = cc.instantiate(asset);
                this.customeInterMask.zIndex = cc.macro.MAX_ZINDEX;
                this.customeInterMask.parent = cc.director.getScene();
                
            })
            this.hideBanner();
            on_show && on_show();
        });
        let on_hide = ()=>{
            YmtLog.i('custom inter hide ');
            on_close && on_close();
            this.customInter.offHide(on_hide)
            this.destroyCustomInter();
        }
        this.customInter.onHide(on_hide)
        let on_error = err => {
            console.log('[YMT_GAME] custom inter error: ' + JSON.stringify(err));
            this.customInter.offError(on_error);
            this.destroyCustomInter();
            return on_close && on_close();
        };
        this.customInter.onError(on_error);

    }

    private destroyCustomInter() {
        if (this.customInter) {
            this.customInter.destroy();
        }
        this.customInter = null;

        if (this.customeInterMask) {
            this.customeInterMask.destroy();
        }
        this.customeInterMask = null;
    }
}
