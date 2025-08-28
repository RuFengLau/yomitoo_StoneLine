var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("PopupManager"),
    s = t("SDKManager"),
    c = t("PopupBase"),
    l = t("PopupToastPanel"),
    p = cc._decorator,
    u = p.ccclass,
    d =
        (p.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                Object.defineProperty(e, "path", {
                    get: function () {
                        return "ab:ContactUsPanel/Prefabs/ContactUsPanel";
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (e.prototype.onLoad = function () {}),
                (e.prototype.onShowBegan = function () {}),
                (e.prototype.onShowEnd = function () {}),
                (e.prototype.updateDisplay = function () {}),
                (e.prototype.videoBtnClick = function () {
                    s.default.inst.showRewardVideo(function () {});
                }),
                (e.prototype.closeBtnClick = function () {
                    this.hide();
                }),
                (e.prototype.copyBtnClick = function () {
                    gm.pt.copyText("https://youtu.be/eNTuC9GYuwk"),
                        r.default.show(l.default.path, r.PopupCacheMode.Normal, {tipStr: "copy success~"}),
                        this.hide();
                }),
                __decorate([u], e)
            );
        })(c.default));
n.default = d;
