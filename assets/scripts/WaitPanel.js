var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("PopupBase"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.circleSprite = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:WaitPanel/Prefab/WaitPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                cc.tween(this.circleSprite.node).by(5, {angle: -360}).repeatForever().start();
            }),
            (e.prototype.onShowBegan = function () {}),
            (e.prototype.updateDisplay = function () {}),
            (e.prototype.closeBtnClick = function () {
                this.hide();
            }),
            __decorate([l(cc.Sprite)], e.prototype, "circleSprite", void 0),
            __decorate([c], e)
        );
    })(r.default);
n.default = p;
