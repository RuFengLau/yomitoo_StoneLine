var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SpineHelper"),
    s = t("BundleManager"),
    c = t("SDKManager"),
    l = t("SoundManager"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.bsSpine = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.playBomb = function (t, e) {
                var n = this,
                    i = 2;
                switch (t) {
                    case 0:
                        i = 2;
                        break;
                    case 1:
                        i = 4;
                        break;
                    case 2:
                        i = 8;
                        break;
                    case 3:
                        i = 16;
                        break;
                    case 4:
                        i = 32;
                        break;
                    case 5:
                        i = 1024;
                        break;
                    case 6:
                        i = 8192;
                }
                (this.node.zIndex = 999),
                    s.default.inst.loadRes("Spines", "Bs/bs_" + i, sp.SkeletonData, function (t) {
                        null != n.bsSpine &&
                            (n.bsSpine.setSpineData(t),
                            c.default.inst.vibrateShort(),
                            l.default.inst.playEffect("bomb"),
                            n.bsSpine.playAn("04", 1, function () {
                                e && e();
                            }));
                    });
            }),
            (e.prototype.playRainbowBomb = function (t) {
                var e = this;
                (this.node.zIndex = 999),
                    s.default.inst.loadRes("Spines", "Bs/tx_hc", sp.SkeletonData, function (n) {
                        null != e.bsSpine &&
                            (e.bsSpine.setSpineData(n),
                            c.default.inst.vibrateShort(),
                            l.default.inst.playEffect("rainbow"),
                            e.bsSpine.playAn("animation", 1, function () {
                                t && t();
                            }));
                    });
            }),
            __decorate([d(r.default)], e.prototype, "bsSpine", void 0),
            __decorate([u], e)
        );
    })(cc.Component);
n.default = h;
