"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _ellipse = _interopRequireDefault(require("./ellipse"));

var _document = _interopRequireDefault(require("../document"));

var _arc = _interopRequireDefault(require("../attribute/arc"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Arc =
/*#__PURE__*/
function (_Ellipse) {
  (0, _inherits2.default)(Arc, _Ellipse);

  function Arc() {
    (0, _classCallCheck2.default)(this, Arc);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Arc).apply(this, arguments));
  }

  return Arc;
}(_ellipse.default);

exports.default = Arc;
(0, _defineProperty2.default)(Arc, "Attr", _arc.default);

_document.default.registerNode(Arc, 'arc');