(function(e, a) { for(var i in a) e[i] = a[i]; }(window, /******/ (function(modules) { // webpackBootstrap
/******/        // The module cache
/******/        var installedModules = {};
/******/
/******/        // The require function
/******/        function __webpack_require__(moduleId) {
/******/
/******/                // Check if module is in cache
/******/                if(installedModules[moduleId]) {
/******/                        return installedModules[moduleId].exports;
/******/                }
/******/                // Create a new module (and put it into the cache)
/******/                var module = installedModules[moduleId] = {
/******/                        i: moduleId,
/******/                        l: false,
/******/                        exports: {}
/******/                };
/******/
/******/                // Execute the module function
/******/                modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/                // Flag the module as loaded
/******/                module.l = true;
/******/
/******/                // Return the exports of the module
/******/                return module.exports;
/******/        }
/******/
/******/
/******/        // expose the modules object (__webpack_modules__)
/******/        __webpack_require__.m = modules;
/******/
/******/        // expose the module cache
/******/        __webpack_require__.c = installedModules;
/******/
/******/        // define getter function for harmony exports
/******/        __webpack_require__.d = function(exports, name, getter) {
/******/                if(!__webpack_require__.o(exports, name)) {
/******/                        Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/                }
/******/        };
/******/
/******/        // define __esModule on exports
/******/        __webpack_require__.r = function(exports) {
/******/                if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/                        Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/                }
/******/                Object.defineProperty(exports, '__esModule', { value: true });
/******/        };
/******/
/******/        // create a fake namespace object
/******/        // mode & 1: value is a module id, require it
/******/        // mode & 2: merge all properties of value into the ns
/******/        // mode & 4: return value when already ns object
/******/        // mode & 8|1: behave like require
/******/        __webpack_require__.t = function(value, mode) {
/******/                if(mode & 1) value = __webpack_require__(value);
/******/                if(mode & 8) return value;
/******/                if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/                var ns = Object.create(null);
/******/                __webpack_require__.r(ns);
/******/                Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/                if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/                return ns;
/******/        };
/******/
/******/        // getDefaultExport function for compatibility with non-harmony modules
/******/        __webpack_require__.n = function(module) {
/******/                var getter = module && module.__esModule ?
/******/                        function getDefault() { return module['default']; } :
/******/                        function getModuleExports() { return module; };
/******/                __webpack_require__.d(getter, 'a', getter);
/******/                return getter;
/******/        };
/******/
/******/        // Object.prototype.hasOwnProperty.call
/******/        __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/        // __webpack_public_path__
/******/        __webpack_require__.p = "/dist/";
/******/
/******/
/******/        // Load entry module and return exports
/******/        return __webpack_require__(__webpack_require__.s = 62);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);




function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var App =
/*#__PURE__*/
function () {
  function App() {
    var _this = this;

    _classCallCheck(this, App);

    console.log('hg.App constructor');
    this.asyncId = 100000;
    this.asyncCallbacks = {};
    this.listeners = {};

    if (window.yyrt) {
      this.code = this.sync("hg.code");
      this.openid = this.sync("hg.openid");
      this.gameId = this.sync("hg.gameId");
      this.uid = this.sync("hg.uid");
      this.host = this.sync("hg.apiHost");
      this.roomId = this.sync("hg.roomId") || "";
      this.gameUrl = this.sync("hg.gameUrl") || "";
      this.imageResizeParam = this.sync("hg.imageResizeParam") || "";
      this.userInfo = JSON.parse(this.sync("hg.getUserInfo"));
      this.userInfo.openid = this.openid;
      this.userInfo.avatarUrl = this.resizeImage(this.userInfo.avatarUrl);
      this.systemInfo = JSON.parse(this.sync("hg.getSystemInfoSync"));
      this.gameInviteInfo = this.sync("hg.gameInviteInfo") || "";
      console.log('hg.App code:' + this.code);
      console.log('hg.App hg.openid:' + this.openid);
      _api__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].setHost(this.host);
      console.log('hg.App apiHost:' + this.host);
      window.addEventListener('onReceiveMessageFromApp', function (event) {
        var appMsgObj = event.appMsgObj;
        var type = appMsgObj.type;
        var msgObj = appMsgObj.msgObj;
        var tag = appMsgObj.tag;
        console.log("hg onReceiveMessageFromApp: " + type + ", tag:" + tag + ",msgObj:" + JSON.stringify(msgObj));

        if (_this.asyncCallbacks[tag]) {
          if (msgObj.jsonData) {
            var jsonData = JSON.parse(msgObj.jsonData);

            _this.asyncCallbacks[tag].callback(jsonData, type);
          } else {
            _this.asyncCallbacks[tag].callback(msgObj, type);
          }

          if (_this.asyncCallbacks[tag] && !_this.asyncCallbacks[tag].keep) {
            delete _this.asyncCallbacks[tag];
          }
        }

        if (_this.listeners[type]) {
          var _jsonData = {};

          if (msgObj.jsonData) {
            _jsonData = JSON.parse(msgObj.jsonData);
          }

          _this.listeners[type](_jsonData, type);
        }
      });
    } else {
      this.imageResizeParam = "";
      console.log("hagosdk web environment ");
    }
  }

  _createClass(App, [{
    key: "getFriendUids",
    value: function getFriendUids(callback) {
      var _this2 = this;

      if (this.friendUids) {
        callback(this.friendUids);
      } else {
        this.async("hg.friendUids", null, function (res) {
          _this2.friendUids = JSON.parse(res.uids);
          console.log("hg.friendUids:" + JSON.stringify(_this2.friendUids));
          callback(_this2.friendUids);
        });
      }
    }
  }, {
    key: "listen",
    value: function listen(type, callback) {
      this.listeners[type] = callback;
    }
  }, {
    key: "cancelListen",
    value: function cancelListen(type) {
      delete this.listeners.type;
    }
  }, {
    key: "sync",
    value: function sync(type, data, tag) {
      var result = window.yyrt.sendMessageToAppSync(type, data, tag);
      console.log("hg yyrt.sendMessageToAppSync " + type + ",result:" + result);
      return result;
    }
  }, {
    key: "syncV1",
    value: function syncV1(type, data, tag) {
      data = {
        jsondata: JSON.stringify(data),
        version: 1
      };
      this.sync(type, data, tag);
    }
  }, {
    key: "async",
    value: function async(type, data, callback, keep) {
      this.asyncId++;

      if (callback) {
        var callbackWrap = {
          callback: callback,
          keep: keep
        };
        this.asyncCallbacks[this.asyncId] = callbackWrap;
      }

      console.log("hg yyrt.sendMessageToAppAsync " + type + ",tag:" + this.asyncId);

      if (window.yyrt) {
        window.yyrt.sendMessageToApp(type, data, this.asyncId);
      }

      return this.asyncId;
    }
  }, {
    key: "asyncV1",
    value: function asyncV1(type, data, callback, keep) {
      data = {
        jsondata: JSON.stringify(data),
        version: 1
      };
      this.async(type, data, callback, keep);
    }
  }, {
    key: "deleteCallbackById",
    value: function deleteCallbackById(tag) {
      delete this.asyncCallbacks[tag];
    }
  }, {
    key: "resizeImage",
    value: function resizeImage(url) {
      if (url && url.indexOf('?') == -1) {
        url = url + this.imageResizeParam;
        console.log("hagosdk resizeImage " + url);
      }

      return url;
    }
  }]);

  return App;
}();

function getQueryParams(qs) {
  qs = qs.split('+').join(' ');
  var params = {},
      tokens,
      re = /[?&]?([^=]+)=([^&]*)/g;

  while (tokens = re.exec(qs)) {
    params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
  }

  return params;
}

var app = new App();
/* harmony default export */ __webpack_exports__["a"] = (app);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(34)('wks');
var uid = __webpack_require__(17);
var Symbol = __webpack_require__(2).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./src/util/loadXMLDoc.js
function loadXMLDoc(url, callback) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        var json;

        try {
          json = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.error(err);
          callback(false, {
            errcode: -10,
            errmsg: "ClientJSONParseError"
          });
          return;
        }

        callback(true, json);
      } else {
        callback(false, {
          errcode: -10,
          errmsg: "HttpStatusCodeError " + xmlhttp.status
        });
      }
    }
  };

  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

/* harmony default export */ var util_loadXMLDoc = (loadXMLDoc);
// CONCATENATED MODULE: ./src/util/postXMLDoc.js
function postXMLDoc(url, params, callback) {
  var xmlhttp = new XMLHttpRequest();

  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4) {
      // XMLHttpRequest.DONE == 4
      if (xmlhttp.status == 200) {
        var json;

        try {
          json = JSON.parse(xmlhttp.responseText);
        } catch (err) {
          console.error(err);
          callback(false, {
            errcode: -10,
            errmsg: "ClientJSONParseError"
          });
          return;
        }

        callback(true, json);
      } else {
        callback(false, {
          errcode: -10,
          errmsg: "HttpStatusCodeError " + xmlhttp.status
        });
      }
    }
  };

  xmlhttp.open("POST", url, true);
  xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
  xmlhttp.send(JSON.stringify(params));
}

