'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _values = require('babel-runtime/core-js/object/values');

var _values2 = _interopRequireDefault(_values);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _spriteCore = require('sprite-core');

var _platform = require('./platform');

var _spriteUtils = require('sprite-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _layerMap = (0, _symbol2.default)('layerMap'),
    _zOrder = (0, _symbol2.default)('zOrder'),
    _layers = (0, _symbol2.default)('layers'),
    _snapshot = (0, _symbol2.default)('snapshot'),
    _viewport = (0, _symbol2.default)('viewport'),
    _resolution = (0, _symbol2.default)('resolution');

function sortLayer(paper) {
  var layers = (0, _values2.default)(paper[_layerMap]);

  layers.sort(function (a, b) {
    if (b.zIndex === a.zIndex) {
      return b.zOrder - a.zOrder;
    }
    return b.zIndex - a.zIndex;
  });

  paper[_layers] = layers;
}

var _default = function (_BaseNode) {
  (0, _inherits3.default)(_default, _BaseNode);

  function _default(container, options) {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this));

    container = (0, _platform.getContainer)(container);
    _this.container = container;

    if (arguments.length === 3) {
      (0, _spriteUtils.setDeprecation)('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = { viewport: [arguments[1], arguments[2]]
        /* eslint-enabel prefer-rest-params */
      };
    }

    var _ref = options.viewport || [],
        _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        width = _ref2[0],
        height = _ref2[1];

    if (!width || width === 'auto') {
      width = container.clientWidth;
    }
    if (!height || height === 'auto') {
      height = container.clientHeight;
    }
    _this[_viewport] = [width, height];

    var resolution = options.resolution;
    if (!resolution) {
      _this[_resolution] = [_this.viewport[0], _this.viewport[1]];
    } else {
      _this[_resolution] = resolution;
    }

    _this[_zOrder] = 0;
    _this[_layerMap] = {};
    _this[_layers] = [];
    _this[_snapshot] = (0, _platform.createCanvas)();

    // d3-friendly
    _this.namespaceURI = 'http://spritejs.org/scene';
    var that = _this;
    _this.ownerDocument = {
      createElementNS: function createElementNS(uri, name) {
        return that.layer(name);
      }
    };

    var events = ['mousedown', 'mouseup', 'mousemove', 'touchstart', 'touchend', 'touchmove', 'click', 'dblclick'];

    _this.delegateEvent.apply(_this, events);
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
      var resolution = this.resolution,
          viewport = this.viewport;

      x = x * viewport[0] / resolution[0];
      y = y * viewport[1] / resolution[1];

      return [x, y];
    }
  }, {
    key: 'toLocalPos',
    value: function toLocalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;

      x = x * resolution[0] / viewport[0];
      y = y * resolution[1] / viewport[1];

      return [x, y];
    }
  }, {
    key: 'delegateEvent',
    value: function delegateEvent() {
      var _this2 = this;

      for (var _len = arguments.length, events = Array(_len), _key = 0; _key < _len; _key++) {
        events[_key] = arguments[_key];
      }

      events.forEach(function (event) {
        if (typeof event === 'string') {
          event = { type: event, passive: true };
        }

        var _event = event,
            type = _event.type,
            passive = _event.passive;


        _this2.container.addEventListener(type, function (e) {
          var layers = _this2[_layers];
          var evtArgs = {
            originalEvent: e,
            type: type,
            stopDispatch: function stopDispatch() {
              this.terminated = true;
            }
          };

          // mouse event layerX, layerY value change while browser scaled.
          if (e instanceof CustomEvent) {
            (0, _assign2.default)(evtArgs, e.detail);
            var x = evtArgs.x,
                y = evtArgs.y;

            if (x != null && y != null) {
              var _toGlobalPos = _this2.toGlobalPos(x, y),
                  _toGlobalPos2 = (0, _slicedToArray3.default)(_toGlobalPos, 2),
                  originalX = _toGlobalPos2[0],
                  originalY = _toGlobalPos2[1];

              (0, _assign2.default)(evtArgs, {
                layerX: x, layerY: y, originalX: originalX, originalY: originalY, x: x, y: y
              });
            }
          } else {
            var _e$target$getBounding = e.target.getBoundingClientRect(),
                left = _e$target$getBounding.left,
                top = _e$target$getBounding.top;

            var _originalX = void 0,
                _originalY = void 0;

            if (e.changedTouches) {
              // mobile
              var _e$changedTouches$ = e.changedTouches[0],
                  clientX = _e$changedTouches$.clientX,
                  clientY = _e$changedTouches$.clientY;


              _originalX = Math.round(clientX - left);
              _originalY = Math.round(clientY - top);
            } else {
              _originalX = Math.round(e.clientX - left);
              _originalY = Math.round(e.clientY - top);
            }

            var _toLocalPos = _this2.toLocalPos(_originalX, _originalY),
                _toLocalPos2 = (0, _slicedToArray3.default)(_toLocalPos, 2),
                layerX = _toLocalPos2[0],
                layerY = _toLocalPos2[1];

            (0, _assign2.default)(evtArgs, {
              layerX: layerX, layerY: layerY, originalX: _originalX, originalY: _originalY, x: layerX, y: layerY
            });
          }

          for (var i = 0; i < layers.length; i++) {
            var layer = layers[i];

            if (layer.handleEvent) {
              layer.dispatchEvent(type, evtArgs);
            }
          }
        }, { passive: passive });
      });
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
      var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var _this3 = this;

        for (var _len2 = arguments.length, resources = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          resources[_key2] = arguments[_key2];
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

                  tasks.push(task.then(function (r) {
                    ret.push(r);
                    _this3.dispatchEvent('preload', {
                      target: _this3, current: r, loaded: ret, resources: resources
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
        return _ref3.apply(this, arguments);
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
        canvas.style.left = 0;
        canvas.style.top = 0;
        opts.context = context;
        var layer = new _layer2.default(opts);
        this.appendLayer(layer, zIndex);
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
      layer.viewport = this.viewport;
      layer.resolution = this.resolution;

      sortLayer(this);
      return layer;
    }
  }, {
    key: 'removeLayer',
    value: function removeLayer(layer) {
      var layerID = void 0;
      if (typeof layer === 'string') {
        layerID = layer;
        layer = this[_layerMap][layer];
      } else {
        layerID = layer.id;
      }

      if (this.hasLayer(layer)) {
        layer.disconnect(this);
        delete this[_layerMap][layerID];
        sortLayer(this);
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
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
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
        return _ref4.apply(this, arguments);
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
    key: 'distortion',
    get: function get() {
      return this.viewport[1] * this.resolution[0] / (this.viewport[0] * this.resolution[1]);
    }
  }, {
    key: 'viewport',
    set: function set(_ref5) {
      var _ref6 = (0, _slicedToArray3.default)(_ref5, 2),
          width = _ref6[0],
          height = _ref6[1];

      if (width === 'auto') {
        width = this.container.clientWidth;
      }
      if (height === 'auto') {
        height = this.container.clientHeight;
      }
      this[_viewport] = [width, height];
      this[_layers].forEach(function (layer) {
        layer.viewport = [width, height];
      });
    },
    get: function get() {
      return this[_viewport];
    }
  }, {
    key: 'resolution',
    set: function set(_ref7) {
      var _ref8 = (0, _slicedToArray3.default)(_ref7, 2),
          width = _ref8[0],
          height = _ref8[1];

      this[_resolution] = [width, height];
      this[_layers].forEach(function (layer) {
        layer.resolution = [width, height];
      });
    },
    get: function get() {
      return this[_resolution];
    }
  }]);
  return _default;
}(_spriteCore.BaseNode);

exports.default = _default;