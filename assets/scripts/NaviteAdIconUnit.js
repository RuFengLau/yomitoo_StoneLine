var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("SDKManager"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.nativeBg = null), (e.Icon = null), (e.remoteUrl = null), (e.time = 0), (e.cNativeAd = null), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (this.nativeBg.active = !1),
                    (this.time = 0),
                    cc
                        .tween(this.node)
                        .repeatForever(
                            cc
                                .tween()
                                .delay(1)
                                .to(0.1, {angle: 10})
                                .to(0.1, {angle: 0})
                                .to(0.1, {angle: -10})
                                .to(0.1, {angle: 0})
                        )
                        .start();
            }),
            (e.prototype.update = function (t) {
                (this.time += t),
                    this.time >= 10 &&
                        (this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null)),
                        this.onEnable(),
                        (this.time = 0));
            }),
            (e.prototype.onEnable = function () {
                var t = this,
                    e = r.default.inst.getNativeAd();
                if (e && e.nativeAdData) {
                    this.cNativeAd = e;
                    var n = e.nativeAdData,
                        i = n.icon;
                    null != n.icon && "" != n.icon ? (i = n.icon) : n.imgUrlList.length > 0 && (i = n.imgUrlList[0]),
                        e.reportAdShow(),
                        cc.assetManager.loadRemote(i, function (e, n) {
                            e
                                ? console.log(e)
                                : null != t.nativeBg &&
                                  ((t.nativeBg.active = !0),
                                  (t.Icon.spriteFrame = new cc.SpriteFrame(n)),
                                  (t.Icon.node.width = 100),
                                  (t.Icon.node.height = 100));
                        });
                }
            }),
            (e.prototype.onDisable = function () {
                this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null));
            }),
            (e.prototype.onChick = function () {
                this.cNativeAd && this.cNativeAd.reportAdClick();
            }),
            (e.prototype.onClose = function () {
                (this.nativeBg.active = !1), this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null));
            }),
            __decorate([l(cc.Node)], e.prototype, "nativeBg", void 0),
            __decorate([l(cc.Sprite)], e.prototype, "Icon", void 0),
            __decorate([c], e)
        );
    })(cc.Component);
n.default = p;
