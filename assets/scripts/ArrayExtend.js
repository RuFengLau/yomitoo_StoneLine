var t = require;
var e = module;
(Array.prototype.remove = function (t) {
    var e = this.indexOf(t);
    return e > -1 && this.splice(e, 1), this;
}),
    (Array.prototype.shuffle = function () {
        for (var t, e = 1; e < this.length; e++) {
            var n = Math.floor(Math.random() * (e + 1));
            (t = [this[n], this[e]]), (this[e] = t[0]), (this[n] = t[1]);
        }
        return this;
    }),
    (Array.prototype.unique = function () {
        this.sort();
        for (var t = [this[0]], e = 1; e < this.length; e++) this[e] !== t[t.length - 1] && t.push(this[e]);
        return t;
    }),
    (Array.prototype.union = function (t) {
        return this.concat(t).unique();
    }),
    (Array.prototype.minus = function (t) {
        for (var e = [], n = 0; n < this.length; n++) {
            for (var i = !0, o = 0; o < t.length; o++) this[n] == t[o] && (i = !1);
            i && e.push(this[n]);
        }
        return e.unique();
    }),
    (Array.prototype.intersect = function (t) {
        for (var e = [], n = 0; n < t.length; n++)
            for (var i = t[n], o = 0; o < this.length; o++)
                if (i === this[o]) {
                    e.push(i);
                    break;
                }
        return e.unique();
    }),
    (Array.prototype.randArry = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = this,
            i = n.length;
        t[0] && (i = t[0]), i > n.length && (i = n.length);
        var o = [].concat(n);
        return ((o = o.shuffle()).length = i), o;
    }),
    (Array.prototype.flat = function () {
        for (
            var t = this;
            t.some(function (t) {
                return Array.isArray(t);
            });

        )
            t = [].concat.apply([], t);
        return t;
    });
