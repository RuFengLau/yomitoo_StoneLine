var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("PopupManager"),
    s = t("PopupBase"),
    c = t("WaitPanel"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.closeBtn = null), (e.okBtn = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:RulesPanel/Prefab/RulesPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                var t = this;
                r.default.closePopup(c.default.path),
                    (this.closeBtn.active = !1),
                    (this.okBtn.active = !1),
                    this.scheduleOnce(function () {
                        (t.closeBtn.active = !0), (t.okBtn.active = !0);
                    }, 4);
            }),
            __decorate([u(cc.Node)], e.prototype, "closeBtn", void 0),
            __decorate([u(cc.Node)], e.prototype, "okBtn", void 0),
            __decorate([p], e)
        );
    })(s.default);
n.default = d;
