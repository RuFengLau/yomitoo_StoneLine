const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("TurntableConfig"),
    l = t("DataManager"),
    p = t("PopupManager"),
    u = t("SDKManager"),
    d = t("ToolManager"),
    h = t("RewardPanel"),
    f = t("PopupBase"),
    y = t("PopupToastPanel"),
    v = t("TurntableItem"),
    g = t("AdMgr"),
    m = cc._decorator,
    b = m.ccclass,
    S = m.property,
    A = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.itemNode = null),
                (e.zpNode = null),
                (e.zzNode = null),
                (e.clsoeBtnNode = null),
                (e.rotateEnable = !0),
                (e.originAngle = 0),
                (e.pbList = []),
                (e.isSawVideo = false),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:TurntablePanel/Prefabs/TurntablePanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                this.itemNode.active = !1;
                for (var t = 0, e = c.default; t < e.length; t++) {
                    var n = e[t],
                        i = cc.instantiate(this.itemNode);
                    (i.active = !0),
                        i.getComponent(v.default).setData(n),
                        (i.parent = this.itemNode.parent),
                        (i.angle = (360 * -n.index) / 8),
                        this.pbList.push(n.probability);
                }
                g.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                g.default.hideBanner();
                if(this.isSawVideo == false){
                    PlatformAdManager.inst.showNativeOrInsertAd();
                }
                this.isSawVideo = false;
            }),
            (e.prototype.updateDisplay = function () {
                this.clsoeBtnNode.active = !0;
            }),
            (e.prototype.videoBtnClick = function () {
                var t = this;
                this.isSawVideo = true;
                u.default.inst.showRewardVideo(function (e) {
                    e && t.rotateBegan();
                });
            }),
            (e.prototype.rotateBegan = function () {
                var t = this;
                if (this.rotateEnable) {
                    (this.clsoeBtnNode.active = !1), (this.rotateEnable = !1);
                    var e = this.randomIndexByArry(this.pbList);
                    console.log("rotateBegan : " + e), (this.originAngle = this.zpNode.angle);
                    var n = this.zpNode.angle,
                        i = 45 * e + n + (720 - (n % 360)) + 360;
                    cc
                        .tween(this.zzNode)
                        .repeatForever(cc.tween().to(0.1, {angle: 10}).to(0.1, {angle: 0}))
                        .start(),
                        cc
                            .tween(this.zpNode)
                            .to(2, {angle: i}, {easing: "circInOut"})
                            .call(function () {
                                (t.rotateEnable = !0), t.zzNode.stopAllActions(), (t.zzNode.angle = 0), t.rotateEnd(e);
                            })
                            .start();
                } else p.default.show(y.default.path, p.PopupCacheMode.Normal, {tipStr:  String("抽奖...").toLocalize()});
            }),
            (e.prototype.rotateEnd = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                    var e;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return (
                                    (this.clsoeBtnNode.active = !0),
                                    (e = c.default[t]),
                                    [
                                        4,
                                        p.default.show(h.default.path, p.PopupCacheMode.Frequent, {
                                            type: e.type,
                                            num: e.num,
                                            isNoVideo: !0,
                                            tj: "spin"
                                        })
                                    ]
                                );
                            case 1:
                                return n.sent(), l.default.inst.updateTurnTableTime(1), [2];
                        }
                    });
                });
            }),
            (e.prototype.randomIndexByArry = function (t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                for (var i = d.default.inst.randomRangeInt(0, e + 1), o = 0, a = 0; a < t.length; a++)
                    if (i <= (o += t[a])) return a;
                return 0;
            }),
            __decorate([S(cc.Node)], e.prototype, "itemNode", void 0),
            __decorate([S(cc.Node)], e.prototype, "zpNode", void 0),
            __decorate([S(cc.Node)], e.prototype, "zzNode", void 0),
            __decorate([S(cc.Node)], e.prototype, "clsoeBtnNode", void 0),
            __decorate([b], e)
        );
    })(f.default);
n.default = A;
