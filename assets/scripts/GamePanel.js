var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", { value: !0 });
var r = t("BundleManager"),
    s = t("DataManager"),
    c = t("PopupManager"),
    l = t("SDKManager"),
    p = t("ScratchCardPanel"),
    u = t("SetPanel"),
    d = t("TurntablePanel"),
    h = cc._decorator,
    f = h.ccclass,
    y = h.property,
    v = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.levelLabel = null),
                (e.levelBg = null),
                (e.CoinBg = null),
                (e.curLevelLabel = null),
                (e.nextLevelLabel = null),
                (e.propBombBg = null),
                (e.propCleanBg = null),
                (e.fanButton = null),
                (e.topBgNode = null),
                (e.downBgNode = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                cc.director.getCollisionManager().enabled = !0;
                var t = cc.director.getPhysicsManager();
                (t.enabled = !0),
                    (t.debugDrawFlags = 0),
                    s.default.inst.levelNum.bindObserveFunc(this.fluhsLevel, this),
                    s.default.inst.theme.bindObserveFunc(this.fluhsTopBg, this),
                    this.fluhsLevel(),
                    this.fluhsTopBg();

                    setTimeout(()=>{
                        this.topBgNode.x = 0;
                        this.downBgNode.x = 0;
                    },1)
                    
            }),
            (e.prototype.onDestroy = function () {
                s.default.inst.levelNum.unBindObserveFunc(this.fluhsLevel),
                    s.default.inst.theme.unBindObserveFunc(this.fluhsTopBg);
            }),
            (e.prototype.fluhsTopBg = function () {
                var t = this,
                    e = "",
                    n = "";
                switch (s.default.inst.theme.val) {
                    case "yellow":
                        (e = "bjs/yellow/ui_yxjm_jbdi"), (n = "bjs/yellow/ui_fs_di");
                        break;
                    case "blue":
                        (e = "bjs/blue/ui_yxjm_jbdi"), (n = "bjs/blue/ui_fs_di");
                        break;
                    case "green":
                        (e = "bjs/green/ui_yxjm_jbdi"), (n = "bjs/green/ui_fs_di");
                        break;
                    case "purple":
                        (e = "bjs/purple/ui_yxjm_jbdi"), (n = "bjs/purple/ui_fs_di");
                        break;
                    case "red":
                        (e = "bjs/red/ui_yxjm_jbdi"), (n = "bjs/red/ui_fs_di");
                }
                r.default.inst.loadRes("Common", e, cc.SpriteFrame, function (e) {
                    (t.levelBg.spriteFrame = e), (t.CoinBg.spriteFrame = e);
                });
                r.default.inst.loadRes("Common", n, cc.SpriteFrame, function (e) {
                    (t.propBombBg.spriteFrame = e), (t.propCleanBg.spriteFrame = e), (t.fanButton.spriteFrame = e);
                });
            }),
            (e.prototype.fluhsLevel = function () {
                var t = s.default.inst.levelNum.val;
                (this.levelLabel.string = String("关卡").toLocalize() + " " + t),
                    (this.curLevelLabel.string = "" + s.default.inst.levelNum.val),
                    (this.nextLevelLabel.string = s.default.inst.levelNum.val + 1);
            }),
            (e.prototype.setBtnClick = function () {
                l.default.inst.tj("click_setting"),
                    c.default.show(u.default.path, c.PopupCacheMode.Frequent, { type: 1 });
            }),
            (e.prototype.scratchCardBtnClick = function () {
                l.default.inst.tj("click_game_scratchcard"), c.default.show(p.default.path, c.PopupCacheMode.Frequent);
            }),
            (e.prototype.luckySpinnerBtnClick = function () {
                l.default.inst.tj("click_game_spin"), c.default.show(d.default.path, c.PopupCacheMode.Frequent);
            }),
            __decorate([y(cc.Label)], e.prototype, "levelLabel", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "levelBg", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "CoinBg", void 0),
            __decorate([y(cc.Label)], e.prototype, "curLevelLabel", void 0),
            __decorate([y(cc.Label)], e.prototype, "nextLevelLabel", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "propBombBg", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "propCleanBg", void 0),
            __decorate([y(cc.Sprite)], e.prototype, "fanButton", void 0),
            __decorate([y(cc.Node)], e.prototype, "topBgNode", void 0),
            __decorate([y(cc.Node)], e.prototype, "downBgNode", void 0),
            __decorate([f], e)
        );
    })(cc.Component);
n.default = v;
