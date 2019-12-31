"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ENV", {
  enumerable: true,
  get: function get() {
    return _core.ENV;
  }
});
Object.defineProperty(exports, "requestAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _animationFrame.requestAnimationFrame;
  }
});
Object.defineProperty(exports, "cancelAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _animationFrame.cancelAnimationFrame;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function get() {
    return _node.default;
  }
});
Object.defineProperty(exports, "Cloud", {
  enumerable: true,
  get: function get() {
    return _cloud.default;
  }
});
Object.defineProperty(exports, "Block", {
  enumerable: true,
  get: function get() {
    return _block.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _sprite.default;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "Rect", {
  enumerable: true,
  get: function get() {
    return _rect.default;
  }
});
Object.defineProperty(exports, "Triangle", {
  enumerable: true,
  get: function get() {
    return _triangle.default;
  }
});
Object.defineProperty(exports, "Parallel", {
  enumerable: true,
  get: function get() {
    return _parallel.default;
  }
});
Object.defineProperty(exports, "Regular", {
  enumerable: true,
  get: function get() {
    return _regular.default;
  }
});
Object.defineProperty(exports, "Star", {
  enumerable: true,
  get: function get() {
    return _star.default;
  }
});
Object.defineProperty(exports, "Ellipse", {
  enumerable: true,
  get: function get() {
    return _ellipse.default;
  }
});
Object.defineProperty(exports, "Arc", {
  enumerable: true,
  get: function get() {
    return _arc.default;
  }
});
Object.defineProperty(exports, "Ring", {
  enumerable: true,
  get: function get() {
    return _ring.default;
  }
});
Object.defineProperty(exports, "Polyline", {
  enumerable: true,
  get: function get() {
    return _polyline.default;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _label.default;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _group.default;
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _layer.default;
  }
});
Object.defineProperty(exports, "LayerWorker", {
  enumerable: true,
  get: function get() {
    return _layerWorker.default;
  }
});
Object.defineProperty(exports, "Scene", {
  enumerable: true,
  get: function get() {
    return _scene.default;
  }
});
Object.defineProperty(exports, "Gradient", {
  enumerable: true,
  get: function get() {
    return _color.Gradient;
  }
});
exports.registerNode = exports.isSpriteNode = exports.createElement = exports.helpers = void 0;

var _core = require("@mesh.js/core");

var _animationFrame = require("./utils/animation-frame");

var _node = _interopRequireDefault(require("./node/node"));

var _cloud = _interopRequireDefault(require("./node/cloud"));

var _block = _interopRequireDefault(require("./node/block"));

var _sprite = _interopRequireDefault(require("./node/sprite"));

var _path = _interopRequireDefault(require("./node/path"));

var _rect = _interopRequireDefault(require("./node/rect"));

var _triangle = _interopRequireDefault(require("./node/triangle"));

var _parallel = _interopRequireDefault(require("./node/parallel"));

var _regular = _interopRequireDefault(require("./node/regular"));

var _star = _interopRequireDefault(require("./node/star"));

var _ellipse = _interopRequireDefault(require("./node/ellipse"));

var _arc = _interopRequireDefault(require("./node/arc"));

var _ring = _interopRequireDefault(require("./node/ring"));

var _polyline = _interopRequireDefault(require("./node/polyline"));

var _label = _interopRequireDefault(require("./node/label"));

var _group = _interopRequireDefault(require("./node/group"));

var _layer = _interopRequireDefault(require("./node/layer"));

var _layerWorker = _interopRequireDefault(require("./node/layer-worker"));

var _scene = _interopRequireDefault(require("./node/scene"));

var _document = _interopRequireDefault(require("./document"));

var _color = require("./utils/color");

var _attribute_value = require("./utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var createElement = _document.default.createElement;
exports.createElement = createElement;
var isSpriteNode = _document.default.isSpriteNode;
exports.isSpriteNode = isSpriteNode;
var registerNode = _document.default.registerNode;
exports.registerNode = registerNode;
var helpers = {
  parseColor: _color.parseColor,
  sizeToPixel: _attribute_value.sizeToPixel,
  toArray: _attribute_value.toArray,
  toString: _attribute_value.toString,
  toNumber: _attribute_value.toNumber
};
exports.helpers = helpers;