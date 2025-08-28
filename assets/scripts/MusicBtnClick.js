var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SoundManager"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    this.node.on(cc.Node.EventType.TOUCH_START, function () {
                        r.default.inst.playEffect("btn");
                    });
                }),
                __decorate([c], e)
            );
        })(cc.Component));
n.default = l;
