var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = t("State"),
    a = (function () {
        function t() {
            this.miniGameData = null;
        }
        return (
            (t.prototype.init = function (t) {
                this.miniGameData = t;
            }),
            (t.prototype.getAdData = function () {
                var t = i.default.inst.pt.ptBase.channelType;
                return i.default.inst.pt.ptBase.ptType == o.PtEnvType.MiniGame
                    ? this.getAdDataByMiniPt(t)
                    : this.getAdDataByNativePt(t);
            }),
            (t.prototype.getAdDataByMiniPt = function (t) {
                t = t;
                var e = i.default.inst.pt.getPtMiniTypeStr(t);
                return this.miniGameData[e] ? this.miniGameData[e] : (gm.err("没有找到 miniGameData 数据"), null);
            }),
            (t.prototype.getAdDataByNativePt = function () {
                return {
                    bannerAdId: "banner",
                    interstitialAdId: "interstitialAd",
                    rewardedVideoAdId: "video",
                    nativeAdId: "nativeAd",
                    nativeNormalAdId: "nativeNormalAdId",
                    gridAdId: "gridAd",
                    bannerGridAdId: "bannerGridAdId"
                };
            }),
            t
        );
    })();
n.default = a;
