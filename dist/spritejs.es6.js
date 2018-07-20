(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spritejs"] = factory();
	else
		root["spritejs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 402);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var ctx = __webpack_require__(25);
var hide = __webpack_require__(26);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(118)('wks');
var uid = __webpack_require__(86);
var Symbol = __webpack_require__(4).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.1' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(3);
var ctx = __webpack_require__(43);
var hide = __webpack_require__(30);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 6 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(149)('wks');
var uid = __webpack_require__(95);
var Symbol = __webpack_require__(6).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(222);
var isBuffer = __webpack_require__(468);

/*global toString:true*/

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.replace(/^\s*/, '').replace(/\s*$/, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object' && !isArray(obj)) {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = merge(result[key], val);
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(167)('wks');
var uid = __webpack_require__(102);
var Symbol = __webpack_require__(17).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(36)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var IE8_DOM_DEFINE = __webpack_require__(182);
var toPrimitive = __webpack_require__(120);
var dP = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__decorators__ = __webpack_require__(401);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "boxIntersect", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "boxToRect", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["l"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "boxEqual", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["m"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "boxUnion", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["n"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rectToBox", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["o"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["p"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["q"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "resolveValue", function() { return __WEBPACK_IMPORTED_MODULE_1__decorators__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return __WEBPACK_IMPORTED_MODULE_0__utils__["r"]; });






/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(285), __esModule: true };

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(54)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 17 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(46);
var IE8_DOM_DEFINE = __webpack_require__(252);
var toPrimitive = __webpack_require__(171);
var dP = Object.defineProperty;

exports.f = __webpack_require__(16) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(215)('wks');
var uid = __webpack_require__(132);
var Symbol = __webpack_require__(28).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(44)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var IE8_DOM_DEFINE = __webpack_require__(232);
var toPrimitive = __webpack_require__(153);
var dP = Object.defineProperty;

exports.f = __webpack_require__(21) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(277), __esModule: true };

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(59);
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
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(63);
module.exports = __webpack_require__(10) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(110);
var defined = __webpack_require__(107);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 28 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var createDesc = __webpack_require__(94);
module.exports = __webpack_require__(21) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(141);
var defined = __webpack_require__(138);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(13);
var ctx = __webpack_require__(79);
var hide = __webpack_require__(33);
var has = __webpack_require__(47);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var createDesc = __webpack_require__(100);
module.exports = __webpack_require__(16) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(280), __esModule: true };

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 37 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(88)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(41);
var createDesc = __webpack_require__(213);
module.exports = __webpack_require__(38) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(67);
var IE8_DOM_DEFINE = __webpack_require__(343);
var toPrimitive = __webpack_require__(358);
var dP = Object.defineProperty;

exports.f = __webpack_require__(38) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = registerNodeType;
/* harmony export (immutable) */ __webpack_exports__["b"] = createNode;
/* harmony export (immutable) */ __webpack_exports__["c"] = createElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__);



const nodeTypes = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default.a();

/* istanbul ignore next  */
const ownerDocumentDescriptor = {
  get() {
    const that = this;
    return {
      createElementNS(uri, name) {
        const sprite = createNode(name);
        if (sprite) {
          return that.appendChild(sprite);
        }
        return null;
      }
    };
  }
};

function getAllSubNodes(parent) {
  const children = parent.children;
  return children.reduce((list, child) => {
    if (child.children) {
      return [...list, child, ...getAllSubNodes(child)];
    }
    return [...list, child];
  }, []);
}

function querySelectorLimits(node, functor, limits = Infinity) {
  const nodeList = [];
  const elements = getAllSubNodes(node);
  for (let i = 0; i < elements.length; i++) {
    const node = elements[i];
    if (functor(node)) {
      nodeList.push(node);
      if (limits === nodeList.length) {
        break;
      }
    }
  }
  return nodeList;
}

const elementProto = {
  getElementById(id) {
    const children = getAllSubNodes(this);
    for (let i = 0; i < children.length; i++) {
      const child = children[i];
      if (child.id === id) {
        return child;
      }
    }
    return null;
  },
  getElementsByName(name) {
    return getAllSubNodes(this).filter(c => c.name === name);
  },
  /*
    d3-friendly
    *, nodeType, #id, :name, {nodeType: checker}
  */
  querySelector(selector) {
    let ret = null;

    if (!selector || selector === '*') {
      ret = this.children[0];
    } else if (typeof selector === 'string') {
      // querySelector('nodeType')
      // querySelector('#id')
      // querySelector(':name')
      if (selector.startsWith('#')) {
        ret = this.getElementById(selector.slice(1));
      } else if (selector.startsWith(':')) {
        const name = selector.slice(1);
        const nodeList = querySelectorLimits(this, c => c.name === name, 1);
        if (nodeList.length) ret = nodeList[0];
      } else {
        const nodeType = getNodeType(selector);
        if (nodeType) {
          const nodeList = querySelectorLimits(this, c => c instanceof nodeType, 1);
          if (nodeList.length) ret = nodeList[0];
        }
      }
    } else {
      /*
        {
          nodeType: () => {...},   //checker
        }
      */
      const nodeList = querySelectorLimits(this, child => {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(selector).some(([type, checker]) => {
          const nodeType = getNodeType(type);
          return nodeType && child instanceof nodeType && checker.call(this, child);
        });
      }, 1);
      if (nodeList.length) ret = nodeList[0];
    }
    return ret;
  },
  querySelectorAll(selector) {
    let ret = [];

    if (!selector || selector === '*') {
      ret = getAllSubNodes(this);
    } else if (typeof selector === 'string') {
      if (selector.startsWith('#')) {
        const sprite = this.getElementById(selector.slice(1));
        ret = sprite ? [sprite] : [];
      }
      if (selector.startsWith(':')) {
        ret = this.getElementsByName(selector.slice(1));
      }
      const nodeType = getNodeType(selector);
      if (nodeType) {
        ret = querySelectorLimits(this, c => c instanceof nodeType);
      }
    } else {
      ret = querySelectorLimits(this, child => {
        return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(selector).some(([type, checker]) => {
          const nodeType = getNodeType(type);
          if (!nodeType || !(child instanceof nodeType)) {
            return false;
          }
          return checker.call(this, child);
        });
      });
    }
    return ret;
  }
};

function registerNodeType(type, Class, isQuerable = false) {
  Object.defineProperty(Class.prototype, 'nodeType', {
    get() {
      return type;
    }
  });
  nodeTypes.set(type, Class);
  if (isQuerable && !Class.prototype.ownerDocument) {
    Object.defineProperty(Class.prototype, 'ownerDocument', ownerDocumentDescriptor);
    Class.prototype.namespaceURI = `http://spritejs.org/${type}`;
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(Class.prototype, elementProto);
  }
}

function createNode(type, ...args) {
  const Class = nodeTypes.get(type);
  if (Class) {
    return new Class(...args);
  }
  return null;
}

function createElement(type, attrs, content) {
  const Node = typeof type === 'string' ? nodeTypes.get(type) : type;

  if (!Node) return null;

  const sprite = new Node(typeof content === 'string' ? content : undefined);

  if (attrs !== null) {
    sprite.attr(attrs);
  }

  if (typeof content === 'object' && sprite.append) {
    if (content instanceof Array) {
      sprite.append(...content);
    } else {
      sprite.append(content);
    }
  }
  return sprite;
}

function getNodeType(type) {
  return nodeTypes.get(type);
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(72);
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
/* 44 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 45 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 47 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(191);
var enumBugKeys = __webpack_require__(109);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(301)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(111)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 51 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(28);
var core = __webpack_require__(51);
var ctx = __webpack_require__(68);
var hide = __webpack_require__(39);
var has = __webpack_require__(69);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = drawRadiusBox;
/* harmony export (immutable) */ __webpack_exports__["a"] = findColor;
function drawRadiusBox(context, { x, y, w, h, r }) {
  context.beginPath();
  context.moveTo(x + r, y);
  context.arcTo(x + w, y, x + w, y + h, r);
  context.arcTo(x + w, y + h, x, y + h, r);
  context.arcTo(x, y + h, x, y, r);
  context.arcTo(x, y, x + w, y, r);
  context.closePath();
}

/* istanbul ignore next  */
function gradientBox(angle, rect) {
  const [x, y, w, h] = rect;

  angle %= 360;
  if (angle < 0) {
    angle += 360;
  }

  let ret = [x, y, x + w, y + h];
  if (angle >= 0 && angle < 90) {
    const tan = Math.tan(Math.PI * angle / 180);

    let d = tan * w;

    if (d <= h) {
      ret = [x, y, x + w, y + d];
    } else {
      d = h / tan;
      ret = [x, y, x + d, y + h];
    }
  } else if (angle >= 90 && angle < 180) {
    const tan = Math.tan(Math.PI * (angle - 90) / 180);

    let d = tan * h;

    if (d <= w) {
      ret = [x + w, y, x + w - d, y + h];
    } else {
      d = w / tan;
      ret = [x + w, y, x, y + d];
    }
  } else if (angle >= 180 && angle < 270) {
    const tan = Math.tan(Math.PI * (angle - 180) / 180);

    let d = tan * w;

    if (d <= h) {
      ret = [x + w, y + h, x, y + h - d];
    } else {
      d = h / tan;
      ret = [x + w, y + h, x + w - d, y];
    }
  } else if (angle >= 270 && angle < 360) {
    const tan = Math.tan(Math.PI * (angle - 270) / 180);

    let d = tan * h;

    if (d <= w) {
      ret = [x, y + h, x + d, y];
    } else {
      d = w / tan;
      ret = [x, y + h, x + w, y + h - d];
    }
  }

  return ret;
}

function findColor(context, sprite, prop) {
  const gradients = sprite.attr('gradients') || {};
  let color = prop === 'border' ? sprite.attr(prop).color : sprite.attr(prop),
      gradient;

  if (gradients[prop]) {
    /* istanbul ignore next */
    gradient = gradients[prop];
  } else if (typeof color !== 'string') {
    gradient = color;
  }

  if (gradient) {
    let { colors, vector, direction, rect } = gradient;

    /* istanbul ignore if  */
    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0, ...sprite.outerSize];
      } else {
        const { width: borderWidth } = sprite.attr('border');
        rect = rect || [borderWidth, borderWidth, ...sprite.innerSize];
      }
      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient(...vector);
    } else if (vector.length === 6) {
      color = context.createRadialGradient(...vector);
    } /* istanbul ignore next  */else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient(...vector);
      } /* istanbul ignore next  */else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(o => {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}

const contextPool = [],
      maxPollSize = 20;

const cacheContextPool = {
  get(context) {
    if (contextPool.length > 0) {
      return contextPool.pop();
    }

    const canvas = context.canvas;
    if (!canvas || !canvas.cloneNode) {
      return;
    }
    const copied = canvas.cloneNode();
    return copied.getContext('2d');
  },
  put(...contexts) {
    contexts.every(context => {
      context.canvas.width = 0;
      context.canvas.height = 0;
      contextPool.push(context);
      return contextPool.length < maxPollSize;
    });
  },
  get size() {
    return contextPool.length;
  }
};
/* harmony export (immutable) */ __webpack_exports__["b"] = cacheContextPool;


/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(161);
var defined = __webpack_require__(159);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = function (target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(281), __esModule: true };

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 60 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(25);
var call = __webpack_require__(185);
var isArrayIter = __webpack_require__(183);
var anObject = __webpack_require__(19);
var toLength = __webpack_require__(85);
var getIterFn = __webpack_require__(123);
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
/* 62 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 63 */
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(11).f;
var has = __webpack_require__(37);
var TAG = __webpack_require__(2)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(107);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(306);
var global = __webpack_require__(4);
var hide = __webpack_require__(26);
var Iterators = __webpack_require__(48);
var TO_STRING_TAG = __webpack_require__(2)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(40);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(203);
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
/* 69 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 70 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSprite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__attr__ = __webpack_require__(391);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__basenode__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sprite_math__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__animation__ = __webpack_require__(390);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__nodetype__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_render__ = __webpack_require__(53);
throw new Error("Cannot find module \"sprite-animator\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filters__ = __webpack_require__(224);







var _class, _temp;












const _attr = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('attr'),
      _animations = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('animations'),
      _cachePriority = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('cachePriority'),
      _effects = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('effects');

let BaseSprite = (_temp = _class = class BaseSprite extends __WEBPACK_IMPORTED_MODULE_7__basenode__["a" /* default */] {

  /**
    new Sprite({
      attr: {
        ...
      }
    })
   */
  constructor(attr) {
    super();

    this[_attr] = new this.constructor.Attr(this);
    this[_animations] = new __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_set___default.a();
    this[_cachePriority] = 0;
    this.__cachePolicyThreshold = 6;

    if (attr) {
      this.attr(attr);
    }
  }
  get cachePriority() {
    if (this.isVirtual) return -1;
    return this[_cachePriority];
  }
  set cachePriority(priority) {
    this[_cachePriority] = priority;
  }
  static setAttributeEffects(effects = {}) {
    if (this.prototype[_effects] == null) {
      this.prototype[_effects] = effects;
    }
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_assign___default()(this.prototype[_effects], effects);
  }
  static defineAttributes(attrs, effects) {
    this.Attr = class extends this.Attr {
      constructor(subject) {
        super(subject);
        if (attrs.init) attrs.init(this, subject);
      }
    };
    __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(attrs).forEach(([prop, handler]) => {
      let getter = function () {
        return this.get(prop);
      };
      if (typeof handler !== 'function' && handler.set) {
        getter = handler.get || getter;
        handler = handler.set;
      }
      if (prop !== 'init') {
        this.Attr.prototype.__attributeNames.push(prop);
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default()(this.Attr.prototype, prop, {
          set(val) {
            this.__clearCacheTag = false;
            this.__updateTag = false;
            handler(this, val);
            if (this.subject && this.__updateTag) {
              this.subject.forceUpdate(this.__clearCacheTag);
            }
            delete this.__updateTag;
            delete this.__clearCacheTag;
          },
          get: getter
        });
      }
    });
    if (effects) this.setAttributeEffects(effects);
    return this.Attr;
  }

  get layer() {
    return this.parent && this.parent.layer;
  }

  serialize() {
    const nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.dataset),
          id = this.id;

    return {
      nodeType,
      attrs,
      dataset,
      id
    };
  }

  merge(attrs) {
    this[_attr].merge(attrs);
  }

  cloneNode() {
    const node = new this.constructor();
    node.merge(this[_attr].serialize());
    node.data(this.dataset);
    return node;
  }

  set id(val) {
    this.attr('id', val);
  }
  get id() {
    return this.attr('id');
  }

  set name(val) {
    this.attr('name', val);
  }
  get name() {
    return this.attr('name');
  }

  get hasLayout() {
    if (this.attr('position') === 'absolute') return false;
    if (this.parent && this.parent.relayout && this.parent.attr('display') === 'flex') return true;
    return false;
  }

  set zIndex(val) {
    this.attr('zIndex', val);
  }

  get zIndex() {
    return this.attr('zIndex');
  }

  getAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop);
  }
  setAttribute(prop, val) {
    /* istanbul ignore next */
    return this.attr(prop, val);
  }
  removeAttribute(prop) {
    /* istanbul ignore next */
    return this.attr(prop, null);
  }

  attr(props, val) {
    const setVal = (key, value) => {
      this[_attr][key] = value;
      if (key === 'zIndex' && this.parent) {
        this.parent.children.sort((a, b) => {
          if (a.zIndex === b.zIndex) {
            return a.zOrder - b.zOrder;
          }
          return a.zIndex - b.zIndex;
        });
      }
    };
    if (typeof props === 'object') {
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(props).forEach(([prop, value]) => {
        this.attr(prop, value);
      });
      return this;
    } else if (typeof props === 'string') {
      if (val !== undefined) {
        if (typeof val === 'function') {
          val = val(this[_attr][props]);
        }
        if (val && typeof val.then === 'function') {
          return val.then(res => {
            setVal(props, res);
          });
        }
        setVal(props, val);
        return this;
      }
      return this[_attr][props];
    }

    return this[_attr].attrs;
  }

  get attributes() {
    return this[_attr];
  }

  get isVirtual() {
    return false;
  }

  isVisible() {
    const display = this.attr('display');
    if (display === 'none') {
      return false;
    }

    const opacity = this.attr('opacity');
    if (opacity <= 0) {
      return false;
    }

    if (this.isVirtual) return true;

    const [width, height] = this.offsetSize;
    if (width <= 0 || height <= 0) {
      return false;
    }

    if (this.parent && this.parent.isVisible) {
      return this.parent.isVisible();
    }
    return true;
  }

  get transform() {
    const transform = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](this[_attr].get('transformMatrix'));
    const transformOrigin = this.attr('transformOrigin');
    if (transformOrigin) {
      const t = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"]();
      t.translate(...transformOrigin);
      t.multiply(transform);
      t.translate(...transformOrigin.map(v => -v));
      return t;
    }
    return transform;
  }
  transition(sec, easing = 'linear') {
    const that = this,
          _animation = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_symbol___default()('animation');

    return {
      [_animation]: null,
      end() {
        const animation = this[_animation];
        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      },
      reverse() {
        const animation = this[_animation];
        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            const direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }
        return animation.finished;
      },
      attr(prop, val) {
        this.end();
        if (typeof prop === 'string') {
          prop = { [prop]: val };
        }
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_entries___default()(prop).forEach(([key, value]) => {
          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          fill: 'forwards',
          easing
        });
        return this[_animation].finished;
      }
    };
  }
  animate(frames, timing) {
    const animation = new __WEBPACK_IMPORTED_MODULE_9__animation__["a" /* default */](this, frames, timing);
    if (this[_effects]) animation.applyEffects(this[_effects]);
    if (this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(() => {
        this[_animations].delete(animation);
      });
    }
    this[_animations].add(animation);
    return animation;
  }

  connect(parent, zOrder = 0) {
    if (parent && !(parent instanceof __WEBPACK_IMPORTED_MODULE_7__basenode__["a" /* default */])) {
      const node = new __WEBPACK_IMPORTED_MODULE_7__basenode__["a" /* default */]();
      node.context = parent;
      node.timeline = new __WEBPACK_IMPORTED_MODULE_13_sprite_animator__["Timeline"]();
      node.update = function () {
        const currentTime = this.timeline.currentTime;
        node.dispatchEvent('update', { target: this, timeline: this.timeline, renderTime: currentTime }, true, true);
      };
      parent = node;
    }
    const ret = super.connect(parent, zOrder);
    Object.defineProperty(this, 'context', {
      get: () => parent.cache || parent.context,
      configurable: true
    });
    this[_animations].forEach(animation => {
      if (parent.layer) {
        animation.baseTimeline = parent.layer.timeline;
      }
      animation.play();
      animation.finished.then(() => {
        this[_animations].delete(animation);
      });
    });
    if (this.hasLayout) parent.clearLayout();
    return ret;
  }

  disconnect(parent) {
    this[_animations].forEach(animation => animation.cancel());
    if (this.cache) {
      this.cache = null;
    }
    if (this.hasLayout) parent.clearLayout();
    const ret = super.disconnect(parent);
    delete this.context;
    return ret;
  }

  get attrSize() {
    const [width, height] = this.attr('size');
    if (!this.hasLayout) {
      return [width, height];
    }
    const layoutWidth = this.attr('layoutWidth'),
          layoutHeight = this.attr('layoutHeight');

    return [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
  }

  // content width / height
  get contentSize() {
    if (this.isVirtual) return [0, 0];

    const [width, height] = this.attrSize;

    return [width | 0, height | 0];
  }

  // content + padding
  get clientSize() {
    const [top, right, bottom, left] = this.attr('padding'),
          [width, height] = this.contentSize;

    return [left + width + right, top + height + bottom];
  }

  // content + padding + border
  get offsetSize() {
    const { width: borderWidth } = this.attr('border'),
          [width, height] = this.clientSize;

    return [width + 2 * borderWidth, height + 2 * borderWidth];
  }

  get innerSize() {
    return this.contentSize;
  }

  get outerSize() {
    return this.offsetSize;
  }

  get boundingRect() {
    const transform = this.transform;
    const [ox, oy] = this.originalRect;
    const [width, height] = this.offsetSize;

    const vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];

    const transformed = vertexs.map(v => {
      return transform.transformPoint(v[0], v[1]);
    });

    const vx = transformed.map(v => v[0]),
          vy = transformed.map(v => v[1]);

    const minX = Math.min(...vx),
          minY = Math.min(...vy),
          maxX = Math.max(...vx),
          maxY = Math.max(...vy);

    return [...[minX, minY], ...[maxX - minX, maxY - minY]];
  }

  // rect before transform
  get originalRect() {
    const [width, height] = this.offsetSize,
          [anchorX, anchorY] = this.attr('anchor');

    return [-anchorX * width, -anchorY * height, width, height];
  }

  get originalRenderRect() {
    const bound = this.originalRect,
          pos = this.attr('pos');

    return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
  }

  get renderBox() {
    const bound = this.boundingRect,
          pos = this.attr('pos');

    return [Math.floor(pos[0] + bound[0]), Math.floor(pos[1] + bound[1]), Math.ceil(pos[0] + bound[0] + bound[2]), Math.ceil(pos[1] + bound[1] + bound[3])];
  }

  get renderRect() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_sprite_utils__["boxToRect"])(this.renderBox);
  }

  get vertices() {
    const vertices = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_sprite_utils__["rectVertices"])(this.originalRect),
          transform = this.transform,
          [x0, y0] = this.attr('pos');

    return vertices.map(v => {
      const [x, y] = transform.transformPoint(v[0], v[1]);
      return [x0 + x, y0 + y];
    });
  }

  set cache(context) {
    if (this.cacheContext && context !== this.cacheContext) {
      __WEBPACK_IMPORTED_MODULE_12__helpers_render__["b" /* cacheContextPool */].put(this.cacheContext);
    }
    this.cacheContext = context;
  }

  get cache() {
    return this.cacheContext;
  }

  clearCache() {
    this[_cachePriority] = 0;
    this.cache = null;
    if (this.parent && this.parent.cache) {
      this.parent[_cachePriority] = 0;
      this.parent.cache = null;
    }
  }

  remove() {
    if (!this.parent) return false;
    this.parent.removeChild(this);
    return true;
  }

  appendTo(parent) {
    parent.appendChild(this);
  }

  forceUpdate(clearCache = false) {
    if (clearCache) {
      this.clearCache();
    }
    const parent = this.parent;
    if (parent) {
      this.parent.update(this);
    }
  }

  // layer position to sprite offset
  pointToOffset(x, y) {
    const [x0, y0] = this.attr('pos');
    const [dx, dy] = [x - x0, y - y0];
    const transform = this.transform;
    return transform.inverse().transformPoint(dx, dy);
  }

  pointCollision(evt) {
    /* istanbul ignore if */
    if (!this.isVisible()) {
      return false;
    }

    let parentX, parentY;

    if (evt.parentX != null) {
      // group
      parentX = evt.parentX;
      parentY = evt.parentY;
    } else {
      parentX = evt.layerX;
      parentY = evt.layerY;
    }

    let [nx, ny] = this.pointToOffset(parentX, parentY);
    evt.offsetX = nx;
    evt.offsetY = ny;

    const [ox, oy, ow, oh] = this.originalRect;

    if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
      if (this.context && this.context.isPointInPath) {
        const borderWidth = this.attr('border').width,
              borderRadius = this.attr('borderRadius');
        if (borderWidth || borderRadius) {
          const [width, height] = this.outerSize;
          const [x, y, w, h, r] = [0, 0, width, height, Math.max(0, borderRadius + borderWidth / 2)];
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__helpers_render__["c" /* drawRadiusBox */])(this.context, { x, y, w, h, r });
          if (this.layer && this.layer.offset) {
            nx += this.layer.offset[0];
            ny += this.layer.offset[1];
          }
          return this.context.isPointInPath(nx - ox, ny - oy);
        }
      }
      return true;
    }
  }

  // OBB: http://blog.csdn.net/silangquan/article/details/50812425
  OBBCollision(sprite) {
    // vertices: [p1, p2, p3, p4]
    const [p11, p12, p13] = this.vertices,
          [p21, p22, p23] = sprite.vertices;

    const a1 = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Vector"](p12, p11).unit(),
          a2 = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Vector"](p13, p12).unit(),
          a3 = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Vector"](p22, p21).unit(),
          a4 = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Vector"](p23, p22).unit();

    // The projection of the axis of a vertex in a certain direction
    function verticesProjection(vertices, axis) {
      const [p1, p2, p3, p4] = vertices.map(v => axis.dot(new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Vector"](v)));

      return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
    }

    function projectionIntersect(p1, p2) {
      const m1 = (p1[0] + p1[1]) / 2,
            l1 = Math.abs(p1[1] - p1[0]),
            m2 = (p2[0] + p2[1]) / 2,
            l2 = Math.abs(p2[1] - p2[0]);

      return Math.abs(m2 - m1) <= (l1 + l2) / 2;
    }

    return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
  }

  relayout() {}

  draw(t, drawingContext = this.context) {
    const bound = this.originalRect;
    let cachableContext = this.cache;

    const filter = this.attr('filter'),
          shadow = this.attr('shadow');

    // filter & shadow require cachableContext
    if (!cachableContext && (filter || shadow || this.cachePriority > this.__cachePolicyThreshold)) {
      cachableContext = __WEBPACK_IMPORTED_MODULE_12__helpers_render__["b" /* cacheContextPool */].get(drawingContext);
      if (cachableContext) {
        // +2 to solve 1px problem
        cachableContext.canvas.width = Math.ceil(bound[2]) + 2;
        cachableContext.canvas.height = Math.ceil(bound[3]) + 2;
      } else {
        this.__cachePolicyThreshold = Infinity;
      }
    }

    this[_cachePriority] = Math.min(this[_cachePriority] + 1, 10);
    const evtArgs = { context: drawingContext, cacheContext: cachableContext, target: this, renderTime: t, fromCache: !!this.cache };

    drawingContext.save();
    drawingContext.translate(...this.attr('pos'));
    drawingContext.transform(...this.transform.m);

    // fix for wxapp
    const alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
    drawingContext.globalAlpha = alpha * this.attr('opacity');

    if (!cachableContext) {
      drawingContext.translate(bound[0], bound[1]);
    } else {
      // solve 1px problem
      cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);
    }

    this.dispatchEvent('beforedraw', evtArgs, true, true);

    if (cachableContext) {
      // set cache before render for group
      if (!this.cache) {
        this.cache = cachableContext;
        this.render(t, cachableContext);
      }
    } else {
      this.render(t, drawingContext);
    }

    if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
      if (filter) {
        drawingContext.filter = __WEBPACK_IMPORTED_MODULE_14__filters__["a" /* default */].compile(filter);
      }
      if (shadow) {
        let { blur, color, offset } = shadow;
        blur = blur || 1;
        color = color || 'rgba(0,0,0,1)';
        drawingContext.shadowBlur = blur;
        drawingContext.shadowColor = color;
        if (offset) {
          drawingContext.shadowOffsetX = offset[0];
          drawingContext.shadowOffsetY = offset[1];
        }
      }
      drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1);
    }

    this.dispatchEvent('afterdraw', evtArgs, true, true);

    drawingContext.restore();

    return drawingContext;
  }

  render(t, drawingContext) {
    if (this.isVirtual) return false;

    const border = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          padding = this.attr('padding'),
          [offsetWidth, offsetHeight] = this.offsetSize,
          [clientWidth, clientHeight] = this.clientSize;

    /* istanbul ignore if */
    if (offsetWidth === 0 || offsetHeight === 0) return;
    if (border.width <= 0 && borderRadius <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor) {
      drawingContext.translate(padding[3], padding[0]);
      return false; // don't need to render
    }

    const borderWidth = border.width;
    let borderStyle = border.style;

    // draw border
    if (borderWidth) {
      drawingContext.lineWidth = borderWidth;

      const [x, y, w, h, r] = [borderWidth / 2, borderWidth / 2, offsetWidth - borderWidth, offsetHeight - borderWidth, borderRadius];

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__helpers_render__["c" /* drawRadiusBox */])(drawingContext, { x, y, w, h, r });

      if (borderStyle && borderStyle !== 'solid') {
        const dashOffset = this.attr('dashOffset');
        drawingContext.lineDashOffset = dashOffset;
        if (borderStyle === 'dashed') {
          borderStyle = [borderWidth * 3, borderWidth * 3];
        }
        drawingContext.setLineDash(borderStyle);
      }
      drawingContext.strokeStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__helpers_render__["a" /* findColor */])(drawingContext, this, 'border');
      drawingContext.stroke();
    }

    // draw bgcolor
    const bgcolor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__helpers_render__["a" /* findColor */])(drawingContext, this, 'bgcolor');

    if (this.cache == null || borderWidth || borderRadius || bgcolor) {
      const [x, y, w, h, r] = [borderWidth, borderWidth, clientWidth, clientHeight, Math.max(0, borderRadius - borderWidth / 2)];

      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__helpers_render__["c" /* drawRadiusBox */])(drawingContext, { x, y, w, h, r });

      if (bgcolor) {
        drawingContext.fillStyle = bgcolor;
        drawingContext.fill();
      }
      // clip is expensive, we should only perform clip when it has to.
      if (borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
        drawingContext.clip();
      }
    }

    drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);

    return true;
  }
}, _class.Attr = __WEBPACK_IMPORTED_MODULE_6__attr__["a" /* default */], _temp);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__nodetype__["a" /* registerNodeType */])('basesprite', BaseSprite);

/***/ }),
/* 72 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 73 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(43);
var call = __webpack_require__(438);
var isArrayIter = __webpack_require__(437);
var anObject = __webpack_require__(29);
var toLength = __webpack_require__(151);
var getIterFn = __webpack_require__(451);
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
/* 75 */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(237);
var enumBugKeys = __webpack_require__(140);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 77 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(23).f;
var has = __webpack_require__(45);
var TAG = __webpack_require__(7)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(249);
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
/* 80 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return Color; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__basesprite__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(398);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__label__ = __webpack_require__(395);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__layer__ = __webpack_require__(396);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__group__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__basenode__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__path__ = __webpack_require__(397);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__batch__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__nodetype__ = __webpack_require__(42);
throw new Error("Cannot find module \"sprite-animator\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_svg_path_to_canvas__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__helpers_render__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_sprite_math__ = __webpack_require__(90);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_12_sprite_utils__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_13_sprite_math__; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return __WEBPACK_IMPORTED_MODULE_5__basenode__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return __WEBPACK_IMPORTED_MODULE_0__basesprite__["a"]; });
/* unused harmony reexport Batch */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return __WEBPACK_IMPORTED_MODULE_1__sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_2__label__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_6__path__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return __WEBPACK_IMPORTED_MODULE_3__layer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return __WEBPACK_IMPORTED_MODULE_4__group__["a"]; });
/* harmony reexport (binding) */ if(__webpack_require__.o(__WEBPACK_IMPORTED_MODULE_9_sprite_animator__, null)) __webpack_require__.d(__webpack_exports__, "l", function() { return __WEBPACK_IMPORTED_MODULE_9_sprite_animator__[null]; });
/* unused harmony reexport Easings */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__nodetype__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return __WEBPACK_IMPORTED_MODULE_8__nodetype__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return __WEBPACK_IMPORTED_MODULE_8__nodetype__["c"]; });
/* unused harmony reexport SvgPath */
















__WEBPACK_IMPORTED_MODULE_12_sprite_utils__["findColor"] = __WEBPACK_IMPORTED_MODULE_11__helpers_render__["a" /* findColor */];
__WEBPACK_IMPORTED_MODULE_12_sprite_utils__["cacheContextPool"] = __WEBPACK_IMPORTED_MODULE_11__helpers_render__["b" /* cacheContextPool */];

const Color = __WEBPACK_IMPORTED_MODULE_12_sprite_utils__["Color"];





/***/ }),
/* 81 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["d"] = createCanvas;
/* harmony export (immutable) */ __webpack_exports__["c"] = loadImage;
/* harmony export (immutable) */ __webpack_exports__["e"] = getContainer;
/* harmony export (immutable) */ __webpack_exports__["a"] = shim;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__devtools__ = __webpack_require__(403);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__devtools__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return __WEBPACK_IMPORTED_MODULE_1__devtools__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return __WEBPACK_IMPORTED_MODULE_1__devtools__["c"]; });

function createCanvas(width = 300, height = 150) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function loadImage(src) {
  const img = document.createElement('img');
  img.crossOrigin = 'anonymous';

  const promise = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a(resolve => {
    img.addEventListener('load', () => {
      resolve(img);
    });
  });
  img.src = src;
  return promise;
}

function getContainer(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}





