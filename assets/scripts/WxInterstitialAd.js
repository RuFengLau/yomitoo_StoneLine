var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("InterstitialAdBase"),
    r = t("State"),
    s = (function (t) {
        function e() {
            return t.call(this) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function () {
                this.state != r.AdState.open &&
                    this.loadState != r.AdLoadState.loading &&
                    (this.loadState != r.AdLoadState.loadSucess
                        ? ((this.loadState = r.AdLoadState.loading), this.create(this.adUnitID))
                        : this.show());
            }),
            (e.prototype.onLoad = function () {
                gm.log(" 插屏广告加载成功"), (this.loadState = r.AdLoadState.loadSucess), this.show();
            }),
            (e.prototype.onError = function (t) {
                gm.log(" 插屏广告加载失败 ", t), (this.loadState = r.AdLoadState.loadFail);
            }),
            (e.prototype.onClose = function () {
                (this.state = r.AdState.close), (this.loadState = r.AdLoadState.none), this.destroy();
            }),
            (e.prototype.load = function () {
                this.instance && this.instance.load();
            }),
            (e.prototype.show = function () {
                var t = this;
                this.state != r.AdState.open &&
                    this.instance &&
                    this.instance
                        .show()
                        .then(function () {
                            t.state = r.AdState.open;
                        })
                        .catch(function (e) {
                            gm.err(" 插屏显示失败 err ", JSON.stringify(e)), (t.state = r.AdState.close);
                        });
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offClose(this.onClose.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                this.instance ||
                    ((this.instance = wx.createInterstitialAd({adUnitId: t})),
                    this.instance.onLoad(this.onLoad.bind(this)),
                    this.instance.onError(this.onError.bind(this)),
                    this.instance.onClose(this.onClose.bind(this)));
            }),
            e
        );
    })(a.default);
n.default = s;
