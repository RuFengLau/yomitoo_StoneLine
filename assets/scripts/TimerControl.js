var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("PopupManager"),
    c = t("TestPanel"),
    l = t("FBAdManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = (p.property, "309559723973305_315182496744361"),
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.intervalTime = 0), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                cc.game.addPersistRootNode(this.node),
                    (this.intervalTime = 0),
                    this.schedule(function () {
                        t.timeDown();
                    }, 1),
                    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this),
                    window.FBInstant &&
                        (l.default.addInterstitial(d),
                        l.default.addRewardedVideo("309559723973305_315182633411014"),
                        l.default.addBanner("309559723973305_315182396744371"),
                        l.default.loadAll());
            }),
            (e.prototype.onKeyDown = function (t) {
                switch (t.keyCode) {
                    case cc.macro.KEY.escape:
                        s.default.show(c.default.path, s.PopupCacheMode.Frequent);
                }
            }),
            (e.prototype.timeDown = function () {
                (this.intervalTime += 1), this.intervalTime >= 10 && r.default.inst.updateOnLineTime(10);
            }),
            __decorate([u], e)
        );
    })(cc.Component);
n.default = h;
