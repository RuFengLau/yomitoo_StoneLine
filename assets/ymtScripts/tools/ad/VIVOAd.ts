import AudioUtil from "../audio/AudioUtil";
import { EVENT_TYPE } from "../enum/Enum";
import GameSys from "../game_sys/GameSys";
import YmtLog from "../YmtLog";
import mTimer from "../mTimer";
import YmtUtils from "../YmtUtils";
import YmtAdManager from "./YmtAdManager";
import { ad_native_type } from "./ymt_enum";


export default class VIVOAd extends YmtAdManager {
    customBanner = null;
    customInter = null;
    portalAdTimer: mTimer = null;
    interMask: cc.Node;

    static getInstance(): VIVOAd {
        if (this.instance == null) {
            this.instance = new VIVOAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;

        super.initAd();
        
        YmtUtils.loadRes('hs_ui/hs_ui_inter_mask', cc.Prefab);

        this.initBanner();
        this.initNormalBanner();
        this.initVideo();
        this.initNativeAd();

        this.initGamePortal();
    }

    /**
     * 初始化普通banner
     */
    initNormalBanner() {
        if (this.platformVersion() < 1031 || GameSys.adInfo.adunit_banner.length <= 0) return;
        if(GameSys.canShowBanner == false) return;
        this.destroyNormalBanner();

        this.bannerAd = qg.createBannerAd({
            adUnitId: GameSys.adInfo.adunit_banner[0],
            style: {},
            adIntervals: Math.max(GameSys.adInfo.bannerUpdateTime, 30)
        })

        this.bannerAd.onError(err => {
            console.log('[YMT_GAME]normal banner error: ', JSON.stringify(err));

            if (err && err.errCode == 30002) {
                this.destroyNormalBanner();
            }
        });

        this.bannerAd.onClose(() => {
            this.hideBanner();
        })
    }

    /**
     * 展示普通banner
     */
    showNormalBanner() {
        if (this.bannerAd == null) {
            this.initNormalBanner();
        }
        if (this.bannerAd == null) return;

        this.bannerAd.show().then(()=>{
            console.log("%c[YMT_GAME]normal banner show success", "color: #33ccff");
            // if (this.bannerTimer) this.bannerTimer.stop();
        });
        this.bannerAd.onClose(() => {
            if (this.bannerDelayTimer) {
                this.bannerDelayTimer.clear();
                this.bannerDelayTimer = null;
            }
        })
    }

    /**
     * 隐藏普通banner
     */
    hideNormalBanner() {
        if (this.bannerAd) {
            this.bannerAd.hide();
        }
    }

    /**
     * 销毁普通banner
     */
    destroyNormalBanner() {
        if (this.bannerAd) {
            this.bannerAd.destroy();
        }
    }

    initBanner() {
        super.initBanner();
    }

    showBanner() {
        if(GameSys.canShowBanner == false) return;
        this.hideBanner();

        this.bannerDelayTimer = mTimer.once(()=>{
            let native_data = this.getLocalNativeData(ad_native_type.banner);

            if (GameSys.adInfo.bannerUpdateTime > 0 && !GameSys.isShenHe && !GameSys.isShieldArea) {
                if (this.bannerTimer == null) this.bannerTimer = new mTimer();
	            this.bannerTimer && this.bannerTimer.once(()=>{
                    this.showBanner();
                }, GameSys.adInfo.bannerUpdateTime * 1000);
            }

            if (native_data == null || native_data === undefined) {
                // this.showNormalBanner();
                this.showCustomBanner();
            } else {
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_banner', cc.Prefab));
                this.bannerNode = node.getComponent('hs_ui_banner');
	            this.bannerNode.show(native_data, ()=>{

	            }, ()=>{
                    this.bannerTimer && this.bannerTimer.clear();
                });
            }
        }, 1000);
    }

    hideBanner() {
        super.hideBanner();
        this.hideNormalBanner();
        this.destroyCustomBanner();
    }

    initVideo() {
        if (this.platformVersion() < 1041 || GameSys.adInfo.adunit_video == null) return;
        this.destroyVideo();
        this.videoAd = qg.createRewardedVideoAd({
            posId: GameSys.adInfo.adunit_video
        });

        this.videoAd.onLoad(function () {
            console.log("激励视频加载成功");
        });

        this.videoAd.onError(function (err) {
            YmtUtils.emit(EVENT_TYPE.AD_ERROR, 0);
        });

        this.videoAd.onClose(res => {
            AudioUtil.setMusicVolume(1);
            AudioUtil.setSoundVolume(1);
            if (res && res.isEnded) {
                console.log("正常播放结束，可以下发游戏奖励");
                this.videocallback && this.videocallback(true);
            } else {
                this.videocallback && this.videocallback(false);
            }
            this.videoAd.load()
        });
        this.videoAd.load()
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

        this.videoAd.show().then(() => {
            AudioUtil.setMusicVolume(0);
            AudioUtil.setSoundVolume(0);
        }).catch(()=>{
            this.createToast('暂无视频，请稍后再试');
            this.videoAd.load()
        })

    }

    destroyVideo() {
        if (this.videoAd) {
            this.videoAd.offLoad();
            this.videoAd.offError();
            this.videoAd.offClose();
        }
        this.videoAd = null;
    }

    /**普通插屏 */
    showInterstitial(on_show?: () => void, on_close?: () => void) {
        if(GameSys.canShowInter == false){
            return;
        }
        if (this.customInter && this.customInter.isShow()) return;0
        if (this.platformVersion() < 1031 || GameSys.adInfo.adunit_intestital == null) return on_close && on_close();
        if (YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInteNormalRto) return on_close && on_close();
        this.hideNativeInterstitial();
        this.hideBanner();
        this.interAd = qg.createInterstitialAd({
            posId: GameSys.adInfo.adunit_intestital
        })

        this.interAd.onLoad(() => {
            // console.log("插屏广告加载");
            on_show && on_show();
        });

        this.interAd.onClose(() => {
            on_close && on_close();
            this.showBanner();//部分游戏不能这样处理
            this.destroyNormalInter();
        })

        this.interAd.load().then(res => {
            return this.interAd.show()
        }).then(() => {
            this.interAd.isShow = true;
            this.destroyCustomInter();
            this.hideBanner();
            this.interShowTime = this.get_time();
        }).catch(err=>{
            console.log('普通插屏展示失败' + JSON.stringify(err));
            on_close && on_close();
            this.showBanner();//部分游戏不能这样处理
            this.destroyNormalInter();
        });
    }

    destroyNormalInter() {
        if (this.interAd) {
            this.interAd.offLoad();
            this.interAd.offError();
        }
        this.interAd = null;
    }

    create_ad(ad_type) {
        return new Promise((resolve, reject) => {
            let posId = GameSys.adInfo.adunit_native[ad_type];

            console.log(ad_type, 'posId = ', posId);

            if (posId == '' || posId === undefined || posId == null || this.is_limit_native_length(ad_type) || this.platformVersion() < 1053) return resolve(null);

            let nativeAd = qg.createNativeAd({
                posId: posId
            })

            let on_load = (res) => {
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
            nativeAd.onLoad(on_load);

            let on_error = (err) => {
                console.log("%c[YMT_GAME]native data error: " + JSON.stringify(err), "color: red");
                nativeAd.offError(on_error);
            }
            nativeAd.onError(on_error);

            nativeAd.load();

            setTimeout(resolve, 1500);
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

    // /**
    //  * 原生插屏
    //  * @param on_show 成功展示回调 
    //  * @param on_hide 隐藏回调
    //  * @param on_fail 
    //  * @returns 
    //  */
    // showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 1, rto=0) {
    //     this.showInterstitial(on_show, on_hide);
    //     return;
    //     if (
    //         this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000 || 
    //         // GameSys.isShenHe || 
    //         // GameSys.isShieldArea || 
    //         // !GameSys.adInfo.cpzs || 
    //         GameSys.canShowInter == false || 
    //         YmtUtils.randomInt(1, 100) > rto
    //     ) return on_hide && on_hide();

    //     if (this.nativeInterTimer) {
    //         this.nativeInterTimer.clear();
    //     }

    //     this.nativeInterTimer = mTimer.once(() => {


    //         // this.hideNativeInterstitial();
    //         this.hideBanner();

    //         // let native_data = this.getLocalNativeData(ad_native_type.interstitial);
    //         // if (native_data == null || native_data === undefined) {
    //             this.showInterstitial(on_show, on_hide);

    //             // this.showCustomInter(on_show, on_hide);
    //         // } else {
    //         //     if (Utils.randomInt(1, 100) > GameSys.adInfo.showInterRto) return on_hide && on_hide();
    //         //     let node = cc.instantiate(Utils.getRes('hs_ui/ui_interstitial', cc.Prefab));
    //         //     this.nativeInter = node.getComponent('hs_ui_interstitial');
    //         //     this.nativeInter && this.nativeInter.show(native_data, () => {
    //         //         this.interShowTime = this.get_time();
    //         //         this.hideBanner();
    //         //         on_show && on_show();
    //         //     }, on_hide);
    //         // }
    //     }, (GameSys.isShenHe || GameSys.isShieldArea) ? 0 : delay_time * 1000)
    // }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();

        this.destroyNormalInter();
        this.destroyCustomInter();
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
            type = ad_native_type.interstitial;
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
     * 盒子9宫格
     */
     initGamePortal(on_show?: () => void, on_hide?: () => void, show_toast = true, image = '', marginTop = 300) {
        if (qg.createBoxPortalAd) {
            if (GameSys.adInfo.adunit_portal == null || GameSys.adInfo.adunit_portal == '') {
                console.log('adunit_portal == null')
                return;
            }
            this.portalAd = qg.createBoxPortalAd({
                posId: GameSys.adInfo.adunit_portal,
                image: image,
                marginTop: marginTop
            })

            // this.portalAd.onError(err => {
            //     console.log("盒子九宫格广告加载失败", JSON.stringify(err))
            // })
            this.portalAd.onShow(ret => {
                on_show && on_show();
                this.hideBanner();
            });
            this.portalAd.onClose(() => {
                on_hide && on_hide();
                if (this.portalAd.isDestroyed) {
                    return
                }
                // 当九宫格关闭之后，再次展示Icon
                this.portalAd.show()
            })
        } else {
            console.log('暂不支持互推盒子相关 API')
        }

    }

    showGamePortal(on_show?: () => void, on_hide?: () => void, show_toast = true, image = '', marginTop = 500) {
        if (qg.createBoxPortalAd && GameSys.adInfo.adunit_portal) {
            if (this.portalAd == null) {
                this.initGamePortal(on_show, on_hide, show_toast, image, marginTop);
            }

            if (this.portalAd == null) {
                return on_hide && on_hide();
            }

            // 广告数据加载成功后展示
            this.portalAd.show().then(() => {
                console.log('portalAd button show success')

                if (this.portalAdTimer) {
                    this.portalAdTimer.clear();
                    this.portalAdTimer = null;
                }
                this.portalAdTimer = null;
            }).catch(err => {
                this.hideGamePortal();
                if (err && (err.code == 30002 || err.code == 40218)) {

                    if (this.portalAdTimer == null) {
                        this.portalAdTimer = new mTimer();
                    }
                    this.portalAdTimer.once(() => {
                        this.showGamePortal(on_show, on_hide, false, image, marginTop);
                    }, 1e4)
                } else {
                    on_hide && on_hide();
                    show_toast && this.createToast('努力加载中,请稍后再试~');
                }
            })
        } else {
            on_hide && on_hide();
            console.warn('暂不支持互推盒子相关 API')
        }
    }

    hideGamePortal() {
        if (this.portalAd) {
            this.portalAd.hide();
        }

        if (this.portalAdTimer) {
            this.portalAdTimer.clear();
        }
        this.portalAdTimer = null;
    }

    destroyGamePortal() {
        if (!this.portalAd) return;

        if (this.portalAdTimer) {
            this.portalAdTimer.clear();
        }
        this.portalAdTimer = null;

        this.portalAd.destroy();
        this.portalAd = null;
    }
    
    /**
     * 展示添加桌面界面
     * @param on_succ 
     */
    showAddDesktop(on_succ?: () => void, on_close?: () => void) {
        if (cc.winSize.width >= cc.winSize.height) {
            this.addDesktop(on_succ, on_close);
            return;
        }
        if (this.addIconNode && this.addIconNode !== undefined && cc.isValid(this.addIconNode.node, true)) return;

        let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_add_icon', cc.Prefab));
        this.addIconNode = node.getComponent('hs_ui_add_icon');
        this.addIconNode && this.addIconNode.show(on_succ);
    }

    /**判断是否支持添加桌面 */
    hasAddDesktop(can_add?: () => void, has_add?: () => void, on_fail?: () => void) {
        if (this.platformVersion() >= 1041) {
            qg.hasShortcutInstalled({
                success: status => {
                    if (status) {
                        has_add && has_add();
                    } else {
                        can_add && can_add();
                    }
                },
                fail: () => {
                    GameSys.Ad().createToast('操作频繁，请稍后再试~~');
                    on_fail && on_fail();
                }
            })
        } else {
            console.log('不支持添加桌面');
            on_fail && on_fail();
        }
    }

    /**创建桌面图标 */
    addDesktop(on_succe?: () => void, on_fail?: () => void) {
        if (this.get_time() - this.addDeskTime <= 120 * 1000) {
            this.createToast('操作太频繁, 请稍后再试~')
            return;
        }
        if (qg.installShortcut) {
            this.addDeskTime = this.get_time();
            qg.installShortcut({
                success: () => {
                    setTimeout(() => {
                        this.hasAddDesktop(() => {
                            on_fail && on_fail();
                        }, () => {
                            on_succe && on_succe();
                        })
                    }, 1000);
                },
                fail: () => {
                    on_fail && on_fail();
                }
            })
        } else {
            on_fail && on_fail();
        }
    }
    
    login(on_succ?: (res) => void, on_fail?: (err) => void) {
        if (this.platformVersion() >= 1040) {
            qg.login({
                success: res=>{
                    on_succ && on_succ(res);
                },
                fail: (err)=>{
                    on_fail && on_fail(err);
                }
            })
        }
    }

    /**
     * 原生模板
     */
    private showCustomBanner() {
        // if(GameSys.isShenHe || GameSys.isShieldArea) return;
        let ad_id = GameSys.adInfo.adunit_custom_banner;
        if (ad_id == null || ad_id === undefined || !qg.createCustomAd) {
            return this.showNormalBanner();
        }

        this.hideBanner();

        this.customBanner = qg.createCustomAd({
            adUnitId: ad_id,
            style: {}
        });

        this.customBanner.show().then(() => {

        }).catch(err => {
            console.log('[YMT_GAME] custom banner show error: ' + JSON.stringify(err));
            this.destroyCustomBanner();
            this.showNormalBanner();
        })
        let on_hide = () => {
            this.customBanner && this.customBanner.offClose(on_hide)
            if (this.bannerDelayTimer) {
                this.bannerDelayTimer.clear();
                this.bannerDelayTimer = null;
            }
            this.destroyCustomBanner();

            this.hideBanner();
        }
        this.customBanner.onClose(on_hide)
    }

    private destroyCustomBanner() {
        if (this.customBanner) {
            this.customBanner.destroy();
        }
        this.customBanner = null;
    }

    private showCustomInter(on_show?: () => void, on_close?: () => void) {
        let ad_id = GameSys.adInfo.adunit_custom_inter;

        if (ad_id == null || ad_id === undefined) {
            return this.showInterstitial(on_show, on_close);
        }

        if (this.interAd && this.interAd.isShow) return;

        this.hideNativeInterstitial();

        const sysInfo = qg.getSystemInfoSync();
        let top = (GameSys.screenHeight - 525 * sysInfo.pixelRatio / 2) / 2;
        let left = 0;
        if (sysInfo.screenWidth > sysInfo.screenHeight) {
            top = (GameSys.screenHeight - 525 * sysInfo.pixelRatio / 2) / 2;
            left = (GameSys.screenWidth - 720 * sysInfo.pixelRatio / 2) / 2;
        }
        this.customInter = qg.createCustomAd({
            adUnitId: ad_id,
            style: {
                top: top,
                left: left
            }
        });
        this.customInter.show().then(() => {
            YmtUtils.loadRes('hs_ui/hs_ui_inter_mask', cc.Prefab).then((asset: cc.Prefab) => {
                if (this.customInter == null || this.interMask && cc.isValid(this.interMask, true)) return;
                this.interMask = cc.instantiate(asset);
                this.interMask.zIndex = cc.macro.MAX_ZINDEX;
                cc.director.getScene().addChild(this.interMask);
                cc.game.addPersistRootNode(this.interMask);
            })
            this.destroyNormalInter();
            on_show && on_show();
        });
        let on_hide = () => {
            YmtLog.i('============customInter.onClose')
            on_close && on_close();
            this.customInter && this.customInter.offClose(on_hide);
            this.customInter && this.customInter.offError(on_error);
            this.destroyCustomInter();
        };
        this.customInter.onClose(on_hide);
        let on_error = err => {
            YmtLog.i('============customInter.onError')
            console.log('[YMT_GAME] custom inter error: ' + JSON.stringify(err));
            this.customInter && this.customInter.offClose(on_hide);
            this.customInter && this.customInter.offError(on_error);
            this.destroyCustomInter();
            this.showInterstitial(on_show, on_close);
        };
        this.customInter.onError(on_error);

    }

    private destroyCustomInter() {
        YmtLog.i('============customInter.destroyCustomInter')
        if (this.customInter) {
            this.customInter.destroy();
        }
        this.customInter = null;

        if (this.interMask) {
            this.interMask.destroy();
            cc.game.removePersistRootNode(this.interMask);
        }
        this.interMask = null;
    }
}
