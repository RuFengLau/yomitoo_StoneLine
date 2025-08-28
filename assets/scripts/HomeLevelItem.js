var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}), (n.HomeLevelItemState = void 0);
var r,
    s = t("PkaLevelConfig"),
    c = t("DataManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property;
(function (t) {
    (t[(t.None = 0)] = "None"), (t[(t.Select = 1)] = "Select"), (t[(t.UnSelect = 2)] = "UnSelect");
})((r = n.HomeLevelItemState || (n.HomeLevelItemState = {})));
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (e.levelLabel = null), (e.gouSpriteNode = null), (e.state = r.None), (e.levelNum = 0), (e.index = 0), e;
    }
    return (
        __extends(e, t),
        (e.prototype.onLoad = function () {
            c.default.inst.levelNum.bindObserveFunc(this.flushState, this), this.flushState();
        }),
        (e.prototype.onDestroy = function () {
            c.default.inst.levelNum.unBindObserveFunc(this.flushState);
        }),
        (e.prototype.setLevelNum = function (t) {
            (this.levelLabel.string = "lv" + t), (this.levelNum = t);
        }),
        (e.prototype.flushState = function () {
            c.default.inst.levelNum.val;
            var t = c.default.inst.levelTurnNum.val,
                e = s.default[this.index] + 10 * t;
            this.setLevelNum(e);
        }),
        (e.prototype.setState = function (t) {
            switch (((this.state = t), t)) {
                case r.Select:
                    this.gouSpriteNode.active = !0;
                    break;
                case r.UnSelect:
                    this.gouSpriteNode.active = !1;
            }
        }),
        __decorate([u(cc.Label)], e.prototype, "levelLabel", void 0),
        __decorate([u(cc.Node)], e.prototype, "gouSpriteNode", void 0),
        __decorate([p], e)
    );
})(cc.Component);
n.default = d;
