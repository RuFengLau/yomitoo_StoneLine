var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.CoinRecordState = n.PaypalRecordState = void 0),
    (function (t) {
        (t[(t.Normal = 0)] = "Normal"),
            (t[(t.Processing = 1)] = "Processing"),
            (t[(t.Verifying = 2)] = "Verifying"),
            (t[(t.InReview = 3)] = "InReview"),
            (t[(t.Success = 4)] = "Success"),
            (t[(t.Faild = 5)] = "Faild");
    })(n.PaypalRecordState || (n.PaypalRecordState = {})),
    (function (t) {
        (t[(t.Normal = 0)] = "Normal"),
            (t[(t.Processing = 1)] = "Processing"),
            (t[(t.Pending = 2)] = "Pending"),
            (t[(t.Succeed = 3)] = "Succeed");
    })(n.CoinRecordState || (n.CoinRecordState = {})),
    (n.default = {
        paypal: [
            {
                index: 0,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 1,
                num: 1500,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 2,
                num: 2e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 3,
                num: 2500,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 4,
                num: 3e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 5,
                num: 3500,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 0,
                sprite: "ui_pk_pk2"
            },
            {
                index: 10,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "VISA",
                needCoin: 9e5,
                sprite: "card_visa"
            },
            {
                index: 11,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "MasterCard",
                needCoin: 9e5,
                sprite: "card_master"
            },
            {
                index: 12,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "Amazon",
                needCoin: 9e5,
                sprite: "card_amazon"
            },
            {
                index: 13,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "Steam",
                needCoin: 9e5,
                sprite: "card_steam"
            },
            {
                index: 14,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "GooglePlay",
                needCoin: 9e5,
                sprite: "card_googleplay"
            },
            {
                index: 15,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "PlayStation",
                needCoin: 9e5,
                sprite: "card_playstation"
            },
            {
                index: 16,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "Itunes",
                needCoin: 9e5,
                sprite: "card_apple"
            },
            {
                index: 17,
                num: 1e3,
                processingVideo: 60,
                processingDay: 1,
                verifyingVideo: 220,
                verifyingDay: 3,
                type: "Xbox",
                needCoin: 9e5,
                sprite: "card_xbox"
            }
        ],
        Goods: [
            {index: 0, type: "VISA", num: 1e3, needCoin: 9e5, sprite: "card_visa", pendingDay: 3, successTime: 7},
            {
                index: 1,
                type: "MasterCard",
                num: 1e3,
                needCoin: 9e5,
                sprite: "card_master",
                pendingDay: 3,
                successTime: 7
            },
            {index: 2, type: "Amazon", num: 1e3, needCoin: 9e5, sprite: "card_amazon", pendingDay: 3, successTime: 7},
            {index: 3, type: "Steam", num: 1e3, needCoin: 9e5, sprite: "card_steam", pendingDay: 3, successTime: 7},
            {
                index: 4,
                type: "GooglePlay",
                num: 1e3,
                needCoin: 9e5,
                sprite: "card_googleplay",
                pendingDay: 3,
                successTime: 7
            },
            {
                index: 5,
                type: "PlayStation",
                num: 1e3,
                needCoin: 9e5,
                sprite: "card_playstation",
                pendingDay: 3,
                successTime: 7
            },
            {index: 6, type: "Itunes", num: 1e3, needCoin: 9e5, sprite: "card_apple", pendingDay: 3, successTime: 7},
            {index: 7, type: "Xbox", num: 1e3, needCoin: 9e5, sprite: "card_xbox", pendingDay: 3, successTime: 7}
        ]
    });
