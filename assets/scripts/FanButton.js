var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = cc._decorator,
    s = r.ccclass,
    c = r.property,
    l = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.cdSprite = null), (e.adSprite = null), (e.cdTime = 90), (e.curTime = 0), (e.progress = 0), e;
        }
        return (
            __extends(e, t),
            (e.prototype.start = function () {
                (this.curTime = 0), (this.progress = 0);
            }),
            (e.prototype.update = function (t) {
                this.progress >= 1
                    ? (this.adSprite.active = !1)
                    : ((this.adSprite.active = !0),
                      (this.curTime += t),
                      (this.progress = this.curTime / this.cdTime),
                      (this.cdSprite.fillRange = this.progress));
            }),
            (e.prototype.isCanUse = function () {
                var t = !1;
                return this.progress >= 1 && (t = !0), t;
            }),
            (e.prototype.cleanProgress = function () {
                (this.curTime = 0), (this.progress = 0), (this.cdSprite.fillRange = this.progress);
            }),
            __decorate([c(cc.Sprite)], e.prototype, "cdSprite", void 0),
            __decorate([c(cc.Node)], e.prototype, "adSprite", void 0),
            __decorate([s], e)
        );
    })(cc.Component);
n.default = l;
