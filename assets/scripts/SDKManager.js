var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("MSingleton"),
    c = t("AdMgr"),
    l = cc._decorator,
    p = l.ccclass,
    u =
        (l.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.NativeNodeList = new Array()), e;
            }
            return (
                __extends(e, t),
                (e.prototype.init = function () {}),
                (e.prototype.requestConfig = function () {
                    r.default.inst.isReviewMode.val = !1;
                }),
                (e.prototype.getNativeAd = function () {}),
                (e.prototype.vibrateShort = function () {}),
                (e.prototype.tj = function () {}),
                (e.prototype.tj2 = function () {}),
                (e.prototype.showBanner = function () {}),
                (e.prototype.hideBanner = function () {}),
                (e.prototype.showBannerGirdAd = function () {}),
                (e.prototype.hideBannerGirdAd = function () {}),
                (e.prototype.showGirdAd = function () {}),
                (e.prototype.showInsertAd = function () {}),
                (e.prototype.showRewardVideo = function (t) {
                    c.default.showVideo(t);
                }),
                __decorate([p], e)
            );
        })(s.Singleton()));
n.default = u;
