var t = require;
var e = module;
(Date.prototype.format = function () {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    var n,
        i = this,
        o = {
            "Y+": i.getFullYear().toString(),
            "M+": (i.getMonth() + 1).toString(),
            "d+": i.getDate().toString(),
            "h+": i.getHours().toString(),
            "m+": i.getMinutes().toString(),
            "s+": i.getSeconds().toString()
        },
        a = "YY-MM-dd hh:mm:ss";
    for (var r in (t[0] && (a = t[0]), o))
        (n = new RegExp("(" + r + ")").exec(a)) &&
            (a = a.replace(n[1], 1 == n[1].length ? o[r] : o[r].padStart(n[1].length, "0")));
    return a;
}),
    (Date.prototype.diffTime = function () {
        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
        var n = this,
            i = (t[0] ? t[0] : new Date()).getTime() - n.getTime();
        return i;
    }),
    (Date.prototype.diffSeconds = function (t) {
        return Math.floor(this.diffTime(t) / 1e3);
    }),
    (Date.prototype.diffMinute = function (t) {
        return Math.floor(this.diffSeconds(t) / 60);
    }),
    (Date.prototype.diffHour = function (t) {
        return Math.floor(this.diffMinute(t) / 60);
    }),
    (Date.prototype.diffDay = function (t) {
        return Math.floor(this.diffHour(t) / 24);
    });
