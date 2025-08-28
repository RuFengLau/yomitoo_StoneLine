var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SpineHelper"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("SDKManager"),
    p = t("SoundManager"),
    u = t("CoinFlyPanel"),
    d = t("PopupBase"),
    h = t("AdMgr"),
    f = cc._decorator,
    y = f.ccclass,
    v = f.property,
    g = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.coinNode = null),
                (e.closeBtnNode = null),
                (e.coinLabel = null),
                (e.closeLabel = null),
                (e.ranbowSpine = null),
                (e.touchNode = null),
                (e.videoBtnNode = null),
                (e.videoIcon = null),
                (e.coptions = null),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:CoinRewardPanel/Prefabs/CoinRewardPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                h.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                h.default.hideBanner();
            }),
            (e.prototype.onShowBegan = function () {
                this.ranbowSpine.playAn("animation", 1),
                    p.default.inst.playEffect("addCoin"),
                    s.default.inst.coinNum.val <= 9e4 ? (this.videoIcon.active = !1) : (this.videoIcon.active = !0);
            }),
            (e.prototype.onShowEnd = function () {}),
            (e.prototype.updateDisplay = function (t) {
                var e = this;
                (this.coptions = t),
                    (this.coinLabel.string = "+" + t.coinNum),
                    (this.closeLabel.node.active = !1),
                    (this.touchNode.active = !1),
                    (this.videoBtnNode.active = !t.isNoVideo),
                    t.isNoVideo &&
                        ((this.closeLabel.node.opacity = 0),
                        this.scheduleOnce(function () {
                            (e.closeLabel.node.active = !0),
                                (e.closeLabel.node.opacity = 255),
                                cc.tween(e.closeLabel.node).to(0.5, {opacity: 255}).start(),
                                (e.touchNode.active = !0);
                        }, 2));
            }),
            (e.prototype.videoBtnClick = function () {
                var t = this;
                this.videoIcon.active
                    ? l.default.inst.showRewardVideo(function (e) {
                          e && t.videoSuccess();
                      })
                    : this.videoSuccess();
            }),
            (e.prototype.videoSuccess = function () {
                this.hide();
            }),
            (e.prototype.onTouchChcik = function () {
                var t = this,
                    e = {
                        count: this.coptions.coinNum,
                        stPos: cc.v2(0, 0),
                        coinNode: this.coinNode,
                        callFunc: function () {
                            t.hide();
                        }
                    };
                (this.closeLabel.node.active = !1),
                    (this.videoBtnNode.active = !1),
                    (this.closeBtnNode.active = !1),
                    c.default.show(u.default.path, c.PopupCacheMode.Normal, e);
            }),
            __decorate([v(cc.Node)], e.prototype, "coinNode", void 0),
            __decorate([v(cc.Node)], e.prototype, "closeBtnNode", void 0),
            __decorate([v(cc.Label)], e.prototype, "coinLabel", void 0),
            __decorate([v(cc.Label)], e.prototype, "closeLabel", void 0),
            __decorate([v(r.default)], e.prototype, "ranbowSpine", void 0),
            __decorate([v(cc.Node)], e.prototype, "touchNode", void 0),
            __decorate([v(cc.Node)], e.prototype, "videoBtnNode", void 0),
            __decorate([v(cc.Node)], e.prototype, "videoIcon", void 0),
            __decorate([y], e)
        );
    })(d.default);
n.default = g;
