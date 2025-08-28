var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = (function (t) {
    function e() {
        return t.call(this) || this;
    }
    return (
        __extends(e, t),
        (e.prototype.open = function () {
            gm.warn("oppo 无插屏!");
        }),
        (e.prototype.onLoad = function () {}),
        (e.prototype.onError = function () {}),
        (e.prototype.onClose = function () {}),
        (e.prototype.load = function () {}),
        (e.prototype.show = function () {}),
        (e.prototype.destroy = function () {}),
        (e.prototype.create = function () {}),
        e
    );
})(t("InterstitialAdBase").default);
n.default = a;
