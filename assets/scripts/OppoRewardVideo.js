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
                if (this.state != r.AdState.open && this.loadState != r.AdLoadState.loading)
                    return this.loadState == r.AdLoadState.loadSucess
                        ? ((this.videoCallback = t), void this.show())
                        : void (this.loadState != r.AdLoadState.loadFail
                              ? this.show()
                              : t && t(a.VideoResultState.Fail));
            }),
            (e.prototype.isAdReady = function () {
                return this.loadState == r.AdLoadState.loadSucess;
            }),
            (e.prototype.onError = function () {
                (this.loadState = r.AdLoadState.loadFail), this.reLoad();
            }),
            (e.prototype.reLoad = function () {
                var t = this,
                    e = setTimeout(function () {
                        t.load(), clearTimeout(e);
                    }, 1e4);
            }),
            (e.prototype.load = function () {
                this.loadState != r.AdLoadState.loading &&
                    (gm.log(" OppoRewardVideo load"),
                    (this.loadState = r.AdLoadState.loading),
                    this.instance && this.instance.load && this.instance.load());
            }),
            (e.prototype.onLoad = function () {
                gm.log("OppoRewardVideo onLoad"), (this.loadState = r.AdLoadState.loadSucess);
            }),
            (e.prototype.onClose = function (t) {
                this.state != r.AdState.close &&
                    ((this.state = r.AdState.close),
                    gm.log("OppoRewardVideo onClose"),
                    (t && t.isEnded) || void 0 === t
                        ? this.videoCallback && this.videoCallback(a.VideoResultState.Success)
                        : this.videoCallback && this.videoCallback(a.VideoResultState.Fail),
                    this.load());
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
                    ((this.instance = qg.createRewardedVideoAd({adUnitId: t})),
                    this.instance.onLoad(this.onLoad.bind(this)),
                    this.instance.onError(this.onError.bind(this)),
                    this.instance.onClose(this.onClose.bind(this))),
                    this.load();
            }),
            (e.prototype.show = function () {
                var t = this;
                (this.state = r.AdState.open),
                    this.instance
                        .show()
                        .then(function () {})
                        .catch(function () {
                            gm.log(" show  激励视频 播放失败重试"), t.load();
                        });
            }),
            e
        );
    })(a.default);
n.default = s;
