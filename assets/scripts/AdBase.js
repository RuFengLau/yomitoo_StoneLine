var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}), (n.AdBase = n.AdShowModeType = void 0);
var i = t("State");
(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Native = 1)] = "Native"), (t[(t.Mix = 2)] = "Mix");
})(n.AdShowModeType || (n.AdShowModeType = {}));
var o = (function () {
    function t() {
        (this.adUnitID = ""), (this.state = i.AdState.close), (this.loadState = i.AdLoadState.none);
    }
    return (
        (t.prototype.init = function () {}),
        (t.prototype.open = function () {}),
        (t.prototype.close = function () {}),
        (t.prototype.isAdReady = function () {
            return !0;
        }),
        (t.prototype.getState = function () {
            return this.state;
        }),
        (t.prototype.getLoadState = function () {
            return this.loadState;
        }),
        t
    );
})();
n.AdBase = o;
