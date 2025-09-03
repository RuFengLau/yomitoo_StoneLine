var r = require("GmBaseCom");
var ccclass = cc._decorator.ccclass;
var property = cc._decorator.property;
var inspector = cc._decorator.inspector;
var menu = cc._decorator.menu;

/**
 * KV 数据类
 */
var GmSpriteComKv = (function () {
    function GmSpriteComKv() {
        this.key = "";
        this.val = "";
    }
    __decorate([property()], GmSpriteComKv.prototype, "key", void 0);
    __decorate([property()], GmSpriteComKv.prototype, "val", void 0);
    GmSpriteComKv = __decorate([ccclass("GmSpriteComKv")], GmSpriteComKv);
    return GmSpriteComKv;
})();

/**
 * 精灵绑定组件
 */
var GmSpriteCom = (function (_super) {
    __extends(GmSpriteCom, _super);

    function GmSpriteCom() {
        var self = _super !== null && _super.apply(this, arguments) || this;

        self.table_enable = false;
        self.table_type = "string"; // 可选：string | int | boolean
        self.dynamic_enable = false;

        self.string_normal_list = [];
        self.string_dynamic_list = [];
        self.int_normal_list = [];
        self.int_dynamic_list = [];

        self.boolean_normal_true = "";
        self.boolean_normal_false = "";
        self.boolean_dynamic_true = "";
        self.boolean_dynamic_false = "";

        return self;
    }

    GmSpriteCom.prototype.onLoad = function () {
        this.com_type = "cc.Sprite";
        this.modifycontrol_enable_show = false;
        _super.prototype.onLoad.call(this);
    };

    GmSpriteCom.prototype.comListenerFunc = function (event, node, val, index) {
        _super.prototype.comListenerFunc.call(this, event, node, val, index);

        if (this.more_enable) {
            var target = this.coms[index];
            this.controlSprite(target, val);
        } else {
            this.controlSprite(this.com, val);
        }
    };

    /**
     * 控制精灵显示
     */
    GmSpriteCom.prototype.controlSprite = function (sprite, value) {
        if (!sprite) return;

        var res = null;
        if (this.table_enable) {
            switch (this.table_type) {
                case "string":
                    var list = this.dynamic_enable ? this.string_dynamic_list : this.string_normal_list;
                    for (var i = 0; i < list.length; i++) {
                        var item = list[i];
                        if (value == item.key) {
                            res = item.val;
                            break;
                        }
                    }
                    break;
                case "int":
                    var idx = parseInt(value);
                    res = this.dynamic_enable ? this.int_dynamic_list[idx] : this.int_normal_list[idx];
                    break;
                case "boolean":
                    res = this.dynamic_enable
                        ? (value ? this.boolean_dynamic_true : this.boolean_dynamic_false)
                        : (value ? this.boolean_normal_true : this.boolean_normal_false);
                    break;
            }

            if (res && res !== "") {
                if (this.dynamic_enable) {
                    if (res.startsWith("ab:")) {
                        this.loadAbImage(sprite, res);
                    } else {
                        cc.resources.load(res, cc.SpriteFrame, function (err, frame) {
                            if (err) {
                                cc.log("没有找到资源！", err);
                            } else {
                                sprite.spriteFrame = frame;
                            }
                        });
                    }
                } else {
                    cc.assetManager.loadAny([{ uuid: res }], function (err, frame) {
                        if (!err) sprite.spriteFrame = frame;
                    });
                }
            }
        } else {
            // 非 table 模式
            if (value instanceof cc.SpriteFrame) {
                sprite.spriteFrame = value;
            } else if (value instanceof cc.Texture2D) {
                sprite.spriteFrame = new cc.SpriteFrame(value);
            } else if (typeof value === "string") {
                if (value.startsWith("ab:")) {
                    this.loadAbImage(sprite, value);
                } else if (value.startsWith("http")) {
                    cc.assetManager.loadRemote(value, function (err, tex) {
                        if (!err) sprite.spriteFrame = new cc.SpriteFrame(tex);
                    });
                } else {
                    cc.resources.load(value.toString(), cc.SpriteFrame, function (err, frame) {
                        if (!err) sprite.spriteFrame = frame;
                    });
                }
            }
        }
    };

    /**
     * 加载 ab 包资源
     */
    GmSpriteCom.prototype.loadAbImage = function (sprite, path) {
        var realPath = path.replace("ab:", "");
        var bundleName = realPath.split("/")[0];
        realPath = realPath.replace(bundleName + "/", "");

        cc.assetManager.loadBundle(bundleName, function (err, bundle) {
            if (err) {
                cc.log(err);
                return;
            }
            bundle.load(realPath, cc.SpriteFrame, function (err, frame) {
                if (!err) sprite.spriteFrame = frame;
            });
        });
    };

    // 各种设置方法
    GmSpriteCom.prototype.setTableEnable = function (enable) { this.table_enable = enable; };
    GmSpriteCom.prototype.setTableType = function (type) { this.table_type = type; };
    GmSpriteCom.prototype.setDynamicEnable = function (enable) { this.dynamic_enable = enable; };

    GmSpriteCom.prototype.addStringDynamic = function () { this.string_dynamic_list.push(new GmSpriteComKv()); };
    GmSpriteCom.prototype.setStringDynamicKey = function (key, idx) { this.string_dynamic_list[idx].key = key; };
    GmSpriteCom.prototype.setStringDynamicVal = function (val, idx) { this.string_dynamic_list[idx].val = val; };
    GmSpriteCom.prototype.removeStringDynamic = function (idx) { this.string_dynamic_list.splice(idx, 1); };
    GmSpriteCom.prototype.removeAllStringDynamic = function () { this.string_dynamic_list = []; };

    GmSpriteCom.prototype.addStringNormal = function () { this.string_normal_list.push(new GmSpriteComKv()); };
    GmSpriteCom.prototype.setStringNormalKey = function (key, idx) { this.string_normal_list[idx].key = key; };
    GmSpriteCom.prototype.setStringNormalVal = function (val, idx) { this.string_normal_list[idx].val = val; };
    GmSpriteCom.prototype.removeStringNormal = function (idx) { this.string_normal_list.splice(idx, 1); };
    GmSpriteCom.prototype.removeAllStringNormal = function () { this.string_normal_list = []; };

    GmSpriteCom.prototype.addIntDynamic = function () { this.int_dynamic_list.push(""); };
    GmSpriteCom.prototype.setIntDynamicVal = function (val, idx) { this.int_dynamic_list[idx] = val; };
    GmSpriteCom.prototype.removeIntDynamic = function (idx) { this.int_dynamic_list.splice(idx, 1); };
    GmSpriteCom.prototype.removeAllIntDynamic = function () { this.int_dynamic_list = []; };

    GmSpriteCom.prototype.addIntNormal = function () { this.int_normal_list.push(""); };
    GmSpriteCom.prototype.setIntNormalVal = function (val, idx) { this.int_normal_list[idx] = val; };
    GmSpriteCom.prototype.removeIntNormal = function (idx) { this.int_normal_list.splice(idx, 1); };
    GmSpriteCom.prototype.removeAllIntNormal = function () { this.int_normal_list = []; };

    GmSpriteCom.prototype.setBooleanDynamicTrueVal = function (val) { this.boolean_dynamic_true = val; };
    GmSpriteCom.prototype.setBooleanDynamicFalseVal = function (val) { this.boolean_dynamic_false = val; };
    GmSpriteCom.prototype.setBooleanNormalTrueVal = function (val) { this.boolean_normal_true = val; };
    GmSpriteCom.prototype.setBooleanNormalFalseVal = function (val) { this.boolean_normal_false = val; };

    __decorate([property], GmSpriteCom.prototype, "table_enable", void 0);
    __decorate([property], GmSpriteCom.prototype, "table_type", void 0);
    __decorate([property], GmSpriteCom.prototype, "dynamic_enable", void 0);
    __decorate([property({ type: [GmSpriteComKv] })], GmSpriteCom.prototype, "string_normal_list", void 0);
    __decorate([property({ type: [GmSpriteComKv] })], GmSpriteCom.prototype, "string_dynamic_list", void 0);
    __decorate([property({ type: [cc.String] })], GmSpriteCom.prototype, "int_normal_list", void 0);
    __decorate([property({ type: [cc.String] })], GmSpriteCom.prototype, "int_dynamic_list", void 0);
    __decorate([property], GmSpriteCom.prototype, "boolean_normal_true", void 0);
    __decorate([property], GmSpriteCom.prototype, "boolean_normal_false", void 0);
    __decorate([property], GmSpriteCom.prototype, "boolean_dynamic_true", void 0);
    __decorate([property], GmSpriteCom.prototype, "boolean_dynamic_false", void 0);

    GmSpriteCom = __decorate([
        ccclass,
        inspector("packages://gm_binder_plugin/inspector/com/binder/coms/com_sprite.js"),
        menu("Gm/Binder/SpriteBind")
    ], GmSpriteCom);

    return GmSpriteCom;
})(r.default);

module.exports = GmSpriteCom;
