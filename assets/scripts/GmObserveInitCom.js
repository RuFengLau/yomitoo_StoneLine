var t = require;
var e = module;
var n = exports;
var i;
Object.defineProperty(n, "__esModule", {value: !0});
var r = t("GmBinder"),
    s = cc._decorator,
    c = s.ccclass,
    l = s.property,
    p = s.executeInEditMode,
    u = s.inspector,
    d = s.menu,
    h = (function () {
        function t() {
            (this.com_uuid = ""),
                (this.com_index = 0),
                (this.key = ""),
                (this.val = ""),
                (this.explain = ""),
                (this.type = "string");
        }
        return (
            __decorate([l({})], t.prototype, "com_uuid", void 0),
            __decorate([l({type: cc.Integer})], t.prototype, "com_index", void 0),
            __decorate([l({})], t.prototype, "key", void 0),
            __decorate([l({})], t.prototype, "val", void 0),
            __decorate([l({})], t.prototype, "explain", void 0),
            __decorate([l({})], t.prototype, "type", void 0),
            __decorate([c("GmObserveInitData")], t)
        );
    })(),
    f = (function (t) {
        function e() {
            var e = (null !== t && t.apply(this, arguments)) || this;
            return (e.observeInitDataList = []), e;
        }
        return (
            __extends(e, t),
            (e.prototype.onLoad = function () {
                for (var t = 0, e = this.observeInitDataList; t < e.length; t++) {
                    var n = e[t];
                    "" != n.key && r.default.createBinder(n.key, n.val, null, null, n.type);
                }
            }),
            (e.prototype.start = function () {}),
            (e.prototype.addObserveData = function () {
                var t = new h();
                (t.com_uuid = this.uuid),
                    (t.com_index = this.observeInitDataList.length),
                    this.observeInitDataList.push(t);
            }),
            (e.prototype.removeObserveByIndex = function (t) {
                this.observeInitDataList.splice(t, 1), this.flushObserveIndex();
            }),
            (e.prototype.flushObserveIndex = function () {
                for (var t = 0; t < this.observeInitDataList.length; t++) this.observeInitDataList[t].com_index = t;
            }),
            (e.prototype.setkeyStrByIndex = function (t, e) {
                this.observeInitDataList[t].key = e;
            }),
            (e.prototype.setExplainStrByIndex = function (t, e) {
                this.observeInitDataList[t].explain = e;
            }),
            (e.prototype.setTypeStrByIndex = function (t, e) {
                this.observeInitDataList[t].type = e;
            }),
            (e.prototype.setValStrByIndex = function (t, e) {
                this.observeInitDataList[t].val = e;
            }),
            __decorate([l({type: [h]})], e.prototype, "observeInitDataList", void 0),
            __decorate(
                [
                    c,
                    u("packages://gm_binder_plugin/inspector/com/binder/observe/com_observeinit.js"),
                    p,
                    d("Gm/Binder/GmObserveInitCom")
                ],
                e
            )
        );
    })(cc.Component);
n.default = f;