/* harmony default export */ var util_postXMLDoc = (postXMLDoc);
// CONCATENATED MODULE: ./src/api.js


var host = "https://access-api-test-id.ihago.net";

function getApi(path, data, callback) {
  var url = host + path;

  if (data) {
    url += '?' + encodeQueryData(data);
  }

  util_loadXMLDoc(url, callback);
}

function postApi(path, data, callback) {
  var url = host + path;
  util_postXMLDoc(url, data, callback);
}

function encodeQueryData(data) {
  var ret = [];

  for (var d in data) {
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  }

  return ret.join('&');
}

function setHost(aHost) {
  host = aHost;
}

/* harmony default export */ var api = __webpack_exports__["a"] = ({
  getApi: getApi,
  postApi: postApi,
  setHost: setHost
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(14);
var hide = __webpack_require__(10);
var redefine = __webpack_require__(12);
var ctx = __webpack_require__(15);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var IE8_DOM_DEFINE = __webpack_require__(46);
var toPrimitive = __webpack_require__(22);
var dP = Object.defineProperty;

exports.f = __webpack_require__(8) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var createDesc = __webpack_require__(23);
module.exports = __webpack_require__(8) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 11 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var hide = __webpack_require__(10);
var has = __webpack_require__(11);
var SRC = __webpack_require__(17)('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(14).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 13 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(24);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(31);
var defined = __webpack_require__(19);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 17 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(47);
var enumBugKeys = __webpack_require__(35);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(4);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(7).f;
var has = __webpack_require__(11);
var TAG = __webpack_require__(1)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(83);
var getKeys = __webpack_require__(18);
var redefine = __webpack_require__(12);
var global = __webpack_require__(2);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(21);
var wks = __webpack_require__(1);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function reportMetrics(object) {
  if (!object) {
    console.log("invalid object");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.reportMetrics", {
    uri: object.uri,
    time: object.time,
    returnCode: object.code
  }, function (result, type) {
    console.log("hg.reportMetrics" + result + type);
  });
}

/* harmony default export */ __webpack_exports__["a"] = ({
  reportMetrics: reportMetrics
});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var document = __webpack_require__(2).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(13);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(34)('keys');
var uid = __webpack_require__(17);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(14);
var global = __webpack_require__(2);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '漏 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 35 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(19);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(13);
var TAG = __webpack_require__(1)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(71);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(8), 'Object', { defineProperty: __webpack_require__(7).f });


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(2);
var has = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(8);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(12);
var META = __webpack_require__(79).KEY;
var $fails = __webpack_require__(9);
var shared = __webpack_require__(34);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(17);
var wks = __webpack_require__(1);
var wksExt = __webpack_require__(54);
var wksDefine = __webpack_require__(53);
var enumKeys = __webpack_require__(80);
var isArray = __webpack_require__(55);
var anObject = __webpack_require__(5);
var isObject = __webpack_require__(4);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(22);
var createDesc = __webpack_require__(23);
var _create = __webpack_require__(43);
var gOPNExt = __webpack_require__(82);
var $GOPD = __webpack_require__(45);
var $DP = __webpack_require__(7);
var $keys = __webpack_require__(18);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function';
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(10)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);
var dPs = __webpack_require__(81);
var enumBugKeys = __webpack_require__(35);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(30)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(56).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(47);
var hiddenKeys = __webpack_require__(35).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(26);
var createDesc = __webpack_require__(23);
var toIObject = __webpack_require__(16);
var toPrimitive = __webpack_require__(22);
var has = __webpack_require__(11);
var IE8_DOM_DEFINE = __webpack_require__(46);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(8) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(8) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(30)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(11);
var toIObject = __webpack_require__(16);
var arrayIndexOf = __webpack_require__(48)(false);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(16);
var toLength = __webpack_require__(25);
var toAbsoluteIndex = __webpack_require__(65);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(67);
var anObject = __webpack_require__(5);
var speciesConstructor = __webpack_require__(50);
var advanceStringIndex = __webpack_require__(68);
var toLength = __webpack_require__(25);
var callRegExpExec = __webpack_require__(70);
var regexpExec = __webpack_require__(39);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';

// eslint-disable-next-line no-empty
var SUPPORTS_Y = !!(function () { try { return new RegExp('x', 'y'); } catch (e) {} })();

// @@split logic
__webpack_require__(72)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? 4294967295 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                    (rx.multiline ? 'm' : '') +
                    (rx.unicode ? 'u' : '') +
                    (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? 0xffffffff : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);
var aFunction = __webpack_require__(24);
var SPECIES = __webpack_require__(1)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(6);
var $indexOf = __webpack_require__(48)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(52)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var fails = __webpack_require__(9);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var core = __webpack_require__(14);
var LIBRARY = __webpack_require__(20);
var wksExt = __webpack_require__(54);
var defineProperty = __webpack_require__(7).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);


/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(13);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(2).document;
module.exports = document && document.documentElement;


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSystemInfoSync", function() { return getSystemInfoSync; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
// 妫€鏌ョ櫥褰曟€佹槸鍚﹁繃鏈熴€�


function getSystemInfoSync(object) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo.SDKVersion = 3100;
  return _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo;
}



