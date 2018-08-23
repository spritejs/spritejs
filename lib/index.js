'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Easings = exports.Effects = exports.Resource = exports.Color = exports.createElement = exports.createNode = exports.registerNodeType = exports.Paper2D = exports.Scene = exports.Layer = exports.Group = exports.Path = exports.Label = exports.Sprite = exports.BaseSprite = exports.BaseNode = exports.utils = exports.math = exports.version = exports._debugger = undefined;

var _spriteCore = require('sprite-core');

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _sprite = require('./sprite');

var _sprite2 = _interopRequireDefault(_sprite);

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _scene = require('./scene');

var _scene2 = _interopRequireDefault(_scene);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _platform = require('./platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDeprecation = _spriteCore.utils.setDeprecation;


if (_platform.shim) {
  (0, _platform.shim)();
}

(0, _spriteCore.registerNodeType)('layer', _layer2.default, true);

function Paper2D() {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_scene2.default, [null].concat(args)))();
}

var version = '2.7.9';

exports._debugger = _platform._debugger;
exports.version = version;
exports.math = _spriteCore.math;
exports.utils = _spriteCore.utils;
exports.BaseNode = _spriteCore.BaseNode;
exports.BaseSprite = _basesprite2.default;
exports.Sprite = _sprite2.default;
exports.Label = _spriteCore.Label;
exports.Path = _spriteCore.Path;
exports.Group = _spriteCore.Group;
exports.Layer = _layer2.default;
exports.Scene = _scene2.default;
exports.Paper2D = Paper2D;
exports.registerNodeType = _spriteCore.registerNodeType;
exports.createNode = _spriteCore.createNode;
exports.createElement = _spriteCore.createElement;
exports.Color = _spriteCore.Color;
exports.Resource = _resource2.default;
exports.Effects = _spriteCore.Effects;
exports.Easings = _spriteCore.Easings;
exports.Timeline = _spriteCore.Timeline;