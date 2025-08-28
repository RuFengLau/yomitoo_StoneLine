var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.RewardType = void 0),
    (function (t) {
        (t[(t.Coin = 0)] = "Coin"), (t[(t.PropClean = 1)] = "PropClean"), (t[(t.PropBomb = 2)] = "PropBomb");
    })((i = n.RewardType || (n.RewardType = {})));
var o = [
    {id: 7, target: 0, taskTotal: 180, rewardType: i.PropClean, rewardNum: 1},
    {id: 8, target: 1, taskTotal: 180, rewardType: i.PropBomb, rewardNum: 1},
    {id: 9, target: 2, taskTotal: 180, rewardType: i.PropClean, rewardNum: 1},
    {id: 10, target: 3, taskTotal: 180, rewardType: i.PropBomb, rewardNum: 1},
    {id: 12, target: 4, taskTotal: 180, rewardType: i.PropBomb, rewardNum: 1}
];
n.default = o;
