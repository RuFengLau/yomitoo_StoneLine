var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmBindData"),
    o = (function () {
        function t() {}
        return (
            (t.createBinder = function (t, e, n, o, a) {
                void 0 === n && (n = null),
                    void 0 === o && (o = null),
                    void 0 === a && (a = null),
                    a && (e = this.convertToByType(a, e));
                var r = null;
                return (
                    this.isInGmBindDataMap(t)
                        ? (r = this.getBindDataByKey(t))
                        : ((r = new i.default(t, e)), this.gmBindDataMap.set(t, r)),
                    r.bindObserveFunc(n, o),
                    (r.val = e),
                    r
                );
            }),
            (t.getBindDataMap = function () {
                return this.gmBindDataMap;
            }),
            (t.convertToByType = function (t, e) {
                switch (t) {
                    case "string":
                        return e.toString();
                    case "int":
                        return parseInt(e);
                    case "float":
                        return parseFloat(e);
                    case "bool":
                        return "true" == e;
                }
                return e;
            }),
            (t.isInGmBindDataMap = function (t) {
                return this.gmBindDataMap.has(t);
            }),
            (t.getBindDataByKey = function (t) {
                return this.isInGmBindDataMap(t) ? this.gmBindDataMap.get(t) : null;
            }),
            (t.bindObserveFuncByKey = function (t, e, n) {
                return (
                    void 0 === n && (n = null),
                    !!this.isInGmBindDataMap(t) && (this.gmBindDataMap.get(t).bindObserveFunc(e, n), !0)
                );
            }),
            (t.removeBindDataBykey = function (t) {
                return !!this.isInGmBindDataMap(t) && this.gmBindDataMap.delete(t);
            }),
            (t.getBindDataValBykey = function (t) {
                if (this.isInGmBindDataMap(t)) return this.getBindDataByKey(t).val;
            }),
            (t.unBindObserveFuncByKey = function (t, e) {
                return !!this.isInGmBindDataMap(t) && this.getBindDataByKey(t).unBindObserveFunc(e);
            }),
            (t.unBindAllObserveFuncByKey = function (t) {
                this.isInGmBindDataMap(t) && this.getBindDataByKey(t).unBindAllObserveFunc();
            }),
            (t.gmBindDataMap = new Map()),
            t
        );
    })();
(n.default = o), (window.gmbinder = {GmBinder: o});
