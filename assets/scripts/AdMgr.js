const { PlatformAdManager } = require("../ymtScripts/yomitoo/tools/PlatformAdManager");

var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", { value: !0 });
var o = t("DataManager"),
    a = t("PopupManager"),
    r = t("PopupToastPanel"),
    s = t("FBAdManager"),
    c = cc._decorator,
    l = c.ccclass,
    p =
        (c.property,
            (function () {
                function t() { }
                return (
                    (t.setNewUserPlayNum = function () {
                        var t = JSON.parse(cc.sys.localStorage.getItem("FirstPlayGame"));
                        t
                            ? cc.sys.localStorage.setItem("FirstPlayGame", JSON.stringify(t + 1))
                            : cc.sys.localStorage.setItem("FirstPlayGame", JSON.stringify(1));
                    }),
                    (t.getUserPlayNum = function () {
                        return JSON.parse(cc.sys.localStorage.getItem("FirstPlayGame"));
                    }),
                    (t.isNewDay = function () {
                        var t = cc.sys.localStorage.getItem("QuestLastTime"),
                            e = this.GetNowTimes();
                        return null == t || null == t || "" == t
                            ? (cc.sys.localStorage.setItem("QuestLastTime", e), !0)
                            : e != t;
                    }),
                    (t.GetNowTimes = function () {
                        return new Date().toLocaleDateString();
                    }),
                    (t.showVideo = function (t) {
                        var e = this;
                        return (
                            cc.audioEngine.pauseAll(),
                            cc.audioEngine.setMusicVolume(0),

                            PlatformAdManager.inst.showRewardedVideo(ss => {
                                e.soundSwitch()
                                if (ss) {
                                    t && t(!0);
                                } else {

                                    t && t(!1),
                                        a.default.show(r.default.path, a.PopupCacheMode.Normal, {
                                            tipStr: String("Video Failed").toLocalize()
                                        });
                                }
                            }))
                        //     window.FBInstant
                        //         ? s.default.isRewardedVideoReady()
                        //             ? void s.default
                        //                 .showRewardedVideo()
                        //                 .then(function () {
                        //                     e.soundSwitch(), console.log("播放激励视频广告: 成功"), t && t(!0);
                        //                 })
                        //                 .catch(function (n) {
                        //                     e.soundSwitch(),
                        //                         console.log("播放激励视频广告: 失败，原因: " + n.message),
                        //                         t && t(!1),
                        //                         a.default.show(r.default.path, a.PopupCacheMode.Normal, {
                        //                             tipStr: "Video Failed"
                        //                         });
                        //                 })
                        //             : (this.soundSwitch(),
                        //                 console.log("视频没有准备好"),
                        //                 void a.default.show(r.default.path, a.PopupCacheMode.Normal, {
                        //                     tipStr: "Video Failed"
                        //                 }))
                        //         : (this.soundSwitch(), t && t(!0), void console.log("视频广告成功"))
                        // );
                    }),
                    (t.soundSwitch = function () {
                        o.default.inst.musicSwitch.val && (cc.audioEngine.resumeAll(), cc.audioEngine.setMusicVolume(1));
                    }),
                    (t.showInsert = function () {
                        window.FBInstant &&
                            s.default.isInterstitialAdReady() &&
                            s.default
                                .showInterstitialAd()
                                .then(function () { })
                                .catch(function () { });
                    }),
                    (t.showBanner = function () {
                        console.log("【showBanner】"),
                            window.FBInstant &&
                            s.default
                                .showBannerAsync()
                                .then(function () { })
                                .catch(function () { });
                    }),
                    (t.hideBanner = function () {
                        window.FBInstant &&
                            s.default
                                .hideBannerAsync()
                                .then(function () {
                                    console.log("隐藏Banner广告: 成功");
                                })
                                .catch(function () {
                                    console.log("隐藏Banner广告: 失败，原因: ");
                                });
                    }),
                    (t.share = function () {
                        console.log("分享"),
                            window.FBInstant &&
                            FBInstant.shareAsync({
                                intent: "SHARE",
                                image: window.fbImage,
                                text: "happy games!",
                                data: {}
                            }).then(function () { });
                    }),
                    (t.createMyFavorite = function (t) {
                        (this.getUserPlayNum() <= 1 && this.isNewDay()) ||
                            (window.FBInstant &&
                                FBInstant.canCreateShortcutAsync()
                                    .then(function (e) {
                                        e
                                            ? FBInstant.createShortcutAsync()
                                                .then(function () {
                                                    t && t(!0);
                                                })
                                                .catch(function () {
                                                    t && t(!1);
                                                })
                                            : t && t(!1);
                                    })
                                    .catch(function () {
                                        t && t(!1);
                                    }));
                    }),
                    (t.messengerAD = function (t) {
                        (this.getUserPlayNum() <= 1 && this.isNewDay()) ||
                            (window.FBInstant &&
                                FBInstant.player.canSubscribeBotAsync().then(function (e) {
                                    console.log("canSubscribeBotAsync " + e),
                                        e
                                            ? FBInstant.player
                                                .subscribeBotAsync()
                                                .then(function () {
                                                    t && t(!0), console.log("Player is subscribed to the bot");
                                                })
                                                .catch(function () {
                                                    t && t(!1), console.log("Handle subscription failure");
                                                })
                                            : t && t(!1);
                                }));
                    }),
                    __decorate([l], t)
                );
            })());
n.default = p;
