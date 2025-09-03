const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", { value: !0 });
var r = t("PropConfig"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("PopupToastPanel"),
    MsgTipPanel = t("MsgTipPanel"),
    EventMgr = t("EventMgr"),
    CustomEventType = t("CustomEventType"),

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
                EventMgr.default.inst.on(CustomEventType.default.AD_GET_BOMB_EVENT, this.onEvent, this);
                s.default.inst.propBombNum.bindObserveFunc(this.updateNum, this),
                    s.default.inst.bSelectPropBomb.bindObserveFunc(this.updateSelect, this);
            }),
            (e.prototype.onDestroy = function () {
                EventMgr.default.inst.off(CustomEventType.default.AD_GET_BOMB_EVENT, this.onEvent, this);
                s.default.inst.propBombNum.unBindObserveFunc(this.updateNum),
                    s.default.inst.bSelectPropBomb.unBindObserveFunc(this.updateSelect);
            }),
            (e.prototype.onEvent = function (t) {
                s.default.inst.bSelectPropBomb.val = true;
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
                // 先关闭清除道具选择
                s.default.inst.bSelectPropBomb.val = false;

                // 如果已经选中炸弹 → 取消选择
                if (s.default.inst.bSelectPropBomb.val) {
                    s.default.inst.bSelectPropBomb.val = false;
                    return;
                }

                // 如果有炸弹道具 → 选中
                if (s.default.inst.propBombNum.val > 0) {
                    s.default.inst.bSelectPropBomb.val = true;
                    return;
                }

                // 如果金币够买炸弹 → 选中
                if (s.default.inst.coinNum.val >= r.default.propBombCoin) {
                    s.default.inst.bSelectPropBomb.val = true;
                    return;
                }
                
                // 都不满足 → 提示金币不足
                // c.default.show(
                //     l.default.path,
                //     c.PopupCacheMode.Normal,
                //     { tipStr: String("金币不足").toLocalize() }
                // );

                c.default.show(MsgTipPanel.default.path, c.PopupCacheMode.Normal);
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
