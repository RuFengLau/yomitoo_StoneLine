var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = (function () {
        function t() {}
        return (
            (t.customBridgeFunc = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod(
                    "customBridgeFunc",
                    "(Ljava/lang/String;Ljava/lang/String;)V",
                    t,
                    e
                );
            }),
            (t.openAd = function (t) {
                gm.info("AndroidBridge openAd : " + t),
                    i.default.inst.engine.engine.callStaticMethod("openAd", "(Ljava/lang/String;)V", t);
            }),
            (t.openNativeAd = function (t, e, n, o) {
                i.default.inst.engine.engine.callStaticMethod("openNativeAd", "(FFFF)V", t, e, n, o);
            }),
            (t.closeAd = function (t) {
                i.default.inst.engine.engine.callStaticMethod("closeAd", "(Ljava/lang/String;)V", t);
            }),
            (t.closeNativeAd = function () {
                t.closeAd("nativeAd");
            }),
            (t.isAdReady = function (t) {
                return i.default.inst.engine.engine.callStaticMethod("isAdReady", "(Ljava/lang/String;)Z", t);
            }),
            (t.vibrate = function (t) {
                void 0 === t && (t = 400), i.default.inst.engine.engine.callStaticMethod("vibrate", "(I)V", t);
            }),
            (t.openUserPrivacy = function () {
                i.default.inst.engine.engine.callStaticMethod("openUserPrivacy", "()V");
            }),
            (t.getNetworkType = function () {
                return i.default.inst.engine.engine.callStaticMethod("getNetworkType", "()I");
            }),
            (t.tjEvent = function (t) {
                i.default.inst.engine.engine.callStaticMethod("tjEvent", "(Ljava/lang/String;)V", t);
            }),
            (t.tjEventKey = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod(
                    "tjEventKey",
                    "(Ljava/lang/String;Ljava/lang/String;)V",
                    t,
                    e
                );
            }),
            (t.tjEventMapKey = function (t, e) {
                i.default.inst.engine.engine.callStaticMethod(
                    "tjEventMapKey",
                    "(Ljava/lang/String;Ljava/lang/String;)V",
                    t,
                    e
                );
            }),
            (t.openPrivacyPolicy = function () {
                i.default.inst.engine.engine.callStaticMethod("openPrivacyPolicy", "()V");
            }),
            (t.openRate = function () {
                i.default.inst.engine.engine.callStaticMethod("openRate", "()V");
            }),
            (t.getVersion = function () {
                return i.default.inst.engine.engine.callStaticMethod("getVersion", "()Ljava/lang/String;");
            }),
            (t.copyText = function () {
                i.default.inst.engine.engine.callStaticMethod("copyText", "(Ljava/lang/String;)");
            }),
            t
        );
    })();
n.default = o;
