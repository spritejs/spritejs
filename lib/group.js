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

var _getIterator2 = require('babel-runtime/core-js/get-iterator');

var _getIterator3 = _interopRequireDefault(_getIterator2);

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
        var originRect = this.originRect;
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
        var context, children, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, child, ctx, transform, pos, bound;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                context = (0, _get3.default)(Group.prototype.__proto__ || (0, _getPrototypeOf2.default)(Group.prototype), 'render', this).call(this, t);
                children = this[_children];
                _iteratorNormalCompletion = true;
                _didIteratorError = false;
                _iteratorError = undefined;
                _context.prev = 5;
                _iterator = (0, _getIterator3.default)(children);

              case 7:
                if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {
                  _context.next = 22;
                  break;
                }

                child = _step.value;
                _context.next = 11;
                return child.render(t);

              case 11:
                ctx = _context.sent;
                transform = child.transform.m, pos = child.attr('pos'), bound = child.originRect;


                context.save();
                context.translate(pos[0], pos[1]);
                context.transform.apply(context, (0, _toConsumableArray3.default)(transform));
                context.globalAlpha = child.attr('opacity');
                context.drawImage(ctx.canvas, bound[0], bound[1]);
                context.restore();

              case 19:
                _iteratorNormalCompletion = true;
                _context.next = 7;
                break;

              case 22:
                _context.next = 28;
                break;

              case 24:
                _context.prev = 24;
                _context.t0 = _context['catch'](5);
                _didIteratorError = true;
                _iteratorError = _context.t0;

              case 28:
                _context.prev = 28;
                _context.prev = 29;

                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }

              case 31:
                _context.prev = 31;

                if (!_didIteratorError) {
                  _context.next = 34;
                  break;
                }

                throw _iteratorError;

              case 34:
                return _context.finish(31);

              case 35:
                return _context.finish(28);

              case 36:
                return _context.abrupt('return', context);

              case 37:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 24, 28, 36], [29,, 31, 35]]);
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
        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = (0, _getIterator3.default)(this[_children]), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var sprite = _step2.value;

            var renderBox = sprite.renderBox;
            width = Math.max(width, renderBox[2]);
            height = Math.max(width, renderBox[3]);
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }
      }

      return [width, height];
    }
  }]);
  return Group;
}(_basesprite2.default);

exports.default = Group;