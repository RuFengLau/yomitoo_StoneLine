var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmBindData"),
    o = t("GmBinder"),
    a = t("eval5"),
    r = (function () {
        function t() {}
        return (
            (t.format = function (t, e, n, i) {
                if ((void 0 === i && (i = null), "" == t)) return n;
                var r = o.default.getBindDataMap(),
                    s = Array.from(r);
                s.sort(function (t, e) {
                    var n = t[0];
                    return e[0].length - n.length;
                });
                for (var c = [], l = [], p = 0, u = s; p < u.length; p++) {
                    var d = u[p];
                    c.push(d[0]), l.push(d[1].val);
                }
                i.forEach(function (t, e) {
                    c.push(e), l.push(t);
                });
                var h = new a.Interpreter(window, {rootContext: this});
                return t.replace(/\$\{([^}]*)\}/g, function (t, e) {
                    for (var n = 0; n < c.length; n++) {
                        var i = l[n];
                        (i = "string" == typeof c[n] ? "'" + l[n] + "'" : l[n]), (e = e.replace(RegExp(c[n], "g"), i));
                    }
                    return h.evaluate(e);
                });
            }),
            (t.syntax = function (t, e, n, r, s, c, l) {
                if ((void 0 === s && (s = null), void 0 === c && (c = null), void 0 === l && (l = []), "" == e))
                    return n;
                var p = (e = (e = e.replace(/[\r\n]/g, "")).replace(/let /g, "var "));
                o.default.getBindDataMap().forEach(function (t, e) {
                    p = p.replace(RegExp(e + ".val", "g"), "GMB#" + e + "#GME");
                }),
                    null != s &&
                        s.forEach(function (t, e) {
                            p =
                                "string" == typeof t
                                    ? p.replace(RegExp(e, "g"), "'" + t + "'")
                                    : p.replace(RegExp(e, "g"), t);
                        }),
                    null != c &&
                        c.forEach(function (t, e) {
                            p = p.replace(RegExp(e, "g"), t);
                        });
                var u = {GmBinder: o.default, cc: cc, gm_com: t};
                if (l.length > 0) {
                    var d;
                    d = t instanceof cc.Node ? "gm_com." : "gm_com.node.";
                    for (var h = 0, f = l; h < f.length; h++) {
                        var y,
                            v = f[h];
                        (y =
                            "cc.Node" == v.com
                                ? d + v.com_property
                                : d + "getComponent(" + v.com + ")." + v.com_property),
                            (p = p.replace(RegExp(v.com_compare_property, "g"), y));
                    }
                }
                p =
                    "(function(){" +
                    (p = (p = p.replace(RegExp("GMB#", "g"), "GmBinder.getBindDataByKey('")).replace(
                        RegExp("#GME", "g"),
                        "').val"
                    )) +
                    "})()";
                var g = new a.Interpreter(window, {rootContext: u}),
                    m = void 0;
                try {
                    (m = g.evaluate(p)), (i.default.notifyEnable = !0);
                } catch (b) {
                    console.log(b);
                }
                return this.parseType(r, m);
            }),
            (t.parseType = function (t, e) {
                switch (t) {
                    case "boolean":
                        e = "false" != e && Boolean(e);
                        break;
                    case "number":
                        e = Number(e);
                        break;
                    case "void":
                        e = void 0;
                        break;
                    case "color":
                        var n = e.replace(" ", ""),
                            i = (n = (n = (n = n.replace("rgba", "")).replace("(", "")).replace(")", "")).split(",");
                        e = new cc.Color(parseInt(i[0]), parseInt(i[1]), parseInt(i[2]), parseInt(i[3]));
                }
                return e;
            }),
            (t.executeNodeFunc = function (t, e) {
                void 0 === e && (e = []);
                var n = t.target.getComponent(t.select_com);
                if (cc.isValid(n)) {
                    var i = n[t.select_func];
                    "function" == typeof i &&
                        (null != t.custom_val && "" !== t.custom_val && e.push(t.custom_val), i.apply(n, e));
                }
            }),
            t
        );
    })();
n.default = r;
