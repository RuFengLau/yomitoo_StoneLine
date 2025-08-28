import AudioUtil from "../audio/AudioUtil";
import GameSys from "../game_sys/GameSys";
import mTimer from "../mTimer";
import YmtUtils from "../YmtUtils";
import YmtAdManager from "./YmtAdManager";
import { ad_native_type, PLATFORM, privacy_type } from "./ymt_enum";

const enum RET_TYPE {
    ERROR = -1,
    SUCC = 1,
    SHOW,
    CLOSE
}

export default class MiApkAd extends YmtAdManager {
    private closeInterTime = 0;
    private closeNativeTime = 0;
    private closeBannerTime = 0;

    private showLimmitTime = 0;

    static getInstance(): MiApkAd {
        if (this.instance == null) {
            this.instance = new MiApkAd();
        }
        return this.instance;
    }

    initAd() {
        if (this.isInitAd) return;
        this.isInitAd = true;

        if (GameSys.isShenHe || GameSys.isShieldArea) {
            GameSys.adInfo.bannerDelay = 30;
            GameSys.adInfo.miAdGapLimt = 30;
            this.closeBannerTime = this.closeInterTime = this.get_time();
        }

        this.isGameCd = GameSys.adInfo.bannerDelay > 0;

        super.initAd();

        this._gameCd();

        this.showLimmitTime = GameSys.adInfo.miAdGapLimt * 1000;

        this.initBanner();
        this.initNativeAd();
    }

    private _gameCd() {
        let timer = new mTimer();
        timer.once(()=>{
            this.isGameCd = false;
            if (this.isNeedShowBanner) {
                this.showBanner();
            }
        }, GameSys.adInfo.bannerDelay * 1000);
    }

    getNativePlatfom() {
        return YmtUtils.callMethod('getNativePlatfom');
    }

    showNormalBanner() {
        this.hideBanner();
        YmtUtils.callMethod('showNormalBanner', null, ret=>{
            if (ret == RET_TYPE.SHOW) {
                console.log('[YMT_GAME]普通banner展示成功');
            } else if (ret == RET_TYPE.CLOSE) {
                console.log('[YMT_GAME]普通banner关闭');
                this.closeBannerTime = this.get_time();
            } else if (ret == RET_TYPE.ERROR) {
                console.log('[YMT_GAME]普通banner异常，展示原生');
            }
        }); 
    }

    hideNormalBanner() {
        YmtUtils.callMethod('hideNormalBanner'); 
    }
    
    destroyNormalBanner() {
        this.hideNormalBanner();
    }

    initBanner() {
        super.initBanner();
    }

    showBanner() {
        if (this.isGameCd) {
            this.isNeedShowBanner = true;
            return console.log("%c[YMT_GAME]showBanner 广告CD中", "color: #33ccff");
        }
        let is_native_banner_limit = this.get_time() - this.closeBannerTime < this.showLimmitTime;
        if (is_native_banner_limit) return console.log("%c[YMT_GAME]showBanner 广告CD中", "color: #33ccff");

        this.hideBanner();

        this.bannerDelayTimer = mTimer.once(()=>{
            if (this.bannerTimer == null) this.bannerTimer = new mTimer();
            if (GameSys.adInfo.bannerUpdateTime > 0) {
                let self = this
                this.bannerTimer.once(()=>{
                    console.log('[YMT_GAME]this.bannerTimer.once');
                    
                    self.showBanner();
                }, GameSys.adInfo.bannerUpdateTime * 1000);
            }
            
        
            let native_data = this.getLocalNativeData(ad_native_type.banner);
                
            if (native_data == null || native_data === undefined) {
                this.showNormalBanner();
            } else {
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_banner', cc.Prefab));
                this.bannerNode = node.getComponent('hs_ui_banner');
                this.bannerNode.show(native_data, ()=>{
                    
                }, ()=>{
                    this.closeBannerTime = this.get_time();
                });
            }
        }, 1000);
    }

    hideBanner() {
        super.hideBanner();
        this.isNeedShowBanner = false;

        this.hideNormalBanner();
    }

