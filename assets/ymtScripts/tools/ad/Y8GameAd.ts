
import YmtLog from "../YmtLog";
import YmtAdManager from "./YmtAdManager";

export default class Y8GameAd extends YmtAdManager {

    public hasPaySys(): boolean {
        return false;
    }

    public hasRankSys(): boolean {
        return false;
    }

    static getInstance(): Y8GameAd {
        if (this.instance == null) {
            this.instance = new Y8GameAd();
        }
        return this.instance;
    }

    private isLogin = false;
    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        super.initAd();
        this.initBanner();
        this.initVideo();
    }

    login(on_succ?: (res) => void, on_fail?: (err) => void, forceLogin: boolean = false) {
        console.warn("YMT_Y8GameAd","login")
        // @ts-ignore
        miniplay.login((res) => {
            this.isLogin = true;
            on_succ && on_succ(res);
            console.warn("YMT_Y8GameAd","login success")
        }, forceLogin);
    }

    //#region Banner AD
    initBanner() { }

    showBanner() {
        if (window["showBanner"]) {
            window["showBanner"]();
            this.willShowBanner = true;
        }
    }

    hideBanner() {
        if (window["hideBanner"]) {
            window["hideBanner"]();
            this.willShowBanner = false;
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

            cc.audioEngine.pauseAll()
            cc.director.pause();
            // @ts-ignore
            miniplay.showRewardAsync().then(() => {
                cc.director.resume();
                console.log("showReward success")
                complete && complete(true);
                cc.audioEngine.resumeAll()
            }).catch((e) => {
                cc.director.resume();
                //游戏可根据实际需要弹出提示页面
                console.log("showReward fail: " + e)
                complete && complete(false);
                cc.audioEngine.resumeAll()
            })
        } else {
            //游戏可根据实际需要弹出提示页面
            console.log("reward ad is not ready")
            complete && complete(false);
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
    showInterstitial(on_show?: () => void, on_close?: () => void, type: string = "browse", key: string = "normal") {
        if (this.canShowInterstitialAd == false) {
            console.log("[YMT_AD]30秒内不能播放插屏======")
            return;
        }
        // @ts-ignore
        if (miniplay.isReady()) {
            cc.audioEngine.pauseAll()
                // cc.director.pause();
            setTimeout(() => {
                
                this.tmpShow = this.willShowBanner;
                this.hideBanner();
                this.willShowBanner = this.tmpShow;
            }, 200);


            // @ts-ignore
            miniplay.showInterstitialAsync(type, key).then(() => {
                cc.director.resume();
                this.canShowInterstitialAd = false;
                console.log("showInterstitial success")
                setTimeout(() => {
                    this.canShowInterstitialAd = true;
                }, this.interstitialAdDelay);
                if (this.willShowBanner) {
                    this.showBanner();
                }
                cc.audioEngine.resumeAll()
            }).catch((e) => {
                cc.director.resume();
                //游戏可根据实际需要弹出提示页面
                console.log("showInterstitial fail: " + e)
                cc.audioEngine.resumeAll()
            })
        } else {
            //游戏可根据实际需要弹出提示页面
            console.log("interstitial ad is not ready")
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
            YmtLog.e("未到间隔时间播放插屏")
        }
    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
        this.destroyNormalInter();


    }

    setRank(obj) {
        
        if (this.isLogin == false) { return }
        obj.rankName = obj.rankName?obj.rankName:"世界排行";
        console.warn("setRank:", obj)
        // @ts-ignore
        miniplay.setRank(obj);
    }

    async getRank(obj) {
       
        obj.rankName = obj.rankName?obj.rankName:"世界排行";
        console.error("get ranks:", obj);
        // @ts-ignore
        miniplay.getRank(obj);
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
        if (this.isLogin == false) { return }
        // @ts-ignore
        miniplay.save("slcs_y8", data);
    }

    async loadRemoteData(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (this.isLogin == false) {
                resolve("")
                return;
            }
            // @ts-ignore
            miniplay.load("slcs_y8", (res) => {
                resolve(res);
            });
        });
    }
}
