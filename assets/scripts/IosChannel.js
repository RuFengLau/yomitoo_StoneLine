var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("GmManager"),
    r = t("State"),
    s = t("PtChannelBase"),
    c = t("IosBanner"),
    l = t("IosBridge"),
    p = t("IosInterstitialAd"),
    u = t("IosRewardVideo"),
    d = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                gm.log("IosChannel constructor"),
                (e.bannerAd = new c.default()),
                (e.rewardAd = new u.default()),
                (e.insertAd = new p.default()),
                gm.log("IosChannel constructor 2"),
                e.initBridgeListener(),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.showNativeAd = function (t) {
                var e = a.default.inst.engine.engine.showNativeAd(t),
                    n = e[0],
                    i = e[1],
                    o = e[2],
                    r = e[3];
                l.default.openNativeAd(n, i, o, r);
            }),
            (e.prototype.closeNativeAd = function () {
                l.default.closeNativeAd();
            }),
            (e.prototype.vibrate = function (t) {
                l.default.vibrate(t);
            }),
            (e.prototype.vibrateShort = function () {
                this.vibrate(15);
            }),
            (e.prototype.vibrateLong = function () {
                this.vibrate(400);
            }),
            (e.prototype.openUserPrivacy = function () {
                l.default.openUserPrivacy();
            }),
            (e.prototype.openPrivacyPolicy = function () {
                l.default.openPrivacyPolicy();
            }),
            (e.prototype.openRate = function () {
                l.default.openRate();
            }),
            (e.prototype.getVersion = function () {
                return l.default.getVersion();
            }),
            (e.prototype.customBridgeFunc = function (t, e, n) {
                void 0 === n && (n = null), (this.customBridgeCallFunc = n), l.default.customBridgeFunc(t, e);
            }),
            (e.prototype.getNetworkType = function (t) {
                var e = l.default.getNetworkType();
                gm.log("ios getNetworkType : " + e);
                var n = r.PtNetType.Unknown;
                switch (e) {
                    case 0:
                        n = r.PtNetType.None;
                        break;
                    case 1:
                        n = r.PtNetType.MobileNetWork;
                        break;
                    case 2:
                        n = r.PtNetType.Wifi;
                }
                t(n);
            }),
            (e.prototype.copyText = function (t) {
                l.default.copyText(t);
            }),
            (e.prototype.tjEvent = function (t) {
                l.default.tjEvent(t);
            }),
            (e.prototype.tjEventKey = function (t, e) {
                l.default.tjEventKey(t, e);
            }),
            (e.prototype.tjEventMapKey = function (t, e) {
                l.default.tjEventMapKey(t, e);
            }),
            e
        );
    })(s.default);
n.default = d;
