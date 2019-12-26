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

var _star = _interopRequireDefault(require("../attribute/star"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var Star =
/*#__PURE__*/
function (_Polyline) {
  (0, _inherits2.default)(Star, _Polyline);

  function Star() {
    (0, _classCallCheck2.default)(this, Star);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Star).apply(this, arguments));
  }

  return Star;
}(_polyline.default);

exports.default = Star;
(0, _defineProperty2.default)(Star, "Attr", _star.default);

_document.default.registerNode(Star, 'star');