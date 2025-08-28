var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("AchievementConfig"),
    s = t("CustomEventType"),
    c = t("EventMgr"),
    l = t("BundleManager"),
    p = t("DataManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.lock = null),
                (e.unlock = null),
                (e.rewardNode = null),
                (e.chickMask = null),
                (e.title = null),
                (e.des = null),
                (e.iconSprite = null),
                (e.addLabel = null),
                (e.rewardBg1 = null),
                (e.rewardBg2 = null),
                (e.lockLabel = null),
                (e.endIcon = null),
                (e.prizeItem = null),
                (e.data = null),
                (e.bRewardNodeShow = !1),
                (e.bRewardNodeShowAnim = !1),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onEnable = function () {
                c.default.inst.on(s.default.ACHIEVEMENT_ITEM_CHICK, this.onEvent, this);
            }),
            (e.prototype.onDisable = function () {
                c.default.inst.off(s.default.ACHIEVEMENT_ITEM_CHICK, this.onEvent, this);
            }),
            (e.prototype.setDate = function (t) {
                var e = this;
                (this.data = t),
                    (this.title.string = this.data.title),
                    (this.des.string = this.data.des),
                    (this.bRewardNodeShow = !1),
                    (this.bRewardNodeShowAnim = !1),
                    (this.rewardNode.active = !1),
                    (this.chickMask.active = !1),
                    (this.prizeItem.active = !1),
                    (this.iconSprite.node.active = !1),
                    l.default.inst.loadRes(
                        "AchievementPanel",
                        "Images/" + this.data.iconName,
                        cc.SpriteFrame,
                        function (t) {
                            (e.iconSprite.spriteFrame = t), (e.iconSprite.node.active = !0);
                        }
                    ),
                    this.chickMask.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this, !0),
                    this.data.reward.length > 1 ? (this.addLabel.active = !0) : (this.addLabel.active = !1);
                for (
                    var n = function (t) {
                            var n = "";
                            i.data.reward[t].rewardType == r.AchievementRewardType.Coin
                                ? (n = "prize/ui_jbdui")
                                : i.data.reward[t].rewardType == r.AchievementRewardType.PropBomb
                                ? (n = "prize/ui_daoju_zhadan")
                                : i.data.reward[t].rewardType == r.AchievementRewardType.PropClean &&
                                  (n = "prize/ui_daoju_tongsexiao"),
                                l.default.inst.loadRes("Common", n, cc.SpriteFrame, function (n) {
                                    var i = cc.instantiate(e.prizeItem);
                                    (i.getComponent(cc.Sprite).spriteFrame = n),
                                        (i.parent = e.rewardNode),
                                        (i.position = e.getPrizePos(t, e.data.reward.length)),
                                        (i.active = !0);
                                });
                        },
                        i = this,
                        o = 0;
                    o < this.data.reward.length;
                    o++
                )
                    n(o);
                p.default.inst.getAchievementState(this.data.id)
                    ? ((this.rewardBg1.active = !1),
                      (this.rewardBg2.active = !0),
                      (this.endIcon.active = !0),
                      (this.lockLabel.string = "已解锁"),
                      (this.lock.active = !1),
                      (this.unlock.active = !0))
                    : ((this.rewardBg1.active = !0),
                      (this.rewardBg2.active = !1),
                      (this.endIcon.active = !1),
                      (this.lockLabel.string = "未解锁"),
                      (this.lock.active = !0),
                      (this.unlock.active = !1));
            }),
            (e.prototype.getPrizePos = function (t, e) {
                var n = cc.v3(0, 109, 0);
                return (
                    e > 1 &&
                        (0 == t
                            ? (n = cc.v3(-35, 109, 0))
                            : 1 == t
                            ? (n = cc.v3(35, 109, 0))
                            : 2 == t && (n = cc.v3(0, 155, 0))),
                    n
                );
            }),
            (e.prototype.onTouchBegin = function () {
                this.hideRewardNode();
            }),
            (e.prototype.onEvent = function (t) {
                t != this && this.hideRewardNode();
            }),
            (e.prototype.hideRewardNode = function () {
                (this.bRewardNodeShow = !1),
                    (this.bRewardNodeShowAnim = !1),
                    (this.rewardNode.active = !1),
                    (this.chickMask.active = !1);
            }),
            (e.prototype.onChick = function () {
                var t = this;
                this.bRewardNodeShowAnim ||
                    (c.default.inst.emit(s.default.ACHIEVEMENT_ITEM_CHICK, this),
                    this.rewardNode.stopAllActions(),
                    (this.bRewardNodeShowAnim = !0),
                    this.bRewardNodeShow
                        ? this.hideRewardNode()
                        : ((this.rewardNode.active = !0),
                          (this.rewardNode.scale = 0),
                          cc
                              .tween(this.rewardNode)
                              .to(0.3, {scale: 1}, {easing: "backOut"})
                              .call(function () {
                                  (t.bRewardNodeShow = !0), (t.bRewardNodeShowAnim = !1), (t.chickMask.active = !0);
                              })
                              .start()));
            }),
            __decorate([h(cc.Node)], e.prototype, "lock", void 0),
            __decorate([h(cc.Node)], e.prototype, "unlock", void 0),
            __decorate([h(cc.Node)], e.prototype, "rewardNode", void 0),
            __decorate([h(cc.Node)], e.prototype, "chickMask", void 0),
            __decorate([h(cc.Label)], e.prototype, "title", void 0),
            __decorate([h(cc.Label)], e.prototype, "des", void 0),
            __decorate([h(cc.Sprite)], e.prototype, "iconSprite", void 0),
            __decorate([h(cc.Node)], e.prototype, "addLabel", void 0),
            __decorate([h(cc.Node)], e.prototype, "rewardBg1", void 0),
            __decorate([h(cc.Node)], e.prototype, "rewardBg2", void 0),
            __decorate([h(cc.Label)], e.prototype, "lockLabel", void 0),
            __decorate([h(cc.Node)], e.prototype, "endIcon", void 0),
            __decorate([h(cc.Node)], e.prototype, "prizeItem", void 0),
            __decorate([d], e)
        );
    })(cc.Component);
n.default = f;
