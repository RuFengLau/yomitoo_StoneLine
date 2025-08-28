var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("PopupBase"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.inviteCodeLabel = null), (e.isOpenLabel = null), (e.skipAdLabel = null), e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:TestPanel/Prefabs/TestPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {}),
            (e.prototype.updateDisplay = function () {
                this.updateSkipAdBtn();
            }),
            (e.prototype.addCoin = function () {
                (r.default.inst.coinNum.val += 1e6), r.default.inst.saveCoin();
            }),
            (e.prototype.onSkipAdBtnChick = function () {
                (r.default.inst.skipAd.val = !r.default.inst.skipAd.val), this.updateSkipAdBtn();
            }),
            (e.prototype.updateSkipAdBtn = function () {
                this.skipAdLabel.string = "skipAd: " + r.default.inst.skipAd.val;
            }),
            __decorate([p(cc.Label)], e.prototype, "inviteCodeLabel", void 0),
            __decorate([p(cc.Label)], e.prototype, "isOpenLabel", void 0),
            __decorate([p(cc.Label)], e.prototype, "skipAdLabel", void 0),
            __decorate([l], e)
        );
    })(s.default);
n.default = u;
