'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _isFinite = require('babel-runtime/core-js/number/is-finite');

var _isFinite2 = _interopRequireDefault(_isFinite);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _set = require('babel-runtime/core-js/set');

var _set2 = _interopRequireDefault(_set);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _typeof2 = require('babel-runtime/helpers/typeof');

var _typeof3 = _interopRequireDefault(_typeof2);

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

var _platform = require('./platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _resolution = (0, _symbol2.default)('resolution');
var _attrs = (0, _symbol2.default)('attrs');
var _displayRatio = (0, _symbol2.default)('displayRatio');

var ExLayer = function (_Layer) {
  (0, _inherits3.default)(ExLayer, _Layer);

  function ExLayer(id) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck3.default)(this, ExLayer);

    if ((typeof id === 'undefined' ? 'undefined' : (0, _typeof3.default)(id)) === 'object') {
      opts = id;
      id = opts.id || 'id_' + Math.random().toString().slice(2, 10);
    }
    var _opts = opts,
        context = _opts.context,
        resolution = _opts.resolution,
        _opts$handleEvent = _opts.handleEvent,
        handleEvent = _opts$handleEvent === undefined ? true : _opts$handleEvent,
        _opts$evaluateFPS = _opts.evaluateFPS,
        evaluateFPS = _opts$evaluateFPS === undefined ? false : _opts$evaluateFPS,
        _opts$renderMode = _opts.renderMode,
        renderMode = _opts$renderMode === undefined ? 'repaintAll' : _opts$renderMode,
        _opts$autoRender = _opts.autoRender,
        autoRender = _opts$autoRender === undefined ? true : _opts$autoRender,
        _opts$useDocumentCSS = _opts.useDocumentCSS,
        useDocumentCSS = _opts$useDocumentCSS === undefined ? false : _opts$useDocumentCSS;


    context = context || (0, _platform.createCanvas)().getContext('2d');
    var canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExLayer.__proto__ || (0, _getPrototypeOf2.default)(ExLayer)).call(this, { context: context, handleEvent: handleEvent, evaluateFPS: evaluateFPS, renderMode: renderMode, autoRender: autoRender, useDocumentCSS: useDocumentCSS }));

    if (resolution) {
      _this.resolution = resolution;
    } else {
      _this[_resolution] = [_this.canvas.width, _this.canvas.height, 0, 0];
    }

    _this[_attrs] = new _set2.default(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
    return _this;
  }

  (0, _createClass3.default)(ExLayer, [{
    key: 'setAttribute',
    value: function setAttribute(name, value) {
      if (this[_attrs].has(name)) {
        this[name] = value;
      } else {
        (0, _get3.default)(ExLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExLayer.prototype), 'setAttribute', this).call(this, name, value);
      }
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      if (this[_attrs].has(name)) {
        return this[name];
      }
      return (0, _get3.default)(ExLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExLayer.prototype), 'getAttribute', this).call(this, name);
    }
  }, {
    key: 'removeAttribute',
    value: function removeAttribute(name) {
      if (this[_attrs].has(name)) {
        this[name] = null;
      } else {
        (0, _get3.default)(ExLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExLayer.prototype), 'removeAttribute', this).call(this, name);
      }
    }
  }, {
    key: 'pointCollision',
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX | 0,
            layerY = evt.layerY | 0;

        var _resolution2 = (0, _slicedToArray3.default)(this.resolution, 4),
            width = _resolution2[0],
            height = _resolution2[1],
            offsetLeft = _resolution2[2],
            offsetTop = _resolution2[3];

        layerX += offsetLeft;
        layerY += offsetTop;

        if (layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
          return true;
        }
        return false;
      }
      /* istanbul ignore next  */
      return true;
    }
  }, {
    key: 'setDisplayRatio',
    value: function setDisplayRatio(ratio) {
      var maxDisplayRatio = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Infinity;
      var updateDisplay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      if (typeof ratio === 'string') {
        if (ratio.endsWith('rw')) {
          ratio = parseFloat(ratio);
        } else if (ratio.endsWith('vw')) {
          ratio = parseFloat(ratio) * this.viewport[0] / this.resolution[0];
        } else if (ratio === 'auto') {
          if (typeof window !== 'undefined' && window.devicePixelRatio) {
            ratio = window.devicePixelRatio * this.viewport[0] / this.resolution[0];
          } else {
            ratio = this.viewport[0] / this.resolution[0];
          }
        } else {
          ratio = parseFloat(ratio);
        }
      }
      if ((0, _isFinite2.default)(ratio)) {
        ratio = Math.min(ratio, maxDisplayRatio);
      } else {
        ratio = 1;
      }
      this[_displayRatio] = ratio;
      if (updateDisplay) this.updateDisplay();
      this.dispatchEvent('ratioChange', { target: this }, true, true);
    }
  }, {
    key: 'updateDisplay',
    value: function updateDisplay() {
      var _this2 = this;

      var ratio = this[_displayRatio];
      var resolution = this[_resolution];

      var _resolution$map = resolution.map(function (r) {
        return r * ratio;
      }),
          _resolution$map2 = (0, _slicedToArray3.default)(_resolution$map, 4),
          width = _resolution$map2[0],
          height = _resolution$map2[1],
          offsetLeft = _resolution$map2[2],
          offsetTop = _resolution$map2[3];

      var outputCanvas = this.outputContext.canvas;
      outputCanvas.width = width;
      outputCanvas.height = height;
      // this.outputContext.clearRect(0, 0, width, height);

      if (offsetLeft || offsetTop) {
        this.outputContext.translate(offsetLeft, offsetTop);
      }

      this.beforeDrawTransform = function () {
        _this2.outputContext.scale(ratio, ratio);
      };

      this.childNodes.forEach(function (child) {
        delete child.lastRenderBox;
        child.forceUpdate();
      });
    }
  }, {
    key: 'toLocalPos',
    value: function toLocalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;

      x = x * resolution[0] / viewport[0] - resolution[2];
      y = y * resolution[1] / viewport[1] - resolution[3];

      return [x, y];
    }
  }, {
    key: 'toGlobalPos',
    value: function toGlobalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;

      x = x * viewport[0] / resolution[0] + resolution[2];
      y = y * viewport[1] / resolution[1] + resolution[3];

      return [x, y];
    }
  }, {
    key: 'clearContext',
    value: function clearContext() {
      var context = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.outputContext;

      if (context.canvas) {
        var _context$canvas = context.canvas,
            width = _context$canvas.width,
            height = _context$canvas.height;

        var resolution = this.resolution;
        context.clearRect(-(resolution[2] | 0), -(resolution[3] | 0), width, height);
      }
    }
  }, {
    key: 'takeSnapshot',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var snapshotCanvas, context, children;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.prepareRender();

              case 2:
                snapshotCanvas = this.canvas.cloneNode(true), context = snapshotCanvas.getContext('2d');


                context.drawImage(this.canvas, 0, 0);
                children = this.childNodes.map(function (child) {
                  return child.serialize();
                });
                return _context.abrupt('return', { context: context, children: children });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function takeSnapshot() {
        return _ref.apply(this, arguments);
      }

      return takeSnapshot;
    }()
  }, {
    key: 'putSnapshot',
    value: function putSnapshot(snapshot) {
      var _this3 = this;

      var outputContext = this.outputContext;

      this.clearContext(outputContext);
      outputContext.drawImage(snapshot.context.canvas, 0, 0);

      this.clearUpdate();

      snapshot.children.forEach(function (child) {
        var node = (0, _spriteCore.createNode)(child.nodeType);
        if (child.id) {
          node.id = child.id;
        }
        node.attr(JSON.parse(child.attrs));
        _this3.appendChild(node, false);
      });

      for (var i = 0; i < this.childNodes.length; i++) {
        var child = this.childNodes[i];
        child.dispatchEvent('update', {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
        }, true);

        child.lastRenderBox = child.renderBox;
      }

      return this.childNodes;
    }
  }, {
    key: 'id',
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: 'resolution',
    get: function get() {
      return this[_resolution];
    },
    set: function set(resolution) {
      this[_resolution] = resolution;
      if (this[_displayRatio] == null) {
        this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
      }
      this.updateDisplay();
      this.dispatchEvent('resolutionChange', { target: this }, true, true);
    }
  }, {
    key: 'viewport',
    get: function get() {
      var canvas = this.canvas;
      if (canvas) {
        if (canvas.getBoundingClientRect) {
          var _canvas$getBoundingCl = canvas.getBoundingClientRect(),
              _width = _canvas$getBoundingCl.width,
              _height = _canvas$getBoundingCl.height;

          if (_width > 0) {
            return [_width, _height];
          }
        }
        if (canvas.clientWidth) return [canvas.clientWidth, canvas.clientHeight];
      }
      if (this.parent) {
        return this.parent.layerViewport;
      }

      var _resolution3 = (0, _slicedToArray3.default)(this[_resolution], 2),
          width = _resolution3[0],
          height = _resolution3[1];

      return [width, height];
    }
  }, {
    key: 'offset',
    get: function get() {
      return [this.resolution[2], this.resolution[3]];
    }
  }, {
    key: 'center',
    get: function get() {
      var _resolution4 = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution4[0],
          height = _resolution4[1];

      return [width / 2, height / 2];
    }
  }, {
    key: 'displayRatio',
    get: function get() {
      return this[_displayRatio];
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return this.attr('zIndex');
    },
    set: function set(zIndex) {
      this.attr('zIndex', zIndex);
      this.canvas.style.zIndex = zIndex;
      this.parent.layers.reverse();
    }
  }]);
  return ExLayer;
}(_spriteCore.Layer);

exports.default = ExLayer;