/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var invoke = __webpack_require__(96);
var html = __webpack_require__(56);
var cel = __webpack_require__(30);
var global = __webpack_require__(2);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(13)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(24);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(8) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*
 * [js-sha1]{@link https://github.com/emn178/js-sha1}
 *
 * @version 0.6.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */
/*jslint bitwise: true */
(function() {
  'use strict';

  var root = typeof window === 'object' ? window : {};
  var NODE_JS = !root.JS_SHA1_NO_NODE_JS && typeof process === 'object' && process.versions && process.versions.node;
  if (NODE_JS) {
    root = global;
  }
  var COMMON_JS = !root.JS_SHA1_NO_COMMON_JS && typeof module === 'object' && module.exports;
  var AMD =  true && __webpack_require__(115);
  var HEX_CHARS = '0123456789abcdef'.split('');
  var EXTRA = [-2147483648, 8388608, 32768, 128];
  var SHIFT = [24, 16, 8, 0];
  var OUTPUT_TYPES = ['hex', 'array', 'digest', 'arrayBuffer'];

  var blocks = [];

  var createOutputMethod = function (outputType) {
    return function (message) {
      return new Sha1(true).update(message)[outputType]();
    };
  };

  var createMethod = function () {
    var method = createOutputMethod('hex');
    if (NODE_JS) {
      method = nodeWrap(method);
    }
    method.create = function () {
      return new Sha1();
    };
    method.update = function (message) {
      return method.create().update(message);
    };
    for (var i = 0; i < OUTPUT_TYPES.length; ++i) {
      var type = OUTPUT_TYPES[i];
      method[type] = createOutputMethod(type);
    }
    return method;
  };

  var nodeWrap = function (method) {
    var crypto = eval("require('crypto')");
    var Buffer = eval("require('buffer').Buffer");
    var nodeMethod = function (message) {
      if (typeof message === 'string') {
        return crypto.createHash('sha1').update(message, 'utf8').digest('hex');
      } else if (message.constructor === ArrayBuffer) {
        message = new Uint8Array(message);
      } else if (message.length === undefined) {
        return method(message);
      }
      return crypto.createHash('sha1').update(new Buffer(message)).digest('hex');
    };
    return nodeMethod;
  };

  function Sha1(sharedMemory) {
    if (sharedMemory) {
      blocks[0] = blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      this.blocks = blocks;
    } else {
      this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    this.h0 = 0x67452301;
    this.h1 = 0xEFCDAB89;
    this.h2 = 0x98BADCFE;
    this.h3 = 0x10325476;
    this.h4 = 0xC3D2E1F0;

    this.block = this.start = this.bytes = this.hBytes = 0;
    this.finalized = this.hashed = false;
    this.first = true;
  }

  Sha1.prototype.update = function (message) {
    if (this.finalized) {
      return;
    }
    var notString = typeof(message) !== 'string';
    if (notString && message.constructor === root.ArrayBuffer) {
      message = new Uint8Array(message);
    }
    var code, index = 0, i, length = message.length || 0, blocks = this.blocks;

    while (index < length) {
      if (this.hashed) {
        this.hashed = false;
        blocks[0] = this.block;
        blocks[16] = blocks[1] = blocks[2] = blocks[3] =
        blocks[4] = blocks[5] = blocks[6] = blocks[7] =
        blocks[8] = blocks[9] = blocks[10] = blocks[11] =
        blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
      }

      if(notString) {
        for (i = this.start; index < length && i < 64; ++index) {
          blocks[i >> 2] |= message[index] << SHIFT[i++ & 3];
        }
      } else {
        for (i = this.start; index < length && i < 64; ++index) {
          code = message.charCodeAt(index);
          if (code < 0x80) {
            blocks[i >> 2] |= code << SHIFT[i++ & 3];
          } else if (code < 0x800) {
            blocks[i >> 2] |= (0xc0 | (code >> 6)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else if (code < 0xd800 || code >= 0xe000) {
            blocks[i >> 2] |= (0xe0 | (code >> 12)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          } else {
            code = 0x10000 + (((code & 0x3ff) << 10) | (message.charCodeAt(++index) & 0x3ff));
            blocks[i >> 2] |= (0xf0 | (code >> 18)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 12) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | ((code >> 6) & 0x3f)) << SHIFT[i++ & 3];
            blocks[i >> 2] |= (0x80 | (code & 0x3f)) << SHIFT[i++ & 3];
          }
        }
      }

      this.lastByteIndex = i;
      this.bytes += i - this.start;
      if (i >= 64) {
        this.block = blocks[16];
        this.start = i - 64;
        this.hash();
        this.hashed = true;
      } else {
        this.start = i;
      }
    }
    if (this.bytes > 4294967295) {
      this.hBytes += this.bytes / 4294967296 << 0;
      this.bytes = this.bytes % 4294967296;
    }
    return this;
  };

  Sha1.prototype.finalize = function () {
    if (this.finalized) {
      return;
    }
    this.finalized = true;
    var blocks = this.blocks, i = this.lastByteIndex;
    blocks[16] = this.block;
    blocks[i >> 2] |= EXTRA[i & 3];
    this.block = blocks[16];
    if (i >= 56) {
      if (!this.hashed) {
        this.hash();
      }
      blocks[0] = this.block;
      blocks[16] = blocks[1] = blocks[2] = blocks[3] =
      blocks[4] = blocks[5] = blocks[6] = blocks[7] =
      blocks[8] = blocks[9] = blocks[10] = blocks[11] =
      blocks[12] = blocks[13] = blocks[14] = blocks[15] = 0;
    }
    blocks[14] = this.hBytes << 3 | this.bytes >>> 29;
    blocks[15] = this.bytes << 3;
    this.hash();
  };

  Sha1.prototype.hash = function () {
    var a = this.h0, b = this.h1, c = this.h2, d = this.h3, e = this.h4;
    var f, j, t, blocks = this.blocks;

    for(j = 16; j < 80; ++j) {
      t = blocks[j - 3] ^ blocks[j - 8] ^ blocks[j - 14] ^ blocks[j - 16];
      blocks[j] =  (t << 1) | (t >>> 31);
    }

    for(j = 0; j < 20; j += 5) {
      f = (b & c) | ((~b) & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1518500249 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | ((~a) & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1518500249 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | ((~e) & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1518500249 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | ((~d) & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1518500249 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | ((~c) & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1518500249 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 40; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e + 1859775393 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d + 1859775393 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c + 1859775393 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b + 1859775393 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a + 1859775393 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 60; j += 5) {
      f = (b & c) | (b & d) | (c & d);
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 1894007588 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = (a & b) | (a & c) | (b & c);
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 1894007588 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = (e & a) | (e & b) | (a & b);
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 1894007588 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = (d & e) | (d & a) | (e & a);
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 1894007588 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = (c & d) | (c & e) | (d & e);
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 1894007588 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    for(; j < 80; j += 5) {
      f = b ^ c ^ d;
      t = (a << 5) | (a >>> 27);
      e = t + f + e - 899497514 + blocks[j] << 0;
      b = (b << 30) | (b >>> 2);

      f = a ^ b ^ c;
      t = (e << 5) | (e >>> 27);
      d = t + f + d - 899497514 + blocks[j + 1] << 0;
      a = (a << 30) | (a >>> 2);

      f = e ^ a ^ b;
      t = (d << 5) | (d >>> 27);
      c = t + f + c - 899497514 + blocks[j + 2] << 0;
      e = (e << 30) | (e >>> 2);

      f = d ^ e ^ a;
      t = (c << 5) | (c >>> 27);
      b = t + f + b - 899497514 + blocks[j + 3] << 0;
      d = (d << 30) | (d >>> 2);

      f = c ^ d ^ e;
      t = (b << 5) | (b >>> 27);
      a = t + f + a - 899497514 + blocks[j + 4] << 0;
      c = (c << 30) | (c >>> 2);
    }

    this.h0 = this.h0 + a << 0;
    this.h1 = this.h1 + b << 0;
    this.h2 = this.h2 + c << 0;
    this.h3 = this.h3 + d << 0;
    this.h4 = this.h4 + e << 0;
  };

  Sha1.prototype.hex = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return HEX_CHARS[(h0 >> 28) & 0x0F] + HEX_CHARS[(h0 >> 24) & 0x0F] +
           HEX_CHARS[(h0 >> 20) & 0x0F] + HEX_CHARS[(h0 >> 16) & 0x0F] +
           HEX_CHARS[(h0 >> 12) & 0x0F] + HEX_CHARS[(h0 >> 8) & 0x0F] +
           HEX_CHARS[(h0 >> 4) & 0x0F] + HEX_CHARS[h0 & 0x0F] +
           HEX_CHARS[(h1 >> 28) & 0x0F] + HEX_CHARS[(h1 >> 24) & 0x0F] +
           HEX_CHARS[(h1 >> 20) & 0x0F] + HEX_CHARS[(h1 >> 16) & 0x0F] +
           HEX_CHARS[(h1 >> 12) & 0x0F] + HEX_CHARS[(h1 >> 8) & 0x0F] +
           HEX_CHARS[(h1 >> 4) & 0x0F] + HEX_CHARS[h1 & 0x0F] +
           HEX_CHARS[(h2 >> 28) & 0x0F] + HEX_CHARS[(h2 >> 24) & 0x0F] +
           HEX_CHARS[(h2 >> 20) & 0x0F] + HEX_CHARS[(h2 >> 16) & 0x0F] +
           HEX_CHARS[(h2 >> 12) & 0x0F] + HEX_CHARS[(h2 >> 8) & 0x0F] +
           HEX_CHARS[(h2 >> 4) & 0x0F] + HEX_CHARS[h2 & 0x0F] +
           HEX_CHARS[(h3 >> 28) & 0x0F] + HEX_CHARS[(h3 >> 24) & 0x0F] +
           HEX_CHARS[(h3 >> 20) & 0x0F] + HEX_CHARS[(h3 >> 16) & 0x0F] +
           HEX_CHARS[(h3 >> 12) & 0x0F] + HEX_CHARS[(h3 >> 8) & 0x0F] +
           HEX_CHARS[(h3 >> 4) & 0x0F] + HEX_CHARS[h3 & 0x0F] +
           HEX_CHARS[(h4 >> 28) & 0x0F] + HEX_CHARS[(h4 >> 24) & 0x0F] +
           HEX_CHARS[(h4 >> 20) & 0x0F] + HEX_CHARS[(h4 >> 16) & 0x0F] +
           HEX_CHARS[(h4 >> 12) & 0x0F] + HEX_CHARS[(h4 >> 8) & 0x0F] +
           HEX_CHARS[(h4 >> 4) & 0x0F] + HEX_CHARS[h4 & 0x0F];
  };

  Sha1.prototype.toString = Sha1.prototype.hex;

  Sha1.prototype.digest = function () {
    this.finalize();

    var h0 = this.h0, h1 = this.h1, h2 = this.h2, h3 = this.h3, h4 = this.h4;

    return [
      (h0 >> 24) & 0xFF, (h0 >> 16) & 0xFF, (h0 >> 8) & 0xFF, h0 & 0xFF,
      (h1 >> 24) & 0xFF, (h1 >> 16) & 0xFF, (h1 >> 8) & 0xFF, h1 & 0xFF,
      (h2 >> 24) & 0xFF, (h2 >> 16) & 0xFF, (h2 >> 8) & 0xFF, h2 & 0xFF,
      (h3 >> 24) & 0xFF, (h3 >> 16) & 0xFF, (h3 >> 8) & 0xFF, h3 & 0xFF,
      (h4 >> 24) & 0xFF, (h4 >> 16) & 0xFF, (h4 >> 8) & 0xFF, h4 & 0xFF
    ];
  };

  Sha1.prototype.array = Sha1.prototype.digest;

  Sha1.prototype.arrayBuffer = function () {
    this.finalize();

    var buffer = new ArrayBuffer(20);
    var dataView = new DataView(buffer);
    dataView.setUint32(0, this.h0);
    dataView.setUint32(4, this.h1);
    dataView.setUint32(8, this.h2);
    dataView.setUint32(12, this.h3);
    dataView.setUint32(16, this.h4);
    return buffer;
  };

  var exports = createMethod();

  if (COMMON_JS) {
    module.exports = exports;
  } else {
    root.sha1 = exports;
    if (AMD) {
      !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
        return exports;
      }).call(exports, __webpack_require__, exports, module),
                                __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
  }
})();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(113), __webpack_require__(114)))

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hg", function() { return hgExport; });
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_0__);

var hgExport;

if (!window.hg) {
  var login = __webpack_require__(66);

  var kv = __webpack_require__(74);

  var lifeCycle = __webpack_require__(75);

  var requestPayment = __webpack_require__(76);

  var share = __webpack_require__(77);

  var userInfo = __webpack_require__(78);

  var systemInfo = __webpack_require__(57);

  var ad = __webpack_require__(89);

  var subModule = __webpack_require__(111);

  var rank = __webpack_require__(112);

  var ai = __webpack_require__(116);

  var webDebug = __webpack_require__(117);

  var channel = __webpack_require__(118);

  var matchup = __webpack_require__(119);

  var game = __webpack_require__(124);

  var friendInfo = __webpack_require__(125);

  var voiceRecord = __webpack_require__(126);

  console.log('hago jssdk init hg not defined, export new');

  if (window.yyrt) {
    hgExport = Object.assign({}, login, kv, requestPayment, share, lifeCycle, userInfo, systemInfo, ad, subModule, rank, ai, channel, matchup, game, friendInfo, voiceRecord);
  } else {
    hgExport = Object.assign({}, login, kv, requestPayment, share, lifeCycle, userInfo, systemInfo, ad, subModule, rank, ai, channel, matchup, webDebug);
  }
} else {
  console.log('hago jssdk init defined, export old');
  hgExport = window.hg;
}



/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(6);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(64) });


/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(26);
var toObject = __webpack_require__(37);
var IObject = __webpack_require__(31);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
// login


function login(object) {
  console.log("hg.login called");
  var code = _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].code;
  console.log("hg.login result " + code);
  object && object.success && object.success({
    code: code
  });
  object && object.complete && object.complete();
}



/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(4);
var cof = __webpack_require__(13);
var MATCH = __webpack_require__(1)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(69)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32);
var defined = __webpack_require__(19);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(38);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(5);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(73);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(10);
var fails = __webpack_require__(9);
var defined = __webpack_require__(19);
var wks = __webpack_require__(1);
var regexpExec = __webpack_require__(39);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(39);
__webpack_require__(6)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendCloudStorage", function() { return getFriendCloudStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserCloudStorage", function() { return getUserCloudStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeUserCloudStorage", function() { return removeUserCloudStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUserCloudStorage", function() { return setUserCloudStorage; });
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
// kv 瀛樺偍

 //鑾峰彇濂藉弸

function getFriendCloudStorage(object) {
  console.log("getFriendCloudStorage called");
  _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getFriendUids(function (friendUidList) {
    console.log("friendUidList", friendUidList);
    var data = {
      uids: friendUidList,
      keylist: object.keyList
    };
    var dataStr = JSON.stringify(data);
    console.log("getFriendCloudStorage dataStr", dataStr);
    _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getApi('/lianyun/kv/getFriendCloudStorage', {
      data: dataStr,
      js_code: _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].code
    }, function (success, res) {
      console.log('getFriendCloudStorage res ', success, res);

      if (success) {
        if (res.errcode == 0) {
          object.success(res.data);
        } else {
          object.fail(res);
        }
      } else {
        object.fail(res);
      }
    });
  });
} //鑾峰彇鐢ㄦ埛淇℃伅


