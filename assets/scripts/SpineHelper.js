var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = cc._decorator,
    l = c.ccclass,
    p =
        (c.property,
        (function (t) {
            function e() {
                var e = (null !== t && t.apply(this, arguments)) || this;
                return (e.cAnimation = ""), (e.skeleton = null), e;
            }
            return (
                __extends(e, t),
                (e.prototype.onLoad = function () {
                    this.skeleton = this.node.getComponent(sp.Skeleton);
                }),
                (e.prototype.onDestroy = function () {
                    this.skeleton = null;
                }),
                (e.prototype.resetSkeleton = function () {
                    this.node.removeComponent(sp.Skeleton), (this.skeleton = this.node.addComponent(sp.Skeleton));
                }),
                (e.prototype.setSpineData = function (t, e) {
                    return (
                        void 0 === e && (e = "default"),
                        this.resetSkeleton(),
                        (this.skeleton.skeletonData = t),
                        this.skeleton.setSkin(e),
                        (this.skeleton.premultipliedAlpha = !1),
                        this.skeleton
                    );
                }),
                (e.prototype.setTimeScale = function (t) {
                    void 0 === t && (t = 1), (this.skeleton.timeScale = t);
                }),
                (e.prototype.getSkeleton = function () {
                    return this.skeleton;
                }),
                (e.prototype.pauseAn = function () {
                    this.skeleton.paused = !0;
                }),
                (e.prototype.playAnByLoopTimes = function (t, e, n) {
                    var i = this;
                    void 0 === e && (e = -1),
                        this.skeleton &&
                            (0 != e
                                ? ((this.cAnimation = t),
                                  (this.skeleton.loop = !1),
                                  (this.skeleton.animation = t),
                                  this.skeleton.setCompleteListener(function () {
                                      i.playAnByLoopTimes(t, e - 1, n);
                                  }))
                                : n());
                }),
                (e.prototype.playAn = function (t, e, n) {
                    var i = this;
                    if ((void 0 === e && (e = -1), void 0 === n && (n = null), this.skeleton))
                        return (
                            this.skeleton.setCompleteListener(function () {}),
                            new Promise(function (o) {
                                i.playAnByLoopTimes(t, e, function () {
                                    n && n(), o(null);
                                });
                            })
                        );
                }),
                (e.prototype.playAns = function (t, e, n) {
                    return (
                        void 0 === e && (e = null),
                        void 0 === n && (n = null),
                        __awaiter(this, void 0, void 0, function () {
                            var i, o, a, r, c;
                            return __generator(this, function (l) {
                                switch (l.label) {
                                    case 0:
                                        if (!this.skeleton) return [2];
                                        (i = function (t) {
                                            return __generator(this, function (n) {
                                                switch (n.label) {
                                                    case 0:
                                                        return [
                                                            4,
                                                            o.playAn(t.an, t.loopTimes, function () {
                                                                e && e(t.an);
                                                            })
                                                        ];
                                                    case 1:
                                                        return n.sent(), [2];
                                                }
                                            });
                                        }),
                                            (o = this),
                                            (a = 0),
                                            (r = t),
                                            (l.label = 1);
                                    case 1:
                                        return a < r.length ? ((c = r[a]), [5, i(c)]) : [3, 4];
                                    case 2:
                                        l.sent(), (l.label = 3);
                                    case 3:
                                        return a++, [3, 1];
                                    case 4:
                                        return n && n(), [2];
                                }
                            });
                        })
                    );
                }),
                (e.prototype.setSpineEventListener = function (t) {
                    this.skeleton.setEventListener(function (e, n) {
                        t && t(n);
                    });
                }),
                (e.prototype.setMix = function (t, e, n) {
                    void 0 === n && (n = 0.08), this.skeleton.setMix(t, e, n), this.skeleton.setMix(e, t, n);
                }),
                (e.prototype.hideSlotTexture = function (t) {
                    cc.log("hideSlotTexture ~~~~~~~~~");
                    for (var e = 0, n = t; e < n.length; e++) {
                        var i = n[e],
                            o = this.skeleton.findSlot(i),
                            a = o.getAttachment();
                        o && a && (o.color.a = 0);
                    }
                }),
                (e.prototype.showSlotTexture = function () {
                    console.log("showSlotTexture ~~~~~~~~~");
                }),
                (e.prototype.setSlotTexture = function (t, e, n) {
                    if (
                        (console.log("setSlotTexture ~~~~~~~~~"),
                        this.copySkeletonData(),
                        !cc.sys.isNative || window.qg || window.wx)
                    )
                        console.log("web 换肤."), this.updatePartialSkin(this.skeleton, t, e, n);
                    else {
                        console.log("native 换肤.");
                        var i = new middleware.Texture2D();
                        i.setPixelsHigh(t.height),
                            i.setPixelsWide(t.width),
                            i.setNativeTexture(t.getImpl()),
                            this.skeleton.updateRegion(e, i, n.x, n.y);
                    }
                }),
                (e.prototype.copySkeletonData = function () {
                    console.log("copySkeletonData ~~~~~~~~~");
                    var t = new Date(),
                        e = this.skeleton.skeletonData,
                        n = new sp.SkeletonData();
                    cc.js.mixin(n, e),
                        (n._uuid = e._uuid + "_" + t.getTime() + cc.math.randomRangeInt(0, 1e3) + "_copy"),
                        console.log("copySkeletonData : " + n._uuid);
                    var i = n.name,
                        o = n.name + "_copy";
                    (n.name = o),
                        (n.atlasText = n.atlasText.replace(i, o)),
                        (n.textureNames[0] = o + ".png"),
                        n.init && n.init(),
                        (this.skeleton.skeletonData = n),
                        this.skeleton.setSkin("pf01");
                }),
                (e.prototype.updatePartialSkin = function (t, e, n, i) {
                    console.log("updatePartialSkin ~~~~~~~~~");
                    var o = t.findSlot(n),
                        a = o.getAttachment();
                    if (o && a) {
                        var r = a.region,
                            s = new sp.SkeletonTexture();
                        s.setRealTexture(e),
                            (r.u = 0),
                            (r.v = 0),
                            (r.u2 = 1),
                            (r.v2 = 1),
                            (r.width = e.width),
                            (r.height = e.height),
                            (r.originalWidth = e.width),
                            (r.originalHeight = e.height),
                            (r.rotate = !1),
                            (r.texture = s),
                            (r.page = null),
                            (a.width = r.width),
                            (a.height = r.height),
                            a.setRegion(r),
                            (a.x = i.x),
                            (a.y = i.y),
                            a.updateOffset(),
                            o.setAttachment(a);
                    } else cc.error("error...");
                }),
                __decorate([l], e)
            );
        })(cc.Component));
n.default = p;
