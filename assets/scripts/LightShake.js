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
            return (e.titleLightSprite1 = null), (e.titleLightSprite2 = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                (this.titleLightSprite1.node.active = !0),
                    (this.titleLightSprite2.node.active = !1),
                    this.schedule(function () {
                        (t.titleLightSprite1.node.active = !t.titleLightSprite1.node.active),
                            (t.titleLightSprite2.node.active = !t.titleLightSprite1.node.active);
                    }, 0.5);
            }),
            __decorate([c(cc.Sprite)], e.prototype, "titleLightSprite1", void 0),
            __decorate([c(cc.Sprite)], e.prototype, "titleLightSprite2", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
