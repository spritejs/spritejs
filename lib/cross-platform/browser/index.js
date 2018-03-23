'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _defineProperties = require('babel-runtime/core-js/object/define-properties');

var _defineProperties2 = _interopRequireDefault(_defineProperties);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.createCanvas = createCanvas;
exports.loadImage = loadImage;
exports.createPath = createPath;
exports.calPathRect = calPathRect;
exports.getContainer = getContainer;
exports.shim = shim;

var _attr = require('../../attr');

var _attr2 = _interopRequireDefault(_attr);

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

// get svg path object
function createPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);

  return path;
}

function calPathRect(attr) {
  var d = attr.d,
      lineCap = attr.lineCap,
      lineJoin = attr.lineJoin;


  if (!d) {
    return [0, 0, 0, 0];
  }

  var path = createPath(d);

  var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.style.visibility = 'hidden';
  svg.style.position = 'absolute';
  svg.style.top = 0;
  svg.style.left = 0;
  // svg.setAttribute('width', 1000)
  // svg.setAttribute('height', 1000)
  // svg.setAttribute('preserveAspectRatio', 'none')
  path.setAttribute('stroke-width', 1);
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

  return [ox, oy, width, height];
}

function getContainer(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}

function shim() {
  (0, _defineProperties2.default)(_attr2.default.prototype, {
    offsetPath: {
      set: function set(val) {
        var offsetPath = createPath(val);

        this.set('offsetPath', offsetPath.getAttribute('d'));
        this.saveObj('offsetPath', offsetPath);
        this.resetOffset();
      },
      get: function get() {
        return this.get('offsetPath');
      }
    },
    offsetDistance: {
      set: function set(val) {
        this.set('offsetDistance', val);
        this.resetOffset();
      },
      get: function get() {
        return this.get('offsetDistance');
      }
    },
    offsetRotate: {
      set: function set(val) {
        this.set('offsetRotate', val);
        this.resetOffset();
      },
      get: function get() {
        return this.get('offsetRotate');
      }
    }
  });

  (0, _assign2.default)(_attr2.default.prototype, {
    resetOffset: function resetOffset() {
      var offsetPath = this.get('offsetPath');
      var dis = this.offsetDistance;

      if (offsetPath) {
        var pathObj = this.loadObj('offsetPath');
        if (pathObj) {
          offsetPath = pathObj;
        } else {
          offsetPath = createPath(offsetPath);
          this.saveObj('offsetPath', offsetPath);
        }
      }

      if (offsetPath != null) {
        var len = dis * offsetPath.getTotalLength(),
            _offsetPath$getPointA = offsetPath.getPointAtLength(len),
            x = _offsetPath$getPointA.x,
            y = _offsetPath$getPointA.y;


        var angle = this.offsetRotate;
        if (angle === 'auto' || angle === 'reverse') {
          var delta = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1);
          var x1 = delta.x,
              y1 = delta.y;

          if (x1 === x && y1 === y) {
            // last point
            angle = this.get('offsetAngle');
          } else {
            angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
          }

          if (this.offsetRotate === 'reverse') {
            angle = -angle;
          }
        }

        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        this.set('offsetAngle', angle);
        this.rotate += angle;

        var offsetPoint = this.get('offsetPoint');
        if (offsetPoint) {
          this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
        }

        this.set('offsetPoint', [x, y]);
        this.pos = [this.x + x, this.y + y];
      }
    }
  });
}