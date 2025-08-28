
import GameSys from "../game_sys/GameSys";
import mTimer from "../mTimer";
import YmtUtils from "../YmtUtils";
import YmtAdManager from "./YmtAdManager";
import { ad_native_state, ad_native_type } from "./ymt_enum";

export default class MZAd extends YmtAdManager {
    private isSecond = false;

    static getInstance(): MZAd {
        if (this.instance == null) {
            this.instance = new MZAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;
        console.log('MZAd initad');

        super.initAd();

        this.initBanner();
        this.initNormalBanner();
        this.initVideo();
        this.initNativeAd();
    }

    /**
     * 初始化普通banner
     */
    private initNormalBanner() {
        if (!qg.createBannerAd || GameSys.adInfo.adunit_banner.length <= 0) return;

        let width = Math.min(GameSys.screenWidth, GameSys.screenHeight);
        let height = 200;
        
        this.bannerAd = qg.createBannerAd({
            adUnitId: GameSys.adInfo.adunit_banner[0],
            style: {
                left: (GameSys.screenWidth - width) / 2,
                top: GameSys.screenHeight - height,
                width: width,
                height: height
            },
            adIntervals: Math.min(GameSys.adInfo.bannerUpdateTime, 30)
        });

        this.bannerAd.onError(function(err) {
            console.log("%c[YMT_GAME]normal banner error: " + JSON.stringify(err), "color: red");
        }.bind(this));
    }

    /**
     * 展示普通banner
     */
    private showNormalBanner() {
        if (this.bannerAd == null) {
            this.initNormalBanner();
        }
        if (this.bannerAd == null) return;

        this.bannerAd.show();
        if (this.bannerTimer) this.bannerTimer.stop();
    }

    /**
     * 隐藏普通banner
     */
    private hideNormalBanner() {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }

    /**
     * 销毁普通banner
     */
    private destroyNormalBanner() {
        if (this.bannerAd && this.bannerAd.destroy) {
            this.bannerAd.destroy();
        }
    }

    initBanner() {
        super.initBanner();
    }

    showBanner() {
        this.hideBanner();

        let native_data = this.getLocalNativeData(ad_native_type.banner);

        if (GameSys.adInfo.bannerUpdateTime > 0) {
            if (this.bannerTimer == null) this.bannerTimer = new mTimer();
            this.bannerTimer && this.bannerTimer.once(()=>{
                this.showBanner();
            }, GameSys.adInfo.bannerUpdateTime * 1000);
        }
        
        if (native_data == null || native_data === undefined) {
            this.showNormalBanner();
        } else {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_banner', cc.Prefab));
            this.bannerNode = node.getComponent('hs_ui_banner');
            this.bannerNode.show(native_data, ()=>{

            }, ()=>{
                this.bannerTimer && this.bannerTimer.clear();
            });
            this.hideNormalBanner();
        }

    }

    hideBanner() {
        super.hideBanner();
        this.hideNormalBanner();
    }

    private initVideo() {
        if (!qg.createRewardedVideoAd || GameSys.adInfo.adunit_video == null) return;
        this.destroyVideo();
        this.videoAd = qg.createRewardedVideoAd({
            adUnitId: GameSys.adInfo.adunit_video
        });

        this.videoAd.onError(function (err) {
            console.log("%c[YMT_GAME]video error: " + JSON.stringify(err), "color: red");
            if (err.errCode == 1004) {
                this.createToast('暂无视频，请稍后再试');
            }
        }.bind(this));

        this.videoAd.onClose(function(res) {
            console.log(res);
            
            if (res && res.isEnded || res === undefined) {
                console.log("%c[YMT_GAME]video close succ", "color: #33ccff");
                this.videocallback && this.videocallback(true);
                this.isSecond = false;
            } else {
                
                console.log("%c[YMT_GAME]video closed: " + (this.isSecond?'second':'first'), "color: blue");
                if (!GameSys.isShenHe && !this.isSecond) {
                    this.isSecond = true;
                    this.showVideo(this.videocallback);
                } else {
                    this.isSecond = false;
                    this.videocallback && this.videocallback(false);
                }

            }
            if (this.videoAd.load) {
                this.videoAd.load();
            }
        }.bind(this));

        this.videoAd.onLoad(function(res) {
            console.log("%c[YMT_GAME]video onLoad: " + JSON.stringify(res), "color: #33ccff");
        });

        if (this.videoAd.load) {
            this.videoAd.load();
        }
    }

    showVideo(complete?: (res: boolean) => void) {

        if (this.videoAd == null) {
            this.initVideo();
        }
        
        if (this.videoAd == null) {
            complete && complete(true);
            return;
        }

        this.videocallback = complete;

        if (this.videoAd.load) {
            this.videoAd.load();
        }
        setTimeout(() => {
            this.videoAd.show();
        }, 500);

    }

    destroyVideo() {
        if (this.videoAd) {
            this.videoAd.offLoad();
            this.videoAd.offError();
            this.videoAd.offClose();

            if (this.videoAd.destroy) {
                this.videoAd.destroy();
            }
        }
        this.videoAd = null;
    }

    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_hide?: () => void) {
        if (!qg.createInterstitialAd || GameSys.adInfo.adunit_intestital == null) return on_hide && on_hide();;

        if (YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInteNormalRto) return on_hide && on_hide();

        this.destroyNormalInter();

        this.interAd = qg.createInterstitialAd({
            adUnitId: GameSys.adInfo.adunit_intestital
        })

        this.interAd.onError(function(err) {
            console.log("show inter err" + JSON.stringify(err));
        }.bind(this));

        this.interAd.onClose(function() {
            console.log('inter closed');
            
            on_hide && on_hide();
        }.bind(this))

        this.interAd.onLoad(function(res) {
            console.log('inter onLoad', res);

            this.hideBanner();
            
            on_show && on_show();
        }.bind(this))

        if (this.interAd.load) {
            this.interAd.load()
        }
        setTimeout(function() {
            this.interAd.show();
            this.interShowTime = this.get_time();
        }.bind(this), 500);
    }