function getUserCloudStorage(object) {
  console.log("getUserCloudStorage called");
  var keyListStr = JSON.stringify(object.keyList);
  console.log("getUserCloudStorage keyListStr", keyListStr);
  _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getApi('/lianyun/kv/getUserCloudStorage', {
    keylist: keyListStr,
    js_code: _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].code
  }, function (success, res) {
    console.log('hagosdk getUserCloudStorage ' + success + ',res:' + JSON.stringify(res));

    if (success) {
      if (res.errcode == 0) {
        object.success(res.data);
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
} //鍒犻櫎鐢ㄦ埛淇℃伅


function removeUserCloudStorage(object) {
  console.log("removeUserCloudStorage called");
  var keyListStr = JSON.stringify(object.keyList);
  console.log("removeUserCloudStorage keyListStr", keyListStr);
  _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getApi('/lianyun/kv/removeUserCloudStorage', {
    keylist: keyListStr,
    js_code: _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].code
  }, function (success, res) {
    console.log('removeUserCloudStorage res ', success, res);

    if (success) {
      if (res.errcode == 0) {
        object.success(res.data);
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
} //鏂板鐢ㄦ埛淇℃伅


function setUserCloudStorage(object) {
  console.log("setUserCloudStorage called");
  var keyDataStr = JSON.stringify(object.KVDataList);
  console.log("setUserCloudStorage keyDadaStr", keyDataStr);
  _api__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].getApi('/lianyun/kv/setUserCloudStorage', {
    kvdata: keyDataStr,
    js_code: _app__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].code
  }, function (success, res) {
    console.log('setUserCloudStorage res ', success, res);

    if (success) {
      if (res.errcode == 0) {
        object.success(res.data);
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
}



/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitMiniProgram", function() { return exitMiniProgram; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCloseView", function() { return updateCloseView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "gameLoadResult", function() { return gameLoadResult; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
// 妫€鏌ョ櫥褰曟€佹槸鍚﹁繃鏈熴€�


function exitMiniProgram(object) {
  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
    alert("call exitMiniProgram success!");
  } else {
    if (!object) {
      object = {
        exitConfirm: true
      };
    }

    if (!object.exitConfirm) {
      object.exitConfirm = false;
    }

    _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.exitMiniProgram", {
      confirm: object.exitConfirm
    });
    console.log("confirm " + object.exitConfirm);
  }
}

function updateCloseView(object) {
  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
    alert("call updateCloseView success!");
  } else {
    _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].async("hg.updateCloseView", object);
  }
}

function gameLoadResult(object) {
  if (!object) {
    object = {};
  }

  console.log("call hg.gameLoadResult " + object.code);

  if (!object.code) {
    object.code = 0;
  }

  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
    console.log("call gameLoadResult success!");
  } else {
    _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].async("hg.gameLoad", object);
  }

  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameUrl) {
    if (object.code === 0) {
      _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.onGameStageChange", {
        stage: 3 //pkload finish

      });
    } else {
      _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.onGameStageChange", {
        stage: 4,
        message: object.message
      });
    }
  }
}



