const { LocalizeMgr } = require("../ymtScripts/yomitoo/tools/LocalizeMgr");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("CustomEventType"),
    l = t("EventMgr"),
    p = t("AdMgr"),
    u = t("DataManager"),
    d = t("PopupManager"),
    h = t("SDKManager"),
    f = t("PopupBase"),
    y = t("WaitPanel"),
    v = t("HelpBallCoinTipsPanel"),
    g = cc._decorator,
    m = g.ccclass,
    b = g.property,
    S = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.BallsNum1 = null),
                (e.BallsNum2 = null),
                (e.CoinNum = null),
                (e.needCoinNum = 1e4),
                (e.levelData = null),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:HelpBallPanel/Prefabs/HelpBallPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                p.default.showInsert(), d.default.closePopup(y.default.path), p.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                p.default.hideBanner();
            }),
            (e.prototype.updateDisplay = function () {
                (u.default.inst.helpTime.val += 1),
                    (this.levelData = u.default.inst.getLevelData()),
                    (this.BallsNum1.string = "+" + this.levelData.helpBallsNum),
                    (this.BallsNum2.string = LocalizeMgr.inst.toLocalize(`增加{0}颗宝石可以大大提高通关率`, [String(this.levelData.helpBallsNum)])),
                    (this.CoinNum.string = "" + this.needCoinNum);
            }),
            (e.prototype.onCoinGetBtnClick = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function () {
                        return (
                            u.default.inst.coinNum.val >= this.needCoinNum
                                ? ((u.default.inst.coinNum.val -= this.needCoinNum),
                                  u.default.inst.saveCoin(),
                                  l.default.inst.emit(c.default.ADD_HELP_BALLS),
                                  this.hide())
                                : (this.hide(), d.default.show(v.default.path, d.PopupCacheMode.Frequent)),
                            [2]
                        );
                    });
                });
            }),
            (e.prototype.onVideoGetBtnClick = function () {
                var t = this;
                h.default.inst.showRewardVideo(function (e) {
                    return __awaiter(t, void 0, void 0, function () {
                        return __generator(this, function () {
                            return e && (l.default.inst.emit(c.default.ADD_HELP_BALLS), this.hide()), [2];
                        });
                    });
                });
            }),
            (e.prototype.onCloseBtnClick = function () {
                this.hide();
            }),
            __decorate([b(cc.Label)], e.prototype, "BallsNum1", void 0),
            __decorate([b(cc.Label)], e.prototype, "BallsNum2", void 0),
            __decorate([b(cc.Label)], e.prototype, "CoinNum", void 0),
            __decorate([m], e)
        );
    })(f.default);
n.default = S;
