var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("AdBase"),
    r = t("BannerBase"),
    s = t("State"),
    c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.instance = null),
                (e.nativeBanner = null),
                (e.bannerMode = a.AdShowModeType.Mix),
                e.create(e.adUnitID),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onResize = function (t) {
                gm.log("banner onResize", t);
            }),
            (e.prototype.reLoad = function () {
                this.bannerMode == a.AdShowModeType.Mix &&
                    this.nativeBanner.isAdReady() &&
                    this.state == s.AdState.open &&
                    this.nativeBanner.open();
            }),
            (e.prototype.open = function (t) {
                void 0 === t && (t = a.AdShowModeType.Mix),
                    (this.bannerMode = t),
                    this.state != s.AdState.open &&
                        this.loadState != s.AdLoadState.loading &&
                        (this.loadState != s.AdLoadState.loadSucess
                            ? ((this.loadState = s.AdLoadState.loading), this.show())
                            : this.show());
            }),
            (e.prototype.close = function () {
                this.bannerMode == a.AdShowModeType.Mix && this.nativeBanner.close(),
                    this.state != s.AdState.close && this.instance && this.hide();
            }),
            (e.prototype.show = function () {
                (this.state = s.AdState.open),
                    this.instance &&
                        this.instance
                            .show()
                            .then(function () {})
                            .catch(function (t) {
                                gm.err("OppoBanner err :" + JSON.stringify(t));
                            });
            }),
            (e.prototype.hide = function () {
                (this.state = s.AdState.close), this.instance && this.instance.hide();
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.offResize(this.onResize.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                gm.info("OppoBanner adID: " + t);
                var e = qg.getSystemInfoSync();
                this.instance ||
                    ((this.instance = qg.createBannerAd({
                        adUnitId: t,
                        adIntervals: 20,
                        style: {left: 0, top: e.screenHeight - 120, width: e.screenWidth, height: 120}
                    })),
                    this.instance.onLoad(this.onLoad.bind(this)),
                    this.instance.onError(this.onError.bind(this)),
                    this.instance.onResize(this.onResize.bind(this)));
            }),
            (e.prototype.onError = function (t) {
                gm.err("banner onError", JSON.stringify(t)), (this.loadState = s.AdLoadState.loadFail), this.reLoad();
            }),
            (e.prototype.onLoad = function () {
                gm.info("banner onLoad"),
                    (this.loadState = s.AdLoadState.loadSucess),
                    this.bannerMode == a.AdShowModeType.Mix && this.nativeBanner.close();
            }),
            e
        );
    })(r.BannerBase);
n.default = c;
