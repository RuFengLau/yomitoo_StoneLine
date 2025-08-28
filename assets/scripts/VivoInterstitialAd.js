var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("AdBase"),
    r = t("InterstitialAdBase"),
    s = t("State"),
    c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.instance = null), (e.nativeInterstitialAd = null), (e.interstitialAdMode = a.AdShowModeType.Mix), e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.reLoad = function () {
                gm.log(" this.state : " + this.state),
                    this.interstitialAdMode == a.AdShowModeType.Mix &&
                        this.nativeInterstitialAd.isAdReady() &&
                        (console.log("VivoInterstitialAd reLoad"), this.nativeInterstitialAd.open());
            }),
            (e.prototype.open = function (t) {
                void 0 === t && (t = a.AdShowModeType.Mix),
                    (this.interstitialAdMode = t),
                    this.state != s.AdState.open &&
                        this.loadState != s.AdLoadState.loading &&
                        this.create(this.adUnitID);
            }),
            (e.prototype.onClose = function () {
                (this.state = s.AdState.close), gm.log("VivoInterstitialAd onClose");
            }),
            (e.prototype.show = function () {
                (this.state = s.AdState.open),
                    this.instance &&
                        this.instance
                            .show()
                            .then(function () {})
                            .catch(function (t) {
                                gm.err("VivoInterstitialAd err :" + JSON.stringify(t));
                            });
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.offClose(this.onClose.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                gm.info("VivoInterstitialAd adID: " + t),
                    this.destroy(),
                    this.instance ||
                        ((this.instance = qg.createInterstitialAd({posId: t})),
                        this.instance.onLoad(this.onLoad.bind(this)),
                        this.instance.onError(this.onError.bind(this)),
                        this.instance.onClose(this.onClose.bind(this)));
            }),
            (e.prototype.onError = function (t) {
                gm.err("VivoInterstitialAd onError", JSON.stringify(t)),
                    (this.loadState = s.AdLoadState.loadFail),
                    this.reLoad();
            }),
            (e.prototype.onLoad = function () {
                gm.info("VivoInterstitialAd onLoad"),
                    (this.loadState = s.AdLoadState.loadSucess),
                    this.interstitialAdMode == a.AdShowModeType.Mix && this.nativeInterstitialAd.close(),
                    this.show();
            }),
            e
        );
    })(r.default);
n.default = c;
