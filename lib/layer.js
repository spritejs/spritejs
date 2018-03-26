'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteCore = require('sprite-core');

var _nodetype = require('./nodetype');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _viewport = (0, _symbol2.default)('_viewport');

var ExLayer = function (_Layer) {
  (0, _inherits3.default)(ExLayer, _Layer);

  function ExLayer() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, ExLayer);

    // d3-friendly
    var _this = (0, _possibleConstructorReturn3.default)(this, (ExLayer.__proto__ || (0, _getPrototypeOf2.default)(ExLayer)).call(this, opts));

    _this.namespaceURI = 'http://spritejs.org/layer';
    var that = _this;
    _this.ownerDocument = {
      createElementNS: function createElementNS(uri, name) {
        var sprite = (0, _nodetype.createNode)(name);
        if (sprite) {
          return that.appendChild(sprite);
        }
        return null;
      }
    };
    return _this;
  }

  (0, _createClass3.default)(ExLayer, [{
    key: 'getElementById',
    value: function getElementById(id) {
      var children = this.children;
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        if (child.id === id) {
          return child;
        }
      }
      return null;
    }
  }, {
    key: 'getElementsByName',
    value: function getElementsByName(name) {
      return this.children.filter(function (c) {
        return c.name === name;
      });
    }
    /*
      d3-friendly
      *, nodeType, checker
    */

  }, {
    key: 'querySelector',
    value: function querySelector(selector) {
      var children = this.children;

      if (!selector || selector === '*') {
        return children[0];
      } else if (typeof selector === 'string') {
        // querySelector('nodeType')
        // querySelector('#id')
        // querySelector(':name')

        if (selector.startsWith('#')) {
          return this.getElementById(selector.slice(1));
        }
        if (selector.startsWith(':')) {
          var name = selector.slice(1);

          for (var i = 0; i < children.length; i++) {
            var child = children[i];
            if (child.name === name) {
              return child;
            }
          }
          return null;
        }
        var nodeType = (0, _nodetype.getNodeType)(selector);
        if (nodeType) {
          for (var _i = 0; _i < children.length; _i++) {
            var _child = children[_i];
            if (_child instanceof nodeType) {
              return _child;
            }
          }
          return null;
        }
        return null;
      }
      for (var _i2 = 0; _i2 < children.length; _i2++) {
        var _child2 = children[_i2];
        var sel = (0, _entries2.default)(selector);
        for (var j = 0; j < sel.length; j++) {
          var _sel$j = (0, _slicedToArray3.default)(sel[j], 2),
              type = _sel$j[0],
              checker = _sel$j[1];

          var _nodeType = (0, _nodetype.getNodeType)(type);
          if (_nodeType && _child2 instanceof _nodeType && checker.call(this, _child2)) {
            return _child2;
          }
        }
      }
      return null;
    }
  }, {
    key: 'querySelectorAll',
    value: function querySelectorAll(selector) {
      var _this2 = this;

      if (!selector || selector === '*') {
        return this.children;
      } else if (typeof selector === 'string') {
        if (selector.startsWith('#')) {
          var sprite = this.getElementById(selector.slice(1));
          return sprite ? [sprite] : [];
        }
        if (selector.startsWith(':')) {
          return this.getElementsByName(selector.slice(1));
        }
        var nodeType = (0, _nodetype.getNodeType)(selector);
        if (nodeType) {
          return this.children.filter(function (child) {
            return child instanceof nodeType;
          });
        }
        return null;
      }
      return this.children.filter(function (child) {
        var sel = (0, _entries2.default)(selector);
        for (var i = 0; i < sel.length; i++) {
          var _sel$i = (0, _slicedToArray3.default)(sel[i], 2),
              type = _sel$i[0],
              checker = _sel$i[1];

          var _nodeType2 = (0, _nodetype.getNodeType)(type);
          if (!_nodeType2 || !(child instanceof _nodeType2)) {
            return false;
          }
          if (!checker.call(_this2, child)) {
            return false;
          }
        }
        return true;
      });
    }
  }, {
    key: 'getSnapshot',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
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
        return _ref.apply(this, arguments);
      }

      return getSnapshot;
    }()
  }, {
    key: 'putSnapshot',
    value: function putSnapshot(snapshot) {
      var _this3 = this;

      var outputContext = this.outputContext;

      var _resolution = (0, _slicedToArray3.default)(this.resolution, 2),
          width = _resolution[0],
          height = _resolution[1];

      outputContext.clearRect(0, 0, width, height);
      outputContext.drawImage(snapshot.context, 0, 0);

      this.clearUpdate();

      snapshot.children.forEach(function (child) {
        var node = (0, _nodetype.createNode)(child.nodeType, child.attrs, child.id);
        _this3.appendChild(node, false);
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
    key: 'id',
    get: function get() {
      return this.canvas.dataset.layerId;
    }
  }, {
    key: 'viewport',
    set: function set(_ref2) {
      var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
          width = _ref3[0],
          height = _ref3[1];

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