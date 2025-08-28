var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("AdBase"),
    o = t("RewardVideoBase"),
    a = t("State"),
    r = (function () {
        function t() {
            (this.channelType = null),
                (this.rewardAd = null),
                (this.bannerAd = null),
                (this.insertAd = null),
                (this.nativeAd = null),
                (this.nativeNormalAd = null),
                (this.girdAd = null),
                (this.bannerGirdAd = null),
                (this.customBridgeCallFunc = null);
        }
        return (
            (t.prototype.initBridgeListener = function () {
                var t = this;
                window.bridge_callback = function (e) {
                    gm.log("bridge_callback result= " + e);
                    var n = JSON.parse(e);
                    switch (n.action) {
                        case "ad":
                            switch (n.data) {
                                case "video_success":
                                    t.rewardAd.onClose(o.VideoResultState.Success);
                                    break;
                                case "video_fail":
                                    t.rewardAd.onClose(o.VideoResultState.Fail);
                                    break;
                                case "video_close":
                                    t.rewardAd.onClose(o.VideoResultState.Close);
                                    break;
                                case "interstitialAd_success":
                                case "interstitialAd_fail":
                                case "interstitialAd_close":
                                    t.insertAd.close();
                            }
                            break;
                        case "custom":
                            t.customBridgeCallFunc && t.customBridgeCallFunc(n), (t.customBridgeCallFunc = null);
                    }
                };
            }),
            (t.prototype.customBridgeFunc = function (t, e, n) {
                void 0 === n && (n = null), gm.info("customBridgeFunc action:" + t + " data:" + e);
            }),
            (t.prototype.showBanner = function (t) {
                void 0 === t && (t = i.AdShowModeType.Mix), gm.info("showBanner"), this.bannerAd.open(t);
            }),
            (t.prototype.hideBanner = function () {
                gm.info("hideBanner"), this.bannerAd.close();
            }),
            (t.prototype.isRewardVideoReady = function () {
                return this.rewardAd.isAdReady();
            }),
            (t.prototype.showRewardVideo = function (t, e) {
                void 0 === e && (e = "video"), gm.info("showRewardAd"), this.rewardAd.open(t, e);
            }),
            (t.prototype.showInsertAd = function (t) {
                void 0 === t && (t = i.AdShowModeType.Mix), gm.info("showInsertAd"), this.insertAd.open(t);
            }),
            (t.prototype.showNativeAd = function (t) {
                gm.info("showNativeAd"), this.nativeAd && this.nativeAd.open(t);
            }),
            (t.prototype.closeNativeAd = function () {
                gm.info("closeNativeAd"), this.nativeAd && this.nativeAd.close();
            }),
            (t.prototype.getNativeAd = function () {
                return null;
            }),
            (t.prototype.showGirdAd = function (t) {
                gm.info("showGirdAd"), this.girdAd && this.girdAd.open(t);
            }),
            (t.prototype.isGirdAdReady = function () {
                return !1;
            }),
            (t.prototype.showBannerGirdAd = function () {
                gm.info("showBannerGirdAd"), this.bannerGirdAd && this.bannerGirdAd.open();
            }),
            (t.prototype.isBannerGirdAdReady = function () {
                return !1;
            }),
            (t.prototype.hideBannerGirdAd = function () {
                this.bannerGirdAd && this.bannerGirdAd.close();
            }),
            (t.prototype.vibrate = function (t) {
                gm.info("vibrate time:" + t);
            }),
            (t.prototype.vibrateShort = function () {
                gm.info("vibrateShort"), this.vibrate(15);
            }),
            (t.prototype.vibrateLong = function () {
                gm.info("vibrateLong"), this.vibrate(400);
            }),
            (t.prototype.openUserPrivacy = function () {
                gm.info("openUserPrivacy");
            }),
            (t.prototype.openPrivacyPolicy = function () {
                gm.info("openPrivacyPolicy");
            }),
            (t.prototype.openRate = function () {
                gm.info("openRate");
            }),
            (t.prototype.getVersion = function () {
                return gm.info("getVersion"), "1.0.0";
            }),
            (t.prototype.getNetworkType = function (t) {
                gm.info("getNetworkType"), t(a.PtNetType.Unknown);
            }),
            (t.prototype.hasShortcutInstalled = function () {
                gm.info("hasShortcutInstalled");
            }),
            (t.prototype.installShortcut = function () {
                gm.info("installShortcut");
            }),
            (t.prototype.copyText = function (t) {
                gm.info("copyText : " + t);
            }),
            (t.prototype.tjEvent = function (t) {
                gm.info("tjEvent key: " + t);
            }),
            (t.prototype.tjEventKey = function (t, e) {
                gm.info("tjEventKey key: " + t + " val: " + e);
            }),
            (t.prototype.tjEventMapKey = function (t, e) {
                gm.info("tjEventMapKey key: " + t + " val: " + e);
            }),
            t
        );
    })();
n.default = r;
