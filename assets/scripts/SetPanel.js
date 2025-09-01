var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("AdMgr"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("SceneManager"),
    p = t("ContactUsPanel"),
    u = t("PopupBase"),
    d = t("WaitPanel"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.tLabel = null),
                (e.vibrationIconOn = null),
                (e.vibrationIconOff = null),
                (e.tapTimes = 0),
                (e.tm = 0),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:SetPanel/Prefab/SetPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                s.default.inst.vibrationSwitch.bindObserveFunc(this.updateVibrationIcon, this), r.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                r.default.hideBanner(), s.default.inst.vibrationSwitch.unBindObserveFunc(this.updateVibrationIcon);
            }),
            (e.prototype.updateDisplay = function (t) {
                0 === t.type ? (this.tLabel.string = String("设置").toLocalize()) : (this.tLabel.string = String("暂停").toLocalize()),
                    this.updateVibrationIcon();
            }),
            (e.prototype.updateVibrationIcon = function () {
                (this.vibrationIconOn.active = s.default.inst.vibrationSwitch.val),
                    (this.vibrationIconOff.active = !s.default.inst.vibrationSwitch.val);
            }),
            (e.prototype.restartBtnClick = function () {
                c.default.show(d.default.path, c.PopupCacheMode.Frequent, {showBgSp: !1}, !0),
                    l.default.inst.enterGameScene(
                        function () {},
                        function () {
                            c.default.closePopup(d.default.path);
                        }
                    );
            }),
            (e.prototype.homeBtnClick = function () {
                c.default.show(d.default.path, c.PopupCacheMode.Frequent, {showBgSp: !1}, !0),
                    l.default.inst.enterHomeScene(
                        function () {},
                        function () {
                            c.default.closePopup(d.default.path);
                        }
                    );
            }),
            (e.prototype.soundBtnClick = function () {}),
            (e.prototype.onVibrationBtnClick = function () {
                s.default.inst.vibrationSwitch.val = !s.default.inst.vibrationSwitch.val;
            }),
            (e.prototype.contactBtnClick = function () {
                c.default.show(p.default.path, c.PopupCacheMode.Normal);
            }),
            (e.prototype.testShow = function () {}),
            (e.prototype.update = function (t) {
                (this.tm += t), this.tm >= 0.7 && ((this.tm = 0), (this.tapTimes = 0));
            }),
            __decorate([y(cc.Label)], e.prototype, "tLabel", void 0),
            __decorate([y(cc.Node)], e.prototype, "vibrationIconOn", void 0),
            __decorate([y(cc.Node)], e.prototype, "vibrationIconOff", void 0),
            __decorate([f], e)
        );
    })(u.default);
n.default = v;