    private showVideoTime = 0;
    showVideo(complete?: (res: boolean) => void) {
        // 过滤多次触发
        if (this.get_time() - this.showVideoTime < 500) return;
        this.showVideoTime = this.get_time();
        YmtUtils.callMethod('showVideo', null, ret=>{
            if (ret == RET_TYPE.ERROR) {
                this.createToast('暂无视频，请稍后再试');
            } else if (ret == RET_TYPE.CLOSE) {
                AudioUtil.setMusicVolume(1);
                AudioUtil.setSoundVolume(1);
            } else if (ret == RET_TYPE.SHOW) {
                AudioUtil.setMusicVolume(0);
                AudioUtil.setSoundVolume(0);
            }
            complete && complete(ret == RET_TYPE.SUCC);
        }); 
    }

    destroyVideo() {
        YmtUtils.callMethod('destroyVideo');
    }

    showInterstitial(on_show?: () => void, on_close?: () => void) {
        this.hideBanner();
        let can_show = YmtUtils.randomInt(1, 100) <= GameSys.adInfo.showInteNormalRto;
        YmtUtils.callMethod('showInter', can_show, ret=>{
            console.log('[YMT_GAME] showInter ret = ', ret);
            
            if (ret == RET_TYPE.SHOW) {
                on_show && on_show();
            } else if (ret == RET_TYPE.CLOSE) {
                this.closeInterTime = this.get_time();
                this.isNeedShowBanner = true;
                on_close && on_close();
            } else if (ret == RET_TYPE.ERROR) {
                on_close && on_close();
                this.isNeedShowBanner = true;
            }
        }); 
    }
    
    destroyNormalInter() {
        YmtUtils.callMethod('destroyInter'); 
    }
    
    showInterVideo(on_show?: () => void, on_close?: () => void) {
        if (this.isGameCd) {
            on_close && on_close();
            return console.log("%c[YMT_GAME]showInterVideo 广告CD中", "color: #33ccff");
        }

        if (this.get_time() - this.closeInterTime < this.showLimmitTime) return on_close && on_close();
        let can_show = YmtUtils.randomInt(1, 100) <= GameSys.adInfo.showInteNormalRto;
        YmtUtils.callMethod('showInterVideo', can_show, ret=>{
            if (ret == RET_TYPE.SHOW) {
                this.hideNormalBanner();
                on_show && on_show();
                AudioUtil.setMusicVolume(0);
                AudioUtil.setSoundVolume(0);
            } else {
                if (ret == RET_TYPE.CLOSE) {
                    this.closeInterTime = this.get_time();
                }
                on_close && on_close();
                AudioUtil.setMusicVolume(1);
                AudioUtil.setSoundVolume(1);
            }
        }); 
    }

    destroyInterVideo() {
        YmtUtils.callMethod('destroyInterVideo'); 
    }

    create_ad(ad_type) {
        return new Promise((resolve, reject) => {
            YmtUtils.callMethod('createNativeAd', ad_type.toString(), ret=>{
                console.log("%c[YMT_GAME]native data load succ:" + JSON.stringify(ret), "color: #33ccff");
                if (ret == RET_TYPE.ERROR) {
                } else {
                    try {

                        this.add_native_data(ret);
                    } catch (error) {
                        console.log(error);
                    }
                }
            }); 
            setTimeout(resolve, 100);
        });
    }

    /**原生广告 */
    initNativeAd() {
        // 拉取间隔1s
        this.create_ad(ad_native_type.banner).then(()=>{
            return this.create_ad(ad_native_type.native_icon);
        }).then(()=>{
            return this.create_ad(ad_native_type.interstitial);
        }).then(()=>{
            return this.create_ad(ad_native_type.inner_interstitial);
        }).then(()=>{
            this.loop_get_native_data();
        })
    }

