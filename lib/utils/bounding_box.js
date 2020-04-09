"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _default(boundingBox, m) {
  if (!boundingBox) {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      left: 0,
      top: 0,
      right: 0,
      bottom: 0
    };
  }

  var _boundingBox = (0, _slicedToArray2.default)(boundingBox, 2),
      _boundingBox$ = (0, _slicedToArray2.default)(_boundingBox[0], 2),
      x1 = _boundingBox$[0],
      y1 = _boundingBox$[1],
      _boundingBox$2 = (0, _slicedToArray2.default)(_boundingBox[1], 2),
      x2 = _boundingBox$2[0],
      y2 = _boundingBox$2[1];

  var x11 = x1 * m[0] + y1 * m[2] + m[4];
  var y11 = x1 * m[1] + y1 * m[3] + m[5];
  var x21 = x2 * m[0] + y1 * m[2] + m[4];
  var y21 = x2 * m[1] + y1 * m[3] + m[5];
  var x22 = x2 * m[0] + y2 * m[2] + m[4];
  var y22 = x2 * m[1] + y2 * m[3] + m[5];
  var x12 = x1 * m[0] + y2 * m[2] + m[4];
  var y12 = x1 * m[1] + y2 * m[3] + m[5];
  var left = Math.min(x11, x21, x22, x12);
  var top = Math.min(y11, y21, y22, y12);
  var right = Math.max(x11, x21, x22, x12);
  var bottom = Math.max(y11, y21, y22, y12);
  return {
    x: left,
    y: top,
    width: right - left,
    height: bottom - top,
    left: left,
    top: top,
    right: right,
    bottom: bottom
  };
}