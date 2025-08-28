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
    {id: 0, target: 0, taskTotal: 10, rewardType: i.PropBomb, rewardNum: 1},
    {id: 1, target: 1, taskTotal: 20, rewardType: i.Coin, rewardNum: 1e3},
    {id: 2, target: 2, taskTotal: 20, rewardType: i.PropClean, rewardNum: 1},
    {id: 3, target: 3, taskTotal: 30, rewardType: i.PropBomb, rewardNum: 1},
    {id: 4, target: 4, taskTotal: 40, rewardType: i.Coin, rewardNum: 2e3}
];
n.default = o;
