var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("InterstitialAdBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.interstitialAdNode = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function () {
                this.state != r.AdState.open &&
                    this.loadState != r.AdLoadState.loading &&
                    (this.loadState != r.AdLoadState.loadSucess
                        ? ((this.loadState = r.AdLoadState.loading), this.create(this.adUnitID))
                        : this.show());
            }),
            (e.prototype.onClose = function () {
                this.close();
            }),
            (e.prototype.load = function () {}),
            (e.prototype.close = function () {
                t.prototype.close.call(this), (this.state = r.AdState.close), (this.interstitialAdNode.active = !1);
            }),
            (e.prototype.show = function () {
                this.state != r.AdState.open &&
                    (t.prototype.show.call(this), (this.state = r.AdState.open), (this.interstitialAdNode.active = !0));
            }),
            (e.prototype.create = function () {
                var t = this;
                this.interstitialAdNode
                    ? this.show()
                    : s.default.inst.loadRes("GmRes", "Win/InterstitialAd/interstitialAd", cc.Prefab, function (e) {
                          var n = cc.instantiate(e);
                          (t.interstitialAdNode = n),
                              (t.loadState = r.AdLoadState.loadSucess),
                              (n.active = !1),
                              cc.game.addPersistRootNode(n),
                              n.getChildByName("closeButton").on(cc.Node.EventType.TOUCH_END, function () {
                                  t.onClose();
                              }),
                              t.show(),
                              (n.x = cc.winSize.width / 2),
                              (n.y = cc.winSize.height / 2);
                      });
            }),
            e
        );
    })(a.default);
n.default = c;
