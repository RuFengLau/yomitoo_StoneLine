var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0});
var i = t("GmManager"),
    o = (function () {
        function t() {
            (this.logInst = null), (this.isNative = !1);
        }
        return (
            (t.prototype.init = function () {
                (this.logInst = console.log), (this.isNative = i.default.inst.engine.engine.isNative());
            }),
            (t.prototype.log = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isNative, this.logInst.call(this, "" + cc.js.formatStr.apply(cc, arguments));
            }),
            (t.prototype.info = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isNative
                    ? this.log.apply(this, t)
                    : this.logInst.call(this, "%c" + cc.js.formatStr.apply(cc, arguments), "color:#00CD00;");
            }),
            (t.prototype.warn = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isNative
                    ? this.log.apply(this, t)
                    : this.logInst.call(this, "%c" + cc.js.formatStr.apply(cc, arguments), "color:#ee7700;");
            }),
            (t.prototype.err = function () {
                for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                this.isNative
                    ? this.log.apply(this, t)
                    : this.logInst.call(this, "%c" + cc.js.formatStr.apply(cc, arguments), "color:red");
            }),
            t
        );
    })();
n.default = o;
