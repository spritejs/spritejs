"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _set2 = _interopRequireDefault(require("@babel/runtime/helpers/set"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Arc = /*#__PURE__*/function (_Ellipse) {
  (0, _inherits2.default)(Arc, _Ellipse);

  var _super = _createSuper(Arc);

  function Arc() {
    (0, _classCallCheck2.default)(this, Arc);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Arc, [{
    key: "radius",
    get: function get() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(Arc.prototype), "radiusX", this);
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);
      (0, _set2.default)((0, _getPrototypeOf2.default)(Arc.prototype), "radiusX", value, this, true);
      (0, _set2.default)((0, _getPrototypeOf2.default)(Arc.prototype), "radiusY", value, this, true);
    }
  }]);
  return Arc;
}(_ellipse.default);

exports.default = Arc;