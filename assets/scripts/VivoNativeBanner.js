var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("NativeAdBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = t("VivoNativeBannerBind"),
    l = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.nativeAd = null), (e.nativeAdNode = null), (e.VivoNativeBannerBind = null), e.initTimer(), e;
        }
        return (
            __extends(e, t),
            (e.prototype.initTimer = function () {
                var t = this,
                    e = this;
                setInterval(function () {
                    e.state == r.AdState.open &&
                        t.nativeAd.timerLoopLoad(function () {
                            (e.state = r.AdState.none), e.show();
                        });
                }, 3e4);
            }),
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
                return !(!this.nativeAd || !this.nativeAd.nativeAdData);
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
                gm.log("VivoNativeBanner create id" + t),
                    s.default.inst.loadRes("GmRes", "Vivo/NativeBanner/nativeBanner", cc.Prefab, function (t) {
                        var n = cc.instantiate(t);
                        gm.log("nativeAdNode : " + n),
                            (e.nativeAdNode = n),
                            (e.loadState = r.AdLoadState.loadSucess),
                            (n.active = !1),
                            cc.game.addPersistRootNode(n),
                            e.show();
                    });
            }),
            e
        );
    })(a.default);
n.default = l;
