'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.requestAnimationFrame = exports.document = exports.Image = exports.Container = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _require = require('canvas'),
    createCanvas = _require.createCanvas,
    Image = _require.Image,
    Canvas = _require.Canvas;

var fs = require('fs');
var axios = require('axios');

var base64Pattern = /^data:image\/\w+;base64,/;

var Container = exports.Container = function () {
  function Container(id) {
    var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '.';
    (0, _classCallCheck3.default)(this, Container);

    this.id = id;
    this.path = path;
    this.children = [];
    this.clientWidth = 800;
    this.clientHeight = 600;
  }

  (0, _createClass3.default)(Container, [{
    key: 'appendChild',
    value: function appendChild(node) {
      this.children.push(node);
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
    key: 'addEventListener',
    value: function addEventListener() {
      // console.warn('addEventListener is not implemented yet.')
    }
  }]);
  return Container;
}();

Object.defineProperty(Image.prototype, 'src', {
  set: function set(data) {
    var _this = this;

    if (typeof data === 'string') {
      if (typeof data === 'string' && base64Pattern.test(data)) {
        var base64Data = data.replace(base64Pattern, '');
        this.source = Buffer.from(base64Data, 'base64');
      } else if (/^https?:\/\//.test(data)) {
        axios.get(data, { responseType: 'arraybuffer' }).then(function (_ref) {
          var data = _ref.data;

          _this.source = data;
        });
      } else {
        fs.readFile(data, function (err, squid) {
          if (err) {
            throw err;
          } else {
            this.source = squid;
          }
        });
      }
    } else {
      this.source = data;
    }
  },
  get: function get() {
    return this.source;
  }
});

Canvas.prototype.cloneNode = function (copyContent) {
  var width = this.width,
      height = this.height;

  var copied = createCanvas(width, height);
  if (copyContent) {
    var ctx = copied.getContext('2d');
    ctx.drawImage(this, 0, 0, width, height);
  }
  return copied;
};

var elementMap = new _map2.default();

var document = {
  querySelector: function querySelector(selector) {
    var key = 'res-' + selector.replace(/[#.:()]/g, '');
    return this.getElementById(key);
  },
  getElementById: function getElementById(id) {
    if (elementMap.has(id)) {
      return elementMap.get(id);
    }
    var el = new Container(id);
    elementMap.set(id, el);
    return el;
  },
  createElement: function createElement(nodeType) {
    if (nodeType === 'canvas') {
      var canvas = createCanvas(800, 600);
      canvas.dataset = {};
      canvas.style = {};
      return canvas;
    } else if (nodeType === 'img') {
      return new Image();
    }
    throw new Error('Invalid element. Only canvas and img can be created.');
  }
};

function requestAnimationFrame(fn) {
  setTimeout(function () {
    var _process$hrtime = process.hrtime(),
        _process$hrtime2 = (0, _slicedToArray3.default)(_process$hrtime, 2),
        s = _process$hrtime2[0],
        ns = _process$hrtime2[1];

    var t = s * 1e3 + ns * 1e-6;
    fn(t);
  }, 16);
}

exports.Image = Image;
exports.document = document;
exports.requestAnimationFrame = requestAnimationFrame;