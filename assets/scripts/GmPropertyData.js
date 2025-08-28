var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}), (n.GmPropertyItemData = void 0);
var o = cc._decorator,
    a = o.ccclass,
    r = o.property,
    s = (function () {
        function t() {
            (this.com = ""),
                (this.com_property = ""),
                (this.com_compare_property = ""),
                (this.com_propertys = []),
                (this.node = null);
        }
        return (
            __decorate([r()], t.prototype, "com", void 0),
            __decorate([r()], t.prototype, "com_property", void 0),
            __decorate([r()], t.prototype, "com_compare_property", void 0),
            __decorate([r({type: [cc.String]})], t.prototype, "com_propertys", void 0),
            __decorate([r({type: cc.Node})], t.prototype, "node", void 0),
            __decorate([a("GmPropertyItemData")], t)
        );
    })();
n.GmPropertyItemData = s;
var c = (function () {
    function t() {
        (this.datas = []), (this.coms = []), (this.node = null);
    }
    return (
        (t.prototype.init = function (t) {
            this.node = t;
            var e = t.getComponents(cc.Component);
            this.coms = ["cc.Node"];
            for (var n = 0, i = e; n < i.length; n++) {
                var o = i[n],
                    a = cc.js.getClassName(o);
                this.coms.push(a);
            }
        }),
        (t.prototype.addItemData = function () {
            var t = new s();
            (t.node = this.node), this.datas.push(t);
        }),
        (t.prototype.removeItemData = function (t) {
            this.datas.splice(t, 1);
        }),
        (t.prototype.removeAllItemData = function () {
            this.datas = [];
        }),
        (t.prototype.setItemComSelect = function (t, e) {
            (this.datas[t].com = e), (this.datas[t].com_compare_property = "");
            var n;
            for (var i in ((n = "cc.Node" == e ? this.node : this.node.getComponent(e)),
            (this.datas[t].com_propertys = []),
            n))
                "function" == typeof n[i] || i.startsWith("_") || this.datas[t].com_propertys.push(i);
        }),
        (t.prototype.setItemPropertySelect = function (t, e) {
            var n = this.datas[t];
            n.com_property = e;
            var i = n.com.replace(".", "_");
            n.com_compare_property = "gm_" + i + "_" + e;
        }),
        __decorate([r({type: [s]})], t.prototype, "datas", void 0),
        __decorate([r()], t.prototype, "coms", void 0),
        __decorate([a("GmPropertyData")], t)
    );
})();
n.default = c;
