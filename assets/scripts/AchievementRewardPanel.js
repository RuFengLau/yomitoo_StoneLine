var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("AchievementConfig"),
    s = t("SpineHelper"),
    c = t("BundleManager"),
    l = t("DataManager"),
    p = t("SoundManager"),
    u = t("PopupBase"),
    d = cc._decorator,
    h = d.ccclass,
    f = d.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.ranbowSpine = null),
                (e.item = null),
                (e.addLabel = null),
                (e.itemNode = null),
                (e.titleLabel = null),
                (e.iconSprite = null),
                (e.coptions = null),
                (e.pos = [
                    [cc.v2(0, 0)],
                    [cc.v2(-124, 0), cc.v2(124, 0)],
                    [cc.v2(-124, -60), cc.v2(0, 130), cc.v2(124, -60)]
                ]),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:AchievementPanel/Prefabs/AchievementRewardPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {}),
            (e.prototype.onShowBegan = function () {}),
            (e.prototype.onShowEnd = function () {}),
            (e.prototype.updateDisplay = function (t) {
                var e = this;
                (this.coptions = t),
                    this.ranbowSpine.playAn("animation", 1),
                    p.default.inst.playEffect("addCoin"),
                    (this.item.active = !1),
                    (this.titleLabel.string = this.coptions.AchievementDataType.title);
                var n = this.coptions.AchievementDataType.reward.length;
                this.addLabel.active = n >= 2;
                for (
                    var i = function (t) {
                            var e = cc.instantiate(o.item);
                            (e.parent = o.itemNode),
                                e.setPosition(o.pos[n - 1][t]),
                                (e.getChildByName("num").getComponent(cc.Label).string =
                                    "+" + o.coptions.AchievementDataType.reward[t].num);
                            var i = "";
                            o.coptions.AchievementDataType.reward[t].rewardType == r.AchievementRewardType.Coin
                                ? (i = "Images/ui_jbd_big")
                                : o.coptions.AchievementDataType.reward[t].rewardType ==
                                  r.AchievementRewardType.PropBomb
                                ? (i = "Images/ui_zd_big")
                                : o.coptions.AchievementDataType.reward[t].rewardType ==
                                      r.AchievementRewardType.PropClean && (i = "Images/ui_wnq_big"),
                                c.default.inst.loadRes("RewardPanel", i, cc.SpriteFrame, function (t) {
                                    null != e &&
                                        ((e.getChildByName("logo").getComponent(cc.Sprite).spriteFrame = t),
                                        (e.active = !0));
                                });
                        },
                        o = this,
                        a = 0;
                    a < n;
                    a++
                )
                    i(a);
                (this.iconSprite.node.active = !1),
                    c.default.inst.loadRes(
                        "AchievementPanel",
                        "Images/" + this.coptions.AchievementDataType.iconName,
                        cc.SpriteFrame,
                        function (t) {
                            (e.iconSprite.spriteFrame = t), (e.iconSprite.node.active = !0);
                        }
                    );
            }),
            (e.prototype.saveReward = function () {
                for (var t = this.coptions.AchievementDataType.reward, e = 0; e < t.length; e++)
                    t[e].rewardType == r.AchievementRewardType.Coin
                        ? ((l.default.inst.coinNum.val += t[e].num), l.default.inst.saveCoin())
                        : t[e].rewardType == r.AchievementRewardType.PropBomb
                        ? (l.default.inst.propBombNum.val += t[e].num)
                        : t[e].rewardType == r.AchievementRewardType.PropClean &&
                          (l.default.inst.propCleanNum.val += t[e].num);
            }),
            (e.prototype.onCloseBtnChick = function () {
                this.saveReward(), this.hide();
            }),
            __decorate([f(s.default)], e.prototype, "ranbowSpine", void 0),
            __decorate([f(cc.Node)], e.prototype, "item", void 0),
            __decorate([f(cc.Node)], e.prototype, "addLabel", void 0),
            __decorate([f(cc.Node)], e.prototype, "itemNode", void 0),
            __decorate([f(cc.Label)], e.prototype, "titleLabel", void 0),
            __decorate([f(cc.Sprite)], e.prototype, "iconSprite", void 0),
            __decorate([h], e)
        );
    })(u.default);
n.default = y;
