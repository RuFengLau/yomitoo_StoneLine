var t = require;
var e = module;
var n = exports;
var i, o, a;
function l(t) {
    var e = "NONE";
    switch (t) {
        case a.NEW:
            e = "NEW";
            break;
        case a.LOADING:
            e = "LOADING";
            break;
        case a.LOADED:
            e = "LOADED";
            break;
        case a.PLAYING:
            e = "PLAYING";
    }
    return e;
}
function p(t, e) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function () {
            return [
                2,
                new Promise(function (n) {
                    setTimeout(function () {
                        e && e(), n();
                    }, 1e3 * t);
                })
            ];
        });
    });
}
Object.defineProperty(n, "__esModule", {value: !0}),
    (function (t) {
        (t[(t.INTERSTITIAL = 0)] = "INTERSTITIAL"),
            (t[(t.REWARDED_VIDEO = 1)] = "REWARDED_VIDEO"),
            (t[(t.BANNER = 2)] = "BANNER");
    })(o || (o = {})),
    (function (t) {
        (t[(t.NONE = 0)] = "NONE"),
            (t[(t.NEW = 1)] = "NEW"),
            (t[(t.LOADING = 2)] = "LOADING"),
            (t[(t.LOADED = 3)] = "LOADED"),
            (t[(t.PLAYING = 4)] = "PLAYING");
    })(a || (a = {}));
var u = {code: "EXCEED_MAX_AD_INSTANCE", message: "广告对象不允许超过 3"},
    d = {code: "NO_READY_AD_INSTANCE", message: "没有加载完毕的广告，或者广告播放太频繁"},
    h = {code: "NOT_READY_FOR_LOAD", message: "当前状态不允许再次加载"},
    f = {code: "AD_IS_LOADING", message: "广告正在加载"},
    y = {code: "NOT_READY_FOR_PLAYING", message: "没有可以播放的广告"},
    v = {code: "AD_IS_PLAYING", message: "广告正在播放"},
    g = {code: "NO_BANNER_AD", message: "没有添加Banner广告"},
    m = {code: "API_NOT_SUPPORT", message: "广告接口不支持"},
    b = {code: "TOO_FAST_SHOW", message: "广告播放太频繁"},
    S = {code: "NOT_PLAYING", message: "广告没有播放"},
    A = {code: "TOO_MANY_ERRORS", message: "太多错误, 停止操作"};
