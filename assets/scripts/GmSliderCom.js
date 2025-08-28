var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBinderTool"),
    s = t("GmBaseCom"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (c.executeInEditMode, c.inspector),
    d = (c.requireComponent, c.menu),
    h =
        (c.disallowMultiple,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.comval_val = "gm_val"), (e.min_num = 0), (e.max_num = 1), (e.fixed_num = 2), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.Slider"), (this.node_event = "slide"), t.prototype.onLoad.call(this);
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
                    } else this.com && (this.com.progress = a);
                }),
                (e.prototype.eventCallBack = function (e) {
                    t.prototype.eventCallBack.call(this, e);
                    var n = new Map();
                    if (
                        (n.set(this.compare_index, e),
                        n.set(this.compare_len, this.coms.length),
                        n.set(this.comval_val, 0),
                        this.more_enable)
                    ) {
                        var i = this.coms[e];
                        if (i) {
                            var o = i.progress * (this.max_num - this.min_num) + this.min_num;
                            (o = Number(o.toFixed(this.fixed_num))),
                                n.set(this.comval_val, o),
                                r.default.syntax(
                                    i,
                                    this.msyntaxData.syntax_prop_str,
                                    void 0,
                                    this.msyntaxData.returntype_val,
                                    n
                                );
                        }
                    } else
                        this.com &&
                            ((o = this.com.progress * (this.max_num - this.min_num) + this.min_num),
                            (o = Number(o.toFixed(this.fixed_num))),
                            n.set(this.comval_val, o),
                            r.default.syntax(
                                this.com,
                                this.msyntaxData.syntax_prop_str,
                                void 0,
                                this.msyntaxData.returntype_val,
                                n
                            ));
                }),
                __decorate([p()], e.prototype, "comval_val", void 0),
                __decorate([p()], e.prototype, "min_num", void 0),
                __decorate([p()], e.prototype, "max_num", void 0),
                __decorate([p()], e.prototype, "fixed_num", void 0),
                __decorate(
                    [
                        l,
                        u("packages://gm_binder_plugin/inspector/com/binder/coms/com_slider.js"),
                        d("Gm/Binder/SliderBind")
                    ],
                    e
                )
            );
        })(s.default));
n.default = h;
