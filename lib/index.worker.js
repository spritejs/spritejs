"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Renderer", {
  enumerable: true,
  get: function get() {
    return _core.Renderer;
  }
});
Object.defineProperty(exports, "Node", {
  enumerable: true,
  get: function get() {
    return _node.default;
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
Object.defineProperty(exports, "Ellipse", {
  enumerable: true,
  get: function get() {
    return _ellipse.default;
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
Object.defineProperty(exports, "parseColor", {
  enumerable: true,
  get: function get() {
    return _color.parseColor;
  }
});
Object.defineProperty(exports, "Gradient", {
  enumerable: true,
  get: function get() {
    return _color.Gradient;
  }
});
exports.layerCreated = void 0;

var _core = require("@mesh.js/core");

var _node = _interopRequireDefault(require("./node/node"));

var _block = _interopRequireDefault(require("./node/block"));

var _sprite = _interopRequireDefault(require("./node/sprite"));

var _path = _interopRequireDefault(require("./node/path"));

var _rect = _interopRequireDefault(require("./node/rect"));

var _ellipse = _interopRequireDefault(require("./node/ellipse"));

var _label = _interopRequireDefault(require("./node/label"));

var _group = _interopRequireDefault(require("./node/group"));

var _layer = _interopRequireDefault(require("./node/layer"));

var _color = require("./utils/color");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var layerCreated = new Promise(function (resolve) {
  var layer = null;
  self.addEventListener('message', function (evt) {
    if (evt.data.type === 'create') {
      var options = evt.data.options;
      layer = new _layer.default(options);
      resolve(layer);
    } else if (layer && evt.data.type === 'event') {
      layer.dispatchPointerEvent(evt.data.event);
    } else if (evt.data.type === 'resolution_change') {
      var _evt$data = evt.data,
          width = _evt$data.width,
          height = _evt$data.height;
      layer.setResolution({
        width: width,
        height: height
      });
    }
  });
});
exports.layerCreated = layerCreated;