/***/ }),
/* 76 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestPayment", function() { return requestPayment; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _metrics__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
// 铏氭嫙鏀粯



function requestPayment(object) {
  console.log("hg.requestPayment " + JSON.stringify(object));

  if (!object.subject) {
    console.log("ERROR requestPayment() param must have subject");
  }

  if (!object.item_id) {
    object.fail && object.fail({
      errCode: 102,
      errMsg: "ERROR requestPayment() param must have item_id"
    });
    object.complete && object.complete();
  } else if (!object.transaction_id) {
    object.fail && object.fail({
      errCode: 102,
      errMsg: "ERROR requestPayment() param must have transaction_id"
    });
    object.complete && object.complete();
  } else {
    if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
      payWeb(object);
    } else {
      payApp(object);
    }
  }
}

function payWeb(object) {
  var result = confirm("OK ===> user pay success\n Cancel ==> user pay error");

  if (!result) {
    object.fail && object.fail({
      errCode: 3,
      errMsg: "user cancel"
    });
    object.complete && object.complete();
    return;
  }

  var xhr = new XMLHttpRequest();
  xhr.open("POST", "https://i-test-863.ihago.net/ymicro/api?token=12345", true);
  xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
  xhr.setRequestHeader("X-Ymicro-Api-Service-Name", "net.ihago.money.api.pay");
  xhr.setRequestHeader("X-Ymicro-Api-Method-Name", "Pay.FakeReChargeMsg"); // send the collected data as JSON

  var gameId = _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId;

  if (!gameId) {
    object.fail && object.fail({
      errCode: -1,
      errMsg: "no gameId"
    });
    object.complete && object.complete();
    return;
  }

  var data = {
    "uid": _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].uid,
    "createTime": +Math.round(new Date().getTime() / 1000),
    "finishTime": +Math.round(new Date().getTime() / 1000),
    "amount": 1,
    "transactionHago": "kwb_test_fake_hagoid_" + Math.round(new Date().getTime() / 1000),
    "status": 1,
    "chargeConfigID": object.item_id,
    "expand": "{\"quantity\":\"1\",\"unitPrice\":1,\"product_id\":\"hago_58diam_1.99\",\"hdid\":\"ef7b9350c93fc289b350a28458ac6b7f\",\"srcCurrencySymbol\":\"$\",\"gameId\":\"" + gameId + "\",\"itemId\":" + object.item_id + ",\"companyId\":\"" + gameId + "\",\"openId\":\"" + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].openid + "\",\"chargeEntry\":9,\"companyOrderId\":\"" + object.transaction_id + "\",\"goodsName\":\"" + object.subject + "\",\"countryCode\":\"" + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].countryCode + "\",\"clientVersion\":\"2.9.0\",\"isSandBoxOrder\":true}"
  };
  console.log("hagosdk fake pay params " + JSON.stringify(data));
  xhr.send(JSON.stringify(data));

  xhr.onloadend = function () {
    console.log("hagosdk fake pay response " + xhr.response);
    var result = JSON.parse(xhr.response);

    if (result.code === 0) {
      object.success && object.success({
        errCode: 1,
        errMsg: "success"
      });
    } else {
      object.fail && object.fail({
        errCode: result.code,
        errMsg: result.message
      });
    }

    object.complete && object.complete();
  };
}

function payApp(object) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].async('hg.requestPayment', {
    item_id: object.item_id,
    transaction_id: object.transaction_id,
    subject: object.subject,
    openid: _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].openid
  }, function (result) {
    if (result.errCode == 0) {
      object.success && object.success({
        errCode: result.errCode,
        errMsg: result.errMsg
      });
      object.complete && object.complete();
    } else {
      object.fail && object.fail({
        errCode: result.errCode,
        errMsg: result.errMsg
      });
      object.complete && object.complete();
    }

    _metrics__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportMetrics({
      uri: "request_payment/" + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId,
      time: 0,
      code: result.errCode
    });
  });
}



/***/ }),
/* 77 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hideShareMenu", function() { return hideShareMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showShareMenu", function() { return showShareMenu; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
// 鍒嗕韩


function showShareMenu(object) {
  if (!object) {
    object = {};
  }

  if (!object.title) {
    console.error("showShareMenu object.title is required");
    return;
  }

  if (!object.content) {
    console.error("showShareMenu object.content is required");
    return;
  }

  if (!object.imageUrl) {
    console.error("showShareMenu object.imageUrl is required");
    return;
  }

  if (!object.goToUrl) {
    console.error("showShareMenu object.goToUrl is required");
    return;
  }

  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
    console.log("hagosdk showShareMenu success");
    object.success && object.success({
      success: "success"
    });
    object.complete && object.complete();
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].async('hg.showShareMenu', {
    title: object.title,
    content: object.content,
    imageUrl: object.imageUrl,
    goToUrl: object.goToUrl
  }, function (result) {
    if (result.errCode == 0) {
      object.success && object.success({
        success: "success"
      });
    } else {
      object.fail && object.fail({
        errCode: result.errCode,
        errMsg: result.errMsg
      });
    }
  });
  object.complete && object.complete();
}

function hideShareMenu(object) {
  if (_app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug) {
    console.log("hagosdk hideShareMenu success");
    object.success && object.success({
      success: "success"
    });
    object.complete && object.complete();
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].async('hg.hideShareMenu', {}, function (result) {
    if (result.errCode == 0) {
      object.success && object.success({
        success: "success"
      });
    } else {
      object.fail && object.fail();
    }
  });
  object.complete && object.complete();
}



/***/ }),
/* 78 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfo", function() { return getUserInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserInfoByUids", function() { return getUserInfoByUids; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUid", function() { return getUid; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showUserCard", function() { return showUserCard; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(0);



// 妫€鏌ョ櫥褰曟€佹槸鍚﹁繃鏈熴€�


function getUserInfo(object) {
  object && object.success && object.success({
    userInfo: _app__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].userInfo
  });
}

function getUserInfoByUids(object) {
  if (!object || !object.uids) {
    console.error("getUserInfoByUids uids is empty");
    object && object.fail && object.fail({
      errCode: -1,
      errMsg: "getUserInfoByUids uids is empty"
    });
    return;
  }

  if (_app__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].webDebug) {
    doGetUserInfoByUidsWeb(object);
  } else {
    doGetUserInfoByUids(object);
  }
}

function doGetUserInfoByUids(object) {
  _app__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].async('hg.getUserInfoByUids', {
    uids: JSON.stringify(object.uids)
  }, function (data) {
    if (data.errCode === 0) {
      console.log("getUserInfoByUids success :" + data.users);
      object.success && object.success(JSON.parse(data.users));
    } else {
      object.fail && object.fail({
        errCode: data.errCode,
        errMsg: data.errMsg
      });
    }
  });
}

function getUid() {
  return _app__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].uid;
}

function doGetUserInfoByUidsWeb(object) {
  var users = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = object.uids[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var uid = _step.value;
      users.push({
        "city": "Guangzhou",
        "sex": 1,
        uid: uid,
        "birthday": "1980-01-01",
        "zodiac": 0,
        //鏄熷骇搴忓彿锛�0~11锛屾寜鏈堜唤鎺掑簭锛岀1涓负鎽╃警
        "avatar": "https:\/\/o-id.ihago.net\/user_album\/101001211_1532329700765.png",
        "nick": "xxxxx",
        "locationTude": "xxxx" // 鏍煎紡"缁忓害_绾害"鐨勫瓧绗︿覆

      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  object.success && object.success(users);
}

function showUserCard(object) {
  if (!object || !object.uid) {
    console.error("showUserCard uid is empty");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].async('hg.showUserCard', {
    uid: object.uid
  });
}



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(17)('meta');
var isObject = __webpack_require__(4);
var has = __webpack_require__(11);
var setDesc = __webpack_require__(7).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(18);
var gOPS = __webpack_require__(36);
var pIE = __webpack_require__(26);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(7);
var anObject = __webpack_require__(5);
var getKeys = __webpack_require__(18);

module.exports = __webpack_require__(8) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(16);
var gOPN = __webpack_require__(44).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(84);
var step = __webpack_require__(85);
var Iterators = __webpack_require__(21);
var toIObject = __webpack_require__(16);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(86)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(1)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(10)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var $export = __webpack_require__(6);
var redefine = __webpack_require__(12);
var hide = __webpack_require__(10);
var Iterators = __webpack_require__(21);
var $iterCreate = __webpack_require__(87);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(88);
var ITERATOR = __webpack_require__(1)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(43);
var descriptor = __webpack_require__(23);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(10)(IteratorPrototype, __webpack_require__(1)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(11);
var toObject = __webpack_require__(37);
var IE_PROTO = __webpack_require__(33)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 89 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createRewardedVideoAd", function() { return createRewardedVideoAd; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRewardedVideoAd", function() { return loadRewardedVideoAd; });
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(90);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(104);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(109);
/* harmony import */ var core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_integer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);
/* harmony import */ var _systemInfo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(57);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 妫€鏌ョ櫥褰曟€佹槸鍚﹁繃鏈熴€�



var RewardedVideoAd =
/*#__PURE__*/
function () {
  function RewardedVideoAd(object) {
    _classCallCheck(this, RewardedVideoAd);

    if (!object.adUnitId) {
      console.error("RewardedVideoAd no adUnitId!");
    }

    if (!Number.isInteger(object.adUnitId)) {
      console.error("RewardedVideoAd adUnitId must be int type!");
    }

    this.adUnitId = object.adUnitId || 0;

    if (_app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].systemInfo.env === 'Test') {
      console.log('test env use adUnitId 9999');
      this.adUnitId = 9999;
    }
  }

  _createClass(RewardedVideoAd, [{
    key: "show",
    value: function show() {
      var _this = this;

      var promise = new Promise(function (resolve, reject) {
        if (_app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].webDebug) {
          _this.doShowWeb(resolve, reject);
        } else {
          _this.doShow(resolve, reject);
        }
      });
      return promise;
    }
  }, {
    key: "doShowWeb",
    value: function doShowWeb(resolve, reject) {
      var r = confirm("OK ===> user view success\n Cancel ==> ad load error");

      if (r == true) {
        resolve();
        this.onLoad && this.onLoad();
        this.onClose && this.onClose({
          isEnded: true
        });
      } else {
        this.onError && this.onError();
        reject(result);
      }
    }
  }, {
    key: "doShow",
    value: function doShow(resolve, reject) {
      var _this2 = this;

      this.tag = _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].async('hg.rewardedVideoAd.show', {
        adUnitId: this.adUnitId
      }, function (result, type) {
        if (type == 'hg.rewardedVideoAd.show') {
          if (result.errCode == 0) {
            _this2.onLoad && _this2.onLoad();
            resolve();
          } else if (result.errCode == 1) {
            _this2.doShow(resolve, reject);
          } else {
            _this2.onError && _this2.onError();
            reject(result);
          }
        } else if (type == 'hg.rewardedVideoAd.close') {
          _this2.onClose && _this2.onClose({
            isEnded: result.errCode == 0
          });
          _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].deleteCallbackById(_this2.tag);
        }
      }, true);
    }
  }]);

  return RewardedVideoAd;
}();

function loadRewardedVideoAd(params) {
  console.log("loadRewardedVideoAd " + JSON.stringify(params));
  _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].async('hg.rewardedVideoAd.show', {
    adUnitId: params.adUnitId,
    cache: true
  }, function (result, type) {
    if (type == 'hg.rewardedVideoAd.show') {
      if (result.errCode == 1 || result.errCode == 0) {
        console.log('hg.rewardedVideoAd cache success');
      } else {
        console.log('hg.rewardedVideoAd error repeat in 5 seconds:' + result.errCode + ",msg:" + result.errMsg);
        setTimeout(function () {
          loadRewardedVideoAd(params);
        }, 5000);
      }
    }
  });
}

