var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("BannerBase"),
    r = t("State"),
    s = t("IosBridge"),
    c = (function (t) {
        function e() {
            return t.call(this) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function () {
                this.state != r.AdState.open && (this.isAdReady() ? this.show() : gm.err("banner没有准备好"));
            }),
            (e.prototype.isAdReady = function () {
                return s.default.isAdReady(this.adUnitID);
            }),
            (e.prototype.close = function () {
                this.state != r.AdState.close && this.hide();
            }),
            (e.prototype.show = function () {
                (this.state = r.AdState.open),
                    gm.log("IosBanner show " + this.adUnitID),
                    s.default.openAd(this.adUnitID);
            }),
            (e.prototype.hide = function () {
                (this.state = r.AdState.close),
                    gm.log("IosBanner hide " + this.adUnitID),
                    s.default.closeAd(this.adUnitID);
            }),
            (e.prototype.create = function () {}),
            e
        );
    })(a.BannerBase);
n.default = c;
