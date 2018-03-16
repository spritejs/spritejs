'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _index = require('./index');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

global.IS_NODE_ENV = true;

global.requestAnimationFrame = function (fn) {
  setTimeout(function () {
    var _process$hrtime = process.hrtime(),
        _process$hrtime2 = (0, _slicedToArray3.default)(_process$hrtime, 2),
        s = _process$hrtime2[0],
        ns = _process$hrtime2[1];

    var t = s * 1e3 + ns * 1e-6;
    fn(t);
  }, 16);
};

var elementMap = new _map2.default();

var Container = function () {
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
  }, {
    key: 'remove',
    value: function remove() {
      elementMap.delete(this.id);
    }
  }]);
  return Container;
}();

global.document = {
  querySelector: function querySelector(selector) {
    var key = 'node_canvas-' + selector.replace(/[#.:()]/g, '');
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
      var canvas = (0, _index.createCanvas)(800, 600);
      canvas.dataset = {};
      canvas.style = {};
      return canvas;
    } else if (nodeType === 'img') {
      return new Image();
    }
    throw new Error('Invalid element. Only canvas and img can be created.');
  }
};

global.Path2D = _index.Path2D;

exports.default = {};