"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _node = _interopRequireDefault(require("./node"));

var _color = require("../utils/color");

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');

var Path = /*#__PURE__*/function (_Node) {
  (0, _inherits2.default)(Path, _Node);

  var _super = _createSuper(Path);

  function Path(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Path);
    _this = _super.call(this, subject);

    _this[setDefault]({
      d: '',
      normalize: false,
      fillColor: undefined,
      fillRule: 'nonzero',
      strokeColor: undefined,
      lineWidth: 1,
      lineJoin: 'miter',
      // 'miter' or 'bevel' or 'round'
      lineCap: 'butt',
      // 'butt' or 'square' or 'round'
      roundSegments: 20,
      // default roundSegment if lineJoin or lineCap is round
      lineDash: undefined,
      lineDashOffset: 0,
      miterLimit: 10,
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined,
      clipPath: undefined
    });

    return _this;
  }

  (0, _createClass2.default)(Path, [{
    key: "d",
    get: function get() {
      return this[getAttribute]('d');
    },
    set: function set(value) {
      this[setAttribute]('d', value);
    }
  }, {
    key: "normalize",
    get: function get() {
      return this[getAttribute]('normalize');
    },
    set: function set(value) {
      this[setAttribute]('normalize', !!value);
    }
  }, {
    key: "fillColor",
    get: function get() {
      return this[getAttribute]('fillColor');
    },
    set: function set(value) {
      this[setAttribute]('fillColor', (0, _color.parseColor)(value));
    }
  }, {
    key: "fillRule",
    get: function get() {
      return this[getAttribute]('fillRule');
    },
    set: function set(value) {
      if (value != null && value !== 'nonzero' && value !== 'evenodd') throw new TypeError('Invalid fill rule.');
      this[setAttribute]('fillRule', value);
    }
  }, {
    key: "strokeColor",
    get: function get() {
      return this[getAttribute]('strokeColor');
    },
    set: function set(value) {
      this[setAttribute]('strokeColor', (0, _color.parseColor)(value));
    }
  }, {
    key: "lineWidth",
    get: function get() {
      return this[getAttribute]('lineWidth');
    },
    set: function set(value) {
      this[setAttribute]('lineWidth', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "lineJoin",
    get: function get() {
      return this[getAttribute]('lineJoin');
    },
    set: function set(value) {
      if (value != null && value !== 'miter' && value !== 'bevel' && value !== 'round') throw new TypeError('Invalid lineJoin type.');
      this[setAttribute]('lineJoin', value);
    }
  }, {
    key: "lineCap",
    get: function get() {
      return this[getAttribute]('lineCap');
    },
    set: function set(value) {
      if (value != null && value !== 'butt' && value !== 'square' && value !== 'round') throw new TypeError('Invalid lineCap type.');
      this[setAttribute]('lineCap', value);
    }
  }, {
    key: "lineDash",
    get: function get() {
      return this[getAttribute]('lineDash');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value];
      this[setAttribute]('lineDash', value ? value.map(_attribute_value.toNumber) : null);
    }
  }, {
    key: "lineDashOffset",
    get: function get() {
      return this[getAttribute]('lineDashOffset');
    },
    set: function set(value) {
      this[setAttribute]('lineDashOffset', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "miterLimit",
    get: function get() {
      return this[getAttribute]('miterLimit');
    },
    set: function set(value) {
      this[setAttribute]('miterLimit', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "roundSegments",
    get: function get() {
      return this[getAttribute]('roundSegments');
    },
    set: function set(value) {
      this[setAttribute]('roundSegments', value);
    }
  }, {
    key: "texture",
    get: function get() {
      return this[getAttribute]('texture');
    },
    set: function set(value) {
      this[setAttribute]('texture', value);
    }
  }, {
    key: "textureRect",
    get: function get() {
      return this[getAttribute]('textureRect');
    },
    set: function set(value) {
      this[setAttribute]('textureRect', value);
    }
  }, {
    key: "sourceRect",
    get: function get() {
      return this[getAttribute]('sourceRect');
    },
    set: function set(value) {
      this[setAttribute]('sourceRect', value);
    }
  }, {
    key: "textureRepeat",
    get: function get() {
      return this[getAttribute]('textureRepeat');
    },
    set: function set(value) {
      this[setAttribute]('textureRepeat', !!value);
    }
  }, {
    key: "clipPath",
    get: function get() {
      return this[getAttribute]('clipPath');
    },
    set: function set(value) {
      this[setAttribute]('clipPath', value);
    }
  }]);
  return Path;
}(_node.default);

exports.default = Path;