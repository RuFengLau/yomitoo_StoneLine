var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = (function (t) {
    function e() {
        var e = t.call(this) || this;
        return (e.eventMap = {}), e;
    }
    return (
        __extends(e, t),
        (e.prototype.on = function (t, e, n) {
            void 0 === this.eventMap[t] && (this.eventMap[t] = []), this.eventMap[t].push({callback: e, target: n});
        }),
        (e.prototype.emit = function (t, e) {
            void 0 === e && (e = null);
            var n = this.eventMap[t];
            if (void 0 !== n)
                for (var i = 0; i < n.length; i++) {
                    var o = n[i];
                    o && o.callback.call(o.target, e);
                }
        }),
        (e.prototype.off = function (t, e, n) {
            void 0 === n && (n = null);
            var i = this.eventMap[t];
            if (void 0 !== i)
                for (var o = 0; o < i.length; o++) {
                    var a = i[o];
                    if (a && a.callback === e) {
                        i[o] = void 0;
                        break;
                    }
                }
        }),
        e
    );
})(t("MSingleton").Singleton());
n.default = a;
