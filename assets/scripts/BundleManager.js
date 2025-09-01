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
        (e.prototype.loadRes = function (t, e, n, i) {
            var o = this;
            return (
                void 0 === i && (i = null),
                new Promise(function (s, c) {
                    return __awaiter(o, void 0, void 0, function () {
                        var o;
                        return __generator(this, function (a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.loadBundle(t)];
                                case 1:
                                    return (
                                        (o = a.sent()) || c(null),
                                        o.load(e, n, function (t, e) {
                                            if (t) return cc.log(t), i && i(null), void c(null);
                                            i && i(e), s(e);
                                        }),
                                        [2]
                                    );
                            }
                        });
                    });
                })
            );
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
            return new Promise(async (resolve, reject) => {
                try {
                    // 加载 bundle
                    const bundle = await this.loadBundle(t);
        
                    // 加载目录
                    bundle.loadDir(e, n, (err, assets) => {
                        if (err) {
                            cc.log(err);
                            reject(err);
                            return;
                        }
        
                        console.log(`preloadDir bundle: ${t} path: ${e}`);
        
                        // 如果有回调，执行回调
                        if (i) {
                            i(assets);
                        }
        
                        // 完成 Promise
                        resolve(assets);
                    });
                } catch (err) {
                    cc.error("preloadDir 出错:", err);
                    reject(err);
                }
            });
        }),
        e
    );
})(t("MSingleton").Singleton());
n.default = s;
