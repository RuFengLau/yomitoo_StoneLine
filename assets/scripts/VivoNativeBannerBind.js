var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = cc._decorator,
    s = r.ccclass,
    c = r.property,
    l = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.adSprite = null),
                (e.adSprite2 = null),
                (e.desLabel = null),
                (e.titleLabel = null),
                (e.nativeBanner = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.flushData = function (t) {
                var e = this;
                (this.nativeBanner = t), gm.log(" VivoNativeBannerBind flushData");
                var n = this.nativeBanner.nativeAd,
                    i = n.nativeAdData;
                (this.desLabel.string = i.desc), (this.titleLabel.string = i.title);
                var o;
                (o = i.imgUrlList.length <= 0 ? i.icon : i.imgUrlList[0]),
                    (this.adSprite.node.active = !1),
                    (this.adSprite2.node.active = !1),
                    cc.loader.load({url: o, type: "jpg"}, function (t, n) {
                        if (t) gm.err(t);
                        else {
                            var a = new cc.SpriteFrame(n);
                            o == i.icon
                                ? ((e.adSprite2.node.active = !0), (e.adSprite2.spriteFrame = a))
                                : ((e.adSprite.node.active = !0), (e.adSprite.spriteFrame = a));
                        }
                    }),
                    n.reportAdShow();
            }),
            (e.prototype.adClick = function () {
                this.nativeBanner.nativeAd.reportAdClick();
            }),
            (e.prototype.closeBtnClick = function () {
                this.nativeBanner.close();
            }),
            __decorate([c(cc.Sprite)], e.prototype, "adSprite", void 0),
            __decorate([c(cc.Sprite)], e.prototype, "adSprite2", void 0),
            __decorate([c(cc.Label)], e.prototype, "desLabel", void 0),
            __decorate([c(cc.Label)], e.prototype, "titleLabel", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
