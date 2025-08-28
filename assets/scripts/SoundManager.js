var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("BundleManager"),
    s = t("DataManager"),
    c = t("MSingleton"),
    l = cc._decorator,
    p = l.ccclass,
    u =
        (l.property,
        function () {
            (this.name = ""), (this.id = -1), (this.audioClip = null);
        }),
    d = (function (t) {
        function e() {
            var e = t.call(this) || this;
            return (e.effectMap = {}), (e.audioMap = {}), e;
        }
        return (
            __extends(e, t),
            (e.prototype.init = function () {
                var t = this;
                r.default.inst.preloadDir("Music", "effect/", cc.AudioClip, function (e) {
                    for (var n = 0, i = e; n < i.length; n++) {
                        var o = i[n],
                            a = new u();
                        (a.audioClip = o), (a.name = o.name), (t.effectMap[o.name] = a);
                    }
                }),
                    s.default.inst.musicSwitch.bindObserveFunc(function (e) {
                        t.switchMusic(e);
                    }, this),
                    this.switchMusic(s.default.inst.musicSwitch.val);
            }),
            (e.prototype.switchMusic = function (t) {
                t ? this.resumeMusic() : this.pauseMusic();
            }),
            (e.prototype.pauseMusic = function () {
                cc.audioEngine.setMusicVolume(0);
            }),
            (e.prototype.resumeMusic = function () {
                cc.audioEngine.setMusicVolume(1);
            }),
            (e.prototype.playMusic = function (t) {
                r.default.inst.loadRes("Music", t, cc.AudioClip, function (t) {
                    cc.audioEngine.playMusic(t, !0);
                });
            }),
            (e.prototype.playEffect = function (t) {
                var e = this;
                if (s.default.inst.musicSwitch.val)
                    return this.audioMap[t]
                        ? cc.audioEngine.playEffect(this.audioMap[t], !1)
                        : (r.default.inst.loadRes("Music", "effect/" + t, cc.AudioClip, function (t) {
                              var n = new u();
                              (n.audioClip = t),
                                  (n.name = t.name),
                                  (e.effectMap[t.name] = n),
                                  (e.audioMap[t.name] = t),
                                  (n.id = cc.audioEngine.playEffect(t, !1));
                          }),
                          null);
            }),
            (e.prototype.preloadEffect = function (t) {
                var e = this;
                r.default.inst.loadRes("Music", t, cc.AudioClip, function (n) {
                    e.effectMap[t] = n;
                });
            }),
            __decorate([p], e)
        );
    })(c.Singleton());
n.default = d;
