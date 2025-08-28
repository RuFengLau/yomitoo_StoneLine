var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("CustomEventType"),
    s = t("EventMgr"),
    c = t("AdMgr"),
    l = t("DataManager"),
    p = t("PopupManager"),
    u = t("SceneManager"),
    d = t("PopupBase"),
    h = t("WaitPanel"),
    f = cc._decorator,
    y = f.ccclass,
    v =
        (f.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                Object.defineProperty(e, "path", {
                    get: function () {
                        return "ab:GameFailPanel/Prefabs/GameFailPanel";
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (e.prototype.onLoad = function () {
                    c.default.showInsert(), p.default.closePopup(h.default.path), c.default.showBanner();
                }),
                (e.prototype.onDisable = function () {
                    c.default.hideBanner();
                }),
                (e.prototype.updateDisplay = function () {}),
                (e.prototype.onAgainBtnChick = function () {
                    this.setFinishCallback(function () {
                        (l.default.inst.scoreNum.val = 0),
                            (l.default.inst.levelNum.val = 1),
                            (l.default.inst.levelStartScore.val = 0),
                            s.default.inst.emit(r.default.GAME_INIT);
                    }),
                        this.hide();
                }),
                (e.prototype.onHomeChick = function () {
                    this.setFinishCallback(function () {
                        (l.default.inst.scoreNum.val = 0),
                            (l.default.inst.levelNum.val = 1),
                            (l.default.inst.levelStartScore.val = 0),
                            p.default.show(h.default.path, p.PopupCacheMode.Frequent, {showBgSp: !1}, !0),
                            u.default.inst.enterHomeScene(
                                function () {},
                                function () {
                                    p.default.closePopup(h.default.path);
                                }
                            );
                    }),
                        this.hide();
                }),
                __decorate([y], e)
            );
        })(d.default));
n.default = v;
