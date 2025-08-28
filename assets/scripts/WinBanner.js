var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("BannerBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.bannerNode = null), e.create(e.adUnitID), e;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function () {
                this.state != r.AdState.open &&
                    this.loadState != r.AdLoadState.loading &&
                    (this.loadState != r.AdLoadState.loadSucess
                        ? ((this.loadState = r.AdLoadState.loading), this.show())
                        : this.show());
            }),
            (e.prototype.close = function () {
                this.state != r.AdState.close && this.hide();
            }),
            (e.prototype.show = function () {
                (this.state = r.AdState.open), (this.bannerNode.active = !0);
            }),
            (e.prototype.hide = function () {
                (this.state = r.AdState.close), (this.bannerNode.active = !1);
            }),
            (e.prototype.create = function () {
                var t = this;
                s.default.inst.loadRes("GmRes", "Win/Banner/banner", cc.Prefab, function (e) {
                    var n = cc.instantiate(e);
                    cc.game.addPersistRootNode(n),
                        (t.bannerNode = n),
                        (t.loadState = r.AdLoadState.loadSucess),
                        (n.active = !1),
                        (n.x = cc.winSize.width / 2),
                        (n.y = n.height / 2);
                });
            }),
            e
        );
    })(a.BannerBase);
n.default = c;