function w(t, e, n) {
    return t && void 0 !== t[e] ? t[e] : n;
}
var C = (function () {
        function t(t, e) {
            (this._lastShowTime = 0),
                (this._refreshInterval = 0),
                (this._refreshInterval = t > 0 ? t : 0),
                (this._lastShowTime = 0),
                e > 0 && (this._lastShowTime = Date.now() + 1e3 * e - 1e3 * this._refreshInterval);
        }
        return (
            (t.prototype.isReadyToRefresh = function () {
                return this.getNextRefreshInterval() <= 0;
            }),
            (t.prototype.getNextRefreshInterval = function () {
                var t = 0;
                if (this._refreshInterval > 0 && this._lastShowTime > 0) {
                    var e = Date.now();
                    t = this._refreshInterval - (e - this._lastShowTime) / 1e3;
                }
                return t;
            }),
            (t.prototype.updateLastShowTime = function () {
                this._lastShowTime = Date.now();
            }),
            t
        );
    })(),
    B = (function () {
        function t(t, e, n, i) {
            (this._maxLoadError = 0),
                (this._errorCounter = 0),
                (this._fatalError = !1),
                (this._sharedTimer = null),
                (this._adId = t),
                (this._state = a.NONE),
                (this._type = e),
                (this._sharedTimer = n),
                (this._fatalError = !1),
                console.assert(!!n, "sharedTimer is invalid", n),
                (this._maxLoadError = w(i, "maxLoadError", 0));
        }
        return (
            (t.prototype.getStateName = function () {
                return l(this._state);
            }),
            (t.prototype.getAdTypeName = function () {
                return this._type == o.INTERSTITIAL
                    ? "插屏广告"
                    : this._type == o.REWARDED_VIDEO
                    ? "激励视频广告"
                    : this._type == o.BANNER
                    ? "Banner"
                    : "UNKNOWN";
            }),
            (t.prototype.getInfo = function () {
                return "[" + this.getAdTypeName() + ":" + this._adId + ":" + this.getStateName() + "]";
            }),
            (t.prototype.isReadyToRefresh = function () {
                return this._sharedTimer.isReadyToRefresh();
            }),
            (t.prototype.getNextRefreshInterval = function () {
                return this._sharedTimer.getNextRefreshInterval();
            }),
            (t.prototype.updateLastShowTime = function () {
                this._sharedTimer.updateLastShowTime();
            }),
            (t.prototype.increaseErrorCounter = function () {
                this._errorCounter++;
            }),
            (t.prototype.resetErrorCounter = function () {
                this._errorCounter = 0;
            }),
            (t.prototype.setFatalError = function () {
                this._fatalError = !0;
            }),
            (t.prototype.isErrorTooMany = function () {
                return this._fatalError || (this._maxLoadError > 0 && this._errorCounter >= this._maxLoadError);
            }),
            t
        );
    })(),
    P = (function (t) {
        function e(e, n, i, o) {
            var a = t.call(this, e, n, i, o) || this;
            return (a._adInstance = null), (a._autoLoadOnPlay = w(o, "autoLoadOnPlay", !1)), a;
        }
        return (
            __extends(e, t),
            (e.prototype.loadAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e, n;
                    return __generator(this, function (i) {
                        switch (i.label) {
                            case 0:
                                return null != this._adInstance
                                    ? [3, 4]
                                    : this._state != a.NONE
                                    ? [3, 2]
                                    : ((this._state = a.NEW),
                                      console.log("获取广告对象: " + this.getInfo()),
                                      (t = this),
                                      [4, this.createAdInstanceAsync(this._adId)]);
                            case 1:
                                return (t._adInstance = i.sent()), [3, 3];
                            case 2:
                                return console.log("当前状态未满足加载条件, 正在获取广告对象: " + this.getInfo()), [2];
                            case 3:
                                return [3, 4];
                            case 4:
                                if (this._state != a.NEW)
                                    throw (
                                        (console.log("当前状态未满足加载条件: " + this.getInfo()),
                                        this._state == a.LOADING
                                            ? (console.log("广告正在加载中，不要重复加载" + this.getInfo()), f)
                                            : h)
                                    );
                                if (this.isErrorTooMany())
                                    throw (console.log("太多错误，停止加载: " + this.getInfo()), A);
                                i.label = 5;
                            case 5:
                                return (
                                    i.trys.push([5, 7, , 8]),
                                    (this._state = a.LOADING),
                                    console.log("开始加载广告: " + this.getInfo()),
                                    [4, this._adInstance.loadAsync()]
                                );
                            case 6:
                                return (
                                    i.sent(),
                                    (this._state = a.LOADED),
                                    this.resetErrorCounter(),
                                    console.log("广告加载成功: " + this.getInfo()),
                                    [2, !0]
                                );
                            case 7:
                                throw (
                                    ((e = i.sent()),
                                    console.error("广告加载失败: " + this.getInfo(), e),
                                    "ADS_NO_FILL" == e.code
                                        ? (console.error("广告无法填充，不再继续请求: " + this.getInfo()),
                                          this.setFatalError())
                                        : (this.increaseErrorCounter(),
                                          (this._state = a.NEW),
                                          (n = 10 * this._errorCounter + 1),
                                          console.log("延迟" + n + "秒后, 自动重新加载: " + this.getInfo()),
                                          p(n, this.loadAsync.bind(this))),
                                    e)
                                );
                            case 8:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.isReady = function () {
                return null != this._adInstance && this._state == a.LOADED;
            }),
            (e.prototype.showAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t;
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isReady())
                                    throw (
                                        (console.log("当前状态未满足播放条件: " + this.getInfo()),
                                        this._state == a.PLAYING ? v : y)
                                    );
                                if (!this.isReadyToRefresh())
                                    throw (
                                        (console.log(
                                            "播放太频繁，还需间隔" +
                                                this.getNextRefreshInterval() +
                                                " 秒: " +
                                                this.getInfo()
                                        ),
                                        b)
                                    );
                                e.label = 1;
                            case 1:
                                return (
                                    e.trys.push([1, 3, , 4]),
                                    (this._state = a.PLAYING),
                                    console.log("开始播放广告: " + this.getInfo()),
                                    [4, this._adInstance.showAsync()]
                                );
                            case 2:
                                return (
                                    e.sent(),
                                    console.log("播放广告完毕: " + this.getInfo()),
                                    (this._adInstance = null),
                                    (this._state = a.NONE),
                                    this.updateLastShowTime(),
                                    this._autoLoadOnPlay &&
                                        (console.log("延迟1秒后, 自动重新加载: " + this.getInfo()),
                                        p(1, this.loadAsync.bind(this))),
                                    [2, !0]
                                );
                            case 3:
                                throw (
                                    ((t = e.sent()),
                                    console.log("播放广告失败: " + this.getInfo(), t),
                                    "RATE_LIMITED" == t.code
                                        ? (this._state = a.LOADED)
                                        : ((this._adInstance = null),
                                          (this._state = a.NONE),
                                          this._autoLoadOnPlay &&
                                              (console.log("延迟1秒后, 自动重新加载: " + this.getInfo()),
                                              p(1, this.loadAsync.bind(this)))),
                                    t)
                                );
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            e
        );
    })(B),
    x = (function (t) {
        function e(e, n, i) {
            return t.call(this, e, o.INTERSTITIAL, n, i) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.createAdInstanceAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, FBInstant.getInterstitialAdAsync(this._adId)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            e
        );
    })(P),
    I = (function (t) {
        function e(e, n, i) {
            return t.call(this, e, o.REWARDED_VIDEO, n, i) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.createAdInstanceAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, FBInstant.getRewardedVideoAsync(this._adId)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            e
        );
    })(P),
    M = (function (t) {
        function e(e, n, i) {
            return t.call(this, e, o.BANNER, n, i) || this;
        }
        return (
            __extends(e, t),
            (e.prototype.showAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t;
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (!this.isReadyToRefresh())
                                    throw (
                                        (console.log(
                                            "播放太频繁，还需间隔" +
                                                this.getNextRefreshInterval() +
                                                " 秒: " +
                                                this.getInfo()
                                        ),
                                        b)
                                    );
                                if (this.isErrorTooMany())
                                    throw (console.log("太多错误，停止加载: " + this.getInfo()), A);
                                e.label = 1;
                            case 1:
                                return (
                                    e.trys.push([1, 3, , 4]),
                                    (this._state = a.PLAYING),
                                    console.log("开始显示广告: " + this.getInfo()),
                                    [4, FBInstant.loadBannerAdAsync(this._adId)]
                                );
                            case 2:
                                return (
                                    e.sent(),
                                    console.log("显示广告成功: " + this.getInfo()),
                                    this.updateLastShowTime(),
                                    this.resetErrorCounter(),
                                    [3, 4]
                                );
                            case 3:
                                throw (
                                    ((t = e.sent()),
                                    console.error("显示广告失败: " + this.getInfo(), t),
                                    "RATE_LIMITED" == t.code ||
                                        ("ADS_NO_FILL" == t.code
                                            ? (console.error("广告无法填充，不再继续请求: " + this.getInfo()),
                                              this.setFatalError())
                                            : this.increaseErrorCounter()),
                                    t)
                                );
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            (e.prototype.hideAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t;
                    return __generator(this, function (e) {
                        switch (e.label) {
                            case 0:
                                if (this._state != a.PLAYING)
                                    throw (console.log("广告没有在播放中: " + this.getInfo()), S);
                                e.label = 1;
                            case 1:
                                return (
                                    e.trys.push([1, 3, , 4]),
                                    console.log("隐藏广告: " + this.getInfo()),
                                    [4, FBInstant.hideBannerAdAsync()]
                                );
                            case 2:
                                return e.sent(), (this._state = a.NONE), [3, 4];
                            case 3:
                                throw ((t = e.sent()), console.error("隐藏广告失败: " + this.getInfo(), t), t);
                            case 4:
                                return [2];
                        }
                    });
                });
            }),
            e
        );
    })(B),
    O = (function () {
        function t() {}
        return (
            (t.getVersion = function () {
                return "1.0.2";
            }),
            (t.addInterstitial = function (t, e) {
                void 0 === e && (e = 3),
                    null == this._interstitialTimer &&
                        (this._interstitialTimer = new C(
                            this.defaultInterstitialTimerOption.refreshInterval,
                            this.defaultInterstitialTimerOption.delayForFirstAd
                        ));
                for (var n = 0; n < e; n++) {
                    if (this._interstitialAds.length >= 3)
                        throw (console.log("添加插屏广告失败, 超出限制: " + this._interstitialAds.length, t), u);
                    var i = new x(t, this._interstitialTimer, this.defaultInterstitialOption);
                    this._interstitialAds.push(i),
                        console.log("添加插屏广告: " + t, "count: " + this._interstitialAds.length);
                }
                return this._interstitialAds.length;
            }),
            (t.addRewardedVideo = function (t, e) {
                void 0 === e && (e = 3),
                    null == this._rewardedVideoTimer &&
                        (this._rewardedVideoTimer = new C(
                            this.defaultRewardedVideoTimerOption.refreshInterval,
                            this.defaultRewardedVideoTimerOption.delayForFirstAd
                        ));
                for (var n = 0; n < e; n++) {
                    if (this._rewardedVideos.length >= 3)
                        throw (console.log("添加激励视频广告失败, 超出限制: " + this._rewardedVideos.length, t), u);
                    var i = new I(t, this._rewardedVideoTimer, this.defaultRewardedVideoOption);
                    this._rewardedVideos.push(i),
                        console.log("添加激励视频广告: " + t, "count: " + this._rewardedVideos.length);
                }
                return this._rewardedVideos.length;
            }),
            (t.addBanner = function (t) {
                null == this._bannerTimer &&
                    (this._bannerTimer = new C(
                        this.defaultBannerTimerOption.refreshInterval,
                        this.defaultBannerTimerOption.delayForFirstAd
                    ));
                var e = new M(t, this._bannerTimer, this.defaultBannerOption);
                return this._banners.push(e), console.log("添加Banner广告: " + t, "count: " + this._banners.length), e;
            }),
            (t.loadAll = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return console.log("初始化广告队列"), [4, this.loadAllAsync()];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t.loadAllAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    var t, e;
                    return __generator(this, function (n) {
                        switch (n.label) {
                            case 0:
                                console.log("FBAdManager Version: " + this.getVersion()),
                                    console.log("初始化广告队列"),
                                    (t = 0),
                                    (n.label = 1);
                            case 1:
                                return t < this._rewardedVideos.length
                                    ? ((e = this._rewardedVideos[t]), t > 0 ? [4, p(0.1)] : [3, 3])
                                    : [3, 7];
                            case 2:
                                n.sent(), (n.label = 3);
                            case 3:
                                return n.trys.push([3, 5, , 6]), [4, e.loadAsync()];
                            case 4:
                            case 5:
                                return n.sent(), [3, 6];
                            case 6:
                                return t++, [3, 1];
                            case 7:
                                (t = 0), (n.label = 8);
                            case 8:
                                return t < this._interstitialAds.length
                                    ? ((e = this._interstitialAds[t]), t > 0 ? [4, p(0.1)] : [3, 10])
                                    : [3, 14];
                            case 9:
                                n.sent(), (n.label = 10);
                            case 10:
                                return n.trys.push([10, 12, , 13]), [4, e.loadAsync()];
                            case 11:
                            case 12:
                                return n.sent(), [3, 13];
                            case 13:
                                return t++, [3, 8];
                            case 14:
                                return [2];
                        }
                    });
                });
            }),
            (t._isAdReady = function (t) {
                for (
                    var e = t == o.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos, n = !1, i = 0;
                    i < e.length;
                    i++
                ) {
                    var a = e[i];
                    if (a.isReady() && a.isReadyToRefresh()) {
                        n = !0;
                        break;
                    }
                }
                return n;
            }),
            (t._showAsync = function (t) {
                for (
                    var e = t == o.INTERSTITIAL ? this._interstitialAds : this._rewardedVideos, n = null, i = 0;
                    i < e.length;
                    i++
                ) {
                    var a = e[i];
                    if (a.isReady() && a.isReadyToRefresh()) {
                        n = a;
                        break;
                    }
                }
                if (null != n) return n.showAsync();
                throw d;
            }),
            (t._getAdTimer = function (t) {
                return t == o.INTERSTITIAL
                    ? this._interstitialTimer
                    : t == o.REWARDED_VIDEO
                    ? this._rewardedVideoTimer
                    : this._bannerTimer;
            }),
            (t.isInterstitialAdReady = function () {
                return this._isAdReady(o.INTERSTITIAL);
            }),
            (t.showInterstitialAd = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._showAsync(o.INTERSTITIAL)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t.isRewardedVideoReady = function () {
                return this._isAdReady(o.REWARDED_VIDEO);
            }),
            (t.showRewardedVideo = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                return [4, this._showAsync(o.REWARDED_VIDEO)];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t.checkApiSupport = function (t) {
                return FBInstant.getSupportedAPIs().indexOf(t) >= 0;
            }),
            (t.isBannerSupport = function () {
                return (
                    void 0 === this._bannerSupport && (this._bannerSupport = this.checkApiSupport("loadBannerAdAsync")),
                    this._bannerSupport
                );
            }),
            (t.isBannerReady = function () {
                if (this._banners.length <= 0) throw g;
                return this._banners[0].isReadyToRefresh();
            }),
            (t.showBannerAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!this.isBannerSupport()) throw m;
                                if (this._banners.length <= 0) throw g;
                                return [4, this._banners[0].showAsync()];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t.hideBannerAsync = function () {
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (t) {
                        switch (t.label) {
                            case 0:
                                if (!this.isBannerSupport()) throw m;
                                if (this._banners.length <= 0) throw g;
                                return [4, this._banners[0].hideAsync()];
                            case 1:
                                return [2, t.sent()];
                        }
                    });
                });
            }),
            (t._interstitialAds = []),
            (t._rewardedVideos = []),
            (t._banners = []),
            (t._interstitialTimer = null),
            (t._rewardedVideoTimer = null),
            (t._bannerTimer = null),
            (t._bannerSupport = void 0),
            (t.defaultInterstitialOption = {autoLoadOnPlay: !0, maxLoadError: 3}),
            (t.defaultRewardedVideoOption = {autoLoadOnPlay: !0, maxLoadError: 3}),
            (t.defaultBannerOption = {autoLoadOnPlay: !0, maxLoadError: 1}),
            (t.defaultInterstitialTimerOption = {refreshInterval: 40, delayForFirstAd: 30}),
            (t.defaultRewardedVideoTimerOption = {refreshInterval: 0, delayForFirstAd: 0}),
            (t.defaultBannerTimerOption = {refreshInterval: 40, delayForFirstAd: 0}),
            t
        );
    })();
n.default = O;
