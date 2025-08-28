var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}), (n.GridAdBase = void 0);
var a = (function (t) {
    function e() {
        var e = t.call(this) || this,
            n = r.default.inst.data.getAdData();
        return (e.adUnitID = n.gridAdId), e;
    }
    return __extends(e, t), e;
})(t("AdBase").AdBase);
n.GridAdBase = a;
var r = t("GmManager");
