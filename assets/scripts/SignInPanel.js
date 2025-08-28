const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("SignInConfig"),
    l = t("AdMgr"),
    p = t("DataManager"),
    u = t("PopupManager"),
    d = t("SDKManager"),
    h = t("RewardPanel"),
    f = t("PopupBase"),
    y = t("PopupToastPanel"),
    v = t("SignInItem"),
    g = cc._decorator,
    m = g.ccclass,
    b = g.property,
    S = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.signinBtn = null),
                (e.unSigninBtn = null),
                (e.itemNode = null),
                (e.item7 = null),
                (e.signInItems = []),
                (e.isSawVideo = false),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:SignInPanel/Prefabs/SignInPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                for (var t = 0; t < 6; t++) {
                    var e = c.default[t],
                        n = cc.instantiate(this.itemNode);
                    n.parent = this.itemNode.parent;
                    var i = n.getComponent(v.default);
                    this.signInItems.push(i), i.setData(e);
                }
                this.signInItems.push(this.item7),
                    this.item7.setData(c.default[c.default.length - 1]),
                    (this.itemNode.active = !1),
                    this.updateSignInBtn(),
                    l.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                l.default.hideBanner();
                if(this.isSawVideo == false){
                    PlatformAdManager.inst.showNativeOrInsertAd()
                }
                this.isSawVideo = false;
            }),
            (e.prototype.updateSignInBtn = function () {
                p.default.inst.cSignInDayIndex.val < p.default.inst.signInDay.val
                    ? ((this.signinBtn.active = !1), (this.unSigninBtn.active = !0))
                    : ((this.signinBtn.active = !0), (this.unSigninBtn.active = !1));
            }),
            (e.prototype.videoBinClick = function () {
                var t = this;
                this.isSawVideo = true;
                p.default.inst.cSignInDayIndex.val < p.default.inst.signInDay.val
                    ? u.default.show(y.default.path, u.PopupCacheMode.Normal, {tipStr: String("明天见！").toLocalize()})
                    : d.default.inst.showRewardVideo(function (e) {
                          e &&
                              (p.default.inst.signInDay.val++,
                              p.default.inst.continuitySignInDay.val++,
                              t.getReward(),
                              t.updateSignInBtn());
                      });
            }),
            (e.prototype.getReward = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                d.default.inst.tj("video_signIn"),
                                    (t = c.default[p.default.inst.cSignInDayIndex.val]),
                                    (e = 0),
                                    (n.label = 1);
                            case 1:
                                return e < t.reward.length
                                    ? [
                                          4,
                                          u.default.show(h.default.path, u.PopupCacheMode.Frequent, {
                                              type: t.reward[e].rewardType,
                                              num: t.reward[e].num,
                                              isNoVideo: !0,
                                              tj: "spin"
                                          })
                                      ]
                                    : [3, 4];
                            case 2:
                                n.sent(), (n.label = 3);
                            case 3:
                                return e++, [3, 1];
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            __decorate([b(cc.Node)], e.prototype, "signinBtn", void 0),
            __decorate([b(cc.Node)], e.prototype, "unSigninBtn", void 0),
            __decorate([b(cc.Node)], e.prototype, "itemNode", void 0),
            __decorate([b(v.default)], e.prototype, "item7", void 0),
            __decorate([m], e)
        );
    })(f.default);
n.default = S;