function createRewardedVideoAd(object) {
  return new RewardedVideoAd(object);
}



/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(20);
var global = __webpack_require__(2);
var ctx = __webpack_require__(15);
var classof = __webpack_require__(38);
var $export = __webpack_require__(6);
var isObject = __webpack_require__(4);
var aFunction = __webpack_require__(24);
var anInstance = __webpack_require__(91);
var forOf = __webpack_require__(92);
var speciesConstructor = __webpack_require__(50);
var task = __webpack_require__(58).set;
var microtask = __webpack_require__(97)();
var newPromiseCapabilityModule = __webpack_require__(59);
var perform = __webpack_require__(98);
var userAgent = __webpack_require__(99);
var promiseResolve = __webpack_require__(100);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(101)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(102)(PROMISE);
Wrapper = __webpack_require__(14)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(103)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);
var call = __webpack_require__(93);
var isArrayIter = __webpack_require__(94);
var anObject = __webpack_require__(5);
var toLength = __webpack_require__(25);
var getIterFn = __webpack_require__(95);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(21);
var ITERATOR = __webpack_require__(1)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(38);
var ITERATOR = __webpack_require__(1)('iterator');
var Iterators = __webpack_require__(21);
module.exports = __webpack_require__(14).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 96 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var macrotask = __webpack_require__(58).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(13)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);
var isObject = __webpack_require__(4);
var newPromiseCapability = __webpack_require__(59);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(12);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var dP = __webpack_require__(7);
var DESCRIPTORS = __webpack_require__(8);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(1)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(2);
var has = __webpack_require__(11);
var cof = __webpack_require__(13);
var inheritIfRequired = __webpack_require__(105);
var toPrimitive = __webpack_require__(22);
var fails = __webpack_require__(9);
var gOPN = __webpack_require__(44).f;
var gOPD = __webpack_require__(45).f;
var dP = __webpack_require__(7).f;
var $trim = __webpack_require__(107).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(43)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(8) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(12)(global, NUMBER, $Number);
}


/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var setPrototypeOf = __webpack_require__(106).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(4);
var anObject = __webpack_require__(5);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(15)(Function.call, __webpack_require__(45).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(6);
var defined = __webpack_require__(19);
var fails = __webpack_require__(9);
var spaces = __webpack_require__(108);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(6);

$export($export.S, 'Number', { isInteger: __webpack_require__(110) });


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(4);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 111 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSubModuleUrlSync", function() { return getSubModuleUrlSync; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _metrics_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
// 鍒嗕韩



function getSubModuleUrlSync(object) {
  var url = _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].sync('hg.getSubModule', {
    id: object.id
  });
  console.log("getSubModuleUrlSync " + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId + " " + url);
  console.log("submodule gameId" + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId);
  var code = 0;

  if (!url) {
    code = -1;
  }

  _metrics_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].reportMetrics({
    uri: "submodule_url/" + _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId,
    time: 0,
    code: code
  });
  return {
    url: url
  };
}



/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setRank", function() { return setRank; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRank", function() { return getRank; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(0);
/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(61);
/* harmony import */ var js_sha1__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_sha1__WEBPACK_IMPORTED_MODULE_3__);

// kv 瀛樺偍


 //鑾峰彇濂藉弸

function setRank(object) {
  var timeUnix = new Date().getTime();
  var payload = JSON.stringify({
    tagId: object.name ? object.name : "default",
    rankMode: [object.type ? object.type : 0],
    isBigger: object.bigFirst ? true : false,
    isReplace: false,
    score: object.score,
    timeUnix: timeUnix
  });
  var data = {
    payload: payload,
    sign: js_sha1__WEBPACK_IMPORTED_MODULE_3___default()(timeUnix + payload)
  };
  var dataStr = JSON.stringify(data);
  console.log("reportRank dataStr", dataStr);
  _api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].postApi('/lianyun/rank/report?js_code=' + _app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].code, data, function (success, res) {
    console.log('reportRank res ', success, res);

    if (success) {
      if (res.errcode == 0) {
        object.success();
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
} //鑾峰彇鐢ㄦ埛淇℃伅


function getRank(object) {
  var timeUnix = new Date().getTime();
  var payload = {
    tagId: object.name ? object.name : "default",
    rankMode: object.type ? object.type : 0,
    daysDesc: 0,
    page: object.page ? object.page : 1,
    size: object.size ? object.size : 20
  };
  var data = {
    payload: payload
  };
  var dataStr = JSON.stringify(data);
  console.log("reportRank dataStr", dataStr);
  _api__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].postApi('/lianyun/rank/global?js_code=' + _app__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"].code, payload, function (success, res) {
    console.log('reportRank res ', success, res);

    if (success) {
      if (res.errcode == 0) {
        object.success(res.data);
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
}



/***/ }),
/* 113 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 114 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
        return this;
})();

try {
        // This works if eval is allowed (see CSP)
        g = g || new Function("return this")();
} catch (e) {
        // This works if the window reference is available
        if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 115 */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAIUser", function() { return getAIUser; });
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);



// AI 鑾峰彇

 //鑾峰彇AI 鐢ㄦ埛

function getAIUser(object) {
  console.log("getAIUser called");

  if (!object) {
    object = {};
  }

  if (!object.num) {
    object.num = 1;
  }

  console.log("getAIUser num", object.num);
  _api__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"].getApi('/AI/get', {
    data: JSON.stringify(object),
    js_code: _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].code
  }, function (success, res) {
    console.log('getAIUser res ', success, res);

    if (success) {
      if (res.errcode == 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = res.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var ai = _step.value;
            ai.avataUrl = _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].resizeImage(ai.avataUrl);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        object.success(res.data);
      } else {
        object.fail(res);
      }
    } else {
      object.fail(res);
    }
  });
}



/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initWebDebug", function() { return initWebDebug; });
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);



