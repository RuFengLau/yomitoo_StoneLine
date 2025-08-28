var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var o = t("GmNotifyData"),
    a = t("GmSyntaxData"),
    r = cc._decorator,
    s = r.ccclass,
    c = r.property,
    l =
        (r.executeInEditMode,
        r.inspector,
        (function () {
            function t() {
                (this.key = ""),
                    (this.filter_enable = !1),
                    (this.notify_enable = !1),
                    (this.syntaxData = new a.default()),
                    (this.notifyData = new o.default());
            }
            return (
                __decorate([c({})], t.prototype, "key", void 0),
                __decorate([c({})], t.prototype, "filter_enable", void 0),
                __decorate([c({})], t.prototype, "notify_enable", void 0),
                __decorate([c({type: a.default})], t.prototype, "syntaxData", void 0),
                __decorate([c({type: o.default})], t.prototype, "notifyData", void 0),
                __decorate([s("GmObserveData")], t)
            );
        })());
n.default = l;
