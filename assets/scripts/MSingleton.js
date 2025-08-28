var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}),
    (n.Singleton = void 0),
    (n.Singleton = function () {
        return (function () {
            function t() {}
            return (
                Object.defineProperty(t, "inst", {
                    get: function () {
                        return null == t._inst && (t._inst = new this()), t._inst;
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (t._inst = null),
                t
            );
        })();
    });
