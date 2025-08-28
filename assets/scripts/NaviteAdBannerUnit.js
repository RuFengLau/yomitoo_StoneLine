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
            return (
                (e.nativeBg = null),
                (e.adImg = null),
                (e.textTitle = null),
                (e.textDes = null),
                (e.openBtn = null),
                (e.closeBtn = null),
                (e.remoteUrl = null),
                (e.time = 0),
                (e.cNativeAd = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (this.nativeBg.active = !1), null != this.openBtn && (this.openBtn.active = !1), (this.time = 0);
            }),
            (e.prototype.update = function (t) {
                (this.time += t),
                    this.time >= 10 &&
                        (this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null)),
                        this.onEnable(),
                        (this.time = 0));
            }),
            (e.prototype.onEnable = function () {
                var t = this;
                r.default.inst.hideBanner(),
                    r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1] != this.node &&
                        r.default.inst.NativeNodeList.push(this.node);
                for (var e = 0; e < r.default.inst.NativeNodeList.length; e++)
                    r.default.inst.NativeNodeList[e] != this.node && (r.default.inst.NativeNodeList[e].active = !1);
                var n = r.default.inst.getNativeAd();
                if (n && n.nativeAdData) {
                    this.cNativeAd = n;
                    var i = n.nativeAdData,
                        o = i.icon;
                    null != i.icon && "" != i.icon ? (o = i.icon) : i.imgUrlList.length > 0 && (o = i.imgUrlList[0]),
                        n.reportAdShow(),
                        cc.assetManager.loadRemote(o, function (e, n) {
                            e
                                ? console.log(e)
                                : null != t.nativeBg &&
                                  ((t.nativeBg.active = !0),
                                  null != t.openBtn && (t.openBtn.active = !0),
                                  (t.adImg.spriteFrame = new cc.SpriteFrame(n)),
                                  (t.textTitle.string = i.title),
                                  (t.textDes.string = i.desc));
                        });
                }
            }),
            (e.prototype.onDisable = function () {
                this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null)),
                    console.log(r.default.inst.NativeNodeList),
                    r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1] == this.node &&
                        r.default.inst.NativeNodeList.splice(r.default.inst.NativeNodeList.length - 1, 1),
                    r.default.inst.NativeNodeList.length <= 0
                        ? r.default.inst.showBanner()
                        : (r.default.inst.NativeNodeList[r.default.inst.NativeNodeList.length - 1].active = !0);
            }),
            (e.prototype.onChick = function () {
                this.cNativeAd && this.cNativeAd.reportAdClick();
            }),
            (e.prototype.onClose = function () {
                (this.nativeBg.active = !1),
                    null != this.openBtn && (this.openBtn.active = !1),
                    this.cNativeAd && (this.cNativeAd.close(), (this.cNativeAd = null));
            }),
            __decorate([l(cc.Node)], e.prototype, "nativeBg", void 0),
            __decorate([l(cc.Sprite)], e.prototype, "adImg", void 0),
            __decorate([l(cc.Label)], e.prototype, "textTitle", void 0),
            __decorate([l(cc.Label)], e.prototype, "textDes", void 0),
            __decorate([l(cc.Node)], e.prototype, "openBtn", void 0),
            __decorate([l(cc.Node)], e.prototype, "closeBtn", void 0),
            __decorate([c], e)
        );
    })(cc.Component);
n.default = p;