function shim() {
  // CustomEvent polyfill https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch (e) {
    const CustomEvent = function (event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };

      const evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(276), __esModule: true };

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(60);
var TAG = __webpack_require__(2)('toStringTag');
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
/* 84 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(119);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 86 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 87 */
/***/ (function(module, exports) {



/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(68);
var call = __webpack_require__(346);
var isArrayIter = __webpack_require__(344);
var anObject = __webpack_require__(67);
var toLength = __webpack_require__(131);
var getIterFn = __webpack_require__(359);
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
/* 90 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__matrix__ = __webpack_require__(399);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vector__ = __webpack_require__(400);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return __WEBPACK_IMPORTED_MODULE_0__matrix__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return __WEBPACK_IMPORTED_MODULE_1__vector__["a"]; });





/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(424), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(425), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 94 */
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
/* 95 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(79);
var call = __webpack_require__(498);
var isArrayIter = __webpack_require__(497);
var anObject = __webpack_require__(46);
var toLength = __webpack_require__(169);
var getIterFn = __webpack_require__(261);
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
/* 97 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(256);
var enumBugKeys = __webpack_require__(160);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 99 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(18).f;
var has = __webpack_require__(47);
var TAG = __webpack_require__(9)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 102 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__ = __webpack_require__(415);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__ = __webpack_require__(413);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform__ = __webpack_require__(81);





const axios = __webpack_require__(371);

const loadedResources = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_map___default.a();

/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

const Resource = {
  loadTexture(texture, timeout = 30000) {
    if (typeof texture === 'string') {
      texture = { src: texture };
    }
    if (!texture.id) {
      texture.id = texture.src;
    }

    const mapKey = texture.id;

    if (!loadedResources.has(mapKey)) {
      return new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a((resolve, reject) => {
        const timer = setTimeout(() => {
          reject(new Error('load img timeout'));
        }, timeout);

        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform__["c" /* loadImage */])(texture.src).then(img => {
          // save image not canvas for svg preserveAspectRatio
          resolve({ img, texture, fromCache: false });
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
    }
    return {
      img: loadedResources.get(mapKey),
      texture,
      fromCache: true
    };
  },
  /**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  async loadFrames(src, frameData) {
    if (typeof frameData === 'string') {
      frameData = await axios.get(frameData);
      frameData = frameData.data;
    }

    const texture = await this.loadTexture(src);
    const frames = frameData.frames;

    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default()(frames).forEach(([key, frame]) => {
      const { w, h } = frame.sourceSize;

      const canvas = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform__["d" /* createCanvas */])(w, h),
            srcRect = frame.frame,
            rect = frame.spriteSourceSize,
            context = canvas.getContext('2d');

      const rotated = frame.rotated;

      context.save();

      if (rotated) {
        context.translate(0, h);
        context.rotate(-0.5 * Math.PI);

        const tmp = rect.y;
        rect.y = rect.x;
        rect.x = h - srcRect.h - tmp;

        context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.h, srcRect.w, rect.x, rect.y, rect.h, rect.w);
      } else {
        context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.w, srcRect.h, rect.x, rect.y, rect.w, rect.h);
      }

      context.restore();

      loadedResources.set(key, canvas);
    });

    return texture;
  }
};

/* harmony default export */ __webpack_exports__["a"] = (Resource);

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(275), __esModule: true };

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(284), __esModule: true };

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 107 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var document = __webpack_require__(4).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 109 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(60);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(84);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(195);
var hide = __webpack_require__(26);
var has = __webpack_require__(37);
var Iterators = __webpack_require__(48);
var $iterCreate = __webpack_require__(295);
var setToStringTag = __webpack_require__(64);
var getPrototypeOf = __webpack_require__(299);
var ITERATOR = __webpack_require__(2)('iterator');
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
  var $default = (!BUGGY && $native) || getMethod(DEFAULT);
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(86)('meta');
var isObject = __webpack_require__(15);
var has = __webpack_require__(37);
var setDesc = __webpack_require__(11).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(36)(function () {
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(59);

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
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(19);
var dPs = __webpack_require__(188);
var enumBugKeys = __webpack_require__(109);
var IE_PROTO = __webpack_require__(117)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(108)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(181).appendChild(iframe);
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
/* 115 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(26);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(118)('keys');
var uid = __webpack_require__(86);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 119 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(15);
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
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var LIBRARY = __webpack_require__(84);
var wksExt = __webpack_require__(201);
var defineProperty = __webpack_require__(11).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(83);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(48);
module.exports = __webpack_require__(0).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 124 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 125 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(210);
var $export = __webpack_require__(52);
var redefine = __webpack_require__(352);
var hide = __webpack_require__(39);
var Iterators = __webpack_require__(70);
var $iterCreate = __webpack_require__(347);
var setToStringTag = __webpack_require__(127);
var getPrototypeOf = __webpack_require__(349);
var ITERATOR = __webpack_require__(20)('iterator');
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(41).f;
var has = __webpack_require__(69);
var TAG = __webpack_require__(20)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(215)('keys');
var uid = __webpack_require__(132);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 129 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(208);
var defined = __webpack_require__(125);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(129);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 132 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(8);
var normalizeHeaderName = __webpack_require__(386);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(218);
  } else if (typeof process !== 'undefined') {
    // For node use HTTP adapter
    adapter = __webpack_require__(218);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Content-Type');
    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data)) {
      setContentTypeIfUnset(headers, 'application/json;charset=utf-8');
      return JSON.stringify(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    /*eslint no-param-reassign:0*/
    if (typeof data === 'string') {
      try {
        data = JSON.parse(data);
      } catch (e) { /* Ignore */ }
    }
    return data;
  }],

  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156)))

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseNode; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol__);



const _eventHandlers = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('eventHandlers'),
      _collisionState = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('collisionState'),
      _data = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('data');

let BaseNode = class BaseNode {
  constructor() {
    this[_eventHandlers] = {};
    this[_data] = {};
  }
  get dataset() {
    return this[_data];
  }
  data(props, val) {
    if (typeof props === 'object') {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(props).forEach(([prop, value]) => {
        this.data(prop, value);
      });
      return this;
    } else if (typeof props === 'string') {
      if (val !== undefined) {
        if (typeof val === 'function') {
          val = val(this[_data][props]);
        }
        if (val && typeof val.then === 'function') {
          return val.then(res => {
            this[_data][props] = res;
          });
        }
        this[_data][props] = val;
        return this;
      }
      return this[_data][props];
    }
    return this[_data];
  }
  getEventHandlers(type) {
    return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
  }
  on(type, handler) {
    if (Array.isArray(type)) {
      type.forEach(t => this.on(t, handler));
    } else {
      this[_eventHandlers][type] = this[_eventHandlers][type] || [];
      this[_eventHandlers][type].push(handler);
    }
    return this;
  }
  off(type, handler) {
    if (Array.isArray(type)) {
      type.forEach(t => this.off(t, handler));
    } else if (handler && this[_eventHandlers][type]) {
      const idx = this[_eventHandlers][type].indexOf(handler);

      if (idx >= 0) {
        this[_eventHandlers][type].splice(idx, 1);
      }
    } else {
      delete this[_eventHandlers][type];
    }
    return this;
  }
  // d3-friendly
  addEventListener(type, handler) {
    return this.on(type, handler);
  }
  removeEventListener(type, handler) {
    return this.off(type, handler);
  }
  pointCollision(evt) {
    throw Error('you mast override this method');
  }
  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }
    if (!evt.stopDispatch) {
      evt.stopDispatch = () => {
        evt.terminated = true;
      };
    }
    if (evt.type !== type) {
      if (evt.type) {
        evt.originalType = evt.type;
      }
      evt.type = type;
    }

    const isCollision = collisionState || this.pointCollision(evt);

    if (!evt.terminated && isCollision) {
      evt.target = this;

      const handlers = this[_eventHandlers][type];
      if (handlers) {
        handlers.forEach(handler => handler.call(this, evt));
      }

      if (type === 'mousemove') {
        if (!this[_collisionState]) {
          const _evt = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, evt);
          _evt.type = 'mouseenter';
          _evt.terminated = false;

          this.dispatchEvent('mouseenter', _evt, true);
        }
        this[_collisionState] = true;
      }
    } else if (type === 'mousemove') {
      if (this[_collisionState]) {
        const _evt = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, evt);
        _evt.type = 'mouseleave';
        _evt.target = this;
        _evt.terminated = false;

        this.dispatchEvent('mouseleave', _evt, true);
      }
      this[_collisionState] = false;
    }

    return isCollision;
  }
  // called when layer appendChild
  connect(parent, zOrder = 0) {
    if (this.parent) {
      // throw new Error('This node belongs to another parent node! Remove it first...')
      this.disconnect(this.parent);
    }

    Object.defineProperty(this, 'zOrder', {
      value: zOrder,
      writable: false,
      configurable: true
    });

    Object.defineProperty(this, 'parent', {
      get: () => parent,
      configurable: true
    });

    const handlers = this[_eventHandlers].append;
    if (handlers && handlers.length) {
      this.dispatchEvent('append', {
        parent,
        zOrder
      }, true, true);
    }

    return this;
  }

  // override to recycling resources
  disconnect(parent) {
    if (!this.parent || parent !== this.parent) {
      throw new Error('Invalid node to disconnect');
    }

    const zOrder = this.zOrder;
    delete this.zOrder;

    const handlers = this[_eventHandlers].remove;
    if (handlers && handlers.length) {
      this.dispatchEvent('remove', {
        parent,
        zOrder
      }, true, true);
    }

    delete this.parent;

    return this;
  }
};


/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprite_math__ = __webpack_require__(404);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_sprite_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_sprite_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__platform__ = __webpack_require__(411);


const parse = __webpack_require__(410);
const abs = __webpack_require__(408);
const normalize = __webpack_require__(229);
const isSvgPath = __webpack_require__(409);



const _path = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('path');
const _bounds = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('bounds');
const _savedPaths = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('savedPaths');
const _renderProps = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('renderProps');
const _beginPath = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('beginPath');

let SvgPath = class SvgPath {
  constructor(d) {
    if (!isSvgPath(d)) {
      throw new Error('Not an SVG path!');
    }

    const path = normalize(abs(parse(d)));

    this[_path] = path;

    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }
  save() {
    this[_savedPaths].push({ path: this[_path],
      bounds: this[_bounds],
      renderProps: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, this[_renderProps]) });
    return this;
  }
  restore() {
    if (this[_savedPaths].length) {
      const { path, bounds, renderProps } = this[_savedPaths].pop();
      this[_path] = path;
      this[_bounds] = bounds;
      this[_renderProps] = renderProps;
    }
    return this;
  }
  get bounds() {
    if (!this[_bounds]) {
      const path = this[_path];
      this[_bounds] = [0, 0, 0, 0];
      if (path.length) {
        const bounds = [Infinity, Infinity, -Infinity, -Infinity];

        for (let i = 0, l = path.length; i < l; i++) {
          const points = path[i].slice(1);

          for (let j = 0; j < points.length; j += 2) {
            if (points[j + 0] < bounds[0]) bounds[0] = points[j + 0];
            if (points[j + 1] < bounds[1]) bounds[1] = points[j + 1];
            if (points[j + 0] > bounds[2]) bounds[2] = points[j + 0];
            if (points[j + 1] > bounds[3]) bounds[3] = points[j + 1];
          }
        }
        this[_bounds] = bounds;
      }
    }
    return this[_bounds];
  }
  get size() {
    const bounds = this.bounds;
    return [bounds[2] - bounds[0], bounds[3] - bounds[1]];
  }
  get center() {
    const [x0, y0, x1, y1] = this.bounds;
    return [(x0 + x1) / 2, (y0 + y1) / 2];
  }
  get d() {
    return this[_path].map(p => {
      const [c, ...points] = p;
      return c + points.join();
    }).join('');
  }
  get path() {
    return this[_path];
  }
  isPointInPath(x, y) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform__["a" /* isPointInPath */])(this, x, y);
  }
  getPointAtLength(len) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform__["b" /* getPointAtLength */])(this.d, len);
  }
  getTotalLength() {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__platform__["c" /* getTotalLength */])(this.d);
  }
  transform(...args) {
    this[_bounds] = null;
    const m = new __WEBPACK_IMPORTED_MODULE_2_sprite_math__["Matrix"](args);
    const commands = this[_path];
    this[_path] = commands.map(c => {
      const [cmd, ...args] = c;
      const transformed = [cmd];
      for (let i = 0; i < args.length; i += 2) {
        const x0 = args[i],
              y0 = args[i + 1];
        const [x, y] = m.transformPoint(x0, y0);
        transformed.push(x, y);
      }
      return transformed;
    });
    return this;
  }
  translate(x, y) {
    const m = new __WEBPACK_IMPORTED_MODULE_2_sprite_math__["Matrix"]().translate(x, y);
    return this.transform(...m.m);
  }
  rotate(deg) {
    const m = new __WEBPACK_IMPORTED_MODULE_2_sprite_math__["Matrix"]().rotate(deg);
    return this.transform(...m.m);
  }
  scale(sx, sy) {
    if (sy == null) sy = sx;
    const m = new __WEBPACK_IMPORTED_MODULE_2_sprite_math__["Matrix"]().scale(sx, sy);
    return this.transform(...m.m);
  }
  skew(degX, degY) {
    const m = new __WEBPACK_IMPORTED_MODULE_2_sprite_math__["Matrix"]().skew(degX, degY);
    return this.transform(...m.m);
  }
  trim() {
    const [x, y] = this.bounds;
    this.translate(-x, -y);
    return this;
  }
  beginPath() {
    this[_beginPath] = true;
    return this;
  }
  to(context) {
    const commands = this[_path];
    const renderProps = this[_renderProps];
    if (commands.length) {
      if (this[_beginPath]) {
        context.beginPath();
      }
      commands.forEach(c => {
        const [cmd, ...args] = c;
        if (cmd === 'M') {
          context.moveTo(...args);
        } else {
          context.bezierCurveTo(...args);
        }
      });
    }
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(context, renderProps);
    return {
      stroke() {
        context.stroke();
        return this;
      },
      fill() {
        context.fill();
        return this;
      }
    };
  }
  strokeStyle(value) {
    this[_renderProps].strokeStyle = value;
    return this;
  }
  fillStyle(value) {
    this[_renderProps].fillStyle = value;
    return this;
  }
  lineWidth(value) {
    this[_renderProps].lineWidth = value;
    return this;
  }
  lineCap(value) {
    this[_renderProps].lineCap = value;
    return this;
  }
  lineJoin(value) {
    this[_renderProps].lineJoin = value;
    return this;
  }
};


module.exports = SvgPath;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(469)(module)))

/***/ }),
/* 136 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(73);
var TAG = __webpack_require__(7)('toStringTag');
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
/* 138 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
var document = __webpack_require__(6).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 140 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(73);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(93);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(241);
var hide = __webpack_require__(30);
var has = __webpack_require__(45);
var Iterators = __webpack_require__(75);
var $iterCreate = __webpack_require__(439);
var setToStringTag = __webpack_require__(78);
var getPrototypeOf = __webpack_require__(445);
var ITERATOR = __webpack_require__(7)('iterator');
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
      if (!LIBRARY && !has(IteratorPrototype, ITERATOR)) hide(IteratorPrototype, ITERATOR, returnThis);
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
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(95)('meta');
var isObject = __webpack_require__(22);
var has = __webpack_require__(45);
var setDesc = __webpack_require__(23).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(44)(function () {
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
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(72);

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
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(29);
var dPs = __webpack_require__(443);
var enumBugKeys = __webpack_require__(140);
var IE_PROTO = __webpack_require__(148)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(139)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(231).appendChild(iframe);
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
/* 146 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(30);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(149)('keys');
var uid = __webpack_require__(95);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 149 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 150 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(150);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(138);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(22);
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
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var core = __webpack_require__(3);
var LIBRARY = __webpack_require__(93);
var wksExt = __webpack_require__(246);
var defineProperty = __webpack_require__(23).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 155 */
/***/ (function(module, exports) {



/***/ }),
/* 156 */
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
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(158);
var TAG = __webpack_require__(9)('toStringTag');
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
/* 158 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 159 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 160 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(158);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(97);
var $export = __webpack_require__(32);
var redefine = __webpack_require__(258);
var hide = __webpack_require__(33);
var Iterators = __webpack_require__(55);
var $iterCreate = __webpack_require__(499);
var setToStringTag = __webpack_require__(101);
var getPrototypeOf = __webpack_require__(504);
var ITERATOR = __webpack_require__(9)('iterator');
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
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(102)('meta');
var isObject = __webpack_require__(34);
var has = __webpack_require__(47);
var setDesc = __webpack_require__(18).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(54)(function () {
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
/* 164 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(46);
var dPs = __webpack_require__(501);
var enumBugKeys = __webpack_require__(160);
var IE_PROTO = __webpack_require__(166)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(251)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(496).appendChild(iframe);
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
/* 165 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 166 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(167)('keys');
var uid = __webpack_require__(102);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);
var global = __webpack_require__(17);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(97) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 168 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(168);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(159);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(34);
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
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(17);
var core = __webpack_require__(13);
var LIBRARY = __webpack_require__(97);
var wksExt = __webpack_require__(260);
var defineProperty = __webpack_require__(18).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(508)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(162)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 174 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(512);
var global = __webpack_require__(17);
var hide = __webpack_require__(33);
var Iterators = __webpack_require__(55);
var TO_STRING_TAG = __webpack_require__(9)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprite_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform__ = __webpack_require__(81);




const _resolution = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default()('resolution');

let ExLayer = class ExLayer extends __WEBPACK_IMPORTED_MODULE_1_sprite_core__["n" /* Layer */] {
  constructor(id, opts = {}) {
    if (typeof id === 'object') {
      opts = id;
      id = opts.id || `id_${Math.random().toString().slice(2, 10)}`;
    }
    let { context,
      resolution,
      handleEvent = true,
      evaluateFPS = false,
      renderMode = 'repaintAll',
      autoRender = true } = opts;

    context = context || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__platform__["d" /* createCanvas */])().getContext('2d');
    const canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';

    super({ context, handleEvent, evaluateFPS, renderMode, autoRender });

    if (resolution) {
      this.resolution = resolution;
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0];
    }
  }
  get id() {
    return this.canvas.dataset.layerId;
  }
  get resolution() {
    return this[_resolution];
  }
  get viewport() {
    const canvas = this.canvas;
    if (canvas && canvas.clientWidth) {
      return [canvas.clientWidth, canvas.clientHeight];
    }
    if (this.parent) {
      return this.parent.layerViewport;
    }
    const [width, height] = this[_resolution];
    return [width, height];
  }
  get offset() {
    return [this.resolution[2], this.resolution[3]];
  }
  get center() {
    const [width, height] = this.resolution;
    return [width / 2, height / 2];
  }
  pointCollision(evt) {
    if (this.outputContext.canvas) {
      let layerX = evt.layerX | 0,
          layerY = evt.layerY | 0;
      const [width, height, offsetLeft, offsetTop] = this.resolution;

      layerX += offsetLeft;
      layerY += offsetTop;

      if (layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }
      return false;
    }
    /* istanbul ignore next  */
    return true;
  }
  set resolution(resolution) {
    const [width, height, offsetLeft, offsetTop] = resolution;
    const outputCanvas = this.outputContext.canvas;
    outputCanvas.width = width;
    outputCanvas.height = height;
    this.outputContext.clearRect(0, 0, width, height);

    if (offsetLeft || offsetTop) {
      this.outputContext.translate(offsetLeft, offsetTop);
    }

    this.children.forEach(child => {
      delete child.lastRenderBox;
      child.forceUpdate();
    });

    this[_resolution] = resolution;
    this.dispatchEvent('resolutionChange', { target: this }, true, true);
  }
  clearContext(context = this.outputContext) {
    if (context.canvas) {
      const resolution = this.resolution,
            offsetTop = resolution[3],
            offsetLeft = resolution[2];

      context.clearRect(-offsetLeft, -offsetTop, context.canvas.width, context.canvas.height);
    }
  }

  isNodeVisible(sprite) {
    if (!super.isNodeVisible(sprite)) return false;
    const [width, height, offsetLeft, offsetTop] = this.resolution;

    // calculating renderBox is super slow...
    // const box = sprite.renderBox
    const [x, y] = sprite.attr('pos'),
          [w, h] = sprite.offsetSize;
    const r = Math.max(w, h);
    const box = [x - r, y - r, x + r, y + r];
    if (box[0] > width - offsetLeft || box[1] > height - offsetTop || box[2] < 0 || box[3] < 0) {
      return false;
    }
    return true;
  }

  toLocalPos(x, y) {
    const resolution = this.resolution,
          viewport = this.viewport;

    x = x * resolution[0] / viewport[0] - resolution[2];
    y = y * resolution[1] / viewport[1] - resolution[3];

    return [x, y];
  }
  toGlobalPos(x, y) {
    const resolution = this.resolution,
          viewport = this.viewport;

    x = x * viewport[0] / resolution[0] + resolution[2];
    y = y * viewport[1] / resolution[1] + resolution[3];

    return [x, y];
  }

  async takeSnapshot() {
    await this.prepareRender();
    const snapshotCanvas = this.canvas.cloneNode(true),
          context = snapshotCanvas.getContext('2d');

    context.drawImage(this.canvas, 0, 0);
    const children = this.children.map(child => child.serialize());
    return { context, children };
  }
  putSnapshot(snapshot) {
    const outputContext = this.outputContext;

    this.clearContext(outputContext);
    outputContext.drawImage(snapshot.context.canvas, 0, 0);

    this.clearUpdate();

    snapshot.children.forEach(child => {
      const node = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_core__["i" /* createNode */])(child.nodeType);
      if (child.id) {
        node.id = child.id;
      }
      node.attr(JSON.parse(child.attrs));
      this.appendChild(node, false);
    });

    for (let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.dispatchEvent('update', {
        target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
      }, true);

      child.lastRenderBox = child.renderBox;
    }

    return this.children;
  }
  get zIndex() {
    return this.canvas.style.zIndex;
  }
  set zIndex(zIndex) {
    this.canvas.style.zIndex = zIndex;
  }
};


/* harmony default export */ __webpack_exports__["a"] = (ExLayer);

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(416);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sprite_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__resource__ = __webpack_require__(103);





var _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(389);




const attr = __WEBPACK_IMPORTED_MODULE_4_sprite_core__["a" /* utils */].attr;
const _mapTextures = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('mapTextures'),
      _loadTexturePassport = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('loadTexturePassport');

let ResAttr = (_class = class ResAttr extends __WEBPACK_IMPORTED_MODULE_4_sprite_core__["m" /* Sprite */].Attr {
  set textures(textures) {
    if (!Array.isArray(textures)) {
      textures = [textures];
    }

    textures = textures.map(texture => {
      if (typeof texture === 'string') {
        texture = { src: texture };
      } else if (!texture.src && !texture.id && !texture.image) {
        texture = { image: texture };
      }

      return texture;
    });

    this.set('textures', textures);
    this.loadTextures(textures);
  }

  [_mapTextures](textures) {
    let clearCache = false;
    const res = textures.map(({ img, texture, fromCache }) => {
      if (!fromCache) clearCache = true;
      return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, texture, { image: img });
    });
    if (clearCache) {
      this.subject.forceUpdate(true);
    }
    super.loadTextures(res);
  }

  loadTextures(textures) {
    // adaptive textures
    const passport = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('passport');
    this[_loadTexturePassport] = passport;
    let hasPromise = false;
    const tasks = textures.map(texture => {
      if (texture.image) {
        return { img: texture.image, texture };
      }

      const loadingTexture = __WEBPACK_IMPORTED_MODULE_5__resource__["a" /* default */].loadTexture(texture);
      if (loadingTexture instanceof __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a) {
        hasPromise = true;
      }
      return loadingTexture;
    });

    if (hasPromise) {
      __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.all(tasks).then(res => {
        if (this[_loadTexturePassport] === passport) {
          // prevent multicall loadTextures
          this[_mapTextures](res);
        }
      });
    } else {
      // if preload image, calculate the size of sprite synchronously
      this[_mapTextures](tasks);
    }
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'textures', [attr], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'textures'), _class.prototype)), _class);
let ResSprite = (_temp = _class2 = class ResSprite extends __WEBPACK_IMPORTED_MODULE_4_sprite_core__["m" /* Sprite */] {}, _class2.Attr = ResAttr, _temp);


/* harmony default export */ __webpack_exports__["a"] = (ResSprite);

/***/ }),
/* 177 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(279), __esModule: true };

/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(11).f;
var create = __webpack_require__(114);
var redefineAll = __webpack_require__(116);
var ctx = __webpack_require__(25);
var anInstance = __webpack_require__(106);
var forOf = __webpack_require__(61);
var $iterDefine = __webpack_require__(111);
var step = __webpack_require__(187);
var setSpecies = __webpack_require__(198);
var DESCRIPTORS = __webpack_require__(10);
var fastKey = __webpack_require__(112).fastKey;
var validate = __webpack_require__(121);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(83);
var from = __webpack_require__(287);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var $export = __webpack_require__(1);
var meta = __webpack_require__(112);
var fails = __webpack_require__(36);
var hide = __webpack_require__(26);
var redefineAll = __webpack_require__(116);
var forOf = __webpack_require__(61);
var anInstance = __webpack_require__(106);
var isObject = __webpack_require__(15);
var setToStringTag = __webpack_require__(64);
var dP = __webpack_require__(11).f;
var each = __webpack_require__(289)(0);
var DESCRIPTORS = __webpack_require__(10);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(4).document;
module.exports = document && document.documentElement;


/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(36)(function () {
  return Object.defineProperty(__webpack_require__(108)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 183 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(48);
var ITERATOR = __webpack_require__(2)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 184 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(60);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 185 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(19);
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
/* 186 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(2)('iterator');
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
/* 187 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 188 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var anObject = __webpack_require__(19);
var getKeys = __webpack_require__(49);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 189 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(62);
var createDesc = __webpack_require__(63);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(120);
var has = __webpack_require__(37);
var IE8_DOM_DEFINE = __webpack_require__(182);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 190 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(191);
var hiddenKeys = __webpack_require__(109).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 191 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(37);
var toIObject = __webpack_require__(27);
var arrayIndexOf = __webpack_require__(288)(false);
var IE_PROTO = __webpack_require__(117)('IE_PROTO');

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
/* 192 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var fails = __webpack_require__(36);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 193 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 194 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var isObject = __webpack_require__(15);
var newPromiseCapability = __webpack_require__(113);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 195 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(26);


/***/ }),
/* 196 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);
var aFunction = __webpack_require__(59);
var ctx = __webpack_require__(25);
var forOf = __webpack_require__(61);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 197 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(1);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 198 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(4);
var core = __webpack_require__(0);
var dP = __webpack_require__(11);
var DESCRIPTORS = __webpack_require__(10);
var SPECIES = __webpack_require__(2)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 199 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(19);
var aFunction = __webpack_require__(59);
var SPECIES = __webpack_require__(2)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 200 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(25);
var invoke = __webpack_require__(294);
var html = __webpack_require__(181);
var cel = __webpack_require__(108);
var global = __webpack_require__(4);
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
  if (__webpack_require__(60)(process) == 'process') {
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
/* 201 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);


/***/ }),
/* 202 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var _toConsumableArray2 = __webpack_require__(271);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _symbol = __webpack_require__(14);

var _symbol2 = _interopRequireDefault(_symbol);

var _map = __webpack_require__(82);

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = __webpack_require__(270);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-undef */
function nowtime() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  } else if (typeof process !== 'undefined' && process.hrtime) {
    var _process$hrtime = process.hrtime(),
        _process$hrtime2 = (0, _slicedToArray3.default)(_process$hrtime, 2),
        s = _process$hrtime2[0],
        ns = _process$hrtime2[1];

    return s * 1e3 + ns * 1e-6;
  }
  return Date.now ? Date.now() : new Date().getTime();
}
/* eslint-enable no-undef */

var _requestAnimationFrame = void 0,
    _cancelAnimationFrame = void 0;

if (typeof requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function _requestAnimationFrame(fn) {
    return setTimeout(function () {
      fn(nowtime());
    }, 16);
  };
  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    return clearTimeout(id);
  };
} else {
  _requestAnimationFrame = requestAnimationFrame;
  _cancelAnimationFrame = cancelAnimationFrame;
}

var steps = new _map2.default();
var timerId = void 0;

var FastAnimationFrame = {
  requestAnimationFrame: function requestAnimationFrame(step) {
    var id = (0, _symbol2.default)('requestId');
    steps.set(id, step);

    if (timerId == null) {
      timerId = _requestAnimationFrame(function (t) {
        timerId = null;[].concat((0, _toConsumableArray3.default)(steps)).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
              id = _ref2[0],
              callback = _ref2[1];

          callback(t);
          steps.delete(id);
        });
      });
    }
    return id;
  },
  cancelAnimationFrame: function cancelAnimationFrame(id) {
    steps.delete(id);
    if (!steps.size && timerId) {
      _cancelAnimationFrame(timerId);
      timerId = null;
    }
  }
};

module.exports = FastAnimationFrame;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156)))

/***/ }),
/* 203 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 204 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 205 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(124);
var TAG = __webpack_require__(20)('toStringTag');
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
/* 206 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(40);
var document = __webpack_require__(28).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 207 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 208 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(124);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 209 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 210 */
/***/ (function(module, exports) {

module.exports = true;


/***/ }),
/* 211 */
/***/ (function(module, exports, __webpack_require__) {

var META = __webpack_require__(132)('meta');
var isObject = __webpack_require__(40);
var has = __webpack_require__(69);
var setDesc = __webpack_require__(41).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(88)(function () {
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
/* 212 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(67);
var dPs = __webpack_require__(348);
var enumBugKeys = __webpack_require__(207);
var IE_PROTO = __webpack_require__(128)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(206)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(342).appendChild(iframe);
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
/* 213 */
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
/* 214 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(39);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 215 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(51);
var global = __webpack_require__(28);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(210) ? 'pure' : 'global',
  copyright: '© 2018 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 216 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(125);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 217 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(40);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(8);
var settle = __webpack_require__(378);
var buildURL = __webpack_require__(381);
var parseHeaders = __webpack_require__(387);
var isURLSameOrigin = __webpack_require__(385);
var createError = __webpack_require__(221);
var btoa = (typeof window !== 'undefined' && window.btoa && window.btoa.bind(window)) || __webpack_require__(380);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();
    var loadEvent = 'onreadystatechange';
    var xDomain = false;

    // For IE 8/9 CORS support
    // Only supports POST and GET calls and doesn't returns the response headers.
    // DON'T do this for testing b/c XMLHttpRequest is mocked, not XDomainRequest.
    if (process.env.NODE_ENV !== 'test' &&
        typeof window !== 'undefined' &&
        window.XDomainRequest && !('withCredentials' in request) &&
        !isURLSameOrigin(config.url)) {
      request = new window.XDomainRequest();
      loadEvent = 'onload';
      xDomain = true;
      request.onprogress = function handleProgress() {};
      request.ontimeout = function handleTimeout() {};
    }

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password || '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    request.open(config.method.toUpperCase(), buildURL(config.url, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    // Listen for ready state
    request[loadEvent] = function handleLoad() {
      if (!request || (request.readyState !== 4 && !xDomain)) {
        return;
      }

      // The request errored out and we didn't get a response, this will be
      // handled by onerror instead
      // With one exception: request that using file: protocol, most browsers
      // will return status as 0 even though it's a successful request
      if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
        return;
      }

      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !config.responseType || config.responseType === 'text' ? request.responseText : request.response;
      var response = {
        data: responseData,
        // IE sends 1223 instead of 204 (https://github.com/mzabriskie/axios/issues/201)
        status: request.status === 1223 ? 204 : request.status,
        statusText: request.status === 1223 ? 'No Content' : request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      reject(createError('timeout of ' + config.timeout + 'ms exceeded', config, 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      var cookies = __webpack_require__(383);

      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(config.url)) && config.xsrfCookieName ?
          cookies.read(config.xsrfCookieName) :
          undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (config.withCredentials) {
      request.withCredentials = true;
    }

    // Add responseType to request if needed
    if (config.responseType) {
      try {
        request.responseType = config.responseType;
      } catch (e) {
        // Expected DOMException thrown by browsers not compatible XMLHttpRequest Level 2.
        // But, this can be suppressed for 'json' type as it can be parsed by default 'transformResponse' function.
        if (config.responseType !== 'json') {
          throw e;
        }
      }
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (requestData === undefined) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(156)))

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(377);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 223 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Batch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers_render__ = __webpack_require__(53);




const _batch = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('batch');

let Batch = class Batch {
  constructor(layer) {
    this.layer = layer;
    this[_batch] = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a();
    this.cache = null;
  }
  get baseNode() {
    const batchNodes = [...this[_batch]];
    let baseNode = batchNodes[0],
        zOrder = Infinity,
        zIndex = Infinity;

    for (let i = 0; i < batchNodes.length; i++) {
      const node = batchNodes[i];
      if (zIndex > node.zIndex) {
        zIndex = node.zIndex;
        zOrder = node.zOrder;
        baseNode = node;
      } else if (zIndex === node.zIndex && zOrder > node.zOrder) {
        zOrder = node.zOrder;
        baseNode = node;
      }
    }
    return baseNode;
  }
  add(...nodes) {
    nodes.forEach(node => {
      if (!node.layer || node.layer !== this.layer) {
        /* istanbul ignore next  */
        throw new Error('Batch node must append to this layer first!');
      }
      if (node[_batch]) {
        /* istanbul ignore next  */
        throw new Error('Node already batched!');
      }
      const that = this;
      Object.defineProperty(node, 'cache', {
        configurable: true,
        get() {
          return that.cache;
        },
        set(context) {
          if (that.baseNode === this) {
            if (that.cache && context !== that.cache) {
              __WEBPACK_IMPORTED_MODULE_2__helpers_render__["b" /* cacheContextPool */].put(that.cache);
            }
            that.cache = context;
          } else if (context == null) {
            throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
          }
        }
      });
      Object.defineProperty(node, 'cachePriority', {
        configurable: true,
        get() {
          return Infinity;
        }
      });
      node[_batch] = this;
      this[_batch].add(node);
    });
  }
  remove(...nodes) {
    nodes.forEach(node => {
      if (this[_batch].has(node)) {
        delete node[_batch];
        delete node.cache;
        this[_batch].delete(node);
      }
    });
  }
};


