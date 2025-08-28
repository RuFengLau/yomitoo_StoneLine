var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("TaskConfig"),
    l = t("BundleManager"),
    p = t("DataManager"),
    u = t("PopupManager"),
    d = t("TaskRewardPanel"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.progressBar = null), (e.progressLabel = null), (e.targetSp = null), (e.rewardSp = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onEnable = function () {
                this.updateShow();
            }),
            (e.prototype.updateShow = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        i,
                        o = this;
                    return __generator(this, function (a) {
                        switch (a.label) {
                            case 0:
                                return (
                                    (t = p.default.inst.getTaskConfig(p.default.inst.taskGetIndex.val)),
                                    l.default.inst.loadRes(
                                        "GamePanel",
                                        "Images/Balls/bs_" + t.target,
                                        cc.SpriteFrame,
                                        function (t) {
                                            o.targetSp && (o.targetSp.spriteFrame = t);
                                        }
                                    ),
                                    (e = ""),
                                    t.rewardType == c.RewardType.Coin
                                        ? (e = "prize/ui_jbdui")
                                        : t.rewardType == c.RewardType.PropBomb
                                        ? (e = "prize/ui_daoju_zhadan")
                                        : t.rewardType == c.RewardType.PropClean && (e = "prize/ui_daoju_tongsexiao"),
                                    l.default.inst.loadRes("Common", e, cc.SpriteFrame, function (t) {
                                        o.rewardSp && (o.rewardSp.spriteFrame = t);
                                    }),
                                    (this.progressBar.progress = 0),
                                    (this.rewardSp.node.scale = 0.7),
                                    (this.rewardSp.node.x = 174),
                                    (this.rewardSp.node.opacity = 255),
                                    p.default.inst.taskGetIndex.val < p.default.inst.taskIndex.val
                                        ? ((this.progressLabel.string = t.taskTotal + "/" + t.taskTotal),
                                          cc.tween(this.progressBar).to(0.3, {progress: 1}).start(),
                                          [4, this.waitTime(0.3)])
                                        : [3, 4]
                                );
                            case 1:
                                return (
                                    a.sent(),
                                    cc
                                        .tween(this.rewardSp.node)
                                        .to(0.3, {x: 0, scale: 2})
                                        .to(0.2, {opacity: 0})
                                        .start(),
                                    [4, this.waitTime(0.3)]
                                );
                            case 2:
                                return (
                                    a.sent(),
                                    (n = {rewardType: t.rewardType, rewardNum: t.rewardNum}),
                                    [4, u.default.show(d.default.path, u.PopupCacheMode.Frequent, n)]
                                );
                            case 3:
                                return a.sent(), (p.default.inst.taskGetIndex.val += 1), this.updateShow(), [3, 5];
                            case 4:
                                (i = p.default.inst.taskCleanNum.val / t.taskTotal),
                                    (this.progressLabel.string = p.default.inst.taskCleanNum.val + "/" + t.taskTotal),
                                    cc.tween(this.progressBar).to(0.3, {progress: i}).start(),
                                    (a.label = 5);
                            case 5:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.waitTime = function (t) {
                var e = this;
                return new Promise(function (n) {
                    e.scheduleOnce(function () {
                        n(null);
                    }, t);
                });
            }),
            __decorate([y(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            __decorate([y(cc.Label)], e.prototype, "progressLabel", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "targetSp", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "rewardSp", void 0),
            __decorate([f], e)
        );
    })(cc.Component);
n.default = v;
