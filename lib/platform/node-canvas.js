"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _events = _interopRequireDefault(require("events"));

var _nodeCanvasWebgl = require("node-canvas-webgl");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function polyfill(_ref) {
  var ENV = _ref.ENV;
  ENV.createCanvas = _nodeCanvasWebgl.createCanvas;
  ENV.loadImage = _nodeCanvasWebgl.loadImage;

  ENV.Container =
  /*#__PURE__*/
  function (_EventEmitter) {
    (0, _inherits2.default)(_class, _EventEmitter);

    function _class() {
      var _this;

      var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 800;
      var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 600;
      (0, _classCallCheck2.default)(this, _class);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(_class).call(this));
      _this.children = [];
      _this.clientWidth = width;
      _this.clientHeight = height;
      return _this;
    }

    (0, _createClass2.default)(_class, [{
      key: "appendChild",
      value: function appendChild(node) {
        if (node.parent) node.parent.removeChild(node);
        node.parent = this;
        this.children.push(node);
      }
    }, {
      key: "removeChild",
      value: function removeChild(node) {
        var idx = this.children.indexOf(node);

        if (idx !== -1) {
          this.children.splice(idx, 1);
          node.parent = null;
        }

        return node;
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent(evt) {
        evt.target = this;
        return this.emit(evt.type, evt);
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(type, handler) {
        return this.addListener(type, handler);
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener(type, handler) {
        if (handler) {
          return this.removeListener(type, handler);
        }

        return this.removeAllListeners(type);
      }
    }, {
      key: "childNodes",
      get: function get() {
        return this.children;
      }
    }]);
    return _class;
  }(_events.default);
}