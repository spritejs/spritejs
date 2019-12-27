(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["spritejs"] = factory();
	else
		root["spritejs"] = factory();
})(window, function() {
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["use"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "math", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["math"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["utils"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseNode"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Label"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Path"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Group"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _spritejs_core__WEBPACK_IMPORTED_MODULE_0__["Color"]; });

/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(71);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _basesprite__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _sprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(103);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _sprite__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(104);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _layer__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _scene__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(105);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return _scene__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(72);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Resource", function() { return _resource__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(75);








if (_platform__WEBPACK_IMPORTED_MODULE_6__["shim"]) {
  Object(_platform__WEBPACK_IMPORTED_MODULE_6__["shim"])();
}

var version = "2.29.7";


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "math", function() { return sprite_math__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "utils", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _core_basesprite__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(35);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseSprite", function() { return _core_basesprite__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _core_sprite__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(59);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Sprite", function() { return _core_sprite__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _core_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(61);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Label", function() { return _core_label__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _core_layer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(63);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Layer", function() { return _core_layer__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _core_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(67);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Group", function() { return _core_group__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _core_basenode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(57);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BaseNode", function() { return _core_basenode__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _core_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(69);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Path", function() { return _core_path__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _core_batch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(66);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Batch", function() { return _core_batch__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _core_use__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "use", function() { return _core_use__WEBPACK_IMPORTED_MODULE_10__["default"]; });












var Color = _utils__WEBPACK_IMPORTED_MODULE_1__["Color"];


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _matrix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Matrix", function() { return _matrix__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _vector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Vector", function() { return _vector__WEBPACK_IMPORTED_MODULE_1__["default"]; });





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  var m2;

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

/* harmony default export */ __webpack_exports__["default"] = (Matrix);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);




var Vector =
/*#__PURE__*/
function () {
  function Vector(p1) {
    var p2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [0, 0, 0];

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Vector);

    var _p = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(p1, 3),
        x1 = _p[0],
        y1 = _p[1],
        z1 = _p[2],
        _p2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(p2, 3),
        x2 = _p2[0],
        y2 = _p2[1],
        z2 = _p2[2];

    z1 = z1 || 0;
    z2 = z2 || 0;
    this.x = x1 - x2;
    this.y = y1 - y2;
    this.z = z1 - z2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Vector, [{
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

/* harmony default export */ __webpack_exports__["default"] = (Vector);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(6);

var iterableToArrayLimit = __webpack_require__(7);

var nonIterableRest = __webpack_require__(8);

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _parse_font__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseFont", function() { return _parse_font__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _svgpath__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(22);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "createSvgPath", function() { return _svgpath__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["appendUnit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["Color"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["fourValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "eightValuesShortCut", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["eightValuesShortCut"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["notice"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["oneOrTwoValues"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseColorString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["praseString"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringFloat"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringInt"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["parseStringTransform"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["rectVertices"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["sortOrderedSprites"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["generateID"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return _utils__WEBPACK_IMPORTED_MODULE_2__["sizeToPixel"]; });

/* harmony import */ var _decorators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(31);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["cachable"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "composit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["composit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["attr"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["deprecate"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["flow"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["absolute"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["relative"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["inherit"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["inheritAttributes"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["parseValue"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["setDeprecation"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "decorators", function() { return _decorators__WEBPACK_IMPORTED_MODULE_3__["decorators"]; });

/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(33);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "attributeNames", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["attributeNames"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "relatedAttributes", function() { return _store__WEBPACK_IMPORTED_MODULE_4__["relatedAttributes"]; });

/* harmony import */ var _render__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(34);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["findColor"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["cacheContextPool"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return _render__WEBPACK_IMPORTED_MODULE_5__["drawRadiusBox"]; });









/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parseFont; });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
// borrow from node-canvas (https://github.com/Automattic/node-canvas)

/**
 * Font RegExp helpers.
 */

var weights = 'bold|bolder|lighter|[1-9]00',
    styles = 'italic|oblique',
    variants = 'small-caps',
    stretches = 'ultra-condensed|extra-condensed|condensed|semi-condensed|semi-expanded|expanded|extra-expanded|ultra-expanded',
    units = 'px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%',
    string = "'([^']+)'|\"([^\"]+)\"|([\\w-]|[\u4E00-\u9FA5])+"; // [ [ <‘font-style’> || <font-variant-css21> || <‘font-weight’> || <‘font-stretch’> ]?
//    <‘font-size’> [ / <‘line-height’> ]? <‘font-family’> ]
// https://drafts.csswg.org/css-fonts-3/#font-prop

var weightRe = new RegExp("(".concat(weights, ") +"), 'i');
var styleRe = new RegExp("(".concat(styles, ") +"), 'i');
var variantRe = new RegExp("(".concat(variants, ") +"), 'i');
var stretchRe = new RegExp("(".concat(stretches, ") +"), 'i');
/* eslint-disable prefer-template */

var sizeFamilyRe = new RegExp('([\\d\\.]+)(' + units + ') *' + '((?:' + string + ')( *, *(?:' + string + '))*)');
/* eslint-enable prefer-template */

/**
 * Parse font `str`.
 *
 * @param {String} str
 * @return {Object} Parsed font. `size` is in device units. `unit` is the unit
 *   appearing in the input string.
 * @api private
 */

function parseFont(str, defaultHeight) {
  // Try for required properties first.
  var sizeFamily = sizeFamilyRe.exec(str);
  if (!sizeFamily) return; // invalid
  // Default values and required properties

  var font = {
    weight: 'normal',
    style: 'normal',
    stretch: 'normal',
    variant: 'normal',
    size: parseFloat(sizeFamily[1]),
    unit: sizeFamily[2],
    family: sizeFamily[3].replace(/ *, */g, ',')
  }; // Stop search at `sizeFamily.index`

  var substr = str.substring(0, sizeFamily.index); // Optional, unordered properties.

  var weight = weightRe.exec(substr),
      style = styleRe.exec(substr),
      variant = variantRe.exec(substr),
      stretch = stretchRe.exec(substr);
  if (weight) font.weight = weight[1];
  if (style) font.style = style[1];
  if (variant) font.variant = variant[1];
  if (stretch) font.stretch = stretch[1];
  font.size0 = font.size;
  font.size = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sizeToPixel"])({
    size: font.size0,
    unit: font.unit
  }, defaultHeight);

  if (font.unit === 'vw' || font.unit === 'vh') {
    if (typeof document !== 'undefined' && document.documentElement) {
      var _document$documentEle = document.documentElement,
          clientWidth = _document$documentEle.clientWidth,
          clientHeight = _document$documentEle.clientHeight;
      var val = font.unit === 'vw' ? clientWidth : clientHeight;
      font.size = val * font.size / 100;
    }
  }

  return font;
}
/* eslint-enable */

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Color", function() { return Color; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColor", function() { return parseColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseColorString", function() { return parseColorString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringTransform", function() { return parseStringTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValuesString", function() { return parseValuesString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "praseString", function() { return praseString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringInt", function() { return parseStringInt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringFloat", function() { return parseStringFloat; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "oneOrTwoValues", function() { return oneOrTwoValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fourValuesShortCut", function() { return fourValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "eightValuesShortCut", function() { return eightValuesShortCut; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "rectVertices", function() { return rectVertices; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appendUnit", function() { return appendUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortOrderedSprites", function() { return sortOrderedSprites; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notice", function() { return notice; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateID", function() { return generateID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeToPixel", function() { return sizeToPixel; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);





var colorString = __webpack_require__(18);

var Color =
/*#__PURE__*/
function () {
  function Color(color) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Color);

    if (typeof color === 'string') {
      var _colorString$get = colorString.get(color || 'rgba(0,0,0,1)'),
          model = _colorString$get.model,
          value = _colorString$get.value;

      this.model = model;
      this.value = value;
    } else {
      this.model = color.model;
      this.value = color.value;
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Color, [{
    key: "toString",
    value: function toString() {
      var _this$value = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.value, 4),
          a = _this$value[0],
          b = _this$value[1],
          c = _this$value[2],
          d = _this$value[3];

      var model = this.model;

      if (model === 'rgb') {
        return "".concat(model, "a(").concat(a, ",").concat(b, ",").concat(c, ",").concat(d, ")");
      }

      return "".concat(model, "a(").concat(a, ",").concat(b, "%,").concat(c, "%,").concat(d, ")");
    }
  }, {
    key: "str",
    get: function get() {
      return String(this);
    }
  }]);

  return Color;
}();


function parseColor(color) {
  return new Color(color);
}
function parseColorString(color) {
  if (color && typeof color === 'string' && color !== 'inherit') {
    return parseColor(color).toString();
  }

  return color;
}
function parseStringTransform(str) {
  if (typeof str !== 'string') return str;
  var rules = str.match(/(?:^|\s)+((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  var ret = {};

  if (rules) {
    rules.forEach(function (rule) {
      var matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);

      var _matched = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(matched, 3),
          m = _matched[1],
          v = _matched[2];

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
  if (typeof str === 'string' && str !== '' && str !== 'inherit') {
    var values = str.split(/[\s,]+/g);
    return values.map(function (v) {
      var ret = parser ? parser(v) : v;
      return Number.isNaN(ret) ? v : ret;
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
  return parseValuesString(str, function (v) {
    if (v === 'center') return 0.5;
    if (v === 'left' || v === 'top') return 0;
    if (v === 'right' || v === 'bottom') return 1;
    return parseFloat(v);
  });
}
function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0]];
  }

  return val;
}
function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  }

  if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }

  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val), [0, 0, 0, 0]).slice(0, 4);
}
function eightValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val, val, val, val, val];
  }

  if (val.length === 1) {
    return eightValuesShortCut(val[0]);
  }

  if (val.length === 2) {
    return [val[0], val[1], val[0], val[1], val[0], val[1], val[0], val[1]];
  }

  if (val.length === 4) {
    return [val[0], val[1], val[2], val[3], val[0], val[1], val[2], val[3]];
  }

  return [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val), [0, 0, 0, 0, 0, 0, 0, 0]).slice(0, 8);
}
function rectVertices(rect) {
  var _rect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  return [[x, y], [x + w, y], [x + w, y + h], [x, y + h]];
}
function appendUnit(value) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (value === '') {
    return value;
  }

  if (typeof value === 'string' && Number.isNaN(Number(value))) {
    return value;
  }

  return value + defaultUnit;
}
function sortOrderedSprites(sprites) {
  var reversed = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprites).sort(function (a, b) {
    if (reversed) {
      var _ref = [b, a];
      a = _ref[0];
      b = _ref[1];
    }

    if (a.zIndex === b.zIndex) {
      return a.zOrder - b.zOrder;
    }

    return a.zIndex - b.zIndex;
  });
}
var noticed = new Set();
function notice(msg) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'warn';

  if (typeof console !== 'undefined' && !noticed.has(msg)) {
    console[level](msg); // eslint-disable-line no-console

    noticed.add(msg);
  }
}
var IDMap = new WeakMap();
function generateID(obj) {
  if (IDMap.has(obj)) {
    return IDMap.get(obj);
  }

  var id = Math.random().toString(36).slice(2);
  IDMap.set(obj, id);
  return id;
}
function sizeToPixel(value, defaultWidth) {
  // eslint-disable-line complexity
  if (typeof value === 'string') {
    var matched = value.trim().match(/^([\d.]+)(px|pt|pc|in|cm|mm|em|ex|rem|q|vw|vh|vmax|vmin|%)$/);

    if (matched) {
      value = {
        size: parseFloat(matched[1]),
        unit: matched[2]
      };
    } else {
      value = {
        size: parseInt(value, 10),
        unit: 'px'
      };
    }
  }

  var _value = value,
      size = _value.size,
      unit = _value.unit;

  if (unit === 'pt') {
    size /= 0.75;
  } else if (unit === 'pc') {
    size *= 16;
  } else if (unit === 'in') {
    size *= 96;
  } else if (unit === 'cm') {
    size *= 96.0 / 2.54;
  } else if (unit === 'mm') {
    size *= 96.0 / 25.4;
  } else if (unit === 'em' || unit === 'rem' || unit === 'ex') {
    if (!defaultWidth && typeof getComputedStyle === 'function' && typeof document !== 'undefined') {
      var root = getComputedStyle(document.documentElement).fontSize;
      defaultWidth = sizeToPixel(root, 16);
    }

    size *= defaultWidth;
    if (unit === 'ex') size /= 2;
  } else if (unit === 'q') {
    size *= 96.0 / 25.4 / 4;
  } else if (unit === 'vw' || unit === 'vh') {
    if (typeof document !== 'undefined') {
      var val = unit === 'vw' ? document.documentElement.clientWidth : document.documentElement.clientHeight;
      size *= val / 100;
    }
  } else if (unit === 'vmax' || unit === 'vmin') {
    if (typeof document !== 'undefined') {
      var width = document.documentElement.clientWidth;
      var height = document.documentElement.clientHeight;

      if (unit === 'vmax') {
        size *= Math.max(width, height) / 100;
      } else {
        size *= Math.min(width, height) / 100;
      }
    }
  }

  return size;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(15);

var iterableToArray = __webpack_require__(16);

var nonIterableSpread = __webpack_require__(17);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

/* MIT license */
var colorNames = __webpack_require__(19);
var swizzle = __webpack_require__(20);

var reverseNames = {};

// create a list of reverse color names
for (var name in colorNames) {
	if (colorNames.hasOwnProperty(name)) {
		reverseNames[colorNames[name]] = name;
	}
}

var cs = module.exports = {
	to: {},
	get: {}
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

	var hsl = /^hsla?\(\s*([+-]?(?:\d*\.)?\d+)(?:deg)?\s*,\s*([+-]?[\d\.]+)%\s*,\s*([+-]?[\d\.]+)%\s*(?:,\s*([+-]?[\d\.]+)\s*)?\)$/;
	var match = string.match(hsl);

	if (match) {
		var alpha = parseFloat(match[4]);
		var h = (parseFloat(match[1]) + 360) % 360;
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
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isArrayish = __webpack_require__(21);

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
/* 21 */
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
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return createSvgPath; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(23);



function createSvgPath(path) {
  if (typeof path === 'string') path = {
    d: path
  };
  var p = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_2__["default"](path.d);

  if (path.transform || path.trim) {
    if (path.transform) {
      Object.entries(path.transform).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        if (!Array.isArray(value)) value = [value];
        p[key].apply(p, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(value));
      });
    }

    if (path.trim) {
      p.trim();
    }
  }

  return p;
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24);
/* harmony import */ var _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(25);
/* harmony import */ var _parse_svg_path__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(26);
/* harmony import */ var _abs_svg_path__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(27);
/* harmony import */ var _normalize_svg_path__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(28);
/* harmony import */ var _is_svg_path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(30);












var _initialPath = Symbol('initialPath');

var _path = Symbol('path');

var _bounds = Symbol('bounds');

var _savedPaths = Symbol('savedPaths');

var _renderProps = Symbol('renderProps');

var _beginPath = Symbol('beginPath');

var SvgPath =
/*#__PURE__*/
function () {
  function SvgPath(d) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, SvgPath);

    if (!Object(_is_svg_path__WEBPACK_IMPORTED_MODULE_10__["default"])(d)) {
      throw new Error('Not an SVG path!');
    }

    this[_initialPath] = Object(_abs_svg_path__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_parse_svg_path__WEBPACK_IMPORTED_MODULE_7__["default"])(d));
    this[_path] = Object(_normalize_svg_path__WEBPACK_IMPORTED_MODULE_9__["default"])(this[_initialPath]);
    this[_bounds] = null;
    this[_savedPaths] = [];
    this[_renderProps] = {};
    this[_beginPath] = false;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(SvgPath, [{
    key: "save",
    value: function save() {
      this[_savedPaths].push({
        path: this[_path],
        bounds: this[_bounds],
        renderProps: Object.assign({}, this[_renderProps])
      });

      return this;
    }
  }, {
    key: "restore",
    value: function restore() {
      if (this[_savedPaths].length) {
        var _this$_savedPaths$pop = this[_savedPaths].pop(),
            path = _this$_savedPaths$pop.path,
            bounds = _this$_savedPaths$pop.bounds,
            renderProps = _this$_savedPaths$pop.renderProps;

        this[_path] = path;
        this[_bounds] = bounds;
        this[_renderProps] = renderProps;
      }

      return this;
    }
  }, {
    key: "isPointInPath",
    value: function isPointInPath(x, y) {
      return Object(_platform__WEBPACK_IMPORTED_MODULE_6__["isPointInPath"])(this, x, y);
    }
  }, {
    key: "isPointInStroke",
    value: function isPointInStroke(x, y, _ref) {
      var _ref$lineWidth = _ref.lineWidth,
          lineWidth = _ref$lineWidth === void 0 ? 1 : _ref$lineWidth,
          _ref$lineCap = _ref.lineCap,
          lineCap = _ref$lineCap === void 0 ? 'butt' : _ref$lineCap,
          _ref$lineJoin = _ref.lineJoin,
          lineJoin = _ref$lineJoin === void 0 ? 'miter' : _ref$lineJoin;

      if (_platform__WEBPACK_IMPORTED_MODULE_6__["isPointInStroke"]) {
        return Object(_platform__WEBPACK_IMPORTED_MODULE_6__["isPointInStroke"])(this, x, y, {
          lineWidth: lineWidth,
          lineCap: lineCap,
          lineJoin: lineJoin
        });
      } // node-canvas return undefined

    }
  }, {
    key: "getPointAtLength",
    value: function getPointAtLength(len) {
      return Object(_platform__WEBPACK_IMPORTED_MODULE_6__["getPointAtLength"])(this.d, len);
    }
  }, {
    key: "getTotalLength",
    value: function getTotalLength() {
      return Object(_platform__WEBPACK_IMPORTED_MODULE_6__["getTotalLength"])(this.d);
    }
  }, {
    key: "transform",
    value: function transform() {
      this[_bounds] = null;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var m = new sprite_math__WEBPACK_IMPORTED_MODULE_5__["Matrix"](args);
      var commands = this[_path];
      this[_path] = commands.map(function (c) {
        var _c = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default()(c),
            cmd = _c[0],
            args = _c.slice(1);

        var transformed = [cmd];

        for (var i = 0; i < args.length; i += 2) {
          var x0 = args[i],
              y0 = args[i + 1];

          var _m$transformPoint = m.transformPoint(x0, y0),
              _m$transformPoint2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_m$transformPoint, 2),
              x = _m$transformPoint2[0],
              y = _m$transformPoint2[1];

          transformed.push(x, y);
        }

        return transformed;
      });
      return this;
    }
  }, {
    key: "translate",
    value: function translate(x, y) {
      var m = new sprite_math__WEBPACK_IMPORTED_MODULE_5__["Matrix"]().translate(x, y);
      return this.transform.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(m.m));
    }
  }, {
    key: "rotate",
    value: function rotate(deg) {
      var m = new sprite_math__WEBPACK_IMPORTED_MODULE_5__["Matrix"]().rotate(deg);
      return this.transform.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(m.m));
    }
  }, {
    key: "scale",
    value: function scale(sx, sy) {
      if (sy == null) sy = sx;
      var m = new sprite_math__WEBPACK_IMPORTED_MODULE_5__["Matrix"]().scale(sx, sy);
      return this.transform.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(m.m));
    }
  }, {
    key: "skew",
    value: function skew(degX, degY) {
      var m = new sprite_math__WEBPACK_IMPORTED_MODULE_5__["Matrix"]().skew(degX, degY);
      return this.transform.apply(this, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(m.m));
    }
  }, {
    key: "trim",
    value: function trim() {
      var _this$bounds = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.bounds, 2),
          x = _this$bounds[0],
          y = _this$bounds[1];

      this.translate(-x, -y);
      return this;
    }
  }, {
    key: "beginPath",
    value: function beginPath() {
      this[_beginPath] = true;
      return this;
    }
  }, {
    key: "to",
    value: function to(context) {
      var commands = this[_path];
      var renderProps = this[_renderProps];

      if (commands.length) {
        if (this[_beginPath]) {
          context.beginPath();
        }

        commands.forEach(function (c) {
          var _c2 = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default()(c),
              cmd = _c2[0],
              args = _c2.slice(1);

          if (cmd === 'M') {
            context.moveTo.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
          } else {
            context.bezierCurveTo.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(args));
          }
        });

        if (this.isClosed) {
          context.closePath();
        }
      }

      Object.assign(context, renderProps);
      return {
        stroke: function stroke() {
          context.stroke();
          return this;
        },
        fill: function fill() {
          context.fill();
          return this;
        }
      };
    }
  }, {
    key: "strokeStyle",
    value: function strokeStyle(value) {
      this[_renderProps].strokeStyle = value;
      return this;
    }
  }, {
    key: "fillStyle",
    value: function fillStyle(value) {
      this[_renderProps].fillStyle = value;
      return this;
    }
  }, {
    key: "lineWidth",
    value: function lineWidth(value) {
      this[_renderProps].lineWidth = value;
      return this;
    }
  }, {
    key: "lineCap",
    value: function lineCap(value) {
      this[_renderProps].lineCap = value;
      return this;
    }
  }, {
    key: "lineJoin",
    value: function lineJoin(value) {
      this[_renderProps].lineJoin = value;
      return this;
    }
  }, {
    key: "bounds",
    get: function get() {
      if (!this[_bounds]) {
        var path = this[_path];
        this[_bounds] = [0, 0, 0, 0];

        if (path.length) {
          var bounds = [Infinity, Infinity, -Infinity, -Infinity];

          for (var i = 0, l = path.length; i < l; i++) {
            var points = path[i].slice(1);

            for (var j = 0; j < points.length; j += 2) {
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
  }, {
    key: "size",
    get: function get() {
      var bounds = this.bounds;
      return [bounds[2] - bounds[0], bounds[3] - bounds[1]];
    }
  }, {
    key: "center",
    get: function get() {
      var _this$bounds2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.bounds, 4),
          x0 = _this$bounds2[0],
          y0 = _this$bounds2[1],
          x1 = _this$bounds2[2],
          y1 = _this$bounds2[3];

      return [(x0 + x1) / 2, (y0 + y1) / 2];
    }
  }, {
    key: "d",
    get: function get() {
      var path = this[_path].map(function (p) {
        var _p = _babel_runtime_helpers_toArray__WEBPACK_IMPORTED_MODULE_2___default()(p),
            c = _p[0],
            points = _p.slice(1);

        return c + points.join();
      }).join('');

      if (this.isClosed) {
        path += 'Z';
      }

      return path;
    }
  }, {
    key: "path",
    get: function get() {
      return this[_path];
    }
  }, {
    key: "isClosed",
    get: function get() {
      var part = this[_initialPath][this[_initialPath].length - 1];
      return part && part[0] === 'Z';
    }
  }]);

  return SvgPath;
}();

/* harmony default export */ __webpack_exports__["default"] = (SvgPath);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(6);

var iterableToArray = __webpack_require__(16);

var nonIterableRest = __webpack_require__(8);

function _toArray(arr) {
  return arrayWithHoles(arr) || iterableToArray(arr) || nonIterableRest();
}

module.exports = _toArray;

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPointAtLength", function() { return getPointAtLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTotalLength", function() { return getTotalLength; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInPath", function() { return isPointInPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isPointInStroke", function() { return isPointInStroke; });
function createSvgPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);
  return path;
}

function getPointAtLength(d, len) {
  var path = createSvgPath(d);

  var _path$getPointAtLengt = path.getPointAtLength(len),
      x = _path$getPointAtLengt.x,
      y = _path$getPointAtLengt.y;

  return [x, y];
}
function getTotalLength(d, len) {
  var path = createSvgPath(d);
  return path.getTotalLength(len);
}
var context = null;
function isPointInPath(_ref, x, y) {
  var d = _ref.d;
  if (!context) context = document.createElement('canvas').getContext('2d');
  var path = new Path2D(d);
  return context.isPointInPath(path, x, y);
}
function isPointInStroke(_ref2, x, y, _ref3) {
  var d = _ref2.d;
  var _ref3$lineWidth = _ref3.lineWidth,
      lineWidth = _ref3$lineWidth === void 0 ? 1 : _ref3$lineWidth,
      _ref3$lineCap = _ref3.lineCap,
      lineCap = _ref3$lineCap === void 0 ? 'butt' : _ref3$lineCap,
      _ref3$lineJoin = _ref3.lineJoin,
      lineJoin = _ref3$lineJoin === void 0 ? 'miter' : _ref3$lineJoin;
  if (!context) context = document.createElement('canvas').getContext('2d');

  if (context.isPointInStroke) {
    context.save();
    context.lineWidth = lineWidth;
    context.lineCap = lineCap;
    context.lineJoin = lineJoin;
    var path = new Path2D(d);
    var ret = context.isPointInStroke(path, x, y);
    context.restore();
    return ret;
  }
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return parse; });
// https://github.com/jkroso/parse-svg-path

/**
 * expected argument lengths
 * @type {Object}
 */

/* eslint-disable */
var length = {
  a: 7,
  c: 6,
  h: 1,
  l: 2,
  m: 2,
  q: 4,
  s: 4,
  t: 2,
  v: 1,
  z: 0
};
/**
 * segment pattern
 * @type {RegExp}
 */

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig;
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
    args = parseValues(args); // overloaded moveTo

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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return absolutize; });
// https://github.com/jkroso/abs-svg-path

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
    var command = type.toUpperCase(); // is relative

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
    } // update cursor state


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
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalize; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _a2c__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);

// https://github.com/jkroso/normalize-svg-path

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
        var curves = Object(_a2c__WEBPACK_IMPORTED_MODULE_1__["default"])(x, y, seg[6], seg[7], seg[4], seg[5], seg[1], seg[2], seg[3]);
        if (!curves.length) continue;
        curves = curves.map(function (curve) {
          var _curve = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(curve, 8),
              x0 = _curve[0],
              y0 = _curve[1],
              x1 = _curve[2],
              y1 = _curve[3],
              x2 = _curve[4],
              y2 = _curve[5],
              x = _curve[6],
              y = _curve[7];

          return {
            x1: x1,
            y1: y1,
            x2: x2,
            y2: y2,
            x: x,
            y: y
          };
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
    } // update state


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
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return a2c; });
// https://github.com/colinmeinke/svg-arc-to-cubic-bezier
//
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
  var dot = ux * vx + uy * vy; // Add this to work with arbitrary vectors:
  // dot /= Math.sqrt(ux * ux + uy * uy) * Math.sqrt(vx * vx + vy * vy);
  // rounding errors, e.g. -1.0000000000000002 can screw up this

  if (dot > 1.0) {
    dot = 1.0;
  }

  if (dot < -1.0) {
    dot = -1.0;
  }

  return sign * Math.acos(dot);
} // Convert from endpoint to center parameterization,
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
  var y1p_sq = y1p * y1p; // Step 2.
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
  var cyp = radicant * -ry / rx * x1p; // Step 3.
  //
  // Transform back to get centre coordinates (cx, cy) in the original
  // coordinate system.
  //

  var cx = cos_phi * cxp - sin_phi * cyp + (x1 + x2) / 2;
  var cy = sin_phi * cxp + cos_phi * cyp + (y1 + y2) / 2; // Step 4.
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
} //
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

