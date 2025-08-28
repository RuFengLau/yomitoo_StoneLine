declare namespace hg{
    export function getSystemInfoSync();
    export function createRewardedVideoAd(obj?: {});
    export function showBannerAd(obj?: {});
    export function hideBannerAd(obj?: {});
    export function interstitialAdShow(obj?: {});
    export function initWebDebug(obj?: {});
    export function gameLoadResult(obj?: {});
    export function getUserInfo(obj?: {});
    export function login(obj?: {});
    //type 需要上报的排行榜类型, 0-总榜；1-日榜
    //bigFirst 是否分数最大的排最前 bool
    //score 分数
    //name 排行榜标识，用于区分多个排行榜，如果只有一个可以不填
    export function setRank(obj?: {});
    export function getRank(obj?: {});
    export function getAIUser(obj?: {});
    export function setUserCloudStorage(obj?: {});
    export function getUserCloudStorage(obj?: {});

    export function requestPayment(obj?: {});
}


declare namespace wx {
    export const uma;
    export const aldStage;
    export const BaseConfig;
    export function vibrateShort(obj?: {});
    export function vibrateLong(obj?: {});
    export function showShareMenu(object?);
    export function onShareAppMessage(succ: () => void);
    export function getSystemInfoSync();
    export function shareAppMessage(obj);
    export function showModal(object?);
    export function login(object?);
    export function offShow(callback?);
    export function onShow(callback?);
    export function getLaunchOptionsSync();
    export function request(object?);
    export function createBannerAd(object?);
    export function createRewardedVideoAd(object: any);
    export function createInterstitialAd(object: any);

    export function createCustomAd(object?: any);
    export function loadSubpackage(obj?);

    export function getMenuButtonBoundingClientRect(): {
        /**宽度，单位：px */
        width: number;
        /**高度，单位：px */
        height: number;
        /**上边界坐标，单位：px */
        top: number;
        /**右边界坐标，单位：px */
        right: number;
        /**下边界坐标，单位：px */
        bottom: number;
        /**左边界坐标，单位：px */
        left: number;
    };
}

declare namespace swan {
    export function createBannerAd(obj?);
    export function createRewardedVideoAd(obj?);
    export function vibrateLong(object?);
    export function vibrateShort(object?);
    export function loadSubpackage(object?);
    export function getSystemInfoSync(): any;
    export function login(obj?);
    export function getVideoRecorderManager();
    export function shareVideo(obj?);
    export function getMenuButtonBoundingClientRect(): {
        /**宽度，单位：px */
        width: number;
        /**高度，单位：px */
        height: number;
        /**上边界坐标，单位：px */
        top: number;
        /**右边界坐标，单位：px */
        right: number;
        /**下边界坐标，单位：px */
        bottom: number;
        /**左边界坐标，单位：px */
        left: number;
    };
}

declare namespace qg {
    export const uma;
    export function createBannerAd(obj?);
    export function createRewardVideoAd(obj?);
    export function createInterstitialAd(obj?);
    export function shareAppMessage(obj?);
    export function showToast(obj?);
    export function showModal(obj?);
    export function getSystemInfoSync(): any;
    export function createRewardedVideoAd(obj?);
    export function vibrateShort(obj?);
    export function vibrateLong(obj?);
    export function createGamePortalAd(obj?);
    export function createGameBannerAd(obj?);
    export function hasShortcutInstalled(obj?);
    export function installShortcut(obj?);
    export function getProvider();
    export function createNativeAd(object:any):_NativeAd;
    export function login(obj?);
    export function loadSubpackage(obj?);
    export function createCustomAd(obj);
    export function createNewNativeAd(obj?);
    export function getDeviceId(object:{success?: (data:any)=>void, fail?:(data, code)=>void});
    export function getManifestInfo(object:{success?: (data:any)=>void, fail?:(data, code)=>void});
    export function getUserInfo();
    interface _NativeAd{
        load:any;
        destroy:()=>void;
        reportAdShow:(callback:Function) => void;
        reportAdClick:(callback:Function) => void;
        onLoad:(callback:Function)=>void;
        offLoad:(callback:Function)=>void;
        onError:(callback:Function)=>void;
        offError:(callback:Function)=>void;
      }
      
    export function createBoxPortalAd(obj?);
}

declare namespace tt {
    export const uma;
    export function showShareMenu(obj?);
    export function onShareAppMessage(obj?);
    export function getSystemInfoSync(): any;
    export function shareAppMessage(obj?);
    export function vibrateShort(obj?);
    export function vibrateLong(obj?);
    export function createBannerAd(obj?);
    export function createRewardedVideoAd(obj?);
    export function createInterstitialAd(obj?);
    export function showModal(obj?);
    export function showToast(obj?);
    export function showMoreGamesModal(obj);
    export function getGameRecorderManager();
    export function loadSubpackage(obj);
    export function exitMiniProgram(obj);
}

declare namespace ks {
    export function showShareMenu(obj?);
    export function onShareAppMessage(obj?);
    export function getSystemInfoSync(): any;
    export function shareAppMessage(obj?);
    export function vibrateShort(obj?);
    export function vibrateLong(obj?);
    export function createRewardedVideoAd(obj?);
    export function loadSubpackage(obj);
    export function showModal(obj?);
    export function getGameRecorder();
    export function getAPKShortcutInstallStatus(obj?);
    export function saveAPKShortcut(obj?);
}

declare namespace uc {
    export function createBannerAd(obj?);
    export function createRewardVideoAd();
    export function createInterstitialAd();
    export function shareAppMessage(obj?): void;
    export function showToast(obj?);
    export function showModal(obj?);
    export function getSystemInfoSync();
    export function login(obj);
}

declare namespace qq {
    export function showShareMenu(obj?);
    export function onShareAppMessage(obj?);
    export function getSystemInfoSync();
    export function shareAppMessage(obj?);
    export function vibrateShort(obj?);
    export function vibrateLong(obj?);
    export function createBannerAd(obj?);
    export function createRewardedVideoAd(obj?);
    export function createInterstitialAd(obj?);
    export function loadSubpackage(obj);
    export function exitMiniProgram(obj);
}