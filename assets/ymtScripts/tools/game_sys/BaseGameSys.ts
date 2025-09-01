import { LanguageType, LocalizeMgr } from "../../yomitoo/tools/LocalizeMgr";
import YmtAdManager from "../ad/YmtAdManager";
import AndroidAd from "../ad/AndroidAd";
import HgAd from "../ad/HgAd";
import { ad_native_type } from "../ad/ymt_enum";
import KSAd from "../ad/KSAd";
import MiApkAd from "../ad/MiApkAd";
import MZAd from "../ad/MZAd";
import OppoAd from "../ad/OppoAd";
import TTAd from "../ad/TTAd";
import VIVOAd from "../ad/VIVOAd";
import WxAd from "../ad/WxAd";
import YmtConstant from "../const/YmtConstant";
import { AUTO_AD_TYPE, e_sdk_type, PLATFORM, REWARD_TYPE } from "../enum/Enum";
import HttpManager from "../http/HttpManager";
import { YMT_LOCAL_DATAS } from "../local/ymt_local_datas";
import YmtLog from "../YmtLog";
import mTimer from "../mTimer";
import YmtStringUtil from "../YmtStringUtil";
import { TJ } from "../TJ";
// import uma from '../uma.min.js';
import YmtUserData from "../YmtUserData";
import YmtUtils from "../YmtUtils";
import XiaoMiG426Ad from "../ad/XiaoMiG426Ad";
import XiaoMiH5Ad from "../ad/XiaoMiH5Ad";
import CYMiniplayAd from "../ad/CYMiniplayAd";
import RuStoreAndroidAd from "../ad/RuStoreAndroidAd";
import { globalExtentions } from "../../GlobalExtentions";
import Y8GameAd from "../ad/Y8GameAd";
import UGGameAd from "../ad/UGGameAd";
import GamePixAd from "../ad/GamePixAd";
import GooglePlayAd from "../ad/GooglePlayAd";
import VidMateH5Ad from "../ad/VidMateH5Ad";
import JoliboxAd from "../ad/JoliboxAd";
import MiniGameAd from "../ad/MiniGameAd";


export default class BaseGameSys {
    static useNetConfig = false;
    static bannerH = 140;

    static rewardType: REWARD_TYPE = REWARD_TYPE.VIDEO;

    static scale = 1;

    static screenWidth = 0;

    static screenHeight = 0;

    static isPhoneX = false;

    /** 视频/分享切换*/
    static switchToVideo: boolean;

    static toggleReward: any = 0;
    static toggleTiShi = false;
    static canShowBanner = true;
    /**是否显示插屏 */
    static canShowInter = true;
    /**用户信息 */
    static userInfo = {
        uid: '',
        openid: '',
        avatarUrl: '',
        nickName: '',
        token: "",
    };

    /**按钮延迟展示 */
    static btnDelay = 0;

    /**
     * 广告配置 
     * 【注】SDK已接
     */
    static adInfo = {
        /**Banner广告位 */
        adunit_banner: [],
        /**原生广告位 */
        adunit_native: [],
        /**插屏广告位 */
        adunit_intestital: null,
        /**激励视频广告位 */
        adunit_video: null,
        /**原生模板banner */
        adunit_custom_banner: null,
        /**原生模板插屏 */
        adunit_custom_inter: null,
        adunit_appid: null,
        /**九宫格广告位 */
        adunit_portal: null,
        /**互推盒子 */
        adunit_game_banner: null,
        /**是否主动展示九宫格 */
        showGamePortal: true,
        /**banner刷新时间间隔，默认30s */
        bannerUpdateTime: 10,
        /**切换BannerId */
        bannerUpdateNum: 0,
        /**原生广告刷新时间间隔，默认30s */
        customUpdateTime: 30,
        bannerDelay: 0,
        showInterRto: 100,
        showInteNormalRto: 100,
        /**误点原生插屏的概率 */
        forceClickRto: -1,
        nativeInnerInstitialClickWarp: -1,
        /**原生banner误触概率 */
        nativeBannerClickWarp: -1,
        /**两次插屏之间的间隔时间 */
        interTick: 0,
        /**原生插屏"X"号误点概率 */
        closeClickRto: -1,
        /**自动跳转原生广告时间间隔 */
        clickNativeTime: 0,
        /**使用广告池 */
        switchPool: true,
        /**小米插屏、原生展示间隔 */
        miAdGapLimt: 0,
        /**重玩 下一个展示激励视频 */
        QLSP: false,
        /**banner出现n秒后按钮上移 */
        bannerMoveTime: 0,
        /**	宝箱功能是否开启 0关闭 1开启 */
        boxSwitch: 0,
        /**原生广告最大拉取数量 */
        nativeAdLimitCount: 5,
        /**插屏延迟时间 */
        interDelayTime: 1,
        showBanner: 0,
        cpzs: false,
        videoToAdRto: 0,
        showCustomBanner: false,
        showCustomInner: false,
    }
    //所有值初始为0
    static warpRto = {
        ZJManwc: 0,
        YXZanwc: 0,
        GQYanwc: 0,
        GQYanwc2: 0,
        GQYanwc3: 0,
        GQYanwc4: 0,
        PFSYYanwc: 0,
        WZwc: 0,
        WZwc2: 0,
        WZwc3: 0,
        WZwc4: 0,
        WZwc5: 0,
        WZwc6: 0,
        WZwc7: 0,
        WZwc8: 0
    }

