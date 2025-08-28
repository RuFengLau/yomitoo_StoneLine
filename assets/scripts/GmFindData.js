var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.GmFindComGPathData = n.GmFindComPathData = n.GmFindNameData = n.GmFindNodeData = void 0);
var o = cc._decorator,
    a = o.ccclass,
    r = o.property,
    s = (function () {
        function t() {
            (this.uuid = ""), (this.target = null);
        }
        return (
            __decorate([r()], t.prototype, "uuid", void 0),
            __decorate([r({type: cc.Node})], t.prototype, "target", void 0),
            __decorate([a("GmFindNodeData")], t)
        );
    })();
n.GmFindNodeData = s;
var c = (function () {
    function t() {
        this.name = "";
    }
    return __decorate([r()], t.prototype, "name", void 0), __decorate([a("GmFindNameData")], t);
})();
n.GmFindNameData = c;
var l = (function () {
    function t() {
        this.path = "";
    }
    return __decorate([r()], t.prototype, "path", void 0), __decorate([a("GmFindComPathData")], t);
})();
n.GmFindComPathData = l;
var p = (function () {
    function t() {
        this.path = "";
    }
    return __decorate([r()], t.prototype, "path", void 0), __decorate([a("GmFindComGPathData")], t);
})();
n.GmFindComGPathData = p;
var u = (function () {
    function t() {
        (this.find_type = "ChildIndex"),
            (this.find_nodes = []),
            (this.find_names = []),
            (this.find_compaths = []),
            (this.find_comgpaths = []),
            (this.find_nameindex_prename = ""),
            (this.find_nameindex_num = 0);
    }
    return (
        (t.prototype.setFindTypeStr = function (t) {
            this.find_type = t;
        }),
        (t.prototype.addFindNode = function () {
            var t = new s();
            this.find_nodes.push(t);
        }),
        (t.prototype.removeAllFindNode = function () {
            this.find_nodes = [];
        }),
        (t.prototype.setFindNode = function (t, e) {
            (this.find_nodes[t].uuid = e), (this.find_nodes[t].target = cc.engine.getInstanceById(e));
        }),
        (t.prototype.removeFindNode = function (t) {
            this.find_nodes.splice(t, 1);
        }),
        (t.prototype.addFindName = function () {
            var t = new c();
            this.find_names.push(t);
        }),
        (t.prototype.removeAllFindName = function () {
            this.find_names = [];
        }),
        (t.prototype.setFindName = function (t, e) {
            this.find_names[t].name = e;
        }),
        (t.prototype.removeFindName = function (t) {
            this.find_names.splice(t, 1);
        }),
        (t.prototype.addFindComPath = function () {
            var t = new l();
            this.find_compaths.push(t);
        }),
        (t.prototype.removeAllFindComPath = function () {
            this.find_compaths = [];
        }),
        (t.prototype.setFindComPath = function (t, e) {
            this.find_compaths[t].path = e;
        }),
        (t.prototype.removeFindComPath = function (t) {
            this.find_compaths.splice(t, 1);
        }),
        (t.prototype.addFindComGPath = function () {
            var t = new p();
            this.find_comgpaths.push(t);
        }),
        (t.prototype.removeAllFindComGPath = function () {
            this.find_comgpaths = [];
        }),
        (t.prototype.setFindComGPath = function (t, e) {
            this.find_comgpaths[t].path = e;
        }),
        (t.prototype.removeFindComGPath = function (t) {
            this.find_comgpaths.splice(t, 1);
        }),
        (t.prototype.setFindNameIndex = function (t) {
            this.find_nameindex_prename = t;
        }),
        (t.prototype.setFindNameIndexNum = function (t) {
            this.find_nameindex_num = t;
        }),
        (t.prototype.findNodes = function (t) {
            var e = [];
            switch (this.find_type) {
                case "Nodes":
                    for (var n = 0, i = this.find_nodes; n < i.length; n++) {
                        var o = i[n];
                        e.push(o.target);
                    }
                    break;
                case "ChildIndex":
                    e = t.children;
                    break;
                case "ChildName":
                    for (var a = 0, r = this.find_names; a < r.length; a++)
                        (o = r[a]), e.push(t.getChildByName(o.name));
                    break;
                case "ChildNameIndex":
                    for (var s = 0; s < this.find_nameindex_num; s++)
                        e.push(t.getChildByName(this.find_nameindex_prename + s));
                    break;
                case "ComPathByNode":
                    for (var c = 0, l = this.find_compaths; c < l.length; c++) (o = l[c]), e.push(cc.find(o.path, t));
                    break;
                case "ComPathGlobal":
                    for (var p = 0, u = this.find_comgpaths; p < u.length; p++) (o = u[p]), e.push(cc.find(o.path));
            }
            return e;
        }),
        __decorate([r()], t.prototype, "find_type", void 0),
        __decorate([r({type: [s]})], t.prototype, "find_nodes", void 0),
        __decorate([r({type: [c]})], t.prototype, "find_names", void 0),
        __decorate([r({type: [l]})], t.prototype, "find_compaths", void 0),
        __decorate([r({type: [p]})], t.prototype, "find_comgpaths", void 0),
        __decorate([r()], t.prototype, "find_nameindex_prename", void 0),
        __decorate([r()], t.prototype, "find_nameindex_num", void 0),
        __decorate([a("GmFindData")], t)
    );
})();
n.default = u;
