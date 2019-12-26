"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cancelAnimationFrame = exports.requestAnimationFrame = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function nowtime() {
  if (typeof performance !== 'undefined' && performance.now) {
    return performance.now();
  }

  if (typeof process !== 'undefined' && process.hrtime) {
    var _process$hrtime = process.hrtime(),
        _process$hrtime2 = (0, _slicedToArray2.default)(_process$hrtime, 2),
        s = _process$hrtime2[0],
        ns = _process$hrtime2[1];

    return s * 1e3 + ns * 1e-6;
  }

  return Date.now ? Date.now() : new Date().getTime();
}

var requestAnimationFrame, // eslint-disable-line import/no-mutable-exports
cancelAnimationFrame;
exports.cancelAnimationFrame = cancelAnimationFrame;
exports.requestAnimationFrame = requestAnimationFrame;

if (typeof global !== 'undefined' && typeof global.requestAnimationFrame === 'function') {
  exports.requestAnimationFrame = requestAnimationFrame = global.requestAnimationFrame;
  exports.cancelAnimationFrame = cancelAnimationFrame = global.cancelAnimationFrame;
} else {
  exports.requestAnimationFrame = requestAnimationFrame = function requestAnimationFrame(fn) {
    return setTimeout(function () {
      fn(nowtime());
    }, 16);
  };

  exports.cancelAnimationFrame = cancelAnimationFrame = function cancelAnimationFrame(id) {
    return clearTimeout(id);
  };
}