    /**
     * 卖量开关配置 
     * 【注】SDK已接开关
     */
    static recBtnInfo = {
        /**首屏导出，SDK已接 */
        SPDC: false,
        /**卖量功能开关，SDK已接 */
        MLKG: false,
        /**悬浮抖动icon，SDK已接 */
        XFDD: false,
        /**侧边栏，SDK已接 */
        CBL: false,
        /**好友热玩，SDK已接 */
        HYRWGD: false,
        /**热门推荐，SDK已接 */
        RMTJ: false,
        /**爆款游戏，SDK已接 */
        BKYX: false,
        /**今日新游，SDK已接 */
        JRXY: false,
        /**热门推荐排行榜，SDK已接 */
        RMPH: false,
        /**结算页，SDK已接 */
        JSY: false,
        /**更多游戏，SDK已接 */
        GDYX: false,
        /**对联，SDK已接 */
        DL: false,
        /**宝箱开关 */
        BXKG: false
    }

    static isShenHe = false;

    /**场景/地区屏蔽 */
    static isShieldArea = true;
    static isShieldScene = false;

    /**分享文字 */
    static shareWord = ["", "", ""];

    /**分享图片 */
    private static sharePath = '';

    /**屏蔽地区 */
    private static cityList = [];
    /**屏蔽场景 */
    private static sceneList = [];
    static lowerPhoneType = 4;
    static recommedList = [];
    private static loopShowAdTimer: mTimer;
    /**展示授权界面 */
    static isShowAuthorize = false;
    /**拒绝是否可以继续游戏 */
    static canPlayWithRefuse = false;
    static playNumShare = 0;

    // 是否展示公司/软著信息
    static showCompany = false;
    public static jumpNativeWaitClick = 2;
    public static filterYLH = false;

    private static async hgDebug() {
        return new Promise<boolean>((resolve, reject) => {
            hg.initWebDebug({
                gameId: "yiqiqulvyou", //写自己公司对应的游戏id, yanshiceshi 只是作为一个例子
                user: 2, //3个用户可选，user1对应填1，，user2对应填2，user3对应填3
                env: "Test", //可选， 默认为测试环境，Product 代表正式环境 
                countryCode: "ID", //可选，默认是ID
                language: "en_us", //可选，默认是id
                success: (res) => {
                    console.log("hago start webdebug success");
                    resolve(true);
                },
                fail: (res) => {
                    console.log("hago start webdebug fail", res);
                    reject(true);
                }
            })
        });

    }


