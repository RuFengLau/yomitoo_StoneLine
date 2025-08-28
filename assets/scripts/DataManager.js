var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a,
    r = t("CoinCreateConfig"),
    s = t("LevelConfig"),
    c = t("RandomTaskConfig"),
    l = t("TaskConfig"),
    p = t("MSingleton"),
    u = t("ToolManager");
(function (t) {
    (t[(t.Boolean = 0)] = "Boolean"),
        (t[(t.Number = 1)] = "Number"),
        (t[(t.String = 2)] = "String"),
        (t[(t.Json = 3)] = "Json");
})(a || (a = {}));
var d = (function (t) {
    function e() {
        var e = t.call(this) || this;
        return (
            (e.version = 1),
            (e.levelData = null),
            (e.coinNum = null),
            (e.levelNum = null),
            (e.scoreNum = null),
            (e.highestScore = null),
            (e.levelTurnNum = null),
            (e.isRulesShow = null),
            (e.musicSwitch = null),
            (e.vibrationSwitch = null),
            (e.signInDay = null),
            (e.cSignInDayIndex = null),
            (e.continuitySignInDay = null),
            (e.dateBinder = null),
            (e.theme = null),
            (e.themeIndex = null),
            (e.skipAd = null),
            (e.videoScratchcrdTimes = null),
            (e.videoSpinTimes = null),
            (e.levelRewardShowTimes = null),
            (e.propBombNum = null),
            (e.propCleanNum = null),
            (e.levelStartScore = null),
            (e.bSelectPropBomb = null),
            (e.bSelectPropClean = null),
            (e.taskIndex = null),
            (e.taskCleanNum = null),
            (e.taskGetIndex = null),
            (e.helpTime = null),
            (e.isReviewMode = null),
            (e.themeList = ["blue", "green", "purple", "red", "yellow"]),
            e
        );
    }
    return (
        __extends(e, t),
        (e.prototype.init = function () {
            var t = this;
            (this.taskIndex = gmbinder.GmBinder.createBinder(
                "taskIndex",
                this.getItem("taskIndex", 0, a.Number),
                function (e) {
                    t.setItem("taskIndex", e, a.Number);
                }
            )),
                (this.taskGetIndex = gmbinder.GmBinder.createBinder(
                    "taskGetIndex",
                    this.getItem("taskGetIndex", 0, a.Number),
                    function (e) {
                        t.setItem("taskGetIndex", e, a.Number);
                    }
                )),
                (this.taskCleanNum = gmbinder.GmBinder.createBinder(
                    "taskCleanNum",
                    this.getItem("taskCleanNum", 0, a.Number),
                    function (e) {
                        t.setItem("taskCleanNum", e, a.Number);
                    }
                )),
                (this.helpTime = gmbinder.GmBinder.createBinder(
                    "helpTime",
                    this.getItem("helpTime", 0, a.Number),
                    function (e) {
                        t.setItem("helpTime", e, a.Number);
                    }
                )),
                (this.propBombNum = gmbinder.GmBinder.createBinder(
                    "propBombNum",
                    this.getItem("propBombNum", 0, a.Number),
                    function (e) {
                        t.setItem("propBombNum", e, a.Number);
                    }
                )),
                (this.propCleanNum = gmbinder.GmBinder.createBinder(
                    "propCleanNum",
                    this.getItem("propCleanNum", 0, a.Number),
                    function (e) {
                        t.setItem("propCleanNum", e, a.Number);
                    }
                )),
                (this.levelStartScore = gmbinder.GmBinder.createBinder(
                    "levelStartScore",
                    this.getItem("levelStartScore", 0, a.Number),
                    function (e) {
                        t.setItem("levelStartScore", e, a.Number);
                    }
                )),
                (this.levelData = gmbinder.GmBinder.createBinder(
                    "levelData",
                    this.getItem("levelData", s.default, a.Json),
                    function (e) {
                        t.setItem("levelData", e, a.Json);
                    }
                )),
                (this.coinNum = gmbinder.GmBinder.createBinder(
                    "coinNum",
                    this.getItem("coinNum", 0, a.Number),
                    function () {}
                )),
                (this.isRulesShow = gmbinder.GmBinder.createBinder(
                    "isRulesShow",
                    this.getItem("isRulesShow", !0, a.Boolean),
                    function (e) {
                        t.setItem("isRulesShow", e, a.Boolean);
                    }
                )),
                (this.isReviewMode = gmbinder.GmBinder.createBinder(
                    "isReviewMode",
                    this.getItem("isReviewMode", !0, a.Boolean),
                    function (e) {
                        t.setItem("isReviewMode", e, a.Boolean);
                    }
                )),
                (this.musicSwitch = gmbinder.GmBinder.createBinder(
                    "musicSwitch",
                    this.getItem("musicSwitch", !0, a.Boolean),
                    function (e) {
                        t.setItem("musicSwitch", e, a.Boolean);
                    }
                )),
                (this.vibrationSwitch = gmbinder.GmBinder.createBinder(
                    "vibrationSwitch",
                    this.getItem("vibrationSwitch", !0, a.Boolean),
                    function (e) {
                        t.setItem("vibrationSwitch", e, a.Boolean);
                    }
                )),
                (this.signInDay = gmbinder.GmBinder.createBinder(
                    "signInDay",
                    this.getItem("signInDay", 0, a.Number),
                    function (e) {
                        t.setItem("signInDay", e, a.Number);
                    }
                )),
                (this.cSignInDayIndex = gmbinder.GmBinder.createBinder(
                    "cSignInDayIndex",
                    this.getItem("cSignInDayIndex", -1, a.Number),
                    function (e) {
                        t.setItem("cSignInDayIndex", e, a.Number);
                    }
                )),
                (this.continuitySignInDay = gmbinder.GmBinder.createBinder(
                    "continuitySignInDay",
                    this.getItem("continuitySignInDay", 0, a.Number),
                    function (e) {
                        t.setItem("continuitySignInDay", e, a.Number);
                    }
                )),
                (this.dateBinder = gmbinder.GmBinder.createBinder(
                    "dateBinder",
                    this.getItem("dateBinder", "", a.String),
                    function (e) {
                        t.setItem("dateBinder", e, a.String);
                    }
                )),
                (this.theme = gmbinder.GmBinder.createBinder(
                    "theme",
                    this.getItem("theme", "yellow", a.String),
                    function (e) {
                        t.setItem("theme", e, a.String);
                    }
                )),
                (this.themeIndex = gmbinder.GmBinder.createBinder(
                    "themeIndex",
                    this.getItem("themeIndex", 4, a.Number),
                    function (e) {
                        t.setItem("themeIndex", e, a.Number), (t.theme.val = t.themeList[e]);
                    }
                )),
                (this.skipAd = gmbinder.GmBinder.createBinder("skipAd", !1, function () {})),
                (this.levelNum = gmbinder.GmBinder.createBinder(
                    "levelNum",
                    this.getItem("levelNum", 1, a.Number),
                    function (e) {
                        t.setItem("levelNum", e, a.Number);
                    }
                )),
                (this.scoreNum = gmbinder.GmBinder.createBinder(
                    "scoreNum",
                    this.getItem("scoreNum", 0, a.Number),
                    function (e) {
                        t.setItem("scoreNum", e, a.Number);
                    }
                )),
                (this.highestScore = gmbinder.GmBinder.createBinder(
                    "highestScore",
                    this.getItem("highestScore", 0, a.Number),
                    function (e) {
                        t.setItem("highestScore", e, a.Number);
                    }
                )),
                (this.levelTurnNum = gmbinder.GmBinder.createBinder(
                    "levelTurnNum",
                    this.getItem("levelTurnNum", 0, a.Number),
                    function (e) {
                        t.setItem("levelTurnNum", e, a.Number);
                    }
                )),
                (this.bSelectPropBomb = gmbinder.GmBinder.createBinder("bSelectPropBomb", !1, function () {})),
                (this.bSelectPropClean = gmbinder.GmBinder.createBinder("bSelectPropClean", !1, function () {})),
                this.isNewDay();
        }),
        (e.prototype.saveCoin = function () {
            this.setItem("coinNum", this.coinNum.val, a.Number);
        }),
        (e.prototype.setItem = function (t, e, n) {
            (e = this.valueToStr(e, n)), cc.sys.localStorage.setItem(t + this.version, e);
        }),
        (e.prototype.getItem = function (t, e, n) {
            var i = cc.sys.localStorage.getItem(t + this.version);
            return "" == i || null == i || null == i || "NaN" == i.toString() ? e : this.strToValue(i, n);
        }),
        (e.prototype.valueToStr = function (t, e) {
            switch (e) {
                case a.Boolean:
                    return t ? "true" : "false";
                case a.Number:
                    return t.toString();
                case a.String:
                    return t;
                case a.Json:
                    return JSON.stringify(t);
            }
            return null;
        }),
        (e.prototype.strToValue = function (t, e) {
            switch (e) {
                case a.Boolean:
                    return "true" == t;
                case a.Number:
                    return Number(t);
                case a.String:
                    return t;
                case a.Json:
                    return JSON.parse(t);
            }
            return null;
        }),
        (e.prototype.isNewDay = function () {
            var t,
                n = !1,
                i = new Date().getFullYear().toString(),
                o = new Date().getTime() - new Date(i).getTime(),
                a = Math.ceil(o / 864e5) + 1;
            console.log("今天是 %s 年中的第 %s 天", i, a);
            var r = String(i) + String(a);
            e.inst.dateBinder.val.length != r && (n = !0),
                (t = Number(r) - Number(e.inst.dateBinder.val)),
                console.log("gapDay", t),
                n &&
                    ((e.inst.dateBinder.val = r),
                    e.inst.cSignInDayIndex.val++,
                    e.inst.cSignInDayIndex.val >= 7 && (e.inst.cSignInDayIndex.val = 0),
                    e.inst.signInDay.val >= 7 && (e.inst.signInDay.val = 0),
                    t > 1 && (this.continuitySignInDay.val = 0));
        }),
        (e.prototype.createPkaMoney = function () {
            return 0;
        }),
        (e.prototype.createCoin = function () {
            for (var t = 0, e = r.default; t < e.length; t++) {
                var n = e[t];
                if (this.coinNum.val <= n.coin) return u.default.inst.randomRangeInt(n.range[0], n.range[1]);
            }
            return 0;
        }),
        (e.prototype.addTheme = function () {
            var t = this.themeIndex.val + 1;
            t >= this.themeList.length ? (this.themeIndex.val = 0) : (this.themeIndex.val = t);
        }),
        (e.prototype.Clear = function () {
            cc.sys.localStorage.clear();
        }),
        (e.prototype.getAchievementState = function (t) {
            return this.getItem("AchievementState_" + t, !1, a.Boolean);
        }),
        (e.prototype.updateAchievementState = function (t, e) {
            this.setItem("AchievementState_" + t, e, a.Boolean);
        }),
        (e.prototype.getOnLineTime = function () {
            return this.getItem("OnLineTime", 0, a.Number);
        }),
        (e.prototype.updateOnLineTime = function (t) {
            var e = this.getOnLineTime();
            (e += t), this.setItem("OnLineTime", e, a.Number);
        }),
        (e.prototype.getTurnTableTime = function () {
            return this.getItem("TurnTableTime", 0, a.Number);
        }),
        (e.prototype.updateTurnTableTime = function (t) {
            var e = this.getTurnTableTime();
            (e += t), this.setItem("TurnTableTime", e, a.Number);
        }),
        (e.prototype.getAddScore = function (t) {
            return 5 * Math.pow(t, 2) + 5;
        }),
        (e.prototype.getLevelData = function () {
            var t = s.default["" + e.inst.levelNum.val];
            return (
                null == t &&
                    (t = {
                        targetScore: 4e3 * e.inst.levelNum.val - 54e3,
                        helpTime: 1,
                        helpBallsNum: 30,
                        balls: [32, 32, 32, 32, 32, 0, 0]
                    }),
                t
            );
        }),
        (e.prototype.getBonusScore = function (t) {
            var e = -10 * Math.pow(t, 2) - 70 * t + 1e3;
            return e <= 0 && (e = 0), e;
        }),
        (e.prototype.ClearRewardCoinNum = function (t) {
            var e = [0, 0, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90, 95, 100, 105, 110];
            return t < e.length ? e[t] * t : 110 * t;
        }),
        (e.prototype.getTaskConfig = function (t) {
            void 0 === t && (t = null);
            var n = null,
                i = null == t ? e.inst.taskIndex.val : t;
            return (
                null == (n = i < l.default.length ? l.default[i] : this.getItem("TaskConfig_" + i, null, a.Json)) &&
                    ((n = c.default[u.default.inst.randomRangeInt(0, c.default.length)]),
                    this.setItem("TaskConfig_" + i, n, a.Json)),
                n
            );
        }),
        (e.prototype.updateTaskCleanNum = function (t, e) {
            this.getTaskConfig().target == t && (this.taskCleanNum.val += e);
        }),
        e
    );
})(p.Singleton());
n.default = d;
