"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _polyline = _interopRequireDefault(require("./polyline"));

var _document = _interopRequireDefault(require("../document"));

var _triangle = _interopRequireDefault(require("../attribute/triangle"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Triangle =
/*#__PURE__*/
function (_Polyline) {
  (0, _inherits2.default)(Triangle, _Polyline);

  function Triangle() {
    (0, _classCallCheck2.default)(this, Triangle);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Triangle).apply(this, arguments));
  }

  (0, _createClass2.default)(Triangle, [{
    key: "isVisible",
    get: function get() {
      var sides = this.attributes.sides;
      return sides[0] > 0 && sides[1] > 0 && (0, _get2.default)((0, _getPrototypeOf2.default)(Triangle.prototype), "isVisible", this);
    }
  }]);
  return Triangle;
}(_polyline.default);

exports.default = Triangle;
(0, _defineProperty2.default)(Triangle, "Attr", _triangle.default);

_document.default.registerNode(Triangle, 'triangle');