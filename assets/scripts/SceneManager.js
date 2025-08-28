var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("MSingleton"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (t) {
            function e() {
                return t.call(this) || this;
            }
            return (
                __extends(e, t),
                (e.prototype.init = function () {}),
                (e.prototype.preloadHomeScene = function (t) {
                    void 0 === t && (t = null),
                        cc.director.preloadScene(
                            "homeScene",
                            function (e, n) {
                                t && t(e / n);
                            },
                            function () {}
                        );
                }),
                (e.prototype.enterHomeScene = function (t, e) {
                    void 0 === t && (t = null),
                        void 0 === e && (e = null),
                        cc.director.preloadScene(
                            "homeScene",
                            function (e, n) {
                                t && t(e / n);
                            },
                            function () {
                                e && e(), cc.director.loadScene("homeScene", function () {});
                            }
                        );
                }),
                (e.prototype.preloadGameScene = function () {
                    cc.director.preloadScene(
                        "gameScene",
                        function () {},
                        function () {}
                    );
                }),
                (e.prototype.enterGameScene = function (t, e) {
                    void 0 === t && (t = null),
                        void 0 === e && (e = null),
                        cc.director.preloadScene(
                            "gameScene",
                            function (e, n) {
                                t && t(e / n);
                            },
                            function () {
                                e && e(), cc.director.loadScene("gameScene", function () {});
                            }
                        );
                }),
                __decorate([c], e)
            );
        })(r.Singleton()));
n.default = l;
