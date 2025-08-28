var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("TaskConfig"),
    s = t("SpineHelper"),
    c = t("BundleManager"),
    l = t("DataManager"),
    p = t("SoundManager"),
    u = t("PopupBase"),
    d = t("AdMgr"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.ranbowSpine = null), (e.rewardSp = null), (e.numLabel = null), (e.coptions = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:HomePanel/Prefabs/TaskRewardPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                d.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                d.default.hideBanner();
            }),
            (e.prototype.updateDisplay = function (t) {
                var e = this;
                this.background && (this.background.opacity = 200),
                    this.main && (this.main.scale = 1),
                    (this.coptions = t),
                    this.ranbowSpine.playAn("animation", 1),
                    p.default.inst.playEffect("addCoin");
                var n = "";
                this.coptions.rewardType == r.RewardType.Coin
                    ? (n = "prize/ui_jbdui")
                    : this.coptions.rewardType == r.RewardType.PropBomb
                    ? (n = "prize/ui_daoju_zhadan")
                    : this.coptions.rewardType == r.RewardType.PropClean && (n = "prize/ui_daoju_tongsexiao"),
                    c.default.inst.loadRes("Common", n, cc.SpriteFrame, function (t) {
                        e.rewardSp && (e.rewardSp.spriteFrame = t);
                    }),
                    (this.numLabel.string = "+" + this.options.rewardNum);
            }),
            (e.prototype.saveReward = function () {
                this.coptions.rewardType == r.RewardType.Coin
                    ? ((l.default.inst.coinNum.val += this.coptions.rewardNum), l.default.inst.saveCoin())
                    : this.coptions.rewardType == r.RewardType.PropBomb
                    ? (l.default.inst.propBombNum.val += this.coptions.rewardNum)
                    : this.coptions.rewardType == r.RewardType.PropClean &&
                      (l.default.inst.propCleanNum.val += this.coptions.rewardNum);
            }),
            (e.prototype.onCloseBtnChick = function () {
                this.saveReward(), this.hide();
            }),
            __decorate([y(s.default)], e.prototype, "ranbowSpine", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "rewardSp", void 0),
            __decorate([y(cc.Label)], e.prototype, "numLabel", void 0),
            __decorate([f], e)
        );
    })(u.default);
n.default = v;
