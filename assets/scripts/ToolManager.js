var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = (function (t) {
    function e() {
        return (null !== t && t.apply(this, arguments)) || this;
    }
    return (
        __extends(e, t),
        (e.prototype.randomRangeInt = function (t, e) {
            return cc.math.randomRangeInt(t, e);
        }),
        e
    );
})(t("MSingleton").Singleton());
n.default = a;
