var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("SceneManager"),
    c = t("PopupBase"),
    l = cc._decorator,
    p = l.ccclass,
    u =
        (l.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                Object.defineProperty(e, "path", {
                    get: function () {
                        return "ab:LevelTipPanel/Prefabs/LevelTipPanel";
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (e.prototype.onLoad = function () {}),
                (e.prototype.start = function () {}),
                (e.prototype.OkClcik = function () {
                    s.default.inst.enterGameScene(
                        function () {},
                        function () {}
                    );
                }),
                (e.prototype.NoClick = function () {
                    (r.default.inst.scoreNum.val = 0),
                        (r.default.inst.levelNum.val = 1),
                        (r.default.inst.levelStartScore.val = 0),
                        s.default.inst.enterGameScene(
                            function () {},
                            function () {}
                        );
                }),
                __decorate([p], e)
            );
        })(c.default));
n.default = u;
