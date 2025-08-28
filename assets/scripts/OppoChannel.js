var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("AdBase"),
    r = t("State"),
    s = t("PtChannelBase"),
    c = t("OppoBanner"),
    l = t("OppoBannerGirdAd"),
    p = t("OppoGirdAd"),
    u = t("OppoInterstitialAd"),
    d = t("OppoNativeAd"),
    h = t("OppoNativeBanner"),
    f = t("OppoNativeInterstitialAd"),
    y = t("OppoRewardVideo"),
    v = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.nativeBanner = null),
                (e.nativeInterstitialAd = null),
                (e.bannerMode = a.AdShowModeType.Mix),
                (e.nativeBanner = new h.default()),
                (e.nativeInterstitialAd = new f.default()),
                (e.nativeAd = new d.default()),
                (e.nativeNormalAd = new d.default(!0)),
                (e.rewardAd = new y.default()),
                (e.insertAd = new u.default()),
                (e.girdAd = new p.default()),
                (e.bannerGirdAd = new l.default()),
                (e.nativeBanner.nativeAd = e.nativeNormalAd),
                (e.nativeInterstitialAd.nativeAd = e.nativeAd),
                (e.bannerAd = new c.default()),
                (e.bannerAd.nativeBanner = e.nativeBanner),
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
            (e.prototype.showInsertAd = function () {
                gm.info("showInsertAd"),
                    this.nativeAd.isAdReady() ? this.nativeInterstitialAd.open() : gm.err("暂无原生广告数据");
            }),
            (e.prototype.getNativeAd = function () {
                return this.nativeAd;
            }),
            (e.prototype.showGirdAd = function (t) {
                gm.info("showGirdAd"),
                    qg.getSystemInfoSync().platformVersionCode < 1076
                        ? gm.warn("快应用平台版本号低于1076，暂不支持互推盒子相关 API")
                        : this.girdAd && this.girdAd.open(t);
            }),
            (e.prototype.isGirdAdReady = function () {
                return this.girdAd.isAdReady();
            }),
            (e.prototype.showBannerGirdAd = function () {
                gm.info("showBannerGirdAd"),
                    qg.getSystemInfoSync().platformVersionCode < 1076
                        ? gm.warn("快应用平台版本号低于1076，暂不支持互推盒子相关 API")
                        : this.bannerGirdAd && this.bannerGirdAd.open();
            }),
            (e.prototype.isBannerGirdAdReady = function () {
                return this.bannerGirdAd.isAdReady();
            }),
            (e.prototype.vibrate = function (t) {
                t < 400 ? qg.vibrateShort({}) : qg.vibrateLong({});
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
n.default = v;
