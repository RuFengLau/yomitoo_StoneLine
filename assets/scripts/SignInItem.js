const { LocalizeMgr } = require("../ymtScripts/yomitoo/tools/LocalizeMgr");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SignInConfig"),
    s = t("BundleManager"),
    c = t("DataManager"),
    l = cc._decorator,
    p = l.ccclass,
    u = l.property,
    d = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.dayLabel = null),
                (e.numLabel = null),
                (e.numLabel2 = null),
                (e.bgSprite = null),
                (e.shadeSprite = null),
                (e.iconSprite = null),
                (e.iconSprite2 = null),
                (e.data = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                c.default.inst.cSignInDayIndex.bindObserveFunc(this.flushUI, this),
                    c.default.inst.signInDay.bindObserveFunc(this.flushUI, this);
            }),
            (e.prototype.onDestroy = function () {
                c.default.inst.cSignInDayIndex.unBindObserveFunc(this.flushUI),
                    c.default.inst.signInDay.unBindObserveFunc(this.flushUI);
            }),
            (e.prototype.setData = function (t) {
                var e = this;
                (this.dayLabel.string = LocalizeMgr.inst.toLocalize("第{0}天", [String(t.index + 1)])),
                    (this.data = t),
                    (this.numLabel.string = "+" + t.reward[0].num),
                    s.default.inst.loadRes(
                        "Common",
                        this.getPath(t.reward[0].rewardType),
                        cc.SpriteFrame,
                        function (t) {
                            e.iconSprite.spriteFrame = t;
                        }
                    ),
                    6 == t.index &&
                        ((this.numLabel2.string = "+" + t.reward[1].num),
                        s.default.inst.loadRes(
                            "Common",
                            this.getPath(t.reward[1].rewardType),
                            cc.SpriteFrame,
                            function (t) {
                                e.iconSprite2.spriteFrame = t;
                            }
                        )),
                    this.flushUI();
            }),
            (e.prototype.getPath = function (t) {
                var e = "";
                return (
                    t == r.SignInItemType.Coin
                        ? (e = "prize/ui_jbdui")
                        : t == r.SignInItemType.PropBomb
                        ? (e = "prize/ui_daoju_zhadan")
                        : t == r.SignInItemType.PropClean && (e = "prize/ui_daoju_tongsexiao"),
                    e
                );
            }),
            (e.prototype.flushUI = function () {
                var t = this;
                console.log("SignInItem flushUI~~~~~"),
                    this.data.index < 6 &&
                        (c.default.inst.cSignInDayIndex.val == this.data.index
                            ? s.default.inst.loadRes(
                                  "SignInPanel",
                                  "Images/ui_qd_kuang2",
                                  cc.SpriteFrame,
                                  function (e) {
                                      t.bgSprite.spriteFrame = e;
                                  }
                              )
                            : s.default.inst.loadRes(
                                  "SignInPanel",
                                  "Images/ui_qd_kuang1",
                                  cc.SpriteFrame,
                                  function (e) {
                                      t.bgSprite.spriteFrame = e;
                                  }
                              )),
                    (this.shadeSprite.node.active = this.data.index < c.default.inst.signInDay.val);
            }),
            __decorate([u(cc.Label)], e.prototype, "dayLabel", void 0),
            __decorate([u(cc.Label)], e.prototype, "numLabel", void 0),
            __decorate([u(cc.Label)], e.prototype, "numLabel2", void 0),
            __decorate([u(cc.Sprite)], e.prototype, "bgSprite", void 0),
            __decorate([u(cc.Sprite)], e.prototype, "shadeSprite", void 0),
            __decorate([u(cc.Sprite)], e.prototype, "iconSprite", void 0),
            __decorate([u(cc.Sprite)], e.prototype, "iconSprite2", void 0),
            __decorate([p], e)
        );
    })(cc.Component);
n.default = d;
