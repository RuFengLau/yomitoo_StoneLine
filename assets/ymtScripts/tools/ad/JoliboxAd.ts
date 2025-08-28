
import Log from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class JoliboxAd extends YmtAdManager {
    static getInstance(): JoliboxAd {
        if (this.instance == null) {
            this.instance = new JoliboxAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        super.initAd();
        console.log("Jolibox sdk = ================");
        this.initBanner();
        this.initVideo();
    }

    //#region Banner AD
    initBanner() {
        
    }

    showBanner() {

    }

    hideBanner() {

    }

    destroyBanner() { }
    //#endregion

    //#region 激励视频
    initVideo() {}

    private canShowRewardAd = true;
    private rewardAdDelay = 5000;
    private isGetReward = false;
    showVideo(complete?: (res: boolean) => void, adPosition?: string) {
        this.videocallback = complete;
        this.isGetReward = false;
        cc.director.pause();
        cc.audioEngine.pauseAll();
        
        // @ts-ignore
        window.joliboxSdk.ads.adBreak({
            type: "reward",
            beforeReward:(showAdFn)=> {
                this.isGetReward = false;
                showAdFn();
            },
            adDismissed: () => {
                this.isGetReward = false;
                console.log("adDismissed", this.isGetReward);
            },
            adViewed: () => {
                this.isGetReward = true;
                console.log("adViewed", this.isGetReward);
            },
            adBreakDone: (placementInfo) => {
                cc.director.resume();
                cc.audioEngine.resumeAll();
                console.log("adBreakDone", placementInfo);
                if(placementInfo.breakStatus == "viewed"){
                    this.videocallback && this.videocallback(true);
                }else{
                    this.videocallback && this.videocallback(false);
                }
                this.isGetReward = false;
            },
        });
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
        // @ts-ignore
        window.joliboxSdk.ads.adBreak({
            type: "browse",
            beforeAd: () => {
                console.log("beforeAd");
                cc.director.pause();
                cc.audioEngine.pauseAll();
            },
            afterAd: () => {
                console.log("afterAd");
                cc.director.resume();
                cc.audioEngine.resumeAll();
                this.canShowInterstitialAd = false;
                setTimeout(() => {
                    this.canShowInterstitialAd = true;
                }, this.interstitialAdDelay);
            },
            adBreakDone: (e) => {
                cc.director.resume();
                console.log("adBreakDone", e);
                cc.audioEngine.resumeAll();
            },
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
            Log.e("未到间隔时间播放插屏")
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
