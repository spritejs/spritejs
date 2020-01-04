"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Paper2D = Paper2D;
Object.defineProperty(exports, "BaseNode", {
  enumerable: true,
  get: function get() {
    return _core.BaseNode;
  }
});
Object.defineProperty(exports, "Label", {
  enumerable: true,
  get: function get() {
    return _core.Label;
  }
});
Object.defineProperty(exports, "Group", {
  enumerable: true,
  get: function get() {
    return _core.Group;
  }
});
Object.defineProperty(exports, "Effects", {
  enumerable: true,
  get: function get() {
    return _core.Effects;
  }
});
Object.defineProperty(exports, "Easings", {
  enumerable: true,
  get: function get() {
    return _core.Easings;
  }
});
Object.defineProperty(exports, "Timeline", {
  enumerable: true,
  get: function get() {
    return _core.Timeline;
  }
});
Object.defineProperty(exports, "Path", {
  enumerable: true,
  get: function get() {
    return _core.Path;
  }
});
Object.defineProperty(exports, "registerNodeType", {
  enumerable: true,
  get: function get() {
    return _core.registerNodeType;
  }
});
Object.defineProperty(exports, "isValidNodeType", {
  enumerable: true,
  get: function get() {
    return _core.isValidNodeType;
  }
});
Object.defineProperty(exports, "createNode", {
  enumerable: true,
  get: function get() {
    return _core.createNode;
  }
});
Object.defineProperty(exports, "createElement", {
  enumerable: true,
  get: function get() {
    return _core.createElement;
  }
});
Object.defineProperty(exports, "Color", {
  enumerable: true,
  get: function get() {
    return _core.Color;
  }
});
Object.defineProperty(exports, "use", {
  enumerable: true,
  get: function get() {
    return _core.use;
  }
});
Object.defineProperty(exports, "utils", {
  enumerable: true,
  get: function get() {
    return _core.utils;
  }
});
Object.defineProperty(exports, "math", {
  enumerable: true,
  get: function get() {
    return _core.math;
  }
});
Object.defineProperty(exports, "querySelector", {
  enumerable: true,
  get: function get() {
    return _core.querySelector;
  }
});
Object.defineProperty(exports, "querySelectorAll", {
  enumerable: true,
  get: function get() {
    return _core.querySelectorAll;
  }
});
Object.defineProperty(exports, "stylesheet", {
  enumerable: true,
  get: function get() {
    return _core.stylesheet;
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
Object.defineProperty(exports, "Resource", {
  enumerable: true,
  get: function get() {
    return _resource.default;
  }
});
Object.defineProperty(exports, "_debugger", {
  enumerable: true,
  get: function get() {
    return _devtools._debugger;
  }
});
exports.Scene = exports.version = void 0;

var _construct2 = _interopRequireDefault(require("@babel/runtime/helpers/construct"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _core = require("@spritejs/core");

var _basesprite = _interopRequireDefault(require("./basesprite"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _layer = _interopRequireDefault(require("./layer"));

var _scene = _interopRequireDefault(require("./scene"));

var _resource = _interopRequireDefault(require("./resource"));

var _platform = require("./platform");

var _devtools = require("./platform/devtools");

var Scene =
/*#__PURE__*/
function (_BaseScene) {
  (0, _inherits2.default)(Scene, _BaseScene);

  function Scene(container) {
    var _this;

    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, Scene);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scene).call(this, container, options));

    if (options.useDocumentCSS) {
      _core.stylesheet.fromDocumentCSS();
    }

    return _this;
  }

  return Scene;
}(_scene.default);

exports.Scene = Scene;
var setDeprecation = _core.utils.setDeprecation;

if (_platform.shim) {
  (0, _platform.shim)();
}

(0, _core.registerNodeType)('layer', _layer.default, true);
(0, _core.registerNodeType)('scene', Scene, true);

function Paper2D() {
  setDeprecation('spritejs.Paper2D', 'Instead use new spritejs.Scene.');

  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return (0, _construct2.default)(Scene, args);
}

var version = "2.29.8";
exports.version = version;