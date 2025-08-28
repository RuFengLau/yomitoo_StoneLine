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
                return (e.templatestr = ""), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    (this.com_type = "cc.Node"), (this.modifycontrol_enable_show = !1), t.prototype.onLoad.call(this);
                }),
                (e.prototype.comListenerFunc = function (e, n, i, o) {
                    t.prototype.comListenerFunc.call(this, e, n, i, o);
                }),
                __decorate([l], e.prototype, "templatestr", void 0),
                __decorate(
                    [
                        c,
                        p("packages://gm_binder_plugin/inspector/com/binder/coms/com_node.js"),
                        u("Gm/Binder/NodeBind")
                    ],
                    e
                )
            );
        })(r.default));
n.default = d;
