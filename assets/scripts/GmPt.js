var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = t("State"),
    a = t("PtMiniGame"),
    r = t("PtNative"),
    s = (function () {
        function t() {
            (this.ptBase = null), (this.ptKeys = []);
        }
        return (
            (t.prototype.init = function () {
                for (var t in o.PtMiniType) isNaN(t) && this.ptKeys.push(t);
                console.log("init~~~~~~~~~~~~~~~~");
                var e = this.isMiniGame();
                if (e != o.PtMiniType.None) this.ptBase = new a.default(e);
                else {
                    var n = this.isNative();
                    n != o.PtNativeType.None && (this.ptBase = new r.default(n));
                }
                this.ptBase.init();
            }),
            (t.prototype.getPtMiniTypeStr = function (t) {
                return this.ptKeys[t];
            }),
            (t.prototype.isMiniGame = function () {
                var t = o.PtMiniType.None;
                return (
                    window.wx
                        ? ((t = o.PtMiniType.Wx), window.qq && (t = o.PtMiniType.QQ))
                        : window.qg
                        ? ((t = o.PtMiniType.Oppo),
                          "vivo" == window.qg.getProvider().toLowerCase() && (t = o.PtMiniType.Vivo))
                        : window.qq && (t = o.PtMiniType.QQ),
                    t
                );
            }),
            (t.prototype.isNative = function () {
                var t = o.PtNativeType.None,
                    e = i.default.inst.engine.engine.getSysOs();
                if ((gm.log("isNative : " + e), i.default.inst.engine.engine.isBrowser()))
                    return (t = o.PtNativeType.Win), gm.log("isNative isBrowser "), t;
                switch (e) {
                    case "Android":
                        t = o.PtNativeType.Android;
                        break;
                    case "iOS":
                        t = o.PtNativeType.Ios;
                        break;
                    case "Windows":
                        t = o.PtNativeType.Win;
                }
                return t;
            }),
            t
        );
    })();
n.default = s;
