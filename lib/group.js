'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

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

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _children = (0, _symbol2.default)('children'),
    _zOrder = (0, _symbol2.default)('zOrder');

function sortChildren(children) {
  children.sort(function (a, b) {
    var a_zidx = a.attr('zIndex'),
        b_zidx = b.attr('zIndex');
    if (a_zidx === b_zidx) {
      return a.zOrder - b.zOrder;
    }
    return a_zidx - b_zidx;
  });
}

var Group = function (_BaseSprite) {
  (0, _inherits3.default)(Group, _BaseSprite);

  function Group() {
    var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { attr: {} };
    (0, _classCallCheck3.default)(this, Group);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Group.__proto__ || (0, _getPrototypeOf2.default)(Group)).call(this, opts));

    _this[_children] = [];
    _this[_zOrder] = 0;
    return _this;
  }

  (0, _createClass3.default)(Group, [{
    key: 'appendChild',
    value: function appendChild(sprite) {
      var sort = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      this[_children].push(sprite);
      sprite.connect(this, this[_zOrder]++);
      if (sort) sortChildren(this[_children]);
    }
  }, {
    key: 'append',
    value: function append() {
      var _this2 = this;

      for (var _len = arguments.length, sprites = Array(_len), _key = 0; _key < _len; _key++) {
        sprites[_key] = arguments[_key];
      }

      sprites.forEach(function (sprite) {
        return _this2.appendChild(sprite, false);
      });
      sortChildren(this[_children]);
    }
  }, {
    key: 'removeChild',
    value: function removeChild(sprite) {
      var idx = this[_children].indexOf(sprite);
      if (idx === -1) {
        return null;
      }
      this[_children].splice(idx, 1);
      sprite.disconnect(this);
      return sprite;
    }
  }, {
    key: 'remove',
    value: function remove() {
      var _this3 = this;

      for (var _len2 = arguments.length, sprites = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        sprites[_key2] = arguments[_key2];
      }

      sprites.forEach(function (sprite) {
        return _this3.removeChild(sprite);
      });
    }
  }, {
    key: 'dispatchEvent',
    value: function dispatchEvent(type, evt) {
      var forceTrigger = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

      if (!evt.terminated && (forceTrigger || this.pointCollision(evt))) {
        var parentX = evt.offsetX - this.originRect[0];
        var parentY = evt.offsetY - this.originRect[1];
        // console.log(evt.parentX, evt.parentY)

        var _evt = (0, _assign2.default)({}, evt);
        _evt.parentX = parentX;
        _evt.parentY = parentY;

        var targetSprites = [];
        this[_children].forEach(function (sprite) {
          var hit = sprite.dispatchEvent(type, _evt, forceTrigger);
          if (hit) {
            targetSprites.push(sprite);
          }
        });

        evt.targetSprites = targetSprites;
        (0, _get3.default)(Group.prototype.__proto__ || (0, _getPrototypeOf2.default)(Group.prototype), 'dispatchEvent', this).call(this, type, evt, forceTrigger);
      }
    }
  }, {
    key: 'render',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(t) {
        var context, children, i, child, ctx, transform, pos, bound;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context = (0, _get3.default)(Group.prototype.__proto__ || (0, _getPrototypeOf2.default)(Group.prototype), 'render', this).call(this, t);
                children = this[_children];

                /* eslint-disable no-await-in-loop */

                i = 0;

              case 3:
                if (!(i < children.length)) {
                  _context.next = 18;
                  break;
                }

                child = children[i];
                _context.next = 7;
                return child.render(t);

              case 7:
                ctx = _context.sent;
                transform = child.transform.m, pos = child.attr('pos'), bound = child.originRect;


                context.save();
                context.translate(pos[0], pos[1]);
                context.transform.apply(context, (0, _toConsumableArray3.default)(transform));
                context.globalAlpha = child.attr('opacity');
                context.drawImage(ctx.canvas, bound[0], bound[1]);
                context.restore();

              case 15:
                i++;
                _context.next = 3;
                break;

              case 18:
                return _context.abrupt('return', context);

              case 19:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function render(_x4) {
        return _ref.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: 'contentSize',
    get: function get() {
      var _attr = this.attr('size'),
          _attr2 = (0, _slicedToArray3.default)(_attr, 2),
          width = _attr2[0],
          height = _attr2[1];

      if (width === '' || height === '') {
        width = height = 0;
        this[_children].forEach(function (sprite) {
          var renderBox = sprite.renderBox;
          width = Math.max(width, renderBox[2]);
          height = Math.max(width, renderBox[3]);
        });
      }

      return [width, height];
    }
  }]);
  return Group;
}(_basesprite2.default);

exports.default = Group;