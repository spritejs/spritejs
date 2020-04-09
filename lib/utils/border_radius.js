"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRadiusBox = createRadiusBox;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function createEllipseBorder(figure, x, y, w, h) {
  var pos = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 'leftTop';
  var kappa = 0.5522848,
      ox = w / 2 * kappa,
      // control point offset horizontal
  oy = h / 2 * kappa,
      // control point offset vertical
  xe = x + w,
      // x-end
  ye = y + h,
      // y-end
  xm = x + w / 2,
      // x-middle
  ym = y + h / 2; // y-middle

  if (pos === 'leftTop') {
    figure.moveTo(x, ym);
    figure.bezierCurveTo(x, ym - oy, xm - ox, y, xm, y);
  } else if (pos === 'rightTop') {
    figure.bezierCurveTo(xm + ox, y, xe, ym - oy, xe, ym);
  } else if (pos === 'rightBottom') {
    figure.bezierCurveTo(xe, ym + oy, xm + ox, ye, xm, ye);
  } else if (pos === 'leftBottom') {
    figure.bezierCurveTo(xm - ox, ye, x, ym + oy, x, ym);
  }
}

function createRadiusBox(figure, _ref, radius) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 4),
      x = _ref2[0],
      y = _ref2[1],
      w = _ref2[2],
      h = _ref2[3];

  if (!radius || Array.isArray(radius) && radius.every(function (r) {
    return r === 0;
  })) {
    figure.beginPath();
    figure.rect(x, y, w, h);
  } else {
    if (typeof radius === 'number') radius = Array(8).fill(radius);

    var _radius$map = radius.map(function (r, i) {
      if (i % 2) return Math.min(r, h / 2);
      return Math.min(r, w / 2);
    }),
        _radius$map2 = (0, _slicedToArray2.default)(_radius$map, 8),
        tl0 = _radius$map2[0],
        tl1 = _radius$map2[1],
        tr0 = _radius$map2[2],
        tr1 = _radius$map2[3],
        br0 = _radius$map2[4],
        br1 = _radius$map2[5],
        bl0 = _radius$map2[6],
        bl1 = _radius$map2[7];

    figure.beginPath();
    figure.moveTo(x, y + tl1);
    createEllipseBorder(figure, x, y, tl0 * 2, tl1 * 2, 'leftTop');
    figure.lineTo(x + w - tr0, y);
    createEllipseBorder(figure, x + w - tr0 * 2, y, tr0 * 2, tr1 * 2, 'rightTop');
    figure.lineTo(x + w, y + h - br1);
    createEllipseBorder(figure, x + w - br0 * 2, y + h - br1 * 2, br0 * 2, br1 * 2, 'rightBottom');
    figure.lineTo(x + bl0, y + h);
    createEllipseBorder(figure, x, y + h - bl1 * 2, bl0 * 2, bl1 * 2, 'leftBottom');
    figure.closePath();
  }

  return figure;
}