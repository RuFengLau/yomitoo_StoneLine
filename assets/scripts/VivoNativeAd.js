var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("NativeAdBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = t("VivoNativeAdBind"),
    l = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (
                (e.nativeAdNode = null),
                (e.nativeAdBgNode = null),
                (e.nativeAdInstance = null),
                (e.timerLoopLoadCallFunc = null),
                (e.tempNativeAdInstance = null),
                e.create(e.adUnitID),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.open = function (t) {
                (this.nativeAdBgNode = t), this.loadState != r.AdLoadState.loading && this.show();
            }),
            (e.prototype.show = function () {
                if (this.state != r.AdState.open && this.isAdReady()) {
                    (this.state = r.AdState.open), (this.nativeAdNode.active = !0), (this.state = r.AdState.open);
                    var t = this.nativeAdBgNode.parent.convertToWorldSpaceAR(
                        cc.v2(this.nativeAdBgNode.x, this.nativeAdBgNode.y)
                    );
                    gm.info(
                        "nativeAdBgNode.width : " +
                            this.nativeAdBgNode.width +
                            "  nativeAdBgNode.height : " +
                            this.nativeAdBgNode.height
                    ),
                        gm.info("screenP.x : " + t.x + "  screenP.y : " + t.y),
                        (this.nativeAdNode.x = t.x),
                        (this.nativeAdNode.y = t.y),
                        (this.nativeAdNode.width = this.nativeAdBgNode.width),
                        (this.nativeAdNode.height = this.nativeAdBgNode.height),
                        (this.nativeAdNode.scale = this.nativeAdBgNode.scale),
                        this.nativeAdNode.getComponent(c.default).flushData(this);
                }
            }),
            (e.prototype.timerLoopLoad = function (t) {
                (this.timerLoopLoadCallFunc = t), this.load();
            }),
            (e.prototype.close = function () {
                (this.state = r.AdState.close),
                    this.nativeAdNode && (this.nativeAdNode.active = !1),
                    this.create(this.adUnitID);
            }),
            (e.prototype.isAdReady = function () {
                return !!this.nativeAdData;
            }),
            (e.prototype.load = function () {
                this.loadState != r.AdLoadState.loading && (gm.log(" VivoNativeAd load"), this.nativeAdInstance.load());
            }),
            (e.prototype.reLoad = function () {
                var t = this,
                    e = setTimeout(function () {
                        t.create(t.adUnitID), clearTimeout(e);
                    }, 5e3);
            }),
            (e.prototype.onError = function (t) {
                (this.loadState = r.AdLoadState.loadFail),
                    gm.err(" VivoNativeAd onError err : ", JSON.stringify(t)),
                    this.reLoad();
            }),
            (e.prototype.onLoad = function (t) {
                this.loadState = r.AdLoadState.loadSucess;
                var e = t.adList;
                if ((gm.info("VivoNativeAd onLoad ", JSON.stringify(e)), e.length <= 0))
                    return (
                        gm.err(" VivoNativeAd error adList length : ", e.length),
                        (this.loadState = r.AdLoadState.loadFail),
                        void this.reLoad()
                    );
                (this.nativeAdData = e[0]),
                    (this.nativeAdInstance = this.tempNativeAdInstance),
                    this.timerLoopLoadCallFunc && (this.timerLoopLoadCallFunc(), (this.timerLoopLoadCallFunc = null));
            }),
            (e.prototype.reportAdClick = function () {
                this.nativeAdInstance &&
                    (gm.log("VivoNativeAd reportAdClick ", this.nativeAdData.adId),
                    this.nativeAdInstance.reportAdClick({adId: this.nativeAdData.adId}));
            }),
            (e.prototype.reportAdShow = function () {
                this.nativeAdInstance &&
                    (gm.log("VivoNativeAd reportAdShow ", this.nativeAdData.adId),
                    this.nativeAdInstance.reportAdShow({adId: this.nativeAdData.adId}));
            }),
            (e.prototype.destroy = function () {
                (this.nativeAdData = null),
                    this.nativeAdInstance &&
                        (this.nativeAdInstance.offLoad(this.onLoad.bind(this)), (this.nativeAdInstance = null));
            }),
            (e.prototype.create = function (t) {
                var e = this;
                this.loadState != r.AdLoadState.loading &&
                    (this.destroy(),
                    gm.log("VivoNativeAd create : " + t),
                    (this.tempNativeAdInstance = qg.createNativeAd({adUnitId: t})),
                    this.tempNativeAdInstance.onLoad(this.onLoad.bind(this)),
                    this.tempNativeAdInstance.onError(this.onError.bind(this)),
                    (this.nativeAdInstance = this.tempNativeAdInstance),
                    this.load(),
                    this.nativeAdNode ||
                        s.default.inst.loadRes("GmRes", "Vivo/NativeAd/nativeAd", cc.Prefab, function (t) {
                            var n = cc.instantiate(t);
                            (e.nativeAdNode = n), (n.active = !1), cc.game.addPersistRootNode(n);
                        }));
            }),
            e
        );
    })(a.default);
n.default = l;
