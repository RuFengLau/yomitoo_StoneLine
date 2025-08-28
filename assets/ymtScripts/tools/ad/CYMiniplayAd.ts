
import Log from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class CYMiniplayAd extends YmtAdManager {
    static getInstance(): CYMiniplayAd {
        if (this.instance == null) {
            this.instance = new CYMiniplayAd();
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
        if (window["CYMiniplay"]) {
            console.error("暂没banner实现: showBanner");
        }
    }

    hideBanner() {
        if (window["CYMiniplay"]) {
            console.error("暂没banner实现: hideBanner");
        }
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
        if (miniplay.isReady()) {
            cc.audioEngine.pauseAll();
            // @ts-ignore
            miniplay.showRewardAsync().then(() => {
                console.log("showReward success")
                this.videocallback && this.videocallback(true);
                cc.audioEngine.resumeAll();
            }).catch((e) => {
                //游戏可根据实际需要弹出提示页面
                console.log("showReward fail: " + e)
                this.videocallback && this.videocallback(false);
                cc.audioEngine.resumeAll();
            })
        } else {
            //游戏可根据实际需要弹出提示页面
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
        // @ts-ignore
        if (miniplay.isReady()) {
            cc.audioEngine.pauseAll();
            setTimeout(() => {
                this.tmpShow = this.willShowBanner;
                this.hideBanner();
                this.willShowBanner = this.tmpShow;
                console.error("插屏 beforeAd", this.willShowBanner)
            }, 200);


            // @ts-ignore
            miniplay.showInterstitialAsync().then(() => {
                console.log("showInterstitial success")
                cc.audioEngine.resumeAll();
                setTimeout(() => {
                    this.canShowInterstitialAd = true;
                }, this.interstitialAdDelay);
                console.error("插屏 afterAd", this.willShowBanner)
                if (this.willShowBanner) {
                    this.showBanner();
                }
            }).catch((e) => {
                //游戏可根据实际需要弹出提示页面
                console.log("showInterstitial fail: " + e)
                cc.audioEngine.resumeAll();

            })
        } else {
            //游戏可根据实际需要弹出提示页面
            console.log("interstitial ad is not ready")
        }




        //30秒一次
        Log.w("==播放插屏==", type, key);

        if (window["adsbygoogle"]) {
            window["adBreak"] && window["adBreak"]({
                type: "browse",
                name: key,
                beforeAd: () => {
                    this.canShowInterstitialAd = false;
                    cc.audioEngine.pauseAll();
                    setTimeout(() => {
                        this.tmpShow = this.willShowBanner;
                        this.hideBanner();
                        this.willShowBanner = this.tmpShow;
                        console.error("插屏 beforeAd", this.willShowBanner)
                    }, 200);
                },  // You may also want to mute the game's sound.
                afterAd: () => {
                    setTimeout(() => {
                        this.canShowInterstitialAd = true;
                    }, this.interstitialAdDelay);
                    cc.audioEngine.resumeAll();
                    console.error("插屏 afterAd", this.willShowBanner)
                    if (this.willShowBanner) {
                        this.showBanner();
                    }
                },    // resume the game flow.
            });
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
