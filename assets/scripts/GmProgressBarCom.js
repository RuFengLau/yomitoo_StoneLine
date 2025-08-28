var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBaseCom"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = (s.executeInEditMode, s.inspector),
    u = (s.requireComponent, s.menu),
    d =
        (s.disallowMultiple,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.min_num = 0), (e.max_num = 1), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.ProgressBar"),
                        (this.modifycontrol_enable_show = !1),
                        t.prototype.onLoad.call(this);
                }),
                (e.prototype.comListenerFunc = function (e, n, i, o) {
                    t.prototype.comListenerFunc.call(this, e, n, i, o);
                    var a = parseFloat(i);
                    if (
                        ((a =
                            ((a = (a = a < this.min_num ? this.min_num : a) > this.max_num ? this.max_num : a) -
                                this.min_num) /
                            (this.max_num - this.min_num)),
                        this.more_enable)
                    ) {
                        var r = this.coms[o];
                        r && (r.progress = a);
                    } else this.com.progress = a;
                }),
                __decorate([l()], e.prototype, "min_num", void 0),
                __decorate([l()], e.prototype, "max_num", void 0),
                __decorate(
                    [
                        c,
                        p("packages://gm_binder_plugin/inspector/com/binder/coms/com_progressbar.js"),
                        u("Gm/Binder/ProgressBarBind")
                    ],
                    e
                )
            );
        })(r.default));
n.default = d;
