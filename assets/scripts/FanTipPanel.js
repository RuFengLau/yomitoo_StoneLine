const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("ToolManager"),
    l = t("SDKManager"),
    p = t("PopupBase"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property,
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.NaviteAdBtn = null), (e.OkBtn = null), (e.cOptions = null), (e.isSawVideo = false),e;
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:FanTipPanel/Prefabs/FanTipPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {}),
            (e.prototype.onDisable = function () {
                if(this.isSawVideo == false){
                    PlatformAdManager.inst.showNativeOrInsertAd();
                }
                this.isSawVideo = false;
            }),
            (e.prototype.updateDisplay = function (t) {
                (this.cOptions = t),
                    c.default.inst.randomRangeInt(0, 100) < 50 ? (this.OkBtn.zIndex = 1) : (this.OkBtn.zIndex = 2);
            }),
            (e.prototype.videoBtnClick = function () {
                var t = this;
                this.isSawVideo = true;
                l.default.inst.showRewardVideo(function (e) {
                    return __awaiter(t, void 0, void 0, function () {
                        return __generator(this, function () {
                            return (
                                e &&
                                    (this.hide(),
                                    l.default.inst.tj("video_props1"),
                                    this.cOptions && this.cOptions.callFunc && this.cOptions.callFunc()),
                                [2]
                            );
                        });
                    });
                });
            }),
            __decorate([h(cc.Node)], e.prototype, "NaviteAdBtn", void 0),
            __decorate([h(cc.Node)], e.prototype, "OkBtn", void 0),
            __decorate([d], e)
        );
    })(p.default);
n.default = f;
