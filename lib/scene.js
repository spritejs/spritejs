'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteCore = require('sprite-core');

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _platform = require('./platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDeprecation = _spriteCore.utils.setDeprecation,
    sortOrderedSprites = _spriteCore.utils.sortOrderedSprites;


var _layerMap = (0, _symbol2.default)('layerMap'),
    _zOrder = (0, _symbol2.default)('zOrder'),
    _layers = (0, _symbol2.default)('layers'),
    _snapshot = (0, _symbol2.default)('snapshot'),
    _viewport = (0, _symbol2.default)('viewport'),
    _resolution = (0, _symbol2.default)('resolution'),
    _resizeHandler = (0, _symbol2.default)('resizeHandler');

var _default = function (_BaseNode) {
  (0, _inherits3.default)(_default, _BaseNode);

  function _default(container) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this));

    container = (0, _platform.getContainer)(container);

    _this.container = container;

    /* istanbul ignore if */
    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = { viewport: [arguments[1], arguments[2]] };
      /* eslint-enabel prefer-rest-params */
    }

    _this[_zOrder] = 0;
    _this[_layerMap] = {};
    _this[_layers] = [];
    _this[_snapshot] = (0, _platform.createCanvas)();

    var viewport = options.viewport || ['', ''];
    _this.viewport = viewport;

    // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
    _this.stickMode = options.stickMode || 'scale';
    _this.stickExtend = !!options.stickExtend;
    _this.stickOffset = [0, 0];
    _this.resolution = options.resolution || [].concat((0, _toConsumableArray3.default)(_this.viewport));

    // d3-friendly
    _this.namespaceURI = 'http://spritejs.org/scene';
    var that = _this;
    _this.ownerDocument = {
      createElementNS: function createElementNS(uri, name) {
        return that.layer(name);
      }
    };

    var events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'click', 'dblclick'];

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
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'insertBefore',
    value: function insertBefore(newchild, refchild) {
      var _this2 = this;

      if (!this.hasLayer(refchild)) {
        throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
      }
      this.appendLayer(newchild);
      this.container.insertBefore(newchild.canvas, refchild.canvas);
      var els = void 0;
      /* istanbul ignore if */
      if (this.container.querySelectorAll) {
        els = this.container.querySelectorAll('canvas');
      } else {
        els = this.container.children;
      }
      els.forEach(function (el, i) {
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
      this[_layers] = sortOrderedSprites((0, _values2.default)(this[_layerMap]), true);
    }
  }, {
    key: 'appendChild',
    value: function appendChild(layer) {
      return this.appendLayer(layer);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(layer) {
      return this.removeLayer(layer);
    }
  }, {
    key: 'updateViewport',
    value: function updateViewport(layer) {
      var _this3 = this;

      var _layerViewport = (0, _slicedToArray3.default)(this.layerViewport, 2),
          width = _layerViewport[0],
          height = _layerViewport[1],
          layers = layer ? [layer] : this[_layers],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

      layers.forEach(function (layer) {
        var canvas = layer.canvas;
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        (0, _assign2.default)(canvas.style, {
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
        } else if (!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
          canvas.style.right = '0';
          canvas.style.bottom = '0';
        } else {
          canvas.style.top = '0';
          canvas.style.left = '0';
        }
        if (stickExtend) {
          layer.resolution = _this3.layerResolution;
        }
      });

      this.dispatchEvent('viewportChange', { target: this, layers: layers });
      return this;
    }
  }, {
    key: 'updateResolution',
    value: function updateResolution(layer) {
      var _this4 = this;

      var layers = layer ? [layer] : this[_layers];

      layers.forEach(function (layer) {
        layer.resolution = _this4.layerResolution;
      });
      this.dispatchEvent('resolutionChange', { target: this, layers: layers });
      return this;
    }
  }, {
    key: 'setViewport',
    value: function setViewport(width, height) {
      this.viewport = [width, height];
      return this;
    }
  }, {
    key: 'setResolution',
    value: function setResolution(width, height) {
      this.resolution = [width, height];
      return this;
    }
  }, {
    key: 'delegateEvent',
    value: function delegateEvent(event) {
      var _this5 = this;

      var receiver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;

      if (typeof event === 'string') {
        event = { type: event, passive: true };
      }

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
        };

        // mouse event layerX, layerY value change while browser scaled.
        var originalX = void 0,
            originalY = void 0,
            x = void 0,
            y = void 0;

        /* istanbul ignore else */
        if (e instanceof CustomEvent) {
          (0, _assign2.default)(evtArgs, e.detail);
          if (evtArgs.x != null && evtArgs.y != null) {
            x = evtArgs.x;
            y = evtArgs.y;
          } else if (evtArgs.originalX != null && evtArgs.originalY != null) {
            originalX = evtArgs.originalX;
            originalY = evtArgs.originalY;
          }
        } else if (e.target.dataset.layerId && _this5[_layerMap][e.target.dataset.layerId]) {
          var _e$target$getBounding = e.target.getBoundingClientRect(),
              left = _e$target$getBounding.left,
              top = _e$target$getBounding.top;

          var _ref = e.changedTouches ? e.changedTouches[0] : e,
              clientX = _ref.clientX,
              clientY = _ref.clientY;

          originalX = Math.round((clientX | 0) - left);
          originalY = Math.round((clientY | 0) - top);
        }

        for (var i = 0; i < layers.length; i++) {
          var layer = layers[i];
          if (originalX != null && originalY != null) {
            var _layer$toLocalPos = layer.toLocalPos(originalX, originalY);

            var _layer$toLocalPos2 = (0, _slicedToArray3.default)(_layer$toLocalPos, 2);

            x = _layer$toLocalPos2[0];
            y = _layer$toLocalPos2[1];
          } else if (x != null && y != null) {
            var _layer$toGlobalPos = layer.toGlobalPos(x, y);

            var _layer$toGlobalPos2 = (0, _slicedToArray3.default)(_layer$toGlobalPos, 2);

            originalX = _layer$toGlobalPos2[0];
            originalY = _layer$toGlobalPos2[1];
          }
          (0, _assign2.default)(evtArgs, {
            layerX: x, layerY: y, originalX: originalX, originalY: originalY, x: x, y: y
          });

          if (layer.handleEvent) {
            layer.dispatchEvent(type, evtArgs);
          }
        }
      }, { passive: passive });
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(type, evt) {
      var container = this.container;
      container.dispatchEvent(new CustomEvent(type, { detail: evt }));
      (0, _get3.default)(_default.prototype.__proto__ || (0, _getPrototypeOf2.default)(_default.prototype), 'dispatchEvent', this).call(this, type, evt, true);
    }
  }, {
    key: 'preload',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this6 = this;

        for (var _len = arguments.length, resources = Array(_len), _key = 0; _key < _len; _key++) {
          resources[_key] = arguments[_key];
        }

        var ret, tasks, i, res, task, id, src;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ret = [], tasks = [];


                for (i = 0; i < resources.length; i++) {
                  res = resources[i];
                  task = void 0;


                  if (typeof res === 'string') {
                    task = _resource2.default.loadTexture(res);
                  } else if (Array.isArray(res)) {
                    task = _resource2.default.loadFrames.apply(_resource2.default, (0, _toConsumableArray3.default)(res));
                  } else {
                    id = res.id, src = res.src;

                    task = _resource2.default.loadTexture({ id: id, src: src });
                  }
                  /* istanbul ignore if  */
                  if (!(task instanceof _promise2.default)) {
                    task = _promise2.default.resolve(task);
                  }

                  tasks.push(task.then(function (r) {
                    ret.push(r);
                    _this6.dispatchEvent('preload', {
                      target: _this6, current: r, loaded: ret, resources: resources
                    });
                  }));
                }

                _context.next = 4;
                return _promise2.default.all(tasks);

              case 4:
                return _context.abrupt('return', ret);

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function preload() {
        return _ref2.apply(this, arguments);
      }

      return preload;
    }()
  }, {
    key: 'layer',
    value: function layer() {
      var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'default';
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { handleEvent: true };

      if (typeof opts === 'number') {
        opts = { zIndex: opts };
      }
      if (!this.hasLayer(id)) {
        var zIndex = 0;
        if (opts.zIndex != null) {
          zIndex = opts.zIndex;
          delete opts.zIndex;
        }

        /* istanbul ignore if  */
        if (typeof window !== 'undefined' && window.getComputedStyle) {
          var pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

          if (this.container.style && pos !== 'absolute' && pos !== 'fixed') {
            this.container.style.position = 'relative';
          }
        }

        this.appendLayer(new _layer2.default(id, opts), zIndex);
      }

      return this[_layerMap][id];
    }
  }, {
    key: 'appendLayer',
    value: function appendLayer(layer) {
      var zIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

      var id = layer.id;

      if (this.hasLayer(id) && this[_layerMap][id] !== layer) {
        throw new Error('layer ' + id + ' already exists! remove first...');
      }

      this.removeLayer(layer);

      this[_layerMap][id] = layer;
      layer.connect(this, this[_zOrder]++, zIndex);
      this.updateViewport(layer);
      if (!this.stickExtend) {
        layer.resolution = this.layerResolution;
      }

      this[_layers] = sortOrderedSprites((0, _values2.default)(this[_layerMap]), true);
      /* istanbul ignore if  */
      if (_platform.setDebugToolsObserver && layer.id !== '__debuglayer__') {
        (0, _platform.setDebugToolsObserver)(this, layer);
      }
      return layer;
    }
  }, {
    key: 'removeLayer',
    value: function removeLayer(layer) {
      if (typeof layer === 'string') {
        layer = this[_layerMap][layer];
      }
      if (this.hasLayer(layer)) {
        layer.disconnect(this);
        delete this[_layerMap][layer.id];
        this[_layers] = sortOrderedSprites((0, _values2.default)(this[_layerMap]), true);
        /* istanbul ignore if  */
        if (_platform.removeDebugToolsObserver) {
          (0, _platform.removeDebugToolsObserver)(layer);
        }
        return layer;
      }

      return null;
    }
  }, {
    key: 'hasLayer',
    value: function hasLayer(layer) {
      var layerID = void 0;
      if (typeof layer === 'string') {
        layerID = layer;
        layer = this[_layerMap][layer];
      } else {
        layerID = layer.id;
      }
      return layer && this[_layerMap][layerID] === layer;
    }
  }, {
    key: 'snapshot',
    value: function () {
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var _viewport2, width, height, canvas, _layerViewport2, sw, sh, layers, ctx, renderTasks, rect;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _viewport2 = (0, _slicedToArray3.default)(this.viewport, 2), width = _viewport2[0], height = _viewport2[1];
                canvas = this[_snapshot];

                canvas.width = width;
                canvas.height = height;

                _layerViewport2 = (0, _slicedToArray3.default)(this.layerViewport, 2), sw = _layerViewport2[0], sh = _layerViewport2[1];
                layers = this[_layers].slice(0).reverse();
                ctx = canvas.getContext('2d');
                renderTasks = layers.map(function (layer) {
                  return layer.prepareRender();
                });
                _context2.next = 10;
                return _promise2.default.all(renderTasks);

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
                  ctx.drawImage.apply(ctx, [layer.canvas].concat(rect));
                });

                return _context2.abrupt('return', canvas);

              case 14:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function snapshot() {
        return _ref3.apply(this, arguments);
      }

      return snapshot;
    }()
  }, {
    key: 'width',
    get: function get() {
      return this.viewport[0];
    }
  }, {
    key: 'height',
    get: function get() {
      return this.viewport[1];
    }
  }, {
    key: 'layerViewport',
    get: function get() {
      var _resolution2 = (0, _slicedToArray3.default)(this.resolution, 2),
          rw = _resolution2[0],
          rh = _resolution2[1],
          _viewport3 = (0, _slicedToArray3.default)(this.viewport, 2),
          vw = _viewport3[0],
          vh = _viewport3[1],
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
    key: 'distortion',
    get: function get() /* istanbul ignore next */{
      if (this.stickMode !== 'scale') {
        return 1.0;
      }

      var _resolution3 = (0, _slicedToArray3.default)(this.resolution, 2),
          rw = _resolution3[0],
          rh = _resolution3[1],
          _viewport4 = (0, _slicedToArray3.default)(this.viewport, 2),
          vw = _viewport4[0],
          vh = _viewport4[1];

      var dw = rw === 'flex' ? 2 : rw / vw,
          dh = rh === 'flex' ? 2 : rh / vh;

      return dw / dh;
    }
  }, {
    key: 'viewport',
    set: function set(viewport) {
      var _this7 = this;

      if (!Array.isArray(viewport)) viewport = [viewport, viewport];

      var _viewport5 = viewport,
          _viewport6 = (0, _slicedToArray3.default)(_viewport5, 2),
          width = _viewport6[0],
          height = _viewport6[1];

      this[_viewport] = [width, height];
      /* istanbul ignore next */
      if (width === 'auto' || height === 'auto') {
        if (!this[_resizeHandler]) {
          this[_resizeHandler] = function () {
            _this7.updateViewport();
            if (_this7.resolution[0] === 'flex' || _this7.resolution[1] === 'flex') {
              _this7.updateResolution();
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
      var _viewport7 = (0, _slicedToArray3.default)(this[_viewport], 2),
          width = _viewport7[0],
          height = _viewport7[1];

      if (width === '' || (0, _isNan2.default)(Number(width))) {
        width = this.container.clientWidth;
      }
      if (height === '' || (0, _isNan2.default)(Number(height))) {
        height = this.container.clientHeight;
      }
      return [width, height];
    }
  }, {
    key: 'layerResolution',
    get: function get() {
      var _resolution4 = (0, _slicedToArray3.default)(this.resolution, 2),
          rw = _resolution4[0],
          rh = _resolution4[1];

      var _viewport8 = (0, _slicedToArray3.default)(this.viewport, 2),
          vw = _viewport8[0],
          vh = _viewport8[1],
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
    key: 'resolution',
    set: function set(resolution) {
      if (!Array.isArray(resolution)) {
        resolution = [resolution, resolution];
      }

      var _resolution5 = resolution,
          _resolution6 = (0, _slicedToArray3.default)(_resolution5, 2),
          width = _resolution6[0],
          height = _resolution6[1];

      this[_resolution] = [width, height];
      this.updateResolution();
    },
    get: function get() {
      return this[_resolution];
    }
  }, {
    key: 'layers',
    get: function get() {
      return this[_layers];
    }
  }]);
  return _default;
}(_spriteCore.BaseNode);

exports.default = _default;