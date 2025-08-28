var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.coinLabel = null), (e.moneyLabel = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                r.default.inst.coinNum.bindObserveFunc(this.flushCoinNum, this),
                    this.flushCoinNum(),
                    this.flushMoneyNum();
            }),
            (e.prototype.onDestroy = function () {
                r.default.inst.coinNum.unBindObserveFunc(this.flushCoinNum);
            }),
            (e.prototype.flushCoinNum = function () {
                this.coinLabel.string = r.default.inst.coinNum.val.simple();
            }),
            (e.prototype.flushMoneyNum = function () {
                this.moneyLabel;
            }),
            (e.prototype.shopBtnClick = function () {}),
            (e.prototype.shopCoinBtnClick = function () {}),
            __decorate([l(cc.Label)], e.prototype, "coinLabel", void 0),
            __decorate([l(cc.Label)], e.prototype, "moneyLabel", void 0),
            __decorate([c], e)
        );
    })(cc.Component);
n.default = p;
