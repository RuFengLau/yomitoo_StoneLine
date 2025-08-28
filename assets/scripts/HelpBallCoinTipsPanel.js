var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("CustomEventType"),
    l = t("EventMgr"),
    p = t("DataManager"),
    u = t("PopupManager"),
    d = t("SDKManager"),
    h = t("PopupBase"),
    f = t("WaitPanel"),
    y = cc._decorator,
    v = y.ccclass,
    g = y.property,
    m = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.TipsText = null), (e.levelData = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:HelpBallPanel/Prefabs/HelpBallCoinTipsPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                u.default.closePopup(f.default.path);
            }),
            (e.prototype.updateDisplay = function () {
                (this.levelData = p.default.inst.getLevelData()),
                    (this.TipsText.string =
                        "Insufficient gold, whether to add " + this.levelData.helpBallsNum + " gems for free！");
            }),
            (e.prototype.onVideoGetBtnClick = function () {
                var t = this;
                d.default.inst.showRewardVideo(function (e) {
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
            __decorate([g(cc.Label)], e.prototype, "TipsText", void 0),
            __decorate([v], e)
        );
    })(h.default);
n.default = m;
