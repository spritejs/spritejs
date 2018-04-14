'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _isNan = require('babel-runtime/core-js/number/is-nan');

var _isNan2 = _interopRequireDefault(_isNan);

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

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

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _spriteCore = require('sprite-core');

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

    if (arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = { viewport: [arguments[1], arguments[2]]
        /* eslint-enabel prefer-rest-params */
      };
    }

    _this[_zOrder] = 0;
    _this[_layerMap] = {};
    _this[_layers] = [];
    _this[_snapshot] = (0, _platform.createCanvas)();

    var _ref = options.viewport || ['', ''],
        _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        width = _ref2[0],
        height = _ref2[1];

    _this.viewport = [width, height];

    // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
    _this.stickMode = options.stickMode || 'scale';
    _this.stickExtend = !!options.stickExtend;
    _this.stickOffset = [0, 0];
    _this[_resolution] = options.resolution || [].concat((0, _toConsumableArray3.default)(_this.viewport));

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
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'insertBefore',


    // d3-friendly
    value: function insertBefore(node, next) {
      if (this.container) {
        return this.container.insertBefore(node, next);
      }
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
      var _this2 = this;

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
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
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
          layer.resolution = _this2.layerResolution;
        }
      });

      this.dispatchEvent('viewportChange', { target: this, layers: layers });
      return this;
    }
  }, {
    key: 'updateResolution',
    value: function updateResolution(layer) {
      var _this3 = this;

      var layers = layer ? [layer] : this[_layers];

      layers.forEach(function (layer) {
        layer.resolution = _this3.layerResolution;
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
    key: 'toGlobalPos',
    value: function toGlobalPos(x, y) {
      var resolution = this.layerResolution,
          viewport = this.layerViewport;

      x = x * viewport[0] / resolution[0];
      y = y * viewport[1] / resolution[1];

      return [x, y];
    }
  }, {
    key: 'toLocalPos',
    value: function toLocalPos(x, y) {
      var resolution = this.layerResolution,
          viewport = this.layerViewport;

      x = x * resolution[0] / viewport[0];
      y = y * resolution[1] / viewport[1];

      return [x, y];
    }
  }, {
    key: 'delegateEvent',
    value: function delegateEvent(event) {
      var _this4 = this;

      var receiver = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.container;

      if (typeof event === 'string') {
        event = { type: event, passive: true };
      }

      var _event = event,
          type = _event.type,
          passive = _event.passive;


      receiver.addEventListener(type, function (e) {
        var layers = _this4[_layers];
        var evtArgs = {
          originalEvent: e,
          type: type,
          stopDispatch: function stopDispatch() {
            this.terminated = true;
          }
        };

        // mouse event layerX, layerY value change while browser scaled.
        var x = 0,
            y = 0,
            originalX = 0,
            originalY = 0;

        if (e instanceof CustomEvent) {
          (0, _assign2.default)(evtArgs, e.detail);
          if (evtArgs.x != null && evtArgs.y != null) {
            x = evtArgs.x;
            y = evtArgs.y;
            var _toGlobalPos = _this4.toGlobalPos(x, y);

            var _toGlobalPos2 = (0, _slicedToArray3.default)(_toGlobalPos, 2);

            originalX = _toGlobalPos2[0];
            originalY = _toGlobalPos2[1];

            x -= _this4.stickOffset[0];
            x -= _this4.stickOffset[1];
          }
        } else if (e.target.dataset.layerId && _this4[_layerMap][e.target.dataset.layerId]) {
          var _e$target$getBounding = e.target.getBoundingClientRect(),
              left = _e$target$getBounding.left,
              top = _e$target$getBounding.top;

          var _ref3 = e.changedTouches ? e.changedTouches[0] : e,
              clientX = _ref3.clientX,
              clientY = _ref3.clientY;

          originalX = Math.round((clientX | 0) - left);
          originalY = Math.round((clientY | 0) - top);
          var _toLocalPos = _this4.toLocalPos(originalX, originalY);

          var _toLocalPos2 = (0, _slicedToArray3.default)(_toLocalPos, 2);

          x = _toLocalPos2[0];
          y = _toLocalPos2[1];


          x -= _this4.stickOffset[0];
          x -= _this4.stickOffset[1];
        }

        (0, _assign2.default)(evtArgs, {
          layerX: x, layerY: y, originalX: originalX, originalY: originalY, x: x, y: y
        });

        for (var i = 0; i < layers.length; i++) {
          var layer = layers[i];

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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this5 = this;

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
                  if (!(task instanceof _promise2.default)) {
                    task = _promise2.default.resolve(task);
                  }

                  tasks.push(task.then(function (r) {
                    ret.push(r);
                    _this5.dispatchEvent('preload', {
                      target: _this5, current: r, loaded: ret, resources: resources
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
        return _ref4.apply(this, arguments);
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

        var context = opts.context || (0, _platform.createCanvas)().getContext('2d');
        var canvas = context.canvas;
        canvas.dataset.layerId = id;
        canvas.style.position = 'absolute';

        if (this.container.style && !this.container.style.position) {
          this.container.style.position = 'relative';
        }

        opts.context = context;
        this.appendLayer(new _layer2.default(opts), zIndex);
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
      layer.resolution = this.layerResolution;

      this[_layers] = sortOrderedSprites((0, _values2.default)(this[_layerMap]), true);
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
      var _ref5 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
        var canvas, _viewport2, width, height, layers, ctx, renderTasks;

        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                canvas = this[_snapshot];
                _viewport2 = (0, _slicedToArray3.default)(this.viewport, 2), width = _viewport2[0], height = _viewport2[1];


                canvas.width = width;
                canvas.height = height;

                layers = this[_layers].slice(0).reverse();
                ctx = canvas.getContext('2d');
                renderTasks = layers.map(function (layer) {
                  return layer.prepareRender();
                });
                _context2.next = 9;
                return _promise2.default.all(renderTasks);

              case 9:

                layers.forEach(function (layer) {
                  return ctx.drawImage(layer.canvas, 0, 0, width, height);
                });

                return _context2.abrupt('return', canvas);

              case 11:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function snapshot() {
        return _ref5.apply(this, arguments);
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
          height = Math.min(rh, vw * rh / rw);
        } else if (stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
          width = Math.min(rw, vh * rw / rh);
        }
      }

      return [width, height];
    }
  }, {
    key: 'distortion',
    get: function get() {
      if (this.stickMode !== 'scale') {
        return 1.0;
      }
      return this.viewport[1] * this.resolution[0] / (this.viewport[0] * this.resolution[1]);
    }
  }, {
    key: 'viewport',
    set: function set(_ref6) {
      var _this6 = this;

      var _ref7 = (0, _slicedToArray3.default)(_ref6, 2),
          width = _ref7[0],
          height = _ref7[1];

      this[_viewport] = [width, height];
      if (width === 'auto' || height === 'auto') {
        if (!this[_resizeHandler]) {
          this[_resizeHandler] = function () {
            return _this6.updateViewport();
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
      var _viewport4 = (0, _slicedToArray3.default)(this[_viewport], 2),
          width = _viewport4[0],
          height = _viewport4[1];

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
      var _resolution3 = (0, _slicedToArray3.default)(this.resolution, 2),
          rw = _resolution3[0],
          rh = _resolution3[1],
          _viewport5 = (0, _slicedToArray3.default)(this.viewport, 2),
          vw = _viewport5[0],
          vh = _viewport5[1],
          stickMode = this.stickMode,
          stickExtend = this.stickExtend;

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
    set: function set(_ref8) {
      var _ref9 = (0, _slicedToArray3.default)(_ref8, 2),
          width = _ref9[0],
          height = _ref9[1];

      this[_resolution] = [width, height];
      this.updateResolution();
    },
    get: function get() {
      return this[_resolution];
    }
  }]);
  return _default;
}(_spriteCore.BaseNode);

exports.default = _default;