/***/ }),
/* 224 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_sprite_utils__ = __webpack_require__(12);

// http://www.runoob.com/cssref/css3-pr-filter.html

/* harmony default export */ __webpack_exports__["a"] = ({
  blur(px) {
    return `blur(${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_utils__["appendUnit"])(px)})`;
  },
  brightness(percent) {
    return `brightness(${percent})`;
  },
  contrast(percent) {
    return `contrast(${percent})`;
  },

  dropShadow([offsetX, offsetY, shadowRadius, color]) {
    return `drop-shadow(${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_utils__["appendUnit"])(offsetX)} ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_utils__["appendUnit"])(offsetY)} ${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_utils__["appendUnit"])(shadowRadius)} ${color})`;
  },

  grayscale(percent) {
    return `grayscale(${percent})`;
  },
  hueRotate(value) {
    return `hue-rotate(${__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_sprite_utils__["appendUnit"])(value, 'deg')})`;
  },
  invert(percent) {
    return `invert(${percent})`;
  },
  opacity(percent) {
    return `opacity(${percent})`;
  },
  saturate(percent) {
    return `saturate(${percent})`;
  },
  sepia(percent) {
    return `sepia(${percent})`;
  },
  url(path) {
    return `url(${path})`;
  },
  compile(filter = {}) {
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default()(filter).reduce((accumulator, curVal) => {
      return accumulator.concat(this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }
});

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Group; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__basesprite__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nodetype__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__helpers_path__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__helpers_group__ = __webpack_require__(226);




var _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(57);






const _children = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('children'),
      _zOrder = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('zOrder'),
      _layoutTag = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_symbol___default()('layoutTag');

let GroupAttr = (_class = class GroupAttr extends __WEBPACK_IMPORTED_MODULE_3__basesprite__["a" /* default */].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      clip: null,
      flexDirection: 'row',
      alignItems: 'stretch',
      justifyContent: 'flex-start',
      flexWrap: 'nowrap',
      alignContent: 'stretch'
    });
  }

  set clip(val) {
    this.clearCache();
    if (val) {
      val = typeof val === 'string' ? { d: val } : val;
      this.subject.svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__helpers_path__["a" /* createSvgPath */])(val);
      this.set('clip', val);
    } else {
      this.subject.svg = null;
      this.set('clip', null);
    }
  }

  // flexbox attributes

  set flexDirection(value) {
    this.clearCache();
    this.subject.clearLayout();
    this.set('flexDirection', value);
  }

  set flexWrap(value) {
    this.clearCache();
    this.subject.clearLayout();
    this.set('flexWrap', value);
  }

  set justifyContent(value) {
    this.clearCache();
    this.subject.clearLayout();
    this.set('justifyContent', value);
  }

  set alignItems(value) {
    this.clearCache();
    this.subject.clearLayout();
    this.set('alignItems', value);
  }

  set alignContent(value) {
    this.clearCache();
    this.subject.clearLayout();
    this.set('alignContent', value);
  }

  set width(value) {
    this.subject.clearLayout();
    super.width = value;
  }

  set height(value) {
    this.subject.clearLayout();
    super.height = value;
  }

  set layoutWidth(value) {
    this.subject.clearLayout();
    super.layoutWidth = value;
  }

  set layoutHeight(value) {
    this.subject.clearLayout();
    super.layoutHeight = value;
  }

  set display(value) {
    this.subject.clearLayout();
    super.display = value;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'clip', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'clip'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexDirection', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'flexDirection'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexWrap', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'flexWrap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'justifyContent', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'justifyContent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignItems', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'alignItems'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignContent', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'alignContent'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [__WEBPACK_IMPORTED_MODULE_5_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'display'), _class.prototype)), _class);
let Group = (_temp = _class2 = class Group extends __WEBPACK_IMPORTED_MODULE_3__basesprite__["a" /* default */] {

  constructor(attr = {}) {
    super(attr);
    this[_children] = [];
    this[_zOrder] = 0;
    this[_layoutTag] = false;
  }
  get isVirtual() {
    if (this.attr('display') === 'flex') return false;
    const { width: borderWidth } = this.attr('border'),
          borderRadius = this.attr('borderRadius'),
          bgcolor = this.attr('bgcolor'),
          { bgcolor: bgGradient } = this.attr('gradients'),
          [width, height] = this.attrSize,
          [anchorX, anchorY] = this.attr('anchor');

    return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient;
  }
  cloneNode(deepCopy) {
    const node = super.cloneNode();
    if (deepCopy) {
      const children = this.children;
      children.forEach(child => {
        const subNode = child.cloneNode(deepCopy);
        node.append(subNode);
      });
    }
    return node;
  }
  get children() {
    return this[_children];
  }
  update(child) {
    child.isDirty = true;
    this.forceUpdate(true);
  }
  pointCollision(evt) {
    if (super.pointCollision(evt) || this.isVirtual) {
      if (this.svg) {
        const { offsetX, offsetY } = evt;
        const rect = this.originalRect;
        evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
      }
      return true;
    }
    return false;
  }
  get contentSize() {
    if (this.isVirtual) return [0, 0];
    let [width, height] = this.attrSize;

    if (width === '' || height === '') {
      if (this.attr('clip')) {
        const svg = this.svg;
        const bounds = svg.bounds;
        width = width || bounds[2];
        height = height || bounds[3];
      } else {
        let right, bottom;

        right = 0;
        bottom = 0;
        this[_children].forEach(sprite => {
          const renderBox = sprite.renderBox;
          right = Math.max(right, renderBox[2]);
          bottom = Math.max(bottom, renderBox[3]);
        });
        width = width || right;
        height = height || bottom;
      }
    }
    return [width, height];
  }
  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }
    if (!swallow && !evt.terminated && type !== 'mouseenter' && type !== 'mouseleave') {
      const isCollision = collisionState || this.pointCollision(evt);
      if (isCollision) {
        const parentX = evt.offsetX - this.originalRect[0];
        const parentY = evt.offsetY - this.originalRect[1];
        // console.log(evt.parentX, evt.parentY)

        const _evt = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()({}, evt);
        _evt.parentX = parentX;
        _evt.parentY = parentY;

        const sprites = this[_children].slice(0).reverse();

        const targetSprites = [];

        for (let i = 0; i < sprites.length && evt.isInClip !== false; i++) {
          const sprite = sprites[i];
          const hit = sprite.dispatchEvent(type, _evt, collisionState, swallow);
          if (hit) {
            targetSprites.push(sprite);
          }
          if (evt.terminated && !evt.type.startsWith('mouse')) {
            break;
          }
        }

        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
        evt.terminated = false;
        return super.dispatchEvent(type, evt, isCollision, swallow);
      }
    }

    return super.dispatchEvent(type, evt, collisionState, swallow);
  }
  relayout() {
    // console.log(this.children);

    const items = this.children.filter(child => {
      if (child.hasLayout) {
        child.attr('layoutWidth', null);
        child.attr('layoutHeight', null);
      }
      if (child.relayout) {
        child.relayout();
      }
      return child.hasLayout;
    });

    items.sort((a, b) => {
      return (a.attributes.order || 0) - (b.attributes.order || 0);
    });

    const style = this.attributes;

    let mainSize = 'width',
        mainStart = 'x',
        mainEnd = 'layoutRight',
        mainSign = +1,
        mainBase = 0,
        crossSize = 'height',
        crossStart = 'y',
        crossEnd = 'layoutBottom',
        crossSign,
        crossBase;

    const flexDirection = style.flexDirection;

    if (flexDirection === 'row-reverse') {
      mainSize = 'width';
      mainStart = 'layoutRight';
      mainEnd = 'x';
      mainSign = -1;
      mainBase = style.width;

      crossSize = 'height';
      crossStart = 'y';
      crossEnd = 'layoutBottom';
    } else if (flexDirection === 'column') {
      mainSize = 'height';
      mainStart = 'y';
      mainEnd = 'layoutBottom';
      mainSign = +1;
      mainBase = 0;

      crossSize = 'width';
      crossStart = 'x';
      crossEnd = 'layoutRight';
    } else if (flexDirection === 'column-reverse') {
      mainSize = 'height';
      mainStart = 'layoutBottom';
      mainEnd = 'y';
      mainSign = -1;
      mainBase = style.height;

      crossSize = 'width';
      crossStart = 'x';
      crossEnd = 'layoutRight';
    }

    if (style.flexWrap === 'wrap-reverse') {
      [crossStart, crossEnd] = [crossEnd, crossStart];
      crossSign = -1;
    } else {
      crossBase = 0;
      crossSign = 1;
    }

    function isAutoSize(size) {
      return size == null || size === '';
    }

    const isAutoMainSize = isAutoSize(style[mainSize]);

    let groupMainSize;

    if (isAutoMainSize) {
      // auto sizing
      let maxSize = 0;
      for (let i = 0; i < items.length; i++) {
        const item = items[i],
              [width, height] = item.offsetSize;
        const size = mainSize === 'width' ? width : height;
        maxSize += size;
      }
      if (flexDirection === 'row-reverse' || flexDirection === 'column-reverse') {
        mainBase = maxSize;
      }
      groupMainSize = maxSize;
    } else {
      groupMainSize = mainSize === 'width' ? this.offsetSize[0] : this.offsetSize[1];
    }

    let flexLine = [];
    const flexLines = [flexLine];

    let mainSpace = groupMainSize,
        crossSpace = 0;

    function setBoxLayoutSize(item, axis, size) {
      const borderWidth = item.attr('border').width,
            [paddingTop, paddingRight, paddingBottom, paddingLeft] = item.attr('padding');

      if (axis === 'width') {
        size = Math.max(0, size - 2 * borderWidth - paddingRight - paddingLeft);
        item.attr({ layoutWidth: size });
      } else if (axis === 'height') {
        size = Math.max(0, size - 2 * borderWidth - paddingTop - paddingBottom);
        item.attr({ layoutHeight: size });
      }
    }
    // collect items into lines

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      const itemStyle = item.attributes;

      let [itemMainSize, itemCrossSize] = item.offsetSize;

      if (mainSize === 'height') [itemMainSize, itemCrossSize] = [itemCrossSize, itemMainSize];

      if (itemStyle.flex !== '') {
        flexLine.push(item);
      } else if (style.flexWrap === 'nowrap' || isAutoMainSize) {
        mainSpace -= itemMainSize;
        crossSpace = Math.max(crossSpace, itemCrossSize);
        flexLine.push(item);
      } else {
        if (itemMainSize > groupMainSize) {
          setBoxLayoutSize(item, mainSize, groupMainSize);
          itemMainSize = groupMainSize;
          itemCrossSize = mainSize === 'width' ? item.offsetSize[1] : item.offsetSize[0];
        }
        if (mainSpace < itemMainSize) {
          flexLine.mainSpace = mainSpace;
          flexLine.crossSpace = crossSpace;
          flexLine = [item];
          flexLines.push(flexLine);
          mainSpace = groupMainSize;
          crossSpace = 0;
        } else {
          flexLine.push(item);
        }
        crossSpace = Math.max(crossSpace, itemCrossSize);
        mainSpace -= itemMainSize;
      }
    }
    flexLine.mainSpace = mainSpace;

    if (style.flexWrap === 'nowrap' || isAutoMainSize) {
      flexLine.crossSpace = !isAutoSize(style[crossSize]) ? style[crossSize] : crossSpace;
    } else {
      flexLine.crossSpace = crossSpace;
    }

    function fixAnchor(item) {
      const [left, top] = item.originalRect;
      if (left) {
        item.attr({ x: x => x - left });
      }
      if (top) {
        item.attr({ y: y => y - top });
      }
    }

    if (mainSpace < 0) {
      // overflow (happens only if container is single line), scale every item
      const scale = groupMainSize / (groupMainSize - mainSpace);
      let currentMain = mainBase;
      for (let i = 0; i < items.length; i++) {
        const item = items[i];
        const itemStyle = item.attributes;
        let boxSize = mainSize === 'width' ? item.offsetSize[0] : item.offsetSize[1];

        if (itemStyle.flex !== '') {
          boxSize = 0;
        }

        boxSize *= scale;

        item.attr(mainStart, currentMain);
        item.attr(mainEnd, currentMain + mainSign * boxSize);
        setBoxLayoutSize(item, mainSize, boxSize);
        currentMain = item.attr(mainEnd);
      }
    } else {
      // process each flex line
      flexLines.forEach(items => {
        const mainSpace = items.mainSpace;
        let flexTotal = 0;
        for (let i = 0; i < items.length; i++) {
          const item = items[i];
          const itemStyle = item.attributes;

          flexTotal += itemStyle.flex === '' ? 0 : parseInt(itemStyle.flex, 10);
        }

        if (flexTotal > 0) {
          // There is flexible flex items
          let currentMain = mainBase;
          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const itemStyle = item.attributes;
            let boxSize = mainSize === 'width' ? item.offsetSize[0] : item.offsetSize[1];

            if (itemStyle.flex !== '') {
              boxSize = mainSpace / flexTotal * parseInt(itemStyle.flex, 10);
            }

            item.attr(mainStart, currentMain);
            item.attr(mainEnd, currentMain + mainSign * boxSize);
            setBoxLayoutSize(item, mainSize, boxSize);
            currentMain = item.attr(mainEnd);
          }
        } else {
          let currentMain = mainBase,
              step = 0;
          // There is *NO* flexible flex items, which means, justifyContent shoud work
          const justifyContent = style.justifyContent;

          if (justifyContent === 'flex-end') {
            currentMain = mainSpace * mainSign + mainBase;
            step = 0;
          } else if (justifyContent === 'center') {
            currentMain = mainSpace / 2 * mainSign + mainBase;
            step = 0;
          } else if (justifyContent === 'space-between') {
            step = mainSpace / (items.length - 1) * mainSign;
            currentMain = mainBase;
          } else if (justifyContent === 'space-around') {
            step = mainSpace / items.length * mainSign;
            currentMain = step / 2 + mainBase;
          }

          for (let i = 0; i < items.length; i++) {
            const item = items[i];
            const boxSize = mainSize === 'width' ? item.offsetSize[0] : item.offsetSize[1];

            item.attr(mainStart, currentMain);
            item.attr(mainEnd, item.attr(mainStart) + mainSign * boxSize);
            setBoxLayoutSize(item, mainSize, boxSize);
            currentMain = item.attr(mainEnd) + step;
          }
        }
      });
    }

    // compute the cross axis sizes
    // align-items, align-self
    let crossSizeValue;
    if (isAutoSize(style[crossSize])) {
      // auto sizing
      crossSpace = 0;
      crossSizeValue = 0;
      for (let i = 0; i < flexLines.length; i++) {
        crossSizeValue += flexLines[i].crossSpace;
      }
      // setBoxSize(this, crossSize, crossSizeValue)
    } else {
      crossSpace = style[crossSize];
      for (let i = 0; i < flexLines.length; i++) {
        crossSpace -= flexLines[i].crossSpace;
      }
    }

    if (style.flexWrap === 'wrap-reverse') {
      crossBase = isAutoSize(style[crossSize]) ? crossSizeValue : style[crossSize];
    } else {
      crossBase = 0;
    }

    let step = 0;
    const alignContent = style.alignContent;

    if (alignContent === 'flex-end') {
      crossBase += crossSign * crossSpace;
    } else if (alignContent === 'center') {
      crossBase += crossSign * crossSpace / 2;
    } else if (alignContent === 'space-between') {
      step = crossSpace / (flexLines.length - 1);
    } else if (alignContent === 'space-around') {
      step = crossSpace / flexLines.length;
      crossBase += crossSign * step / 2;
    }

    flexLines.forEach(items => {
      const lineCrossSize = style.alignContent === 'stretch' ? items.crossSpace + crossSpace / flexLines.length : items.crossSpace;

      for (let i = 0; i < items.length; i++) {
        const item = items[i];

        const align = item.attributes.alignSelf || style.alignItems;

        // if(isAutoSize(item.attr(crossSize))) {
        //   item.attr(crossSize, ((align === 'stretch')) ? lineCrossSize : 0)
        // }

        if (align === 'flex-start') {
          item.attr(crossStart, crossBase);
          item.attr(crossEnd, item.attr(crossStart) + crossSign * item.attr(crossSize));
        }

        if (align === 'flex-end') {
          item.attr(crossEnd, crossBase + crossSign * lineCrossSize);
          item.attr(crossStart, item.attr(crossEnd) - crossSign * item.attr(crossSize));
        }

        if (align === 'center') {
          item.attr(crossStart, crossBase + crossSign * (lineCrossSize - item.attr(crossSize)) / 2);
          item.attr(crossEnd, item.attr(crossStart) + crossSign * item.attr(crossSize));
        }

        if (align === 'stretch') {
          item.attr(crossStart, crossBase);
          item.attr(crossEnd, crossBase + crossSign * (!isAutoSize(item.attr(crossSize)) ? item.attr(crossSize) : lineCrossSize));
          // setBoxLayoutSize(item, crossSize, crossSign * (item.attr(crossEnd) - item.attr(crossStart)))
          const crossAttr = crossSize === 'width' ? 'layoutWidth' : 'layoutHeight';
          item.attr(crossAttr, crossSign * (item.attr(crossEnd) - item.attr(crossStart)));
        }

        fixAnchor(item);
      }
      crossBase += crossSign * (lineCrossSize + step);
    });
  }
  clearLayout() {
    this[_layoutTag] = false;
    let parent = this.parent;
    while (parent) {
      if (parent[_layoutTag]) parent[_layoutTag] = false;
      parent = parent.parent;
    }
  }
  render(t, drawingContext) {
    if (this.attr('display') === 'flex' && !this[_layoutTag]) {
      this.relayout();
    }

    const clipPath = this.attr('clip');
    if (clipPath) {
      this.svg.beginPath().to(drawingContext);
      drawingContext.clip();
    }

    if (!this.isVirtual) {
      super.render(t, drawingContext);
      const [w, h] = this.attrSize;
      if (w !== '' || h !== '') {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
        drawingContext.clip();
      }
    }

    const sprites = this[_children];

    for (let i = 0; i < sprites.length; i++) {
      const child = sprites[i],
            isDirty = child.isDirty;
      child.isDirty = false;

      if (child.isVisible()) {
        child.draw(t, drawingContext);
      }
      if (isDirty) {
        child.dispatchEvent('update', { target: child, renderTime: t }, true, true);
      }
    }
    if (this.attr('display') === 'flex') {
      this[_layoutTag] = true;
    }
  }
}, _class2.Attr = GroupAttr, _temp);




__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(Group.prototype, __WEBPACK_IMPORTED_MODULE_7__helpers_group__["a" /* default */]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__nodetype__["a" /* registerNodeType */])('group', Group, true);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);

const _zOrder = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default()('zOrder');

/* harmony default export */ __webpack_exports__["a"] = ({
  appendChild(sprite, update = true) {
    sprite.remove();

    const children = this.children;
    children.push(sprite);

    this[_zOrder] = this[_zOrder] || 0;
    sprite.connect(this, this[_zOrder]++);

    for (let i = children.length - 1; i > 0; i--) {
      const a = children[i],
            b = children[i - 1];

      if (a.zIndex < b.zIndex) {
        children[i] = b;
        children[i - 1] = a;
      }
    }

    if (update) {
      sprite.forceUpdate();
    }
    return sprite;
  },
  append(...sprites) {
    sprites.forEach(sprite => this.appendChild(sprite));
  },
  removeChild(sprite) {
    const idx = this.children.indexOf(sprite);
    if (idx === -1) {
      return null;
    }
    this.children.splice(idx, 1);
    if (sprite.isVisible() || sprite.lastRenderBox) {
      sprite.forceUpdate();
    }
    sprite.disconnect(this);
    return sprite;
  },
  clear() {
    const children = this.children.slice(0);
    return children.map(child => this.removeChild(child));
  },
  insertBefore(newchild, refchild) {
    const idx = this.children.indexOf(refchild);
    if (idx >= 0) {
      this.removeChild(newchild);
      this.children.splice(idx, 0, newchild);
      const refZOrder = refchild.zOrder;
      newchild.connect(this, refZOrder);
      newchild.forceUpdate();

      for (let i = 0; i < this.children.length; i++) {
        if (i !== idx) {
          const child = this.children[i],
                zOrder = child.zOrder;

          if (zOrder >= refZOrder) {
            delete child.zOrder;
            Object.defineProperty(child, 'zOrder', {
              value: zOrder + 1,
              writable: false,
              configurable: true
            });
          }
        }
      }

      this[_zOrder] = this[_zOrder] || 0;
      this[_zOrder]++;
    }

    return newchild;
  }
});

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = pathEffect;
/* harmony export (immutable) */ __webpack_exports__["a"] = createSvgPath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sort__ = __webpack_require__(394);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_svg_path_to_canvas__ = __webpack_require__(135);

// https://github.com/AlloyTeam/pasition



function _subShapes(shapes, count) {
  for (let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1];
    const newShape = [];
    const x = shape[0][0],
          y = shape[0][1];
    shape.forEach(() => {
      newShape.push([x, y, x, y, x, y, x, y]);
    });

    shapes.push(newShape);
  }
}

function _upShapes(shapes, count) {
  for (let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1];
    const newShape = [];

    shape.forEach(curve => {
      newShape.push(curve.slice(0));
    });
    shapes.push(newShape);
  }
}

function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
    right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true)
  };
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
  const x12 = (x2 - x1) * t + x1;
  const y12 = (y2 - y1) * t + y1;

  const x23 = (x3 - x2) * t + x2;
  const y23 = (y3 - y2) * t + y2;

  const x34 = (x4 - x3) * t + x3;
  const y34 = (y4 - y3) * t + y3;

  const x123 = (x23 - x12) * t + x12;
  const y123 = (y23 - y12) * t + y12;

  const x234 = (x34 - x23) * t + x23;
  const y234 = (y34 - y23) * t + y23;

  const x1234 = (x234 - x123) * t + x123;
  const y1234 = (y234 - y123) * t + y123;

  if (reverse) {
    return [x1234, y1234, x123, y123, x12, y12, x1, y1];
  }
  return [x1, y1, x12, y12, x123, y123, x1234, y1234];
}

function _splitCurves(curves, count) {
  let i = 0,
      index = 0;

  for (; i < count; i++) {
    const curve = curves[index];
    const cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5);
    curves.splice(index, 1);
    curves.splice(index, 0, cs.left, cs.right);

    index += 2;
    if (index >= curves.length - 1) {
      index = 0;
    }
  }
}

function pathToShapes(path) {
  let x = 0,
      y = 0;
  const shapes = [];
  path.forEach(p => {
    const [cmd, ...points] = p;
    if (cmd === 'M') {
      x = points[0];
      y = points[1];
    } else {
      shapes.push([x, y, ...points]);
      x = points[4];
      y = points[5];
    }
  });
  return [shapes];
}

// match two path
function match(pathA, pathB, minCurves = 100) {
  let shapesA = pathToShapes(pathA.path);
  const shapesB = pathToShapes(pathB.path);

  const lenA = shapesA.length,
        lenB = shapesB.length;

  if (lenA > lenB) {
    _subShapes(shapesB, lenA - lenB);
  } else if (lenA < lenB) {
    _upShapes(shapesA, lenB - lenA);
  }

  shapesA = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__sort__["a" /* sort */])(shapesA, shapesB);

  shapesA.forEach((curves, index) => {
    const lenA = curves.length,
          lenB = shapesB[index].length;

    if (lenA > lenB) {
      if (lenA < minCurves) {
        _splitCurves(curves, minCurves - lenA);
        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(shapesB[index], lenA - lenB);
      }
    } else if (lenA < lenB) {
      if (lenB < minCurves) {
        _splitCurves(curves, minCurves - lenA);
        _splitCurves(shapesB[index], minCurves - lenB);
      } else {
        _splitCurves(curves, lenB - lenA);
      }
    }
  });

  shapesA.forEach((curves, index) => {
    shapesA[index] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__sort__["b" /* sortCurves */])(curves, shapesB[index]);
  });

  return [shapesA, shapesB];
}

function lerpPoints(x1, y1, x2, y2, t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t];
}

function lerpCurve(curveA, curveB, t) {
  return lerpPoints(curveA[0], curveA[1], curveB[0], curveB[1], t).concat(lerpPoints(curveA[2], curveA[3], curveB[2], curveB[3], t)).concat(lerpPoints(curveA[4], curveA[5], curveB[4], curveB[5], t)).concat(lerpPoints(curveA[6], curveA[7], curveB[6], curveB[7], t));
}

function lerp(pathA, pathB, t) {
  const [shapesA, shapesB] = match(pathA, pathB);

  return `${shapesA.map((shapeA, i) => {
    const shapeB = shapesB[i];
    return shapeA.map((curveA, i) => {
      const curveB = shapeB[i];
      const curve = lerpCurve(curveA, curveB, t);
      if (i === 0) {
        return `M${curve[0]} ${curve[1]} C${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`;
      }
      return `${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`;
    });
  }).join(' ')}z`;
}



function pathEffect(pathA, pathB, p, s, e) {
  const ep = (p - s) / (e - s);
  if (ep <= 0) return pathA;
  if (ep >= 1) return pathB;
  pathA = new __WEBPACK_IMPORTED_MODULE_2_svg_path_to_canvas__["default"](pathA);
  pathB = new __WEBPACK_IMPORTED_MODULE_2_svg_path_to_canvas__["default"](pathB);
  return lerp(pathA, pathB, ep);
}

function createSvgPath(path) {
  if (typeof path === 'string') path = { d: path };
  const p = new __WEBPACK_IMPORTED_MODULE_2_svg_path_to_canvas__["default"](path.d);
  if (path.transform || path.trim) {
    if (path.transform) {
      __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_entries___default()(path.transform).forEach(([key, value]) => {
        if (!Array.isArray(value)) value = [value];
        p[key](...value);
      });
    }
    if (path.trim) {
      p.trim();
    }
  }
  return p;
}

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return boxIntersect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return boxToRect; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return boxEqual; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return boxUnion; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return rectToBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "q", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "r", function() { return sortOrderedSprites; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__ = __webpack_require__(328);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan__ = __webpack_require__(327);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan__);


const colorString = __webpack_require__(330);

let Color = class Color {
  constructor(color) {
    if (typeof color === 'string') {
      const { model, value } = colorString.get(color || 'rgba(0,0,0,0)');
      this.model = model;
      this.value = value;
    } else {
      this.model = color.model;
      this.value = color.value;
    }
  }
  toString() {
    const [a, b, c, d] = this.value;
    const model = this.model;

    if (model === 'rgb') {
      return `${model}a(${a},${b},${c},${d})`;
    }
    return `${model}a(${a},${b}%,${c}%,${d})`;
  }
  get str() {
    return String(this);
  }
};




const parseColor = color => {
  return new Color(color);
};

function parseColorString(color) {
  if (color && typeof color === 'string') {
    return parseColor(color).toString();
  }
  return color;
}

function parseStringTransform(str) {
  if (typeof str !== 'string') return str;

  const rules = str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  const ret = {};
  if (rules) {
    rules.forEach(rule => {
      const matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);
      const [, m, v] = matched;

      if (m === 'rotate') {
        ret[m] = parseStringFloat(v)[0];
      } else {
        ret[m] = parseStringFloat(v);
      }
    });
  }

  return ret;
}

function parseValuesString(str, parser) {
  if (typeof str === 'string') {
    const values = str.split(/[\s,]+/g);
    return values.map(v => {
      return parser ? parser(v) : v;
    });
  }
  return str;
}

function praseString(str) {
  return parseValuesString(str);
}

function parseStringInt(str) {
  return parseValuesString(str, parseInt);
}

function parseStringFloat(str) {
  return parseValuesString(str, parseFloat);
}

function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  } else if (val.length === 1) {
    return [val[0], val[0]];
  }
  return val;
}

function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  } else if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  } else if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }
  return [...val, 0, 0, 0, 0].slice(0, 4);
}

function boxIntersect(box1, box2) {
  // left, top, right, buttom
  const [l1, t1, r1, b1] = [box1[0], box1[1], box1[2], box1[3]],
        [l2, t2, r2, b2] = [box2[0], box2[1], box2[2], box2[3]];

  const t = Math.max(t1, t2),
        r = Math.min(r1, r2),
        b = Math.min(b1, b2),
        l = Math.max(l1, l2);

  if (b >= t && r >= l) {
    return [l, t, r, b];
  }
  return null;
}

function boxToRect(box) {
  return [box[0], box[1], box[2] - box[0], box[3] - box[1]];
}

function boxEqual(box1, box2) {
  return box1[0] === box2[0] && box1[1] === box2[1] && box1[2] === box2[2] && box1[3] === box2[3];
}

function rectToBox(rect) {
  return [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]];
}

function rectVertices(rect) {
  const [x1, y1, x2, y2] = rectToBox(rect);

  return [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
}

function boxUnion(box1, box2) {
  if (!box1) return box2;
  if (!box2) return box1;

  return [Math.min(box1[0], box2[0]), Math.min(box1[1], box2[1]), Math.max(box1[2], box2[2]), Math.max(box1[3], box2[3])];
}

function appendUnit(value, defaultUnit = 'px') {
  if (value === '') {
    return value;
  }
  if (typeof value === 'string' && __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan___default()(Number(value))) {
    return value;
  }
  return value + defaultUnit;
}

function sortOrderedSprites(sprites, reversed = false) {
  return sprites.sort((a, b) => {
    if (reversed) [a, b] = [b, a];
    if (a.zIndex === b.zIndex) {
      return a.zOrder - b.zOrder;
    }
    return a.zIndex - b.zIndex;
  });
}

const noticed = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_set___default.a();
function notice(msg, level = 'warn') {
  if (typeof console !== 'undefined' && !noticed.has(msg)) {
    console[level](msg); // eslint-disable-line no-console
    noticed.add(msg);
  }
}



/***/ }),
/* 229 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = normalize;

const a2c = __webpack_require__(407);

/* eslint-disable */
function normalize(path) {
  // init state
  var prev;
  var result = [];
  var bezierX = 0;
  var bezierY = 0;
  var startX = 0;
  var startY = 0;
  var quadX = null;
  var quadY = null;
  var x = 0;
  var y = 0;

  for (var i = 0, len = path.length; i < len; i++) {
    var seg = path[i];
    var command = seg[0];

    switch (command) {
      case 'M':
        startX = seg[1];
        startY = seg[2];
        break;
      case 'A':
        var curves = a2c(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);

        if (!curves.length) continue;

        curves = curves.map(curve => {
          const [x0, y0, x1, y1, x2, y2, x, y] = curve;
          return { x1, y1, x2, y2, x, y };
        });

        for (var j = 0, c; j < curves.length; j++) {
          c = curves[j];
          seg = ['C', c.x1, c.y1, c.x2, c.y2, c.x, c.y];
          if (j < curves.length - 1) result.push(seg);
        }

        break;
      case 'S':
        // default control point
        var cx = x;
        var cy = y;
        if (prev == 'C' || prev == 'S') {
          cx += cx - bezierX; // reflect the previous command's control
          cy += cy - bezierY; // point relative to the current point
        }
        seg = ['C', cx, cy, seg[1], seg[2], seg[3], seg[4]];
        break;
      case 'T':
        if (prev == 'Q' || prev == 'T') {
          quadX = x * 2 - quadX; // as with 'S' reflect previous control point
          quadY = y * 2 - quadY;
        } else {
          quadX = x;
          quadY = y;
        }
        seg = quadratic(x, y, quadX, quadY, seg[1], seg[2]);
        break;
      case 'Q':
        quadX = seg[1];
        quadY = seg[2];
        seg = quadratic(x, y, seg[1], seg[2], seg[3], seg[4]);
        break;
      case 'L':
        seg = line(x, y, seg[1], seg[2]);
        break;
      case 'H':
        seg = line(x, y, seg[1], y);
        break;
      case 'V':
        seg = line(x, y, x, seg[1]);
        break;
      case 'Z':
        seg = line(x, y, startX, startY);
        break;
    }

    // update state
    prev = command;
    x = seg[seg.length - 2];
    y = seg[seg.length - 1];
    if (seg.length > 4) {
      bezierX = seg[seg.length - 4];
      bezierY = seg[seg.length - 3];
    } else {
      bezierX = x;
      bezierY = y;
    }
    result.push(seg);
  }

  return result;
}

function line(x1, y1, x2, y2) {
  return ['C', x1, y1, x2, y2, x2, y2];
}

function quadratic(x1, y1, cx, cy, x2, y2) {
  return ['C', x1 / 3 + 2 / 3 * cx, y1 / 3 + 2 / 3 * cy, x2 / 3 + 2 / 3 * cx, y2 / 3 + 2 / 3 * cy, x2, y2];
}
/* eslint-enable */

