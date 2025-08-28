var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("PopupManager"),
    c = t("PopupToastPanel"),
    l = t("SDKManager"),
    p = cc._decorator,
    u = p.ccclass,
    d =
        (p.property,
        (function (t) {
            function e() {
                return (null !== t && t.apply(this, arguments)) || this;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    r.default.inst.isReviewMode.val && (this.node.active = !1);
                }),
                (e.prototype.onChick = function () {
                    var t = this;
                    l.default.inst.showGirdAd(
                        function () {
                            console.log("九宫格广告成功", l.default.inst.NativeNodeList),
                                l.default.inst.NativeNodeList[l.default.inst.NativeNodeList.length - 1] != t.node &&
                                    l.default.inst.NativeNodeList.push(t.node),
                                l.default.inst.hideBanner();
                            for (var e = 0; e < l.default.inst.NativeNodeList.length; e++)
                                l.default.inst.NativeNodeList[e] != t.node &&
                                    (l.default.inst.NativeNodeList[e].active = !1);
                            console.log("九宫格广告成功111");
                        },
                        function () {
                            console.log("九宫格广告失败"),
                                s.default.show(c.default.path, s.PopupCacheMode.Normal, {tipStr: "Retry Later"});
                        },
                        function () {
                            console.log("九宫格广告关闭", l.default.inst.NativeNodeList),
                                l.default.inst.NativeNodeList[l.default.inst.NativeNodeList.length - 1] == t.node &&
                                    l.default.inst.NativeNodeList.splice(l.default.inst.NativeNodeList.length - 1, 1),
                                l.default.inst.NativeNodeList.length <= 0
                                    ? l.default.inst.showBanner()
                                    : (l.default.inst.NativeNodeList[l.default.inst.NativeNodeList.length - 1].active =
                                          !0),
                                console.log("九宫格广告关闭111");
                        }
                    );
                }),
                __decorate([u], e)
            );
        })(cc.Component));
n.default = d;
