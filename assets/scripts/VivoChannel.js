var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("AdBase"),
    r = t("State"),
    s = t("PtChannelBase"),
    c = t("VivoBanner"),
    l = t("VivoInterstitialAd"),
    p = t("VivoNativeAd"),
    u = t("VivoNativeBanner"),
    d = t("VivoNativeInterstitialAd"),
    h = t("VivoRewardVideo"),
    f = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.nativeBanner = null),
                (e.nativeInterstitialAd = null),
                (e.bannerMode = a.AdShowModeType.Mix),
                (e.nativeBanner = new u.default()),
                (e.nativeInterstitialAd = new d.default()),
                (e.nativeAd = new p.default()),
                (e.rewardAd = new h.default()),
                (e.insertAd = new l.default()),
                (e.nativeBanner.nativeAd = e.nativeAd),
                (e.nativeInterstitialAd.nativeAd = e.nativeAd),
                (e.bannerAd = new c.default()),
                (e.bannerAd.nativeBanner = e.nativeBanner),
                (e.insertAd.nativeInterstitialAd = e.nativeInterstitialAd),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.showBanner = function (t) {
                void 0 === t && (t = a.AdShowModeType.Mix),
                    gm.info("showBanner"),
                    (this.bannerMode = t),
                    t == a.AdShowModeType.Native
                        ? this.nativeBanner.isAdReady() && this.nativeBanner.open()
                        : this.bannerAd.open(t);
            }),
            (e.prototype.hideBanner = function () {
                gm.info("hideBanner"),
                    this.bannerMode == a.AdShowModeType.Native ? this.nativeBanner.close() : this.bannerAd.close();
            }),
            (e.prototype.showInsertAd = function (t) {
                void 0 === t && (t = a.AdShowModeType.Mix),
                    gm.info("showInsertAd"),
                    t == a.AdShowModeType.Native
                        ? this.nativeInterstitialAd.isAdReady() && this.nativeInterstitialAd.open()
                        : this.insertAd.open(t);
            }),
            (e.prototype.getNativeAd = function () {
                return this.nativeAd;
            }),
            (e.prototype.vibrate = function (t) {
                t < 400 ? qg.vibrateShort() : qg.vibrateLong();
            }),
            (e.prototype.vibrateShort = function () {
                this.vibrate(20);
            }),
            (e.prototype.vibrateLong = function () {
                this.vibrate(400);
            }),
            (e.prototype.getNetworkType = function (t) {
                qg.getNetworkType({
                    success: function (e) {
                        var n = r.PtNetType.Unknown;
                        switch (e.networkType) {
                            case "2g":
                            case "3g":
                            case "4g":
                            case "5g":
                                n = r.PtNetType.MobileNetWork;
                                break;
                            case "wifi":
                                n = r.PtNetType.Wifi;
                                break;
                            case "none":
                                n = r.PtNetType.None;
                        }
                        t(n);
                    },
                    fail: function () {
                        t(r.PtNetType.Unknown);
                    }
                });
            }),
            (e.prototype.hasShortcutInstalled = function (t) {
                qg.hasShortcutInstalled(t);
            }),
            (e.prototype.installShortcut = function (t) {
                qg.installShortcut(t);
            }),
            e
        );
    })(s.default);
n.default = f;