    /**获取网络配置 */
    static async initGame(cbk?: () => void) {
        //hago调试用，真机要移除
        globalExtentions
        // if (YmtConstant.IS_HG_GAME) {
        //     await this.hgDebug();
        // }

        await LocalizeMgr.inst.loadDatas("data/configs");

        for (const key in YmtConstant) {
            let item = YmtConstant[key];
            if(item){
                YmtLog.w(key, item);
            }
        }
        let on_response = () => {
            this.Ad().initAd();
            cbk && cbk();
            // this.Ad().openGameAd();
            // this.checkIP().then(() => {
                // cbk && cbk();
            // });
        }

        let afterLogin = () => {
            let sysInfo = null;
            if (YmtConstant.IS_Mini_Game) {
                /**微游 */
                LocalizeMgr.inst.languageType = LanguageType.cn;
                // @ts-ignore
                var local = minigame.getLocale();
                console.error("语种:", local);
                switch (local) {
                    case "zh-CN":
                        LocalizeMgr.inst.languageType = LanguageType.cn;
                        break;
                    case "en":
                        LocalizeMgr.inst.languageType = LanguageType.en_us;
                        break;
                    case "pt":
                        LocalizeMgr.inst.languageType = LanguageType.pt_br;
                        break;
                    case "id":
                        LocalizeMgr.inst.languageType = LanguageType.id;
                    case "es":
                        LocalizeMgr.inst.languageType = LanguageType.es;
                        break;
                    case "vi":
                        LocalizeMgr.inst.languageType = LanguageType.vi;
                        break;
                }
                // 支持 简体中文zh_CN, 英语en, 印尼id, 葡萄牙pt, 西班牙es，越南vi, 
    
                // 支持西班牙: es 支持葡萄牙: pt 支持越南: vi 支持英语:en
    
                // 阿拉伯: ar 繁中:zh_TW 印尼: id 印地：hi
    
            } else if(YmtConstant.IS_VidMate_GAME || 
                YmtConstant.IS_Jolibox_Game){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if(YmtConstant.IS_GamePix_GAME){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if(YmtConstant.IS_UG_GAME){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if(YmtConstant.IS_Y8_GAME){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if(YmtConstant.IS_RUSTORE_ANDROID){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if(YmtConstant.IS_CYMiniplay_Game){
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if (YmtConstant.IS_MI_H5_Game) {
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            } else if (YmtConstant.IS_XM_G426_Game) {
                LocalizeMgr.inst.languageType = LanguageType.cn;
            } else if (YmtConstant.IS_HG_GAME) {
                sysInfo = hg.getSystemInfoSync();
                console.log("sysInfo:", sysInfo.language)
                switch (sysInfo.language) {
                    case "en-us"://英语
                        LocalizeMgr.inst.languageType = LanguageType.en_us;
                        break;
                    case "id"://印尼语 
                        LocalizeMgr.inst.languageType = LanguageType.id;
                        break;
                    case "vi"://越南语 
                        LocalizeMgr.inst.languageType = LanguageType.vi;
                        break;
                    case "pt-br"://葡语 
                        LocalizeMgr.inst.languageType = LanguageType.pt_br;
                        break;
                    // case "cn"://中文 
                    //     LocalizeMgr.inst.languageType = LanguageType.cn;
                    //     break;
                    default:
                        LocalizeMgr.inst.languageType = LanguageType.en_us;
                        break;
    
    
                }
                LocalizeMgr.inst.languageType = LanguageType.en_us;
                // login;
            } else if (YmtConstant.IS_WECHAT_GAME) {
                wx.showShareMenu({ withShareTicket: true, menus: ['shareAppMessage', 'shareTimeline'] });
                wx.onShareAppMessage(() => {
                    return {
                        title: this.shareWord,
                        imageUrl: this.sharePath
                    }
                })
                sysInfo = wx.getSystemInfoSync();
                LocalizeMgr.inst.languageType = LanguageType.cn;
    
            } else if (YmtConstant.IS_BYTEDANCE_GAME) {
                sysInfo = tt.getSystemInfoSync();
                tt.showShareMenu({
                    success(res) {
                        console.log("已成功显示转发按钮");
                    },
                    fail(err) {
                        console.log("showShareMenu 调用失败", err.errMsg);
                    },
                    complete(res) {
                        console.log("showShareMenu 调用完成");
                    },
                });
    
                tt.onShareAppMessage(res => {
                    //当监听到用户点击了分享或者拍抖音等按钮后，会执行该函数
                    console.log(res.channel);
                    // do something
                    return {
                        //执行函数后，这里是需要该函数返回的对象
                        title: this.shareWord[1],
                        imageUrl: this.sharePath,
                        success() {
                            console.log("分享成功");
                        },
                        fail(e) {
                            console.log("分享失败", e);
                        },
                    }; //返回的对象会传入tt.shareAppMessage进行最终分享
                });
            } else if (YmtConstant.IS_BAIDU_GAME) {
                sysInfo = swan.getSystemInfoSync();
            } else if (YmtConstant.IS_QQ_GAME) {
                qq.showShareMenu({ withShareTicket: true });
                qq.onShareAppMessage(() => {
                    return {
                        title: this.shareWord,
                        imageUrl: this.sharePath
                    }
                })
                sysInfo = qq.getSystemInfoSync();
            } else if (YmtConstant.IS_OPPO_GAME) {
                sysInfo = qg.getSystemInfoSync();
            } else if (YmtConstant.IS_VIVO_GAME) {
                sysInfo = qg.getSystemInfoSync();
            } else if (YmtConstant.IS_UC_GAME) {
                sysInfo = uc.getSystemInfoSync();
            } else if (YmtConstant.IS_MEIZU_GAME) {
                sysInfo = qg.getSystemInfoSync();
            } else if (YmtConstant.IS_KS_GAME) {
                sysInfo = ks.getSystemInfoSync();
            } else {
                LocalizeMgr.inst.languageType = LanguageType.en_us;
            }
            LocalizeMgr.inst.languageType = LanguageType.cn;
            YmtLog.l("当前语言：", LocalizeMgr.inst.languageType)
            if (sysInfo) {
                this.screenWidth = sysInfo.screenWidth;
                this.screenHeight = sysInfo.screenHeight;
    
                if (window['cc']) {
                    if (cc.winSize.width <= cc.winSize.height) {
                        this.scale = this.screenWidth / cc.winSize.width;
                    } else {
                        this.scale = this.screenHeight / cc.winSize.height;
                    }
                } else if (window['Laya']) {
                }
                this.isPhoneX = sysInfo.model.search('iPhone X') != -1 || sysInfo.model.search('iPhone 11') != -1;
            }
    
    
            if (YmtConstant.SDK_TYPE == e_sdk_type.HS && YmtConstant.IS_HG_GAME == false && this.useNetConfig) {
                let url = `${YmtConstant.BASE_URL}games/config/${YmtConstant.PROGECT_NAME}/${this.getPlatformName()}/configs${this.gVersion()}.json`;
                HttpManager.send(url).then(ret => {
                    this.parseData(ret);
                    on_response && on_response();
                }).catch(() => {
                    this.parseData(YMT_LOCAL_DATAS);
                    on_response && on_response();
                })
            } else {
                this.parseData(YMT_LOCAL_DATAS);
                on_response && on_response();
            }
        };


        if (YmtConstant.IS_GamePix_GAME ||
            YmtConstant.IS_UG_GAME ||
            YmtConstant.IS_MI_H5_Game ||
            YmtConstant.IS_Y8_GAME ||
            YmtConstant.IS_GOOGLEPLAY || 
            YmtConstant.IS_VidMate_GAME ||
            YmtConstant.IS_Jolibox_Game ||
            YmtConstant.IS_Mini_Game
        ) {
            afterLogin();
        } else if (YmtConstant.IS_OPPO_GAME || YmtConstant.IS_VIVO_GAME) {
            this.addTouchListener();
            this.Ad().login();
        } else if (YmtConstant.IS_BYTEDANCE_GAME) {
        } else if (YmtConstant.IS_HG_GAME) {
            this.Ad().isServer = false;
            this.Ad().login(res => {
                var userInfo = res.userInfo;
                this.userInfo.openid = userInfo.openid;
                this.userInfo.avatarUrl = userInfo.avatarUrl;
                this.userInfo.nickName = userInfo.nickName;
                this.userInfo.token = res.token;
                this.userInfo.uid = res.userId;
                YmtLog.l("获取用户信息成功:", this.userInfo);
                afterLogin();
            });
        } else if (!YmtConstant.IS_WEB_GAME && !YmtConstant.IS_ANDROID && !YmtConstant.IS_IOS) {
        } else{
            afterLogin();
        }

        
    }

    private static getPlatformName(): string {
        if (YmtConstant.IS_HG_GAME) {
            return "hg";
        } else if (YmtConstant.IS_WECHAT_GAME) {
            return "wx";
        } else if (YmtConstant.IS_VIVO_GAME) {
            return "vivo";
        } else if (YmtConstant.IS_OPPO_GAME) {
            return "oppo";
        } else if (YmtConstant.IS_VIVO_GAME) {
            return "vivo";
        } else if (YmtConstant.IS_BYTEDANCE_GAME) {
            return "tt";
        } else if (YmtConstant.IS_HUAWEI_GAME) {
            return "hw";
        } else if (YmtConstant.IS_QQ_GAME) {
            return "qq";
        } else if (YmtConstant.IS_BAIDU_GAME) {
            return "bd";
        } else {
            return "other";
        }
    }


    private static parseData(ret) {
        if (ret.is_shen_he != undefined) {
            this.isShenHe = ret.is_shen_he == 1;
        }

        if (ret.banner_update_time && YmtUtils.isNumber(ret.banner_update_time)) {
            this.adInfo.bannerUpdateTime = Number(ret.banner_update_time);
        } else if (ret.native_refresh && YmtUtils.isNumber(ret.native_refresh)) {
            this.adInfo.bannerUpdateTime = Number(ret.native_refresh);
        }

        if (ret.banner_update_num) {
            this.adInfo.bannerUpdateNum = ret.banner_update_num;
        }

        if (ret.adunit_banner && YmtStringUtil.trim(ret.adunit_banner) != '') {
            this.adInfo.adunit_banner = YmtStringUtil.toArray(ret.adunit_banner);
        }

        if (ret.adunit_native_banner && YmtStringUtil.trim(ret.adunit_native_banner) != '') {
            this.adInfo.adunit_native[ad_native_type.banner] = ret.adunit_native_banner;
        }

        if (ret.adunit_intestital && YmtStringUtil.trim(ret.adunit_intestital) != '') {
            this.adInfo.adunit_intestital = YmtStringUtil.trim(ret.adunit_intestital);
        }

        if (ret.adunit_native_intestital && YmtStringUtil.trim(ret.adunit_native_intestital) != '') {
            this.adInfo.adunit_native[ad_native_type.interstitial] = ret.adunit_native_intestital;
        }

        if (ret.adunit_appid && YmtStringUtil.trim(ret.adunit_appid) != '') {
            this.adInfo.adunit_appid = YmtStringUtil.trim(ret.adunit_appid);
        }

        if (ret.adunit_video && YmtStringUtil.trim(ret.adunit_video) != '') {
            this.adInfo.adunit_video = YmtStringUtil.trim(ret.adunit_video);
        }

        if (ret.adunit_native && YmtStringUtil.trim(ret.adunit_native) != '') {
            this.adInfo.adunit_native[ad_native_type.inner_interstitial] = ret.adunit_native;
        }

        if (ret.adunit_native_icon && YmtStringUtil.trim(ret.adunit_native_icon) != '') {
            this.adInfo.adunit_native[ad_native_type.native_icon] = YmtStringUtil.trim(ret.adunit_native_icon);
        }

        if (ret.adunit_custom_banner && YmtStringUtil.trim(ret.adunit_custom_banner) != '') {
            this.adInfo.adunit_custom_banner = YmtStringUtil.toArray(ret.adunit_custom_banner);
        }

        if (ret.adunit_custom_inter && YmtStringUtil.trim(ret.adunit_custom_inter) != '') {
            this.adInfo.adunit_custom_inter = YmtStringUtil.trim(ret.adunit_custom_inter);
        }


        if (ret.share) {
            this.shareWord = YmtStringUtil.toArray(ret.share);
        }

        if (ret.sharePath) {
            this.sharePath = ret.sharePath;
        }

        if (ret.banner_delay && YmtUtils.isNumber(ret.banner_delay)) {
            this.adInfo.bannerDelay = Number(ret.banner_delay);
        }

        if (ret.inte2) {
            this.adInfo.showInterRto = ret.inte2;
        }

        if (ret.inte1) {
            this.adInfo.showInteNormalRto = ret.inte1;
        }

        if (ret.forceclick) {
            this.adInfo.forceClickRto = ret.forceclick;
        }

        if (ret.native_percent) {
            this.adInfo.closeClickRto = ret.native_percent;
        } else if (ret.cpwc) {
            this.adInfo.closeClickRto = ret.cpwc;
        }

        if (ret.intetick) {
            this.adInfo.interTick = ret.intetick;
        }

        if (ret.switch_pool) {
            this.adInfo.switchPool = ret.switch_pool == 1;
        }

        this.canShowBanner = ret.can_show_banner == 1;
        this.canShowInter = ret.can_show_inter == 1;

        if (ret.of_oppo_sleep) {
            this.btnDelay = ret.of_oppo_sleep;
        }

        if (ret.recommedPath) {
            let list = YmtStringUtil.toArray(ret.recommedPath);
            for (let appid of list) {
                this.recommedList.push({ appId: appid });
            }
        }

        if (ret.city_list) {
            this.cityList = YmtStringUtil.toArray(ret.city_list);
        }

        if (ret.toggleReward) {
            this.toggleReward = ret.toggleReward == 1;
        }

        if (ret.toggleFuhuo) {
            this.adInfo.nativeInnerInstitialClickWarp = ret.native_inner_institial_click_warp;
        }

        if (ret.toggleTiShi) {
            this.toggleTiShi = ret.toggleTiShi;
        }

        if (ret.native_banner_click_warp) {
            this.adInfo.nativeBannerClickWarp = ret.native_banner_click_warp;
        }

        if (ret.adunit_portal && YmtStringUtil.trim(ret.adunit_portal) != '') {
            this.adInfo.adunit_portal = YmtStringUtil.trim(ret.adunit_portal);
        }

        if (ret.adunit_game_banner && YmtStringUtil.trim(ret.adunit_game_banner) != '') {
            this.adInfo.adunit_game_banner = YmtStringUtil.trim(ret.adunit_game_banner);
        }

        if (ret.show_game_portal) {
            this.adInfo.showGamePortal = ret.show_game_portal == 1;
        }

        if (ret.click_native_time) {
            this.adInfo.clickNativeTime = ret.click_native_time;
        }

        if (ret.mi_ad_gap_limit) {
            this.adInfo.miAdGapLimt = ret.mi_ad_gap_limit;
        }

        if (ret.QLSP) {
            this.adInfo.QLSP = ret.QLSP == 1;
        }

        if (ret.baoXiangONOFF) {
            this.adInfo.boxSwitch = ret.baoXiangONOFF;
        }

        if (ret.hasOwnProperty('show_authorize')) {
            this.isShowAuthorize = ret.show_authorize == 1;
        }

        if (ret.hasOwnProperty('can_play_refuse')) {
            this.canPlayWithRefuse = ret.can_play_refuse == 1;
        }

        if (ret.hasOwnProperty('nativead_limit_count')) {
            this.adInfo.nativeAdLimitCount = ret.nativead_limit_count;
        }

        if (ret.inter_delay_time && ret.hasOwnProperty('inter_delay_time')) {
            this.adInfo.interDelayTime = ret.inter_delay_time;
        }

        if (ret.showbanner && ret.hasOwnProperty('showbanner')) {
            this.adInfo.showBanner = ret.showbanner;
        }

        this.adInfo.cpzs = ret.cpzs == 1;

        if (ret.ys_open && ret.hasOwnProperty('ys_open')) {
            this.adInfo.videoToAdRto = ret.ys_open;
        }

        //////////////////// 误触 ////////////////////
        if (ret.ZJManwc) {
            this.warpRto.ZJManwc = ret.ZJManwc;
        }

        if (ret.YXZanwc) {
            this.warpRto.YXZanwc = ret.YXZanwc;
        }

        if (ret.GQYanwc) {
            this.warpRto.GQYanwc = ret.GQYanwc;
        }

        if (ret.GQYanwc2) {
            this.warpRto.GQYanwc2 = ret.GQYanwc2;
        }

        if (ret.GQYanwc3) {
            this.warpRto.GQYanwc3 = ret.GQYanwc3;
        }

        if (ret.GQYanwc4) {
            this.warpRto.GQYanwc4 = ret.GQYanwc4;
        }

        if (ret.PFSYYanwc) {
            this.warpRto.PFSYYanwc = ret.PFSYYanwc;
        }

        if (ret.WZwc) {
            this.warpRto.WZwc = ret.WZwc;
        }

        if (ret.WZwc2) {
            this.warpRto.WZwc2 = ret.WZwc2;
        }

        if (ret.WZwc3) {
            this.warpRto.WZwc3 = ret.WZwc3;
        }

        if (ret.WZwc4) {
            this.warpRto.WZwc4 = ret.WZwc4;
        }

        if (ret.WZwc5) {
            this.warpRto.WZwc5 = ret.WZwc5;
        }

        if (ret.WZwc6) {
            this.warpRto.WZwc6 = ret.WZwc6;
        }

        if (ret.WZwc7) {
            this.warpRto.WZwc7 = ret.WZwc7;
        }

        if (ret.WZwc8) {
            this.warpRto.WZwc8 = ret.WZwc8;
        }

        if (ret.playnumshare && !isNaN(ret.playnumshare)) {
            this.playNumShare = Number(ret.playnumshare);
        }

        this.canReportOcpx = ret.report_ocpx == 1;

        this.showCompany = ret.show_com == 1;

        this.adInfo.showCustomBanner = ret.show_custom_banner == 1;
        this.adInfo.showCustomInner = ret.show_custom_inner == 1;

        if (ret.hasOwnProperty('jumpNativeWaitClick')) {
            this.jumpNativeWaitClick = ret.jumpNativeWaitClick;
        }

        if (ret.hasOwnProperty('filterYLH')) {
            this.filterYLH = ret.filterYLH == 1;
        }
    }

    /**
     * 获取广告实例
     */
    static Ad(): YmtAdManager {
        if (YmtConstant.IS_Mini_Game) {
            return MiniGameAd.getInstance();
        } else if (YmtConstant.IS_Jolibox_Game) {
            return JoliboxAd.getInstance();
        } else if (YmtConstant.IS_VidMate_GAME) {
            return VidMateH5Ad.getInstance();
        } else if (YmtConstant.IS_GOOGLEPLAY) {
            return GooglePlayAd.getInstance();
        } else if (YmtConstant.IS_GamePix_GAME) {
            return GamePixAd.getInstance();
        } else if (YmtConstant.IS_UG_GAME) {
            return UGGameAd.getInstance();
        } else if (YmtConstant.IS_Y8_GAME) {
            return Y8GameAd.getInstance();
        } else if (YmtConstant.IS_RUSTORE_ANDROID) {
            return RuStoreAndroidAd.getInstance();
        }else if (YmtConstant.IS_CYMiniplay_Game) {
            return CYMiniplayAd.getInstance();
        }else if (YmtConstant.IS_MI_H5_Game) {
            return XiaoMiH5Ad.getInstance();
        } else if (YmtConstant.IS_XM_G426_Game) {
            return XiaoMiG426Ad.getInstance();
        } else if (YmtConstant.IS_HG_GAME) {
            return HgAd.getInstance();
        } else if (YmtConstant.IS_WECHAT_GAME) {
            return WxAd.getInstance();
        } else if (YmtConstant.IS_OPPO_GAME) {
            if (YmtConstant.SDK_TYPE == e_sdk_type.QL) {
                // return SyyxSdk.getInstance();
            } else if (YmtConstant.SDK_TYPE == e_sdk_type.YDHW) {
            } else {
                return OppoAd.getInstance();
            }
        } else if (YmtConstant.IS_VIVO_GAME) {
            return VIVOAd.getInstance();
        } else if (YmtConstant.IS_MEIZU_GAME) {
            return MZAd.getInstance();
        } else if (YmtConstant.IS_KS_GAME) {
            return KSAd.getInstance();
        } else if (YmtConstant.IS_ANDROID) {
            // let platform = YmtUtils.callMethod('getNativePlatfom');
            // if (platform == PLATFORM.MI) {
            //     return MiApkAd.getInstance();
            // }
            return AndroidAd.getInstance();
        } else if (YmtConstant.IS_BYTEDANCE_GAME) {
            return TTAd.getInstance();
        } else {
            return YmtAdManager.getInstance();
        }
    }

    /**
     * 微信分享
     * @param complete 完成回调，参数表示是否成功
     */
    static shareGame(complete?: (res: boolean) => void) {
        if (YmtConstant.IS_WECHAT_GAME) {
            wx.shareAppMessage(
                {
                    title: this.shareWord[0],
                    imageUrl: this.sharePath
                });
            let share_time = (new Date()).getTime();

            let func = res => {
                if ((new Date()).getTime() - share_time >= 3000) {
                    complete && complete(true);
                    // wx.showToast({title: '分享成功',duration: 2000});
                } else {
                    wx.showModal({
                        title: "提示",
                        content: "该群已分享过,请换个群",
                        showCancel: true,
                        cancelText: "取消",
                        cancelColor: "#000",
                        confirmText: "去分享",
                        confirmColor: "#08f",
                        success: res => {
                            if (res.confirm) {
                                this.shareGame(complete);
                            } else if (res.cancel) {
                                complete && complete(false);
                            }
                        }
                    });
                }
                wx.offShow(func);
            }
            wx.onShow(func);
        } else if (YmtConstant.IS_QQ_GAME) {
            qq.shareAppMessage({
                title: this.shareWord[0],
                imageUrl: this.sharePath,
                query: '',
                success: () => {
                    complete && complete(true);
                },
                fail: () => {
                    complete && complete(false);
                }
            });
        } else if (YmtConstant.IS_UC_GAME) {
            uc.shareAppMessage();
        } else if (YmtConstant.IS_BYTEDANCE_GAME) {
            tt.shareAppMessage({
                title: this.shareWord[0],
                desc: this.shareWord[1],
                imageUrl: this.sharePath,
                query: "",
                success() {
                    console.log("分享成功");
                    complete && complete(true);
                },
                fail(e) {
                    console.log("分享失败");
                    complete && complete(false);
                },
            });
        }
    }


    /**
     * 打点自定义事件
     * @param eventName 
     * @param params 
     */
    static sendEvent(eventName, params = null) {
        if (YmtConstant.IS_WECHAT_GAME) {
            // 友盟 事件名为后台事件ID
            // wx.uma && wx.uma.trackEvent(eventName, params);
        } else if (YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            YmtUtils.callMethod('onEvent', eventName ? eventName.toString() : '');
        }

        if (YmtConstant.APPID != null && YmtConstant.APPID.replace(' ', '') != '') {
            TJ.DevKit.ReYun.Event(null, eventName);
        }
    }

    /**
     * 关卡开始事件
     * @param stageId 关卡ID
     */
    static levelStart(stageId) {
        if (YmtConstant.IS_WECHAT_GAME) {

        } else if (YmtConstant.IS_OPPO_GAME || YmtConstant.IS_VIVO_GAME) {
            // uma && uma.stage.onStart({
            //     stageId: String(stageId),
            //     stageName: `第${stageId}关`
            // });
        } else if (YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            YmtUtils.callMethod('levelStart', stageId ? stageId.toString() : '');
        }
        if (YmtConstant.APPID != null && YmtConstant.APPID.replace(' ', '') != '') {
            TJ.DevKit.ReYun.Event(null, `第${stageId}关开始`);
        }
    }

    /**
     * 关卡结束事件
     * @param stageId 关卡ID
     * @param complete 是否完成
     */
    static levelEnd(stageId, complete = false) {
        if (YmtConstant.IS_WECHAT_GAME) {

        } else if (YmtConstant.IS_OPPO_GAME || YmtConstant.IS_VIVO_GAME) {
            // uma && uma.stage.onEnd({
            //     stageId: String(stageId),
            //     stageName: `第${stageId}关`,
            //     event: complete ? 'complete' : 'fail'
            // })
        } else if (YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            YmtUtils.callMethod('levelEnd', stageId ? stageId.toString() : '');
        }
        if (YmtConstant.APPID != null && YmtConstant.APPID.replace(' ', '') != '') {
            TJ.DevKit.ReYun.Event(null, `第${stageId}关结束-${complete ? '完成' : '失败'}`);
        }
    }

    /**
     * 系统震动
     * @param isLong 是否长震动
     */
    static vibrate(isLong = false) {
        if (!YmtUserData.vibrate) return;
        if (YmtConstant.IS_WECHAT_GAME) {
            if (wx.vibrateShort && !isLong) {
                wx.vibrateShort();
            } else {
                wx.vibrateLong();
            }
        } else if (YmtConstant.IS_OPPO_GAME || YmtConstant.IS_VIVO_GAME) {
            if (qg.vibrateShort && !isLong) {
                qg.vibrateShort({});
            } else {
                qg.vibrateLong({});
            }
        } else if (YmtConstant.IS_QQ_GAME) {
            if (qq.vibrateShort && !isLong) {
                qq.vibrateShort({});
            } else {
                qq.vibrateLong({});
            }
        } else if (YmtConstant.IS_BYTEDANCE_GAME) {
            if (tt.vibrateShort && !isLong) {
                tt.vibrateShort({});
            } else {
                tt.vibrateLong({});
            }
        } else if (YmtConstant.IS_BAIDU_GAME) {
            if (swan.vibrateShort && !isLong) {
                swan.vibrateShort({});
            } else {
                swan.vibrateLong({});
            }
        } else if (YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            YmtUtils.callMethod('vibrate', !isLong);
        }
    }

    private static isLoadGameComplete:boolean = false;
    /**
     * 加载完成调用
     */
    static loadGameComplete() {
        if(this.isLoadGameComplete){
            return;
        }
        this.loadGameProgress(100);
        YmtLog.w("游戏加载完成打点", new Date())
        if (YmtConstant.IS_HG_GAME) {
            hg.gameLoadResult && hg.gameLoadResult({ code: 0 })
        }else if (YmtConstant.IS_MI_H5_Game){
            //小米海外
            let _window:any = window;
            _window.funmax && _window.funmax.loadReady();
        }else if(YmtConstant.IS_Jolibox_Game){
            // @ts-ignore
            window.joliboxSdk.runtime.loadFinished();
        }else if (YmtConstant.IS_Mini_Game) {
            // @ts-ignore
            h5splash.hideLoading();
        }else if (YmtConstant.IS_Y8_GAME) {
            // @ts-ignore
            h5splash.hideLoading();
        }
        this.isLoadGameComplete = true;
    }

    static loadGameProgress(progress:number){
        if(YmtConstant.IS_Jolibox_Game){
            // @ts-ignore
            window.joliboxSdk.runtime.notifyLoadProgress(progress.toFixed(0));
            console.log("notifyLoadProgress " + progress.toFixed(0));
        }
    }

    /**
     * 场景/地区屏蔽
     */
    private static checkIP() {
        return new Promise((resolve, reject) => {
            // const request = ip => {
            //     HttpManager.send(ip).then(ret => {
            //         if (parseInt(ret.status) === 0) {
            //             if (!ret.data || !ret.data.city || this.cityList.indexOf(ret.data.region) == -1 && this.cityList.indexOf(ret.data.city) == -1) {
            //                 this.isShieldArea = false;
            //             } else {
            //                 this.isShieldArea = true;
            //             }
            //         }
            //         resolve(true);
            //     }, reject);
            // }

            // if (YmtConstant.IS_OPPO_GAME) {

            //     this.getDeviceId().then(deviceid => {
            //         Log.i('__deviceid__ = ', deviceid);
            //         const IP_URL = `https://gamesdata.hongshunet.com:8443/games/config/newIp?gid=${YmtConstant.GID}&vid=${this.gVersion()}&deviceid=${deviceid}&type=quick`;
            //         request(IP_URL);
            //     })
            // } else {
            //     const IP_URL = "https://gamesdata.hongshunet.com:8443/games/config/ipAddress";
            //     request(IP_URL);
            // }
            resolve(true);
        });
    }

    private static getDeviceId() {
        return new Promise((resolve, reject) => {
            const key = '__deviceid__';
            let ret = cc.sys.localStorage.getItem(key);
            if (ret == null || ret === "" || ret === undefined) {

            } else {
                return resolve(ret);
            }

            let deviceId = null;
            // if (qg.getDeviceId) {
            //     qg.getDeviceId({
            //         success: data => {
            //             if (data && data.deviceId) {
            //                 deviceId = data.deviceId;
            //             } else {
            //                 deviceId = UserData.uid;
            //             }
            //             cc.sys.localStorage.setItem(key, deviceId);
            //             resolve(deviceId);
            //         },
            //         fail: (data, code) => {
            //             console.log(`handling fail, code = ${code}`);
            //             deviceId = UserData.uid;
            //             cc.sys.localStorage.setItem(key, deviceId);
            //             resolve(deviceId);
            //         },
            //     });
            // } else {
            //     deviceId = UserData.uid;
            //     cc.sys.localStorage.setItem(key, deviceId);
            //     resolve(deviceId);
            // }
            deviceId = YmtUserData.uid;
            cc.sys.localStorage.setItem(key, deviceId);
            resolve(deviceId);
        })
    }

    /**
     * 间隔n秒自动弹/点击广告
     * CLICK: 自动点击 
     * INTER: 自动弹插屏
     * VIDEO: 自动弹激励视频
     * @param type 
     * @param on_show 
     * @param on_hide 处理插屏回调
     */
    static loopShowAd(type = AUTO_AD_TYPE.NO, on_show?: () => void, on_hide?: () => void) {
        if (this.adInfo.clickNativeTime > 0 && !this.isShenHe && !this.isShieldArea) {
            if (this.adInfo.showCustomInner && this.adInfo.showCustomBanner) {
                type = AUTO_AD_TYPE.INTER;
            }

            if (!this.loopShowAdTimer) {
                this.loopShowAdTimer = new mTimer();
            }
            this.loopShowAdTimer.clear();
            this.loopShowAdTimer.once(() => {
                this.showAd(type, on_show, on_hide)
            }, this.adInfo.clickNativeTime * 1000)
        }
    }

    static loopShowAdClear() {
        this.loopShowAdTimer && this.loopShowAdTimer.clear();
    }

    private static loopShowNativeData = null;
    private static showAd(type, on_show?: () => void, on_hide?: () => void) {
        if (type == AUTO_AD_TYPE.CLICK) {
            if (this.filterYLH) {
                const datas = this.Ad().getAllNativeData();
                const size = datas.length;
                const limmit = size - Math.ceil(size / 3);
                let num = 0;
                for (let i = size - 1; i >= 0; i--) {
                    if (this.Ad().isYLH(datas[i]) && ++num > limmit) {
                        this.Ad().removeNativeData(datas[i])
                    }
                }
            }
            this.loopShowNativeData = this.Ad().getNativeData();

            if (this.jumpNativeWaitClick == 0) {
                this.Ad().clickNative(this.loopShowNativeData);
                this.loopShowAd(type);
            } else if (this.jumpNativeWaitClick == 1) {
                this.nextTimeClick = true;
            } else if (this.jumpNativeWaitClick == 2) {
                if (this.Ad().isYLH(this.loopShowNativeData)) {
                    this.nextTimeClick = true;
                } else {
                    this.Ad().clickNative(this.loopShowNativeData);
                    this.loopShowAd(type);
                }
            }
        } else if (type == AUTO_AD_TYPE.INTER) {
            this.Ad().showNativeInterstitial(() => {
                on_show && on_show()
            }, () => {
                on_hide && on_hide();
                this.loopShowAd(type, on_show, on_hide);
            })
        } else if (type == AUTO_AD_TYPE.VIDEO) {
            this.Ad().showVideo(() => {
                this.loopShowAd(type);
            })
        }
    }

    private static gVersion() {
        if (YmtConstant.IS_ANDROID || YmtConstant.IS_IOS) {
            return YmtUtils.callMethod('getGVersion');
        } else {
            return YmtConstant.GAME_VERSION_NAME;
        }
    }



    // 游戏信息，用于ocpx上报
    static gameInfo = {
        package: '',
        name: '',
        versionName: '',
        versionCode: ''
    }

    private static canReportOcpx = false;

    /**
     * 上报OCPX（目前仅支持oppo）
     * @param type 上报类型 
     */
    static uploadOcpx(type: 'gads' | 'gtime' | 'glv') {

        // if (!YmtConstant.IS_OPPO_GAME) {
        //     return Log.w('当前功能仅支持 OPPO 平台')
        // }

        // Log.i(`上报类型 :${type}`)
        // let num = 0;
        // let can_report = false;
        // let desc = '';
        // if (type == 'gads') {
        //     num = ++UserData.gads;
        //     desc = '次数';
        // } else if (type == 'gtime') {
        //     num = ++UserData.gtime;
        //     desc = '时长';
        // } else if (type == 'glv') {
        //     num = ++UserData.glv;
        //     desc = '关卡';
        // }

        // if (num > 1 && num < 25) {
        //     can_report = true;
        // } else {
        //     return Log.w(`类型：${type}，${desc}：${num} 无需上报`)
        // }

        // if (!can_report) return Log.e(`上报失败，上报类型错误【${type}】`);

        // if (UserData.deviceid) {
        //     if (this.canReportOcpx) {
        //         Log.i(`OCPX [类型: ${type}, 数值: ${num}] 数据上传...`)
        //         const url = `https://game2022.hongshunet.com/oppo/upload/ocpx/${YmtConstant.GID}?deviceid=${UserData.deviceid}&pkg=${this.gameInfo.package}&type=${type}&val=${num}`;
        //         HttpManager.send(url).then(res => {
        //             Log.i('OCPX 数据上传成功')
        //         });
        //     } else {
        //         Log.w('OCPX 数据上报停用')
        //     }
        // } else {
        //     Log.e(`上报失败，DeviceID 为空！`);
        // }
    }

    private static nextTimeClick = false;
    private static addTouchListener() {
        // let touchListener = cc.EventListener.create({
        //     event: cc.EventListener.TOUCH_ONE_BY_ONE,
        //     swallowTouches: false,
        //     owner: this,
        //     onTouchBegan: (event) => {
        //         Log.i('自>>>>>>>>>>动', this.nextTimeClick)
        //         if (this.jumpNativeWaitClick == 0 || !this.nextTimeClick) return
        //         this.Ad().clickNative(this.loopShowNativeData);
        //         this.loopShowAd(AUTO_AD_TYPE.CLICK);
        //         this.nextTimeClick = false;
        //     }
        // });
        // cc.internal.eventManager.addListener(touchListener, -1);
    }
}