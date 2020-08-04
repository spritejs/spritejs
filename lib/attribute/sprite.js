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

var _block = _interopRequireDefault(require("./block"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');

var Sprite = /*#__PURE__*/function (_Block) {
  (0, _inherits2.default)(Sprite, _Block);

  var _super = _createSuper(Sprite);

  function Sprite(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Sprite);
    _this = _super.call(this, subject);

    _this[setDefault]({
      texture: undefined,
      textureRect: undefined,
      textureRepeat: false,
      sourceRect: undefined
    });

    return _this;
  }

  (0, _createClass2.default)(Sprite, [{
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
  }]);
  return Sprite;
}(_block.default);

exports.default = Sprite;