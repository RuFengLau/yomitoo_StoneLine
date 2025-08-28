var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0}), (n.GameBallState = n.GameBallType = void 0);
var r,
    s = t("BallConfig"),
    c = t("SpineHelper"),
    l = t("BundleManager"),
    p = t("SoundManager"),
    u = cc._decorator,
    d = u.ccclass,
    h = u.property;
(function (t) {
    (t[(t.Normal = 0)] = "Normal"), (t[(t.Pka = 1)] = "Pka");
})(n.GameBallType || (n.GameBallType = {})),
    (function (t) {
        (t[(t.Select = 0)] = "Select"), (t[(t.UnSelect = 1)] = "UnSelect");
    })((r = n.GameBallState || (n.GameBallState = {})));
var f = (function (t) {
    function e() {
        var e = (null !== t && t.apply(this, arguments)) || this;
        return (
            (e.bgSprite = null),
            (e.numLabel = null),
            (e.lightNode = null),
            (e.tipsNode = null),
            (e.sgSpine = null),
            (e.state = r.UnSelect),
            (e.tipsState = !1),
            (e.gameBallData = null),
            (e.originGameBallData = null),
            (e.ballContactList = []),
            (e.selectIndex = -1),
            (e.radius = 50),
            (e.bCanTouch = !0),
            (e.rigidBody = null),
            (e.isEnd = !1),
            e
        );
    }
    var n;
    return (
        __extends(e, t),
        (n = e),
        (e.prototype.onLoad = function () {
            (this.rigidBody = this.node.getComponent(cc.RigidBody)), (this.radius = this.node.width / 2);
        }),
        (e.prototype.onDestroy = function () {
            this.isEnd = !0;
        }),
        (e.prototype.setData = function (t) {
            var e = this;
            (this.gameBallData = t),
                (this.originGameBallData = {num: t.num}),
                (this.numLabel.string = t.num.toString()),
                l.default.inst.loadRes("GamePanel", "Images/Balls/bs_" + t.num, cc.SpriteFrame, function (t) {
                    !e.isEnd && e.bgSprite && (e.bgSprite.spriteFrame = t);
                }),
                this.setBallState(r.UnSelect),
                this.setTips(!1);
        }),
        (e.prototype.checkInBall = function (t) {
            if (!this.bCanTouch) return !1;
            if (!this.node.parent) return !1;
            var e = this.node.parent.convertToNodeSpaceAR(t);
            return cc.v2(this.node.position).sub(e).len() <= this.radius;
        }),
        (e.prototype.checkSameBall = function (t) {
            return this.gameBallData.num == t.gameBallData.num;
        }),
        (e.prototype.checkInContactList = function (t) {
            for (var e = 0, n = this.ballContactList; e < n.length; e++) if (n[e] == t) return !0;
            return !1;
        }),
        (e.prototype.setBallState = function (t) {
            switch (((this.state = t), t)) {
                case r.Select:
                    (this.lightNode.active = !0), p.default.inst.playEffect("electricity"), (this.tipsNode.active = !1);
                    break;
                case r.UnSelect:
                    (this.selectIndex = -1),
                        (this.lightNode.active = !1),
                        this.tipsState && (this.tipsNode.active = !0);
            }
        }),
        (e.prototype.setTips = function (t) {
            (this.tipsState = t),
                this.state != r.Select && this.tipsState ? (this.tipsNode.active = !0) : (this.tipsNode.active = !1);
        }),
        (e.prototype.setBgColor = function (t) {
            void 0 === t && (t = null),
                t || (t = s.default[this.gameBallData.num].color),
                (this.bgSprite.node.color = t);
        }),
        (e.prototype.unuse = function () {
            console.log("GameBall unuse~~~~");
        }),
        (e.prototype.reuse = function () {
            console.log("GameBall reuse~~~~");
        }),
        (e.prototype.ballTouchStart = function () {
            for (var t = 0, e = this.ballContactList; t < e.length; t++) e[t].setBgColor(cc.Color.RED);
        }),
        (e.prototype.ballTouchEnd = function () {
            for (var t = 0, e = this.ballContactList; t < e.length; t++) e[t].setBgColor();
        }),
        (e.prototype.playSgAn = function () {
            var t = this;
            this.scheduleOnce(function () {
                t.sgSpine.playAn("animation", 1);
            }, 0.5);
        }),
        (e.prototype.windEffect = function () {
            this.sgSpine.playAn("animation", 1);
        }),
        (e.prototype.applyLinearImpulse = function (t) {
            this.rigidBody.applyLinearImpulse(t, this.rigidBody.getWorldCenter(), !0);
        }),
        (e.prototype.onCollisionEnter = function (t) {
            var e = t.node.getComponent(n);
            if (e && !(this.ballContactList.indexOf(e) >= 0)) {
                this.ballContactList.push(e);
                var i = e.getLinearVelocity();
                (i.x = -i.x), (i.y = -i.y);
                var o = this.getLinearVelocity().add(i).magSqr() / 1e6;
                if (o > 0.15) {
                    var a = p.default.inst.playEffect("ding" + n.dingIndex);
                    n.dingIndex++,
                        n.dingIndex > 5 && (n.dingIndex = 1),
                        null != a && o > 0 && cc.audioEngine.setVolume(a, o);
                }
            }
        }),
        (e.prototype.onCollisionStay = function () {}),
        (e.prototype.onCollisionExit = function (t) {
            var e = t.node.getComponent(n);
            e && this.ballContactList.remove(e);
        }),
        (e.prototype.getLinearVelocity = function () {
            return this.rigidBody.linearVelocity;
        }),
        (e.dingIndex = 1),
        __decorate([h(cc.Sprite)], e.prototype, "bgSprite", void 0),
        __decorate([h(cc.Label)], e.prototype, "numLabel", void 0),
        __decorate([h(cc.Node)], e.prototype, "lightNode", void 0),
        __decorate([h(cc.Node)], e.prototype, "tipsNode", void 0),
        __decorate([h(c.default)], e.prototype, "sgSpine", void 0),
        (n = __decorate([d], e))
    );
})(cc.Component);
n.default = f;
