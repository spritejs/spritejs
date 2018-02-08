'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLinearGradients = exports.copyContext = exports.createPath = exports.appendUnit = exports.getTextSize = exports.rectVertices = exports.rectToBox = exports.boxUnion = exports.boxEqual = exports.boxToRect = exports.boxIntersect = exports.parseStringTransform = exports.fourValuesShortCut = exports.parseColorString = exports.parseStringFloat = exports.parseStringInt = exports.oneOrTwoValues = exports.parseColor = exports.defer = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _decorators = require('./decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Color = function () {
  function Color(color) {
    (0, _classCallCheck3.default)(this, Color);

    if (typeof color === 'string') {
      var canvas = document.createElement('canvas'),
          context = canvas.getContext('2d');

      context.fillStyle = color;
      context.fillRect(0, 0, 1, 1);
      var data = context.getImageData(0, 0, 1, 1).data;

      this.red = data[0];
      this.green = data[1];
      this.blue = data[2];
      this.alpha = data[3] / 255;
    } else {
      this.red = Math.round(color.red);
      this.green = Math.round(color.green);
      this.blue = Math.round(color.blue);
      this.alpha = color.alpha != null ? color.alpha : 1;
    }
  }

  (0, _createClass3.default)(Color, [{
    key: 'toString',
    value: function toString() {
      var red = this.red,
          green = this.green,
          blue = this.blue,
          alpha = this.alpha;

      return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
    }
  }, {
    key: 'str',
    get: function get() {
      return String(this);
    }
  }]);
  return Color;
}();

var parseColor = (0, _decorators.memoize)(function (color) {
  return new Color(color);
});

function parseColorString(color) {
  return parseColor(color).toString();
}

