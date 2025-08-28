var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SpineHelper"),
    s = t("BombCollider"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.bombSpine = null), (e.bombCollider = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                this.bombCollider.node.active = !1;
            }),
            (e.prototype.playBomb = function (t) {
                console.log("playBomb"),
                    this.bombSpine.playAn("animation", 0, function () {}),
                    this.node.stopAllActions(),
                    cc
                        .tween(this.node)
                        .delay(3)
                        .call(function () {
                            t && t();
                        })
                        .start();
            }),
            (e.prototype.getContactList = function (t) {
                (this.bombCollider.node.active = !0), this.bombCollider.getContactList(t);
            }),
            __decorate([p(r.default)], e.prototype, "bombSpine", void 0),
            __decorate([p(s.default)], e.prototype, "bombCollider", void 0),
            __decorate([l], e)
        );
    })(cc.Component);
n.default = u;
