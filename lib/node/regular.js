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

var _polyline = _interopRequireDefault(require("./polyline"));

var _document = _interopRequireDefault(require("../document"));

var _regular = _interopRequireDefault(require("../attribute/regular"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Regular =
/*#__PURE__*/
function (_Polyline) {
  (0, _inherits2.default)(Regular, _Polyline);

  function Regular() {
    (0, _classCallCheck2.default)(this, Regular);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Regular).apply(this, arguments));
  }

  return Regular;
}(_polyline.default);

exports.default = Regular;
(0, _defineProperty2.default)(Regular, "Attr", _regular.default);

_document.default.registerNode(Regular, 'regular');