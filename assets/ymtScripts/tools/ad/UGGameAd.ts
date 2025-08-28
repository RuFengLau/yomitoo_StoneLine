
import YmtLog from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class UGGameAd extends YmtAdManager {

    public hasPaySys(): boolean {
        return false;
    }

    public hasRankSys(): boolean {
        return false;
    }

    static getInstance(): UGGameAd {
        if (this.instance == null) {
            this.instance = new UGGameAd();
        }
        return this.instance;
    }

    private isLogin = false;

    //视频广告是否准备好
    private isVideoAdReady: boolean = true;

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        // 回调函数对象，所有方法统一在同个对象里配置 
        var self = this;
        const config = {
            pay: { // 支付响应 
                success(res) {
                    console.log("YMT pay success", res)
                }
            },
            role: { // 上传角色响应 
                success(res) {
                    console.log("YMT role success", res)
                }
            },
            loadAds: { // 加载广告响应 
                success(res) {
                    console.log("YMT loadAds success", res);
                    if (res.status == 1) {
                        // 广告加载成功
                        this.isVideoAdReady = true;
                    } else if (res.status == 2) {
                        // 广告加载失败
                        this.isVideoAdReady = false;
                    }
                }
            },
            showAds: { // 调起广告响应 
                success(res) {
                    console.log("YMT showAds success", res);
                    if (res.type == 1) {
                        //reward 玩家获得奖励
                        self.videocallback && self.videocallback(true);
                    } else if (res.type == 2) {
                        //ads 玩家点击广告
                    }
                }
            },
        }
        // @ts-ignore
        OG_H5_GAME_SDK.config(config)

        super.initAd();
        this.initBanner();
        this.initVideo();
    }

    //#region 激励视频
    initVideo() {
        this.loadVideoAd();
    }

    private loadVideoAd() {
        // @ts-ignore
        OG_H5_GAME_SDK.loadAds({ id: 'n66d18c9431333' })
    }

    showVideo(complete?: (res: boolean) => void, adPosition?: string) {
        this.videocallback = complete;
        if (this.isVideoAdReady == true) {
            // @ts-ignore
            OG_H5_GAME_SDK.showAds({})
        } else {
            this.videocallback && this.videocallback(false);
            this.loadVideoAd()
        }

    }

    destroyVideo() { }
    //#endregion

    login(on_succ?: (res) => void, on_fail?: (err) => void, forceLogin: boolean = false) {

    }

    //#region Banner AD
    initBanner() { }

    showBanner() { }

    hideBanner() { }

    destroyBanner() { }
    //#endregion



    //#endregion
    private canShowInterstitialAd = true;
    private interstitialAdDelay = 30000;
    private willShowBanner = false;
    private tmpShow = false;
    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void, type: string = "browse", key: string = "normal") {

    }

    destroyNormalInter() {
        // if (this.interAd) {
        //     this.interAd.destroy();
        // }
        // this.interAd = null;
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail 
     * @returns 
     */
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 0, type?: string, key?: string) {
        if (this.canShowInterstitialAd) {
            this.showInterstitial(on_show, on_hide, type, key);
        } else {
            YmtLog.e("未到间隔时间播放插屏")
        }
    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
        this.destroyNormalInter();


    }

    setRank(obj) {

    }

    async getRank(obj) {
    }


    private initRecorder() { }
    private recorderPause() { }
    private recorderResume() { }
    recorderStart() { }
    recorderStop(on_stop?: (ret) => void) { }
    shareRecorder(on_succ?: () => void, on_fail?: () => void) { }
    showGamePortal() { }
    showRecorderLayer(on_succ?: () => void, on_fail?: () => void) { }
    onRecoderStop: (ret) => void;

    async saveRemoteData(data: string) {
    }

    async loadRemoteData(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.isLogin == false) {
                resolve("")
                return;
            }
        });
    }
}