function parseStringTransform(str) {
  if (typeof str !== 'string') return str;

  var rules = str.match(/((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g);
  var ret = {};
  if (rules) {
    rules.forEach(function (rule) {
      var matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/);
      if (matched) {
        var _matched = (0, _slicedToArray3.default)(matched, 3),
            m = _matched[1],
            v = _matched[2];

        if (m === 'rotate') {
          ret[m] = parseStringFloat(v)[0];
        } else {
          ret[m] = parseStringFloat(v);
        }
      }
    });
  }

  return ret;
}

function parseValuesString(str) {
  var isInt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (typeof str === 'string') {
    var values = str.split(/[\s,]+/g);
    return values.map(function (v) {
      return isInt ? parseInt(v, 10) : parseFloat(v);
    });
  }
  return str;
}

function parseStringInt(str) {
  return parseValuesString(str, true);
}

function parseStringFloat(str) {
  return parseValuesString(str, false);
}

function oneOrTwoValues(val) {
  if (!Array.isArray(val)) {
    return [val, val];
  } else if (val.length === 1) {
    return [val[0], val[0]];
  }
  return val;
}

function fourValuesShortCut(val) {
  if (!Array.isArray(val)) {
    return [val, val, val, val];
  } else if (val.length === 1) {
    return [val[0], val[0], val[0], val[0]];
  } else if (val.length === 2) {
    return [val[0], val[1], val[0], val[1]];
  }
  return [].concat((0, _toConsumableArray3.default)(val), [0, 0, 0, 0]).slice(0, 4);
}

function boxIntersect(box1, box2) {
  // left, top, right, buttom
  var _ref = [box1[0], box1[1], box1[2], box1[3]],
      l1 = _ref[0],
      t1 = _ref[1],
      r1 = _ref[2],
      b1 = _ref[3],
      _ref2 = [box2[0], box2[1], box2[2], box2[3]],
      l2 = _ref2[0],
      t2 = _ref2[1],
      r2 = _ref2[2],
      b2 = _ref2[3];


  var t = Math.max(t1, t2),
      r = Math.min(r1, r2),
      b = Math.min(b1, b2),
      l = Math.max(l1, l2);

  if (b >= t && r >= l) {
    return [l, t, r, b];
  }
  return null;
}

function boxToRect(box) {
  return [box[0], box[1], Math.round(box[2] - box[0]), Math.round(box[3] - box[1])];
}

function boxEqual(box1, box2) {
  return box1[0] === box2[0] && box1[1] === box2[1] && box1[2] === box2[2] && box1[3] === box2[3];
}

function rectToBox(rect) {
  return [rect[0], rect[1], Math.round(rect[0] + rect[2]), Math.round(rect[1] + rect[3])];
}

function rectVertices(rect) {
  var _rectToBox = rectToBox(rect),
      _rectToBox2 = (0, _slicedToArray3.default)(_rectToBox, 4),
      x1 = _rectToBox2[0],
      y1 = _rectToBox2[1],
      x2 = _rectToBox2[2],
      y2 = _rectToBox2[3];

  return [[x1, y1], [x2, y1], [x2, y2], [x1, y2]];
}

function boxUnion(box1, box2) {
  if (!box1) return box2;
  if (!box2) return box1;

  return [Math.min(box1[0], box2[0]), Math.min(box1[1], box2[1]), Math.max(box1[2], box2[2]), Math.max(box1[3], box2[3])];
}

// http://jsfiddle.net/joquery/cQXgd/
function measureFontHeight(context) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'fißgPauljMPÜÖÄ';

  var sourceWidth = context.canvas.width,
      sourceHeight = context.canvas.height;

  // place the text somewhere
  context.textAlign = 'left';
  context.textBaseline = 'top';
  context.fillText(text, 25, 0);

  // returns an array containing the sum of all pixels in a canvas
  // * 4 (red, green, blue, alpha)
  // [pixel1Red, pixel1Green, pixel1Blue, pixel1Alpha, pixel2Red ...]
  var data = context.getImageData(0, 0, sourceWidth, sourceHeight).data;

  var firstY = -1;
  var lastY = -1;

  // loop through each row
  for (var y = 0; y < sourceHeight; y++) {
    // loop through each column
    for (var x = 0; x < sourceWidth; x++) {
      // let red = data[((sourceWidth * y) + x) * 4]
      // let green = data[((sourceWidth * y) + x) * 4 + 1]
      // let blue = data[((sourceWidth * y) + x) * 4 + 2]
      var alpha = data[(sourceWidth * y + x) * 4 + 3];

      if (alpha > 0) {
        firstY = y;
        // exit the loop
        break;
      }
    }
    if (firstY >= 0) {
      // exit the loop
      break;
    }
  }

  // loop through each row, this time beginning from the last row
  for (var _y = sourceHeight; _y > 0; _y--) {
    // loop through each column
    for (var _x3 = 0; _x3 < sourceWidth; _x3++) {
      var _alpha = data[(sourceWidth * _y + _x3) * 4 + 3];
      if (_alpha > 0) {
        lastY = _y;
        // exit the loop
        break;
      }
    }
    if (lastY >= 0) {
      // exit the loop
      break;
    }
  }

  return {
    // The actual height
    textHeight: lastY - firstY,

    height: lastY + firstY,

    // The first pixel
    firstPixel: firstY,

    // The last pixel
    lastPixel: lastY
  };
}

var getTextSize = (0, _decorators.memoize)(function (text, font) {
  var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  if (typeof IS_NODE_ENV !== 'undefined') {
    lineHeight = parseInt(lineHeight, 10) || 0; // warn: only support px
    var canvas = document.createElement('canvas'),
        ctx = canvas.getContext('2d');

    if (font) ctx.font = font;

    var _ctx$measureText = ctx.measureText(text),
        width = _ctx$measureText.width,
        _measureFontHeight = measureFontHeight(ctx, text),
        height = _measureFontHeight.height;

    var _size = [width, Math.max(height, lineHeight), height];

    return _size;
  }

  var tmpEl = document.createElement('font');

  if (font) tmpEl.style.font = font;

  lineHeight = appendUnit(lineHeight);

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

  tmpEl.style.lineHeight = '';
  size.push(tmpEl.clientHeight);

  document.documentElement.removeChild(tmpEl);

  return size;
});

function appendUnit(value) {
  var defaultUnit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'px';

  if (value === '') {
    return value;
  }
  if (typeof value === 'string' && (0, _isNan2.default)(Number(value))) {
    return value;
  }
  return value + defaultUnit;
}

