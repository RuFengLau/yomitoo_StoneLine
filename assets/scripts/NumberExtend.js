var t = require;
var e = module;
(Number.prototype.simple = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n = this,
        i = t;
    return (
        Array.isArray(t[0]) && (i = t[0]),
        i.length <= 0 && (i = ["k", "w", "m"]),
        i.length <= 1 && (i[1] = "w"),
        n / 1e6 >= 1
            ? (Math.floor((n / 1e6) * 100) / 100).toFixed(2) + i[2]
            : n / 1e4 >= 1
            ? (Math.floor((n / 1e4) * 100) / 100).toFixed(2) + i[1]
            : n / 1e3 >= 1
            ? (Math.floor((n / 1e3) * 100) / 100).toFixed(2) + i[0]
            : (Math.floor(100 * n) / 100).toFixed(2)
    );
}),
    (Number.prototype.formatSeconds = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n,
            i = this,
            o = Math.floor(i / 1) % 60,
            a = (i = Math.floor(i / 60)) % 60,
            r = (i = Math.floor(i / 60)) % 24,
            s = (i = Math.floor(i / 24)),
            c = {"d+": s.toString(), "h+": r.toString(), "m+": a.toString(), "s+": o.toString()},
            l = "dd:hh:mm:ss";
        for (var p in (t[0] && (l = t[0]), c))
            (n = new RegExp("(" + p + ")").exec(l)) &&
                (l = l.replace(n[1], 1 == n[1].length ? c[p] : c[p].padStart(n[1].length, "0")));
        return l;
    });
