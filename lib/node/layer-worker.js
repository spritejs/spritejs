"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

var _core = require("@mesh.js/core");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _inited = Symbol('inited');

var LayerWorker = null; // eslint-disable-line import/no-mutable-exports

if (typeof Worker === 'function') {
  LayerWorker = /*#__PURE__*/function (_Worker) {
    (0, _inherits2.default)(LayerWorker, _Worker);

    var _super = _createSuper(LayerWorker);

    function LayerWorker(options) {
      var _this;

      (0, _classCallCheck2.default)(this, LayerWorker);

      if (options.worker === true) {
        options.worker = "./".concat(options.id, ".worker.js");
      }

      _this = _super.call(this, options.worker);
      _this.options = options;

      if (!options.canvas) {
        var _this$getResolution = _this.getResolution(),
            width = _this$getResolution.width,
            height = _this$getResolution.height;

        var canvas = _core.ENV.createCanvas(width, height, {
          offscreen: false
        });

        if (canvas.style) canvas.style.position = 'absolute';
        if (canvas.dataset) canvas.dataset.layerId = options.id;
        options.canvas = canvas;
      }

      _this.canvas = options.canvas;
      return _this;
    }

    (0, _createClass2.default)(LayerWorker, [{
      key: "setResolution",
      value: function setResolution(_ref) {
        var width = _ref.width,
            height = _ref.height;

        if (!this[_inited]) {
          this.canvas.width = width;
          this.canvas.height = height;
          var options = this.options;
          var offscreenCanvas = options.canvas.transferControlToOffscreen();

          var opts = _objectSpread({}, options);

          delete opts.container;
          opts.canvas = offscreenCanvas;
          this.postMessage({
            type: 'create',
            options: opts
          }, [offscreenCanvas]);
          this[_inited] = true;
        } else {
          this.postMessage({
            type: 'resolution_change',
            width: width,
            height: height
          }); // throw new Error('Cannot change resolution of layer-worker.');
        }
      }
    }, {
      key: "getResolution",
      value: function getResolution() {
        if (this.canvas) {
          var _this$canvas = this.canvas,
              width = _this$canvas.width,
              height = _this$canvas.height;
          return {
            width: width,
            height: height
          };
        }

        return {
          width: 300,
          height: 150
        };
      }
    }, {
      key: "remove",
      value: function remove() {
        if (this.parent && this.parent.removeChild) {
          this.parent.removeChild(this);
          return true;
        }

        return false;
      }
    }, {
      key: "connect",
      value: function connect(parent, zOrder) {
        Object.defineProperty(this, 'parent', {
          value: parent,
          writable: false,
          configurable: true
        });
        Object.defineProperty(this, 'zOrder', {
          value: zOrder,
          writable: false,
          configurable: true
        });
      }
    }, {
      key: "disconnect",
      value: function disconnect() {
        delete this.parent;
        delete this.zOrder;
      }
    }, {
      key: "dispatchPointerEvent",
      value: function dispatchPointerEvent(event) {
        this.postMessage({
          type: 'event',
          event: {
            cancelBubble: event.cancelBubble,
            bubbles: event.bubbles,
            detail: event.detail,
            identifier: event.identifier,
            layerX: event.layerX,
            layerY: event.layerY,
            originalX: event.originalX,
            originalY: event.originalY,
            type: event.type,
            x: event.x,
            y: event.y
          }
        });
      }
    }, {
      key: "id",
      get: function get() {
        return this.options.id;
      }
    }]);
    return LayerWorker;
  }( /*#__PURE__*/(0, _wrapNativeSuper2.default)(Worker));
}

var _default = LayerWorker;
exports.default = _default;