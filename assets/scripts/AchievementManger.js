var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("AchievementConfig"),
    s = t("AchievementRewardPanel"),
    c = t("DataManager"),
    l = t("MSingleton"),
    p = t("PopupManager"),
    u = cc._decorator,
    d = u.ccclass,
    h =
        (u.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.progressMap = null), e;
            }
            return (
                __extends(e, t),
                (e.prototype.init = function () {
                    console.log("-----------------------------------------------------"),
                        (this.progressMap = new Map()),
                        this.updateGuideTask(),
                        this.updateOnLineTask(),
                        this.updateLevelTask(),
                        this.updateScoreTask(),
                        this.updateSignInTask(),
                        this.updateTargetTask(),
                        this.updateTurntableTask();
                }),
                (e.prototype.setProgress = function (t, e) {
                    (e = e > 1 ? 1 : e), this.progressMap.set(t, e);
                }),
                (e.prototype.getProgress = function (t) {
                    var e = this.progressMap.get(t);
                    return null == e && (e = 0), e;
                }),
                (e.prototype.updateLevelTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.Level &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.levelNum.val > r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                (e.prototype.updateGuideTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.Guide &&
                            (c.default.inst.getAchievementState(r.default[t].id) ||
                                c.default.inst.isRulesShow.val ||
                                (c.default.inst.updateAchievementState(r.default[t].id, !0),
                                p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                    AchievementDataType: r.default[t]
                                })));
                }),
                (e.prototype.updateOnLineTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.OnLine &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.getOnLineTime() >= 3600 * r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                (e.prototype.updateTurntableTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.Turntable &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.getTurnTableTime() >= r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                (e.prototype.updateSignInTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.SignIn &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.continuitySignInDay.val >= r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                (e.prototype.updateTargetTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.TargetTask &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.taskGetIndex.val > r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                (e.prototype.updateScoreTask = function () {
                    for (var t = 0; t < r.default.length; t++)
                        r.default[t].taskType == r.AchievementTaskType.Score &&
                            !c.default.inst.getAchievementState(r.default[t].id) &&
                            c.default.inst.scoreNum.val >= r.default[t].taskTotal &&
                            (c.default.inst.updateAchievementState(r.default[t].id, !0),
                            p.default.show(s.default.path, p.PopupCacheMode.Frequent, {
                                AchievementDataType: r.default[t]
                            }));
                }),
                __decorate([d], e)
            );
        })(l.Singleton()));
n.default = h;
