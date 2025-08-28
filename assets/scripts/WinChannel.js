var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("PtChannelBase"),
    r = t("WinBanner"),
    s = t("WinInterstitialAd"),
    c = t("WinNativeAd"),
    l = t("WinRewardVideo"),
    p = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.bannerAd = new r.default()),
                (e.rewardAd = new l.default()),
                (e.insertAd = new s.default()),
                (e.nativeAd = new c.default()),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.vibrate = function (t) {
                gm.info("vibrate : " + t);
            }),
            (e.prototype.vibrateShort = function () {
                this.vibrate(15);
            }),
            (e.prototype.vibrateLong = function () {
                this.vibrate(400);
            }),
            (e.prototype.getNativeAd = function () {
                return this.nativeAd;
            }),
            e
        );
    })(a.default);
n.default = p;
