var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("State"),
    r = t("PtChannelBase"),
    s = t("WxBanner"),
    c = t("WxInterstitialAd"),
    l = t("WxRewardVideo"),
    p = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.bannerAd = new s.default()), (e.rewardAd = new l.default()), (e.insertAd = new c.default()), e;
        }
        return (
            __extends(e, t),
            (e.prototype.vibrate = function () {
                wx.vibrateShort({type: "medium"});
            }),
            (e.prototype.vibrateShort = function () {
                wx.vibrateShort({type: "medium"});
            }),
            (e.prototype.vibrateLong = function () {
                wx.vibrateLong({});
            }),
            (e.prototype.getNetworkType = function (t) {
                wx.getNetworkType({
                    success: function (e) {
                        var n = a.PtNetType.Unknown;
                        switch (e.networkType) {
                            case "2g":
                            case "3g":
                            case "4g":
                            case "5g":
                                n = a.PtNetType.MobileNetWork;
                                break;
                            case "wifi":
                                n = a.PtNetType.Wifi;
                                break;
                            case "none":
                                n = a.PtNetType.None;
                        }
                        t(n);
                    },
                    fail: function () {
                        t(a.PtNetType.Unknown);
                    }
                });
            }),
            e
        );
    })(r.default);
n.default = p;