    destroyNormalInter() {
        if (this.interAd) {
            this.videoAd.offLoad();
            this.videoAd.offError();
            if (this.interAd.destroy) {
                this.interAd.destroy();
            }
        }
        this.interAd = null;
    }

    private create_ad(ad_type) {
        return new Promise((resolve, reject) => {
            let posId = GameSys.adInfo.adunit_native[ad_type];

            console.log(ad_type, 'posId = ', posId);

            if (posId === undefined || posId == null || this.is_limit_native_length(ad_type) || !qg.createNativeAd) return resolve(null);

            setTimeout(() => {
                resolve(null);
            }, 1000);

            let nativeAd = qg.createNativeAd({
                adUnitId: posId
            })

            function on_load(res) {
                console.log("%c[YMT_GAME]native data load:", "color: #33ccff");
                if (res && res.adList) {
                    let data = res.adList.pop();
                    data.ad = nativeAd;
                    data.type = ad_type;
                    this.add_native_data(data);
                    console.log("%c[YMT_GAME]native data load succ:" + JSON.stringify(data), "color: #33ccff");
                    nativeAd.offLoad(on_load);
                }
            }
            nativeAd.onLoad(on_load.bind(this));

            function on_error(err) {
                console.log("%c[YMT_GAME]native data error: " + JSON.stringify(err), "color: red");
                nativeAd.offError(on_error);
            }
            nativeAd.onError(on_error.bind(this));

            nativeAd.load();
        })
    }

    /**原生广告 */
    initNativeAd() {
        // 拉取间隔1s
        this.create_ad(ad_native_type.banner).then(()=>{
            return this.create_ad(ad_native_type.native_icon);
        }).then(()=>{
            return this.create_ad(ad_native_type.inner_interstitial);
        }).then(()=>{
            return this.create_ad(ad_native_type.interstitial);
        }).then(()=>{
            this.loop_get_native_data();
        })
    }

