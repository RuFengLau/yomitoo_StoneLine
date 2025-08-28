var t = require;
var e = module;
var n = exports;
Object.defineProperty(n, "__esModule", {value: !0}), (n.PopupCacheMode = n.PopupShowResult = void 0);
var a,
    r,
    s = t("PopupBase"),
    c = (function () {
        function t() {}
        return (
            Object.defineProperty(t, "prefabMap", {
                get: function () {
                    return this._prefabMap;
                },
                enumerable: !1,
                configurable: !0
            }),
            Object.defineProperty(t, "nodeMap", {
                get: function () {
                    return this._nodeMap;
                },
                enumerable: !1,
                configurable: !0
            }),
            (t.show = function (e, n, c, l) {
                var p = this;
                if (
                    (void 0 === n && (n = r.Normal),
                    void 0 === c && (c = null),
                    void 0 === l && (l = !1),
                    !t.loadMap[e])
                )
                    return (
                        (t.loadMap[e] = !0),
                        new Promise(function (r) {
                            return __awaiter(p, void 0, void 0, function () {
                                var i,
                                    p,
                                    u = this;
                                return __generator(this, function (o) {
                                    switch (o.label) {
                                        case 0:
                                            return (
                                                (i = this.getNodeFromCache(e)),
                                                cc.isValid(i)
                                                    ? [3, 2]
                                                    : (console.log("-------------------进来了吗"),
                                                      l || (this.loadStartCallback && this.loadStartCallback()),
                                                      [
                                                          4,
                                                          new Promise(function (n) {
                                                              if (e.startsWith("ab:")) {
                                                                  var o = e.replace("ab:", ""),
                                                                      a = o.split("/")[0],
                                                                      r = o.replace(a + "/", "");
                                                                  console.log("path:", e),
                                                                      console.log("folderName:", a),
                                                                      console.log("abResPath:", r),
                                                                      cc.assetManager.loadBundle(a, function (o, a) {
                                                                          o
                                                                              ? cc.log(o)
                                                                              : a.load(r, cc.Prefab, function (o, a) {
                                                                                    o
                                                                                        ? cc.log(o)
                                                                                        : ((i = cc.instantiate(a)),
                                                                                          a.addRef(),
                                                                                          u._prefabMap.set(e, a),
                                                                                          (t.loadMap[e] = !1),
                                                                                          n(a));
                                                                                });
                                                                      });
                                                              } else
                                                                  cc.resources.load(e, function (o, a) {
                                                                      o ||
                                                                          ((i = cc.instantiate(a)),
                                                                          a.addRef(),
                                                                          u._prefabMap.set(e, a)),
                                                                          (t.loadMap[e] = !1),
                                                                          n(a);
                                                                  });
                                                          })
                                                      ])
                                            );
                                        case 1:
                                            o.sent(), (o.label = 2);
                                        case 2:
                                            return (
                                                (t.loadMap[e] = !1),
                                                cc.isValid(i)
                                                    ? (i.setParent(cc.Canvas.instance.node),
                                                      (p = i.getComponent(s.default)),
                                                      this.pushPopupData(e, c, p),
                                                      p
                                                          ? ((p.isRecycle = !1),
                                                            p.setFinishCallback(function () {
                                                                (p.isRecycle = !0),
                                                                    u.recycle(e, i, n),
                                                                    r(a.Done),
                                                                    u._popupDataMap.get(e).pop();
                                                            }),
                                                            p.show(c))
                                                          : ((i.active = !0), r(a.Dirty)),
                                                      l || (this.loadFinishCallback && this.loadFinishCallback()),
                                                      [2])
                                                    : (cc.warn("[PopupManager]", "弹窗加载失败", e), [2, r(a.Fail)])
                                            );
                                    }
                                });
                            });
                        })
                    );
            }),
            (t.pushPopupData = function (t, e, n) {
                this._popupDataMap.has(t) || this._popupDataMap.set(t, []),
                    this._popupDataMap.get(t).push({options: e, popup: n});
            }),
            (t.getNodeFromCache = function (t) {
                if (this._nodeMap.has(t)) {
                    var e = this._nodeMap.get(t);
                    if (cc.isValid(e)) return e;
                    this._nodeMap.delete(t);
                }
                if (this._prefabMap.has(t)) {
                    var n = this._prefabMap.get(t);
                    if (cc.isValid(n)) return cc.instantiate(n);
                    this._prefabMap.delete(t);
                }
                return null;
            }),
            (t.recycle = function (t, e, n) {
                switch ((console.log("recycle : " + t), n)) {
                    case r.Once:
                        e.destroy(), this._nodeMap.has(t) && this._nodeMap.delete(t), this.release(t);
                        break;
                    case r.Normal:
                        e.destroy(), this._nodeMap.has(t) && this._nodeMap.delete(t);
                        break;
                    case r.Frequent:
                        cc.isValid(e.parent) && e.removeFromParent(!1), this._nodeMap.has(t) || this._nodeMap.set(t, e);
                }
            }),
            (t.release = function (t) {
                var e = this._prefabMap.get(t);
                e && (this._prefabMap.delete(t), e.decRef(), (e = null));
            }),
            (t.getFirstShowPopup = function (t) {
                return this.isPopupShow(t) ? this.getShowPopup(t)[0].popup : null;
            }),
            (t.getShowPopup = function (t) {
                return this.isPopupShow(t) ? this._popupDataMap.get(t) : null;
            }),
            (t.closePopup = function (t) {
                if (!this.isPopupShow(t)) return !1;
                var e = this.getShowPopup(t);
                if (e)
                    for (var n = 0, i = e; n < i.length; n++) {
                        var o = i[n];
                        o && o.popup.hide();
                    }
            }),
            (t.isPopupShow = function (e) {
                return !!t.loadMap[e] || (!!this._popupDataMap.has(e) && this._popupDataMap.get(e).length > 0);
            }),
            (t.closeOtherPopups = function (t) {
                for (var e = 0, n = t; e < n.length; e++) {
                    var i = n[e];
                    if (this._popupDataMap.has(i))
                        for (var o = 0, a = this._popupDataMap.get(i); o < a.length; o++) a[o].popup.hide();
                }
            }),
            (t._prefabMap = new Map()),
            (t._nodeMap = new Map()),
            (t._popupDataMap = new Map()),
            (t.loadMap = {}),
            (t.loadStartCallback = null),
            (t.loadFinishCallback = null),
            t
        );
    })();
(n.default = c),
    (function (t) {
        (t[(t.Done = 1)] = "Done"),
            (t[(t.Fail = 2)] = "Fail"),
            (t[(t.Wait = 3)] = "Wait"),
            (t[(t.Dirty = 4)] = "Dirty");
    })((a = n.PopupShowResult || (n.PopupShowResult = {}))),
    (function (t) {
        (t[(t.Once = 1)] = "Once"), (t[(t.Normal = 2)] = "Normal"), (t[(t.Frequent = 3)] = "Frequent");
    })((r = n.PopupCacheMode || (n.PopupCacheMode = {})));
