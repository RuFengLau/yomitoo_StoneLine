var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.TurntableItemType = void 0),
    (function (t) {
        (t[(t.Coin = 0)] = "Coin"), (t[(t.PropClean = 1)] = "PropClean"), (t[(t.PropBomb = 2)] = "PropBomb");
    })((i = n.TurntableItemType || (n.TurntableItemType = {})));
var o = [
    {index: 0, type: i.Coin, num: 1e3, probability: 20},
    {index: 1, type: i.PropClean, num: 1, probability: 20},
    {index: 2, type: i.Coin, num: 2e3, probability: 10},
    {index: 3, type: i.PropClean, num: 3, probability: 10},
    {index: 4, type: i.Coin, num: 3e3, probability: 5},
    {index: 5, type: i.PropBomb, num: 3, probability: 10},
    {index: 6, type: i.Coin, num: 4e3, probability: 5},
    {index: 7, type: i.PropBomb, num: 1, probability: 20}
];
n.default = o;
