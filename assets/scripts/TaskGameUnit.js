var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("BundleManager"),
    s = t("DataManager"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.tProgress = null), (e.targetSp = null), (e.taskEnd = null), (e.bRunAction = !1), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onEnable = function () {
                (this.bRunAction = !1),
                    this.updateSp(),
                    this.updateTask(),
                    s.default.inst.taskCleanNum.bindObserveFunc(this.updateTask, this);
            }),
            (e.prototype.onDisable = function () {
                s.default.inst.taskCleanNum.unBindObserveFunc(this.updateTask);
            }),
            (e.prototype.updateSp = function () {
                var t = this,
                    e = s.default.inst.getTaskConfig();
                r.default.inst.loadRes("GamePanel", "Images/Balls/bs_" + e.target, cc.SpriteFrame, function (e) {
                    t.targetSp && (t.targetSp.spriteFrame = e);
                });
            }),
            (e.prototype.updateTask = function () {
                var t = this;
                if (!this.bRunAction) {
                    var e = s.default.inst.getTaskConfig();
                    this.taskEnd.active = !1;
                    var n = s.default.inst.taskCleanNum.val,
                        i = e.taskTotal;
                    (this.tProgress.string = n + "/" + i),
                        n >= i &&
                            ((s.default.inst.taskIndex.val += 1),
                            (s.default.inst.taskCleanNum.val = 0),
                            (this.bRunAction = !0),
                            (this.taskEnd.active = !0),
                            (this.taskEnd.position = this.node.convertToNodeSpaceAR(cc.v3(375, 700, 0))),
                            (this.taskEnd.scale = 0),
                            (this.tProgress.string = i + "/" + i),
                            cc
                                .tween(this.taskEnd)
                                .to(0.3, {scale: 1}, {easing: "backOut"})
                                .delay(0.2)
                                .to(0.5, {scale: 0.4, position: cc.v3(0, 0, 0)})
                                .start(),
                            cc
                                .tween(this.node)
                                .delay(2)
                                .to(0.3, {x: 440})
                                .call(function () {
                                    t.updateSp(), (t.taskEnd.active = !1);
                                })
                                .to(0.3, {x: 314})
                                .call(function () {
                                    (t.bRunAction = !1), t.updateTask();
                                })
                                .start());
                }
            }),
            __decorate([p(cc.Label)], e.prototype, "tProgress", void 0),
            __decorate([p(cc.Sprite)], e.prototype, "targetSp", void 0),
            __decorate([p(cc.Node)], e.prototype, "taskEnd", void 0),
            __decorate([l], e)
        );
    })(cc.Component);
n.default = u;
