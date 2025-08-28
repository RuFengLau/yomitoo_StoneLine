var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = (function () {
        function t() {}
        return (
            (t.customBridgeFunc = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod("customBridgeFuncAction:data:", "", t, e);
            }),
            (t.openAd = function (t) {
                gm.info("IosBridge openAd " + t), i.default.inst.engine.engine.callStaticMethod("openAd:", "", t);
            }),
            (t.openNativeAd = function (t, e, n, o) {
                i.default.inst.engine.engine.callStaticMethod("openNativeAdTop:left:bottom:right:", "", t, e, n, o);
            }),
            (t.closeAd = function (t) {
                i.default.inst.engine.engine.callStaticMethod("closeAd:", "", t);
            }),
            (t.closeNativeAd = function () {
                t.closeAd("nativeAd");
            }),
            (t.isAdReady = function (t) {
                return i.default.inst.engine.engine.callStaticMethod("isAdReady:", "", t);
            }),
            (t.vibrate = function (t) {
                void 0 === t && (t = 400), i.default.inst.engine.engine.callStaticMethod("vibrate:", "", t);
            }),
            (t.openUserPrivacy = function () {
                i.default.inst.engine.engine.callStaticMethod("openUserPrivacy", "");
            }),
            (t.getNetworkType = function () {
                return i.default.inst.engine.engine.callStaticMethod("getNetworkType", "");
            }),
            (t.tjEvent = function (t) {
                i.default.inst.engine.engine.callStaticMethod("tjEvent:", "", t);
            }),
            (t.tjEventKey = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod("tjEventKey:value:", "", t, e);
            }),
            (t.tjEventMapKey = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod("tjEventMapKey:params:", "", t, e);
            }),
            (t.openPrivacyPolicy = function () {
                i.default.inst.engine.engine.callStaticMethod("openPrivacyPolicy", "");
            }),
            (t.openRate = function () {
                i.default.inst.engine.engine.callStaticMethod("openRate", "");
            }),
            (t.getVersion = function () {
                return i.default.inst.engine.engine.callStaticMethod("getVersion", "");
            }),
            (t.copyText = function (t) {
                i.default.inst.engine.engine.callStaticMethod("copyText:", "", t);
            }),
            t
        );
    })();
n.default = o;
