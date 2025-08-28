import GameSys from "../game_sys/GameSys";
import mTimer from "../mTimer";
import YmtUtils from "../YmtUtils";
import YmtAdManager, { RECORDER_STATE } from "./YmtAdManager";
import { ad_native_type } from "./ymt_enum";

export default class WxAd extends YmtAdManager {
    shareRcorderLayer = null;
    recorderTime = 0;
    onRecoderStop: (ret) => void;

    static getInstance(): WxAd {
        if (this.instance == null) {
            this.instance = new WxAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;

        super.initAd();

        this.initBanner();
        this.initVideo();
        this.initRecorder();
    }

    initBanner() {
        if (GameSys.adInfo.adunit_banner.length == 0) return;

        if (this.bannerAd) this.destroyBanner();
        this.bannerAd = wx.createBannerAd({
            adUnitId: GameSys.adInfo.adunit_banner[0],
            adIntervals: Math.max(30, GameSys.adInfo.bannerUpdateTime),
            style: {
                left: 0,
                top: GameSys.screenHeight,
                width: GameSys.screenWidth / 2
            }
        });

        this.bannerAd.onLoad(() => {
            console.log(' banner 加载完成');
        })
        this.bannerAd.onError((err) => {
            console.log(' banner 广告错误' + JSON.stringify(err));
        })

        this.bannerAd.onResize(res => {
            this.bannerAd.style.top = GameSys.screenHeight - res.height
            this.bannerAd.style.left = (GameSys.screenWidth - res.width) / 2;
        });
    }

    showBanner() {
        console.log("是否可以显示Banner:", GameSys.canShowBanner);
        if(GameSys.canShowBanner == false) return;

        if (this.bannerAd == null) {
            this.initBanner();
        }
        if (this.bannerAd == null) return;

        this.bannerAd.show().then(() => {

        }).catch(res => {
            this.initBanner();
            this.bannerAd.show();
        });
    }

    hideBanner() {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }

    destroyBanner() {
        if (this.bannerAd) {
            this.bannerAd.destroy();
        }
        this.bannerAd = null;
    }

    initVideo() {
        if (GameSys.adInfo.adunit_video == null) return;
        console.log("视频id:", GameSys.adInfo.adunit_video);
        this.destroyVideo();

        this.videoAd = wx.createRewardedVideoAd({
            adUnitId: GameSys.adInfo.adunit_video
        });
        this.videoAd.load();

        this.videoAd.onLoad(res => {
            console.log('激励视频加载', res);
        });

        this.videoAd.onError(err => {
            console.log('激励视频-失败', err);
        })

        this.videoAd.onClose(res => {
            console.log('激励视频关闭');
            this.recorderResume();
            if (res && res.isEnded) {
                console.log('激励视频完成');
                this.videocallback && this.videocallback(true);
            } else {
                this.videocallback && this.videocallback(false);
            }

            this.videoAd.load();
        })
    }

    showVideo(complete?: (res: boolean) => void) {
        if (this.videoAd == null) this.initVideo();
        if (this.videoAd == null) return;
        this.videocallback = complete;
        this.videoAd.show().then(() => {
            // this.recorderPause();
        }).catch(err => {
            this.videoAd.load().then(res => {
                return this.videoAd.show()
            }).then(() => {
                // this.recorderPause();
            }).catch(() => {
                this.videoAd.load();
                wx.showModal({
                    title: "暂无广告",
                    content: "分享游戏获取奖励？",
                    confirmText: '分享',
                    success: res => {
                        if (res.confirm) {
                            GameSys.shareGame(ret => {
                                this.videocallback && this.videocallback(ret);
                            })
                        }
                    },
                    fail: res => {
                        wx.showToast({
                            title: '暂无广告，请稍后再试',
                            icon: 'none'
                        });
                        this.videocallback && this.videocallback(false);
                    }
                });
            });
        });
    }

    destroyVideo() {
        if (this.videoAd) {
            this.videoAd.destroy();
        }
        this.videoAd = null;
    }

    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void) {
        if (this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000) return;
        if (!wx.createInterstitialAd || GameSys.adInfo.adunit_intestital == null) return on_close && on_close();

        if (YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInteNormalRto) return on_close && on_close();

        this.destroyNormalInter();
        this.interAd = wx.createInterstitialAd({
            adUnitId: GameSys.adInfo.adunit_intestital
        })

        this.interAd && this.interAd.onLoad(() => {
            console.log("插屏广告加载");

            on_show && on_show();
        });

        this.interAd && this.interAd.onError(err => {
            console.log("show inter err" + JSON.stringify(err));
            this.destroyNormalInter();
        })

        this.interAd && this.interAd.onClose(() => {
            this.recorderResume();
            on_close && on_close();
            this.destroyNormalInter();
        })

        this.interAd && this.interAd.load().then(() => {
            this.interAd.show().then(() => {
                this.recorderPause();

                // this.hideBanner();

                this.interShowTime = this.get_time();
            });
        })
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
        if (this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000) return;
        if(GameSys.canShowInter == false){
            return;
        }
        console.log("调用显示普通插屏");
        this.hideNativeInterstitial();

        if (this.nativeInterTimer == null) {
            this.nativeInterTimer = new mTimer();
        }

        this.nativeInterTimer.once(() => {
            let native_data = this.getLocalNativeData(ad_native_type.inner_interstitial);
            if (native_data == null || native_data === undefined) {
                console.log("显示普通插屏");
                this.showInterstitial(on_show, on_hide);
            } else {
                if (YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInterRto) return on_hide && on_hide();
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_interstitial', cc.Prefab));
                this.nativeInter = node.getComponent('hs_ui_interstitial');
                this.nativeInter && this.nativeInter.show(native_data, () => {
                    this.interShowTime = this.get_time();
                    this.hideBanner();
                    on_show && on_show();
                }, on_hide);
            }
        }, (GameSys.isShenHe || GameSys.isShieldArea) ? 0 : delay_time * 1000)

    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
        this.destroyNormalInter();
    }

    private initRecorder() {

    }

    private recorderPause() {

    }

    private recorderResume() {

    }

    recorderStart() {

    }

    recorderStop(on_stop?: (ret) => void) {

    }

    shareRecorder(on_succ?: () => void, on_fail?: () => void) {

    }

    showGamePortal() {
        const systemInfo = wx.getSystemInfoSync();

        if (systemInfo.platform !== "ios") {

            let options = []
            for (let appid of GameSys.recommedList) {
                options.push({
                    appId: appid,
                    query: '',
                    extraData: {}
                });
            }
            // wx.showMoreGamesModal({
            //     appLaunchOptions: options,
            //     success(res) {
            //         console.log("success", res.errMsg);
            //     },
            //     fail(res) {
            //         console.log("fail", res.errMsg);
            //     },
            // });
        }
    }

    showRecorderLayer(on_succ?: () => void, on_fail?: () => void) {
        if (this.shareRcorderLayer == null || this.shareRcorderLayer === undefined || !cc.isValid(this.shareRcorderLayer.node, true)) {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_share_rcorder', cc.Prefab));
            this.shareRcorderLayer = node.getComponent('hs_ui_share_rcorder');
            this.shareRcorderLayer && this.shareRcorderLayer.show(on_succ, on_fail);
        }
    }
}
