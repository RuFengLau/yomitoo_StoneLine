var e = require;
var n = module;
window.lieyou_SdkManager = n.exports = {
    instance: null,
    init: function () {
        if (!this.isInitOver) {
            this.isInitOver = !0;
            var e = cc.winSize,
                n = e.height > e.width ? e.width : e.height;
            (this._sceneScale = n / 720),
                this.loadPrefab({
                    str: "初始化",
                    callBack: function (e) {
                        e.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1), cc.removeSelf()));
                    }
                }),
                (this._bannerAd = null),
                (this._haveVideo = !1);
        }
    },
    onHide: function (e) {
        e();
    },
    onShow: function (e) {
        e();
    },
    getHaveVideo: function () {
        return (
            this.loadPrefab({
                str: "是否有视频",
                callBack: function (e) {
                    e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
                }
            }),
            (this._haveVideo = !this._haveVideo),
            this._haveVideo
        );
    },
    vibrateShort: function () {
        this.loadPrefab({
            str: "短震动",
            callBack: function (e) {
                e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    vibrateLong: function () {
        this.loadPrefab({
            str: "长震动",
            callBack: function (e) {
                e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    showBanner: function (e) {
        var n = this;
        this._moreGameBanner &&
            this._moreGameBanner.isValid &&
            (this._moreGameBanner.destroy(), (this._moreGameBanner = null)),
            this._bannerAd && this._bannerAd.isValid
                ? (this._bannerAd.y = e)
                : this.loadPrefab({
                      str: "banner广告",
                      callBack: function (c) {
                          (n._bannerAd = c),
                              (c.y = e),
                              (c.anchorY = 0),
                              (c.width = 720),
                              (c.height = 120),
                              cc.game.addPersistRootNode(c);
                      }
                  });
    },
    showBannerCustom: function (e) {
        void 0 === e && (e = {}), this.showBanner(e.y ? e.y : 0);
    },
    showBannerByBottom: function () {
        this.showBanner(0);
    },
    showBannerByTop: function () {
        this.showBanner(cc.winSize.height - 120 * this._sceneScale);
    },
    hideBanner: function () {
        this._bannerAd && this._bannerAd.isValid && (this._bannerAd.destroy(), (this._bannerAd = null));
    },
    addNativeAd: function (e) {
        void 0 === e && (e = null),
            this.loadPrefab({
                node: e,
                str: "ad",
                callBack: function (n) {
                    (n.y = 0), (n.x = 0), (n.scale = 1), (n.width = e.width), (n.height = e.height);
                }
            });
    },
    addInstallShortcut: function (e) {
        void 0 === e && (e = {}),
            this.loadPrefab({
                node: e.node,
                str: "桌面",
                callBack: function (e) {
                    (e.y = 0), (e.x = 0), (e.width = 100), (e.height = 100);
                }
            });
    },
    showRewardedVideoAd: function (e) {
        this.loadPrefab({
            str: "播放视频",
            callBack: function (n) {
                (n.width = 720), (n.height = 1280);
                var c = new cc.Node("buttonSuccess");
                c.addComponent(cc.Label),
                    (c.getComponent(cc.Label).fontSize = 30),
                    (c.getComponent(cc.Label).string = "播放成功"),
                    (c.x = -100),
                    (c.y = -200),
                    n.addChild(c),
                    c.on(cc.Node.EventType.TOUCH_START, function () {
                        n.destroy(), e(!0);
                    });
                var t = new cc.Node("buttonFailed");
                t.addComponent(cc.Label),
                    (t.getComponent(cc.Label).fontSize = 30),
                    (t.getComponent(cc.Label).string = "播放失败"),
                    (t.x = 100),
                    (t.y = -200),
                    n.addChild(t),
                    t.on(cc.Node.EventType.TOUCH_START, function () {
                        n.destroy(), e(!1);
                    });
            }
        });
    },
    showSpotByFinish: function () {
        this.showSopt();
    },
    showSpotByPause: function () {
        this.showSopt();
    },
    showSopt: function () {
        this.loadPrefab({
            str: "插屏广告",
            callBack: function (e) {
                (e.width = 500),
                    (e.height = 500),
                    e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    showMoreGameMiddle_one: function (e) {
        void 0 === e && (e = {});
        var n = e.node ? e.node : cc.director.getScene();
        return (
            this.loadPrefab({
                node: n,
                str: "一行互推",
                callBack: function (n) {
                    (n.width = 644.6),
                        (n.height = 166 * 1.1),
                        e.haveTitle && (n.height += 55),
                        (n.height *= 1.1),
                        (n.x = null != e.x ? e.x : 0),
                        (n.y = null != e.y ? e.y : 0);
                }
            }),
            !0
        );
    },
    showMoreGameMiddle_two: function (e) {
        void 0 === e && (e = {});
        var n = e.node ? e.node : cc.director.getScene();
        return (
            this.loadPrefab({
                node: n,
                str: "两行互推",
                callBack: function (n) {
                    (n.width = 644.6),
                        (n.height = 336.6),
                        e.haveTitle && (n.height += 55),
                        (n.height *= 1.1),
                        (n.x = null != e.x ? e.x : 0),
                        (n.y = null != e.y ? e.y : 0);
                }
            }),
            !0
        );
    },
    showMoreGameMiddle_three: function (e) {
        void 0 === e && (e = {});
        var n = e.node ? e.node : cc.director.getScene();
        return (
            this.loadPrefab({
                node: n,
                str: "三行互推",
                callBack: function (n) {
                    (n.width = 644.6),
                        (n.height = 490.6),
                        e.haveTitle && (n.height += 55),
                        (n.height *= 1.1),
                        (n.x = null != e.x ? e.x : 0),
                        (n.y = null != e.y ? e.y : 0);
                }
            }),
            !0
        );
    },
    showMoreGameSide: function (e) {
        void 0 === e && (e = {}),
            this.loadPrefab({
                str: "侧边栏",
                callBack: function (n) {
                    (n.width = 100),
                        (n.height = 100),
                        null != e.y && (n.y = e.y),
                        e.isPersist && cc.game.addPersistRootNode(n),
                        e.sideType_right ? (n.x = cc.winSize.width) : (n.x = 0);
                }
            });
    },
    showMoreGame: function (e) {
        void 0 === e && (e = {});
        var n = e.node ? e.node : cc.director.getScene();
        this.loadPrefab({
            node: n,
            str: "更多游戏",
            callBack: function (n) {
                (n.width = 100), (n.height = 100), (n.x = null != e.x ? e.x : 0), (n.y = null != e.y ? e.y : 0);
            }
        });
    },
    showMoreGameByBanner: function (e) {
        var n = this;
        void 0 === e && (e = {}), this.hideBanner(), new cc.Node();
        var c = e.node ? e.node : cc.director.getScene();
        this.loadPrefab({
            node: c,
            str: "猜你喜欢",
            callBack: function (c) {
                (n._moreGameBanner = c),
                    (c.width = 720),
                    (c.height = 170),
                    (c.anchorY = 0),
                    (c.x = null != e.x ? e.x : cc.winSize.width / 2),
                    (c.y = null != e.y ? e.y : 0);
            }
        });
    },
    showMoreGameByIcon: function (e) {
        void 0 === e && (e = {});
        var n = e.node ? e.node : cc.director.getScene();
        this.loadPrefab({
            node: n,
            str: "互推icon",
            callBack: function (n) {
                (n.width = e.side ? e.side : 130),
                    (n.height = e.side ? e.side : 130),
                    (n.x = null != e.x ? e.x : 0),
                    (n.y = null != e.y ? e.y : 0);
            }
        });
    },
    getShareOrViedo: function () {
        return this.getHaveVideo();
    },
    stopLuPing: function () {},
    addLuPingBtn: function () {},
    pauseLuPing: function () {},
    resumeLuPing: function () {},
    shareVd: function () {},
    getSysPlatform: function () {
        return -2;
    },
    showAppBox: function () {},
    gameBeginLevel: function (e, n) {
        void 0 === e && (e = -1),
            void 0 === n && (n = "level"),
            this.loadPrefab({
                str: "游戏开始",
                callBack: function (e) {
                    e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
                }
            });
    },
    gameFailLevel: function (e, n) {
        void 0 === e && (e = -1),
            void 0 === n && (n = "level"),
            this.loadPrefab({
                str: "游戏失败",
                callBack: function (e) {
                    e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
                }
            });
    },
    gameFinishLevel: function (e, n) {
        void 0 === e && (e = -1),
            void 0 === n && (n = "level"),
            this.loadPrefab({
                str: "游戏成功",
                callBack: function (e) {
                    e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
                }
            });
    },
    showShareVideoDialog: function () {
        this.loadPrefab({
            str: "分享视频",
            callBack: function (e) {
                e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    gameMain: function () {
        this.loadPrefab({
            str: "主页打点",
            callBack: function (e) {
                e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    gameEvent: function (e) {
        this.loadPrefab({
            str: "计次打点:" + e,
            callBack: function (e) {
                (e.width = 300), e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    gameEventBegin: function (e) {
        this.loadPrefab({
            str: "计时打点开始:" + e,
            callBack: function (e) {
                (e.width = 400), e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    gameEventFinish: function (e) {
        this.loadPrefab({
            str: "计时打点结束:" + e,
            callBack: function (e) {
                (e.width = 400), e.runAction(cc.sequence(cc.delayTime(0.5), cc.fadeOut(0.5), cc.removeSelf()));
            }
        });
    },
    loadPrefab: function (e) {
        var n = this;
        void 0 === e && (e = {});
        var c = cc.winSize,
            t = e.node ? e.node : cc.director.getScene();
        cc.loader.loadRes("lieyou_SDK/sdkNode", function (i, o) {
            if (!i && t && t.isValid) {
                var a = cc.instantiate(o);
                (cc.find("label", a).getComponent(cc.Label).string = e.str),
                    t.addChild(a),
                    (a.x = c.width / 2),
                    (a.y = c.height / 2),
                    (a.scale = n._sceneScale),
                    e.callBack && e.callBack(a);
            }
        });
    }
};
