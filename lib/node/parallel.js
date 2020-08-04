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

var _polyline = _interopRequireDefault(require("./polyline"));

var _document = _interopRequireDefault(require("../document"));

var _parallel = _interopRequireDefault(require("../attribute/parallel"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var Parallel = /*#__PURE__*/function (_Polyline) {
  (0, _inherits2.default)(Parallel, _Polyline);

  var _super = _createSuper(Parallel);

  function Parallel() {
    (0, _classCallCheck2.default)(this, Parallel);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Parallel, [{
    key: "isVisible",

    /* override */
    get: function get() {
      var sides = this.attributes.sides;
      return sides[0] > 0 && sides[1] > 0 && (0, _get2.default)((0, _getPrototypeOf2.default)(Parallel.prototype), "isVisible", this);
    }
  }]);
  return Parallel;
}(_polyline.default);

exports.default = Parallel;
(0, _defineProperty2.default)(Parallel, "Attr", _parallel.default);

_document.default.registerNode(Parallel, 'parallel');