function a2c(x1, y1, x2, y2, fa, fs, rx, ry, phi) {
  var sin_phi = Math.sin(phi * TAU / 360);
  var cos_phi = Math.cos(phi * TAU / 360); // Make sure radii are valid
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
  } // Compensate out-of-range radii
  //


  rx = Math.abs(rx);
  ry = Math.abs(ry);
  var lambda = x1p * x1p / (rx * rx) + y1p * y1p / (ry * ry);

  if (lambda > 1) {
    rx *= Math.sqrt(lambda);
    ry *= Math.sqrt(lambda);
  } // Get center parameters (cx, cy, theta1, delta_theta)
  //


  var cc = get_arc_center(x1, y1, x2, y2, fa, fs, rx, ry, sin_phi, cos_phi);
  var result = [];
  var theta1 = cc[2];
  var delta_theta = cc[3]; // Split an arc to multiple segments, so each segment
  // will be less than τ/4 (= 90°)
  //

  var segments = Math.max(Math.ceil(Math.abs(delta_theta) / (TAU / 4)), 1);
  delta_theta /= segments;

  for (var i = 0; i < segments; i++) {
    result.push(approximate_unit_arc(theta1, delta_theta));
    theta1 += delta_theta;
  } // We have a bezier approximation of a unit circle,
  // now need to transform back to the original ellipse
  //


  return result.map(function (curve) {
    for (var _i = 0; _i < curve.length; _i += 2) {
      var x = curve[_i + 0];
      var y = curve[_i + 1]; // scale

      x *= rx;
      y *= ry; // rotate

      var xp = cos_phi * x - sin_phi * y;
      var yp = sin_phi * x + cos_phi * y; // translate

      curve[_i + 0] = xp + cc[0];
      curve[_i + 1] = yp + cc[1];
    }

    return curve;
  });
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPath; });
// https://github.com/dy/is-svg-path
function isPath(str) {
  if (typeof str !== 'string') return false;
  str = str.trim(); // https://www.w3.org/TR/SVG/paths.html#PathDataBNF

  if (/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(str) && /[\dz]$/i.test(str) && str.length > 4) return true;
  return false;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "composit", function() { return composit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cachable", function() { return cachable; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inheritAttributes", function() { return inheritAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inherit", function() { return inherit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relative", function() { return relative; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "flow", function() { return flow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "absolute", function() { return absolute; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDeprecation", function() { return setDeprecation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deprecate", function() { return deprecate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseValue", function() { return parseValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "decorators", function() { return decorators; });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(33);



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var _attrAbsolute = Symbol('attrAbsolute');
/* eslint-disable prefer-rest-params */


function polyfillLegacy(target, key, descriptor) {
  return {
    target: target,
    key: key,
    descriptor: descriptor
  };
}

function getPV(subject, relative) {
  var parent = subject.parent;
  var pv = null;

  if (parent) {
    var attrSize = parent.attrSize;

    if (attrSize) {
      var attrV = relative === 'pw' ? attrSize[0] : attrSize[1];

      while (attrSize && attrV === '') {
        // flexible value
        parent = parent.parent;
        attrSize = parent.attrSize;
      }
    }

    if (relative === 'pw') {
      pv = attrSize ? parent.contentSize[0] : parent.resolution[0];
    } else if (relative === 'ph') {
      pv = attrSize ? parent.contentSize[1] : parent.resolution[1];
    }
  }

  return pv;
}

function attr(options) {
  var cache = false,
      reflow = false,
      relayout = false,
      quiet = false,
      value = null,
      extra = null;

  var decorator = function decorator(elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor = elementDescriptor,
        key = _elementDescriptor.key,
        kind = _elementDescriptor.kind;
    _store__WEBPACK_IMPORTED_MODULE_3__["attributeNames"].add(key);

    if (quiet && (cache || reflow || relayout)) {
      throw new Error("".concat(key, ": quietSet cannot enable cache or reflow or relayout"));
    } // let _symbolKey = key;


    var defaultValue = value != null ? value : elementDescriptor.value;
    var relativeType = elementDescriptor.descriptor.__relative;
    var inheritValue = elementDescriptor.descriptor.__inherit;
    var composit = elementDescriptor.descriptor.__composit;

    if (kind === 'field') {
      defaultValue = elementDescriptor.initializer ? elementDescriptor.initializer() : value; // _symbolKey = Symbol(key);

      var setter = quiet ? function (val) {
        this.quietSet(key, val);
      } : function (val) {
        this.set(key, val);
      };
      elementDescriptor = {
        kind: 'method',
        key: key,
        placement: 'prototype',
        descriptor: {
          configurable: true,
          enumerable: true,
          set: setter,
          get: function get() {
            return this.get(key);
          }
        }
      };
    }

    if (relativeType) {
      elementDescriptor = applyRative(elementDescriptor, relativeType);
    }

    if (inheritValue) {
      elementDescriptor = applyInherit(elementDescriptor, inheritValue.defaultValue);
    }

    var descriptor = elementDescriptor.descriptor;
    var _getter = descriptor.get;

    if (!_getter) {
      _getter = function _getter() {
        var ret = this.get(key);
        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    }

    if (composit) {
      if (cache || reflow || relayout || quiet || value || extra) {
        throw new Error('Cannot apply state to composit attribute.');
      }

      descriptor.get = _getter;
    } else if (!relativeType && !inheritValue) {
      descriptor.get = function () {
        var ret = _getter.call(this);

        return ret != null ? ret : this.getDefaultValue(key, defaultValue);
      };
    } else if (relativeType) {
      // enable set default to user defined getter
      descriptor.get = function () {
        var ret = _getter.call(this);

        var subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        } else if (ret.relative) {
          var _relative = ret.relative.trim();

          if (_relative === 'pw' || _relative === 'ph') {
            var pv = getPV(subject, _relative);

            if (pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return pv * ret.v;
            }

            return ret.rv;
          }

          if (_relative === 'rw' || _relative === 'rh') {
            var layer = subject.layer;
            var _pv = null;

            if (layer) {
              if (_relative === 'rw') {
                _pv = layer.resolution[0];
              } else if (_relative === 'rh') {
                _pv = layer.resolution[1];
              }
            }

            if (_pv !== ret.pv) {
              this[key] = ret.rv;
              return this[key];
            }

            subject.cache = null;

            if (subject[_attrAbsolute]) {
              return _pv * ret.v;
            }

            return ret.rv;
          }
        }

        return ret;
      };
    } else {
      // enable set default to user defined getter
      descriptor.get = function () {
        var ret = _getter.call(this);

        var subject = this.subject;

        if (ret == null) {
          ret = this.getDefaultValue(key, defaultValue);
        }

        if (ret === 'inherit') {
          var _value = null;
          var parent = subject.parent;

          while (parent && parent.attr) {
            _value = parent.attr(key);
            if (_value != null) break;
            parent = parent.parent;
          }

          return _value != null ? _value : this.__inheritDefaults[key];
        }

        return ret;
      };
    }

    if (!composit) {
      var _setter = descriptor.set;

      var _clearCache = !(descriptor.__cachable || cache);

      descriptor.set = function (val) {
        var subject = this.subject;
        this.__updateTag = false;
        this.__reflowTag = reflow;
        this.__clearLayout = relayout;

        if (!this.__styleTag && val != null && this.__attributesSet) {
          this.__attributesSet.add(key);
        }

        if (!this.__styleTag && val == null && this.__attributesSet) {
          if (this.__attributesSet.has(key)) {
            this.__attributesSet.delete(key);
          }
        }

        _setter.call(this, val);

        if (subject && !this.__quietTag && this.__updateTag) {
          var clearLayout = this.__clearLayout;

          if (this.__reflowTag) {
            // reflow must before clearLayout because boxOffsetSize is also flowed.
            subject.reflow();
          }

          if (subject.hasLayout) {
            var offsetSize = subject.boxOffsetSize,
                layoutSize = subject.__lastLayout;
            clearLayout |= !layoutSize || offsetSize[0] !== layoutSize[0] || offsetSize[1] !== layoutSize[1];
            subject.__lastLayout = offsetSize;
          }

          if (clearLayout) subject.clearLayout();
          subject.forceUpdate(_clearCache);
        }

        if (this.__updateTag) {
          if (_store__WEBPACK_IMPORTED_MODULE_3__["relatedAttributes"].has(key)) {
            subject.updateStyles();
          }

          if (extra) {
            this[extra](key, val);
          }
        }
      }; // delete this.__reflowTag;
      // delete this.__updateTag;

    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (options.descriptor) {
    return decorator(options);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  quiet = !!options.quiet;
  cache = !!options.cache;
  reflow = !!options.reflow;
  relayout = !!options.relayout;
  value = options.value;
  extra = options.extra;
  return decorator;
}
function composit(struct) {
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor2 = elementDescriptor,
        kind = _elementDescriptor2.kind,
        key = _elementDescriptor2.key;

    if (kind !== 'field') {
      throw new Error("Invalid composit attribute ".concat(key));
    }

    elementDescriptor.kind = 'method';
    var set, get;

    if (typeof struct === 'string') {
      set = function set(val) {
        this[struct] = val;
      };

      get = function get() {
        return this[struct];
      };
    } else if (Array.isArray(struct)) {
      set = function set(val) {
        var _this = this;

        struct.forEach(function (key, i) {
          _this[key] = val != null ? val[i] : null;
        });
      };

      get = function get() {
        var _this2 = this;

        return struct.map(function (key) {
          return _this2[key];
        });
      };
    } else {
      struct = Object.entries(struct);

      set = function set(val) {
        var _this3 = this;

        struct.forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
              prop = _ref2[0],
              key = _ref2[1];

          _this3[key] = val != null ? val[prop] : null;
        });
      };

      get = function get() {
        var _this4 = this;

        var ret = {};
        struct.forEach(function (_ref3) {
          var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
              prop = _ref4[0],
              key = _ref4[1];

          ret[prop] = _this4[key];
        });
        return ret;
      };
    }

    elementDescriptor.descriptor = {
      get: get,
      set: set,
      __composit: true
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // after attr

function cachable(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor3 = elementDescriptor,
      descriptor = _elementDescriptor3.descriptor;
  descriptor.__cachable = true;
  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}
var inheritAttributes = new Set(); // after attr

function inherit() {
  var defaultValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor4 = elementDescriptor,
        descriptor = _elementDescriptor4.descriptor;
    descriptor.__inherit = {
      defaultValue: defaultValue
    };
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyInherit(elementDescriptor, defaultValue) {
  var key = elementDescriptor.key,
      _finisher = elementDescriptor.finisher,
      target = elementDescriptor.target;
  inheritAttributes.add(key);

  if (target) {
    if (!target.hasOwnProperty('__inheritDefaults')) {
      // eslint-disable-line no-prototype-builtins
      target.__inheritDefaults = Object.create(target.__inheritDefaults || null);
    }

    target.__inheritDefaults[key] = defaultValue;
    return elementDescriptor;
  }

  return _objectSpread({}, elementDescriptor, {
    finisher: function finisher(klass) {
      if (_finisher) _finisher(klass);
      var proto = klass.prototype;

      if (!proto.hasOwnProperty('__inheritDefaults')) {
        // eslint-disable-line no-prototype-builtins
        proto.__inheritDefaults = Object.create(proto.__inheritDefaults || null);
      }

      proto.__inheritDefaults[key] = defaultValue;
    }
  });
} // after attr
// relative -> width | height


function relative() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'width';
  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor5 = elementDescriptor,
        descriptor = _elementDescriptor5.descriptor;
    descriptor.__relative = type;
    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
}

function applyRative(elementDescriptor, type) {
  var descriptor = elementDescriptor.descriptor;
  var setter = descriptor.set;

  descriptor.set = function (val) {
    if (typeof val === 'string') {
      val = val.trim();

      if (val.slice(-1) === '%') {
        var _relative2 = type === 'width' ? 'pw' : 'ph';

        var pv = getPV(this.subject, _relative2);
        val = {
          relative: _relative2,
          pv: pv,
          v: parseFloat(val) / 100,
          rv: val
        };
      } else {
        var _relative3 = val.slice(-2);

        if (_relative3 === 'rw' || _relative3 === 'rh') {
          var _pv2 = null;
          var layer = this.subject.layer;

          if (layer) {
            _pv2 = layer.resolution[_relative3 === 'rw' ? 0 : 1];
          }

          val = {
            relative: _relative3,
            pv: _pv2,
            v: parseFloat(val) / 100,
            rv: val
          };
        } else {
          val = val ? parseFloat(val) : val;
        }
      }
    }

    setter.call(this, val);
  };

  return elementDescriptor;
}

function flow(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor6 = elementDescriptor,
      descriptor = _elementDescriptor6.descriptor,
      key = _elementDescriptor6.key;

  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      var ret = this.flow(key);

      if (ret === undefined) {
        ret = _getter.call(this);
        this.flow(key, ret);
      }

      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
} // set tag force to get absolute value from relative attributes

function absolute(elementDescriptor) {
  if (arguments.length === 3) {
    elementDescriptor = polyfillLegacy.apply(this, arguments);
  }

  var _elementDescriptor7 = elementDescriptor,
      descriptor = _elementDescriptor7.descriptor;

  if (descriptor.get) {
    var _getter = descriptor.get;

    descriptor.get = function () {
      this[_attrAbsolute] = true;

      var ret = _getter.call(this);

      this[_attrAbsolute] = false;
      return ret;
    };
  }

  if (arguments.length === 3) return elementDescriptor.descriptor;
  return elementDescriptor;
}
function setDeprecation(apiName) {
  var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  msg = "[Deprecation] ".concat(apiName, " has been deprecated.").concat(msg);
  Object(_utils__WEBPACK_IMPORTED_MODULE_2__["notice"])(msg);
}
function deprecate(msg) {
  var apiName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  var decorator = function decorator(elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor8 = elementDescriptor,
        descriptor = _elementDescriptor8.descriptor,
        key = _elementDescriptor8.key;
    apiName = apiName || "Method ".concat(key);

    if (typeof descriptor.value === 'function') {
      var func = descriptor.value;

      descriptor.value = function () {
        setDeprecation(apiName, msg);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return func.apply(this, args);
      };
    }

    if (descriptor.set) {
      var setter = descriptor.set;

      descriptor.set = function (val) {
        setDeprecation(apiName, msg);
        return setter.call(this, val);
      };
    }

    if (descriptor.get) {
      var getter = descriptor.get;

      descriptor.get = function () {
        setDeprecation(apiName, msg);
        return getter.call(this);
      };
    }

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };

  if (msg.descriptor) {
    return decorator(msg);
  }

  if (arguments.length === 3) {
    return decorator.apply(this, arguments);
  }

  return decorator;
} // before attr

function parseValue() {
  for (var _len2 = arguments.length, parsers = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    parsers[_key2] = arguments[_key2];
  }

  return function (elementDescriptor) {
    if (arguments.length === 3) {
      elementDescriptor = polyfillLegacy.apply(this, arguments);
    }

    var _elementDescriptor9 = elementDescriptor,
        descriptor = _elementDescriptor9.descriptor;
    var setter = descriptor.set;

    descriptor.set = function (val) {
      if (val != null && val !== '' && val !== 'inherit') {
        val = parsers.reduce(function (v, parser) {
          return parser(v);
        }, val);
      }

      setter.call(this, val);
    };

    if (arguments.length === 3) return elementDescriptor.descriptor;
    return elementDescriptor;
  };
} // return a function to apply any decorators to a descriptor

function decorators() {
  for (var _len3 = arguments.length, funcs = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    funcs[_key3] = arguments[_key3];
  }

  return function (key, value, descriptor) {
    var elementDescriptor;

    if (!descriptor) {
      elementDescriptor = key;
    } else {
      elementDescriptor = {
        key: key,
        descriptor: descriptor,
        value: value
      };
    }

    var ret = funcs.reduceRight(function (a, b) {
      return b.call(this, a);
    }, elementDescriptor);
    return ret && ret.descriptor;
  };
}
/* eslint-enable prefer-rest-params */

/***/ }),
/* 32 */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeNames", function() { return attributeNames; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "relatedAttributes", function() { return relatedAttributes; });
var attributeNames = new Set();
var relatedAttributes = new Set();

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawRadiusBox", function() { return drawRadiusBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findColor", function() { return findColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cacheContextPool", function() { return cacheContextPool; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);



// export function drawRadiusBox(context, {x, y, w, h, r}) {
//   // avoid radius larger than width or height
//   r = Math.min(r, Math.floor(Math.min(w, h) / 2));
//   // avoid radius is negative
//   r = Math.max(r, 0);
//   context.beginPath();
//   context.moveTo(x + r, y);
//   context.arcTo(x + w, y, x + w, y + h, r);
//   context.arcTo(x + w, y + h, x, y + h, r);
//   context.arcTo(x, y + h, x, y, r);
//   context.arcTo(x, y, x + w, y, r);
//   context.closePath();
// }
function drawEllipseBorder(ctx, x, y, w, h) {
  var pos = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'leftTop';
  var kappa = 0.5522848,
      ox = w / 2 * kappa,
      // control point offset horizontal
  oy = h / 2 * kappa,
      // control point offset vertical
  xe = x + w,
      // x-end
  ye = y + h,
      // y-end
  xm = x + w / 2,
      // x-middle
  ym = y + h / 2; // y-middle

  if (pos === 'leftTop') {
    ctx.moveTo(x, ym);
    ctx.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if (pos === 'rightTop') {
    ctx.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if (pos === 'rightBottom') {
    ctx.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if (pos === 'leftBottom') {
    ctx.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

function drawRadiusBox(context, _ref, radius) {
  var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 4),
      x = _ref2[0],
      y = _ref2[1],
      w = _ref2[2],
      h = _ref2[3];

  if (!radius) {
    context.beginPath();
    context.rect(x, y, w, h);
  } else {
    if (!radius) radius = [0, 0, 0, 0, 0, 0, 0, 0];
    if (typeof radius === 'number') radius = Array(8).fill(radius);

    var _radius$map = radius.map(function (r, i) {
      if (i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    }),
        _radius$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_radius$map, 8),
        tl0 = _radius$map2[0],
        tl1 = _radius$map2[1],
        tr0 = _radius$map2[2],
        tr1 = _radius$map2[3],
        br0 = _radius$map2[4],
        br1 = _radius$map2[5],
        bl0 = _radius$map2[6],
        bl1 = _radius$map2[7];

    context.beginPath();
    context.moveTo(x, y + tl1);
    drawEllipseBorder(context, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    context.lineTo(x + w - tr0, y);
    drawEllipseBorder(context, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    context.lineTo(x + w, y + h - br1);
    drawEllipseBorder(context, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    context.lineTo(x + bl0, y + h);
    drawEllipseBorder(context, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    context.closePath();
  }
}
/* istanbul ignore next  */

function gradientBox(angle, rect) {
  var _rect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  angle %= 360;

  if (angle < 0) {
    angle += 360;
  }

  var ret = [x, y, x + w, y + h];

  if (angle >= 0 && angle < 90) {
    var tan = Math.tan(Math.PI * angle / 180);
    var d = tan * w;

    if (d <= h) {
      ret = [x, y, x + w, y + d];
    } else {
      d = h / tan;
      ret = [x, y, x + d, y + h];
    }
  } else if (angle >= 90 && angle < 180) {
    var _tan = Math.tan(Math.PI * (angle - 90) / 180);

    var _d = _tan * h;

    if (_d <= w) {
      ret = [x + w, y, x + w - _d, y + h];
    } else {
      _d = w / _tan;
      ret = [x + w, y, x, y + _d];
    }
  } else if (angle >= 180 && angle < 270) {
    var _tan2 = Math.tan(Math.PI * (angle - 180) / 180);

    var _d2 = _tan2 * w;

    if (_d2 <= h) {
      ret = [x + w, y + h, x, y + h - _d2];
    } else {
      _d2 = h / _tan2;
      ret = [x + w, y + h, x + w - _d2, y];
    }
  } else if (angle >= 270 && angle < 360) {
    var _tan3 = Math.tan(Math.PI * (angle - 270) / 180);

    var _d3 = _tan3 * h;

    if (_d3 <= w) {
      ret = [x, y + h, x + _d3, y];
    } else {
      _d3 = w / _tan3;
      ret = [x, y + h, x + w, y + h - _d3];
    }
  }

  return ret;
}

function findColor(context, sprite, prop) {
  var gradients = sprite.attr('gradients') || {};
  var color = prop === 'border' ? sprite.attr(prop).color : sprite.attr(prop),
      gradient;

  if (gradients[prop]) {
    /* istanbul ignore next */
    gradient = gradients[prop];
  } else if (typeof color !== 'string') {
    gradient = color;
  }

  if (gradient) {
    var _gradient = gradient,
        colors = _gradient.colors,
        vector = _gradient.vector,
        direction = _gradient.direction,
        rect = _gradient.rect;
    /* istanbul ignore if  */

    if (direction != null) {
      if (prop === 'border') {
        rect = rect || [0, 0].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprite.outerSize));
      } else {
        var _sprite$attr = sprite.attr('border'),
            borderWidth = _sprite$attr.width;

        rect = rect || [borderWidth, borderWidth].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(sprite.innerSize));
      }

      vector = gradientBox(direction, rect);
    }

    if (vector.length === 4) {
      color = context.createLinearGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
    } else if (vector.length === 6) {
      color = context.createRadialGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
    }
    /* istanbul ignore next  */
    else if (vector.length === 3) {
        // for wxapp
        color = context.createCircularGradient.apply(context, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vector));
      }
      /* istanbul ignore next  */
      else {
          throw Error('Invalid gradient vector!');
        }

    colors.forEach(function (o) {
      color.addColorStop(o.offset, o.color);
    });
  }

  return color;
}
var contextPool = [],
    contextReady = [],
    maxPollSize = 50;
var cacheContextPool = {
  get: function get(context) {
    if (contextReady.length > 0) {
      return contextReady.pop();
    }

    var canvas = context.canvas;

    if (!canvas || !canvas.cloneNode) {
      return;
    }

    var copied = canvas.cloneNode();
    return copied.getContext('2d');
  },
  flush: function flush() {
    contextReady.push.apply(contextReady, contextPool);
    contextPool.length = 0;
  },
  put: function put() {
    var size = this.size;

    for (var _len = arguments.length, contexts = new Array(_len), _key = 0; _key < _len; _key++) {
      contexts[_key] = arguments[_key];
    }

    contexts.every(function (context) {
      var ret = size++ < maxPollSize;

      if (ret) {
        context.canvas.width = 0;
        context.canvas.height = 0;
        contextPool.push(context);
      }

      return ret;
    });
  },

  get size() {
    return contextPool.length + contextReady.length;
  }

};

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseSprite; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(47);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var _baseattr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(55);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(58);
















var _animations = Symbol('animations'),
    _cachePriority = Symbol('cachePriority'),
    _effects = Symbol('effects'),
    _flow = Symbol('flow'),
    _releaseKeys = Symbol('releaseKeys');

var CACHE_PRIORITY_THRESHOLDS = 6; // const CACHE_PRIORITY_THRESHOLDS = 0; // disable cache_priority, for canvas drawing bug...

var BaseSprite = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6___default()(null, function (_initialize, _BaseNode) {
  var BaseSprite =
  /*#__PURE__*/
  function (_BaseNode2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(BaseSprite, _BaseNode2);

    /**
      new Sprite({
        attr: {
          ...
        }
      })
     */
    function BaseSprite(attrs) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, BaseSprite);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite).call(this, attrs));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

      _this[_animations] = new Set();
      _this[_cachePriority] = 0;
      _this[_flow] = {};
      _this[_releaseKeys] = new Set();
      return _this;
    }

    return BaseSprite;
  }(_BaseNode);

  return {
    F: BaseSprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return _baseattr__WEBPACK_IMPORTED_MODULE_12__["default"];
      }
    }, {
      kind: "method",
      static: true,
      key: "setAttributeEffects",
      value: function setAttributeEffects() {
        var effects = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        if (this.prototype[_effects] == null) {
          this.prototype[_effects] = effects;
        }

        Object.assign(this.prototype[_effects], effects);
      }
      /*
        Sprite.addAttributes({
          pop1(attr, val) {
            ...
          },
        })
      */

    }, {
      kind: "method",
      static: true,
      key: "addAttributes",
      value: function addAttributes() {
        var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return this.Attr.addAttributes(attrs);
      }
    }, {
      kind: "method",
      static: true,
      key: "defineAttributes",
      value: function defineAttributes(attrs, effects) {
        this.Attr =
        /*#__PURE__*/
        function (_this$Attr) {
          _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(_class, _this$Attr);

          function _class(subject) {
            var _this2;

            _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, _class);

            _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(_class).call(this, subject));

            if (attrs.init) {
              attrs.init.call(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2), _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this2), subject);
            }

            return _this2;
          }

          return _class;
        }(this.Attr);

        if (attrs) this.addAttributes(attrs);
        if (effects) this.setAttributeEffects(effects);
        return this.Attr;
      }
    }, {
      kind: "get",
      key: "effects",
      value: function effects() {
        return this[_effects];
      }
    }, {
      kind: "method",
      key: "setReleaseKey",
      value: function setReleaseKey(key) {
        this[_releaseKeys].add(key);
      }
    }, {
      kind: "method",
      key: "reflow",
      value: function reflow() {
        this[_flow] = {};
      }
    }, {
      kind: "method",
      key: "flow",
      value: function flow(prop, value) {
        if (value === undefined) {
          return this[_flow][prop];
        }

        this[_flow][prop] = value;
      }
    }, {
      kind: "get",
      key: "hasLayout",
      value: function hasLayout() {
        if (this.attr('position') === 'absolute') return false;

        if (this.parent && this.parent.relayout) {
          var display = this.parent.attr('display');
          return display !== '' && display !== 'static';
        }

        return false;
      }
    }, {
      kind: "set",
      key: "zIndex",
      value: function zIndex(val) {
        this.attr('zIndex', val);
      }
    }, {
      kind: "get",
      key: "zIndex",
      value: function zIndex() {
        return this.attr('zIndex');
      }
    }, {
      kind: "get",
      key: "isVirtual",
      value: function isVirtual() {
        return false;
      }
    }, {
      kind: "method",
      key: "isVisible",
      value: function isVisible() {
        if (!this.parent) return false;
        var display = this.attr('display');

        if (display === 'none') {
          return false;
        }

        var opacity = this.attr('opacity');

        if (opacity <= 0) {
          return false;
        }

        if (this.isVirtual) return true;

        var _this$offsetSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.offsetSize, 2),
            width = _this$offsetSize[0],
            height = _this$offsetSize[1];

        if (width <= 0 || height <= 0) {
          return false;
        }

        if (this.parent.isVisible) {
          return this.parent.isVisible();
        }

        return true;
      }
    }, {
      kind: "get",
      key: "transform",
      value: function transform() {
        var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Matrix"](this.attr('transformMatrix'));
        var transformOrigin = this.attr('transformOrigin');

        if (transformOrigin) {
          var t = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Matrix"]();
          t.translate.apply(t, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(transformOrigin));
          t.multiply(transform);
          t.translate.apply(t, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(transformOrigin.map(function (v) {
            return -v;
          })));
          return t;
        }

        return transform;
      }
    }, {
      kind: "method",
      key: "connect",
      value: function connect(parent) {
        var _this3 = this;

        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        if (parent && typeof parent.stroke === 'function') {
          // directly connect to canvas2d context
          var node = new _basenode__WEBPACK_IMPORTED_MODULE_13__["default"]();
          node.context = parent;
          node.timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_10__["Timeline"]();

          node.update = function () {
            var currentTime = this.timeline.currentTime;
            node.dispatchEvent('update', {
              target: this,
              timeline: this.timeline,
              renderTime: currentTime
            }, true, true);
          };

          parent = node;
        }

        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite.prototype), "connect", this).call(this, parent, zOrder);

        Object.defineProperty(this, 'context', {
          get: function get() {
            return parent.cache || parent.context;
          },
          configurable: true
        });

        this[_animations].forEach(function (animation) {
          if (parent.layer) {
            animation.baseTimeline = parent.layer.timeline;
          }

          animation.play();
          animation.finished.then(function () {
            _this3[_animations].delete(animation);
          });
        });

        if (this.hasLayout) this.clearLayout();
        this.reflow();
        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function disconnect(parent) {
        var _this4 = this;

        this[_animations].forEach(function (animation) {
          return animation.cancel();
        });

        if (this.cache) {
          this.cache = null;
        }

        if (this.hasLayout) this.clearLayout();
        this.reflow();

        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite.prototype), "disconnect", this).call(this, parent);

        delete this.context;

        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this[_releaseKeys]).forEach(function (key) {
          return delete _this4[key];
        });

        return ret;
      }
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["absolute"]],
      key: "xy",
      value: function xy() {
        var x, y;

        if (this.hasLayout) {
          x = this.attr('layoutX');
          y = this.attr('layoutY');
        } else {
          var _this$attr = this.attr('pos');

          var _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr, 2);

          x = _this$attr2[0];
          y = _this$attr2[1];
        }

        return [x, y];
      }
    }, {
      kind: "get",
      key: "animations",
      value: function animations() {
        return this[_animations];
      }
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "attrSize",
      value: function attrSize() {
        var _this$attr3 = this.attr('size'),
            _this$attr4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr3, 2),
            width = _this$attr4[0],
            height = _this$attr4[1];

        var isBorderBox = this.attr('boxSizing') === 'border-box';

        if (this.hasLayout) {
          var layoutWidth = this.attr('layoutWidth'),
              layoutHeight = this.attr('layoutHeight');
          var _ref = [layoutWidth !== '' ? layoutWidth : width, layoutHeight !== '' ? layoutHeight : height];
          width = _ref[0];
          height = _ref[1];
        }

        if (isBorderBox) {
          var borderWidth = this.attr('border').width,
              _this$attr5 = this.attr('padding'),
              _this$attr6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr5, 4),
              paddingTop = _this$attr6[0],
              paddingRight = _this$attr6[1],
              paddingBottom = _this$attr6[2],
              paddingLeft = _this$attr6[3];

          if (width !== '') {
            width = Math.max(0, width - 2 * borderWidth - paddingLeft - paddingRight);
          }

          if (height !== '') {
            height = Math.max(0, height - 2 * borderWidth - paddingTop - paddingBottom);
          }
        }

        return [width, height];
      }
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["absolute"], _utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "boxOffsetSize",
      value: function boxOffsetSize() {
        // get original boxSize, without layout
        if (this.isVirtual) return [0, 0];

        var _this$attr7 = this.attr('size'),
            _this$attr8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr7, 2),
            width = _this$attr8[0],
            height = _this$attr8[1];

        var _this$attr9 = this.attr('padding'),
            _this$attr10 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr9, 4),
            top = _this$attr10[0],
            right = _this$attr10[1],
            bottom = _this$attr10[2],
            left = _this$attr10[3];

        var _this$attr11 = this.attr('border'),
            borderWidth = _this$attr11.width,
            lw = borderWidth * 2;

        return [left + (width | 0) + right + lw, top + (height | 0) + bottom + lw];
      } // content width / height

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "contentSize",
      value: function contentSize() {
        if (this.isVirtual) return [0, 0];

        var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        return [width | 0, height | 0];
      } // content + padding

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "clientSize",
      value: function clientSize() {
        var _this$attr12 = this.attr('padding'),
            _this$attr13 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr12, 4),
            top = _this$attr13[0],
            right = _this$attr13[1],
            bottom = _this$attr13[2],
            left = _this$attr13[3],
            _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.contentSize, 2),
            width = _this$contentSize[0],
            height = _this$contentSize[1];

        return [left + width + right, top + height + bottom];
      } // content + padding + border

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "offsetSize",
      value: function offsetSize() {
        var _this$attr14 = this.attr('border'),
            borderWidth = _this$attr14.width,
            _this$clientSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.clientSize, 2),
            width = _this$clientSize[0],
            height = _this$clientSize[1];

        return [width + 2 * borderWidth, height + 2 * borderWidth];
      }
    }, {
      kind: "get",
      key: "layoutSize",
      value: function layoutSize() {
        var size = this.offsetSize;

        var _this$attr15 = this.attr('margin'),
            _this$attr16 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr15, 4),
            top = _this$attr16[0],
            right = _this$attr16[1],
            bottom = _this$attr16[2],
            left = _this$attr16[3];

        return [left + size[0] + right, top + size[1] + bottom];
      }
    }, {
      kind: "get",
      key: "innerSize",
      value: function innerSize() {
        return this.contentSize;
      }
    }, {
      kind: "get",
      key: "outerSize",
      value: function outerSize() {
        return this.offsetSize;
      }
    }, {
      kind: "method",
      key: "getParentXY",
      value: function getParentXY() {
        var lx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var ly = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var layer = this.layer;
        if (!layer) return [0, 0];
        var parents = [];
        var target = this.parent;

        while (target && target !== layer) {
          parents.push(target);
          target = target.parent;
        }

        parents.reverse();
        var parentX = lx,
            parentY = ly;
        parents.forEach(function (node) {
          var scrollLeft = node.attr('scrollLeft'),
              scrollTop = node.attr('scrollTop'),
              borderWidth = node.attr('border').width,
              padding = node.attr('padding');

          var _node$pointToOffset = node.pointToOffset(parentX, parentY);

          var _node$pointToOffset2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_node$pointToOffset, 2);

          parentX = _node$pointToOffset2[0];
          parentY = _node$pointToOffset2[1];
          parentX = parentX - node.originalRect[0] - borderWidth - padding[3] + scrollLeft;
          parentY = parentY - node.originalRect[1] - borderWidth - padding[0] + scrollTop;
        });
        return [parentX, parentY];
      }
    }, {
      kind: "method",
      key: "getLayerXY",
      value: function getLayerXY() {
        var dx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var dy = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
        var layer = this.layer;
        if (!layer) return [0, 0];
        var target = this;
        var x = dx,
            y = dy;

        while (target && target !== layer) {
          var _target$offsetToPoint = target.offsetToPoint(x, y);

          var _target$offsetToPoint2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_target$offsetToPoint, 2);

          x = _target$offsetToPoint2[0];
          y = _target$offsetToPoint2[1];
          var parent = target.parent;

          if (parent !== layer) {
            var borderWidth = parent.attr('border').width;
            var padding = parent.attr('padding'),
                scrollLeft = parent.attr('scrollLeft') || 0,
                scrollTop = parent.attr('scrollTop') || 0; // const parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft
            // const parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop

            x = x + parent.originalRect[0] + borderWidth + padding[3] - scrollLeft;
            y = y + parent.originalRect[1] + borderWidth + padding[0] - scrollTop;
          }

          target = parent;
        }

        return [x, y];
      }
    }, {
      kind: "get",
      key: "boundingRect",
      value: function boundingRect() {
        var transform = this.transform;

        var _this$originalRect = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.originalRect, 4),
            ox = _this$originalRect[0],
            oy = _this$originalRect[1],
            width = _this$originalRect[2],
            height = _this$originalRect[3];

        if (this.hasLayout) {
          var margin = this.attr('margin');
          width += margin[1];
          height += margin[2];
        }

        var vertexs = [[ox, oy], [width + ox, oy], [ox, height + oy], [width + ox, height + oy]];
        var transformed = vertexs.map(function (v) {
          return transform.transformPoint(v[0], v[1]);
        });
        var vx = transformed.map(function (v) {
          return v[0];
        }),
            vy = transformed.map(function (v) {
          return v[1];
        });
        var minX = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vx)),
            minY = Math.min.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vy)),
            maxX = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vx)),
            maxY = Math.max.apply(Math, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(vy));
        return [minX, minY].concat([maxX - minX, maxY - minY]);
      } // rect before transform

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "originalRect",
      value: function originalRect() {
        var _this$offsetSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.offsetSize, 2),
            width = _this$offsetSize2[0],
            height = _this$offsetSize2[1],
            _this$attr17 = this.attr('anchor'),
            _this$attr18 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr17, 2),
            anchorX = _this$attr18[0],
            anchorY = _this$attr18[1];

        var rect = [-anchorX * width, -anchorY * height, width, height];

        if (this.hasLayout) {
          var margin = this.attr('margin');
          rect[0] += margin[3];
          rect[1] += margin[0];
        }

        return rect;
      }
    }, {
      kind: "get",
      key: "originalRenderRect",
      value: function originalRenderRect() {
        var bound = this.originalRect,
            pos = this.xy;
        return [pos[0] + bound[0], pos[1] + bound[1], bound[2], bound[3]];
      }
    }, {
      kind: "get",
      key: "renderBox",
      value: function renderBox() {
        var bound = this.boundingRect,
            pos = this.xy;
        return [pos[0] + bound[0], pos[1] + bound[1], pos[0] + bound[0] + bound[2], pos[1] + bound[1] + bound[3]];
      }
    }, {
      kind: "get",
      key: "renderRect",
      value: function renderRect() {
        var _this$renderBox = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.renderBox, 4),
            x0 = _this$renderBox[0],
            y0 = _this$renderBox[1],
            x1 = _this$renderBox[2],
            y1 = _this$renderBox[3];

        return [x0, y0, x1 - x0, y1 - y0];
      }
    }, {
      kind: "get",
      key: "vertices",
      value: function vertices() {
        var vertices = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["rectVertices"])(this.originalRect),
            transform = this.transform,
            _this$xy = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.xy, 2),
            x0 = _this$xy[0],
            y0 = _this$xy[1];

        return vertices.map(function (v) {
          var _transform$transformP = transform.transformPoint(v[0], v[1]),
              _transform$transformP2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_transform$transformP, 2),
              x = _transform$transformP2[0],
              y = _transform$transformP2[1];

          return [x0 + x, y0 + y];
        });
      }
    }, {
      kind: "set",
      key: "cache",
      value: function cache(context) {
        if (context == null) {
          this[_cachePriority] = 0;

          if (this.parent && this.parent.cache) {
            this.parent.cache = null;
          }
        }

        if (this.cacheContext && context !== this.cacheContext) {
          _utils__WEBPACK_IMPORTED_MODULE_11__["cacheContextPool"].put(this.cacheContext);
        }

        this.cacheContext = context;
      }
    }, {
      kind: "get",
      key: "cache",
      value: function cache() {
        if (this[_cachePriority] >= CACHE_PRIORITY_THRESHOLDS) {
          return this.cacheContext;
        }

        if (this.cacheContext) {
          this.cache = null;
        }

        return false;
      }
    }, {
      kind: "method",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["deprecate"])('Instead use sprite.cache = null')],
      key: "clearCache",
      value: function clearCache() {
        this.cache = null;
      }
    }, {
      kind: "method",
      key: "appendTo",
      value: function appendTo(parent) {
        parent.appendChild(this);
      }
    }, {
      kind: "method",
      key: "forceUpdate",
      value: function forceUpdate() {
        var clearCache = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (clearCache) {
          this.cache = null;
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite.prototype), "forceUpdate", this).call(this);
      } // layer position to sprite offset

    }, {
      kind: "method",
      key: "pointToOffset",
      value: function pointToOffset(x, y) {
        var _this$xy2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.xy, 2),
            x0 = _this$xy2[0],
            y0 = _this$xy2[1];

        var dx = x - x0,
            dy = y - y0;
        var transform = this.transform;
        return transform.inverse().transformPoint(dx, dy);
      }
    }, {
      kind: "method",
      key: "offsetToPoint",
      value: function offsetToPoint(dx, dy) {
        var transform = this.transform;

        var _this$xy3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.xy, 2),
            x0 = _this$xy3[0],
            y0 = _this$xy3[1];

        var _transform$transformP3 = transform.transformPoint(dx, dy),
            _transform$transformP4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_transform$transformP3, 2),
            x = _transform$transformP4[0],
            y = _transform$transformP4[1];

        return [x + x0, y + y0];
      }
    }, {
      kind: "method",
      key: "getOffsetXY",
      value: function getOffsetXY(evt) {
        var parentX, parentY;

        if (evt.parentX != null) {
          // group
          parentX = evt.parentX;
          parentY = evt.parentY;
        } else {
          parentX = evt.layerX;
          parentY = evt.layerY;
        }

        if (parentX != null && parentY != null) {
          return this.pointToOffset(parentX, parentY);
        }
      }
    }, {
      kind: "method",
      key: "dispatchEvent",
      value: function dispatchEvent(type, evt) {
        var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

        if (collisionState) {
          var offsetXY = this.getOffsetXY(evt);

          if (offsetXY) {
            evt.offsetX = offsetXY[0];
            evt.offsetY = offsetXY[1];
          }
        }

        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function pointCollision(evt) {
        /* istanbul ignore if */
        if (!this.isVisible()) {
          return false;
        }

        var offsetXY = this.getOffsetXY(evt);
        if (!offsetXY) return true;

        var _offsetXY = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(offsetXY, 2),
            nx = _offsetXY[0],
            ny = _offsetXY[1];

        evt.offsetX = nx;
        evt.offsetY = ny;

        var _this$originalRect2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.originalRect, 4),
            ox = _this$originalRect2[0],
            oy = _this$originalRect2[1],
            ow = _this$originalRect2[2],
            oh = _this$originalRect2[3];

        if (nx >= ox && nx - ox < ow && ny >= oy && ny - oy < oh) {
          if (this.context && this.context.isPointInPath) {
            var borderWidth = this.attr('border').width,
                borderRadius = this.attr('borderRadius');

            if (borderWidth || borderRadius) {
              var _this$outerSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.outerSize, 2),
                  width = _this$outerSize[0],
                  height = _this$outerSize[1];

              var x = 0,
                  y = 0,
                  w = width,
                  h = height,
                  r = borderRadius;
              Object(_utils__WEBPACK_IMPORTED_MODULE_11__["drawRadiusBox"])(this.context, [x, y, w, h], r);

              if (this.layer && this.layer.offset) {
                nx += this.layer.offset[0];
                ny += this.layer.offset[1];
              }

              return this.context.isPointInPath(nx - ox, ny - oy);
            }
          }

          return true;
        }
      } // OBB: http://blog.csdn.net/silangquan/article/details/50812425

    }, {
      kind: "method",
      key: "OBBCollision",
      value: function OBBCollision(sprite) {
        // vertices: [p1, p2, p3, p4]
        var _this$vertices = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.vertices, 3),
            p11 = _this$vertices[0],
            p12 = _this$vertices[1],
            p13 = _this$vertices[2],
            _sprite$vertices = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(sprite.vertices, 3),
            p21 = _sprite$vertices[0],
            p22 = _sprite$vertices[1],
            p23 = _sprite$vertices[2];

        var a1 = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Vector"](p12, p11).unit(),
            a2 = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Vector"](p13, p12).unit(),
            a3 = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Vector"](p22, p21).unit(),
            a4 = new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Vector"](p23, p22).unit(); // The projection of the axis of a vertex in a certain direction

        function verticesProjection(vertices, axis) {
          var _vertices$map = vertices.map(function (v) {
            return axis.dot(new sprite_math__WEBPACK_IMPORTED_MODULE_9__["Vector"](v));
          }),
              _vertices$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_vertices$map, 4),
              p1 = _vertices$map2[0],
              p2 = _vertices$map2[1],
              p3 = _vertices$map2[2],
              p4 = _vertices$map2[3];

          return [Math.min(p1, p2, p3, p4), Math.max(p1, p2, p3, p4)];
        }

        function projectionIntersect(p1, p2) {
          var m1 = (p1[0] + p1[1]) / 2,
              l1 = Math.abs(p1[1] - p1[0]),
              m2 = (p2[0] + p2[1]) / 2,
              l2 = Math.abs(p2[1] - p2[0]);
          return Math.abs(m2 - m1) <= (l1 + l2) / 2;
        }

        return projectionIntersect(verticesProjection(this.vertices, a1), verticesProjection(sprite.vertices, a1)) && projectionIntersect(verticesProjection(this.vertices, a2), verticesProjection(sprite.vertices, a2)) && projectionIntersect(verticesProjection(this.vertices, a3), verticesProjection(sprite.vertices, a3)) && projectionIntersect(verticesProjection(this.vertices, a4), verticesProjection(sprite.vertices, a4));
      }
    }, {
      kind: "method",
      key: "relayout",
      value: function relayout() {}
    }, {
      kind: "method",
      key: "draw",
      value: function draw(t) {
        var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;

        // eslint-disable-line complexity
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(BaseSprite.prototype), "draw", this).call(this, t, drawingContext);

        if (!this.isVisible()) {
          return;
        }

        var bound = this.originalRect;
        var cachableContext = !this.isVirtual && this.cache;
        var filter = this.attr('filter'),
            shadow = this.attr('shadow'),
            clipOverflow = this.attr('clipOverflow'),
            enableCache = this.attr('enableCache') === true || this.attr('enableCache') === 'auto' && !this.__labelCount && clipOverflow || shadow || filter;
        var ratio = this.layer ? this.layer.displayRatio || 1.0 : 1.0;

        if (enableCache && (shadow || filter || cachableContext !== false) && !cachableContext) {
          cachableContext = _utils__WEBPACK_IMPORTED_MODULE_11__["cacheContextPool"].get(drawingContext);

          if (cachableContext) {
            // +2 to solve 1px problem
            cachableContext.canvas.width = Math.ceil(bound[2] * ratio) + 2;
            cachableContext.canvas.height = Math.ceil(bound[3] * ratio) + 2;
          }
        }

        var evtArgs = {
          context: drawingContext,
          cacheContext: cachableContext,
          target: this,
          renderTime: t,
          fromCache: !!this.cache
        };
        drawingContext.save();
        drawingContext.translate.apply(drawingContext, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.xy));
        drawingContext.transform.apply(drawingContext, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this.transform.m)); // fix for wxapp

        var alpha = drawingContext.globalAlpha != null ? drawingContext.globalAlpha : 1;
        drawingContext.globalAlpha = alpha * this.attr('opacity');

        if (!cachableContext) {
          drawingContext.translate(bound[0], bound[1]);
        } else {
          cachableContext.save(); // solve 1px problem

          cachableContext.translate(bound[0] - Math.floor(bound[0]) + 1, bound[1] - Math.floor(bound[1]) + 1);

          if (ratio !== 1.0) {
            cachableContext.scale(ratio, ratio);
          }
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

        if ((shadow || filter) && !cachableContext) {
          console.warn('No cachable context. Shadows and filters have been ignored.');
        }

        if (!clipOverflow && cachableContext) {
          console.warn('Clip overflow is ignored because of cache enabled.');
        }

        if (cachableContext && cachableContext.canvas.width > 0 && cachableContext.canvas.height > 0) {
          if (filter) {
            drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_14__["default"].compile(filter);
          }

          if (shadow) {
            var blur = shadow.blur,
                color = shadow.color,
                offset = shadow.offset;
            blur = blur || 1;
            color = color || 'rgba(0,0,0,1)';
            drawingContext.shadowBlur = blur;
            drawingContext.shadowColor = color;

            if (offset) {
              drawingContext.shadowOffsetX = offset[0];
              drawingContext.shadowOffsetY = offset[1];
            }
          }

          drawingContext.drawImage(cachableContext.canvas, Math.floor(bound[0]) - 1, Math.floor(bound[1]) - 1, bound[2] + 2, bound[3] + 2);
        }

        this.dispatchEvent('afterdraw', evtArgs, true, true);

        if (cachableContext) {
          cachableContext.restore();
        }

        drawingContext.restore();
        this[_cachePriority]++;
        return drawingContext;
      }
    }, {
      kind: "get",
      key: "needRender",
      value: function needRender() {
        if (this.isVirtual) return false;

        var _this$offsetSize3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.offsetSize, 2),
            offsetWidth = _this$offsetSize3[0],
            offsetHeight = _this$offsetSize3[1];

        if (offsetWidth <= 0 || offsetHeight <= 0) return false;
        var border = this.attr('border');

        if (border.width <= 0 && this.attr('borderRadius') <= 0 && !this.attr('bgcolor') && !this.attr('gradients').bgcolor && !this.attr('bgimage')) {
          return false; // don't need to render
        }

        return true;
      }
    }, {
      kind: "method",
      key: "show",
      value: function show() {
        this.attr('display', this.__originalDisplay || '');
        return this;
      }
    }, {
      kind: "method",
      key: "hide",
      value: function hide() {
        var display = this.attr('display');

        if (display !== 'none') {
          this.__originalDisplay = display;
          this.attr('display', 'none');
        }

        return this;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(t, drawingContext) {
        var border = this.attr('border'),
            borderRadius = this.attr('borderRadius'),
            padding = this.attr('padding'),
            _this$offsetSize4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.offsetSize, 2),
            offsetWidth = _this$offsetSize4[0],
            offsetHeight = _this$offsetSize4[1],
            _this$clientSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.clientSize, 2),
            clientWidth = _this$clientSize2[0],
            clientHeight = _this$clientSize2[1];

        if (!this.needRender) {
          drawingContext.translate(padding[3], padding[0]);
          return false;
        }

        var borderWidth = border.width;
        var borderStyle = border.style; // draw border

        if (borderWidth) {
          drawingContext.lineWidth = borderWidth;
          var x = borderWidth / 2,
              y = borderWidth / 2,
              w = offsetWidth - borderWidth,
              h = offsetHeight - borderWidth,
              r = borderRadius;
          Object(_utils__WEBPACK_IMPORTED_MODULE_11__["drawRadiusBox"])(drawingContext, [x, y, w, h], r);
          drawingContext.save();

          if (borderStyle && borderStyle !== 'solid') {
            var dashOffset = this.attr('dashOffset');
            drawingContext.lineDashOffset = dashOffset;

            if (borderStyle === 'dashed') {
              borderStyle = [borderWidth * 3, borderWidth * 3];
            }

            drawingContext.setLineDash(borderStyle);
          }

          drawingContext.strokeStyle = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["findColor"])(drawingContext, this, 'border');
          drawingContext.stroke();
          drawingContext.restore();
        } // draw bgcolor


        var bgcolor = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["findColor"])(drawingContext, this, 'bgcolor');
        var bgimage = this.attr('bgimage');

        if (!this.cacheContext || borderWidth || borderRadius || bgcolor || bgimage && bgimage.display !== 'none') {
          var _x = borderWidth,
              _y = borderWidth,
              _w = clientWidth,
              _h = clientHeight,
              _r = borderRadius;

          if (Array.isArray(_r)) {
            _r = _r.map(function (r) {
              return r - borderWidth / 2;
            });
          }

          Object(_utils__WEBPACK_IMPORTED_MODULE_11__["drawRadiusBox"])(drawingContext, [_x, _y, _w, _h], _r);

          if (bgcolor) {
            drawingContext.fillStyle = bgcolor;
            drawingContext.fill();
          } // clip is expensive, we should only perform clip when it has to.


          if (bgimage && bgimage.display !== 'none' || borderRadius && (this.nodeType !== 'sprite' || this.textures && this.textures.length)) {
            drawingContext.clip();
          }

          if (bgimage && bgimage.image && bgimage.display !== 'none') {
            drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
          }
        }

        drawingContext.translate(borderWidth + padding[3], borderWidth + padding[0]);
        return true;
      }
    }]
  };
}, _basenode__WEBPACK_IMPORTED_MODULE_13__["default"]);



function drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var w = image.width,
      h = image.height;

  var _ref2 = clip9 || [16, 16, 16, 16],
      _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref2, 4),
      top = _ref3[0],
      right = _ref3[1],
      bottom = _ref3[2],
      left = _ref3[3];

  var leftTop = [0, 0, left, top],
      rightTop = [w - right, 0, right, top],
      rightBottom = [w - right, h - bottom, right, bottom],
      leftBottom = [0, h - bottom, left, bottom];
  var boxRight = offsetWidth - right - borderWidth,
      boxBottom = offsetHeight - borderWidth - bottom; // draw .9 cross

  var midWidth = w - left - right,
      midHeight = h - top - bottom;

  if (midWidth > 0) {
    var midBoxWidth = clientWidth - left - right + 2;
    var leftOffset = borderWidth + left - 1;

    while (midBoxWidth > 0) {
      var ww = Math.min(midBoxWidth, midWidth) + 1;
      var topPiece = [left - 1, 0, ww, top],
          bottomPiece = [left - 1, h - bottom, ww, bottom];
      drawingContext.drawImage.apply(drawingContext, [image].concat(topPiece, [leftOffset, borderWidth, ww, top]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(bottomPiece, [leftOffset, boxBottom, ww, bottom]));
      midBoxWidth -= midWidth;

      if (midBoxWidth > 0) {
        leftOffset += midWidth;
      }
    }
  }

  if (midHeight > 0) {
    var midBoxHeight = clientHeight - top - bottom + 2;
    var topOffset = borderWidth + top - 1;

    while (midBoxHeight > 0) {
      var hh = Math.min(midBoxHeight, midHeight) + 1;
      var leftPiece = [0, top - 1, left, hh],
          rightPiece = [w - right, top - 1, right, hh];
      drawingContext.drawImage.apply(drawingContext, [image].concat(leftPiece, [borderWidth, topOffset, left, hh]));
      drawingContext.drawImage.apply(drawingContext, [image].concat(rightPiece, [boxRight, topOffset, right, hh]));
      midBoxHeight -= midHeight;

      if (midBoxHeight > 0) {
        topOffset += midHeight;
      }
    }
  }

  if (midHeight && midWidth > 0) {
    var _midBoxWidth = clientWidth - left - right + 2;

    var _leftOffset = borderWidth + left - 1;

    while (_midBoxWidth > 0) {
      var _midBoxHeight = clientHeight - top - bottom + 2;

      var _topOffset = borderWidth + top - 1;

      while (_midBoxHeight > 0) {
        var _ww = Math.min(_midBoxWidth, midWidth) + 1,
            _hh = Math.min(_midBoxHeight, midHeight) + 1;

        var midPiece = [left - 1, top - 1, _ww, _hh];
        drawingContext.drawImage.apply(drawingContext, [image].concat(midPiece, [_leftOffset, _topOffset, _ww, _hh]));
        _midBoxHeight -= midWidth;

        if (_midBoxHeight > 0) {
          _topOffset += midHeight;
        }
      }

      _midBoxWidth -= midWidth;

      if (_midBoxWidth > 0) {
        _leftOffset += midWidth;
      }
    }
  } // draw four corners


  drawingContext.drawImage.apply(drawingContext, [image].concat(leftTop, [borderWidth, borderWidth, left, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightTop, [boxRight, borderWidth, right, top]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(rightBottom, [boxRight, boxBottom, left, bottom]));
  drawingContext.drawImage.apply(drawingContext, [image].concat(leftBottom, [borderWidth, boxBottom, left, bottom]));
}

function drawBgImage(drawingContext, bgimage, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight) {
  var image = bgimage.image,
      display = bgimage.display,
      clip9 = bgimage.clip9;

  if (display === '.9') {
    drawDot9Image(drawingContext, image, clip9, borderWidth, offsetWidth, offsetHeight, clientWidth, clientHeight);
  } else {
    var offset = bgimage.offset || [0, 0],
        w = image.width,
        h = image.height;

    if (display === 'center') {
      offset = [(clientWidth - w) * 0.5, (clientHeight - h) * 0.5];
    } else if (display === 'stretch') {
      w = clientWidth - offset[0];
      h = clientHeight - offset[1];
    }

    drawingContext.drawImage(image, borderWidth + offset[0], borderWidth + offset[1], w, h);

    if (w > 0 && (display === 'repeat' || display === 'repeatX')) {
      var cw = clientWidth - borderWidth - offset[0] - w;

      while (cw > borderWidth) {
        drawingContext.drawImage(image, clientWidth - cw, borderWidth + offset[1], w, h);

        if (h > 0 && display === 'repeat') {
          var ch = clientHeight - borderWidth - offset[1] - h;

          while (ch > borderWidth) {
            drawingContext.drawImage(image, clientWidth - cw, clientHeight - ch, w, h);
            ch -= h;
          }
        }

        cw -= w;
      }
    }

    if (h > 0 && (display === 'repeat' || display === 'repeatY')) {
      var _ch = clientHeight - borderWidth - offset[1] - h;

      while (_ch > borderWidth) {
        drawingContext.drawImage(image, borderWidth + offset[0], clientHeight - _ch, w, h);
        _ch -= h;
      }
    }
  }
}

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(37);

var assertThisInitialized = __webpack_require__(38);

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),
/* 37 */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),
/* 38 */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(40);

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),
/* 40 */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var toArray = __webpack_require__(24);

var toPropertyKey = __webpack_require__(42);

function _decorate(decorators, factory, superClass, mixins) {
  var api = _getDecoratorsApi();

  if (mixins) {
    for (var i = 0; i < mixins.length; i++) {
      api = mixins[i](api);
    }
  }

  var r = factory(function initialize(O) {
    api.initializeInstanceElements(O, decorated.elements);
  }, superClass);
  var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators);
  api.initializeClassElements(r.F, decorated.elements);
  return api.runClassFinishers(r.F, decorated.finishers);
}

function _getDecoratorsApi() {
  _getDecoratorsApi = function _getDecoratorsApi() {
    return api;
  };

  var api = {
    elementsDefinitionOrder: [["method"], ["field"]],
    initializeInstanceElements: function initializeInstanceElements(O, elements) {
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          if (element.kind === kind && element.placement === "own") {
            this.defineClassElement(O, element);
          }
        }, this);
      }, this);
    },
    initializeClassElements: function initializeClassElements(F, elements) {
      var proto = F.prototype;
      ["method", "field"].forEach(function (kind) {
        elements.forEach(function (element) {
          var placement = element.placement;

          if (element.kind === kind && (placement === "static" || placement === "prototype")) {
            var receiver = placement === "static" ? F : proto;
            this.defineClassElement(receiver, element);
          }
        }, this);
      }, this);
    },
    defineClassElement: function defineClassElement(receiver, element) {
      var descriptor = element.descriptor;

      if (element.kind === "field") {
        var initializer = element.initializer;
        descriptor = {
          enumerable: descriptor.enumerable,
          writable: descriptor.writable,
          configurable: descriptor.configurable,
          value: initializer === void 0 ? void 0 : initializer.call(receiver)
        };
      }

      Object.defineProperty(receiver, element.key, descriptor);
    },
    decorateClass: function decorateClass(elements, decorators) {
      var newElements = [];
      var finishers = [];
      var placements = {
        "static": [],
        prototype: [],
        own: []
      };
      elements.forEach(function (element) {
        this.addElementPlacement(element, placements);
      }, this);
      elements.forEach(function (element) {
        if (!_hasDecorators(element)) return newElements.push(element);
        var elementFinishersExtras = this.decorateElement(element, placements);
        newElements.push(elementFinishersExtras.element);
        newElements.push.apply(newElements, elementFinishersExtras.extras);
        finishers.push.apply(finishers, elementFinishersExtras.finishers);
      }, this);

      if (!decorators) {
        return {
          elements: newElements,
          finishers: finishers
        };
      }

      var result = this.decorateConstructor(newElements, decorators);
      finishers.push.apply(finishers, result.finishers);
      result.finishers = finishers;
      return result;
    },
    addElementPlacement: function addElementPlacement(element, placements, silent) {
      var keys = placements[element.placement];

      if (!silent && keys.indexOf(element.key) !== -1) {
        throw new TypeError("Duplicated element (" + element.key + ")");
      }

      keys.push(element.key);
    },
    decorateElement: function decorateElement(element, placements) {
      var extras = [];
      var finishers = [];

      for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) {
        var keys = placements[element.placement];
        keys.splice(keys.indexOf(element.key), 1);
        var elementObject = this.fromElementDescriptor(element);
        var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject);
        element = elementFinisherExtras.element;
        this.addElementPlacement(element, placements);

        if (elementFinisherExtras.finisher) {
          finishers.push(elementFinisherExtras.finisher);
        }

        var newExtras = elementFinisherExtras.extras;

        if (newExtras) {
          for (var j = 0; j < newExtras.length; j++) {
            this.addElementPlacement(newExtras[j], placements);
          }

          extras.push.apply(extras, newExtras);
        }
      }

      return {
        element: element,
        finishers: finishers,
        extras: extras
      };
    },
    decorateConstructor: function decorateConstructor(elements, decorators) {
      var finishers = [];

      for (var i = decorators.length - 1; i >= 0; i--) {
        var obj = this.fromClassDescriptor(elements);
        var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj);

        if (elementsAndFinisher.finisher !== undefined) {
          finishers.push(elementsAndFinisher.finisher);
        }

        if (elementsAndFinisher.elements !== undefined) {
          elements = elementsAndFinisher.elements;

          for (var j = 0; j < elements.length - 1; j++) {
            for (var k = j + 1; k < elements.length; k++) {
              if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) {
                throw new TypeError("Duplicated element (" + elements[j].key + ")");
              }
            }
          }
        }
      }

      return {
        elements: elements,
        finishers: finishers
      };
    },
    fromElementDescriptor: function fromElementDescriptor(element) {
      var obj = {
        kind: element.kind,
        key: element.key,
        placement: element.placement,
        descriptor: element.descriptor
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      if (element.kind === "field") obj.initializer = element.initializer;
      return obj;
    },
    toElementDescriptors: function toElementDescriptors(elementObjects) {
      if (elementObjects === undefined) return;
      return toArray(elementObjects).map(function (elementObject) {
        var element = this.toElementDescriptor(elementObject);
        this.disallowProperty(elementObject, "finisher", "An element descriptor");
        this.disallowProperty(elementObject, "extras", "An element descriptor");
        return element;
      }, this);
    },
    toElementDescriptor: function toElementDescriptor(elementObject) {
      var kind = String(elementObject.kind);

      if (kind !== "method" && kind !== "field") {
        throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"');
      }

      var key = toPropertyKey(elementObject.key);
      var placement = String(elementObject.placement);

      if (placement !== "static" && placement !== "prototype" && placement !== "own") {
        throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"');
      }

      var descriptor = elementObject.descriptor;
      this.disallowProperty(elementObject, "elements", "An element descriptor");
      var element = {
        kind: kind,
        key: key,
        placement: placement,
        descriptor: Object.assign({}, descriptor)
      };

      if (kind !== "field") {
        this.disallowProperty(elementObject, "initializer", "A method descriptor");
      } else {
        this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor");
        this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor");
        element.initializer = elementObject.initializer;
      }

      return element;
    },
    toElementFinisherExtras: function toElementFinisherExtras(elementObject) {
      var element = this.toElementDescriptor(elementObject);

      var finisher = _optionalCallableProperty(elementObject, "finisher");

      var extras = this.toElementDescriptors(elementObject.extras);
      return {
        element: element,
        finisher: finisher,
        extras: extras
      };
    },
    fromClassDescriptor: function fromClassDescriptor(elements) {
      var obj = {
        kind: "class",
        elements: elements.map(this.fromElementDescriptor, this)
      };
      var desc = {
        value: "Descriptor",
        configurable: true
      };
      Object.defineProperty(obj, Symbol.toStringTag, desc);
      return obj;
    },
    toClassDescriptor: function toClassDescriptor(obj) {
      var kind = String(obj.kind);

      if (kind !== "class") {
        throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"');
      }

      this.disallowProperty(obj, "key", "A class descriptor");
      this.disallowProperty(obj, "placement", "A class descriptor");
      this.disallowProperty(obj, "descriptor", "A class descriptor");
      this.disallowProperty(obj, "initializer", "A class descriptor");
      this.disallowProperty(obj, "extras", "A class descriptor");

      var finisher = _optionalCallableProperty(obj, "finisher");

      var elements = this.toElementDescriptors(obj.elements);
      return {
        elements: elements,
        finisher: finisher
      };
    },
    runClassFinishers: function runClassFinishers(constructor, finishers) {
      for (var i = 0; i < finishers.length; i++) {
        var newConstructor = (0, finishers[i])(constructor);

        if (newConstructor !== undefined) {
          if (typeof newConstructor !== "function") {
            throw new TypeError("Finishers must return a constructor.");
          }

          constructor = newConstructor;
        }
      }

      return constructor;
    },
    disallowProperty: function disallowProperty(obj, name, objectType) {
      if (obj[name] !== undefined) {
        throw new TypeError(objectType + " can't have a ." + name + " property.");
      }
    }
  };
  return api;
}

function _createElementDescriptor(def) {
  var key = toPropertyKey(def.key);
  var descriptor;

  if (def.kind === "method") {
    descriptor = {
      value: def.value,
      writable: true,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "get") {
    descriptor = {
      get: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "set") {
    descriptor = {
      set: def.value,
      configurable: true,
      enumerable: false
    };
  } else if (def.kind === "field") {
    descriptor = {
      configurable: true,
      writable: true,
      enumerable: true
    };
  }

  var element = {
    kind: def.kind === "field" ? "field" : "method",
    key: key,
    placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype",
    descriptor: descriptor
  };
  if (def.decorators) element.decorators = def.decorators;
  if (def.kind === "field") element.initializer = def.value;
  return element;
}

function _coalesceGetterSetter(element, other) {
  if (element.descriptor.get !== undefined) {
    other.descriptor.get = element.descriptor.get;
  } else {
    other.descriptor.set = element.descriptor.set;
  }
}

function _coalesceClassElements(elements) {
  var newElements = [];

  var isSameElement = function isSameElement(other) {
    return other.kind === "method" && other.key === element.key && other.placement === element.placement;
  };

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var other;

    if (element.kind === "method" && (other = newElements.find(isSameElement))) {
      if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) {
        if (_hasDecorators(element) || _hasDecorators(other)) {
          throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated.");
        }

        other.descriptor = element.descriptor;
      } else {
        if (_hasDecorators(element)) {
          if (_hasDecorators(other)) {
            throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ").");
          }

          other.decorators = element.decorators;
        }

        _coalesceGetterSetter(element, other);
      }
    } else {
      newElements.push(element);
    }
  }

  return newElements;
}

function _hasDecorators(element) {
  return element.decorators && element.decorators.length;
}

function _isDataDescriptor(desc) {
  return desc !== undefined && !(desc.value === undefined && desc.writable === undefined);
}

function _optionalCallableProperty(obj, name) {
  var value = obj[name];

  if (value !== undefined && typeof value !== "function") {
    throw new TypeError("Expected '" + name + "' to be a function");
  }

  return value;
}

module.exports = _decorate;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(37);

var toPrimitive = __webpack_require__(43);

function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey;

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(37);

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive;

/***/ }),
/* 44 */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(46);

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(44);

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Timeline", function() { return sprite_timeline__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(50);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Effects", function() { return _effect__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(51);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return _easing__WEBPACK_IMPORTED_MODULE_2__["Easings"]; });

/* harmony import */ var _animator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(53);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Animator", function() { return _animator__WEBPACK_IMPORTED_MODULE_3__["default"]; });







/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(49);






var _nowtime = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["createNowTime"])();

var defaultOptions = {
  originTime: 0,
  playbackRate: 1.0
};

var _timeMark = Symbol('timeMark'),
    _playbackRate = Symbol('playbackRate'),
    _timers = Symbol('timers'),
    _originTime = Symbol('originTime'),
    _setTimer = Symbol('setTimer'),
    _parent = Symbol('parent');

var Timeline =
/*#__PURE__*/
function () {
  function Timeline(options, parent) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Timeline);

    if (options instanceof Timeline) {
      parent = options;
      options = {};
    }

    options = Object.assign({}, defaultOptions, options);

    if (parent) {
      this[_parent] = parent;
    }

    var nowtime = options.nowtime || _nowtime;

    if (!parent) {
      var createTime = nowtime();
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return nowtime() - createTime;
        }
      });
    } else {
      Object.defineProperty(this, 'globalTime', {
        get: function get() {
          return parent.currentTime;
        }
      });
    } // timeMark records the reference points on timeline
    // Each time we change the playbackRate or currentTime or entropy
    // A new timeMark will be generated
    // timeMark sorted by entropy
    // If you reset entropy, all the timeMarks behind the new entropy
    // should be dropped


    this[_timeMark] = [{
      globalTime: this.globalTime,
      localTime: -options.originTime,
      entropy: -options.originTime,
      playbackRate: options.playbackRate,
      globalEntropy: 0
    }];

    if (this[_parent]) {
      this[_timeMark][0].globalEntropy = this[_parent].entropy;
    }

    this[_originTime] = options.originTime;
    this[_playbackRate] = options.playbackRate;
    this[_timers] = new Map();
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Timeline, [{
    key: "markTime",
    value: function markTime() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$time = _ref.time,
          time = _ref$time === void 0 ? this.currentTime : _ref$time,
          _ref$entropy = _ref.entropy,
          entropy = _ref$entropy === void 0 ? this.entropy : _ref$entropy,
          _ref$playbackRate = _ref.playbackRate,
          playbackRate = _ref$playbackRate === void 0 ? this.playbackRate : _ref$playbackRate;

      var timeMark = {
        globalTime: this.globalTime,
        localTime: time,
        entropy: entropy,
        playbackRate: playbackRate,
        globalEntropy: this.globalEntropy
      };

      this[_timeMark].push(timeMark);
    }
  }, {
    key: "fork",
    value: function fork(options) {
      return new Timeline(options, this);
    }
  }, {
    key: "seekGlobalTime",
    value: function seekGlobalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
      var entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate,
          globalTime = timeMark.globalTime;
      return globalTime + (seekEntropy - entropy) / Math.abs(playbackRate);
    }
  }, {
    key: "seekLocalTime",
    value: function seekLocalTime(seekEntropy) {
      var idx = this.seekTimeMark(seekEntropy),
          timeMark = this[_timeMark][idx];
      var localTime = timeMark.localTime,
          entropy = timeMark.entropy,
          playbackRate = timeMark.playbackRate;

      if (playbackRate > 0) {
        return localTime + (seekEntropy - entropy);
      }

      return localTime - (seekEntropy - entropy);
    }
  }, {
    key: "seekTimeMark",
    value: function seekTimeMark(entropy) {
      var timeMark = this[_timeMark];
      var l = 0,
          r = timeMark.length - 1;

      if (entropy <= timeMark[l].entropy) {
        return l;
      }

      if (entropy >= timeMark[r].entropy) {
        return r;
      }

      var m = Math.floor((l + r) / 2); // binary search

      while (m > l && m < r) {
        if (entropy === timeMark[m].entropy) {
          return m;
        }

        if (entropy < timeMark[m].entropy) {
          r = m;
        } else if (entropy > timeMark[m].entropy) {
          l = m;
        }

        m = Math.floor((l + r) / 2);
      }

      return l;
    }
  }, {
    key: "updateTimers",
    value: function updateTimers() {
      var _this = this;

      var timers = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this[_timers]);

      timers.forEach(function (_ref2) {
        var _ref3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref2, 2),
            id = _ref3[0],
            timer = _ref3[1];

        _this[_setTimer](timer.handler, timer.time, id);
      });
    }
  }, {
    key: "clearTimeout",
    value: function (_clearTimeout) {
      function clearTimeout(_x) {
        return _clearTimeout.apply(this, arguments);
      }

      clearTimeout.toString = function () {
        return _clearTimeout.toString();
      };

      return clearTimeout;
    }(function (id) {
      var timer = this[_timers].get(id);

      if (timer && timer.timerID != null) {
        if (this[_parent]) {
          this[_parent].clearTimeout(timer.timerID);
        } else {
          clearTimeout(timer.timerID);
        }
      }

      this[_timers].delete(id);
    })
  }, {
    key: "clearInterval",
    value: function clearInterval(id) {
      return this.clearTimeout(id);
    }
  }, {
    key: "clear",
    value: function clear() {
      var _this2 = this;

      // clear all running timers
      var timers = this[_timers];

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(timers.keys()).forEach(function (id) {
        _this2.clearTimeout(id);
      });
    }
    /*
      setTimeout(func, {delay: 100, isEntropy: true})
      setTimeout(func, {entropy: 100})
      setTimeout(func, 100})
     */

  }, {
    key: "setTimeout",
    value: function setTimeout(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        delay: 0
      };
      return this[_setTimer](handler, time);
    }
  }, {
    key: "setInterval",
    value: function setInterval(handler) {
      var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        delay: 0
      };
      var that = this;

      var id = this[_setTimer](function step() {
        // reset timer before handler cause we may clearTimeout in handler()
        that[_setTimer](step, time, id);

        handler();
      }, time);

      return id;
    }
  }, {
    key: _setTimer,
    value: function value(handler, time) {
      var _this3 = this;

      var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : Symbol('timerID');
      time = Object(_utils__WEBPACK_IMPORTED_MODULE_4__["formatDelay"])(time);

      var timer = this[_timers].get(id);

      var delay,
          timerID = null,
          startTime,
          startEntropy;

      if (timer) {
        this.clearTimeout(id);

        if (time.isEntropy) {
          delay = (time.delay - (this.entropy - timer.startEntropy)) / Math.abs(this.playbackRate);
        } else {
          delay = (time.delay - (this.currentTime - timer.startTime)) / this.playbackRate;
        }

        startTime = timer.startTime;
        startEntropy = timer.startEntropy;
      } else {
        delay = time.delay / (time.isEntropy ? Math.abs(this.playbackRate) : this.playbackRate);
        startTime = this.currentTime;
        startEntropy = this.entropy;
      }

      var parent = this[_parent],
          globalTimeout = parent ? parent.setTimeout.bind(parent) : setTimeout;
      var heading = time.heading; // console.log(heading, parent, delay)

      if (!parent && heading === false && delay < 0) {
        delay = Infinity;
      } // if playbackRate is zero, delay will be infinity.
      // For wxapp bugs, cannot use Number.isFinite yet.


      if (isFinite(delay) || parent) {
        // eslint-disable-line no-restricted-globals
        delay = Math.ceil(delay);

        if (globalTimeout !== setTimeout) {
          delay = {
            delay: delay,
            heading: heading
          };
        }

        timerID = globalTimeout(function () {
          _this3[_timers].delete(id);

          handler();
        }, delay);
      }

      this[_timers].set(id, {
        timerID: timerID,
        handler: handler,
        time: time,
        startTime: startTime,
        startEntropy: startEntropy
      });

      return id;
    }
  }, {
    key: "parent",
    get: function get() {
      return this[_parent];
    }
  }, {
    key: "lastTimeMark",
    get: function get() {
      return this[_timeMark][this[_timeMark].length - 1];
    }
  }, {
    key: "currentTime",
    get: function get() {
      var _this$lastTimeMark = this.lastTimeMark,
          localTime = _this$lastTimeMark.localTime,
          globalTime = _this$lastTimeMark.globalTime;
      return localTime + (this.globalTime - globalTime) * this.playbackRate;
    },
    set: function set(time) {
      var _this4 = this;

      var from = this.currentTime,
          to = time,
          timers = this[_timers];
      this.markTime({
        time: time
      });

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(timers).forEach(function (_ref4) {
        var _ref5 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref4, 2),
            id = _ref5[0],
            timer = _ref5[1];

        if (!timers.has(id)) return; // Need check because it maybe clearTimeout by former handler().

        var _timer$time = timer.time,
            isEntropy = _timer$time.isEntropy,
            delay = _timer$time.delay,
            heading = _timer$time.heading,
            handler = timer.handler,
            startTime = timer.startTime;

        if (!isEntropy) {
          var endTime = startTime + delay;

          if (delay === 0 || heading !== false && (to - from) * delay <= 0 || from <= endTime && endTime <= to || from >= endTime && endTime >= to) {
            handler();

            _this4.clearTimeout(id);
          }
        } else if (delay === 0) {
          handler();

          _this4.clearTimeout(id);
        }
      });

      this.updateTimers();
    } // Both currentTime and entropy should be influenced by playbackRate.
    // If current playbackRate is negative, the currentTime should go backwards
    // while the entropy remain to go forwards.
    // Both of the initial values is set to -originTime

  }, {
    key: "entropy",
    get: function get() {
      var _this$lastTimeMark2 = this.lastTimeMark,
          entropy = _this$lastTimeMark2.entropy,
          globalEntropy = _this$lastTimeMark2.globalEntropy;
      return entropy + Math.abs((this.globalEntropy - globalEntropy) * this.playbackRate);
    },
    // get globalTime() {
    //   if(this[_parent]) {
    //     return this[_parent].currentTime;
    //   }
    //   return nowtime();
    // }
    // change entropy will NOT cause currentTime changing but may influence the pass
    // and the future of the timeline. (It may change the result of seek***Time)
    // While entropy is set, all the marks behind will be droped
    set: function set(entropy) {
      if (this.entropy > entropy) {
        var idx = this.seekTimeMark(entropy);
        this[_timeMark].length = idx + 1;
      }

      this.markTime({
        entropy: entropy
      });
      this.updateTimers();
    }
  }, {
    key: "globalEntropy",
    get: function get() {
      return this[_parent] ? this[_parent].entropy : this.globalTime;
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this[_playbackRate];
    },
    set: function set(rate) {
      if (rate !== this.playbackRate) {
        this.markTime({
          playbackRate: rate
        });
        this[_playbackRate] = rate;
        this.updateTimers();
      }
    }
  }, {
    key: "paused",
    get: function get() {
      if (this.playbackRate === 0) return true;
      var parent = this.parent;

      while (parent) {
        if (parent.playbackRate === 0) return true;
        parent = parent.parent;
      }

      return false;
    }
  }]);

  return Timeline;
}();

/* harmony default export */ __webpack_exports__["default"] = (Timeline);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNowTime", function() { return createNowTime; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatDelay", function() { return formatDelay; });
function createNowTime() {
  var syncLocker = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
  var nowtime = null;

  if (Date.now) {
    nowtime = Date.now;
  } else {
    nowtime = function nowtime() {
      return new Date().getTime();
    };
  }

  return nowtime;
}
/*
  delay = 100 -> delay = {delay: 100}
  delay = {entropy: 100} -> delay = {delay: 100, isEntropy: true}
 */

function formatDelay(delay) {
  if (typeof delay === 'number') {
    delay = {
      delay: delay
    };
  } else if ('entropy' in delay) {
    delay = {
      delay: delay.entropy,
      isEntropy: true
    };
  }

  return delay;
}

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  // s - startFrame, e - endFrame
  default: function _default(from, to, p, s, e) {
    if (typeof from === 'number' && typeof to === 'number') {
      return from + (p - s) / (e - s) * (to - from);
    }

    if (p - s > e - p) {
      return to;
    }

    return from;
  }
});

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Easings", function() { return Easings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseEasing", function() { return parseEasing; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);



var BezierEasing = __webpack_require__(52);

var bezierFuncCache = new Map();

function getBezierEasing() {
  for (var _len = arguments.length, value = new Array(_len), _key = 0; _key < _len; _key++) {
    value[_key] = arguments[_key];
  }

  var easing = bezierFuncCache.get(value);

  if (easing) {
    return easing;
  }

  easing = BezierEasing.apply(void 0, value);
  bezierFuncCache.set(value, easing);
  return easing;
}

function getStepsEasing(step) {
  var pos = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'end';
  return function (p, frames) {
    for (var i = 1; i < frames.length; i++) {
      var offset = frames[i].offset;

      if (p <= offset) {
        var start = frames[i - 1].offset,
            end = offset;
        var fp = (p - start) / (end - start),
            d = 1 / step;
        var t = fp / d;

        if (pos === 'end') {
          t = Math.floor(t);
        } else {
          t = Math.ceil(t);
        }

        return d * t * (end - start) + start;
      }
    }

    return 0;
  };
}

function parseEasingStr(easingStr) {
  var pattern = /^cubic-bezier\((.*)\)/,
      matched = easingStr.match(pattern);

  if (matched) {
    var value = matched[1].trim();
    value = value.split(',').map(function (v) {
      return parseFloat(v.trim());
    });
    return getBezierEasing.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(value));
  }

  pattern = /^steps\((.*)\)/;
  matched = easingStr.match(pattern);

  if (matched) {
    var _value = matched[1].trim();

    _value = _value.split(',').map(function (v) {
      return v.trim();
    });

    var _value2 = _value,
        _value3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_value2, 2),
        step = _value3[0],
        pos = _value3[1];

    return getStepsEasing(parseInt(step, 10), pos);
  }

  return easingStr;
}

var Easings = {
  linear: function linear(p) {
    return p;
  },
  ease: getBezierEasing(0.25, 0.1, 0.25, 1),
  'ease-in': getBezierEasing(0.42, 0, 1, 1),
  'ease-out': getBezierEasing(0, 0, 0.58, 1),
  'ease-in-out': getBezierEasing(0.42, 0, 0.58, 1),
  // 'step-start': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     ret = offset
  //     if(p < offset){
  //       break
  //     }
  //   }
  //   return ret
  // },
  // 'step-end': function(p, frames){
  //   let ret = 0
  //   for(let i = 0; i < frames.length; i++){
  //     const {offset} = frames[i]
  //     if(p < offset){
  //       break
  //     }
  //     ret = offset
  //   }
  //   return ret
  // }
  'step-start': getStepsEasing(1, 'start'),
  'step-end': getStepsEasing(1, 'end')
};

function parseEasing(easing) {
  if (typeof easing === 'string') {
    if (!Easings[easing]) {
      easing = parseEasingStr(easing);
    } else {
      // load default Easing
      easing = Easings[easing];
    }
  } else if (easing.type === 'cubic-bezier') {
    easing = getBezierEasing.apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(easing.value));
  } else if (easing.type === 'steps') {
    easing = getStepsEasing(easing.step, easing.pos);
  }

  return easing;
}



/***/ }),
/* 52 */
/***/ (function(module, exports) {

/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */

// These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;

var kSplineTableSize = 11;
var kSampleStepSize = 1.0 / (kSplineTableSize - 1.0);

var float32ArraySupported = typeof Float32Array === 'function';

function A (aA1, aA2) { return 1.0 - 3.0 * aA2 + 3.0 * aA1; }
function B (aA1, aA2) { return 3.0 * aA2 - 6.0 * aA1; }
function C (aA1)      { return 3.0 * aA1; }

// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier (aT, aA1, aA2) { return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT; }

// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope (aT, aA1, aA2) { return 3.0 * A(aA1, aA2) * aT * aT + 2.0 * B(aA1, aA2) * aT + C(aA1); }

function binarySubdivide (aX, aA, aB, mX1, mX2) {
  var currentX, currentT, i = 0;
  do {
    currentT = aA + (aB - aA) / 2.0;
    currentX = calcBezier(currentT, mX1, mX2) - aX;
    if (currentX > 0.0) {
      aB = currentT;
    } else {
      aA = currentT;
    }
  } while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS);
  return currentT;
}

function newtonRaphsonIterate (aX, aGuessT, mX1, mX2) {
 for (var i = 0; i < NEWTON_ITERATIONS; ++i) {
   var currentSlope = getSlope(aGuessT, mX1, mX2);
   if (currentSlope === 0.0) {
     return aGuessT;
   }
   var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
   aGuessT -= currentX / currentSlope;
 }
 return aGuessT;
}

function LinearEasing (x) {
  return x;
}

module.exports = function bezier (mX1, mY1, mX2, mY2) {
  if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) {
    throw new Error('bezier x values must be in [0, 1] range');
  }

  if (mX1 === mY1 && mX2 === mY2) {
    return LinearEasing;
  }

  // Precompute samples table
  var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
  for (var i = 0; i < kSplineTableSize; ++i) {
    sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
  }

  function getTForX (aX) {
    var intervalStart = 0.0;
    var currentSample = 1;
    var lastSample = kSplineTableSize - 1;

    for (; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample) {
      intervalStart += kSampleStepSize;
    }
    --currentSample;

    // Interpolate to provide an initial guess for t
    var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
    var guessForT = intervalStart + dist * kSampleStepSize;

    var initialSlope = getSlope(guessForT, mX1, mX2);
    if (initialSlope >= NEWTON_MIN_SLOPE) {
      return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
    } else if (initialSlope === 0.0) {
      return guessForT;
    } else {
      return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
  }

  return function BezierEasing (x) {
    // Because JavaScript number are imprecise, we should guarantee the extremes are right.
    if (x === 0) {
      return 0;
    }
    if (x === 1) {
      return 1;
    }
    return calcBezier(getTForX(x), mY1, mY2);
  };
};


/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _default; });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprite_timeline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(48);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(54);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(51);






var _timing = Symbol('timing'),
    _keyframes = Symbol('keyframes'),
    _initState = Symbol('initState'),
    _readyDefer = Symbol('readyDefer'),
    _finishedDefer = Symbol('finishedDefer'),
    _effects = Symbol('effects'),
    _activeReadyTimer = Symbol('activeReadyTimer'),
    _activeFinishTimer = Symbol('activeFinishTimer'),
    _removeDefer = Symbol('removeDefer');
/**
  easing: {
    type: 'cubic-bezier',
    value: [...]
  }
  easing: {
    type: 'steps',
    step: 1,
    pos: 'end'
  }
 */


var defaultTiming = {
  delay: 0,
  endDelay: 0,
  fill: 'auto',
  iterations: 1.0,
  playbackRate: 1.0,
  direction: 'normal',
  easing: 'linear',
  effect: null
};
/**
  animation: play --> delay --> effect --> endDelay
  playState: idle --> pending --> running --> pending --> finished
 */

