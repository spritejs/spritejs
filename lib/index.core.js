"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _spriteCore.use;
  }
});
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _spriteCore.utils;
  }
});
Object.defineProperty(exports, "math", {
  enumerable: true,
  get: function get() {
    return _spriteCore.math;
  }
});
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function get() {
    return _spriteCore.BaseNode;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _spriteCore.Label;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _spriteCore.Path;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _spriteCore.Group;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _spriteCore.Color;
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
exports.version = void 0;

var _spriteCore = require("sprite-core");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _layer = _interopRequireDefault(require("./layer"));

var _scene = _interopRequireDefault(require("./scene"));

var _resource = _interopRequireDefault(require("./resource"));

var _platform = require("./platform");

if (_platform.shim) {
  (0, _platform.shim)();
}

var version = "2.27.15";
exports.version = version;