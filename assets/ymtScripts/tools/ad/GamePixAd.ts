import YmtLog from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class GamePixAd extends YmtAdManager {
    static getInstance(): GamePixAd {
        if (this.instance == null) {
            this.instance = new GamePixAd();
        }
        return this.instance;
    }

    private adPlaying = false;

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        console.log("initVideo===============");
        document.addEventListener("visibilitychange", ()=> {
            if (document.visibilityState === "visible") {
                // 页面被显示
                console.log("页面被显示了");
                if(this.adPlaying){
                    cc.audioEngine.pauseAll();
                    cc.director.pause();
                }
            } else {
                // 页面被隐藏
            }
        });
        super.initAd();
        this.initBanner();
        this.initVideo();
    }

    //#region Banner AD
    initBanner() { }

    showBanner() {

    }

    hideBanner() {

    }

    destroyBanner() { }
    //#endregion

    //#region 激励视频
    initVideo() {

    }

    private canShowRewardAd = true;
    private rewardAdDelay = 5000;
    private isReward = false;
    showVideo(complete?: (res: boolean) => void, adPosition?: string) {
        this.videocallback = complete;
        // @ts-ignore
        if (window.isReady == true) {
            this.adPlaying = true;
            cc.audioEngine.pauseAll();
            cc.director.pause();
// @ts-ignore
            GamePix.rewardAd().then((res)=> {
                this.adPlaying = false;
                if (res.success) {
                    cc.director.resume();
                    cc.audioEngine.resumeAll();
                    console.log("showReward success")
                    this.videocallback && this.videocallback(true);
                } else {
                    console.log('Error while open video ad');
                    cc.director.resume();
                    cc.audioEngine.resumeAll();
                    this.videocallback && this.videocallback(false);
                }
              });
        } else {
            this.adPlaying = false;
            console.log("reward ad is not ready")
            this.videocallback && this.videocallback(false);
        }
    }

    destroyVideo() { }
    //#endregion

    //#endregion
    private canShowInterstitialAd = true;
    private interstitialAdDelay = 30000;
    private willShowBanner = false;
    private tmpShow = false;
    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void, type?: string, key?: string) {
        cc.audioEngine.pauseAll();
        cc.director.pause();
        console.log("YMT_showInterstitial")
        this.adPlaying = true;
        // @ts-ignore
        GamePix.interstitialAd().then((res)=> {

            // IMPORTANT: *** RESUME YOUR GAME ***
            this.adPlaying = false;
            if (res.success) {
                cc.audioEngine.resumeAll();
                cc.director.resume();
                this.canShowInterstitialAd = false;
                setTimeout(() => {
                    console.log("YMT_可以播放插屏了!!!!!!!!!!!!!!!======")
                    this.canShowInterstitialAd = true;
                }, this.interstitialAdDelay)
            } else {
                // Log the error if you want
                cc.audioEngine.resumeAll();
                cc.director.resume();
            }
        });

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
            YmtLog.l("未到间隔时间播放插屏")
        }
    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
        this.destroyNormalInter();
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
}
