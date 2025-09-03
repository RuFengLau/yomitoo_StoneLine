const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("SceneManager"),
    c = t("PopupBase"),
    EventMgr = t("EventMgr"),
    CustomEventType = t("CustomEventType"),
    r = t("PopupManager"),
    
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
                        return "ab:MsgTipPanel/Prefabs/MsgTipPanel";
                    },
                    enumerable: !1,
                    configurable: !0
                }),
                (e.prototype.onLoad = function () {}),
                (e.prototype.start = function () {}),
                (e.prototype.OkClcik = function () {
                    PlatformAdManager.inst.showRewardedVideo(sss=>{
                        if(sss){
                            EventMgr.default.inst.emit(CustomEventType.default.AD_GET_BOMB_EVENT, this)
                            this.hide();
                        }
                    })
                }),
                (e.prototype.NoClick = function () {
                    this.hide();
                }),
                __decorate([p], e)
            );
        })(c.default));
n.default = u;
