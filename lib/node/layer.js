"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@mesh.js/core");

var _spriteAnimator = require("sprite-animator");

var _animationFrame = require("../utils/animation-frame");

var _group = _interopRequireDefault(require("./group"));

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var defaultOptions = {
  antialias: true,
  autoRender: true
};

var _autoRender = Symbol('autoRender');

var _renderer = Symbol('renderer');

var _timeline = Symbol('timeline');

var _prepareRender = Symbol('prepareRender');

var _tick = Symbol('tick');

var Layer =
/*#__PURE__*/
function (_Group) {
  (0, _inherits2.default)(Layer, _Group);

  function Layer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Layer);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Layer).call(this));

    if (!options.canvas) {
      var _this$getResolution = _this.getResolution(),
          width = _this$getResolution.width,
          height = _this$getResolution.height;

      var _canvas = _core.ENV.createCanvas(width, height, {
        offscreen: !!options.offscreen,
        id: options.id,
        extra: options.extra
      });

      if (_canvas.style) _canvas.style.position = 'absolute';
      if (_canvas.dataset) _canvas.dataset.layerId = options.id;
      if (_canvas.contextType) options.contextType = _canvas.contextType;
      options.canvas = _canvas;
    }

    var canvas = options.canvas;
    var opts = Object.assign({}, defaultOptions, options);
    _this[_autoRender] = opts.autoRender;
    delete options.autoRender;

    var _Renderer = opts.Renderer || _core.Renderer;

    _this[_renderer] = new _Renderer(canvas, opts);

    if (canvas.__gl__) {
      // fix blendFunc for node-canvas-webgl
      var gl = canvas.__gl__;
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }

    _this.options = options;
    _this.id = options.id;

    _this.setResolution(canvas);

    _this.canvas = canvas;
    _this[_timeline] = new _spriteAnimator.Timeline();
    _this.__mouseCapturedTarget = null;
    _this[_tick] = false;
    return _this;
  }

  (0, _createClass2.default)(Layer, [{
    key: "dispatchPointerEvent",
    // isPointCollision(x, y) {
    //   return true;
    // }

    /* override */
    value: function dispatchPointerEvent(event) {
      var type = event.type;

      if (type === 'mousedown' || type === 'mouseup' || type === 'mousemove') {
        var capturedTarget = this.__mouseCapturedTarget;

        if (capturedTarget) {
          if (capturedTarget.layer === this) {
            capturedTarget.dispatchEvent(event);
            return true;
          }

          this.__mouseCapturedTarget = null;
        }
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "dispatchPointerEvent", this).call(this, event);
    }
    /* override */

  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      var _this2 = this;

      if (!this[_prepareRender]) {
        if (this.parent && this.parent.hasOffscreenCanvas) {
          this.parent.forceUpdate();
          var _resolve = null;
          var prepareRender = new Promise(function (resolve) {
            _resolve = resolve;
          });
          prepareRender._resolve = _resolve;
          this[_prepareRender] = prepareRender;
        } else {
          var _resolve2 = null;
          var _requestID = null;

          var _prepareRender2 = new Promise(function (resolve) {
            _resolve2 = resolve;

            if (_this2[_autoRender] && !_this2[_tick]) {
              _requestID = (0, _animationFrame.requestAnimationFrame)(function () {
                delete _prepareRender2._requestID;

                _this2.render();
              });
            }
          });

          _prepareRender2._resolve = _resolve2;
          _prepareRender2._requestID = _requestID;
          this[_prepareRender] = _prepareRender2;
        }
      }
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'zIndex') {
        this.canvas.style.zIndex = newValue;
      }
    }
  }, {
    key: "_prepareRenderFinished",
    value: function _prepareRenderFinished() {
      if (this[_prepareRender]) {
        if (this[_prepareRender]._requestID) {
          (0, _animationFrame.cancelAnimationFrame)(this[_prepareRender]._requestID);
        }

        this[_prepareRender]._resolve();

        delete this[_prepareRender];
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$clear = _ref.clear,
          clear = _ref$clear === void 0 ? true : _ref$clear;

      if (clear) this[_renderer].clear();
      var meshes = this.draw();

      if (meshes && meshes.length) {
        this.renderer.drawMeshes(meshes);
        if (this.canvas.draw) this.canvas.draw();
      }

      this._prepareRenderFinished();
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref2) {
      var width = _ref2.width,
          height = _ref2.height;
      var renderer = this.renderer;
      var m = renderer.globalTransformMatrix;
      var offsetLeft = m[4];
      var offsetTop = m[5];
      var previousDisplayRatio = m[0];

      var _this$getResolution2 = this.getResolution(),
          w = _this$getResolution2.width,
          h = _this$getResolution2.height;

      if (w !== width || h !== height) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "setResolution", this).call(this, {
          width: width,
          height: height
        });

        if (this.canvas) {
          this.canvas.width = width;
          this.canvas.height = height;
        }

        if (renderer.glRenderer) {
          renderer.glRenderer.gl.viewport(0, 0, width, height);
        }

        this.attributes.size = [width, height];
        this.dispatchEvent({
          type: 'resolutionchange',
          width: width,
          height: height
        });
      }

      var _this$renderOffset = (0, _slicedToArray2.default)(this.renderOffset, 2),
          left = _this$renderOffset[0],
          top = _this$renderOffset[1];

      var displayRatio = this.displayRatio;

      if (offsetLeft !== left || offsetTop !== top || previousDisplayRatio !== displayRatio) {
        // console.log(displayRatio, this.parent);
        renderer.setGlobalTransform(displayRatio, 0, 0, displayRatio, left, top);
        this.forceUpdate();
      }
    }
  }, {
    key: "tick",
    value: function tick(handler) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      this[_tick] = true;

      this._prepareRenderFinished();

      var t = this.timeline.fork(options);
      var layer = this;
      (0, _animationFrame.requestAnimationFrame)(function update() {
        handler(t.currentTime);
        if (layer[_autoRender]) layer.render();
        (0, _animationFrame.requestAnimationFrame)(update);
      });
    }
  }, {
    key: "toGlobalPos",
    value: function toGlobalPos(x, y) {
      var _this$getResolution3 = this.getResolution(),
          width = _this$getResolution3.width,
          height = _this$getResolution3.height;

      var offset = this.renderOffset;
      var viewport = [this.canvas.clientWidth, this.canvas.clientHeight];
      x = x * viewport[0] / width + offset[0];
      y = y * viewport[1] / height + offset[1];
      var displayRatio = this.displayRatio;
      return [x * displayRatio, y * displayRatio];
    }
  }, {
    key: "toLocalPos",
    value: function toLocalPos(x, y) {
      var _this$getResolution4 = this.getResolution(),
          width = _this$getResolution4.width,
          height = _this$getResolution4.height;

      var offset = this.renderOffset;
      var viewport = [this.canvas.clientWidth, this.canvas.clientHeight];
      x = x * width / viewport[0] - offset[0];
      y = y * height / viewport[1] - offset[1];
      var displayRatio = this.displayRatio;
      return [x / displayRatio, y / displayRatio];
    }
  }, {
    key: "autoRender",
    get: function get() {
      return this[_autoRender];
    }
  }, {
    key: "displayRatio",
    get: function get() {
      if (this.parent && this.parent.options) {
        return this.parent.options.displayRatio;
      }

      return 1.0;
    }
  }, {
    key: "height",
    get: function get() {
      var _this$getResolution5 = this.getResolution(),
          height = _this$getResolution5.height;

      return height / this.displayRatio;
    }
    /* override */

  }, {
    key: "layer",
    get: function get() {
      return this;
    }
  }, {
    key: "offscreen",
    get: function get() {
      return !!this.options.offscreen || this.canvas._offscreen;
    }
  }, {
    key: "prepareRender",
    get: function get() {
      return this[_prepareRender] ? this[_prepareRender] : Promise.resolve();
    }
    /* override */

  }, {
    key: "renderer",
    get: function get() {
      return this[_renderer];
    }
  }, {
    key: "renderOffset",
    get: function get() {
      if (this.parent && this.parent.options) {
        var _this$parent$options = this.parent.options,
            left = _this$parent$options.left,
            top = _this$parent$options.top;
        return [left, top];
      }

      return [this.options.left | 0, this.options.top | 0];
    }
  }, {
    key: "timeline",
    get: function get() {
      return this[_timeline];
    }
  }, {
    key: "width",
    get: function get() {
      var _this$getResolution6 = this.getResolution(),
          width = _this$getResolution6.width;

      return width / this.displayRatio;
    }
  }]);
  return Layer;
}(_group.default);

exports.default = Layer;

_document.default.registerNode(Layer, 'layer');