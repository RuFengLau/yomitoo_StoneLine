var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBinderTool"),
    s = t("GmBaseCom"),
    c = cc._decorator,
    l = c.ccclass,
    p = (c.property, c.executeInEditMode, c.inspector),
    u = (c.requireComponent, c.menu),
    d =
        (c.disallowMultiple,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.Button"), (this.node_event = "click"), t.prototype.onLoad.call(this);
                }),
                (e.prototype.comListenerFunc = function (e, n, i, o) {
                    t.prototype.comListenerFunc.call(this, e, n, i, o);
                }),
                (e.prototype.eventCallBack = function (e) {
                    if ((t.prototype.eventCallBack.call(this, e), this.modifycontrol_enable)) {
                        var n = new Map();
                        n.set(this.compare_index, e),
                            n.set(this.compare_len, this.coms.length),
                            r.default.syntax(
                                this.com,
                                this.msyntaxData.syntax_prop_str,
                                void 0,
                                this.msyntaxData.returntype_val,
                                n
                            );
                    }
                }),
                __decorate(
                    [
                        l,
                        p("packages://gm_binder_plugin/inspector/com/binder/coms/com_button.js"),
                        u("Gm/Binder/ButtonBind")
                    ],
                    e
                )
            );
        })(s.default));
n.default = d;
