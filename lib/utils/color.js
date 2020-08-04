"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isTransparent = isTransparent;
exports.parseColor = parseColor;
exports.setFillColor = setFillColor;
exports.setStrokeColor = setStrokeColor;
exports.Color = exports.Gradient = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _colorRgba = _interopRequireDefault(require("color-rgba"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Gradient = /*#__PURE__*/function () {
  function Gradient(_ref) {
    var vector = _ref.vector,
        colors = _ref.colors;
    (0, _classCallCheck2.default)(this, Gradient);

    if (!Array.isArray(vector) || vector.length !== 4 && vector.length !== 6 && vector.length !== 3) {
      throw new TypeError('Invalid gradient');
    }

    this.vector = vector;
    this.colors = colors.map(function (_ref2) {
      var offset = _ref2.offset,
          color = _ref2.color;
      return {
        offset: offset,
        color: parseColor(color)
      };
    });
  }

  (0, _createClass2.default)(Gradient, [{
    key: "toString",
    value: function toString() {
      return JSON.stringify({
        vector: this.vector,
        colors: this.colors
      });
    }
  }]);
  return Gradient;
}();

exports.Gradient = Gradient;

function isTransparent(color) {
  if (color instanceof Gradient) return false;
  if (color == null) return true;
  return (0, _colorRgba.default)(color)[3] === 0;
}

function parseColor(color) {
  // if(Array.isArray(color)) return color;
  if (color == null) return color;
  if (!color) color = 'transparent';
  if (color instanceof Gradient) return color;
  var ret = (0, _colorRgba.default)(color);
  if (!ret || !ret.length) throw new TypeError('Invalid color value.');
  return "rgba(".concat(ret.join(), ")");
}

function applyMeshGradient(mesh, type, color) {
  var vectorOffset = mesh.boundingBox[0];

  if (color.vector) {
    var vector = color.vector,
        colors = color.colors;

    if (vector.length === 4) {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2] + vectorOffset[0], vector[3] + vectorOffset[1]];
      mesh.setLinearGradient({
        vector: vector,
        colors: colors,
        type: type
      });
    } else if (vector.length === 3) {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2]];
      mesh.setCircularGradient({
        vector: vector,
        colors: colors,
        type: type
      });
    } else {
      vector = [vector[0] + vectorOffset[0], vector[1] + vectorOffset[1], vector[2], vector[3] + vectorOffset[0], vector[4] + vectorOffset[1], vector[5]];
      mesh.setRadialGradient({
        vector: vector,
        colors: colors,
        type: type
      });
    }
  } else if (mesh.gradient && mesh.gradient[type]) {
    delete mesh.gradient[type];
    delete mesh.uniforms.u_radialGradientVector;
  }
}

function setFillColor(mesh, _ref3) {
  var fillColor = _ref3.color,
      _ref3$rule = _ref3.rule,
      rule = _ref3$rule === void 0 ? 'nonzero' : _ref3$rule;
  applyMeshGradient(mesh, 'fill', fillColor);

  if (!fillColor.vector) {
    mesh.setFill({
      color: fillColor,
      rule: rule
    });
  }

  return mesh;
}

function setStrokeColor(mesh, _ref4) {
  var strokeColor = _ref4.color,
      lineWidth = _ref4.lineWidth,
      lineCap = _ref4.lineCap,
      lineJoin = _ref4.lineJoin,
      lineDash = _ref4.lineDash,
      lineDashOffset = _ref4.lineDashOffset,
      miterLimit = _ref4.miterLimit,
      roundSegments = _ref4.roundSegments;
  applyMeshGradient(mesh, 'stroke', strokeColor);

  if (strokeColor.vector) {
    strokeColor = [0, 0, 0, 1];
  }

  mesh.setStroke({
    color: strokeColor,
    thickness: lineWidth,
    cap: lineCap,
    join: lineJoin,
    miterLimit: miterLimit,
    lineDash: lineDash,
    lineDashOffset: lineDashOffset,
    roundSegments: roundSegments
  });
}

var Color = /*#__PURE__*/function (_Array) {
  (0, _inherits2.default)(Color, _Array);

  var _super = _createSuper(Color);

  function Color() {
    var _this;

    var r = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var g = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
    var a = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    (0, _classCallCheck2.default)(this, Color);

    if (Array.isArray(r)) {
      var _r = r;

      var _r2 = (0, _slicedToArray2.default)(_r, 4);

      r = _r2[0];
      g = _r2[1];
      b = _r2[2];
      a = _r2[3];
    }

    if (typeof r === 'string') {
      var _rgba = (0, _colorRgba.default)(r);

      var _rgba2 = (0, _slicedToArray2.default)(_rgba, 4);

      r = _rgba2[0];
      g = _rgba2[1];
      b = _rgba2[2];
      a = _rgba2[3];
      r /= 255;
      g /= 255;
      b /= 255;
    }

    _this = _super.call(this, r, g, b, a);
    return (0, _possibleConstructorReturn2.default)(_this, (0, _assertThisInitialized2.default)(_this));
  }

  (0, _createClass2.default)(Color, [{
    key: "fromColor",
    value: function fromColor(color) {
      if (typeof color === 'string') {
        color = (0, _colorRgba.default)(color);
        color[0] /= 255;
        color[1] /= 255;
        color[2] /= 255;
      }

      this[0] = color[0];
      this[1] = color[1];
      this[2] = color[2];
      this[3] = color[3];
      return this;
    }
  }, {
    key: "r",
    get: function get() {
      return Math.round(this[0] * 255);
    },
    set: function set(v) {
      this[0] = v / 255;
    }
  }, {
    key: "g",
    get: function get() {
      return Math.round(this[1] * 255);
    },
    set: function set(v) {
      this[1] = v / 255;
    }
  }, {
    key: "b",
    get: function get() {
      return Math.round(this[2] * 255);
    },
    set: function set(v) {
      this[2] = v / 255;
    }
  }, {
    key: "a",
    get: function get() {
      return this[3];
    },
    set: function set(v) {
      this[3] = v;
    }
  }, {
    key: "hex",
    get: function get() {
      var r = "0".concat(this.r.toString(16)).slice(-2);
      var g = "0".concat(this.g.toString(16)).slice(-2);
      var b = "0".concat(this.b.toString(16)).slice(-2);
      var a;

      if (this.a < 1) {
        a = Math.round(this[3] * 255);
        a = "0".concat(a.toString(16)).slice(-2);
      }

      return "#".concat(r).concat(g).concat(b).concat(a || '');
    }
  }, {
    key: "rgba",
    get: function get() {
      return "rgba(".concat(this.r, ",").concat(this.g, ",").concat(this.b, ",").concat(this.a, ")");
    }
  }]);
  return Color;
}( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Array));

exports.Color = Color;