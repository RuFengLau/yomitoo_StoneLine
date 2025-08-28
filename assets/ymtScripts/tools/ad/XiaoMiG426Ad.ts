
import YmtLog from "../YmtLog";
import YmtAdManager, { RECORDER_STATE } from "./YmtAdManager";


export default class XiaoMiG426Ad extends YmtAdManager {
    static getInstance(): XiaoMiG426Ad {
        if (this.instance == null) {
            this.instance = new XiaoMiG426Ad();
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
        if(window["xmG426"]){
            YmtLog.i("game-showbanner（显示banner）");
            window["android"].showBanner();
        }
    }

    hideBanner() {
        if(window["xmG426"]){
            YmtLog.i("game-closeBannerAd（关闭banner）");
            window["android"].hideBanner();
        }
    }

    destroyBanner() { }
    //#endregion

    //#region 激励视频
    initVideo() {
        window["showRewardVideoComplement"] = (resp)=>{
            //result 为 激励视频播放的结果 { "ret": 1, adId: "xxx", "platform": 'bqt' }
            YmtLog.i("showRewardVideoComplement callback=======================");
            if(this.videocallback == null){
                YmtLog.e("game - showRewardVideoComplement 调用错误，没有调用过激励视频广告")
                return;
            }

            if(resp.ret == 1){
                this.videocallback && this.videocallback(true);
            }else{
                this.videocallback && this.videocallback(false);
            }
            this.videocallback = null;
        }
    }

    private canShowRewardAd = true;
    private rewardAdDelay = 5000;
    showVideo(complete?: (res: boolean) => void, adPosition?:string) {
        if(window["xmG426"]) {
            this.videocallback = complete;
            window["android"].showRewardedVideo(adPosition);
        }
    }

    destroyVideo() { }
    //#endregion

    //#endregion
    private canShowInterstitialAd = true;
    private interstitialAdDelay = 20000;
    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void) {
        if(window["xmG426"]) {
            window["android"].showInsertAd();
        }
    }

    destroyNormalInter() {
        if (this.interAd) {
            this.interAd.destroy();
        }
        this.interAd = null;
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail 
     * @returns 
     */
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 0) {
        this.showInterstitial(on_show, on_hide);
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
