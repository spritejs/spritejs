'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Timeline = exports.Easings = exports.Effects = exports.Resource = exports.Color = exports.createElement = exports.createNode = exports.isValidNodeType = exports.registerNodeType = exports.Paper2D = exports.Scene = exports.Layer = exports.Group = exports.Path = exports.Label = exports.Sprite = exports.BaseSprite = exports.DataNode = exports.BaseNode = exports.use = exports.utils = exports.math = exports.version = exports._debugger = undefined;

var _spritejs = require('../dist/spritejs.es6');

var spritejs = _interopRequireWildcard(_spritejs);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = spritejs; // es modules for rollup

var _debugger = spritejs._debugger,
    version = spritejs.version,
    math = spritejs.math,
    utils = spritejs.utils,
    use = spritejs.use,
    BaseNode = spritejs.BaseNode,
    DataNode = spritejs.DataNode,
    BaseSprite = spritejs.BaseSprite,
    Sprite = spritejs.Sprite,
    Label = spritejs.Label,
    Path = spritejs.Path,
    Group = spritejs.Group,
    Layer = spritejs.Layer,
    Scene = spritejs.Scene,
    Paper2D = spritejs.Paper2D,
    registerNodeType = spritejs.registerNodeType,
    isValidNodeType = spritejs.isValidNodeType,
    createNode = spritejs.createNode,
    createElement = spritejs.createElement,
    Color = spritejs.Color,
    Resource = spritejs.Resource,
    Effects = spritejs.Effects,
    Easings = spritejs.Easings,
    Timeline = spritejs.Timeline;
exports._debugger = _debugger;
exports.version = version;
exports.math = math;
exports.utils = utils;
exports.use = use;
exports.BaseNode = BaseNode;
exports.DataNode = DataNode;
exports.BaseSprite = BaseSprite;
exports.Sprite = Sprite;
exports.Label = Label;
exports.Path = Path;
exports.Group = Group;
exports.Layer = Layer;
exports.Scene = Scene;
exports.Paper2D = Paper2D;
exports.registerNodeType = registerNodeType;
exports.isValidNodeType = isValidNodeType;
exports.createNode = createNode;
exports.createElement = createElement;
exports.Color = Color;
exports.Resource = Resource;
exports.Effects = Effects;
exports.Easings = Easings;
exports.Timeline = Timeline;