var _default =
/*#__PURE__*/
function () {
  function _default(initState, keyframes, timing) {
    var _this = this;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, _default);

    if (Array.isArray(initState)) {
      // 如果 initState 缺省，默认 keyframes 的第一帧为 initState
      var _ref = [initState[0], initState, keyframes];
      initState = _ref[0];
      keyframes = _ref[1];
      timing = _ref[2];
    }

    if (typeof timing === 'number') {
      timing = {
        duration: timing
      };
    }

    this[_timing] = Object.assign({}, defaultTiming, timing);
    this[_timing].easing = Object(_easing__WEBPACK_IMPORTED_MODULE_4__["parseEasing"])(this[_timing].easing);
    this[_keyframes] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["calculateFramesOffset"])(keyframes);
    var lastFrame = this[_keyframes][this[_keyframes].length - 1];
    this[_initState] = {}; // 初始状态

    Object.keys(lastFrame).forEach(function (key) {
      if (Object.prototype.hasOwnProperty.call(initState, key)) {
        if (key !== 'easing' && key !== 'offset') {
          _this[_initState][key] = initState[key];
        }
      }
    }); // 补齐参数

    this[_keyframes] = this[_keyframes].map(function (frame) {
      return Object.assign({}, _this[_initState], frame);
    });

    if (this[_keyframes][0].offset !== 0) {
      // 要补第一帧
      this[_keyframes].unshift(Object.assign({}, this[_initState], {
        offset: 0
      }));
    }

    if (lastFrame.offset < 1) {
      // 要补最后一帧
      this[_keyframes].push(Object.assign({}, lastFrame, {
        offset: 1
      }));
    }

    this[_effects] = {};
    this.timeline = null; // idle, no effect
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(_default, [{
    key: "pause",
    value: function pause() {
      this.timeline.playbackRate = 0;
    }
  }, {
    key: _activeReadyTimer,
    value: function value() {
      var _this2 = this;

      if (this[_readyDefer] && !this[_readyDefer].timerID) {
        if (this.timeline.currentTime < 0) {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();

            delete _this2[_readyDefer];
          }, {
            delay: -this.timeline.currentTime,
            heading: false
          });
        } else {
          this[_readyDefer].timerID = this.timeline.setTimeout(function () {
            _this2[_readyDefer].resolve();

            delete _this2[_readyDefer];
          }, {
            delay: 0,
            isEntropy: true
          });
        }
      }
    }
  }, {
    key: _activeFinishTimer,
    value: function value() {
      var _this3 = this;

      var _this$_timing = this[_timing],
          duration = _this$_timing.duration,
          iterations = _this$_timing.iterations,
          endDelay = _this$_timing.endDelay;
      var delay = Math.ceil(duration * iterations + endDelay - this.timeline.currentTime) + 1;

      if (this[_finishedDefer] && !this[_finishedDefer].timerID) {
        this[_finishedDefer].timerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();

          _this3[_removeDefer](_readyDefer);

          _this3[_removeDefer](_finishedDefer);
        }, {
          delay: delay,
          heading: false
        });
        this[_finishedDefer].reverseTimerID = this.timeline.setTimeout(function () {
          _this3[_finishedDefer].resolve();

          _this3[_removeDefer](_readyDefer);

          _this3[_removeDefer](_finishedDefer);

          _this3.timeline = null;
        }, {
          delay: -this[_timing].delay - 1,
          heading: false
        });
      }
    }
  }, {
    key: "play",
    value: function play() {
      if (this.playState === 'finished') {
        this.cancel();
      }

      if (this.playState === 'idle') {
        if (this.playbackRate <= 0) {
          return;
        }

        var _this$_timing2 = this[_timing],
            delay = _this$_timing2.delay,
            playbackRate = _this$_timing2.playbackRate,
            timeline = _this$_timing2.timeline;
        this.timeline = new sprite_timeline__WEBPACK_IMPORTED_MODULE_2__["default"]({
          originTime: delay,
          playbackRate: playbackRate
        }, timeline);

        this[_activeReadyTimer]();

        this[_activeFinishTimer]();
      } else if (this.playState === 'paused') {
        this.timeline.playbackRate = this.playbackRate;

        this[_activeReadyTimer]();
      }
    }
  }, {
    key: _removeDefer,
    value: function value(deferID) {
      var defered = this[deferID],
          timeline = this.timeline;

      if (defered && timeline) {
        timeline.clearTimeout(defered.timerID);

        if (defered.reverseTimerID) {
          timeline.clearTimeout(defered.reverseTimerID);
        }
      }

      delete this[deferID];
    }
  }, {
    key: "cancel",
    value: function cancel() {
      this[_removeDefer](_readyDefer);

      this[_removeDefer](_finishedDefer);

      this.timeline = null;
    }
  }, {
    key: "finish",
    value: function finish() {
      if (this.timeline) {
        this.timeline.currentTime = Infinity / this.playbackRate;
      }

      this[_removeDefer](_readyDefer);

      this[_removeDefer](_finishedDefer);
    }
  }, {
    key: "applyEffects",
    value: function applyEffects(effects) {
      return Object.assign(this[_effects], effects);
    }
  }, {
    key: "playbackRate",
    get: function get() {
      return this[_timing].playbackRate;
    },
    set: function set(rate) {
      if (this.timeline) {
        this.timeline.playbackRate = rate;
      }

      this[_timing].playbackRate = rate;
    }
  }, {
    key: "playState",
    get: function get() {
      var timeline = this.timeline,
          _this$_timing3 = this[_timing],
          iterations = _this$_timing3.iterations,
          duration = _this$_timing3.duration,
          endDelay = _this$_timing3.endDelay;
      var state = 'running';

      if (timeline == null) {
        state = 'idle';
      } else if (timeline.paused) {
        state = 'paused';
      } else if (timeline.currentTime < 0) {
        // 开始 pending
        state = 'pending';
      } else {
        var ed = timeline.currentTime - iterations * duration;

        if (ed > 0 && ed < endDelay) {
          // 结束 pending
          state = 'pending';
        } else if (ed >= endDelay) {
          state = 'finished';
        }
      }

      return state;
    }
  }, {
    key: "progress",
    get: function get() {
      if (!this.timeline) return 0;
      var _this$_timing4 = this[_timing],
          duration = _this$_timing4.duration,
          iterations = _this$_timing4.iterations;
      var timeline = this.timeline,
          playState = this.playState;
      var p;

      if (playState === 'idle') {
        p = 0;
      } else if (playState === 'paused' && timeline.currentTime < 0) {
        p = 0;
      } else if (playState === 'pending') {
        if (timeline.currentTime < 0) {
          p = 0;
        } else {
          var time = timeline.seekLocalTime(iterations * duration);
          p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(time, duration)[1] / duration;
        }
      } else if (playState === 'running' || playState === 'paused') {
        p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(timeline.currentTime, duration)[1] / duration;
      }

      if (playState === 'finished') {
        p = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["periodicity"])(iterations, 1)[1];
      }

      return p;
    }
  }, {
    key: "frame",
    get: function get() {
      var playState = this.playState,
          initState = this[_initState],
          fill = this[_timing].fill;

      if (playState === 'idle') {
        return initState;
      }

      var currentTime = this.timeline.currentTime,
          keyframes = this[_keyframes].slice(0);

      var _getProgress = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getProgress"])(this.timeline, this[_timing], this.progress),
          p = _getProgress.p,
          inverted = _getProgress.inverted;

      var frameState = initState;

      if (currentTime < 0 && playState === 'pending') {
        // 在开始前 delay 阶段
        if (fill === 'backwards' || fill === 'both') {
          frameState = inverted ? keyframes[keyframes.length - 1] : keyframes[0];
        }
      } else if (playState !== 'pending' && playState !== 'finished' || fill === 'forwards' || fill === 'both') {
        // 不在 endDelay 或结束状态，或 forwards
        frameState = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getCurrentFrame"])(this[_timing], keyframes, this[_effects], p);
      }

      return frameState;
    }
  }, {
    key: "timing",
    get: function get() {
      return this[_timing];
    }
  }, {
    key: "baseTimeline",
    set: function set(timeline) {
      this[_timing].timeline = timeline;
    },
    get: function get() {
      return this[_timing].timeline;
    }
  }, {
    key: "ready",
    get: function get() {
      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      if (this.timeline && this.timeline.currentTime >= 0) {
        if (this.playState !== 'paused') {
          return Promise.resolve();
        }
      }

      this[_readyDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["defer"])();

      if (this.timeline) {
        // 已经在 pending 状态
        this[_activeReadyTimer]();
      }

      if (this[_readyDefer]) {
        return this[_readyDefer].promise;
      }

      return Promise.resolve();
    }
  }, {
    key: "finished",
    get: function get() {
      if (this.playState === 'finished') {
        return Promise.resolve();
      }

      if (!this[_finishedDefer]) {
        this[_finishedDefer] = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["defer"])();

        if (this.timeline) {
          this[_activeFinishTimer]();
        }
      }

      return this[_finishedDefer].promise;
    }
  }]);

  return _default;
}();



/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defer", function() { return defer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "periodicity", function() { return periodicity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateFramesOffset", function() { return calculateFramesOffset; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProgress", function() { return getProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCurrentFrame", function() { return getCurrentFrame; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _easing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(51);
/* harmony import */ var _effect__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(50);



function defer() {
  var ret = {};
  ret.promise = new Promise(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}
function periodicity(val, dur) {
  var t = Math.floor(val / dur);
  var v = val - t * dur;

  if (v === 0 && t > 0) {
    v = dur;
    t--;
  }

  return [t, v];
}
function calculateFramesOffset(keyframes) {
  keyframes = keyframes.slice(0);
  var firstFrame = keyframes[0],
      lastFrame = keyframes[keyframes.length - 1];
  lastFrame.offset = lastFrame.offset || 1;
  firstFrame.offset = firstFrame.offset || 0;
  var offset = 0,
      offsetFrom = -1;

  for (var i = 0; i < keyframes.length; i++) {
    var frame = keyframes[i];

    if (frame.offset != null) {
      var dis = i - offsetFrom;

      if (dis > 1) {
        var delta = (frame.offset - offset) / dis;

        for (var j = 0; j < dis - 1; j++) {
          keyframes[offsetFrom + j + 1].offset = offset + delta * (j + 1);
        }
      }

      offset = frame.offset;
      offsetFrom = i;
    }

    if (frame.easing != null) {
      frame.easing = Object(_easing__WEBPACK_IMPORTED_MODULE_1__["parseEasing"])(frame.easing);
    }

    if (i > 0) {
      var hasEasing = keyframes[i].easing != null; // 如果中间某个属性没有了，需要从前一帧复制过来

      keyframes[i] = Object.assign({}, keyframes[i - 1], keyframes[i]);

      if (!hasEasing) {
        // easing 不能复制
        delete keyframes[i].easing;
      }
    }
  }

  return keyframes;
}
function getProgress(timeline, timing, p) {
  var currentTime = timeline.currentTime,
      direction = timing.direction,
      duration = timing.duration;
  var inverted = false;

  if (direction === 'reverse') {
    p = 1 - p;
    inverted = true;
  } else if (direction === 'alternate' || direction === 'alternate-reverse') {
    var period = Math.floor(currentTime / duration);
    if (p === 1) period--; // period = Math.max(0, period)

    if (period % 2 ^ direction === 'alternate-reverse') {
      p = 1 - p;
      inverted = true;
    }
  }

  return {
    p: p,
    inverted: inverted
  };
}

function calculateFrame(previousFrame, nextFrame, effects, p) {
  var ret = {};
  Object.entries(nextFrame).forEach(function (_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (key !== 'offset' && key !== 'easing') {
      var effect = effects[key] || effects.default;
      var v = effect(previousFrame[key], value, p, previousFrame.offset, nextFrame.offset);

      if (v != null) {
        ret[key] = v;
      }
    }
  });
  return ret;
}

function getCurrentFrame(timing, keyframes, effects, p) {
  var easing = timing.easing,
      effect = timing.effect;

  if (!effect) {
    // timing.effect 会覆盖掉 Effects 和 animator.applyEffects 中定义的 effects
    effects = Object.assign({}, effects, _effect__WEBPACK_IMPORTED_MODULE_2__["default"]);
  }

  var ret = {};
  p = easing(p, keyframes);

  for (var i = 1; i < keyframes.length; i++) {
    var frame = keyframes[i],
        offset = frame.offset;

    if (offset >= p || i === keyframes.length - 1) {
      var previousFrame = keyframes[i - 1],
          previousOffset = previousFrame.offset,
          _easing = previousFrame.easing;
      var ep = p;

      if (_easing) {
        var d = offset - previousOffset;
        ep = _easing((p - previousOffset) / d) * d + previousOffset;
      }

      if (effect) {
        ret = effect(previousFrame, frame, ep, previousOffset, offset);
      } else {
        ret = calculateFrame(previousFrame, frame, effects, ep);
      }

      break;
    }
  }

  return ret;
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SpriteAttr; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(23);
/* harmony import */ var sprite_math__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(2);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(56);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(11);













var cache = true,
    reflow = true,
    relayout = true;

function parseBorderValue(val) {
  if (val == null) {
    return null;
  }

  if (typeof val === 'number' || typeof val === 'string') {
    val = {
      width: parseFloat(val)
    };
  } else if (Array.isArray(val)) {
    val = {
      width: parseFloat(val[0]),
      color: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"])(val[1] || '#000')
    };
  } else {
    val.width = parseFloat(val.width);
    val.color = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"])(val.color || '#000');
  }

  val = Object.assign({
    width: 1,
    color: Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"])('#000'),
    style: 'solid'
  }, val);
  return val;
}

var SpriteAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_6___default()(null, function (_initialize, _NodeAttr) {
  var SpriteAttr =
  /*#__PURE__*/
  function (_NodeAttr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_5___default()(SpriteAttr, _NodeAttr2);

    function SpriteAttr(subject) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, SpriteAttr);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SpriteAttr).call(this, subject));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this));

      Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4___default()(_this), '__reflowTag', {
        writable: true,
        value: false
      });
      return _this;
    }

    return SpriteAttr;
  }(_NodeAttr);

  return {
    F: SpriteAttr,
    d: [{
      kind: "method",
      key: "clearFlow",
      value: function clearFlow() {
        this.__reflowTag = true;
        return this;
      }
    }, {
      kind: "method",
      key: "set",
      value: function set(key, value) {
        var isQuiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(SpriteAttr.prototype), "set", this).call(this, key, value, isQuiet); // auto reflow


        if (key === 'margin') {
          this.__reflowTag = true;
        }
      }
    }, {
      kind: "method",
      key: "merge",
      value: function merge(attrs) {
        var _this2 = this;

        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (key !== 'offsetPath' && key !== 'offsetDistance' && key !== 'offsetRotate' && key !== 'offsetAngle' && key !== 'offsetPoint') {
            // this[key] = value;
            _this2.subject.attr(key, value);
          } else if (key === 'offsetPath') {
            var offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_9__["default"](value);

            _this2.set('offsetPath', offsetPath.d);

            _this2.saveObj('offsetPath', offsetPath);
          } else {
            _this2.set(key, value);
          }
        });
        return this;
      }
    }, {
      kind: "method",
      key: "serialize",
      value: function serialize() {
        var attrs = this.getAttributes();
        delete attrs.id;
        var offsetAngle = this.get('offsetAngle');
        if (offsetAngle != null) attrs.offsetAngle = offsetAngle;
        var offsetPoint = this.get('offsetPoint');
        if (offsetPoint != null) attrs.offsetPoint = offsetPoint;
        return JSON.stringify(attrs);
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "enableCache",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_12__["oneOrTwoValues"]), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        relayout: relayout,
        reflow: reflow
      })],
      key: "anchor",
      value: function value() {
        return [0, 0];
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "display",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('width')],
      key: "layoutX",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('height')],
      key: "layoutY",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('width')],
      key: "x",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('height')],
      key: "y",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringInt"]), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_12__["composit"])(['x', 'y'])],
      key: "pos",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "bgcolor",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "opacity",
      value: function value() {
        return 1;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('height')],
      key: "height",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["relative"])('height')],
      key: "layoutHeight",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringInt"]), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_12__["composit"])(['width', 'height'])],
      key: "size",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseInt), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "borderWidth",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "borderColor",
      value: function value() {
        return 'rgba(0,0,0,0)';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "borderStyle",
      value: function value() {
        return 'solid';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseBorderValue), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_12__["composit"])({
        width: 'borderWidth',
        color: 'borderColor',
        style: 'borderStyle'
      })],
      key: "border",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "paddingTop",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "paddingRight",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "paddingBottom",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "paddingLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_12__["fourValuesShortCut"]), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_12__["composit"])(['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'])],
      key: "padding",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_12__["eightValuesShortCut"]), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "borderRadius",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow
      })],
      key: "boxSizing",
      value: function value() {
        return 'content-box';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "dashOffset",
      value: function value() {
        return 0;
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringTransform"]), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: 'matrix(1,0,0,1,0,0)'
      })],
      key: "transform",
      value: // transform attributes
      function transform(val) {
        var _this3 = this;

        /*
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0],
          matrix: [1,0,0,1,0,0],
         */
        Object.assign(this.__attr, {
          rotate: 0,
          scale: [1, 1],
          translate: [0, 0],
          skew: [0, 0]
        });

        if (Array.isArray(val)) {
          this.transformMatrix = val;
          this.set('transform', "matrix(".concat(val, ")"));
        } else {
          this.transformMatrix = [1, 0, 0, 1, 0, 0];
          var transformStr = [];
          Object.entries(val).forEach(function (_ref3) {
            var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            if (key === 'matrix' && Array.isArray(value)) {
              _this3.transformMatrix = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"](value).m;
            } else {
              _this3[key] = value;
            }

            transformStr.push("".concat(key, "(").concat(value, ")"));
          });
          this.set('transform', transformStr.join(' '));
        }
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringFloat"]), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "transformOrigin",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "transformMatrix",
      value: function value() {
        return [1, 0, 0, 1, 0, 0];
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: 0
      })],
      key: "rotate",
      value: function rotate(val) {
        var delta = this.rotate - val;
        this.set('rotate', val);
        var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"](this.transformMatrix).rotate(-delta);
        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringFloat"], _utils__WEBPACK_IMPORTED_MODULE_12__["oneOrTwoValues"]), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: [1, 1]
      })],
      key: "scale",
      value: function scale(val) {
        val = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["oneOrTwoValues"])(val).map(function (v) {
          if (Math.abs(v) > 0.001) {
            return v;
          }

          return 1 / v > 0 ? 0.001 : -0.001;
        });
        var oldVal = this.scale || [1, 1];
        var delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
        this.set('scale', val);
        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"](this.transformMatrix);
        transform.scale.apply(transform, delta);
        this.transformMatrix = transform.m;

        if (offsetAngle) {
          this.rotate += offsetAngle;
        }
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: [0, 0]
      })],
      key: "translate",
      value: function translate(val) {
        var oldVal = this.translate || [0, 0];
        var delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
        this.set('translate', val);
        var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"](this.transformMatrix);
        transform.translate.apply(transform, delta);
        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: [0, 0]
      })],
      key: "skew",
      value: function skew(val) {
        var _ref5, _transform$multiply;

        var oldVal = this.skew || [0, 0];

        var invm = (_ref5 = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"]()).skew.apply(_ref5, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(oldVal)).inverse();

        this.set('skew', val);
        var transform = new sprite_math__WEBPACK_IMPORTED_MODULE_10__["Matrix"](this.transformMatrix);

        (_transform$multiply = transform.multiply(invm)).skew.apply(_transform$multiply, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val));

        this.transformMatrix = transform.m;
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseInt), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: 0
      })],
      key: "zIndex",
      value: function zIndex(val) {
        this.set('zIndex', val);
        var subject = this.subject;

        if (subject.parent) {
          subject.parent.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["sortOrderedSprites"])(subject.parent.childNodes);
        }
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

    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "linearGradients",
      value: function linearGradients(val)
      /* istanbul ignore next  */
      {
        this.gradients = val;
      }
    }, {
      kind: "get",
      key: "linearGradients",
      value: function linearGradients() {
        return this.gradients;
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

    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "gradients",
      value: function value() {
        return {};
      }
    }, {
      kind: "method",
      key: "resetOffset",
      value: function resetOffset() {
        var offsetPath = this.offsetPath;
        var dis = this.offsetDistance;

        if (offsetPath) {
          var pathObj = this.loadObj('offsetPath');

          if (pathObj) {
            offsetPath = pathObj;
          } else {
            offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_9__["default"](offsetPath);
            this.saveObj('offsetPath', offsetPath);
          }
        }

        if (offsetPath != null) {
          var len = dis * offsetPath.getTotalLength();

          var _offsetPath$getPointA = offsetPath.getPointAtLength(len),
              _offsetPath$getPointA2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_offsetPath$getPointA, 2),
              x = _offsetPath$getPointA2[0],
              y = _offsetPath$getPointA2[1];

          var angle = this.offsetRotate;

          if (angle === 'auto' || angle === 'reverse') {
            if (angle === 'reverse' && len === 0) {
              len = 1;
            }

            var _offsetPath$getPointA3 = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1),
                _offsetPath$getPointA4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_offsetPath$getPointA3, 2),
                x1 = _offsetPath$getPointA4[0],
                y1 = _offsetPath$getPointA4[1];

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

          var offsetAngle = this.get('offsetAngle');

          if (offsetAngle) {
            this.rotate -= offsetAngle;
          }

          this.set('offsetAngle', angle);
          this.rotate += angle;
          var offsetPoint = this.get('offsetPoint');

          if (offsetPoint) {
            this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
          }

          this.set('offsetPoint', [x, y]);
          this.pos = [this.x + x, this.y + y];
        }
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "offsetPath",
      value: function offsetPath(val) {
        var offsetPath = new svg_path_to_canvas__WEBPACK_IMPORTED_MODULE_9__["default"](val);
        this.set('offsetPath', offsetPath.d);
        this.saveObj('offsetPath', offsetPath);
        this.resetOffset();
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: 0
      })],
      key: "offsetDistance",
      value: function offsetDistance(val) {
        this.set('offsetDistance', val);
        this.resetOffset();
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        value: 'auto'
      })],
      key: "offsetRotate",
      value: function offsetRotate(val) {
        if (typeof val === 'string' && val !== 'auto' && val !== 'reverse') {
          val = parseFloat(val);
        }

        this.set('offsetRotate', val);
        this.resetOffset();
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "filter",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache
      })],
      key: "shadow",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        cache: cache,
        relayout: relayout
      })],
      key: "position",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginTop",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginRight",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginBottom",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        reflow: reflow,
        relayout: relayout,
        cache: cache
      })],
      key: "marginLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_12__["parseStringInt"], _utils__WEBPACK_IMPORTED_MODULE_12__["fourValuesShortCut"]), _utils__WEBPACK_IMPORTED_MODULE_12__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_12__["composit"])(['marginTop', 'marginRight', 'marginBottom', 'marginLeft'])],
      key: "margin",
      value: void 0
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_12__["attr"])({
        value: ''
      })],
      key: "bgimage",
      value:
      /*
        {
          src: image | url,
          display: 'none' | 'repeatX' | 'repeatY' | 'repeat' | 'stretch' | 'center' | '.9',
          offset: [x, y],
          clip9: [paddingTop, paddingRight, paddingBottom, paddingLeft],
        }
      */
      function bgimage(val) {
        if (val && val.clip9) val.clip9 = Object(_utils__WEBPACK_IMPORTED_MODULE_12__["fourValuesShortCut"])(val.clip9);

        if (val && !val.image && this.subject.loadBgImage) {
          val = this.subject.loadBgImage(val);
        }

        this.set('bgimage', val);
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_12__["attr"]],
      key: "clipOverflow",
      value: function value() {
        return true;
      }
    }]
  };
}, _attr__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Attr; });
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(11);







var _attr = Symbol('attr'),
    _style = Symbol('style'),
    _temp = Symbol('store'),
    _subject = Symbol('subject'),
    _default = Symbol('default');

var Attr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4___default()(null, function (_initialize) {
  var Attr = function Attr(subject) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Attr);

    _initialize(this);

    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this[_style] = {};
    this.__cached = {};
    if (!subject.updateStyles) subject.updateStyles = function () {};
    this[_temp] = new Map(); // save non-serialized values

    Object.defineProperty(this, '__attributesSet', {
      value: new Set()
    });
    Object.defineProperty(this, '__styleTag', {
      writable: true,
      value: false
    });
    Object.defineProperty(this, '__updateTag', {
      writable: true,
      value: false
    });
  };

  return {
    F: Attr,
    d: [{
      kind: "field",
      static: true,
      key: "relatedAttributes",
      value: function value() {
        return _utils__WEBPACK_IMPORTED_MODULE_5__["relatedAttributes"];
      }
    }, {
      kind: "field",
      static: true,
      key: "attributeNames",
      value: function value() {
        return _utils__WEBPACK_IMPORTED_MODULE_5__["attributeNames"];
      }
    }, {
      kind: "method",
      static: true,
      key: "addAttributes",
      value: function addAttributes(attrs) {
        var descriptors = {};
        Object.entries(attrs).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref, 2),
              key = _ref2[0],
              v = _ref2[1];

          if (typeof v === 'function') {
            var _setter = v;
            v = {
              set: function set(val) {
                _setter(this, val);
              }
            };
          }

          var _v = v,
              wrappers = _v.decorators,
              value = _v.value,
              get = _v.get,
              set = _v.set;
          wrappers = wrappers || [_utils__WEBPACK_IMPORTED_MODULE_5__["attr"]];

          if (set == null) {
            set = function set(val) {
              this.set(key, val);
            };
          }

          if (get == null) {
            get = function get() {
              return this.get(key);
            };
          }

          var $decorator = _utils__WEBPACK_IMPORTED_MODULE_5__["decorators"].apply(void 0, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(wrappers));
          descriptors[key] = $decorator(key, value, {
            set: set,
            get: get
          });
        });
        Object.defineProperties(this.prototype, descriptors);
      }
    }, {
      kind: "get",
      key: "__attr",
      value: function __attr() {
        return this[_attr];
      }
    }, {
      kind: "method",
      key: "setDefault",
      value: function setDefault(attrs) {
        Object.assign(this[_default], attrs);
      }
    }, {
      kind: "method",
      key: "getDefaultValue",
      value: function getDefaultValue(key, defaultValue) {
        if (key in this[_default]) return this[_default][key];
        return defaultValue;
      }
    }, {
      kind: "method",
      key: "saveObj",
      value: function saveObj(key, val) {
        this[_temp].set(key, val);

        this.__updateTag = true;
      }
    }, {
      kind: "method",
      key: "loadObj",
      value: function loadObj(key) {
        return this[_temp].get(key);
      }
    }, {
      kind: "method",
      key: "quietSet",
      value: function quietSet(key, val) {
        this.set(key, val, true);
      }
    }, {
      kind: "method",
      key: "clearStyle",
      value: function clearStyle() {
        this[_style] = {};
      }
    }, {
      kind: "method",
      key: "clearLayout",
      value: function clearLayout() {
        this.__clearLayout = true;
        return this;
      }
    }, {
      kind: "get",
      key: "style",
      value: function style() {
        return this[_style];
      }
    }, {
      kind: "method",
      key: "set",
      value: function set(key, val) {
        var isQuiet = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        this.__quietTag = isQuiet;
        var oldVal;

        if (isQuiet && key.length > 5 && key.indexOf('data-') === 0) {
          var dataKey = key.slice(5);
          oldVal = this.subject.data(dataKey);
          this.subject.data(dataKey, val);
        } else if (this.__styleTag) {
          oldVal = this[_style][key];

          if (val != null) {
            this[_style][key] = val;
          } else {
            delete this[_style][key];
          }
        } else {
          oldVal = this[_attr][key];
        }

        if (val && _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(val) === 'object') {
          if (oldVal !== val && JSON.stringify(val) === JSON.stringify(oldVal)) {
            return false;
          }
        } else if (oldVal === val) {
          return false;
        }

        if (!this.__styleTag) {
          this[_attr][key] = val;
        }

        this.__updateTag = true;
        return true;
      }
    }, {
      kind: "method",
      key: "get",
      value: function get(key) {
        if (key.length > 5 && key.indexOf('data-') === 0) {
          return this.subject.data(key.slice(5));
        }

        if (this.__getStyleTag || this[_style][key] != null && !this.__attributesSet.has(key)) {
          return this[_style][key];
        }

        return this[_attr][key];
      }
    }, {
      kind: "method",
      key: "getAttributes",
      value: function getAttributes() {
        var _this = this;

        var includeDefault = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var ret = {};

        if (includeDefault) {
          _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_utils__WEBPACK_IMPORTED_MODULE_5__["attributeNames"]).forEach(function (key) {
            if (key in _this) {
              ret[key] = _this[key];
            }
          });
        }

        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(this.__attributesSet).forEach(function (key) {
          if (key.indexOf('__internal') !== 0) {
            ret[key] = _this[key];
          }
        });

        Object.entries(this).forEach(function (_ref3) {
          var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref3, 2),
              key = _ref4[0],
              value = _ref4[1];

          if (key.indexOf('__') !== 0) {
            ret[key] = value;
          }
        });
        return ret;
      }
    }, {
      kind: "get",
      key: "attrs",
      value: function attrs() {
        return this.getAttributes(true);
      }
    }, {
      kind: "method",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_5__["deprecate"])('You can remove this call.')],
      key: "clearCache",
      value: function clearCache() {
        return this;
      }
    }, {
      kind: "method",
      key: "merge",
      value: function merge(attrs) {
        var _this2 = this;

        if (typeof attrs === 'string') {
          attrs = JSON.parse(attrs);
        }

        Object.entries(attrs).forEach(function (_ref5) {
          var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_ref5, 2),
              key = _ref6[0],
              value = _ref6[1];

          _this2.subject.attr(key, value);
        });
        return this;
      }
    }, {
      kind: "method",
      key: "serialize",
      value: function serialize() {
        var attrs = this.getAttributes();
        delete attrs.id;
        return JSON.stringify(attrs);
      }
    }, {
      kind: "get",
      key: "subject",
      value: function subject() {
        return this[_subject];
      }
      /* ------------------- define attributes ----------------------- */
      // @attr({quiet, cache, reflow, relayout})

    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["attr"])({
        quiet: true
      })],
      key: "id",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["attr"])({
        quiet: true
      })],
      key: "name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_5__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_5__["attr"])({
        quiet: true
      })],
      key: "class",
      value: void 0
    }]
  };
});



/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BaseNode; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(56);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(11);






// import stylesheet from './stylesheet';



function createAttribute(attr, key) {
  Object.defineProperty(attr, key, {
    enumerable: false,
    configurable: true,
    set: function set(value) {
      if (!this.__styleTag && value != null) {
        this.__attributesSet.add(key);
      }

      if (!this.__styleTag && value == null) {
        if (this.__attributesSet.has(key)) {
          this.__attributesSet.delete(key);
        }
      }

      this.quietSet(key, value);
      var subject = this.subject; // fixed color inherit
      // if(key === 'color') {
      //   subject.attr('fillColor', value);
      // }
      // fixed font inherit

      if (key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight') {
        var font = this.get('font') || 'normal normal normal 16px Arial';
        var parsed = Object(_utils__WEBPACK_IMPORTED_MODULE_7__["parseFont"])(font);
        parsed.fontSize = parsed.size + parsed.unit;

        if (key === 'fontSize' && (typeof value === 'number' || /[\d.]$/.test(value))) {
          value += 'px';
        }

        parsed[key] = value;
        var style = parsed.style,
            variant = parsed.variant,
            weight = parsed.weight,
            family = parsed.family,
            fontSize = parsed.fontSize;
        subject.attr('font', "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(fontSize, " ").concat(family));
      }

      if ((key === 'font' || key === 'lineHeight' || key === 'lineBreak' || key === 'wordBreak' || key === 'letterSpacing' || key === 'textIndent') && subject.querySelectorAll) {
        var children = subject.querySelectorAll('*');
        children.forEach(function (node) {
          if (node.retypesetting) node.retypesetting();
        });
      }

      if (_utils__WEBPACK_IMPORTED_MODULE_7__["inheritAttributes"].has(key)) {
        subject.forceUpdate();
      }
    },
    get: function get() {
      var ret = this.get(key);
      return ret != null ? ret : this.getDefaultValue(key);
    }
  });
}

var _eventHandlers = Symbol('eventHandlers'),
    _collisionState = Symbol('collisionState'),
    _data = Symbol('data'),
    _mouseCapture = Symbol('mouseCapture');

var _attr = Symbol('attr');

var BaseNode =
/*#__PURE__*/
function () {
  function BaseNode(attrs) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, BaseNode);

    this[_eventHandlers] = {};
    this[_data] = {};
    this[_attr] = new this.constructor.Attr(this);

    if (attrs) {
      this.attr(attrs);
    }
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(BaseNode, [{
    key: "serialize",
    value: function serialize() {
      var nodeType = this.nodeType,
          attrs = this[_attr].serialize(),
          dataset = JSON.stringify(this.dataset),
          id = this.id;

      return {
        nodeType: nodeType,
        attrs: attrs,
        dataset: dataset,
        id: id
      };
    }
  }, {
    key: "clearLayout",
    value: function clearLayout() {
      if (this.hasLayout) {
        this.parent.clearLayout();
      }
    }
  }, {
    key: "merge",
    value: function merge(attrs) {
      this[_attr].merge(attrs);
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var node = new this.constructor();
      node.merge(this[_attr].serialize());
      node.data(this.dataset);
      var bgimage = this.attr('bgimage');

      if (bgimage && bgimage.image) {
        node.attr('bgimage', null);
        node.attr('bgimage', Object.assign({}, bgimage));
      }

      return node;
    }
  }, {
    key: "attr",
    value: function attr(props, val) {
      var _this = this;

      var setVal = function setVal(key, value) {
        if (!(key in _this[_attr])) {
          createAttribute(_this[_attr], key);
        }

        _this[_attr][key] = value;
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(props) === 'object') {
        Object.entries(props).forEach(function (_ref) {
          var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
              prop = _ref2[0],
              value = _ref2[1];

          _this.attr(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (props === 'attrs') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val)));
            }

            Object.entries(val).forEach(function (_ref3) {
              var _ref4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref3, 2),
                  prop = _ref4[0],
                  value = _ref4[1];

              _this.attr(prop, value);
            });
            return this;
          }

          if (props === 'style') {
            if (Array.isArray(val)) {
              val = Object.assign.apply(Object, [{}].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(val)));
            }

            Object.entries(val).forEach(function (_ref5) {
              var _ref6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref5, 2),
                  prop = _ref6[0],
                  value = _ref6[1];

              _this.style[prop] = value;
            });
            return this;
          }

          if (typeof val === 'function') {
            val = val(this.attr(props));
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        if (!(props in this[_attr])) {
          createAttribute(this[_attr], props);
        }

        return this[_attr][props];
      }

      return this[_attr].attrs;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate(clearCache) {
      var parent = this.parent;

      if (parent) {
        this.parent.update(this);
      }
    }
  }, {
    key: "restyle",
    value: function restyle() {// stylesheet.computeStyle(this);
    }
  }, {
    key: "draw",
    value: function draw() {
      var styleNeedUpdate = this.__styleNeedUpdate;

      if (styleNeedUpdate) {
        this.restyle();

        if (this.querySelectorAll) {
          var children = this.querySelectorAll('*');
          children.forEach(function (child) {
            return child.restyle();
          });
        }

        if (styleNeedUpdate === 'siblings') {
          if (this.parent) {
            var _children = this.parent.children;

            var index = _children.indexOf(this);

            var len = _children.length;

            for (var i = index + 1; i < len; i++) {
              var node = _children[i];
              node.restyle();

              if (node.querySelectorAll) {
                var nodes = node.querySelectorAll('*');
                nodes.forEach(function (child) {
                  return child.restyle();
                });
              }
            }
          }
        }
      }
    }
  }, {
    key: "data",
    value: function data(props, val) {
      var _this2 = this;

      var setVal = function setVal(key, value) {
        _this2[_data][key] = value;

        if (_this2.attr) {
          var attrKey = "data-".concat(key); // this.attr(attrKey, value);

          if (_attr__WEBPACK_IMPORTED_MODULE_6__["default"].relatedAttributes.has(attrKey)) {
            _this2.updateStyles();
          }
        }

        if (value == null) {
          delete _this2[_data][key];
        }
      };

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_2___default()(props) === 'object') {
        Object.entries(props).forEach(function (_ref7) {
          var _ref8 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref7, 2),
              prop = _ref8[0],
              value = _ref8[1];

          _this2.data(prop, value);
        });
        return this;
      }

      if (typeof props === 'string') {
        if (val !== undefined) {
          if (typeof val === 'function') {
            val = val(this[_data][props]);
          }

          if (val && typeof val.then === 'function') {
            return val.then(function (res) {
              setVal(props, res);
            });
          }

          setVal(props, val);
          return this;
        }

        return this[_data][props];
      }

      return this[_data];
    }
  }, {
    key: "updateStyles",
    value: function updateStyles() {
      var nextSibling = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      // append to parent & reset name or class or id auto updateStyles
      this.__styleNeedUpdate = nextSibling ? 'siblings' : 'children';
      this.forceUpdate(true);
    }
  }, {
    key: "getEventHandlers",
    value: function getEventHandlers(type) {
      return type != null ? this[_eventHandlers][type] || [] : this[_eventHandlers];
    }
  }, {
    key: "on",
    value: function on(type, handler) {
      var _this3 = this;

      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this3.on(t, handler);
        });
      } else {
        this[_eventHandlers][type] = this[_eventHandlers][type] || [];

        this[_eventHandlers][type].push({
          handler: handler,
          useCapture: useCapture
        });
      }

      return this;
    }
  }, {
    key: "once",
    value: function once(type, handler) {
      var _this4 = this;

      var useCapture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this4.once(t, handler);
        });
      } else {
        this.on(type, function f() {
          this.off(type, f);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          return handler.apply(this, args);
        });
      }

      return this;
    }
  }, {
    key: "off",
    value: function off(type, handler) {
      var _this5 = this;

      if (Array.isArray(type)) {
        type.forEach(function (t) {
          return _this5.off(t, handler);
        });
      } else if (handler && this[_eventHandlers][type]) {
        var handlers = this[_eventHandlers][type];

        if (handlers) {
          for (var i = 0; i < handlers.length; i++) {
            var _handler = handlers[i].handler;

            if (_handler === handler) {
              this[_eventHandlers][type].splice(i, 1);

              break;
            }
          }
        }
      } else {
        delete this[_eventHandlers][type];
      }

      return this;
    }
  }, {
    key: "remove",
    value: function remove() {
      var exit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (!this.parent) return null;
      return this.parent.removeChild(this, exit);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      throw Error('you must override this method');
    }
  }, {
    key: "setMouseCapture",
    value: function setMouseCapture() {
      this[_mouseCapture] = true;
    }
  }, {
    key: "releaseMouseCapture",
    value: function releaseMouseCapture() {
      this[_mouseCapture] = false;
    }
  }, {
    key: "isCaptured",
    value: function isCaptured(evt) {
      return (evt.type === 'mousemove' || evt.type === 'mousedown' || evt.type === 'mouseup') && this[_mouseCapture];
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      // eslint-disable-line complexity
      var handlers = this.getEventHandlers(type);
      if (this.children && useCapturePhase === true) handlers = handlers.filter(function (handler) {
        return handler.useCapture;
      });
      if (this.children && useCapturePhase === false) handlers = handlers.filter(function (handler) {
        return !handler.useCapture;
      });
      evt.returnValue = true;

      if (swallow && handlers.length === 0) {
        return;
      }

      if (!evt.stopDispatch) {
        evt.stopDispatch = function () {
          evt.terminated = true;
        };
      }

      if (!evt.stopPropagation) {
        evt.stopPropagation = function () {
          evt.cancelBubble = true;
        };
      }

      if (!evt.preventDefault) {
        evt.preventDefault = function () {
          evt.returnValue = false;
        };
      }

      if (evt.type !== type) {
        if (evt.type) {
          evt.originalType = evt.type;
        }

        evt.type = type;
      }

      var isCollision = collisionState || this.pointCollision(evt);
      var captured = this.isCaptured(evt);

      if (this[_collisionState] && type === 'mouseleave') {
        // dispatched from group
        evt.target = this;
        this[_collisionState] = false;
        isCollision = true;
        this.attr('__internal_state_hover_', null);
      }

      if (!evt.terminated && (isCollision || captured)) {
        if (!evt.target) evt.target = this;
        var identifier = evt.identifier;

        if (identifier != null) {
          if (type === 'touchstart') {
            var layer = this.layer;
            layer.touchedTargets[identifier] = layer.touchedTargets[identifier] || [];
            layer.touchedTargets[identifier].push(this);
          }

          if (/^touch/.test(type)) {
            var touches = Array.from(evt.originalEvent.touches),
                _layer = this.layer;
            evt.targetTouches = [];
            touches.forEach(function (touch) {
              var identifier = touch.identifier;

              if (_layer.touchedTargets[identifier] && _layer.touchedTargets[identifier].indexOf(_this6) >= 0) {
                evt.targetTouches.push(touch);
              }
            });
          }
        }

        if (type === 'mousedown' || type === 'touchstart') {
          this.attr('__internal_state_active_', 'active');
        } else if (type === 'mouseup' || type === 'touchend') {
          this.attr('__internal_state_active_', null);
        }

        _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(handlers).forEach(function (handler) {
          return handler.handler.call(_this6, evt);
        });

        if (!this[_collisionState] && isCollision && type === 'mousemove') {
          var _evt = Object.assign({}, evt);

          _evt.type = 'mouseenter';
          delete _evt.target;
          _evt.terminated = false;
          this.dispatchEvent('mouseenter', _evt, true, true);
          this.attr('__internal_state_hover_', 'hover');
          this[_collisionState] = true;
        }
      }

      if (this[_collisionState] && !isCollision && type === 'mousemove') {
        var _evt2 = Object.assign({}, evt);

        _evt2.type = 'mouseleave';
        delete _evt2.target;
        _evt2.terminated = false;
        this.dispatchEvent('mouseleave', _evt2);
        this.attr('__internal_state_hover_', null); // this[_collisionState] = false;
      }

      return isCollision;
    } // called when layer appendChild

  }, {
    key: "connect",
    value: function connect(parent) {
      var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      if (this.parent) {
        // throw new Error('This node belongs to another parent node! Remove it first...')
        this.remove();
      }

      Object.defineProperty(this, 'zOrder', {
        value: zOrder,
        writable: false,
        configurable: true
      });
      Object.defineProperty(this, 'parent', {
        get: function get() {
          return parent;
        },
        configurable: true
      });
      this.dispatchEvent('append', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('appendChild', {
        child: this,
        zOrder: zOrder
      }, true, true);

      if (this.layer) {
        this.updateStyles(true);
      }

      return this;
    } // override to recycling resources

  }, {
    key: "disconnect",
    value: function disconnect(parent) {
      if (!this.parent || parent !== this.parent) {
        throw new Error('Invalid node to disconnect');
      }

      if (this.layer) {
        var nextSibling = this.nextElementSilbing;
        if (nextSibling) nextSibling.updateStyles(true);
      }

      var zOrder = this.zOrder;
      delete this.zOrder;
      delete this.parent;
      delete this.isDirty;
      this.dispatchEvent('remove', {
        parent: parent,
        zOrder: zOrder
      }, true, true);
      parent.dispatchEvent('removeChild', {
        child: this,
        zOrder: zOrder
      }, true, true);
      return this;
    }
  }, {
    key: "enter",
    value: function enter() {
      // override to do atction after connection, can return a promise
      return this;
    }
  }, {
    key: "exit",
    value: function exit() {
      // override to do atction before disconnection, can return a promise
      return this;
    }
  }, {
    key: "__attr",
    get: function get() {
      return this[_attr];
    }
  }, {
    key: "layer",
    get: function get() {
      return this.parent && this.parent.layer;
    }
  }, {
    key: "dataset",
    get: function get() {
      return this[_data];
    }
  }, {
    key: "id",
    set: function set(val) {
      this.attr('id', val);
    },
    get: function get() {
      return this.attr('id');
    }
  }, {
    key: "name",
    set: function set(val) {
      this.attr('name', val);
    },
    get: function get() {
      return this.attr('name');
    }
  }, {
    key: "className",
    set: function set(val) {
      this.attr('class', val);
    },
    get: function get() {
      return this.attr('class');
    }
  }]);

  return BaseNode;
}();

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BaseNode, "Attr", _attr__WEBPACK_IMPORTED_MODULE_6__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5___default()(BaseNode, "inheritAttributes", _utils__WEBPACK_IMPORTED_MODULE_7__["inheritAttributes"]);



