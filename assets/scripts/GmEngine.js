var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("CocosEngine"),
    o = (function () {
        function t() {
            this.engine = null;
        }
        return (
            (t.prototype.init = function () {
                this.engine = new i.default();
            }),
            t
        );
    })();
n.default = o;