/***/ }),
/* 230 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(420), __esModule: true };

/***/ }),
/* 231 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(6).document;
module.exports = document && document.documentElement;


/***/ }),
/* 232 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(21) && !__webpack_require__(44)(function () {
  return Object.defineProperty(__webpack_require__(139)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 233 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(73);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 234 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 235 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(77);
var createDesc = __webpack_require__(94);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(153);
var has = __webpack_require__(45);
var IE8_DOM_DEFINE = __webpack_require__(232);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(21) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 236 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(237);
var hiddenKeys = __webpack_require__(140).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 237 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(45);
var toIObject = __webpack_require__(31);
var arrayIndexOf = __webpack_require__(428)(false);
var IE_PROTO = __webpack_require__(148)('IE_PROTO');

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
/* 238 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(76);
var toIObject = __webpack_require__(31);
var isEnum = __webpack_require__(77).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 239 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 240 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(29);
var isObject = __webpack_require__(22);
var newPromiseCapability = __webpack_require__(144);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 241 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),
/* 242 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var core = __webpack_require__(3);
var dP = __webpack_require__(23);
var DESCRIPTORS = __webpack_require__(21);
var SPECIES = __webpack_require__(7)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 243 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(29);
var aFunction = __webpack_require__(72);
var SPECIES = __webpack_require__(7)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 244 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(43);
var invoke = __webpack_require__(436);
var html = __webpack_require__(231);
var cel = __webpack_require__(139);
var global = __webpack_require__(6);
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
  if (__webpack_require__(73)(process) == 'process') {
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
/* 245 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 246 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);


/***/ }),
/* 247 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(449)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(142)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 248 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(452);
var global = __webpack_require__(6);
var hide = __webpack_require__(30);
var Iterators = __webpack_require__(75);
var TO_STRING_TAG = __webpack_require__(7)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 249 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 250 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 251 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
var document = __webpack_require__(17).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 252 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(16) && !__webpack_require__(54)(function () {
  return Object.defineProperty(__webpack_require__(251)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 253 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(158);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 254 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 255 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(256);
var hiddenKeys = __webpack_require__(160).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 256 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(47);
var toIObject = __webpack_require__(56);
var arrayIndexOf = __webpack_require__(488)(false);
var IE_PROTO = __webpack_require__(166)('IE_PROTO');

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
/* 257 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(33);
module.exports = function (target, src, safe) {
  for (var key in src) {
    if (safe && target[key]) target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};


/***/ }),
/* 258 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(33);


/***/ }),
/* 259 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 260 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(9);


/***/ }),
/* 261 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(157);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(55);
module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 262 */
/***/ (function(module, exports) {



/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan__ = __webpack_require__(414);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values__ = __webpack_require__(417);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__layer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__resource__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_sprite_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__platform__ = __webpack_require__(81);










const { setDeprecation, sortOrderedSprites } = __WEBPACK_IMPORTED_MODULE_7_sprite_core__["a" /* utils */];

const _layerMap = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('layerMap'),
      _zOrder = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('zOrder'),
      _layers = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('layers'),
      _snapshot = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('snapshot'),
      _viewport = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('viewport'),
      _resolution = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('resolution'),
      _resizeHandler = __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_symbol___default()('resizeHandler');

let _default = class _default extends __WEBPACK_IMPORTED_MODULE_7_sprite_core__["d" /* BaseNode */] {
  constructor(container, options = {}) {
    super();

    container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__platform__["e" /* getContainer */])(container);

    this.container = container;

    /* istanbul ignore if */
    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = { viewport: [arguments[1], arguments[2]]
        /* eslint-enabel prefer-rest-params */
      };
    }

    this[_zOrder] = 0;
    this[_layerMap] = {};
    this[_layers] = [];
    this[_snapshot] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__platform__["d" /* createCanvas */])();

    const viewport = options.viewport || ['', ''];
    this.viewport = viewport;

    // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
    this.stickMode = options.stickMode || 'scale';
    this.stickExtend = !!options.stickExtend;
    this.stickOffset = [0, 0];
    this.resolution = options.resolution || [...this.viewport];

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/scene';
    const that = this;
    this.ownerDocument = {
      createElementNS(uri, name) {
        return that.layer(name);
      }
    };

    const events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'click', 'dblclick'];

    events.forEach(event => this.delegateEvent(event));

    /* istanbul ignore next */
    container.addEventListener('DOMNodeRemovedFromDocument', () => {
      if (this[_resizeHandler]) {
        window.removeEventListener('resize', this[_resizeHandler]);
        delete this[_resizeHandler];
      }
    });
  }

  get width() {
    return this.viewport[0];
  }
  get height() {
    return this.viewport[1];
  }
  insertBefore(newchild, refchild) {
    if (!this.hasLayer(refchild)) {
      throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
    }
    this.appendLayer(newchild);
    this.container.insertBefore(newchild.canvas, refchild.canvas);
    let els;
    /* istanbul ignore if */
    if (this.container.querySelectorAll) {
      els = this.container.querySelectorAll('canvas');
    } else {
      els = this.container.children;
    }
    els.forEach((el, i) => {
      const id = el.dataset.layerId;
      if (id) {
        const layer = this.layer(id);
        delete layer.zOrder;
        Object.defineProperty(layer, 'zOrder', {
          value: i,
          writable: false,
          configurable: true
        });
      }
    });
    this[_layers] = sortOrderedSprites(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values___default()(this[_layerMap]), true);
  }
  appendChild(layer) {
    return this.appendLayer(layer);
  }
  removeChild(layer) {
    return this.removeLayer(layer);
  }
  get layerViewport() {
    const [rw, rh] = this.resolution,
          [vw, vh] = this.viewport,
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

    let width = vw,
        height = vh;

    if (!stickExtend) {
      if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        height = vw * rh / rw;
      } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        width = vh * rw / rh;
      }
    }

    return [width, height];
  }
  updateViewport(layer) {
    const [width, height] = this.layerViewport,
          layers = layer ? [layer] : this[_layers],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

    layers.forEach(layer => {
      const canvas = layer.canvas;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(canvas.style, {
        top: '',
        right: '',
        bottom: '',
        left: '',
        transform: ''
      });
      if (!stickExtend && (stickMode === 'width' || stickMode === 'height')) {
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
      } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
        canvas.style.right = '0';
        canvas.style.bottom = '0';
      } else {
        canvas.style.top = '0';
        canvas.style.left = '0';
      }
      if (stickExtend) {
        layer.resolution = this.layerResolution;
      }
    });

    this.dispatchEvent('viewportChange', { target: this, layers });
    return this;
  }
  get distortion() /* istanbul ignore next */{
    if (this.stickMode !== 'scale') {
      return 1.0;
    }
    const [rw, rh] = this.resolution,
          [vw, vh] = this.viewport;

    const dw = rw === 'flex' ? 2 : rw / vw,
          dh = rh === 'flex' ? 2 : rh / vh;

    return dw / dh;
  }

  set viewport(viewport) {
    if (!Array.isArray(viewport)) viewport = [viewport, viewport];
    const [width, height] = viewport;
    this[_viewport] = [width, height];
    /* istanbul ignore next */
    if (width === 'auto' || height === 'auto') {
      if (!this[_resizeHandler]) {
        this[_resizeHandler] = () => {
          this.updateViewport();
          if (this.resolution[0] === 'flex' || this.resolution[1] === 'flex') {
            this.updateResolution();
          }
        };
        window.addEventListener('resize', this[_resizeHandler]);
      }
    } else if (this[_resizeHandler]) {
      window.removeEventListener('resize', this[_resizeHandler]);
      delete this[_resizeHandler];
    }
    if (this[_layers].length) {
      this.updateViewport();
    }
  }
  get viewport() {
    let [width, height] = this[_viewport];
    if (width === '' || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan___default()(Number(width))) {
      width = this.container.clientWidth;
    }
    if (height === '' || __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_number_is_nan___default()(Number(height))) {
      height = this.container.clientHeight;
    }
    return [width, height];
  }

  get layerResolution() {
    let [rw, rh] = this.resolution;
    const [vw, vh] = this.viewport,
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

    if (rw === 'flex') {
      rw = 2 * vw;
    }
    if (rh === 'flex') {
      rh = 2 * vh;
    }

    let width = rw,
        height = rh,
        offsetTop = 0,
        offsetLeft = 0;

    if (stickExtend) {
      if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        const vrh = rw * vh / vw;
        height = vrh;

        if (stickMode === 'width') {
          offsetTop = Math.round((vrh - rh) / 2);
        } else if (stickMode === 'bottom') {
          offsetTop = vrh - rh;
        }
      } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        const vrw = rh * vw / vh;
        width = vrw;

        if (stickMode === 'height') {
          offsetLeft = Math.round((vrw - rw) / 2);
        } else if (stickMode === 'right') {
          offsetLeft = vrw - rw;
        }
      }
    }
    this.stickOffset = [offsetLeft, offsetTop];
    return [width, height, offsetLeft, offsetTop];
  }

  updateResolution(layer) {
    const layers = layer ? [layer] : this[_layers];

    layers.forEach(layer => {
      layer.resolution = this.layerResolution;
    });
    this.dispatchEvent('resolutionChange', { target: this, layers });
    return this;
  }

  set resolution(resolution) {
    if (!Array.isArray(resolution)) {
      resolution = [resolution, resolution];
    }
    const [width, height] = resolution;
    this[_resolution] = [width, height];
    this.updateResolution();
  }
  get resolution() {
    return this[_resolution];
  }

  setViewport(width, height) {
    this.viewport = [width, height];
    return this;
  }

  setResolution(width, height) {
    this.resolution = [width, height];
    return this;
  }

  delegateEvent(event, receiver = this.container) {
    if (typeof event === 'string') {
      event = { type: event, passive: true };
    }

    const { type, passive } = event;

    receiver.addEventListener(type, e => {
      const layers = this[_layers];
      const evtArgs = {
        originalEvent: e,
        type,
        stopDispatch() {
          this.terminated = true;
        }
      };

      // mouse event layerX, layerY value change while browser scaled.
      let originalX, originalY, x, y;

      /* istanbul ignore else */
      if (e instanceof CustomEvent) {
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(evtArgs, e.detail);
        if (evtArgs.x != null && evtArgs.y != null) {
          x = evtArgs.x;
          y = evtArgs.y;
        } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
          originalX = evtArgs.originalX;
          originalY = evtArgs.originalY;
        }
      } else if (e.target.dataset.layerId && this[_layerMap][e.target.dataset.layerId]) {
        const { left, top } = e.target.getBoundingClientRect();
        const { clientX, clientY } = e.changedTouches ? e.changedTouches[0] : e;

        originalX = Math.round((clientX | 0) - left);
        originalY = Math.round((clientY | 0) - top);
      }

      for (let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if (originalX != null && originalY != null) {
          [x, y] = layer.toLocalPos(originalX, originalY);
        } else if (x != null && y != null) {
          [originalX, originalY] = layer.toGlobalPos(x, y);
        }
        __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(evtArgs, {
          layerX: x, layerY: y, originalX, originalY, x, y
        });

        if (layer.handleEvent) {
          layer.dispatchEvent(type, evtArgs);
        }
      }
    }, { passive });
  }
  dispatchEvent(type, evt) {
    const container = this.container;
    container.dispatchEvent(new CustomEvent(type, { detail: evt }));
    super.dispatchEvent(type, evt, true);
  }
  async preload(...resources) {
    const ret = [],
          tasks = [];

    for (let i = 0; i < resources.length; i++) {
      const res = resources[i];
      let task;

      if (typeof res === 'string') {
        task = __WEBPACK_IMPORTED_MODULE_6__resource__["a" /* default */].loadTexture(res);
      } else if (Array.isArray(res)) {
        task = __WEBPACK_IMPORTED_MODULE_6__resource__["a" /* default */].loadFrames(...res);
      } else {
        const { id, src } = res;
        task = __WEBPACK_IMPORTED_MODULE_6__resource__["a" /* default */].loadTexture({ id, src });
      }
      /* istanbul ignore if  */
      if (!(task instanceof __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a)) {
        task = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.resolve(task);
      }

      tasks.push(task.then(r => {
        ret.push(r);
        this.dispatchEvent('preload', {
          target: this, current: r, loaded: ret, resources
        });
      }));
    }

    await __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(tasks);
    return ret;
  }
  layer(id = 'default', opts = { handleEvent: true }) {
    if (typeof opts === 'number') {
      opts = { zIndex: opts };
    }
    if (!this.hasLayer(id)) {
      let zIndex = 0;
      if (opts.zIndex != null) {
        zIndex = opts.zIndex;
        delete opts.zIndex;
      }

      /* istanbul ignore if  */
      if (typeof window !== 'undefined' && window.getComputedStyle) {
        const pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

        if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
          this.container.style.position = 'relative';
        }
      }

      this.appendLayer(new __WEBPACK_IMPORTED_MODULE_5__layer__["a" /* default */](id, opts), zIndex);
    }

    return this[_layerMap][id];
  }
  get layers() {
    return this[_layers];
  }
  appendLayer(layer, zIndex = 0) {
    const id = layer.id;

    if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
      throw new Error(`layer ${id} already exists! remove first...`);
    }

    this.removeLayer(layer);

    this[_layerMap][id] = layer;
    layer.connect(this, this[_zOrder]++, zIndex);
    this.updateViewport(layer);
    if (!this.stickExtend) {
      layer.resolution = this.layerResolution;
    }

    this[_layers] = sortOrderedSprites(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values___default()(this[_layerMap]), true);
    /* istanbul ignore if  */
    if (__WEBPACK_IMPORTED_MODULE_8__platform__["f" /* setDebugToolsObserver */] && layer.id !== '__debuglayer__') {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__platform__["f" /* setDebugToolsObserver */])(this, layer);
    }
    return layer;
  }
  removeLayer(layer) {
    if (typeof layer === 'string') {
      layer = this[_layerMap][layer];
    }
    if (this.hasLayer(layer)) {
      layer.disconnect(this);
      delete this[_layerMap][layer.id];
      this[_layers] = sortOrderedSprites(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_values___default()(this[_layerMap]), true);
      /* istanbul ignore if  */
      if (__WEBPACK_IMPORTED_MODULE_8__platform__["g" /* removeDebugToolsObserver */]) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__platform__["g" /* removeDebugToolsObserver */])(layer);
      }
      return layer;
    }

    return null;
  }
  hasLayer(layer) {
    let layerID;
    if (typeof layer === 'string') {
      layerID = layer;
      layer = this[_layerMap][layer];
    } else {
      layerID = layer.id;
    }
    return layer && this[_layerMap][layerID] === layer;
  }
  async snapshot() {
    const [width, height] = this.viewport;
    const canvas = this[_snapshot];
    canvas.width = width;
    canvas.height = height;

    const [sw, sh] = this.layerViewport;

    const layers = this[_layers].slice(0).reverse();
    const ctx = canvas.getContext('2d');

    const renderTasks = layers.map(layer => layer.prepareRender());
    await __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_promise___default.a.all(renderTasks);

    const rect = [0, 0, sw, sh];

    if (!this.stickExtend) {
      if (this.stickMode === 'width' || this.stickMode === 'height') {
        rect[0] = (width - sw) / 2;
        rect[1] = (height - sh) / 2;
      } else if (this.stickMode === 'bottom' || this.stickMode === 'right') {
        rect[0] = width - sw;
        rect[1] = height - sh;
      }
    }

    layers.forEach(layer => {
      ctx.drawImage(layer.canvas, ...rect);
    });

    return canvas;
  }
};



