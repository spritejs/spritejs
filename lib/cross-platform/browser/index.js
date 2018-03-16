'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.measureText = undefined;

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.createCanvas = createCanvas;
exports.loadImage = loadImage;
exports.createPath = createPath;
exports.calPathRect = calPathRect;

var _decorators = require('../../decorators');

var _utils = require('../../utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function loadImage(src) {
  var img = document.createElement('img');
  img.crossOrigin = 'anonymous';

  var promise = new _promise2.default(function (resolve) {
    img.addEventListener('load', function () {
      resolve(img);
    });
  });
  img.src = src;
  return promise;
}

var measureText = (0, _decorators.memoize)(function (text, font) {
  var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  var tmpEl = document.createElement('font');

  if (font) tmpEl.style.font = font;

  lineHeight = (0, _utils.appendUnit)(lineHeight);

  (0, _assign2.default)(tmpEl.style, {
    position: 'absolute',
    left: 0,
    top: 0,
    visibility: 'hidden',
    display: 'inline-block',
    lineHeight: lineHeight,
    padding: '0',
    verticalAlign: 'middle',
    whiteSpace: 'nowrap'
  });

  tmpEl.innerHTML = text;
  document.documentElement.appendChild(tmpEl);
  var size = [tmpEl.clientWidth, tmpEl.clientHeight];

  document.documentElement.removeChild(tmpEl);

  return size;
});

exports.measureText = measureText;

// get svg path object

function createPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);

  return path;
}

function calPathRect(attr) {
  var path = attr.loadObj('path');
  var d = attr.d,
      lineCap = attr.lineCap,
      lineJoin = attr.lineJoin,
      lineWidth = attr.lineWidth;


  if (!path) {
    if (d) {
      // Deserialized sprite may have d value but no path obj
      path = createPath(d);
      attr.saveObj('path', path);
    } else {
      return [0, 0, 0, 0];
    }
  }

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.visibility = 'hidden';
  svg.style.position = 'absolute';
  svg.style.top = 0;
  svg.style.left = 0;
  // svg.setAttribute('width', 1000)
  // svg.setAttribute('height', 1000)
  // svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', lineWidth);
  path.setAttribute('stroke', '#f00');
  path.setAttribute('stroke-linecap', lineCap);
  path.setAttribute('stroke-linejoin', lineJoin);
  svg.appendChild(path);
  document.body.appendChild(svg);

  var _svg$getBoundingClien = svg.getBoundingClientRect(),
      x0 = _svg$getBoundingClien.left,
      y0 = _svg$getBoundingClien.top;

  var _path$getBoundingClie = path.getBoundingClientRect(),
      left = _path$getBoundingClie.left,
      top = _path$getBoundingClie.top,
      width = _path$getBoundingClie.width,
      height = _path$getBoundingClie.height;

  var ox = left - x0,
      oy = top - y0;

  document.body.removeChild(svg);

  var pathRect = [ox, oy, width, height];

  attr.saveObj('pathRect', pathRect);

  return pathRect;
}