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

var _core = require("@mesh.js/core");

var _attribute_value = require("../utils/attribute_value");

var _color = require("../utils/color");

var _block = _interopRequireDefault(require("./block"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var declareAlias = Symbol.for('spritejs_declareAlias');

var Label = /*#__PURE__*/function (_Block) {
  (0, _inherits2.default)(Label, _Block);

  var _super = _createSuper(Label);

  function Label(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Label);
    _this = _super.call(this, subject);

    _this[setDefault]({
      text: '',
      fontSize: 16,
      fontFamily: 'Helvetica,Arial,sans-serif',
      fontStyle: 'normal',
      fontVariant: 'normal',
      fontWeight: 'normal',
      fontStretch: 'normal',
      lineHeight: '',

      /* font */
      textAlign: 'left',
      strokeColor: undefined,
      strokeWidth: 1,
      fillColor: undefined,
      verticalAlign: 'middle'
    });

    _this[declareAlias]('font');

    return _this;
  }

  (0, _createClass2.default)(Label, [{
    key: "text",
    get: function get() {
      return this[getAttribute]('text') || ' ';
    },
    set: function set(value) {
      this[setAttribute]('text', value);
    }
  }, {
    key: "fontSize",
    get: function get() {
      return this[getAttribute]('fontSize');
    },
    set: function set(value) {
      this[setAttribute]('fontSize', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "fontFamily",
    get: function get() {
      return this[getAttribute]('fontFamily');
    },
    set: function set(value) {
      this[setAttribute]('fontFamily', value);
    }
  }, {
    key: "fontStyle",
    get: function get() {
      return this[getAttribute]('fontStyle');
    },
    set: function set(value) {
      this[setAttribute]('fontStyle', value);
    }
  }, {
    key: "fontVariant",
    get: function get() {
      return this[getAttribute]('fontVariant');
    },
    set: function set(value) {
      this[setAttribute]('fontVariant', value);
    }
  }, {
    key: "fontWeight",
    get: function get() {
      return this[getAttribute]('fontWeight');
    },
    set: function set(value) {
      this[setAttribute]('fontWeight', value);
    }
  }, {
    key: "fontStretch",
    get: function get() {
      return this[getAttribute]('fontStretch');
    },
    set: function set(value) {
      this[setAttribute]('fontStretch', value);
    }
  }, {
    key: "lineHeight",
    get: function get() {
      return this[getAttribute]('lineHeight') || this.fontSize;
    },
    set: function set(value) {
      this[setAttribute]('lineHeight', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "textAlign",
    get: function get() {
      return this[getAttribute]('textAlign');
    },
    set: function set(value) {
      this[setAttribute]('textAlign', value);
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
    key: "strokeWidth",
    get: function get() {
      return this[getAttribute]('strokeWidth');
    },
    set: function set(value) {
      this[setAttribute]('strokeWidth', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "verticalAlign",
    get: function get() {
      return this[getAttribute]('verticalAlign');
    },
    set: function set(value) {
      this[setAttribute]('verticalAlign', value);
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
    key: "font",
    get: function get() {
      var fontStyle = this.fontStyle,
          fontVariant = this.fontVariant,
          fontWeight = this.fontWeight,
          fontStretch = this.fontStretch,
          fontSize = this.fontSize,
          lineHeight = this.lineHeight,
          fontFamily = this.fontFamily;
      return "".concat(fontStyle, " ").concat(fontVariant, " ").concat(fontWeight, " ").concat(fontStretch, " ").concat(fontSize, "px/").concat(lineHeight, "px ").concat(fontFamily);
    },
    set: function set(value) {
      if (value == null) {
        this.fontStyle = null;
        this.fontVariant = null;
        this.fontWeight = null;
        this.fontStretch = null;
        this.fontSize = null;
        this.lineHeight = null;
        this.fontFamily = null;
      } else {
        var fontInfo = (0, _core.parseFont)(value);
        this.fontStyle = fontInfo.style;
        this.fontVariant = fontInfo.variant;
        this.fontWeight = fontInfo.weight;
        this.fontStretch = fontInfo.stretch;
        this.fontSize = (0, _attribute_value.toNumber)("".concat(fontInfo.size).concat(fontInfo.unit));

        if (fontInfo.lineHeight) {
          this.lineHeight = fontInfo.pxLineHeight;
        }

        this.fontFamily = fontInfo.family;
      }
    }
  }]);
  return Label;
}(_block.default);

exports.default = Label;