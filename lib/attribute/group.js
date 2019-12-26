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

var _block = _interopRequireDefault(require("./block"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

// const setDefault = Symbol.for('spritejs_setAttributeDefault');
var Group =
/*#__PURE__*/
function (_Block) {
  (0, _inherits2.default)(Group, _Block);

  function Group() {
    (0, _classCallCheck2.default)(this, Group);
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Group).apply(this, arguments));
  }

  return Group;
}(_block.default);

exports.default = Group;