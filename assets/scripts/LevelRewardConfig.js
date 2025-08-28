var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.LevelRewardItemType = void 0),
    (function (t) {
        (t[(t.Coin = 0)] = "Coin"), (t[(t.PropClean = 1)] = "PropClean"), (t[(t.PropBomb = 2)] = "PropBomb");
    })((i = n.LevelRewardItemType || (n.LevelRewardItemType = {})));
var o = [
    {type: i.Coin, num: 1e3, odds: 30},
    {type: i.PropClean, num: 2, odds: 20},
    {type: i.PropBomb, num: 2, odds: 20},
    {type: i.Coin, num: 2e3, odds: 15},
    {type: i.Coin, num: 3e3, odds: 10},
    {type: i.Coin, num: 5e3, odds: 5}
];
n.default = o;
