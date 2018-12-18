"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Effects", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Effects;
  }
});
Object.defineProperty(exports, "Easings", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Easings;
  }
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: function get() {
    return _spriteAnimator.Timeline;
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
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function get() {
    return _basenode.default;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _path.default;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _use.default;
  }
});
Object.defineProperty(exports, "registerNodeType", {
  enumerable: true,
  get: function get() {
    return _dom.registerNodeType;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _dom.createNode;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _dom.createElement;
  }
});
Object.defineProperty(exports, "isValidNodeType", {
  enumerable: true,
  get: function get() {
    return _dom.isValidNodeType;
  }
});
Object.defineProperty(exports, "querySelector", {
  enumerable: true,
  get: function get() {
    return _dom.querySelector;
  }
});
Object.defineProperty(exports, "querySelectorAll", {
  enumerable: true,
  get: function get() {
    return _dom.querySelectorAll;
  }
});
Object.defineProperty(exports, "BaseSprite", {
  enumerable: true,
  get: function get() {
    return _basesprite.default;
  }
});
Object.defineProperty(exports, "Sprite", {
  enumerable: true,
  get: function get() {
    return _sprite.default;
  }
});
Object.defineProperty(exports, "Layer", {
  enumerable: true,
  get: function get() {
    return _layer.default;
  }
});
Object.defineProperty(exports, "Scene", {
  enumerable: true,
  get: function get() {
    return _scene.default;
  }
});
Object.defineProperty(exports, "Resource", {
  enumerable: true,
  get: function get() {
    return _resource.default;
  }
});
exports.utils = exports.math = exports.Color = exports.version = void 0;

var _spriteAnimator = require("sprite-animator");

var math = _interopRequireWildcard(require("sprite-math"));

exports.math = math;

var utils = _interopRequireWildcard(require("sprite-core/src/utils"));

exports.utils = utils;

var _label = _interopRequireDefault(require("sprite-core/src/core/label"));

var _group = _interopRequireDefault(require("sprite-core/src/core/group"));

var _basenode = _interopRequireDefault(require("sprite-core/src/core/basenode"));

var _path = _interopRequireDefault(require("sprite-core/src/core/path"));

var _use = _interopRequireDefault(require("sprite-core/src/core/use"));

require("sprite-core/src/modules/animation");

var _dom = require("sprite-core/src/modules/dom");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _layer = _interopRequireDefault(require("./layer"));

var _scene = _interopRequireDefault(require("./scene"));

var _resource = _interopRequireDefault(require("./resource"));

var _platform = require("./platform");

var Color = utils.Color;
exports.Color = Color;

if (_platform.shim) {
  (0, _platform.shim)();
}

(0, _dom.registerNodeType)('layer', _layer.default, true);
(0, _dom.registerNodeType)('scene', _scene.default, true);
var version = "2.25.0";
exports.version = version;