    showInterstitialNative(parent, on_click?: () => void, on_show?: () => void, on_hide?: () => void) {
        if (this.isGameCd || GameSys.isShieldArea) {
            on_hide && on_hide();
            return console.log("%c[YMT_GAME]showInterstitialNative 广告CD中", "color: #33ccff");
        }

        if (this.get_time() - this.closeBannerTime < this.showLimmitTime) return on_hide && on_hide();

        this.hideInterstitialNative();

        let native_data = this.getLocalNativeData(ad_native_type.inner_interstitial);

        if (native_data == null || native_data === undefined) {
            on_hide && on_hide();
        } else {
            this.isNeedShowBanner = false;
            let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_inner_interstitial', cc.Prefab));
            this.innerInter = node.getComponent('hs_ui_inner_interstitial');
            this.innerInter.show(parent, native_data, on_click, ()=>{
                this.hideBanner();
                on_show && on_show();
            }, ()=>{
                this.closeBannerTime = this.get_time();

                on_hide && on_hide();
            });
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
     showNativeInterstitial(on_show?: () => void, on_hide?: () => void, delay_time = 1) {
        if (this.get_time() - this.closeInterTime < this.showLimmitTime 
            || this.get_time() - this.interShowTime <= GameSys.adInfo.interTick * 1000
            || this.isGameCd) {
                on_hide && on_hide();
                return console.log("%c[YMT_GAME]showNativeInterstitial 广告CD中", "color: #33ccff");
            }

        this.hideNativeInterstitial();
        
        if (!this.nativeInterTimer) {
            this.nativeInterTimer = new mTimer();
        }

        this.nativeInterTimer.once(()=>{
            this.isNeedShowBanner = false;
            let native_data = this.getLocalNativeData(ad_native_type.interstitial);
            if (native_data == null || native_data === undefined) {
                console.log('[YMT_GAME] 普通插屏');
                this.showInterstitial(on_show, on_hide);
            } else {
                console.log('[YMT_GAME] 插屏概率', GameSys.adInfo.showInterRto);
                if (YmtUtils.randomInt(1, 100) > GameSys.adInfo.showInterRto) return on_hide && on_hide();
                let node = cc.instantiate(YmtUtils.getRes('hs_ui/ui_interstitial', cc.Prefab));
                this.nativeInter = node.getComponent('hs_ui_interstitial');
                console.log('[YMT_GAME] 插屏展示', JSON.stringify(native_data))
                
                this.nativeInter.show(native_data, ()=>{
                    this.interShowTime = this.get_time();
                    this.hideBanner();
                    on_show && on_show();
                }, ()=>{
                    this.closeInterTime = this.get_time();
                    this.isNeedShowBanner = true;
                    on_hide && on_hide();
                });
            }
        }, (GameSys.isShenHe || GameSys.isShieldArea) ? 0 : delay_time * 1000)

    }

    hideNativeInterstitial() {
        super.hideNativeInterstitial();
    }

    /**
     * 原生ICON
     * @param parent 
     */
     showNativeIcon(parent) {
        // 特殊处理
        if (this.isGameCd) {
            return console.log("%c[YMT_GAME]showNativeIcon 广告CD中", "color: #33ccff");
        }
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
            this.nativeIcon.show(parent, native_data);
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

    reportAdClick(native_data) {
        console.log('reportAdClick native_data =', native_data);
        
        if (!native_data || native_data === undefined) return;

        console.log('reportAdClick native_data.adId =', native_data.adId);
        YmtUtils.callMethod('reportAdClick', native_data.adId);

        this.remove_native_data(native_data);
    }

    showFeedAd(on_show?: () => void, on_close?: () => void) {
        if (this.isGameCd) {
            return console.log("%c[YMT_GAME]showFeedAd 广告CD中", "color: #33ccff");
        }
        YmtUtils.callMethod('showFeedAd', null, ret=>{
            if (ret == RET_TYPE.SHOW) {
                on_show && on_show();
            } else {
                on_close && on_close();
            }
        }); 
    }
    
    destroyFeedAd() {
        YmtUtils.callMethod('destroyFeedAd'); 
    }

    openUrl(url){
        YmtUtils.callMethod('openUrl', url); 
    }

    showPrivacy(type?:privacy_type){
        YmtUtils.callMethod('showPrivacy', type); 
    }
}