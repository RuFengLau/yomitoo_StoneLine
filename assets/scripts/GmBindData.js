var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = cc._decorator,
    o =
        (i.ccclass,
        i.property,
        (function () {
            function t() {
                (this.func = null), (this.target = null);
            }
            return (
                (t.prototype.callFunc = function (t) {
                    null != this.target ? this.func.call(this.target, t) : this.func.call(this, t);
                }),
                t
            );
        })()),
    a = (function () {
        function t(t, e) {
            (this._observeFuncs = []), (this._key = t), (this._val = e);
        }
        return (
            Object.defineProperty(t.prototype, "val", {
                get: function () {
                    return this._val;
                },
                set: function (t) {
                    (this._val = t), this.notifyObserveFunc(t);
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t.prototype, "key", {
                get: function () {
                    return this._key;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.prototype.bindObserveFunc = function (t, e) {
                if (null != t) {
                    var n = new o();
                    (n.func = t), (n.target = e), this._observeFuncs.push(n);
                }
            }),
            (t.prototype.unBindObserveFunc = function (t) {
                if (null == t) return !1;
                for (var e = !1, n = this._observeFuncs.length - 1; n >= 0; n--)
                    this._observeFuncs[n].func == t && (this._observeFuncs.splice(n, 1), (e = !0));
                return e;
            }),
            (t.prototype.unBindAllObserveFunc = function () {
                this._observeFuncs = [];
            }),
            (t.prototype.notifyObserveFunc = function (e) {
                if (t.notifyEnable)
                    for (var n = 0, i = this._observeFuncs; n < i.length; n++) {
                        var o = i[n];
                        o && o.callFunc(e);
                    }
            }),
            (t.notifyEnable = !0),
            t
        );
    })();
n.default = a;
