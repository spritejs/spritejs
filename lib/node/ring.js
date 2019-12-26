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

var _path = _interopRequireDefault(require("./path"));

var _document = _interopRequireDefault(require("../document"));

var _ring = _interopRequireDefault(require("../attribute/ring"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Ring =
/*#__PURE__*/
function (_Path) {
  (0, _inherits2.default)(Ring, _Path);

  function Ring() {
    (0, _classCallCheck2.default)(this, Ring);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Ring).apply(this, arguments));
  }

  (0, _createClass2.default)(Ring, [{
    key: "isVisible",

    /* override */
    get: function get() {
      var _this$attributes = this.attributes,
          innerRadius = _this$attributes.innerRadius,
          outerRadius = _this$attributes.outerRadius,
          startAngle = _this$attributes.startAngle,
          endAngle = _this$attributes.endAngle;
      return (innerRadius > 0 || outerRadius > 0) && startAngle !== endAngle && (0, _get2.default)((0, _getPrototypeOf2.default)(Ring.prototype), "isVisible", this);
    }
  }]);
  return Ring;
}(_path.default);

exports.default = Ring;
(0, _defineProperty2.default)(Ring, "Attr", _ring.default);

_document.default.registerNode(Ring, 'ring');