var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("GmManager"),
    r = (function (t) {
        function e(e) {
            void 0 === e && (e = !1);
            var n = t.call(this) || this;
            n.nativeAdData = null;
            var i = a.default.inst.data.getAdData();
            return (n.adUnitID = e ? i.nativeNormalAdId : i.nativeAdId), n;
        }
        return (
            __extends(e, t),
            (e.prototype.reportAdClick = function () {
                gm.info("reportAdClick");
            }),
            (e.prototype.reportAdShow = function () {
                gm.info("reportAdShow");
            }),
            e
        );
    })(t("AdBase").AdBase);
n.default = r;
