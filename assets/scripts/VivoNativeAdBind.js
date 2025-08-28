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
                (e.nativeAd = null),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.flushData = function (t) {
                var e = this;
                (this.nativeAd = t), gm.log(" VivoNativeAdBind flushData");
                var n = t.nativeAdData;
                (this.desLabel.string = n.desc), (this.titleLabel.string = n.title);
                var i;
                (i = n.imgUrlList.length <= 0 ? n.icon : n.imgUrlList[0]),
                    (this.adSprite.node.active = !1),
                    (this.adSprite2.node.active = !1),
                    cc.loader.load({url: i, type: "jpg"}, function (t, o) {
                        if (t) gm.err(t);
                        else {
                            var a = new cc.SpriteFrame(o);
                            i == n.icon
                                ? ((e.adSprite2.node.active = !0), (e.adSprite2.spriteFrame = a))
                                : ((e.adSprite.node.active = !0), (e.adSprite.spriteFrame = a));
                        }
                    }),
                    t.reportAdShow();
            }),
            (e.prototype.adClick = function () {
                this.nativeAd.reportAdClick();
            }),
            (e.prototype.closeBtnClick = function () {
                this.nativeAd.close();
            }),
            __decorate([c(cc.Sprite)], e.prototype, "adSprite", void 0),
            __decorate([c(cc.Sprite)], e.prototype, "adSprite2", void 0),
            __decorate([c(cc.Label)], e.prototype, "desLabel", void 0),
            __decorate([c(cc.Label)], e.prototype, "titleLabel", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