// get svg path object
function createPath(d) {
  var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
  path.setAttribute('d', d);

  return path;
}

function gradientBox(angle, rect) {
  var _rect = (0, _slicedToArray3.default)(rect, 4),
      x = _rect[0],
      y = _rect[1],
      w = _rect[2],
      h = _rect[3];

  angle %= 360;
  if (angle < 0) {
    angle += 360;
  }

  if (angle >= 0 && angle < 90) {
    var tan = Math.tan(Math.PI * angle / 180);

    var d = tan * w;

    if (d <= h) {
      return [x, y, x + w, y + d];
    }
    d = h / tan;
    return [x, y, x + d, y + h];
  } else if (angle >= 90 && angle < 180) {
    var _tan = Math.tan(Math.PI * (angle - 90) / 180);

    var _d = _tan * h;

    if (_d <= w) {
      return [x + w, y, x + w - _d, y + h];
    }
    _d = w / _tan;
    return [x + w, y, x, y + _d];
  } else if (angle >= 180 && angle < 270) {
    var _tan2 = Math.tan(Math.PI * (angle - 180) / 180);

    var _d2 = _tan2 * w;

    if (_d2 <= h) {
      return [x + w, y + h, x, y + h - _d2];
    }
    _d2 = h / _tan2;
    return [x + w, y + h, x + w - _d2, y];
  } else if (angle >= 270 && angle < 360) {
    var _tan3 = Math.tan(Math.PI * (angle - 270) / 180);

    var _d3 = _tan3 * h;

    if (_d3 <= w) {
      return [x, y + h, x + _d3, y];
    }
    _d3 = w / _tan3;
    return [x, y + h, x + w, y + h - _d3];
  }

  return [x, y, x + w, y + h];
}

function copyContext(context) {
  var canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');

  canvas.width = context.canvas.width;
  canvas.height = context.canvas.height;

  ctx.drawImage(context.canvas, 0, 0);

  return ctx;
}

function getLinearGradients(context, rect, linearGradients) {
  var colors = linearGradients.colors,
      direction = linearGradients.direction,
      vector = linearGradients.vector,
      _rect2 = (0, _slicedToArray3.default)(rect, 4),
      x = _rect2[0],
      y = _rect2[1],
      w = _rect2[2],
      h = _rect2[3];

  var x0 = void 0,
      y0 = void 0,
      x1 = void 0,
      y1 = void 0;

  if (direction != null) {
    var _gradientBox = gradientBox(direction, [x, y, w, h]);

    var _gradientBox2 = (0, _slicedToArray3.default)(_gradientBox, 4);

    x0 = _gradientBox2[0];
    y0 = _gradientBox2[1];
    x1 = _gradientBox2[2];
    y1 = _gradientBox2[3];
  } else if (vector) {
    var _vector = (0, _slicedToArray3.default)(vector, 4);

    x0 = _vector[0];
    y0 = _vector[1];
    x1 = _vector[2];
    y1 = _vector[3];
  }

  var gradient = context.createLinearGradient(x0, y0, x1, y1);

  colors.forEach(function (o) {
    gradient.addColorStop(o.offset, o.color);
  });

  return gradient;
}

function defer() {
  var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  var ret = { context: context };
  ret.promise = new _promise2.default(function (resolve, reject) {
    ret.resolve = resolve;
    ret.reject = reject;
  });
  return ret;
}

exports.defer = defer;
exports.parseColor = parseColor;
exports.oneOrTwoValues = oneOrTwoValues;
exports.parseStringInt = parseStringInt;
exports.parseStringFloat = parseStringFloat;
exports.parseColorString = parseColorString;
exports.fourValuesShortCut = fourValuesShortCut;
exports.parseStringTransform = parseStringTransform;
exports.boxIntersect = boxIntersect;
exports.boxToRect = boxToRect;
exports.boxEqual = boxEqual;
exports.boxUnion = boxUnion;
exports.rectToBox = rectToBox;
exports.rectVertices = rectVertices;
exports.getTextSize = getTextSize;
exports.appendUnit = appendUnit;
exports.createPath = createPath;
exports.copyContext = copyContext;
exports.getLinearGradients = getLinearGradients;