/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);

// http://www.runoob.com/cssref/css3-pr-filter.html

/* harmony default export */ __webpack_exports__["default"] = ({
  blur: function blur(px) {
    return "blur(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(px), ")");
  },
  brightness: function brightness(percent) {
    return "brightness(".concat(percent, ")");
  },
  contrast: function contrast(percent) {
    return "contrast(".concat(percent, ")");
  },
  dropShadow: function dropShadow(_ref) {
    var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 4),
        offsetX = _ref2[0],
        offsetY = _ref2[1],
        shadowRadius = _ref2[2],
        color = _ref2[3];

    return "drop-shadow(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(offsetX), " ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(offsetY), " ").concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(shadowRadius), " ").concat(color, ")");
  },
  grayscale: function grayscale(percent) {
    return "grayscale(".concat(percent, ")");
  },
  hueRotate: function hueRotate(value) {
    return "hue-rotate(".concat(Object(_utils__WEBPACK_IMPORTED_MODULE_1__["appendUnit"])(value, 'deg'), ")");
  },
  invert: function invert(percent) {
    return "invert(".concat(percent, ")");
  },
  opacity: function opacity(percent) {
    return "opacity(".concat(percent, ")");
  },
  saturate: function saturate(percent) {
    return "saturate(".concat(percent, ")");
  },
  sepia: function sepia(percent) {
    return "sepia(".concat(percent, ")");
  },
  url: function url(path) {
    return "url(".concat(path, ")");
  },
  compile: function compile() {
    var _this = this;

    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return Object.entries(filter).reduce(function (accumulator, curVal) {
      return accumulator.concat(_this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }
});

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sprite; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60);
/* harmony import */ var _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(11);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(35);
/* harmony import */ var _filters__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(58);














var _texturesCache = Symbol('_texturesCache');

var _images = Symbol('_images');

var TextureAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_9___default()(null, function (_initialize, _BaseSprite$Attr) {
  var TextureAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(TextureAttr, _BaseSprite$Attr2);

    function TextureAttr() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, TextureAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(TextureAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this));

      return _this;
    }

    return TextureAttr;
  }(_BaseSprite$Attr);

  return {
    F: TextureAttr,
    d: [{
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_10__["attr"]],
      key: "enableCache",
      value: function value() {
        return true;
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_10__["attr"])({
        value: []
      })],
      key: "textures",
      value:
      /*
        {
          image: ...,  //texture resource
          srcRect: ..., //texture clip
          rect: ....,  //texture in sprite offset
          filter: ...  //texture filters
        }
       */
      function textures(_textures) {
        if (!Array.isArray(_textures)) {
          _textures = [_textures];
        }

        _textures = _textures.map(function (texture) {
          if (!texture.image) {
            texture = {
              image: texture
            };
          }

          texture.__tag = Object(_utils__WEBPACK_IMPORTED_MODULE_10__["generateID"])(texture.image); // prevent JSON.stringify ignorance

          return texture;
        });
        this.loadTextures(_textures);
        this.set('textures', _textures);
      }
    }, {
      kind: "method",
      key: "loadTextures",
      value: function loadTextures(textures) {
        var subject = this.subject; // adaptive textures

        var width = 0,
            height = 0;
        subject.images = textures.map(function (texture) {
          var image = texture.image,
              rect = texture.rect,
              srcRect = texture.srcRect;
          var w, h;

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
        var texturesSize = subject.texturesSize;

        if (!texturesSize || texturesSize[0] !== width || texturesSize[1] !== height) {
          var attrSize = subject.attrSize;

          if (attrSize[0] === '' || attrSize[1] === '') {
            subject.reflow();
            subject.clearLayout();
          }
        }

        subject.texturesSize = [width, height];
        return textures;
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_11__["default"].Attr);

var Sprite = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_9___default()(null, function (_initialize2, _BaseSprite) {
  var Sprite =
  /*#__PURE__*/
  function (_BaseSprite2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_8___default()(Sprite, _BaseSprite2);

    /**
      new Sprite({
        attr: {
          ...
        },
        attributeChangedCallback: function(prop, oldValue, newValue){
         }
      })
     */
    function Sprite(attr) {
      var _this2;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, Sprite);

      if (attr && attr.constructor !== Object) {
        attr = {
          textures: [attr]
        };
      }

      _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite).call(this));

      _initialize2(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_7___default()(_this2));

      _this2[_texturesCache] = new Map();

      if (attr) {
        _this2.attr(attr);
      }

      return _this2;
    }

    return Sprite;
  }(_BaseSprite);

  return {
    F: Sprite,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return TextureAttr;
      }
    }, {
      kind: "method",
      key: "cloneNode",
      value: function cloneNode() {
        var _this3 = this;

        var node = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite.prototype), "cloneNode", this).call(this);

        if (this.images) {
          node.textures = this.textures.map(function (texture, i) {
            texture.image = _this3.images[i];
            return texture;
          });
        }

        return node;
      }
    }, {
      kind: "set",
      key: "images",
      value: function images(_images2) {
        this[_images] = _images2;
      }
    }, {
      kind: "get",
      key: "images",
      value: function images() {
        return this[_images];
      }
    }, {
      kind: "set",
      key: "textures",
      value: function textures(_textures2) {
        this.attr('textures', _textures2);
      }
    }, {
      kind: "get",
      key: "textures",
      value: function textures() {
        return this.attr('textures');
      } // override to adapt textures' size

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_10__["flow"]],
      key: "contentSize",
      value: function contentSize() {
        var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        var boxSize = this.texturesSize || [0, 0];
        var w = width,
            h = height;

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
    }, {
      kind: "method",
      key: "pointCollision",
      value: function pointCollision(evt) {
        var _this4 = this;

        if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite.prototype), "pointCollision", this).call(this, evt)) {
          var textures = this.textures;

          if (textures) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;
            if (offsetX == null && offsetY == null) return true;
            evt.targetTextures = [];

            var _this$attr = this.attr('anchor'),
                _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr, 2),
                anchorX = _this$attr2[0],
                anchorY = _this$attr2[1],
                _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.contentSize, 2),
                width = _this$contentSize[0],
                height = _this$contentSize[1];

            offsetX += width * anchorX;
            offsetY += height * anchorY;
            textures.forEach(function (texture) {
              var _ref = texture.rect || [0, 0].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(_this4.innerSize)),
                  _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 4),
                  x = _ref2[0],
                  y = _ref2[1],
                  w = _ref2[2],
                  h = _ref2[3];

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
    }, {
      kind: "get",
      key: "cache",
      value: function cache() {
        var bg = this.attr('bgcolor') || this.attr('gradients').bgcolor;

        if (!bg && this.textures.length <= 1) {
          return false;
        }

        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite.prototype), "cache", this);
      }
    }, {
      kind: "set",
      key: "cache",
      value: function cache(context) {
        _babel_runtime_helpers_set__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite.prototype), "cache", context, this, true);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(t, drawingContext) {
        var _this5 = this;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_6___default()(Sprite.prototype), "render", this).call(this, t, drawingContext);

        var textures = this.textures;
        var cliped = !this.attr('clipOverflow');

        if (this.images && this.images.length) {
          textures.forEach(function (texture, i) {
            var img = _this5.images[i];

            var _this5$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this5.contentSize, 2),
                w = _this5$contentSize[0],
                h = _this5$contentSize[1];

            var rect = texture.rect || [0, 0, w, h];
            var srcRect = texture.srcRect;

            if (!cliped && texture.rect && (rect[2] > w || rect[3] > h)) {
              cliped = true;
              drawingContext.beginPath();
              drawingContext.rect(0, 0, w, h);
              drawingContext.clip();
            }

            drawingContext.save();

            if (texture.filter) {
              Object(_utils__WEBPACK_IMPORTED_MODULE_10__["setDeprecation"])('texture.filter', 'Instead use sprite.attr({filter}).');
              var imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];
              var sx = rect[2] / imgRect[2],
                  sy = rect[3] / imgRect[3];
              drawingContext.filter = _filters__WEBPACK_IMPORTED_MODULE_12__["default"].compile(texture.filter);

              if (srcRect) {
                drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(srcRect), [sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * srcRect[2], sy * srcRect[3]]));
              } else {
                drawingContext.drawImage(img, sx * imgRect[0] + rect[0], sy * imgRect[1] + rect[1], sx * img.width, sy * img.height);
              }
            } else if (srcRect) {
              drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(srcRect), _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rect)));
            } else {
              drawingContext.drawImage.apply(drawingContext, [img].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(rect)));
            }

            drawingContext.restore();
          });
        }
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_11__["default"]);



/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var superPropBase = __webpack_require__(46);

var defineProperty = __webpack_require__(32);

function set(target, property, value, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.set) {
    set = Reflect.set;
  } else {
    set = function set(target, property, value, receiver) {
      var base = superPropBase(target, property);
      var desc;

      if (base) {
        desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.set) {
          desc.set.call(receiver, value);
          return true;
        } else if (!desc.writable) {
          return false;
        }
      }

      desc = Object.getOwnPropertyDescriptor(receiver, property);

      if (desc) {
        if (!desc.writable) {
          return false;
        }

        desc.value = value;
        Object.defineProperty(receiver, property, desc);
      } else {
        defineProperty(receiver, property, value);
      }

      return true;
    };
  }

  return set(target, property, value, receiver);
}

function _set(target, property, value, receiver, isStrict) {
  var s = set(target, property, value, receiver || target);

  if (!s && isStrict) {
    throw new Error('failed to set property');
  }

  return value;
}

module.exports = _set;

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Label; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var css_line_break__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(62);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(11);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(35);
/* harmony import */ var _utils_render__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(34);















var _boxSize = Symbol('boxSize'),
    _outputText = Symbol('outputText');

var measureText = function measureText(node, text, font) {
  var lineHeight = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
  var ctx = node.context;

  if (!ctx) {
    return [0, 0];
  }

  ctx.save();
  ctx.font = font;

  var _ctx$measureText = ctx.measureText(text),
      width = _ctx$measureText.width;

  ctx.restore();
  var letterSpacing = node.attr('letterSpacing');

  if (letterSpacing) {
    width += letterSpacing * (text.length - 1);
  }

  var _parseFont = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(font),
      size = _parseFont.size;

  var height = lineHeight || size * 1.2;
  return [width, height].map(Math.round);
};

function calculTextboxSize(node) {
  if (!node.context) return '';
  var text = node.text,
      font = node.attr('font'),
      lineHeight = node.attr('lineHeight'),
      textIndent = node.attr('textIndent');
  var lines = [];
  var width = 0,
      height = 0;
  node[_outputText] = text;
  var lineBreak = node.attr('lineBreak'),
      textboxWidth = node.hasLayout ? node.attr('layoutWidth') : node.attr('width');

  if (lineBreak !== '' && textboxWidth !== '') {
    var wordBreak = node.attr('wordBreak');
    text.split(/\n/).forEach(function (line) {
      var breaker = Object(css_line_break__WEBPACK_IMPORTED_MODULE_10__["LineBreaker"])(line, {
        lineBreak: lineBreak,
        wordBreak: wordBreak
      });
      var words = [];
      var bk = breaker.next();

      while (!bk.done) {
        words.push(bk.value.slice());
        bk = breaker.next();
      }

      var l = '';
      words.forEach(function (word) {
        if (!l) {
          l = word;
        } else {
          var ll = "".concat(l).concat(word);

          var _measureText = measureText(node, ll, font),
              _measureText2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_measureText, 1),
              w = _measureText2[0];

          if (w > (lines.length === 0 ? textboxWidth - textIndent : textboxWidth)) {
            lines.push(l);
            l = word;
          } else {
            l = ll;
          }
        }
      });
      lines.push(l);
    }); // lines = node[_outputText].split(/\n/)

    node[_outputText] = lines.join('\n');
  } else {
    lines = text.split(/\n/);
  }

  lines.forEach(function (line, idx) {
    var _measureText3 = measureText(node, line, font, lineHeight),
        _measureText4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_measureText3, 2),
        w = _measureText4[0],
        h = _measureText4[1];

    if (idx === 0) w += textIndent;
    width = Math.max(width, w);
    height += h;
  });
  var boxSize = node[_boxSize];

  if (!boxSize || boxSize[0] !== width || boxSize[1] !== height) {
    var attrSize = node.attrSize;

    if (attrSize[0] === '' || attrSize[1] === '') {
      node.reflow();
      node.clearLayout();
    }
  }

  node[_boxSize] = [width, height];
}

function setFontPart(font, part) {
  var _Object$assign = Object.assign(Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(font), part),
      style = _Object$assign.style,
      variant = _Object$assign.variant,
      weight = _Object$assign.weight,
      size0 = _Object$assign.size0,
      unit = _Object$assign.unit,
      family = _Object$assign.family;

  return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(size0).concat(unit, " ").concat(family);
}

var LabelSpriteAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default()(null, function (_initialize, _BaseSprite$Attr) {
  var LabelSpriteAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(LabelSpriteAttr, _BaseSprite$Attr2);

    function LabelSpriteAttr() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, LabelSpriteAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(LabelSpriteAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));

      return _this;
    }

    return LabelSpriteAttr;
  }(_BaseSprite$Attr);

  return {
    F: LabelSpriteAttr,
    d: [{
      kind: "method",
      key: "retypesetting",
      value: function retypesetting() {
        this.subject.retypesetting();
      }
    }, {
      kind: "method",
      key: "widthRetypeseeting",
      value: function widthRetypeseeting() {
        if (this.lineBreak !== '') this.subject.retypesetting();
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(String), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      })],
      key: "text",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('normal normal normal 16px Arial')],
      key: "font",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "fontSize",
      value: function fontSize(val) {
        if (val == null) val = '16px';
        var unit = 'px';

        if (typeof val === 'string') {
          var unitReg = /^([\d.]+)(\w+)/;
          var matches = val.match(unitReg);

          if (!matches) {
            return null;
          }

          val = parseFloat(matches[1]);
          unit = matches[2];
        }

        this.font = setFontPart(this.font, {
          size0: val,
          unit: unit
        });
      }
    }, {
      kind: "get",
      key: "fontSize",
      value: function fontSize() {
        var font = this.font;

        var _parseFont2 = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(font),
            size0 = _parseFont2.size0,
            unit = _parseFont2.unit;

        return "".concat(size0).concat(unit);
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "fontFamily",
      value: function fontFamily(val) {
        if (val == null) val = 'Arial';
        this.font = setFontPart(this.font, {
          family: val
        });
      }
    }, {
      kind: "get",
      key: "fontFamily",
      value: function fontFamily() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(this.font).family;
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "fontStyle",
      value: function fontStyle(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          style: val
        });
      }
    }, {
      kind: "get",
      key: "fontStyle",
      value: function fontStyle() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(this.font).style;
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "fontVariant",
      value: function fontVariant(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          variant: val
        });
      }
    }, {
      kind: "get",
      key: "fontVariant",
      value: function fontVariant() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(this.font).variant;
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "fontWeight",
      value: function fontWeight(val) {
        if (val == null) val = 'normal';
        this.font = setFontPart(this.font, {
          weight: val
        });
      }
    }, {
      kind: "get",
      key: "fontWeight",
      value: function fontWeight() {
        return Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(this.font).weight;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('')],
      key: "lineHeight",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('left')],
      key: "textAlign",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_11__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_11__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('')],
      key: "strokeColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_11__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_11__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('')],
      key: "color",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_11__["composit"])('color')],
      key: "fillColor",
      value: void 0
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["attr"]],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('')],
      key: "lineBreak",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])('')],
      key: "wordBreak",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])(0)],
      key: "letterSpacing",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'retypesetting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["inherit"])(0)],
      key: "textIndent",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'widthRetypeseeting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["relative"])('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_11__["attr"])({
        extra: 'widthRetypeseeting'
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_11__["relative"])('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_12__["default"].Attr);

var Label = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default()(null, function (_initialize2, _BaseSprite) {
  var Label =
  /*#__PURE__*/
  function (_BaseSprite2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Label, _BaseSprite2);

    function Label(attr) {
      var _this2;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Label);

      if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_1___default()(attr) !== 'object') {
        attr = {
          text: String(attr)
        };
      }

      _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Label).call(this, attr));

      _initialize2(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this2));

      return _this2;
    }

    return Label;
  }(_BaseSprite);

  return {
    F: Label,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return LabelSpriteAttr;
      }
    }, {
      kind: "set",
      key: "text",
      value: function text(val) {
        this.attr('text', val);
      }
    }, {
      kind: "get",
      key: "text",
      value: function text() {
        return this.attr('text');
      }
    }, {
      kind: "get",
      key: "textboxSize",
      value: function textboxSize() {
        if (!this[_boxSize]) calculTextboxSize(this);
        return this[_boxSize];
      }
    }, {
      kind: "get",
      key: "flexibleFont",
      value: function flexibleFont() {
        var font = this.attr('font');
        if (this.attr('width') === '' && this.attr('layoutWidth') === '') return font;
        var textboxSize = this.textboxSize,
            contentSize = this.contentSize;

        var _parseFont3 = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseFont"])(font),
            style = _parseFont3.style,
            variant = _parseFont3.variant,
            weight = _parseFont3.weight,
            size = _parseFont3.size,
            family = _parseFont3.family;

        size *= contentSize[0] / textboxSize[0];
        return "".concat(style, " ").concat(variant, " ").concat(weight, " ").concat(Math.floor(size), "px \"").concat(family, "\"");
      } // override to adapt content size

    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_11__["flow"]],
      key: "contentSize",
      value: function contentSize() {
        var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        if (width === '' || height === '') {
          var textboxSize = this.textboxSize;
          if (!textboxSize) return [0, 0];
          width = width || textboxSize[0];
          height = height || textboxSize[1];
        }

        if (this.attr('flexible') && this.attr('height') === '' && this.attr('layoutHeight') === '') {
          height = Math.ceil(height * width / this.textboxSize[0]);
        }

        return [width, height];
      }
    }, {
      kind: "method",
      key: "connect",
      value: function connect(parent) {
        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Label.prototype), "connect", this).call(this, parent, zOrder);

        var _p = parent;

        while (_p && _p.__labelCount != null) {
          ++_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function disconnect(parent) {
        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Label.prototype), "disconnect", this).call(this, parent);

        var _p = parent;

        while (_p && _p.__labelCount != null) {
          --_p.__labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "retypesetting",
      value: function retypesetting() {
        // calculTextboxSize(this);
        this[_boxSize] = false;
        this[_outputText] = null;
        this.reflow();
        this.forceUpdate(true);
      }
    }, {
      kind: "method",
      key: "restyle",
      value: function restyle() {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Label.prototype), "restyle", this).call(this);

        this.retypesetting();
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(t, drawingContext) {
        var _this3 = this;

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Label.prototype), "render", this).call(this, t, drawingContext);

        var textAlign = this.attr('textAlign'),
            flexible = this.attr('flexible'),
            font = flexible ? this.flexibleFont : this.attr('font'),
            lineHeight = this.attr('lineHeight');
        var text = this.text;

        if (text) {
          var _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(this.contentSize, 2),
              w = _this$contentSize[0],
              h = _this$contentSize[1];

          if (!this[_outputText]) calculTextboxSize(this);
          text = this[_outputText] || this.text;

          if ((this.textboxSize[0] > w || this.textboxSize[1] > h) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          drawingContext.font = font;
          var lines = text.split(/\n/);
          drawingContext.textBaseline = 'top';
          var align = textAlign;
          drawingContext.textBaseline = 'middle';
          var strokeColor = Object(_utils_render__WEBPACK_IMPORTED_MODULE_13__["findColor"])(drawingContext, this, 'strokeColor');

          if (strokeColor) {
            drawingContext.strokeStyle = strokeColor;
          }

          var fillColor = Object(_utils_render__WEBPACK_IMPORTED_MODULE_13__["findColor"])(drawingContext, this, 'fillColor');

          if (!strokeColor && !fillColor) {
            fillColor = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["parseColorString"])('black');
          }

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          var top = 0;
          var width = this.contentSize[0];
          var letterSpacing = this.attr('letterSpacing'),
              textIndent = this.attr('textIndent');
          lines.forEach(function (line, idx) {
            var _measureText5 = measureText(_this3, line, font, lineHeight),
                _measureText6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_9___default()(_measureText5, 2),
                w = _measureText6[0],
                h = _measureText6[1];

            var left = 0;

            if (align === 'center') {
              left = (width - w) / 2;
            } else if (align === 'right') {
              left = width - w;
            }

            var indent = 0;

            if (textIndent && idx === 0 && align !== 'right') {
              indent = textIndent;
            }

            if (letterSpacing) {
              var l = left;

              _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(line).forEach(function (letter, i) {
                if (idx === 0 && i === 0) {
                  l += indent;
                }

                if (fillColor) {
                  drawingContext.fillText(letter, l, top + h / 2);
                }

                if (strokeColor) {
                  drawingContext.strokeText(letter, l, top + h / 2);
                }

                l += measureText(_this3, letter, font)[0] + letterSpacing;
              });
            } else {
              if (fillColor) {
                drawingContext.fillText(line, left + indent, top + h / 2);
              }

              if (strokeColor) {
                drawingContext.strokeText(line, left + indent, top + h / 2);
              }
            }

            top += h;
          });
        }
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_12__["default"]);



/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LineBreaker", function() { return LineBreaker; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromCodePoint", function() { return fromCodePoint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCodePoints", function() { return toCodePoints; });
/*
 * css-line-break 1.1.1 <https://github.com/niklasvh/css-line-break#readme>
 * Copyright (c) 2019 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
var toCodePoints = function (str) {
    var codePoints = [];
    var i = 0;
    var length = str.length;
    while (i < length) {
        var value = str.charCodeAt(i++);
        if (value >= 0xd800 && value <= 0xdbff && i < length) {
            var extra = str.charCodeAt(i++);
            if ((extra & 0xfc00) === 0xdc00) {
                codePoints.push(((value & 0x3ff) << 10) + (extra & 0x3ff) + 0x10000);
            }
            else {
                codePoints.push(value);
                i--;
            }
        }
        else {
            codePoints.push(value);
        }
    }
    return codePoints;
};
var fromCodePoint = function () {
    var codePoints = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        codePoints[_i] = arguments[_i];
    }
    if (String.fromCodePoint) {
        return String.fromCodePoint.apply(String, codePoints);
    }
    var length = codePoints.length;
    if (!length) {
        return '';
    }
    var codeUnits = [];
    var index = -1;
    var result = '';
    while (++index < length) {
        var codePoint = codePoints[index];
        if (codePoint <= 0xffff) {
            codeUnits.push(codePoint);
        }
        else {
            codePoint -= 0x10000;
            codeUnits.push((codePoint >> 10) + 0xd800, codePoint % 0x400 + 0xdc00);
        }
        if (index + 1 === length || codeUnits.length > 0x4000) {
            result += String.fromCharCode.apply(String, codeUnits);
            codeUnits.length = 0;
        }
    }
    return result;
};
var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
// Use a lookup table to find the index.
var lookup = typeof Uint8Array === 'undefined' ? [] : new Uint8Array(256);
for (var i = 0; i < chars.length; i++) {
    lookup[chars.charCodeAt(i)] = i;
}
var decode = function (base64) {
    var bufferLength = base64.length * 0.75, len = base64.length, i, p = 0, encoded1, encoded2, encoded3, encoded4;
    if (base64[base64.length - 1] === '=') {
        bufferLength--;
        if (base64[base64.length - 2] === '=') {
            bufferLength--;
        }
    }
    var buffer = typeof ArrayBuffer !== 'undefined' &&
        typeof Uint8Array !== 'undefined' &&
        typeof Uint8Array.prototype.slice !== 'undefined'
        ? new ArrayBuffer(bufferLength)
        : new Array(bufferLength);
    var bytes = Array.isArray(buffer) ? buffer : new Uint8Array(buffer);
    for (i = 0; i < len; i += 4) {
        encoded1 = lookup[base64.charCodeAt(i)];
        encoded2 = lookup[base64.charCodeAt(i + 1)];
        encoded3 = lookup[base64.charCodeAt(i + 2)];
        encoded4 = lookup[base64.charCodeAt(i + 3)];
        bytes[p++] = (encoded1 << 2) | (encoded2 >> 4);
        bytes[p++] = ((encoded2 & 15) << 4) | (encoded3 >> 2);
        bytes[p++] = ((encoded3 & 3) << 6) | (encoded4 & 63);
    }
    return buffer;
};
var polyUint16Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 2) {
        bytes.push((buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};
var polyUint32Array = function (buffer) {
    var length = buffer.length;
    var bytes = [];
    for (var i = 0; i < length; i += 4) {
        bytes.push((buffer[i + 3] << 24) | (buffer[i + 2] << 16) | (buffer[i + 1] << 8) | buffer[i]);
    }
    return bytes;
};

/** Shift size for getting the index-2 table offset. */
var UTRIE2_SHIFT_2 = 5;
/** Shift size for getting the index-1 table offset. */
var UTRIE2_SHIFT_1 = 6 + 5;
/**
 * Shift size for shifting left the index array values.
 * Increases possible data size with 16-bit index values at the cost
 * of compactability.
 * This requires data blocks to be aligned by UTRIE2_DATA_GRANULARITY.
 */
var UTRIE2_INDEX_SHIFT = 2;
/**
 * Difference between the two shift sizes,
 * for getting an index-1 offset from an index-2 offset. 6=11-5
 */
var UTRIE2_SHIFT_1_2 = UTRIE2_SHIFT_1 - UTRIE2_SHIFT_2;
/**
 * The part of the index-2 table for U+D800..U+DBFF stores values for
 * lead surrogate code _units_ not code _points_.
 * Values for lead surrogate code _points_ are indexed with this portion of the table.
 * Length=32=0x20=0x400>>UTRIE2_SHIFT_2. (There are 1024=0x400 lead surrogates.)
 */
var UTRIE2_LSCP_INDEX_2_OFFSET = 0x10000 >> UTRIE2_SHIFT_2;
/** Number of entries in a data block. 32=0x20 */
var UTRIE2_DATA_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_2;
/** Mask for getting the lower bits for the in-data-block offset. */
var UTRIE2_DATA_MASK = UTRIE2_DATA_BLOCK_LENGTH - 1;
var UTRIE2_LSCP_INDEX_2_LENGTH = 0x400 >> UTRIE2_SHIFT_2;
/** Count the lengths of both BMP pieces. 2080=0x820 */
var UTRIE2_INDEX_2_BMP_LENGTH = UTRIE2_LSCP_INDEX_2_OFFSET + UTRIE2_LSCP_INDEX_2_LENGTH;
/**
 * The 2-byte UTF-8 version of the index-2 table follows at offset 2080=0x820.
 * Length 32=0x20 for lead bytes C0..DF, regardless of UTRIE2_SHIFT_2.
 */
var UTRIE2_UTF8_2B_INDEX_2_OFFSET = UTRIE2_INDEX_2_BMP_LENGTH;
var UTRIE2_UTF8_2B_INDEX_2_LENGTH = 0x800 >> 6; /* U+0800 is the first code point after 2-byte UTF-8 */
/**
 * The index-1 table, only used for supplementary code points, at offset 2112=0x840.
 * Variable length, for code points up to highStart, where the last single-value range starts.
 * Maximum length 512=0x200=0x100000>>UTRIE2_SHIFT_1.
 * (For 0x100000 supplementary code points U+10000..U+10ffff.)
 *
 * The part of the index-2 table for supplementary code points starts
 * after this index-1 table.
 *
 * Both the index-1 table and the following part of the index-2 table
 * are omitted completely if there is only BMP data.
 */
var UTRIE2_INDEX_1_OFFSET = UTRIE2_UTF8_2B_INDEX_2_OFFSET + UTRIE2_UTF8_2B_INDEX_2_LENGTH;
/**
 * Number of index-1 entries for the BMP. 32=0x20
 * This part of the index-1 table is omitted from the serialized form.
 */
var UTRIE2_OMITTED_BMP_INDEX_1_LENGTH = 0x10000 >> UTRIE2_SHIFT_1;
/** Number of entries in an index-2 block. 64=0x40 */
var UTRIE2_INDEX_2_BLOCK_LENGTH = 1 << UTRIE2_SHIFT_1_2;
/** Mask for getting the lower bits for the in-index-2-block offset. */
var UTRIE2_INDEX_2_MASK = UTRIE2_INDEX_2_BLOCK_LENGTH - 1;
var slice16 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint16Array(Array.prototype.slice.call(view, start, end));
};
var slice32 = function (view, start, end) {
    if (view.slice) {
        return view.slice(start, end);
    }
    return new Uint32Array(Array.prototype.slice.call(view, start, end));
};
var createTrieFromBase64 = function (base64) {
    var buffer = decode(base64);
    var view32 = Array.isArray(buffer) ? polyUint32Array(buffer) : new Uint32Array(buffer);
    var view16 = Array.isArray(buffer) ? polyUint16Array(buffer) : new Uint16Array(buffer);
    var headerLength = 24;
    var index = slice16(view16, headerLength / 2, view32[4] / 2);
    var data = view32[5] === 2
        ? slice16(view16, (headerLength + view32[4]) / 2)
        : slice32(view32, Math.ceil((headerLength + view32[4]) / 4));
    return new Trie(view32[0], view32[1], view32[2], view32[3], index, data);
};
var Trie = /** @class */ (function () {
    function Trie(initialValue, errorValue, highStart, highValueIndex, index, data) {
        this.initialValue = initialValue;
        this.errorValue = errorValue;
        this.highStart = highStart;
        this.highValueIndex = highValueIndex;
        this.index = index;
        this.data = data;
    }
    /**
     * Get the value for a code point as stored in the Trie.
     *
     * @param codePoint the code point
     * @return the value
     */
    Trie.prototype.get = function (codePoint) {
        var ix;
        if (codePoint >= 0) {
            if (codePoint < 0x0d800 || (codePoint > 0x0dbff && codePoint <= 0x0ffff)) {
                // Ordinary BMP code point, excluding leading surrogates.
                // BMP uses a single level lookup.  BMP index starts at offset 0 in the Trie2 index.
                // 16 bit data is stored in the index array itself.
                ix = this.index[codePoint >> UTRIE2_SHIFT_2];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0xffff) {
                // Lead Surrogate Code Point.  A Separate index section is stored for
                // lead surrogate code units and code points.
                //   The main index has the code unit data.
                //   For this function, we need the code point data.
                // Note: this expression could be refactored for slightly improved efficiency, but
                //       surrogate code points will be so rare in practice that it's not worth it.
                ix = this.index[UTRIE2_LSCP_INDEX_2_OFFSET + ((codePoint - 0xd800) >> UTRIE2_SHIFT_2)];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint < this.highStart) {
                // Supplemental code point, use two-level lookup.
                ix = UTRIE2_INDEX_1_OFFSET - UTRIE2_OMITTED_BMP_INDEX_1_LENGTH + (codePoint >> UTRIE2_SHIFT_1);
                ix = this.index[ix];
                ix += (codePoint >> UTRIE2_SHIFT_2) & UTRIE2_INDEX_2_MASK;
                ix = this.index[ix];
                ix = (ix << UTRIE2_INDEX_SHIFT) + (codePoint & UTRIE2_DATA_MASK);
                return this.data[ix];
            }
            if (codePoint <= 0x10ffff) {
                return this.data[this.highValueIndex];
            }
        }
        // Fall through.  The code point is outside of the legal range of 0..0x10ffff.
        return this.errorValue;
    };
    return Trie;
}());

