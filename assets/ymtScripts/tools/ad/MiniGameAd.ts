import YmtLog from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class MiniGameAd extends YmtAdManager {
    static getInstance(): MiniGameAd {
        if (this.instance == null) {
            this.instance = new MiniGameAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        super.initAd();
        this.initBanner();
        this.initVideo();
    }

    //#region Banner AD
    initBanner() { }

    showBanner() {
        // @ts-ignore
        let isBannerReady = MiniGameAds.isBannerReady();
        if (isBannerReady) {
            // @ts-ignore
            MiniGameAds.showBanner().then(() => {
                console.info("====> show banner success");
            }).catch(e => {
                console.error("====> show banner error: " + e.message);
            });
        } else {
            console.info("====> banner not ready");
        }
    }

    hideBanner() {
        // @ts-ignore
        MiniGameAds.hideBanner().then(() => {
            console.info("====> hide banner success");
        }).catch(e => {
            console.error("====> hide banner error: " + e.message);
        });
    }

    destroyBanner() { }
    //#endregion

    //#region 激励视频
    initVideo() {

    }

    private canShowRewardAd = true;
    private rewardAdDelay = 5000;

    showVideo(complete?: (res: boolean) => void, adPosition?: string) {
        this.videocallback = complete;

        // @ts-ignore
        let isRewardVideoReady = MiniGameAds.isRewardvideoReady();
        if (isRewardVideoReady) {
            cc.audioEngine.pauseAll();
            // @ts-ignore
            MiniGameAds.showRewardedVideo().then(() => {
                cc.audioEngine.resumeAll();
                this.videocallback && this.videocallback(true);
                console.info("====> show RewardedVideo success");
            }).catch(e => {
                cc.audioEngine.resumeAll();
                this.videocallback && this.videocallback(false);
                console.error("====> show RewardedVideo error: " + e.message);
            });
        } else {
            console.info("====> RewardedVideo not ready");
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
        // @ts-ignore
        let isInterstitialReady = MiniGameAds.isInterstitialReady();
        if (isInterstitialReady) {
            cc.audioEngine.pauseAll();
            // @ts-ignore
            MiniGameAds.showInterstitial().then(() => {
                cc.audioEngine.resumeAll();
                console.info("====> show interstitial success");
            }).catch(e => {
                cc.audioEngine.resumeAll();
                console.error("====> show interstitial error: " + e.message);
            });
        } else {
            console.info("====> interstitial not ready");
        }
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
