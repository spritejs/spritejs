'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

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

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _spriteAnimator = require('sprite-animator');

var _math = require('./math');

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultEffect = _spriteAnimator.Effects.default;

function arrayEffect(arr1, arr2, p, start, end) {
  if (Array.isArray(arr1)) {
    return arr1.map(function (o, i) {
      return defaultEffect(o, arr2[i], p, start, end);
    });
  }
  return defaultEffect(arr1, arr2, p, start, end);
}

function transformMatrix(trans) {
  if (Array.isArray(trans)) {
    return trans;
  }
  var transform = new _math.Matrix();

  (0, _entries2.default)(trans).forEach(function (_ref) {
    var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    if (Array.isArray(value)) {
      transform[key].apply(transform, (0, _toConsumableArray3.default)(value));
    } else {
      transform[key](value);
    }
  });

  return transform;
}

function objectEffect(obj1, obj2, p, start, end) {
  var t1 = (0, _assign2.default)({}, obj2, obj1),
      t2 = (0, _assign2.default)({}, obj1, obj2);

  (0, _entries2.default)(t1).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray3.default)(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    t1[key] = arrayEffect(value, t2[key], p, start, end);
  });

  return t1;
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = (0, _utils.parseStringTransform)(trans1);
  trans2 = (0, _utils.parseStringTransform)(trans2);

  if (Array.isArray(trans1) || Array.isArray(trans2)) {
    trans1 = transformMatrix(trans1);
    trans2 = transformMatrix(trans2);
    return arrayEffect(trans1, trans2, p, start, end);
  }
  return objectEffect(trans1, trans2, p, start, end);
}

function colorEffect(color1, color2, p, start, end) {
  color1 = (0, _utils.parseColor)(color1);
  color2 = (0, _utils.parseColor)(color2);

  if (color1.model === color2.model) {
    color1.value = arrayEffect(color1.value, color2.value, p, start, end).map(function (c) {
      return Math.round(c);
    });
    return color1;
  }

  return color2;
}

(0, _assign2.default)(_spriteAnimator.Effects, {
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border: function border(v1, v2, p, start, end) {
    return [defaultEffect(v1[0], v2[0], p, start, end), colorEffect(v1[1], v2[1], p, start, end)];
  },

  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  zIndex: function zIndex(v1, v2, p, start, end) {
    return Math.round(defaultEffect(v1, v2, p, start, end));
  },

  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect
});

var _default = function (_Animator) {
  (0, _inherits3.default)(_default, _Animator);

  function _default(sprite, frames, timing) {
    (0, _classCallCheck3.default)(this, _default);

    var _this = (0, _possibleConstructorReturn3.default)(this, (_default.__proto__ || (0, _getPrototypeOf2.default)(_default)).call(this, sprite.attr(), frames, timing));

    _this.target = sprite;
    return _this;
  }

  (0, _createClass3.default)(_default, [{
    key: 'play',
    value: function play() {
      if (!this.target.parent || this.playState === 'running') {
        return;
      }

      (0, _get3.default)(_default.prototype.__proto__ || (0, _getPrototypeOf2.default)(_default.prototype), 'play', this).call(this);

      var sprite = this.target,
          layer = sprite.parent;

      if (!layer) {
        throw new Error('no context');
      }

      sprite.attr(this.frame);

      var that = this;
      this.ready.then(function () {
        requestAnimationFrame(function update() {
          if (that.playState === 'idle') return;
          sprite.attr(that.frame);
          if (that.playState === 'running') {
            requestAnimationFrame(update);
          } else if (that.playState === 'paused') {
            that.ready.then(function () {
              requestAnimationFrame(update);
            });
          }
        });
      });
    }

    // 防止异步设置了不该设置的属性

  }, {
    key: 'cancel',
    value: function cancel() {
      (0, _get3.default)(_default.prototype.__proto__ || (0, _getPrototypeOf2.default)(_default.prototype), 'cancel', this).call(this);
      this.target.attr(this.frame);
    }
  }, {
    key: 'playState',
    get: function get() {
      if (!this.target.parent) {
        return 'idle';
      }
      return (0, _get3.default)(_default.prototype.__proto__ || (0, _getPrototypeOf2.default)(_default.prototype), 'playState', this);
    }
  }]);
  return _default;
}(_spriteAnimator.Animator);

exports.default = _default;