var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("State"),
    r = t("PtBase"),
    s = t("OppoChannel"),
    c = t("VivoChannel"),
    l = t("WxChannel"),
    p = (function (t) {
        function e(e) {
            var n = t.call(this, e) || this;
            return (n.ptType = a.PtEnvType.MiniGame), n;
        }
        return (
            __extends(e, t),
            (e.prototype.init = function () {
                switch (this.channelType) {
                    case a.PtMiniType.Wx:
                        this.ptChannel = new l.default();
                        break;
                    case a.PtMiniType.Oppo:
                        this.ptChannel = new s.default();
                        break;
                    case a.PtMiniType.Vivo:
                        this.ptChannel = new c.default();
                }
            }),
            e
        );
    })(r.PtBase);
n.default = p;
