var t = require;
var e = module;
(String.prototype.replaceAll = function (t, e) {
    return this.replace(new RegExp(t, "gm"), e);
}),
    (String.prototype.format = function (t) {
        var e = this;
        if (arguments.length < 1) return e;
        var n = arguments;
        for (var i in (1 == arguments.length && "object" == typeof t && (n = t), n)) {
            var o = n[i];
            null != o && (e = e.replaceAll("\\{" + i + "\\}", o));
        }
        return e;
    });
