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
    f = t("GameFailPanel"),
    y = t("PopupBase"),
    v = t("WaitPanel"),
    g = cc._decorator,
    m = g.ccclass,
    b = g.property,
    S = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.closeBtn = null),
                (e.progress = null),
                (e.timeSp = null),
                (e.sp = []),
                (e.bPaush = !1),
                (e.callback = null),
                (e.score = 0),
                (e.level = 0),
                (e.levelStartScore = 0),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:RevivePanel/Prefabs/RevivePanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.setData = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function () {
                        return (
                            (this.score = u.default.inst.scoreNum.val),
                            (this.level = u.default.inst.levelNum.val),
                            (this.levelStartScore = u.default.inst.levelStartScore.val),
                            [2]
                        );
                    });
                });
            }),
            (e.prototype.onLoad = function () {
                this.setData().then(function () {
                    (u.default.inst.scoreNum.val = 0),
                        (u.default.inst.levelNum.val = 1),
                        (u.default.inst.levelStartScore.val = 0);
                }),
                    p.default.showInsert(),
                    d.default.closePopup(v.default.path),
                    p.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                p.default.hideBanner();
            }),
            (e.prototype.updateDisplay = function () {
                var t = this.sp.length,
                    e = 1,
                    n = 0;
                (this.bPaush = !1),
                    (this.callback = function (i) {
                        if (!this.bPaush) {
                            (e += i) >= 1 && ((e = 0), (t -= 1), (this.timeSp.spriteFrame = this.sp[t]));
                            var o = 1 - (n += i) / 10;
                            (o = o > 0 ? o : 0), (this.progress.fillRange = o), o <= 0 && this.onCloseChick();
                        }
                    }),
                    this.callback(0),
                    this.schedule(this.callback, 0.01),
                    cc.tween(this.progress);
            }),
            (e.prototype.onReviveBtnChick = function () {
                var t = this;
                (this.bPaush = !0),
                    h.default.inst.showRewardVideo(function (e) {
                        return __awaiter(t, void 0, void 0, function () {
                            return __generator(this, function () {
                                return (
                                    e
                                        ? ((u.default.inst.scoreNum.val = this.score),
                                          (u.default.inst.levelNum.val = this.level),
                                          (u.default.inst.levelStartScore.val = this.levelStartScore),
                                          l.default.inst.emit(c.default.GAME_REVIVE),
                                          this.unschedule(this.callback),
                                          this.hide())
                                        : (this.bPaush = !1),
                                    [2]
                                );
                            });
                        });
                    });
            }),
            (e.prototype.onCloseChick = function () {
                this.unschedule(this.callback),
                    this.hide(),
                    this.setFinishCallback(function () {
                        d.default.show(f.default.path, d.PopupCacheMode.Frequent);
                    });
            }),
            __decorate([b(cc.Node)], e.prototype, "closeBtn", void 0),
            __decorate([b(cc.Sprite)], e.prototype, "progress", void 0),
            __decorate([b(cc.Sprite)], e.prototype, "timeSp", void 0),
            __decorate([b({type: [cc.SpriteFrame]})], e.prototype, "sp", void 0),
            __decorate([m], e)
        );
    })(y.default);
n.default = S;
