"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _node = _interopRequireDefault(require("./node"));

var _attribute_value = require("../utils/attribute_value");

var _color = require("../utils/color");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');
var declareAlias = Symbol.for('spritejs_declareAlias');

var Block = /*#__PURE__*/function (_Node) {
  (0, _inherits2.default)(Block, _Node);

  var _super = _createSuper(Block);

  function Block(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Block);
    _this = _super.call(this, subject);

    _this[setDefault]({
      anchorX: 0,
      anchorY: 0,

      /* anchor */
      width: undefined,
      height: undefined,

      /* size */
      borderWidth: 0,
      borderColor: 'rgba(0,0,0,1)',

      /* border */
      borderDash: undefined,
      borderDashOffset: 0,
      borderTopLeftRadius: [0, 0],
      borderTopRightRadius: [0, 0],
      borderBottomRightRadius: [0, 0],
      borderBottomLeftRadius: [0, 0],

      /* borderRadius */
      bgcolor: 'rgba(0,0,0,0)',
      paddingTop: 0,
      paddingRight: 0,
      paddingBottom: 0,
      paddingLeft: 0,

      /* padding */
      boxSizing: 'content-box',
      clipPath: undefined
    });

    _this[declareAlias]('anchor', 'size', 'border', 'borderRadius', 'padding');

    return _this;
  }

  (0, _createClass2.default)(Block, [{
    key: "anchorX",
    get: function get() {
      return this[getAttribute]('anchorX');
    },
    set: function set(value) {
      this[setAttribute]('anchorX', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "anchorY",
    get: function get() {
      return this[getAttribute]('anchorY');
    },
    set: function set(value) {
      this[setAttribute]('anchorY', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "anchor",
    get: function get() {
      return [this.anchorX, this.anchorY];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value, value];
      this.anchorX = value[0];
      this.anchorY = value[1];
    }
  }, {
    key: "width",
    get: function get() {
      return this[getAttribute]('width');
    },
    set: function set(value) {
      this[setAttribute]('width', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "height",
    get: function get() {
      return this[getAttribute]('height');
    },
    set: function set(value) {
      this[setAttribute]('height', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "size",
    get: function get() {
      return [this.width, this.height];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value, value];
      this.width = value[0];
      this.height = value[1];
    }
  }, {
    key: "borderWidth",
    get: function get() {
      return this[getAttribute]('borderWidth');
    },
    set: function set(value) {
      this[setAttribute]('borderWidth', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "borderColor",
    get: function get() {
      return this[getAttribute]('borderColor');
    },
    set: function set(value) {
      this[setAttribute]('borderColor', (0, _color.parseColor)(value));
    }
  }, {
    key: "border",
    get: function get() {
      return [this.borderWidth, this.borderColor];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value];
      this.borderWidth = value[0];
      if (value[1] != null) this.borderColor = value[1];
    }
  }, {
    key: "borderDash",
    get: function get() {
      return this[getAttribute]('borderDash');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value];
      this[setAttribute]('borderDash', value.map(_attribute_value.toNumber));
    }
  }, {
    key: "borderDashOffset",
    get: function get() {
      return this[getAttribute]('borderDashOffset');
    },
    set: function set(value) {
      this[setAttribute]('borderDashOffset', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "borderTopLeftRadius",
    get: function get() {
      return this[getAttribute]('borderTopLeftRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this[setAttribute]('borderTopLeftRadius', value.map(_attribute_value.toNumber));
    }
  }, {
    key: "borderTopRightRadius",
    get: function get() {
      return this[getAttribute]('borderTopRightRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this[setAttribute]('borderTopRightRadius', value.map(_attribute_value.toNumber));
    }
  }, {
    key: "borderBottomRightRadius",
    get: function get() {
      return this[getAttribute]('borderBottomRightRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this[setAttribute]('borderBottomRightRadius', value.map(_attribute_value.toNumber));
    }
  }, {
    key: "borderBottomLeftRadius",
    get: function get() {
      return this[getAttribute]('borderBottomLeftRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this[setAttribute]('borderBottomLeftRadius', value.map(_attribute_value.toNumber));
    }
  }, {
    key: "borderRadius",
    get: function get() {
      return [].concat((0, _toConsumableArray2.default)(this.borderTopLeftRadius), (0, _toConsumableArray2.default)(this.borderTopRightRadius), (0, _toConsumableArray2.default)(this.borderBottomRightRadius), (0, _toConsumableArray2.default)(this.borderBottomLeftRadius));
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = Array(8).fill(value);else if (value.length === 2) value = [value[0], value[1], value[0], value[1], value[0], value[1], value[0], value[1]];else if (value.length === 4) value = [value[0], value[1], value[2], value[3], value[0], value[1], value[2], value[3]];else if (value.length === 6) value = [value[0], value[1], value[2], value[3], value[4], value[5], value[2], value[3]];else if (value.length !== 8) throw new TypeError('Invalid borderRadius value.');
      this.borderTopLeftRadius = [value[0], value[1]];
      this.borderTopRightRadius = [value[2], value[3]];
      this.borderBottomRightRadius = [value[4], value[5]];
      this.borderBottomLeftRadius = [value[6], value[7]];
    }
  }, {
    key: "bgcolor",
    get: function get() {
      return this[getAttribute]('bgcolor');
    },
    set: function set(value) {
      this[setAttribute]('bgcolor', (0, _color.parseColor)(value));
    }
  }, {
    key: "paddingTop",
    get: function get() {
      return this[getAttribute]('paddingTop');
    },
    set: function set(value) {
      this[setAttribute]('paddingTop', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "paddingRight",
    get: function get() {
      return this[getAttribute]('paddingRight');
    },
    set: function set(value) {
      this[setAttribute]('paddingRight', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "paddingBottom",
    get: function get() {
      return this[getAttribute]('paddingBottom');
    },
    set: function set(value) {
      this[setAttribute]('paddingBottom', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "paddingLeft",
    get: function get() {
      return this[getAttribute]('paddingLeft');
    },
    set: function set(value) {
      this[setAttribute]('paddingLeft', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "padding",
    get: function get() {
      return [this.paddingTop, this.paddingRight, this.paddingBottom, this.paddingLeft];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);

      if (!Array.isArray(value)) {
        value = [value, value, value, value];
      } else if (value.length === 2) {
        value = [value[0], value[1], value[0], value[1]];
      } else if (value.length === 3) {
        value = [value[0], value[1], value[2], value[1]];
      }

      this.paddingTop = value[0];
      this.paddingRight = value[1];
      this.paddingBottom = value[2];
      this.paddingLeft = value[3];
    }
  }, {
    key: "clipPath",
    get: function get() {
      return this[getAttribute]('clipPath');
    },
    set: function set(value) {
      this[setAttribute]('clipPath', value);
    }
  }, {
    key: "boxSizing",
    get: function get() {
      return this[getAttribute]('boxSizing');
    },
    set: function set(value) {
      if (value != null && value !== 'border-box' && value !== 'content-box') {
        throw new TypeError('Invalid boxSizing type.');
      }

      this[setAttribute]('boxSizing', value);
    }
  }]);
  return Block;
}(_node.default);

exports.default = Block;