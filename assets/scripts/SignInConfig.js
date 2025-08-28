var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.SignInItemType = void 0),
    (function (t) {
        (t[(t.Coin = 0)] = "Coin"), (t[(t.PropClean = 1)] = "PropClean"), (t[(t.PropBomb = 2)] = "PropBomb");
    })((i = n.SignInItemType || (n.SignInItemType = {})));
var o = [
    {index: 0, reward: [{rewardType: i.Coin, num: 1e3}]},
    {index: 1, reward: [{rewardType: i.PropBomb, num: 1}]},
    {index: 2, reward: [{rewardType: i.Coin, num: 2e3}]},
    {index: 3, reward: [{rewardType: i.PropClean, num: 2}]},
    {index: 4, reward: [{rewardType: i.PropBomb, num: 2}]},
    {index: 5, reward: [{rewardType: i.Coin, num: 3e3}]},
    {
        index: 6,
        reward: [
            {rewardType: i.Coin, num: 3e3},
            {rewardType: i.PropClean, num: 3}
        ]
    }
];
n.default = o;
