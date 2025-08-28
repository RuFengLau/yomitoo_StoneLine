var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}), (n.VideoResultState = void 0);
var a = t("GmManager"),
    r = t("AdBase");
(function (t) {
    (t[(t.Success = 0)] = "Success"), (t[(t.Fail = 1)] = "Fail"), (t[(t.Close = 2)] = "Close");
})(n.VideoResultState || (n.VideoResultState = {}));
var s = (function (t) {
    function e() {
        var e = t.call(this) || this,
            n = a.default.inst.data.getAdData();
        return (e.adUnitID = n.rewardedVideoAdId), e;
    }
    return (
        __extends(e, t),
        (e.prototype.open = function (t, e) {
            void 0 === e && (e = "video"), (this.adUnitID = e);
        }),
        (e.prototype.show = function () {
            gm.log("RewardVideoBase show~~~~~"), a.default.inst.engine.engine.audioEnginePauseAll();
        }),
        (e.prototype.onClose = function () {
            gm.log("RewardVideoBase onClose~~~~~"), a.default.inst.engine.engine.audioEngineResumeAll();
        }),
        e
    );
})(r.AdBase);
n.default = s;
