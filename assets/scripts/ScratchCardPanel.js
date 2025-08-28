var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("BundleManager"),
    l = t("DataManager"),
    p = t("ToolManager"),
    u = t("PopupBase"),
    d = cc._decorator,
    h = d.ccclass,
    f = d.property,
    y = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.cardItem = null),
                (e.cardNode = null),
                (e.targetSprite = null),
                (e.scrapteRadiusX = 40),
                (e.scrapteRadiusY = 40),
                (e.scrapteArea = 0.2),
                (e.curIndex = 0.2),
                (e.action = !1),
                (e.canTouch = !1),
                (e.cardList = []),
                (e.maskNode = null),
                (e.graphics = null),
                (e.achieveNum = 0),
                (e.pixelNum = 0),
                (e.scrapeNode = null),
                (e.pixelPiont = []),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:ScratchCardPanel/Prefabs/ScratchCardPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                (this.scrapteRadiusX = 40),
                    (this.scrapteRadiusY = 40),
                    (this.scrapteArea = 0.2),
                    (this.curIndex = 0),
                    (this.action = !1),
                    (this.cardItem.active = !1),
                    (this.cardList = []);
                for (var t = 0; t < 2; t++) this.addCard(1 - 0.1 * t, 100 * t);
                this.initScratchCard();
            }),
            (e.prototype.onShowBegan = function () {}),
            (e.prototype.updateDisplay = function () {}),
            (e.prototype.addCard = function (t, e) {
                void 0 === t && (t = 1);
                var n = cc.instantiate(this.cardItem);
                (n.active = !0),
                    (n.scale = t),
                    (n.parent = this.cardNode),
                    (n.x = 0),
                    (n.y = e),
                    (n.zIndex = 999 - this.cardList.length);
                var i = "Images/Scratchcard_" + p.default.inst.randomRangeInt(1, 6);
                console.log("path : " + i),
                    c.default.inst.loadRes("ScratchCardPanel", i, cc.SpriteFrame, function (t) {
                        n.getChildByName("MaskNode").getChildByName("Mask").getComponent(cc.Sprite).spriteFrame = t;
                    }),
                    this.cardList.push(n);
            }),
            (e.prototype.changeCard = function () {
                if (!this.action) {
                    var t = this.cardList[this.curIndex],
                        e = this.cardList[this.curIndex + 1];
                    this.addCard(0.9, 100),
                        (this.action = !0),
                        cc
                            .tween(t)
                            .to(0.2, {position: cc.v2(-600, 100), angle: 60})
                            .call(
                                function () {
                                    t.zIndex = 0;
                                }.bind(this)
                            )
                            .to(0.2, {position: cc.v2(0, 100), angle: 0, scale: 0.9})
                            .removeSelf()
                            .start(),
                        cc
                            .tween(e)
                            .delay(0.2)
                            .to(0.3, {position: cc.v2(0, 0), scale: 1})
                            .call(
                                function () {
                                    (this.curIndex = this.curIndex + 1), (this.action = !1), this.initScratchCard();
                                }.bind(this)
                            )
                            .start();
                }
            }),
            (e.prototype.initScratchCard = function () {
                var t = this;
                this.canTouch = !0;
                var e = this.cardList[this.curIndex];
                (this.maskNode = e.getChildByName("MaskNode")),
                    (this.maskNode.opacity = 255),
                    (this.graphics = this.maskNode.getComponent(cc.Mask)._graphics),
                    this.graphics.clear(),
                    (this.graphics.lineWidth = 100),
                    (this.graphics.lineCap = cc.Graphics.LineCap.ROUND),
                    (this.graphics.fillColor = cc.color(0, 0, 0, 255)),
                    (this.graphics.strokeColor = cc.color(0, 0, 0, 255)),
                    e.on(cc.Node.EventType.TOUCH_START, this.onTouchBegin, this),
                    e.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this),
                    e.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this),
                    e.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchCancel, this);
                var n,
                    i = 0,
                    o = 0,
                    a = new Array(),
                    r = [1, 2, 3, 4, 5];
                (i = p.default.inst.randomRangeInt(0, r.length)), (n = r[i]), r.splice(i, 1);
                for (var s = 0; s < 3; s++) a.push(n);
                for (s = 0; s < 2; s++) {
                    (o = r[(i = p.default.inst.randomRangeInt(0, r.length))]), r.splice(i, 1);
                    for (var l = 0; l < 2; l++) a.push(o);
                }
                for (s = 0; s < 2; s++) a.push(r[s]);
                (a = this.sort(a)),
                    console.log(a),
                    c.default.inst.loadRes("ScratchCardPanel", "Images/" + n, cc.SpriteFrame, function (e) {
                        t.targetSprite.spriteFrame = e;
                    });
                var u = e.getChildByName("GridLayout"),
                    d = function (t) {
                        var e = u.getChildByName("Item_" + t).getChildByName("Icon");
                        c.default.inst.loadRes("ScratchCardPanel", "Images/" + a[t], cc.SpriteFrame, function (t) {
                            e.getComponent(cc.Sprite).spriteFrame = t;
                        }),
                            e.stopAllActions(),
                            a[t] == n &&
                                cc
                                    .tween(e)
                                    .repeatForever(cc.tween().to(0.5, {scale: 1.1}).to(0.5, {scale: 1}))
                                    .start();
                    };
                for (s = 0; s < 9; s++) d(s);
                this.getinitNum();
            }),
            (e.prototype.onTouchBegin = function () {}),
            (e.prototype.onTouchMoved = function (t) {
                if (this.canTouch) {
                    var e = this.getPos(t),
                        n = this.getLastPos(t);
                    this.graphics.moveTo(n.x, n.y),
                        this.graphics.lineTo(e.x, e.y),
                        this.graphics.stroke(),
                        this.graphics.fill(),
                        this.checkPixelPiont(e);
                }
            }),
            (e.prototype.onTouchEnd = function () {
                this.canTouch && this.checkScrape();
            }),
            (e.prototype.onTouchCancel = function () {
                this.checkScrape();
            }),
            (e.prototype.sort = function (t) {
                for (var e = [], n = 0, i = t.length; n < i; n++) {
                    var o = Math.floor(Math.random() * (i - n));
                    (e[n] = t[o]), t.splice(o, 1);
                }
                return e;
            }),
            (e.prototype.checkScrape = function () {
                cc.log("目标数是：" + this.achieveNum),
                    cc.log("现在已经刮开" + this.pixelNum),
                    this.achieveNum < this.pixelNum && (cc.log("已经刮完图层"), this.achieveScrape());
            }),
            (e.prototype.getPos = function (t) {
                var e = t.touch.getLocation();
                return this.node.convertToNodeSpaceAR(e);
            }),
            (e.prototype.getLastPos = function (t) {
                var e = t.touch.getPreviousLocation();
                return this.node.convertToNodeSpaceAR(e);
            }),
            (e.prototype.getinitNum = function () {
                (this.pixelNum = 0), (this.achieveNum = this.scrapteArea * this.initPixel());
            }),
            (e.prototype.initPixel = function () {
                this.scrapeNode = this.maskNode.children[0];
                var t = this.scrapeNode.width,
                    e = this.scrapeNode.height;
                (this.node.width = t), (this.node.height = e);
                for (
                    var n = t / 2,
                        i = e / 2,
                        o = -n,
                        a = -i,
                        r = a,
                        s = [],
                        c = 2 * this.scrapteRadiusX,
                        l = 2 * this.scrapteRadiusY;
                    o <= n;
                    o += c
                )
                    for (a = r; a <= i; a += l) {
                        var p = [o, a];
                        (p.isTouch = !0), s.push(p);
                    }
                return (this.pixelPiont = s), s.length;
            }),
            (e.prototype.checkPixelPiont = function (t) {
                var e,
                    n,
                    i = this.pixelPiont;
                for (var o in i)
                    if (
                        ((e = Math.abs(t.x - i[o][0])),
                        (n = Math.abs(t.y - i[o][1])),
                        e <= this.scrapteRadiusX && n <= this.scrapteRadiusY && i[o].isTouch)
                    )
                        return (i[o].isTouch = !1), void this.pixelNum++;
            }),
            (e.prototype.achieveScrape = function () {
                (this.canTouch = !1),
                    cc
                        .tween(this.maskNode)
                        .to(0.2, {opacity: 0})
                        .delay(0.1)
                        .call(
                            function () {
                                this.endScrape();
                            }.bind(this)
                        )
                        .start();
            }),
            (e.prototype.endScrape = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function () {
                        return l.default.inst.createPkaMoney(), this.changeCard(), [2];
                    });
                });
            }),
            __decorate([f(cc.Node)], e.prototype, "cardItem", void 0),
            __decorate([f(cc.Node)], e.prototype, "cardNode", void 0),
            __decorate([f(cc.Sprite)], e.prototype, "targetSprite", void 0),
            __decorate([h], e)
        );
    })(u.default);
n.default = y;
