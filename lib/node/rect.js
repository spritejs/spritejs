"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _path = _interopRequireDefault(require("./path"));

var _document = _interopRequireDefault(require("../document"));

var _rect = _interopRequireDefault(require("../attribute/rect"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Rect = /*#__PURE__*/function (_Path) {
  (0, _inherits2.default)(Rect, _Path);

  var _super = _createSuper(Rect);

  function Rect() {
    (0, _classCallCheck2.default)(this, Rect);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Rect, [{
    key: "isVisible",

    /* override */
    get: function get() {
      var _this$attributes = this.attributes,
          width = _this$attributes.width,
          height = _this$attributes.height;
      return width > 0 && height > 0 && (0, _get2.default)((0, _getPrototypeOf2.default)(Rect.prototype), "isVisible", this);
    }
  }]);
  return Rect;
}(_path.default);

exports.default = Rect;
(0, _defineProperty2.default)(Rect, "Attr", _rect.default);

_document.default.registerNode(Rect, 'rect');