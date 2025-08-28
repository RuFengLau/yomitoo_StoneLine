var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("TurntableConfig"),
    s = t("BundleManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.numBgNode = null), (e.numLabel = null), (e.itemSprite = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.setData = function (t) {
                var e = this;
                switch (t.type) {
                    case r.TurntableItemType.Coin:
                        (this.numLabel.string = "" + t.num),
                            s.default.inst.loadRes("Common", "prize/ui_jbdui", cc.SpriteFrame, function (t) {
                                e.itemSprite.spriteFrame = t;
                            });
                        break;
                    case r.TurntableItemType.PropBomb:
                        (this.numLabel.string = "" + t.num),
                            s.default.inst.loadRes("Common", "prize/ui_daoju_zhadan", cc.SpriteFrame, function (t) {
                                e.itemSprite.spriteFrame = t;
                            });
                        break;
                    case r.TurntableItemType.PropClean:
                        (this.numLabel.string = "" + t.num),
                            s.default.inst.loadRes("Common", "prize/ui_daoju_tongsexiao", cc.SpriteFrame, function (t) {
                                e.itemSprite.spriteFrame = t;
                            });
                }
            }),
            __decorate([p(cc.Node)], e.prototype, "numBgNode", void 0),
            __decorate([p(cc.Label)], e.prototype, "numLabel", void 0),
            __decorate([p(cc.Sprite)], e.prototype, "itemSprite", void 0),
            __decorate([l], e)
        );
    })(cc.Component);
n.default = u;
