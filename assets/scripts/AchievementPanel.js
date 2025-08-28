var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("AchievementConfig"),
    s = t("CustomEventType"),
    c = t("EventMgr"),
    l = t("PopupManager"),
    p = t("PopupBase"),
    u = t("WaitPanel"),
    d = t("AchievementItem"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.item = null), (e.layout = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:AchievementPanel/Prefabs/AchievementPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                l.default.closePopup(u.default.path), (this.item.active = !1);
            }),
            (e.prototype.updateDisplay = function () {
                this.layout.removeAllChildren();
                for (var t = 0; t < r.default.length; t++) {
                    var e = cc.instantiate(this.item);
                    (e.active = !0), e.getComponent(d.default).setDate(r.default[t]), this.layout.addChild(e);
                }
            }),
            (e.prototype.onCloseChick = function () {
                c.default.inst.emit(s.default.ACHIEVEMENT_ITEM_CHICK), this.hide();
            }),
            __decorate([y(cc.Node)], e.prototype, "item", void 0),
            __decorate([y(cc.Node)], e.prototype, "layout", void 0),
            __decorate([f], e)
        );
    })(p.default);
n.default = v;
