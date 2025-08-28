var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}), (n.BannerBase = void 0);
var a = (function (t) {
    function e() {
        var e = t.call(this) || this,
            n = r.default.inst.data.getAdData();
        return (e.adUnitID = n.bannerAdId), e;
    }
    return (
        __extends(e, t),
        (e.prototype.setStyle = function (t) {
            gm.info("setStyle : " + JSON.stringify(t));
        }),
        e
    );
})(t("AdBase").AdBase);
n.BannerBase = a;
var r = t("GmManager");