/***/ }),
/* 264 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(272), __esModule: true };

/***/ }),
/* 265 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(273), __esModule: true };

/***/ }),
/* 266 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(274), __esModule: true };

/***/ }),
/* 267 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(278), __esModule: true };

/***/ }),
/* 268 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(282), __esModule: true };

/***/ }),
/* 269 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(283), __esModule: true };

/***/ }),
/* 270 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(266);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(265);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 271 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(264);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 272 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(50);
__webpack_require__(305);
module.exports = __webpack_require__(0).Array.from;


/***/ }),
/* 273 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(50);
module.exports = __webpack_require__(303);


/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(66);
__webpack_require__(50);
module.exports = __webpack_require__(304);


/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(0);
var $JSON = core.JSON || (core.JSON = { stringify: JSON.stringify });
module.exports = function stringify(it) { // eslint-disable-line no-unused-vars
  return $JSON.stringify.apply($JSON, arguments);
};


/***/ }),
/* 276 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(50);
__webpack_require__(66);
__webpack_require__(307);
__webpack_require__(318);
__webpack_require__(317);
__webpack_require__(316);
module.exports = __webpack_require__(0).Map;


/***/ }),
/* 277 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(308);
module.exports = __webpack_require__(0).Object.assign;


/***/ }),
/* 278 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(309);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperties(T, D) {
  return $Object.defineProperties(T, D);
};


/***/ }),
/* 279 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(310);
var $Object = __webpack_require__(0).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 280 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(319);
module.exports = __webpack_require__(0).Object.entries;


/***/ }),
/* 281 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(311);
var $Object = __webpack_require__(0).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 282 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(312);
module.exports = __webpack_require__(0).Object.keys;


/***/ }),
/* 283 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(50);
__webpack_require__(66);
__webpack_require__(313);
__webpack_require__(320);
__webpack_require__(321);
module.exports = __webpack_require__(0).Promise;


/***/ }),
/* 284 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(87);
__webpack_require__(50);
__webpack_require__(66);
__webpack_require__(314);
__webpack_require__(324);
__webpack_require__(323);
__webpack_require__(322);
module.exports = __webpack_require__(0).Set;


/***/ }),
/* 285 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(315);
__webpack_require__(87);
__webpack_require__(325);
__webpack_require__(326);
module.exports = __webpack_require__(0).Symbol;


/***/ }),
/* 286 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(61);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 288 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(27);
var toLength = __webpack_require__(85);
var toAbsoluteIndex = __webpack_require__(302);
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
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(25);
var IObject = __webpack_require__(110);
var toObject = __webpack_require__(65);
var toLength = __webpack_require__(85);
var asc = __webpack_require__(291);
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
/* 290 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(15);
var isArray = __webpack_require__(184);
var SPECIES = __webpack_require__(2)('species');

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
/* 291 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(290);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 292 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(11);
var createDesc = __webpack_require__(63);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 293 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(49);
var gOPS = __webpack_require__(115);
var pIE = __webpack_require__(62);
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
/* 294 */
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
/* 295 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(114);
var descriptor = __webpack_require__(63);
var setToStringTag = __webpack_require__(64);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(26)(IteratorPrototype, __webpack_require__(2)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 296 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4);
var macrotask = __webpack_require__(200).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(60)(process) == 'process';

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
    var promise = Promise.resolve();
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
/* 297 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(49);
var gOPS = __webpack_require__(115);
var pIE = __webpack_require__(62);
var toObject = __webpack_require__(65);
var IObject = __webpack_require__(110);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(36)(function () {
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
/* 298 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(27);
var gOPN = __webpack_require__(190).f;
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
/* 299 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(37);
var toObject = __webpack_require__(65);
var IE_PROTO = __webpack_require__(117)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 300 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys = __webpack_require__(49);
var toIObject = __webpack_require__(27);
var isEnum = __webpack_require__(62).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) if (isEnum.call(O, key = keys[i++])) {
      result.push(isEntries ? [key, O[key]] : O[key]);
    } return result;
  };
};


/***/ }),
/* 301 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(119);
var defined = __webpack_require__(107);
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
/* 302 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(119);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 303 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(19);
var get = __webpack_require__(123);
module.exports = __webpack_require__(0).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 304 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(83);
var ITERATOR = __webpack_require__(2)('iterator');
var Iterators = __webpack_require__(48);
module.exports = __webpack_require__(0).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 305 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx = __webpack_require__(25);
var $export = __webpack_require__(1);
var toObject = __webpack_require__(65);
var call = __webpack_require__(185);
var isArrayIter = __webpack_require__(183);
var toLength = __webpack_require__(85);
var createProperty = __webpack_require__(292);
var getIterFn = __webpack_require__(123);

$export($export.S + $export.F * !__webpack_require__(186)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 306 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(286);
var step = __webpack_require__(187);
var Iterators = __webpack_require__(48);
var toIObject = __webpack_require__(27);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(111)(Array, 'Array', function (iterated, kind) {
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
/* 307 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(178);
var validate = __webpack_require__(121);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(180)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 308 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(1);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(297) });


/***/ }),
/* 309 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperties: __webpack_require__(188) });


/***/ }),
/* 310 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(1);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 311 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(27);
var $getOwnPropertyDescriptor = __webpack_require__(189).f;

__webpack_require__(192)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 312 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(65);
var $keys = __webpack_require__(49);

__webpack_require__(192)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 313 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(84);
var global = __webpack_require__(4);
var ctx = __webpack_require__(25);
var classof = __webpack_require__(83);
var $export = __webpack_require__(1);
var isObject = __webpack_require__(15);
var aFunction = __webpack_require__(59);
var anInstance = __webpack_require__(106);
var forOf = __webpack_require__(61);
var speciesConstructor = __webpack_require__(199);
var task = __webpack_require__(200).set;
var microtask = __webpack_require__(296)();
var newPromiseCapabilityModule = __webpack_require__(113);
var perform = __webpack_require__(193);
var promiseResolve = __webpack_require__(194);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(2)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  Internal.prototype = __webpack_require__(116)($Promise.prototype, {
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
__webpack_require__(64)($Promise, PROMISE);
__webpack_require__(198)(PROMISE);
Wrapper = __webpack_require__(0)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(186)(function (iter) {
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
/* 314 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(178);
var validate = __webpack_require__(121);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(180)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 315 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(4);
var has = __webpack_require__(37);
var DESCRIPTORS = __webpack_require__(10);
var $export = __webpack_require__(1);
var redefine = __webpack_require__(195);
var META = __webpack_require__(112).KEY;
var $fails = __webpack_require__(36);
var shared = __webpack_require__(118);
var setToStringTag = __webpack_require__(64);
var uid = __webpack_require__(86);
var wks = __webpack_require__(2);
var wksExt = __webpack_require__(201);
var wksDefine = __webpack_require__(122);
var enumKeys = __webpack_require__(293);
var isArray = __webpack_require__(184);
var anObject = __webpack_require__(19);
var isObject = __webpack_require__(15);
var toIObject = __webpack_require__(27);
var toPrimitive = __webpack_require__(120);
var createDesc = __webpack_require__(63);
var _create = __webpack_require__(114);
var gOPNExt = __webpack_require__(298);
var $GOPD = __webpack_require__(189);
var $DP = __webpack_require__(11);
var $keys = __webpack_require__(49);
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
  __webpack_require__(190).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(62).f = $propertyIsEnumerable;
  __webpack_require__(115).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(84)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(26)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 316 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(196)('Map');


/***/ }),
/* 317 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(197)('Map');


/***/ }),
/* 318 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(179)('Map') });


/***/ }),
/* 319 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(1);
var $entries = __webpack_require__(300)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 320 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(1);
var core = __webpack_require__(0);
var global = __webpack_require__(4);
var speciesConstructor = __webpack_require__(199);
var promiseResolve = __webpack_require__(194);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 321 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(1);
var newPromiseCapability = __webpack_require__(113);
var perform = __webpack_require__(193);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 322 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(196)('Set');


/***/ }),
/* 323 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(197)('Set');


/***/ }),
/* 324 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(1);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(179)('Set') });


/***/ }),
/* 325 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122)('asyncIterator');


/***/ }),
/* 326 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(122)('observable');


/***/ }),
/* 327 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(331), __esModule: true };

/***/ }),
/* 328 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(332), __esModule: true };

/***/ }),
/* 329 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
	"aliceblue": [240, 248, 255],
	"antiquewhite": [250, 235, 215],
	"aqua": [0, 255, 255],
	"aquamarine": [127, 255, 212],
	"azure": [240, 255, 255],
	"beige": [245, 245, 220],
	"bisque": [255, 228, 196],
	"black": [0, 0, 0],
	"blanchedalmond": [255, 235, 205],
	"blue": [0, 0, 255],
	"blueviolet": [138, 43, 226],
	"brown": [165, 42, 42],
	"burlywood": [222, 184, 135],
	"cadetblue": [95, 158, 160],
	"chartreuse": [127, 255, 0],
	"chocolate": [210, 105, 30],
	"coral": [255, 127, 80],
	"cornflowerblue": [100, 149, 237],
	"cornsilk": [255, 248, 220],
	"crimson": [220, 20, 60],
	"cyan": [0, 255, 255],
	"darkblue": [0, 0, 139],
	"darkcyan": [0, 139, 139],
	"darkgoldenrod": [184, 134, 11],
	"darkgray": [169, 169, 169],
	"darkgreen": [0, 100, 0],
	"darkgrey": [169, 169, 169],
	"darkkhaki": [189, 183, 107],
	"darkmagenta": [139, 0, 139],
	"darkolivegreen": [85, 107, 47],
	"darkorange": [255, 140, 0],
	"darkorchid": [153, 50, 204],
	"darkred": [139, 0, 0],
	"darksalmon": [233, 150, 122],
	"darkseagreen": [143, 188, 143],
	"darkslateblue": [72, 61, 139],
	"darkslategray": [47, 79, 79],
	"darkslategrey": [47, 79, 79],
	"darkturquoise": [0, 206, 209],
	"darkviolet": [148, 0, 211],
	"deeppink": [255, 20, 147],
	"deepskyblue": [0, 191, 255],
	"dimgray": [105, 105, 105],
	"dimgrey": [105, 105, 105],
	"dodgerblue": [30, 144, 255],
	"firebrick": [178, 34, 34],
	"floralwhite": [255, 250, 240],
	"forestgreen": [34, 139, 34],
	"fuchsia": [255, 0, 255],
	"gainsboro": [220, 220, 220],
	"ghostwhite": [248, 248, 255],
	"gold": [255, 215, 0],
	"goldenrod": [218, 165, 32],
	"gray": [128, 128, 128],
	"green": [0, 128, 0],
	"greenyellow": [173, 255, 47],
	"grey": [128, 128, 128],
	"honeydew": [240, 255, 240],
	"hotpink": [255, 105, 180],
	"indianred": [205, 92, 92],
	"indigo": [75, 0, 130],
	"ivory": [255, 255, 240],
	"khaki": [240, 230, 140],
	"lavender": [230, 230, 250],
	"lavenderblush": [255, 240, 245],
	"lawngreen": [124, 252, 0],
	"lemonchiffon": [255, 250, 205],
	"lightblue": [173, 216, 230],
	"lightcoral": [240, 128, 128],
	"lightcyan": [224, 255, 255],
	"lightgoldenrodyellow": [250, 250, 210],
	"lightgray": [211, 211, 211],
	"lightgreen": [144, 238, 144],
	"lightgrey": [211, 211, 211],
	"lightpink": [255, 182, 193],
	"lightsalmon": [255, 160, 122],
	"lightseagreen": [32, 178, 170],
	"lightskyblue": [135, 206, 250],
	"lightslategray": [119, 136, 153],
	"lightslategrey": [119, 136, 153],
	"lightsteelblue": [176, 196, 222],
	"lightyellow": [255, 255, 224],
	"lime": [0, 255, 0],
	"limegreen": [50, 205, 50],
	"linen": [250, 240, 230],
	"magenta": [255, 0, 255],
	"maroon": [128, 0, 0],
	"mediumaquamarine": [102, 205, 170],
	"mediumblue": [0, 0, 205],
	"mediumorchid": [186, 85, 211],
	"mediumpurple": [147, 112, 219],
	"mediumseagreen": [60, 179, 113],
	"mediumslateblue": [123, 104, 238],
	"mediumspringgreen": [0, 250, 154],
	"mediumturquoise": [72, 209, 204],
	"mediumvioletred": [199, 21, 133],
	"midnightblue": [25, 25, 112],
	"mintcream": [245, 255, 250],
	"mistyrose": [255, 228, 225],
	"moccasin": [255, 228, 181],
	"navajowhite": [255, 222, 173],
	"navy": [0, 0, 128],
	"oldlace": [253, 245, 230],
	"olive": [128, 128, 0],
	"olivedrab": [107, 142, 35],
	"orange": [255, 165, 0],
	"orangered": [255, 69, 0],
	"orchid": [218, 112, 214],
	"palegoldenrod": [238, 232, 170],
	"palegreen": [152, 251, 152],
	"paleturquoise": [175, 238, 238],
	"palevioletred": [219, 112, 147],
	"papayawhip": [255, 239, 213],
	"peachpuff": [255, 218, 185],
	"peru": [205, 133, 63],
	"pink": [255, 192, 203],
	"plum": [221, 160, 221],
	"powderblue": [176, 224, 230],
	"purple": [128, 0, 128],
	"rebeccapurple": [102, 51, 153],
	"red": [255, 0, 0],
	"rosybrown": [188, 143, 143],
	"royalblue": [65, 105, 225],
	"saddlebrown": [139, 69, 19],
	"salmon": [250, 128, 114],
	"sandybrown": [244, 164, 96],
	"seagreen": [46, 139, 87],
	"seashell": [255, 245, 238],
	"sienna": [160, 82, 45],
	"silver": [192, 192, 192],
	"skyblue": [135, 206, 235],
	"slateblue": [106, 90, 205],
	"slategray": [112, 128, 144],
	"slategrey": [112, 128, 144],
	"snow": [255, 250, 250],
	"springgreen": [0, 255, 127],
	"steelblue": [70, 130, 180],
	"tan": [210, 180, 140],
	"teal": [0, 128, 128],
	"thistle": [216, 191, 216],
	"tomato": [255, 99, 71],
	"turquoise": [64, 224, 208],
	"violet": [238, 130, 238],
	"wheat": [245, 222, 179],
	"white": [255, 255, 255],
	"whitesmoke": [245, 245, 245],
	"yellow": [255, 255, 0],
	"yellowgreen": [154, 205, 50]
};


/***/ }),
/* 330 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(329);
var swizzle = __webpack_require__(370);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {}
};

cs.get = function (string) {
	var prefix = string.substring(0, 3).toLowerCase();
	var val;
	var model;
	switch (prefix) {
		case 'hsl':
			val = cs.get.hsl(string);
			model = 'hsl';
			break;
		case 'hwb':
			val = cs.get.hwb(string);
			model = 'hwb';
			break;
		default:
			val = cs.get.rgb(string);
			model = 'rgb';
			break;
	}

	if (!val) {
		return null;
	}

	return {model: model, value: val};
};

cs.get.rgb = function (string) {
	if (!string) {
		return null;
	}

	var abbr = /^#([a-f0-9]{3,4})$/i;
	var hex = /^#([a-f0-9]{6})([a-f0-9]{2})?$/i;
	var rgba = /^rgba?\(\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*,\s*([+-]?\d+)\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var per = /^rgba?\(\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*,\s*([+-]?[\d\.]+)\%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var keyword = /(\D+)/;

	var rgb = [0, 0, 0, 1];
	var match;
	var i;
	var hexAlpha;

	if (match = string.match(hex)) {
		hexAlpha = match[2];
		match = match[1];

		for (i = 0; i < 3; i++) {
			// https://jsperf.com/slice-vs-substr-vs-substring-methods-long-string/19
			var i2 = i * 2;
			rgb[i] = parseInt(match.slice(i2, i2 + 2), 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(abbr)) {
		match = match[1];
		hexAlpha = match[3];

		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i] + match[i], 16);
		}

		if (hexAlpha) {
			rgb[3] = Math.round((parseInt(hexAlpha + hexAlpha, 16) / 255) * 100) / 100;
		}
	} else if (match = string.match(rgba)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = parseInt(match[i + 1], 0);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(per)) {
		for (i = 0; i < 3; i++) {
			rgb[i] = Math.round(parseFloat(match[i + 1]) * 2.55);
		}

		if (match[4]) {
			rgb[3] = parseFloat(match[4]);
		}
	} else if (match = string.match(keyword)) {
		if (match[1] === 'transparent') {
			return [0, 0, 0, 0];
		}

		rgb = colorNames[match[1]];

		if (!rgb) {
			return null;
		}

		rgb[3] = 1;

		return rgb;
	} else {
		return null;
	}

	for (i = 0; i < 3; i++) {
		rgb[i] = clamp(rgb[i], 0, 255);
	}
	rgb[3] = clamp(rgb[3], 0, 1);

	return rgb;
};

cs.get.hsl = function (string) {
	if (!string) {
		return null;
	}

	var hsl = /^hsla?\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var s = clamp(parseFloat(match[2]), 0, 100);
		var l = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);

		return [h, s, l, a];
	}

	return null;
};

cs.get.hwb = function (string) {
	if (!string) {
		return null;
	}

	var hwb = /^hwb\(\s*([+-]?\d*[\.]?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hwb);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = ((parseFloat(match[1]) % 360) + 360) % 360;
		var w = clamp(parseFloat(match[2]), 0, 100);
		var b = clamp(parseFloat(match[3]), 0, 100);
		var a = clamp(isNaN(alpha) ? 1 : alpha, 0, 1);
		return [h, w, b, a];
	}

	return null;
};

cs.to.hex = function () {
	var rgba = swizzle(arguments);

	return (
		'#' +
		hexDouble(rgba[0]) +
		hexDouble(rgba[1]) +
		hexDouble(rgba[2]) +
		(rgba[3] < 1
			? (hexDouble(Math.round(rgba[3] * 255)))
			: '')
	);
};

cs.to.rgb = function () {
	var rgba = swizzle(arguments);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ')'
		: 'rgba(' + Math.round(rgba[0]) + ', ' + Math.round(rgba[1]) + ', ' + Math.round(rgba[2]) + ', ' + rgba[3] + ')';
};

cs.to.rgb.percent = function () {
	var rgba = swizzle(arguments);

	var r = Math.round(rgba[0] / 255 * 100);
	var g = Math.round(rgba[1] / 255 * 100);
	var b = Math.round(rgba[2] / 255 * 100);

	return rgba.length < 4 || rgba[3] === 1
		? 'rgb(' + r + '%, ' + g + '%, ' + b + '%)'
		: 'rgba(' + r + '%, ' + g + '%, ' + b + '%, ' + rgba[3] + ')';
};

cs.to.hsl = function () {
	var hsla = swizzle(arguments);
	return hsla.length < 4 || hsla[3] === 1
		? 'hsl(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%)'
		: 'hsla(' + hsla[0] + ', ' + hsla[1] + '%, ' + hsla[2] + '%, ' + hsla[3] + ')';
};

// hwb is a bit different than rgb(a) & hsl(a) since there is no alpha specific syntax
// (hwb have alpha optional & 1 is default value)
cs.to.hwb = function () {
	var hwba = swizzle(arguments);

	var a = '';
	if (hwba.length >= 4 && hwba[3] !== 1) {
		a = ', ' + hwba[3];
	}

	return 'hwb(' + hwba[0] + ', ' + hwba[1] + '%, ' + hwba[2] + '%' + a + ')';
};

cs.to.keyword = function (rgb) {
	return reverseNames[rgb.slice(0, 3)];
};

// helpers
function clamp(num, min, max) {
	return Math.min(Math.max(min, num), max);
}

function hexDouble(num) {
	var str = num.toString(16).toUpperCase();
	return (str.length < 2) ? '0' + str : str;
}


/***/ }),
/* 331 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(361);
module.exports = __webpack_require__(51).Number.isNaN;


/***/ }),
/* 332 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(362);
__webpack_require__(364);
__webpack_require__(368);
__webpack_require__(363);
__webpack_require__(367);
__webpack_require__(366);
__webpack_require__(365);
module.exports = __webpack_require__(51).Set;


/***/ }),
/* 333 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 334 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(89);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 335 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(130);
var toLength = __webpack_require__(131);
var toAbsoluteIndex = __webpack_require__(357);
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
/* 336 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(68);
var IObject = __webpack_require__(208);
var toObject = __webpack_require__(216);
var toLength = __webpack_require__(131);
var asc = __webpack_require__(338);
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
/* 337 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(40);
var isArray = __webpack_require__(345);
var SPECIES = __webpack_require__(20)('species');

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
/* 338 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(337);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 339 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(41).f;
var create = __webpack_require__(212);
var redefineAll = __webpack_require__(214);
var ctx = __webpack_require__(68);
var anInstance = __webpack_require__(204);
var forOf = __webpack_require__(89);
var $iterDefine = __webpack_require__(126);
var step = __webpack_require__(209);
var setSpecies = __webpack_require__(355);
var DESCRIPTORS = __webpack_require__(38);
var fastKey = __webpack_require__(211).fastKey;
var validate = __webpack_require__(217);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 340 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(205);
var from = __webpack_require__(334);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 341 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(28);
var $export = __webpack_require__(52);
var meta = __webpack_require__(211);
var fails = __webpack_require__(88);
var hide = __webpack_require__(39);
var redefineAll = __webpack_require__(214);
var forOf = __webpack_require__(89);
var anInstance = __webpack_require__(204);
var isObject = __webpack_require__(40);
var setToStringTag = __webpack_require__(127);
var dP = __webpack_require__(41).f;
var each = __webpack_require__(336)(0);
var DESCRIPTORS = __webpack_require__(38);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 342 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(28).document;
module.exports = document && document.documentElement;


/***/ }),
/* 343 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(38) && !__webpack_require__(88)(function () {
  return Object.defineProperty(__webpack_require__(206)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 344 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(70);
var ITERATOR = __webpack_require__(20)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 345 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(124);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 346 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(67);
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
/* 347 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(212);
var descriptor = __webpack_require__(213);
var setToStringTag = __webpack_require__(127);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(39)(IteratorPrototype, __webpack_require__(20)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 348 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(41);
var anObject = __webpack_require__(67);
var getKeys = __webpack_require__(351);

module.exports = __webpack_require__(38) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 349 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(69);
var toObject = __webpack_require__(216);
var IE_PROTO = __webpack_require__(128)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 350 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(69);
var toIObject = __webpack_require__(130);
var arrayIndexOf = __webpack_require__(335)(false);
var IE_PROTO = __webpack_require__(128)('IE_PROTO');

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
/* 351 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(350);
var enumBugKeys = __webpack_require__(207);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 352 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 353 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(52);
var aFunction = __webpack_require__(203);
var ctx = __webpack_require__(68);
var forOf = __webpack_require__(89);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 354 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(52);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 355 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(28);
var core = __webpack_require__(51);
var dP = __webpack_require__(41);
var DESCRIPTORS = __webpack_require__(38);
var SPECIES = __webpack_require__(20)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 356 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(129);
var defined = __webpack_require__(125);
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
/* 357 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(129);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 358 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(40);
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
/* 359 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(205);
var ITERATOR = __webpack_require__(20)('iterator');
var Iterators = __webpack_require__(70);
module.exports = __webpack_require__(51).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 360 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(333);
var step = __webpack_require__(209);
var Iterators = __webpack_require__(70);
var toIObject = __webpack_require__(130);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(126)(Array, 'Array', function (iterated, kind) {
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
/* 361 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(52);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 362 */
/***/ (function(module, exports) {



/***/ }),
/* 363 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(339);
var validate = __webpack_require__(217);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(341)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 364 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(356)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(126)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 365 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.from
__webpack_require__(353)('Set');


/***/ }),
/* 366 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-set.of
__webpack_require__(354)('Set');


/***/ }),
/* 367 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(52);

$export($export.P + $export.R, 'Set', { toJSON: __webpack_require__(340)('Set') });


/***/ }),
/* 368 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(360);
var global = __webpack_require__(28);
var hide = __webpack_require__(39);
var Iterators = __webpack_require__(70);
var TO_STRING_TAG = __webpack_require__(20)('toStringTag');

var DOMIterables = ('CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,' +
  'DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,' +
  'MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,' +
  'SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,' +
  'TextTrackList,TouchList').split(',');

for (var i = 0; i < DOMIterables.length; i++) {
  var NAME = DOMIterables[i];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  if (proto && !proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}


/***/ }),
/* 369 */
/***/ (function(module, exports) {

module.exports = function isArrayish(obj) {
	if (!obj || typeof obj === 'string') {
		return false;
	}

	return obj instanceof Array || Array.isArray(obj) ||
		(obj.length >= 0 && (obj.splice instanceof Function ||
			(Object.getOwnPropertyDescriptor(obj, (obj.length - 1)) && obj.constructor.name !== 'String')));
};


/***/ }),
/* 370 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(369);

var concat = Array.prototype.concat;
var slice = Array.prototype.slice;

var swizzle = module.exports = function swizzle(args) {
	var results = [];

	for (var i = 0, len = args.length; i < len; i++) {
		var arg = args[i];

		if (isArrayish(arg)) {
			// http://jsperf.com/javascript-array-concat-vs-push/98
			results = concat.call(results, slice.call(arg));
		} else {
			results.push(arg);
		}
	}

	return results;
};

swizzle.wrap = function (fn) {
	return function () {
		return fn(swizzle(arguments));
	};
};


/***/ }),
/* 371 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(372);

/***/ }),
/* 372 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var bind = __webpack_require__(222);
var Axios = __webpack_require__(374);
var defaults = __webpack_require__(133);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(utils.merge(defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(219);
axios.CancelToken = __webpack_require__(373);
axios.isCancel = __webpack_require__(220);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(388);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 373 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(219);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 374 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var defaults = __webpack_require__(133);
var utils = __webpack_require__(8);
var InterceptorManager = __webpack_require__(375);
var dispatchRequest = __webpack_require__(376);
var isAbsoluteURL = __webpack_require__(384);
var combineURLs = __webpack_require__(382);

/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = utils.merge({
      url: arguments[0]
    }, arguments[1]);
  }

  config = utils.merge(defaults, this.defaults, { method: 'get' }, config);
  config.method = config.method.toLowerCase();

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

  // Hook up interceptors middleware
  var chain = [dispatchRequest, undefined];
  var promise = Promise.resolve(config);

  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    chain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    chain.push(interceptor.fulfilled, interceptor.rejected);
  });

  while (chain.length) {
    promise = promise.then(chain.shift(), chain.shift());
  }

  return promise;
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(utils.merge(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 375 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 376 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);
var transformData = __webpack_require__(379);
var isCancel = __webpack_require__(220);
var defaults = __webpack_require__(133);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData(
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers || {}
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData(
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData(
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 377 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }
  error.request = request;
  error.response = response;
  return error;
};


/***/ }),
/* 378 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(221);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  // Note: status is not exposed by XDomainRequest
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 379 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn(data, headers);
  });

  return data;
};


/***/ }),
/* 380 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// btoa polyfill for IE<10 courtesy https://github.com/davidchambers/Base64.js

var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

function E() {
  this.message = 'String contains an invalid character';
}
E.prototype = new Error;
E.prototype.code = 5;
E.prototype.name = 'InvalidCharacterError';

function btoa(input) {
  var str = String(input);
  var output = '';
  for (
    // initialize result and counter
    var block, charCode, idx = 0, map = chars;
    // if the next str index does not exist:
    //   change the mapping table to "="
    //   check if d has no fractional digits
    str.charAt(idx | 0) || (map = '=', idx % 1);
    // "8 - idx % 1 * 8" generates the sequence 2, 4, 6, 8
    output += map.charAt(63 & block >> 8 - idx % 1 * 8)
  ) {
    charCode = str.charCodeAt(idx += 3 / 4);
    if (charCode > 0xFF) {
      throw new E();
    }
    block = block << 8 | charCode;
  }
  return output;
}

module.exports = btoa;


/***/ }),
/* 381 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%40/gi, '@').
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      }

      if (!utils.isArray(val)) {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 382 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 383 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
  (function standardBrowserEnv() {
    return {
      write: function write(name, value, expires, path, domain, secure) {
        var cookie = [];
        cookie.push(name + '=' + encodeURIComponent(value));

        if (utils.isNumber(expires)) {
          cookie.push('expires=' + new Date(expires).toGMTString());
        }

        if (utils.isString(path)) {
          cookie.push('path=' + path);
        }

        if (utils.isString(domain)) {
          cookie.push('domain=' + domain);
        }

        if (secure === true) {
          cookie.push('secure');
        }

        document.cookie = cookie.join('; ');
      },

      read: function read(name) {
        var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
        return (match ? decodeURIComponent(match[3]) : null);
      },

      remove: function remove(name) {
        this.write(name, '', Date.now() - 86400000);
      }
    };
  })() :

  // Non standard browser env (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return {
      write: function write() {},
      read: function read() { return null; },
      remove: function remove() {}
    };
  })()
);


/***/ }),
/* 384 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 385 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  (function standardBrowserEnv() {
    var msie = /(msie|trident)/i.test(navigator.userAgent);
    var urlParsingNode = document.createElement('a');
    var originURL;

    /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
    function resolveURL(url) {
      var href = url;

      if (msie) {
        // IE needs attribute set twice to normalize properties
        urlParsingNode.setAttribute('href', href);
        href = urlParsingNode.href;
      }

      urlParsingNode.setAttribute('href', href);

      // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
      return {
        href: urlParsingNode.href,
        protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
        host: urlParsingNode.host,
        search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
        hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
        hostname: urlParsingNode.hostname,
        port: urlParsingNode.port,
        pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
                  urlParsingNode.pathname :
                  '/' + urlParsingNode.pathname
      };
    }

    originURL = resolveURL(window.location.href);

    /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
    return function isURLSameOrigin(requestURL) {
      var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
      return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
    };
  })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
  (function nonStandardBrowserEnv() {
    return function isURLSameOrigin() {
      return true;
    };
  })()
);


/***/ }),
/* 386 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 387 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(8);

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    }
  });

  return parsed;
};


/***/ }),
/* 388 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 389 */
/***/ (function(module, exports) {

module.exports = function (target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}


/***/ }),
/* 390 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _default; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign__);
throw new Error("Cannot find module \"sprite-animator\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_fast_animation_frame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_sprite_math__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sprite_utils__ = __webpack_require__(12);








const defaultEffect = __WEBPACK_IMPORTED_MODULE_3_sprite_animator__["Effects"].default;

function arrayEffect(arr1, arr2, p, start, end) {
  if (Array.isArray(arr1)) {
    return arr1.map((o, i) => defaultEffect(o, arr2[i], p, start, end));
  }
  return defaultEffect(arr1, arr2, p, start, end);
}

function objectEffect(obj1, obj2, p, start, end) {
  const t1 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, obj2, obj1),
        t2 = __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()({}, obj1, obj2);

  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(t1).forEach(([key, value]) => {
    t1[key] = arrayEffect(value, t2[key], p, start, end);
  });

  return t1;
}

function getTransformMatrix(trans) {
  let matrix = new __WEBPACK_IMPORTED_MODULE_5_sprite_math__["Matrix"]();
  __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_entries___default()(trans).forEach(([key, val]) => {
    if (key === 'matrix') {
      matrix = new __WEBPACK_IMPORTED_MODULE_5_sprite_math__["Matrix"](val);
    } else if (Array.isArray(val)) {
      matrix[key](...val);
    } else if (key === 'scale') {
      matrix.scale(val, val);
    } else {
      matrix[key](val);
    }
  });
  return matrix.m;
}

function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["parseStringTransform"])(trans1);
  trans2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["parseStringTransform"])(trans2);

  if (!arrayEqual(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(trans1), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_keys___default()(trans2))) {
    trans1 = getTransformMatrix(trans1);
    trans2 = getTransformMatrix(trans2);
  }

  if (Array.isArray(trans1) || Array.isArray(trans2)) {
    return arrayEffect(trans1, trans2, p, start, end);
  }
  return objectEffect(trans1, trans2, p, start, end);
}

function colorEffect(color1, color2, p, start, end) {
  const c1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["parseColor"])(color1);
  const c2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["parseColor"])(color2);

  if (c1.model === c2.model) {
    c1.value = arrayEffect(c1.value, c2.value, p, start, end).map((c, i) => {
      return i < 3 ? Math.round(c) : Math.round(c * 100) / 100;
    });
    return c1.str;
  }

  return defaultEffect(color1, color2, p, start, end);
}

__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_assign___default()(__WEBPACK_IMPORTED_MODULE_3_sprite_animator__["Effects"], {
  arrayEffect,
  transformEffect,
  colorEffect,
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border(v1, v2, p, start, end) {
    return {
      width: defaultEffect(v1.width, v2.width, p, start, end),
      color: colorEffect(v1.color, v2.color, p, start, end),
      style: arrayEffect(v1.style, v2.style, p, start, end)
    };
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect
});

let _default = class _default extends __WEBPACK_IMPORTED_MODULE_3_sprite_animator__["Animator"] {
  constructor(sprite, frames, timing) {
    super(sprite.attr(), frames, timing);
    this.target = sprite;
  }

  get playState() {
    if (!this.target.parent) {
      return 'idle';
    }
    return super.playState;
  }

  get finished() {
    // set last frame when finished
    // because while the web page is not focused
    // requestAnimationFrame will not trigger while deferTime of
    // the animator is still running
    const sprite = this.target;
    return super.finished.then(() => {
      sprite.attr(this.frame);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["cancelAnimationFrame"])(this.requestId);
    });
  }

  finish() {
    super.finish();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["cancelAnimationFrame"])(this.requestId);
    const sprite = this.target;
    sprite.attr(this.frame);
  }

  play() {
    if (!this.target.parent || this.playState === 'running') {
      return;
    }

    super.play();

    const sprite = this.target;

    sprite.attr(this.frame);

    const that = this;
    this.ready.then(() => {
      sprite.attr(that.frame);
      that.requestId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["requestAnimationFrame"])(function update() {
        const target = that.target;
        if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
          // if dom element has been removed stop animation.
          // it usually occurs in single page applications.
          that.cancel();
          return;
        }
        const playState = that.playState;
        sprite.attr(that.frame);
        if (playState === 'idle') return;
        if (playState === 'running') {
          that.requestId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["requestAnimationFrame"])(update);
        } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
          // playbackRate < 0 will cause playState reset to pending...
          that.ready.then(() => {
            sprite.attr(that.frame);
            that.requestId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["requestAnimationFrame"])(update);
          });
        }
      });
    });
  }

  cancel(preserveState = false) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_fast_animation_frame__["cancelAnimationFrame"])(this.requestId);
    if (preserveState) {
      this.target.attr(this.frame);
      super.cancel();
    } else {
      super.cancel();
      this.target.attr(this.frame);
    }
  }
};



/***/ }),
/* 391 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_define_properties__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_define_properties___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_define_properties__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_sprite_math__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_svg_path_to_canvas__ = __webpack_require__(135);









var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _desc, _value, _class;

const _applyDecoratedDescriptor = __webpack_require__(57);





const _attr = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default()('attr'),
      _temp = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default()('store'),
      _subject = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default()('subject'),
      _default = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default()('default'),
      _props = __WEBPACK_IMPORTED_MODULE_7_babel_runtime_core_js_symbol___default()('props');

let SpriteAttr = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringFloat"], __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["oneOrTwoValues"]), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringInt"]), _dec5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseColorString"]), _dec6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec7 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec8 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec9 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(val => {
  return val ? parseFloat(val) : val;
}), _dec10 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringInt"]), _dec11 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringInt"], __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["fourValuesShortCut"]), _dec12 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec13 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec14 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringTransform"]), _dec15 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec16 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseStringFloat"], __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["oneOrTwoValues"]), _dec17 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["deprecate"])('Instead use attr.gradients.'), _dec18 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), _dec19 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseValue"])(parseFloat), (_class = class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_props] = {};

    this.setDefault({
      anchor: [0, 0],
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      layoutWidth: '',
      layoutHeight: '',
      bgcolor: '',
      flex: '',
      order: 0,
      position: '',
      alignSelf: '',
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: 'matrix(1,0,0,1,0,0)',
      transformOrigin: '',
      transformMatrix: [1, 0, 0, 1, 0, 0],
      border: {
        width: 0,
        color: 'rgba(0,0,0,0)',
        style: 'solid'
      },
      // border: [0, 'rgba(0,0,0,0)'],
      borderRadius: 0,
      dashOffset: 0,
      display: '',
      padding: [0, 0, 0, 0],
      zIndex: 0,
      offsetRotate: 'auto',
      gradients: {},
      offsetDistance: 0,
      filter: '', // filter: {blur, ...}
      shadow: '' // shadow: {color = 'rgba(0,0,0,1)', blur = 1[, offset]}
    }, {
      pos() {
        return [this.x, this.y];
      },
      size() {
        // if(this.subject.hasLayout) {
        //   const width = this.layoutWidth !== '' ? this.layoutWidth : this.width,
        //     height = this.layoutHeight !== '' ? this.layoutHeight : this.height
        //   return [width, height]
        // }
        return [this.width, this.height];
      },
      linearGradients() {
        /* istanbul ignore next  */
        return this.gradients;
      }
    });
    this[_temp] = new __WEBPACK_IMPORTED_MODULE_6_babel_runtime_core_js_map___default.a(); // save non-serialized values
  }

  setDefault(attrs, props = {}) {
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(this[_default], attrs);
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(this[_attr], attrs);
    const _p = {};
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries___default()(props).forEach(([prop, getter]) => {
      _p[prop] = {
        get: getter.bind(this)
      };
    });
    __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_object_define_properties___default()(this[_attr], _p);
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(this[_props], _p);
  }

  saveObj(key, val) {
    this[_temp].set(key, val);
    this.__updateTag = true;
  }
  loadObj(key) {
    return this[_temp].get(key);
  }

  quietSet(key, val) {
    this[_attr][key] = val;
  }
  set(key, val) {
    if (val == null) {
      val = this[_default][key];
    }
    if (typeof val === 'object') {
      const oldVal = this[_attr][key];
      if (oldVal !== val && __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(val) === __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(oldVal)) {
        return;
      }
    }
    this[_attr][key] = val;
    this.__updateTag = true;
  }
  get(key) {
    return this[_attr][key];
  }
  get attrs() {
    const ret = {};
    this.__attributeNames.forEach(key => {
      if (key in this[_props]) {
        __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_define_property___default()(ret, key, this[_props][key]);
      } else if (key !== 'x' && key !== 'y' && key !== 'width' && key !== 'height') {
        ret[key] = this[key];
      } else {
        ret[key] = this.get(key);
      }
    });
    return ret;
  }
  clearCache() {
    this.__clearCacheTag = true;
    return this;
  }
  merge(attrs) {
    if (typeof attrs === 'string') {
      attrs = JSON.parse(attrs);
    }
    __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries___default()(attrs).forEach(([key, value]) => {
      if (this[_default][key] !== value) {
        if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
          this[key] = value;
        } else if (key === 'offsetPath') {
          const offsetPath = new __WEBPACK_IMPORTED_MODULE_10_svg_path_to_canvas__["default"](value);
          this.set('offsetPath', offsetPath.d);
          this.saveObj('offsetPath', offsetPath);
        } else {
          this.set(key, value);
        }
      }
    });

    return this;
  }

  serialize() {
    const attrs = this.attrs;
    delete attrs.id;
    const offsetAngle = this.get('offsetAngle');
    if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
    const offsetPoint = this.get('offsetPoint');
    if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_json_stringify___default()(attrs);
  }

  get subject() {
    return this[_subject];
  }

  /* ------------------- define attributes ----------------------- */

  set id(val) {
    return this.quietSet('id', String(val));
  }

  set name(val) {
    return this.quietSet('name', String(val));
  }

  set anchor(val) {
    this.set('anchor', val);
  }

  set display(val) {
    this.set('display', val);
  }

  set x(val) {
    if (this.subject.hasLayout) {
      this.set('layoutX', val);
    } else {
      this.set('x', val);
    }
  }
  get x() {
    if (this.subject.hasLayout) {
      const layoutX = this.get('layoutX');
      return layoutX !== '' ? layoutX : this.get('x');
    }
    return this.get('x');
  }

  set y(val) {
    if (this.subject.hasLayout) {
      this.set('layoutY', val);
    } else {
      this.set('y', val);
    }
  }
  get y() {
    if (this.subject.hasLayout) {
      const layoutY = this.get('layoutY');
      return layoutY !== '' ? layoutY : this.get('y');
    }
    return this.get('y');
  }

  set pos(val) {
    if (val == null) {
      val = [0, 0];
    }
    const [x, y] = val;
    this.x = x;
    this.y = y;
  }

  set bgcolor(val) {
    this.clearCache();
    this.set('bgcolor', val);
  }

  set opacity(val) {
    this.set('opacity', val);
  }

  set width(val) {
    this.clearCache();
    this.set('width', val);
  }

  set height(val) {
    this.clearCache();
    this.set('height', val);
  }

  set layoutWidth(val) {
    this.clearCache();
    this.set('layoutWidth', val);
  }

  set layoutHeight(val) {
    this.clearCache();
    this.set('layoutHeight', val);
  }

  set size(val) {
    if (val == null) {
      val = ['', ''];
    }
    const [width, height] = val;
    this.width = width;
    this.height = height;
  }

  set border(val) {
    this.clearCache();
    if (typeof val === 'number' || typeof val === 'string') {
      val = {
        width: parseFloat(val)
      };
    } else if (Array.isArray(val)) {
      val = {
        width: parseFloat(val[0]),
        color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseColorString"])(val[1] || '#000')
      };
    } else {
      val.width = parseFloat(val.width);
      val.color = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseColorString"])(val.color || '#000');
    }
    val = __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()({
      width: 1,
      color: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["parseColorString"])('#000'),
      style: 'solid'
    }, val);
    this.set('border', val);
  }

  set padding(val) {
    this.clearCache();
    this.set('padding', val);
  }

  set borderRadius(val) {
    this.clearCache();
    this.set('borderRadius', val);
  }

  set dashOffset(val) {
    this.clearCache();
    this.set('dashOffset', val);
  }

  // transform attributes

  set transform(val) {
    /*
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      matrix: [1,0,0,1,0,0],
     */
    __WEBPACK_IMPORTED_MODULE_5_babel_runtime_core_js_object_assign___default()(this[_attr], {
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0]
    });

    if (Array.isArray(val)) {
      this.set('transformMatrix', val);
      this.set('transform', `matrix(${val})`);
    } else {
      this.set('transformMatrix', [1, 0, 0, 1, 0, 0]);
      const transformStr = [];

      __WEBPACK_IMPORTED_MODULE_4_babel_runtime_core_js_object_entries___default()(val).forEach(([key, value]) => {
        if (key === 'matrix' && Array.isArray(value)) {
          this.set('transformMatrix', new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](value).m);
        } else {
          this[key] = value;
        }
        transformStr.push(`${key}(${value})`);
      });

      this.set('transform', transformStr.join(' '));
    }
  }

  set transformOrigin(val) {
    this.set('transformOrigin', val);
  }

  set rotate(val) {
    const delta = this.get('rotate') - val;
    this.set('rotate', val);
    const transform = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](this.get('transformMatrix')).rotate(-delta);
    this.set('transformMatrix', transform.m);
  }

  set scale(val) {
    val = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["oneOrTwoValues"])(val).map(v => {
      if (Math.abs(v) > 0.001) {
        return v;
      }
      return 1 / v > 0 ? 0.001 : -0.001;
    });
    const oldVal = this.get('scale') || [1, 1];
    const delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
    this.set('scale', val);

    const offsetAngle = this.get('offsetAngle');
    if (offsetAngle) {
      this.rotate -= offsetAngle;
    }

    const transform = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](this.get('transformMatrix'));
    transform.scale(...delta);
    this.set('transformMatrix', transform.m);

    if (offsetAngle) {
      this.rotate += offsetAngle;
    }
  }

  set translate(val) {
    const oldVal = this.get('translate') || [0, 0];
    const delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
    this.set('translate', val);
    const transform = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](this.get('transformMatrix'));
    transform.translate(...delta);
    this.set('transformMatrix', transform.m);
  }

  set skew(val) {
    const oldVal = this.get('skew') || [0, 0];
    const invm = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"]().skew(...oldVal).inverse();
    this.set('skew', val);
    const transform = new __WEBPACK_IMPORTED_MODULE_8_sprite_math__["Matrix"](this.get('transformMatrix'));
    transform.multiply(invm).skew(...val);
    this.set('transformMatrix', transform.m);
  }

  set zIndex(val) {
    this.set('zIndex', val);
  }

  /**
    linearGradients : {
      bgcolor: {
        direction: 30,  //angle，[0,360)
        rect: [x, y, w, h],
        vector: [x1, y1, x2, y2], // direction/rect or from/to
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'black'}
        ]
      }
    }
   */

  set linearGradients(val) /* istanbul ignore next  */{
    this.gradients = val;
  }

  /**
    gradients : {
      bgcolor: {
        direction: 30,  //angle，[0,360)
        rect: [x, y, w, h],  // rect + direction or vector
        vector: [x1, y1, r1, x2, y2, r2], // vector.length -> linear or radial
        colors: [
          {offset: 0, color: 'red'},
          {offset: 1, color: 'black'}
        ]
      }
    }
   */

  set gradients(val) {
    this.clearCache();
    this.set('gradients', val);
  }

  resetOffset() {
    let offsetPath = this.get('offsetPath');
    const dis = this.offsetDistance;

    if (offsetPath) {
      const pathObj = this.loadObj('offsetPath');
      if (pathObj) {
        offsetPath = pathObj;
      } else {
        offsetPath = new __WEBPACK_IMPORTED_MODULE_10_svg_path_to_canvas__["default"](offsetPath);
        this.saveObj('offsetPath', offsetPath);
      }
    }

    if (offsetPath != null) {
      let len = dis * offsetPath.getTotalLength();
      const [x, y] = offsetPath.getPointAtLength(len);

      let angle = this.offsetRotate;

      if (angle === 'auto' || angle === 'reverse') {
        if (angle === 'reverse' && len === 0) {
          len = 1;
        }
        const [x1, y1] = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1);

        if (x1 === x && y1 === y) {
          // last point
          angle = this.get('offsetAngle');
        } else {
          angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
        }

        if (this.offsetRotate === 'reverse') {
          angle = -angle;
        }
      }

      const offsetAngle = this.get('offsetAngle');

      if (offsetAngle) {
        this.rotate -= offsetAngle;
      }

      this.set('offsetAngle', angle);
      this.rotate += angle;

      const offsetPoint = this.get('offsetPoint');
      if (offsetPoint) {
        this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
      }

      this.set('offsetPoint', [x, y]);
      this.pos = [this.x + x, this.y + y];
    }
  }

  set offsetPath(val) {
    const offsetPath = new __WEBPACK_IMPORTED_MODULE_10_svg_path_to_canvas__["default"](val);

    this.set('offsetPath', offsetPath.d);
    this.saveObj('offsetPath', offsetPath);
    this.resetOffset();
  }

  set offsetDistance(val) {
    this.set('offsetDistance', val);
    this.resetOffset();
  }

  set offsetRotate(val) {
    if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
      val = parseFloat(val);
    }
    this.set('offsetRotate', val);
    this.resetOffset();
  }

  set filter(val) {
    this.set('filter', val);
  }

  set shadow(val) {
    this.set('shadow', val);
  }

  set flex(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('flex', val);
  }

  set order(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('order', val);
  }

  set position(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('position', val);
  }

  set alignSelf(val) {
    if (this.subject.hasLayout) this.subject.parent.clearLayout();
    this.set('alignSelf', val);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'id', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'id'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'name', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'name'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'anchor', [_dec, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'anchor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'display', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'display'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'x', [_dec2, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'x'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'y', [_dec3, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'y'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pos', [_dec4, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'pos'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgcolor', [_dec5, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'bgcolor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'opacity', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'opacity'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'width', [_dec6, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'width'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'height', [_dec7, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'height'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutWidth', [_dec8, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'layoutWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'layoutHeight', [_dec9, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'layoutHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'size', [_dec10, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'size'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'border', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'border'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'padding', [_dec11, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'padding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'borderRadius', [_dec12, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'borderRadius'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'dashOffset', [_dec13, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'dashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transform', [_dec14, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'transform'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transformOrigin', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'transformOrigin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'rotate', [_dec15, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'rotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'scale', [_dec16, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'scale'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'translate', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'translate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'skew', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'skew'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'zIndex', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'zIndex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'linearGradients', [_dec17, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'linearGradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'gradients', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'gradients'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetPath', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'offsetPath'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetDistance', [_dec18, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'offsetDistance'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'offsetRotate', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'offsetRotate'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'filter', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'filter'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'shadow', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'shadow'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flex', [_dec19, __WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'flex'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'order', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'order'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'position', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'position'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'alignSelf', [__WEBPACK_IMPORTED_MODULE_9_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'alignSelf'), _class.prototype)), _class));


/* harmony default export */ __webpack_exports__["a"] = (SpriteAttr);

/***/ }),
/* 392 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export clearDirtyRect */
/* harmony export (immutable) */ __webpack_exports__["a"] = clearDirtyRects;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sprite_utils__ = __webpack_require__(12);



// export function isSpriteDirty(sprite, dirtyEls, isUpdateEl = false) {
//   for(let i = 0; i < dirtyEls.length; i++) {
//     const dirtyEl = dirtyEls[i]
//     const box1 = dirtyEl.renderBox,
//       box2 = sprite.renderBox,
//       box3 = dirtyEl.lastRenderBox

//     if(boxIntersect(box1, box2) || isUpdateEl && box3 && boxIntersect(box3, box2)) {
//       return true
//     }
//   }
//   return false
// }

function clearDirtyRect(outputContext, box, width, height) {
  box = box.map((b, i) => {
    return i < 2 ? b - 1 : b + 1;
  });
  const dirtyBox = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_sprite_utils__["boxIntersect"])(box, [0, 0, width, height]);

  if (dirtyBox) {
    const dirtyRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_sprite_utils__["boxToRect"])(dirtyBox);
    outputContext.rect(...dirtyRect);
  }
}

function clearDirtyRects(outputContext, dirtyEls, isUpdateEl = false) {
  const { width, height } = outputContext.canvas;

  outputContext.beginPath();
  for (let i = 0; i < dirtyEls.length; i++) {
    const dirtyEl = dirtyEls[i];
    const box = dirtyEl.renderBox;

    clearDirtyRect(outputContext, box, width, height);

    if (isUpdateEl) {
      const lastRenderBox = dirtyEl.lastRenderBox;
      if (lastRenderBox && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_sprite_utils__["boxEqual"])(lastRenderBox, box)) {
        clearDirtyRect(outputContext, lastRenderBox, width, height);
      }
    }
  }
  outputContext.clip();
}

/***/ }),
/* 393 */
/***/ (function(module, exports) {

/* eslint-disable */

// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */

const weights = 'bold|bolder|lighter|[1-9]00',
      styles = 'italic|oblique',
      variants = 'small-caps',
      stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
      units = 'px|pt|pc|in|cm|mm|%|em|ex|ch|rem|q|vw|vh',
      string = '\'([^\']+)\'|"([^"]+)"|[\\w-]+';

// [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop
const weightRe = new RegExp(`(${weights}) +`, 'i');
const styleRe = new RegExp(`(${styles}) +`, 'i');
const variantRe = new RegExp(`(${variants}) +`, 'i');
const stretchRe = new RegExp(`(${stretches}) +`, 'i');
const sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');

/**
 * Cache font parsing.
 */

const cache = {};

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

module.exports = function f(str, defaultHeight) {
  if (defaultHeight == null) {
    if (typeof window !== 'undefined' && window.getComputedStyle) {
      const root = window.getComputedStyle(document.documentElement).fontSize;
      defaultHeight = f(`${root} Arial`, 16).size;
    } else {
      defaultHeight = 16;
    }
  }

  // Cached
  if (cache[str]) return cache[str];

  // Try for required properties first.
  const sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid

  // Default values and required properties
  const font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/["']/g, '').replace(/ *, */g, ',')

    // Optional, unordered properties.
  };let weight, style, variant, stretch;
  // Stop search at `sizeFamily.index`
  let substr = str.substring(0, sizeFamily.index);
  if (weight = weightRe.exec(substr)) font.weight = weight[1];
  if (style = styleRe.exec(substr)) font.style = style[1];
  if (variant = variantRe.exec(substr)) font.variant = variant[1];
  if (stretch = stretchRe.exec(substr)) font.stretch = stretch[1];

  // Convert to device units. (`font.unit` is the original unit)
  // TODO: ch, ex
  switch (font.unit) {
    case 'pt':
      font.size /= 0.75;
      break;
    case 'pc':
      font.size *= 16;
      break;
    case 'in':
      font.size *= 96;
      break;
    case 'cm':
      font.size *= 96.0 / 2.54;
      break;
    case 'mm':
      font.size *= 96.0 / 25.4;
      break;
    case '%':
      // TODO disabled because existing unit tests assume 100
      // font.size *= defaultHeight / 100 / 0.75
      break;
    case 'em':
    case 'rem':
      font.size *= defaultHeight;
      break;
    case 'q':
      font.size *= 96 / 25.4 / 4;
      break;
  }

  if (font.unit === 'vw') {
    if (typeof document !== 'undefined' && document.documentElement) {
      const width = document.documentElement.clientWidth;
      font.size = width * font.size / 100;
    }
  } else if (font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      const height = document.documentElement.clientHeight;
      font.size = height * font.size / 100;
    }
  }

  return cache[str] = font;
};

/* eslint-enable */

/***/ }),
/* 394 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return sort; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return sortCurves; });
// https://github.com/AlloyTeam/pasition

function shapeBox(shape) {
  let minX = shape[0][0],
      minY = shape[0][1],
      maxX = minX,
      maxY = minY;
  shape.forEach(curve => {
    const x1 = curve[0],
          x2 = curve[2],
          x3 = curve[4],
          x4 = curve[6],
          y1 = curve[1],
          y2 = curve[3],
          y3 = curve[5],
          y4 = curve[7];

    minX = Math.min(minX, x1, x2, x3, x4);
    minY = Math.min(minY, y1, y2, y3, y4);
    maxX = Math.max(maxX, x1, x2, x3, x4);
    maxY = Math.max(maxY, y1, y2, y3, y4);
  });

  return [minX, minY, maxX, maxY];
}

function boxDistance(boxA, boxB) {
  return Math.sqrt((boxA[0] - boxB[0]) ** 2 + (boxA[1] - boxB[1]) ** 2) + Math.sqrt((boxA[2] - boxB[2]) ** 2 + (boxA[3] - boxB[3]) ** 2);
}

function curveDistance(curveA, curveB) {
  const x1 = curveA[0],
        x2 = curveA[2],
        x3 = curveA[4],
        x4 = curveA[6],
        y1 = curveA[1],
        y2 = curveA[3],
        y3 = curveA[5],
        y4 = curveA[7],
        xb1 = curveB[0],
        xb2 = curveB[2],
        xb3 = curveB[4],
        xb4 = curveB[6],
        yb1 = curveB[1],
        yb2 = curveB[3],
        yb3 = curveB[5],
        yb4 = curveB[7];

  return Math.sqrt((xb1 - x1) ** 2 + (yb1 - y1) ** 2) + Math.sqrt((xb2 - x2) ** 2 + (yb2 - y2) ** 2) + Math.sqrt((xb3 - x3) ** 2 + (yb3 - y3) ** 2) + Math.sqrt((xb4 - x4) ** 2 + (yb4 - y4) ** 2);
}

function sortCurves(curvesA, curvesB) {
  const arrList = permuteCurveNum(curvesA.length);

  const list = [];
  arrList.forEach(arr => {
    let distance = 0;
    let i = 0;
    arr.forEach(index => {
      distance += curveDistance(curvesA[index], curvesB[i++]);
    });
    list.push({ index: arr, distance });
  });

  list.sort((a, b) => {
    return a.distance - b.distance;
  });

  const result = [];

  list[0].index.forEach(index => {
    result.push(curvesA[index]);
  });

  return result;
}

function sort(pathA, pathB) {
  const arrList = permuteNum(pathA.length);

  const list = [];
  arrList.forEach(arr => {
    let distance = 0;
    arr.forEach(index => {
      distance += boxDistance(shapeBox(pathA[index]), shapeBox(pathB[index]));
    });
    list.push({ index: arr, distance });
  });

  list.sort((a, b) => {
    return a.distance - b.distance;
  });

  const result = [];

  list[0].index.forEach(index => {
    result.push(pathA[index]);
  });

  return result;
}

function permuteCurveNum(num) {
  const arr = [];

  for (let i = 0; i < num; i++) {
    const indexArr = [];
    for (let j = 0; j < num; j++) {
      let index = j + i;
      if (index > num - 1) index -= num;
      indexArr[index] = j;
    }

    arr.push(indexArr);
  }

  return arr;
}

function permuteNum(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(i);
  }

  return permute(arr);
}

function permute(input) {
  const permArr = [],
        usedChars = [];
  function main(input) {
    let i, ch;
    for (i = 0; i < input.length; i++) {
      ch = input.splice(i, 1)[0];
      usedChars.push(ch);
      if (input.length === 0) {
        permArr.push(usedChars.slice());
      }
      main(input);
      input.splice(i, 0, ch);
      usedChars.pop();
    }
    return permArr;
  }
  return main(input);
}



/***/ }),
/* 395 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Label; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basesprite__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__nodetype__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_render__ = __webpack_require__(53);



var _dec, _dec2, _dec3, _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(57);







const parseFont = __webpack_require__(393);
const _boxSize = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_symbol___default()('boxSize');

const measureText = (node, text, font, lineHeight = '') => {
  const ctx = node.context;
  if (!ctx) {
    return [0, 0];
  }
  ctx.save();
  ctx.font = font;
  const { width } = ctx.measureText(text);
  ctx.restore();

  const { size } = parseFont(font);
  const height = lineHeight || size * 1.2;

  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  const text = node.text,
        font = node.attr('font'),
        lineHeight = node.attr('lineHeight');

  const lines = text.split(/\n/);
  let width = 0,
      height = 0;

  lines.forEach(line => {
    const [w, h] = measureText(node, line, font, lineHeight);
    width = Math.max(width, w);
    height += h;
  });
  node[_boxSize] = [width, height];
}

let LabelSpriteAttr = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseValue"])(parseFloat), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseColorString"]), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseValue"])(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseColorString"]), (_class = class LabelSpriteAttr extends __WEBPACK_IMPORTED_MODULE_2__basesprite__["a" /* default */].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      font: '16px Arial',
      textAlign: 'left',
      strokeColor: '',
      fillColor: '',
      lineHeight: '',
      text: '',
      flexible: false
    }, {
      color() {
        return this.fillColor;
      }
    });
  }

  set text(val) {
    this.clearCache();
    val = String(val);
    delete this.subject[_boxSize];
    this.set('text', val);
    calculTextboxSize(this.subject);
  }

  set font(val) {
    this.clearCache();
    delete this.subject[_boxSize];
    this.set('font', val);
    calculTextboxSize(this.subject);
  }

  set lineHeight(val) {
    this.clearCache();
    delete this.subject[_boxSize];
    this.set('lineHeight', val);
    calculTextboxSize(this.subject);
  }

  set textAlign(val) {
    this.clearCache();
    this.set('textAlign', val);
    calculTextboxSize(this.subject);
  }

  set color(val) {
    this.fillColor = val;
  }

  set strokeColor(val) {
    this.clearCache();
    this.set('strokeColor', val);
  }

  set fillColor(val) {
    this.clearCache();
    this.set('fillColor', val);
  }

  set flexible(val) {
    this.clearCache();
    this.set('flexible', val);
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'text', [__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'font', [__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [_dec, __WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'textAlign'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_dec2, __WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_dec3, __WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'flexible'), _class.prototype)), _class));
let Label = (_temp = _class2 = class Label extends __WEBPACK_IMPORTED_MODULE_2__basesprite__["a" /* default */] {

  constructor(attr) {
    if (typeof attr === 'string') {
      attr = { text: attr };
    }
    super(attr);
  }

  set text(val) {
    this.attr('text', val);
  }
  get text() {
    return this.attr('text');
  }

  get textboxSize() {
    if (!this[_boxSize]) calculTextboxSize(this);
    return this[_boxSize];
  }

  get flexibleFont() {
    const font = this.attr('font');
    if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
    const textboxSize = this.textboxSize,
          contentSize = this.contentSize;
    let { style, variant, weight, size, family } = parseFont(font);
    size *= contentSize[0] / textboxSize[0];
    return `${style} ${variant} ${weight} ${Math.floor(size)}px "${family}"`;
  }

  // override to adapt content size
  get contentSize() {
    let [width, height] = this.attrSize;

    if (width === '' || height === '') {
      const textboxSize = this.textboxSize;
      if (!textboxSize) return [0, 0];
      width = width || textboxSize[0];
      height = height || textboxSize[1];
    }

    if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
      height = Math.ceil(height * width / this.textboxSize[0]);
    }

    return [width, height];
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);

    const textAlign = this.attr('textAlign'),
          flexible = this.attr('flexible'),
          font = flexible ? this.flexibleFont : this.attr('font'),
          lineHeight = this.attr('lineHeight'),
          text = this.text;

    if (text) {
      const [w, h] = this.contentSize;
      if (this.textboxSize[0] > w || this.textboxSize[1] > h) {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, w, h);
        drawingContext.clip();
      }
      drawingContext.font = font;
      const lines = this.text.split(/\n/);

      drawingContext.textBaseline = 'top';

      const align = textAlign;

      drawingContext.textBaseline = 'middle';

      const strokeColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_render__["a" /* findColor */])(drawingContext, this, 'strokeColor');
      if (strokeColor) {
        drawingContext.strokeStyle = strokeColor;
      }

      let fillColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_render__["a" /* findColor */])(drawingContext, this, 'fillColor');

      if (!strokeColor && !fillColor) {
        fillColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_sprite_utils__["parseColorString"])('black');
      }
      if (fillColor) {
        drawingContext.fillStyle = fillColor;
      }

      let top = 0,
          left = 0;
      const width = this.contentSize[0];

      lines.forEach(line => {
        const [w, h] = measureText(this, line, font, lineHeight);

        if (align === 'center') {
          left += (width - w) / 2;
        } else if (align === 'right') {
          left += width - w;
        }

        if (fillColor) {
          drawingContext.fillText(line, left, top + h / 2);
        }
        if (strokeColor) {
          drawingContext.strokeText(line, left, top + h / 2);
        }

        top += h;
      });
    }
  }
}, _class2.Attr = LabelSpriteAttr, _temp);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__nodetype__["a" /* registerNodeType */])('label', Label);

