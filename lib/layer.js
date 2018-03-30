'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

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

var _spriteCore = require('sprite-core');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _viewport = (0, _symbol2.default)('_viewport');

var ExLayer = function (_Layer) {
  (0, _inherits3.default)(ExLayer, _Layer);

  function ExLayer() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        context = _ref.context,
        handleEvent = _ref.handleEvent,
        evaluateFPS = _ref.evaluateFPS,
        renderMode = _ref.renderMode,
        resolution = _ref.resolution;

    (0, _classCallCheck3.default)(this, ExLayer);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ExLayer.__proto__ || (0, _getPrototypeOf2.default)(ExLayer)).call(this, { context: context, handleEvent: handleEvent, evaluateFPS: evaluateFPS, renderMode: renderMode }));

    if (resolution) {
      _this.resolution = resolution;
    }
    return _this;
  }

  (0, _createClass3.default)(ExLayer, [{
    key: 'isVisible',
    value: function isVisible(sprite) {
      if (!(0, _get3.default)(ExLayer.prototype.__proto__ || (0, _getPrototypeOf2.default)(ExLayer.prototype), 'isVisible', this).call(this, sprite)) return false;

      var _resolution = (0, _slicedToArray3.default)(this.resolution, 2),
          maxWidth = _resolution[0],
          maxHeigth = _resolution[1];

      var box = sprite.renderBox;
      if (box[0] > maxWidth || box[1] > maxHeigth || box[2] < 0 || box[3] < 0) {
        return false;
      }
      return true;
    }
  }, {
    key: 'getSnapshot',
    value: function () {
      var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
        var snapshotCanvas, children;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.prepareRender();

              case 2:
                snapshotCanvas = this.canvas.cloneNode(true);

                snapshotCanvas.getContext('2d').drawImage(this.canvas, 0, 0);
                children = this.children.map(function (child) {
                  return child.serialize();
                });
                return _context.abrupt('return', { context: snapshotCanvas, children: children });

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getSnapshot() {
        return _ref2.apply(this, arguments);
      }

      return getSnapshot;
    }()
  }, {
    key: 'putSnapshot',
    value: function putSnapshot(snapshot) {
      var _this2 = this;

      var outputContext = this.outputContext;

      var _resolution2 = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution2[0],
          height = _resolution2[1];

      outputContext.clearRect(0, 0, width, height);
      outputContext.drawImage(snapshot.context, 0, 0);

      this.clearUpdate();

      snapshot.children.forEach(function (child) {
        var node = (0, _spriteCore.createNode)(child.nodeType);
        (0, _assign2.default)(node.attrs(), JSON.parse(child.attrs));
        _this2.appendChild(node, false);
      });

      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        child.dispatchEvent('update', {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox
        }, true);

        child.lastRenderBox = child.renderBox;
      }

      return this.children;
    }
  }, {
    key: 'canvas',
    get: function get() {
      return this.outputContext.canvas;
    }
  }, {
    key: 'id',
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: 'resolution',
    get: function get() {
      return [this.canvas.width, this.canvas.height];
    },
    set: function set(resolution) {
      var _resolution3 = (0, _slicedToArray3.default)(resolution, 2),
          width = _resolution3[0],
          height = _resolution3[1];

      var outputCanvas = this.outputContext.canvas;
      outputCanvas.width = width;
      outputCanvas.height = height;
      this.outputContext.clearRect(0, 0, width, height);

      if (this.shadowContext) {
        var shadowCanvas = this.shadowContext.canvas;
        shadowCanvas.width = width;
        shadowCanvas.height = height;
        this.shadowContext.clearRect(0, 0, width, height);
      }

      this.children.forEach(function (child) {
        delete child.lastRenderBox;
        child.forceUpdate();
      });
    }
  }, {
    key: 'viewport',
    set: function set(_ref3) {
      var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
          width = _ref4[0],
          height = _ref4[1];

      this.canvas.style.width = width + 'px';
      this.canvas.style.height = height + 'px';
      this[_viewport] = [width, height];
    },
    get: function get() {
      return this[_viewport];
    }
  }, {
    key: 'zIndex',
    get: function get() {
      return this.canvas.style.zIndex;
    },
    set: function set(zIndex) {
      this.canvas.style.zIndex = zIndex;
    }
  }]);
  return ExLayer;
}(_spriteCore.Layer);

exports.default = ExLayer;