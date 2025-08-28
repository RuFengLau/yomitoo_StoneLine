var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("NativeAdBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = t("OppoNativeInterstitialAdBind"),
    l = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.nativeAdNode = null), (e.nativeAd = null), e;
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
            (e.prototype.close = function () {
                this.state != r.AdState.close &&
                    ((this.state = r.AdState.close), (this.nativeAdNode.active = !1), this.nativeAd.close());
            }),
            (e.prototype.isAdReady = function () {
                return !(!this.nativeAd.nativeAdData || !this.nativeAd);
            }),
            (e.prototype.load = function () {}),
            (e.prototype.show = function () {
                this.state != r.AdState.open &&
                    ((this.nativeAdNode.active = !0),
                    (this.state = r.AdState.open),
                    this.nativeAdNode.getComponent(c.default).flushData(this));
            }),
            (e.prototype.create = function (t) {
                var e = this;
                gm.log("OppoNativeBanner create id" + t),
                    s.default.inst.loadRes(
                        "GmRes",
                        "Oppo/NativeInterstitialAd/nativeInterstitialAd",
                        cc.Prefab,
                        function (t) {
                            var n = cc.instantiate(t);
                            gm.log("nativeAdNode : " + n),
                                (e.nativeAdNode = n),
                                (e.loadState = r.AdLoadState.loadSucess),
                                (n.active = !1),
                                cc.game.addPersistRootNode(n),
                                e.show();
                        }
                    );
            }),
            e
        );
    })(a.default);
n.default = l;