/***/ }),
/* 396 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Layer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_set__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basenode__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__batch__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__group__ = __webpack_require__(225);
throw new Error("Cannot find module \"sprite-animator\"");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fast_animation_frame__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_fast_animation_frame___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_fast_animation_frame__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__nodetype__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__helpers_dirty_check__ = __webpack_require__(392);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__helpers_group__ = __webpack_require__(226);














const _children = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('children'),
      _updateSet = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('updateSet'),
      _zOrder = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('zOrder'),
      _tRecord = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('tRecord'),
      _timeline = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('timeline'),
      _renderDeferer = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('renderDeferrer'),
      _drawTask = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('drawTask'),
      _autoRender = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('autoRender'),
      _adjustTimer = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('adjustTimer');

let Layer = class Layer extends __WEBPACK_IMPORTED_MODULE_4__basenode__["a" /* default */] {
  constructor({
    context,
    handleEvent = true,
    evaluateFPS = false,
    renderMode = 'repaintAll',
    autoRender = true
  } = {}) {
    super();

    this.handleEvent = handleEvent;
    this.evaluateFPS = evaluateFPS;
    this[_autoRender] = autoRender;

    // renderMode: repaintAll | repaintDirty
    this.renderMode = renderMode;

    this.outputContext = context;

    // auto release
    /* istanbul ignore if  */
    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', () => {
        this.timeline.clear();
        this.clear();
      });
    }

    this[_children] = [];
    this[_updateSet] = new __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_set___default.a();
    this[_zOrder] = 0;
    this[_tRecord] = []; // calculate FPS
    this[_timeline] = new __WEBPACK_IMPORTED_MODULE_7_sprite_animator__["Timeline"]();
    this[_renderDeferer] = null;
  }

  set autoRender(value) {
    this[_autoRender] = value;
    if (value) {
      this.draw();
    }
  }
  get autoRender() {
    return this[_autoRender];
  }

  get layer() {
    return this;
  }

  get children() {
    return this[_children];
  }

  get timeline() {
    return this[_timeline];
  }

  get context() {
    return this.outputContext;
  }

  get canvas() {
    return this.outputContext.canvas;
  }
  get offset() {
    return [0, 0];
  }

  clearContext(context) {
    if (context.canvas) {
      const { width, height } = context.canvas;
      context.clearRect(0, 0, width, height);
    }
  }

  remove(...args) {
    if (args.length === 0) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_sprite_utils__["setDeprecation"])('layer.remove()', 'Instead use layer.clear().');
      return this.clear();
    }
    return args.map(child => this.removeChild(child));
  }
  prepareRender() {
    if (!this[_renderDeferer]) {
      this[_renderDeferer] = {};
      this[_renderDeferer].promise = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a((resolve, reject) => {
        __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(this[_renderDeferer], { resolve, reject });
        if (this.autoRender) {
          this[_drawTask] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_fast_animation_frame__["requestAnimationFrame"])(() => {
            delete this[_drawTask];
            this.draw();
          });
        }
      });
      // .catch(ex => console.error(ex.message))
    }
    return this[_renderDeferer] ? this[_renderDeferer].promise : __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_promise___default.a.resolve();
  }
  draw(clearContext = true) {
    const renderDeferrer = this[_renderDeferer];
    this[_renderDeferer] = null;
    if (this[_drawTask]) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_fast_animation_frame__["cancelAnimationFrame"])(this[_drawTask]);
      delete this[_drawTask];
    }
    /* istanbul ignore if  */
    if (this.evaluateFPS) {
      this[_tRecord].push(Date.now());
      this[_tRecord] = this[_tRecord].slice(-10);
    }

    let renderer;
    if (this.renderMode === 'repaintDirty') {
      renderer = this.renderRepaintDirty.bind(this);
    } else if (this.renderMode === 'repaintAll') {
      renderer = this.renderRepaintAll.bind(this);
    } else {
      /* istanbul ignore next  */
      throw new Error('unknown render mode!');
    }
    const currentTime = this.timeline.currentTime;
    renderer(currentTime, clearContext);

    super.dispatchEvent.call(this, 'update', { target: this, timeline: this.timeline, renderTime: currentTime }, true);

    if (renderDeferrer) {
      renderDeferrer.resolve();
    }
  }
  update(target) {
    if (target && target.isDirty) return;
    if (target) {
      this[_updateSet].add(target);
      target.isDirty = true;
    }
    this.prepareRender();
  }
  isVisible() {
    if (this.canvas) {
      return this.canvas.width > 0 && this.canvas.height > 0;
    }
    return true;
  }
  isNodeVisible(sprite) {
    if (!sprite.isVisible()) {
      return false;
    }
    if (sprite.parent !== this) {
      return false;
    }
    return true;
  }
  get fps() /* istanbul ignore next  */{
    if (!this.evaluateFPS) {
      return NaN;
    }
    let sum = 0;
    const tr = this[_tRecord].slice(-10);
    const len = tr.length;

    if (len <= 5) {
      return NaN;
    }
    tr.reduceRight((a, b, i) => {
      sum += a - b;return b;
    });

    return Math.round(1000 * (len - 1) / sum);
  }
  drawSprites(renderEls, t) {
    this[_updateSet].clear();
    for (let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i],
            isDirty = child.isDirty;
      child.isDirty = false;

      if (child.parent === this) {
        const isVisible = this.isNodeVisible(child);
        if (isVisible) {
          child.draw(t);
          if (this.renderMode === 'repaintDirty') {
            child.lastRenderBox = child.renderBox;
          } else {
            child.lastRenderBox = 'no-calc';
          }
        } else {
          // invisible, only need to remove lastRenderBox
          delete child.lastRenderBox;
        }
        if (isDirty) {
          child.dispatchEvent('update', { target: child, renderTime: t, isVisible }, true, true);
        }
      }
    }
  }
  renderRepaintAll(t, clearContext = true) {
    const renderEls = this[_children];
    const outputContext = this.outputContext;
    if (clearContext) this.clearContext(outputContext);
    this.drawSprites(renderEls, t);
  }
  renderRepaintDirty(t, clearContext = true) {
    const updateEls = [...this[_updateSet]];
    if (updateEls.some(el => !!el.attr('filter') || el.isVirtual || el.lastRenderBox === 'no-calc')) {
      return this.renderRepaintAll(t, clearContext);
    }

    const outputContext = this.outputContext;

    const renderEls = this[_children];

    outputContext.save();
    outputContext.beginPath();

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__helpers_dirty_check__["a" /* clearDirtyRects */])(outputContext, updateEls, true);

    if (clearContext) this.clearContext(outputContext);

    this.drawSprites(renderEls, t);

    outputContext.restore();
  }
  pointCollision(evt) {
    if (this.outputContext.canvas) {
      const { layerX, layerY } = evt;
      const { width, height } = this.outputContext.canvas;

      if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }
      return false;
    }
    /* istanbul ignore next  */
    return true;
  }
  dispatchEvent(type, evt, collisionState = false, swallow = false) {
    if (swallow && this.getEventHandlers(type).length === 0) {
      return;
    }

    if (!swallow && !evt.terminated && type !== 'mouseenter' && type !== 'mouseleave') {
      const isCollision = collisionState || this.pointCollision(evt);
      if (isCollision) {
        const sprites = this[_children].slice(0).reverse(),
              targetSprites = [];
        for (let i = 0; i < sprites.length; i++) {
          const sprite = sprites[i];
          const hit = sprite.dispatchEvent(type, evt, collisionState, swallow);
          if (hit) {
            // detect mouseenter/mouseleave
            targetSprites.push(sprite);
          }
          if (evt.terminated && !evt.type.startsWith('mouse')) {
            break;
          }
        }
        evt.targetSprites = targetSprites;
        // stopDispatch can only terminate event in the same level
        evt.terminated = false;
        return super.dispatchEvent(type, evt, isCollision, swallow);
      }
    }

    return super.dispatchEvent(type, evt, collisionState, swallow);
  }
  connect(parent, zOrder, zIndex) /* istanbul ignore next  */{
    super.connect(parent, zOrder);
    this.zIndex = zIndex;
    if (parent && parent.container) {
      parent.container.appendChild(this.outputContext.canvas);
    }
    return this;
  }
  disconnect(parent) /* istanbul ignore next  */{
    if (this.canvas && this.canvas.remove) {
      this.canvas.remove();
    }
    return super.disconnect(parent);
  }
  group(...sprites) {
    const group = new __WEBPACK_IMPORTED_MODULE_6__group__["a" /* default */]();
    group.append(...sprites);
    this.appendChild(group);
    return group;
  }
  batch(...sprites) {
    sprites.forEach(sprite => {
      if (sprite.layer !== this) {
        this.appendChild(sprite);
      }
    });
    const batch = new __WEBPACK_IMPORTED_MODULE_5__batch__["a" /* default */](this);
    batch.add(...sprites);
    return batch;
  }
  adjust(handler, update = true) /* istanbul ignore next  */{
    if (!update) return;
    const outputContext = this.outputContext;
    const shadowContext = this.adjustContext || outputContext.canvas.cloneNode().getContext('2d');

    if (!this[_adjustTimer]) {
      this.autoRender = false;
      shadowContext.clearRect(0, 0, shadowContext.canvas.width, shadowContext.canvas.height);
      shadowContext._clearTag = false;
      shadowContext.drawImage(outputContext.canvas, 0, 0);
      this.adjustContext = shadowContext;
    } else {
      clearTimeout(this[_adjustTimer]);
    }
    this[_adjustTimer] = setTimeout(() => {
      this.autoRender = true;
      delete this[_adjustTimer];
    }, 100);

    if (shadowContext.canvas.width > 0 && shadowContext.canvas.height > 0) {
      this.clearContext(outputContext);
      outputContext.save();
      handler.call(this, outputContext);
      outputContext.drawImage(shadowContext.canvas, 0, 0);
      outputContext.restore();
    }
  }
  clearUpdate() {
    /* istanbul ignore next  */
    this[_updateSet].clear();
  }
};





__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_assign___default()(Layer.prototype, __WEBPACK_IMPORTED_MODULE_12__helpers_group__["a" /* default */]);

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__nodetype__["a" /* registerNodeType */])('layer', Layer, true);

/***/ }),
/* 397 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Path; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__basesprite__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__helpers_render__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__helpers_path__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__nodetype__ = __webpack_require__(42);



var _dec, _dec2, _dec3, _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(57);







let PathSpriteAttr = (_dec = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["parseValue"])(parseFloat), _dec2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["parseValue"])(parseFloat), _dec3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["deprecate"])('Instead use strokeColor.'), (_class = class PathSpriteAttr extends __WEBPACK_IMPORTED_MODULE_2__basesprite__["a" /* default */].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      lineWidth: 1,
      lineDash: null,
      lineDashOffset: 0,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: '',
      fillColor: ''
    }, {
      color() {
        return this.strokeColor;
      },
      d() {
        return this.path ? this.path.d : null;
      }
    });
  }

  set path(val) {
    this.clearCache();
    if (val) {
      val = typeof val === 'string' ? { d: val } : val;
      this.subject.svg = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_path__["a" /* createSvgPath */])(val);
      this.set('path', val);
    } else {
      this.subject.svg = null;
      this.set('path', null);
    }
  }

  set d(val) {
    if (val) {
      const path = this.get('path');
      if (!path) {
        this.path = { d: val };
      } else {
        this.path = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_object_assign___default()(path, { d: val });
      }
    } else {
      this.path = null;
    }
  }

  set lineWidth(val) {
    this.clearCache();
    this.set('lineWidth', Math.round(val));
  }

  set lineDash(val) {
    this.clearCache();
    this.set('lineDash', val);
  }

  set lineDashOffset(val) {
    this.clearCache();
    this.set('lineDashOffset', val);
  }

  /**
    lineCap: butt|round|square
   */

  set lineCap(val) {
    this.clearCache();
    this.set('lineCap', val);
  }

  /**
    lineJoin: miter|round|bevel
   */

  set lineJoin(val) {
    this.clearCache();
    this.set('lineJoin', val);
  }

  set strokeColor(val) {
    this.clearCache();
    this.set('strokeColor', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["parseColorString"])(val));
  }

  set fillColor(val) {
    this.clearCache();
    this.set('fillColor', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["parseColorString"])(val));
  }

  set flexible(val) {
    this.clearCache();
    this.set('flexible', val);
  }

  set color(val) {
    this.strokeColor = val;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'path', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'path'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'd', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [_dec, __WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDash', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineDash'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineDashOffset', [_dec2, __WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineDashOffset'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'fillColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'flexible', [__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'flexible'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_dec3, __WEBPACK_IMPORTED_MODULE_4_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'color'), _class.prototype)), _class));
let Path = (_temp = _class2 = class Path extends __WEBPACK_IMPORTED_MODULE_2__basesprite__["a" /* default */] {

  constructor(attr) {
    if (typeof attr === 'string') {
      attr = { d: attr };
    }
    super(attr);
  }

  set path(val) {
    this.attr('path', val);
  }
  get path() {
    return this.attr('path');
  }

  getPointAtLength(length) {
    if (this.svg) {
      return this.svg.getPointAtLength(length);
    }
    return [0, 0];
  }

  getPathLength() {
    if (this.svg) {
      return this.svg.getTotalLength();
    }
    return 0;
  }

  findPath(offsetX, offsetY) {
    const rect = this.originalRect;
    const pathOffset = this.pathOffset;
    if (this.svg && this.svg.isPointInPath(offsetX - rect[0] - pathOffset[0], offsetY - rect[1] - pathOffset[1])) {
      return [this.svg];
    }
    return [];
  }

  get lineWidth() {
    const lineWidth = this.attr('lineWidth'),
          gradients = this.attr('gradients'),
          fillColor = this.attr('fillColor'),
          strokeColor = this.attr('strokeColor');

    const hasStrokeColor = strokeColor || gradients && gradients.strokeColor,
          hasFillColor = fillColor || gradients && gradients.fillColor;

    if (!hasStrokeColor && hasFillColor) {
      // fill: ignore stroke
      return 0;
    }
    return lineWidth;
  }

  get pathOffset() {
    const lw = Math.round(this.lineWidth);
    return [lw, lw];
  }

  get pathSize() {
    return this.svg ? this.svg.size : [0, 0];
  }

  get contentSize() {
    if (!this.svg) return super.contentSize;

    const bounds = this.svg.bounds;
    let [width, height] = this.attrSize;

    const pathOffset = this.pathOffset;

    if (width === '') {
      width = bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0];
    }
    if (height === '') {
      height = bounds[3] - Math.min(0, bounds[1]) + 2 * pathOffset[1];
    }

    if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
      height = Math.ceil(height * width / (bounds[2] - Math.min(0, bounds[0]) + 2 * pathOffset[0]));
    }

    return [width, height].map(Math.ceil);
  }

  get originalRect() {
    const svg = this.svg;
    if (svg) {
      const bounds = svg.bounds,
            offset = this.pathOffset;
      const [width, height] = this.offsetSize,
            [anchorX, anchorY] = this.attr('anchor');

      const rect = [0, 0, width, height],
            offsetX = Math.min(0, bounds[0]),
            offsetY = Math.min(0, bounds[1]);

      rect[0] = offsetX - offset[0] - anchorX * (width + offsetX - 2 * offset[0]);
      rect[1] = offsetY - offset[1] - anchorY * (height + offsetY - 2 * offset[1]);
      return rect;
    }

    return super.originalRect;
  }

  pointCollision(evt) {
    if (super.pointCollision(evt)) {
      let { offsetX, offsetY } = evt;
      const svg = this.svg;
      if (svg) {
        const bounds = svg.bounds;
        offsetX += Math.min(0, bounds[0]);
        offsetY += Math.min(0, bounds[1]);
      }
      evt.targetPaths = this.findPath(offsetX, offsetY);
      return true;
    }
    return false;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
    const d = this.attr('d'),
          lineWidth = this.attr('lineWidth'),
          lineCap = this.attr('lineCap'),
          lineJoin = this.attr('lineJoin'),
          lineDash = this.attr('lineDash'),
          flexible = this.attr('flexible');

    if (d) {
      const svg = this.svg;
      let [ox, oy, ow, oh] = svg.bounds;
      let [px, py] = this.pathOffset;
      const [w, h] = this.contentSize;
      if (w < ow || h < oh) {
        drawingContext.beginPath();
        drawingContext.rect(0, 0, w, h);
        drawingContext.clip();
      }

      if (flexible) {
        svg.save();
        const sw = w / (ow - Math.min(0, ox) + 2 * px);
        svg.scale(sw, sw);
        ox *= sw;
        oy *= sw;
        px *= sw;
        py *= sw;
      }

      if (ox < 0 || oy < 0) {
        drawingContext.translate(-Math.min(0, ox), -Math.min(0, oy));
      }
      drawingContext.translate(px, py);

      svg.beginPath().to(drawingContext);

      if (flexible) {
        svg.restore();
      }

      drawingContext.lineWidth = lineWidth;
      drawingContext.lineCap = lineCap;
      drawingContext.lineJoin = lineJoin;

      if (lineDash != null) {
        drawingContext.setLineDash(lineDash);

        const lineDashOffset = this.attr('lineDashOffset');
        drawingContext.lineDashOffset = lineDashOffset;
      }

      const fillColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_render__["a" /* findColor */])(drawingContext, this, 'fillColor');
      if (fillColor) {
        drawingContext.fillStyle = fillColor;
      }

      let strokeColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__helpers_render__["a" /* findColor */])(drawingContext, this, 'strokeColor');

      if (!strokeColor && !fillColor) {
        strokeColor = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_sprite_utils__["parseColorString"])('black');
      }
      if (strokeColor) {
        drawingContext.strokeStyle = strokeColor;
      }

      if (fillColor) {
        drawingContext.fill();
      }
      if (strokeColor) {
        drawingContext.stroke();
      }
    }
  }
}, _class2.Attr = PathSpriteAttr, _temp);



Path.setAttributeEffects({
  d: __WEBPACK_IMPORTED_MODULE_5__helpers_path__["b" /* pathEffect */],
  path(path1, path2, p, start, end) {
    path1 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_path__["a" /* createSvgPath */])(path1);
    path2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_path__["a" /* createSvgPath */])(path2);
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__helpers_path__["b" /* pathEffect */])(path1.d, path2.d, p, start, end);
  }
});

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__nodetype__["a" /* registerNodeType */])('path', Path);

/***/ }),
/* 398 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sprite; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_descriptor__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_descriptor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_descriptor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__basesprite__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filters__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_sprite_utils__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__nodetype__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__helpers_render__ = __webpack_require__(53);





var _desc, _value, _class, _class2, _temp;

const _applyDecoratedDescriptor = __webpack_require__(57);








const _texturesCache = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('_texturesCache');
const _images = __WEBPACK_IMPORTED_MODULE_3_babel_runtime_core_js_symbol___default()('_images');

let TextureAttr = (_class = class TextureAttr extends __WEBPACK_IMPORTED_MODULE_4__basesprite__["a" /* default */].Attr {
  constructor(subject) {
    super(subject);
    this.setDefault({
      textures: []
    });
  }
  /*
    {
      image: ...,  //texture resource
      srcRect: ..., //texture clip
      rect: ....,  //texture in sprite offset
      filter: ...  //texture filters
    }
   */

  set textures(textures) {
    if (!Array.isArray(textures)) {
      textures = [textures];
    }

    textures = textures.map(texture => {
      if (!texture.image) {
        texture = { image: texture };
      }
      return texture;
    });

    this.loadTextures(textures);
    this.set('textures', textures);
  }

  loadTextures(textures) {
    const subject = this.subject;

    // adaptive textures
    let width = 0,
        height = 0;

    subject.images = textures.map(texture => {
      const { image, rect, srcRect } = texture;
      let w, h;
      if (rect) {
        w = rect[2] + rect[0];
        h = rect[3] + rect[1];
      } else if (srcRect) {
        w = srcRect[2];
        h = srcRect[3];
      } else {
        w = image.width;
        h = image.height;
      }
      if (width < w) {
        width = w;
      }
      if (height < h) {
        height = h;
      }
      delete texture.image;
      return image;
    });

    subject.texturesSize = [width, height];
    return textures;
  }
}, (_applyDecoratedDescriptor(_class.prototype, 'textures', [__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["attr"]], __WEBPACK_IMPORTED_MODULE_2_babel_runtime_core_js_object_get_own_property_descriptor___default()(_class.prototype, 'textures'), _class.prototype)), _class);
let Sprite = (_temp = _class2 = class Sprite extends __WEBPACK_IMPORTED_MODULE_4__basesprite__["a" /* default */] {

  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){
       }
    })
   */
  constructor(attr) {
    if (attr && attr.constructor !== Object) {
      attr = { textures: [attr] };
    }
    super();
    this[_texturesCache] = new __WEBPACK_IMPORTED_MODULE_1_babel_runtime_core_js_map___default.a();
    if (attr) {
      this.attr(attr);
    }
  }

  cloneNode() {
    const node = super.cloneNode();
    if (this.images) {
      node.textures = this.textures.map((texture, i) => {
        texture.image = this.images[i];
        return texture;
      });
    }
    return node;
  }

  set images(images) {
    this[_images] = images;
  }
  get images() {
    return this[_images];
  }

  set textures(textures) {
    this.attr('textures', textures);
  }
  get textures() {
    return this.attr('textures');
  }

  // override to adapt textures' size
  get contentSize() {
    const [width, height] = this.attrSize;
    const boxSize = this.texturesSize || [0, 0];

    let [w, h] = [width, height];

    if (width === '') {
      w = boxSize[0] | 0;
      if (height !== '' && boxSize[1]) {
        w *= height / boxSize[1];
      }
    }
    if (height === '') {
      h = boxSize[1] | 0;
      if (width !== '' && boxSize[0]) {
        h *= width / boxSize[0];
      }
    }

    return [w, h];
  }

  pointCollision(evt) {
    if (super.pointCollision(evt)) {
      const textures = this.textures;

      if (textures) {
        let { offsetX, offsetY } = evt;
        evt.targetTextures = [];

        const [anchorX, anchorY] = this.attr('anchor'),
              [width, height] = this.contentSize;

        offsetX += width * anchorX;
        offsetY += height * anchorY;

        textures.forEach(texture => {
          const [x, y, w, h] = texture.rect || [0, 0, ...this.innerSize];
          if (offsetX >= x && offsetX - x < w && offsetY >= y && offsetY - y < h) {
            // touched textures
            evt.targetTextures.push(texture);
          }
        });
      }
      return true;
    }
    return false;
  }

  set cache(context) {
    if (context == null) {
      __WEBPACK_IMPORTED_MODULE_8__helpers_render__["b" /* cacheContextPool */].put(...this[_texturesCache].values());
      this[_texturesCache].clear();
      return;
    }
    const key = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.textures),
          cacheMap = this[_texturesCache];

    if (!cacheMap.has(key)) {
      cacheMap.set(key, context);
    }
  }
  get cache() {
    const key = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(this.textures),
          cacheMap = this[_texturesCache];
    if (cacheMap.has(key)) {
      return cacheMap.get(key);
    }
    return null;
  }

  render(t, drawingContext) {
    super.render(t, drawingContext);
    const bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;
    if (!bg && this.textures.length <= 1) {
      this.cachePriority = 0;
    }
    const textures = this.textures;
    let cliped = false;
    if (this.images && this.images.length) {
      textures.forEach((texture, i) => {
        const img = this.images[i];
        const [w, h] = this.contentSize;
        const rect = texture.rect || [0, 0, w, h];
        const srcRect = texture.srcRect;

        if (!cliped && texture.rect && (rect[2] - rect[0] > w || rect[3] - rect[1] > h)) {
          cliped = true;
          drawingContext.beginPath();
          drawingContext.rect(0, 0, w, h);
          drawingContext.clip();
        }

        drawingContext.save();

        if (texture.filter) {
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_sprite_utils__["setDeprecation"])('texture.filter', 'Instead use sprite.attr({filter}).');
          const imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];

          const sx = rect[2] / imgRect[2],
                sy = rect[3] / imgRect[3];

          drawingContext.filter = __WEBPACK_IMPORTED_MODULE_5__filters__["a" /* default */].compile(texture.filter);

          if (srcRect) {
            drawingContext.drawImage(img, ...srcRect, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3]);
          } else {
            drawingContext.drawImage(img, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * img.width, sy * img.height);
          }
        } else if (srcRect) {
          drawingContext.drawImage(img, ...srcRect, ...rect);
        } else {
          drawingContext.drawImage(img, ...rect);
        }

        drawingContext.restore();
      });
    }
  }
}, _class2.Attr = TextureAttr, _temp);



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__nodetype__["a" /* registerNodeType */])('sprite', Sprite);

