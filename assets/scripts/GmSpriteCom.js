var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBaseCom"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = (s.executeInEditMode, s.inspector),
    u = (s.requireComponent, s.menu),
    d =
        (s.disallowMultiple,
        (function () {
            function t() {
                (this.key = ""), (this.val = "");
            }
            return (
                __decorate([l()], t.prototype, "key", void 0),
                __decorate([l()], t.prototype, "val", void 0),
                __decorate([c("GmSpriteComKv")], t)
            );
        })()),
    h = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (
                (e.table_enable = !1),
                (e.table_type = "string"),
                (e.dynamic_enable = !1),
                (e.string_normal_list = []),
                (e.string_dynamic_list = []),
                (e.int_normal_list = []),
                (e.int_dynamic_list = []),
                (e.boolean_normal_true = ""),
                (e.boolean_normal_false = ""),
                (e.boolean_dynamic_true = ""),
                (e.boolean_dynamic_false = ""),
                e
            );
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                (this.com_type = "cc.Sprite"), (this.modifycontrol_enable_show = !1), t.prototype.onLoad.call(this);
            }),
            (e.prototype.comListenerFunc = function (e, n, i, o) {
                t.prototype.comListenerFunc.call(this, e, n, i, o);
                var a = new Map();
                if ((a.set(this.compare_index, o), a.set(this.compare_len, this.coms.length), this.more_enable)) {
                    var r = this.coms[o];
                    this.controlSprite(r, i);
                } else this.controlSprite(this.com, i);
            }),
            (e.prototype.controlSprite = function (t, e) {
                if (t) {
                    var n = null;
                    if (this.table_enable) {
                        switch (this.table_type) {
                            case "string":
                                if (this.dynamic_enable) {
                                    for (var i = 0, o = this.string_dynamic_list; i < o.length; i++)
                                        if (e == (s = o[i]).key) {
                                            n = s.val;
                                            break;
                                        }
                                } else
                                    for (var a = 0, r = this.string_normal_list; a < r.length; a++) {
                                        var s;
                                        if (e == (s = r[a]).key) {
                                            n = s.val;
                                            break;
                                        }
                                    }
                                break;
                            case "int":
                                var c = parseInt(e);
                                n = this.dynamic_enable ? this.int_dynamic_list[c] : this.int_normal_list[c];
                                break;
                            case "boolean":
                                n = this.dynamic_enable
                                    ? e
                                        ? this.boolean_dynamic_true
                                        : this.boolean_dynamic_false
                                    : e
                                    ? this.boolean_normal_true
                                    : this.boolean_normal_false;
                        }
                        null != n &&
                            "" != n &&
                            (this.dynamic_enable
                                ? n.startsWith("ab:")
                                    ? this.loadAbImage(t, n)
                                    : cc.resources.load(n, cc.SpriteFrame, function (e, n) {
                                          e ? (cc.log("没有找到资源！"), cc.log(e)) : (t.spriteFrame = n);
                                      })
                                : cc.assetManager.loadAny([{uuid: n}], function (e, n) {
                                      t.spriteFrame = n;
                                  }));
                    } else
                        e instanceof cc.SpriteFrame
                            ? (t.spriteFrame = e)
                            : e instanceof cc.Texture2D
                            ? (t.spriteFrame = new cc.SpriteFrame(e))
                            : "string" == typeof e &&
                              (e.startsWith("ab:")
                                  ? this.loadAbImage(t, e)
                                  : e.startsWith("https:") || e.startsWith("http:")
                                  ? cc.assetManager.loadRemote(e, function (e, n) {
                                        e ? cc.log(e) : (t.spriteFrame = new cc.SpriteFrame(n));
                                    })
                                  : cc.resources.load(e.toString(), cc.SpriteFrame, function (e, n) {
                                        e ? (cc.log("没有找到资源！"), cc.log(e)) : (t.spriteFrame = n);
                                    }));
                }
            }),
            (e.prototype.loadAbImage = function (t, e) {
                var n = e.replace("ab:", ""),
                    i = n.split("/")[0];
                (n = n.replace(i + "/", "")),
                    cc.assetManager.loadBundle(i, function (e, i) {
                        e
                            ? cc.log(e)
                            : i.load(n, cc.SpriteFrame, function (e, n) {
                                  e ? cc.log(e) : (t.spriteFrame = n);
                              });
                    });
            }),
            (e.prototype.setTableEnable = function (t) {
                this.table_enable = t;
            }),
            (e.prototype.setTableType = function (t) {
                this.table_type = t;
            }),
            (e.prototype.setDynamicEnable = function (t) {
                this.dynamic_enable = t;
            }),
            (e.prototype.addStringDynamic = function () {
                this.string_dynamic_list.push(new d());
            }),
            (e.prototype.setStringDynamicKey = function (t, e) {
                this.string_dynamic_list[e].key = t;
            }),
            (e.prototype.setStringDynamicVal = function (t, e) {
                this.string_dynamic_list[e].val = t;
            }),
            (e.prototype.removeStringDynamic = function (t) {
                this.string_dynamic_list.splice(t, 1);
            }),
            (e.prototype.removeAllStringDynamic = function () {
                this.string_dynamic_list = [];
            }),
            (e.prototype.addStringNormal = function () {
                this.string_normal_list.push(new d());
            }),
            (e.prototype.setStringNormalKey = function (t, e) {
                this.string_normal_list[e].key = t;
            }),
            (e.prototype.setStringNormalVal = function (t, e) {
                this.string_normal_list[e].val = t;
            }),
            (e.prototype.removeStringNormal = function (t) {
                this.string_normal_list.splice(t, 1);
            }),
            (e.prototype.removeAllStringNormal = function () {
                this.string_normal_list = [];
            }),
            (e.prototype.addIntDynamic = function () {
                this.int_dynamic_list.push("");
            }),
            (e.prototype.setIntDynamicVal = function (t, e) {
                this.int_dynamic_list[e] = t;
            }),
            (e.prototype.removeIntDynamic = function (t) {
                this.int_dynamic_list.splice(t, 1);
            }),
            (e.prototype.removeAllIntDynamic = function () {
                this.int_dynamic_list = [];
            }),
            (e.prototype.addIntNormal = function () {
                this.int_normal_list.push("");
            }),
            (e.prototype.setIntNormalVal = function (t, e) {
                this.int_normal_list[e] = t;
            }),
            (e.prototype.removeIntNormal = function (t) {
                this.int_normal_list.splice(t, 1);
            }),
            (e.prototype.removeAllIntNormal = function () {
                this.int_normal_list = [];
            }),
            (e.prototype.setBooleanDynamicTrueVal = function (t) {
                this.boolean_dynamic_true = t;
            }),
            (e.prototype.setBooleanDynamicFalseVal = function (t) {
                this.boolean_dynamic_false = t;
            }),
            (e.prototype.setBooleanNormalTrueVal = function (t) {
                this.boolean_normal_true = t;
            }),
            (e.prototype.setBooleanNormalFalseVal = function (t) {
                this.boolean_normal_false = t;
            }),
            __decorate([l], e.prototype, "table_enable", void 0),
            __decorate([l], e.prototype, "table_type", void 0),
            __decorate([l], e.prototype, "dynamic_enable", void 0),
            __decorate([l({type: [d]})], e.prototype, "string_normal_list", void 0),
            __decorate([l({type: [d]})], e.prototype, "string_dynamic_list", void 0),
            __decorate([l({type: [cc.String]})], e.prototype, "int_normal_list", void 0),
            __decorate([l({type: [cc.String]})], e.prototype, "int_dynamic_list", void 0),
            __decorate([l], e.prototype, "boolean_normal_true", void 0),
            __decorate([l], e.prototype, "boolean_normal_false", void 0),
            __decorate([l], e.prototype, "boolean_dynamic_true", void 0),
            __decorate([l], e.prototype, "boolean_dynamic_false", void 0),
            __decorate(
                [
                    c,
                    p("packages://gm_binder_plugin/inspector/com/binder/coms/com_sprite.js"),
                    u("Gm/Binder/SpriteBind")
                ],
                e
            )
        );
    })(r.default);
n.default = h;
