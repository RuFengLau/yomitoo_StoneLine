var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var a = t("RewardVideoBase"),
    r = t("State"),
    s = t("GmBundleManager"),
    c = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.rewardVideoNode = null), e.create(e.adUnitID), e;
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
                    this.videoCallback(e),
                    (this.rewardVideoNode.active = !1);
            }),
            (e.prototype.destroy = function () {}),
            (e.prototype.create = function () {
                var t = this;
                (this.loadState = r.AdLoadState.loading),
                    s.default.inst.loadRes("GmRes", "Win/RewardVideo/rewardVideo", cc.Prefab, function (e) {
                        var n = cc.instantiate(e);
                        (t.rewardVideoNode = n),
                            (t.loadState = r.AdLoadState.loadSucess),
                            (n.active = !1),
                            cc.game.addPersistRootNode(n),
                            n.getChildByName("successButton").on(cc.Node.EventType.TOUCH_END, function () {
                                t.onClose(a.VideoResultState.Success);
                            }),
                            n.getChildByName("failButton").on(cc.Node.EventType.TOUCH_END, function () {
                                t.onClose(a.VideoResultState.Fail);
                            }),
                            n.getChildByName("closeButton").on(cc.Node.EventType.TOUCH_END, function () {
                                t.onClose(a.VideoResultState.Close);
                            }),
                            (n.x = cc.winSize.width / 2),
                            (n.y = cc.winSize.height / 2);
                    });
            }),
            (e.prototype.show = function () {
                t.prototype.show.call(this), (this.state = r.AdState.open), (this.rewardVideoNode.active = !0);
            }),
            e
        );
    })(a.default);
n.default = c;