function initWebDebug(object) {
  if (window.yyrt) {
    console.error("jssdk in hago app can't initWebDebug");
    return;
  }

  console.log("jssdk initWebDebug");
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].webDebug = true;

  if (!object || !object.gameId) {
    object.fail({
      msg: "invalid object"
    });
    return;
  }

  if (!object.success) {
    object.success = function () {
      console.log("jssdk Init success");
    };
  }

  if (!object.fail) {
    object.fail = function () {
      console.log("jssdk Init fail");
    };
  }

  var userInfos = [undefined, {
    "systemInfo": {
      "brand": "samsung",
      "countryCode": "ID",
      "env": "Test",
      "language": "id",
      "model": "SM-G935V",
      "pixelRatio": 480,
      "screenHeight": 1920,
      "screenWidth": 1080,
      "statusBarHeight": 72,
      "windowHeight": 1920,
      "windowWidth": 1080
    },
    "uid": 101001267,
    "friendUids": [101339111, 101339112],
    "tokenData": {
      "adUnitIds": [],
      "code": "9aS1u8bGy1PWyA0yz44NdUOdjLiCEAcAO4VOlUZH1pt7rAFqZTwqm76z0J295JU1piJspleybeKHcetvQ8QdSA==",
      "moduleMap": {},
      "openid": "9WW0Oa0XGRAVXCOwygylq8X5pls6qHj3"
    },
    "userInfo": {
      "avatarUrl": "https://kaixindou.kaixindou.net/user_avatar/101336588_1527510296077.jpg",
      "city": "",
      "country": "",
      "gender": 1,
      "language": "id",
      "nickName": "haha",
      "province": ""
    }
  }, {
    "systemInfo": {
      "brand": "samsung",
      "countryCode": "ID",
      "env": "Test",
      "language": "id",
      "model": "SM-G935V",
      "pixelRatio": 480,
      "screenHeight": 1920,
      "screenWidth": 1080,
      "statusBarHeight": 72,
      "windowHeight": 1920,
      "windowWidth": 1080
    },
    "uid": 101339111,
    "friendUids": [101001267, 101339112],
    "tokenData": {
      "adUnitIds": [],
      "code": "dx3I4X1TFsEb7umJgrncAulMGhaztm3RKw_D3cqzPXAMSDy4Qpn532YKV1ZP3JyqCFFJ8n37i9cBDJst4A-5QKFXDh2YOR3En-knKypqvoo=",
      "moduleMap": {},
      "openid": "PLRmzT3TuEM+rL3s6zx0tfkDr52YccLTR0JGAx9DQ6N1rIQL86OGtw=="
    },
    "userInfo": {
      "avatarUrl": "https://o-hk.ihago.net/ikxd/54366b6b08536a0c5ba4d340fbddf1e2/guest_4.png",
      "city": "",
      "country": "",
      "gender": 1,
      "language": "id",
      "nickName": "axdq9183",
      "province": ""
    }
  }, {
    "systemInfo": {
      "brand": "samsung",
      "countryCode": "ID",
      "env": "Test",
      "language": "id",
      "model": "SM-G935V",
      "pixelRatio": 480,
      "screenHeight": 1920,
      "screenWidth": 1080,
      "statusBarHeight": 72,
      "windowHeight": 1920,
      "windowWidth": 1080
    },
    "uid": 101339112,
    "friendUids": [101001267, 101339111],
    "tokenData": {
      "adUnitIds": [],
      "code": "N0Mgc2l-xF2KtX19g8o7u6tWZaFQJ99k4h9rS5QJpsRVWUljAa-A3Toh8WK9FNPjNev1zC9uaJtip-gSvagb8qPJSR49MVaPdrk08nRNNW8=",
      "moduleMap": {},
      "openid": "PLRmzT3TuEOgpBXXtSrv/SPj2Dy2mt7Otwt9HGeWFcOkZYJcfxUekA=="
    },
    "userInfo": {
      "avatarUrl": "https://o-hk.ihago.net/ikxd/3db395b39f961b398ec23fc1e868673f/guest_2.png",
      "city": "",
      "country": "",
      "gender": 1,
      "language": "id",
      "nickName": "noms2967",
      "province": ""
    }
  }];

  if (typeof userInfos[object.user] === 'undefined') {
    console.log("jssdk mock user use default 1");
    object.user = 1;
  }

  var result = userInfos[object.user];
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].friendUids = result.friendUids;
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].uid = result.uid;
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo = result.systemInfo;
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userInfo = result.userInfo;
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].userInfo.openid = result.tokenData.openid;
  _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameId = object.gameId;

  if (object.env) {
    _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo.env = object.env;
  }

  if (object.countryCode) {
    _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo.countryCode = object.countryCode;
  }

  if (object.language) {
    _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].systemInfo.language = object.language;
  }

  console.log("user info", result);
  _api_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"].getApi("/jssdk/hagoToken2code", {
    "token": result.uid,
    "gameid": object.gameId
  }, function (success, res) {
    console.log('hagosdk get hagoToken2Code res ', success, res);

    if (success) {
      _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].code = res.code;
      _app_js__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].openid = res.openid;

      if (res.errcode == 0) {
        object.success({
          msg: "success"
        });
      } else {
        object.fail({
          msg: res.msg
        });
      }
    } else {
      object.fail(res);
    }
  }); // const urlArray = [
  //   undefined,
  //   "https://o-id.ihago.net/ikxd/04e685ab5ab67ccedaa1af96ef5dd068/user1.json",
  //   "https://o-id.ihago.net/ikxd/ca155512f2f3cff89158c2c7a167e969/user2.json",
  //   "https://o-id.ihago.net/ikxd/7f9ca345e2865fb429b3c6cdffa435f5/user3.json"
  // ];
  // const Http = new XMLHttpRequest();
  // if (typeof urlArray[object.user] === 'undefined') {
  //   console.log("jssdk mock user use default 1");
  //   object.user = 1
  // }
  // const url = urlArray[object.user];
  // Http.open("GET", url);
  // Http.send();
  // Http.onloadend = function() {
  //   if (Http.status != 200) {
  //     object.fail({
  //       msg: "jssdk get mock userinfo error http status: " + Http.status
  //     })
  //     console.error("jssdk get mock userinfo error")
  //     return
  //   }
  //   const result = JSON.parse(Http.response);
  //   app.friendUids = result.friendUids;
  //   app.uid = result.uid
  //   app.systemInfo = result.systemInfo;
  //   app.userInfo = result.userInfo;
  //   app.userInfo.openid = result.tokenData.openid
  //   app.gameId = object.gameId;
  //   if (object.env) {
  //     app.systemInfo.env = object.env
  //   }
  //   if (object.countryCode) {
  //     app.systemInfo.countryCode = object.countryCode
  //   }
  //   if (object.language) {
  //     app.systemInfo.language = object.language
  //   }
  //   api.getApi("/jssdk/hagoToken2code", {
  //     "token": result.uid,
  //     "gameid": object.gameId
  //   }, (success, res) => {
  //     console.log('hagosdk get hagoToken2Code res ', success, res);
  //     if (success) {
  //       app.code = res.code;
  //       app.openid = res.openid;
  //       if (res.errcode == 0) {
  //         object.success({
  //           msg: "success"
  //         })
  //       } else {
  //         object.fail({
  //           msg: res.msg
  //         })
  //       }
  //     } else {
  //       object.fail(res)
  //     }
  //   });
  // };

  console.log("jssdk initWebDebug gameId", object.gameId);
}



/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createVoiceChannel", function() { return createVoiceChannel; });
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(40);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(41);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(0);





function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

// 妫€鏌ョ櫥褰曟€佹槸鍚﹁繃鏈熴€�


var Channel =
/*#__PURE__*/
function () {
  function Channel(object) {
    var _this = this;

    _classCallCheck(this, Channel);

    if (!object.channelId) {
      console.error("Channel no channelId");
    }

    this.channelId = object.channelId;
    _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].listen("hg.channel.micState.callback", function (msgObj, type) {
      var userStates = msgObj;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = userStates[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var userState = _step.value;
          _this.micStateCallback && _this.micStateCallback(userState.uid, userState.state);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
    _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].listen("hg.channel.speakState.callback", function (msgObj, type) {
      var userStates = msgObj;
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = userStates[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var userState = _step2.value;
          _this.speakStateCallback && _this.speakStateCallback(userState.uid, userState.state);
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    });
  }

  _createClass(Channel, [{
    key: "join",
    value: function join() {
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].async("hg.channel.join", {
        channelId: this.channelId
      }, function (result, type) {
        console.log("hg.channel.join" + result + type);
      });
    }
  }, {
    key: "exit",
    value: function exit() {
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].async("hg.channel.exit", {
        channelId: this.channelId
      }, function (result, type) {
        console.log("hg.channel.exit" + result + type);
      });
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].cancelListen("hg.channel.micState.callback");
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].cancelListen("hg.channel.speakState.callback");
    }
  }, {
    key: "operateMic",
    value: function operateMic(operate, callback) {
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].async("hg.channel.operateMic", {
        channelId: this.channelId,
        operateMic: operate
      }, function (result, type) {
        callback && callback(result.code, result.operateMic);
      });
    }
  }, {
    key: "setMicStateCallback",
    value: function setMicStateCallback(callback) {
      this.micStateCallback = callback;
      _app__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"].asyncV1("hg.queryMicState", {}, function (result, type) {});
    }
  }, {
    key: "setSpeakStateCallback",
    value: function setSpeakStateCallback(callback) {
      this.speakStateCallback = callback;
    }
  }]);

  return Channel;
}();

function createVoiceChannel(object) {
  return new Channel(object);
}



/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchupInfo", function() { return getMatchupInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMatchupUrl", function() { return getMatchupUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkStart", function() { return pkStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkFinish", function() { return pkFinish; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkFinishError", function() { return pkFinishError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listenPkExit", function() { return listenPkExit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "exitPkGame", function() { return exitPkGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pkResult", function() { return pkResult; });
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(28);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(120);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(0);







function getMatchupInfo() {
  if (_app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].gameUrl) {
    var _params = getJsonFromUrl(_app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].gameUrl);

    var postData = _params["post_data"];
    console.info("hg.getMatchupInfo " + postData);
    return JSON.parse(postData);
  } else {
    return {};
  }
}

function getJsonFromUrl(url) {
  if (!url) url = location.href;
  var question = url.indexOf("?");
  var hash = url.indexOf("#");
  if (hash == -1 && question == -1) return {};
  if (hash == -1) hash = url.length;
  var query = question == -1 || hash == question + 1 ? url.substring(hash) : url.substring(question + 1, hash);
  var result = {};
  query.split("&").forEach(function (part) {
    if (!part) return;
    part = part.split("+").join(" "); // replace every + with space, regexp-free version

    var eq = part.indexOf("=");
    var key = eq > -1 ? part.substr(0, eq) : part;
    var val = eq > -1 ? decodeURIComponent(part.substr(eq + 1)) : "";
    var from = key.indexOf("[");
    if (from == -1) result[decodeURIComponent(key)] = val;else {
      var to = key.indexOf("]", from);
      var index = decodeURIComponent(key.substring(from + 1, to));
      key = decodeURIComponent(key.substring(0, from));
      if (!result[key]) result[key] = [];
      if (!index) result[key].push(val);else result[key][index] = val;
    }
  });
  return result;
}

var params;

function getwssUrl(url) {
  params = getJsonFromUrl(url);
  var wsscheme = getQueryParam("wsscheme") || 'wss';
  var wsdomain = getQueryParam("websocketdomain");
  var port = getQueryParam("port");
  var sign = getQueryParam("sign");
  var nonstr = getQueryParam("nonstr");
  var timestamp = getQueryParam("timestamp");
  var post_data = getQueryParam("post_data");
  var tpl = getQueryParam("tpl");
  var ver = getQueryParam("ver");
  var obj = JSON.parse(decodeURIComponent(post_data));
  var gameid = obj.gameid;
  var roomid = obj.roomid;
  var ws_url = wsscheme + "://" + wsdomain + ":" + port + "/" + gameid + "/" + roomid + "/" + "?post_data=" + encodeURIComponent(post_data) + "&timestamp=" + timestamp + "&nonstr=" + encodeURIComponent(nonstr) + "&sign=" + sign;
  console.log("hagosdk wssUrl " + ws_url);
  return ws_url;
}

function getQueryParam(name) {
  return params[name];
}

function listenPkExit(callback) {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].listen("hg.pkExit.notify", callback);
}

function exitPkGame() {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].asyncV1("hg.pkExit");
}

