var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("LevelRewardConfig"),
    l = t("BundleManager"),
    p = t("PopupManager"),
    u = t("SDKManager"),
    d = t("ToolManager"),
    h = t("RewardPanel"),
    f = t("PopupBase"),
    y = t("AdMgr"),
    v = cc._decorator,
    g = v.ccclass,
    m = v.property,
    b = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.itemNode = null),
                (e.closeBtnNode = null),
                (e.itemOffset = 10),
                (e.maxSpeed = 20),
                (e.rub = 4),
                (e.scaleMin = 0.7),
                (e.scaleMax = 1),
                (e.item = []),
                (e.NaviteAdBtn = null),
                (e.OkBtn = null),
                (e.moveSpeed = 0),
                (e.wheelState = 0),
                (e._maxSize = null),
                (e.targetID = 0),
                e
            );
        }
        return (
            __extends(e, t),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:LevelRewardsPanel/Prefabs/LevelRewardsPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                y.default.showInsert(), y.default.showBanner();
            }),
            (e.prototype.onDisable = function () {
                y.default.hideBanner();
            }),
            (e.prototype.updateDisplay = function () {
                this.initItem(),
                    this.initItemPos(),
                    this.updateScale(),
                    (this.moveSpeed = 2),
                    (this.wheelState = 0),
                    (this.closeBtnNode.active = !0),
                    d.default.inst.randomRangeInt(0, 100) < 50 ? (this.OkBtn.zIndex = 1) : (this.OkBtn.zIndex = 2);
            }),
            (e.prototype.initItem = function () {
                for (var t = 0; t < this.item.length; t++)
                    this.setIcon(this.item[t].getChildByName("prizeIcon"), c.default[t].type),
                        (this.item[t].getChildByName("prizeNum").getComponent(cc.Label).string =
                            "x" + c.default[t].num);
            }),
            (e.prototype.setIcon = function (t, e) {
                var n = "";
                e == c.LevelRewardItemType.Coin
                    ? (n = "prize/ui_jbdui")
                    : e == c.LevelRewardItemType.PropBomb
                    ? (n = "prize/ui_daoju_zhadan")
                    : e == c.LevelRewardItemType.PropClean && (n = "prize/ui_daoju_tongsexiao"),
                    l.default.inst.loadRes("Common", n, cc.SpriteFrame, function (e) {
                        t.getComponent(cc.Sprite).spriteFrame = e;
                    });
            }),
            (e.prototype.initItemPos = function () {
                (this.node.anchorY = 0.5), (this.node.anchorX = 0.5), (this._maxSize = new cc.Size(0, 0));
                for (var t = 0; t < this.item.length; t++)
                    (this._maxSize.width += this.item[t].width),
                        (this._maxSize.height += this.item[t].height),
                        (this._maxSize.width += this.itemOffset),
                        (this._maxSize.height += this.itemOffset);
                var e = cc.v2(-this._maxSize.width * this.node.anchorX, -this._maxSize.height * this.node.anchorY);
                for (this.itemList = [], t = 0; t < this.item.length; t++) {
                    var n = this.item[t].getAnchorPoint(),
                        i = this.item[t].getContentSize();
                    e.addSelf(cc.v2(i.width * n.x, i.height * n.y)),
                        (this.item[t].x = e.x),
                        (this.item[t].y = 0),
                        e.addSelf(cc.v2(i.width * n.x, i.height * n.y)),
                        e.addSelf(cc.v2(this.itemOffset, this.itemOffset)),
                        (this.itemList[t] = this.item[t]);
                }
            }),
            (e.prototype.itemMoveBy = function (t) {
                for (var e = 0; e < this.item.length; e++) this.item[e].x += t.x;
                this.updatePos();
            }),
            (e.prototype.updatePos = function () {
                var t = this.itemList[0],
                    e = this.itemList[this.itemList.length - 1],
                    n = !1;
                if ((t.x < -this._maxSize.width / 2 && (n = !0), n)) {
                    var i = this.itemList.shift();
                    this.itemList.push(i), (i.x = e.x + e.width + this.itemOffset);
                }
                var o = !1;
                e.x > this._maxSize.width / 2 && (o = !0),
                    o && ((i = this.itemList.pop()), this.itemList.unshift(i), (i.x = t.x - t.width - this.itemOffset)),
                    this.updateScale();
            }),
            (e.prototype.updateScale = function () {
                if (!(this.scaleMax < this.scaleMin || 0 == this.scaleMax))
                    for (var t = 0; t < this.item.length; t++) {
                        var e,
                            n = this.item[t].x + this._maxSize.width / 2;
                        (e = this.item[t].x < 0 ? n / this._maxSize.width : 1 - n / this._maxSize.width), (e *= 2);
                        var i = this.scaleMax - this.scaleMin;
                        (i *= e),
                            (i += this.scaleMin),
                            (i = Math.abs(i)),
                            (this.item[t].scaleX = i),
                            (this.item[t].scaleY = i);
                    }
            }),
            (e.prototype.update = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                    var e, n;
                    return __generator(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return 0 == this.moveSpeed
                                    ? [2]
                                    : 0 != this.wheelState
                                    ? [3, 1]
                                    : ((e = -this.moveSpeed * t * 100),
                                      this.itemMoveBy(cc.v2(e, e)),
                                      this.updatePos(),
                                      [3, 4]);
                            case 1:
                                return 1 != this.wheelState
                                    ? [3, 2]
                                    : ((this.moveSpeed += t * this.rub),
                                      this.moveSpeed >= this.maxSpeed &&
                                          ((this.moveSpeed = this.maxSpeed), (this.wheelState = 2)),
                                      (e = -this.moveSpeed * t * 100),
                                      this.itemMoveBy(cc.v2(e, e)),
                                      this.updatePos(),
                                      [3, 4]);
                            case 2:
                                return 2 != this.wheelState
                                    ? [3, 4]
                                    : ((e = -this.moveSpeed * t * 100),
                                      this.item[this.targetID].x <= Math.abs(e) && (e = -this.item[this.targetID].x),
                                      this.itemMoveBy(cc.v2(e, e)),
                                      this.updatePos(),
                                      0 != this.item[this.targetID].x
                                          ? [3, 4]
                                          : ((this.wheelState = 3),
                                            console.log("sssss", c.default[this.targetID]),
                                            (n = {
                                                type: c.default[this.targetID].type,
                                                num: c.default[this.targetID].num,
                                                isNoVideo: !0,
                                                tj: "levelReward"
                                            }),
                                            [4, p.default.show(h.default.path, p.PopupCacheMode.Frequent, n)]));
                            case 3:
                                i.sent(), this.hide(), (i.label = 4);
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.onSkipBtnChick = function () {
                this.hide();
            }),
            (e.prototype.onGetBtnChick = function () {
                var t = this;
                0 == this.wheelState &&
                    ((this.closeBtnNode.active = !1),
                    u.default.inst.showRewardVideo(function (e) {
                        return __awaiter(t, void 0, void 0, function () {
                            return __generator(this, function () {
                                return (
                                    e
                                        ? ((this.targetID = this.getGoal()), (this.wheelState = 1))
                                        : (this.closeBtnNode.active = !0),
                                    [2]
                                );
                            });
                        });
                    }));
            }),
            (e.prototype.getGoal = function () {
                for (var t = d.default.inst.randomRangeInt(0, 100), e = 0, n = 0; n < c.default.length; n++)
                    if (t <= (e += c.default[n].odds)) return console.log(n), n;
            }),
            (e.prototype.shareBtn = function () {
                y.default.share();
            }),
            __decorate([m(cc.Node)], e.prototype, "itemNode", void 0),
            __decorate([m(cc.Node)], e.prototype, "closeBtnNode", void 0),
            __decorate([m(cc.Float)], e.prototype, "itemOffset", void 0),
            __decorate([m(cc.Float)], e.prototype, "maxSpeed", void 0),
            __decorate([m(cc.Float)], e.prototype, "rub", void 0),
            __decorate([m(cc.Float)], e.prototype, "scaleMin", void 0),
            __decorate([m(cc.Float)], e.prototype, "scaleMax", void 0),
            __decorate([m({type: [cc.Node]})], e.prototype, "item", void 0),
            __decorate([m(cc.Node)], e.prototype, "NaviteAdBtn", void 0),
            __decorate([m(cc.Node)], e.prototype, "OkBtn", void 0),
            __decorate([g], e)
        );
    })(f.default);
n.default = b;
