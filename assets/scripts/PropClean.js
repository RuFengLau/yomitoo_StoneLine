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
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.PropCleanSpine = null),
                (e.coinBg = null),
                (e.numBg = null),
                (e.numLabel = null),
                (e.coinLabel = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (s.default.inst.bSelectPropClean.val = !1),
                    (this.coinLabel.string = "" + r.default.propCleanCoin),
                    this.updateNum();
            }),
            (e.prototype.onEnable = function () {
                s.default.inst.propCleanNum.bindObserveFunc(this.updateNum, this),
                    s.default.inst.bSelectPropClean.bindObserveFunc(this.updateSelect, this);
            }),
            (e.prototype.onDestroy = function () {
                s.default.inst.propCleanNum.unBindObserveFunc(this.updateNum),
                    s.default.inst.bSelectPropClean.unBindObserveFunc(this.updateSelect);
            }),
            (e.prototype.updateNum = function () {
                s.default.inst.propCleanNum.val > 0
                    ? ((this.numLabel.string = s.default.inst.propCleanNum.val),
                        (this.numBg.active = !0),
                        (this.coinBg.active = !1))
                    : ((this.coinBg.active = !0), (this.numBg.active = !1));
            }),
            (e.prototype.updateSelect = function () {
                s.default.inst.bSelectPropClean.val
                    ? this.PropCleanSpine.setAnimation(0, "animation2", !0)
                    : this.PropCleanSpine.setAnimation(0, "animation", !1);
            }),
            (e.prototype.onPropCleanChick = function () {
                // 先关闭炸弹道具选择
                s.default.inst.bSelectPropClean.val = false;

                // 如果已经选中清除 → 取消选择
                if (s.default.inst.bSelectPropClean.val) {
                    s.default.inst.bSelectPropClean.val = false;
                    return;
                }

                // 如果有清除道具 → 选中
                if (s.default.inst.propCleanNum.val > 0) {
                    s.default.inst.bSelectPropClean.val = true;
                    return;
                }

                // 如果金币够买清除 → 选中
                // if (s.default.inst.coinNum.val >= r.default.propCleanCoin) {
                //     s.default.inst.bSelectPropClean.val = true;
                //     return;
                // }

                PlatformAdManager.inst.showRewardedVideo(sss=>{
                    if(sss){
                        s.default.inst.bSelectPropClean.val = true;
                    }
                })
                // 都不满足 → 提示金币不足
                // c.default.show(
                //     l.default.path,
                //     c.PopupCacheMode.Normal,
                //     { tipStr: String("金币不足").toLocalize() }
                // );
            }),
            __decorate([d(sp.Skeleton)], e.prototype, "PropCleanSpine", void 0),
            __decorate([d(cc.Node)], e.prototype, "coinBg", void 0),
            __decorate([d(cc.Node)], e.prototype, "numBg", void 0),
            __decorate([d(cc.Label)], e.prototype, "numLabel", void 0),
            __decorate([d(cc.Label)], e.prototype, "coinLabel", void 0),
            __decorate([u], e)
        );
    })(cc.Component);
n.default = h;
