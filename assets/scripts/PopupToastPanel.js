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
            return (e.bgSprite = null), (e.tipLabel = null), (e.popupNode = null), (e.moveByTime = 0.8), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:ToastPanel/Prefab/PopupToastPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onShowBegan = function () {
                var t = this;
                (this.popupNode.y = -278.359),
                    (this.popupNode.scale = 0),
                    (this.popupNode.opacity = 255),
                    cc
                        .tween(this.popupNode)
                        .to(0.2, {scale: 1})
                        .by(this.moveByTime, {position: cc.v3(0, 220, 0)})
                        .to(0.2, {opacity: 0})
                        .call(function () {
                            t.hide();
                        })
                        .start();
            }),
            (e.prototype.updateDisplay = function (t) {
                (this.tipLabel.string = t.tipStr),
                    (this.moveByTime = t.time ? t.time : 0.8),
                    (this.bgSprite.node.width = this.tipLabel.node.width);
            }),
            (e.prototype.closeBtnClick = function () {
                this.hide();
            }),
            __decorate([l(cc.Sprite)], e.prototype, "bgSprite", void 0),
            __decorate([l(cc.Label)], e.prototype, "tipLabel", void 0),
            __decorate([l(cc.Node)], e.prototype, "popupNode", void 0),
            __decorate([c], e)
        );
    })(r.default);
n.default = p;
