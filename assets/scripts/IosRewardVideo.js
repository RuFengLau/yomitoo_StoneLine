var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("RewardVideoBase"),
    r = t("State"),
    s = t("IosBridge"),
    c = (function (t) {
        function e() {
            return t.call(this) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function (t, e) {
                void 0 === e && (e = "video"),
                    (this.adUnitID = e),
                    this.state != r.AdState.open
                        ? this.isAdReady()
                            ? ((this.videoCallback = t), this.show())
                            : gm.err("视频没有准备好")
                        : gm.err("视频已在打开中");
            }),
            (e.prototype.isAdReady = function () {
                return s.default.isAdReady(this.adUnitID);
            }),
            (e.prototype.onClose = function (e) {
                t.prototype.onClose.call(this, e), (this.state = r.AdState.close), this.videoCallback(e);
            }),
            (e.prototype.create = function () {}),
            (e.prototype.show = function () {
                t.prototype.show.call(this), (this.state = r.AdState.open), s.default.openAd(this.adUnitID);
            }),
            e
        );
    })(a.default);
n.default = c;
