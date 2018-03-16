'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paper2D = exports.Scene = exports.Group = exports.Matrix = exports.Effects = exports.createNode = exports.registerNodeType = exports.Axis = exports.Color = exports.Path = exports.Label = exports.Resource = exports.Sprite = exports.BaseSprite = exports.version = undefined;

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _sprite = require('./sprite');

var _sprite2 = _interopRequireDefault(_sprite);

var _label = require('./label');

var _label2 = _interopRequireDefault(_label);

var _scene = require('./scene');

var _scene2 = _interopRequireDefault(_scene);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

var _utils = require('./utils');

var _axis = require('./axis');

var _axis2 = _interopRequireDefault(_axis);

var _nodetype = require('./nodetype');

var _matrix = require('./matrix');

var _matrix2 = _interopRequireDefault(_matrix);

var _group = require('./group');

var _group2 = _interopRequireDefault(_group);

var _spriteAnimator = require('sprite-animator');

require('./cross-platform/shim');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _nodetype.registerNodeType)('sprite', _sprite2.default);
(0, _nodetype.registerNodeType)('label', _label2.default);
(0, _nodetype.registerNodeType)('path', _path2.default);
(0, _nodetype.registerNodeType)('axis', _axis2.default);
(0, _nodetype.registerNodeType)('group', _group2.default);

var Color = _utils.parseColor;

function Paper2D() {
  console.warn('[Deprecation] spritejs.Paper2D is deprecated, instead use new spritejs.Scene.');

  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return new (Function.prototype.bind.apply(_scene2.default, [null].concat(args)))();
}

var version = '1.15.1';

exports.version = version;
exports.BaseSprite = _basesprite2.default;
exports.Sprite = _sprite2.default;
exports.Resource = _resource2.default;
exports.Label = _label2.default;
exports.Path = _path2.default;
exports.Color = Color;
exports.Axis = _axis2.default;
exports.registerNodeType = _nodetype.registerNodeType;
exports.createNode = _nodetype.createNode;
exports.Effects = _spriteAnimator.Effects;
exports.Matrix = _matrix2.default;
exports.Group = _group2.default;
exports.Scene = _scene2.default;
exports.Paper2D = Paper2D;