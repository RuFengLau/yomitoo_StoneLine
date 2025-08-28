var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("InterstitialAdBase"),
    r = t("State"),
    s = t("IosBridge"),
    c = (function (t) {
        function e() {
            return t.call(this) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function () {
                this.state != r.AdState.open
                    ? this.isAdReady()
                        ? this.show()
                        : gm.err("插屏没有准备好")
                    : gm.err("插屏已在打开中");
            }),
            (e.prototype.isAdReady = function () {
                return s.default.isAdReady(this.adUnitID);
            }),
            (e.prototype.close = function () {
                t.prototype.close.call(this), (this.state = r.AdState.close), s.default.closeAd(this.adUnitID);
            }),
            (e.prototype.show = function () {
                this.state != r.AdState.open &&
                    (t.prototype.show.call(this), (this.state = r.AdState.open), s.default.openAd(this.adUnitID));
            }),
            (e.prototype.create = function () {}),
            e
        );
    })(a.default);
n.default = c;
