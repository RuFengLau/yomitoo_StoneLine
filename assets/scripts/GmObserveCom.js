var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBindData"),
    s = t("GmBinder"),
    c = t("GmBinderTool"),
    l = t("GmObserveData"),
    p = cc._decorator,
    u = p.ccclass,
    d = p.property,
    h = p.executeInEditMode,
    f = p.inspector,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.observelist = []),
                (e.editor_enable = !1),
                (e._binderCallFuncMap = new Map()),
                (e._comsListener = []),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {}),
            (e.prototype.start = function () {
                for (
                    var t = this,
                        e = function (e) {
                            if ("" == e.key) return "continue";
                            var i = s.default.getBindDataByKey(e.key);
                            if (!i) return "continue";
                            var o = function (n) {
                                e.filter_enable &&
                                    ((r.default.notifyEnable = !1),
                                    (n = c.default.syntax(
                                        t.node,
                                        e.syntaxData.syntax_prop_str,
                                        n,
                                        e.syntaxData.returntype_val
                                    )));
                                for (var i = 0, o = t._comsListener; i < o.length; i++) (0, o[i])(e.key, n);
                                e.notify_enable && c.default.executeNodeFunc(e.notifyData, [e.key, n, t.node]);
                            };
                            i.bindObserveFunc(o, n), n._binderCallFuncMap.set(i, o), o(i.val);
                        },
                        n = this,
                        i = 0,
                        o = this.observelist;
                    i < o.length;
                    i++
                )
                    e(o[i]);
            }),
            (e.prototype.onDestroy = function () {
                this._binderCallFuncMap.forEach(function (t, e) {
                    e && e.unBindObserveFunc(t);
                });
            }),
            (e.prototype.registerComListener = function (t) {
                this._comsListener.push(t);
            }),
            (e.prototype.setEditorEnable = function (t) {
                this.editor_enable = t;
            }),
            (e.prototype.addObserve = function () {
                var t = new l.default();
                this.observelist.push(t);
            }),
            (e.prototype.removeAllObserve = function () {
                this.observelist = [];
            }),
            (e.prototype.setFilterEnableByIndex = function (t, e) {
                this.observelist[t].filter_enable = e;
            }),
            (e.prototype.seNotifyEnableByIndex = function (t, e) {
                this.observelist[t].notify_enable = e;
            }),
            (e.prototype.removeObserveByIndex = function (t) {
                this.observelist.splice(t, 1);
            }),
            (e.prototype.setKeyStrByIndex = function (t, e) {
                this.observelist[t].key = e;
            }),
            (e.prototype.setNotifyNodeUuidByIndex = function (t, e) {
                this.observelist[t].notifyData.setNotifyNodeUuid(e);
            }),
            (e.prototype.setNotifySelectComByIndex = function (t, e) {
                this.observelist[t].notifyData.setNotifySelectCom(e);
            }),
            (e.prototype.setNotifySelectFuncByIndex = function (t, e) {
                this.observelist[t].notifyData.setNotifySelectFunc(e);
            }),
            (e.prototype.setNotifyCustomByIndex = function (t, e) {
                this.observelist[t].notifyData.custom_val = e;
            }),
            (e.prototype.setSyntaxPropStrByIndex = function (t, e) {
                this.observelist[t].syntaxData.syntax_prop_str = e;
            }),
            (e.prototype.setReturnTypeStrByIndex = function (t, e) {
                this.observelist[t].syntaxData.returntype_val = e;
            }),
            __decorate([d], e.prototype, "observelist", void 0),
            __decorate([d], e.prototype, "editor_enable", void 0),
            __decorate([u, f("packages://gm_binder_plugin/inspector/com/binder/observe/com_binder.js"), h], e)
        );
    })(cc.Component);
n.default = y;
