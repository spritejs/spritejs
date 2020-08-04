"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _set2 = _interopRequireDefault(require("@babel/runtime/helpers/set"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _polyline = _interopRequireDefault(require("./polyline"));

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');

function getPoints(attr) {
  var _attr$sides = (0, _slicedToArray2.default)(attr.sides, 2),
      a = _attr$sides[0],
      b = _attr$sides[1];

  var angle = attr.angle % 360;
  if (angle < 0) angle += 360;
  angle = Math.PI * angle / 180;
  return [0, 0, a, 0, b * Math.cos(angle), b * Math.sin(angle)];
}

var Triangle = /*#__PURE__*/function (_Polyline) {
  (0, _inherits2.default)(Triangle, _Polyline);

  var _super = _createSuper(Triangle);

  function Triangle(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Triangle);
    _this = _super.call(this, subject);

    _this[setDefault]({
      sides: [0, 0],
      angle: 60,
      closeType: 'normal'
    });

    return _this;
  } // readonly


  (0, _createClass2.default)(Triangle, [{
    key: "points",
    get: function get() {
      return (0, _get2.default)((0, _getPrototypeOf2.default)(Triangle.prototype), "points", this);
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "sides",
    get: function get() {
      return this[getAttribute]('sides');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value, value];

      if (this[setAttribute]('sides', value)) {
        var points = getPoints(this);
        (0, _set2.default)((0, _getPrototypeOf2.default)(Triangle.prototype), "points", points, this, true);
      }
    }
  }, {
    key: "angle",
    get: function get() {
      return this[getAttribute]('angle');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('angle', value)) {
        var points = getPoints(this);
        (0, _set2.default)((0, _getPrototypeOf2.default)(Triangle.prototype), "points", points, this, true);
      }
    }
  }]);
  return Triangle;
}(_polyline.default);

exports.default = Triangle;