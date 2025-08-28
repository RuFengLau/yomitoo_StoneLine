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
                return (e.templatestr = ""), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.Label"), (this.modifycontrol_enable_show = !1), t.prototype.onLoad.call(this);
                }),
                (e.prototype.comListenerFunc = function (e, n, i, o) {
                    t.prototype.comListenerFunc.call(this, e, n, i, o);
                    var a = new Map();
                    if (
                        (a.set(this.compare_index, o),
                        a.set(this.compare_len, this.coms.length),
                        a.set(this.rtfilter_val, this.filter_val),
                        a.set(this.rtlistener_val, i),
                        this.more_enable)
                    ) {
                        var s = this.coms[o];
                        s && (s.string = r.default.format(this.templatestr, e, i, a));
                    } else this.com && (this.com.string = r.default.format(this.templatestr, e, i, a));
                }),
                (e.prototype.setTemplateStr = function (t) {
                    this.templatestr = t;
                }),
                __decorate([p], e.prototype, "templatestr", void 0),
                __decorate(
                    [
                        l,
                        u("packages://gm_binder_plugin/inspector/com/binder/coms/com_label.js"),
                        d("Gm/Binder/LabelBind")
                    ],
                    e
                )
            );
        })(s.default));
n.default = h;
