var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("DataManager"),
    s = t("PopupBase"),
    c = cc._decorator,
    l = c.ccclass,
    p = c.property,
    u = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.coinSprite = null), e;
        }
        var n;
        return (
            __extends(e, t),
            (n = e),
            Object.defineProperty(e, "path", {
                get: function () {
                    return "ab:CoinFlyPanel/Prefab/CoinFlyPanel";
                },
                enumerable: !1,
                configurable: !0
            }),
            (e.prototype.onLoad = function () {
                if (null == n.coinPool) {
                    n.coinPool = new cc.NodePool();
                    for (var t = 0; t < 10; t++) {
                        var e = cc.instantiate(this.coinSprite.node);
                        n.coinPool.put(e);
                    }
                }
            }),
            (e.prototype.updateDisplay = function (t) {
                var e = this;
                this.scheduleOnce(function () {
                    var n = t.coinNode,
                        i = n.parent.convertToWorldSpaceAR(n.position),
                        o = e.node.convertToNodeSpaceAR(i);
                    e.playCoinFlyAnim(t.count, t.stPos, cc.v2(o), t.callFunc);
                }, 0.1);
            }),
            (e.prototype.createCoin = function () {
                return n.coinPool.size() > 0 ? n.coinPool.get() : cc.instantiate(this.coinSprite.node);
            }),
            (e.prototype.playCoinFlyAnim = function (t, e, i, o, a) {
                var s = this;
                void 0 === a && (a = 130);
                var c = t;
                t > 100 && (c = Math.floor(t / 10)), c > 10 && (c = 10);
                var l = this.getCirclePoints(a, e, c).map(function (t) {
                    var n = s.createCoin();
                    return (
                        n.setPosition(e),
                        (n.active = !0),
                        s.node.addChild(n),
                        {node: n, stPos: e, mdPos: t, edPos: i, dis: t.sub(i).mag()}
                    );
                });
                l = l.sort(function (t, e) {
                    return t.dis - e.dis > 0 ? 1 : t.dis - e.dis < 0 ? -1 : 0;
                });
                var p = 0,
                    u = Math.floor(t / c),
                    d = t - u * c;
                (r.default.inst.coinNum.val += d),
                    l.forEach(function (t, e) {
                        cc.tween(t.node)
                            .to(0.3, {position: t.mdPos})
                            .delay(0.04 * e)
                            .to(0.5, {x: t.edPos.x, y: t.edPos.y})
                            .call(function () {
                                n.coinPool.put(t.node),
                                    p++,
                                    (r.default.inst.coinNum.val += u),
                                    p >= c && (o && o(), s.hide(), r.default.inst.saveCoin());
                            })
                            .start();
                    });
            }),
            (e.prototype.getCirclePoints = function (t, e, n, i) {
                void 0 === i && (i = 60);
                for (var o = [], a = (Math.PI / 180) * Math.round(360 / n), r = 0; r < n; r++) {
                    var s = e.x + t * Math.sin(a * r),
                        c = e.y + t * Math.cos(a * r);
                    o.unshift(cc.v3(s + Math.random() * i, c + Math.random() * i, 0));
                }
                return o;
            }),
            (e.coinPool = null),
            __decorate([p(cc.Sprite)], e.prototype, "coinSprite", void 0),
            (n = __decorate([l], e))
        );
    })(s.default);
n.default = u;
