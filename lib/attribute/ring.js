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

var _path = _interopRequireDefault(require("./path"));

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  var innerRadius = attr.innerRadius,
      outerRadius = attr.outerRadius,
      startAngle = attr.startAngle,
      endAngle = attr.endAngle;
  var f = new _core.Figure2D();
  startAngle = Math.PI * startAngle / 180;
  endAngle = Math.PI * endAngle / 180;

  if (innerRadius > outerRadius) {
    var _ref = [outerRadius, innerRadius];
    innerRadius = _ref[0];
    outerRadius = _ref[1];
  }

  if (innerRadius <= 0) {
    f.moveTo(0, 0);
  }

  f.arc(0, 0, outerRadius, startAngle, endAngle, false);

  if (innerRadius > 0) {
    var PI2 = Math.PI * 2;

    if (endAngle < startAngle) {
      endAngle = startAngle + PI2 + (endAngle - startAngle) % PI2;
    }

    if (endAngle - startAngle >= PI2) {
      endAngle = startAngle + PI2 - 1e-6;
    }

    f.arc(0, 0, innerRadius, endAngle, startAngle, true);
  }

  f.closePath();
  var path = f.path;
  var ret = path.reduce(function (a, b) {
    return a + b.join(' ');
  }, '');
  return ret;
}

var Ring = /*#__PURE__*/function (_Path) {
  (0, _inherits2.default)(Ring, _Path);

  var _super = _createSuper(Ring);

  function Ring(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Ring);
    _this = _super.call(this, subject);

    _this[setDefault]({
      innerRadius: 0,
      outerRadius: 0,

      /* radius */
      startAngle: 0,
      endAngle: 360
      /* angle */

    });

    _this[declareAlias]('radius', 'angle');

    return _this;
  } // readonly


  (0, _createClass2.default)(Ring, [{
    key: "d",
    get: function get() {
      return this[getAttribute]('d');
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "innerRadius",
    get: function get() {
      return this[getAttribute]('innerRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('innerRadius', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "outerRadius",
    get: function get() {
      return this[getAttribute]('outerRadius');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('outerRadius', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "radius",
    get: function get() {
      return [this.innerRadius, this.outerRadius];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this.innerRadius = value[0];
      this.outerRadius = value[1];
    }
  }, {
    key: "startAngle",
    get: function get() {
      return this[getAttribute]('startAngle');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('startAngle', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "endAngle",
    get: function get() {
      return this[getAttribute]('endAngle');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('endAngle', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "angle",
    get: function get() {
      return [this.startAngle, this.endAngle];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value, value];
      this.startAngle = value[0];
      this.endAngle = value[1];
    }
  }]);
  return Ring;
}(_path.default);

exports.default = Ring;