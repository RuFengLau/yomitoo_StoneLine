
import YmtLog from "../YmtLog";
import YmtAdManager, { RECORDER_STATE } from "./YmtAdManager";


export default class VidMateH5Ad extends YmtAdManager {
    static getInstance(): VidMateH5Ad {
        if (this.instance == null) {
            this.instance = new VidMateH5Ad();
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
        // if (window["vidmateGame"]) {
        //     window["showBanner"]();
        //     this.willShowBanner = true;
        // }
    }

    hideBanner() {
        // if (window["vidmateGame"]) {
        //     window["hideBanner"]();
        //     this.willShowBanner = false;
        // }
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
        window.xSDK.showRewardedAd({
            type: 'reward',
            name: adPosition,
            beforeAd: () => {
                console.log('beforeAd');
                cc.audioEngine.pauseAll();
                cc.director.pause();
            },
            afterAd: () => {
                console.log('afterAd');
                cc.audioEngine.resumeAll();
                cc.director.resume();
            },
            beforeReward: showAdFn => {
                console.log('beforeReward');
                showAdFn();
            },
            adDismissed: () => {
                this.videocallback && this.videocallback(false);
            },
            adViewed: () => {
                this.videocallback && this.videocallback(true);
            },
            adBreakDone: placementInfo => {
                setTimeout(() => {
                    console.log('adBreakDone', placementInfo.breakStatus);
                    cc.audioEngine.resumeAll();
                    cc.director.resume();
                }, 200);
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


    private interSlot: any;
    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void, type?: string, key?: string) {
        //30秒一次
        YmtLog.w("==播放插屏==", type, key, window["vidmateGame"]);
        var ctype = type ? type : "browse";
        var ckey = key ? key : "normal";

        // @ts-ignore
        window.xSDK.showInterstitialAd({
            type: ctype,
            name: ckey,
            beforeAd: () => {
                console.log('Inters beforeAd');
                cc.audioEngine.pauseAll();
                cc.director.pause();

                setTimeout(() => {
                    this.tmpShow = this.willShowBanner;
                    this.hideBanner();
                    this.willShowBanner = this.tmpShow;
                    console.log("插屏 beforeAd", this.willShowBanner)
                }, 200);
            },
            afterAd: () => {
                console.log('Inters afterAd');
                cc.audioEngine.resumeAll();
                cc.director.resume();
                setTimeout(() => {
                    this.canShowInterstitialAd = true;
                }, this.interstitialAdDelay);

                console.log("插屏 afterAd", this.willShowBanner)
                if (this.willShowBanner) {
                    this.showBanner();
                }
            },
            adBreakDone: placementInfo => {
                console.log('Inters adBreakDone', JSON.stringify(placementInfo, null, 2));
                setTimeout(() => {
                    console.log('adBreakDone', placementInfo.breakStatus);
                    cc.audioEngine.resumeAll();
                    cc.director.resume();
                }, 200);
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
            YmtLog.e("未到间隔时间播放插屏")
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
