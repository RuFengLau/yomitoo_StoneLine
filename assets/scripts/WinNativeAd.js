var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("NativeAdBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = t("WinNativeAdBind"),
    l = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.nativeAdNode = null),
                (e.nativeAdBgNode = null),
                (e.nativeAdData = null),
                (e.nativeAdData = {
                    adId: "34800a83-e3a5-42de-8a9e-fa3ae1d80c7d",
                    clickBtnTxt: "点击安装",
                    creativeType: 6,
                    desc: "教你一键清理手机系统垃圾",
                    iconUrlList: ["https://cdopic0.heytapimage.com/img/202003/13/59c33826b9760a5287de576a758ab8bd.png"],
                    icon: "https://cdopic0.heytapimage.com/img/202003/13/59c33826b9760a5287de576a758ab8bd.png",
                    interactionType: 2,
                    logoUrl: "https://adsfs.heytapimage.com/union/adlogo/o_1512387525231.png",
                    title: "腾讯手机管家",
                    imgUrlList: [
                        "https://adsfs.heytapimage.com/res/v2/default/mat_pic/201910/31/1000063038_1572519257268.jpg"
                    ]
                }),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.open = function (t) {
                (this.nativeAdBgNode = t),
                    this.state != r.AdState.open &&
                        this.loadState != r.AdLoadState.loading &&
                        (this.loadState != r.AdLoadState.loadSucess
                            ? ((this.loadState = r.AdLoadState.loading), this.create(this.adUnitID))
                            : this.show());
            }),
            (e.prototype.isAdReady = function () {
                return !!this.nativeAdData;
            }),
            (e.prototype.close = function () {
                (this.state = r.AdState.close), this.nativeAdNode && (this.nativeAdNode.active = !1);
            }),
            (e.prototype.load = function () {}),
            (e.prototype.show = function () {
                if (this.state != r.AdState.open) {
                    (this.nativeAdNode.active = !0), (this.state = r.AdState.open);
                    var t = this.nativeAdBgNode.parent.convertToWorldSpaceAR(
                        cc.v2(this.nativeAdBgNode.x, this.nativeAdBgNode.y)
                    );
                    gm.info(
                        "nativeAdBgNode.width : " +
                            this.nativeAdBgNode.width +
                            "  nativeAdBgNode.height : " +
                            this.nativeAdBgNode.height
                    ),
                        gm.info("screenP.x : " + t.x + "  screenP.y : " + t.y),
                        (this.nativeAdNode.x = t.x),
                        (this.nativeAdNode.y = t.y),
                        (this.nativeAdNode.width = this.nativeAdBgNode.width),
                        (this.nativeAdNode.height = this.nativeAdBgNode.height),
                        (this.nativeAdNode.scale = this.nativeAdBgNode.scale),
                        this.nativeAdNode.getComponent(c.default).flushData(this);
                }
            }),
            (e.prototype.create = function () {
                var t = this;
                s.default.inst.loadRes("GmRes", "Win/NativeAd/nativeAd", cc.Prefab, function (e) {
                    var n = cc.instantiate(e);
                    (t.nativeAdNode = n),
                        (t.loadState = r.AdLoadState.loadSucess),
                        (n.active = !1),
                        cc.game.addPersistRootNode(n),
                        t.show();
                });
            }),
            e
        );
    })(a.default);
n.default = l;
