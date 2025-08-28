var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("GmManager"),
    r = (function (t) {
        function e() {
            var e = t.call(this) || this,
                n = a.default.inst.data.getAdData();
            return (e.adUnitID = n.interstitialAdId), e;
        }
        return (
            __extends(e, t),
            (e.prototype.show = function () {
                gm.log("InterstitialAdBase show~~~~~"), a.default.inst.engine.engine.audioEnginePauseAll();
            }),
            (e.prototype.close = function () {
                gm.log("InterstitialAdBase close~~~~~"), a.default.inst.engine.engine.audioEngineResumeAll();
            }),
            e
        );
    })(t("AdBase").AdBase);
n.default = r;
