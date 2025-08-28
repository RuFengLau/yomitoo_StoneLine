var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = cc._decorator,
    s = r.ccclass,
    c = r.property,
    l = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.label = null), (e.text = "hello"), e;
        }
        return (
            __extends(e, t),
            (e.prototype.start = function () {
                this.label.string = this.text;
            }),
            __decorate([c(cc.Label)], e.prototype, "label", void 0),
            __decorate([c], e.prototype, "text", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
