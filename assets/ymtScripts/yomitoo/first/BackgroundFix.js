var t = require;
var e = module;
var n = exports;
var o,
    r = n,
    i =
        ((o = function (t, e) {
            return (o =
                Object.setPrototypeOf ||
                ({__proto__: []} instanceof Array &&
                    function (t, e) {
                        t.__proto__ = e;
                    }) ||
                function (t, e) {
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                })(t, e);
        }),
        function (t, e) {
            function n() {
                this.constructor = t;
            }
            o(t, e), (t.prototype = null === e ? Object.create(e) : ((n.prototype = e.prototype), new n()));
        }),
    a = function (t, e, n, o) {
        var r,
            i = arguments.length,
            a = i < 3 ? e : null === o ? (o = Object.getOwnPropertyDescriptor(e, n)) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
        else
            for (var c = t.length - 1; c >= 0; c--)
                (r = t[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
        return i > 3 && a && Object.defineProperty(e, n, a), a;
    };
Object.defineProperty(r, "__esModule", {value: !0});
var c = cc._decorator,
    s = c.ccclass,
    l =
        (c.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.nodeWidth = null), (e.nodeHeight = null), e;
            }
            return (
                i(e, t),
                (e.prototype.onLoad = function () {
                    (this.nodeWidth = this.node.width), (this.nodeHeight = this.node.height);
                }),
                (e.prototype.start = function () {
                    var t = cc.view.getVisibleSize();
                    this.nodeWidth / this.node.height < t.width / t.height
                        ? (this.node.scale = t.width / this.nodeWidth)
                        : (this.node.scale = t.height / this.node.height);
                }),
                a([s], e)
            );
        })(cc.Component));
r.default = l;
