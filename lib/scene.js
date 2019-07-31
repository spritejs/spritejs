"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@spritejs/core");

var _layer = _interopRequireDefault(require("./layer"));

var _resource = _interopRequireDefault(require("./resource"));

var _platform = require("./platform");

var _devtools = require("./platform/devtools");

var setDeprecation = _core.utils.setDeprecation,
    sortOrderedSprites = _core.utils.sortOrderedSprites;

var _layerMap = Symbol('layerMap'),
    _zOrder = Symbol('zOrder'),
    _layers = Symbol('layers'),
    _snapshot = Symbol('snapshot'),
    _viewport = Symbol('viewport'),
    _resolution = Symbol('resolution'),
    _resizeHandler = Symbol('resizeHandler'),
    _attrs = Symbol('attrs'),
    _events = Symbol('events'),
    _subscribe = Symbol('subscribe'),
    _displayRatio = Symbol('displayRatio');

var Scene =
/*#__PURE__*/
function (_BaseNode) {
  (0, _inherits2.default)(Scene, _BaseNode);

  function Scene(container) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, Scene);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scene).call(this));
    container = (0, _platform.getContainer)(container);
    _this.container = container;
    container.scene_ = (0, _assertThisInitialized2.default)(_this);
    /* istanbul ignore if */

    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */

      options = {
        viewport: [arguments[1], arguments[2]]
      };
      /* eslint-enabel prefer-rest-params */
    }

    _this[_zOrder] = 0;
    _this[_layerMap] = {};
    _this[_layers] = [];
    _this[_snapshot] = (0, _platform.createCanvas)();
    var viewport = options.viewport || ['', ''];
    _this.viewport = viewport; // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend

    _this.stickMode = options.stickMode || 'scale';
    _this.stickExtend = !!options.stickExtend;
    _this.stickOffset = [0, 0];
    _this.resolution = options.resolution || (0, _toConsumableArray2.default)(_this.viewport);
    _this.maxDisplayRatio = options.maxDisplayRatio || Infinity;
    _this.displayRatio = options.displayRatio || 1.0; // d3-friendly

    _this.namespaceURI = 'http://spritejs.org/scene';
    var that = (0, _assertThisInitialized2.default)(_this);
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), 'ownerDocument', {
      get: function get() {
        return {
          createElementNS: function createElementNS(uri, name) {
            return that.layer(name);
          },
          documentElement: typeof document !== 'undefined' ? document : null
        };
      }
    });
    _this[_events] = new Set();
    var events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'touchcancel', 'click', 'dblclick'];
    events.forEach(function (event) {
      return _this.delegateEvent(event);
    });
    /* istanbul ignore next */

    container.addEventListener('DOMNodeRemovedFromDocument', function () {
      if (_this[_resizeHandler]) {
        window.removeEventListener('resize', _this[_resizeHandler]);
        delete _this[_resizeHandler];
      }
    });
    _this[_attrs] = new Set(['resolution', 'viewport', 'stickMode', 'stickExtend', 'subscribe', 'displayRatio', 'maxDisplayRatio']);
    _this[_subscribe] = null;
    return _this;
  } // unit vw、rw (default 1rw ?)


  (0, _createClass2.default)(Scene, [{
    key: "insertBefore",
    value: function insertBefore(newchild, refchild) {
      var _this2 = this;

      if (refchild == null) {
        return this.appendLayer(newchild);
      }

      if (!this.hasLayer(refchild)) {
        throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
      }

      this.appendLayer(newchild, false);
      this.container.insertBefore(newchild.canvas || newchild, refchild.canvas || refchild);
      var els = this.container.children;
      (0, _toConsumableArray2.default)(els).forEach(function (el, i) {
        var id = el.dataset.layerId;

        if (id) {
          var layer = _this2.layer(id);

          delete layer.zOrder;
          Object.defineProperty(layer, 'zOrder', {
            value: i,
            writable: false,
            configurable: true
          });
        }
      });
      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(newLayer, oldLayer) {
      this.insertBefore(newLayer, oldLayer);
      this.removeChild(oldLayer);
    }
  }, {
    key: "appendChild",
    value: function appendChild(layer) {
      return this.appendLayer(layer);
    }
  }, {
    key: "removeChild",
    value: function removeChild(layer) {
      return this.removeLayer(layer);
    }
  }, {
    key: "updateViewport",
    value: function updateViewport(layer) {
      var _this3 = this;

      var _this$layerViewport = (0, _slicedToArray2.default)(this.layerViewport, 2),
          width = _this$layerViewport[0],
          height = _this$layerViewport[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      var layers = layer ? [layer] : this[_layers];
      layers = layers.filter(function (layer) {
        var canvas = layer.canvas;
        if (!canvas) return false; // ignore not canvas layer

        canvas.style.width = "".concat(width, "px");
        canvas.style.height = "".concat(height, "px");
        Object.assign(canvas.style, {
          top: '',
          right: '',
          bottom: '',
          left: '',
          transform: ''
        });

        if (!stickExtend && (stickMode === 'width' || stickMode === 'height')) {
          canvas.style.top = '50%';
          canvas.style.left = '50%';
          canvas.style.transform = 'translate(-50%, -50%)';
          canvas.style.webkitTransform = 'translate(-50%, -50%)';
        } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
          canvas.style.right = '0';
          canvas.style.bottom = '0';
        } else {
          canvas.style.top = '0';
          canvas.style.left = '0';
        }

        if (stickExtend && !layer._userInitResolution) {
          layer.resolution = _this3.layerResolution;
        }

        return true;
      });
      this.dispatchEvent('viewportChange', {
        target: this,
        layers: layers
      });
      return this;
    }
  }, {
    key: "updateResolution",
    value: function updateResolution(layer) {
      var _this4 = this;

      var layers = layer ? [layer] : this[_layers];
      layers.forEach(function (layer) {
        if (layer.canvas && !layer._userInitResolution) {
          layer.resolution = _this4.layerResolution;
        }
      });
      this.dispatchEvent('resolutionChange', {
        target: this,
        layers: layers
      });
      return this;
    }
  }, {
    key: "setViewport",
    value: function setViewport(width, height) {
      this.viewport = [width, height];
      return this;
    }
  }, {
    key: "setResolution",
    value: function setResolution(width, height) {
      this.resolution = [width, height];
      return this;
    }
  }, {
    key: "delegateEvent",
    value: function delegateEvent(event) {
      var _this5 = this;

      var receiver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;

      if (typeof event === 'string') {
        event = {
          type: event,
          passive: true
        };
      }

      if (this[_events].has(event.type)) {
        return false;
      }

      this[_events].add(event.type);

      var _event = event,
          type = _event.type,
          passive = _event.passive;
      receiver.addEventListener(type, function (e) {
        var layers = _this5[_layers];
        var evtArgs = {
          originalEvent: e,
          type: type,
          stopDispatch: function stopDispatch() {
            this.terminated = true;
          }
        }; // mouse event layerX, layerY value change while browser scaled.

        var x, y;
        var originalCoordinates = [];
        /* istanbul ignore else */

        if (e instanceof CustomEvent) {
          Object.assign(evtArgs, e.detail);

          if (evtArgs.x != null && evtArgs.y != null) {
            x = evtArgs.x;
            y = evtArgs.y;
            originalCoordinates.push({
              x: null,
              y: null
            });
          } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
            originalCoordinates.push({
              x: evtArgs.originalX,
              y: evtArgs.originalY
            });
          }
        } else {
          var _e$target$getBounding = e.target.getBoundingClientRect(),
              left = _e$target$getBounding.left,
              top = _e$target$getBounding.top;

          var pointers = e.changedTouches || [e];

          for (var i = 0; i < pointers.length; i++) {
            var pointer = pointers[i];
            var identifier = pointer.identifier;
            var clientX = pointer.clientX,
                clientY = pointer.clientY;

            if (clientX != null && clientY != null) {
              originalCoordinates.push({
                x: Math.round((clientX | 0) - left),
                y: Math.round((clientY | 0) - top),
                identifier: identifier
              });
            }
          }
        }

        if (originalCoordinates.length <= 0) originalCoordinates.push({
          x: x,
          y: y
        });
        originalCoordinates.forEach(function (originalCoordinate) {
          for (var _i = 0; _i < layers.length; _i++) {
            var layer = layers[_i];

            if (layer.handleEvent) {
              if (originalCoordinate.x != null && originalCoordinate.y != null) {
                var _layer$toLocalPos = layer.toLocalPos(originalCoordinate.x, originalCoordinate.y);

                var _layer$toLocalPos2 = (0, _slicedToArray2.default)(_layer$toLocalPos, 2);

                x = _layer$toLocalPos2[0];
                y = _layer$toLocalPos2[1];
              } else if (x != null && y != null) {
                var _layer$toGlobalPos = layer.toGlobalPos(x, y);

                var _layer$toGlobalPos2 = (0, _slicedToArray2.default)(_layer$toGlobalPos, 2);

                originalCoordinate.x = _layer$toGlobalPos2[0];
                originalCoordinate.y = _layer$toGlobalPos2[1];
              }

              var evt = Object.assign({}, evtArgs, {
                layerX: x,
                layerY: y,
                originalX: originalCoordinate.x,
                originalY: originalCoordinate.y,
                x: x,
                y: y,
                identifier: originalCoordinate.identifier
              });
              layer.dispatchEvent(type, evt);
              if (evt.terminated) break;
            }
          }
        });
      }, {
        passive: passive
      });
      return true;
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(type) {
      var evt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var container = this.container;
      container.dispatchEvent(new CustomEvent(type, {
        detail: evt
      }));
      (0, _get2.default)((0, _getPrototypeOf2.default)(Scene.prototype), "dispatchEvent", this).call(this, type, evt, true);
    }
  }, {
    key: "preload",
    value: function () {
      var _preload = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var _this6 = this;

        var _len,
            resources,
            _key,
            ret,
            tasks,
            i,
            res,
            task,
            id,
            src,
            _args = arguments;

        return _regenerator.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                for (_len = _args.length, resources = new Array(_len), _key = 0; _key < _len; _key++) {
                  resources[_key] = _args[_key];
                }

                ret = [], tasks = [];

                for (i = 0; i < resources.length; i++) {
                  res = resources[i];
                  task = void 0;

                  if (typeof res === 'string') {
                    task = _resource.default.loadTexture(res);
                  } else if (Array.isArray(res)) {
                    task = _resource.default.loadFrames.apply(_resource.default, (0, _toConsumableArray2.default)(res));
                  } else {
                    id = res.id, src = res.src;
                    task = _resource.default.loadTexture({
                      id: id,
                      src: src
                    });
                  }
                  /* istanbul ignore if  */


                  if (!(task instanceof Promise)) {
                    task = Promise.resolve(task);
                  }

                  tasks.push(task.then(function (r) {
                    ret.push(r);

                    _this6.dispatchEvent('preload', {
                      target: _this6,
                      current: r,
                      loaded: ret,
                      resources: resources
                    });
                  }));
                }

                _context.next = 5;
                return Promise.all(tasks);

              case 5:
                return _context.abrupt("return", ret);

              case 6:
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
  }, {
    key: "layer",
    value: function layer() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        handleEvent: true
      };

      if (!this.hasLayer(id)) {
        /* istanbul ignore if  */
        if (typeof window !== 'undefined' && window.getComputedStyle) {
          var pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

          if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
            this.container.style.position = 'relative';
          }
        }

        this.appendLayer(new _layer.default(id, opts));
      }

      return this[_layerMap][id];
    }
  }, {
    key: "appendLayer",
    value: function appendLayer(layer) {
      var appendDOMElement = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (!(layer instanceof _layer.default)) {
        // append dom element
        layer.id = layer.id || "_layer".concat(Math.random());

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
      }

      var id = layer.id;

      if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
        throw new Error("layer ".concat(id, " already exists! remove first..."));
      }

      this.removeLayer(layer);
      this[_layerMap][id] = layer;
      layer.connect(this, this[_zOrder]++);
      this.updateViewport(layer); // layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);

      if (!this.stickExtend && !layer._userInitResolution) {
        layer.resolution = this.layerResolution;
      }

      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
      /* istanbul ignore if  */

      if (_devtools.setDebugToolsObserver && layer.id !== '__debuglayer__') {
        (0, _devtools.setDebugToolsObserver)(this, layer);
      }

      if (appendDOMElement) this.container.appendChild(layer.canvas || layer);
      return layer;
    }
  }, {
    key: "removeLayer",
    value: function removeLayer(layer) {
      if (typeof layer === 'string') {
        layer = this[_layerMap][layer];
      }

      if (this.hasLayer(layer)) {
        layer.disconnect(this);
        this.container.removeChild(layer.canvas || layer);
        delete this[_layerMap][layer.id];
        this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
        /* istanbul ignore if  */

        if (_devtools.removeDebugToolsObserver) {
          (0, _devtools.removeDebugToolsObserver)(layer);
        }

        return layer;
      }

      return null;
    }
  }, {
    key: "hasLayer",
    value: function hasLayer(layer) {
      var layerID;

      if (typeof layer === 'string') {
        layerID = layer;
        layer = this[_layerMap][layer];
      } else {
        layerID = layer.id;
      }

      return layer && this[_layerMap][layerID] === layer;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      return (0, _core.querySelector)(selector, this);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return (0, _core.querySelectorAll)(selector, this);
    }
  }, {
    key: "snapshot",
    value: function () {
      var _snapshot2 = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee2() {
        var _this$viewport, width, height, canvas, _this$layerViewport2, sw, sh, layers, ctx, renderTasks, rect;

        return _regenerator.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _this$viewport = (0, _slicedToArray2.default)(this.viewport, 2), width = _this$viewport[0], height = _this$viewport[1];
                canvas = this[_snapshot];
                canvas.width = width;
                canvas.height = height;
                _this$layerViewport2 = (0, _slicedToArray2.default)(this.layerViewport, 2), sw = _this$layerViewport2[0], sh = _this$layerViewport2[1];
                layers = this[_layers].slice(0).reverse();
                ctx = canvas.getContext('2d');
                renderTasks = layers.map(function (layer) {
                  return layer.prepareRender();
                });
                _context2.next = 10;
                return Promise.all(renderTasks);

              case 10:
                rect = [0, 0, sw, sh];

                if (!this.stickExtend) {
                  if (this.stickMode === 'width' || this.stickMode === 'height') {
                    rect[0] = (width - sw) / 2;
                    rect[1] = (height - sh) / 2;
                  } else if (this.stickMode === 'bottom' || this.stickMode === 'right') {
                    rect[0] = width - sw;
                    rect[1] = height - sh;
                  }
                }

                layers.forEach(function (layer) {
                  if (layer.canvas) {
                    ctx.drawImage.apply(ctx, [layer.canvas].concat(rect));
                  }
                });
                return _context2.abrupt("return", canvas);

              case 14:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function snapshot() {
        return _snapshot2.apply(this, arguments);
      }

      return snapshot;
    }()
  }, {
    key: "displayRatio",
    set: function set(value) {
      var _this7 = this;

      var oldRatio = this[_displayRatio];
      this[_displayRatio] = value;

      if (oldRatio != null && oldRatio !== value) {
        var layers = this[_layers];
        layers.forEach(function (layer) {
          if (layer.canvas) {
            layer.setDisplayRatio(_this7[_displayRatio], _this7.maxDisplayRatio);
          }
        });
        this.dispatchEvent('ratioChange', {
          target: this,
          layers: layers
        });
      }

      return this;
    },
    get: function get() {
      return this[_displayRatio];
    }
  }, {
    key: "subscribe",
    get: function get() {
      return this[_subscribe];
    },
    set: function set(events) {
      var _this8 = this;

      this[_subscribe] = events;
      events.forEach(function (event) {
        return _this8.delegateEvent(event);
      });
    }
  }, {
    key: "width",
    get: function get() {
      return this.viewport[0];
    }
  }, {
    key: "height",
    get: function get() {
      return this.viewport[1];
    }
  }, {
    key: "children",
    get: function get() {
      return this.childNodes.filter(function (layer) {
        return layer.canvas;
      });
    }
  }, {
    key: "childNodes",
    get: function get() {
      return Object.values(this[_layerMap]);
    }
  }, {
    key: "sortedChildNodes",
    get: function get() {
      return this[_layers];
    }
  }, {
    key: "layerViewport",
    get: function get() {
      var _this$resolution = (0, _slicedToArray2.default)(this.resolution, 2),
          rw = _this$resolution[0],
          rh = _this$resolution[1],
          _this$viewport2 = (0, _slicedToArray2.default)(this.viewport, 2),
          vw = _this$viewport2[0],
          vh = _this$viewport2[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      var width = vw,
          height = vh;

      if (!stickExtend) {
        if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
          height = vw * rh / rw;
        } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
          width = vh * rw / rh;
        }
      }

      return [width, height];
    }
  }, {
    key: "distortion",
    get: function get()
    /* istanbul ignore next */
    {
      if (this.stickMode !== 'scale') {
        return 1.0;
      }

      var _this$resolution2 = (0, _slicedToArray2.default)(this.resolution, 2),
          rw = _this$resolution2[0],
          rh = _this$resolution2[1],
          _this$viewport3 = (0, _slicedToArray2.default)(this.viewport, 2),
          vw = _this$viewport3[0],
          vh = _this$viewport3[1];

      var dw = rw === 'flex' ? 2 : rw / vw,
          dh = rh === 'flex' ? 2 : rh / vh;
      return dw / dh;
    }
  }, {
    key: "viewport",
    set: function set(viewport) {
      var _this9 = this;

      if (!Array.isArray(viewport)) viewport = [viewport, viewport];

      var _viewport2 = viewport,
          _viewport3 = (0, _slicedToArray2.default)(_viewport2, 2),
          width = _viewport3[0],
          height = _viewport3[1];

      this[_viewport] = [width, height];
      /* istanbul ignore next */

      if (width === 'auto' || height === 'auto') {
        if (!this[_resizeHandler]) {
          this[_resizeHandler] = function () {
            _this9.updateViewport();

            if (_this9.resolution[0] === 'flex' || _this9.resolution[1] === 'flex') {
              _this9.updateResolution();
            }
          };

          window.addEventListener('resize', this[_resizeHandler]);
        }
      } else if (this[_resizeHandler]) {
        window.removeEventListener('resize', this[_resizeHandler]);
        delete this[_resizeHandler];
      }

      if (this[_layers].length) {
        this.updateViewport();
      }
    },
    get: function get() {
      var _this$_viewport = (0, _slicedToArray2.default)(this[_viewport], 2),
          width = _this$_viewport[0],
          height = _this$_viewport[1];

      if (width === '' || Number.isNaN(Number(width))) {
        width = this.container.clientWidth;
      }

      if (height === '' || Number.isNaN(Number(height))) {
        height = this.container.clientHeight;
      }

      return [width, height];
    }
  }, {
    key: "layerResolution",
    get: function get() {
      var _this$resolution3 = (0, _slicedToArray2.default)(this.resolution, 2),
          rw = _this$resolution3[0],
          rh = _this$resolution3[1];

      var _this$viewport4 = (0, _slicedToArray2.default)(this.viewport, 2),
          vw = _this$viewport4[0],
          vh = _this$viewport4[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      if (rw === 'flex') {
        rw = 2 * vw;
      }

      if (rh === 'flex') {
        rh = 2 * vh;
      }

      var width = rw,
          height = rh,
          offsetTop = 0,
          offsetLeft = 0;

      if (stickExtend) {
        if (stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
          var vrh = rw * vh / vw;
          height = vrh;

          if (stickMode === 'width') {
            offsetTop = Math.round((vrh - rh) / 2);
          } else if (stickMode === 'bottom') {
            offsetTop = vrh - rh;
          }
        } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
          var vrw = rh * vw / vh;
          width = vrw;

          if (stickMode === 'height') {
            offsetLeft = Math.round((vrw - rw) / 2);
          } else if (stickMode === 'right') {
            offsetLeft = vrw - rw;
          }
        }
      }

      this.stickOffset = [offsetLeft, offsetTop];
      return [width, height, offsetLeft, offsetTop];
    }
  }, {
    key: "resolution",
    set: function set(resolution) {
      if (!Array.isArray(resolution)) {
        resolution = [resolution, resolution];
      }

      var _resolution2 = resolution,
          _resolution3 = (0, _slicedToArray2.default)(_resolution2, 2),
          width = _resolution3[0],
          height = _resolution3[1];

      this[_resolution] = [width, height];
      this.updateResolution();
    },
    get: function get() {
      return this[_resolution];
    }
  }, {
    key: "layers",
    get: function get() {
      return this[_layers];
    }
  }]);
  return Scene;
}(_core.BaseNode);

exports.default = Scene;