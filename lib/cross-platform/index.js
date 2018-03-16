'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Path2D = exports.measureText = undefined;

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _toArray2 = require('babel-runtime/helpers/toArray');

var _toArray3 = _interopRequireDefault(_toArray2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.createCanvas = createCanvas;
exports.loadImage = loadImage;
exports.createPathSVG = createPathSVG;
exports.calPathRect = calPathRect;
exports.createPath = createPath;
exports.getContainer = getContainer;

var _decorators = require('../decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var fs = require('fs');
var axios = require('axios');

var nodeCanvas = null;
try {
  nodeCanvas = require('canvas');
} catch (ex) {
  throw new Error('Node runtime require node-canvas. please follow https://github.com/Automattic/node-canvas to install node-canvas@2.x');
}

function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

  var _createCanvas = nodeCanvas.createCanvas;
  var canvas = _createCanvas(width, height);
  canvas.style = {};
  canvas.dataset = {};

  canvas.cloneNode = function (copyContent) {
    var width = this.width,
        height = this.height;

    var copied = createCanvas(width, height);
    if (copyContent) {
      var ctx = copied.getContext('2d');
      ctx.drawImage(this, 0, 0, width, height);
    }
    return copied;
  };

  return canvas;
}

function loadImage(src) {
  var Image = nodeCanvas.Image;
  var img = new Image();
  var base64Pattern = /^data:image\/\w+;base64,/;

  var promise = new _promise2.default(function (resolve) {
    img.onload = function () {
      resolve(img);
    };
  });

  if (typeof src === 'string') {
    if (base64Pattern.test(src)) {
      var base64Data = src.replace(base64Pattern, '');
      img.src = Buffer.from(base64Data, 'base64');
    } else if (/^https?:\/\//.test(src)) {
      axios.get(src, { responseType: 'arraybuffer' }).then(function (_ref) {
        var data = _ref.data;

        img.src = data;
      });
    } else {
      fs.readFile(src, function (err, squid) {
        if (err) {
          throw err;
        } else {
          img.src = squid;
        }
      });
    }
  } else {
    img.src = src;
  }

  return promise;
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
    for (var _x4 = 0; _x4 < sourceWidth; _x4++) {
      var _alpha = data[(sourceWidth * _y + _x4) * 4 + 3];
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

var MAX_SIZE = 2048;

var measureText = (0, _decorators.memoize)(function (text, font) {
  var lineHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';

  lineHeight = parseInt(lineHeight, 10) || 0; // warn: only support px
  var canvas = createCanvas(MAX_SIZE, MAX_SIZE),
      ctx = canvas.getContext('2d');

  if (font) ctx.font = font;

  var _ctx$measureText = ctx.measureText(text),
      width = _ctx$measureText.width;

  // canvas.width = width
  // canvas.height = width * 3

  var _measureFontHeight = measureFontHeight(ctx),
      height = _measureFontHeight.height;

  var size = [width, Math.max(height, lineHeight)];

  return size;
});

exports.measureText = measureText;
function createPathSVG(d, lineWidth, lineCap, lineJoin, strokeColor, fillColor) {
  var width = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : MAX_SIZE;
  var height = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : MAX_SIZE;

  var tpl = '\n    <svg width="' + width + '" height="' + height + '" xmlns="http://www.w3.org/2000/svg">\n      <path d="' + d + '" \n        stroke="' + (strokeColor || 'black') + '" \n        fill="' + (fillColor || 'transparent') + '"\n        stroke-width="' + (lineWidth || 1) + '"\n        stroke-linecap="' + (lineCap || 'butt') + '"\n        stroke-linejoin="' + (lineJoin || 'miter') + '"\n      ></path>\n    </svg>\n  ';
  var Image = nodeCanvas.Image;
  var img = new Image();
  img.src = Buffer.from(tpl, 'utf8');

  return img;
}

function calPathRect(attr) {
  var d = attr.d,
      lineCap = attr.lineCap,
      lineJoin = attr.lineJoin,
      strokeColor = attr.strokeColor,
      fillColor = attr.fillColor;


  var svg = createPathSVG(d, 1, lineCap, lineJoin, strokeColor, fillColor);

  var width = svg.width,
      height = svg.height;

  var canvas = createCanvas(width, height);
  var ctx = canvas.getContext('2d');

  ctx.drawImage(svg, 0, 0, width, height);
  var imageData = ctx.getImageData(0, 0, width, height);
  var data = imageData.data;

  var left = width;
  var top = height;
  var right = 0;
  var bottom = 0;

  for (var j = 0; j < height; j++) {
    for (var i = 0; i < width; i++) {
      var red = data[(width * j + i) * 4];
      var green = data[(width * j + i) * 4 + 1];
      var blue = data[(width * j + i) * 4 + 2];
      var alpha = data[(width * j + i) * 4 + 3];
      if (red || green || blue || alpha) {
        left = Math.min(i, left);
        top = Math.min(j, top);
        right = Math.max(i, right);
        bottom = Math.max(j, bottom);
      }
    }
  }

  var pathRect = [left + 1, top + 1, right - left - 1, bottom - top - 1];
  attr.saveObj('pathRect', pathRect);

  return pathRect;
}

function createPath(d) {
  d.replace(/(\s){2,}/g, ' ').trim();
  return {
    getAttribute: function getAttribute(attr) {
      if (attr === 'd') {
        return d;
      }
    }
  };
}

var _require = require('svg-path-parser'),
    parseSVG = _require.parseSVG,
    makeAbsolute = _require.makeAbsolute;

var Path2D = exports.Path2D = function () {
  function Path2D(d) {
    (0, _classCallCheck3.default)(this, Path2D);

    this.footprint = [];
    this.commands = [];
    if (d instanceof Path2D) {
      this.addPath(d);
    } else if (typeof d === 'string') {
      // svg path
      var commands = makeAbsolute(parseSVG(d));
      if (commands[0] && commands[0].code === 'M') {
        this.footprint.push([commands[0].x, commands[0].y]);
      }
      this.commands.push(['path', d]);
    }
  }

  (0, _createClass3.default)(Path2D, [{
    key: 'addPath',
    value: function addPath(path) {
      var _footprint, _commands;

      (_footprint = this.footprint).push.apply(_footprint, (0, _toConsumableArray3.default)(path.footprint));
      (_commands = this.commands).push.apply(_commands, (0, _toConsumableArray3.default)(path.commands));
    }
  }, {
    key: 'closePath',
    value: function closePath() {
      var point = this.footprint[0];
      if (point) {
        this.moveTo.apply(this, (0, _toConsumableArray3.default)(point));
      }
    }
  }, {
    key: 'moveTo',
    value: function moveTo(x, y) {
      this.footprint.push([x, y]);
      this.commands.push(['moveTo', x, y]);
    }
  }, {
    key: 'lineTo',
    value: function lineTo(x, y) {
      this.footprint.push([x, y]);
      this.commands.push(['lineTo', x, y]);
    }
  }, {
    key: 'bezierCurveTo',
    value: function bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) {
      this.footprint.push([x, y]);
      this.commands.push(['bezierCurveTo', cp1x, cp1y, cp2x, cp2y, x, y]);
    }
  }, {
    key: 'quadraticCurveTo',
    value: function quadraticCurveTo(cpx, cpy, x, y) {
      this.footprint.push([x, y]);
      this.commands.push('quadraticCurveTo', cpx, cpy, x, y);
    }
  }, {
    key: 'arc',
    value: function arc(x, y) {
      var _commands2;

      this.footprint.push([x, y]);

      for (var _len = arguments.length, rest = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        rest[_key - 2] = arguments[_key];
      }

      (_commands2 = this.commands).push.apply(_commands2, ['arc', x, y].concat(rest));
    }
  }, {
    key: 'arcTo',
    value: function arcTo(x1, y1, x2, y2, radius) {
      this.commands.push('artTo', x1, y1, x2, y2, radius);
    }
  }, {
    key: 'ellipse',
    value: function ellipse(x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise) {
      this.footprint.push([x, y]);
      this.commands.push('ellipse', x, y, radiusX, radiusY, rotation, startAngle, endAngle, anticlockwise);
    }
  }, {
    key: 'rect',
    value: function rect(x, y, width, height) {
      this.footprint.push([x, y]);
      this.commands.push('rect', x, y, width, height);
    }
  }, {
    key: 'draw',
    value: function draw(context) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'stroke';

      context.save();
      context.beginPath();
      this.commands.forEach(function (command) {
        var _command = (0, _toArray3.default)(command),
            cmd = _command[0],
            args = _command.slice(1);

        if (cmd === 'path') {
          var lineWidth = context.lineWidth,
              lineCap = context.lineCap,
              lineJoin = context.lineJoin,
              strokeStyle = context.strokeStyle,
              fillStyle = context.fillStyle;
          var _context$canvas = context.canvas,
              width = _context$canvas.width,
              height = _context$canvas.height;

          var svg = createPathSVG.apply(undefined, (0, _toConsumableArray3.default)(args).concat([lineWidth, lineCap, lineJoin, strokeStyle, type === 'stroke' ? null : fillStyle, width, height]));
          context.drawImage(svg, 0, 0);
        } else {
          context[cmd].apply(context, (0, _toConsumableArray3.default)(args));
          context[type]();
        }
      });
      context.restore();
    }
  }]);
  return Path2D;
}();

var CanvasRenderingContext2D = nodeCanvas.CanvasRenderingContext2D;
var _stroke = CanvasRenderingContext2D.prototype.stroke;
Object.defineProperty(CanvasRenderingContext2D.prototype, 'stroke', {
  value: function value(p) {
    if (p instanceof Path2D) {
      return p.draw(this, 'stroke');
    }
    return _stroke.call(this);
  }
});

var _fill = CanvasRenderingContext2D.prototype.fill;
Object.defineProperty(CanvasRenderingContext2D.prototype, 'fill', {
  value: function value(p) {
    if (p instanceof Path2D) {
      return p.draw(this, 'fill');
    }
    return _fill.call(this);
  }
});

var EventEmitter = require('events');

var Container = function (_EventEmitter) {
  (0, _inherits3.default)(Container, _EventEmitter);

  function Container(id) {
    (0, _classCallCheck3.default)(this, Container);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Container.__proto__ || (0, _getPrototypeOf2.default)(Container)).call(this));

    _this.id = id;
    _this.children = [];
    _this.clientWidth = 800;
    _this.clientHeight = 600;
    return _this;
  }

  (0, _createClass3.default)(Container, [{
    key: 'appendChild',
    value: function appendChild(node) {
      var _this2 = this;

      this.children.push(node);
      node.remove = function () {
        var idx = _this2.children.indexOf(_this2);
        if (idx !== -1) {
          _this2.children.splice(idx, 1);
        }
      };
    }
  }, {
    key: 'insertBefore',
    value: function insertBefore(node, next) {
      var idx = this.children.indexOf(next);
      if (idx === -1) {
        throw new Error('ERR: no such element');
      } else {
        this.children.splice(idx, 0, node);
      }
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(evt) {
      return this.emit(evt.type, evt);
    }
  }, {
    key: 'addEventListener',
    value: function addEventListener(type, handler) {
      return this.addListener(type, handler);
    }
  }, {
    key: 'removeEventListener',
    value: function removeEventListener(type, handler) {
      return this.removeListener(type, handler);
    }
  }]);
  return Container;
}(EventEmitter);

function getContainer(container) {
  if (typeof container === 'string') {
    container = new Container(container);
  }
  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}