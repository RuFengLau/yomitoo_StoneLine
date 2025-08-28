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
                return (e.comval_val = "gm_val"), (e.templatestr = ""), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.EditBox"),
                        (this.node_event = "text-changed"),
                        (this.modifycontrol_enable = !0),
                        (this.syntaxData.returntype_val = "number"),
                        (this.msyntaxData.returntype_val = "void"),
                        t.prototype.onLoad.call(this);
                }),
                (e.prototype.comListenerFunc = function (e, n, i, o) {
                    t.prototype.comListenerFunc.call(this, e, n, i, o);
                    var a = new Map();
                    if ((a.set(this.compare_index, o), a.set(this.compare_len, this.coms.length), this.more_enable)) {
                        var s = this.coms[o];
                        s && (s.string = r.default.format(this.templatestr, e, i, a));
                    } else this.com && (this.com.string = r.default.format(this.templatestr, e, i, a));
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
                        i &&
                            (n.set(this.comval_val, i.string),
                            r.default.syntax(
                                i,
                                this.msyntaxData.syntax_prop_str,
                                void 0,
                                this.msyntaxData.returntype_val,
                                n
                            ));
                    } else
                        this.com &&
                            (n.set(this.comval_val, this.com.string),
                            r.default.syntax(
                                this.com,
                                this.msyntaxData.syntax_prop_str,
                                void 0,
                                this.msyntaxData.returntype_val,
                                n
                            ));
                }),
                (e.prototype.setTemplateStr = function (t) {
                    this.templatestr = t;
                }),
                __decorate([p()], e.prototype, "comval_val", void 0),
                __decorate([p], e.prototype, "templatestr", void 0),
                __decorate(
                    [
                        l,
                        u("packages://gm_binder_plugin/inspector/com/binder/coms/com_editbox.js"),
                        d("Gm/Binder/EditBoxBind")
                    ],
                    e
                )
            );
        })(s.default));
n.default = h;
