var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("RewardVideoBase"),
    r = t("State"),
    s = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.instance = null), e.create(e.adUnitID), e;
        }
        return (
            __extends(e, t),
            (e.prototype.open = function (t) {
                if (this.state != r.AdState.open && this.loadState != r.AdLoadState.loading) {
                    if (this.loadState == r.AdLoadState.loadSucess) return (this.videoCallback = t), void this.show();
                    (this.loadState = r.AdLoadState.loading), this.show();
                }
            }),
            (e.prototype.isAdReady = function () {
                return this.loadState == r.AdLoadState.loadSucess;
            }),
            (e.prototype.onError = function () {
                (this.loadState = r.AdLoadState.loadFail),
                    this.videoCallback && this.videoCallback(a.VideoResultState.Fail);
            }),
            (e.prototype.onLoad = function () {
                gm.log("视频加载成功 "), (this.loadState = r.AdLoadState.loadSucess);
            }),
            (e.prototype.onClose = function (e) {
                t.prototype.onClose.call(this, e),
                    (this.state = r.AdState.close),
                    (e && e.isEnded) || void 0 === e
                        ? (gm.log("视频结束关闭 "),
                          this.videoCallback && this.videoCallback(a.VideoResultState.Success))
                        : (gm.log("视频中途关闭 "), this.videoCallback && this.videoCallback(a.VideoResultState.Fail));
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.offClose(this.onClose.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                this.instance ||
                    ((this.instance = wx.createRewardedVideoAd({adUnitId: t})),
                    this.instance.onLoad(this.onLoad.bind(this)),
                    this.instance.onError(this.onError.bind(this)),
                    this.instance.onClose(this.onClose.bind(this)));
            }),
            (e.prototype.show = function () {
                var e = this;
                t.prototype.show.call(this),
                    this.instance
                        .show()
                        .then(function () {
                            (e.state = r.AdState.open), gm.log("激励视频展示成功");
                        })
                        .catch(function () {
                            gm.log(" show  激励视频 播放失败重试"),
                                e.instance
                                    .load()
                                    .then(function () {
                                        (e.state = r.AdState.open), e.instance.show();
                                    })
                                    .catch(function (t) {
                                        gm.log(" 激励视频重试失败 err ", t), (e.state = r.AdState.close);
                                    });
                        });
            }),
            e
        );
    })(a.default);
n.default = s;
