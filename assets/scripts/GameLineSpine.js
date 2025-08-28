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
            return (e.xianSpine = null), (e.dianSpine = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (this.xianSpine.active = !1), (this.dianSpine.active = !1);
            }),
            (e.prototype.playXian = function () {
                (this.xianSpine.active = !0), (this.dianSpine.active = !1);
            }),
            (e.prototype.playDian = function () {
                (this.xianSpine.active = !1), (this.dianSpine.active = !0);
            }),
            __decorate([c(cc.Node)], e.prototype, "xianSpine", void 0),
            __decorate([c(cc.Node)], e.prototype, "dianSpine", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