/***/ }),
/* 399 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// from https://github.com/chrisaljoudi/transformatrix.js
/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */
const Matrix = function (m) {
  m = m || [1, 0, 0, 1, 0, 0];
  this.m = [m[0], m[1], m[2], m[3], m[4], m[5]];
};

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0];
  return this;
};

Matrix.prototype.multiply = function (m) {
  const m1 = this.m;
  let m2;

  if (m instanceof Matrix) {
    m2 = m.m;
  } else {
    m2 = m;
  }

  const m11 = m1[0] * m2[0] + m1[2] * m2[1],
        m12 = m1[1] * m2[0] + m1[3] * m2[1],
        m21 = m1[0] * m2[2] + m1[2] * m2[3],
        m22 = m1[1] * m2[2] + m1[3] * m2[3];

  const dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
        dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];

  m1[0] = m11;
  m1[1] = m12;
  m1[2] = m21;
  m1[3] = m22;
  m1[4] = dx;
  m1[5] = dy;

  return this;
};

Matrix.prototype.inverse = function () {
  const inv = new Matrix(this.m),
        invm = inv.m;

  const d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
        m0 = invm[3] * d,
        m1 = -invm[1] * d,
        m2 = -invm[2] * d,
        m3 = invm[0] * d,
        m4 = d * (invm[2] * invm[5] - invm[3] * invm[4]),
        m5 = d * (invm[1] * invm[4] - invm[0] * invm[5]);

  invm[0] = m0;
  invm[1] = m1;
  invm[2] = m2;
  invm[3] = m3;
  invm[4] = m4;
  invm[5] = m5;

  return inv;
};

/**
  (1, 0, sx)
  (0, 1, sy)
 * */
Matrix.prototype.translate = function (x, y) {
  return this.multiply([1, 0, 0, 1, x, y]);
};

/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */
Matrix.prototype.rotate = function (deg) {
  const rad = deg * Math.PI / 180,
        c = Math.cos(rad),
        s = Math.sin(rad);

  return this.multiply([c, s, -s, c, 0, 0]);
};

/**
    (1, tx, 0)
    (ty, 1, 0)
 */
Matrix.prototype.skew = function (degX, degY) {
  degY |= 0;
  const radX = degX * Math.PI / 180,
        radY = degY * Math.PI / 180;
  const tx = Math.tan(radX),
        ty = Math.tan(radY);

  return this.multiply([1, ty, tx, 1, 0, 0]);
};

/**
  (sx, 0, 0)
  (0, sy, 0)
 */
Matrix.prototype.scale = function (sx, sy) {
  return this.multiply([sx, 0, 0, sy, 0, 0]);
};

Matrix.prototype.transformPoint = function (px, py) {
  const x = px,
        y = py;
  px = x * this.m[0] + y * this.m[2] + this.m[4];
  py = x * this.m[1] + y * this.m[3] + this.m[5];

  return [px, py];
};

Matrix.prototype.transformVector = function (px, py) {
  const x = px,
        y = py;
  px = x * this.m[0] + y * this.m[2];
  py = x * this.m[1] + y * this.m[3];

  return [px, py];
};

/* harmony default export */ __webpack_exports__["a"] = (Matrix);

/***/ }),
/* 400 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
let Vector = class Vector {
  constructor(p1, p2 = [0, 0, 0]) {
    let [x1, y1, z1] = p1,
        [x2, y2, z2] = p2;

    z1 = z1 || 0;
    z2 = z2 || 0;

    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  get length() {
    const { x, y, z } = this;
    return Math.sqrt(x * x + y * y + z * z);
  }

  unit() {
    const length = this.length;
    return new Vector([this.x / length, this.y / length, this.z / length]);
  }

  dot(v) {
    return this.x * v.x + this.y * v.y + this.z * v.z;
  }

  cross(v) {
    const x1 = this.x,
          y1 = this.y,
          z1 = this.z,
          x2 = v.x,
          y2 = v.y,
          z2 = v.z;

    return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1]);
  }
};


/* harmony default export */ __webpack_exports__["a"] = (Vector);

/***/ }),
/* 401 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = attr;
/* harmony export (immutable) */ __webpack_exports__["b"] = setDeprecation;
/* harmony export (immutable) */ __webpack_exports__["c"] = deprecate;
/* harmony export (immutable) */ __webpack_exports__["d"] = parseValue;
/* harmony export (immutable) */ __webpack_exports__["e"] = resolveValue;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils__ = __webpack_require__(228);
function attr(target, prop, descriptor) {
  target.__attributeNames = target.__attributeNames || [];
  target.__attributeNames.push(prop);
  if (!descriptor.get) {
    descriptor.get = function () {
      return this.get(prop);
    };
  } else {
    // enable set default to user defined getter
    const _getter = descriptor.get;
    descriptor.get = function () {
      let ret = _getter.call(this);
      if (ret == null) {
        ret = this.get(prop);
      }
      return ret;
    };
  }
  const _setter = descriptor.set;
  descriptor.set = function (val) {
    this.__clearCacheTag = false;
    this.__updateTag = false;
    _setter.call(this, val);
    if (this.subject && this.subject.hasLayout) {
      const offsetSize = this.subject.offsetSize,
            layoutSize = this.subject.__layoutSize;

      if (!layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1]) {
        this.subject.parent.clearLayout();
      }
      this.subject.__lastLayout = offsetSize;
    }
    if (this.subject && this.__updateTag) {
      this.subject.forceUpdate(this.__clearCacheTag);
    }
    delete this.__updateTag;
    delete this.__clearCacheTag;
  };
  return descriptor;
}



function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils__["a" /* notice */])(msg);
}

function deprecate(...args) {
  let msg = '',
      apiName = '';
  function decorator(target, prop, descriptor) {
    apiName = apiName || `${target.constructor.name}#${prop}`;
    if (typeof descriptor.value === 'function') {
      const func = descriptor.value;
      descriptor.value = function (...args) {
        setDeprecation(apiName, msg);
        return func.apply(this, args);
      };
    }
    if (descriptor.set) {
      const setter = descriptor.set;
      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }
    if (descriptor.get) {
      const getter = descriptor.get;
      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }
  }
  if (args.length === 1) {
    msg = args[0];
    return decorator;
  }
  if (args.length === 2) {
    apiName = args[0];
    msg = args[1];
    return decorator;
  }
  return decorator(...args);
}

function parseValue(...parsers) {
  return function (target, prop, descriptor) {
    const setter = descriptor.set;

    descriptor.set = function (val) {
      val = parsers.reduce((v, parser) => parser(v), val);

      setter.call(this, val);
    };

    return descriptor;
  };
}

function resolveValue(...resolvers) {
  return function (target, prop, descriptor) {
    const getter = descriptor.get;

    descriptor.get = function (val) {
      val = getter.call(this);
      val = resolvers.reduce((v, resolver) => resolver(v), val);
      return val;
    };
  };
}

/***/ }),
/* 402 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Paper2D", function() { return Paper2D; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sprite_core__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__layer__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scene__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__resource__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__platform__ = __webpack_require__(81);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return __WEBPACK_IMPORTED_MODULE_5__platform__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "math", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["c"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["d"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["e"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return __WEBPACK_IMPORTED_MODULE_1__sprite__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["f"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["g"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["h"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return __WEBPACK_IMPORTED_MODULE_2__layer__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return __WEBPACK_IMPORTED_MODULE_3__scene__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "registerNodeType", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["b"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createNode", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["i"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "createElement", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["j"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["k"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return __WEBPACK_IMPORTED_MODULE_4__resource__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return __WEBPACK_IMPORTED_MODULE_0_sprite_core__["l"]; });


const { setDeprecation } = __WEBPACK_IMPORTED_MODULE_0_sprite_core__["a" /* utils */];







if (__WEBPACK_IMPORTED_MODULE_5__platform__["a" /* shim */]) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__platform__["a" /* shim */])();
}

__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_sprite_core__["b" /* registerNodeType */])('layer', __WEBPACK_IMPORTED_MODULE_2__layer__["a" /* default */], true);
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_sprite_core__["b" /* registerNodeType */])('sprite', __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */]);

function Paper2D(...args) {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');
  return new __WEBPACK_IMPORTED_MODULE_3__scene__["a" /* default */](...args);
}

const version = '2.4.3';



/***/ }),
/* 403 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = setDebugToolsObserver;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeDebugToolsObserver;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sprite__ = __webpack_require__(176);


const _debugToolsHandler = __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_symbol___default()('debugToolsHandler');
let _debugToolsOpened = false;

const _debugger = {
  selectedSprite: null
};
/* harmony export (immutable) */ __webpack_exports__["a"] = _debugger;


function setDebugToolsObserver(scene, layer) {
  let observer, mouseTip, tipEl, debugLayer;

  layer[_debugToolsHandler] = layer[_debugToolsHandler] || {};
  layer[_debugToolsHandler].initObserver = () => {
    let handler;

    debugLayer = scene.layer('__debuglayer__');
    debugLayer.canvas.style.background = 'transparent';
    debugLayer.zIndex = 2147483647;

    function hideMouseTip() {
      if (_debugger.selectedSprite) {
        _debugger.selectedSprite.off('update', handler);
        _debugger.selectedSprite = null;
        const event = new CustomEvent('spritejs: observer', { detail: '' });
        document.dispatchEvent(event);
        if (tipEl) {
          tipEl.attr('opacity', 0);
        }
      }
    }

    observer = evt => {
      const sprites = evt.targetSprites;
      if (sprites.length) {
        const sprite = sprites[0];
        if (sprite) {
          if (_debugger.selectedSprite === sprite) {
            return;
          } else if (_debugger.selectedSprite) {
            const event = new CustomEvent('spritejs: observer', { detail: '' });
            document.dispatchEvent(event);
            _debugger.selectedSprite.off('update', handler);
          }

          const event = new CustomEvent('spritejs: observer', { detail: sprite.attr() });
          document.dispatchEvent(event);

          const applyObserver = sprite => {
            const event = new CustomEvent('spritejs: observer', { detail: sprite.attr() });
            document.dispatchEvent(event);
            setMouseTip(sprite);
          };

          handler = evt => {
            applyObserver(evt.target);
          };

          applyObserver(sprite);

          sprite.on('update', handler);
          _debugger.selectedSprite = sprite;
          evt.stopDispatch();
        }
      } else {
        hideMouseTip();
      }
    };
    layer.on('click', observer);

    function setMouseTip(sprite) {
      const renderRect = sprite.renderRect;
      if (!tipEl) {
        tipEl = new __WEBPACK_IMPORTED_MODULE_1__sprite__["a" /* default */]();
        tipEl.attr({
          zIndex: Infinity,
          bgcolor: 'rgba(0, 0, 0, 0.3)'
        });
        debugLayer.append(tipEl);
      }
      tipEl.attr({
        pos: [renderRect[0], renderRect[1]],
        size: [renderRect[2], renderRect[3]]
      });
    }

    mouseTip = evt => {
      if (_debugger.selectedSprite) {
        return;
      }

      const sprite = evt.targetSprites[0];
      if (sprite) {
        setMouseTip(sprite);
      } else {
        debugLayer.remove(tipEl);
        tipEl = null;
      }
    };
    layer.on('mousemove', mouseTip);
    _debugToolsOpened = true;
  };

  layer[_debugToolsHandler].removeObserver = () => {
    if (observer) {
      layer.off('click', observer);
      observer = null;
    }
    if (mouseTip) {
      layer.off('mousemove', mouseTip);
      mouseTip = null;
    }
    if (tipEl) {
      layer.remove(tipEl);
      tipEl = null;
    }
    if (debugLayer) {
      scene.removeLayer(debugLayer);
    }
    _debugger.selectedSprite = null;
    _debugToolsOpened = false;
  };

  if (_debugToolsOpened) {
    layer[_debugToolsHandler].initObserver();
  }

  layer[_debugToolsHandler].attrChange = evt => {
    const { key, value } = evt.detail;
    if (_debugger.selectedSprite) {
      const sprite = _debugger.selectedSprite;
      const keys = key.split('.');
      const prop = keys[1];

      if (keys.length === 2) {
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, value);
        } catch (ex) {}
        /* eslint-enable no-empty */
      } else {
        const attr = sprite.attr(prop);
        for (let i = 2; i < keys.length - 1; i++) {
          attr[keys[i]] = attr[keys[i]] || {};
        }
        attr[keys[keys.length - 1]] = value;
        /* eslint-disable no-empty */
        try {
          sprite.attr(prop, attr);
        } catch (ex) {}
        /* eslint-enable no-empty */
      }
    }
  };

  const debugToolsHandler = layer[_debugToolsHandler];
  document.addEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
  document.addEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
  document.addEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
}

function removeDebugToolsObserver(layer) {
  const debugToolsHandler = layer[_debugToolsHandler];
  if (debugToolsHandler) {
    document.removeEventListener('spritejs: devtools-opened', debugToolsHandler.initObserver);
    document.removeEventListener('spritejs: devtools-closed', debugToolsHandler.removeObserver);
    document.removeEventListener('spritejs: attr-change', debugToolsHandler.attrChange);
  }
}

/***/ }),
/* 404 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Matrix = undefined;

var _matrix = __webpack_require__(405);

var _matrix2 = _interopRequireDefault(_matrix);

var _vector = __webpack_require__(406);

var _vector2 = _interopRequireDefault(_vector);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

exports.Matrix = _matrix2.default;
exports.Vector = _vector2.default;

/***/ }),
/* 405 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
// from https://github.com/chrisaljoudi/transformatrix.js
/**
  default:
          (1, 0, 0)
          (0, 1, 0)
 */
var Matrix = function Matrix(m) {
  m = m || [1, 0, 0, 1, 0, 0];
  this.m = [m[0], m[1], m[2], m[3], m[4], m[5]];
};

Matrix.prototype.unit = function () {
  this.m = [1, 0, 0, 1, 0, 0];
  return this;
};

Matrix.prototype.multiply = function (m) {
  var m1 = this.m;
  var m2 = void 0;

  if (m instanceof Matrix) {
    m2 = m.m;
  } else {
    m2 = m;
  }

  var m11 = m1[0] * m2[0] + m1[2] * m2[1],
      m12 = m1[1] * m2[0] + m1[3] * m2[1],
      m21 = m1[0] * m2[2] + m1[2] * m2[3],
      m22 = m1[1] * m2[2] + m1[3] * m2[3];

  var dx = m1[0] * m2[4] + m1[2] * m2[5] + m1[4],
      dy = m1[1] * m2[4] + m1[3] * m2[5] + m1[5];

  m1[0] = m11;
  m1[1] = m12;
  m1[2] = m21;
  m1[3] = m22;
  m1[4] = dx;
  m1[5] = dy;

  return this;
};

Matrix.prototype.inverse = function () {
  var inv = new Matrix(this.m),
      invm = inv.m;

  var d = 1 / (invm[0] * invm[3] - invm[1] * invm[2]),
      m0 = invm[3] * d,
      m1 = -invm[1] * d,
      m2 = -invm[2] * d,
      m3 = invm[0] * d,
      m4 = d * (invm[2] * invm[5] - invm[3] * invm[4]),
      m5 = d * (invm[1] * invm[4] - invm[0] * invm[5]);

  invm[0] = m0;
  invm[1] = m1;
  invm[2] = m2;
  invm[3] = m3;
  invm[4] = m4;
  invm[5] = m5;

  return inv;
};

/**
  (1, 0, sx)
  (0, 1, sy)
 * */
Matrix.prototype.translate = function (x, y) {
  return this.multiply([1, 0, 0, 1, x, y]);
};

/**
    (cos, -sin, 0)
    (sin, cos, 0)
 */
Matrix.prototype.rotate = function (deg) {
  var rad = deg * Math.PI / 180,
      c = Math.cos(rad),
      s = Math.sin(rad);

  return this.multiply([c, s, -s, c, 0, 0]);
};

/**
    (1, tx, 0)
    (ty, 1, 0)
 */
Matrix.prototype.skew = function (degX, degY) {
  degY |= 0;
  var radX = degX * Math.PI / 180,
      radY = degY * Math.PI / 180;
  var tx = Math.tan(radX),
      ty = Math.tan(radY);

  return this.multiply([1, ty, tx, 1, 0, 0]);
};

/**
  (sx, 0, 0)
  (0, sy, 0)
 */
Matrix.prototype.scale = function (sx, sy) {
  return this.multiply([sx, 0, 0, sy, 0, 0]);
};

Matrix.prototype.transformPoint = function (px, py) {
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2] + this.m[4];
  py = x * this.m[1] + y * this.m[3] + this.m[5];

  return [px, py];
};

Matrix.prototype.transformVector = function (px, py) {
  var x = px,
      y = py;
  px = x * this.m[0] + y * this.m[2];
  py = x * this.m[1] + y * this.m[3];

  return [px, py];
};

exports.default = Matrix;

/***/ }),
/* 406 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _slicedToArray2 = __webpack_require__(479);

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = __webpack_require__(477);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(478);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Vector = function () {
  function Vector(p1) {
    var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];
    (0, _classCallCheck3.default)(this, Vector);

    var _p = (0, _slicedToArray3.default)(p1, 3),
        x1 = _p[0],
        y1 = _p[1],
        z1 = _p[2],
        _p2 = (0, _slicedToArray3.default)(p2, 3),
        x2 = _p2[0],
        y2 = _p2[1],
        z2 = _p2[2];

    z1 = z1 || 0;
    z2 = z2 || 0;

    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  (0, _createClass3.default)(Vector, [{
    key: "unit",
    value: function unit() {
      var length = this.length;
      return new Vector([this.x / length, this.y / length, this.z / length]);
    }
  }, {
    key: "dot",
    value: function dot(v) {
      return this.x * v.x + this.y * v.y + this.z * v.z;
    }
  }, {
    key: "cross",
    value: function cross(v) {
      var x1 = this.x,
          y1 = this.y,
          z1 = this.z,
          x2 = v.x,
          y2 = v.y,
          z2 = v.z;

      return new Vector([y1 * z2 - z1 * y2, z1 * x2 - x1 * z2, x1 * y2 - x2 * y1]);
    }
  }, {
    key: "length",
    get: function get() {
      var x = this.x,
          y = this.y,
          z = this.z;

      return Math.sqrt(x * x + y * y + z * z);
    }
  }]);
  return Vector;
}();

exports.default = Vector;

/***/ }),
/* 407 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Convert an arc to a sequence of cubic bézier curves
//


var TAU = Math.PI * 2;

/* eslint-disable space-infix-ops */

// Calculate an angle between two unit vectors
//
// Since we measure angle between radii of circular arcs,
// we can use simplified math (without length normalization)
//
function unit_vector_angle(ux, uy, vx, vy) {
  var sign = ux * vy - uy * vx < 0 ? -1 : 1;
  var dot = ux * vx + uy * vy;

  // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);

  // rounding errors, e.g. -1.0000000000000002 can screw up this
  if (dot > 1.0) {
    dot = 1.0;
  }
  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
}

// Convert from endpoint to center parameterization,
// see http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
//
// Return [cx, cy, theta1, delta_theta]
//
function get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi) {
  // Step 1.
  //
  // Moving an ellipse so origin will be the middlepoint between our two
  // points. After that, rotate it to line up ellipse axes with coordinate
  // axes.
  //
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  var rx_sq = rx * rx;
  var ry_sq = ry * ry;
  var x1p_sq = x1p * x1p;
  var y1p_sq = y1p * y1p;

  // Step 2.
  //
  // Compute coordinates of the centre of this ellipse (cx', cy')
  // in the new coordinate system.
  //
  var radicant = rx_sq * ry_sq - rx_sq * y1p_sq - ry_sq * x1p_sq;

  if (radicant < 0) {
    // due to rounding errors it might be e.g. -1.3877787807814457e-17
    radicant = 0;
  }

  radicant /= rx_sq * y1p_sq + ry_sq * x1p_sq;
  radicant = Math.sqrt(radicant) * (fa === fs ? -1 : 1);

  var cxp = radicant * rx / ry * y1p;
  var cyp = radicant * -ry / rx * x1p;

  // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //
  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2;

  // Step 4.
  //
  // Compute angles (theta1, delta_theta).
  //
  var v1x = (x1p - cxp) / rx;
  var v1y = (y1p - cyp) / ry;
  var v2x = (-x1p - cxp) / rx;
  var v2y = (-y1p - cyp) / ry;

  var theta1 = unit_vector_angle(1, 0, v1x, v1y);
  var delta_theta = unit_vector_angle(v1x, v1y, v2x, v2y);

  if (fs === 0 && delta_theta > 0) {
    delta_theta -= TAU;
  }
  if (fs === 1 && delta_theta < 0) {
    delta_theta += TAU;
  }

  return [cx, cy, theta1, delta_theta];
}

//
// Approximate one unit arc segment with bézier curves,
// see http://math.stackexchange.com/questions/873224
//
function approximate_unit_arc(theta1, delta_theta) {
  var alpha = 4 / 3 * Math.tan(delta_theta / 4);

  var x1 = Math.cos(theta1);
  var y1 = Math.sin(theta1);
  var x2 = Math.cos(theta1 + delta_theta);
  var y2 = Math.sin(theta1 + delta_theta);

  return [x1, y1, x1 - y1 * alpha, y1 + x1 * alpha, x2 + y2 * alpha, y2 - x2 * alpha, x2, y2];
}

module.exports = function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360);

  // Make sure radii are valid
  //
  var x1p = cos_phi * (x1 - x2) / 2 + sin_phi * (y1 - y2) / 2;
  var y1p = -sin_phi * (x1 - x2) / 2 + cos_phi * (y1 - y2) / 2;

  if (x1p === 0 && y1p === 0) {
    // we're asked to draw line to itself
    return [];
  }

  if (rx === 0 || ry === 0) {
    // one of the radii is zero
    return [];
  }

  // Compensate out-of-range radii
  //
  rx = Math.abs(rx);
  ry = Math.abs(ry);

  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);
  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  }

  // Get center parameters (cx, cy, theta1, delta_theta)
  //
  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);

  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3];

  // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //
  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  }

  // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //
  return result.map(function (curve) {
    for (var i = 0; i < curve.length; i += 2) {
      var x = curve[i + 0];
      var y = curve[i + 1];

      // scale
      x *= rx;
      y *= ry;

      // rotate
      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y;

      // translate
      curve[i + 0] = xp + cc[0];
      curve[i + 1] = yp + cc[1];
    }

    return curve;
  });
};

/***/ }),
/* 408 */
/***/ (function(module, exports) {

module.exports = absolutize;

/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 */

/* eslint-disable */
function absolutize(path) {
	var startX = 0;
	var startY = 0;
	var x = 0;
	var y = 0;

	return path.map(function (seg) {
		seg = seg.slice();
		var type = seg[0];
		var command = type.toUpperCase();

		// is relative
		if (type != command) {
			seg[0] = command;
			switch (type) {
				case 'a':
					seg[6] += x;
					seg[7] += y;
					break;
				case 'v':
					seg[1] += y;
					break;
				case 'h':
					seg[1] += x;
					break;
				default:
					for (var i = 1; i < seg.length;) {
						seg[i++] += x;
						seg[i++] += y;
					}
			}
		}

		// update cursor state
		switch (command) {
			case 'Z':
				x = startX;
				y = startY;
				break;
			case 'H':
				x = seg[1];
				break;
			case 'V':
				y = seg[1];
				break;
			case 'M':
				x = startX = seg[1];
				y = startY = seg[2];
				break;
			default:
				x = seg[seg.length - 2];
				y = seg[seg.length - 1];
		}

		return seg;
	});
}
/* eslint-enable */

/***/ }),
/* 409 */
/***/ (function(module, exports) {


module.exports = function isPath(str) {
  if (typeof str !== 'string') return false;

  str = str.trim();

  // https://www.w3.org/TR/SVG/paths.html#PathDataBNF
  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;

  return false;
};

/***/ }),
/* 410 */
/***/ (function(module, exports) {

module.exports = parse;

/**
 * expected argument lengths
 * @type {Object}
 */
/* eslint-disable */
var length = { a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0

	/**
  * segment pattern
  * @type {RegExp}
  */

};var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
	var data = [];
	path.replace(segment, function (_, command, args) {
		var type = command.toLowerCase();
		args = parseValues(args);

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)));
			type = 'l';
			command = command == 'm' ? 'l' : 'L';
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command);
				return data.push(args);
			}
			if (args.length < length[type]) throw new Error('malformed path data');
			data.push([command].concat(args.splice(0, length[type])));
		}
	});
	return data;
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;

function parseValues(args) {
	var numbers = args.match(number);
	return numbers ? numbers.map(Number) : [];
}
/* eslint-enable */

/***/ }),
/* 411 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = getPointAtLength;
/* harmony export (immutable) */ __webpack_exports__["c"] = getTotalLength;
/* harmony export (immutable) */ __webpack_exports__["a"] = isPointInPath;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__ = __webpack_require__(473);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point_in_path__ = __webpack_require__(412);



const getPoints = __webpack_require__(524);

const cacheMap = new __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_map___default.a();

function get(d) {
  if (cacheMap.has(d)) {
    return cacheMap.get(d);
  }
  const points = getPoints(d);
  cacheMap.set(d, points);
  return points;
}

function getPointAtLength(d, len) {
  const points = get(d);
  return points.at(len);
}

function getTotalLength(d) {
  const points = get(d);
  return points.length();
}

function isPointInPath({ path }, x, y) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__point_in_path__["a" /* default */])(path, x, y);
}

/***/ }),
/* 412 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = pointInPath;
const clone = obj => {
  if (typeof obj === 'function' || Object(obj) !== obj) {
    return obj;
  }

  const res = new obj.constructor();
  /* eslint-disable no-restricted-syntax */
  for (const key in obj) {
    /* eslint-disable no-prototype-builtins */
    if (obj.hasOwnProperty(key)) {
      res[key] = clone(obj[key]);
    }
    /* eslint-enable no-prototype-builtins */
  }
  /* eslint-enable no-restricted-syntax */
  return res;
};

function paths(ps) {
  const p = paths.ps = paths.ps || {};
  if (p[ps]) {
    p[ps].sleep = 100;
  } else {
    p[ps] = {
      sleep: 100
    };
  }
  setTimeout(() => {
    /* eslint-disable no-restricted-syntax */
    for (const key in p) {
      /* eslint-disable no-prototype-builtins */
      if (p.hasOwnProperty(key) && key !== ps) {
        p[key].sleep--;
        if (!p[key].sleep) delete p[key];
      }
      /* eslint-enable no-prototype-builtins */
    }
    /* eslint-enable no-restricted-syntax */
  });
  return p[ps];
}

function box(x, y, width, height) {
  if (x == null) {
    x = y = width = height = 0;
  }
  if (y == null) {
    y = x.y;
    width = x.width;
    height = x.height;
    x = x.x;
  }
  return {
    x,
    y,
    width,
    w: width,
    height,
    h: height,
    x2: x + width,
    y2: y + height,
    cx: x + width / 2,
    cy: y + height / 2,
    r1: Math.min(width, height) / 2,
    r2: Math.max(width, height) / 2,
    r0: Math.sqrt(width * width + height * height) / 2,
    path: rectPath(x, y, width, height),
    vb: [x, y, width, height].join(' ')
  };
}

function findDotsAtSegment(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y, t) {
  const t1 = 1 - t,
        t13 = t1 ** 3,
        t12 = t1 ** 2,
        t2 = t * t,
        t3 = t2 * t,
        x = t13 * p1x + t12 * 3 * t * c1x + t1 * 3 * t * t * c2x + t3 * p2x,
        y = t13 * p1y + t12 * 3 * t * c1y + t1 * 3 * t * t * c2y + t3 * p2y,
        mx = p1x + 2 * t * (c1x - p1x) + t2 * (c2x - 2 * c1x + p1x),
        my = p1y + 2 * t * (c1y - p1y) + t2 * (c2y - 2 * c1y + p1y),
        nx = c1x + 2 * t * (c2x - c1x) + t2 * (p2x - 2 * c2x + c1x),
        ny = c1y + 2 * t * (c2y - c1y) + t2 * (p2y - 2 * c2y + c1y),
        ax = t1 * p1x + t * c1x,
        ay = t1 * p1y + t * c1y,
        cx = t1 * c2x + t * p2x,
        cy = t1 * c2y + t * p2y,
        alpha = 90 - Math.atan2(mx - nx, my - ny) * 180 / Math.PI;
  // (mx > nx || my < ny) && (alpha += 180);
  return {
    x,
    y,
    m: { x: mx, y: my },
    n: { x: nx, y: ny },
    start: { x: ax, y: ay },
    end: { x: cx, y: cy },
    alpha
  };
}

function bezierBBox(p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y) {
  if (!Array.isArray(p1x)) {
    p1x = [p1x, p1y, c1x, c1y, c2x, c2y, p2x, p2y];
  }
  const bbox = curveDim(...p1x);
  return box(bbox.min.x, bbox.min.y, bbox.max.x - bbox.min.x, bbox.max.y - bbox.min.y);
}

function isPointInsideBBox(bbox, x, y) {
  return x >= bbox.x && x <= bbox.x + bbox.width && y >= bbox.y && y <= bbox.y + bbox.height;
}

function isBBoxIntersect(bbox1, bbox2) {
  bbox1 = box(bbox1);
  bbox2 = box(bbox2);
  const { x: x1, y: y1, width: w1, height: h1 } = bbox1,
        { x: x2, y: y2, width: w2, height: h2 } = bbox2;

  const c1x = x1 + w1 / 2,
        c1y = y1 + h1 / 2;

  const c2x = x2 + w2 / 2,
        c2y = y2 + h2 / 2;

  return Math.abs(c1x - c2x) <= (w1 + w2) / 2 || Math.abs(c1y - c2y) <= (h1 + h2) / 2;
}

function base3(t, p1, p2, p3, p4) {
  const t1 = -3 * p1 + 9 * p2 - 9 * p3 + 3 * p4,
        t2 = t * t1 + 6 * p1 - 12 * p2 + 6 * p3;
  return t * t2 - 3 * p1 + 3 * p2;
}

function bezlen(x1, y1, x2, y2, x3, y3, x4, y4, z) {
  if (z == null) {
    z = 1;
  }
  z = Math.max(0, Math.min(z, 1));

  const z2 = z / 2,
        n = 12,
        Tvalues = [-0.1252, 0.1252, -0.3678, 0.3678, -0.5873, 0.5873, -0.7699, 0.7699, -0.9041, 0.9041, -0.9816, 0.9816],
        Cvalues = [0.2491, 0.2491, 0.2335, 0.2335, 0.2032, 0.2032, 0.1601, 0.1601, 0.1069, 0.1069, 0.0472, 0.0472];
  let sum = 0;
  for (let i = 0; i < n; i++) {
    const ct = z2 * Tvalues[i] + z2,
          xbase = base3(ct, x1, x2, x3, x4),
          ybase = base3(ct, y1, y2, y3, y4),
          comb = xbase * xbase + ybase * ybase;
    sum += Cvalues[i] * Math.sqrt(comb);
  }
  return z2 * sum;
}

function intersect(x1, y1, x2, y2, x3, y3, x4, y4) {
  if (Math.max(x1, x2) < Math.min(x3, x4) || Math.min(x1, x2) > Math.max(x3, x4) || Math.max(y1, y2) < Math.min(y3, y4) || Math.min(y1, y2) > Math.max(y3, y4)) {
    return;
  }
  const nx = (x1 * y2 - y1 * x2) * (x3 - x4) - (x1 - x2) * (x3 * y4 - y3 * x4),
        ny = (x1 * y2 - y1 * x2) * (y3 - y4) - (y1 - y2) * (x3 * y4 - y3 * x4),
        denominator = (x1 - x2) * (y3 - y4) - (y1 - y2) * (x3 - x4);

  if (!denominator) {
    return;
  }
  const px = nx / denominator,
        py = ny / denominator,
        px2 = Number(px.toFixed(2)),
        py2 = Number(py.toFixed(2));
  if (px2 < Number(Math.min(x1, x2).toFixed(2)) || px2 > Number(Math.max(x1, x2).toFixed(2)) || px2 < Number(Math.min(x3, x4).toFixed(2)) || px2 > Number(Math.max(x3, x4).toFixed(2)) || py2 < Number(Math.min(y1, y2).toFixed(2)) || py2 > Number(Math.max(y1, y2).toFixed(2)) || py2 < Number(Math.min(y3, y4).toFixed(2)) || py2 > Number(Math.max(y3, y4).toFixed(2))) {
    return;
  }
  return { x: px, y: py };
}

function interHelper(bez1, bez2, justCount) {
  const bbox1 = bezierBBox(bez1),
        bbox2 = bezierBBox(bez2);
  if (!isBBoxIntersect(bbox1, bbox2)) {
    return justCount ? 0 : [];
  }
  const l1 = bezlen.apply(0, bez1),
        l2 = bezlen.apply(0, bez2),
        n1 = Math.ceil(l1 / 8),
        n2 = Math.ceil(l2 / 8),
        dots1 = [],
        dots2 = [],
        xy = {};
  let res = justCount ? 0 : [];
  for (let i = 0; i < n1 + 1; i++) {
    const p = findDotsAtSegment.apply(0, bez1.concat(i / n1));
    dots1.push({ x: p.x, y: p.y, t: i / n1 });
  }
  for (let i = 0; i < n2 + 1; i++) {
    const p = findDotsAtSegment.apply(0, bez2.concat(i / n2));
    dots2.push({ x: p.x, y: p.y, t: i / n2 });
  }
  for (let i = 0; i < n1; i++) {
    for (let j = 0; j < n2; j++) {
      const di = dots1[i],
            di1 = dots1[i + 1],
            dj = dots2[j],
            dj1 = dots2[j + 1],
            ci = Math.abs(di1.x - di.x) < 0.001 ? 'y' : 'x',
            cj = Math.abs(dj1.x - dj.x) < 0.001 ? 'y' : 'x',
            is = intersect(di.x, di.y, di1.x, di1.y, dj.x, dj.y, dj1.x, dj1.y);
      if (is) {
        if (xy[is.x.toFixed(4)] !== is.y.toFixed(4)) {
          xy[is.x.toFixed(4)] = is.y.toFixed(4);
          const t1 = di.t + Math.abs((is[ci] - di[ci]) / (di1[ci] - di[ci])) * (di1.t - di.t),
                t2 = dj.t + Math.abs((is[cj] - dj[cj]) / (dj1[cj] - dj[cj])) * (dj1.t - dj.t);
          if (t1 >= 0 && t1 <= 1 && t2 >= 0 && t2 <= 1) {
            if (justCount) {
              res++;
            } else {
              res.push({
                x: is.x,
                y: is.y,
                t1,
                t2
              });
            }
          }
        }
      }
    }
  }
  return res;
}

