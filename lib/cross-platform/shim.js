'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

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

global.Path2D = _index.Path2D;

var CustomEvent = function CustomEvent(type) {
  var evt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  (0, _classCallCheck3.default)(this, CustomEvent);

  this.type = type;
  (0, _assign2.default)(this, evt);
};

global.CustomEvent = CustomEvent;

exports.default = {};