function getMatchupUrl() {
  return getwssUrl(_app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].gameUrl);
}

function pkStart() {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].asyncV1("hg.onGameStageChange", {
    stage: 6
  });
}

function pkResult(result) {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].asyncV1("hg.pkResult", {
    result: JSON.stringify(result)
  });
}

function pkFinish(result) {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].asyncV1("hg.onGameStageChange", {
    stage: 7,
    result: JSON.stringify(result)
  });
}

function pkFinishError(object) {
  _app__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"].asyncV1("hg.onGameStageChange", {
    stage: 8,
    message: object.message
  });
}



/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(6);
var $forEach = __webpack_require__(121)(0);
var STRICT = __webpack_require__(52)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(15);
var IObject = __webpack_require__(31);
var toObject = __webpack_require__(37);
var toLength = __webpack_require__(25);
var asc = __webpack_require__(122);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(123);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(4);
var isArray = __webpack_require__(55);
var SPECIES = __webpack_require__(1)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeGame", function() { return subscribeGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unsubscribeGame", function() { return unsubscribeGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameSubscribeStatus", function() { return getGameSubscribeStatus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendMsgInGame", function() { return sendMsgInGame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameInviteInfo", function() { return getGameInviteInfo; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function sendMsgInGame(object) {
  if (!object || !object.toUserId || !object.gameId) {
    console.error("sendMsgInGame invalid object " + object);
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.sendMsgInGame", {
    gameId: object.gameId,
    roomId: object.roomId ? object.roomId : "default",
    toUserId: object.toUserId,
    content: object.toUserId,
    infoPayLoad: object.infoPayLoad
  });
}

function getGameInviteInfo() {
  return _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].gameInviteInfo;
}

function subscribeGame(object) {
  if (!object || !object.gameId) {
    console.error("subscribeGame empty gameId");
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.subscribeGame", {
    gameId: object.gameId
  });
}

function unsubscribeGame(object) {
  if (!object || !object.gameId) {
    console.error("unsubscribeGame empty gameId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.unsubscribeGame", {
    gameId: object.gameId
  });
}

function getGameSubscribeStatus(object) {
  if (!object || !object.gameId) {
    console.error("getGameSubscribeStatus empty gameId");
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.getGameSubscribeStatus", {
    gameId: object.gameId
  }, function (data) {
    object.success && object.success(data.status);
  });
}



/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFriendInfos", function() { return getFriendInfos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFriend", function() { return addFriend; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function getFriendInfos(object) {
  if (!object) {
    console.error("invalid object");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.getFriendInfos", {}, function (data) {
    if (data.errCode === 0) {
      console.log("getFriendInfos success " + data.users);
      object.success && object.success(JSON.parse(data.users));
    } else {
      object.fail && object.fail({
        errCode: data.errCode,
        errMsg: data.errMsg
      });
    }
  });
}

function addFriend(object) {
  if (!object || !object.uid) {
    console.error("addFriend no uid");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.addFriend", {
    uid: object.uid
  }, function (data) {
    if (data.code === 1) {
      console.log("addFriend success");
      object.success && object.success({
        errCode: data.code
      });
    } else {
      object.fail && object.fail({
        errCode: data.code
      });
    }
  });
}



/***/ }),
/* 126 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startVoiceRecord", function() { return startVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelVoiceRecord", function() { return cancelVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopVoiceRecord", function() { return stopVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uploadVoiceRecord", function() { return uploadVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playVoiceRecord", function() { return playVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPlayVoiceRecord", function() { return stopPlayVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pausePlayVoiceRecord", function() { return pausePlayVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resumePlayVoiceRecord", function() { return resumePlayVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "downLoadVoiceRecord", function() { return downLoadVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelDownLoadVoiceRecord", function() { return cancelDownLoadVoiceRecord; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDownLoadVoiceRecordCallback", function() { return setDownLoadVoiceRecordCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setPlayVoiceRecordCallback", function() { return setPlayVoiceRecordCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setStartVoiceRecordCallback", function() { return setStartVoiceRecordCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setUploadVoiceRecordCallback", function() { return setUploadVoiceRecordCallback; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isRecordSupport", function() { return isRecordSupport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestRecordAudioPermission", function() { return requestRecordAudioPermission; });
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);


function isRecordSupport(object) {
  //1 鈥� 鏀寔, 2 鈥� 娌″綍闊虫潈闄�, 3 鈥� 琚坊鍔犱簡榛戝悕鍗曚笉鑳藉綍闊�
  if (!object) {
    console.error("isRecordSupport empty object");
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.isRecordSupport(", {}, function (data) {
    object.success && object.success(data.support);
  });
}

function requestRecordAudioPermission(object) {
  //1--鍏佽锛� 0--鎷掔粷
  if (!object || !object.gameId) {
    console.error("requestRecordAudioPermission empty gameId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.requestRecordAudioPermission", {
    gameId: object.gameId
  }, function (data) {
    object.success && object.success(data.result);
  });
}

function startVoiceRecord(object) {
  if (!object || !object.gameId || !object.roomId) {
    console.error("startVoiceRecord invalid object" + object);
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.startVoiceRecord", {
    gameId: object.gameId,
    roomId: object.roomId,
    maxDuration: object.maxDuration
  });
}

function setStartVoiceRecordCallback(callback) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen("hg.startVoiceRecord.callback", function (data) {
    console.log("startvoicecallback " + JSON.stringify(date));
    callback && callback(data.code, data.localId, data.result);
  });
}

function stopVoiceRecord(object) {
  if (!object || !object.localId) {
    console.error("stopVoiceRecord empty localId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.stopVoiceRecord", {
    localId: object.localId
  }, function (data) {});
}

function cancelVoiceRecord(object) {
  if (!object || !object.localId) {
    console.log("cancelVoiceRecord empty localId");
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.cancelVoiceRecord", {
    localId: object.localId
  }, function (data) {});
}

function uploadVoiceRecord(object) {
  if (!object || !object.localId) {
    console.error("uploadVoiceRecord empty localId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.uploadVoiceRecord", {
    localId: object.localId
  });
}

function setUploadVoiceRecordCallback(callback) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen("hg.uploadVoiceRecord.callback", function (msgObj, type) {
    callback && callback(msgObj.code, msgObj.recordUrl, msgObj.result);
  });
}

function playVoiceRecord(object) {
  if (!object || !object.recordId) {
    console.log("playVoiceRecord empty recordId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.playVoiceRecord", {
    recordId: object.recordId
  });
}

function setPlayVoiceRecordCallback(callback) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen("hg.playVoiceRecord.callback", function (msgObj, type) {
    callback && callback(msgObj.code, msgObj.recordId, msgObj.result);
  });
}

function stopPlayVoiceRecord(object) {
  if (!object || !object.recordId) {
    console.log("stopPlayVoiceRecord empty recordId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.stopPlayVoiceRecord", {
    recordId: object.recordId
  });
}

function pausePlayVoiceRecord(object) {
  if (!object || !object.recordId) {
    console.log("pausePlayVoiceRecord empty recordId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.pausePlayVoiceRecord", {
    recordId: object.recordId
  });
}

function resumePlayVoiceRecord(object) {
  if (!object || !object.recordId) {
    console.log("resumePlayVoiceRecord empty recordId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.resumePlayVoiceRecord", {
    recordId: object.recordId
  });
}

function downLoadVoiceRecord(object) {
  if (!object || !object.recordUrl) {
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.downLoadVoiceRecord", {
    recordUrl: object.recordUrl
  });
}

function setDownLoadVoiceRecordCallback(callback) {
  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].listen("hg.downLoadVoiceRecord.callback", function (msgObj, type) {
    callback && callback(msgObj.code, msgObj.recordUrl, msgObj.result);
  });
}

function cancelDownLoadVoiceRecord(object) {
  if (!object || !object.recordId) {
    console.log("resumePlayVoiceRecord empty recordId");
    return;
  }

  _app__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"].asyncV1("hg.cancelDownLoadVoiceRecord", {
    recordUrl: object.recordUrl
  });
}



/***/ })
/******/ ])));