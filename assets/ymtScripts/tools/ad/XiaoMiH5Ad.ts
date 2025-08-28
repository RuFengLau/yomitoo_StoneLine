
import YmtLog from "../YmtLog";
import YmtAdManager, { RECORDER_STATE } from "./YmtAdManager";


export default class XiaoMiH5Ad extends YmtAdManager {
    static getInstance(): XiaoMiH5Ad {
        if (this.instance == null) {
            this.instance = new XiaoMiH5Ad();
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
        if (window["mih5game"]) {
            window["showBanner"]();
            this.willShowBanner = true;
        }
    }

    hideBanner() {
        if (window["mih5game"]) {
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
        if (window["mih5game"]) {
            let isReward = false;
            this.videocallback = complete;
            YmtLog.w("==点击播放视频==", adPosition);
           
            window["adBreak"] && window["adBreak"]({
                type: 'reward',
                name: adPosition,
                beforeAd: () => {
                    
                    cc.audioEngine.pauseAll()
                    cc.director.pause();
                },  // You may also want to mute the game's sound.
                afterAd: () => {
                    YmtLog.l("激励视频播放结束");//关闭，观看完成都会走这里
                    if(isReward){
                        this.videocallback && this.videocallback(true);
                    }
                    
                },    // resume the game flow.
                beforeReward: (showAdFn) => {
                    showAdFn && showAdFn();
                },
                adDismissed: () => {
                    YmtLog.e("中途关闭广告");
                    this.videocallback && this.videocallback(false);
                },
                adViewed: () => {
                    YmtLog.l("玩家完整看完广告");//google建议设置状态码，在afterAd中处理奖励逻辑
                    isReward = true;
                },
                adBreakDone: (e) => {
                    cc.director.resume();
                    YmtLog.e("视频广告展示错误:", e);
                    cc.audioEngine.resumeAll();
                    if(e.breakStatus != "viewed"){
                        this.videocallback && this.videocallback(false);
                    }
                    
                    //Always called (if provided) even if an ad didn't show（始终调用，即使广告展示失败了
                }
            });
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
    showInterstitial(on_show?: () => void, on_close?: () => void, type?:string, key?:string) {
        //30秒一次
        YmtLog.w("==播放插屏==", type, key);
        var ctype = type?type:"browse";
        var ckey = key?key:"normal";
        if (window["mih5game"]) {
            window["adBreak"] && window["adBreak"]({
                type: ctype,
                name: ckey,
                beforeAd: () => {
                    this.canShowInterstitialAd = false;
                    cc.audioEngine.pauseAll()
                    // cc.director.pause();
                    setTimeout(() => {
                       
                        this.tmpShow = this.willShowBanner;
                        this.hideBanner();
                        this.willShowBanner = this.tmpShow;
                        console.log("插屏 beforeAd", this.willShowBanner)
                    }, 200);
                },  // You may also want to mute the game's sound.
                afterAd: () => {
                    cc.director.resume();
                    setTimeout(()=>{
                        this.canShowInterstitialAd = true;
                    }, this.interstitialAdDelay);
                    
                    cc.audioEngine.resumeAll();
                    console.log("插屏 afterAd", this.willShowBanner)
                    if(this.willShowBanner){
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
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 0, type?:string, key?:string) {
        if(this.canShowInterstitialAd){
            this.showInterstitial(on_show, on_hide, type, key);
        }else{
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
