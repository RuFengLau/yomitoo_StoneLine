var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var s = (function (t) {
    function e() {
        var e = t.call(this) || this;
        return (e.cacheRes = {}), e;
    }
    return (
        __extends(e, t),
        (e.prototype.loadBundle = function (t, e) {
            var n = this;
            return (
                void 0 === e && (e = null),
                new Promise(function (i, o) {
                    return __awaiter(n, void 0, void 0, function () {
                        return __generator(this, function () {
                            return (
                                cc.assetManager.loadBundle(t, function (t, n) {
                                    if (t) return cc.log(t), e && e(null), void o(null);
                                    e && e(n), i(n);
                                }),
                                [2]
                            );
                        });
                    });
                })
            );
        }),
        (e.prototype.getBundle = function (t) {
            return cc.assetManager.getBundle(t);
        }),
        (e.prototype.removeBundle = function (t) {
            cc.assetManager.removeBundle(t);
        }),
        (e.prototype.loadRes = function (t, e, n, i, o) {
            var s = this;
            void 0 === i && (i = null), void 0 === o && (o = !1);
            var c = t + e;
            if (this.cacheRes[c] && !o) {
                var l = this.cacheRes[c];
                return new Promise(function (t) {
                    return __awaiter(s, void 0, void 0, function () {
                        return __generator(this, function () {
                            return i && i(l), t(l), [2];
                        });
                    });
                });
            }
            return new Promise(function (o, l) {
                return __awaiter(s, void 0, void 0, function () {
                    var a,
                        s = this;
                    return __generator(this, function (r) {
                        switch (r.label) {
                            case 0:
                                return [4, this.loadBundle(t)];
                            case 1:
                                return (
                                    (a = r.sent()) || l(null),
                                    a.load(e, n, function (t, e) {
                                        if (t) return cc.log(t), i && i(null), void l(null);
                                        (s.cacheRes[c] = e), i && i(e), o(e);
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (e.prototype.preloadRes = function (t, e, n) {
            var i = this;
            return new Promise(function (o, s) {
                return __awaiter(i, void 0, void 0, function () {
                    return __generator(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return [4, this.loadBundle(t)];
                            case 1:
                                return (
                                    i.sent().preload(e, n, function (n) {
                                        n && (cc.log(n), s()),
                                            console.log("preloadRes bundle: " + t + " path: " + e),
                                            o(null);
                                    }),
                                    [2]
                                );
                        }
                    });
                });
            });
        }),
        (e.prototype.preloadDir = function (t, e, n, i) {
            var o = this;
            return (
                void 0 === i && (i = null),
                new Promise(function (s, c) {
                    return __awaiter(o, void 0, void 0, function () {
                        return __generator(this, function (o) {
                            switch (o.label) {
                                case 0:
                                    return [4, this.loadBundle(t)];
                                case 1:
                                    return (
                                        o.sent().loadDir(e, n, function (n, o) {
                                            n && (cc.log(n), c()),
                                                console.log("preloadDir bundle: " + t + " path: " + e),
                                                i && i(o),
                                                s(o);
                                        }),
                                        [2]
                                    );
                            }
                        });
                    });
                })
            );
        }),
        e
    );
})(t("Singleton").Singleton());
n.default = s;
