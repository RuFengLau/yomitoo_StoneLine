var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var o = cc._decorator,
    a = o.ccclass,
    r = o.property,
    s =
        (o.executeInEditMode,
        o.inspector,
        (function () {
            function t() {
                (this.node_uuid = ""),
                    (this.coms = []),
                    (this.select_com = ""),
                    (this.funces = []),
                    (this.select_func = ""),
                    (this.custom_val = ""),
                    (this.target = null);
            }
            return (
                (t.prototype.setNotifyNodeUuid = function (t) {
                    if (((this.node_uuid = t), "" != t)) {
                        var e = cc.engine.getInstanceById(t);
                        if (((this.target = e), e)) {
                            var n = e.getComponents(cc.Component);
                            this.coms = [];
                            for (var i = 0, o = n; i < o.length; i++) {
                                var a = o[i],
                                    r = cc.js.getClassName(a);
                                this.coms.push(r);
                            }
                        }
                    }
                }),
                (t.prototype.setNotifySelectCom = function (t) {
                    this.select_com = t;
                    var e = cc.engine.getInstanceById(this.node_uuid);
                    if (e) {
                        var n = e.getComponent(this.select_com);
                        for (var i in ((this.funces = []), n))
                            "function" == typeof n[i] && (i.startsWith("_") || this.funces.push(i));
                    }
                }),
                (t.prototype.setNotifySelectFunc = function (t) {
                    this.select_func = t;
                }),
                __decorate([r({})], t.prototype, "node_uuid", void 0),
                __decorate([r({})], t.prototype, "coms", void 0),
                __decorate([r({})], t.prototype, "select_com", void 0),
                __decorate([r({})], t.prototype, "funces", void 0),
                __decorate([r({})], t.prototype, "select_func", void 0),
                __decorate([r({})], t.prototype, "custom_val", void 0),
                __decorate([r({type: cc.Node})], t.prototype, "target", void 0),
                __decorate([a("GmNotifyData")], t)
            );
        })());
n.default = s;
