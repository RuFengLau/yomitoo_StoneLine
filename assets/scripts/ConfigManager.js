var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = (function (t) {
    function e() {
        var e = t.call(this) || this;
        return (
            (e.designSize = new cc.Size(1334, 750)),
            (e.winSize = null),
            (e.winHSize = null),
            (e.winDH = 0),
            (e.winSize = cc.winSize),
            (e.winHSize = cc.size(cc.winSize.width / 2, cc.winSize.height / 2)),
            (e.winDH = (e.winSize.height - e.designSize.height) / 2),
            e
        );
    }
    return __extends(e, t), e;
})(t("MSingleton").Singleton());
n.default = a;
