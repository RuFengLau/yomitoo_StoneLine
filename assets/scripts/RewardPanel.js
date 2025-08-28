var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("TurntableConfig"),
    s = t("SpineHelper"),
    c = t("BundleManager"),
    l = t("DataManager"),
    p = t("SDKManager"),
    u = t("SoundManager"),
    d = t("PopupBase"),
    h = t("AdMgr"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    g = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.coinNode = null),
                (e.closeBtnNode = null),
                (e.coinLabel = null),
                (e.ranbowSpine = null),
                (e.videoBtnNode = null),
                (e.getBtnNode = null),
                (e.rewardSp = null),
                (e.coptions = null),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:RewardPanel/Prefabs/RewardPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                h.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                h.default.hideBanner();
            }),
            (e.prototype.onShowBegan = function () {
                this.ranbowSpine.playAn("animation", 1), u.default.inst.playEffect("addCoin");
            }),
            (e.prototype.onShowEnd = function () {}),
            (e.prototype.updateDisplay = function (t) {
                var e = this;
                (this.coptions = t),
                    (this.coinLabel.string = "+" + t.num),
                    (this.videoBtnNode.active = !t.isNoVideo),
                    (this.getBtnNode.active = t.isNoVideo),
                    (this.closeBtnNode.active = !t.isNoVideo);
                var n = "";
                t.type == r.TurntableItemType.Coin
                    ? (n = "Images/ui_jbd_big")
                    : t.type == r.TurntableItemType.PropBomb
                    ? (n = "Images/ui_zd_big")
                    : t.type == r.TurntableItemType.PropClean && (n = "Images/ui_wnq_big"),
                    (this.rewardSp.node.active = !1),
                    c.default.inst.loadRes("RewardPanel", n, cc.SpriteFrame, function (t) {
                        null != e.rewardSp &&
                            ((e.rewardSp.getComponent(cc.Sprite).spriteFrame = t), (e.rewardSp.node.active = !0));
                    });
            }),
            (e.prototype.videoBtnClick = function () {
                var t = this;
                p.default.inst.showRewardVideo(function (e) {
                    e && t.videoSuccess();
                });
            }),
            (e.prototype.onGetBtnChick = function () {
                this.hide(), this.saveReward();
            }),
            (e.prototype.saveReward = function () {
                this.coptions.type == r.TurntableItemType.Coin
                    ? ((l.default.inst.coinNum.val += this.coptions.num), l.default.inst.saveCoin())
                    : this.coptions.type == r.TurntableItemType.PropBomb
                    ? (l.default.inst.propBombNum.val += this.coptions.num)
                    : this.coptions.type == r.TurntableItemType.PropClean &&
                      (l.default.inst.propCleanNum.val += this.coptions.num);
            }),
            (e.prototype.videoSuccess = function () {
                this.hide(), this.saveReward();
            }),
            (e.prototype.onCloseBtnChick = function () {
                this.hide();
            }),
            __decorate([v(cc.Node)], e.prototype, "coinNode", void 0),
            __decorate([v(cc.Node)], e.prototype, "closeBtnNode", void 0),
            __decorate([v(cc.Label)], e.prototype, "coinLabel", void 0),
            __decorate([v(s.default)], e.prototype, "ranbowSpine", void 0),
            __decorate([v(cc.Node)], e.prototype, "videoBtnNode", void 0),
            __decorate([v(cc.Node)], e.prototype, "getBtnNode", void 0),
            __decorate([v(cc.Sprite)], e.prototype, "rewardSp", void 0),
            __decorate([y], e)
        );
    })(d.default);
n.default = g;
