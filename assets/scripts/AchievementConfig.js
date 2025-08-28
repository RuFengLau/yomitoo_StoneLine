var t = require;
var e = module;
var n = exports;
var i, o;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.AchievementRewardType = n.AchievementTaskType = void 0),
    (function (t) {
        (t[(t.Guide = 0)] = "Guide"),
            (t[(t.Level = 1)] = "Level"),
            (t[(t.OnLine = 2)] = "OnLine"),
            (t[(t.Turntable = 3)] = "Turntable"),
            (t[(t.SignIn = 4)] = "SignIn"),
            (t[(t.TargetTask = 5)] = "TargetTask"),
            (t[(t.Score = 6)] = "Score");
    })((i = n.AchievementTaskType || (n.AchievementTaskType = {}))),
    (function (t) {
        (t[(t.Coin = 0)] = "Coin"), (t[(t.PropClean = 1)] = "PropClean"), (t[(t.PropBomb = 2)] = "PropBomb");
    })((o = n.AchievementRewardType || (n.AchievementRewardType = {})));
var a = [
    {
        id: 0,
        title: "新手之路",
        des: "体验新手引导",
        iconName: "ui_jiangbei_1",
        taskTotal: 1,
        taskType: i.Guide,
        reward: [{rewardType: o.Coin, num: 1e3}]
    },
    {
        id: 1,
        title: "关卡能手",
        des: "突破第5关",
        iconName: "ui_jiangbei_2",
        taskTotal: 5,
        taskType: i.Level,
        reward: [{rewardType: o.Coin, num: 1e3}]
    },
    {
        id: 2,
        title: "孰能生巧",
        des: "突破第10关",
        iconName: "ui_jiangbei_3",
        taskTotal: 10,
        taskType: i.Level,
        reward: [{rewardType: o.Coin, num: 2e3}]
    },
    {
        id: 3,
        title: "在线达人",
        des: "保持在线30分钟",
        iconName: "ui_jiangbei_4",
        taskTotal: 30,
        taskType: i.OnLine,
        reward: [{rewardType: o.Coin, num: 1e3}]
    },
    {
        id: 4,
        title: "幸运之神",
        des: "转盘抽奖10次",
        iconName: "ui_jiangbei_5",
        taskTotal: 10,
        taskType: i.Turntable,
        reward: [{rewardType: o.Coin, num: 3e3}]
    },
    {
        id: 5,
        title: "荣耀回归",
        des: "连续签到3天",
        iconName: "ui_jiangbei_6",
        taskTotal: 3,
        taskType: i.SignIn,
        reward: [{rewardType: o.Coin, num: 3e3}]
    },
    {
        id: 6,
        title: "成长之路",
        des: "完成5次目标任务",
        iconName: "ui_jiangbei_7",
        taskTotal: 5,
        taskType: i.TargetTask,
        reward: [{rewardType: o.Coin, num: 2e3}]
    },
    {
        id: 7,
        title: "得分能手",
        des: "突破20000分",
        iconName: "ui_jiangbei_8",
        taskTotal: 99999,
        taskType: i.Score,
        reward: [
            {rewardType: o.Coin, num: 5e3},
            {rewardType: o.PropBomb, num: 1}
        ]
    },
    {
        id: 8,
        title: "得分王者",
        des: "突破99999分",
        iconName: "ui_jiangbei_9",
        taskTotal: 99999,
        taskType: i.Score,
        reward: [
            {rewardType: o.Coin, num: 8e3},
            {rewardType: o.PropBomb, num: 1},
            {rewardType: o.PropClean, num: 1}
        ]
    }
];
n.default = a;
