var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("BannerBase"),
    r = t("State"),
    s = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return e.create(e.adUnitID), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onResize = function (t) {
                gm.log("banner onResize", t);
                var e = wx.getSystemInfoSync();
                console.log(JSON.stringify(e));
                var n = e.screenHeight - e.safeArea.bottom;
                gm.log("onResize dh : " + n),
                    this.setStyle({top: e.screenHeight - t.height - n, width: 300, left: (e.screenWidth - 300) / 2});
            }),
            (e.prototype.setStyle = function (t) {
                t &&
                    (gm.info("setStyle : " + JSON.stringify(t)),
                    t.left && (this.instance.style.left = t.left),
                    t.top && (this.instance.style.top = t.top),
                    t.width && (this.instance.style.width = t.width),
                    t.height && (this.instance.style.height = t.height),
                    t.realWidth && (this.instance.style.realWidth = t.realWidth),
                    t.realHeight && (this.instance.style.realHeight = t.realHeight));
            }),
            (e.prototype.reLoad = function () {
                var t = this,
                    e = setTimeout(function () {
                        t.create(t.adUnitID), clearTimeout(e);
                    }, 8e3);
            }),
            (e.prototype.open = function () {
                this.state != r.AdState.open &&
                    this.loadState != r.AdLoadState.loading &&
                    (this.loadState != r.AdLoadState.loadSucess
                        ? ((this.loadState = r.AdLoadState.loading), this.show())
                        : this.show());
            }),
            (e.prototype.close = function () {
                this.state != r.AdState.close && this.instance && this.hide();
            }),
            (e.prototype.show = function () {
                var t = this;
                (this.state = r.AdState.open),
                    this.instance &&
                        this.instance
                            .show()
                            .then(function () {})
                            .catch(function (e) {
                                (t.state = r.AdState.close), gm.err("WxBanner err :" + JSON.stringify(e));
                            });
            }),
            (e.prototype.hide = function () {
                (this.state = r.AdState.close), this.instance && this.instance.hide();
            }),
            (e.prototype.destroy = function () {
                this.instance &&
                    (this.instance.offLoad(this.onLoad.bind(this)),
                    this.instance.offError(this.onError.bind(this)),
                    this.instance.offResize(this.onResize.bind(this)),
                    this.instance.destroy(),
                    (this.instance = null));
            }),
            (e.prototype.create = function (t) {
                gm.log("WxBanner adID: " + t);
                var e = wx.getSystemInfoSync();
                this.instance ||
                    ((this.instance = wx.createBannerAd({
                        adUnitId: t,
                        adIntervals: 30,
                        style: {left: 0, top: e.screenHeight - 120, width: e.screenWidth, height: 120}
                    })),
                    this.instance.onLoad(this.onLoad.bind(this)),
                    this.instance.onError(this.onError.bind(this)),
                    this.instance.onResize(this.onResize.bind(this)));
            }),
            (e.prototype.onError = function (t) {
                gm.log("banner onError", t), (this.loadState = r.AdLoadState.loadFail), this.reLoad();
            }),
            (e.prototype.onLoad = function () {
                gm.log("banner onLoad"), (this.loadState = r.AdLoadState.loadSucess);
            }),
            e
        );
    })(a.BannerBase);
n.default = s;
