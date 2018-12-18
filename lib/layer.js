"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _layer = _interopRequireDefault(require("sprite-core/src/core/layer"));

var _nodetype = require("sprite-core/src/modules/dom/nodetype");

var _platform = require("./platform");

var _resolution = Symbol('resolution');

var _attrs = Symbol('attrs');

var _displayRatio = Symbol('displayRatio');

var ExLayer =
/*#__PURE__*/
function (_Layer) {
  (0, _inherits2.default)(ExLayer, _Layer);

  function ExLayer(id) {
    var _this;

    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, ExLayer);

    if ((0, _typeof2.default)(id) === 'object') {
      opts = id;
      id = opts.id || "id_".concat(Math.random().toString().slice(2, 10));
    }

    var _opts = opts,
        context = _opts.context,
        resolution = _opts.resolution,
        _opts$handleEvent = _opts.handleEvent,
        handleEvent = _opts$handleEvent === void 0 ? true : _opts$handleEvent,
        _opts$evaluateFPS = _opts.evaluateFPS,
        evaluateFPS = _opts$evaluateFPS === void 0 ? false : _opts$evaluateFPS,
        _opts$renderMode = _opts.renderMode,
        renderMode = _opts$renderMode === void 0 ? 'repaintAll' : _opts$renderMode,
        _opts$autoRender = _opts.autoRender,
        autoRender = _opts$autoRender === void 0 ? true : _opts$autoRender,
        _opts$useDocumentCSS = _opts.useDocumentCSS,
        useDocumentCSS = _opts$useDocumentCSS === void 0 ? false : _opts$useDocumentCSS;
    context = context || (0, _platform.createCanvas)().getContext('2d');
    var canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(ExLayer).call(this, {
      context: context,
      evaluateFPS: evaluateFPS,
      renderMode: renderMode,
      autoRender: autoRender,
      useDocumentCSS: useDocumentCSS
    }));
    _this.handleEvent = handleEvent;

    if (context.canvas && context.canvas.addEventListener) {
      context.canvas.addEventListener('mouseleave', function (evt) {
        // fixed mouseleave outof range
        var layers = _this.parent ? _this.parent.sortedChildNodes : [(0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this))];

        var _evt$target$getBoundi = evt.target.getBoundingClientRect(),
            left = _evt$target$getBoundi.left,
            top = _evt$target$getBoundi.top;

        var clientX = evt.clientX,
            clientY = evt.clientY;
        var originalX = Math.round((clientX | 0) - left);
        var originalY = Math.round((clientY | 0) - top);

        var _this$toLocalPos = _this.toLocalPos(originalX, originalY),
            _this$toLocalPos2 = (0, _slicedToArray2.default)(_this$toLocalPos, 2),
            x = _this$toLocalPos2[0],
            y = _this$toLocalPos2[1];

        layers.forEach(function (layer) {
          if (layer.handleEvent) {
            layer.dispatchEvent('mouseleave', {
              originalEvent: evt,
              layerX: x,
              layerY: y,
              originalX: originalX,
              originalY: originalY,
              x: x,
              y: y
            });
          }
        });
      });
    }

    if (resolution) {
      _this.resolution = resolution;
    } else {
      _this[_resolution] = [_this.canvas.width, _this.canvas.height, 0, 0];
    }

    _this[_attrs] = new Set(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
    return _this;
  }

  (0, _createClass2.default)(ExLayer, [{
    key: "pointCollision",
    value: function pointCollision(evt) {
      if (this.outputContext.canvas) {
        var layerX = evt.layerX | 0,
            layerY = evt.layerY | 0;

        var _this$resolution = (0, _slicedToArray2.default)(this.resolution, 4),
            width = _this$resolution[0],
            height = _this$resolution[1],
            offsetLeft = _this$resolution[2],
            offsetTop = _this$resolution[3];

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
    key: "setDisplayRatio",
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

      if (Number.isFinite(ratio)) {
        ratio = Math.min(ratio, maxDisplayRatio);
      } else {
        ratio = 1;
      }

      this[_displayRatio] = ratio;
      if (updateDisplay) this.updateDisplay();
      this.dispatchEvent('ratioChange', {
        target: this
      }, true, true);
    }
  }, {
    key: "updateDisplay",
    value: function updateDisplay() {
      var _this2 = this;

      var ratio = this[_displayRatio];
      var resolution = this[_resolution];

      var _resolution$map = resolution.map(function (r) {
        return r * ratio;
      }),
          _resolution$map2 = (0, _slicedToArray2.default)(_resolution$map, 4),
          width = _resolution$map2[0],
          height = _resolution$map2[1],
          offsetLeft = _resolution$map2[2],
          offsetTop = _resolution$map2[3];

      var outputCanvas = this.outputContext.canvas;
      outputCanvas.width = width;
      outputCanvas.height = height; // this.outputContext.clearRect(0, 0, width, height);

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
    key: "toLocalPos",
    value: function toLocalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;
      x = x * resolution[0] / viewport[0] - resolution[2];
      y = y * resolution[1] / viewport[1] - resolution[3];
      return [x, y];
    }
  }, {
    key: "toGlobalPos",
    value: function toGlobalPos(x, y) {
      var resolution = this.resolution,
          viewport = this.viewport;
      x = x * viewport[0] / resolution[0] + resolution[2];
      y = y * viewport[1] / resolution[1] + resolution[3];
      return [x, y];
    }
  }, {
    key: "clearContext",
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
    key: "takeSnapshot",
    value: function () {
      var _takeSnapshot = (0, _asyncToGenerator2.default)(
      /*#__PURE__*/
      _regenerator.default.mark(function _callee() {
        var snapshotCanvas, context, children;
        return _regenerator.default.wrap(function _callee$(_context) {
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
                return _context.abrupt("return", {
                  context: context,
                  children: children
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function takeSnapshot() {
        return _takeSnapshot.apply(this, arguments);
      }

      return takeSnapshot;
    }()
  }, {
    key: "putSnapshot",
    value: function putSnapshot(snapshot) {
      var _this3 = this;

      var outputContext = this.outputContext;
      this.clearContext(outputContext);
      outputContext.drawImage(snapshot.context.canvas, 0, 0);
      snapshot.children.forEach(function (child) {
        var node = (0, _nodetype.createNode)(child.nodeType);

        if (child.id) {
          node.id = child.id;
        }

        node.attr(JSON.parse(child.attrs));

        _this3.appendChild(node, false);
      });

      for (var i = 0; i < this.childNodes.length; i++) {
        var child = this.childNodes[i];
        child.dispatchEvent('update', {
          target: child,
          context: child.context,
          renderBox: child.renderBox,
          lastRenderBox: child.lastRenderBox
        }, true);
        child.lastRenderBox = child.renderBox;
      }

      return this.childNodes;
    }
  }, {
    key: "id",
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: "resolution",
    get: function get() {
      return this[_resolution];
    },
    set: function set(resolution) {
      this[_resolution] = resolution;

      if (this[_displayRatio] == null) {
        this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
      }

      this.updateDisplay();
      this.dispatchEvent('resolutionChange', {
        target: this
      }, true, true);
    }
  }, {
    key: "viewport",
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

      var _this$_resolution = (0, _slicedToArray2.default)(this[_resolution], 2),
          width = _this$_resolution[0],
          height = _this$_resolution[1];

      return [width, height];
    }
  }, {
    key: "offset",
    get: function get() {
      return [this.resolution[2], this.resolution[3]];
    }
  }, {
    key: "center",
    get: function get() {
      var _this$resolution2 = (0, _slicedToArray2.default)(this.resolution, 2),
          width = _this$resolution2[0],
          height = _this$resolution2[1];

      return [width / 2, height / 2];
    }
  }, {
    key: "displayRatio",
    get: function get() {
      return this[_displayRatio];
    }
  }, {
    key: "zIndex",
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
}(_layer.default);

var _default = ExLayer;
exports.default = _default;