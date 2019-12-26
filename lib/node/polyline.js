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

var _polyline = _interopRequireDefault(require("../attribute/polyline"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Polyline =
/*#__PURE__*/
function (_Path) {
  (0, _inherits2.default)(Polyline, _Path);

  function Polyline() {
    (0, _classCallCheck2.default)(this, Polyline);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Polyline).apply(this, arguments));
  }

  (0, _createClass2.default)(Polyline, [{
    key: "isVisible",

    /* override */
    get: function get() {
      var points = this.attributes.points;
      return points.length > 0 && (0, _get2.default)((0, _getPrototypeOf2.default)(Polyline.prototype), "isVisible", this);
    }
  }]);
  return Polyline;
}(_path.default);

exports.default = Polyline;
(0, _defineProperty2.default)(Polyline, "Attr", _polyline.default);

_document.default.registerNode(Polyline, 'polyline');