var base64 = 'KwAAAAAAAAAACA4AIDoAAPAfAAACAAAAAAAIABAAGABAAEgAUABYAF4AZgBeAGYAYABoAHAAeABeAGYAfACEAIAAiACQAJgAoACoAK0AtQC9AMUAXgBmAF4AZgBeAGYAzQDVAF4AZgDRANkA3gDmAOwA9AD8AAQBDAEUARoBIgGAAIgAJwEvATcBPwFFAU0BTAFUAVwBZAFsAXMBewGDATAAiwGTAZsBogGkAawBtAG8AcIBygHSAdoB4AHoAfAB+AH+AQYCDgIWAv4BHgImAi4CNgI+AkUCTQJTAlsCYwJrAnECeQKBAk0CiQKRApkCoQKoArACuALAAsQCzAIwANQC3ALkAjAA7AL0AvwCAQMJAxADGAMwACADJgMuAzYDPgOAAEYDSgNSA1IDUgNaA1oDYANiA2IDgACAAGoDgAByA3YDfgOAAIQDgACKA5IDmgOAAIAAogOqA4AAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAK8DtwOAAIAAvwPHA88D1wPfAyAD5wPsA/QD/AOAAIAABAQMBBIEgAAWBB4EJgQuBDMEIAM7BEEEXgBJBCADUQRZBGEEaQQwADAAcQQ+AXkEgQSJBJEEgACYBIAAoASoBK8EtwQwAL8ExQSAAIAAgACAAIAAgACgAM0EXgBeAF4AXgBeAF4AXgBeANUEXgDZBOEEXgDpBPEE+QQBBQkFEQUZBSEFKQUxBTUFPQVFBUwFVAVcBV4AYwVeAGsFcwV7BYMFiwWSBV4AmgWgBacFXgBeAF4AXgBeAKsFXgCyBbEFugW7BcIFwgXIBcIFwgXQBdQF3AXkBesF8wX7BQMGCwYTBhsGIwYrBjMGOwZeAD8GRwZNBl4AVAZbBl4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAGMGXgBqBnEGXgBeAF4AXgBeAF4AXgBeAF4AXgB5BoAG4wSGBo4GkwaAAIADHgR5AF4AXgBeAJsGgABGA4AAowarBrMGswagALsGwwbLBjAA0wbaBtoG3QbaBtoG2gbaBtoG2gblBusG8wb7BgMHCwcTBxsHCwcjBysHMAc1BzUHOgdCB9oGSgdSB1oHYAfaBloHaAfaBlIH2gbaBtoG2gbaBtoG2gbaBjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHbQdeAF4ANQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQd1B30HNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B4MH2gaKB68EgACAAIAAgACAAIAAgACAAI8HlwdeAJ8HpweAAIAArwe3B14AXgC/B8UHygcwANAH2AfgB4AA6AfwBz4B+AcACFwBCAgPCBcIogEYAR8IJwiAAC8INwg/CCADRwhPCFcIXwhnCEoDGgSAAIAAgABvCHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIfQh3CHgIeQh6CHsIfAh9CHcIeAh5CHoIewh8CH0Idwh4CHkIegh7CHwIhAiLCI4IMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAANQc1BzUHNQc1BzUHNQc1BzUHNQc1B54INQc1B6II2gaqCLIIugiAAIAAvgjGCIAAgACAAIAAgACAAIAAgACAAIAAywiHAYAA0wiAANkI3QjlCO0I9Aj8CIAAgACAAAIJCgkSCRoJIgknCTYHLwk3CZYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiWCJYIlgiAAIAAAAFAAXgBeAGAAcABeAHwAQACQAKAArQC9AJ4AXgBeAE0A3gBRAN4A7AD8AMwBGgEAAKcBNwEFAUwBXAF4QkhCmEKnArcCgAHHAsABz4LAAcABwAHAAd+C6ABoAG+C/4LAAcABwAHAAc+DF4MAAcAB54M3gweDV4Nng3eDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEeDqABVg6WDqABoQ6gAaABoAHXDvcONw/3DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DvcO9w73DncPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB7cPPwlGCU4JMACAAIAAgABWCV4JYQmAAGkJcAl4CXwJgAkwADAAMAAwAIgJgACLCZMJgACZCZ8JowmrCYAAswkwAF4AXgB8AIAAuwkABMMJyQmAAM4JgADVCTAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAqwYWBNkIMAAwADAAMADdCeAJ6AnuCR4E9gkwAP4JBQoNCjAAMACAABUK0wiAAB0KJAosCjQKgAAwADwKQwqAAEsKvQmdCVMKWwowADAAgACAALcEMACAAGMKgABrCjAAMAAwADAAMAAwADAAMAAwADAAMAAeBDAAMAAwADAAMAAwADAAMAAwADAAMAAwAIkEPQFzCnoKiQSCCooKkAqJBJgKoAqkCokEGAGsCrQKvArBCjAAMADJCtEKFQHZCuEK/gHpCvEKMAAwADAAMACAAIwE+QowAIAAPwEBCzAAMAAwADAAMACAAAkLEQswAIAAPwEZCyELgAAOCCkLMAAxCzkLMAAwADAAMAAwADAAXgBeAEELMAAwADAAMAAwADAAMAAwAEkLTQtVC4AAXAtkC4AAiQkwADAAMAAwADAAMAAwADAAbAtxC3kLgAuFC4sLMAAwAJMLlwufCzAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAApwswADAAMACAAIAAgACvC4AAgACAAIAAgACAALcLMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAvwuAAMcLgACAAIAAgACAAIAAyguAAIAAgACAAIAA0QswADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAANkLgACAAIAA4AswADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACJCR4E6AswADAAhwHwC4AA+AsADAgMEAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMACAAIAAGAwdDCUMMAAwAC0MNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQw1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHPQwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADUHNQc1BzUHNQc1BzUHNQc2BzAAMAA5DDUHNQc1BzUHNQc1BzUHNQc1BzUHNQdFDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAgACAAIAATQxSDFoMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAF4AXgBeAF4AXgBeAF4AYgxeAGoMXgBxDHkMfwxeAIUMXgBeAI0MMAAwADAAMAAwAF4AXgCVDJ0MMAAwADAAMABeAF4ApQxeAKsMswy7DF4Awgy9DMoMXgBeAF4AXgBeAF4AXgBeAF4AXgDRDNkMeQBqCeAM3Ax8AOYM7Az0DPgMXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgBeAF4AXgCgAAANoAAHDQ4NFg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAeDSYNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIAAgACAAIAAgACAAC4NMABeAF4ANg0wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAD4NRg1ODVYNXg1mDTAAbQ0wADAAMAAwADAAMAAwADAA2gbaBtoG2gbaBtoG2gbaBnUNeg3CBYANwgWFDdoGjA3aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gaUDZwNpA2oDdoG2gawDbcNvw3HDdoG2gbPDdYN3A3fDeYN2gbsDfMN2gbaBvoN/g3aBgYODg7aBl4AXgBeABYOXgBeACUG2gYeDl4AJA5eACwO2w3aBtoGMQ45DtoG2gbaBtoGQQ7aBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDjUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B1EO2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQdZDjUHNQc1BzUHNQc1B2EONQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHaA41BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B3AO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gY1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1BzUHNQc1B2EO2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gZJDtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBtoG2gbaBkkOeA6gAKAAoAAwADAAMAAwAKAAoACgAKAAoACgAKAAgA4wADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAD//wQABAAEAAQABAAEAAQABAAEAA0AAwABAAEAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAKABMAFwAeABsAGgAeABcAFgASAB4AGwAYAA8AGAAcAEsASwBLAEsASwBLAEsASwBLAEsAGAAYAB4AHgAeABMAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAFgAbABIAHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYADQARAB4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkAFgAaABsAGwAbAB4AHQAdAB4ATwAXAB4ADQAeAB4AGgAbAE8ATwAOAFAAHQAdAB0ATwBPABcATwBPAE8AFgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwArAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAAQABAANAA0ASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAUAArACsAKwArACsAKwArACsABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAGgAaAFAAUABQAFAAUABMAB4AGwBQAB4AKwArACsABAAEAAQAKwBQAFAAUABQAFAAUAArACsAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUAArAFAAUAArACsABAArAAQABAAEAAQABAArACsAKwArAAQABAArACsABAAEAAQAKwArACsABAArACsAKwArACsAKwArAFAAUABQAFAAKwBQACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwAEAAQAUABQAFAABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUAArACsABABQAAQABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQAKwArAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeABsAKwArACsAKwArACsAKwBQAAQABAAEAAQABAAEACsABAAEAAQAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArAAQABAArACsABAAEAAQAKwArACsAKwArACsAKwArAAQABAArACsAKwArAFAAUAArAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwAeAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwAEAFAAKwBQAFAAUABQAFAAUAArACsAKwBQAFAAUAArAFAAUABQAFAAKwArACsAUABQACsAUAArAFAAUAArACsAKwBQAFAAKwArACsAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQAKwArACsABAAEAAQAKwAEAAQABAAEACsAKwBQACsAKwArACsAKwArAAQAKwArACsAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAB4AHgAeAB4AHgAeABsAHgArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArAFAAUABQACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAB4AUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABAArACsAKwArACsAKwArAAQABAArACsAKwArACsAKwArAFAAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwArAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAKwBcAFwAKwBcACsAKwBcACsAKwArACsAKwArAFwAXABcAFwAKwBcAFwAXABcAFwAXABcACsAXABcAFwAKwBcACsAXAArACsAXABcACsAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgArACoAKgBcACsAKwBcAFwAXABcAFwAKwBcACsAKgAqACoAKgAqACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAFwAXABcAFwAUAAOAA4ADgAOAB4ADgAOAAkADgAOAA0ACQATABMAEwATABMACQAeABMAHgAeAB4ABAAEAB4AHgAeAB4AHgAeAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUAANAAQAHgAEAB4ABAAWABEAFgARAAQABABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAAQABAAEAAQABAANAAQABABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsADQANAB4AHgAeAB4AHgAeAAQAHgAeAB4AHgAeAB4AKwAeAB4ADgAOAA0ADgAeAB4AHgAeAB4ACQAJACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgAeAB4AHgBcAFwAXABcAFwAXAAqACoAKgAqAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAKgAqACoAKgAqACoAKgBcAFwAXAAqACoAKgAqAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAXAAqAEsASwBLAEsASwBLAEsASwBLAEsAKgAqACoAKgAqACoAUABQAFAAUABQAFAAKwBQACsAKwArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQACsAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwAEAAQABAAeAA0AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAEQArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAADQANAA0AUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAA0ADQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQACsABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoADQANABUAXAANAB4ADQAbAFwAKgArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAB4AHgATABMADQANAA4AHgATABMAHgAEAAQABAAJACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAUABQAFAAUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwAeACsAKwArABMAEwBLAEsASwBLAEsASwBLAEsASwBLAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwBcAFwAXABcAFwAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcACsAKwArACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwAeAB4AXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsABABLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKgAqACoAKgAqACoAKgBcACoAKgAqACoAKgAqACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAUABQAFAAUABQAFAAUAArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4ADQANAA0ADQAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAHgAeAB4AHgBQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwANAA0ADQANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwBQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsABAAEAAQAHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAABABQAFAAUABQAAQABAAEAFAAUAAEAAQABAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAKwBQACsAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAKwArAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAKwAeAB4AHgAeAB4AHgAeAA4AHgArAA0ADQANAA0ADQANAA0ACQANAA0ADQAIAAQACwAEAAQADQAJAA0ADQAMAB0AHQAeABcAFwAWABcAFwAXABYAFwAdAB0AHgAeABQAFAAUAA0AAQABAAQABAAEAAQABAAJABoAGgAaABoAGgAaABoAGgAeABcAFwAdABUAFQAeAB4AHgAeAB4AHgAYABYAEQAVABUAFQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgANAB4ADQANAA0ADQAeAA0ADQANAAcAHgAeAB4AHgArAAQABAAEAAQABAAEAAQABAAEAAQAUABQACsAKwBPAFAAUABQAFAAUAAeAB4AHgAWABEATwBQAE8ATwBPAE8AUABQAFAAUABQAB4AHgAeABYAEQArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAaABsAGwAbABsAGgAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgBQABoAHgAdAB4AUAAeABoAHgAeAB4AHgAeAB4AHgAeAB4ATwAeAFAAGwAeAB4AUABQAFAAUABQAB4AHgAeAB0AHQAeAFAAHgBQAB4AUAAeAFAATwBQAFAAHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AUABQAFAAUABPAE8AUABQAFAAUABQAE8AUABQAE8AUABPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAE8ATwBPAE8ATwBPAE8ATwBPAE8AUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAATwAeAB4AKwArACsAKwAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB0AHQAeAB4AHgAdAB0AHgAeAB0AHgAeAB4AHQAeAB0AGwAbAB4AHQAeAB4AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB0AHgAdAB4AHQAdAB0AHQAdAB0AHgAdAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAdAB0AHQAdAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAlACUAHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBQAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAeAB4AHgAeAB0AHQAeAB4AHgAeAB0AHQAdAB4AHgAdAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB0AHQAeAB4AHQAeAB4AHgAeAB0AHQAeAB4AHgAeACUAJQAdAB0AJQAeACUAJQAlACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAHgAeAB4AHgAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHQAdAB0AHgAdACUAHQAdAB4AHQAdAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHQAdAB0AHQAlAB4AJQAlACUAHQAlACUAHQAdAB0AJQAlAB0AHQAlAB0AHQAlACUAJQAeAB0AHgAeAB4AHgAdAB0AJQAdAB0AHQAdAB0AHQAlACUAJQAlACUAHQAlACUAIAAlAB0AHQAlACUAJQAlACUAJQAlACUAHgAeAB4AJQAlACAAIAAgACAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeABcAFwAXABcAFwAXAB4AEwATACUAHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACUAJQBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwArACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAE8ATwBPAE8ATwBPAE8ATwAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeACsAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUAArACsAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQBQAFAAUABQACsAKwArACsAUABQAFAAUABQAFAAUABQAA0AUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAABAAEAAQAKwAEAAQAKwArACsAKwArAAQABAAEAAQAUABQAFAAUAArAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsABAAEAAQAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsADQANAA0ADQANAA0ADQANAB4AKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAUABQAFAAUABQAA0ADQANAA0ADQANABQAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwANAA0ADQANAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAeAAQABAAEAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLACsADQArAB4AKwArAAQABAAEAAQAUABQAB4AUAArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwAEAAQABAAEAAQABAAEAAQABAAOAA0ADQATABMAHgAeAB4ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0AUABQAFAAUAAEAAQAKwArAAQADQANAB4AUAArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXABcAA0ADQANACoASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUAArACsAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANACsADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEcARwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQACsAKwAeAAQABAANAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAEAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUAArACsAUAArACsAUABQACsAKwBQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AKwArAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAeAB4ADQANAA0ADQAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAArAAQABAArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAEAAQABAAEAAQABAAEACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAFgAWAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAKwBQACsAKwArACsAKwArAFAAKwArACsAKwBQACsAUAArAFAAKwBQAFAAUAArAFAAUAArAFAAKwArAFAAKwBQACsAUAArAFAAKwBQACsAUABQACsAUAArACsAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAUABQAFAAUAArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUAArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAlACUAJQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeACUAJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeACUAJQAlACUAJQAeACUAJQAlACUAJQAgACAAIAAlACUAIAAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIQAhACEAIQAhACUAJQAgACAAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAIAAlACUAJQAlACAAJQAgACAAIAAgACAAIAAgACAAIAAlACUAJQAgACUAJQAlACUAIAAgACAAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeACUAHgAlAB4AJQAlACUAJQAlACAAJQAlACUAJQAeACUAHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAIAAgACAAIAAgAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFwAXABcAFQAVABUAHgAeAB4AHgAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAIAAgACAAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAlACAAIAAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsA';

/* @flow */
var LETTER_NUMBER_MODIFIER = 50;
// Non-tailorable Line Breaking Classes
var BK = 1; //  Cause a line break (after)
var CR = 2; //  Cause a line break (after), except between CR and LF
var LF = 3; //  Cause a line break (after)
var CM = 4; //  Prohibit a line break between the character and the preceding character
var NL = 5; //  Cause a line break (after)
var WJ = 7; //  Prohibit line breaks before and after
var ZW = 8; //  Provide a break opportunity
var GL = 9; //  Prohibit line breaks before and after
var SP = 10; // Enable indirect line breaks
var ZWJ = 11; // Prohibit line breaks within joiner sequences
// Break Opportunities
var B2 = 12; //  Provide a line break opportunity before and after the character
var BA = 13; //  Generally provide a line break opportunity after the character
var BB = 14; //  Generally provide a line break opportunity before the character
var HY = 15; //  Provide a line break opportunity after the character, except in numeric context
var CB = 16; //   Provide a line break opportunity contingent on additional information
// Characters Prohibiting Certain Breaks
var CL = 17; //  Prohibit line breaks before
var CP = 18; //  Prohibit line breaks before
var EX = 19; //  Prohibit line breaks before
var IN = 20; //  Allow only indirect line breaks between pairs
var NS = 21; //  Allow only indirect line breaks before
var OP = 22; //  Prohibit line breaks after
var QU = 23; //  Act like they are both opening and closing
// Numeric Context
var IS = 24; //  Prevent breaks after any and before numeric
var NU = 25; //  Form numeric expressions for line breaking purposes
var PO = 26; //  Do not break following a numeric expression
var PR = 27; //  Do not break in front of a numeric expression
var SY = 28; //  Prevent a break before; and allow a break after
// Other Characters
var AI = 29; //  Act like AL when the resolvedEAW is N; otherwise; act as ID
var AL = 30; //  Are alphabetic characters or symbols that are used with alphabetic characters
var CJ = 31; //  Treat as NS or ID for strict or normal breaking.
var EB = 32; //  Do not break from following Emoji Modifier
var EM = 33; //  Do not break from preceding Emoji Base
var H2 = 34; //  Form Korean syllable blocks
var H3 = 35; //  Form Korean syllable blocks
var HL = 36; //  Do not break around a following hyphen; otherwise act as Alphabetic
var ID = 37; //  Break before or after; except in some numeric context
var JL = 38; //  Form Korean syllable blocks
var JV = 39; //  Form Korean syllable blocks
var JT = 40; //  Form Korean syllable blocks
var RI = 41; //  Keep pairs together. For pairs; break before and after other classes
var SA = 42; //  Provide a line break opportunity contingent on additional, language-specific context analysis
var XX = 43; //  Have as yet unknown line breaking behavior or unassigned code positions
var BREAK_MANDATORY = '!';
var BREAK_NOT_ALLOWED = '×';
var BREAK_ALLOWED = '÷';
var UnicodeTrie = createTrieFromBase64(base64);
var ALPHABETICS = [AL, HL];
var HARD_LINE_BREAKS = [BK, CR, LF, NL];
var SPACE = [SP, ZW];
var PREFIX_POSTFIX = [PR, PO];
var LINE_BREAKS = HARD_LINE_BREAKS.concat(SPACE);
var KOREAN_SYLLABLE_BLOCK = [JL, JV, JT, H2, H3];
var HYPHEN = [HY, BA];
var codePointsToCharacterClasses = function (codePoints, lineBreak) {
    if (lineBreak === void 0) { lineBreak = 'strict'; }
    var types = [];
    var indicies = [];
    var categories = [];
    codePoints.forEach(function (codePoint, index) {
        var classType = UnicodeTrie.get(codePoint);
        if (classType > LETTER_NUMBER_MODIFIER) {
            categories.push(true);
            classType -= LETTER_NUMBER_MODIFIER;
        }
        else {
            categories.push(false);
        }
        if (['normal', 'auto', 'loose'].indexOf(lineBreak) !== -1) {
            // U+2010, – U+2013, 〜 U+301C, ゠ U+30A0
            if ([0x2010, 0x2013, 0x301c, 0x30a0].indexOf(codePoint) !== -1) {
                indicies.push(index);
                return types.push(CB);
            }
        }
        if (classType === CM || classType === ZWJ) {
            // LB10 Treat any remaining combining mark or ZWJ as AL.
            if (index === 0) {
                indicies.push(index);
                return types.push(AL);
            }
            // LB9 Do not break a combining character sequence; treat it as if it has the line breaking class of
            // the base character in all of the following rules. Treat ZWJ as if it were CM.
            var prev = types[index - 1];
            if (LINE_BREAKS.indexOf(prev) === -1) {
                indicies.push(indicies[index - 1]);
                return types.push(prev);
            }
            indicies.push(index);
            return types.push(AL);
        }
        indicies.push(index);
        if (classType === CJ) {
            return types.push(lineBreak === 'strict' ? NS : ID);
        }
        if (classType === SA) {
            return types.push(AL);
        }
        if (classType === AI) {
            return types.push(AL);
        }
        // For supplementary characters, a useful default is to treat characters in the range 10000..1FFFD as AL
        // and characters in the ranges 20000..2FFFD and 30000..3FFFD as ID, until the implementation can be revised
        // to take into account the actual line breaking properties for these characters.
        if (classType === XX) {
            if ((codePoint >= 0x20000 && codePoint <= 0x2fffd) || (codePoint >= 0x30000 && codePoint <= 0x3fffd)) {
                return types.push(ID);
            }
            else {
                return types.push(AL);
            }
        }
        types.push(classType);
    });
    return [indicies, types, categories];
};
var isAdjacentWithSpaceIgnored = function (a, b, currentIndex, classTypes) {
    var current = classTypes[currentIndex];
    if (Array.isArray(a) ? a.indexOf(current) !== -1 : a === current) {
        var i = currentIndex;
        while (i <= classTypes.length) {
            i++;
            var next = classTypes[i];
            if (next === b) {
                return true;
            }
            if (next !== SP) {
                break;
            }
        }
    }
    if (current === SP) {
        var i = currentIndex;
        while (i > 0) {
            i--;
            var prev = classTypes[i];
            if (Array.isArray(a) ? a.indexOf(prev) !== -1 : a === prev) {
                var n = currentIndex;
                while (n <= classTypes.length) {
                    n++;
                    var next = classTypes[n];
                    if (next === b) {
                        return true;
                    }
                    if (next !== SP) {
                        break;
                    }
                }
            }
            if (prev !== SP) {
                break;
            }
        }
    }
    return false;
};
var previousNonSpaceClassType = function (currentIndex, classTypes) {
    var i = currentIndex;
    while (i >= 0) {
        var type = classTypes[i];
        if (type === SP) {
            i--;
        }
        else {
            return type;
        }
    }
    return 0;
};
var _lineBreakAtIndex = function (codePoints, classTypes, indicies, index, forbiddenBreaks) {
    if (indicies[index] === 0) {
        return BREAK_NOT_ALLOWED;
    }
    var currentIndex = index - 1;
    if (Array.isArray(forbiddenBreaks) && forbiddenBreaks[currentIndex] === true) {
        return BREAK_NOT_ALLOWED;
    }
    var beforeIndex = currentIndex - 1;
    var afterIndex = currentIndex + 1;
    var current = classTypes[currentIndex];
    // LB4 Always break after hard line breaks.
    // LB5 Treat CR followed by LF, as well as CR, LF, and NL as hard line breaks.
    var before = beforeIndex >= 0 ? classTypes[beforeIndex] : 0;
    var next = classTypes[afterIndex];
    if (current === CR && next === LF) {
        return BREAK_NOT_ALLOWED;
    }
    if (HARD_LINE_BREAKS.indexOf(current) !== -1) {
        return BREAK_MANDATORY;
    }
    // LB6 Do not break before hard line breaks.
    if (HARD_LINE_BREAKS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB7 Do not break before spaces or zero width space.
    if (SPACE.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB8 Break before any character following a zero-width space, even if one or more spaces intervene.
    if (previousNonSpaceClassType(currentIndex, classTypes) === ZW) {
        return BREAK_ALLOWED;
    }
    // LB8a Do not break between a zero width joiner and an ideograph, emoji base or emoji modifier.
    if (UnicodeTrie.get(codePoints[currentIndex]) === ZWJ && (next === ID || next === EB || next === EM)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB11 Do not break before or after Word joiner and related characters.
    if (current === WJ || next === WJ) {
        return BREAK_NOT_ALLOWED;
    }
    // LB12 Do not break after NBSP and related characters.
    if (current === GL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB12a Do not break before NBSP and related characters, except after spaces and hyphens.
    if ([SP, BA, HY].indexOf(current) === -1 && next === GL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB13 Do not break before ‘]’ or ‘!’ or ‘;’ or ‘/’, even after spaces.
    if ([CL, CP, EX, IS, SY].indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB14 Do not break after ‘[’, even after spaces.
    if (previousNonSpaceClassType(currentIndex, classTypes) === OP) {
        return BREAK_NOT_ALLOWED;
    }
    // LB15 Do not break within ‘”[’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(QU, OP, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB16 Do not break between closing punctuation and a nonstarter (lb=NS), even with intervening spaces.
    if (isAdjacentWithSpaceIgnored([CL, CP], NS, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB17 Do not break within ‘——’, even with intervening spaces.
    if (isAdjacentWithSpaceIgnored(B2, B2, currentIndex, classTypes)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB18 Break after spaces.
    if (current === SP) {
        return BREAK_ALLOWED;
    }
    // LB19 Do not break before or after quotation marks, such as ‘ ” ’.
    if (current === QU || next === QU) {
        return BREAK_NOT_ALLOWED;
    }
    // LB20 Break before and after unresolved CB.
    if (next === CB || current === CB) {
        return BREAK_ALLOWED;
    }
    // LB21 Do not break before hyphen-minus, other hyphens, fixed-width spaces, small kana, and other non-starters, or after acute accents.
    if ([BA, HY, NS].indexOf(next) !== -1 || current === BB) {
        return BREAK_NOT_ALLOWED;
    }
    // LB21a Don't break after Hebrew + Hyphen.
    if (before === HL && HYPHEN.indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB21b Don’t break between Solidus and Hebrew letters.
    if (current === SY && next === HL) {
        return BREAK_NOT_ALLOWED;
    }
    // LB22 Do not break between two ellipses, or between letters, numbers or exclamations and ellipsis.
    if (next === IN && ALPHABETICS.concat(IN, EX, NU, ID, EB, EM).indexOf(current) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB23 Do not break between digits and letters.
    if ((ALPHABETICS.indexOf(next) !== -1 && current === NU) || (ALPHABETICS.indexOf(current) !== -1 && next === NU)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB23a Do not break between numeric prefixes and ideographs, or between ideographs and numeric postfixes.
    if ((current === PR && [ID, EB, EM].indexOf(next) !== -1) ||
        ([ID, EB, EM].indexOf(current) !== -1 && next === PO)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB24 Do not break between numeric prefix/postfix and letters, or between letters and prefix/postfix.
    if ((ALPHABETICS.indexOf(current) !== -1 && PREFIX_POSTFIX.indexOf(next) !== -1) ||
        (PREFIX_POSTFIX.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB25 Do not break between the following pairs of classes relevant to numbers:
    if (
    // (PR | PO) × ( OP | HY )? NU
    ([PR, PO].indexOf(current) !== -1 &&
        (next === NU || ([OP, HY].indexOf(next) !== -1 && classTypes[afterIndex + 1] === NU))) ||
        // ( OP | HY ) × NU
        ([OP, HY].indexOf(current) !== -1 && next === NU) ||
        // NU ×	(NU | SY | IS)
        (current === NU && [NU, SY, IS].indexOf(next) !== -1)) {
        return BREAK_NOT_ALLOWED;
    }
    // NU (NU | SY | IS)* × (NU | SY | IS | CL | CP)
    if ([NU, SY, IS, CL, CP].indexOf(next) !== -1) {
        var prevIndex = currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // NU (NU | SY | IS)* (CL | CP)? × (PO | PR))
    if ([PR, PO].indexOf(next) !== -1) {
        var prevIndex = [CL, CP].indexOf(current) !== -1 ? beforeIndex : currentIndex;
        while (prevIndex >= 0) {
            var type = classTypes[prevIndex];
            if (type === NU) {
                return BREAK_NOT_ALLOWED;
            }
            else if ([SY, IS].indexOf(type) !== -1) {
                prevIndex--;
            }
            else {
                break;
            }
        }
    }
    // LB26 Do not break a Korean syllable.
    if ((JL === current && [JL, JV, H2, H3].indexOf(next) !== -1) ||
        ([JV, H2].indexOf(current) !== -1 && [JV, JT].indexOf(next) !== -1) ||
        ([JT, H3].indexOf(current) !== -1 && next === JT)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB27 Treat a Korean Syllable Block the same as ID.
    if ((KOREAN_SYLLABLE_BLOCK.indexOf(current) !== -1 && [IN, PO].indexOf(next) !== -1) ||
        (KOREAN_SYLLABLE_BLOCK.indexOf(next) !== -1 && current === PR)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB28 Do not break between alphabetics (“at”).
    if (ALPHABETICS.indexOf(current) !== -1 && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB29 Do not break between numeric punctuation and alphabetics (“e.g.”).
    if (current === IS && ALPHABETICS.indexOf(next) !== -1) {
        return BREAK_NOT_ALLOWED;
    }
    // LB30 Do not break between letters, numbers, or ordinary symbols and opening or closing parentheses.
    if ((ALPHABETICS.concat(NU).indexOf(current) !== -1 && next === OP) ||
        (ALPHABETICS.concat(NU).indexOf(next) !== -1 && current === CP)) {
        return BREAK_NOT_ALLOWED;
    }
    // LB30a Break between two regional indicator symbols if and only if there are an even number of regional
    // indicators preceding the position of the break.
    if (current === RI && next === RI) {
        var i = indicies[currentIndex];
        var count = 1;
        while (i > 0) {
            i--;
            if (classTypes[i] === RI) {
                count++;
            }
            else {
                break;
            }
        }
        if (count % 2 !== 0) {
            return BREAK_NOT_ALLOWED;
        }
    }
    // LB30b Do not break between an emoji base and an emoji modifier.
    if (current === EB && next === EM) {
        return BREAK_NOT_ALLOWED;
    }
    return BREAK_ALLOWED;
};
var cssFormattedClasses = function (codePoints, options) {
    if (!options) {
        options = { lineBreak: 'normal', wordBreak: 'normal' };
    }
    var _a = codePointsToCharacterClasses(codePoints, options.lineBreak), indicies = _a[0], classTypes = _a[1], isLetterNumber = _a[2];
    if (options.wordBreak === 'break-all' || options.wordBreak === 'break-word') {
        classTypes = classTypes.map(function (type) { return ([NU, AL, SA].indexOf(type) !== -1 ? ID : type); });
    }
    var forbiddenBreakpoints = options.wordBreak === 'keep-all'
        ? isLetterNumber.map(function (letterNumber, i) {
            return letterNumber && codePoints[i] >= 0x4e00 && codePoints[i] <= 0x9fff;
        })
        : undefined;
    return [indicies, classTypes, forbiddenBreakpoints];
};
var Break = /** @class */ (function () {
    function Break(codePoints, lineBreak, start, end) {
        this.codePoints = codePoints;
        this.required = lineBreak === BREAK_MANDATORY;
        this.start = start;
        this.end = end;
    }
    Break.prototype.slice = function () {
        return fromCodePoint.apply(void 0, this.codePoints.slice(this.start, this.end));
    };
    return Break;
}());
var LineBreaker = function (str, options) {
    var codePoints = toCodePoints(str);
    var _a = cssFormattedClasses(codePoints, options), indicies = _a[0], classTypes = _a[1], forbiddenBreakpoints = _a[2];
    var length = codePoints.length;
    var lastEnd = 0;
    var nextIndex = 0;
    return {
        next: function () {
            if (nextIndex >= length) {
                return { done: true, value: null };
            }
            var lineBreak = BREAK_NOT_ALLOWED;
            while (nextIndex < length &&
                (lineBreak = _lineBreakAtIndex(codePoints, classTypes, indicies, ++nextIndex, forbiddenBreakpoints)) ===
                    BREAK_NOT_ALLOWED) { }
            if (lineBreak !== BREAK_NOT_ALLOWED || nextIndex === length) {
                var value = new Break(codePoints, lineBreak, lastEnd, nextIndex);
                lastEnd = nextIndex;
                return { value: value, done: false };
            }
            return { done: true, value: null };
        },
    };
};


//# sourceMappingURL=css-line-break.es5.js.map


/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(32);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(47);
/* harmony import */ var _helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(64);
/* harmony import */ var _basenode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(57);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(35);
/* harmony import */ var _batch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(66);
/* harmony import */ var _group__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(67);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(68);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(11);

















 // import stylesheet from './stylesheet';



var _zOrder = Symbol('zOrder'),
    _timeline = Symbol('timeline'),
    _renderDeferer = Symbol('renderDeferrer'),
    _drawTask = Symbol('drawTask'),
    _autoRender = Symbol('autoRender'),
    _adjustTimer = Symbol('adjustTimer');

var LayerAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_10___default()(null, function (_initialize, _BaseNode$Attr) {
  var LayerAttr =
  /*#__PURE__*/
  function (_BaseNode$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(LayerAttr, _BaseNode$Attr2);

    function LayerAttr(subject) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, LayerAttr);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(LayerAttr).call(this, subject));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this));

      _this.setDefault({
        bgcolor: ''
      });

      return _this;
    }

    return LayerAttr;
  }(_BaseNode$Attr);

  return {
    F: LayerAttr,
    d: [{
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_18__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_18__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_18__["attr"]],
      key: "bgcolor",
      value: function bgcolor(val) {
        this.set('bgcolor', val);
        var subject = this.subject;

        if (subject.canvas && subject.canvas.style) {
          if (val != null) {
            this.quietSet('canvasBgColor', subject.canvas.style.backgroundColor);
            subject.canvas.style.backgroundColor = val;
          } else {
            subject.canvas.style.backgroundColor = this.get('canvasBgColor');
          }
        }
      }
    }]
  };
}, _basenode__WEBPACK_IMPORTED_MODULE_13__["default"].Attr);

var Layer =
/*#__PURE__*/
function (_BaseNode) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Layer, _BaseNode);

  function Layer() {
    var _this2;

    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        _ref$evaluateFPS = _ref.evaluateFPS,
        evaluateFPS = _ref$evaluateFPS === void 0 ? false : _ref$evaluateFPS,
        _ref$renderMode = _ref.renderMode,
        renderMode = _ref$renderMode === void 0 ? 'repaintAll' : _ref$renderMode,
        _ref$autoRender = _ref.autoRender,
        autoRender = _ref$autoRender === void 0 ? true : _ref$autoRender,
        _ref$useDocumentCSS = _ref.useDocumentCSS,
        useDocumentCSS = _ref$useDocumentCSS === void 0 ? false : _ref$useDocumentCSS;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_5___default()(this, Layer);

    _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer).call(this));
    _this2[_autoRender] = autoRender; // renderMode: repaintAll | repaintDirty

    if (renderMode === 'repaintDirty') {
      Object(_utils__WEBPACK_IMPORTED_MODULE_18__["setDeprecation"])('renderRepaintDirty');
    }

    if (evaluateFPS !== false) {
      Object(_utils__WEBPACK_IMPORTED_MODULE_18__["setDeprecation"])('evaluateFPS');
    }

    _this2.outputContext = context;
    if (context.canvas) context.canvas.layer_ = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this2);
    _this2.childNodes = [];
    _this2.sortedChildNodes = [];
    _this2[_zOrder] = 0;
    _this2[_timeline] = new sprite_animator__WEBPACK_IMPORTED_MODULE_11__["Timeline"](_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["timeline"]);
    _this2[_renderDeferer] = null;
    _this2.touchedTargets = {}; // auto release

    /* istanbul ignore if  */

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('DOMNodeRemovedFromDocument', function () {
        var _this3;

        _this2._savePlaybackRate = _this2.timeline.playbackRate;
        _this2._saveChildren = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2.childNodes);

        (_this3 = _this2).remove.apply(_this3, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2.childNodes));

        _this2.timeline.playbackRate = 0;
      });
      context.canvas.addEventListener('DOMNodeInsertedIntoDocument', function () {
        if (_this2._saveChildren) {
          var _this4;

          _this2.timeline.playbackRate = _this2._savePlaybackRate;

          (_this4 = _this2).append.apply(_this4, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(_this2._saveChildren));

          delete _this2._saveChildren;
        }
      });
    }

    if (useDocumentCSS) {
      _this2.fromDocumentCSS();
    }

    return _this2;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Layer, [{
    key: "fromDocumentCSS",
    value: function fromDocumentCSS() {// stylesheet.fromDocumentCSS();
    }
  }, {
    key: "clearContext",
    value: function clearContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputContext;

      if (context.canvas) {
        var _context$canvas = context.canvas,
            width = _context$canvas.width,
            height = _context$canvas.height;
        context.clearRect(0, 0, width, height);
      }
    }
  }, {
    key: "prepareRender",
    value: function prepareRender() {
      var _this5 = this;

      if (!this[_renderDeferer]) {
        this[_renderDeferer] = {};
        this[_renderDeferer].promise = new Promise(function (resolve, reject) {
          Object.assign(_this5[_renderDeferer], {
            resolve: resolve,
            reject: reject
          });

          if (_this5.autoRender) {
            _this5[_drawTask] = Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["requestAnimationFrame"])(function () {
              delete _this5[_drawTask];

              _this5.draw();
            });
          }
        }); // .catch(ex => console.error(ex.message))
      }

      return this[_renderDeferer] ? this[_renderDeferer].promise : Promise.resolve();
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      return this.prepareRender();
    }
  }, {
    key: "restyle",
    value: function restyle() {
      var bgcolor = this.style.bgcolor;

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "restyle", this).call(this);

      if (bgcolor) {
        var color = this.attr('bgcolor');

        if (color !== bgcolor && this.canvas && this.canvas.style) {
          this.canvas.style = color;
        }
      }
    }
  }, {
    key: "draw",
    value: function draw() {
      var clearContext = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      // if(this.__styleNeedUpdate) {
      //   stylesheet.computeStyle(this);
      // }
      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "draw", this).call(this);

      var renderDeferrer = this[_renderDeferer];
      this[_renderDeferer] = null;

      if (this[_drawTask]) {
        Object(_helpers_fast_animation_frame__WEBPACK_IMPORTED_MODULE_12__["cancelAnimationFrame"])(this[_drawTask]);
        delete this[_drawTask];
      }

      var currentTime = this.timeline.currentTime;
      this.repaint(currentTime, clearContext);

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "dispatchEvent", this).call(this, 'update', {
        target: this,
        timeline: this.timeline,
        renderTime: currentTime
      }, true, true);

      if (renderDeferrer) {
        renderDeferrer.resolve();
      }
    }
  }, {
    key: "update",
    value: function update(target) {
      if (target && target.isDirty) return;

      if (target) {
        target.isDirty = true;
      }

      this.prepareRender();
    }
  }, {
    key: "isVisible",
    value: function isVisible() {
      if (this.canvas) {
        return this.canvas.width > 0 && this.canvas.height > 0;
      }

      return true;
    }
  }, {
    key: "drawSprites",
    value: function drawSprites(renderEls, t) {
      _utils__WEBPACK_IMPORTED_MODULE_18__["cacheContextPool"].flush();

      if (this.beforeDrawTransform) {
        this.outputContext.save();
        this.beforeDrawTransform();
      }

      for (var i = 0; i < renderEls.length; i++) {
        var child = renderEls[i],
            isDirty = child.isDirty;
        child.isDirty = false;

        if (child.parent === this) {
          child.draw(t);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }
      }

      if (this.beforeDrawTransform) {
        this.outputContext.restore();
      }
    }
  }, {
    key: "repaint",
    value: function repaint(t) {
      var clearContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var renderEls = this.sortedChildNodes;
      var outputContext = this.outputContext;
      if (clearContext) this.clearContext(outputContext);
      this.drawSprites(renderEls, t);
    }
  }, {
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX,
            layerY = evt.layerY;
        var _this$outputContext$c = this.outputContext.canvas,
            width = _this$outputContext$c.width,
            height = _this$outputContext$c.height;

        if (layerX == null && layerY == null || layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
          return true;
        }

        return false;
      }
      /* istanbul ignore next  */


      return true;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type, evt) {
      var _this6 = this;

      var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
      // eslint-disable-line complexity
      var handlers = this.getEventHandlers(type);

      if (swallow && handlers.length === 0) {
        return;
      }

      var hasCapturePhase = false;

      if (!swallow && !evt.terminated && type !== 'mouseenter') {
        var isCollision = collisionState || this.pointCollision(evt);
        var identifier = evt.identifier;

        if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
          isCollision = true;
        }

        if (isCollision || type === 'mouseleave') {
          var sprites = this.sortedChildNodes.slice(0).reverse();
          var targetSprites = [];

          if (identifier != null && (type === 'touchend' || type === 'touchmove')) {
            var touches = evt.originalEvent.changedTouches;

            for (var i = 0; i < touches.length; i++) {
              var touch = touches[i];

              if (touch.identifier === identifier) {
                var targets = this.layer.touchedTargets[identifier];

                if (targets) {
                  targets.forEach(function (target) {
                    if (target !== _this6 && target.layer === _this6) {
                      var _target$getParentXY = target.getParentXY(evt.layerX, evt.layerY),
                          _target$getParentXY2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_target$getParentXY, 2),
                          parentX = _target$getParentXY2[0],
                          parentY = _target$getParentXY2[1];

                      var _parent = [evt.parentX, evt.parentY];
                      evt.parentX = parentX;
                      evt.parentY = parentY;
                      target.dispatchEvent(type, evt, true, true, useCapturePhase);
                      evt.parentX = _parent[0];
                      evt.parentY = _parent[1];
                    }
                  });
                  if (type === 'touchend') delete this.layer.touchedTargets[identifier];
                }
              }
            }
          } else {
            evt.parentX = evt.layerX;
            evt.parentY = evt.layerY;

            if (isCollision && handlers.length && handlers.some(function (handler) {
              return handler.useCapture;
            })) {
              hasCapturePhase = true;
              if (!evt.target) evt.target = this.getTargetFromXY(evt.parentX, evt.parentY);

              _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "dispatchEvent", this).call(this, type, evt, isCollision, swallow, true);
            }

            if (!hasCapturePhase || !evt.cancelBubble) {
              for (var _i = 0; _i < sprites.length; _i++) {
                var sprite = sprites[_i];
                var hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

                if (hit) {
                  if (evt.targetSprites) {
                    targetSprites.push.apply(targetSprites, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(evt.targetSprites));
                    delete evt.targetSprites;
                  } // detect mouseenter/mouseleave


                  targetSprites.push(sprite);
                }

                if (evt.terminated && type !== 'mousemove') {
                  break;
                }
              }
            }

            delete evt.parentX;
            delete evt.parentY;
          }

          evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

          evt.terminated = false;
          collisionState = isCollision;
        }
      }

      evt.targetSprites = evt.targetSprites || [];

      if (evt.cancelBubble) {
        // stop bubbling
        return false;
      }

      if (hasCapturePhase) {
        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, false);
      }

      if (evt.targetSprites.length > 0) {
        // bubbling
        collisionState = true;
      }

      var layerX = evt.layerX,
          layerY = evt.layerY;

      if (layerX != null && layerY != null) {
        evt.offsetX = layerX + this.offset[0];
        evt.offsetY = layerY + this.offset[1];
      }

      return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_3___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Layer.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
    }
  }, {
    key: "group",
    value: function group() {
      var group = new _group__WEBPACK_IMPORTED_MODULE_16__["default"]();
      group.append.apply(group, arguments);
      this.appendChild(group);
      return group;
    }
  }, {
    key: "batch",
    value: function batch() {
      var _this7 = this;

      for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        if (sprite.layer !== _this7) {
          _this7.appendChild(sprite);
        }
      });
      var batch = new _batch__WEBPACK_IMPORTED_MODULE_15__["default"](this);
      batch.add.apply(batch, sprites);
      return batch;
    }
  }, {
    key: "adjust",
    value: function adjust(handler)
    /* istanbul ignore next  */
    {
      var _this8 = this;

      var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!update) return;
      var outputContext = this.outputContext;
      var shadowContext = this.adjustContext || outputContext.canvas.cloneNode().getContext('2d');

      if (!this[_adjustTimer]) {
        this.autoRender = false;
        shadowContext.clearRect(0, 0, shadowContext.canvas.width, shadowContext.canvas.height);
        shadowContext._clearTag = false;
        shadowContext.drawImage(outputContext.canvas, 0, 0);
        this.adjustContext = shadowContext;
      } else {
        clearTimeout(this[_adjustTimer]);
      }

      this[_adjustTimer] = setTimeout(function () {
        _this8.autoRender = true;
        delete _this8[_adjustTimer];
      }, 100);

      if (shadowContext.canvas.width > 0 && shadowContext.canvas.height > 0) {
        this.clearContext(outputContext);
        outputContext.save();
        handler.call(this, outputContext);
        outputContext.drawImage(shadowContext.canvas, 0, 0);
        outputContext.restore();
      }
    }
  }, {
    key: "resolution",
    get: function get() {
      return [this.canvas.width, this.canvas.height];
    }
  }, {
    key: "autoRender",
    set: function set(value) {
      this[_autoRender] = value;

      if (value) {
        this.draw();
      }
    },
    get: function get() {
      return this[_autoRender];
    }
  }, {
    key: "layer",
    get: function get() {
      return this;
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(function (child) {
        return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_14__["default"];
      });
    }
  }, {
    key: "timeline",
    get: function get() {
      return this[_timeline];
    }
  }, {
    key: "context",
    get: function get() {
      return this.outputContext;
    }
  }, {
    key: "canvas",
    get: function get() {
      return this.outputContext && this.outputContext.canvas;
    }
  }, {
    key: "offset",
    get: function get() {
      return [0, 0];
    }
  }]);

  return Layer;
}(_basenode__WEBPACK_IMPORTED_MODULE_13__["default"]);

