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
    d = t("AchievementPanel"),
    h = t("SetPanel"),
    f = t("SignInPanel"),
    y = t("TurntablePanel"),
    v = t("AdMgr"),
    g = t("LevelTipPanel"),
    m = cc._decorator,
    b = m.ccclass,
    S = m.property,
    A = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.levelLabel = null), (e.textLevelEditBox = null), (e.highestScoreLabel = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                GameSys.loadGameComplete();
                s.default.inst.levelNum.bindObserveFunc(this.fluhsLevel, this),
                    u.default.inst.playMusic("bgm"),
                    this.preloadBsSpine(),
                    this.fluhsLevel(),
                    (this.highestScoreLabel.string = "" + s.default.inst.highestScore.val),
                    p.default.inst.requestConfig();
            }),
            (e.prototype.onDestroy = function () {
                s.default.inst.levelNum.unBindObserveFunc(this.fluhsLevel);
            }),
            (e.prototype.fluhsLevel = function () {
                var t = s.default.inst.levelNum.val;
                this.levelLabel.string = t;
            }),
            (e.prototype.preloadBsSpine = function () {
                r.default.inst.preloadDir("Spines", "Bs/", sp.SkeletonData, function () {}),
                    r.default.inst.loadRes("CoinFlyPanel", "Prefab/CoinFlyPanel", cc.Prefab),
                    r.default.inst.loadRes("GamePanel", "Prefabs/ballNode", cc.Prefab),
                    r.default.inst.loadRes("GamePanel", "Prefabs/ballSpineNode", cc.Prefab),
                    r.default.inst.loadRes("RulesPanel", "Prefab/RulesPanel", cc.Prefab);
            }),
            (e.prototype.playBtnClick = function () {
                null != this.textLevelEditBox.string &&
                    Number(this.textLevelEditBox.string) > 0 &&
                    (s.default.inst.levelNum.val = Number(this.textLevelEditBox.string)),
                    1 == s.default.inst.levelNum.val
                        ? l.default.inst.enterGameScene(
                              function () {},
                              function () {}
                          )
                        : c.default.show(g.default.path, c.PopupCacheMode.Frequent, null, !0);
            }),
            (e.prototype.onAchievementBtnChick = function () {
                console.log("onAchievementBtnChick"), c.default.show(d.default.path, c.PopupCacheMode.Frequent);
            }),
            (e.prototype.onSignInBtnChick = function () {
                p.default.inst.tj("click_signin"),
                    v.default.showInsert(),
                    c.default.show(f.default.path, c.PopupCacheMode.Frequent, null, !0);
            }),
            (e.prototype.onTurntableBtnChick = function () {
                p.default.inst.tj("click_home_spin"),
                    v.default.showInsert(),
                    c.default.show(y.default.path, c.PopupCacheMode.Frequent, null, !0);
            }),
            (e.prototype.onSetBtnChick = function () {
                p.default.inst.tj("click_setting"),
                    c.default.show(h.default.path, c.PopupCacheMode.Frequent, {type: 0}, !0);
            }),
            (e.prototype.shareBtn = function () {
                v.default.share();
            }),
            __decorate([S(cc.Label)], e.prototype, "levelLabel", void 0),
            __decorate([S(cc.EditBox)], e.prototype, "textLevelEditBox", void 0),
            __decorate([S(cc.Label)], e.prototype, "highestScoreLabel", void 0),
            __decorate([b], e)
        );
    })(cc.Component);
n.default = A;
