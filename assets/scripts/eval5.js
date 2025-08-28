var t = require;
var e = module;
var n = exports;
var i;
(i = function () {
    return (function (t) {
        var e = {};
        function n(i) {
            if (e[i]) return e[i].exports;
            var o = (e[i] = {i: i, l: !1, exports: {}});
            return t[i].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = t),
            (n.c = e),
            (n.d = function (t, e, i) {
                n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: i});
            }),
            (n.r = function (t) {
                "undefined" != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}),
                    Object.defineProperty(t, "__esModule", {value: !0});
            }),
            (n.t = function (t, e) {
                if ((1 & e && (t = n(t)), 8 & e)) return t;
                if (4 & e && "object" == typeof t && t && t.__esModule) return t;
                var i = Object.create(null);
                if (
                    (n.r(i),
                    Object.defineProperty(i, "default", {enumerable: !0, value: t}),
                    2 & e && "string" != typeof t)
                )
                    for (var o in t)
                        n.d(
                            i,
                            o,
                            function (e) {
                                return t[e];
                            }.bind(null, o)
                        );
                return i;
            }),
            (n.n = function (t) {
                var e =
                    t && t.__esModule
                        ? function () {
                              return t.default;
                          }
                        : function () {
                              return t;
                          };
                return n.d(e, "a", e), e;
            }),
            (n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }),
            (n.p = ""),
            n((n.s = 0))
        );
    })({
        "./node_modules/@babel/runtime/helpers/construct.js": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/setPrototypeOf.js");
            function o() {
                if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {})), !0;
                } catch (t) {
                    return !1;
                }
            }
            function a(e, n, r) {
                return (
                    o()
                        ? (t.exports = a = Reflect.construct)
                        : (t.exports = a =
                              function (t, e, n) {
                                  var o = [null];
                                  o.push.apply(o, e);
                                  var a = new (Function.bind.apply(t, o))();
                                  return n && i(a, n.prototype), a;
                              }),
                    a.apply(null, arguments)
                );
            }
            t.exports = a;
        },
        "./node_modules/@babel/runtime/helpers/extends.js": function (t) {
            function e() {
                return (
                    (t.exports = e =
                        Object.assign ||
                        function (t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = arguments[e];
                                for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i]);
                            }
                            return t;
                        }),
                    e.apply(this, arguments)
                );
            }
            t.exports = e;
        },
        "./node_modules/@babel/runtime/helpers/getPrototypeOf.js": function (t) {
            function e(n) {
                return (
                    (t.exports = e =
                        Object.setPrototypeOf
                            ? Object.getPrototypeOf
                            : function (t) {
                                  return t.__proto__ || Object.getPrototypeOf(t);
                              }),
                    e(n)
                );
            }
            t.exports = e;
        },
        "./node_modules/@babel/runtime/helpers/inheritsLoose.js": function (t) {
            t.exports = function (t, e) {
                (t.prototype = Object.create(e.prototype)), (t.prototype.constructor = t), (t.__proto__ = e);
            };
        },
        "./node_modules/@babel/runtime/helpers/interopRequireDefault.js": function (t) {
            t.exports = function (t) {
                return t && t.__esModule ? t : {default: t};
            };
        },
        "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/typeof.js");
            function o() {
                if ("function" != typeof WeakMap) return null;
                var t = new WeakMap();
                return (
                    (o = function () {
                        return t;
                    }),
                    t
                );
            }
            t.exports = function (t) {
                if (t && t.__esModule) return t;
                if (null === t || ("object" !== i(t) && "function" != typeof t)) return {default: t};
                var e = o();
                if (e && e.has(t)) return e.get(t);
                var n = {},
                    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var r in t)
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        var s = a ? Object.getOwnPropertyDescriptor(t, r) : null;
                        s && (s.get || s.set) ? Object.defineProperty(n, r, s) : (n[r] = t[r]);
                    }
                return (n.default = t), e && e.set(t, n), n;
            };
        },
        "./node_modules/@babel/runtime/helpers/isNativeFunction.js": function (t) {
            t.exports = function (t) {
                return -1 !== Function.toString.call(t).indexOf("[native code]");
            };
        },
        "./node_modules/@babel/runtime/helpers/setPrototypeOf.js": function (t) {
            function e(n, i) {
                return (
                    (t.exports = e =
                        Object.setPrototypeOf ||
                        function (t, e) {
                            return (t.__proto__ = e), t;
                        }),
                    e(n, i)
                );
            }
            t.exports = e;
        },
        "./node_modules/@babel/runtime/helpers/typeof.js": function (t) {
            function e(n) {
                return (
                    "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                        ? (t.exports = e =
                              function (t) {
                                  return typeof t;
                              })
                        : (t.exports = e =
                              function (t) {
                                  return t &&
                                      "function" == typeof Symbol &&
                                      t.constructor === Symbol &&
                                      t !== Symbol.prototype
                                      ? "symbol"
                                      : typeof t;
                              }),
                    e(n)
                );
            }
            t.exports = e;
        },
        "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/getPrototypeOf.js"),
                o = n("./node_modules/@babel/runtime/helpers/setPrototypeOf.js"),
                a = n("./node_modules/@babel/runtime/helpers/isNativeFunction.js"),
                r = n("./node_modules/@babel/runtime/helpers/construct.js");
            function s(e) {
                var n = "function" == typeof Map ? new Map() : void 0;
                return (
                    (t.exports = s =
                        function (t) {
                            if (null === t || !a(t)) return t;
                            if ("function" != typeof t)
                                throw new TypeError("Super expression must either be null or a function");
                            if (void 0 !== n) {
                                if (n.has(t)) return n.get(t);
                                n.set(t, e);
                            }
                            function e() {
                                return r(t, arguments, i(this).constructor);
                            }
                            return (
                                (e.prototype = Object.create(t.prototype, {
                                    constructor: {value: e, enumerable: !1, writable: !0, configurable: !0}
                                })),
                                o(e, t)
                            );
                        }),
                    s(e)
                );
            }
            t.exports = s;
        },
        "./node_modules/acorn/dist/acorn.mjs": function (t, e, n) {
            n.r(e),
                n.d(e, "Node", function () {
                    return ct;
                }),
                n.d(e, "Parser", function () {
                    return J;
                }),
                n.d(e, "Position", function () {
                    return F;
                }),
                n.d(e, "SourceLocation", function () {
                    return R;
                }),
                n.d(e, "TokContext", function () {
                    return ut;
                }),
                n.d(e, "Token", function () {
                    return Rt;
                }),
                n.d(e, "TokenType", function () {
                    return v;
                }),
                n.d(e, "defaultOptions", function () {
                    return k;
                }),
                n.d(e, "getLineInfo", function () {
                    return N;
                }),
                n.d(e, "isIdentifierChar", function () {
                    return y;
                }),
                n.d(e, "isIdentifierStart", function () {
                    return f;
                }),
                n.d(e, "isNewLine", function () {
                    return P;
                }),
                n.d(e, "keywordTypes", function () {
                    return S;
                }),
                n.d(e, "lineBreak", function () {
                    return C;
                }),
                n.d(e, "lineBreakG", function () {
                    return B;
                }),
                n.d(e, "nonASCIIwhitespace", function () {
                    return x;
                }),
                n.d(e, "parse", function () {
                    return Dt;
                }),
                n.d(e, "parseExpressionAt", function () {
                    return jt;
                }),
                n.d(e, "tokContexts", function () {
                    return dt;
                }),
                n.d(e, "tokTypes", function () {
                    return w;
                }),
                n.d(e, "tokenizer", function () {
                    return qt;
                }),
                n.d(e, "version", function () {
                    return Ut;
                });
            var i = {
                    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
                    5: "class enum extends super const export import",
                    6: "enum",
                    strict: "implements interface let package private protected public static yield",
                    strictBind: "eval arguments"
                },
                o =
                    "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this",
                a = {5: o, "5module": o + " export import", 6: o + " const class extends export import super"},
                r = /^in(stanceof)?$/,
                s =
                    "ªµºÀ-ÖØ-öø-ˁˆ-ˑˠ-ˤˬˮͰ-ʹͶͷͺ-ͽͿΆΈ-ΊΌΎ-ΡΣ-ϵϷ-ҁҊ-ԯԱ-Ֆՙՠ-ֈא-תׯ-ײؠ-يٮٯٱ-ۓەۥۦۮۯۺ-ۼۿܐܒ-ܯݍ-ޥޱߊ-ߪߴߵߺࠀ-ࠕࠚࠤࠨࡀ-ࡘࡠ-ࡪࢠ-ࢴࢶ-ࢽऄ-हऽॐक़-ॡॱ-ঀঅ-ঌএঐও-নপ-রলশ-হঽৎড়ঢ়য়-ৡৰৱৼਅ-ਊਏਐਓ-ਨਪ-ਰਲਲ਼ਵਸ਼ਸਹਖ਼-ੜਫ਼ੲ-ੴઅ-ઍએ-ઑઓ-નપ-રલળવ-હઽૐૠૡૹଅ-ଌଏଐଓ-ନପ-ରଲଳଵ-ହଽଡ଼ଢ଼ୟ-ୡୱஃஅ-ஊஎ-ஐஒ-கஙசஜஞடணதந-பம-ஹௐఅ-ఌఎ-ఐఒ-నప-హఽౘ-ౚౠౡಀಅ-ಌಎ-ಐಒ-ನಪ-ಳವ-ಹಽೞೠೡೱೲഅ-ഌഎ-ഐഒ-ഺഽൎൔ-ൖൟ-ൡൺ-ൿඅ-ඖක-නඳ-රලව-ෆก-ะาำเ-ๆກຂຄຆ-ຊຌ-ຣລວ-ະາຳຽເ-ໄໆໜ-ໟༀཀ-ཇཉ-ཬྈ-ྌက-ဪဿၐ-ၕၚ-ၝၡၥၦၮ-ၰၵ-ႁႎႠ-ჅჇჍა-ჺჼ-ቈቊ-ቍቐ-ቖቘቚ-ቝበ-ኈኊ-ኍነ-ኰኲ-ኵኸ-ኾዀዂ-ዅወ-ዖዘ-ጐጒ-ጕጘ-ፚᎀ-ᎏᎠ-Ᏽᏸ-ᏽᐁ-ᙬᙯ-ᙿᚁ-ᚚᚠ-ᛪᛮ-ᛸᜀ-ᜌᜎ-ᜑᜠ-ᜱᝀ-ᝑᝠ-ᝬᝮ-ᝰក-ឳៗៜᠠ-ᡸᢀ-ᢨᢪᢰ-ᣵᤀ-ᤞᥐ-ᥭᥰ-ᥴᦀ-ᦫᦰ-ᧉᨀ-ᨖᨠ-ᩔᪧᬅ-ᬳᭅ-ᭋᮃ-ᮠᮮᮯᮺ-ᯥᰀ-ᰣᱍ-ᱏᱚ-ᱽᲀ-ᲈᲐ-ᲺᲽ-Ჿᳩ-ᳬᳮ-ᳳᳵᳶᳺᴀ-ᶿḀ-ἕἘ-Ἕἠ-ὅὈ-Ὅὐ-ὗὙὛὝὟ-ώᾀ-ᾴᾶ-ᾼιῂ-ῄῆ-ῌῐ-ΐῖ-Ίῠ-Ῥῲ-ῴῶ-ῼⁱⁿₐ-ₜℂℇℊ-ℓℕ℘-ℝℤΩℨK-ℹℼ-ℿⅅ-ⅉⅎⅠ-ↈⰀ-Ⱞⰰ-ⱞⱠ-ⳤⳫ-ⳮⳲⳳⴀ-ⴥⴧⴭⴰ-ⵧⵯⶀ-ⶖⶠ-ⶦⶨ-ⶮⶰ-ⶶⶸ-ⶾⷀ-ⷆⷈ-ⷎⷐ-ⷖⷘ-ⷞ々-〇〡-〩〱-〵〸-〼ぁ-ゖ゛-ゟァ-ヺー-ヿㄅ-ㄯㄱ-ㆎㆠ-ㆺㇰ-ㇿ㐀-䶵一-鿯ꀀ-ꒌꓐ-ꓽꔀ-ꘌꘐ-ꘟꘪꘫꙀ-ꙮꙿ-ꚝꚠ-ꛯꜗ-ꜟꜢ-ꞈꞋ-ꞿꟂ-Ᶎꟷ-ꠁꠃ-ꠅꠇ-ꠊꠌ-ꠢꡀ-ꡳꢂ-ꢳꣲ-ꣷꣻꣽꣾꤊ-ꤥꤰ-ꥆꥠ-ꥼꦄ-ꦲꧏꧠ-ꧤꧦ-ꧯꧺ-ꧾꨀ-ꨨꩀ-ꩂꩄ-ꩋꩠ-ꩶꩺꩾ-ꪯꪱꪵꪶꪹ-ꪽꫀꫂꫛ-ꫝꫠ-ꫪꫲ-ꫴꬁ-ꬆꬉ-ꬎꬑ-ꬖꬠ-ꬦꬨ-ꬮꬰ-ꭚꭜ-ꭧꭰ-ꯢ가-힣ힰ-ퟆퟋ-ퟻ豈-舘並-龎ﬀ-ﬆﬓ-ﬗיִײַ-ﬨשׁ-זּטּ-לּמּנּסּףּפּצּ-ﮱﯓ-ﴽﵐ-ﶏﶒ-ﷇﷰ-ﷻﹰ-ﹴﹶ-ﻼＡ-Ｚａ-ｚｦ-ﾾￂ-ￇￊ-ￏￒ-ￗￚ-ￜ",
                c =
                    "‌‍·̀-ͯ·҃-֑҇-ׇֽֿׁׂׅׄؐ-ًؚ-٩ٰۖ-ۜ۟-۪ۤۧۨ-ۭ۰-۹ܑܰ-݊ަ-ް߀-߉߫-߽߳ࠖ-࠙ࠛ-ࠣࠥ-ࠧࠩ-࡙࠭-࡛࣓-ࣣ࣡-ःऺ-़ा-ॏ॑-ॗॢॣ०-९ঁ-ঃ়া-ৄেৈো-্ৗৢৣ০-৯৾ਁ-ਃ਼ਾ-ੂੇੈੋ-੍ੑ੦-ੱੵઁ-ઃ઼ા-ૅે-ૉો-્ૢૣ૦-૯ૺ-૿ଁ-ଃ଼ା-ୄେୈୋ-୍ୖୗୢୣ୦-୯ஂா-ூெ-ைொ-்ௗ௦-௯ఀ-ఄా-ౄె-ైొ-్ౕౖౢౣ౦-౯ಁ-ಃ಼ಾ-ೄೆ-ೈೊ-್ೕೖೢೣ೦-೯ഀ-ഃ഻഼ാ-ൄെ-ൈൊ-്ൗൢൣ൦-൯ංඃ්ා-ුූෘ-ෟ෦-෯ෲෳัิ-ฺ็-๎๐-๙ັິ-ຼ່-ໍ໐-໙༘༙༠-༩༹༵༷༾༿ཱ-྄྆྇ྍ-ྗྙ-ྼ࿆ါ-ှ၀-၉ၖ-ၙၞ-ၠၢ-ၤၧ-ၭၱ-ၴႂ-ႍႏ-ႝ፝-፟፩-፱ᜒ-᜔ᜲ-᜴ᝒᝓᝲᝳ឴-៓៝០-៩᠋-᠍᠐-᠙ᢩᤠ-ᤫᤰ-᤻᥆-᥏᧐-᧚ᨗ-ᨛᩕ-ᩞ᩠-᩿᩼-᪉᪐-᪙᪰-᪽ᬀ-ᬄ᬴-᭄᭐-᭙᭫-᭳ᮀ-ᮂᮡ-ᮭ᮰-᮹᯦-᯳ᰤ-᰷᱀-᱉᱐-᱙᳐-᳔᳒-᳨᳭᳴᳷-᳹᷀-᷹᷻-᷿‿⁀⁔⃐-⃥⃜⃡-⃰⳯-⵿⳱ⷠ-〪ⷿ-゙゚〯꘠-꘩꙯ꙴ-꙽ꚞꚟ꛰꛱ꠂ꠆ꠋꠣ-ꠧꢀꢁꢴ-ꣅ꣐-꣙꣠-꣱ꣿ-꤉ꤦ-꤭ꥇ-꥓ꦀ-ꦃ꦳-꧀꧐-꧙ꧥ꧰-꧹ꨩ-ꨶꩃꩌꩍ꩐-꩙ꩻ-ꩽꪰꪲ-ꪴꪷꪸꪾ꪿꫁ꫫ-ꫯꫵ꫶ꯣ-ꯪ꯬꯭꯰-꯹ﬞ︀-️︠-︯︳︴﹍-﹏０-９＿",
                l = new RegExp("[" + s + "]"),
                p = new RegExp("[" + s + c + "]");
            s = c = null;
            var u = [
                    0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11,
                    29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 157, 310, 10, 21, 11, 7, 153, 5, 3, 0,
                    2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3,
                    2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50,
                    14, 35, 477, 28, 11, 0, 9, 21, 155, 22, 13, 52, 76, 44, 33, 24, 27, 35, 30, 0, 12, 34, 4, 0, 13, 47,
                    15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6,
                    2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 0, 33, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47,
                    21, 0, 60, 42, 14, 0, 72, 26, 230, 43, 117, 63, 32, 0, 161, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8,
                    0, 22, 0, 12, 45, 20, 0, 35, 56, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2,
                    1, 2, 31, 15, 0, 328, 18, 270, 921, 103, 110, 18, 195, 2749, 1070, 4050, 582, 8634, 568, 8, 30, 114,
                    29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 754,
                    9486, 286, 50, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3,
                    3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24,
                    2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 2357, 44, 11, 6, 17, 0, 370, 43, 1301,
                    196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0,
                    2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2,
                    16, 6, 2, 2, 4, 2, 16, 4421, 42710, 42, 4148, 12, 221, 3, 5761, 15, 7472, 3104, 541
                ],
                d = [
                    509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 525, 10,
                    176, 2, 54, 14, 32, 9, 16, 3, 46, 10, 54, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3,
                    4, 9, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17,
                    10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14,
                    166, 9, 232, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21,
                    2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 135, 4, 60,
                    6, 26, 9, 1014, 0, 2, 54, 8, 3, 19723, 1, 5319, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513,
                    54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 419, 13,
                    1495, 6, 110, 6, 6, 9, 792487, 239
                ];
            function h(t, e) {
                for (var n = 65536, i = 0; i < e.length; i += 2) {
                    if ((n += e[i]) > t) return !1;
                    if ((n += e[i + 1]) >= t) return !0;
                }
            }
            function f(t, e) {
                return t < 65
                    ? 36 === t
                    : t < 91 ||
                          (t < 97
                              ? 95 === t
                              : t < 123 ||
                                (t <= 65535 ? t >= 170 && l.test(String.fromCharCode(t)) : !1 !== e && h(t, u)));
            }
            function y(t, e) {
                return t < 48
                    ? 36 === t
                    : t < 58 ||
                          (!(t < 65) &&
                              (t < 91 ||
                                  (t < 97
                                      ? 95 === t
                                      : t < 123 ||
                                        (t <= 65535
                                            ? t >= 170 && p.test(String.fromCharCode(t))
                                            : !1 !== e && (h(t, u) || h(t, d))))));
            }
            var v = function (t, e) {
                void 0 === e && (e = {}),
                    (this.label = t),
                    (this.keyword = e.keyword),
                    (this.beforeExpr = !!e.beforeExpr),
                    (this.startsExpr = !!e.startsExpr),
                    (this.isLoop = !!e.isLoop),
                    (this.isAssign = !!e.isAssign),
                    (this.prefix = !!e.prefix),
                    (this.postfix = !!e.postfix),
                    (this.binop = e.binop || null),
                    (this.updateContext = null);
            };
            function g(t, e) {
                return new v(t, {beforeExpr: !0, binop: e});
            }
            var m = {beforeExpr: !0},
                b = {startsExpr: !0},
                S = {};
            function A(t, e) {
                return void 0 === e && (e = {}), (e.keyword = t), (S[t] = new v(t, e));
            }
            var w = {
                    num: new v("num", b),
                    regexp: new v("regexp", b),
                    string: new v("string", b),
                    name: new v("name", b),
                    eof: new v("eof"),
                    bracketL: new v("[", {beforeExpr: !0, startsExpr: !0}),
                    bracketR: new v("]"),
                    braceL: new v("{", {beforeExpr: !0, startsExpr: !0}),
                    braceR: new v("}"),
                    parenL: new v("(", {beforeExpr: !0, startsExpr: !0}),
                    parenR: new v(")"),
                    comma: new v(",", m),
                    semi: new v(";", m),
                    colon: new v(":", m),
                    dot: new v("."),
                    question: new v("?", m),
                    arrow: new v("=>", m),
                    template: new v("template"),
                    invalidTemplate: new v("invalidTemplate"),
                    ellipsis: new v("...", m),
                    backQuote: new v("`", b),
                    dollarBraceL: new v("${", {beforeExpr: !0, startsExpr: !0}),
                    eq: new v("=", {beforeExpr: !0, isAssign: !0}),
                    assign: new v("_=", {beforeExpr: !0, isAssign: !0}),
                    incDec: new v("++/--", {prefix: !0, postfix: !0, startsExpr: !0}),
                    prefix: new v("!/~", {beforeExpr: !0, prefix: !0, startsExpr: !0}),
                    logicalOR: g("||", 1),
                    logicalAND: g("&&", 2),
                    bitwiseOR: g("|", 3),
                    bitwiseXOR: g("^", 4),
                    bitwiseAND: g("&", 5),
                    equality: g("==/!=/===/!==", 6),
                    relational: g("</>/<=/>=", 7),
                    bitShift: g("<</>>/>>>", 8),
                    plusMin: new v("+/-", {beforeExpr: !0, binop: 9, prefix: !0, startsExpr: !0}),
                    modulo: g("%", 10),
                    star: g("*", 10),
                    slash: g("/", 10),
                    starstar: new v("**", {beforeExpr: !0}),
                    _break: A("break"),
                    _case: A("case", m),
                    _catch: A("catch"),
                    _continue: A("continue"),
                    _debugger: A("debugger"),
                    _default: A("default", m),
                    _do: A("do", {isLoop: !0, beforeExpr: !0}),
                    _else: A("else", m),
                    _finally: A("finally"),
                    _for: A("for", {isLoop: !0}),
                    _function: A("function", b),
                    _if: A("if"),
                    _return: A("return", m),
                    _switch: A("switch"),
                    _throw: A("throw", m),
                    _try: A("try"),
                    _var: A("var"),
                    _const: A("const"),
                    _while: A("while", {isLoop: !0}),
                    _with: A("with"),
                    _new: A("new", {beforeExpr: !0, startsExpr: !0}),
                    _this: A("this", b),
                    _super: A("super", b),
                    _class: A("class", b),
                    _extends: A("extends", m),
                    _export: A("export"),
                    _import: A("import", b),
                    _null: A("null", b),
                    _true: A("true", b),
                    _false: A("false", b),
                    _in: A("in", {beforeExpr: !0, binop: 7}),
                    _instanceof: A("instanceof", {beforeExpr: !0, binop: 7}),
                    _typeof: A("typeof", {beforeExpr: !0, prefix: !0, startsExpr: !0}),
                    _void: A("void", {beforeExpr: !0, prefix: !0, startsExpr: !0}),
                    _delete: A("delete", {beforeExpr: !0, prefix: !0, startsExpr: !0})
                },
                C = /\r\n?|\n|\u2028|\u2029/,
                B = new RegExp(C.source, "g");
            function P(t, e) {
                return 10 === t || 13 === t || (!e && (8232 === t || 8233 === t));
            }
            var x = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/,
                I = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,
                M = Object.prototype,
                O = M.hasOwnProperty,
                V = M.toString;
            function T(t, e) {
                return O.call(t, e);
            }
            var E =
                Array.isArray ||
                function (t) {
                    return "[object Array]" === V.call(t);
                };
            function L(t) {
                return new RegExp("^(?:" + t.replace(/ /g, "|") + ")$");
            }
            var F = function (t, e) {
                (this.line = t), (this.column = e);
            };
            F.prototype.offset = function (t) {
                return new F(this.line, this.column + t);
            };
            var R = function (t, e, n) {
                (this.start = e), (this.end = n), null !== t.sourceFile && (this.source = t.sourceFile);
            };
            function N(t, e) {
                for (var n = 1, i = 0; ; ) {
                    B.lastIndex = i;
                    var o = B.exec(t);
                    if (!(o && o.index < e)) return new F(n, e - i);
                    ++n, (i = o.index + o[0].length);
                }
            }
            var k = {
                ecmaVersion: 10,
                sourceType: "script",
                onInsertedSemicolon: null,
                onTrailingComma: null,
                allowReserved: null,
                allowReturnOutsideFunction: !1,
                allowImportExportEverywhere: !1,
                allowAwaitOutsideFunction: !1,
                allowHashBang: !1,
                locations: !1,
                onToken: null,
                onComment: null,
                ranges: !1,
                program: null,
                sourceFile: null,
                directSourceFile: null,
                preserveParens: !1
            };
            function K(t) {
                var e = {};
                for (var n in k) e[n] = t && T(t, n) ? t[n] : k[n];
                if (
                    (e.ecmaVersion >= 2015 && (e.ecmaVersion -= 2009),
                    null == e.allowReserved && (e.allowReserved = e.ecmaVersion < 5),
                    E(e.onToken))
                ) {
                    var i = e.onToken;
                    e.onToken = function (t) {
                        return i.push(t);
                    };
                }
                return E(e.onComment) && (e.onComment = U(e, e.onComment)), e;
            }
            function U(t, e) {
                return function (n, i, o, a, r, s) {
                    var c = {type: n ? "Block" : "Line", value: i, start: o, end: a};
                    t.locations && (c.loc = new R(this, r, s)), t.ranges && (c.range = [o, a]), e.push(c);
                };
            }
            var D = 2,
                j = 1 | D,
                q = 4,
                G = 8;
            function W(t, e) {
                return D | (t ? q : 0) | (e ? G : 0);
            }
            var J = function (t, e, n) {
                    (this.options = t = K(t)),
                        (this.sourceFile = t.sourceFile),
                        (this.keywords = L(a[t.ecmaVersion >= 6 ? 6 : "module" === t.sourceType ? "5module" : 5]));
                    var o = "";
                    if (!0 !== t.allowReserved) {
                        for (var r = t.ecmaVersion; !(o = i[r]); r--);
                        "module" === t.sourceType && (o += " await");
                    }
                    this.reservedWords = L(o);
                    var s = (o ? o + " " : "") + i.strict;
                    (this.reservedWordsStrict = L(s)),
                        (this.reservedWordsStrictBind = L(s + " " + i.strictBind)),
                        (this.input = String(e)),
                        (this.containsEsc = !1),
                        n
                            ? ((this.pos = n),
                              (this.lineStart = this.input.lastIndexOf("\n", n - 1) + 1),
                              (this.curLine = this.input.slice(0, this.lineStart).split(C).length))
                            : ((this.pos = this.lineStart = 0), (this.curLine = 1)),
                        (this.type = w.eof),
                        (this.value = null),
                        (this.start = this.end = this.pos),
                        (this.startLoc = this.endLoc = this.curPosition()),
                        (this.lastTokEndLoc = this.lastTokStartLoc = null),
                        (this.lastTokStart = this.lastTokEnd = this.pos),
                        (this.context = this.initialContext()),
                        (this.exprAllowed = !0),
                        (this.inModule = "module" === t.sourceType),
                        (this.strict = this.inModule || this.strictDirective(this.pos)),
                        (this.potentialArrowAt = -1),
                        (this.yieldPos = this.awaitPos = this.awaitIdentPos = 0),
                        (this.labels = []),
                        (this.undefinedExports = {}),
                        0 === this.pos && t.allowHashBang && "#!" === this.input.slice(0, 2) && this.skipLineComment(2),
                        (this.scopeStack = []),
                        this.enterScope(1),
                        (this.regexpState = null);
                },
                X = {
                    inFunction: {configurable: !0},
                    inGenerator: {configurable: !0},
                    inAsync: {configurable: !0},
                    allowSuper: {configurable: !0},
                    allowDirectSuper: {configurable: !0},
                    treatFunctionsAsVar: {configurable: !0}
                };
            (J.prototype.parse = function () {
                var t = this.options.program || this.startNode();
                return this.nextToken(), this.parseTopLevel(t);
            }),
                (X.inFunction.get = function () {
                    return (this.currentVarScope().flags & D) > 0;
                }),
                (X.inGenerator.get = function () {
                    return (this.currentVarScope().flags & G) > 0;
                }),
                (X.inAsync.get = function () {
                    return (this.currentVarScope().flags & q) > 0;
                }),
                (X.allowSuper.get = function () {
                    return (64 & this.currentThisScope().flags) > 0;
                }),
                (X.allowDirectSuper.get = function () {
                    return (128 & this.currentThisScope().flags) > 0;
                }),
                (X.treatFunctionsAsVar.get = function () {
                    return this.treatFunctionsAsVarInScope(this.currentScope());
                }),
                (J.prototype.inNonArrowFunction = function () {
                    return (this.currentThisScope().flags & D) > 0;
                }),
                (J.extend = function () {
                    for (var t = [], e = arguments.length; e--; ) t[e] = arguments[e];
                    for (var n = this, i = 0; i < t.length; i++) n = t[i](n);
                    return n;
                }),
                (J.parse = function (t, e) {
                    return new this(e, t).parse();
                }),
                (J.parseExpressionAt = function (t, e, n) {
                    var i = new this(n, t, e);
                    return i.nextToken(), i.parseExpression();
                }),
                (J.tokenizer = function (t, e) {
                    return new this(e, t);
                }),
                Object.defineProperties(J.prototype, X);
            var Y = J.prototype,
                H = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
            function Q() {
                this.shorthandAssign =
                    this.trailingComma =
                    this.parenthesizedAssign =
                    this.parenthesizedBind =
                    this.doubleProto =
                        -1;
            }
            (Y.strictDirective = function (t) {
                for (;;) {
                    (I.lastIndex = t), (t += I.exec(this.input)[0].length);
                    var e = H.exec(this.input.slice(t));
                    if (!e) return !1;
                    if ("use strict" === (e[1] || e[2])) return !0;
                    (t += e[0].length),
                        (I.lastIndex = t),
                        (t += I.exec(this.input)[0].length),
                        ";" === this.input[t] && t++;
                }
            }),
                (Y.eat = function (t) {
                    return this.type === t && (this.next(), !0);
                }),
                (Y.isContextual = function (t) {
                    return this.type === w.name && this.value === t && !this.containsEsc;
                }),
                (Y.eatContextual = function (t) {
                    return !!this.isContextual(t) && (this.next(), !0);
                }),
                (Y.expectContextual = function (t) {
                    this.eatContextual(t) || this.unexpected();
                }),
                (Y.canInsertSemicolon = function () {
                    return (
                        this.type === w.eof ||
                        this.type === w.braceR ||
                        C.test(this.input.slice(this.lastTokEnd, this.start))
                    );
                }),
                (Y.insertSemicolon = function () {
                    if (this.canInsertSemicolon())
                        return (
                            this.options.onInsertedSemicolon &&
                                this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc),
                            !0
                        );
                }),
                (Y.semicolon = function () {
                    this.eat(w.semi) || this.insertSemicolon() || this.unexpected();
                }),
                (Y.afterTrailingComma = function (t, e) {
                    if (this.type === t)
                        return (
                            this.options.onTrailingComma &&
                                this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc),
                            e || this.next(),
                            !0
                        );
                }),
                (Y.expect = function (t) {
                    this.eat(t) || this.unexpected();
                }),
                (Y.unexpected = function (t) {
                    this.raise(null != t ? t : this.start, "Unexpected token");
                }),
                (Y.checkPatternErrors = function (t, e) {
                    if (t) {
                        t.trailingComma > -1 &&
                            this.raiseRecoverable(t.trailingComma, "Comma is not permitted after the rest element");
                        var n = e ? t.parenthesizedAssign : t.parenthesizedBind;
                        n > -1 && this.raiseRecoverable(n, "Parenthesized pattern");
                    }
                }),
                (Y.checkExpressionErrors = function (t, e) {
                    if (!t) return !1;
                    var n = t.shorthandAssign,
                        i = t.doubleProto;
                    if (!e) return n >= 0 || i >= 0;
                    n >= 0 && this.raise(n, "Shorthand property assignments are valid only in destructuring patterns"),
                        i >= 0 && this.raiseRecoverable(i, "Redefinition of __proto__ property");
                }),
                (Y.checkYieldAwaitInDefaultParams = function () {
                    this.yieldPos &&
                        (!this.awaitPos || this.yieldPos < this.awaitPos) &&
                        this.raise(this.yieldPos, "Yield expression cannot be a default value"),
                        this.awaitPos && this.raise(this.awaitPos, "Await expression cannot be a default value");
                }),
                (Y.isSimpleAssignTarget = function (t) {
                    return "ParenthesizedExpression" === t.type
                        ? this.isSimpleAssignTarget(t.expression)
                        : "Identifier" === t.type || "MemberExpression" === t.type;
                });
            var Z = J.prototype;
            Z.parseTopLevel = function (t) {
                var e = {};
                for (t.body || (t.body = []); this.type !== w.eof; ) {
                    var n = this.parseStatement(null, !0, e);
                    t.body.push(n);
                }
                if (this.inModule)
                    for (var i = 0, o = Object.keys(this.undefinedExports); i < o.length; i += 1) {
                        var a = o[i];
                        this.raiseRecoverable(this.undefinedExports[a].start, "Export '" + a + "' is not defined");
                    }
                return (
                    this.adaptDirectivePrologue(t.body),
                    this.next(),
                    (t.sourceType = this.options.sourceType),
                    this.finishNode(t, "Program")
                );
            };
            var z = {kind: "loop"},
                _ = {kind: "switch"};
            (Z.isLet = function (t) {
                if (this.options.ecmaVersion < 6 || !this.isContextual("let")) return !1;
                I.lastIndex = this.pos;
                var e = I.exec(this.input),
                    n = this.pos + e[0].length,
                    i = this.input.charCodeAt(n);
                if (91 === i) return !0;
                if (t) return !1;
                if (123 === i) return !0;
                if (f(i, !0)) {
                    for (var o = n + 1; y(this.input.charCodeAt(o), !0); ) ++o;
                    var a = this.input.slice(n, o);
                    if (!r.test(a)) return !0;
                }
                return !1;
            }),
                (Z.isAsyncFunction = function () {
                    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) return !1;
                    I.lastIndex = this.pos;
                    var t = I.exec(this.input),
                        e = this.pos + t[0].length;
                    return !(
                        C.test(this.input.slice(this.pos, e)) ||
                        "function" !== this.input.slice(e, e + 8) ||
                        (e + 8 !== this.input.length && y(this.input.charAt(e + 8)))
                    );
                }),
                (Z.parseStatement = function (t, e, n) {
                    var i,
                        o = this.type,
                        a = this.startNode();
                    switch ((this.isLet(t) && ((o = w._var), (i = "let")), o)) {
                        case w._break:
                        case w._continue:
                            return this.parseBreakContinueStatement(a, o.keyword);
                        case w._debugger:
                            return this.parseDebuggerStatement(a);
                        case w._do:
                            return this.parseDoStatement(a);
                        case w._for:
                            return this.parseForStatement(a);
                        case w._function:
                            return (
                                t &&
                                    (this.strict || ("if" !== t && "label" !== t)) &&
                                    this.options.ecmaVersion >= 6 &&
                                    this.unexpected(),
                                this.parseFunctionStatement(a, !1, !t)
                            );
                        case w._class:
                            return t && this.unexpected(), this.parseClass(a, !0);
                        case w._if:
                            return this.parseIfStatement(a);
                        case w._return:
                            return this.parseReturnStatement(a);
                        case w._switch:
                            return this.parseSwitchStatement(a);
                        case w._throw:
                            return this.parseThrowStatement(a);
                        case w._try:
                            return this.parseTryStatement(a);
                        case w._const:
                        case w._var:
                            return (
                                (i = i || this.value),
                                t && "var" !== i && this.unexpected(),
                                this.parseVarStatement(a, i)
                            );
                        case w._while:
                            return this.parseWhileStatement(a);
                        case w._with:
                            return this.parseWithStatement(a);
                        case w.braceL:
                            return this.parseBlock(!0, a);
                        case w.semi:
                            return this.parseEmptyStatement(a);
                        case w._export:
                        case w._import:
                            if (this.options.ecmaVersion > 10 && o === w._import) {
                                I.lastIndex = this.pos;
                                var r = I.exec(this.input),
                                    s = this.pos + r[0].length;
                                if (40 === this.input.charCodeAt(s))
                                    return this.parseExpressionStatement(a, this.parseExpression());
                            }
                            return (
                                this.options.allowImportExportEverywhere ||
                                    (e ||
                                        this.raise(
                                            this.start,
                                            "'import' and 'export' may only appear at the top level"
                                        ),
                                    this.inModule ||
                                        this.raise(
                                            this.start,
                                            "'import' and 'export' may appear only with 'sourceType: module'"
                                        )),
                                o === w._import ? this.parseImport(a) : this.parseExport(a, n)
                            );
                        default:
                            if (this.isAsyncFunction())
                                return t && this.unexpected(), this.next(), this.parseFunctionStatement(a, !0, !t);
                            var c = this.value,
                                l = this.parseExpression();
                            return o === w.name && "Identifier" === l.type && this.eat(w.colon)
                                ? this.parseLabeledStatement(a, c, l, t)
                                : this.parseExpressionStatement(a, l);
                    }
                }),
                (Z.parseBreakContinueStatement = function (t, e) {
                    var n = "break" === e;
                    this.next(),
                        this.eat(w.semi) || this.insertSemicolon()
                            ? (t.label = null)
                            : this.type !== w.name
                            ? this.unexpected()
                            : ((t.label = this.parseIdent()), this.semicolon());
                    for (var i = 0; i < this.labels.length; ++i) {
                        var o = this.labels[i];
                        if (null == t.label || o.name === t.label.name) {
                            if (null != o.kind && (n || "loop" === o.kind)) break;
                            if (t.label && n) break;
                        }
                    }
                    return (
                        i === this.labels.length && this.raise(t.start, "Unsyntactic " + e),
                        this.finishNode(t, n ? "BreakStatement" : "ContinueStatement")
                    );
                }),
                (Z.parseDebuggerStatement = function (t) {
                    return this.next(), this.semicolon(), this.finishNode(t, "DebuggerStatement");
                }),
                (Z.parseDoStatement = function (t) {
                    return (
                        this.next(),
                        this.labels.push(z),
                        (t.body = this.parseStatement("do")),
                        this.labels.pop(),
                        this.expect(w._while),
                        (t.test = this.parseParenExpression()),
                        this.options.ecmaVersion >= 6 ? this.eat(w.semi) : this.semicolon(),
                        this.finishNode(t, "DoWhileStatement")
                    );
                }),
                (Z.parseForStatement = function (t) {
                    this.next();
                    var e =
                        this.options.ecmaVersion >= 9 &&
                        (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) &&
                        this.eatContextual("await")
                            ? this.lastTokStart
                            : -1;
                    if ((this.labels.push(z), this.enterScope(0), this.expect(w.parenL), this.type === w.semi))
                        return e > -1 && this.unexpected(e), this.parseFor(t, null);
                    var n = this.isLet();
                    if (this.type === w._var || this.type === w._const || n) {
                        var i = this.startNode(),
                            o = n ? "let" : this.value;
                        return (
                            this.next(),
                            this.parseVar(i, !0, o),
                            this.finishNode(i, "VariableDeclaration"),
                            (this.type === w._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) &&
                            1 === i.declarations.length
                                ? (this.options.ecmaVersion >= 9 &&
                                      (this.type === w._in ? e > -1 && this.unexpected(e) : (t.await = e > -1)),
                                  this.parseForIn(t, i))
                                : (e > -1 && this.unexpected(e), this.parseFor(t, i))
                        );
                    }
                    var a = new Q(),
                        r = this.parseExpression(!0, a);
                    return this.type === w._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                        ? (this.options.ecmaVersion >= 9 &&
                              (this.type === w._in ? e > -1 && this.unexpected(e) : (t.await = e > -1)),
                          this.toAssignable(r, !1, a),
                          this.checkLVal(r),
                          this.parseForIn(t, r))
                        : (this.checkExpressionErrors(a, !0), e > -1 && this.unexpected(e), this.parseFor(t, r));
                }),
                (Z.parseFunctionStatement = function (t, e, n) {
                    return this.next(), this.parseFunction(t, tt | (n ? 0 : et), !1, e);
                }),
                (Z.parseIfStatement = function (t) {
                    return (
                        this.next(),
                        (t.test = this.parseParenExpression()),
                        (t.consequent = this.parseStatement("if")),
                        (t.alternate = this.eat(w._else) ? this.parseStatement("if") : null),
                        this.finishNode(t, "IfStatement")
                    );
                }),
                (Z.parseReturnStatement = function (t) {
                    return (
                        this.inFunction ||
                            this.options.allowReturnOutsideFunction ||
                            this.raise(this.start, "'return' outside of function"),
                        this.next(),
                        this.eat(w.semi) || this.insertSemicolon()
                            ? (t.argument = null)
                            : ((t.argument = this.parseExpression()), this.semicolon()),
                        this.finishNode(t, "ReturnStatement")
                    );
                }),
                (Z.parseSwitchStatement = function (t) {
                    var e;
                    this.next(),
                        (t.discriminant = this.parseParenExpression()),
                        (t.cases = []),
                        this.expect(w.braceL),
                        this.labels.push(_),
                        this.enterScope(0);
                    for (var n = !1; this.type !== w.braceR; )
                        if (this.type === w._case || this.type === w._default) {
                            var i = this.type === w._case;
                            e && this.finishNode(e, "SwitchCase"),
                                t.cases.push((e = this.startNode())),
                                (e.consequent = []),
                                this.next(),
                                i
                                    ? (e.test = this.parseExpression())
                                    : (n && this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"),
                                      (n = !0),
                                      (e.test = null)),
                                this.expect(w.colon);
                        } else e || this.unexpected(), e.consequent.push(this.parseStatement(null));
                    return (
                        this.exitScope(),
                        e && this.finishNode(e, "SwitchCase"),
                        this.next(),
                        this.labels.pop(),
                        this.finishNode(t, "SwitchStatement")
                    );
                }),
                (Z.parseThrowStatement = function (t) {
                    return (
                        this.next(),
                        C.test(this.input.slice(this.lastTokEnd, this.start)) &&
                            this.raise(this.lastTokEnd, "Illegal newline after throw"),
                        (t.argument = this.parseExpression()),
                        this.semicolon(),
                        this.finishNode(t, "ThrowStatement")
                    );
                });
            var $ = [];
            (Z.parseTryStatement = function (t) {
                if ((this.next(), (t.block = this.parseBlock()), (t.handler = null), this.type === w._catch)) {
                    var e = this.startNode();
                    if ((this.next(), this.eat(w.parenL))) {
                        e.param = this.parseBindingAtom();
                        var n = "Identifier" === e.param.type;
                        this.enterScope(n ? 32 : 0), this.checkLVal(e.param, n ? 4 : 2), this.expect(w.parenR);
                    } else this.options.ecmaVersion < 10 && this.unexpected(), (e.param = null), this.enterScope(0);
                    (e.body = this.parseBlock(!1)), this.exitScope(), (t.handler = this.finishNode(e, "CatchClause"));
                }
                return (
                    (t.finalizer = this.eat(w._finally) ? this.parseBlock() : null),
                    t.handler || t.finalizer || this.raise(t.start, "Missing catch or finally clause"),
                    this.finishNode(t, "TryStatement")
                );
            }),
                (Z.parseVarStatement = function (t, e) {
                    return (
                        this.next(),
                        this.parseVar(t, !1, e),
                        this.semicolon(),
                        this.finishNode(t, "VariableDeclaration")
                    );
                }),
                (Z.parseWhileStatement = function (t) {
                    return (
                        this.next(),
                        (t.test = this.parseParenExpression()),
                        this.labels.push(z),
                        (t.body = this.parseStatement("while")),
                        this.labels.pop(),
                        this.finishNode(t, "WhileStatement")
                    );
                }),
                (Z.parseWithStatement = function (t) {
                    return (
                        this.strict && this.raise(this.start, "'with' in strict mode"),
                        this.next(),
                        (t.object = this.parseParenExpression()),
                        (t.body = this.parseStatement("with")),
                        this.finishNode(t, "WithStatement")
                    );
                }),
                (Z.parseEmptyStatement = function (t) {
                    return this.next(), this.finishNode(t, "EmptyStatement");
                }),
                (Z.parseLabeledStatement = function (t, e, n, i) {
                    for (var o = 0, a = this.labels; o < a.length; o += 1)
                        a[o].name === e && this.raise(n.start, "Label '" + e + "' is already declared");
                    for (
                        var r = this.type.isLoop ? "loop" : this.type === w._switch ? "switch" : null,
                            s = this.labels.length - 1;
                        s >= 0;
                        s--
                    ) {
                        var c = this.labels[s];
                        if (c.statementStart !== t.start) break;
                        (c.statementStart = this.start), (c.kind = r);
                    }
                    return (
                        this.labels.push({name: e, kind: r, statementStart: this.start}),
                        (t.body = this.parseStatement(i ? (-1 === i.indexOf("label") ? i + "label" : i) : "label")),
                        this.labels.pop(),
                        (t.label = n),
                        this.finishNode(t, "LabeledStatement")
                    );
                }),
                (Z.parseExpressionStatement = function (t, e) {
                    return (t.expression = e), this.semicolon(), this.finishNode(t, "ExpressionStatement");
                }),
                (Z.parseBlock = function (t, e) {
                    for (
                        void 0 === t && (t = !0),
                            void 0 === e && (e = this.startNode()),
                            e.body = [],
                            this.expect(w.braceL),
                            t && this.enterScope(0);
                        !this.eat(w.braceR);

                    ) {
                        var n = this.parseStatement(null);
                        e.body.push(n);
                    }
                    return t && this.exitScope(), this.finishNode(e, "BlockStatement");
                }),
                (Z.parseFor = function (t, e) {
                    return (
                        (t.init = e),
                        this.expect(w.semi),
                        (t.test = this.type === w.semi ? null : this.parseExpression()),
                        this.expect(w.semi),
                        (t.update = this.type === w.parenR ? null : this.parseExpression()),
                        this.expect(w.parenR),
                        (t.body = this.parseStatement("for")),
                        this.exitScope(),
                        this.labels.pop(),
                        this.finishNode(t, "ForStatement")
                    );
                }),
                (Z.parseForIn = function (t, e) {
                    var n = this.type === w._in;
                    return (
                        this.next(),
                        "VariableDeclaration" === e.type &&
                        null != e.declarations[0].init &&
                        (!n ||
                            this.options.ecmaVersion < 8 ||
                            this.strict ||
                            "var" !== e.kind ||
                            "Identifier" !== e.declarations[0].id.type)
                            ? this.raise(
                                  e.start,
                                  (n ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
                              )
                            : "AssignmentPattern" === e.type &&
                              this.raise(e.start, "Invalid left-hand side in for-loop"),
                        (t.left = e),
                        (t.right = n ? this.parseExpression() : this.parseMaybeAssign()),
                        this.expect(w.parenR),
                        (t.body = this.parseStatement("for")),
                        this.exitScope(),
                        this.labels.pop(),
                        this.finishNode(t, n ? "ForInStatement" : "ForOfStatement")
                    );
                }),
                (Z.parseVar = function (t, e, n) {
                    for (t.declarations = [], t.kind = n; ; ) {
                        var i = this.startNode();
                        if (
                            (this.parseVarId(i, n),
                            this.eat(w.eq)
                                ? (i.init = this.parseMaybeAssign(e))
                                : "const" !== n ||
                                  this.type === w._in ||
                                  (this.options.ecmaVersion >= 6 && this.isContextual("of"))
                                ? "Identifier" === i.id.type || (e && (this.type === w._in || this.isContextual("of")))
                                    ? (i.init = null)
                                    : this.raise(
                                          this.lastTokEnd,
                                          "Complex binding patterns require an initialization value"
                                      )
                                : this.unexpected(),
                            t.declarations.push(this.finishNode(i, "VariableDeclarator")),
                            !this.eat(w.comma))
                        )
                            break;
                    }
                    return t;
                }),
                (Z.parseVarId = function (t, e) {
                    (t.id = this.parseBindingAtom()), this.checkLVal(t.id, "var" === e ? 1 : 2, !1);
                });
            var tt = 1,
                et = 2;
            (Z.parseFunction = function (t, e, n, i) {
                this.initFunction(t),
                    (this.options.ecmaVersion >= 9 || (this.options.ecmaVersion >= 6 && !i)) &&
                        (this.type === w.star && e & et && this.unexpected(), (t.generator = this.eat(w.star))),
                    this.options.ecmaVersion >= 8 && (t.async = !!i),
                    e & tt &&
                        ((t.id = 4 & e && this.type !== w.name ? null : this.parseIdent()),
                        !t.id ||
                            e & et ||
                            this.checkLVal(
                                t.id,
                                this.strict || t.generator || t.async ? (this.treatFunctionsAsVar ? 1 : 2) : 3
                            ));
                var o = this.yieldPos,
                    a = this.awaitPos,
                    r = this.awaitIdentPos;
                return (
                    (this.yieldPos = 0),
                    (this.awaitPos = 0),
                    (this.awaitIdentPos = 0),
                    this.enterScope(W(t.async, t.generator)),
                    e & tt || (t.id = this.type === w.name ? this.parseIdent() : null),
                    this.parseFunctionParams(t),
                    this.parseFunctionBody(t, n, !1),
                    (this.yieldPos = o),
                    (this.awaitPos = a),
                    (this.awaitIdentPos = r),
                    this.finishNode(t, e & tt ? "FunctionDeclaration" : "FunctionExpression")
                );
            }),
                (Z.parseFunctionParams = function (t) {
                    this.expect(w.parenL),
                        (t.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8)),
                        this.checkYieldAwaitInDefaultParams();
                }),
                (Z.parseClass = function (t, e) {
                    this.next();
                    var n = this.strict;
                    (this.strict = !0), this.parseClassId(t, e), this.parseClassSuper(t);
                    var i = this.startNode(),
                        o = !1;
                    for (i.body = [], this.expect(w.braceL); !this.eat(w.braceR); ) {
                        var a = this.parseClassElement(null !== t.superClass);
                        a &&
                            (i.body.push(a),
                            "MethodDefinition" === a.type &&
                                "constructor" === a.kind &&
                                (o && this.raise(a.start, "Duplicate constructor in the same class"), (o = !0)));
                    }
                    return (
                        (t.body = this.finishNode(i, "ClassBody")),
                        (this.strict = n),
                        this.finishNode(t, e ? "ClassDeclaration" : "ClassExpression")
                    );
                }),
                (Z.parseClassElement = function (t) {
                    var e = this;
                    if (this.eat(w.semi)) return null;
                    var n = this.startNode(),
                        i = function (t, i) {
                            void 0 === i && (i = !1);
                            var o = e.start,
                                a = e.startLoc;
                            return !(
                                !e.eatContextual(t) ||
                                ((e.type === w.parenL || (i && e.canInsertSemicolon())) &&
                                    (n.key && e.unexpected(),
                                    (n.computed = !1),
                                    (n.key = e.startNodeAt(o, a)),
                                    (n.key.name = t),
                                    e.finishNode(n.key, "Identifier"),
                                    1))
                            );
                        };
                    (n.kind = "method"), (n.static = i("static"));
                    var o = this.eat(w.star),
                        a = !1;
                    o ||
                        (this.options.ecmaVersion >= 8 && i("async", !0)
                            ? ((a = !0), (o = this.options.ecmaVersion >= 9 && this.eat(w.star)))
                            : i("get")
                            ? (n.kind = "get")
                            : i("set") && (n.kind = "set")),
                        n.key || this.parsePropertyName(n);
                    var r = n.key,
                        s = !1;
                    return (
                        n.computed ||
                        n.static ||
                        !(
                            ("Identifier" === r.type && "constructor" === r.name) ||
                            ("Literal" === r.type && "constructor" === r.value)
                        )
                            ? n.static &&
                              "Identifier" === r.type &&
                              "prototype" === r.name &&
                              this.raise(r.start, "Classes may not have a static property named prototype")
                            : ("method" !== n.kind && this.raise(r.start, "Constructor can't have get/set modifier"),
                              o && this.raise(r.start, "Constructor can't be a generator"),
                              a && this.raise(r.start, "Constructor can't be an async method"),
                              (n.kind = "constructor"),
                              (s = t)),
                        this.parseClassMethod(n, o, a, s),
                        "get" === n.kind &&
                            0 !== n.value.params.length &&
                            this.raiseRecoverable(n.value.start, "getter should have no params"),
                        "set" === n.kind &&
                            1 !== n.value.params.length &&
                            this.raiseRecoverable(n.value.start, "setter should have exactly one param"),
                        "set" === n.kind &&
                            "RestElement" === n.value.params[0].type &&
                            this.raiseRecoverable(n.value.params[0].start, "Setter cannot use rest params"),
                        n
                    );
                }),
                (Z.parseClassMethod = function (t, e, n, i) {
                    return (t.value = this.parseMethod(e, n, i)), this.finishNode(t, "MethodDefinition");
                }),
                (Z.parseClassId = function (t, e) {
                    this.type === w.name
                        ? ((t.id = this.parseIdent()), e && this.checkLVal(t.id, 2, !1))
                        : (!0 === e && this.unexpected(), (t.id = null));
                }),
                (Z.parseClassSuper = function (t) {
                    t.superClass = this.eat(w._extends) ? this.parseExprSubscripts() : null;
                }),
                (Z.parseExport = function (t, e) {
                    if ((this.next(), this.eat(w.star)))
                        return (
                            this.expectContextual("from"),
                            this.type !== w.string && this.unexpected(),
                            (t.source = this.parseExprAtom()),
                            this.semicolon(),
                            this.finishNode(t, "ExportAllDeclaration")
                        );
                    if (this.eat(w._default)) {
                        var n;
                        if (
                            (this.checkExport(e, "default", this.lastTokStart),
                            this.type === w._function || (n = this.isAsyncFunction()))
                        ) {
                            var i = this.startNode();
                            this.next(), n && this.next(), (t.declaration = this.parseFunction(i, 4 | tt, !1, n));
                        } else if (this.type === w._class) {
                            var o = this.startNode();
                            t.declaration = this.parseClass(o, "nullableID");
                        } else (t.declaration = this.parseMaybeAssign()), this.semicolon();
                        return this.finishNode(t, "ExportDefaultDeclaration");
                    }
                    if (this.shouldParseExportStatement())
                        (t.declaration = this.parseStatement(null)),
                            "VariableDeclaration" === t.declaration.type
                                ? this.checkVariableExport(e, t.declaration.declarations)
                                : this.checkExport(e, t.declaration.id.name, t.declaration.id.start),
                            (t.specifiers = []),
                            (t.source = null);
                    else {
                        if (
                            ((t.declaration = null),
                            (t.specifiers = this.parseExportSpecifiers(e)),
                            this.eatContextual("from"))
                        )
                            this.type !== w.string && this.unexpected(), (t.source = this.parseExprAtom());
                        else {
                            for (var a = 0, r = t.specifiers; a < r.length; a += 1) {
                                var s = r[a];
                                this.checkUnreserved(s.local), this.checkLocalExport(s.local);
                            }
                            t.source = null;
                        }
                        this.semicolon();
                    }
                    return this.finishNode(t, "ExportNamedDeclaration");
                }),
                (Z.checkExport = function (t, e, n) {
                    t && (T(t, e) && this.raiseRecoverable(n, "Duplicate export '" + e + "'"), (t[e] = !0));
                }),
                (Z.checkPatternExport = function (t, e) {
                    var n = e.type;
                    if ("Identifier" === n) this.checkExport(t, e.name, e.start);
                    else if ("ObjectPattern" === n)
                        for (var i = 0, o = e.properties; i < o.length; i += 1) {
                            var a = o[i];
                            this.checkPatternExport(t, a);
                        }
                    else if ("ArrayPattern" === n)
                        for (var r = 0, s = e.elements; r < s.length; r += 1) {
                            var c = s[r];
                            c && this.checkPatternExport(t, c);
                        }
                    else
                        "Property" === n
                            ? this.checkPatternExport(t, e.value)
                            : "AssignmentPattern" === n
                            ? this.checkPatternExport(t, e.left)
                            : "RestElement" === n
                            ? this.checkPatternExport(t, e.argument)
                            : "ParenthesizedExpression" === n && this.checkPatternExport(t, e.expression);
                }),
                (Z.checkVariableExport = function (t, e) {
                    if (t)
                        for (var n = 0, i = e; n < i.length; n += 1) {
                            var o = i[n];
                            this.checkPatternExport(t, o.id);
                        }
                }),
                (Z.shouldParseExportStatement = function () {
                    return (
                        "var" === this.type.keyword ||
                        "const" === this.type.keyword ||
                        "class" === this.type.keyword ||
                        "function" === this.type.keyword ||
                        this.isLet() ||
                        this.isAsyncFunction()
                    );
                }),
                (Z.parseExportSpecifiers = function (t) {
                    var e = [],
                        n = !0;
                    for (this.expect(w.braceL); !this.eat(w.braceR); ) {
                        if (n) n = !1;
                        else if ((this.expect(w.comma), this.afterTrailingComma(w.braceR))) break;
                        var i = this.startNode();
                        (i.local = this.parseIdent(!0)),
                            (i.exported = this.eatContextual("as") ? this.parseIdent(!0) : i.local),
                            this.checkExport(t, i.exported.name, i.exported.start),
                            e.push(this.finishNode(i, "ExportSpecifier"));
                    }
                    return e;
                }),
                (Z.parseImport = function (t) {
                    return (
                        this.next(),
                        this.type === w.string
                            ? ((t.specifiers = $), (t.source = this.parseExprAtom()))
                            : ((t.specifiers = this.parseImportSpecifiers()),
                              this.expectContextual("from"),
                              (t.source = this.type === w.string ? this.parseExprAtom() : this.unexpected())),
                        this.semicolon(),
                        this.finishNode(t, "ImportDeclaration")
                    );
                }),
                (Z.parseImportSpecifiers = function () {
                    var t = [],
                        e = !0;
                    if (this.type === w.name) {
                        var n = this.startNode();
                        if (
                            ((n.local = this.parseIdent()),
                            this.checkLVal(n.local, 2),
                            t.push(this.finishNode(n, "ImportDefaultSpecifier")),
                            !this.eat(w.comma))
                        )
                            return t;
                    }
                    if (this.type === w.star) {
                        var i = this.startNode();
                        return (
                            this.next(),
                            this.expectContextual("as"),
                            (i.local = this.parseIdent()),
                            this.checkLVal(i.local, 2),
                            t.push(this.finishNode(i, "ImportNamespaceSpecifier")),
                            t
                        );
                    }
                    for (this.expect(w.braceL); !this.eat(w.braceR); ) {
                        if (e) e = !1;
                        else if ((this.expect(w.comma), this.afterTrailingComma(w.braceR))) break;
                        var o = this.startNode();
                        (o.imported = this.parseIdent(!0)),
                            this.eatContextual("as")
                                ? (o.local = this.parseIdent())
                                : (this.checkUnreserved(o.imported), (o.local = o.imported)),
                            this.checkLVal(o.local, 2),
                            t.push(this.finishNode(o, "ImportSpecifier"));
                    }
                    return t;
                }),
                (Z.adaptDirectivePrologue = function (t) {
                    for (var e = 0; e < t.length && this.isDirectiveCandidate(t[e]); ++e)
                        t[e].directive = t[e].expression.raw.slice(1, -1);
                }),
                (Z.isDirectiveCandidate = function (t) {
                    return (
                        "ExpressionStatement" === t.type &&
                        "Literal" === t.expression.type &&
                        "string" == typeof t.expression.value &&
                        ('"' === this.input[t.start] || "'" === this.input[t.start])
                    );
                });
            var nt = J.prototype;
            (nt.toAssignable = function (t, e, n) {
                if (this.options.ecmaVersion >= 6 && t)
                    switch (t.type) {
                        case "Identifier":
                            this.inAsync &&
                                "await" === t.name &&
                                this.raise(t.start, "Cannot use 'await' as identifier inside an async function");
                            break;
                        case "ObjectPattern":
                        case "ArrayPattern":
                        case "RestElement":
                            break;
                        case "ObjectExpression":
                            (t.type = "ObjectPattern"), n && this.checkPatternErrors(n, !0);
                            for (var i = 0, o = t.properties; i < o.length; i += 1) {
                                var a = o[i];
                                this.toAssignable(a, e),
                                    "RestElement" !== a.type ||
                                        ("ArrayPattern" !== a.argument.type && "ObjectPattern" !== a.argument.type) ||
                                        this.raise(a.argument.start, "Unexpected token");
                            }
                            break;
                        case "Property":
                            "init" !== t.kind &&
                                this.raise(t.key.start, "Object pattern can't contain getter or setter"),
                                this.toAssignable(t.value, e);
                            break;
                        case "ArrayExpression":
                            (t.type = "ArrayPattern"),
                                n && this.checkPatternErrors(n, !0),
                                this.toAssignableList(t.elements, e);
                            break;
                        case "SpreadElement":
                            (t.type = "RestElement"),
                                this.toAssignable(t.argument, e),
                                "AssignmentPattern" === t.argument.type &&
                                    this.raise(t.argument.start, "Rest elements cannot have a default value");
                            break;
                        case "AssignmentExpression":
                            "=" !== t.operator &&
                                this.raise(t.left.end, "Only '=' operator can be used for specifying default value."),
                                (t.type = "AssignmentPattern"),
                                delete t.operator,
                                this.toAssignable(t.left, e);
                        case "AssignmentPattern":
                            break;
                        case "ParenthesizedExpression":
                            this.toAssignable(t.expression, e, n);
                            break;
                        case "MemberExpression":
                            if (!e) break;
                        default:
                            this.raise(t.start, "Assigning to rvalue");
                    }
                else n && this.checkPatternErrors(n, !0);
                return t;
            }),
                (nt.toAssignableList = function (t, e) {
                    for (var n = t.length, i = 0; i < n; i++) {
                        var o = t[i];
                        o && this.toAssignable(o, e);
                    }
                    if (n) {
                        var a = t[n - 1];
                        6 === this.options.ecmaVersion &&
                            e &&
                            a &&
                            "RestElement" === a.type &&
                            "Identifier" !== a.argument.type &&
                            this.unexpected(a.argument.start);
                    }
                    return t;
                }),
                (nt.parseSpread = function (t) {
                    var e = this.startNode();
                    return (
                        this.next(), (e.argument = this.parseMaybeAssign(!1, t)), this.finishNode(e, "SpreadElement")
                    );
                }),
                (nt.parseRestBinding = function () {
                    var t = this.startNode();
                    return (
                        this.next(),
                        6 === this.options.ecmaVersion && this.type !== w.name && this.unexpected(),
                        (t.argument = this.parseBindingAtom()),
                        this.finishNode(t, "RestElement")
                    );
                }),
                (nt.parseBindingAtom = function () {
                    if (this.options.ecmaVersion >= 6)
                        switch (this.type) {
                            case w.bracketL:
                                var t = this.startNode();
                                return (
                                    this.next(),
                                    (t.elements = this.parseBindingList(w.bracketR, !0, !0)),
                                    this.finishNode(t, "ArrayPattern")
                                );
                            case w.braceL:
                                return this.parseObj(!0);
                        }
                    return this.parseIdent();
                }),
                (nt.parseBindingList = function (t, e, n) {
                    for (var i = [], o = !0; !this.eat(t); )
                        if ((o ? (o = !1) : this.expect(w.comma), e && this.type === w.comma)) i.push(null);
                        else {
                            if (n && this.afterTrailingComma(t)) break;
                            if (this.type === w.ellipsis) {
                                var a = this.parseRestBinding();
                                this.parseBindingListItem(a),
                                    i.push(a),
                                    this.type === w.comma &&
                                        this.raise(this.start, "Comma is not permitted after the rest element"),
                                    this.expect(t);
                                break;
                            }
                            var r = this.parseMaybeDefault(this.start, this.startLoc);
                            this.parseBindingListItem(r), i.push(r);
                        }
                    return i;
                }),
                (nt.parseBindingListItem = function (t) {
                    return t;
                }),
                (nt.parseMaybeDefault = function (t, e, n) {
                    if (((n = n || this.parseBindingAtom()), this.options.ecmaVersion < 6 || !this.eat(w.eq))) return n;
                    var i = this.startNodeAt(t, e);
                    return (i.left = n), (i.right = this.parseMaybeAssign()), this.finishNode(i, "AssignmentPattern");
                }),
                (nt.checkLVal = function (t, e, n) {
                    switch ((void 0 === e && (e = 0), t.type)) {
                        case "Identifier":
                            2 === e &&
                                "let" === t.name &&
                                this.raiseRecoverable(t.start, "let is disallowed as a lexically bound name"),
                                this.strict &&
                                    this.reservedWordsStrictBind.test(t.name) &&
                                    this.raiseRecoverable(
                                        t.start,
                                        (e ? "Binding " : "Assigning to ") + t.name + " in strict mode"
                                    ),
                                n &&
                                    (T(n, t.name) && this.raiseRecoverable(t.start, "Argument name clash"),
                                    (n[t.name] = !0)),
                                0 !== e && 5 !== e && this.declareName(t.name, e, t.start);
                            break;
                        case "MemberExpression":
                            e && this.raiseRecoverable(t.start, "Binding member expression");
                            break;
                        case "ObjectPattern":
                            for (var i = 0, o = t.properties; i < o.length; i += 1) {
                                var a = o[i];
                                this.checkLVal(a, e, n);
                            }
                            break;
                        case "Property":
                            this.checkLVal(t.value, e, n);
                            break;
                        case "ArrayPattern":
                            for (var r = 0, s = t.elements; r < s.length; r += 1) {
                                var c = s[r];
                                c && this.checkLVal(c, e, n);
                            }
                            break;
                        case "AssignmentPattern":
                            this.checkLVal(t.left, e, n);
                            break;
                        case "RestElement":
                            this.checkLVal(t.argument, e, n);
                            break;
                        case "ParenthesizedExpression":
                            this.checkLVal(t.expression, e, n);
                            break;
                        default:
                            this.raise(t.start, (e ? "Binding" : "Assigning to") + " rvalue");
                    }
                });
            var it = J.prototype;
            (it.checkPropClash = function (t, e, n) {
                if (
                    !(
                        (this.options.ecmaVersion >= 9 && "SpreadElement" === t.type) ||
                        (this.options.ecmaVersion >= 6 && (t.computed || t.method || t.shorthand))
                    )
                ) {
                    var i,
                        o = t.key;
                    switch (o.type) {
                        case "Identifier":
                            i = o.name;
                            break;
                        case "Literal":
                            i = String(o.value);
                            break;
                        default:
                            return;
                    }
                    var a = t.kind;
                    if (this.options.ecmaVersion >= 6)
                        "__proto__" === i &&
                            "init" === a &&
                            (e.proto &&
                                (n && n.doubleProto < 0
                                    ? (n.doubleProto = o.start)
                                    : this.raiseRecoverable(o.start, "Redefinition of __proto__ property")),
                            (e.proto = !0));
                    else {
                        var r = e[(i = "$" + i)];
                        r
                            ? ("init" === a ? (this.strict && r.init) || r.get || r.set : r.init || r[a]) &&
                              this.raiseRecoverable(o.start, "Redefinition of property")
                            : (r = e[i] = {init: !1, get: !1, set: !1}),
                            (r[a] = !0);
                    }
                }
            }),
                (it.parseExpression = function (t, e) {
                    var n = this.start,
                        i = this.startLoc,
                        o = this.parseMaybeAssign(t, e);
                    if (this.type === w.comma) {
                        var a = this.startNodeAt(n, i);
                        for (a.expressions = [o]; this.eat(w.comma); ) a.expressions.push(this.parseMaybeAssign(t, e));
                        return this.finishNode(a, "SequenceExpression");
                    }
                    return o;
                }),
                (it.parseMaybeAssign = function (t, e, n) {
                    if (this.isContextual("yield")) {
                        if (this.inGenerator) return this.parseYield(t);
                        this.exprAllowed = !1;
                    }
                    var i = !1,
                        o = -1,
                        a = -1,
                        r = -1;
                    e
                        ? ((o = e.parenthesizedAssign),
                          (a = e.trailingComma),
                          (r = e.shorthandAssign),
                          (e.parenthesizedAssign = e.trailingComma = e.shorthandAssign = -1))
                        : ((e = new Q()), (i = !0));
                    var s = this.start,
                        c = this.startLoc;
                    (this.type !== w.parenL && this.type !== w.name) || (this.potentialArrowAt = this.start);
                    var l = this.parseMaybeConditional(t, e);
                    if ((n && (l = n.call(this, l, s, c)), this.type.isAssign)) {
                        var p = this.startNodeAt(s, c);
                        return (
                            (p.operator = this.value),
                            (p.left = this.type === w.eq ? this.toAssignable(l, !1, e) : l),
                            i || Q.call(e),
                            (e.shorthandAssign = -1),
                            this.checkLVal(l),
                            this.next(),
                            (p.right = this.parseMaybeAssign(t)),
                            this.finishNode(p, "AssignmentExpression")
                        );
                    }
                    return (
                        i && this.checkExpressionErrors(e, !0),
                        o > -1 && (e.parenthesizedAssign = o),
                        a > -1 && (e.trailingComma = a),
                        r > -1 && (e.shorthandAssign = r),
                        l
                    );
                }),
                (it.parseMaybeConditional = function (t, e) {
                    var n = this.start,
                        i = this.startLoc,
                        o = this.parseExprOps(t, e);
                    if (this.checkExpressionErrors(e)) return o;
                    if (this.eat(w.question)) {
                        var a = this.startNodeAt(n, i);
                        return (
                            (a.test = o),
                            (a.consequent = this.parseMaybeAssign()),
                            this.expect(w.colon),
                            (a.alternate = this.parseMaybeAssign(t)),
                            this.finishNode(a, "ConditionalExpression")
                        );
                    }
                    return o;
                }),
                (it.parseExprOps = function (t, e) {
                    var n = this.start,
                        i = this.startLoc,
                        o = this.parseMaybeUnary(e, !1);
                    return this.checkExpressionErrors(e)
                        ? o
                        : o.start === n && "ArrowFunctionExpression" === o.type
                        ? o
                        : this.parseExprOp(o, n, i, -1, t);
                }),
                (it.parseExprOp = function (t, e, n, i, o) {
                    var a = this.type.binop;
                    if (null != a && (!o || this.type !== w._in) && a > i) {
                        var r = this.type === w.logicalOR || this.type === w.logicalAND,
                            s = this.value;
                        this.next();
                        var c = this.start,
                            l = this.startLoc,
                            p = this.parseExprOp(this.parseMaybeUnary(null, !1), c, l, a, o),
                            u = this.buildBinary(e, n, t, p, s, r);
                        return this.parseExprOp(u, e, n, i, o);
                    }
                    return t;
                }),
                (it.buildBinary = function (t, e, n, i, o, a) {
                    var r = this.startNodeAt(t, e);
                    return (
                        (r.left = n),
                        (r.operator = o),
                        (r.right = i),
                        this.finishNode(r, a ? "LogicalExpression" : "BinaryExpression")
                    );
                }),
                (it.parseMaybeUnary = function (t, e) {
                    var n,
                        i = this.start,
                        o = this.startLoc;
                    if (
                        this.isContextual("await") &&
                        (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))
                    )
                        (n = this.parseAwait()), (e = !0);
                    else if (this.type.prefix) {
                        var a = this.startNode(),
                            r = this.type === w.incDec;
                        (a.operator = this.value),
                            (a.prefix = !0),
                            this.next(),
                            (a.argument = this.parseMaybeUnary(null, !0)),
                            this.checkExpressionErrors(t, !0),
                            r
                                ? this.checkLVal(a.argument)
                                : this.strict && "delete" === a.operator && "Identifier" === a.argument.type
                                ? this.raiseRecoverable(a.start, "Deleting local variable in strict mode")
                                : (e = !0),
                            (n = this.finishNode(a, r ? "UpdateExpression" : "UnaryExpression"));
                    } else {
                        if (((n = this.parseExprSubscripts(t)), this.checkExpressionErrors(t))) return n;
                        for (; this.type.postfix && !this.canInsertSemicolon(); ) {
                            var s = this.startNodeAt(i, o);
                            (s.operator = this.value),
                                (s.prefix = !1),
                                (s.argument = n),
                                this.checkLVal(n),
                                this.next(),
                                (n = this.finishNode(s, "UpdateExpression"));
                        }
                    }
                    return !e && this.eat(w.starstar)
                        ? this.buildBinary(i, o, n, this.parseMaybeUnary(null, !1), "**", !1)
                        : n;
                }),
                (it.parseExprSubscripts = function (t) {
                    var e = this.start,
                        n = this.startLoc,
                        i = this.parseExprAtom(t),
                        o =
                            "ArrowFunctionExpression" === i.type &&
                            ")" !== this.input.slice(this.lastTokStart, this.lastTokEnd);
                    if (this.checkExpressionErrors(t) || o) return i;
                    var a = this.parseSubscripts(i, e, n);
                    return (
                        t &&
                            "MemberExpression" === a.type &&
                            (t.parenthesizedAssign >= a.start && (t.parenthesizedAssign = -1),
                            t.parenthesizedBind >= a.start && (t.parenthesizedBind = -1)),
                        a
                    );
                }),
                (it.parseSubscripts = function (t, e, n, i) {
                    for (
                        var o =
                            this.options.ecmaVersion >= 8 &&
                            "Identifier" === t.type &&
                            "async" === t.name &&
                            this.lastTokEnd === t.end &&
                            !this.canInsertSemicolon() &&
                            "async" === this.input.slice(t.start, t.end);
                        ;

                    ) {
                        var a = this.parseSubscript(t, e, n, i, o);
                        if (a === t || "ArrowFunctionExpression" === a.type) return a;
                        t = a;
                    }
                }),
                (it.parseSubscript = function (t, e, n, i, o) {
                    var a = this.eat(w.bracketL);
                    if (a || this.eat(w.dot)) {
                        var r = this.startNodeAt(e, n);
                        (r.object = t),
                            (r.property = a
                                ? this.parseExpression()
                                : this.parseIdent("never" !== this.options.allowReserved)),
                            (r.computed = !!a),
                            a && this.expect(w.bracketR),
                            (t = this.finishNode(r, "MemberExpression"));
                    } else if (!i && this.eat(w.parenL)) {
                        var s = new Q(),
                            c = this.yieldPos,
                            l = this.awaitPos,
                            p = this.awaitIdentPos;
                        (this.yieldPos = 0), (this.awaitPos = 0), (this.awaitIdentPos = 0);
                        var u = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1, s);
                        if (o && !this.canInsertSemicolon() && this.eat(w.arrow))
                            return (
                                this.checkPatternErrors(s, !1),
                                this.checkYieldAwaitInDefaultParams(),
                                this.awaitIdentPos > 0 &&
                                    this.raise(
                                        this.awaitIdentPos,
                                        "Cannot use 'await' as identifier inside an async function"
                                    ),
                                (this.yieldPos = c),
                                (this.awaitPos = l),
                                (this.awaitIdentPos = p),
                                this.parseArrowExpression(this.startNodeAt(e, n), u, !0)
                            );
                        this.checkExpressionErrors(s, !0),
                            (this.yieldPos = c || this.yieldPos),
                            (this.awaitPos = l || this.awaitPos),
                            (this.awaitIdentPos = p || this.awaitIdentPos);
                        var d = this.startNodeAt(e, n);
                        (d.callee = t), (d.arguments = u), (t = this.finishNode(d, "CallExpression"));
                    } else if (this.type === w.backQuote) {
                        var h = this.startNodeAt(e, n);
                        (h.tag = t),
                            (h.quasi = this.parseTemplate({isTagged: !0})),
                            (t = this.finishNode(h, "TaggedTemplateExpression"));
                    }
                    return t;
                }),
                (it.parseExprAtom = function (t) {
                    this.type === w.slash && this.readRegexp();
                    var e,
                        n = this.potentialArrowAt === this.start;
                    switch (this.type) {
                        case w._super:
                            return (
                                this.allowSuper || this.raise(this.start, "'super' keyword outside a method"),
                                (e = this.startNode()),
                                this.next(),
                                this.type !== w.parenL ||
                                    this.allowDirectSuper ||
                                    this.raise(e.start, "super() call outside constructor of a subclass"),
                                this.type !== w.dot &&
                                    this.type !== w.bracketL &&
                                    this.type !== w.parenL &&
                                    this.unexpected(),
                                this.finishNode(e, "Super")
                            );
                        case w._this:
                            return (e = this.startNode()), this.next(), this.finishNode(e, "ThisExpression");
                        case w.name:
                            var i = this.start,
                                o = this.startLoc,
                                a = this.containsEsc,
                                r = this.parseIdent(!1);
                            if (
                                this.options.ecmaVersion >= 8 &&
                                !a &&
                                "async" === r.name &&
                                !this.canInsertSemicolon() &&
                                this.eat(w._function)
                            )
                                return this.parseFunction(this.startNodeAt(i, o), 0, !1, !0);
                            if (n && !this.canInsertSemicolon()) {
                                if (this.eat(w.arrow))
                                    return this.parseArrowExpression(this.startNodeAt(i, o), [r], !1);
                                if (this.options.ecmaVersion >= 8 && "async" === r.name && this.type === w.name && !a)
                                    return (
                                        (r = this.parseIdent(!1)),
                                        (!this.canInsertSemicolon() && this.eat(w.arrow)) || this.unexpected(),
                                        this.parseArrowExpression(this.startNodeAt(i, o), [r], !0)
                                    );
                            }
                            return r;
                        case w.regexp:
                            var s = this.value;
                            return ((e = this.parseLiteral(s.value)).regex = {pattern: s.pattern, flags: s.flags}), e;
                        case w.num:
                        case w.string:
                            return this.parseLiteral(this.value);
                        case w._null:
                        case w._true:
                        case w._false:
                            return (
                                ((e = this.startNode()).value = this.type === w._null ? null : this.type === w._true),
                                (e.raw = this.type.keyword),
                                this.next(),
                                this.finishNode(e, "Literal")
                            );
                        case w.parenL:
                            var c = this.start,
                                l = this.parseParenAndDistinguishExpression(n);
                            return (
                                t &&
                                    (t.parenthesizedAssign < 0 &&
                                        !this.isSimpleAssignTarget(l) &&
                                        (t.parenthesizedAssign = c),
                                    t.parenthesizedBind < 0 && (t.parenthesizedBind = c)),
                                l
                            );
                        case w.bracketL:
                            return (
                                (e = this.startNode()),
                                this.next(),
                                (e.elements = this.parseExprList(w.bracketR, !0, !0, t)),
                                this.finishNode(e, "ArrayExpression")
                            );
                        case w.braceL:
                            return this.parseObj(!1, t);
                        case w._function:
                            return (e = this.startNode()), this.next(), this.parseFunction(e, 0);
                        case w._class:
                            return this.parseClass(this.startNode(), !1);
                        case w._new:
                            return this.parseNew();
                        case w.backQuote:
                            return this.parseTemplate();
                        case w._import:
                            return this.options.ecmaVersion >= 11 ? this.parseExprImport() : this.unexpected();
                        default:
                            this.unexpected();
                    }
                }),
                (it.parseExprImport = function () {
                    var t = this.startNode();
                    switch ((this.next(), this.type)) {
                        case w.parenL:
                            return this.parseDynamicImport(t);
                        default:
                            this.unexpected();
                    }
                }),
                (it.parseDynamicImport = function (t) {
                    if ((this.next(), (t.source = this.parseMaybeAssign()), !this.eat(w.parenR))) {
                        var e = this.start;
                        this.eat(w.comma) && this.eat(w.parenR)
                            ? this.raiseRecoverable(e, "Trailing comma is not allowed in import()")
                            : this.unexpected(e);
                    }
                    return this.finishNode(t, "ImportExpression");
                }),
                (it.parseLiteral = function (t) {
                    var e = this.startNode();
                    return (
                        (e.value = t),
                        (e.raw = this.input.slice(this.start, this.end)),
                        110 === e.raw.charCodeAt(e.raw.length - 1) && (e.bigint = e.raw.slice(0, -1)),
                        this.next(),
                        this.finishNode(e, "Literal")
                    );
                }),
                (it.parseParenExpression = function () {
                    this.expect(w.parenL);
                    var t = this.parseExpression();
                    return this.expect(w.parenR), t;
                }),
                (it.parseParenAndDistinguishExpression = function (t) {
                    var e,
                        n = this.start,
                        i = this.startLoc,
                        o = this.options.ecmaVersion >= 8;
                    if (this.options.ecmaVersion >= 6) {
                        this.next();
                        var a,
                            r = this.start,
                            s = this.startLoc,
                            c = [],
                            l = !0,
                            p = !1,
                            u = new Q(),
                            d = this.yieldPos,
                            h = this.awaitPos;
                        for (this.yieldPos = 0, this.awaitPos = 0; this.type !== w.parenR; ) {
                            if ((l ? (l = !1) : this.expect(w.comma), o && this.afterTrailingComma(w.parenR, !0))) {
                                p = !0;
                                break;
                            }
                            if (this.type === w.ellipsis) {
                                (a = this.start),
                                    c.push(this.parseParenItem(this.parseRestBinding())),
                                    this.type === w.comma &&
                                        this.raise(this.start, "Comma is not permitted after the rest element");
                                break;
                            }
                            c.push(this.parseMaybeAssign(!1, u, this.parseParenItem));
                        }
                        var f = this.start,
                            y = this.startLoc;
                        if ((this.expect(w.parenR), t && !this.canInsertSemicolon() && this.eat(w.arrow)))
                            return (
                                this.checkPatternErrors(u, !1),
                                this.checkYieldAwaitInDefaultParams(),
                                (this.yieldPos = d),
                                (this.awaitPos = h),
                                this.parseParenArrowList(n, i, c)
                            );
                        (c.length && !p) || this.unexpected(this.lastTokStart),
                            a && this.unexpected(a),
                            this.checkExpressionErrors(u, !0),
                            (this.yieldPos = d || this.yieldPos),
                            (this.awaitPos = h || this.awaitPos),
                            c.length > 1
                                ? (((e = this.startNodeAt(r, s)).expressions = c),
                                  this.finishNodeAt(e, "SequenceExpression", f, y))
                                : (e = c[0]);
                    } else e = this.parseParenExpression();
                    if (this.options.preserveParens) {
                        var v = this.startNodeAt(n, i);
                        return (v.expression = e), this.finishNode(v, "ParenthesizedExpression");
                    }
                    return e;
                }),
                (it.parseParenItem = function (t) {
                    return t;
                }),
                (it.parseParenArrowList = function (t, e, n) {
                    return this.parseArrowExpression(this.startNodeAt(t, e), n);
                });
            var ot = [];
            (it.parseNew = function () {
                var t = this.startNode(),
                    e = this.parseIdent(!0);
                if (this.options.ecmaVersion >= 6 && this.eat(w.dot)) {
                    t.meta = e;
                    var n = this.containsEsc;
                    return (
                        (t.property = this.parseIdent(!0)),
                        ("target" !== t.property.name || n) &&
                            this.raiseRecoverable(
                                t.property.start,
                                "The only valid meta property for new is new.target"
                            ),
                        this.inNonArrowFunction() ||
                            this.raiseRecoverable(t.start, "new.target can only be used in functions"),
                        this.finishNode(t, "MetaProperty")
                    );
                }
                var i = this.start,
                    o = this.startLoc,
                    a = this.type === w._import;
                return (
                    (t.callee = this.parseSubscripts(this.parseExprAtom(), i, o, !0)),
                    a && "ImportExpression" === t.callee.type && this.raise(i, "Cannot use new with import()"),
                    this.eat(w.parenL)
                        ? (t.arguments = this.parseExprList(w.parenR, this.options.ecmaVersion >= 8, !1))
                        : (t.arguments = ot),
                    this.finishNode(t, "NewExpression")
                );
            }),
                (it.parseTemplateElement = function (t) {
                    var e = t.isTagged,
                        n = this.startNode();
                    return (
                        this.type === w.invalidTemplate
                            ? (e ||
                                  this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal"),
                              (n.value = {raw: this.value, cooked: null}))
                            : (n.value = {
                                  raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
                                  cooked: this.value
                              }),
                        this.next(),
                        (n.tail = this.type === w.backQuote),
                        this.finishNode(n, "TemplateElement")
                    );
                }),
                (it.parseTemplate = function (t) {
                    void 0 === t && (t = {});
                    var e = t.isTagged;
                    void 0 === e && (e = !1);
                    var n = this.startNode();
                    this.next(), (n.expressions = []);
                    var i = this.parseTemplateElement({isTagged: e});
                    for (n.quasis = [i]; !i.tail; )
                        this.type === w.eof && this.raise(this.pos, "Unterminated template literal"),
                            this.expect(w.dollarBraceL),
                            n.expressions.push(this.parseExpression()),
                            this.expect(w.braceR),
                            n.quasis.push((i = this.parseTemplateElement({isTagged: e})));
                    return this.next(), this.finishNode(n, "TemplateLiteral");
                }),
                (it.isAsyncProp = function (t) {
                    return (
                        !t.computed &&
                        "Identifier" === t.key.type &&
                        "async" === t.key.name &&
                        (this.type === w.name ||
                            this.type === w.num ||
                            this.type === w.string ||
                            this.type === w.bracketL ||
                            this.type.keyword ||
                            (this.options.ecmaVersion >= 9 && this.type === w.star)) &&
                        !C.test(this.input.slice(this.lastTokEnd, this.start))
                    );
                }),
                (it.parseObj = function (t, e) {
                    var n = this.startNode(),
                        i = !0,
                        o = {};
                    for (n.properties = [], this.next(); !this.eat(w.braceR); ) {
                        if (i) i = !1;
                        else if (
                            (this.expect(w.comma), this.options.ecmaVersion >= 5 && this.afterTrailingComma(w.braceR))
                        )
                            break;
                        var a = this.parseProperty(t, e);
                        t || this.checkPropClash(a, o, e), n.properties.push(a);
                    }
                    return this.finishNode(n, t ? "ObjectPattern" : "ObjectExpression");
                }),
                (it.parseProperty = function (t, e) {
                    var n,
                        i,
                        o,
                        a,
                        r = this.startNode();
                    if (this.options.ecmaVersion >= 9 && this.eat(w.ellipsis))
                        return t
                            ? ((r.argument = this.parseIdent(!1)),
                              this.type === w.comma &&
                                  this.raise(this.start, "Comma is not permitted after the rest element"),
                              this.finishNode(r, "RestElement"))
                            : (this.type === w.parenL &&
                                  e &&
                                  (e.parenthesizedAssign < 0 && (e.parenthesizedAssign = this.start),
                                  e.parenthesizedBind < 0 && (e.parenthesizedBind = this.start)),
                              (r.argument = this.parseMaybeAssign(!1, e)),
                              this.type === w.comma && e && e.trailingComma < 0 && (e.trailingComma = this.start),
                              this.finishNode(r, "SpreadElement"));
                    this.options.ecmaVersion >= 6 &&
                        ((r.method = !1),
                        (r.shorthand = !1),
                        (t || e) && ((o = this.start), (a = this.startLoc)),
                        t || (n = this.eat(w.star)));
                    var s = this.containsEsc;
                    return (
                        this.parsePropertyName(r),
                        !t && !s && this.options.ecmaVersion >= 8 && !n && this.isAsyncProp(r)
                            ? ((i = !0),
                              (n = this.options.ecmaVersion >= 9 && this.eat(w.star)),
                              this.parsePropertyName(r, e))
                            : (i = !1),
                        this.parsePropertyValue(r, t, n, i, o, a, e, s),
                        this.finishNode(r, "Property")
                    );
                }),
                (it.parsePropertyValue = function (t, e, n, i, o, a, r, s) {
                    if (((n || i) && this.type === w.colon && this.unexpected(), this.eat(w.colon)))
                        (t.value = e
                            ? this.parseMaybeDefault(this.start, this.startLoc)
                            : this.parseMaybeAssign(!1, r)),
                            (t.kind = "init");
                    else if (this.options.ecmaVersion >= 6 && this.type === w.parenL)
                        e && this.unexpected(), (t.kind = "init"), (t.method = !0), (t.value = this.parseMethod(n, i));
                    else if (
                        e ||
                        s ||
                        !(this.options.ecmaVersion >= 5) ||
                        t.computed ||
                        "Identifier" !== t.key.type ||
                        ("get" !== t.key.name && "set" !== t.key.name) ||
                        this.type === w.comma ||
                        this.type === w.braceR
                    )
                        this.options.ecmaVersion >= 6 && !t.computed && "Identifier" === t.key.type
                            ? ((n || i) && this.unexpected(),
                              this.checkUnreserved(t.key),
                              "await" !== t.key.name || this.awaitIdentPos || (this.awaitIdentPos = o),
                              (t.kind = "init"),
                              e
                                  ? (t.value = this.parseMaybeDefault(o, a, t.key))
                                  : this.type === w.eq && r
                                  ? (r.shorthandAssign < 0 && (r.shorthandAssign = this.start),
                                    (t.value = this.parseMaybeDefault(o, a, t.key)))
                                  : (t.value = t.key),
                              (t.shorthand = !0))
                            : this.unexpected();
                    else {
                        (n || i) && this.unexpected(),
                            (t.kind = t.key.name),
                            this.parsePropertyName(t),
                            (t.value = this.parseMethod(!1));
                        var c = "get" === t.kind ? 0 : 1;
                        if (t.value.params.length !== c) {
                            var l = t.value.start;
                            "get" === t.kind
                                ? this.raiseRecoverable(l, "getter should have no params")
                                : this.raiseRecoverable(l, "setter should have exactly one param");
                        } else
                            "set" === t.kind &&
                                "RestElement" === t.value.params[0].type &&
                                this.raiseRecoverable(t.value.params[0].start, "Setter cannot use rest params");
                    }
                }),
                (it.parsePropertyName = function (t) {
                    if (this.options.ecmaVersion >= 6) {
                        if (this.eat(w.bracketL))
                            return (t.computed = !0), (t.key = this.parseMaybeAssign()), this.expect(w.bracketR), t.key;
                        t.computed = !1;
                    }
                    return (t.key =
                        this.type === w.num || this.type === w.string
                            ? this.parseExprAtom()
                            : this.parseIdent("never" !== this.options.allowReserved));
                }),
                (it.initFunction = function (t) {
                    (t.id = null),
                        this.options.ecmaVersion >= 6 && (t.generator = t.expression = !1),
                        this.options.ecmaVersion >= 8 && (t.async = !1);
                }),
                (it.parseMethod = function (t, e, n) {
                    var i = this.startNode(),
                        o = this.yieldPos,
                        a = this.awaitPos,
                        r = this.awaitIdentPos;
                    return (
                        this.initFunction(i),
                        this.options.ecmaVersion >= 6 && (i.generator = t),
                        this.options.ecmaVersion >= 8 && (i.async = !!e),
                        (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0),
                        this.enterScope(64 | W(e, i.generator) | (n ? 128 : 0)),
                        this.expect(w.parenL),
                        (i.params = this.parseBindingList(w.parenR, !1, this.options.ecmaVersion >= 8)),
                        this.checkYieldAwaitInDefaultParams(),
                        this.parseFunctionBody(i, !1, !0),
                        (this.yieldPos = o),
                        (this.awaitPos = a),
                        (this.awaitIdentPos = r),
                        this.finishNode(i, "FunctionExpression")
                    );
                }),
                (it.parseArrowExpression = function (t, e, n) {
                    var i = this.yieldPos,
                        o = this.awaitPos,
                        a = this.awaitIdentPos;
                    return (
                        this.enterScope(16 | W(n, !1)),
                        this.initFunction(t),
                        this.options.ecmaVersion >= 8 && (t.async = !!n),
                        (this.yieldPos = 0),
                        (this.awaitPos = 0),
                        (this.awaitIdentPos = 0),
                        (t.params = this.toAssignableList(e, !0)),
                        this.parseFunctionBody(t, !0, !1),
                        (this.yieldPos = i),
                        (this.awaitPos = o),
                        (this.awaitIdentPos = a),
                        this.finishNode(t, "ArrowFunctionExpression")
                    );
                }),
                (it.parseFunctionBody = function (t, e, n) {
                    var i = e && this.type !== w.braceL,
                        o = this.strict,
                        a = !1;
                    if (i) (t.body = this.parseMaybeAssign()), (t.expression = !0), this.checkParams(t, !1);
                    else {
                        var r = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(t.params);
                        (o && !r) ||
                            ((a = this.strictDirective(this.end)) &&
                                r &&
                                this.raiseRecoverable(
                                    t.start,
                                    "Illegal 'use strict' directive in function with non-simple parameter list"
                                ));
                        var s = this.labels;
                        (this.labels = []),
                            a && (this.strict = !0),
                            this.checkParams(t, !o && !a && !e && !n && this.isSimpleParamList(t.params)),
                            (t.body = this.parseBlock(!1)),
                            (t.expression = !1),
                            this.adaptDirectivePrologue(t.body.body),
                            (this.labels = s);
                    }
                    this.exitScope(), this.strict && t.id && this.checkLVal(t.id, 5), (this.strict = o);
                }),
                (it.isSimpleParamList = function (t) {
                    for (var e = 0, n = t; e < n.length; e += 1) if ("Identifier" !== n[e].type) return !1;
                    return !0;
                }),
                (it.checkParams = function (t, e) {
                    for (var n = {}, i = 0, o = t.params; i < o.length; i += 1) {
                        var a = o[i];
                        this.checkLVal(a, 1, e ? null : n);
                    }
                }),
                (it.parseExprList = function (t, e, n, i) {
                    for (var o = [], a = !0; !this.eat(t); ) {
                        if (a) a = !1;
                        else if ((this.expect(w.comma), e && this.afterTrailingComma(t))) break;
                        var r = void 0;
                        n && this.type === w.comma
                            ? (r = null)
                            : this.type === w.ellipsis
                            ? ((r = this.parseSpread(i)),
                              i && this.type === w.comma && i.trailingComma < 0 && (i.trailingComma = this.start))
                            : (r = this.parseMaybeAssign(!1, i)),
                            o.push(r);
                    }
                    return o;
                }),
                (it.checkUnreserved = function (t) {
                    var e = t.start,
                        n = t.end,
                        i = t.name;
                    this.inGenerator &&
                        "yield" === i &&
                        this.raiseRecoverable(e, "Cannot use 'yield' as identifier inside a generator"),
                        this.inAsync &&
                            "await" === i &&
                            this.raiseRecoverable(e, "Cannot use 'await' as identifier inside an async function"),
                        this.keywords.test(i) && this.raise(e, "Unexpected keyword '" + i + "'"),
                        (this.options.ecmaVersion < 6 && -1 !== this.input.slice(e, n).indexOf("\\")) ||
                            ((this.strict ? this.reservedWordsStrict : this.reservedWords).test(i) &&
                                (this.inAsync ||
                                    "await" !== i ||
                                    this.raiseRecoverable(e, "Cannot use keyword 'await' outside an async function"),
                                this.raiseRecoverable(e, "The keyword '" + i + "' is reserved")));
                }),
                (it.parseIdent = function (t) {
                    var e = this.startNode();
                    return (
                        this.type === w.name
                            ? (e.name = this.value)
                            : this.type.keyword
                            ? ((e.name = this.type.keyword),
                              ("class" !== e.name && "function" !== e.name) ||
                                  (this.lastTokEnd === this.lastTokStart + 1 &&
                                      46 === this.input.charCodeAt(this.lastTokStart)) ||
                                  this.context.pop())
                            : this.unexpected(),
                        this.next(),
                        this.finishNode(e, "Identifier"),
                        t ||
                            (this.checkUnreserved(e),
                            "await" !== e.name || this.awaitIdentPos || (this.awaitIdentPos = e.start)),
                        e
                    );
                }),
                (it.parseYield = function (t) {
                    this.yieldPos || (this.yieldPos = this.start);
                    var e = this.startNode();
                    return (
                        this.next(),
                        this.type === w.semi ||
                        this.canInsertSemicolon() ||
                        (this.type !== w.star && !this.type.startsExpr)
                            ? ((e.delegate = !1), (e.argument = null))
                            : ((e.delegate = this.eat(w.star)), (e.argument = this.parseMaybeAssign(t))),
                        this.finishNode(e, "YieldExpression")
                    );
                }),
                (it.parseAwait = function () {
                    this.awaitPos || (this.awaitPos = this.start);
                    var t = this.startNode();
                    return (
                        this.next(),
                        (t.argument = this.parseMaybeUnary(null, !0)),
                        this.finishNode(t, "AwaitExpression")
                    );
                });
            var at = J.prototype;
            (at.raise = function (t, e) {
                var n = N(this.input, t);
                e += " (" + n.line + ":" + n.column + ")";
                var i = new SyntaxError(e);
                throw ((i.pos = t), (i.loc = n), (i.raisedAt = this.pos), i);
            }),
                (at.raiseRecoverable = at.raise),
                (at.curPosition = function () {
                    if (this.options.locations) return new F(this.curLine, this.pos - this.lineStart);
                });
            var rt = J.prototype,
                st = function (t) {
                    (this.flags = t), (this.var = []), (this.lexical = []), (this.functions = []);
                };
            (rt.enterScope = function (t) {
                this.scopeStack.push(new st(t));
            }),
                (rt.exitScope = function () {
                    this.scopeStack.pop();
                }),
                (rt.treatFunctionsAsVarInScope = function (t) {
                    return t.flags & D || (!this.inModule && 1 & t.flags);
                }),
                (rt.declareName = function (t, e, n) {
                    var i = !1;
                    if (2 === e) {
                        var o = this.currentScope();
                        (i = o.lexical.indexOf(t) > -1 || o.functions.indexOf(t) > -1 || o.var.indexOf(t) > -1),
                            o.lexical.push(t),
                            this.inModule && 1 & o.flags && delete this.undefinedExports[t];
                    } else if (4 === e) this.currentScope().lexical.push(t);
                    else if (3 === e) {
                        var a = this.currentScope();
                        (i = this.treatFunctionsAsVar
                            ? a.lexical.indexOf(t) > -1
                            : a.lexical.indexOf(t) > -1 || a.var.indexOf(t) > -1),
                            a.functions.push(t);
                    } else
                        for (var r = this.scopeStack.length - 1; r >= 0; --r) {
                            var s = this.scopeStack[r];
                            if (
                                (s.lexical.indexOf(t) > -1 && !(32 & s.flags && s.lexical[0] === t)) ||
                                (!this.treatFunctionsAsVarInScope(s) && s.functions.indexOf(t) > -1)
                            ) {
                                i = !0;
                                break;
                            }
                            if (
                                (s.var.push(t),
                                this.inModule && 1 & s.flags && delete this.undefinedExports[t],
                                s.flags & j)
                            )
                                break;
                        }
                    i && this.raiseRecoverable(n, "Identifier '" + t + "' has already been declared");
                }),
                (rt.checkLocalExport = function (t) {
                    -1 === this.scopeStack[0].lexical.indexOf(t.name) &&
                        -1 === this.scopeStack[0].var.indexOf(t.name) &&
                        (this.undefinedExports[t.name] = t);
                }),
                (rt.currentScope = function () {
                    return this.scopeStack[this.scopeStack.length - 1];
                }),
                (rt.currentVarScope = function () {
                    for (var t = this.scopeStack.length - 1; ; t--) {
                        var e = this.scopeStack[t];
                        if (e.flags & j) return e;
                    }
                }),
                (rt.currentThisScope = function () {
                    for (var t = this.scopeStack.length - 1; ; t--) {
                        var e = this.scopeStack[t];
                        if (e.flags & j && !(16 & e.flags)) return e;
                    }
                });
            var ct = function (t, e, n) {
                    (this.type = ""),
                        (this.start = e),
                        (this.end = 0),
                        t.options.locations && (this.loc = new R(t, n)),
                        t.options.directSourceFile && (this.sourceFile = t.options.directSourceFile),
                        t.options.ranges && (this.range = [e, 0]);
                },
                lt = J.prototype;
            function pt(t, e, n, i) {
                return (
                    (t.type = e),
                    (t.end = n),
                    this.options.locations && (t.loc.end = i),
                    this.options.ranges && (t.range[1] = n),
                    t
                );
            }
            (lt.startNode = function () {
                return new ct(this, this.start, this.startLoc);
            }),
                (lt.startNodeAt = function (t, e) {
                    return new ct(this, t, e);
                }),
                (lt.finishNode = function (t, e) {
                    return pt.call(this, t, e, this.lastTokEnd, this.lastTokEndLoc);
                }),
                (lt.finishNodeAt = function (t, e, n, i) {
                    return pt.call(this, t, e, n, i);
                });
            var ut = function (t, e, n, i, o) {
                    (this.token = t),
                        (this.isExpr = !!e),
                        (this.preserveSpace = !!n),
                        (this.override = i),
                        (this.generator = !!o);
                },
                dt = {
                    b_stat: new ut("{", !1),
                    b_expr: new ut("{", !0),
                    b_tmpl: new ut("${", !1),
                    p_stat: new ut("(", !1),
                    p_expr: new ut("(", !0),
                    q_tmpl: new ut("`", !0, !0, function (t) {
                        return t.tryReadTemplateToken();
                    }),
                    f_stat: new ut("function", !1),
                    f_expr: new ut("function", !0),
                    f_expr_gen: new ut("function", !0, !1, null, !0),
                    f_gen: new ut("function", !1, !1, null, !0)
                },
                ht = J.prototype;
            (ht.initialContext = function () {
                return [dt.b_stat];
            }),
                (ht.braceIsBlock = function (t) {
                    var e = this.curContext();
                    return (
                        e === dt.f_expr ||
                        e === dt.f_stat ||
                        (t !== w.colon || (e !== dt.b_stat && e !== dt.b_expr)
                            ? t === w._return || (t === w.name && this.exprAllowed)
                                ? C.test(this.input.slice(this.lastTokEnd, this.start))
                                : t === w._else ||
                                  t === w.semi ||
                                  t === w.eof ||
                                  t === w.parenR ||
                                  t === w.arrow ||
                                  (t === w.braceL
                                      ? e === dt.b_stat
                                      : t !== w._var && t !== w._const && t !== w.name && !this.exprAllowed)
                            : !e.isExpr)
                    );
                }),
                (ht.inGeneratorContext = function () {
                    for (var t = this.context.length - 1; t >= 1; t--) {
                        var e = this.context[t];
                        if ("function" === e.token) return e.generator;
                    }
                    return !1;
                }),
                (ht.updateContext = function (t) {
                    var e,
                        n = this.type;
                    n.keyword && t === w.dot
                        ? (this.exprAllowed = !1)
                        : (e = n.updateContext)
                        ? e.call(this, t)
                        : (this.exprAllowed = n.beforeExpr);
                }),
                (w.parenR.updateContext = w.braceR.updateContext =
                    function () {
                        if (1 !== this.context.length) {
                            var t = this.context.pop();
                            t === dt.b_stat && "function" === this.curContext().token && (t = this.context.pop()),
                                (this.exprAllowed = !t.isExpr);
                        } else this.exprAllowed = !0;
                    }),
                (w.braceL.updateContext = function (t) {
                    this.context.push(this.braceIsBlock(t) ? dt.b_stat : dt.b_expr), (this.exprAllowed = !0);
                }),
                (w.dollarBraceL.updateContext = function () {
                    this.context.push(dt.b_tmpl), (this.exprAllowed = !0);
                }),
                (w.parenL.updateContext = function (t) {
                    var e = t === w._if || t === w._for || t === w._with || t === w._while;
                    this.context.push(e ? dt.p_stat : dt.p_expr), (this.exprAllowed = !0);
                }),
                (w.incDec.updateContext = function () {}),
                (w._function.updateContext = w._class.updateContext =
                    function (t) {
                        !t.beforeExpr ||
                        t === w.semi ||
                        t === w._else ||
                        (t === w._return && C.test(this.input.slice(this.lastTokEnd, this.start))) ||
                        ((t === w.colon || t === w.braceL) && this.curContext() === dt.b_stat)
                            ? this.context.push(dt.f_stat)
                            : this.context.push(dt.f_expr),
                            (this.exprAllowed = !1);
                    }),
                (w.backQuote.updateContext = function () {
                    this.curContext() === dt.q_tmpl ? this.context.pop() : this.context.push(dt.q_tmpl),
                        (this.exprAllowed = !1);
                }),
                (w.star.updateContext = function (t) {
                    if (t === w._function) {
                        var e = this.context.length - 1;
                        this.context[e] === dt.f_expr
                            ? (this.context[e] = dt.f_expr_gen)
                            : (this.context[e] = dt.f_gen);
                    }
                    this.exprAllowed = !0;
                }),
                (w.name.updateContext = function (t) {
                    var e = !1;
                    this.options.ecmaVersion >= 6 &&
                        t !== w.dot &&
                        (("of" === this.value && !this.exprAllowed) ||
                            ("yield" === this.value && this.inGeneratorContext())) &&
                        (e = !0),
                        (this.exprAllowed = e);
                });
            var ft =
                    "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS",
                yt = {
                    9: ft,
                    10: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic",
                    11: "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS Extended_Pictographic"
                },
                vt =
                    "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu",
                gt =
                    "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb",
                mt = {
                    9: gt,
                    10: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd",
                    11: "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho"
                },
                bt = {};
            function St(t) {
                var e = (bt[t] = {binary: L(yt[t] + " " + vt), nonBinary: {General_Category: L(vt), Script: L(mt[t])}});
                (e.nonBinary.Script_Extensions = e.nonBinary.Script),
                    (e.nonBinary.gc = e.nonBinary.General_Category),
                    (e.nonBinary.sc = e.nonBinary.Script),
                    (e.nonBinary.scx = e.nonBinary.Script_Extensions);
            }
            St(9), St(10), St(11);
            var At = J.prototype,
                wt = function (t) {
                    (this.parser = t),
                        (this.validFlags =
                            "gim" + (t.options.ecmaVersion >= 6 ? "uy" : "") + (t.options.ecmaVersion >= 9 ? "s" : "")),
                        (this.unicodeProperties = bt[t.options.ecmaVersion >= 11 ? 11 : t.options.ecmaVersion]),
                        (this.source = ""),
                        (this.flags = ""),
                        (this.start = 0),
                        (this.switchU = !1),
                        (this.switchN = !1),
                        (this.pos = 0),
                        (this.lastIntValue = 0),
                        (this.lastStringValue = ""),
                        (this.lastAssertionIsQuantifiable = !1),
                        (this.numCapturingParens = 0),
                        (this.maxBackReference = 0),
                        (this.groupNames = []),
                        (this.backReferenceNames = []);
                };
            function Ct(t) {
                return t <= 65535
                    ? String.fromCharCode(t)
                    : ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
            }
            function Bt(t) {
                return (
                    36 === t ||
                    (t >= 40 && t <= 43) ||
                    46 === t ||
                    63 === t ||
                    (t >= 91 && t <= 94) ||
                    (t >= 123 && t <= 125)
                );
            }
            function Pt(t) {
                return f(t, !0) || 36 === t || 95 === t;
            }
            function xt(t) {
                return y(t, !0) || 36 === t || 95 === t || 8204 === t || 8205 === t;
            }
            function It(t) {
                return (t >= 65 && t <= 90) || (t >= 97 && t <= 122);
            }
            function Mt(t) {
                return 100 === t || 68 === t || 115 === t || 83 === t || 119 === t || 87 === t;
            }
            function Ot(t) {
                return It(t) || 95 === t;
            }
            function Vt(t) {
                return Ot(t) || Tt(t);
            }
            function Tt(t) {
                return t >= 48 && t <= 57;
            }
            function Et(t) {
                return (t >= 48 && t <= 57) || (t >= 65 && t <= 70) || (t >= 97 && t <= 102);
            }
            function Lt(t) {
                return t >= 65 && t <= 70 ? t - 65 + 10 : t >= 97 && t <= 102 ? t - 97 + 10 : t - 48;
            }
            function Ft(t) {
                return t >= 48 && t <= 55;
            }
            (wt.prototype.reset = function (t, e, n) {
                var i = -1 !== n.indexOf("u");
                (this.start = 0 | t),
                    (this.source = e + ""),
                    (this.flags = n),
                    (this.switchU = i && this.parser.options.ecmaVersion >= 6),
                    (this.switchN = i && this.parser.options.ecmaVersion >= 9);
            }),
                (wt.prototype.raise = function (t) {
                    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + t);
                }),
                (wt.prototype.at = function (t) {
                    var e = this.source,
                        n = e.length;
                    if (t >= n) return -1;
                    var i = e.charCodeAt(t);
                    return !this.switchU || i <= 55295 || i >= 57344 || t + 1 >= n
                        ? i
                        : (i << 10) + e.charCodeAt(t + 1) - 56613888;
                }),
                (wt.prototype.nextIndex = function (t) {
                    var e = this.source,
                        n = e.length;
                    if (t >= n) return n;
                    var i = e.charCodeAt(t);
                    return !this.switchU || i <= 55295 || i >= 57344 || t + 1 >= n ? t + 1 : t + 2;
                }),
                (wt.prototype.current = function () {
                    return this.at(this.pos);
                }),
                (wt.prototype.lookahead = function () {
                    return this.at(this.nextIndex(this.pos));
                }),
                (wt.prototype.advance = function () {
                    this.pos = this.nextIndex(this.pos);
                }),
                (wt.prototype.eat = function (t) {
                    return this.current() === t && (this.advance(), !0);
                }),
                (At.validateRegExpFlags = function (t) {
                    for (var e = t.validFlags, n = t.flags, i = 0; i < n.length; i++) {
                        var o = n.charAt(i);
                        -1 === e.indexOf(o) && this.raise(t.start, "Invalid regular expression flag"),
                            n.indexOf(o, i + 1) > -1 && this.raise(t.start, "Duplicate regular expression flag");
                    }
                }),
                (At.validateRegExpPattern = function (t) {
                    this.regexp_pattern(t),
                        !t.switchN &&
                            this.options.ecmaVersion >= 9 &&
                            t.groupNames.length > 0 &&
                            ((t.switchN = !0), this.regexp_pattern(t));
                }),
                (At.regexp_pattern = function (t) {
                    (t.pos = 0),
                        (t.lastIntValue = 0),
                        (t.lastStringValue = ""),
                        (t.lastAssertionIsQuantifiable = !1),
                        (t.numCapturingParens = 0),
                        (t.maxBackReference = 0),
                        (t.groupNames.length = 0),
                        (t.backReferenceNames.length = 0),
                        this.regexp_disjunction(t),
                        t.pos !== t.source.length &&
                            (t.eat(41) && t.raise("Unmatched ')'"),
                            (t.eat(93) || t.eat(125)) && t.raise("Lone quantifier brackets")),
                        t.maxBackReference > t.numCapturingParens && t.raise("Invalid escape");
                    for (var e = 0, n = t.backReferenceNames; e < n.length; e += 1) {
                        var i = n[e];
                        -1 === t.groupNames.indexOf(i) && t.raise("Invalid named capture referenced");
                    }
                }),
                (At.regexp_disjunction = function (t) {
                    for (this.regexp_alternative(t); t.eat(124); ) this.regexp_alternative(t);
                    this.regexp_eatQuantifier(t, !0) && t.raise("Nothing to repeat"),
                        t.eat(123) && t.raise("Lone quantifier brackets");
                }),
                (At.regexp_alternative = function (t) {
                    for (; t.pos < t.source.length && this.regexp_eatTerm(t); );
                }),
                (At.regexp_eatTerm = function (t) {
                    return this.regexp_eatAssertion(t)
                        ? (t.lastAssertionIsQuantifiable &&
                              this.regexp_eatQuantifier(t) &&
                              t.switchU &&
                              t.raise("Invalid quantifier"),
                          !0)
                        : !(t.switchU ? !this.regexp_eatAtom(t) : !this.regexp_eatExtendedAtom(t)) &&
                              (this.regexp_eatQuantifier(t), !0);
                }),
                (At.regexp_eatAssertion = function (t) {
                    var e = t.pos;
                    if (((t.lastAssertionIsQuantifiable = !1), t.eat(94) || t.eat(36))) return !0;
                    if (t.eat(92)) {
                        if (t.eat(66) || t.eat(98)) return !0;
                        t.pos = e;
                    }
                    if (t.eat(40) && t.eat(63)) {
                        var n = !1;
                        if ((this.options.ecmaVersion >= 9 && (n = t.eat(60)), t.eat(61) || t.eat(33)))
                            return (
                                this.regexp_disjunction(t),
                                t.eat(41) || t.raise("Unterminated group"),
                                (t.lastAssertionIsQuantifiable = !n),
                                !0
                            );
                    }
                    return (t.pos = e), !1;
                }),
                (At.regexp_eatQuantifier = function (t, e) {
                    return void 0 === e && (e = !1), !!this.regexp_eatQuantifierPrefix(t, e) && (t.eat(63), !0);
                }),
                (At.regexp_eatQuantifierPrefix = function (t, e) {
                    return t.eat(42) || t.eat(43) || t.eat(63) || this.regexp_eatBracedQuantifier(t, e);
                }),
                (At.regexp_eatBracedQuantifier = function (t, e) {
                    var n = t.pos;
                    if (t.eat(123)) {
                        var i = 0,
                            o = -1;
                        if (
                            this.regexp_eatDecimalDigits(t) &&
                            ((i = t.lastIntValue),
                            t.eat(44) && this.regexp_eatDecimalDigits(t) && (o = t.lastIntValue),
                            t.eat(125))
                        )
                            return -1 !== o && o < i && !e && t.raise("numbers out of order in {} quantifier"), !0;
                        t.switchU && !e && t.raise("Incomplete quantifier"), (t.pos = n);
                    }
                    return !1;
                }),
                (At.regexp_eatAtom = function (t) {
                    return (
                        this.regexp_eatPatternCharacters(t) ||
                        t.eat(46) ||
                        this.regexp_eatReverseSolidusAtomEscape(t) ||
                        this.regexp_eatCharacterClass(t) ||
                        this.regexp_eatUncapturingGroup(t) ||
                        this.regexp_eatCapturingGroup(t)
                    );
                }),
                (At.regexp_eatReverseSolidusAtomEscape = function (t) {
                    var e = t.pos;
                    if (t.eat(92)) {
                        if (this.regexp_eatAtomEscape(t)) return !0;
                        t.pos = e;
                    }
                    return !1;
                }),
                (At.regexp_eatUncapturingGroup = function (t) {
                    var e = t.pos;
                    if (t.eat(40)) {
                        if (t.eat(63) && t.eat(58)) {
                            if ((this.regexp_disjunction(t), t.eat(41))) return !0;
                            t.raise("Unterminated group");
                        }
                        t.pos = e;
                    }
                    return !1;
                }),
                (At.regexp_eatCapturingGroup = function (t) {
                    if (t.eat(40)) {
                        if (
                            (this.options.ecmaVersion >= 9
                                ? this.regexp_groupSpecifier(t)
                                : 63 === t.current() && t.raise("Invalid group"),
                            this.regexp_disjunction(t),
                            t.eat(41))
                        )
                            return (t.numCapturingParens += 1), !0;
                        t.raise("Unterminated group");
                    }
                    return !1;
                }),
                (At.regexp_eatExtendedAtom = function (t) {
                    return (
                        t.eat(46) ||
                        this.regexp_eatReverseSolidusAtomEscape(t) ||
                        this.regexp_eatCharacterClass(t) ||
                        this.regexp_eatUncapturingGroup(t) ||
                        this.regexp_eatCapturingGroup(t) ||
                        this.regexp_eatInvalidBracedQuantifier(t) ||
                        this.regexp_eatExtendedPatternCharacter(t)
                    );
                }),
                (At.regexp_eatInvalidBracedQuantifier = function (t) {
                    return this.regexp_eatBracedQuantifier(t, !0) && t.raise("Nothing to repeat"), !1;
                }),
                (At.regexp_eatSyntaxCharacter = function (t) {
                    var e = t.current();
                    return !!Bt(e) && ((t.lastIntValue = e), t.advance(), !0);
                }),
                (At.regexp_eatPatternCharacters = function (t) {
                    for (var e = t.pos, n = 0; -1 !== (n = t.current()) && !Bt(n); ) t.advance();
                    return t.pos !== e;
                }),
                (At.regexp_eatExtendedPatternCharacter = function (t) {
                    var e = t.current();
                    return !(
                        -1 === e ||
                        36 === e ||
                        (e >= 40 && e <= 43) ||
                        46 === e ||
                        63 === e ||
                        91 === e ||
                        94 === e ||
                        124 === e ||
                        (t.advance(), 0)
                    );
                }),
                (At.regexp_groupSpecifier = function (t) {
                    if (t.eat(63)) {
                        if (this.regexp_eatGroupName(t))
                            return (
                                -1 !== t.groupNames.indexOf(t.lastStringValue) &&
                                    t.raise("Duplicate capture group name"),
                                void t.groupNames.push(t.lastStringValue)
                            );
                        t.raise("Invalid group");
                    }
                }),
                (At.regexp_eatGroupName = function (t) {
                    if (((t.lastStringValue = ""), t.eat(60))) {
                        if (this.regexp_eatRegExpIdentifierName(t) && t.eat(62)) return !0;
                        t.raise("Invalid capture group name");
                    }
                    return !1;
                }),
                (At.regexp_eatRegExpIdentifierName = function (t) {
                    if (((t.lastStringValue = ""), this.regexp_eatRegExpIdentifierStart(t))) {
                        for (t.lastStringValue += Ct(t.lastIntValue); this.regexp_eatRegExpIdentifierPart(t); )
                            t.lastStringValue += Ct(t.lastIntValue);
                        return !0;
                    }
                    return !1;
                }),
                (At.regexp_eatRegExpIdentifierStart = function (t) {
                    var e = t.pos,
                        n = t.current();
                    return (
                        t.advance(),
                        92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (n = t.lastIntValue),
                        Pt(n) ? ((t.lastIntValue = n), !0) : ((t.pos = e), !1)
                    );
                }),
                (At.regexp_eatRegExpIdentifierPart = function (t) {
                    var e = t.pos,
                        n = t.current();
                    return (
                        t.advance(),
                        92 === n && this.regexp_eatRegExpUnicodeEscapeSequence(t) && (n = t.lastIntValue),
                        xt(n) ? ((t.lastIntValue = n), !0) : ((t.pos = e), !1)
                    );
                }),
                (At.regexp_eatAtomEscape = function (t) {
                    return (
                        !!(
                            this.regexp_eatBackReference(t) ||
                            this.regexp_eatCharacterClassEscape(t) ||
                            this.regexp_eatCharacterEscape(t) ||
                            (t.switchN && this.regexp_eatKGroupName(t))
                        ) ||
                        (t.switchU &&
                            (99 === t.current() && t.raise("Invalid unicode escape"), t.raise("Invalid escape")),
                        !1)
                    );
                }),
                (At.regexp_eatBackReference = function (t) {
                    var e = t.pos;
                    if (this.regexp_eatDecimalEscape(t)) {
                        var n = t.lastIntValue;
                        if (t.switchU) return n > t.maxBackReference && (t.maxBackReference = n), !0;
                        if (n <= t.numCapturingParens) return !0;
                        t.pos = e;
                    }
                    return !1;
                }),
                (At.regexp_eatKGroupName = function (t) {
                    if (t.eat(107)) {
                        if (this.regexp_eatGroupName(t)) return t.backReferenceNames.push(t.lastStringValue), !0;
                        t.raise("Invalid named reference");
                    }
                    return !1;
                }),
                (At.regexp_eatCharacterEscape = function (t) {
                    return (
                        this.regexp_eatControlEscape(t) ||
                        this.regexp_eatCControlLetter(t) ||
                        this.regexp_eatZero(t) ||
                        this.regexp_eatHexEscapeSequence(t) ||
                        this.regexp_eatRegExpUnicodeEscapeSequence(t) ||
                        (!t.switchU && this.regexp_eatLegacyOctalEscapeSequence(t)) ||
                        this.regexp_eatIdentityEscape(t)
                    );
                }),
                (At.regexp_eatCControlLetter = function (t) {
                    var e = t.pos;
                    if (t.eat(99)) {
                        if (this.regexp_eatControlLetter(t)) return !0;
                        t.pos = e;
                    }
                    return !1;
                }),
                (At.regexp_eatZero = function (t) {
                    return 48 === t.current() && !Tt(t.lookahead()) && ((t.lastIntValue = 0), t.advance(), !0);
                }),
                (At.regexp_eatControlEscape = function (t) {
                    var e = t.current();
                    return 116 === e
                        ? ((t.lastIntValue = 9), t.advance(), !0)
                        : 110 === e
                        ? ((t.lastIntValue = 10), t.advance(), !0)
                        : 118 === e
                        ? ((t.lastIntValue = 11), t.advance(), !0)
                        : 102 === e
                        ? ((t.lastIntValue = 12), t.advance(), !0)
                        : 114 === e && ((t.lastIntValue = 13), t.advance(), !0);
                }),
                (At.regexp_eatControlLetter = function (t) {
                    var e = t.current();
                    return !!It(e) && ((t.lastIntValue = e % 32), t.advance(), !0);
                }),
                (At.regexp_eatRegExpUnicodeEscapeSequence = function (t) {
                    var e,
                        n = t.pos;
                    if (t.eat(117)) {
                        if (this.regexp_eatFixedHexDigits(t, 4)) {
                            var i = t.lastIntValue;
                            if (t.switchU && i >= 55296 && i <= 56319) {
                                var o = t.pos;
                                if (t.eat(92) && t.eat(117) && this.regexp_eatFixedHexDigits(t, 4)) {
                                    var a = t.lastIntValue;
                                    if (a >= 56320 && a <= 57343)
                                        return (t.lastIntValue = 1024 * (i - 55296) + (a - 56320) + 65536), !0;
                                }
                                (t.pos = o), (t.lastIntValue = i);
                            }
                            return !0;
                        }
                        if (
                            t.switchU &&
                            t.eat(123) &&
                            this.regexp_eatHexDigits(t) &&
                            t.eat(125) &&
                            (e = t.lastIntValue) >= 0 &&
                            e <= 1114111
                        )
                            return !0;
                        t.switchU && t.raise("Invalid unicode escape"), (t.pos = n);
                    }
                    return !1;
                }),
                (At.regexp_eatIdentityEscape = function (t) {
                    if (t.switchU)
                        return !!this.regexp_eatSyntaxCharacter(t) || (!!t.eat(47) && ((t.lastIntValue = 47), !0));
                    var e = t.current();
                    return !(99 === e || (t.switchN && 107 === e) || ((t.lastIntValue = e), t.advance(), 0));
                }),
                (At.regexp_eatDecimalEscape = function (t) {
                    t.lastIntValue = 0;
                    var e = t.current();
                    if (e >= 49 && e <= 57) {
                        do {
                            (t.lastIntValue = 10 * t.lastIntValue + (e - 48)), t.advance();
                        } while ((e = t.current()) >= 48 && e <= 57);
                        return !0;
                    }
                    return !1;
                }),
                (At.regexp_eatCharacterClassEscape = function (t) {
                    var e = t.current();
                    if (Mt(e)) return (t.lastIntValue = -1), t.advance(), !0;
                    if (t.switchU && this.options.ecmaVersion >= 9 && (80 === e || 112 === e)) {
                        if (
                            ((t.lastIntValue = -1),
                            t.advance(),
                            t.eat(123) && this.regexp_eatUnicodePropertyValueExpression(t) && t.eat(125))
                        )
                            return !0;
                        t.raise("Invalid property name");
                    }
                    return !1;
                }),
                (At.regexp_eatUnicodePropertyValueExpression = function (t) {
                    var e = t.pos;
                    if (this.regexp_eatUnicodePropertyName(t) && t.eat(61)) {
                        var n = t.lastStringValue;
                        if (this.regexp_eatUnicodePropertyValue(t)) {
                            var i = t.lastStringValue;
                            return this.regexp_validateUnicodePropertyNameAndValue(t, n, i), !0;
                        }
                    }
                    if (((t.pos = e), this.regexp_eatLoneUnicodePropertyNameOrValue(t))) {
                        var o = t.lastStringValue;
                        return this.regexp_validateUnicodePropertyNameOrValue(t, o), !0;
                    }
                    return !1;
                }),
                (At.regexp_validateUnicodePropertyNameAndValue = function (t, e, n) {
                    T(t.unicodeProperties.nonBinary, e) || t.raise("Invalid property name"),
                        t.unicodeProperties.nonBinary[e].test(n) || t.raise("Invalid property value");
                }),
                (At.regexp_validateUnicodePropertyNameOrValue = function (t, e) {
                    t.unicodeProperties.binary.test(e) || t.raise("Invalid property name");
                }),
                (At.regexp_eatUnicodePropertyName = function (t) {
                    var e = 0;
                    for (t.lastStringValue = ""; Ot((e = t.current())); ) (t.lastStringValue += Ct(e)), t.advance();
                    return "" !== t.lastStringValue;
                }),
                (At.regexp_eatUnicodePropertyValue = function (t) {
                    var e = 0;
                    for (t.lastStringValue = ""; Vt((e = t.current())); ) (t.lastStringValue += Ct(e)), t.advance();
                    return "" !== t.lastStringValue;
                }),
                (At.regexp_eatLoneUnicodePropertyNameOrValue = function (t) {
                    return this.regexp_eatUnicodePropertyValue(t);
                }),
                (At.regexp_eatCharacterClass = function (t) {
                    if (t.eat(91)) {
                        if ((t.eat(94), this.regexp_classRanges(t), t.eat(93))) return !0;
                        t.raise("Unterminated character class");
                    }
                    return !1;
                }),
                (At.regexp_classRanges = function (t) {
                    for (; this.regexp_eatClassAtom(t); ) {
                        var e = t.lastIntValue;
                        if (t.eat(45) && this.regexp_eatClassAtom(t)) {
                            var n = t.lastIntValue;
                            !t.switchU || (-1 !== e && -1 !== n) || t.raise("Invalid character class"),
                                -1 !== e && -1 !== n && e > n && t.raise("Range out of order in character class");
                        }
                    }
                }),
                (At.regexp_eatClassAtom = function (t) {
                    var e = t.pos;
                    if (t.eat(92)) {
                        if (this.regexp_eatClassEscape(t)) return !0;
                        if (t.switchU) {
                            var n = t.current();
                            (99 === n || Ft(n)) && t.raise("Invalid class escape"), t.raise("Invalid escape");
                        }
                        t.pos = e;
                    }
                    var i = t.current();
                    return 93 !== i && ((t.lastIntValue = i), t.advance(), !0);
                }),
                (At.regexp_eatClassEscape = function (t) {
                    var e = t.pos;
                    if (t.eat(98)) return (t.lastIntValue = 8), !0;
                    if (t.switchU && t.eat(45)) return (t.lastIntValue = 45), !0;
                    if (!t.switchU && t.eat(99)) {
                        if (this.regexp_eatClassControlLetter(t)) return !0;
                        t.pos = e;
                    }
                    return this.regexp_eatCharacterClassEscape(t) || this.regexp_eatCharacterEscape(t);
                }),
                (At.regexp_eatClassControlLetter = function (t) {
                    var e = t.current();
                    return !((!Tt(e) && 95 !== e) || ((t.lastIntValue = e % 32), t.advance(), 0));
                }),
                (At.regexp_eatHexEscapeSequence = function (t) {
                    var e = t.pos;
                    if (t.eat(120)) {
                        if (this.regexp_eatFixedHexDigits(t, 2)) return !0;
                        t.switchU && t.raise("Invalid escape"), (t.pos = e);
                    }
                    return !1;
                }),
                (At.regexp_eatDecimalDigits = function (t) {
                    var e = t.pos,
                        n = 0;
                    for (t.lastIntValue = 0; Tt((n = t.current())); )
                        (t.lastIntValue = 10 * t.lastIntValue + (n - 48)), t.advance();
                    return t.pos !== e;
                }),
                (At.regexp_eatHexDigits = function (t) {
                    var e = t.pos,
                        n = 0;
                    for (t.lastIntValue = 0; Et((n = t.current())); )
                        (t.lastIntValue = 16 * t.lastIntValue + Lt(n)), t.advance();
                    return t.pos !== e;
                }),
                (At.regexp_eatLegacyOctalEscapeSequence = function (t) {
                    if (this.regexp_eatOctalDigit(t)) {
                        var e = t.lastIntValue;
                        if (this.regexp_eatOctalDigit(t)) {
                            var n = t.lastIntValue;
                            e <= 3 && this.regexp_eatOctalDigit(t)
                                ? (t.lastIntValue = 64 * e + 8 * n + t.lastIntValue)
                                : (t.lastIntValue = 8 * e + n);
                        } else t.lastIntValue = e;
                        return !0;
                    }
                    return !1;
                }),
                (At.regexp_eatOctalDigit = function (t) {
                    var e = t.current();
                    return Ft(e) ? ((t.lastIntValue = e - 48), t.advance(), !0) : ((t.lastIntValue = 0), !1);
                }),
                (At.regexp_eatFixedHexDigits = function (t, e) {
                    var n = t.pos;
                    t.lastIntValue = 0;
                    for (var i = 0; i < e; ++i) {
                        var o = t.current();
                        if (!Et(o)) return (t.pos = n), !1;
                        (t.lastIntValue = 16 * t.lastIntValue + Lt(o)), t.advance();
                    }
                    return !0;
                });
            var Rt = function (t) {
                    (this.type = t.type),
                        (this.value = t.value),
                        (this.start = t.start),
                        (this.end = t.end),
                        t.options.locations && (this.loc = new R(t, t.startLoc, t.endLoc)),
                        t.options.ranges && (this.range = [t.start, t.end]);
                },
                Nt = J.prototype;
            function kt(t) {
                return t <= 65535
                    ? String.fromCharCode(t)
                    : ((t -= 65536), String.fromCharCode(55296 + (t >> 10), 56320 + (1023 & t)));
            }
            (Nt.next = function () {
                this.options.onToken && this.options.onToken(new Rt(this)),
                    (this.lastTokEnd = this.end),
                    (this.lastTokStart = this.start),
                    (this.lastTokEndLoc = this.endLoc),
                    (this.lastTokStartLoc = this.startLoc),
                    this.nextToken();
            }),
                (Nt.getToken = function () {
                    return this.next(), new Rt(this);
                }),
                "undefined" != typeof Symbol &&
                    (Nt[Symbol.iterator] = function () {
                        var t = this;
                        return {
                            next: function () {
                                var e = t.getToken();
                                return {done: e.type === w.eof, value: e};
                            }
                        };
                    }),
                (Nt.curContext = function () {
                    return this.context[this.context.length - 1];
                }),
                (Nt.nextToken = function () {
                    var t = this.curContext();
                    return (
                        (t && t.preserveSpace) || this.skipSpace(),
                        (this.start = this.pos),
                        this.options.locations && (this.startLoc = this.curPosition()),
                        this.pos >= this.input.length
                            ? this.finishToken(w.eof)
                            : t.override
                            ? t.override(this)
                            : void this.readToken(this.fullCharCodeAtPos())
                    );
                }),
                (Nt.readToken = function (t) {
                    return f(t, this.options.ecmaVersion >= 6) || 92 === t ? this.readWord() : this.getTokenFromCode(t);
                }),
                (Nt.fullCharCodeAtPos = function () {
                    var t = this.input.charCodeAt(this.pos);
                    return t <= 55295 || t >= 57344 ? t : (t << 10) + this.input.charCodeAt(this.pos + 1) - 56613888;
                }),
                (Nt.skipBlockComment = function () {
                    var t,
                        e = this.options.onComment && this.curPosition(),
                        n = this.pos,
                        i = this.input.indexOf("*/", (this.pos += 2));
                    if (
                        (-1 === i && this.raise(this.pos - 2, "Unterminated comment"),
                        (this.pos = i + 2),
                        this.options.locations)
                    )
                        for (B.lastIndex = n; (t = B.exec(this.input)) && t.index < this.pos; )
                            ++this.curLine, (this.lineStart = t.index + t[0].length);
                    this.options.onComment &&
                        this.options.onComment(!0, this.input.slice(n + 2, i), n, this.pos, e, this.curPosition());
                }),
                (Nt.skipLineComment = function (t) {
                    for (
                        var e = this.pos,
                            n = this.options.onComment && this.curPosition(),
                            i = this.input.charCodeAt((this.pos += t));
                        this.pos < this.input.length && !P(i);

                    )
                        i = this.input.charCodeAt(++this.pos);
                    this.options.onComment &&
                        this.options.onComment(
                            !1,
                            this.input.slice(e + t, this.pos),
                            e,
                            this.pos,
                            n,
                            this.curPosition()
                        );
                }),
                (Nt.skipSpace = function () {
                    t: for (; this.pos < this.input.length; ) {
                        var t = this.input.charCodeAt(this.pos);
                        switch (t) {
                            case 32:
                            case 160:
                                ++this.pos;
                                break;
                            case 13:
                                10 === this.input.charCodeAt(this.pos + 1) && ++this.pos;
                            case 10:
                            case 8232:
                            case 8233:
                                ++this.pos, this.options.locations && (++this.curLine, (this.lineStart = this.pos));
                                break;
                            case 47:
                                switch (this.input.charCodeAt(this.pos + 1)) {
                                    case 42:
                                        this.skipBlockComment();
                                        break;
                                    case 47:
                                        this.skipLineComment(2);
                                        break;
                                    default:
                                        break t;
                                }
                                break;
                            default:
                                if (!((t > 8 && t < 14) || (t >= 5760 && x.test(String.fromCharCode(t))))) break t;
                                ++this.pos;
                        }
                    }
                }),
                (Nt.finishToken = function (t, e) {
                    (this.end = this.pos), this.options.locations && (this.endLoc = this.curPosition());
                    var n = this.type;
                    (this.type = t), (this.value = e), this.updateContext(n);
                }),
                (Nt.readToken_dot = function () {
                    var t = this.input.charCodeAt(this.pos + 1);
                    if (t >= 48 && t <= 57) return this.readNumber(!0);
                    var e = this.input.charCodeAt(this.pos + 2);
                    return this.options.ecmaVersion >= 6 && 46 === t && 46 === e
                        ? ((this.pos += 3), this.finishToken(w.ellipsis))
                        : (++this.pos, this.finishToken(w.dot));
                }),
                (Nt.readToken_slash = function () {
                    var t = this.input.charCodeAt(this.pos + 1);
                    return this.exprAllowed
                        ? (++this.pos, this.readRegexp())
                        : 61 === t
                        ? this.finishOp(w.assign, 2)
                        : this.finishOp(w.slash, 1);
                }),
                (Nt.readToken_mult_modulo_exp = function (t) {
                    var e = this.input.charCodeAt(this.pos + 1),
                        n = 1,
                        i = 42 === t ? w.star : w.modulo;
                    return (
                        this.options.ecmaVersion >= 7 &&
                            42 === t &&
                            42 === e &&
                            (++n, (i = w.starstar), (e = this.input.charCodeAt(this.pos + 2))),
                        61 === e ? this.finishOp(w.assign, n + 1) : this.finishOp(i, n)
                    );
                }),
                (Nt.readToken_pipe_amp = function (t) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    return e === t
                        ? this.finishOp(124 === t ? w.logicalOR : w.logicalAND, 2)
                        : 61 === e
                        ? this.finishOp(w.assign, 2)
                        : this.finishOp(124 === t ? w.bitwiseOR : w.bitwiseAND, 1);
                }),
                (Nt.readToken_caret = function () {
                    return 61 === this.input.charCodeAt(this.pos + 1)
                        ? this.finishOp(w.assign, 2)
                        : this.finishOp(w.bitwiseXOR, 1);
                }),
                (Nt.readToken_plus_min = function (t) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    return e === t
                        ? 45 !== e ||
                          this.inModule ||
                          62 !== this.input.charCodeAt(this.pos + 2) ||
                          (0 !== this.lastTokEnd && !C.test(this.input.slice(this.lastTokEnd, this.pos)))
                            ? this.finishOp(w.incDec, 2)
                            : (this.skipLineComment(3), this.skipSpace(), this.nextToken())
                        : 61 === e
                        ? this.finishOp(w.assign, 2)
                        : this.finishOp(w.plusMin, 1);
                }),
                (Nt.readToken_lt_gt = function (t) {
                    var e = this.input.charCodeAt(this.pos + 1),
                        n = 1;
                    return e === t
                        ? ((n = 62 === t && 62 === this.input.charCodeAt(this.pos + 2) ? 3 : 2),
                          61 === this.input.charCodeAt(this.pos + n)
                              ? this.finishOp(w.assign, n + 1)
                              : this.finishOp(w.bitShift, n))
                        : 33 !== e ||
                          60 !== t ||
                          this.inModule ||
                          45 !== this.input.charCodeAt(this.pos + 2) ||
                          45 !== this.input.charCodeAt(this.pos + 3)
                        ? (61 === e && (n = 2), this.finishOp(w.relational, n))
                        : (this.skipLineComment(4), this.skipSpace(), this.nextToken());
                }),
                (Nt.readToken_eq_excl = function (t) {
                    var e = this.input.charCodeAt(this.pos + 1);
                    return 61 === e
                        ? this.finishOp(w.equality, 61 === this.input.charCodeAt(this.pos + 2) ? 3 : 2)
                        : 61 === t && 62 === e && this.options.ecmaVersion >= 6
                        ? ((this.pos += 2), this.finishToken(w.arrow))
                        : this.finishOp(61 === t ? w.eq : w.prefix, 1);
                }),
                (Nt.getTokenFromCode = function (t) {
                    switch (t) {
                        case 46:
                            return this.readToken_dot();
                        case 40:
                            return ++this.pos, this.finishToken(w.parenL);
                        case 41:
                            return ++this.pos, this.finishToken(w.parenR);
                        case 59:
                            return ++this.pos, this.finishToken(w.semi);
                        case 44:
                            return ++this.pos, this.finishToken(w.comma);
                        case 91:
                            return ++this.pos, this.finishToken(w.bracketL);
                        case 93:
                            return ++this.pos, this.finishToken(w.bracketR);
                        case 123:
                            return ++this.pos, this.finishToken(w.braceL);
                        case 125:
                            return ++this.pos, this.finishToken(w.braceR);
                        case 58:
                            return ++this.pos, this.finishToken(w.colon);
                        case 63:
                            return ++this.pos, this.finishToken(w.question);
                        case 96:
                            if (this.options.ecmaVersion < 6) break;
                            return ++this.pos, this.finishToken(w.backQuote);
                        case 48:
                            var e = this.input.charCodeAt(this.pos + 1);
                            if (120 === e || 88 === e) return this.readRadixNumber(16);
                            if (this.options.ecmaVersion >= 6) {
                                if (111 === e || 79 === e) return this.readRadixNumber(8);
                                if (98 === e || 66 === e) return this.readRadixNumber(2);
                            }
                        case 49:
                        case 50:
                        case 51:
                        case 52:
                        case 53:
                        case 54:
                        case 55:
                        case 56:
                        case 57:
                            return this.readNumber(!1);
                        case 34:
                        case 39:
                            return this.readString(t);
                        case 47:
                            return this.readToken_slash();
                        case 37:
                        case 42:
                            return this.readToken_mult_modulo_exp(t);
                        case 124:
                        case 38:
                            return this.readToken_pipe_amp(t);
                        case 94:
                            return this.readToken_caret();
                        case 43:
                        case 45:
                            return this.readToken_plus_min(t);
                        case 60:
                        case 62:
                            return this.readToken_lt_gt(t);
                        case 61:
                        case 33:
                            return this.readToken_eq_excl(t);
                        case 126:
                            return this.finishOp(w.prefix, 1);
                    }
                    this.raise(this.pos, "Unexpected character '" + kt(t) + "'");
                }),
                (Nt.finishOp = function (t, e) {
                    var n = this.input.slice(this.pos, this.pos + e);
                    return (this.pos += e), this.finishToken(t, n);
                }),
                (Nt.readRegexp = function () {
                    for (var t, e, n = this.pos; ; ) {
                        this.pos >= this.input.length && this.raise(n, "Unterminated regular expression");
                        var i = this.input.charAt(this.pos);
                        if ((C.test(i) && this.raise(n, "Unterminated regular expression"), t)) t = !1;
                        else {
                            if ("[" === i) e = !0;
                            else if ("]" === i && e) e = !1;
                            else if ("/" === i && !e) break;
                            t = "\\" === i;
                        }
                        ++this.pos;
                    }
                    var o = this.input.slice(n, this.pos);
                    ++this.pos;
                    var a = this.pos,
                        r = this.readWord1();
                    this.containsEsc && this.unexpected(a);
                    var s = this.regexpState || (this.regexpState = new wt(this));
                    s.reset(n, o, r), this.validateRegExpFlags(s), this.validateRegExpPattern(s);
                    var c = null;
                    try {
                        c = new RegExp(o, r);
                    } catch (l) {}
                    return this.finishToken(w.regexp, {pattern: o, flags: r, value: c});
                }),
                (Nt.readInt = function (t, e) {
                    for (var n = this.pos, i = 0, o = 0, a = null == e ? 1 / 0 : e; o < a; ++o) {
                        var r,
                            s = this.input.charCodeAt(this.pos);
                        if (
                            (r = s >= 97 ? s - 97 + 10 : s >= 65 ? s - 65 + 10 : s >= 48 && s <= 57 ? s - 48 : 1 / 0) >=
                            t
                        )
                            break;
                        ++this.pos, (i = i * t + r);
                    }
                    return this.pos === n || (null != e && this.pos - n !== e) ? null : i;
                }),
                (Nt.readRadixNumber = function (t) {
                    var e = this.pos;
                    this.pos += 2;
                    var n = this.readInt(t);
                    return (
                        null == n && this.raise(this.start + 2, "Expected number in radix " + t),
                        this.options.ecmaVersion >= 11 && 110 === this.input.charCodeAt(this.pos)
                            ? ((n = "undefined" != typeof BigInt ? BigInt(this.input.slice(e, this.pos)) : null),
                              ++this.pos)
                            : f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
                        this.finishToken(w.num, n)
                    );
                }),
                (Nt.readNumber = function (t) {
                    var e = this.pos;
                    t || null !== this.readInt(10) || this.raise(e, "Invalid number");
                    var n = this.pos - e >= 2 && 48 === this.input.charCodeAt(e);
                    n && this.strict && this.raise(e, "Invalid number"),
                        n && /[89]/.test(this.input.slice(e, this.pos)) && (n = !1);
                    var i = this.input.charCodeAt(this.pos);
                    if (!n && !t && this.options.ecmaVersion >= 11 && 110 === i) {
                        var o = this.input.slice(e, this.pos),
                            a = "undefined" != typeof BigInt ? BigInt(o) : null;
                        return (
                            ++this.pos,
                            f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number"),
                            this.finishToken(w.num, a)
                        );
                    }
                    46 !== i || n || (++this.pos, this.readInt(10), (i = this.input.charCodeAt(this.pos))),
                        (69 !== i && 101 !== i) ||
                            n ||
                            ((43 !== (i = this.input.charCodeAt(++this.pos)) && 45 !== i) || ++this.pos,
                            null === this.readInt(10) && this.raise(e, "Invalid number")),
                        f(this.fullCharCodeAtPos()) && this.raise(this.pos, "Identifier directly after number");
                    var r = this.input.slice(e, this.pos),
                        s = n ? parseInt(r, 8) : parseFloat(r);
                    return this.finishToken(w.num, s);
                }),
                (Nt.readCodePoint = function () {
                    var t;
                    if (123 === this.input.charCodeAt(this.pos)) {
                        this.options.ecmaVersion < 6 && this.unexpected();
                        var e = ++this.pos;
                        (t = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos)),
                            ++this.pos,
                            t > 1114111 && this.invalidStringToken(e, "Code point out of bounds");
                    } else t = this.readHexChar(4);
                    return t;
                }),
                (Nt.readString = function (t) {
                    for (var e = "", n = ++this.pos; ; ) {
                        this.pos >= this.input.length && this.raise(this.start, "Unterminated string constant");
                        var i = this.input.charCodeAt(this.pos);
                        if (i === t) break;
                        92 === i
                            ? ((e += this.input.slice(n, this.pos)), (e += this.readEscapedChar(!1)), (n = this.pos))
                            : (P(i, this.options.ecmaVersion >= 10) &&
                                  this.raise(this.start, "Unterminated string constant"),
                              ++this.pos);
                    }
                    return (e += this.input.slice(n, this.pos++)), this.finishToken(w.string, e);
                });
            var Kt = {};
            (Nt.tryReadTemplateToken = function () {
                this.inTemplateElement = !0;
                try {
                    this.readTmplToken();
                } catch (t) {
                    if (t !== Kt) throw t;
                    this.readInvalidTemplateToken();
                }
                this.inTemplateElement = !1;
            }),
                (Nt.invalidStringToken = function (t, e) {
                    if (this.inTemplateElement && this.options.ecmaVersion >= 9) throw Kt;
                    this.raise(t, e);
                }),
                (Nt.readTmplToken = function () {
                    for (var t = "", e = this.pos; ; ) {
                        this.pos >= this.input.length && this.raise(this.start, "Unterminated template");
                        var n = this.input.charCodeAt(this.pos);
                        if (96 === n || (36 === n && 123 === this.input.charCodeAt(this.pos + 1)))
                            return this.pos !== this.start ||
                                (this.type !== w.template && this.type !== w.invalidTemplate)
                                ? ((t += this.input.slice(e, this.pos)), this.finishToken(w.template, t))
                                : 36 === n
                                ? ((this.pos += 2), this.finishToken(w.dollarBraceL))
                                : (++this.pos, this.finishToken(w.backQuote));
                        if (92 === n)
                            (t += this.input.slice(e, this.pos)), (t += this.readEscapedChar(!0)), (e = this.pos);
                        else if (P(n)) {
                            switch (((t += this.input.slice(e, this.pos)), ++this.pos, n)) {
                                case 13:
                                    10 === this.input.charCodeAt(this.pos) && ++this.pos;
                                case 10:
                                    t += "\n";
                                    break;
                                default:
                                    t += String.fromCharCode(n);
                            }
                            this.options.locations && (++this.curLine, (this.lineStart = this.pos)), (e = this.pos);
                        } else ++this.pos;
                    }
                }),
                (Nt.readInvalidTemplateToken = function () {
                    for (; this.pos < this.input.length; this.pos++)
                        switch (this.input[this.pos]) {
                            case "\\":
                                ++this.pos;
                                break;
                            case "$":
                                if ("{" !== this.input[this.pos + 1]) break;
                            case "`":
                                return this.finishToken(w.invalidTemplate, this.input.slice(this.start, this.pos));
                        }
                    this.raise(this.start, "Unterminated template");
                }),
                (Nt.readEscapedChar = function (t) {
                    var e = this.input.charCodeAt(++this.pos);
                    switch ((++this.pos, e)) {
                        case 110:
                            return "\n";
                        case 114:
                            return "\r";
                        case 120:
                            return String.fromCharCode(this.readHexChar(2));
                        case 117:
                            return kt(this.readCodePoint());
                        case 116:
                            return "\t";
                        case 98:
                            return "\b";
                        case 118:
                            return "";
                        case 102:
                            return "\f";
                        case 13:
                            10 === this.input.charCodeAt(this.pos) && ++this.pos;
                        case 10:
                            return this.options.locations && ((this.lineStart = this.pos), ++this.curLine), "";
                        default:
                            if (e >= 48 && e <= 55) {
                                var n = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0],
                                    i = parseInt(n, 8);
                                return (
                                    i > 255 && ((n = n.slice(0, -1)), (i = parseInt(n, 8))),
                                    (this.pos += n.length - 1),
                                    (e = this.input.charCodeAt(this.pos)),
                                    ("0" === n && 56 !== e && 57 !== e) ||
                                        (!this.strict && !t) ||
                                        this.invalidStringToken(
                                            this.pos - 1 - n.length,
                                            t ? "Octal literal in template string" : "Octal literal in strict mode"
                                        ),
                                    String.fromCharCode(i)
                                );
                            }
                            return P(e) ? "" : String.fromCharCode(e);
                    }
                }),
                (Nt.readHexChar = function (t) {
                    var e = this.pos,
                        n = this.readInt(16, t);
                    return null === n && this.invalidStringToken(e, "Bad character escape sequence"), n;
                }),
                (Nt.readWord1 = function () {
                    this.containsEsc = !1;
                    for (
                        var t = "", e = !0, n = this.pos, i = this.options.ecmaVersion >= 6;
                        this.pos < this.input.length;

                    ) {
                        var o = this.fullCharCodeAtPos();
                        if (y(o, i)) this.pos += o <= 65535 ? 1 : 2;
                        else {
                            if (92 !== o) break;
                            (this.containsEsc = !0), (t += this.input.slice(n, this.pos));
                            var a = this.pos;
                            117 !== this.input.charCodeAt(++this.pos) &&
                                this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"),
                                ++this.pos;
                            var r = this.readCodePoint();
                            (e ? f : y)(r, i) || this.invalidStringToken(a, "Invalid Unicode escape"),
                                (t += kt(r)),
                                (n = this.pos);
                        }
                        e = !1;
                    }
                    return t + this.input.slice(n, this.pos);
                }),
                (Nt.readWord = function () {
                    var t = this.readWord1(),
                        e = w.name;
                    return (
                        this.keywords.test(t) &&
                            (this.containsEsc && this.raiseRecoverable(this.start, "Escape sequence in keyword " + t),
                            (e = S[t])),
                        this.finishToken(e, t)
                    );
                });
            var Ut = "7.1.0";
            function Dt(t, e) {
                return J.parse(t, e);
            }
            function jt(t, e, n) {
                return J.parseExpressionAt(t, e, n);
            }
            function qt(t, e) {
                return J.tokenizer(t, e);
            }
            J.acorn = {
                Parser: J,
                version: Ut,
                defaultOptions: k,
                Position: F,
                SourceLocation: R,
                getLineInfo: N,
                Node: ct,
                TokenType: v,
                tokTypes: w,
                keywordTypes: S,
                TokContext: ut,
                tokContexts: dt,
                isIdentifierChar: y,
                isIdentifierStart: f,
                Token: Rt,
                isNewLine: P,
                lineBreak: C,
                lineBreakG: B,
                nonASCIIwhitespace: x
            };
        },
        "./src/Function.ts": function (t, e, n) {
            Object.defineProperty(e, "__esModule", {value: !0}),
                (e.default = function () {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    var o = e.pop();
                    return (0, i.compileFunction)(o || "", e);
                });
            var i = n("./src/vm.ts");
        },
        "./src/evaluate.ts": function (t, e, n) {
            Object.defineProperty(e, "__esModule", {value: !0}), (e.default = void 0);
            var i = n("./src/vm.ts");
            e.default = function (t, e, n) {
                return (0, i.runInContext)(t, e, n);
            };
        },
        "./src/index.ts": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js"),
                o = n("./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");
            Object.defineProperty(e, "__esModule", {value: !0}),
                Object.defineProperty(e, "Interpreter", {
                    enumerable: !0,
                    get: function () {
                        return a.Interpreter;
                    }
                }),
                Object.defineProperty(e, "evaluate", {
                    enumerable: !0,
                    get: function () {
                        return s.default;
                    }
                }),
                Object.defineProperty(e, "Function", {
                    enumerable: !0,
                    get: function () {
                        return c.default;
                    }
                }),
                (e.vm = void 0);
            var a = n("./src/interpreter/main.ts"),
                r = o(n("./src/vm.ts"));
            e.vm = r;
            var s = i(n("./src/evaluate.ts")),
                c = i(n("./src/Function.ts"));
        },
        "./src/interpreter/main.ts": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(e, "__esModule", {value: !0}), (e.Interpreter = void 0);
            var o = i(n("./node_modules/@babel/runtime/helpers/construct.js")),
                a = i(n("./node_modules/@babel/runtime/helpers/extends.js")),
                r = n("./node_modules/acorn/dist/acorn.mjs"),
                s = n("./src/interpreter/messages.ts");
            function c(t, e) {
                Object.defineProperty(t, "name", {value: e, writable: !1, enumerable: !1, configurable: !0});
            }
            var l = Object.prototype.hasOwnProperty,
                p = Symbol("Break"),
                u = Symbol("Continue"),
                d = Symbol("DefaultCase"),
                h = Symbol("EmptyStatementReturn"),
                f = Symbol("WithScope");
            function y(t) {
                return "function" == typeof t;
            }
            var v = (function () {
                function t(t) {
                    this.interpreter = t;
                }
                return (
                    (t.prototype.generator = function () {
                        var t = this.interpreter;
                        return {
                            getOptions: t.getOptions.bind(t),
                            getCurrentScope: function () {
                                return this.getCurrentScope();
                            }.bind(t),
                            getGlobalScope: function () {
                                return this.getGlobalScope();
                            }.bind(t),
                            getCurrentContext: function () {
                                return this.getCurrentContext();
                            }.bind(t),
                            getExecStartTime: t.getExecStartTime.bind(t)
                        };
                    }),
                    t
                );
            })();
            function g(t, e, n) {
                if ((void 0 === n && (n = !0), !(t instanceof v))) throw new Error("Illegal call");
                if ("string" != typeof e) return e;
                if (e) {
                    var i = t.generator(),
                        o = {
                            timeout: i.getOptions().timeout,
                            _initEnv: function () {
                                n || this.setCurrentContext(i.getCurrentContext()),
                                    (this.execStartTime = i.getExecStartTime()),
                                    (this.execEndTime = this.execStartTime);
                            }
                        },
                        a = n ? i.getGlobalScope() : i.getCurrentScope();
                    return new x(a, o).evaluate(e);
                }
            }
            function m(t) {
                if (!(t instanceof v)) throw new Error("Illegal call");
                for (var e = t.generator(), n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++)
                    i[o - 1] = arguments[o];
                var a = i.pop(),
                    r = new x(e.getGlobalScope(), e.getOptions()),
                    s =
                        "\n\t\t    (function anonymous(" +
                        i.join(",") +
                        "){\n\t\t        " +
                        a +
                        "\n\t\t    });\n\t\t    ";
                return r.evaluate(s);
            }
            Object.defineProperty(g, "__IS_EVAL_FUNC", {value: !0, writable: !1, enumerable: !1, configurable: !1}),
                Object.defineProperty(m, "__IS_FUNCTION_FUNC", {
                    value: !0,
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                });
            var b = function (t) {
                    this.value = t;
                },
                S = function (t) {
                    this.value = t;
                },
                A = function (t) {
                    this.value = t;
                },
                w = function (t, e, n) {
                    void 0 === e && (e = null),
                        (this.name = n),
                        (this.parent = e),
                        (this.data = t),
                        (this.labelStack = []);
                };
            function C() {}
            function B(t, e) {
                return void 0 === t && (t = null), new w(Object.create(null), t, e);
            }
            var P = {
                NaN: NaN,
                Infinity: 1 / 0,
                undefined: void 0,
                Object: Object,
                Array: Array,
                String: String,
                Boolean: Boolean,
                Number: Number,
                Date: Date,
                RegExp: RegExp,
                Error: Error,
                URIError: URIError,
                TypeError: TypeError,
                RangeError: RangeError,
                SyntaxError: SyntaxError,
                ReferenceError: ReferenceError,
                Math: Math,
                parseInt: parseInt,
                parseFloat: parseFloat,
                isNaN: isNaN,
                isFinite: isFinite,
                decodeURI: decodeURI,
                decodeURIComponent: decodeURIComponent,
                encodeURI: encodeURI,
                encodeURIComponent: encodeURIComponent,
                escape: escape,
                unescape: unescape,
                eval: g,
                Function: m
            };
            "undefined" != typeof JSON && (P.JSON = JSON),
                "undefined" != typeof Promise && (P.Promise = Promise),
                "undefined" != typeof Set && (P.Set = Set),
                "undefined" != typeof Map && (P.Map = Map),
                "undefined" != typeof Symbol && (P.Symbol = Symbol),
                "undefined" != typeof Proxy && (P.Proxy = Proxy),
                "undefined" != typeof WeakMap && (P.WeakMap = WeakMap),
                "undefined" != typeof WeakSet && (P.WeakSet = WeakSet),
                "undefined" != typeof Reflect && (P.Reflect = Reflect);
            var x = (function () {
                function t(e, n) {
                    void 0 === e && (e = t.global),
                        void 0 === n && (n = {}),
                        (this.sourceList = []),
                        (this.collectDeclVars = Object.create(null)),
                        (this.collectDeclFuncs = Object.create(null)),
                        (this.isVarDeclMode = !1),
                        (this.lastExecNode = null),
                        (this.isRunning = !1),
                        (this.options = {
                            ecmaVersion: n.ecmaVersion || t.ecmaVersion,
                            timeout: n.timeout || 0,
                            rootContext: n.rootContext,
                            globalContextInFunction:
                                void 0 === n.globalContextInFunction
                                    ? t.globalContextInFunction
                                    : n.globalContextInFunction,
                            _initEnv: n._initEnv
                        }),
                        (this.context = e || Object.create(null)),
                        (this.callStack = []),
                        this.initEnvironment(this.context);
                }
                var e = t.prototype;
                return (
                    (e.initEnvironment = function (t) {
                        var e, n;
                        if (t instanceof w) e = t;
                        else {
                            var i = null,
                                o = this.createSuperScope(t);
                            this.options.rootContext &&
                                (i = new w(((n = this.options.rootContext), Object.create(n)), o, "rootScope")),
                                (e = new w(t, i || o, "globalScope"));
                        }
                        (this.globalScope = e),
                            (this.currentScope = this.globalScope),
                            (this.globalContext = e.data),
                            (this.currentContext = e.data),
                            (this.collectDeclVars = Object.create(null)),
                            (this.collectDeclFuncs = Object.create(null)),
                            (this.execStartTime = Date.now()),
                            (this.execEndTime = this.execStartTime);
                        var a = this.options._initEnv;
                        a && a.call(this);
                    }),
                    (e.getExecStartTime = function () {
                        return this.execStartTime;
                    }),
                    (e.getExecutionTime = function () {
                        return this.execEndTime - this.execStartTime;
                    }),
                    (e.setExecTimeout = function (t) {
                        void 0 === t && (t = 0), (this.options.timeout = t);
                    }),
                    (e.getOptions = function () {
                        return this.options;
                    }),
                    (e.getGlobalScope = function () {
                        return this.globalScope;
                    }),
                    (e.getCurrentScope = function () {
                        return this.currentScope;
                    }),
                    (e.getCurrentContext = function () {
                        return this.currentContext;
                    }),
                    (e.isInterruptThrow = function (t) {
                        return (
                            t instanceof s.InterruptThrowError ||
                            t instanceof s.InterruptThrowReferenceError ||
                            t instanceof s.InterruptThrowSyntaxError
                        );
                    }),
                    (e.createSuperScope = function (t) {
                        var e = (0, a.default)({}, P);
                        return (
                            Object.keys(e).forEach(function (n) {
                                n in t && delete e[n];
                            }),
                            new w(e, null, "superScope")
                        );
                    }),
                    (e.setCurrentContext = function (t) {
                        this.currentContext = t;
                    }),
                    (e.setCurrentScope = function (t) {
                        this.currentScope = t;
                    }),
                    (e.evaluate = function (e) {
                        var n;
                        if ((void 0 === e && (e = ""), e))
                            return (
                                (n = (0, r.parse)(e, {
                                    ranges: !0,
                                    locations: !0,
                                    ecmaVersion: this.options.ecmaVersion || t.ecmaVersion
                                })),
                                this.evaluateNode(n, e)
                            );
                    }),
                    (e.appendCode = function (t) {
                        return this.evaluate(t);
                    }),
                    (e.evaluateNode = function (t, e) {
                        void 0 === e && (e = ""),
                            (this.value = void 0),
                            (this.source = e),
                            this.sourceList.push(e),
                            (this.isRunning = !0),
                            (this.execStartTime = Date.now()),
                            (this.execEndTime = this.execStartTime),
                            (this.collectDeclVars = Object.create(null)),
                            (this.collectDeclFuncs = Object.create(null));
                        var n = this.getCurrentScope(),
                            i = this.getCurrentContext(),
                            o = n.labelStack.concat([]),
                            a = this.callStack.concat([]);
                        try {
                            var r = this.createClosure(t);
                            this.addDeclarationsToScope(
                                this.collectDeclVars,
                                this.collectDeclFuncs,
                                this.getCurrentScope()
                            ),
                                r();
                        } catch (s) {
                            throw s;
                        } finally {
                            this.setCurrentScope(n),
                                this.setCurrentContext(i),
                                (n.labelStack = o),
                                (this.callStack = a),
                                (this.execEndTime = Date.now());
                        }
                        return (this.isRunning = !1), this.getValue();
                    }),
                    (e.createErrorMessage = function (t, e, n) {
                        var i = t[1].replace("%0", String(e));
                        return null !== n && (i += this.getNodePosition(n || this.lastExecNode)), i;
                    }),
                    (e.createError = function (t, e) {
                        return new e(t);
                    }),
                    (e.createThrowError = function (t, e) {
                        return this.createError(t, e);
                    }),
                    (e.createInternalThrowError = function (t, e, n) {
                        return this.createError(this.createErrorMessage(t, e, n), t[2]);
                    }),
                    (e.checkTimeout = function () {
                        if (!this.isRunning) return !1;
                        var t = this.options.timeout || 0;
                        return Date.now() - this.execStartTime > t;
                    }),
                    (e.getNodePosition = function (t) {
                        return t && t.loc ? " [" + t.loc.start.line + ":" + t.loc.start.column + "]" : "";
                    }),
                    (e.createClosure = function (t) {
                        var e,
                            n = this;
                        switch (t.type) {
                            case "BinaryExpression":
                                e = this.binaryExpressionHandler(t);
                                break;
                            case "LogicalExpression":
                                e = this.logicalExpressionHandler(t);
                                break;
                            case "UnaryExpression":
                                e = this.unaryExpressionHandler(t);
                                break;
                            case "UpdateExpression":
                                e = this.updateExpressionHandler(t);
                                break;
                            case "ObjectExpression":
                                e = this.objectExpressionHandler(t);
                                break;
                            case "ArrayExpression":
                                e = this.arrayExpressionHandler(t);
                                break;
                            case "CallExpression":
                                e = this.callExpressionHandler(t);
                                break;
                            case "NewExpression":
                                e = this.newExpressionHandler(t);
                                break;
                            case "MemberExpression":
                                e = this.memberExpressionHandler(t);
                                break;
                            case "ThisExpression":
                                e = this.thisExpressionHandler(t);
                                break;
                            case "SequenceExpression":
                                e = this.sequenceExpressionHandler(t);
                                break;
                            case "Literal":
                                e = this.literalHandler(t);
                                break;
                            case "Identifier":
                                e = this.identifierHandler(t);
                                break;
                            case "AssignmentExpression":
                                e = this.assignmentExpressionHandler(t);
                                break;
                            case "FunctionDeclaration":
                                e = this.functionDeclarationHandler(t);
                                break;
                            case "VariableDeclaration":
                                e = this.variableDeclarationHandler(t);
                                break;
                            case "BlockStatement":
                            case "Program":
                                e = this.programHandler(t);
                                break;
                            case "ExpressionStatement":
                                e = this.expressionStatementHandler(t);
                                break;
                            case "EmptyStatement":
                                e = this.emptyStatementHandler(t);
                                break;
                            case "ReturnStatement":
                                e = this.returnStatementHandler(t);
                                break;
                            case "FunctionExpression":
                                e = this.functionExpressionHandler(t);
                                break;
                            case "IfStatement":
                                e = this.ifStatementHandler(t);
                                break;
                            case "ConditionalExpression":
                                e = this.conditionalExpressionHandler(t);
                                break;
                            case "ForStatement":
                                e = this.forStatementHandler(t);
                                break;
                            case "WhileStatement":
                                e = this.whileStatementHandler(t);
                                break;
                            case "DoWhileStatement":
                                e = this.doWhileStatementHandler(t);
                                break;
                            case "ForInStatement":
                                e = this.forInStatementHandler(t);
                                break;
                            case "WithStatement":
                                e = this.withStatementHandler(t);
                                break;
                            case "ThrowStatement":
                                e = this.throwStatementHandler(t);
                                break;
                            case "TryStatement":
                                e = this.tryStatementHandler(t);
                                break;
                            case "ContinueStatement":
                                e = this.continueStatementHandler(t);
                                break;
                            case "BreakStatement":
                                e = this.breakStatementHandler(t);
                                break;
                            case "SwitchStatement":
                                e = this.switchStatementHandler(t);
                                break;
                            case "LabeledStatement":
                                e = this.labeledStatementHandler(t);
                                break;
                            case "DebuggerStatement":
                                e = this.debuggerStatementHandler(t);
                                break;
                            default:
                                throw this.createInternalThrowError(s.Messages.NodeTypeSyntaxError, t.type, t);
                        }
                        return function () {
                            var i = n.options.timeout;
                            if (i && i > 0 && n.checkTimeout())
                                throw n.createInternalThrowError(s.Messages.ExecutionTimeOutError, i, null);
                            return (n.lastExecNode = t), e.apply(void 0, arguments);
                        };
                    }),
                    (e.binaryExpressionHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.left),
                            i = this.createClosure(t.right);
                        return function () {
                            var o = n(),
                                a = i();
                            switch (t.operator) {
                                case "==":
                                    return o == a;
                                case "!=":
                                    return o != a;
                                case "===":
                                    return o === a;
                                case "!==":
                                    return o !== a;
                                case "<":
                                    return o < a;
                                case "<=":
                                    return o <= a;
                                case ">":
                                    return o > a;
                                case ">=":
                                    return o >= a;
                                case "<<":
                                    return o << a;
                                case ">>":
                                    return o >> a;
                                case ">>>":
                                    return o >>> a;
                                case "+":
                                    return o + a;
                                case "-":
                                    return o - a;
                                case "*":
                                    return o * a;
                                case "**":
                                    return Math.pow(o, a);
                                case "/":
                                    return o / a;
                                case "%":
                                    return o % a;
                                case "|":
                                    return o | a;
                                case "^":
                                    return o ^ a;
                                case "&":
                                    return o & a;
                                case "in":
                                    return o in a;
                                case "instanceof":
                                    return o instanceof a;
                                default:
                                    throw e.createInternalThrowError(
                                        s.Messages.BinaryOperatorSyntaxError,
                                        t.operator,
                                        t
                                    );
                            }
                        };
                    }),
                    (e.logicalExpressionHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.left),
                            i = this.createClosure(t.right);
                        return function () {
                            switch (t.operator) {
                                case "||":
                                    return n() || i();
                                case "&&":
                                    return n() && i();
                                default:
                                    throw e.createInternalThrowError(
                                        s.Messages.LogicalOperatorSyntaxError,
                                        t.operator,
                                        t
                                    );
                            }
                        };
                    }),
                    (e.unaryExpressionHandler = function (t) {
                        var e = this;
                        switch (t.operator) {
                            case "delete":
                                var n = this.createObjectGetter(t.argument),
                                    i = this.createNameGetter(t.argument);
                                return function () {
                                    return delete n()[i()];
                                };
                            default:
                                var o;
                                if ("typeof" === t.operator && "Identifier" === t.argument.type) {
                                    var a = this.createObjectGetter(t.argument),
                                        r = this.createNameGetter(t.argument);
                                    o = function () {
                                        return a()[r()];
                                    };
                                } else o = this.createClosure(t.argument);
                                return function () {
                                    var n = o();
                                    switch (t.operator) {
                                        case "-":
                                            return -n;
                                        case "+":
                                            return +n;
                                        case "!":
                                            return !n;
                                        case "~":
                                            return ~n;
                                        case "void":
                                            return;
                                        case "typeof":
                                            return typeof n;
                                        default:
                                            throw e.createInternalThrowError(
                                                s.Messages.UnaryOperatorSyntaxError,
                                                t.operator,
                                                t
                                            );
                                    }
                                };
                        }
                    }),
                    (e.updateExpressionHandler = function (t) {
                        var e = this,
                            n = this.createObjectGetter(t.argument),
                            i = this.createNameGetter(t.argument);
                        return function () {
                            var o = n(),
                                a = i();
                            switch ((e.assertVariable(o, a, t), t.operator)) {
                                case "++":
                                    return t.prefix ? ++o[a] : o[a]++;
                                case "--":
                                    return t.prefix ? --o[a] : o[a]--;
                                default:
                                    throw e.createInternalThrowError(
                                        s.Messages.UpdateOperatorSyntaxError,
                                        t.operator,
                                        t
                                    );
                            }
                        };
                    }),
                    (e.objectExpressionHandler = function (t) {
                        var e = this,
                            n = [];
                        function i(t) {
                            return "Identifier" === t.type
                                ? t.name
                                : "Literal" === t.type
                                ? t.value
                                : this.throwError(s.Messages.ObjectStructureSyntaxError, t.type, t);
                        }
                        var o = Object.create(null);
                        return (
                            t.properties.forEach(function (t) {
                                var a = t.kind,
                                    r = i(t.key);
                                (o[r] && "init" !== a) || (o[r] = {}),
                                    (o[r][a] = e.createClosure(t.value)),
                                    n.push({key: r, property: t});
                            }),
                            function () {
                                for (var t = {}, e = n.length, i = 0; i < e; i++) {
                                    var a = n[i],
                                        r = a.key,
                                        s = o[r],
                                        l = s.init ? s.init() : void 0,
                                        p = s.get ? s.get() : function () {},
                                        u = s.set ? s.set() : function () {};
                                    if ("set" in s || "get" in s) {
                                        var d = {configurable: !0, enumerable: !0, get: p, set: u};
                                        Object.defineProperty(t, r, d);
                                    } else {
                                        var h = a.property,
                                            f = h.kind;
                                        "Identifier" !== h.key.type ||
                                            "FunctionExpression" !== h.value.type ||
                                            "init" !== f ||
                                            h.value.id ||
                                            c(l, h.key.name),
                                            (t[r] = l);
                                    }
                                }
                                return t;
                            }
                        );
                    }),
                    (e.arrayExpressionHandler = function (t) {
                        var e = this,
                            n = t.elements.map(function (t) {
                                return t ? e.createClosure(t) : t;
                            });
                        return function () {
                            for (var t = n.length, e = Array(t), i = 0; i < t; i++) {
                                var o = n[i];
                                o && (e[i] = o());
                            }
                            return e;
                        };
                    }),
                    (e.safeObjectGet = function (t, e) {
                        return t[e];
                    }),
                    (e.createCallFunctionGetter = function (t) {
                        var e = this;
                        switch (t.type) {
                            case "MemberExpression":
                                var n = this.createClosure(t.object),
                                    i = this.createMemberKeyGetter(t),
                                    o = this.source;
                                return function () {
                                    var a = n(),
                                        r = i(),
                                        c = e.safeObjectGet(a, r, t);
                                    if (!c || !y(c)) {
                                        var l = o.slice(t.start, t.end);
                                        throw e.createInternalThrowError(
                                            s.Messages.FunctionUndefinedReferenceError,
                                            l,
                                            t
                                        );
                                    }
                                    return c.__IS_EVAL_FUNC
                                        ? function (t) {
                                              return c(new v(e), t, !0);
                                          }
                                        : c.__IS_FUNCTION_FUNC
                                        ? function () {
                                              for (var t = arguments.length, n = new Array(t), i = 0; i < t; i++)
                                                  n[i] = arguments[i];
                                              return c.apply(void 0, [new v(e)].concat(n));
                                          }
                                        : c.bind(a);
                                };
                            default:
                                var a = this.createClosure(t);
                                return function () {
                                    var n = "";
                                    "Identifier" === t.type && (n = t.name);
                                    var i = a();
                                    if (!i || !y(i))
                                        throw e.createInternalThrowError(
                                            s.Messages.FunctionUndefinedReferenceError,
                                            n,
                                            t
                                        );
                                    if ("Identifier" === t.type && i.__IS_EVAL_FUNC && "eval" === n)
                                        return function (t) {
                                            var o = e.getScopeFromName(n, e.getCurrentScope()),
                                                a = !o.parent || e.globalScope === o || "rootScope" === o.name;
                                            return i(new v(e), t, !a);
                                        };
                                    if (i.__IS_EVAL_FUNC)
                                        return function (t) {
                                            return i(new v(e), t, !0);
                                        };
                                    if (i.__IS_FUNCTION_FUNC)
                                        return function () {
                                            for (var t = arguments.length, n = new Array(t), o = 0; o < t; o++)
                                                n[o] = arguments[o];
                                            return i.apply(void 0, [new v(e)].concat(n));
                                        };
                                    var o = e.options.globalContextInFunction;
                                    if ("Identifier" === t.type) {
                                        var r = e.getIdentifierScope(t);
                                        r.name === f && (o = r.data);
                                    }
                                    return i.bind(o);
                                };
                        }
                    }),
                    (e.callExpressionHandler = function (t) {
                        var e = this,
                            n = this.createCallFunctionGetter(t.callee),
                            i = t.arguments.map(function (t) {
                                return e.createClosure(t);
                            });
                        return function () {
                            return n().apply(
                                void 0,
                                i.map(function (t) {
                                    return t();
                                })
                            );
                        };
                    }),
                    (e.functionExpressionHandler = function (t) {
                        var e = this,
                            n = this,
                            i = this.source,
                            o = this.collectDeclVars,
                            a = this.collectDeclFuncs;
                        (this.collectDeclVars = Object.create(null)), (this.collectDeclFuncs = Object.create(null));
                        var r = t.id ? t.id.name : "",
                            s = t.params.length,
                            l = t.params.map(function (t) {
                                return e.createParamNameGetter(t);
                            }),
                            p = this.createClosure(t.body),
                            u = this.collectDeclVars,
                            d = this.collectDeclFuncs;
                        return (
                            (this.collectDeclVars = o),
                            (this.collectDeclFuncs = a),
                            function () {
                                var e = n.getCurrentScope(),
                                    o = function t() {
                                        for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++)
                                            o[a] = arguments[a];
                                        n.callStack.push("" + r);
                                        var s = n.getCurrentScope(),
                                            c = B(e, r);
                                        n.setCurrentScope(c),
                                            n.addDeclarationsToScope(u, d, c),
                                            r && (c.data[r] = t),
                                            (c.data.arguments = arguments),
                                            l.forEach(function (t, e) {
                                                c.data[t()] = o[e];
                                            });
                                        var h = n.getCurrentContext();
                                        n.setCurrentContext(this);
                                        var f = p();
                                        if (
                                            (n.setCurrentContext(h),
                                            n.setCurrentScope(s),
                                            n.callStack.pop(),
                                            f instanceof b)
                                        )
                                            return f.value;
                                    };
                                return (
                                    c(o, r),
                                    Object.defineProperty(o, "length", {
                                        value: s,
                                        writable: !1,
                                        enumerable: !1,
                                        configurable: !0
                                    }),
                                    Object.defineProperty(o, "toString", {
                                        value: function () {
                                            return i.slice(t.start, t.end);
                                        },
                                        writable: !0,
                                        configurable: !0,
                                        enumerable: !1
                                    }),
                                    Object.defineProperty(o, "valueOf", {
                                        value: function () {
                                            return i.slice(t.start, t.end);
                                        },
                                        writable: !0,
                                        configurable: !0,
                                        enumerable: !1
                                    }),
                                    o
                                );
                            }
                        );
                    }),
                    (e.newExpressionHandler = function (t) {
                        var e = this,
                            n = this.source,
                            i = this.createClosure(t.callee),
                            a = t.arguments.map(function (t) {
                                return e.createClosure(t);
                            });
                        return function () {
                            var r = i();
                            if (!y(r) || r.__IS_EVAL_FUNC) {
                                var c = t.callee,
                                    l = n.slice(c.start, c.end);
                                throw e.createInternalThrowError(s.Messages.IsNotConstructor, l, t);
                            }
                            return r.__IS_FUNCTION_FUNC
                                ? r.apply(
                                      void 0,
                                      [new v(e)].concat(
                                          a.map(function (t) {
                                              return t();
                                          })
                                      )
                                  )
                                : (0, o.default)(
                                      r,
                                      a.map(function (t) {
                                          return t();
                                      })
                                  );
                        };
                    }),
                    (e.memberExpressionHandler = function (t) {
                        var e = this.createClosure(t.object),
                            n = this.createMemberKeyGetter(t);
                        return function () {
                            return e()[n()];
                        };
                    }),
                    (e.thisExpressionHandler = function () {
                        var t = this;
                        return function () {
                            return t.getCurrentContext();
                        };
                    }),
                    (e.sequenceExpressionHandler = function (t) {
                        var e = this,
                            n = t.expressions.map(function (t) {
                                return e.createClosure(t);
                            });
                        return function () {
                            for (var t, e = n.length, i = 0; i < e; i++) t = (0, n[i])();
                            return t;
                        };
                    }),
                    (e.literalHandler = function (t) {
                        return function () {
                            return t.regex ? new RegExp(t.regex.pattern, t.regex.flags) : t.value;
                        };
                    }),
                    (e.identifierHandler = function (t) {
                        var e = this;
                        return function () {
                            var n = e.getCurrentScope(),
                                i = e.getScopeDataFromName(t.name, n);
                            return e.assertVariable(i, t.name, t), i[t.name];
                        };
                    }),
                    (e.getIdentifierScope = function (t) {
                        var e = this.getCurrentScope();
                        return this.getScopeFromName(t.name, e);
                    }),
                    (e.assignmentExpressionHandler = function (t) {
                        var e = this;
                        "Identifier" !== t.left.type ||
                            "FunctionExpression" !== t.right.type ||
                            t.right.id ||
                            (t.right.id = {type: "Identifier", name: t.left.name});
                        var n = this.createObjectGetter(t.left),
                            i = this.createNameGetter(t.left),
                            o = this.createClosure(t.right);
                        return function () {
                            var a = n(),
                                r = i(),
                                c = o();
                            switch (("=" !== t.operator && e.assertVariable(a, r, t), t.operator)) {
                                case "=":
                                    return (a[r] = c);
                                case "+=":
                                    return (a[r] += c);
                                case "-=":
                                    return (a[r] -= c);
                                case "*=":
                                    return (a[r] *= c);
                                case "/=":
                                    return (a[r] /= c);
                                case "%=":
                                    return (a[r] %= c);
                                case "<<=":
                                    return (a[r] <<= c);
                                case ">>=":
                                    return (a[r] >>= c);
                                case ">>>=":
                                    return (a[r] >>>= c);
                                case "&=":
                                    return (a[r] &= c);
                                case "^=":
                                    return (a[r] ^= c);
                                case "|=":
                                    return (a[r] |= c);
                                default:
                                    throw e.createInternalThrowError(
                                        s.Messages.AssignmentExpressionSyntaxError,
                                        t.type,
                                        t
                                    );
                            }
                        };
                    }),
                    (e.functionDeclarationHandler = function (t) {
                        if (t.id) {
                            var e = this.functionExpressionHandler(t);
                            Object.defineProperty(e, "isFunctionDeclareClosure", {
                                value: !0,
                                writable: !1,
                                configurable: !1,
                                enumerable: !1
                            }),
                                this.funcDeclaration(t.id.name, e);
                        }
                        return function () {
                            return h;
                        };
                    }),
                    (e.getVariableName = function (t) {
                        if ("Identifier" === t.type) return t.name;
                        throw this.createInternalThrowError(s.Messages.VariableTypeSyntaxError, t.type, t);
                    }),
                    (e.variableDeclarationHandler = function (t) {
                        for (var e, n = this, i = [], o = 0; o < t.declarations.length; o++) {
                            var a = t.declarations[o];
                            this.varDeclaration(this.getVariableName(a.id)),
                                a.init &&
                                    i.push({type: "AssignmentExpression", operator: "=", left: a.id, right: a.init});
                        }
                        return (
                            i.length && (e = this.createClosure({type: "BlockStatement", body: i})),
                            function () {
                                if (e) {
                                    var t = n.isVarDeclMode;
                                    (n.isVarDeclMode = !0), e(), (n.isVarDeclMode = t);
                                }
                                return h;
                            }
                        );
                    }),
                    (e.assertVariable = function (t, e, n) {
                        if (t === this.globalScope.data && !(e in t))
                            throw this.createInternalThrowError(s.Messages.VariableUndefinedReferenceError, e, n);
                    }),
                    (e.programHandler = function (t) {
                        var e = this,
                            n = t.body.map(function (t) {
                                return e.createClosure(t);
                            });
                        return function () {
                            for (var t = h, i = 0; i < n.length; i++) {
                                var o = n[i],
                                    a = e.setValue(o());
                                if (
                                    a !== h &&
                                    ((t = a) instanceof b || t instanceof S || t instanceof A || t === p || t === u)
                                )
                                    break;
                            }
                            return t;
                        };
                    }),
                    (e.expressionStatementHandler = function (t) {
                        return this.createClosure(t.expression);
                    }),
                    (e.emptyStatementHandler = function () {
                        return function () {
                            return h;
                        };
                    }),
                    (e.returnStatementHandler = function (t) {
                        var e = t.argument ? this.createClosure(t.argument) : C;
                        return function () {
                            return new b(e());
                        };
                    }),
                    (e.ifStatementHandler = function (t) {
                        var e = this.createClosure(t.test),
                            n = this.createClosure(t.consequent),
                            i = t.alternate
                                ? this.createClosure(t.alternate)
                                : function () {
                                      return h;
                                  };
                        return function () {
                            return e() ? n() : i();
                        };
                    }),
                    (e.conditionalExpressionHandler = function (t) {
                        return this.ifStatementHandler(t);
                    }),
                    (e.forStatementHandler = function (t) {
                        var e = this,
                            n = C,
                            i = t.test
                                ? this.createClosure(t.test)
                                : function () {
                                      return !0;
                                  },
                            o = C,
                            a = this.createClosure(t.body);
                        return (
                            "ForStatement" === t.type &&
                                ((n = t.init ? this.createClosure(t.init) : n),
                                (o = t.update ? this.createClosure(t.update) : C)),
                            function (r) {
                                var s,
                                    c = h,
                                    l = "DoWhileStatement" === t.type;
                                for (r && "LabeledStatement" === r.type && (s = r.label.name), n(); l || i(); o()) {
                                    l = !1;
                                    var d = e.setValue(a());
                                    if (d !== h && d !== u) {
                                        if (d === p) break;
                                        if ((c = d) instanceof A && c.value === s) c = h;
                                        else if (c instanceof b || c instanceof S || c instanceof A) break;
                                    }
                                }
                                return c;
                            }
                        );
                    }),
                    (e.whileStatementHandler = function (t) {
                        return this.forStatementHandler(t);
                    }),
                    (e.doWhileStatementHandler = function (t) {
                        return this.forStatementHandler(t);
                    }),
                    (e.forInStatementHandler = function (t) {
                        var e = this,
                            n = t.left,
                            i = this.createClosure(t.right),
                            o = this.createClosure(t.body);
                        return (
                            "VariableDeclaration" === t.left.type &&
                                (this.createClosure(t.left)(), (n = t.left.declarations[0].id)),
                            function (t) {
                                var a,
                                    r,
                                    s = h;
                                t && "LabeledStatement" === t.type && (a = t.label.name);
                                var c = i();
                                for (r in c) {
                                    e.assignmentExpressionHandler({
                                        type: "AssignmentExpression",
                                        operator: "=",
                                        left: n,
                                        right: {type: "Literal", value: r}
                                    })();
                                    var l = e.setValue(o());
                                    if (l !== h && l !== u) {
                                        if (l === p) break;
                                        if ((s = l) instanceof A && s.value === a) s = h;
                                        else if (s instanceof b || s instanceof S || s instanceof A) break;
                                    }
                                }
                                return s;
                            }
                        );
                    }),
                    (e.withStatementHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.object),
                            i = this.createClosure(t.body);
                        return function () {
                            var t = n(),
                                o = e.getCurrentScope(),
                                a = new w(t, o, f);
                            e.setCurrentScope(a);
                            var r = e.setValue(i());
                            return e.setCurrentScope(o), r;
                        };
                    }),
                    (e.throwStatementHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.argument);
                        return function () {
                            throw (e.setValue(void 0), n());
                        };
                    }),
                    (e.tryStatementHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.block),
                            i = t.handler ? this.catchClauseHandler(t.handler) : null,
                            o = t.finalizer ? this.createClosure(t.finalizer) : null;
                        return function () {
                            var t,
                                a,
                                r = e.getCurrentScope(),
                                s = e.getCurrentContext(),
                                c = r.labelStack.concat([]),
                                l = e.callStack.concat([]),
                                p = h,
                                u = function () {
                                    e.setCurrentScope(r), e.setCurrentContext(s), (r.labelStack = c), (e.callStack = l);
                                };
                            try {
                                (p = e.setValue(n())) instanceof b && (t = p);
                            } catch (d) {
                                if ((u(), e.isInterruptThrow(d))) throw d;
                                if (i)
                                    try {
                                        (p = e.setValue(i(d))) instanceof b && (t = p);
                                    } catch (d) {
                                        if ((u(), e.isInterruptThrow(d))) throw d;
                                        a = d;
                                    }
                            }
                            if (o)
                                try {
                                    (p = o()) instanceof b && (t = p);
                                } catch (d) {
                                    if ((u(), e.isInterruptThrow(d))) throw d;
                                    a = d;
                                }
                            if (a) throw a;
                            return t || p;
                        };
                    }),
                    (e.catchClauseHandler = function (t) {
                        var e = this,
                            n = this.createParamNameGetter(t.param),
                            i = this.createClosure(t.body);
                        return function (t) {
                            var o,
                                a = e.getCurrentScope().data,
                                r = n(),
                                s = l.call(a, r),
                                c = a[r];
                            return (a[r] = t), (o = i()), s ? (a[r] = c) : delete a[r], o;
                        };
                    }),
                    (e.continueStatementHandler = function (t) {
                        return function () {
                            return t.label ? new A(t.label.name) : u;
                        };
                    }),
                    (e.breakStatementHandler = function (t) {
                        return function () {
                            return t.label ? new S(t.label.name) : p;
                        };
                    }),
                    (e.switchStatementHandler = function (t) {
                        var e = this,
                            n = this.createClosure(t.discriminant),
                            i = t.cases.map(function (t) {
                                return e.switchCaseHandler(t);
                            });
                        return function () {
                            for (var t, o, a, r = n(), s = !1, c = 0; c < i.length; c++) {
                                var l = i[c](),
                                    f = l.testClosure();
                                if (f !== d) {
                                    if (s || f === r) {
                                        if (((s = !0), (o = e.setValue(l.bodyClosure())) === h)) continue;
                                        if (o === p) break;
                                        if ((t = o) instanceof b || t instanceof S || t instanceof A || t === u) break;
                                    }
                                } else a = l;
                            }
                            return (
                                !s && a && ((o = e.setValue(a.bodyClosure())) === h || o === p || o === u || (t = o)), t
                            );
                        };
                    }),
                    (e.switchCaseHandler = function (t) {
                        var e = t.test
                                ? this.createClosure(t.test)
                                : function () {
                                      return d;
                                  },
                            n = this.createClosure({type: "BlockStatement", body: t.consequent});
                        return function () {
                            return {testClosure: e, bodyClosure: n};
                        };
                    }),
                    (e.labeledStatementHandler = function (t) {
                        var e = this,
                            n = t.label.name,
                            i = this.createClosure(t.body);
                        return function () {
                            var o,
                                a = e.getCurrentScope();
                            return (
                                a.labelStack.push(n),
                                (o = i(t)) instanceof S && o.value === n && (o = h),
                                a.labelStack.pop(),
                                o
                            );
                        };
                    }),
                    (e.debuggerStatementHandler = function () {
                        return function () {
                            return h;
                        };
                    }),
                    (e.createParamNameGetter = function (t) {
                        if ("Identifier" === t.type)
                            return function () {
                                return t.name;
                            };
                        throw this.createInternalThrowError(s.Messages.ParamTypeSyntaxError, t.type, t);
                    }),
                    (e.createObjectKeyGetter = function (t) {
                        var e;
                        return (
                            (e =
                                "Identifier" === t.type
                                    ? function () {
                                          return t.name;
                                      }
                                    : this.createClosure(t)),
                            function () {
                                return e();
                            }
                        );
                    }),
                    (e.createMemberKeyGetter = function (t) {
                        return t.computed ? this.createClosure(t.property) : this.createObjectKeyGetter(t.property);
                    }),
                    (e.createObjectGetter = function (t) {
                        var e = this;
                        switch (t.type) {
                            case "Identifier":
                                return function () {
                                    return e.getScopeDataFromName(t.name, e.getCurrentScope());
                                };
                            case "MemberExpression":
                                return this.createClosure(t.object);
                            default:
                                throw this.createInternalThrowError(s.Messages.AssignmentTypeSyntaxError, t.type, t);
                        }
                    }),
                    (e.createNameGetter = function (t) {
                        switch (t.type) {
                            case "Identifier":
                                return function () {
                                    return t.name;
                                };
                            case "MemberExpression":
                                return this.createMemberKeyGetter(t);
                            default:
                                throw this.createInternalThrowError(s.Messages.AssignmentTypeSyntaxError, t.type, t);
                        }
                    }),
                    (e.varDeclaration = function (t) {
                        this.collectDeclVars[t] = void 0;
                    }),
                    (e.funcDeclaration = function (t, e) {
                        this.collectDeclFuncs[t] = e;
                    }),
                    (e.addDeclarationsToScope = function (t, e, n) {
                        var i = n.data;
                        for (var o in e) {
                            var a = e[o];
                            i[o] = a ? a() : a;
                        }
                        for (var r in t) r in i || (i[r] = void 0);
                    }),
                    (e.getScopeValue = function (t, e) {
                        return this.getScopeFromName(t, e).data[t];
                    }),
                    (e.getScopeDataFromName = function (t, e) {
                        return this.getScopeFromName(t, e).data;
                    }),
                    (e.getScopeFromName = function (t, e) {
                        var n = e;
                        do {
                            if (t in n.data) return n;
                        } while ((n = n.parent));
                        return this.globalScope;
                    }),
                    (e.setValue = function (t) {
                        var e = this.callStack.length;
                        return this.isVarDeclMode ||
                            e ||
                            t === h ||
                            t === p ||
                            t === u ||
                            t instanceof S ||
                            t instanceof A
                            ? t
                            : ((this.value = t instanceof b ? t.value : t), t);
                    }),
                    (e.getValue = function () {
                        return this.value;
                    }),
                    t
                );
            })();
            (e.Interpreter = x),
                (x.version = "1.4.5"),
                (x.eval = g),
                (x.Function = m),
                (x.ecmaVersion = 5),
                (x.globalContextInFunction = void 0),
                (x.global = Object.create(null));
        },
        "./src/interpreter/messages.ts": function (t, e, n) {
            var i = n("./node_modules/@babel/runtime/helpers/interopRequireDefault.js");
            Object.defineProperty(e, "__esModule", {value: !0}),
                (e.Messages =
                    e.InterruptThrowReferenceError =
                    e.InterruptThrowSyntaxError =
                    e.InterruptThrowError =
                    e.ThrowTypeError =
                    e.ThrowReferenceError =
                    e.ThrowSyntaxError =
                    e.ThrowError =
                        void 0);
            var o = i(n("./node_modules/@babel/runtime/helpers/inheritsLoose.js")),
                a = i(n("./node_modules/@babel/runtime/helpers/wrapNativeSuper.js")),
                r = (function (t) {
                    function e() {
                        return t.apply(this, arguments) || this;
                    }
                    return (0, o.default)(e, t), e;
                })((0, a.default)(Error));
            e.ThrowError = r;
            var s = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })((0, a.default)(SyntaxError));
            e.ThrowSyntaxError = s;
            var c = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })((0, a.default)(ReferenceError));
            e.ThrowReferenceError = c;
            var l = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })((0, a.default)(TypeError));
            e.ThrowTypeError = l;
            var p = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })(r);
            e.InterruptThrowError = p;
            var u = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })(s);
            e.InterruptThrowSyntaxError = u;
            var d = (function (t) {
                function e() {
                    return t.apply(this, arguments) || this;
                }
                return (0, o.default)(e, t), e;
            })(c);
            e.InterruptThrowReferenceError = d;
            var h = {
                UnknownError: [3001, "%0", p],
                ExecutionTimeOutError: [3002, "Script execution timed out after %0ms", p],
                NodeTypeSyntaxError: [1001, "Unknown node type: %0", d],
                BinaryOperatorSyntaxError: [1002, "Unknown binary operator: %0", d],
                LogicalOperatorSyntaxError: [1003, "Unknown logical operator: %0", d],
                UnaryOperatorSyntaxError: [1004, "Unknown unary operator: %0", d],
                UpdateOperatorSyntaxError: [1005, "Unknown update operator: %0", d],
                ObjectStructureSyntaxError: [1006, "Unknown object structure: %0", d],
                AssignmentExpressionSyntaxError: [1007, "Unknown assignment expression: %0", d],
                VariableTypeSyntaxError: [1008, "Unknown variable type: %0", d],
                ParamTypeSyntaxError: [1009, "Unknown param type: %0", d],
                AssignmentTypeSyntaxError: [1010, "Unknown assignment type: %0", d],
                FunctionUndefinedReferenceError: [2001, "%0 is not a function", c],
                VariableUndefinedReferenceError: [2002, "%0 is not defined", c],
                IsNotConstructor: [2003, "%0 is not a constructor", l]
            };
            e.Messages = h;
        },
        "./src/vm.ts": function (t, e, n) {
            Object.defineProperty(e, "__esModule", {value: !0}),
                (e.createContext = function (t) {
                    return void 0 === t && (t = Object.create(null)), t;
                }),
                (e.compileFunction = function (t, e, n) {
                    void 0 === e && (e = []), void 0 === n && (n = {});
                    var o = n.parsingContext,
                        a = void 0 === n.timeout ? 0 : n.timeout,
                        r = "\n    (function anonymous(" + e.join(",") + "){\n         " + t + "\n    });\n    ";
                    return new i.Interpreter(o, {
                        ecmaVersion: n.ecmaVersion,
                        timeout: a,
                        rootContext: n.rootContext,
                        globalContextInFunction: n.globalContextInFunction
                    }).evaluate(r);
                }),
                (e.runInContext = o),
                (e.Script = e.runInNewContext = void 0);
            var i = n("./src/interpreter/main.ts");
            function o(t, e, n) {
                return new i.Interpreter(e, n).evaluate(t);
            }
            var a = o;
            e.runInNewContext = a;
            var r = (function () {
                function t(t) {
                    this._code = t;
                }
                var e = t.prototype;
                return (
                    (e.runInContext = function (t) {
                        return o(this._code, t);
                    }),
                    (e.runInNewContext = function (t) {
                        return o(this._code, t);
                    }),
                    t
                );
            })();
            e.Script = r;
        },
        0: function (t, e, n) {
            t.exports = n("./src/index.ts");
        }
    });
}),
    "object" == typeof n && "object" == typeof e
        ? (e.exports = i())
        : "function" == typeof define && define.amd
        ? define([], i)
        : "object" == typeof n
        ? (n.eval5 = i())
        : ((void 0).eval5 = i());
