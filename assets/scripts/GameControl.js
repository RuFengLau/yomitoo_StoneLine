var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var c = t("PropConfig"),
    l = t("CustomEventType"),
    p = t("EventMgr"),
    u = t("SpineHelper"),
    d = t("DataManager"),
    h = t("PopupManager"),
    f = t("SoundManager"),
    y = t("ToolManager"),
    v = t("CoinFlyPanel"),
    g = t("FanTipPanel"),
    m = t("HelpBallPanel"),
    b = t("LevelRewardsPanel"),
    S = t("RevivePanel"),
    A = t("RulesPanel"),
    w = t("FanButton"),
    C = t("GameBall"),
    B = t("GameBallSpine"),
    P = t("GameBombSpine"),
    x = t("GameLineSpine"),
    I = cc._decorator,
    M = I.ccclass,
    O = I.property,
    V = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.ballPrefab = null),
                (e.ballSpinePrefab = null),
                (e.bombSpinePrefab = null),
                (e.lineSpinePrefab = null),
                (e.ballNodes = null),
                (e.createLeftNode = null),
                (e.createRightNode = null),
                (e.touchNode = null),
                (e.fanSpine = null),
                (e.tipSpine = null),
                (e.cdSpine = null),
                (e.windSpine = null),
                (e.coinNode = null),
                (e.bombSpeedEditBox = null),
                (e.mixSprite = null),
                (e.guideMask = null),
                (e.guideFinger = null),
                (e.fanButton = null),
                (e.scoreLabel = null),
                (e.scoreProgressBar = null),
                (e.levelUpTips = null),
                (e.surplusBallLabel = null),
                (e.bonusLabel = null),
                (e.addScoreLabel = null),
                (e.propBombSpine = null),
                (e.surplusBalls = null),
                (e.gameBalls = []),
                (e.ballNodePool = null),
                (e.ballSpineNodePool = null),
                (e.cGameBall = null),
                (e.selectGameBalls = []),
                (e.isCreateInLeft = !0),
                (e.ballBombSpeed = 0.06),
                (e.touchEnable = !0),
                (e.touchStart = !1),
                (e.bCheckGameEnd = !1),
                (e.dTime = 0),
                (e.levelData = null),
                (e.bShowLevelUpTips = !1),
                (e.bUseProp = !1),
                (e.surplusBallsNum = 0),
                (e.ballDataList = []),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                var t = this;
                (this.guideFinger.active = !1),
                    (this.guideMask.active = !1),
                    this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchNodeStart, this),
                    this.touchNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchNodeMove, this),
                    this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchNodeEnd, this),
                    this.touchNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchNodeEnd, this),
                    p.default.inst.on(l.default.GAME_INIT, this.initGame, this),
                    p.default.inst.on(l.default.GAME_REVIVE, this.gameRevive, this),
                    p.default.inst.on(l.default.ADD_HELP_BALLS, this.addHelpBalls, this),
                    (this.ballNodePool = new cc.NodePool());
                for (var e = 0; e < 50; e++) {
                    var n = cc.instantiate(this.ballPrefab);
                    this.ballNodePool.put(n);
                }
                for (this.ballSpineNodePool = new cc.NodePool(), e = 0; e < 10; e++) {
                    var i = cc.instantiate(this.ballSpinePrefab);
                    this.ballSpineNodePool.put(i);
                }
                // this.scheduleOnce(function () {
                //     return __awaiter(t, void 0, void 0, function () {
                //         return __generator(this, function (t) {
                //             switch (t.label) {
                //                 case 0:
                //                     return d.default.inst.isRulesShow.val
                //                         ? [4, h.default.show(A.default.path, h.PopupCacheMode.Normal)]
                //                         : [3, 2];
                //                 case 1:
                //                     t.sent(), this.showGuide(), (t.label = 2);
                //                 case 2:
                //                     return [2];
                //             }
                //         });
                //     });
                // }, 1),
                    d.default.inst.levelTurnNum.bindObserveFunc(this.levelTurnNumFlush, this),
                    d.default.inst.scoreNum.bindObserveFunc(this.scoreNumFlush, this),
                    this.bombSpeedEditBox && (this.bombSpeedEditBox.string = this.ballBombSpeed.toString()),
                    (this.mixSprite.node.active = !1),
                    this.preloadRes();
            }),
            (e.prototype.onDestroy = function () {
                d.default.inst.levelTurnNum.unBindObserveFunc(this.levelTurnNumFlush),
                    d.default.inst.scoreNum.unBindObserveFunc(this.scoreNumFlush),
                    p.default.inst.off(l.default.GAME_INIT, this.initGame, this),
                    p.default.inst.off(l.default.GAME_REVIVE, this.gameRevive, this),
                    p.default.inst.off(l.default.ADD_HELP_BALLS, this.addHelpBalls, this);
            }),
            (e.prototype.start = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function () {
                        return this.initGame(), [2];
                    });
                });
            }),
            (e.prototype.initGame = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e, n, i;
                    return __generator(this, function (o) {
                        switch (o.label) {
                            case 0:
                                for (
                                    this.bUseProp = !1,
                                        d.default.inst.bSelectPropBomb.val = !1,
                                        d.default.inst.bSelectPropClean.val = !1,
                                        this.levelData = d.default.inst.getLevelData(),
                                        d.default.inst.scoreNum.val = d.default.inst.levelStartScore.val,
                                        this.levelUpTips.active = !1,
                                        this.surplusBallLabel.node.active = !1,
                                        this.bonusLabel.node.active = !1,
                                        this.addScoreLabel.node.active = !1,
                                        this.bShowLevelUpTips = !1,
                                        this.scoreNumFlush(),
                                        console.log("levelData", this.levelData),
                                        this.ballDataList = [],
                                        n = 0;
                                    n < this.levelData.balls.length;
                                    n++
                                )
                                    for (t = 0; t < this.levelData.balls[n]; t++) this.ballDataList.push(n);
                                (this.ballDataList = this.ballDataList.randArry()),
                                    (e = this.ballDataList.length >= 50 ? 50 : this.ballDataList.length),
                                    (this.surplusBallsNum = this.ballDataList.length),
                                    this.updateSurplusBalls(),
                                    (this.touchEnable = !1),
                                    (n = 0),
                                    (o.label = 1);
                            case 1:
                                return n < e
                                    ? ((i = y.default.inst.randomRangeInt(1, 10) / 100), [4, this.waitTime(i)])
                                    : [3, 4];
                            case 2:
                                o.sent(),
                                    this.addBall(this.ballDataList[n]),
                                    (this.surplusBallsNum -= 1),
                                    this.updateSurplusBalls(),
                                    (o.label = 3);
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return (
                                    (this.touchEnable = !0),
                                    this.ballDataList.splice(0, e),
                                    console.log("this.ballDataList", this.ballDataList),
                                    (this.bCheckGameEnd = !0),
                                    (this.surplusBallsNum = this.ballDataList.length),
                                    this.updateSurplusBalls(),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.gameRevive = function () {
                this.initGame();
            }),
            (e.prototype.preloadRes = function () {}),
            (e.prototype.bombSpeedEditBoxEnd = function () {
                this.ballBombSpeed = Number(this.bombSpeedEditBox.string)
            }),
            (e.prototype.scoreNumFlush = function () {
                null != this.levelData &&
                    ((this.scoreLabel.string = d.default.inst.scoreNum.val + "/" + this.levelData.targetScore),
                    (this.scoreProgressBar.progress = d.default.inst.scoreNum.val / this.levelData.targetScore),
                    d.default.inst.scoreNum.val > d.default.inst.highestScore.val &&
                        (d.default.inst.highestScore.val = d.default.inst.scoreNum.val),
                    d.default.inst.scoreNum.val >= this.levelData.targetScore &&
                        !this.bShowLevelUpTips &&
                        this.showLevelUpTips());
            }),
            (e.prototype.updateSurplusBalls = function () {
                this.surplusBalls.string = String("剩余宝石").toLocalize() + " " + this.surplusBallsNum;
            }),
            (e.prototype.levelTurnNumFlush = function () {
                f.default.inst.playEffect("fireworks"),
                    f.default.inst.playEffect("nice"),
                    this.cdSpine.playAn("animation", 1),
                    (this.tipSpine.node.active = !0),
                    this.tipSpine.playAn("nice", 1),
                    d.default.inst.addTheme();
            }),
            (e.prototype.showLevelUpTips = function () {
                (this.bShowLevelUpTips = !0),
                    (this.levelUpTips.scale = 0),
                    (this.levelUpTips.x = 0),
                    (this.levelUpTips.y = 200),
                    (this.levelUpTips.active = !0),
                    this.levelUpTips.stopAllActions(),
                    cc
                        .tween(this.levelUpTips)
                        .to(0.3, {scale: 1, y: 240}, {easing: "backOut"})
                        .delay(0.2)
                        .to(0.7, {scale: 0.3, position: cc.v3(-294, 509, 0)})
                        .start();
            }),
            (e.prototype.touchNodeStart = function (t) {
                if (!this.bUseProp && this.touchEnable) {
                    (this.touchStart = !0), (this.touchEnable = !1);
                    var e = t.getLocation();
                    (this.cGameBall = null), (this.selectGameBalls = []);
                    for (var n = 0, i = this.gameBalls; n < i.length; n++) {
                        var o = i[n];
                        if (o.checkInBall(e)) {
                            d.default.inst.bSelectPropBomb.val
                                ? this.usePropBomb(o)
                                : d.default.inst.bSelectPropClean.val
                                ? this.usePropClean(o)
                                : (o.setBallState(C.GameBallState.Select),
                                  (this.cGameBall = o),
                                  (o.selectIndex = 0),
                                  this.selectGameBalls.push(o),
                                  this.scheduleLineTips());
                            break;
                        }
                    }
                }
            }),
            (e.prototype.touchNodeMove = function (t) {
                if (
                    !this.bUseProp &&
                    !d.default.inst.bSelectPropBomb.val &&
                    !d.default.inst.bSelectPropClean.val &&
                    this.cGameBall
                )
                    for (var e = t.getLocation(), n = 0, i = this.gameBalls; n < i.length; n++) {
                        var o = i[n];
                        if (o.checkSameBall(this.cGameBall) && o.checkInBall(e)) {
                            if (o.state == C.GameBallState.Select) {
                                for (var a = o.selectIndex + 1; a < this.selectGameBalls.length; a++)
                                    this.selectGameBalls[a].setBallState(C.GameBallState.UnSelect);
                                (this.selectGameBalls.length = o.selectIndex + 1),
                                    (this.cGameBall = o),
                                    this.flushMixSp();
                                break;
                            }
                            if (this.cGameBall.checkInContactList(o)) {
                                o.setBallState(C.GameBallState.Select),
                                    (o.selectIndex = this.selectGameBalls.length),
                                    this.selectGameBalls.push(o),
                                    (this.cGameBall = o),
                                    this.flushMixSp();
                                break;
                            }
                        }
                    }
            }),
            (e.prototype.touchNodeEnd = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                return d.default.inst.bSelectPropBomb.val || d.default.inst.bSelectPropClean.val
                                    ? ((this.touchStart = !1), (this.touchEnable = !0), [2])
                                    : this.bUseProp
                                    ? [2]
                                    : this.touchStart
                                    ? ((this.touchStart = !1), [4, this.eliminateBall()])
                                    : (console.log("aaaaaaaaaaa就是这里了"), [2]);
                            case 1:
                                for (n.sent(), t = 0, e = this.selectGameBalls; t < e.length; t++)
                                    e[t].setBallState(C.GameBallState.UnSelect);
                                return (
                                    (this.cGameBall = null), (this.selectGameBalls = []), this.unscheduleLineTips(), [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.scheduleLineTips = function () {
                this.scheduleLineTipsCall(), this.schedule(this.scheduleLineTipsCall, 1);
            }),
            (e.prototype.unscheduleLineTips = function () {
                this.unschedule(this.scheduleLineTipsCall);
                for (var t = 0, e = this.gameBalls; t < e.length; t++) e[t].setTips(!1);
            }),
            (e.prototype.scheduleLineTipsCall = function () {
                if (null != this.cGameBall) {
                    for (var t = 0, e = this.gameBalls; t < e.length; t++) e[t].setTips(!1);
                    var n = this.getLineBalls(this.cGameBall);
                    if (null != n && n.length > 1) for (var i = 0; i < n.length; i++) n[i].setTips(!0);
                } else this.unscheduleLineTips();
            }),
            (e.prototype.getCanCleanBalls = function () {
                var t = y.default.inst.randomRangeInt(0, this.gameBalls.length),
                    e = this.gameBalls[t],
                    n = this.getLineBalls(e);
                return n.length < 2 ? this.getCanCleanBalls() : n;
            }),
            (e.prototype.getLineBalls = function (t) {
                for (var e = [], n = [], i = 0, o = this.gameBalls; i < o.length; i++) {
                    var a = o[i];
                    a.checkSameBall(t) && n.push(a);
                }
                e.push(t), n.remove(t);
                for (var r = 0; r < e.length; ) {
                    for (var s = e[r], c = 0; c < n.length; )
                        s.checkInContactList(n[c]) ? (e.push(n[c]), n.splice(c, 1)) : ++c;
                    ++r;
                }
                return e;
            }),
            (e.prototype.culNum = function () {
                var t = Math.floor(this.selectGameBalls.length / 2),
                    e = this.cGameBall.gameBallData.num * Math.pow(2, t);
                return e > 8192 && (e = 2), e;
            }),
            (e.prototype.flushMixSp = function () {
                (this.addScoreLabel.node.active = !0),
                    (this.addScoreLabel.string = "+" + d.default.inst.getAddScore(this.selectGameBalls.length));
            }),
            (e.prototype.eliminateBall = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t,
                        e,
                        n,
                        i,
                        o,
                        a,
                        r = this;
                    return __generator(this, function (c) {
                        switch (c.label) {
                            case 0:
                                if (
                                    ((this.mixSprite.node.active = !1),
                                    (this.addScoreLabel.node.active = !1),
                                    this.selectGameBalls.length <= 1)
                                )
                                    return (this.touchEnable = !0), [2];
                                this.hideGuide(),
                                    (this.tipSpine.node.active = !0),
                                    this.selectGameBalls.length >= 7
                                        ? (f.default.inst.playEffect("amazing"), this.tipSpine.playAn("amazing", 1))
                                        : this.selectGameBalls.length >= 5
                                        ? (f.default.inst.playEffect("excellent"),
                                          this.tipSpine.playAn("excellence", 1))
                                        : this.selectGameBalls.length >= 3 &&
                                          (f.default.inst.playEffect("good"), this.tipSpine.playAn("good", 1)),
                                    console.log("this.selectGameBalls.length", this.selectGameBalls.length),
                                    (t = function (t) {
                                        var n, i;
                                        return __generator(this, function (o) {
                                            switch (o.label) {
                                                case 0:
                                                    return (
                                                        (n = e.selectGameBalls[t]),
                                                        e.ballNodePool.put(n.node),
                                                        e.gameBalls.remove(n),
                                                        ((i = e.createSpineBall()).node.parent = e.ballNodes),
                                                        (i.node.position = n.node.position),
                                                        i.playBomb(n.gameBallData.num, function () {
                                                            d.default.inst.updateTaskCleanNum(n.gameBallData.num, 1),
                                                                r.ballSpineNodePool.put(i.node);
                                                        }),
                                                        [4, e.waitTime(e.ballBombSpeed)]
                                                    );
                                                case 1:
                                                    return o.sent(), [2];
                                            }
                                        });
                                    }),
                                    (e = this),
                                    (n = 0),
                                    (c.label = 1);
                            case 1:
                                return n < this.selectGameBalls.length ? [5, t(n)] : [3, 4];
                            case 2:
                                c.sent(), (c.label = 3);
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return (
                                    (i = d.default.inst.ClearRewardCoinNum(this.selectGameBalls.length)),
                                    (o = cc.v2(this.selectGameBalls[this.selectGameBalls.length - 1].node.position)),
                                    (a = {count: i, stPos: o, coinNode: this.coinNode}),
                                    h.default.show(v.default.path, h.PopupCacheMode.Normal, a),
                                    this.checkAddBalls(),
                                    (d.default.inst.scoreNum.val += d.default.inst.getAddScore(
                                        this.selectGameBalls.length
                                    )),
                                    this.checkPopHelp(),
                                    (this.touchEnable = !0),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.checkAddBalls = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e, n;
                    return __generator(this, function (i) {
                        switch (i.label) {
                            case 0:
                                if (!(this.gameBalls.length <= 40 && this.ballDataList.length > 0)) return [3, 5];
                                (t = this.ballDataList.length >= 10 ? 10 : this.ballDataList.length),
                                    (e = 0),
                                    (i.label = 1);
                            case 1:
                                return e < t
                                    ? ((n = y.default.inst.randomRangeInt(1, 10) / 100), [4, this.waitTime(n)])
                                    : [3, 4];
                            case 2:
                                i.sent(),
                                    this.addBall(this.ballDataList[e]),
                                    (this.surplusBallsNum -= 1),
                                    this.updateSurplusBalls(),
                                    (i.label = 3);
                            case 3:
                                return e++, [3, 1];
                            case 4:
                                this.ballDataList.splice(0, t),
                                    console.log("添加宝石 ", this.ballDataList.length),
                                    (this.surplusBallsNum = this.ballDataList.length),
                                    this.updateSurplusBalls(),
                                    (i.label = 5);
                            case 5:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.checkPopHelp = function () {
                d.default.inst.scoreNum.val < this.levelData.targetScore &&
                    this.gameBalls.length <= 20 &&
                    this.levelData.helpTime > d.default.inst.helpTime.val &&
                    h.default.show(m.default.path, h.PopupCacheMode.Normal);
            }),
            (e.prototype.addHelpBalls = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e, n, i;
                    return __generator(this, function (o) {
                        switch (o.label) {
                            case 0:
                                for (
                                    t = this.levelData.helpBallsNum, e = [], n = 0;
                                    n < this.levelData.balls.length;
                                    n++
                                )
                                    this.levelData.balls[n] > 0 && e.push(n);
                                (n = 0), (o.label = 1);
                            case 1:
                                return n < t
                                    ? ((i = y.default.inst.randomRangeInt(1, 10) / 100), [4, this.waitTime(i)])
                                    : [3, 4];
                            case 2:
                                o.sent(), this.addBall(e[y.default.inst.randomRangeInt(0, e.length)]), (o.label = 3);
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.showGuide = function () {
                var t = this;
                this.guideMask.active = !0;
                for (var e = 0; e < this.gameBalls.length; e++) this.gameBalls[e].bCanTouch = !1;
                var n = this.getCanCleanBalls();
                if ((console.log("cleanBalls", n), null != n)) {
                    for (e = 0; e < 2; e++)
                        (n[e].node.active = !1),
                            (n[e].node.group = "guide"),
                            (n[e].node.active = !0),
                            (n[e].bCanTouch = !0);
                    (this.guideFinger.active = !0),
                        (this.guideFinger.position = n[0].node.position),
                        this.guideFinger.stopAllActions(),
                        cc
                            .tween(this.guideFinger)
                            .repeatForever(
                                cc
                                    .tween()
                                    .to(0.5, {position: n[1].node.position})
                                    .to(0.5, {opacity: 0})
                                    .call(function () {
                                        (t.guideFinger.opacity = 255), (t.guideFinger.position = n[0].node.position);
                                    })
                            )
                            .start();
                }
            }),
            (e.prototype.hideGuide = function () {
                if (d.default.inst.isRulesShow.val) {
                    this.guideFinger.stopAllActions(),
                        (d.default.inst.isRulesShow.val = !1),
                        (this.guideMask.active = !1),
                        (this.guideFinger.active = !1);
                    for (var t = 0; t < this.gameBalls.length; t++)
                        (this.gameBalls[t].node.group = "default"), (this.gameBalls[t].bCanTouch = !0);
                }
            }),
            (e.prototype.waitTime = function (t) {
                var e = this;
                return new Promise(function (n) {
                    e.scheduleOnce(function () {
                        n(null);
                    }, t);
                });
            }),
            (e.prototype.addBall = function (t, e) {
                return (
                    void 0 === e && (e = 1),
                    __awaiter(this, void 0, void 0, function () {
                        var n, i, o, a;
                        return __generator(this, function (r) {
                            switch (r.label) {
                                case 0:
                                    (n = 0), (r.label = 1);
                                case 1:
                                    return n < e
                                        ? (((i = this.createBall()).node.parent = this.ballNodes),
                                          i.setData({num: parseInt(t)}),
                                          (o = this.isCreateInLeft ? this.createLeftNode : this.createRightNode),
                                          (this.isCreateInLeft = !this.isCreateInLeft),
                                          (i.node.position = o.position),
                                          this.gameBalls.push(i),
                                          (a = y.default.inst.randomRangeInt(1, 5) / 100),
                                          [4, this.waitTime(a)])
                                        : [3, 4];
                                case 2:
                                    r.sent(), (r.label = 3);
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2];
                            }
                        });
                    })
                );
            }),
            (e.prototype.createBall = function () {
                return (
                    this.ballNodePool.size() > 0 ? this.ballNodePool.get() : cc.instantiate(this.ballPrefab)
                ).getComponent(C.default);
            }),
            (e.prototype.createSpineBomb = function () {
                return cc.instantiate(this.bombSpinePrefab).getComponent(P.default);
            }),
            (e.prototype.createSpineLine = function () {
                return cc.instantiate(this.lineSpinePrefab).getComponent(x.default);
            }),
            (e.prototype.createSpineBall = function () {
                return (
                    this.ballSpineNodePool.size() > 0
                        ? this.ballSpineNodePool.get()
                        : cc.instantiate(this.ballSpinePrefab)
                ).getComponent(B.default);
            }),
            (e.prototype.useFan = function () {
                f.default.inst.playEffect("fan"),
                    this.fanSpine.playAn("animation", 1),
                    this.windSpine.playAn("animation", 1);
                for (var t = 0, e = this.gameBalls; t < e.length; t++) {
                    var n = e[t],
                        i = y.default.inst.randomRangeInt(7e3, 12e3),
                        o = y.default.inst.randomRangeInt(0, 12e3) - 6e3;
                    n.applyLinearImpulse(cc.v2(o, i)), n.windEffect();
                }
            }),
            (e.prototype.checkGameEnd = function () {
                var self = this;
            
                // 如果还能消除，直接返回
                if (this.isCanClean()) {
                    return Promise.resolve();
                }
            
                console.log("不能消除了");
                this.bCheckGameEnd = false;
            
                // 显示剩余宝石
                this.surplusBallLabel.node.active = true;
                this.surplusBallLabel.string = String("剩余宝石").toLocalize() + " " + this.gameBalls.length;
            
                // 显示奖励分数
                this.bonusLabel.node.active = true;
                var bonus = d.default.inst.getBonusScore(this.gameBalls.length);
                this.bonusLabel.string = String("奖励分数").toLocalize() + " " + bonus;
                d.default.inst.scoreNum.val += bonus;
            
                // 播放爆炸动画
                var n = this;
                var playBombAt = function (idx) {
                    return new Promise(function (resolve) {
                        var e = n.gameBalls[idx];
                        n.ballNodePool.put(e.node);
            
                        var spineBall = n.createSpineBall();
                        spineBall.node.parent = n.ballNodes;
                        spineBall.node.position = e.node.position;
            
                        spineBall.playBomb(e.gameBallData.num, function () {
                            self.ballSpineNodePool.put(spineBall.node);
                        });
            
                        n.waitTime(n.ballBombSpeed).then(resolve);
                    });
                };
            
                return new Promise(function (resolve) {
                    // 依次执行所有爆炸
                    var promise = Promise.resolve();
                    for (var i = 0; i < n.gameBalls.length; i++) {
                        (function (idx) {
                            promise = promise.then(function () {
                                return playBombAt(idx);
                            });
                        })(i);
                    }
            
                    promise.then(function () {
                        // 清空宝石
                        n.gameBalls = [];
            
                        // 播放特效
                        f.default.inst.playEffect("fireworks");
                        n.cdSpine.playAn("animation", 1);
            
                        // 等待 2 秒
                        return n.waitTime(2);
                    }).then(function () {
                        if (self.bShowLevelUpTips) {
                            d.default.inst.levelNum.val += 1;
                            d.default.inst.helpTime.val = 0;
                            d.default.inst.levelStartScore.val = d.default.inst.scoreNum.val;
            
                            self.surplusBallLabel.node.active = false;
                            self.bonusLabel.node.active = false;
            
                            // 弹出升级提示
                            return h.default.show(b.default.path, h.PopupCacheMode.Frequent).then(function () {
                                d.default.inst.addTheme();
                                self.initGame();
                            });
                        } else {
                            // 弹出普通结算
                            h.default.show(S.default.path, h.PopupCacheMode.Frequent);
                        }
                    }).then(resolve);
                });
            }),
            (e.prototype.isCanClean = function () {
                for (var t = 0; t < this.gameBalls.length; t++)
                    for (var e = t + 1; e < this.gameBalls.length; e++) {
                        var n = this.gameBalls[t],
                            i = this.gameBalls[e];
                        if (n.checkSameBall(i) && n.checkInContactList(i)) return !0;
                    }
                return !1;
            }),
            (e.prototype.update = function (t) {
                if (this.bCheckGameEnd && ((this.dTime += t), this.dTime >= 2)) {
                    this.dTime = 0;
                    for (var e = !1, n = 0; n < this.gameBalls.length; n++)
                        if (this.gameBalls[n].node.getComponent(cc.RigidBody).awake) {
                            e = !0;
                            break;
                        }
                    e || this.checkGameEnd();
                }
            }),
            (e.prototype.fanBtnClick = function () {
                var t = this;
                this.fanButton.isCanUse()
                    ? (this.useFan(), this.fanButton.cleanProgress())
                    : h.default.show(g.default.path, h.PopupCacheMode.Frequent, {
                          callFunc: function () {
                              return __awaiter(t, void 0, void 0, function () {
                                  return __generator(this, function (t) {
                                      switch (t.label) {
                                          case 0:
                                              return [4, this.waitTime(0.2)];
                                          case 1:
                                              return t.sent(), this.useFan(), [2];
                                      }
                                  });
                              });
                          }
                      });
            }),
            (e.prototype.getAngle = function (t, e) {
                var n = e.x - t.x,
                    i = e.y - t.y;
                return (-cc.v2(n, i).signAngle(cc.v2(1, 0)) / Math.PI) * 180;
            }),
            (e.prototype.getDistance = function (t, e) {
                var n = cc.v2(t.x - e.x, t.y - e.y);
                return Math.sqrt(n.x * n.x + n.y * n.y);
            }),
            (e.prototype.usePropClean = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                    var e,
                        n,
                        i,
                        o,
                        a,
                        r,
                        l,
                        p,
                        u,
                        h,
                        f,
                        y = this;
                    return __generator(this, function (s) {
                        switch (s.label) {
                            case 0:
                                for (
                                    this.bUseProp = !0,
                                        d.default.inst.propCleanNum.val > 0
                                            ? (d.default.inst.propCleanNum.val -= 1)
                                            : d.default.inst.coinNum.val >= c.default.propCleanCoin &&
                                              ((d.default.inst.coinNum.val -= c.default.propCleanCoin),
                                              d.default.inst.saveCoin()),
                                        d.default.inst.bSelectPropClean.val = !1,
                                        e = [],
                                        n = 0,
                                        i = this.gameBalls;
                                    n < i.length;
                                    n++
                                )
                                    (a = i[n]).checkSameBall(t) && e.push(a);
                                console.log("tempList", e), (o = []), (f = 0), (s.label = 1);
                            case 1:
                                return f < e.length
                                    ? ((a = e[f]),
                                      (r = e[f + 1]),
                                      ((l = this.createSpineLine()).node.parent = this.ballNodes),
                                      (l.node.position = a.node.position),
                                      (l.node.scale = 1),
                                      l.playDian(),
                                      o.push(l),
                                      null == r
                                          ? [3, 3]
                                          : (((p = this.createSpineLine()).node.parent = this.ballNodes),
                                            (p.node.position = a.node.position),
                                            (p.node.scaleX = 0),
                                            (p.node.angle = this.getAngle(a.node.position, r.node.position)),
                                            cc
                                                .tween(p.node)
                                                .to(0.1, {
                                                    scaleX: this.getDistance(a.node.position, r.node.position) / 500
                                                })
                                                .start(),
                                            p.playXian(),
                                            o.push(p),
                                            [4, this.waitTime(0.1)]))
                                    : [3, 4];
                            case 2:
                                s.sent(), (s.label = 3);
                            case 3:
                                return f++, [3, 1];
                            case 4:
                                for (
                                    d.default.inst.scoreNum.val += d.default.inst.getAddScore(e.length),
                                        u = function (t) {
                                            var n = e[t];
                                            h.ballNodePool.put(n.node), h.gameBalls.remove(n);
                                            var i = h.createSpineBall();
                                            (i.node.parent = h.ballNodes),
                                                (i.node.position = n.node.position),
                                                i.playBomb(n.gameBallData.num, function () {
                                                    d.default.inst.updateTaskCleanNum(n.gameBallData.num, 1),
                                                        y.ballSpineNodePool.put(i.node);
                                                });
                                        },
                                        h = this,
                                        f = 0;
                                    f < e.length;
                                    f++
                                )
                                    u(f);
                                for (f = 0; f < o.length; f++) o[f].node.removeFromParent();
                                return (
                                    this.checkAddBalls(),
                                    this.checkPopHelp(),
                                    (this.touchStart = !1),
                                    (this.touchEnable = !0),
                                    (this.bUseProp = !1),
                                    [2]
                                );
                        }
                    });
                });
            }),
            (e.prototype.usePropBomb = function (t) {
                return __awaiter(this, void 0, void 0, function () {
                    var e,
                        n,
                        i,
                        o,
                        a,
                        r,
                        l = this;
                    return __generator(this, function (s) {
                        switch (s.label) {
                            case 0:
                                return (
                                    (this.bUseProp = !0),
                                    d.default.inst.propBombNum.val > 0
                                        ? (d.default.inst.propBombNum.val -= 1)
                                        : d.default.inst.coinNum.val >= c.default.propBombCoin &&
                                          ((d.default.inst.coinNum.val -= c.default.propBombCoin),
                                          d.default.inst.saveCoin()),
                                    ((e = cc.instantiate(this.propBombSpine)).parent = this.propBombSpine.parent),
                                    (e.position = this.propBombSpine.position),
                                    (n = this.propBombSpine.parent.convertToNodeSpaceAR(
                                        this.ballNodes.convertToWorldSpaceAR(t.node.getPosition())
                                    )),
                                    (i = cc.v2(e.x, e.y)),
                                    (o = cc.v2(e.x, n.y + 100)),
                                    (a = cc.v2(n.x, n.y)),
                                    cc.tween(e).bezierTo(0.3, i, o, a).removeSelf().start(),
                                    [4, this.waitTime(0.3)]
                                );
                            case 1:
                                return (
                                    s.sent(),
                                    (this.touchStart = !1),
                                    (this.touchEnable = !0),
                                    ((r = this.createSpineBomb()).node.parent = this.ballNodes),
                                    (r.node.position = t.node.position),
                                    r.playBomb(function () {
                                        r.node.removeFromParent();
                                    }),
                                    r.getContactList(function (t) {
                                        console.log(t),
                                            (d.default.inst.scoreNum.val += d.default.inst.getAddScore(t.length));
                                        for (
                                            var e = function (e) {
                                                    var n = t[e];
                                                    l.ballNodePool.put(n.node), l.gameBalls.remove(n);
                                                    var i = l.createSpineBall();
                                                    (i.node.parent = l.ballNodes),
                                                        (i.node.position = n.node.position),
                                                        i.playBomb(n.gameBallData.num, function () {
                                                            d.default.inst.updateTaskCleanNum(n.gameBallData.num, 1),
                                                                l.ballSpineNodePool.put(i.node);
                                                        });
                                                },
                                                n = 0;
                                            n < t.length;
                                            n++
                                        )
                                            e(n);
                                        (l.bUseProp = !1), l.checkAddBalls(), l.checkPopHelp();
                                    }),
                                    (d.default.inst.bSelectPropBomb.val = !1),
                                    [2]
                                );
                        }
                    });
                });
            }),
            __decorate([O(cc.Prefab)], e.prototype, "ballPrefab", void 0),
            __decorate([O(cc.Prefab)], e.prototype, "ballSpinePrefab", void 0),
            __decorate([O(cc.Prefab)], e.prototype, "bombSpinePrefab", void 0),
            __decorate([O(cc.Prefab)], e.prototype, "lineSpinePrefab", void 0),
            __decorate([O(cc.Node)], e.prototype, "ballNodes", void 0),
            __decorate([O(cc.Node)], e.prototype, "createLeftNode", void 0),
            __decorate([O(cc.Node)], e.prototype, "createRightNode", void 0),
            __decorate([O(cc.Node)], e.prototype, "touchNode", void 0),
            __decorate([O(u.default)], e.prototype, "fanSpine", void 0),
            __decorate([O(u.default)], e.prototype, "tipSpine", void 0),
            __decorate([O(u.default)], e.prototype, "cdSpine", void 0),
            __decorate([O(u.default)], e.prototype, "windSpine", void 0),
            __decorate([O(cc.Node)], e.prototype, "coinNode", void 0),
            __decorate([O(cc.EditBox)], e.prototype, "bombSpeedEditBox", void 0),
            __decorate([O(cc.Sprite)], e.prototype, "mixSprite", void 0),
            __decorate([O(cc.Node)], e.prototype, "guideMask", void 0),
            __decorate([O(cc.Node)], e.prototype, "guideFinger", void 0),
            __decorate([O(w.default)], e.prototype, "fanButton", void 0),
            __decorate([O(cc.Label)], e.prototype, "scoreLabel", void 0),
            __decorate([O(cc.ProgressBar)], e.prototype, "scoreProgressBar", void 0),
            __decorate([O(cc.Node)], e.prototype, "levelUpTips", void 0),
            __decorate([O(cc.Label)], e.prototype, "surplusBallLabel", void 0),
            __decorate([O(cc.Label)], e.prototype, "bonusLabel", void 0),
            __decorate([O(cc.Label)], e.prototype, "addScoreLabel", void 0),
            __decorate([O(cc.Node)], e.prototype, "propBombSpine", void 0),
            __decorate([O(cc.Label)], e.prototype, "surplusBalls", void 0),
            __decorate([M], e)
        );
    })(cc.Component);
n.default = V;
