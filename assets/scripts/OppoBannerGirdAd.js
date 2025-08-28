var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("BannerGridAdBase"),
    r = t("State"),
    s = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.instance = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.load = function () {
                this.loadState != r.AdLoadState.loading &&
                    (gm.log(" OppoBannerGirdAd load"),
                    (this.loadState = r.AdLoadState.loading),
                    this.instance && this.instance.load && this.instance.load());
            }),
            (e.prototype.reLoad = function () {
                var t = this,
                    e = setTimeout(function () {
                        t.load(), clearTimeout(e);
                    }, 1e4);
            }),
            (e.prototype.isAdReady = function () {
                return !0;
            }),
            (e.prototype.open = function () {
                this.state != r.AdState.open && (this.create(this.adUnitID), this.show());
            }),
            (e.prototype.show = function () {
                var t = this;
                (this.state = r.AdState.open),
                    this.instance &&
                        this.instance
                            .show()
                            .then(function () {})
                            .catch(function (e) {
                                t.girdCallback && t.girdCallback(!1),
                                    (t.girdCallback = null),
                                    (t.state = r.AdState.close),
                                    gm.err("OppoBannerGirdAd err :" + JSON.stringify(e));
                            });
            }),
            (e.prototype.close = function () {
                (this.state = r.AdState.close), this.instance && this.instance.hide();
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                qg.getSystemInfoSync().platformVersionCode < 1076
                    ? gm.warn("快应用平台版本号低于1076，暂不支持互推盒子相关 API")
                    : (this.destroy(),
                      gm.info("OppoBannerGirdAd adID: " + t),
                      this.instance ||
                          ((this.instance = qg.createGameBannerAd({adUnitId: t})),
                          this.instance.onLoad(this.onLoad.bind(this)),
                          this.instance.onError(this.onError.bind(this)),
                          (this.loadState = r.AdLoadState.loadSucess)));
            }),
            (e.prototype.onError = function (t) {
                gm.err("OppoBannerGirdAd onError", JSON.stringify(t)),
                    (this.loadState = r.AdLoadState.loadFail),
                    this.reLoad();
            }),
            (e.prototype.onLoad = function () {
                gm.info("OppoBannerGirdAd onLoad"), (this.loadState = r.AdLoadState.loadSucess);
            }),
            e
        );
    })(a.BannerGridAdBase);
n.default = s;
