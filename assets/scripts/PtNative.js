var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("State"),
    r = t("PtBase"),
    s = t("AndroidChannel"),
    c = t("IosChannel"),
    l = t("WinChannel"),
    p = (function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return (n.ptType = a.PtEnvType.Native), n;
        }
        return (
            __extends(e, t),
            (e.prototype.init = function () {
                switch ((gm.log("PtMiniGame init"), this.channelType)) {
                    case a.PtNativeType.Win:
                        gm.log("PtMiniGame Win"), (this.ptChannel = new l.default());
                        break;
                    case a.PtNativeType.Android:
                        gm.log("PtMiniGame Android"), (this.ptChannel = new s.default());
                        break;
                    case a.PtNativeType.Ios:
                        gm.log("PtMiniGame Ios"), (this.ptChannel = new c.default());
                }
            }),
            e
        );
    })(r.PtBase);
n.default = p;
