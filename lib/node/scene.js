"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _core = require("@mesh.js/core");

var _animationFrame = require("../utils/animation-frame");

var _node = _interopRequireDefault(require("./node"));

var _layer2 = _interopRequireDefault(require("./layer"));

var _layerWorker = _interopRequireDefault(require("./layer-worker"));

var _group = _interopRequireDefault(require("./group"));

var _pointerEvents = _interopRequireDefault(require("../event/pointer-events"));

var _event = _interopRequireDefault(require("../event/event"));

var _texture = require("../utils/texture");

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _enteredTargets = Symbol('enteredTargets');

function wrapLayer(layer) {
  // append dom element
  layer.id = layer.id || "_layer".concat(Math.random().toString(36).slice(2, 12));

  if (!layer.dataset) {
    layer.dataset = {};
  }

  layer.dataset.layerId = layer.id; // fixed layer replacer

  layer.connect = function (parent, zOrder) {
    layer.parent = parent;
    Object.defineProperty(layer, 'zOrder', {
      value: zOrder,
      writable: false,
      configurable: true
    });
  };

  layer.disconnect = function (parent) {
    delete layer.zOrder;
  };

  layer.canvas = layer;

  layer.getResolution = function () {
    return {
      width: 0,
      height: 0
    };
  };

  layer.setResolution = function () {
    return false;
  };

  layer.options = {
    handleEvent: false
  };
  return layer;
}

function getRefCanvas(scene, layer) {
  var children = scene.children;
  var ref = null;

  for (var i = 0; i < children.length; i++) {
    var child = children[i];

    if (layer === child || ref != null) {
      ref = child;
    }

    if (ref && ref !== layer && !ref.offscreen) {
      return ref.canvas;
    }
  }

  return null;
}

function drawImage(layer, offscreenLayer) {
  var _layer$renderOffset = (0, _slicedToArray2.default)(layer.renderOffset, 2),
      left = _layer$renderOffset[0],
      top = _layer$renderOffset[1];

  var _layer$getResolution = layer.getResolution(),
      width = _layer$getResolution.width,
      height = _layer$getResolution.height;

  var displayRatio = layer.displayRatio;
  layer.renderer.drawImage(offscreenLayer.canvas, -left / displayRatio, -top / displayRatio, width / displayRatio, height / displayRatio);
}

var touchEventCapturedTargets = {};

function delegateEvents(scene) {
  var events = ['mousedown', 'mouseup', 'mousemove', 'mousewheel', 'wheel', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'click', 'dblclick', 'longpress', 'tap'];
  var container = scene.container;
  var _scene$options = scene.options,
      left = _scene$options.left,
      top = _scene$options.top,
      displayRatio = _scene$options.displayRatio;
  container.addEventListener('mouseleave', function (event) {
    var enteredTargets = scene[_enteredTargets];

    if (enteredTargets.size) {
      var leaveEvent = new _event.default('mouseleave');
      leaveEvent.setOriginalEvent(event);
      (0, _toConsumableArray2.default)(enteredTargets).forEach(function (target) {
        target.dispatchEvent(leaveEvent);
      });

      scene[_enteredTargets].clear();
    }
  }, {
    passive: true
  });
  events.forEach(function (eventType) {
    container.addEventListener(eventType, function (event) {
      var layers = scene.orderedChildren;
      var pointerEvents = (0, _pointerEvents.default)(event, {
        offsetLeft: left,
        offsetTop: top,
        displayRatio: displayRatio
      });
      pointerEvents.forEach(function (evt) {
        // evt.scene = scene;
        var id = evt.identifier;

        if (evt.type === 'touchmove' || evt.type === 'touchend') {
          var capturedTarget = touchEventCapturedTargets[id];
          if (capturedTarget) capturedTarget.dispatchEvent(evt);
          if (evt.type === 'touchend') delete touchEventCapturedTargets[id];
        } else {
          for (var i = layers.length - 1; i >= 0; i--) {
            var layer = layers[i];

            if (layer.options.handleEvent !== false) {
              var ret = layer.dispatchPointerEvent(evt);
              if (ret && evt.target !== layer) break;else evt.cancelBubble = false; // prepare passing to next layer
            }
          }

          if (evt.target === layers[0]) {
            // trigger event on top layer
            for (var _i = layers.length - 1; _i >= 0; _i--) {
              var _layer = layers[_i];

              if (_layer.options.handleEvent !== false) {
                evt.target = _layer;
                break;
              }
            }
          }
        }

        var target = evt.target;

        if (evt.type === 'touchstart') {
          touchEventCapturedTargets[id] = evt.target; // set captured event target
        }

        if (evt.type === 'mousemove') {
          var enteredTargets = scene[_enteredTargets];
          var enterSet;

          if (target) {
            var ancestors = target.ancestors || [];
            enterSet = new Set([target].concat((0, _toConsumableArray2.default)(ancestors)));
          } else {
            enterSet = new Set();
          }

          var entries = Object.entries(event);

          if (!enteredTargets.has(target)) {
            if (target) {
              var enterEvent = new _event.default('mouseenter');
              enterEvent.setOriginalEvent(event);
              entries.forEach(function (_ref) {
                var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                    key = _ref2[0],
                    value = _ref2[1];

                enterEvent[key] = value;
              });
              enteredTargets.add(target);
              target.dispatchEvent(enterEvent);
              var _ancestors = target.ancestors;

              if (_ancestors) {
                _ancestors.forEach(function (ancestor) {
                  if (ancestor instanceof _node.default && !enteredTargets.has(ancestor)) {
                    enteredTargets.add(ancestor);
                    ancestor.dispatchEvent(enterEvent);
                  }
                });
              }
            }
          }

          var leaveEvent = new _event.default('mouseleave');
          leaveEvent.setOriginalEvent(event);
          entries.forEach(function (_ref3) {
            var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                key = _ref4[0],
                value = _ref4[1];

            leaveEvent[key] = value;
          });
          (0, _toConsumableArray2.default)(enteredTargets).forEach(function (target) {
            if (!enterSet.has(target)) {
              enteredTargets.delete(target);
              target.dispatchEvent(leaveEvent);
            }
          });
        }
      });
    }, {
      passive: true
    });
  });
}

