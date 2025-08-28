var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("State"),
    o = t("GmManager"),
    a = (function () {
        function t() {}
        return (
            (t.prototype.getSysOs = function () {
                return cc.sys.os;
            }),
            (t.prototype.isNative = function () {
                return cc.sys.isNative;
            }),
            (t.prototype.isBrowser = function () {
                return cc.sys.isBrowser;
            }),
            (t.prototype.getWinSize = function () {
                return cc.winSize;
            }),
            (t.prototype.audioEnginePauseAll = function () {
                cc.audioEngine.pauseAll(), cc.audioEngine.setMusicVolume(0);
            }),
            (t.prototype.audioEngineResumeAll = function () {
                cc.audioEngine.resumeAll(), cc.audioEngine.setMusicVolume(1);
            }),
            (t.prototype.showNativeAd = function (t) {
                t = t;
                var e = cc.winSize,
                    n = t.parent.convertToWorldSpaceAR(cc.v2(t.x, t.y)),
                    i = n.x,
                    o = n.y,
                    a = t.width,
                    r = t.height;
                gm.info("CocosEngine showNativeAd x:" + i + " y:" + o + " width:" + a + " height:" + r);
                var s = (e.height - o - r / 2) / e.height,
                    c = (i - a / 2) / e.width,
                    l = (o - r / 2) / e.height,
                    p = (e.width - i - a / 2) / e.width;
                return (
                    gm.info("CocosEngine showNativeAd top:" + s + " bottom:" + l + " left:" + c + " right:" + p),
                    [s, l, c, p]
                );
            }),
            (t.prototype.callStaticMethod = function (t, e) {
                for (var n = [], a = 2; a < arguments.length; a++) n[a - 2] = arguments[a];
                gm.log("callStaticMethod methodName: " + t + " methodSignature: " + e + " p: " + n.length);
                var r = o.default.inst.pt.ptBase.channelType;
                switch (r) {
                    case i.PtNativeType.Android:
                        var s = "org/cocos2dx/javascript/JavaBridge";
                        switch (n.length) {
                            case 0:
                                return jsb.reflection.callStaticMethod(s, t, e);
                            case 1:
                                return jsb.reflection.callStaticMethod(s, t, e, n[0]);
                            case 2:
                                return jsb.reflection.callStaticMethod(s, t, e, n[0], n[1]);
                            case 3:
                                return jsb.reflection.callStaticMethod(s, t, e, n[0], n[1], n[2]);
                            case 4:
                                return jsb.reflection.callStaticMethod(s, t, e, n[0], n[1], n[2], n[3]);
                        }
                        break;
                    case i.PtNativeType.Ios:
                        switch (((s = "Bridge"), n.length)) {
                            case 0:
                                return jsb.reflection.callStaticMethod(s, t);
                            case 1:
                                return jsb.reflection.callStaticMethod(s, t, n[0]);
                            case 2:
                                return jsb.reflection.callStaticMethod(s, t, n[0], n[1]);
                            case 3:
                                return jsb.reflection.callStaticMethod(s, t, n[0], n[1], n[2]);
                            case 4:
                                return jsb.reflection.callStaticMethod(s, t, n[0], n[1], n[2], n[3]);
                        }
                }
            }),
            t
        );
    })();
n.default = a;
