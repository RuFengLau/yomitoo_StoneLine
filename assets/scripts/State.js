var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.PtNetType = n.PtNativeType = n.PtMiniType = n.PtEnvType = n.AdLoadState = n.AdState = void 0),
    (function (t) {
        (t[(t.none = 0)] = "none"), (t[(t.close = 1)] = "close"), (t[(t.open = 2)] = "open");
    })(n.AdState || (n.AdState = {})),
    (function (t) {
        (t[(t.none = 0)] = "none"),
            (t[(t.loading = 1)] = "loading"),
            (t[(t.loadSucess = 2)] = "loadSucess"),
            (t[(t.loadFail = 3)] = "loadFail");
    })(n.AdLoadState || (n.AdLoadState = {})),
    (function (t) {
        (t[(t.None = 0)] = "None"), (t[(t.Native = 1)] = "Native"), (t[(t.MiniGame = 2)] = "MiniGame");
    })(n.PtEnvType || (n.PtEnvType = {})),
    (function (t) {
        (t[(t.None = 0)] = "None"),
            (t[(t.Wx = 1)] = "Wx"),
            (t[(t.QQ = 2)] = "QQ"),
            (t[(t.Oppo = 3)] = "Oppo"),
            (t[(t.Vivo = 4)] = "Vivo");
    })(n.PtMiniType || (n.PtMiniType = {})),
    (function (t) {
        (t[(t.None = 0)] = "None"),
            (t[(t.Android = 1)] = "Android"),
            (t[(t.Ios = 2)] = "Ios"),
            (t[(t.Win = 3)] = "Win");
    })(n.PtNativeType || (n.PtNativeType = {})),
    (function (t) {
        (t[(t.None = 0)] = "None"),
            (t[(t.MobileNetWork = 1)] = "MobileNetWork"),
            (t[(t.Wifi = 2)] = "Wifi"),
            (t[(t.Unknown = 3)] = "Unknown");
    })(n.PtNetType || (n.PtNetType = {}));