_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_4___default()(Layer, "Attr", LayerAttr);


Object.assign(Layer.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_17__["default"]);

/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "requestAnimationFrame", function() { return requestAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cancelAnimationFrame", function() { return cancelAnimationFrame; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeline", function() { return timeline; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var sprite_animator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(47);




var _requestAnimationFrame, _cancelAnimationFrame;

if (typeof global.requestAnimationFrame === 'undefined') {
  _requestAnimationFrame = function _requestAnimationFrame(fn) {
    return setTimeout(function () {
      fn(Date.now());
    }, 16);
  };

  _cancelAnimationFrame = function _cancelAnimationFrame(id) {
    return clearTimeout(id);
  };
} else {
  _requestAnimationFrame = global.requestAnimationFrame;
  _cancelAnimationFrame = global.cancelAnimationFrame;
}

var steps = new Map();
var timerId;
var currentTime = Date.now();

var requestAnimationFrame = function requestAnimationFrame(step) {
  var id = Symbol('requestId');
  steps.set(id, step);

  if (timerId == null) {
    if (steps.size === 1) {
      currentTime = Date.now();
    }

    timerId = _requestAnimationFrame(function (t) {
      timerId = null;
      currentTime = Date.now();

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(steps).forEach(function (_ref) {
        var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_ref, 2),
            id = _ref2[0],
            callback = _ref2[1];

        callback(t);
        steps.delete(id);
      });
    });
  }

  return id;
};

var cancelAnimationFrame = function cancelAnimationFrame(id) {
  steps.delete(id);

  if (!steps.size && timerId) {
    _cancelAnimationFrame(timerId);

    timerId = null;
  }
};

var timeline = new sprite_animator__WEBPACK_IMPORTED_MODULE_2__["Timeline"]({
  nowtime: function nowtime() {
    return steps.size ? currentTime : Date.now();
  }
});

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(65)))

/***/ }),
/* 65 */
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
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Batch; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);





var _batch = Symbol('batch');

var Batch =
/*#__PURE__*/
function () {
  function Batch(layer) {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Batch);

    this.layer = layer;
    this[_batch] = new Set();
    this.cache = null;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Batch, [{
    key: "add",
    value: function add() {
      var _this = this;

      for (var _len = arguments.length, nodes = new Array(_len), _key = 0; _key < _len; _key++) {
        nodes[_key] = arguments[_key];
      }

      nodes.forEach(function (node) {
        if (!node.layer || node.layer !== _this.layer) {
          /* istanbul ignore next  */
          throw new Error('Batch node must append to this layer first!');
        }

        if (node[_batch]) {
          /* istanbul ignore next  */
          throw new Error('Node already batched!');
        }

        node.attr('enableCache', true);
        var that = _this;
        Object.defineProperty(node, 'cache', {
          configurable: true,
          get: function get() {
            return that.cache;
          },
          set: function set(context) {
            if (that.baseNode === this) {
              if (that.cache && context !== that.cache) {
                _utils__WEBPACK_IMPORTED_MODULE_3__["cacheContextPool"].put(that.cache);
              }

              that.cache = context;
            } else if (context == null) {
              throw new Error('Cannot set non-cachable attributes to batch members.Use batch.baseNode.attr(...)');
            }
          }
        });
        node[_batch] = _this;

        _this[_batch].add(node);
      });
    }
  }, {
    key: "remove",
    value: function remove() {
      var _this2 = this;

      for (var _len2 = arguments.length, nodes = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        nodes[_key2] = arguments[_key2];
      }

      nodes.forEach(function (node) {
        if (_this2[_batch].has(node)) {
          delete node[_batch];
          delete node.cache;

          _this2[_batch].delete(node);
        }
      });
    }
  }, {
    key: "baseNode",
    get: function get() {
      var batchNodes = _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(this[_batch]);

      var baseNode = batchNodes[0],
          zOrder = Infinity,
          zIndex = Infinity;

      for (var i = 0; i < batchNodes.length; i++) {
        var node = batchNodes[i];

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
  }]);

  return Batch;
}();



/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Group; });
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(11);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(35);
/* harmony import */ var _helpers_group__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(68);













var _zOrder = Symbol('zOrder'),
    _layoutTag = Symbol('layoutTag');

var reflow = true,
    relayout = true;

var GroupAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default()(null, function (_initialize, _BaseSprite$Attr) {
  var GroupAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(GroupAttr, _BaseSprite$Attr2);

    function GroupAttr(subject) {
      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, GroupAttr);

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(GroupAttr).call(this, subject));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this));

      GroupAttr.inits.forEach(function (init) {
        init(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), subject);
      });
      return _this;
    }

    return GroupAttr;
  }(_BaseSprite$Attr);

  return {
    F: GroupAttr,
    d: [{
      kind: "field",
      static: true,
      key: "inits",
      value: function value() {
        return [];
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_9__["attr"]],
      key: "enableCache",
      value: function value() {
        return 'auto';
      }
    }, {
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        reflow: reflow,
        value: null
      })],
      key: "clip",
      value: function clip(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = Object(_utils__WEBPACK_IMPORTED_MODULE_9__["createSvgPath"])(val);
          this.set('clip', val);
        } else {
          this.subject.svg = null;
          this.set('clip', null);
        }
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        reflow: reflow,
        relayout: relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_9__["relative"])('width')],
      key: "layoutWidth",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        reflow: reflow,
        relayout: relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_9__["relative"])('height')],
      key: "layoutHeight",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        reflow: reflow,
        relayout: relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_9__["relative"])('width')],
      key: "width",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        reflow: reflow,
        relayout: relayout
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_9__["relative"])('height')],
      key: "height",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["attr"])({
        relayout: relayout
      })],
      key: "display",
      value: function value() {
        return '';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_9__["attr"]],
      key: "scrollLeft",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_9__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_9__["attr"]],
      key: "scrollTop",
      value: function value() {
        return 0;
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_10__["default"].Attr);

var _layout = Symbol('layout');

var Group = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_8___default()(null, function (_initialize2, _BaseSprite) {
  var Group =
  /*#__PURE__*/
  function (_BaseSprite2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_7___default()(Group, _BaseSprite2);

    function Group() {
      var _this2;

      var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Group);

      _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group).call(this, attr));

      _initialize2(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this2));

      _this2.childNodes = [];
      _this2.sortedChildNodes = [];
      _this2[_zOrder] = 0;
      _this2[_layoutTag] = false;
      _this2.__labelCount = 0;
      return _this2;
    }

    return Group;
  }(_BaseSprite);

  return {
    F: Group,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return GroupAttr;
      }
    }, {
      kind: "method",
      static: true,
      key: "applyLayout",
      value: function applyLayout(name, layout) {
        this[_layout] = this[_layout] || {};
        var attrs = layout.attrs,
            relayout = layout.relayout;

        if (attrs.init) {
          GroupAttr.inits.push(attrs.init);
        }

        Group.addAttributes(attrs);
        this[_layout][name] = relayout;
      }
    }, {
      kind: "get",
      key: "isVirtual",
      value: function isVirtual() {
        var display = this.attr('display');
        if (display !== '' && display !== 'none') return false;
        var parent = this.parent;
        if (parent && parent instanceof Group && !parent.isVirtual) return false;

        var _this$attr = this.attr('border'),
            borderWidth = _this$attr.width,
            borderRadius = this.attr('borderRadius'),
            bgcolor = this.attr('bgcolor'),
            _this$attr2 = this.attr('gradients'),
            bgGradient = _this$attr2.bgcolor,
            _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1],
            _this$attr3 = this.attr('anchor'),
            _this$attr4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr3, 2),
            anchorX = _this$attr4[0],
            anchorY = _this$attr4[1],
            bgimage = this.attr('bgimage'),
            _this$attr5 = this.attr('padding'),
            _this$attr6 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_this$attr5, 4),
            paddingTop = _this$attr6[0],
            paddingRight = _this$attr6[1],
            paddingBottom = _this$attr6[2],
            paddingLeft = _this$attr6[3];

        return !anchorX && !anchorY && !width && !height && !borderRadius && !borderWidth && !bgcolor && !bgGradient && !bgimage && !paddingTop && !paddingRight && !paddingBottom && !paddingLeft;
      }
    }, {
      kind: "method",
      key: "connect",
      value: function connect(parent) {
        var zOrder = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "connect", this).call(this, parent, zOrder);

        var labelCount = this.__labelCount;
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount += labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "disconnect",
      value: function disconnect(parent) {
        var ret = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "disconnect", this).call(this, parent);

        var labelCount = this.__labelCount;
        var _p = parent;

        while (_p && _p.__labelCount != null) {
          _p.__labelCount -= labelCount;
          _p = _p.parent;
        }

        return ret;
      }
    }, {
      kind: "method",
      key: "scrollTo",
      value: function scrollTo(x, y) {
        this.attr('scrollLeft', x);
        this.attr('scrollTop', y);
      }
    }, {
      kind: "method",
      key: "scrollBy",
      value: function scrollBy(dx, dy) {
        var x = this.attr('scrollLeft'),
            y = this.attr('scrollTop');
        this.scrollTo(x + dx, y + dy);
      }
    }, {
      kind: "method",
      key: "cloneNode",
      value: function cloneNode(deepCopy) {
        var node = _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "cloneNode", this).call(this);

        if (deepCopy) {
          var children = this.childNodes;
          children.forEach(function (child) {
            var subNode = child.cloneNode(deepCopy);
            node.append(subNode);
          });
        }

        return node;
      }
    }, {
      kind: "get",
      key: "children",
      value: function children() {
        var children = this.childNodes || [];
        return children.filter(function (child) {
          return child instanceof _basesprite__WEBPACK_IMPORTED_MODULE_10__["default"];
        });
      }
    }, {
      kind: "method",
      key: "update",
      value: function update(child) {
        child.isDirty = true;
        var attrSize = this.attrSize;

        if (attrSize[0] === '' || attrSize[1] === '') {
          this.reflow();
        }

        this.forceUpdate(true);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function pointCollision(evt) {
        if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "pointCollision", this).call(this, evt) || this.isVirtual) {
          if (this.svg) {
            var offsetX = evt.offsetX,
                offsetY = evt.offsetY;
            if (offsetX == null && offsetY == null) return true;
            var rect = this.originalRect;
            evt.isInClip = this.svg.isPointInPath(offsetX - rect[0], offsetY - rect[1]);
          }

          return true;
        }

        return false;
      }
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_9__["flow"]],
      key: "contentSize",
      value: function contentSize() {
        if (this.isVirtual) return [0, 0];

        var _this$attrSize2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.attrSize, 2),
            width = _this$attrSize2[0],
            height = _this$attrSize2[1];

        if (width === '' || height === '') {
          if (this.attr('clip')) {
            var svg = this.svg;
            var bounds = svg.bounds;
            width = width || bounds[2];
            height = height || bounds[3];
          } else {
            var right, bottom;
            right = 0;
            bottom = 0;
            this.childNodes.forEach(function (sprite) {
              if (sprite.attr('display') !== 'none') {
                var renderBox = sprite.renderBox;

                if (renderBox) {
                  right = Math.max(right, renderBox[2]);
                  bottom = Math.max(bottom, renderBox[3]);
                }
              }
            });
            width = width || right;
            height = height || bottom;
          }
        }

        return [width, height];
      }
    }, {
      kind: "method",
      key: "dispatchEvent",
      value: function dispatchEvent(type, evt) {
        var collisionState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var swallow = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var useCapturePhase = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;
        var handlers = this.getEventHandlers(type);

        if (swallow && handlers.length === 0) {
          return;
        }

        var hasCapturePhase = false;

        if (!swallow && !evt.terminated && type !== 'mouseenter') {
          var isCollision = collisionState || this.pointCollision(evt);

          if (isCollision || type === 'mouseleave' || !this.attr('clipOverflow')) {
            var scrollLeft = this.attr('scrollLeft'),
                scrollTop = this.attr('scrollTop'),
                borderWidth = this.attr('border').width,
                padding = this.attr('padding');
            var parentX, parentY;
            if ('offsetX' in evt) parentX = evt.offsetX - this.originalRect[0] - borderWidth - padding[3] + scrollLeft;
            if ('offsetY' in evt) parentY = evt.offsetY - this.originalRect[1] - borderWidth - padding[0] + scrollTop;
            var _parentX = evt.parentX,
                _parentY = evt.parentY;
            evt.parentX = parentX;
            evt.parentY = parentY;

            if (isCollision && handlers.length && handlers.some(function (handler) {
              return handler.useCapture;
            })) {
              hasCapturePhase = true;
              if (!evt.target) evt.target = this.getTargetFromXY(parentX, parentY);

              _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "dispatchEvent", this).call(this, type, evt, isCollision, swallow, true);
            }

            var targetSprites = [];

            if (!hasCapturePhase || !evt.cancelBubble) {
              var sprites = this.sortedChildNodes.slice(0).reverse();

              for (var i = 0; i < sprites.length && evt.isInClip !== false; i++) {
                var sprite = sprites[i];
                var hit = sprite.dispatchEvent(type, evt, collisionState, swallow, useCapturePhase);

                if (hit) {
                  if (evt.targetSprites) {
                    targetSprites.push.apply(targetSprites, _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0___default()(evt.targetSprites));
                    delete evt.targetSprites;
                  }

                  targetSprites.push(sprite);
                }

                if (evt.terminated && type !== 'mousemove') {
                  break;
                }
              }
            }

            evt.targetSprites = targetSprites; // stopDispatch can only terminate event in the same level

            evt.terminated = false;
            evt.parentX = _parentX;
            evt.parentY = _parentY;
            collisionState = isCollision;
          }
        }

        evt.targetSprites = evt.targetSprites || [];

        if (evt.cancelBubble) {
          // stop bubbling
          return false;
        }

        if (hasCapturePhase) {
          return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, false);
        }

        if (evt.targetSprites.length > 0) {
          // bubbling
          collisionState = true;
        }

        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "dispatchEvent", this).call(this, type, evt, collisionState, swallow, useCapturePhase);
      }
    }, {
      kind: "method",
      key: "relayout",
      value: function relayout() {
        var items = this.childNodes.filter(function (child) {
          if (child.hasLayout) {
            child.attr('layoutWidth', null);
            child.attr('layoutHeight', null);
            child.attr('layoutX', null);
            child.attr('layoutY', null);
          }

          if (child.relayout) {
            var _display = child.attr('display');

            if (_display !== '' && _display !== 'static') {
              child.relayout();
            }
          }

          return child.hasLayout && child.attr('display') !== 'none';
        });
        var display = this.attr('display');
        var doLayout = Group[_layout][display];

        if (doLayout) {
          doLayout(this, items);
        }
      }
    }, {
      kind: "method",
      key: "clearLayout",
      value: function clearLayout() {
        this[_layoutTag] = false;
        if (this.hasLayout) this.parent.clearLayout();
      }
    }, {
      kind: "method",
      key: "draw",
      value: function draw(t) {
        var drawingContext = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.context;
        // must relayout before draw
        // prevent originalRect changing when rendering.
        var display = this.attr('display');

        if (display !== '' && display !== 'static' && !this[_layoutTag]) {
          this.relayout();
          this[_layoutTag] = true;
        }

        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "draw", this).call(this, t, drawingContext);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(t, drawingContext) {
        var clipPath = this.attr('clip');

        if (clipPath) {
          this.svg.beginPath().to(drawingContext);
          drawingContext.clip();
        }

        if (!this.isVirtual) {
          _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_2___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(Group.prototype), "render", this).call(this, t, drawingContext);

          if (this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, this.contentSize[0], this.contentSize[1]);
            drawingContext.clip();
          }
        }

        drawingContext.save();
        var scrollLeft = this.attr('scrollLeft'),
            scrollTop = this.attr('scrollTop');
        drawingContext.translate(-scrollLeft, -scrollTop);
        var sprites = this.sortedChildNodes;

        for (var i = 0; i < sprites.length; i++) {
          var child = sprites[i],
              isDirty = child.isDirty;
          child.isDirty = false;
          child.draw(t, drawingContext);

          if (isDirty) {
            child.dispatchEvent('update', {
              target: child,
              renderTime: t
            }, true, true);
          }
        }

        drawingContext.restore();
      }
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_10__["default"]);


Object.assign(Group.prototype, _helpers_group__WEBPACK_IMPORTED_MODULE_11__["default"]);

/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);


var _zOrder = Symbol('zOrder');

var _removeTask = Symbol('removeTask');

/* harmony default export */ __webpack_exports__["default"] = ({
  getTargetFromXY: function getTargetFromXY(x, y) {
    var children = this.children;
    var target = this;
    children.some(function (child) {
      var evt = {
        parentX: x,
        parentY: y
      };
      var hit = child.pointCollision(evt);

      if (hit) {
        if (child.getTargetFromXY) {
          target = child.getTargetFromXY(evt.offsetX, evt.offsetY);
        } else {
          target = child;
        }
      }

      return hit;
    });
    return target;
  },
  appendChild: function appendChild(sprite) {
    var _this = this;

    var update = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    var _append = function _append() {
      _this[_zOrder] = _this[_zOrder] || 0;
      sprite.connect(_this, _this[_zOrder]++);
      var children = _this.childNodes;
      children.push(sprite); // quick insert

      var orderedSprites = _this.sortedChildNodes || [];
      var len = orderedSprites.length;
      var i;
      var left = 0,
          right = len - 1;
      var zIndex = sprite.attr('zIndex') | 0;

      for (; i == null && left <= right;) {
        var rightSprite = orderedSprites[right];
        var leftSprite = orderedSprites[left];
        if (zIndex >= rightSprite.zIndex) i = right + 1;else if (zIndex < leftSprite.zIndex) i = left;else if (left >= right - 1) i = right;else {
          // between left & right
          var mid = Math.ceil((left + right) / 2);
          var midSprite = orderedSprites[mid];
          if (zIndex >= midSprite.zIndex) left = mid;else right = mid;
        }
      }

      if (i == null || i === len) orderedSprites.push(sprite);else orderedSprites.splice(i, 0, sprite);
      _this.sortedChildNodes = orderedSprites;

      if (update) {
        sprite.forceUpdate();
      }

      if (sprite.layer) {
        return sprite.enter();
      }

      return sprite;
    };

    var _remove = this.removeChild(sprite);

    if (_remove && _remove.promise) {
      // deferred
      if (_remove.resolve) _remove.resolve();

      _remove.promise.then(function () {
        return _append();
      });

      return _remove;
    }

    return _append();
  },
  append: function append() {
    var _this2 = this;

    for (var _len = arguments.length, sprites = new Array(_len), _key = 0; _key < _len; _key++) {
      sprites[_key] = arguments[_key];
    }

    sprites.forEach(function (sprite) {
      _this2.appendChild(sprite);
    });
    return this;
  },
  removeChild: function removeChild(child) {
    if (child[_removeTask]) return child[_removeTask];
    var idx = this.childNodes.indexOf(child);

    if (idx === -1) {
      return null;
    }

    var that = this;

    function remove(sprite) {
      delete child[_removeTask]; // re-calculate index because it's async...

      var idx = that.childNodes.indexOf(child);

      if (idx === -1) {
        return null;
      }

      that.childNodes.splice(idx, 1);
      that.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(that.childNodes);

      if (sprite.isVisible() || sprite.lastRenderBox) {
        sprite.forceUpdate();
      }

      sprite.disconnect(that);
      return sprite;
    }

    var action = child.exit();

    if (action.promise) {
      child[_removeTask] = action;
      action.promise.then(function () {
        return remove(child);
      });
      return action;
    }

    return remove(child);
  },
  clear: function clear() {
    var _this3 = this;

    var children = this.childNodes.slice(0);
    children.forEach(function (child) {
      return _this3.removeChild(child);
    });
    return this;
  },
  remove: function remove() {
    var _this4 = this;

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    if (args.length === 0) {
      if (!this.parent) return null;
      return this.parent.removeChild(this);
    }

    args.forEach(function (sprite) {
      _this4.removeChild(sprite);
    });
    return this;
  },
  insertBefore: function insertBefore(newchild, refchild) {
    var _this5 = this;

    if (refchild == null) {
      return this.appendChild(newchild);
    }

    var idx = this.childNodes.indexOf(refchild);
    var refZOrder = refchild.zOrder;

    if (idx >= 0) {
      var _insert = function _insert() {
        for (var i = 0; i < _this5.childNodes.length; i++) {
          var child = _this5.childNodes[i],
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

        _this5.childNodes.splice(idx, 0, newchild);

        newchild.connect(_this5, refZOrder);
        _this5.sortedChildNodes = Object(_utils__WEBPACK_IMPORTED_MODULE_0__["sortOrderedSprites"])(_this5.childNodes);
        newchild.forceUpdate();
        _this5[_zOrder] = _this5[_zOrder] || 0;
        _this5[_zOrder]++;

        if (_this5.layer) {
          return newchild.enter();
        }
      };

      var _remove = this.removeChild(newchild);

      if (_remove && _remove.promise) {
        if (_remove.resolve) _remove.resolve();

        _remove.promise.then(function () {
          return _insert();
        });

        return _remove;
      }

      return _insert();
    }

    return null;
  },
  replaceChild: function replaceChild(newChild, oldChild) {
    var _this6 = this;

    Promise.resolve(this.insertBefore(newChild, oldChild)).then(function () {
      _this6.removeChild(oldChild);
    });
  }
});

/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Path; });
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(11);
/* harmony import */ var _basesprite__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(35);










var reflow = true,
    quiet = true;

var PathSpriteAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_7___default()(null, function (_initialize, _BaseSprite$Attr) {
  var PathSpriteAttr =
  /*#__PURE__*/
  function (_BaseSprite$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(PathSpriteAttr, _BaseSprite$Attr2);

    function PathSpriteAttr() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, PathSpriteAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(PathSpriteAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this));

      return _this;
    }

    return PathSpriteAttr;
  }(_BaseSprite$Attr);

  return {
    F: PathSpriteAttr,
    d: [{
      kind: "set",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["attr"])({
        reflow: reflow
      })],
      key: "path",
      value: function path(val) {
        if (val) {
          val = typeof val === 'string' ? {
            d: val
          } : val;
          this.subject.svg = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["createSvgPath"])(val);
          this.set('path', val);
        } else {
          this.subject.svg = null;
          this.set('path', null);
        }
      }
    }, {
      kind: "set",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["attr"]],
      key: "d",
      value: function d(val) {
        if (val) {
          var path = this.path;

          if (!path) {
            this.path = {
              d: val
            };
          } else {
            this.path = Object.assign(path, {
              d: val
            });
          }
        } else {
          this.path = null;
        }
      }
    }, {
      kind: "get",
      key: "d",
      value: function d() {
        return this.path ? this.path.d : null;
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseValue"])(parseFloat), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["attr"])({
        reflow: reflow
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])(1)],
      key: "lineWidth",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_8__["parseStringFloat"], function (val) {
        return typeof val === 'number' ? [val] : val;
      }), _utils__WEBPACK_IMPORTED_MODULE_8__["attr"]],
      key: "lineDash",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseValue"])(parseFloat), _utils__WEBPACK_IMPORTED_MODULE_8__["attr"]],
      key: "lineDashOffset",
      value: function value() {
        return 0;
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])('butt')],
      key: "lineCap",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])('miter')],
      key: "lineJoin",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_8__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_8__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])('')],
      key: "strokeColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseValue"])(_utils__WEBPACK_IMPORTED_MODULE_8__["parseColorString"]), _utils__WEBPACK_IMPORTED_MODULE_8__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])('')],
      key: "fillColor",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["attr"])({
        reflow: reflow
      })],
      key: "flexible",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(_utils__WEBPACK_IMPORTED_MODULE_8__["attr"])({
        quiet: quiet
      }), Object(_utils__WEBPACK_IMPORTED_MODULE_8__["inherit"])('auto')],
      key: "bounding",
      value: function value() {
        return 'inherit';
      }
    }, {
      kind: "field",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["attr"], Object(_utils__WEBPACK_IMPORTED_MODULE_8__["composit"])('strokeColor')],
      key: "color",
      value: void 0
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_9__["default"].Attr);

var Path = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_7___default()(null, function (_initialize2, _BaseSprite) {
  var Path =
  /*#__PURE__*/
  function (_BaseSprite2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default()(Path, _BaseSprite2);

    function Path(attr) {
      var _this2;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Path);

      if (typeof attr === 'string') {
        attr = {
          d: attr
        };
      }

      _this2 = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Path).call(this, attr));

      _initialize2(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_5___default()(_this2));

      return _this2;
    }

    return Path;
  }(_BaseSprite);

  return {
    F: Path,
    d: [{
      kind: "field",
      static: true,
      key: "Attr",
      value: function value() {
        return PathSpriteAttr;
      }
    }, {
      kind: "set",
      key: "path",
      value: function path(val) {
        this.attr('path', val);
      }
    }, {
      kind: "get",
      key: "path",
      value: function path() {
        return this.attr('path');
      }
    }, {
      kind: "method",
      key: "getPointAtLength",
      value: function getPointAtLength(length) {
        if (this.svg) {
          return this.svg.getPointAtLength(length);
        }

        return [0, 0];
      }
    }, {
      kind: "method",
      key: "getPathLength",
      value: function getPathLength() {
        if (this.svg) {
          return this.svg.getTotalLength();
        }

        return 0;
      }
    }, {
      kind: "method",
      key: "isClosed",
      value: function isClosed() {
        var d = this.attr('d');

        if (d) {
          return /z$/img.test(d);
        }

        return false;
      }
    }, {
      kind: "method",
      key: "findPath",
      value: function findPath(offsetX, offsetY) {
        var rect = this.originalRect;
        var pathOffset = this.pathOffset;
        var svg = this.svg;

        if (svg) {
          var x = offsetX - rect[0] - pathOffset[0],
              y = offsetY - rect[1] - pathOffset[1];
          var collision = false;

          if (this.isClosed()) {
            collision = svg.isPointInPath(x, y);
          }

          if (!collision) {
            var lineWidth = this.attr('lineWidth') + (parseFloat(this.attr('bounding')) || 0),
                lineCap = this.attr('lineCap'),
                lineJoin = this.attr('lineJoin');
            collision = svg.isPointInStroke(x, y, {
              lineWidth: lineWidth,
              lineCap: lineCap,
              lineJoin: lineJoin
            });
          }

          if (collision) {
            return [svg];
          }
        }

        return [];
      }
    }, {
      kind: "get",
      key: "lineWidth",
      value: function lineWidth() {
        var lineWidth = this.attr('lineWidth'),
            gradients = this.attr('gradients'),
            fillColor = this.attr('fillColor'),
            strokeColor = this.attr('strokeColor');
        var hasStrokeColor = strokeColor || gradients && gradients.strokeColor,
            hasFillColor = fillColor || gradients && gradients.fillColor;

        if (!hasStrokeColor && hasFillColor) {
          // fill: ignore stroke
          return 0;
        }

        return lineWidth;
      }
    }, {
      kind: "get",
      key: "pathOffset",
      value: function pathOffset() {
        var lw = Math.round(this.lineWidth);
        return [lw, lw];
      }
    }, {
      kind: "get",
      key: "pathSize",
      value: function pathSize() {
        return this.svg ? this.svg.size : [0, 0];
      }
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["flow"]],
      key: "contentSize",
      value: function contentSize() {
        if (!this.svg) return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Path.prototype), "contentSize", this);
        var bounds = this.svg.bounds;

        var _this$attrSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.attrSize, 2),
            width = _this$attrSize[0],
            height = _this$attrSize[1];

        var pathOffset = this.pathOffset;

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
    }, {
      kind: "get",
      decorators: [_utils__WEBPACK_IMPORTED_MODULE_8__["flow"]],
      key: "originalRect",
      value: function originalRect() {
        var svg = this.svg;

        if (svg) {
          var bounds = svg.bounds,
              offset = this.pathOffset;

          var _this$offsetSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.offsetSize, 2),
              width = _this$offsetSize[0],
              height = _this$offsetSize[1],
              _this$attr = this.attr('anchor'),
              _this$attr2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(_this$attr, 2),
              anchorX = _this$attr2[0],
              anchorY = _this$attr2[1];

          var rect = [0, 0, width, height],
              offsetX = Math.min(0, bounds[0]),
              offsetY = Math.min(0, bounds[1]);
          rect[0] = offsetX - offset[0] - anchorX * (width + offsetX - 2 * offset[0]);
          rect[1] = offsetY - offset[1] - anchorY * (height + offsetY - 2 * offset[1]);
          return rect;
        }

        return _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Path.prototype), "originalRect", this);
      }
    }, {
      kind: "method",
      key: "pointCollision",
      value: function pointCollision(evt) {
        var bounding = this.attr('bounding');

        if (_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Path.prototype), "pointCollision", this).call(this, evt) || bounding !== 'auto' && bounding !== 'box' && bounding !== 'path' && bounding !== 0) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          if (offsetX == null && offsetY == null) return true;
          var svg = this.svg;

          if (svg) {
            var bounds = svg.bounds;
            offsetX += Math.min(0, bounds[0]);
            offsetY += Math.min(0, bounds[1]);
          }

          evt.targetPaths = this.findPath(offsetX, offsetY);

          if (bounding !== 'box' && !(bounding === 'auto' && (this.attr('borderWidth') > 0 || this.attr('bgcolor') || this.attr('gradients').bgcolor))) {
            return evt.targetPaths.length > 0;
          }

          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render(t, drawingContext) {
        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_1___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4___default()(Path.prototype), "render", this).call(this, t, drawingContext);

        var d = this.attr('d'),
            lineWidth = this.attr('lineWidth'),
            lineCap = this.attr('lineCap'),
            lineJoin = this.attr('lineJoin'),
            lineDash = this.attr('lineDash'),
            flexible = this.attr('flexible');

        if (d) {
          var svg = this.svg;

          var _svg$bounds = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(svg.bounds, 4),
              ox = _svg$bounds[0],
              oy = _svg$bounds[1],
              ow = _svg$bounds[2],
              oh = _svg$bounds[3];

          var _this$pathOffset = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.pathOffset, 2),
              px = _this$pathOffset[0],
              py = _this$pathOffset[1];

          var _this$contentSize = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_0___default()(this.contentSize, 2),
              w = _this$contentSize[0],
              h = _this$contentSize[1];

          if ((w < ow || h < oh) && this.attr('clipOverflow')) {
            drawingContext.beginPath();
            drawingContext.rect(0, 0, w, h);
            drawingContext.clip();
          }

          if (flexible) {
            svg.save();
            var sw = w / (ow - Math.min(0, ox) + 2 * px);
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
            var lineDashOffset = this.attr('lineDashOffset');
            drawingContext.lineDashOffset = lineDashOffset;
          }

          var fillColor = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["findColor"])(drawingContext, this, 'fillColor');

          if (fillColor) {
            drawingContext.fillStyle = fillColor;
          }

          var strokeColor = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["findColor"])(drawingContext, this, 'strokeColor');

          if (!strokeColor && !fillColor) {
            strokeColor = Object(_utils__WEBPACK_IMPORTED_MODULE_8__["parseColorString"])('black');
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
    }]
  };
}, _basesprite__WEBPACK_IMPORTED_MODULE_9__["default"]);



/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return use; });
var installed = new WeakMap();

var _merged = Symbol('merged');

var target = null;
function use(plugin) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

  if (!target) {
    target = Object.assign({}, this);
    target.__spritejs = this; // target.use = use.bind(target);

    target.use = function (plugin) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var merge = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return use.call(target, plugin, options, merge);
    };
  }

  if (typeof options === 'boolean') {
    merge = options;
    options = null;
  }

  if (installed.has(plugin)) {
    var _ret = installed.get(plugin);

    if (merge && !_ret[_merged]) {
      Object.assign(target, _ret);
      _ret[_merged] = true;
    }

    return _ret;
  }

  var install = plugin.install || plugin;
  var ret = install.call(plugin, target, options) || {};
  installed.set(plugin, ret);

  if (merge) {
    Object.assign(target.__spritejs, ret);
    ret[_merged] = true;
  }

  return ret;
}

/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);



var _loadBgImagePassport = Symbol('loadBgImagePassport');

_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"].prototype.loadBgImage = function (val) {
  var _this = this;

  var res;

  if (val.id) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture({
      id: val.id
    });
  } else if (val.src) {
    res = _resource__WEBPACK_IMPORTED_MODULE_1__["default"].loadTexture(val.src);
  }

  if (res instanceof Promise) {
    var passport = Symbol('passport');
    this[_loadBgImagePassport] = passport;
    res.then(function (_ref) {
      var img = _ref.img,
          texture = _ref.texture;

      if (passport === _this[_loadBgImagePassport]) {
        var bgimage = _this.attr('bgimage');

        bgimage.image = img;

        _this.attr('bgimage', null);

        _this.attr('bgimage', bgimage);
      }
    });
  } else if (res) {
    val.image = res.img;
  }

  return val;
};

/* harmony default export */ __webpack_exports__["default"] = (_spritejs_core__WEBPACK_IMPORTED_MODULE_0__["BaseSprite"]);

/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(75);




var axios = __webpack_require__(76);

var loadedResources = new Map();
/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

