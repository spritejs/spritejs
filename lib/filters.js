'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  blur: function blur(px) {
    return 'blur(' + (0, _utils.appendUnit)(px) + ')';
  },
  brightness: function brightness(percent) {
    return 'brightness(' + percent + ')';
  },
  contrast: function contrast(percent) {
    return 'contrast(' + percent + ')';
  },
  dropShadow: function dropShadow(_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 4),
        offsetX = _ref2[0],
        offsetY = _ref2[1],
        shadowRadius = _ref2[2],
        color = _ref2[3];

    return 'drop-shadow(' + (0, _utils.appendUnit)(offsetX) + ' ' + (0, _utils.appendUnit)(offsetY) + ' ' + (0, _utils.appendUnit)(shadowRadius) + ' ' + color + ')';
  },
  grayscale: function grayscale(percent) {
    return 'grayscale(' + percent + ')';
  },
  hueRotate: function hueRotate(value) {
    return 'hue-rotate(' + (0, _utils.appendUnit)(value, 'deg') + ')';
  },
  invert: function invert(percent) {
    return 'invert(' + percent + ')';
  },
  opacity: function opacity(percent) {
    return 'opacity(' + percent + ')';
  },
  saturate: function saturate(percent) {
    return 'saturate(' + percent + ')';
  },
  sepia: function sepia(percent) {
    return 'sepia(' + percent + ')';
  },
  url: function url(path) {
    return 'url(' + path + ')';
  },
  compile: function compile() {
    var _this = this;

    var filter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    return (0, _entries2.default)(filter).reduce(function (accumulator, curVal) {
      return accumulator.concat(_this[curVal[0]](curVal[1]));
    }, []).join(' ');
  }
}; // http://www.runoob.com/cssref/css3-pr-filter.html