    showInterstitialNative(parent, on_click?: () => void, on_show?: () => void, on_hide?: () => void) {

        this.hideInterstitialNative();

        let native_data = this.getLocalNativeData(ad_native_type.inner_interstitial);

        if (native_data == null || native_data === undefined) {
            this.showBanner();
            on_hide && on_hide();
        } else {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_inner_interstitial', cc.Prefab));
            this.innerInter = node.getComponent('hs_ui_inner_interstitial');
            this.innerInter && this.innerInter.show(parent, native_data, on_click, () => {
                this.hideBanner();
                on_show && on_show();
            }, on_hide);
        }
    }

    /**隐藏原生横幅 */
    hideInterstitialNative() {
        super.hideInterstitialNative();
    }

    /**
     * 原生插屏
     * @param on_show 成功展示回调 
     * @param on_hide 隐藏回调
     * @param on_fail 
     * @returns 
     */
    showNativeInterstitial(on_show?: () => void, on_hide?: () => void) {
        if (this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000) return on_hide && on_hide();

        setTimeout(() => {
            this.hideNativeInterstitial();

            let native_data = this.getLocalNativeData(ad_native_type.interstitial);
            if (native_data == null || native_data === undefined) {
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
        }, (GameSys.isShenHe || GameSys.isShieldArea) ? 0 : 1000)
    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
    }

    /**
     * 原生ICON
     * @param parent 
     */
    showNativeIcon(parent) {
        this.hideNativeIcon();
        // 特殊处理
        let type = ad_native_type.native_icon;
        let posId = GameSys.adInfo.adunit_native[type];
        if (posId == GameSys.adInfo.adunit_native[ad_native_type.inner_interstitial]) {
            type = ad_native_type.inner_interstitial;
        } else if (posId == GameSys.adInfo.adunit_native[ad_native_type.banner]) {
            type = ad_native_type.banner;
        }
        let native_data = this.getLocalNativeData(type);

        if (native_data == null || native_data === undefined) {
            return console.log("%c[YMT_GAME]showNativeIcon 暂无广告数据", "color: #33ccff");
        } else {
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_native_icon', cc.Prefab));
            this.nativeIcon = node.getComponent('hs_ui_native_icon');
            this.nativeIcon && this.nativeIcon.show(parent, native_data);
        }
    }

    /**隐藏原生ICON */
    hideNativeIcon() {
        super.hideNativeIcon();
    }

    /**
     * 每隔n秒加载一条数据，保持数组内各类型数据有5条
     */
    private loop_get_native_data() {
        let nextTimeLeft = this._native_data_cache.length < 5 ? YmtUtils.randomInt(15, 20) * 1000 : 30000;
        setTimeout(this.initNativeAd.bind(this), nextTimeLeft);
    }

    /**
     * 展示添加桌面界面
     * @param on_succ 
     */
    showAddDesktop(on_succ?: () => void) {
        if (this.addIconNode && this.addIconNode !== undefined && cc.isValid(this.addIconNode.node, true)) return;

        let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_add_icon', cc.Prefab));
        this.addIconNode = node.getComponent('hs_ui_add_icon');
        this.addIconNode && this.addIconNode.show(on_succ);
    }

    /**判断是否支持添加桌面 */
    hasAddDesktop(can_add?: () => void, has_add?: () => void, on_fail?: () => void) {
        if (qg.hasShortcutInstalled) {
            qg.hasShortcutInstalled({
                success: function(status) {
                    if (status) {
                        has_add && has_add();
                    } else {
                        can_add && can_add();
                    }
                }.bind(this),
                fail: function() {
                    on_fail && on_fail();
                }.bind(this)
            })
        } else {
            console.log('不支持添加桌面');
            on_fail && on_fail();
        }
    }

    /**创建桌面图标 */
    addDesktop(on_succe?: () => void, on_fail?: () => void) {
        if (qg.installShortcut) {
            qg.installShortcut({
                success: function() {
                    setTimeout(function() {
                        this.hasAddDesktop(function() {
                            on_fail && on_fail();
                        }.bind(this), function() {
                            on_succe && on_succe();
                        }.bind(this))
                    }.bind(this), 1000);
                }.bind(this),
                fail: function() {
                    on_fail && on_fail();
                }.bind(this)
            })
        } else {
            on_fail && on_fail();
        }
    }
}
