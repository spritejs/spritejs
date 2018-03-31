'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Matrix = exports.Effects = exports.Resource = exports.parseColor = exports.Color = exports.createNode = exports.registerNodeType = exports.Paper2D = exports.Scene = exports.Layer = exports.Axis = exports.Group = exports.Path = exports.Label = exports.Sprite = exports.BaseSprite = exports.BaseNode = exports.version = undefined;

var _spriteUtils = require('sprite-utils');

var _spriteCore = require('sprite-core');

var _sprite = require('./sprite');

var _sprite2 = _interopRequireDefault(_sprite);

var _layer = require('./layer');

var _layer2 = _interopRequireDefault(_layer);

var _scene = require('./scene');

var _scene2 = _interopRequireDefault(_scene);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _spriteMath = require('sprite-math');

var _platform = require('./platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_platform.shim) {
  (0, _platform.shim)();
}

(0, _spriteCore.registerNodeType)('layer', _layer2.default, true);
(0, _spriteCore.registerNodeType)('sprite', _sprite2.default);
(0, _spriteCore.registerNodeType)('axis', _axis2.default);

function Paper2D() {
  (0, _spriteUtils.setDeprecation)('spritejs.Paper2D', 'Instead use new spritejs.Scene.');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_scene2.default, [null].concat(args)))();
}

var version = '1.18.3';

exports.version = version;
exports.BaseNode = _spriteCore.BaseNode;
exports.BaseSprite = _spriteCore.BaseSprite;
exports.Sprite = _sprite2.default;
exports.Label = _spriteCore.Label;
exports.Path = _spriteCore.Path;
exports.Group = _spriteCore.Group;
exports.Axis = _axis2.default;
exports.Layer = _layer2.default;
exports.Scene = _scene2.default;
exports.Paper2D = Paper2D;
exports.registerNodeType = _spriteCore.registerNodeType;
exports.createNode = _spriteCore.createNode;
exports.Color = _spriteUtils.Color;
exports.parseColor = _spriteUtils.parseColor;
exports.Resource = _resource2.default;
exports.Effects = _spriteCore.Effects;
exports.Matrix = _spriteMath.Matrix;
exports.Vector = _spriteMath.Vector;