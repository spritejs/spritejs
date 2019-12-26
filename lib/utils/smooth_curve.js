"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.makeSmoothCurveLine = makeSmoothCurveLine;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

/* istanbul ignore file */

/**
 * 使用 贝塞尔曲线 模拟绘制平滑曲线
 * @param {*} points 绘制点
 */
function makeSmoothCurveLine(points) {
  /**
   * 获取 模拟贝塞尔曲线关键控制点
   * @param {*} i
   * @param {*} a
   * @param {*} b
   */
  function getCtrlPoint(i) {
    var a = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.168;
    var b = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.168;
    var x0;
    var y0;
    var x1;
    var y1;

    if (points[i].x === points[i + 1].x || points[i].y === points[i + 1].y) {
      a = 0;
      b = 0;
    }

    if (i < 1) {
      x0 = points[0].x + (points[1].x - points[0].x) * a;
      y0 = points[0].y + (points[1].y - points[0].y) * a;
    } else {
      x0 = points[i].x + (points[i + 1].x - points[i - 1].x) * a;
      y0 = points[i].y + (points[i + 1].y - points[i - 1].y) * a;
    }

    if (i > points.length - 3) {
      var last = points.length - 1;
      x1 = points[last].x - (points[last].x - points[last - 1].x) * b;
      y1 = points[last].y - (points[last].y - points[last - 1].y) * b;
    } else {
      x1 = points[i + 1].x - (points[i + 2].x - points[i].x) * b;
      y1 = points[i + 1].y - (points[i + 2].y - points[i].y) * b;
    }

    return [{
      x: x0,
      y: y0
    }, {
      x: x1,
      y: y1
    }];
  }

  points = points.map(function (_ref) {
    var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
        x = _ref2[0],
        y = _ref2[1];

    return {
      x: x,
      y: y
    };
  });
  var d = '';
  points.forEach(function (point, i) {
    if (i === 0) {
      d += "M".concat(point.x, " ").concat(point.y);
    } else {
      var _getCtrlPoint = getCtrlPoint(i - 1),
          _getCtrlPoint2 = (0, _slicedToArray2.default)(_getCtrlPoint, 2),
          A = _getCtrlPoint2[0],
          B = _getCtrlPoint2[1];

      d += "C".concat([A.x, A.y, B.x, B.y, point.x, point.y].join(' '));
    }
  });
  return d;
}