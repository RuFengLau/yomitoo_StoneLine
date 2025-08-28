var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = t("AdBase"),
    a = t("RewardVideoBase"),
    r = t("State"),
    s = {
        VideoResultState: a.VideoResultState,
        PtNetType: r.PtNetType,
        AdShowModeType: o.AdShowModeType,
        init: function (t) {
            i.default.inst.init(t);
        },
        log: function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            i.default.inst.log.log(t);
        },
        info: function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            i.default.inst.log.info(t);
        },
        warn: function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            i.default.inst.log.warn(t);
        },
        err: function () {
            for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
            i.default.inst.log.err(t);
        }
    };
(s.ad = {
    showBanner: function (t) {
        void 0 === t && (t = o.AdShowModeType.Mix), i.default.inst.pt.ptBase.ptChannel.showBanner(t);
    },
    hideBanner: function () {
        i.default.inst.pt.ptBase.ptChannel.hideBanner();
    },
    setBannerStyle: function (t) {
        i.default.inst.pt.ptBase.ptChannel.bannerAd.setStyle(t);
    },
    showRewardVideo: function (t, e) {
        void 0 === e && (e = "video"), i.default.inst.pt.ptBase.ptChannel.showRewardVideo(t, e);
    },
    showInsertAd: function (t) {
        void 0 === t && (t = o.AdShowModeType.Mix), i.default.inst.pt.ptBase.ptChannel.showInsertAd(t);
    },
    showNativeAd: function (t) {
        i.default.inst.pt.ptBase.ptChannel.showNativeAd(t);
    },
    closeNativeAd: function () {
        i.default.inst.pt.ptBase.ptChannel.closeNativeAd();
    },
    getNativeAd: function () {
        return i.default.inst.pt.ptBase.ptChannel.getNativeAd();
    },
    isRewardVideoReady: function () {
        return i.default.inst.pt.ptBase.ptChannel.isRewardVideoReady();
    },
    showGirdAd: function (t) {
        i.default.inst.pt.ptBase.ptChannel.showGirdAd(t);
    },
    isGirdAdReady: function () {
        return i.default.inst.pt.ptBase.ptChannel.isGirdAdReady();
    },
    showBannerGirdAd: function () {
        i.default.inst.pt.ptBase.ptChannel.showBannerGirdAd();
    },
    isBannerGirdAdReady: function () {
        return i.default.inst.pt.ptBase.ptChannel.isBannerGirdAdReady();
    },
    hideBannerGirdAd: function () {
        i.default.inst.pt.ptBase.ptChannel.hideBannerGirdAd();
    }
}),
    (s.pt = {
        vibrate: function (t) {
            i.default.inst.pt.ptBase.ptChannel.vibrate(t);
        },
        vibrateShort: function () {
            i.default.inst.pt.ptBase.ptChannel.vibrateShort();
        },
        vibrateLong: function () {
            i.default.inst.pt.ptBase.ptChannel.vibrateLong();
        },
        openUserPrivacy: function () {
            i.default.inst.pt.ptBase.ptChannel.openUserPrivacy();
        },
        openPrivacyPolicy: function () {
            i.default.inst.pt.ptBase.ptChannel.openPrivacyPolicy();
        },
        openRate: function () {
            i.default.inst.pt.ptBase.ptChannel.openRate();
        },
        getVersion: function () {
            return i.default.inst.pt.ptBase.ptChannel.getVersion();
        },
        customBridgeFunc: function (t, e, n) {
            void 0 === n && (n = null), i.default.inst.pt.ptBase.ptChannel.customBridgeFunc(t, e, n);
        },
        getNetworkType: function (t) {
            i.default.inst.pt.ptBase.ptChannel.getNetworkType(t);
        },
        hasShortcutInstalled: function (t) {
            i.default.inst.pt.ptBase.ptChannel.hasShortcutInstalled(t);
        },
        installShortcut: function (t) {
            i.default.inst.pt.ptBase.ptChannel.installShortcut(t);
        },
        copyText: function (t) {
            i.default.inst.pt.ptBase.ptChannel.copyText(t);
        }
    }),
    (s.tj = {
        tjEvent: function (t) {
            i.default.inst.pt.ptBase.ptChannel.tjEvent(t);
        },
        tjEventKey: function (t, e) {
            i.default.inst.pt.ptBase.ptChannel.tjEventKey(t, e);
        },
        tjEventMapKey: function (t, e) {
            i.default.inst.pt.ptBase.ptChannel.tjEventMapKey(t, e);
        }
    }),
    (window.gm = s);
