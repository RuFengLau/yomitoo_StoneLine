var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("PkaLevelConfig"),
    s = t("DataManager"),
    c = t("HomeLevelItem"),
    l = t("HomePaypalItem"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.levelItemNode = null), (e.pkaItemNode = null), (e.barSprite = null), (e.levelLabel = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                s.default.inst.levelNum.bindObserveFunc(this.fluhsLevel, this), this.initBarItems(), this.fluhsLevel();
            }),
            (e.prototype.onDestroy = function () {
                s.default.inst.levelNum.unBindObserveFunc(this.fluhsLevel);
            }),
            (e.prototype.fluhsLevel = function () {}),
            (e.prototype.initBarItems = function () {
                (this.levelItemNode.active = !1), (this.pkaItemNode.active = !1);
                for (var t = 0; t < r.default.length; t++) {
                    var e = cc.instantiate(this.levelItemNode).getComponent(c.default);
                    (e.node.x =
                        this.barSprite.node.x -
                        this.barSprite.node.width / 2 +
                        (r.default[t] / 10) * this.barSprite.node.width),
                        (e.node.parent = this.levelItemNode.parent),
                        (e.node.active = !0),
                        (e.index = t),
                        e.flushState();
                    var n = cc.instantiate(this.pkaItemNode).getComponent(l.default);
                    (n.node.active = !0), (n.node.parent = this.pkaItemNode.parent), (n.node.x = e.node.x);
                }
            }),
            __decorate([d(cc.Node)], e.prototype, "levelItemNode", void 0),
            __decorate([d(cc.Node)], e.prototype, "pkaItemNode", void 0),
            __decorate([d(cc.Sprite)], e.prototype, "barSprite", void 0),
            __decorate([d(cc.Label)], e.prototype, "levelLabel", void 0),
            __decorate([u], e)
        );
    })(cc.Component);
n.default = h;
