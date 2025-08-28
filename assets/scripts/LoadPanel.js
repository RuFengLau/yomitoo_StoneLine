const { default: GameSys } = require("../ymtScripts/tools/game_sys/GameSys");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("BundleManager"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("SceneManager"),
    p = t("SDKManager"),
    u = t("SoundManager"),
    d = t("WaitPanel"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.progressBar = null),
                (e.pLabel = null),
                (e.loadLabel = null),
                (e.loadNum = 0),
                (e._maxPersent = 0.3),
                (e._speed = 1),
                (e._curTime = 0),
                (e._totalTime = 2),
                (e._bShow = !1),
                (e.bUpDate = !1),
                (e.progress = 0),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                (cc.macro.ENABLE_MULTI_TOUCH = !1),
                    s.default.inst.init(),
                    p.default.inst.init(),
                    u.default.inst.init(),
                    r.default.inst.loadBundle("Common"),
                    r.default.inst.loadRes("WaitPanel", "Prefab/WaitPanel", cc.Prefab),
                    (c.default.loadStartCallback = function () {
                        console.log("loadStartCallback~~~~~~~~~"),
                            c.default.show(d.default.path, c.PopupCacheMode.Frequent, {showBgSp: !1}, !0);
                    }),
                    (c.default.loadFinishCallback = function () {
                        console.log("loadFinishCallback~~~~~~~~~"), c.default.closePopup(d.default.path);
                    }),
                    this.schedule(function () {
                        var e = "Loading".padEnd("Loading".length + t.loadNum, ".");
                        (t.loadLabel.string = e), t.loadNum++, t.loadNum > 3 && (t.loadNum = 0);
                    }, 1),
                    (this.bUpDate = !1),
                    (this.progressBar.progress = 0)
                    // cc
                    //     .tween(this.GAMA)
                    //     .delay(1)
                    //     .to(0.5, {opacity: 0})
                    //     .call(function () {
                    //         t.bUpDate = !0;
                    //     })
                    //     .start();
                    t.bUpDate = !0;
            }),
            (e.prototype.start = function () {
                var t = this;
                l.default.inst.preloadGameScene(),
                    l.default.inst.preloadHomeScene(function (e) {
                        e >= t._maxPersent && (t._maxPersent = e);
                    }),
                    this.loadPrefab();
            }),
            (e.prototype.loadPrefab = function () {
                var t = this;
                cc.assetManager.loadBundle("SetPanel", function (e, n) {
                    e ||
                        n.load("Prefab/SetPanel", cc.Prefab, function (e, n) {
                            e || (c.default._prefabMap.set("ab:SetPanel/Prefab/SetPanel", n), (t.progress += 1));
                        });
                }),
                    cc.assetManager.loadBundle("TurntablePanel", function (e, n) {
                        e ||
                            n.load("Prefabs/TurntablePanel", cc.Prefab, function (e, n) {
                                e ||
                                    (c.default._prefabMap.set("ab:TurntablePanel/Prefabs/TurntablePanel", n),
                                    (t.progress += 1));
                            });
                    }),
                    cc.assetManager.loadBundle("SignInPanel", function (e, n) {
                        e ||
                            n.load("Prefabs/SignInPanel", cc.Prefab, function (e, n) {
                                e ||
                                    (c.default._prefabMap.set("ab:SignInPanel/Prefabs/SignInPanel", n),
                                    (t.progress += 1));
                            });
                    }),
                    cc.assetManager.loadBundle("LevelTipPanel", function (e, n) {
                        e ||
                            n.load("Prefabs/LevelTipPanel", cc.Prefab, function (e, n) {
                                e ||
                                    (c.default._prefabMap.set("ab:LevelTipPanel/Prefabs/LevelTipPanel", n),
                                    (t.progress += 1));
                            });
                    });
            }),
            (e.prototype.update = function (t) {
                if (this.bUpDate) {
                    var e = this.progressBar.progress;
                    this._maxPersent < 1 && e >= this._maxPersent - 0.2
                        ? (this._speed = this._speed - 0.03)
                        : (this._speed = this._speed + 0.01),
                        (this._speed = this._speed >= 1 ? 1 : this._speed),
                        (this._speed = this._speed <= 0.005 ? 0.005 : this._speed),
                        (this._curTime += t * this._speed),
                        (e = (e = this._curTime / this._totalTime) >= this._maxPersent ? this._maxPersent : e),
                        (this.pLabel.string = (100 * e).toFixed(2) + "%"),
                        (this.progressBar.progress = e),
                        GameSys.loadGameProgress(Math.ceil(100*e)),
                        e >= 1 &&
                            !this._bShow &&
                            this.progress >= 4 &&
                            (console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>this.progress:", this.progress),
                            (this._bShow = !0),
                            cc.director.loadScene("homeScene"));
                }
            }),
            __decorate([y(cc.ProgressBar)], e.prototype, "progressBar", void 0),
            __decorate([y(cc.Label)], e.prototype, "pLabel", void 0),
            __decorate([y(cc.Label)], e.prototype, "loadLabel", void 0),
            __decorate([f], e)
        );
    })(cc.Component);
n.default = v;
