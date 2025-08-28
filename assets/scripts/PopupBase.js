var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c,
    l = cc._decorator,
    p = l.ccclass,
    u = l.property;
(function (t) {
    (t[(t.none = 0)] = "none"),
        (t[(t.scale = 1)] = "scale"),
        (t[(t.rightToLeft = 2)] = "rightToLeft"),
        (t[(t.leftToRight = 3)] = "leftToRight"),
        (t[(t.topToBottom = 4)] = "topToBottom"),
        (t[(t.bottomToTop = 5)] = "bottomToTop");
})(c || (c = {}));
var d = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
            (e.parentPath = ""),
            (e.uiPriority = 100),
            (e.popupShowAnType = c.scale),
            (e.popupHideAnType = c.scale),
            (e.background = null),
            (e.main = null),
            (e.blocker = null),
            (e.animTime = 0.3),
            (e.options = null),
            (e.finishCallback = null),
            (e.popupShowNum = 0),
            (e.isRecycle = !1),
            (e.backgroundTween = null),
            (e.mainTween = null),
            e
        );
    }
    return (
        __extends(e, t),
        (e.prototype.onShowBegan = function () {}),
        (e.prototype.onShowEnd = function () {}),
        (e.prototype.onHideBegan = function () {}),
        (e.prototype.onHideEnd = function () {}),
        (e.prototype.show = function (t) {
            if ("" != this.parentPath) {
                var e = cc.find(this.parentPath);
                e && this.node.setParent(e);
            }
            (this.node.zIndex = this.uiPriority),
                (this.options = t),
                this.init(this.options),
                this.updateDisplay(this.options),
                this.playShowAn();
        }),
        (e.prototype.start = function () {}),
        (e.prototype.playShowAn = function () {
            return __awaiter(this, void 0, void 0, function () {
                var t,
                    e = this;
                return __generator(this, function () {
                    if (((this.node.active = !0), !this.main)) return [2];
                    switch (
                        ((this.main.active = !0),
                        this.background && (this.background.active = !0),
                        (t = function () {
                            e.onShowEnd();
                        }),
                        this.onShowBegan(),
                        this.popupShowAnType)
                    ) {
                        case c.none:
                            t();
                            break;
                        case c.scale:
                            this.background && (this.background.opacity = 0),
                                (this.main.scale = 0),
                                this.background &&
                                    (this.backgroundTween = cc
                                        .tween(this.background)
                                        .to(0.8 * this.animTime, {opacity: 200})
                                        .start()),
                                (this.mainTween = cc
                                    .tween(this.main)
                                    .to(this.animTime, {scale: 1}, {easing: "backOut"})
                                    .call(function () {
                                        t();
                                    })
                                    .start());
                            break;
                        case c.rightToLeft:
                            (this.main.y = 0),
                                (this.main.x = cc.winSize.width),
                                (this.mainTween = cc
                                    .tween(this.main)
                                    .to(this.animTime, {x: 0}, {easing: "backOut"})
                                    .call(function () {
                                        t();
                                    })
                                    .start());
                            break;
                        case c.leftToRight:
                            (this.main.y = 0),
                                (this.main.x = -cc.winSize.width),
                                (this.mainTween = cc
                                    .tween(this.main)
                                    .to(this.animTime, {x: 0}, {easing: "backOut"})
                                    .call(function () {
                                        t();
                                    })
                                    .start());
                            break;
                        case c.bottomToTop:
                            (this.main.x = 0),
                                (this.main.y = -cc.winSize.height),
                                (this.mainTween = cc
                                    .tween(this.main)
                                    .to(this.animTime, {y: 0}, {easing: "backOut"})
                                    .call(function () {
                                        t();
                                    })
                                    .start());
                            break;
                        case c.topToBottom:
                            (this.main.x = 0),
                                (this.main.y = cc.winSize.height),
                                (this.mainTween = cc
                                    .tween(this.main)
                                    .to(this.animTime, {y: 0}, {easing: "backOut"})
                                    .call(function () {
                                        t();
                                    })
                                    .start());
                    }
                    return [2];
                });
            });
        }),
        (e.prototype.hide = function () {
            this.blocker ||
                ((this.blocker = new cc.Node("blocker")),
                this.blocker.addComponent(cc.BlockInputEvents),
                this.blocker.setParent(this.node),
                this.blocker.setContentSize(this.node.getContentSize())),
                (this.blocker.active = !0),
                this.playHideAn();
        }),
        (e.prototype.playHideAn = function () {
            var t = this,
                e = function () {
                    (t.blocker.active = !1),
                        (t.main.active = !1),
                        (t.node.active = !1),
                        t.onHideEnd(),
                        t.finishCallback && t.finishCallback();
                };
            switch ((this.onHideBegan(), this.popupHideAnType)) {
                case c.none:
                    e();
                    break;
                case c.scale:
                    (this.backgroundTween = cc
                        .tween(this.background)
                        .delay(0.2 * this.animTime)
                        .to(0.8 * this.animTime, {opacity: 0})
                        .call(function () {
                            t.background.active = !1;
                        })
                        .start()),
                        (this.mainTween = cc
                            .tween(this.main)
                            .to(this.animTime, {scale: 0}, {easing: "backIn"})
                            .call(function () {
                                e();
                            })
                            .start());
                    break;
                case c.rightToLeft:
                    this.mainTween = cc
                        .tween(this.main)
                        .to(this.animTime, {x: -cc.winSize.width}, {easing: "backIn"})
                        .call(function () {
                            e();
                        })
                        .start();
                    break;
                case c.leftToRight:
                    this.mainTween = cc
                        .tween(this.main)
                        .to(this.animTime, {x: cc.winSize.width}, {easing: "backIn"})
                        .call(function () {
                            e();
                        })
                        .start();
                    break;
                case c.bottomToTop:
                    this.mainTween = cc
                        .tween(this.main)
                        .to(this.animTime, {y: cc.winSize.height}, {easing: "backIn"})
                        .call(function () {
                            e();
                        })
                        .start();
                    break;
                case c.topToBottom:
                    this.mainTween = cc
                        .tween(this.main)
                        .to(this.animTime, {y: -cc.winSize.height}, {easing: "backIn"})
                        .call(function () {
                            e();
                        })
                        .start();
            }
        }),
        (e.prototype.onDestroy = function () {
            this.isRecycle ||
                (this.finishCallback && this.finishCallback(),
                this.backgroundTween && this.backgroundTween.stop(),
                this.mainTween && this.mainTween.stop());
        }),
        (e.prototype.init = function () {}),
        (e.prototype.updateDisplay = function () {}),
        (e.prototype.setFinishCallback = function (t) {
            this.finishCallback = t;
        }),
        __decorate([u], e.prototype, "parentPath", void 0),
        __decorate([u], e.prototype, "uiPriority", void 0),
        __decorate([u({type: cc.Enum(c), tooltip: "显示时动画类型"})], e.prototype, "popupShowAnType", void 0),
        __decorate([u({type: cc.Enum(c), tooltip: "隐藏时动画类型"})], e.prototype, "popupHideAnType", void 0),
        __decorate([u({type: cc.Node})], e.prototype, "background", void 0),
        __decorate([u({type: cc.Node})], e.prototype, "main", void 0),
        __decorate([u], e.prototype, "animTime", void 0),
        __decorate([p], e)
    );
})(cc.Component);
n.default = d;
