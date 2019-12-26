"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _spriteAnimator = require("sprite-animator");

var _colorRgba = _interopRequireDefault(require("color-rgba"));

var _animationFrame = require("../utils/animation-frame");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

_spriteAnimator.Effects.default = function (from, to, p, s, e) {
  if (typeof from === 'string' && from.indexOf('rgba') === 0) {
    from = (0, _colorRgba.default)(from);
  }

  if (typeof to === 'string' && to.indexOf('rgba') === 0) {
    to = (0, _colorRgba.default)(to);
  }

  if (Array.isArray(from) && Array.isArray(to)) {
    return from.map(function (v, i) {
      return v + (p - s) / (e - s) * (to[i] - v);
    });
  }

  if (typeof from === 'number' && typeof to === 'number') {
    return from + (p - s) / (e - s) * (to - from);
  }

  if (p - s > e - p) {
    return to;
  }

  return from;
};

var Animation =
/*#__PURE__*/
function (_Animator) {
  (0, _inherits2.default)(Animation, _Animator);

  function Animation(sprite, frames, timing) {
    var _this;

    (0, _classCallCheck2.default)(this, Animation);
    var initAttrs = sprite.attr();
    frames = frames.map(function (_ref) {
      var frame = (0, _extends2.default)({}, _ref);
      var ret = {};
      var node = sprite.cloneNode();
      node.attr(frame);
      Object.keys(frame).forEach(function (key) {
        ret[key] = node.attributes[key];
      });
      return ret;
    });
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Animation).call(this, initAttrs, frames, timing));
    _this.target = sprite;

    _this.setter = function (frame, target) {
      target.attr(frame);
    };

    return _this;
  }

  (0, _createClass2.default)(Animation, [{
    key: "finish",
    value: function finish() {
      // finish should change attrs synchronously
      (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "finish", this).call(this);
      (0, _animationFrame.cancelAnimationFrame)(this.requestId);
      this.setter(this.frame, this.target);
    }
  }, {
    key: "play",
    value: function play() {
      if (!this.target.parent || this.playState === 'running') {
        return;
      }

      (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "play", this).call(this);
      this.setter(this.frame, this.target);
      var that = this;
      this.ready.then(function () {
        that.setter(that.frame, that.target);
        that.requestId = (0, _animationFrame.requestAnimationFrame)(function update() {
          var target = that.target;

          if (typeof document !== 'undefined' && document.documentElement && document.documentElement.contains && target.layer && target.layer.canvas && !document.documentElement.contains(target.layer.canvas)) {
            // if dom element has been removed stop animation.
            // it usually occurs in single page applications.
            that.cancel();
            return;
          }

          var playState = that.playState;
          that.setter(that.frame, that.target);
          if (playState === 'idle') return;

          if (playState === 'running') {
            that.requestId = (0, _animationFrame.requestAnimationFrame)(update);
          } else if (playState === 'paused' || playState === 'pending' && that.timeline.currentTime < 0) {
            // playbackRate < 0 will cause playState reset to pending...
            that.ready.then(function () {
              that.setter(that.frame, that.target);
              that.requestId = (0, _animationFrame.requestAnimationFrame)(update);
            });
          }
        });
      });
    }
  }, {
    key: "cancel",
    value: function cancel() {
      var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      (0, _animationFrame.cancelAnimationFrame)(this.requestId);

      if (preserveState) {
        this.setter(this.frame, this.target);
        (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "cancel", this).call(this);
      } else {
        (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "cancel", this).call(this);
        this.setter(this.frame, this.target);
      }
    }
  }, {
    key: "playState",
    get: function get() {
      if (!this.target.parent) {
        return 'idle';
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "playState", this);
    }
  }, {
    key: "finished",
    get: function get() {
      var _this2 = this;

      // set last frame when finished
      // because while the web page is not focused
      // requestAnimationFrame will not trigger while deferTime of
      // the animator is still running
      return (0, _get2.default)((0, _getPrototypeOf2.default)(Animation.prototype), "finished", this).then(function () {
        var that = _this2;
        return new Promise(function (resolve) {
          function update() {
            that.setter(that.frame, that.target);
            var playState = that.playState;

            if (playState === 'finished' || playState === 'idle') {
              (0, _animationFrame.cancelAnimationFrame)(that.requestId);
              resolve();
            } else {
              (0, _animationFrame.requestAnimationFrame)(update);
            }
          }

          update();
        });
      });
    }
  }]);
  return Animation;
}(_spriteAnimator.Animator);

exports.default = Animation;