var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("Singleton"),
    r = t("GmPt"),
    s = t("GmData"),
    c = t("GmEngine"),
    l = t("GmLog"),
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.data = null), (e.pt = null), (e.log = null), (e.engine = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.init = function (t) {
                (this.data = new s.default()),
                    (this.pt = new r.default()),
                    (this.log = new l.default()),
                    (this.engine = new c.default()),
                    this.data.init(t),
                    this.engine.init(),
                    this.log.init(),
                    this.pt.init();
            }),
            e
        );
    })(a.Singleton());
n.default = p;
