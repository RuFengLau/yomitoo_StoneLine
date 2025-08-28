var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GameBall"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.ballContactList = null), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onCollisionEnter = function (t) {
                    console.log("onCollisionEnter~~~~");
                    var e = t.node.getComponent(r.default);
                    if (e) {
                        for (var n = 0, i = this.ballContactList; n < i.length; n++) if (i[n] == e) return;
                        this.ballContactList.push(e);
                    }
                }),
                (e.prototype.getContactList = function (t) {
                    var e = this;
                    (this.ballContactList = []),
                        (this.node.active = !0),
                        this.node.stopAllActions(),
                        cc
                            .tween(this.node)
                            .delay(0.2)
                            .call(function () {
                                (e.node.active = !1), t && t(e.ballContactList);
                            })
                            .start();
                }),
                __decorate([c], e)
            );
        })(cc.Component));
n.default = l;
