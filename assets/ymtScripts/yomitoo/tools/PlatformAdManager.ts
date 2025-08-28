
import GameSys from "../../tools/game_sys/GameSys";

/**
 * 根据策划定制的逻辑广告类
 */
export class PlatformAdManager {
    private static _inst: PlatformAdManager;
    public static get inst(): PlatformAdManager {
        if (this._inst == null) {
            this._inst = new PlatformAdManager();
        }
        return this._inst;
    }

    public init() { }

    public nativeIconData: any;//缓存原生图标广告数据
    public nativeImageAdData: any;//缓存原生三图广告数据

    /**显示Banner */
    public showBanner(forceShow: boolean = false, key: string = "普通Banner") {
        console.warn("[YMT_GAME]showBanner")
        GameSys.Ad().showBanner();
    }

    /**销毁banner */
    public destroyBanner() {
        GameSys.Ad().hideBanner();
    }

    public hideBanner() {
        console.warn("[YMT_GAME]hideBanner")
        GameSys.Ad().hideBanner();
    }

    /**显示原生广告 */
    public showNativeAd() {
        // GameSys.Ad().showNativeInterstitial(() => {
        //     console.log("[yomitoo] showNativeInterstitial onShow")
        // }, () => {
        //     console.log("[yomitoo] showNativeInterstitial onHide")
        // })
    }

    /**销毁原生广告 */
    public destroyNativeAd() {
        // Platforms.inst.onDestroyNativeAd();
    }

    public showInsertAdCount = 0;

    /**根据渠道自动选择
     * qq和头条只有插屏广告
     */
    public showNativeOrInsertAd(type: string = "browse", key: string = "normal", forceShow: boolean = false) {
        console.warn("[YMT_GAME]showNativeOrInsertAd")
        GameSys.Ad().showNativeInterstitial(() => { }, () => { }, 1, type, key, forceShow);
    }

    /**销毁原生图标 */
    public destroyNativeIconAd(key?: string) {

    }

    public sendEvent(obj: { key: string, data: any }) {

    }

    public share(callback: (success: boolean) => void) {

    }

    /**
     * 观看视频
     * @param callback 
     */
    public showRewardedVideo(callback: (success: boolean) => void, key: string = "普通视频", rewardTip: string = "获取奖励成功", useToast: boolean = true) {
        console.warn("[YMT_GAME]showRewardedVideo");
        GameSys.Ad().showVideo(res => {
            if (res) {
                // 视频观看完成

                // this.showToast(LocalizeMgr.inst.toLocalize(rewardTip));
                callback && callback(true);

            } else {
                // 视频未观看完，或其他异常
                console.log("观看视频失败================")
                // this.showToast(LocalizeMgr.inst.toLocalize("未观看完广告无法获取奖励"));
                callback && callback(false);
            }
            // SoundMgr.inst.playMusic(Math.random() < 0.5 ? "bgm" : "bgm2");
        }, key);
    }

    /**
     * 显示Toast
     * @param content 
     */
    public showToast(content: string) {
        if (content != "") GameSys.Ad().createToast(content);
    }
}