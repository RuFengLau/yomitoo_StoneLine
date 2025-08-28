var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("Singleton"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return __extends(e, t), __decorate([c], e);
        })(r.Singleton()));
n.default = l;
