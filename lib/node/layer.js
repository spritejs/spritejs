"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _core = require("@mesh.js/core");

var _spriteAnimator = require("sprite-animator");

var _animationFrame = require("../utils/animation-frame");

var _group = _interopRequireDefault(require("./group"));

var _document = _interopRequireDefault(require("../document"));

var _texture = require("../utils/texture");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var defaultOptions = {
  antialias: true,
  autoRender: true,
  alpha: true // for wx-miniprogram

};

var _autoRender = Symbol('autoRender');

var _renderer = Symbol('renderer');

var _timeline = Symbol('timeline');

var _prepareRender = Symbol('prepareRender');

var _tickRender = Symbol('tickRender');

var _pass = Symbol('pass');

var _fbo = Symbol('fbo');

var _tickers = Symbol('tickers');

var Layer = /*#__PURE__*/function (_Group) {
  (0, _inherits2.default)(Layer, _Group);

  var _super = _createSuper(Layer);

  function Layer() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Layer);
    _this = _super.call(this);

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

    _this[_renderer] = new _Renderer(canvas, opts); // if(canvas.__gl__) {
    //   // fix blendFunc for node-canvas-webgl
    //   const gl = canvas.__gl__;
    //   gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    // }

    _this.options = options;
    _this.id = options.id;
    _this[_pass] = [];

    _this.setResolution(canvas);

    _this.canvas = canvas;
    _this[_timeline] = new _spriteAnimator.Timeline();
    _this.__mouseCapturedTarget = null;
    return _this;
  }

  (0, _createClass2.default)(Layer, [{
    key: "forceContextLoss",
    value: function forceContextLoss() {
      var gl = this.renderer.glRenderer;

      if (gl) {
        var ext = gl.getExtension('WEBGL_lose_context');

        if (ext) {
          ext.loseContext();
          return true;
        }
      }

      return false;
    } // isPointCollision(x, y) {
    //   return true;
    // }

  }, {
    key: "addPass",
    value: function addPass() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          vertex = _ref.vertex,
          fragment = _ref.fragment,
          options = _ref.options,
          uniforms = _ref.uniforms;

      if (this.renderer.glRenderer) {
        var _this$getResolution2 = this.getResolution(),
            width = _this$getResolution2.width,
            height = _this$getResolution2.height;

        var program = this.renderer.createPassProgram({
          vertex: vertex,
          fragment: fragment,
          options: options
        });
        var figure = new _core.Figure2D();
        figure.rect(0, 0, width / this.displayRatio, height / this.displayRatio);
        var mesh = new _core.Mesh2D(figure);
        mesh.setUniforms(uniforms);
        mesh.setProgram(program);

        this[_pass].push(mesh);

        this.forceUpdate();
        return mesh;
      }

      return null;
    } // delete unused texture to release memory.

  }, {
    key: "deleteTexture",
    value: function deleteTexture(image) {
      return (0, _texture.deleteTexture)(image, this.renderer);
    }
    /* override */

  }, {
    key: "dispatchPointerEvent",
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

            if (_this2[_autoRender]) {
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
  }, {
    key: "getFBO",
    value: function getFBO() {
      var renderer = this.renderer.glRenderer;

      var _this$getResolution3 = this.getResolution(),
          width = _this$getResolution3.width,
          height = _this$getResolution3.height;

      if (renderer && (!this[_fbo] || this[_fbo].width !== width || this[_fbo].height !== height)) {
        this[_fbo] = {
          width: width,
          height: height,
          target: renderer.createFBO(),
          buffer: renderer.createFBO(),
          swap: function swap() {
            var _ref2 = [this.buffer, this.target];
            this.target = _ref2[0];
            this.buffer = _ref2[1];
          }
        };
        return this[_fbo];
      }

      return this[_fbo] ? this[_fbo] : null;
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
      var _this3 = this;

      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$clear = _ref3.clear,
          clear = _ref3$clear === void 0 ? true : _ref3$clear;

      var fbo = this[_pass].length ? this.getFBO() : null;

      if (fbo) {
        this.renderer.glRenderer.bindFBO(fbo.target);
      }

      if (clear) this[_renderer].clear();
      var meshes = this.draw();

      if (meshes && meshes.length) {
        this.renderer.drawMeshes(meshes);
        if (this.canvas.draw) this.canvas.draw();
      }

      if (fbo) {
        var renderer = this.renderer.glRenderer;
        var len = this[_pass].length;

        var _this$getResolution4 = this.getResolution(),
            width = _this$getResolution4.width,
            height = _this$getResolution4.height;

        var rect = [0, 0, width / this.displayRatio, height / this.displayRatio];

        this[_pass].forEach(function (pass, idx) {
          pass.blend = true;
          pass.setTexture(fbo.target.texture, {
            rect: rect
          });
          if (idx === len - 1) renderer.bindFBO(null);else {
            fbo.swap();
            renderer.bindFBO(fbo.target);
          }

          _this3[_renderer].clear();

          _this3.renderer.drawMeshes([pass]);
        });
      }

      this._prepareRenderFinished();
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref4) {
      var _this4 = this;

      var width = _ref4.width,
          height = _ref4.height;
      var renderer = this.renderer;
      var m = renderer.globalTransformMatrix;
      var offsetLeft = m[4];
      var offsetTop = m[5];
      var previousDisplayRatio = m[0];

      var _this$getResolution5 = this.getResolution(),
          w = _this$getResolution5.width,
          h = _this$getResolution5.height;

      if (w !== width || h !== height) {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Layer.prototype), "setResolution", this).call(this, {
          width: width,
          height: height
        });

        if (this.canvas) {
          this.canvas.width = width;
          this.canvas.height = height;
          if (renderer.updateResolution) renderer.updateResolution();
        }

        this.attributes.size = [width, height];

        if (this[_pass].length) {
          this[_pass].forEach(function (pass) {
            var figure = new _core.Figure2D();
            figure.rect(0, 0, width / _this4.displayRatio, height / _this4.displayRatio);
            pass.contours = figure.contours;
          });
        } // this.dispatchEvent({type: 'resolutionchange', width, height});

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
    /**
     * tick(handler, {originTime = 0, playbackRate = 1.0, duration = Infinity})
     * @param {*} handler
     * @param {*} options
     */

  }, {
    key: "tick",
    value: function tick() {
      var _this5 = this;

      var handler = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      var _ref5 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref5$duration = _ref5.duration,
          duration = _ref5$duration === void 0 ? Infinity : _ref5$duration,
          timelineOptions = (0, _objectWithoutProperties2.default)(_ref5, ["duration"]);

      // this._prepareRenderFinished();
      var t = this.timeline.fork(timelineOptions);
      var layer = this;
      this[_tickers] = this[_tickers] || [];

      this[_tickers].push({
        handler: handler,
        duration: duration
      });

      var update = function update() {
        var _resolve = null;
        var _requestID = null;

        var _update = function _update() {
          // const ret = handler ? handler(t.currentTime, p) : null;
          var ret = _this5[_tickers].map(function (_ref6) {
            var handler = _ref6.handler,
                duration = _ref6.duration;
            var p = Math.min(1.0, t.currentTime / duration);
            var value = handler ? handler(t.currentTime, p) : null;
            return {
              value: value,
              p: p
            };
          });

          if (layer[_autoRender] && !layer[_tickRender]) {
            layer[_tickRender] = Promise.resolve().then(function () {
              layer.render();
              delete layer[_tickRender];

              for (var i = ret.length - 1; i >= 0; i--) {
                var _ret$i = ret[i],
                    value = _ret$i.value,
                    p = _ret$i.p;

                if (value === false || p >= 1.0) {
                  _this5[_tickers].splice(i, 1);
                }
              }

              if (_this5[_tickers].length > 0) {
                update();
              }
            });
          }
        };

        if (_this5[_prepareRender] && _this5[_prepareRender]._type !== 'ticker') {
          (0, _animationFrame.cancelAnimationFrame)(_this5[_prepareRender]._requestID);
          delete _this5[_prepareRender];
        }

        if (!_this5[_prepareRender]) {
          var prepareRender = new Promise(function (resolve) {
            _resolve = resolve;
            _requestID = (0, _animationFrame.requestAnimationFrame)(_update);
          });
          prepareRender._resolve = _resolve;
          prepareRender._requestID = _requestID;
          prepareRender._type = 'ticker';
          _this5[_prepareRender] = prepareRender;
        }
      };

      update();
    }
  }, {
    key: "toGlobalPos",
    value: function toGlobalPos(x, y) {
      var _this$getResolution6 = this.getResolution(),
          width = _this$getResolution6.width,
          height = _this$getResolution6.height;

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
      var _this$getResolution7 = this.getResolution(),
          width = _this$getResolution7.width,
          height = _this$getResolution7.height;

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
      var _this$getResolution8 = this.getResolution(),
          height = _this$getResolution8.height;

      return height / this.displayRatio;
    }
  }, {
    key: "gl",
    get: function get() {
      if (this.renderer.glRenderer) {
        return this.renderer.glRenderer.gl;
      }

      return null;
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
    key: "pass",
    get: function get() {
      return this[_pass];
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
      var _this$getResolution9 = this.getResolution(),
          width = _this$getResolution9.width;

      return width / this.displayRatio;
    }
  }]);
  return Layer;
}(_group.default);

exports.default = Layer;

_document.default.registerNode(Layer, 'layer');