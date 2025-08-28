var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("PropConfig"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("PopupToastPanel"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.PropIconSpine = null),
                (e.propBombCoinBg = null),
                (e.numBg = null),
                (e.numLabel = null),
                (e.coinLabel = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (s.default.inst.bSelectPropBomb.val = !1),
                    (this.coinLabel.string = "" + r.default.propBombCoin),
                    this.updateNum();
            }),
            (e.prototype.onEnable = function () {
                s.default.inst.propBombNum.bindObserveFunc(this.updateNum, this),
                    s.default.inst.bSelectPropBomb.bindObserveFunc(this.updateSelect, this);
            }),
            (e.prototype.onDestroy = function () {
                s.default.inst.propBombNum.unBindObserveFunc(this.updateNum),
                    s.default.inst.bSelectPropBomb.unBindObserveFunc(this.updateSelect);
            }),
            (e.prototype.updateNum = function () {
                s.default.inst.propBombNum.val > 0
                    ? ((this.numLabel.string = s.default.inst.propBombNum.val),
                      (this.numBg.active = !0),
                      (this.propBombCoinBg.active = !1))
                    : ((this.propBombCoinBg.active = !0), (this.numBg.active = !1));
            }),
            (e.prototype.updateSelect = function () {
                s.default.inst.bSelectPropBomb.val
                    ? this.PropIconSpine.setAnimation(0, "animation2", !0)
                    : this.PropIconSpine.setAnimation(0, "animation", !1);
            }),
            (e.prototype.onPropBombChick = function () {
                console.log("点击炸弹道具"),
                    (s.default.inst.bSelectPropClean.val = !1),
                    s.default.inst.bSelectPropBomb.val
                        ? (s.default.inst.bSelectPropBomb.val = !1)
                        : s.default.inst.propBombNum.val > 0
                        ? (s.default.inst.bSelectPropBomb.val = !0)
                        : s.default.inst.coinNum.val >= r.default.propBombCoin
                        ? (s.default.inst.bSelectPropBomb.val = !0)
                        : c.default.show(l.default.path, c.PopupCacheMode.Normal, {tipStr: String("金币不足").toLocalize()});
            }),
            __decorate([d(sp.Skeleton)], e.prototype, "PropIconSpine", void 0),
            __decorate([d(cc.Node)], e.prototype, "propBombCoinBg", void 0),
            __decorate([d(cc.Node)], e.prototype, "numBg", void 0),
            __decorate([d(cc.Label)], e.prototype, "numLabel", void 0),
            __decorate([d(cc.Label)], e.prototype, "coinLabel", void 0),
            __decorate([u], e)
        );
    })(cc.Component);
n.default = h;