function setViewport(options, canvas) {
  if (canvas && canvas.style) {
    var width = options.width,
        height = options.height,
        mode = options.mode,
        container = options.container;
    var clientWidth = container.clientWidth,
        clientHeight = container.clientHeight;
    width = width || clientWidth;
    height = height || clientHeight;

    if (mode === 'static') {
      canvas.style.width = "".concat(width, "px");
      canvas.style.height = "".concat(height, "px"); // canvas.style.top = '50%';
      // canvas.style.left = '50%';
      // canvas.style.transform = 'translate(-50%, -50%)';
      // canvas.style.webkitTransform = 'translate(-50%, -50%)';
    } else {
      canvas.style.top = '0';
      canvas.style.left = '0';
      canvas.style.width = "".concat(clientWidth, "px");
      canvas.style.height = "".concat(clientHeight, "px");
      canvas.style.transform = '';
      canvas.style.webkitTransform = '';
    }
  }
}

var _offscreenLayerCount = Symbol('offscreenLayerCount');

var Scene = /*#__PURE__*/function (_Group) {
  (0, _inherits2.default)(Scene, _Group);

  var _super = _createSuper(Scene);

  /**
    width
    height
    mode: 'static', 'scale', 'stickyWidth', 'stickyHeight', 'stickyTop', 'stickyBottom', 'stickyLeft', 'stickyRight'
   */
  function Scene() {
    var _this;

    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Scene);
    _this = _super.call(this);

    if (!options.container) {
      if (typeof _core.ENV.Container === 'function') {
        options.container = new _core.ENV.Container(options.width || 300, options.height || 150);
      } else {
        throw new Error('No container specified.');
      }
    }

    _this.container = options.container;

    if (_this.container.style) {
      if (!_this.container.style.overflow) {
        _this.container.style.overflow = 'hidden';
      }

      if (!_this.container.style.position) {
        _this.container.style.position = 'relative';
      }
    }

    _this.options = options;
    options.displayRatio = options.displayRatio || 1.0;
    options.mode = options.mode || 'scale';
    options.left = 0;
    options.top = 0;
    options.autoResize = options.autoResize !== false;

    if (options.autoResize) {
      if (global.addEventListener) {
        var that = (0, _assertThisInitialized2.default)(_this);
        global.addEventListener('resize', function listener() {
          if (typeof document !== 'undefined' && document.contains(that.container)) {
            that.resize();
          } else {
            global.removeEventListener('resize', listener);
          }
        });
      }
    }

    _this[_enteredTargets] = new Set();

    _this.setResolution(options);

    delegateEvents((0, _assertThisInitialized2.default)(_this));
    _this[_offscreenLayerCount] = 0;
    return _this;
  }

  (0, _createClass2.default)(Scene, [{
    key: "appendChild",

    /* override */
    value: function appendChild(layer) {
      if (!(layer instanceof _layer2.default) && !(layer instanceof _layerWorker.default)) {
        wrapLayer(layer);
      }

      var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "appendChild", this).call(this, layer);
      var canvas = layer.canvas;

      if (!layer.offscreen) {
        this.container.appendChild(canvas);
      } else {
        this[_offscreenLayerCount]++;
      }

      setViewport(this.options, canvas);
      layer.setResolution(this.getResolution());
      return ret;
    }
    /* override */

  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      var _this2 = this;

      if (this.hasOffscreenCanvas && !this._requestID) {
        this._requestID = (0, _animationFrame.requestAnimationFrame)(function () {
          delete _this2._requestID;

          _this2.render();
        });
      }
    }
    /* override */

  }, {
    key: "insertBefore",
    value: function insertBefore(layer, ref) {
      if (!(layer instanceof _layer2.default) && !(layer instanceof _layerWorker.default)) {
        wrapLayer(layer);
      }

      var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "insertBefore", this).call(this, layer, ref);
      var canvas = layer.canvas;

      if (!layer.offscreen) {
        var refChild = getRefCanvas(this, layer);
        this.container.insertBefore(canvas, refChild);
      }

      setViewport(this.options, canvas);
      layer.setResolution(this.getResolution());
      return ret;
    }
  }, {
    key: "layer",
    value: function layer() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      options = Object.assign({}, this.options, options);
      options.id = id;
      var layers = this.orderedChildren;

      for (var i = 0; i < layers.length; i++) {
        if (layers[i].id === id) return layers[i];
      }

      var worker = options.worker;
      var layer;

      if (worker) {
        layer = new _layerWorker.default(options);
      } else {
        layer = new _layer2.default(options); // layer.id = id;
      }

      this.appendChild(layer);
      return layer;
    }
  }, {
    key: "preload",
    value: function () {
      var _preload = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this3 = this;

        var _len,
            resources,
            _key,
            loaded,
            tasks,
            ret,
            _loop,
            i,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, resources = new Array(_len), _key = 0; _key < _len; _key++) {
                  resources[_key] = _args[_key];
                }

                loaded = [], tasks = [], ret = [];

                _loop = function _loop(i) {
                  var res = resources[i];
                  var task = void 0;

                  if (typeof res === 'string') {
                    task = (0, _texture.loadTexture)(res);
                  } else if (Array.isArray(res)) {
                    task = _texture.loadFrames.apply(void 0, (0, _toConsumableArray2.default)(res));
                  } else {
                    var id = res.id,
                        src = res.src;
                    task = (0, _texture.loadTexture)(src, id);
                  }
                  /* istanbul ignore if  */


                  if (!(task instanceof Promise)) {
                    task = Promise.resolve(task);
                  }

                  tasks.push(task.then(function (r) {
                    loaded.push(r);
                    ret[i] = r;
                    var preloadEvent = new _event.default({
                      type: 'preload',
                      detail: {
                        current: r,
                        loaded: loaded,
                        resources: resources
                      }
                    });

                    _this3.dispatchEvent(preloadEvent);
                  }));
                };

                for (i = 0; i < resources.length; i++) {
                  _loop(i);
                }

                _context.next = 6;
                return Promise.all(tasks);

              case 6:
                return _context.abrupt("return", ret);

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function preload() {
        return _preload.apply(this, arguments);
      }

      return preload;
    }()
    /* override */

  }, {
    key: "removeChild",
    value: function removeChild(layer) {
      var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "removeChild", this).call(this, layer);

      if (ret) {
        if (layer._prepareRenderFinished) layer._prepareRenderFinished();
        var canvas = layer.canvas;
        if (canvas && canvas.remove) canvas.remove();
        if (layer.offscreen) this[_offscreenLayerCount]--;
      }

      return ret;
    } // for offscreen mode rendering

  }, {
    key: "render",
    value: function render() {
      var layers = this.orderedChildren;
      var hostLayer = null;
      var offscreens = [];

      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];
        var hasOffscreens = offscreens.length > 0;

        if (layer instanceof _layer2.default && !layer.offscreen) {
          if (!layer.autoRender) {
            if (hasOffscreens) {
              console.warn('Some offscreen canvas will not be rendered.');
              offscreens.length = 0;
            }
          } else {
            hostLayer = layer;

            if (hasOffscreens) {
              layer.renderer.clear();

              for (var j = 0; j < offscreens.length; j++) {
                var ol = offscreens[j];
                ol.render();
                drawImage(layer, ol);
              }

              offscreens.length = 0;
              layer.render({
                clear: false
              });
            } else if (layer.prepareRender) {
              layer.render();
            }
          }
        } else if (layer.offscreen) {
          if (hostLayer) {
            if (layer.prepareRender) layer.render();
            drawImage(hostLayer, layer);
          } else {
            offscreens.push(layer);
          }
        } else if (layer instanceof _layerWorker.default && hasOffscreens) {
          console.warn('Some offscreen canvas will not be rendered.');
          offscreens.length = 0;
        }
      }
    }
    /* override */

  }, {
    key: "replaceChild",
    value: function replaceChild(layer, ref) {
      var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "replaceChild", this).call(this, layer, ref);
      if (ref.canvas.remove) ref.canvas.remove();
      if (ref.offscreen) this[_offscreenLayerCount]--;
      var canvas = layer.canvas;

      if (!layer.offscreen) {
        var refChild = getRefCanvas(this, layer);
        this.container.insertBefore(canvas, refChild);
      }

      setViewport(this.options, canvas);
      layer.setResolution(this.getResolution());
      return ret;
    }
  }, {
    key: "resize",
    value: function resize() {
      var options = this.options;
      this.children.forEach(function (layer) {
        setViewport(options, layer.canvas);
      });
      this.setResolution(options);
      this.dispatchEvent({
        type: 'resize'
      });
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution() {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          width = _ref5.width,
          height = _ref5.height;

      var container = this.container;
      var clientWidth = container.clientWidth,
          clientHeight = container.clientHeight;

      if (width == null || height == null) {
        width = width == null ? clientWidth : width;
        height = height == null ? clientHeight : height;
      }

      var _this$options = this.options,
          mode = _this$options.mode,
          displayRatio = _this$options.displayRatio;
      width *= displayRatio;
      height *= displayRatio;
      this.options.left = 0;
      this.options.top = 0;

      if (mode === 'stickyHeight' || mode === 'stickyLeft' || mode === 'stickyRight') {
        var w = width;
        width = clientWidth * height / clientHeight;
        if (mode === 'stickyHeight') this.options.left = 0.5 * (width - w);
        if (mode === 'stickyRight') this.options.left = width - w;
      } else if (mode === 'stickyWidth' || mode === 'stickyTop' || mode === 'stickyBottom') {
        var h = height;
        height = clientHeight * width / clientWidth;
        if (mode === 'stickyWidth') this.options.top = 0.5 * (height - h);
        if (mode === 'stickyBottom') this.options.top = height - h;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });
    }
  }, {
    key: "snapshot",
    value: function snapshot() {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$offscreen = _ref6.offscreen,
          offscreen = _ref6$offscreen === void 0 ? false : _ref6$offscreen,
          layers = _ref6.layers;

      var _canvas = offscreen ? 'snapshotOffScreenCanvas' : 'snapshotCanvas';

      var _this$getResolution = this.getResolution(),
          width = _this$getResolution.width,
          height = _this$getResolution.height;

      this[_canvas] = this[_canvas] || _core.ENV.createCanvas(width, height, {
        offscreen: offscreen
      });

      var context = this[_canvas].getContext('2d');

      layers = layers || this.orderedChildren;
      context.clearRect(0, 0, width, height);

      for (var i = 0; i < layers.length; i++) {
        var layer = layers[i];

        if (!layer.options.ignoreSnapshot) {
          if (layer.render) layer.render();
          var canvas = layer.canvas;

          if (canvas && canvas !== layer) {
            context.drawImage(canvas, 0, 0, width, height);
          }
        }
      }

      return this[_canvas];
    }
  }, {
    key: "hasOffscreenCanvas",
    get: function get() {
      return this[_offscreenLayerCount] > 0;
    }
  }, {
    key: "displayRatio",
    set: function set(value) {
      var oldValue = this.options.displayRatio;

      if (oldValue !== value) {
        this.options.displayRatio = value;
        this.resize();
      }
    },
    get: function get() {
      return this.options.displayRatio;
    }
  }, {
    key: "height",
    set: function set(value) {
      var oldValue = this.options.height;

      if (oldValue !== value) {
        this.options.height = value;
        this.resize();
      }
    },
    get: function get() {
      return this.options.height;
    }
  }, {
    key: "mode",
    set: function set(value) {
      var oldValue = this.options.mode;

      if (oldValue !== value) {
        this.options.mode = value;
        this.resize();
      }
    },
    get: function get() {
      return this.options.mode;
    }
  }, {
    key: "width",
    set: function set(value) {
      var oldValue = this.options.width;

      if (oldValue !== value) {
        this.options.width = value;
        this.resize();
      }
    },
    get: function get() {
      return this.options.width;
    }
  }]);
  return Scene;
}(_group.default);

exports.default = Scene;

_document.default.registerNode(Scene, 'scene');