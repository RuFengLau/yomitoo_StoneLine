var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBindData"),
    s = t("GmFindData"),
    c = t("GmSyntaxData"),
    l = t("GmObserveCom"),
    p = t("GmBinderTool"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    f = u.executeInEditMode,
    y = (u.inspector, u.requireComponent),
    v =
        (u.menu,
        u.disallowMultiple,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (
                    (e.more_enable = !1),
                    (e.listenercontrol_enable = !1),
                    (e.modifycontrol_enable = !1),
                    (e.propertycontrol_enable = !1),
                    (e.modifycontrol_enable_show = !0),
                    (e.dynamic_find = !1),
                    (e.compare_index = "gm_index"),
                    (e.compare_len = "gm_len"),
                    (e.compare_com = "gm_com"),
                    (e.rtfilter_val = "gm_filterVal"),
                    (e.rtlistener_val = "gm_listenerVal"),
                    (e.find_data = new s.default()),
                    (e.syntaxData = new c.default()),
                    (e.msyntaxData = new c.default()),
                    (e.com = null),
                    (e.coms = []),
                    (e.com_type = null),
                    (e.node_event = null),
                    (e.filter_val = null),
                    e
                );
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    var t = this;
                    this.node.getComponent(l.default).registerComListener(function (e, n) {
                        t.listenerFunc(e, n);
                    }),
                        this.initComs();
                }),
                (e.prototype.initComs = function () {
                    var t = this;
                    if (((this.com = null), (this.coms = []), this.more_enable))
                        for (var e = 0, n = this.find_data.findNodes(this.node); e < n.length; e++) {
                            var i = n[e];
                            if (i)
                                if ("cc.Node" == this.com_type) this.coms.push(i);
                                else {
                                    var o = i.getComponent(this.com_type);
                                    this.coms.push(o);
                                }
                        }
                    else
                        "cc.Node" == this.com_type
                            ? (this.com = this.node)
                            : (this.com = this.node.getComponent(this.com_type));
                    if (null != this.node_event)
                        if (this.more_enable)
                            for (
                                var a = function (e) {
                                        var n = r.coms[e];
                                        n &&
                                            n.node.on(
                                                r.node_event,
                                                function () {
                                                    t.eventCallBack(e);
                                                },
                                                r
                                            );
                                    },
                                    r = this,
                                    s = 0;
                                s < this.coms.length;
                                s++
                            )
                                a(s);
                        else
                            this.com &&
                                this.com.node.on(
                                    this.node_event,
                                    function () {
                                        t.eventCallBack(0);
                                    },
                                    this
                                );
                }),
                (e.prototype.eventCallBack = function () {
                    r.default.notifyEnable = !0;
                }),
                (e.prototype.comListenerFunc = function () {}),
                (e.prototype.listenerFunc = function (t, e) {
                    (this.filter_val = e), this.dynamic_find && this.initComs();
                    var n = new Map();
                    n.set(this.compare_index, 0), n.set(this.compare_len, this.coms.length);
                    var i = new Map();
                    if ((i.set(this.rtfilter_val, e), this.more_enable))
                        for (var o = e instanceof Array, a = 0; a < this.coms.length; a++) {
                            var s = this.coms[a];
                            if (s)
                                if ((n.set(this.compare_index, a), this.listenercontrol_enable)) {
                                    r.default.notifyEnable = !1;
                                    var c = p.default.syntax(
                                        s,
                                        this.syntaxData.syntax_prop_str,
                                        e,
                                        this.syntaxData.returntype_val,
                                        n,
                                        i
                                    );
                                    this.comListenerFunc(t, e, c, a);
                                } else
                                    o
                                        ? a < e.length && this.comListenerFunc(t, e, e[a], a)
                                        : this.comListenerFunc(t, e, e, a);
                        }
                    else
                        this.listenercontrol_enable
                            ? ((r.default.notifyEnable = !1),
                              (c = p.default.syntax(
                                  this.com,
                                  this.syntaxData.syntax_prop_str,
                                  e,
                                  this.syntaxData.returntype_val,
                                  n,
                                  i
                              )),
                              this.comListenerFunc(t, e, c, 0))
                            : this.comListenerFunc(t, e, e, 0);
                }),
                (e.prototype.setSyntaxPropStrByIndex = function (t, e) {
                    0 == t ? (this.syntaxData.syntax_prop_str = e) : (this.msyntaxData.syntax_prop_str = e);
                }),
                (e.prototype.setReturnTypeStrByIndex = function (t, e) {
                    0 == t ? (this.syntaxData.returntype_val = e) : (this.msyntaxData.returntype_val = e);
                }),
                __decorate([h()], e.prototype, "more_enable", void 0),
                __decorate([h()], e.prototype, "listenercontrol_enable", void 0),
                __decorate([h()], e.prototype, "modifycontrol_enable", void 0),
                __decorate([h()], e.prototype, "propertycontrol_enable", void 0),
                __decorate([h()], e.prototype, "modifycontrol_enable_show", void 0),
                __decorate([h()], e.prototype, "dynamic_find", void 0),
                __decorate([h()], e.prototype, "compare_index", void 0),
                __decorate([h()], e.prototype, "compare_len", void 0),
                __decorate([h()], e.prototype, "compare_com", void 0),
                __decorate([h()], e.prototype, "rtfilter_val", void 0),
                __decorate([h()], e.prototype, "rtlistener_val", void 0),
                __decorate([h({type: s.default})], e.prototype, "find_data", void 0),
                __decorate([h({type: c.default})], e.prototype, "syntaxData", void 0),
                __decorate([h({type: c.default})], e.prototype, "msyntaxData", void 0),
                __decorate([d, f, y(l.default)], e)
            );
        })(cc.Component));
n.default = v;
