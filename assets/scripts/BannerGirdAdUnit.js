var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SDKManager"),
    s = cc._decorator,
    c = s.ccclass,
    l =
        (s.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                (e.prototype.onEnable = function () {
                    console.log("showBannerGirdAd"),
                        r.default.inst.showBannerGirdAd(),
                        r.default.inst.hideBanner(),
                        r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1] != this.node &&
                            r.default.inst.NativeNodeList.push(this.node);
                    for (var t = 0; t < r.default.inst.NativeNodeList.length; t++)
                        r.default.inst.NativeNodeList[t] != this.node && (r.default.inst.NativeNodeList[t].active = !1);
                }),
                (e.prototype.onDisable = function () {
                    r.default.inst.hideBannerGirdAd(),
                        console.log(r.default.inst.NativeNodeList),
                        r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1] == this.node &&
                            r.default.inst.NativeNodeList.splice(r.default.inst.NativeNodeList.length - 1, 1),
                        r.default.inst.NativeNodeList.length <= 0
                            ? r.default.inst.showBanner()
                            : (r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1].active = !0);
                }),
                __decorate([c], e)
            );
        })(cc.Component));
n.default = l;