function interPathHelper(path1, path2, justCount) {
  let x1,
      y1,
      x2,
      y2,
      x1m,
      y1m,
      x2m,
      y2m,
      bez1,
      bez2,
      res = justCount ? 0 : [];
  for (let i = 0, ii = path1.length; i < ii; i++) {
    const pi = path1[i];
    if (pi[0] === 'M') {
      x1 = x1m = pi[1];
      y1 = y1m = pi[2];
    } else {
      if (pi[0] === 'C') {
        bez1 = [x1, y1].concat(pi.slice(1));
        x1 = bez1[6];
        y1 = bez1[7];
      } else {
        bez1 = [x1, y1, x1, y1, x1m, y1m, x1m, y1m];
        x1 = x1m;
        y1 = y1m;
      }
      for (let j = 0, jj = path2.length; j < jj; j++) {
        const pj = path2[j];
        if (pj[0] === 'M') {
          x2 = x2m = pj[1];
          y2 = y2m = pj[2];
        } else {
          if (pj[0] === 'C') {
            bez2 = [x2, y2].concat(pj.slice(1));
            x2 = bez2[6];
            y2 = bez2[7];
          } else {
            bez2 = [x2, y2, x2, y2, x2m, y2m, x2m, y2m];
            x2 = x2m;
            y2 = y2m;
          }
          const intr = interHelper(bez1, bez2, justCount);
          if (justCount) {
            res += intr;
          } else {
            for (let k = 0, kk = intr.length; k < kk; k++) {
              intr[k].segment1 = i;
              intr[k].segment2 = j;
              intr[k].bez1 = bez1;
              intr[k].bez2 = bez2;
            }
            res = res.concat(intr);
          }
        }
      }
    }
  }
  return res;
}

function pathBBox(path) {
  const pth = paths(path);

  if (pth.bbox) {
    return clone(pth.bbox);
  }

  if (!path) {
    return box();
  }

  let x = 0;
  let y = 0;
  let X = [];
  let Y = [];
  let p = [];

  for (let i = 0, c = path.length; i < c; i++) {
    p = path[i];
    if (p[0] === 'M') {
      x = p[1];
      y = p[2];
      X.push(x);
      Y.push(y);
    } else {
      const dim = curveDim(x, y, p[1], p[2], p[3], p[4], p[5], p[6]);
      X = X.concat(dim.min.x, dim.max.x);
      Y = Y.concat(dim.min.y, dim.max.y);
      x = p[5];
      y = p[6];
    }
  }

  const xmin = Math.min.apply(0, X);
  const ymin = Math.min.apply(0, Y);
  const xmax = Math.max.apply(0, X);
  const ymax = Math.max.apply(0, Y);
  const bb = box(xmin, ymin, xmax - xmin, ymax - ymin);

  pth.bbox = clone(bb);
  return bb;
}

function rectPath(x, y, w, h, r) {
  if (r) {
    return [['M', Number(x) + Number(r), y], ['l', w - r * 2, 0], ['a', r, r, 0, 0, 1, r, r], ['l', 0, h - r * 2], ['a', r, r, 0, 0, 1, -r, r], ['l', r * 2 - w, 0], ['a', r, r, 0, 0, 1, -r, -r], ['l', 0, r * 2 - h], ['a', r, r, 0, 0, 1, r, -r], ['z']];
  }
  const res = [['M', x, y], ['l', w, 0], ['l', 0, h], ['l', -w, 0], ['z']];
  // res.toString = toString;
  return res;
}

// Returns bounding box of cubic bezier curve.
// Source: http://blog.hackers-cafe.net/2009/06/how-to-calculate-bezier-curves-bounding.html
// Original version: NISHIO Hirokazu
// Modifications: https://github.com/timo22345
function curveDim(x0, y0, x1, y1, x2, y2, x3, y3) {
  const tvalues = [],
        bounds = [[], []];
  let a, b, c, t, t1, t2, b2ac, sqrtb2ac;
  /* eslint-disable no-continue */
  for (let i = 0; i < 2; ++i) {
    if (i === 0) {
      b = 6 * x0 - 12 * x1 + 6 * x2;
      a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
      c = 3 * x1 - 3 * x0;
    } else {
      b = 6 * y0 - 12 * y1 + 6 * y2;
      a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
      c = 3 * y1 - 3 * y0;
    }
    if (Math.abs(a) < 1e-12) {
      if (Math.abs(b) < 1e-12) {
        continue;
      }
      t = -c / b;
      if (t > 0 && t < 1) {
        tvalues.push(t);
      }
      continue;
    }
    b2ac = b * b - 4 * c * a;
    sqrtb2ac = Math.sqrt(b2ac);
    if (b2ac < 0) {
      continue;
    }
    t1 = (-b + sqrtb2ac) / (2 * a);
    if (t1 > 0 && t1 < 1) {
      tvalues.push(t1);
    }
    t2 = (-b - sqrtb2ac) / (2 * a);
    if (t2 > 0 && t2 < 1) {
      tvalues.push(t2);
    }
  }
  /* eslint-enable no-continue */

  let j = tvalues.length,
      mt;
  const jlen = j;

  while (j--) {
    t = tvalues[j];
    mt = 1 - t;
    bounds[0][j] = mt * mt * mt * x0 + 3 * mt * mt * t * x1 + 3 * mt * t * t * x2 + t * t * t * x3;
    bounds[1][j] = mt * mt * mt * y0 + 3 * mt * mt * t * y1 + 3 * mt * t * t * y2 + t * t * t * y3;
  }

  bounds[0][jlen] = x0;
  bounds[1][jlen] = y0;
  bounds[0][jlen + 1] = x3;
  bounds[1][jlen + 1] = y3;
  bounds[0].length = bounds[1].length = jlen + 2;

  return {
    min: { x: Math.min.apply(0, bounds[0]), y: Math.min.apply(0, bounds[1]) },
    max: { x: Math.max.apply(0, bounds[0]), y: Math.max.apply(0, bounds[1]) }
  };
}

const normalize = __webpack_require__(229);
function pointInPath(path, x, y) {
  const bbox = pathBBox(path);

  if (!isPointInsideBBox(bbox, x, y)) {
    return false;
  }

  if (interPathHelper(path, normalize([['M', x, y], ['H', bbox.x2 + 10]]), 1) % 2 !== 1) {
    return false;
  }

  return true;
}

/***/ }),
/* 413 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(418), __esModule: true };

/***/ }),
/* 414 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(419), __esModule: true };

/***/ }),
/* 415 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(421), __esModule: true };

/***/ }),
/* 416 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(422), __esModule: true };

/***/ }),
/* 417 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(423), __esModule: true };

/***/ }),
/* 418 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(453);
__webpack_require__(461);
__webpack_require__(460);
__webpack_require__(459);
module.exports = __webpack_require__(3).Map;


/***/ }),
/* 419 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(454);
module.exports = __webpack_require__(3).Number.isNaN;


/***/ }),
/* 420 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(455);
module.exports = __webpack_require__(3).Object.assign;


/***/ }),
/* 421 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(462);
module.exports = __webpack_require__(3).Object.entries;


/***/ }),
/* 422 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(456);
var $Object = __webpack_require__(3).Object;
module.exports = function getOwnPropertyDescriptor(it, key) {
  return $Object.getOwnPropertyDescriptor(it, key);
};


/***/ }),
/* 423 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(463);
module.exports = __webpack_require__(3).Object.values;


/***/ }),
/* 424 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(155);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(457);
__webpack_require__(464);
__webpack_require__(465);
module.exports = __webpack_require__(3).Promise;


/***/ }),
/* 425 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(458);
__webpack_require__(155);
__webpack_require__(466);
__webpack_require__(467);
module.exports = __webpack_require__(3).Symbol;


/***/ }),
/* 426 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 427 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(74);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 428 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(31);
var toLength = __webpack_require__(151);
var toAbsoluteIndex = __webpack_require__(450);
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
/* 429 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(43);
var IObject = __webpack_require__(141);
var toObject = __webpack_require__(152);
var toLength = __webpack_require__(151);
var asc = __webpack_require__(431);
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
/* 430 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(22);
var isArray = __webpack_require__(233);
var SPECIES = __webpack_require__(7)('species');

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
/* 431 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(430);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 432 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(23).f;
var create = __webpack_require__(145);
var redefineAll = __webpack_require__(147);
var ctx = __webpack_require__(43);
var anInstance = __webpack_require__(136);
var forOf = __webpack_require__(74);
var $iterDefine = __webpack_require__(142);
var step = __webpack_require__(234);
var setSpecies = __webpack_require__(242);
var DESCRIPTORS = __webpack_require__(21);
var fastKey = __webpack_require__(143).fastKey;
var validate = __webpack_require__(245);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 433 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(137);
var from = __webpack_require__(427);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 434 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(6);
var $export = __webpack_require__(5);
var meta = __webpack_require__(143);
var fails = __webpack_require__(44);
var hide = __webpack_require__(30);
var redefineAll = __webpack_require__(147);
var forOf = __webpack_require__(74);
var anInstance = __webpack_require__(136);
var isObject = __webpack_require__(22);
var setToStringTag = __webpack_require__(78);
var dP = __webpack_require__(23).f;
var each = __webpack_require__(429)(0);
var DESCRIPTORS = __webpack_require__(21);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 435 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(76);
var gOPS = __webpack_require__(146);
var pIE = __webpack_require__(77);
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
/* 436 */
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
/* 437 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(75);
var ITERATOR = __webpack_require__(7)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 438 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(29);
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
/* 439 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(145);
var descriptor = __webpack_require__(94);
var setToStringTag = __webpack_require__(78);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(30)(IteratorPrototype, __webpack_require__(7)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 440 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(7)('iterator');
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
/* 441 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(6);
var macrotask = __webpack_require__(244).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(73)(process) == 'process';

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
  // browsers with MutationObserver
  } else if (Observer) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
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
/* 442 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(76);
var gOPS = __webpack_require__(146);
var pIE = __webpack_require__(77);
var toObject = __webpack_require__(152);
var IObject = __webpack_require__(141);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(44)(function () {
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
/* 443 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(23);
var anObject = __webpack_require__(29);
var getKeys = __webpack_require__(76);

module.exports = __webpack_require__(21) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 444 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(31);
var gOPN = __webpack_require__(236).f;
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
/* 445 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(45);
var toObject = __webpack_require__(152);
var IE_PROTO = __webpack_require__(148)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 446 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var fails = __webpack_require__(44);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 447 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);
var aFunction = __webpack_require__(72);
var ctx = __webpack_require__(43);
var forOf = __webpack_require__(74);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 448 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(5);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 449 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(150);
var defined = __webpack_require__(138);
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
/* 450 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(150);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 451 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(137);
var ITERATOR = __webpack_require__(7)('iterator');
var Iterators = __webpack_require__(75);
module.exports = __webpack_require__(3).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 452 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(426);
var step = __webpack_require__(234);
var Iterators = __webpack_require__(75);
var toIObject = __webpack_require__(31);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(142)(Array, 'Array', function (iterated, kind) {
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
/* 453 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(432);
var validate = __webpack_require__(245);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(434)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 454 */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(5);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 455 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(5);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(442) });


/***/ }),
/* 456 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(31);
var $getOwnPropertyDescriptor = __webpack_require__(235).f;

__webpack_require__(446)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 457 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(93);
var global = __webpack_require__(6);
var ctx = __webpack_require__(43);
var classof = __webpack_require__(137);
var $export = __webpack_require__(5);
var isObject = __webpack_require__(22);
var aFunction = __webpack_require__(72);
var anInstance = __webpack_require__(136);
var forOf = __webpack_require__(74);
var speciesConstructor = __webpack_require__(243);
var task = __webpack_require__(244).set;
var microtask = __webpack_require__(441)();
var newPromiseCapabilityModule = __webpack_require__(144);
var perform = __webpack_require__(239);
var promiseResolve = __webpack_require__(240);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(7)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
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
      var result, then;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value);
            if (domain) domain.exit();
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
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
  if (promise._h == 1) return false;
  var chain = promise._a || promise._c;
  var i = 0;
  var reaction;
  while (chain.length > i) {
    reaction = chain[i++];
    if (reaction.fail || !isUnhandled(reaction.promise)) return false;
  } return true;
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
  Internal.prototype = __webpack_require__(147)($Promise.prototype, {
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
__webpack_require__(78)($Promise, PROMISE);
__webpack_require__(242)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

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
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(440)(function (iter) {
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
/* 458 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(6);
var has = __webpack_require__(45);
var DESCRIPTORS = __webpack_require__(21);
var $export = __webpack_require__(5);
var redefine = __webpack_require__(241);
var META = __webpack_require__(143).KEY;
var $fails = __webpack_require__(44);
var shared = __webpack_require__(149);
var setToStringTag = __webpack_require__(78);
var uid = __webpack_require__(95);
var wks = __webpack_require__(7);
var wksExt = __webpack_require__(246);
var wksDefine = __webpack_require__(154);
var enumKeys = __webpack_require__(435);
var isArray = __webpack_require__(233);
var anObject = __webpack_require__(29);
var toIObject = __webpack_require__(31);
var toPrimitive = __webpack_require__(153);
var createDesc = __webpack_require__(94);
var _create = __webpack_require__(145);
var gOPNExt = __webpack_require__(444);
var $GOPD = __webpack_require__(235);
var $DP = __webpack_require__(23);
var $keys = __webpack_require__(76);
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
  __webpack_require__(236).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(77).f = $propertyIsEnumerable;
  __webpack_require__(146).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(93)) {
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
    if (it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    replacer = args[1];
    if (typeof replacer == 'function') $replacer = replacer;
    if ($replacer || !isArray(replacer)) replacer = function (key, value) {
      if ($replacer) value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(30)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 459 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(447)('Map');


/***/ }),
/* 460 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(448)('Map');


/***/ }),
/* 461 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(5);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(433)('Map') });


/***/ }),
/* 462 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5);
var $entries = __webpack_require__(238)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 463 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(5);
var $values = __webpack_require__(238)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 464 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(5);
var core = __webpack_require__(3);
var global = __webpack_require__(6);
var speciesConstructor = __webpack_require__(243);
var promiseResolve = __webpack_require__(240);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 465 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(5);
var newPromiseCapability = __webpack_require__(144);
var perform = __webpack_require__(239);

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),
/* 466 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154)('asyncIterator');


/***/ }),
/* 467 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(154)('observable');


/***/ }),
/* 468 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

// The _isBuffer check is for Safari 5-7 support, because it's missing
// Object.prototype.constructor. Remove this eventually
module.exports = function (obj) {
  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
}

function isBuffer (obj) {
  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}

// For Node v0.10 support. Remove this eventually.
function isSlowBuffer (obj) {
  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
}


/***/ }),
/* 469 */
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 470 */
/***/ (function(module, exports) {


module.exports = absolutize

/**
 * redefine `path` with absolute coordinates
 *
 * @param {Array} path
 * @return {Array}
 */

function absolutize(path){
	var startX = 0
	var startY = 0
	var x = 0
	var y = 0

	return path.map(function(seg){
		seg = seg.slice()
		var type = seg[0]
		var command = type.toUpperCase()

		// is relative
		if (type != command) {
			seg[0] = command
			switch (type) {
				case 'a':
					seg[6] += x
					seg[7] += y
					break
				case 'v':
					seg[1] += y
					break
				case 'h':
					seg[1] += x
					break
				default:
					for (var i = 1; i < seg.length;) {
						seg[i++] += x
						seg[i++] += y
					}
			}
		}

		// update cursor state
		switch (command) {
			case 'Z':
				x = startX
				y = startY
				break
			case 'H':
				x = seg[1]
				break
			case 'V':
				y = seg[1]
				break
			case 'M':
				x = startX = seg[1]
				y = startY = seg[2]
				break
			default:
				x = seg[seg.length - 2]
				y = seg[seg.length - 1]
		}

		return seg
	})
}


/***/ }),
/* 471 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(480), __esModule: true };

/***/ }),
/* 472 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(481), __esModule: true };

/***/ }),
/* 473 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(482), __esModule: true };

/***/ }),
/* 474 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(483), __esModule: true };

/***/ }),
/* 475 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(484), __esModule: true };

/***/ }),
/* 476 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(485), __esModule: true };

/***/ }),
/* 477 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 478 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(475);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 479 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _isIterable2 = __webpack_require__(472);

var _isIterable3 = _interopRequireDefault(_isIterable2);

var _getIterator2 = __webpack_require__(471);

var _getIterator3 = _interopRequireDefault(_getIterator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = (0, _getIterator3.default)(arr), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"]) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if ((0, _isIterable3.default)(Object(arr))) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError("Invalid attempt to destructure non-iterable instance");
    }
  };
}();

/***/ }),
/* 480 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
__webpack_require__(173);
module.exports = __webpack_require__(510);


/***/ }),
/* 481 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(174);
__webpack_require__(173);
module.exports = __webpack_require__(511);


/***/ }),
/* 482 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(262);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(513);
__webpack_require__(519);
__webpack_require__(518);
__webpack_require__(517);
module.exports = __webpack_require__(13).Map;


/***/ }),
/* 483 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(514);
module.exports = __webpack_require__(13).Object.assign;


/***/ }),
/* 484 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(515);
var $Object = __webpack_require__(13).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 485 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(516);
__webpack_require__(262);
__webpack_require__(520);
__webpack_require__(521);
module.exports = __webpack_require__(13).Symbol;


/***/ }),
/* 486 */
/***/ (function(module, exports) {

module.exports = function () { /* empty */ };


/***/ }),
/* 487 */
/***/ (function(module, exports, __webpack_require__) {

var forOf = __webpack_require__(96);

module.exports = function (iter, ITERATOR) {
  var result = [];
  forOf(iter, false, result.push, result, ITERATOR);
  return result;
};


/***/ }),
/* 488 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(56);
var toLength = __webpack_require__(169);
var toAbsoluteIndex = __webpack_require__(509);
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
/* 489 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(79);
var IObject = __webpack_require__(161);
var toObject = __webpack_require__(170);
var toLength = __webpack_require__(169);
var asc = __webpack_require__(491);
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
/* 490 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(34);
var isArray = __webpack_require__(253);
var SPECIES = __webpack_require__(9)('species');

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
/* 491 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(490);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 492 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(18).f;
var create = __webpack_require__(164);
var redefineAll = __webpack_require__(257);
var ctx = __webpack_require__(79);
var anInstance = __webpack_require__(250);
var forOf = __webpack_require__(96);
var $iterDefine = __webpack_require__(162);
var step = __webpack_require__(254);
var setSpecies = __webpack_require__(507);
var DESCRIPTORS = __webpack_require__(16);
var fastKey = __webpack_require__(163).fastKey;
var validate = __webpack_require__(259);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 493 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var classof = __webpack_require__(157);
var from = __webpack_require__(487);
module.exports = function (NAME) {
  return function toJSON() {
    if (classof(this) != NAME) throw TypeError(NAME + "#toJSON isn't generic");
    return from(this);
  };
};


/***/ }),
/* 494 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var $export = __webpack_require__(32);
var meta = __webpack_require__(163);
var fails = __webpack_require__(54);
var hide = __webpack_require__(33);
var redefineAll = __webpack_require__(257);
var forOf = __webpack_require__(96);
var anInstance = __webpack_require__(250);
var isObject = __webpack_require__(34);
var setToStringTag = __webpack_require__(101);
var dP = __webpack_require__(18).f;
var each = __webpack_require__(489)(0);
var DESCRIPTORS = __webpack_require__(16);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  if (!DESCRIPTORS || typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    C = wrapper(function (target, iterable) {
      anInstance(target, C, NAME, '_c');
      target._c = new Base();
      if (iterable != undefined) forOf(iterable, IS_MAP, target[ADDER], target);
    });
    each('add,clear,delete,forEach,get,has,set,keys,values,entries,toJSON'.split(','), function (KEY) {
      var IS_ADDER = KEY == 'add' || KEY == 'set';
      if (KEY in proto && !(IS_WEAK && KEY == 'clear')) hide(C.prototype, KEY, function (a, b) {
        anInstance(this, C, KEY);
        if (!IS_ADDER && IS_WEAK && !isObject(a)) return KEY == 'get' ? undefined : false;
        var result = this._c[KEY](a === 0 ? 0 : a, b);
        return IS_ADDER ? this : result;
      });
    });
    IS_WEAK || dP(C.prototype, 'size', {
      get: function () {
        return this._c.size;
      }
    });
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F, O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 495 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(98);
var gOPS = __webpack_require__(165);
var pIE = __webpack_require__(99);
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
/* 496 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(17).document;
module.exports = document && document.documentElement;


/***/ }),
/* 497 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(55);
var ITERATOR = __webpack_require__(9)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 498 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(46);
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
/* 499 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(164);
var descriptor = __webpack_require__(100);
var setToStringTag = __webpack_require__(101);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(33)(IteratorPrototype, __webpack_require__(9)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 500 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(98);
var gOPS = __webpack_require__(165);
var pIE = __webpack_require__(99);
var toObject = __webpack_require__(170);
var IObject = __webpack_require__(161);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(54)(function () {
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
/* 501 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(18);
var anObject = __webpack_require__(46);
var getKeys = __webpack_require__(98);

module.exports = __webpack_require__(16) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 502 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(99);
var createDesc = __webpack_require__(100);
var toIObject = __webpack_require__(56);
var toPrimitive = __webpack_require__(171);
var has = __webpack_require__(47);
var IE8_DOM_DEFINE = __webpack_require__(252);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(16) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 503 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(56);
var gOPN = __webpack_require__(255).f;
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
/* 504 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(47);
var toObject = __webpack_require__(170);
var IE_PROTO = __webpack_require__(166)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 505 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(32);
var aFunction = __webpack_require__(249);
var ctx = __webpack_require__(79);
var forOf = __webpack_require__(96);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { from: function from(source /* , mapFn, thisArg */) {
    var mapFn = arguments[1];
    var mapping, A, n, cb;
    aFunction(this);
    mapping = mapFn !== undefined;
    if (mapping) aFunction(mapFn);
    if (source == undefined) return new this();
    A = [];
    if (mapping) {
      n = 0;
      cb = ctx(mapFn, arguments[2], 2);
      forOf(source, false, function (nextItem) {
        A.push(cb(nextItem, n++));
      });
    } else {
      forOf(source, false, A.push, A);
    }
    return new this(A);
  } });
};


/***/ }),
/* 506 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://tc39.github.io/proposal-setmap-offrom/
var $export = __webpack_require__(32);

module.exports = function (COLLECTION) {
  $export($export.S, COLLECTION, { of: function of() {
    var length = arguments.length;
    var A = new Array(length);
    while (length--) A[length] = arguments[length];
    return new this(A);
  } });
};


/***/ }),
/* 507 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(17);
var core = __webpack_require__(13);
var dP = __webpack_require__(18);
var DESCRIPTORS = __webpack_require__(16);
var SPECIES = __webpack_require__(9)('species');

module.exports = function (KEY) {
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 508 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(168);
var defined = __webpack_require__(159);
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
/* 509 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(168);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 510 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(46);
var get = __webpack_require__(261);
module.exports = __webpack_require__(13).getIterator = function (it) {
  var iterFn = get(it);
  if (typeof iterFn != 'function') throw TypeError(it + ' is not iterable!');
  return anObject(iterFn.call(it));
};


/***/ }),
/* 511 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(157);
var ITERATOR = __webpack_require__(9)('iterator');
var Iterators = __webpack_require__(55);
module.exports = __webpack_require__(13).isIterable = function (it) {
  var O = Object(it);
  return O[ITERATOR] !== undefined
    || '@@iterator' in O
    // eslint-disable-next-line no-prototype-builtins
    || Iterators.hasOwnProperty(classof(O));
};


/***/ }),
/* 512 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(486);
var step = __webpack_require__(254);
var Iterators = __webpack_require__(55);
var toIObject = __webpack_require__(56);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(162)(Array, 'Array', function (iterated, kind) {
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
/* 513 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(492);
var validate = __webpack_require__(259);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(494)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 514 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(32);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(500) });


/***/ }),
/* 515 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(32);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(16), 'Object', { defineProperty: __webpack_require__(18).f });


/***/ }),
/* 516 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(17);
var has = __webpack_require__(47);
var DESCRIPTORS = __webpack_require__(16);
var $export = __webpack_require__(32);
var redefine = __webpack_require__(258);
var META = __webpack_require__(163).KEY;
var $fails = __webpack_require__(54);
var shared = __webpack_require__(167);
var setToStringTag = __webpack_require__(101);
var uid = __webpack_require__(102);
var wks = __webpack_require__(9);
var wksExt = __webpack_require__(260);
var wksDefine = __webpack_require__(172);
var enumKeys = __webpack_require__(495);
var isArray = __webpack_require__(253);
var anObject = __webpack_require__(46);
var isObject = __webpack_require__(34);
var toIObject = __webpack_require__(56);
var toPrimitive = __webpack_require__(171);
var createDesc = __webpack_require__(100);
var _create = __webpack_require__(164);
var gOPNExt = __webpack_require__(503);
var $GOPD = __webpack_require__(502);
var $DP = __webpack_require__(18);
var $keys = __webpack_require__(98);
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
  __webpack_require__(255).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(99).f = $propertyIsEnumerable;
  __webpack_require__(165).f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(97)) {
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(33)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 517 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.from
__webpack_require__(505)('Map');


/***/ }),
/* 518 */
/***/ (function(module, exports, __webpack_require__) {

// https://tc39.github.io/proposal-setmap-offrom/#sec-map.of
__webpack_require__(506)('Map');


/***/ }),
/* 519 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/DavidBruant/Map-Set.prototype.toJSON
var $export = __webpack_require__(32);

$export($export.P + $export.R, 'Map', { toJSON: __webpack_require__(493)('Map') });


/***/ }),
/* 520 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172)('asyncIterator');


/***/ }),
/* 521 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(172)('observable');


/***/ }),
/* 522 */
/***/ (function(module, exports) {

module.exports = Array.isArray || function (arr) {
  return Object.prototype.toString.call(arr) == '[object Array]';
};


/***/ }),
/* 523 */
/***/ (function(module, exports) {


module.exports = parse

/**
 * expected argument lengths
 * @type {Object}
 */

var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}

/**
 * segment pattern
 * @type {RegExp}
 */

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
	var data = []
	path.replace(segment, function(_, command, args){
		var type = command.toLowerCase()
		args = parseValues(args)

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)))
			type = 'l'
			command = command == 'm' ? 'l' : 'L'
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command)
				return data.push(args)
			}
			if (args.length < length[type]) throw new Error('malformed path data')
			data.push([command].concat(args.splice(0, length[type])))
		}
	})
	return data
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parseValues(args) {
	var numbers = args.match(number)
	return numbers ? numbers.map(Number) : []
}


/***/ }),
/* 524 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(523);
var isarray = __webpack_require__(522);
var abs = __webpack_require__(470);

module.exports = Points;

function Points (path) {
    if (!(this instanceof Points)) return new Points(path);
    this._path = isarray(path) ? path : parse(path);
    this._path = abs(this._path);
    this._path = zvhToL(this._path);
    this._path = longhand(this._path);
}

Points.prototype.at = function (pos, opts) {
    return this._walk(pos, opts).pos;
};

Points.prototype.length = function () {
    return this._walk(null).length;
};

Points.prototype._walk = function (pos, opts) {
    var cur = [ 0, 0 ];
    var prev = [ 0, 0, 0 ];
    var p0 = [ 0, 0 ];
    var len = 0;

    for (var i = 0; i < this._path.length; i++) {
        var p = this._path[i];
        if (p[0] === 'M') {
            cur[0] = p[1];
            cur[1] = p[2];
            if (pos === 0) {
                return { length: len, pos: cur };
            }
        }
        else if (p[0] === 'C') {
            prev[0] = p0[0] = cur[0];
            prev[1] = p0[1] = cur[1];
            prev[2] = len;

            var n = 100;
            for (var j = 0; j <= n; j++) {
                var t = j / n;
                var x = xof_C(p, t);
                var y = yof_C(p, t);
                len += dist(cur[0], cur[1], x, y);

                cur[0] = x;
                cur[1] = y;

                if (typeof pos === 'number' && len >= pos) {
                    var dv = (len - pos) / (len - prev[2]);

                    var npos = [
                        cur[0] * (1 - dv) + prev[0] * dv,
                        cur[1] * (1 - dv) + prev[1] * dv
                    ];
                    return { length: len, pos: npos };
                }
                prev[0] = cur[0];
                prev[1] = cur[1];
                prev[2] = len;
            }
        }
        else if (p[0] === 'Q') {
            prev[0] = p0[0] = cur[0];
            prev[1] = p0[1] = cur[1];
            prev[2] = len;

            var n = 100;
            for (var j = 0; j <= n; j++) {
                var t = j / n;
                var x = xof_Q(p, t);
                var y = yof_Q(p, t);
                len += dist(cur[0], cur[1], x, y);

                cur[0] = x;
                cur[1] = y;

                if (typeof pos === 'number' && len >= pos) {
                    var dv = (len - pos) / (len - prev[2]);

                    var npos = [
                        cur[0] * (1 - dv) + prev[0] * dv,
                        cur[1] * (1 - dv) + prev[1] * dv
                    ];
                    return { length: len, pos: npos };
                }
                prev[0] = cur[0];
                prev[1] = cur[1];
                prev[2] = len;
            }
        }
        else if (p[0] === 'L') {
            prev[0] = cur[0];
            prev[1] = cur[1];
            prev[2] = len;

            len   += dist(cur[0], cur[1], p[1], p[2]);
            cur[0] = p[1];
            cur[1] = p[2];

            if (typeof pos === 'number' && len >= pos) {
                var dv = (len - pos) / (len - prev[2]);
                var npos = [
                    cur[0] * (1 - dv) + prev[0] * dv,
                    cur[1] * (1 - dv) + prev[1] * dv
                ];
                return { length: len, pos: npos };
            }
            prev[0] = cur[0];
            prev[1] = cur[1];
            prev[2] = len;
        }
    }

    return { length: len, pos: cur };
    function xof_C (p, t) {
        return Math.pow((1-t), 3) * p0[0]
            + 3 * Math.pow((1-t), 2) * t * p[1]
            + 3 * (1-t) * Math.pow(t, 2) * p[3]
            + Math.pow(t, 3) * p[5]
        ;
    }
    function yof_C (p, t) {
        return Math.pow((1-t), 3) * p0[1]
            + 3 * Math.pow((1-t), 2) * t * p[2]
            + 3 * (1-t) * Math.pow(t, 2) * p[4]
            + Math.pow(t, 3) * p[6]
        ;
    }

    function xof_Q (p, t) {
        return Math.pow((1-t), 2) * p0[0]
            + 2 * (1-t) * t * p[1]
            + Math.pow(t, 2) * p[3]
        ;
    }
    function yof_Q (p, t) {
        return Math.pow((1-t), 2) * p0[1]
            + 2 * (1-t) * t * p[2]
            + Math.pow(t, 2) * p[4]
        ;
    }
};

function dist (ax, ay, bx, by) {
    var x = ax - bx;
    var y = ay - by;
    return Math.sqrt(x*x + y*y);
}

// Expand shorthand curve commands to full versions; mutates the path in place for efficiency
// Requires commands have already been converted to absolute versions
function longhand(path){
    var prev,x1=0,y1=0;
    var conversion = { S:{to:'C',x:3}, T:{to:'Q',x:1} };
    for(var i=0, len=path.length; i<len; i++){
        var cmd = path[i];
        var convert = conversion[cmd[0]];

        if (convert) {
            cmd[0] = convert.to;
            if (prev) {
                if (prev[0] === convert.to) {
                    x1 = 2*prev[convert.x+2]-prev[convert.x  ];
                    y1 = 2*prev[convert.x+3]-prev[convert.x+1];
                } else {
                    x1 = prev[prev.length-2];
                    y1 = prev[prev.length-1];
                }
            }
            cmd.splice(1,0,x1,y1);
        }
        prev=cmd;
    }
    return path;
}

// Convert 'Z', 'V' and 'H' segments to 'L' segments
function zvhToL(path){
    var ret = [];
    var startPoint = ['L',0,0];
    var last_point;

    for(var i=0, len=path.length; i<len; i++){
        var pt = path[i];
        switch(pt[0]){
            case 'M':
                startPoint = ['L', pt[1], pt[2]];
                ret.push(pt);
                break;
            case 'Z':
                ret.push(startPoint);
                break;
            case 'H':
                last_point = ret[ret.length - 1] || ['L',0,0];
                ret.push( ['L', pt[1], last_point[last_point.length - 1]] );
                break;
            case 'V':
                last_point = ret[ret.length - 1] || ['L',0,0];
                ret.push( ['L', last_point[last_point.length - 2], pt[1]] );
                break;
            default:
                ret.push(pt);
        }
    }
    return ret;
}


/***/ })
/******/ ]);
});