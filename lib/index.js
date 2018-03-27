'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Vector = exports.Paper2D = exports.Scene = exports.Group = exports.Matrix = exports.Effects = exports.createNode = exports.registerNodeType = exports.Axis = exports.parseColor = exports.Color = exports.Path = exports.Layer = exports.Label = exports.Resource = exports.Sprite = exports.BaseSprite = exports.BaseNode = exports.version = undefined;

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

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _nodetype = require('./nodetype');

var _spriteMath = require('sprite-math');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

if (_crossPlatform.shim) {
  (0, _crossPlatform.shim)();
}

(0, _nodetype.registerNodeType)('sprite', _sprite2.default);
(0, _nodetype.registerNodeType)('label', _spriteCore.Label);
(0, _nodetype.registerNodeType)('path', _path2.default);
(0, _nodetype.registerNodeType)('axis', _axis2.default);
(0, _nodetype.registerNodeType)('group', _spriteCore.Group);

function Paper2D() {
  (0, _spriteUtils.setDeprecation)('spritejs.Paper2D', 'Instead use new spritejs.Scene.');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_scene2.default, [null].concat(args)))();
}

var version = '1.17.1';

exports.version = version;
exports.BaseNode = _spriteCore.BaseNode;
exports.BaseSprite = _spriteCore.BaseSprite;
exports.Sprite = _sprite2.default;
exports.Resource = _resource2.default;
exports.Label = _spriteCore.Label;
exports.Layer = _layer2.default;
exports.Path = _path2.default;
exports.Color = _spriteUtils.Color;
exports.parseColor = _spriteUtils.parseColor;
exports.Axis = _axis2.default;
exports.registerNodeType = _nodetype.registerNodeType;
exports.createNode = _nodetype.createNode;
exports.Effects = _spriteCore.Effects;
exports.Matrix = _spriteMath.Matrix;
exports.Group = _spriteCore.Group;
exports.Scene = _scene2.default;
exports.Paper2D = Paper2D;
exports.Vector = _spriteMath.Vector;