var Resource = {
  loadTimeout: 30000,
  loadedResources: loadedResources,
  loadTexture: function loadTexture(texture) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Resource.loadTimeout;

    if (typeof texture === 'string') {
      texture = {
        src: texture
      };
    }

    if (!texture.id) {
      texture.id = texture.src;
    }

    var mapKey = texture.id;

    if (!loadedResources.has(mapKey)) {
      var promise = new Promise(function (resolve, reject) {
        var timer = setTimeout(function () {
          reject(new Error('load img timeout'));
        }, timeout);
        Object(_platform__WEBPACK_IMPORTED_MODULE_2__["loadImage"])(texture.src).then(function (img) {
          // save image not canvas for svg preserveAspectRatio
          resolve({
            img: img,
            texture: texture,
            fromCache: false
          });
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
      loadedResources.set(mapKey, promise);
      return promise;
    }

    var img = loadedResources.get(mapKey);

    if (img instanceof Promise) {
      return img.then(function (res) {
        return {
          img: res.img,
          texture: texture,
          fromCache: false
        };
      });
    }

    return {
      img: img,
      texture: texture,
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
  loadFrames: function loadFrames(src, frameData) {
    var texture, frames;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function loadFrames$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof frameData === 'string')) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(axios.get(frameData));

          case 3:
            frameData = _context.sent;
            frameData = frameData.data;

          case 5:
            _context.next = 7;
            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.loadTexture(src));

          case 7:
            texture = _context.sent;
            frames = frameData.frames;
            Object.entries(frames).forEach(function (_ref) {
              var _ref2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_ref, 2),
                  key = _ref2[0],
                  frame = _ref2[1];

              var _frame$sourceSize = frame.sourceSize,
                  w = _frame$sourceSize.w,
                  h = _frame$sourceSize.h;
              var canvas = Object(_platform__WEBPACK_IMPORTED_MODULE_2__["createCanvas"])(w, h),
                  srcRect = frame.frame,
                  rect = frame.spriteSourceSize,
                  context = canvas.getContext('2d');
              var rotated = frame.rotated;
              context.save();

              if (rotated) {
                context.translate(0, h);
                context.rotate(-0.5 * Math.PI);
                var tmp = rect.y;
                rect.y = rect.x;
                rect.x = h - srcRect.h - tmp;
                context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.h, srcRect.w, rect.x, rect.y, rect.h, rect.w);
              } else {
                context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.w, srcRect.h, rect.x, rect.y, rect.w, rect.h);
              }

              context.restore();
              loadedResources.set(key, canvas);
            });
            return _context.abrupt("return", texture);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
};
/* harmony default export */ __webpack_exports__["default"] = (Resource);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(74);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 75 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCanvas", function() { return createCanvas; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadImage", function() { return loadImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getContainer", function() { return getContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shim", function() { return shim; });
function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}
function loadImage(src) {
  var img = document.createElement('img');

  if (typeof src === 'string' && !/^data:image\/(.*);base64/.test(src)) {
    // base64 dont need crossOrigin - fix early webkit cross domain bug
    img.crossOrigin = 'anonymous';
  }

  var promise = new Promise(function (resolve) {
    img.addEventListener('load', function () {
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
    var CustomEvent = function CustomEvent(event, params) {
      params = params || {
        bubbles: false,
        cancelable: false,
        detail: undefined
      };
      var evt = document.createEvent('CustomEvent');
      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;
    window.CustomEvent = CustomEvent;
  }
}

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(77);

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);
var bind = __webpack_require__(79);
var Axios = __webpack_require__(81);
var mergeConfig = __webpack_require__(99);
var defaults = __webpack_require__(87);

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
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(100);
axios.CancelToken = __webpack_require__(101);
axios.isCancel = __webpack_require__(86);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(102);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(79);
var isBuffer = __webpack_require__(80);

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
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
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
  if (typeof obj !== 'object') {
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
 * Function equal to merge with the difference being that no reference
 * to original objects is kept.
 *
 * @see merge
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function deepMerge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (typeof result[key] === 'object' && typeof val === 'object') {
      result[key] = deepMerge(result[key], val);
    } else if (typeof val === 'object') {
      result[key] = deepMerge({}, val);
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
  deepMerge: deepMerge,
  extend: extend,
  trim: trim
};


/***/ }),
/* 79 */
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
/* 80 */
/***/ (function(module, exports) {

/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */

module.exports = function isBuffer (obj) {
  return obj != null && obj.constructor != null &&
    typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
}


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);
var buildURL = __webpack_require__(82);
var InterceptorManager = __webpack_require__(83);
var dispatchRequest = __webpack_require__(84);
var mergeConfig = __webpack_require__(99);

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
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);
  config.method = config.method ? config.method.toLowerCase() : 'get';

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

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
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
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

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
      } else {
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
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

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
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);
var transformData = __webpack_require__(85);
var isCancel = __webpack_require__(86);
var defaults = __webpack_require__(87);
var isAbsoluteURL = __webpack_require__(97);
var combineURLs = __webpack_require__(98);

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

  // Support baseURL config
  if (config.baseURL && !isAbsoluteURL(config.url)) {
    config.url = combineURLs(config.baseURL, config.url);
  }

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
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

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
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(78);
var normalizeHeaderName = __webpack_require__(89);

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
  // Only Node.JS has a process variable that is of [[Class]] process
  if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(90);
  } else if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(90);
  }
  return adapter;
}

var defaults = {
  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
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

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(88)))

/***/ }),
/* 88 */
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
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);
var settle = __webpack_require__(91);
var buildURL = __webpack_require__(82);
var parseHeaders = __webpack_require__(94);
var isURLSameOrigin = __webpack_require__(95);
var createError = __webpack_require__(92);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

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
    request.onreadystatechange = function handleLoad() {
      if (!request || request.readyState !== 4) {
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
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    };

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

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
      var cookies = __webpack_require__(96);

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


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(92);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!validateStatus || validateStatus(response.status)) {
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
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(93);

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
/* 93 */
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
  error.isAxiosError = true;

  error.toJSON = function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

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
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

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
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

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
/* 97 */
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
/* 98 */
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
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(78);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  utils.forEach(['url', 'method', 'params', 'data'], function valueFromConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    }
  });

  utils.forEach(['headers', 'auth', 'proxy'], function mergeDeepProperties(prop) {
    if (utils.isObject(config2[prop])) {
      config[prop] = utils.deepMerge(config1[prop], config2[prop]);
    } else if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (utils.isObject(config1[prop])) {
      config[prop] = utils.deepMerge(config1[prop]);
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  utils.forEach([
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'maxContentLength',
    'validateStatus', 'maxRedirects', 'httpAgent', 'httpsAgent', 'cancelToken',
    'socketPath'
  ], function defaultToConfig2(prop) {
    if (typeof config2[prop] !== 'undefined') {
      config[prop] = config2[prop];
    } else if (typeof config1[prop] !== 'undefined') {
      config[prop] = config1[prop];
    }
  });

  return config;
};


/***/ }),
/* 100 */
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
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(100);

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
/* 102 */
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
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(41);
/* harmony import */ var _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(72);









var attr = _spritejs_core__WEBPACK_IMPORTED_MODULE_7__["utils"].attr;
var generateID = _spritejs_core__WEBPACK_IMPORTED_MODULE_7__["utils"].generateID;

var _mapTextures = Symbol('mapTextures'),
    _loadTexturePassport = Symbol('loadTexturePassport');

var ResAttr = _babel_runtime_helpers_decorate__WEBPACK_IMPORTED_MODULE_4___default()(null, function (_initialize, _Sprite$Attr) {
  var ResAttr =
  /*#__PURE__*/
  function (_Sprite$Attr2) {
    _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_3___default()(ResAttr, _Sprite$Attr2);

    function ResAttr() {
      var _getPrototypeOf2;

      var _this;

      _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, ResAttr);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_1___default()(this, (_getPrototypeOf2 = _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ResAttr)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2___default()(_this));

      return _this;
    }

    return ResAttr;
  }(_Sprite$Attr);

  return {
    F: ResAttr,
    d: [{
      kind: "set",
      decorators: [attr({
        value: []
      })],
      key: "textures",
      value:
      /*
        {
          id: ...,   //auto generate id
          src: ...,   //texture path
          image: ..., //texture resource
          srcRect: ...,  //texture clip
          rect: ....,  //texture in sprite offset
          filter: ...  //texture filters
        }
       */
      function textures(_textures) {
        if (!Array.isArray(_textures)) {
          _textures = [_textures];
        }

        _textures = _textures.map(function (texture) {
          if (typeof texture === 'string') {
            texture = {
              src: texture
            };
          } else if (!texture.src && !texture.id && !texture.image) {
            var id = generateID(texture);
            _resource__WEBPACK_IMPORTED_MODULE_8__["default"].loadedResources.set(id, texture);
            texture = {
              image: texture,
              id: id
            };
          } else if (texture.nodeType === 1) {
            texture = {
              image: texture,
              src: texture.src
            };
          }

          return texture;
        });
        this.set('textures', _textures);
        this.loadTextures(_textures);
      }
    }, {
      kind: "method",
      key: _mapTextures,
      value: function value(textures) {
        var clearCache = false;
        var res = textures.map(function (_ref) {
          var img = _ref.img,
              texture = _ref.texture,
              fromCache = _ref.fromCache;
          if (!fromCache) clearCache = true;
          return Object.assign({}, texture, {
            image: img
          });
        });

        if (clearCache) {
          // async loaded images
          this.subject.forceUpdate(true);
        }

        _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_6___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default()(ResAttr.prototype), "loadTextures", this).call(this, res);
      }
    }, {
      kind: "method",
      key: "loadTextures",
      value: function loadTextures(textures) {
        var _this2 = this;

        // adaptive textures
        var passport = Symbol('passport');
        this[_loadTexturePassport] = passport;
        var hasPromise = false;
        var tasks = textures.map(function (texture) {
          if (texture.image) {
            return {
              img: texture.image,
              texture: texture,
              fromCache: true
            };
          }

          var loadingTexture = _resource__WEBPACK_IMPORTED_MODULE_8__["default"].loadTexture(texture);

          if (loadingTexture instanceof Promise) {
            hasPromise = true;
          }

          return loadingTexture;
        });

        if (hasPromise) {
          Promise.all(tasks).then(function (res) {
            if (_this2[_loadTexturePassport] === passport) {
              // prevent multicall loadTextures
              _this2[_mapTextures](res);
            }
          });
        } else {
          // if preload image, calculate the size of sprite synchronously
          this[_mapTextures](tasks);
        }
      }
    }]
  };
}, _spritejs_core__WEBPACK_IMPORTED_MODULE_7__["Sprite"].Attr);

_spritejs_core__WEBPACK_IMPORTED_MODULE_7__["Sprite"].Attr = ResAttr;
/* harmony default export */ __webpack_exports__["default"] = (_spritejs_core__WEBPACK_IMPORTED_MODULE_7__["Sprite"]);

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(37);
/* harmony import */ var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(75);













var _resolution = Symbol('resolution');

var _attrs = Symbol('attrs');

var _displayRatio = Symbol('displayRatio');

var ExLayer =
/*#__PURE__*/
function (_Layer) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(ExLayer, _Layer);

  function ExLayer(id) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_4___default()(this, ExLayer);

    if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_3___default()(id) === 'object') {
      opts = id;
      id = opts.id || "id_".concat(Math.random().toString().slice(2, 10));
    }

    var _opts = opts,
        context = _opts.context,
        resolution = _opts.resolution,
        _opts$handleEvent = _opts.handleEvent,
        handleEvent = _opts$handleEvent === void 0 ? true : _opts$handleEvent,
        _opts$evaluateFPS = _opts.evaluateFPS,
        evaluateFPS = _opts$evaluateFPS === void 0 ? false : _opts$evaluateFPS,
        _opts$renderMode = _opts.renderMode,
        renderMode = _opts$renderMode === void 0 ? 'repaintAll' : _opts$renderMode,
        _opts$autoRender = _opts.autoRender,
        autoRender = _opts$autoRender === void 0 ? true : _opts$autoRender,
        _opts$useDocumentCSS = _opts.useDocumentCSS,
        useDocumentCSS = _opts$useDocumentCSS === void 0 ? false : _opts$useDocumentCSS;
    context = context || Object(_platform__WEBPACK_IMPORTED_MODULE_11__["createCanvas"])().getContext('2d');
    var canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';
    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_6___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(ExLayer).call(this, {
      context: context,
      evaluateFPS: evaluateFPS,
      renderMode: renderMode,
      autoRender: autoRender,
      useDocumentCSS: useDocumentCSS
    }));
    _this.handleEvent = handleEvent;

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('mouseleave', function (evt) {
        // fixed mouseleave outof range
        var layers = _this.parent ? _this.parent.sortedChildNodes : [_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_8___default()(_this)];

        var _evt$target$getBoundi = evt.target.getBoundingClientRect(),
            left = _evt$target$getBoundi.left,
            top = _evt$target$getBoundi.top;

        var clientX = evt.clientX,
            clientY = evt.clientY;
        var originalX = Math.round((clientX | 0) - left);
        var originalY = Math.round((clientY | 0) - top);

        var _this$toLocalPos = _this.toLocalPos(originalX, originalY),
            _this$toLocalPos2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_this$toLocalPos, 2),
            x = _this$toLocalPos2[0],
            y = _this$toLocalPos2[1];

        layers.forEach(function (layer) {
          if (layer.handleEvent) {
            layer.dispatchEvent('mouseleave', {
              originalEvent: evt,
              layerX: x,
              layerY: y,
              originalX: originalX,
              originalY: originalY,
              x: x,
              y: y
            });
          }
        });
      });
    }

    if (resolution) {
      _this._userInitResolution = true;
      _this.resolution = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(resolution), [0, 0]);
    } else {
      _this[_resolution] = [_this.canvas.width, _this.canvas.height, 0, 0];
    }

    _this[_attrs] = new Set(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
    return _this;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_5___default()(ExLayer, [{
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX | 0,
            layerY = evt.layerY | 0;

        var _this$resolution = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(this.resolution, 4),
            width = _this$resolution[0],
            height = _this$resolution[1],
            offsetLeft = _this$resolution[2],
            offsetTop = _this$resolution[3];

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
  }, {
    key: "setDisplayRatio",
    value: function setDisplayRatio(ratio) {
      var maxDisplayRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var updateDisplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (typeof ratio === 'string') {
        if (ratio.endsWith('rw')) {
          ratio = parseFloat(ratio);
        } else if (ratio.endsWith('vw')) {
          ratio = parseFloat(ratio) * this.viewport[0] / this.resolution[0];
        } else if (ratio === 'auto') {
          if (typeof window !== 'undefined' && window.devicePixelRatio) {
            ratio = window.devicePixelRatio * this.viewport[0] / this.resolution[0];
          } else {
            ratio = this.viewport[0] / this.resolution[0];
          }
        } else {
          ratio = parseFloat(ratio);
        }
      }

      if (Number.isFinite(ratio)) {
        ratio = Math.min(ratio, maxDisplayRatio);
      } else {
        ratio = 1;
      }

      this[_displayRatio] = ratio;
      if (updateDisplay) this.updateDisplay();
      this.dispatchEvent('ratioChange', {
        target: this
      }, true, true);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var _this2 = this;

      var ratio = this[_displayRatio];
      var resolution = this[_resolution];

      var _resolution$map = resolution.map(function (r) {
        return r * ratio;
      }),
          _resolution$map2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(_resolution$map, 4),
          width = _resolution$map2[0],
          height = _resolution$map2[1],
          offsetLeft = _resolution$map2[2],
          offsetTop = _resolution$map2[3];

      var outputCanvas = this.outputContext.canvas;
      outputCanvas.width = width;
      outputCanvas.height = height; // this.outputContext.clearRect(0, 0, width, height);

      if (offsetLeft || offsetTop) {
        this.outputContext.translate(offsetLeft, offsetTop);
      }

      this.beforeDrawTransform = function () {
        _this2.outputContext.scale(ratio, ratio);
      };

      this.childNodes.forEach(function (child) {
        delete child.lastRenderBox;
        child.forceUpdate();
      });
    }
  }, {
    key: "toLocalPos",
    value: function toLocalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;
      x = x * resolution[0] / viewport[0] - resolution[2];
      y = y * resolution[1] / viewport[1] - resolution[3];
      return [x, y];
    }
  }, {
    key: "toGlobalPos",
    value: function toGlobalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;
      x = x * viewport[0] / resolution[0] + resolution[2];
      y = y * viewport[1] / resolution[1] + resolution[3];
      return [x, y];
    }
  }, {
    key: "clearContext",
    value: function clearContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputContext;

      if (context.canvas) {
        var _context$canvas = context.canvas,
            width = _context$canvas.width,
            height = _context$canvas.height;
        var resolution = this.resolution;
        context.clearRect(-(resolution[2] | 0), -(resolution[3] | 0), width, height);
      }
    }
  }, {
    key: "takeSnapshot",
    value: function takeSnapshot() {
      var snapshotCanvas, context, children;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function takeSnapshot$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(this.prepareRender());

            case 2:
              snapshotCanvas = this.canvas.cloneNode(true), context = snapshotCanvas.getContext('2d');
              context.drawImage(this.canvas, 0, 0);
              children = this.childNodes.map(function (child) {
                return child.serialize();
              });
              return _context.abrupt("return", {
                context: context,
                children: children
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "putSnapshot",
    value: function putSnapshot(snapshot) {
      var _this3 = this;

      var outputContext = this.outputContext;
      this.clearContext(outputContext);
      outputContext.drawImage(snapshot.context.canvas, 0, 0);
      snapshot.children.forEach(function (child) {
        var node = Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_10__["createNode"])(child.nodeType);

        if (child.id) {
          node.id = child.id;
        }

        node.attr(JSON.parse(child.attrs));

        _this3.appendChild(node, false);
      });

      for (var i = 0; i < this.childNodes.length; i++) {
        var child = this.childNodes[i];
        child.dispatchEvent('update', {
          target: child,
          context: child.context,
          renderBox: child.renderBox,
          lastRenderBox: child.lastRenderBox
        }, true);
        child.lastRenderBox = child.renderBox;
      }

      return this.childNodes;
    }
  }, {
    key: "id",
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: "resolution",
    get: function get() {
      return this[_resolution];
    },
    set: function set(resolution) {
      this[_resolution] = [].concat(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1___default()(resolution), [0, 0]).slice(0, 4);

      if (this[_displayRatio] == null) {
        if (this.parent && this.parent.displayRatio) {
          this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
        } else {
          this[_displayRatio] = 1.0;
        }
      }

      this.updateDisplay();
      this.dispatchEvent('resolutionChange', {
        target: this
      }, true, true);
    }
  }, {
    key: "viewport",
    get: function get() {
      var canvas = this.canvas;

      if (canvas) {
        if (canvas.getBoundingClientRect) {
          var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
              _width = _canvas$getBoundingCl.width,
              _height = _canvas$getBoundingCl.height;

          if (_width > 0) {
            return [_width, _height];
          }
        }

        if (canvas.clientWidth) return [canvas.clientWidth, canvas.clientHeight];
      }

      if (this.parent) {
        return this.parent.layerViewport;
      }

      var _this$_resolution = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(this[_resolution], 2),
          width = _this$_resolution[0],
          height = _this$_resolution[1];

      return [width, height];
    }
  }, {
    key: "offset",
    get: function get() {
      return [this.resolution[2], this.resolution[3]];
    }
  }, {
    key: "center",
    get: function get() {
      var _this$resolution2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_2___default()(this.resolution, 2),
          width = _this$resolution2[0],
          height = _this$resolution2[1];

      return [width / 2, height / 2];
    }
  }, {
    key: "displayRatio",
    get: function get() {
      return this[_displayRatio];
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.attr('zIndex');
    },
    set: function set(zIndex) {
      this.attr('zIndex', zIndex);
      this.canvas.style.zIndex = zIndex;
      this.parent.layers.reverse();
    }
  }]);

  return ExLayer;
}(_spritejs_core__WEBPACK_IMPORTED_MODULE_10__["Layer"]);

/* harmony default export */ __webpack_exports__["default"] = (ExLayer);

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Scene; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5);
/* harmony import */ var _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(14);
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(10);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(36);
/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(38);
/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(44);
/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45);
/* harmony import */ var _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(39);
/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _spritejs_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1);
/* harmony import */ var _layer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(104);
/* harmony import */ var _resource__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(72);
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(75);
/* harmony import */ var _platform_devtools__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(106);















var setDeprecation = _spritejs_core__WEBPACK_IMPORTED_MODULE_10__["utils"].setDeprecation,
    sortOrderedSprites = _spritejs_core__WEBPACK_IMPORTED_MODULE_10__["utils"].sortOrderedSprites;

var _layerMap = Symbol('layerMap'),
    _zOrder = Symbol('zOrder'),
    _layers = Symbol('layers'),
    _snapshot = Symbol('snapshot'),
    _viewport = Symbol('viewport'),
    _resolution = Symbol('resolution'),
    _resizeHandler = Symbol('resizeHandler'),
    _attrs = Symbol('attrs'),
    _events = Symbol('events'),
    _subscribe = Symbol('subscribe'),
    _displayRatio = Symbol('displayRatio');

var Scene =
/*#__PURE__*/
function (_BaseNode) {
  _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_9___default()(Scene, _BaseNode);

  function Scene(container) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, Scene);

    _this = _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_5___default()(this, _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Scene).call(this));
    container = Object(_platform__WEBPACK_IMPORTED_MODULE_13__["getContainer"])(container);
    _this.container = container;
    container.scene_ = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this);
    /* istanbul ignore if */

    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */

      options = {
        viewport: [arguments[1], arguments[2]]
      };
      /* eslint-enabel prefer-rest-params */
    }

    _this[_zOrder] = 0;
    _this[_layerMap] = {};
    _this[_layers] = [];
    _this[_snapshot] = Object(_platform__WEBPACK_IMPORTED_MODULE_13__["createCanvas"])();
    var viewport = options.viewport || ['', ''];
    _this.viewport = viewport; // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend

    _this.stickMode = options.stickMode || 'scale';
    _this.stickExtend = !!options.stickExtend;
    _this.stickOffset = [0, 0];
    _this.resolution = options.resolution || _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(_this.viewport);
    _this.maxDisplayRatio = options.maxDisplayRatio || Infinity;
    _this.displayRatio = options.displayRatio || 1.0; // d3-friendly

    _this.namespaceURI = 'http://spritejs.org/scene';

    var that = _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this);

    Object.defineProperty(_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6___default()(_this), 'ownerDocument', {
      get: function get() {
        return {
          createElementNS: function createElementNS(uri, name) {
            return that.layer(name);
          },
          documentElement: typeof document !== 'undefined' ? document : null
        };
      }
    });
    _this[_events] = new Set();
    var events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'click', 'dblclick'];
    events.forEach(function (event) {
      return _this.delegateEvent(event);
    });
    /* istanbul ignore next */

    container.addEventListener('DOMNodeRemovedFromDocument', function () {
      if (_this[_resizeHandler]) {
        window.removeEventListener('resize', _this[_resizeHandler]);
        delete _this[_resizeHandler];
      }
    });
    _this[_attrs] = new Set(['resolution', 'viewport', 'stickMode', 'stickExtend', 'subscribe', 'displayRatio', 'maxDisplayRatio']);
    _this[_subscribe] = null;
    return _this;
  } // unit vw、rw (default 1rw ?)


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(Scene, [{
    key: "insertBefore",
    value: function insertBefore(newchild, refchild) {
      var _this2 = this;

      if (refchild == null) {
        return this.appendLayer(newchild);
      }

      if (!this.hasLayer(refchild)) {
        throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
      }

      this.appendLayer(newchild, false);
      this.container.insertBefore(newchild.canvas || newchild, refchild.canvas || refchild);
      var els = this.container.children;

      _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(els).forEach(function (el, i) {
        var id = el.dataset.layerId;

        if (id) {
          var layer = _this2.layer(id);

          delete layer.zOrder;
          Object.defineProperty(layer, 'zOrder', {
            value: i,
            writable: false,
            configurable: true
          });
        }
      });

      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newLayer, oldLayer) {
      this.insertBefore(newLayer, oldLayer);
      this.removeChild(oldLayer);
    }
  }, {
    key: "appendChild",
    value: function appendChild(layer) {
      return this.appendLayer(layer);
    }
  }, {
    key: "removeChild",
    value: function removeChild(layer) {
      return this.removeLayer(layer);
    }
  }, {
    key: "updateViewport",
    value: function updateViewport(layer) {
      var _this3 = this;

      var _this$layerViewport = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.layerViewport, 2),
          width = _this$layerViewport[0],
          height = _this$layerViewport[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      var layers = layer ? [layer] : this[_layers];
      layers = layers.filter(function (layer) {
        var canvas = layer.canvas;
        if (!canvas) return false; // ignore not canvas layer

        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
        Object.assign(canvas.style, {
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
          canvas.style.webkitTransform = 'translate(-50%, -50%)';
        } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
          canvas.style.right = '0';
          canvas.style.bottom = '0';
        } else {
          canvas.style.top = '0';
          canvas.style.left = '0';
        }

        if (stickExtend && !layer._userInitResolution) {
          layer.resolution = _this3.layerResolution;
        }

        return true;
      });
      this.dispatchEvent('viewportChange', {
        target: this,
        layers: layers
      });
      return this;
    }
  }, {
    key: "updateResolution",
    value: function updateResolution(layer) {
      var _this4 = this;

      var layers = layer ? [layer] : this[_layers];
      layers.forEach(function (layer) {
        if (layer.canvas && !layer._userInitResolution) {
          layer.resolution = _this4.layerResolution;
        }
      });
      this.dispatchEvent('resolutionChange', {
        target: this,
        layers: layers
      });
      return this;
    }
  }, {
    key: "setViewport",
    value: function setViewport(width, height) {
      this.viewport = [width, height];
      return this;
    }
  }, {
    key: "setResolution",
    value: function setResolution(width, height) {
      this.resolution = [width, height];
      return this;
    }
  }, {
    key: "delegateEvent",
    value: function delegateEvent(event) {
      var _this5 = this;

      var receiver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;

      if (typeof event === 'string') {
        event = {
          type: event,
          passive: true
        };
      }

      if (this[_events].has(event.type)) {
        return false;
      }

      this[_events].add(event.type);

      var _event = event,
          type = _event.type,
          passive = _event.passive;
      receiver.addEventListener(type, function (e) {
        var layers = _this5[_layers];
        var evtArgs = {
          originalEvent: e,
          type: type,
          stopDispatch: function stopDispatch() {
            this.terminated = true;
          }
        }; // mouse event layerX, layerY value change while browser scaled.

        var x, y;
        var originalCoordinates = [];
        /* istanbul ignore else */

        if (e instanceof CustomEvent) {
          Object.assign(evtArgs, e.detail);

          if (evtArgs.x != null && evtArgs.y != null) {
            x = evtArgs.x;
            y = evtArgs.y;
            originalCoordinates.push({
              x: null,
              y: null
            });
          } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
            originalCoordinates.push({
              x: evtArgs.originalX,
              y: evtArgs.originalY
            });
          }
        } else {
          var _e$target$getBounding = e.target.getBoundingClientRect(),
              left = _e$target$getBounding.left,
              top = _e$target$getBounding.top;

          var pointers = e.changedTouches || [e];

          for (var i = 0; i < pointers.length; i++) {
            var pointer = pointers[i];
            var identifier = pointer.identifier;
            var clientX = pointer.clientX,
                clientY = pointer.clientY;

            if (clientX != null && clientY != null) {
              originalCoordinates.push({
                x: Math.round((clientX | 0) - left),
                y: Math.round((clientY | 0) - top),
                identifier: identifier
              });
            }
          }
        }

        if (originalCoordinates.length <= 0) originalCoordinates.push({
          x: x,
          y: y
        });
        originalCoordinates.forEach(function (originalCoordinate) {
          for (var _i = 0; _i < layers.length; _i++) {
            var layer = layers[_i];

            if (layer.handleEvent) {
              if (originalCoordinate.x != null && originalCoordinate.y != null) {
                var _layer$toLocalPos = layer.toLocalPos(originalCoordinate.x, originalCoordinate.y);

                var _layer$toLocalPos2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_layer$toLocalPos, 2);

                x = _layer$toLocalPos2[0];
                y = _layer$toLocalPos2[1];
              } else if (x != null && y != null) {
                var _layer$toGlobalPos = layer.toGlobalPos(x, y);

                var _layer$toGlobalPos2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_layer$toGlobalPos, 2);

                originalCoordinate.x = _layer$toGlobalPos2[0];
                originalCoordinate.y = _layer$toGlobalPos2[1];
              }

              var evt = Object.assign({}, evtArgs, {
                layerX: x,
                layerY: y,
                originalX: originalCoordinate.x,
                originalY: originalCoordinate.y,
                x: x,
                y: y,
                identifier: originalCoordinate.identifier
              });
              layer.dispatchEvent(type, evt);
              if (evt.terminated) break;
            }
          }
        });
      }, {
        passive: passive
      });
      return true;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type) {
      var evt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var container = this.container;
      container.dispatchEvent(new CustomEvent(type, {
        detail: evt
      }));

      _babel_runtime_helpers_get__WEBPACK_IMPORTED_MODULE_8___default()(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_7___default()(Scene.prototype), "dispatchEvent", this).call(this, type, evt, true);
    }
  }, {
    key: "preload",
    value: function preload() {
      var _this6 = this;

      var _len,
          resources,
          _key,
          ret,
          tasks,
          i,
          res,
          task,
          id,
          src,
          _args = arguments;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function preload$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              for (_len = _args.length, resources = new Array(_len), _key = 0; _key < _len; _key++) {
                resources[_key] = _args[_key];
              }

              ret = [], tasks = [];

              for (i = 0; i < resources.length; i++) {
                res = resources[i];
                task = void 0;

                if (typeof res === 'string') {
                  task = _resource__WEBPACK_IMPORTED_MODULE_12__["default"].loadTexture(res);
                } else if (Array.isArray(res)) {
                  task = _resource__WEBPACK_IMPORTED_MODULE_12__["default"].loadFrames.apply(_resource__WEBPACK_IMPORTED_MODULE_12__["default"], _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_2___default()(res));
                } else {
                  id = res.id, src = res.src;
                  task = _resource__WEBPACK_IMPORTED_MODULE_12__["default"].loadTexture({
                    id: id,
                    src: src
                  });
                }
                /* istanbul ignore if  */


                if (!(task instanceof Promise)) {
                  task = Promise.resolve(task);
                }

                tasks.push(task.then(function (r) {
                  ret.push(r);

                  _this6.dispatchEvent('preload', {
                    target: _this6,
                    current: r,
                    loaded: ret,
                    resources: resources
                  });
                }));
              }

              _context.next = 5;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(tasks));

            case 5:
              return _context.abrupt("return", ret);

            case 6:
            case "end":
              return _context.stop();
          }
        }
      });
    }
  }, {
    key: "layer",
    value: function layer() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handleEvent: true
      };

      if (!this.hasLayer(id)) {
        /* istanbul ignore if  */
        if (typeof window !== 'undefined' && window.getComputedStyle) {
          var pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

          if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
            this.container.style.position = 'relative';
          }
        }

        this.appendLayer(new _layer__WEBPACK_IMPORTED_MODULE_11__["default"](id, opts));
      }

      return this[_layerMap][id];
    }
  }, {
    key: "appendLayer",
    value: function appendLayer(layer) {
      var appendDOMElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(layer instanceof _layer__WEBPACK_IMPORTED_MODULE_11__["default"])) {
        // append dom element
        layer.id = layer.id || "_layer".concat(Math.random());

        if (!layer.dataset) {
          layer.dataset = {};
        }

        layer.dataset.layerId = layer.id; // fixed layer replacer

        layer.connect = function (parent, zOrder) {
          layer.parent = parent;
          Object.defineProperty(layer, 'zOrder', {
            value: zOrder,
            writable: false,
            configurable: true
          });
        };

        layer.disconnect = function (parent) {
          delete layer.zOrder;
        };
      }

      var id = layer.id;

      if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
        throw new Error("layer ".concat(id, " already exists! remove first..."));
      }

      this.removeLayer(layer);
      this[_layerMap][id] = layer;
      layer.connect(this, this[_zOrder]++);
      this.updateViewport(layer); // layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);

      if (!this.stickExtend && !layer._userInitResolution) {
        layer.resolution = this.layerResolution;
      }

      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
      /* istanbul ignore if  */

      if (_platform_devtools__WEBPACK_IMPORTED_MODULE_14__["setDebugToolsObserver"] && layer.id !== '__debuglayer__') {
        Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_14__["setDebugToolsObserver"])(this, layer);
      }

      if (appendDOMElement) this.container.appendChild(layer.canvas || layer);
      return layer;
    }
  }, {
    key: "removeLayer",
    value: function removeLayer(layer) {
      if (typeof layer === 'string') {
        layer = this[_layerMap][layer];
      }

      if (this.hasLayer(layer)) {
        layer.disconnect(this);
        this.container.removeChild(layer.canvas || layer);
        delete this[_layerMap][layer.id];
        this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
        /* istanbul ignore if  */

        if (_platform_devtools__WEBPACK_IMPORTED_MODULE_14__["removeDebugToolsObserver"]) {
          Object(_platform_devtools__WEBPACK_IMPORTED_MODULE_14__["removeDebugToolsObserver"])(layer);
        }

        return layer;
      }

      return null;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer(layer) {
      var layerID;

      if (typeof layer === 'string') {
        layerID = layer;
        layer = this[_layerMap][layer];
      } else {
        layerID = layer.id;
      }

      return layer && this[_layerMap][layerID] === layer;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      return Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_10__["querySelector"])(selector, this);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return Object(_spritejs_core__WEBPACK_IMPORTED_MODULE_10__["querySelectorAll"])(selector, this);
    }
  }, {
    key: "snapshot",
    value: function snapshot() {
      var _this$viewport, width, height, canvas, _this$layerViewport2, sw, sh, layers, ctx, renderTasks, rect;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.async(function snapshot$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _this$viewport = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.viewport, 2), width = _this$viewport[0], height = _this$viewport[1];
              canvas = this[_snapshot];
              canvas.width = width;
              canvas.height = height;
              _this$layerViewport2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.layerViewport, 2), sw = _this$layerViewport2[0], sh = _this$layerViewport2[1];
              layers = this[_layers].slice(0).reverse();
              ctx = canvas.getContext('2d');
              renderTasks = layers.map(function (layer) {
                return layer.prepareRender();
              });
              _context2.next = 10;
              return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.awrap(Promise.all(renderTasks));

            case 10:
              rect = [0, 0, sw, sh];

              if (!this.stickExtend) {
                if (this.stickMode === 'width' || this.stickMode === 'height') {
                  rect[0] = (width - sw) / 2;
                  rect[1] = (height - sh) / 2;
                } else if (this.stickMode === 'bottom' || this.stickMode === 'right') {
                  rect[0] = width - sw;
                  rect[1] = height - sh;
                }
              }

              layers.forEach(function (layer) {
                if (layer.canvas) {
                  ctx.drawImage.apply(ctx, [layer.canvas].concat(rect));
                }
              });
              return _context2.abrupt("return", canvas);

            case 14:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "displayRatio",
    set: function set(value) {
      var _this7 = this;

      var oldRatio = this[_displayRatio];
      this[_displayRatio] = value;

      if (oldRatio != null && oldRatio !== value) {
        var layers = this[_layers];
        layers.forEach(function (layer) {
          if (layer.canvas) {
            layer.setDisplayRatio(_this7[_displayRatio], _this7.maxDisplayRatio);
          }
        });
        this.dispatchEvent('ratioChange', {
          target: this,
          layers: layers
        });
      }

      return this;
    },
    get: function get() {
      return this[_displayRatio];
    }
  }, {
    key: "subscribe",
    get: function get() {
      return this[_subscribe];
    },
    set: function set(events) {
      var _this8 = this;

      this[_subscribe] = events;
      events.forEach(function (event) {
        return _this8.delegateEvent(event);
      });
    }
  }, {
    key: "width",
    get: function get() {
      return this.viewport[0];
    }
  }, {
    key: "height",
    get: function get() {
      return this.viewport[1];
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(function (layer) {
        return layer.canvas;
      });
    }
  }, {
    key: "childNodes",
    get: function get() {
      return Object.values(this[_layerMap]);
    }
  }, {
    key: "sortedChildNodes",
    get: function get() {
      return this[_layers];
    }
  }, {
    key: "layerViewport",
    get: function get() {
      var _this$resolution = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.resolution, 2),
          rw = _this$resolution[0],
          rh = _this$resolution[1],
          _this$viewport2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.viewport, 2),
          vw = _this$viewport2[0],
          vh = _this$viewport2[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      var width = vw,
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
  }, {
    key: "distortion",
    get: function get()
    /* istanbul ignore next */
    {
      if (this.stickMode !== 'scale') {
        return 1.0;
      }

      var _this$resolution2 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.resolution, 2),
          rw = _this$resolution2[0],
          rh = _this$resolution2[1],
          _this$viewport3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.viewport, 2),
          vw = _this$viewport3[0],
          vh = _this$viewport3[1];

      var dw = rw === 'flex' ? 2 : rw / vw,
          dh = rh === 'flex' ? 2 : rh / vh;
      return dw / dh;
    }
  }, {
    key: "viewport",
    set: function set(viewport) {
      var _this9 = this;

      if (!Array.isArray(viewport)) viewport = [viewport, viewport];

      var _viewport2 = viewport,
          _viewport3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_viewport2, 2),
          width = _viewport3[0],
          height = _viewport3[1];

      this[_viewport] = [width, height];
      /* istanbul ignore next */

      if (width === 'auto' || height === 'auto') {
        if (!this[_resizeHandler]) {
          this[_resizeHandler] = function () {
            _this9.updateViewport();

            if (_this9.resolution[0] === 'flex' || _this9.resolution[1] === 'flex') {
              _this9.updateResolution();
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
    },
    get: function get() {
      var _this$_viewport = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this[_viewport], 2),
          width = _this$_viewport[0],
          height = _this$_viewport[1];

      if (width === '' || Number.isNaN(Number(width))) {
        width = this.container.clientWidth;
      }

      if (height === '' || Number.isNaN(Number(height))) {
        height = this.container.clientHeight;
      }

      return [width, height];
    }
  }, {
    key: "layerResolution",
    get: function get() {
      var _this$resolution3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.resolution, 2),
          rw = _this$resolution3[0],
          rh = _this$resolution3[1];

      var _this$viewport4 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(this.viewport, 2),
          vw = _this$viewport4[0],
          vh = _this$viewport4[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      if (rw === 'flex') {
        rw = 2 * vw;
      }

      if (rh === 'flex') {
        rh = 2 * vh;
      }

      var width = rw,
          height = rh,
          offsetTop = 0,
          offsetLeft = 0;

      if (stickExtend) {
        if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
          var vrh = rw * vh / vw;
          height = vrh;

          if (stickMode === 'width') {
            offsetTop = Math.round((vrh - rh) / 2);
          } else if (stickMode === 'bottom') {
            offsetTop = vrh - rh;
          }
        } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
          var vrw = rh * vw / vh;
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
  }, {
    key: "resolution",
    set: function set(resolution) {
      if (!Array.isArray(resolution)) {
        resolution = [resolution, resolution];
      }

      var _resolution2 = resolution,
          _resolution3 = _babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_1___default()(_resolution2, 2),
          width = _resolution3[0],
          height = _resolution3[1];

      this[_resolution] = [width, height];
      this.updateResolution();
    },
    get: function get() {
      return this[_resolution];
    }
  }, {
    key: "layers",
    get: function get() {
      return this[_layers];
    }
  }]);

  return Scene;
}(_spritejs_core__WEBPACK_IMPORTED_MODULE_10__["BaseNode"]);



/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_debugger", function() { return _debugger; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setDebugToolsObserver", function() { return setDebugToolsObserver; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDebugToolsObserver", function() { return removeDebugToolsObserver; });
var _debugger = null;
var setDebugToolsObserver = null;
var removeDebugToolsObserver = null;

/***/ })
/******/ ]);
});