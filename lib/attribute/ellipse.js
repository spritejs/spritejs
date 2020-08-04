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
  var radiusX = attr.radiusX,
      radiusY = attr.radiusY,
      startAngle = attr.startAngle,
      endAngle = attr.endAngle,
      direction = attr.direction,
      closeType = attr.closeType;
  var anticlockwise = direction === 'anitclockwise';
  var f = new _core.Figure2D();

  if (closeType === 'sector') {
    f.moveTo(0, 0);
  }

  f.ellipse(0, 0, radiusX, radiusY, 0, Math.PI * startAngle / 180, Math.PI * endAngle / 180, anticlockwise);

  if (closeType !== 'none') {
    f.closePath();
  }

  var path = f.path;
  var ret = path.reduce(function (a, b) {
    return a + b.join(' ');
  }, '');
  return ret;
}

var Ellipse = /*#__PURE__*/function (_Path) {
  (0, _inherits2.default)(Ellipse, _Path);

  var _super = _createSuper(Ellipse);

  function Ellipse(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Ellipse);
    _this = _super.call(this, subject);

    _this[setDefault]({
      radiusX: 0,
      radiusY: 0,

      /* radius */
      startAngle: 0,
      endAngle: 360,

      /* angle */
      direction: 'clockwise',
      // clockwise | anticlockwise
      closeType: 'none' // none | sector | normal

    });

    _this[declareAlias]('radius', 'angle');

    return _this;
  } // readonly


  (0, _createClass2.default)(Ellipse, [{
    key: "d",
    get: function get() {
      return this[getAttribute]('d');
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "radiusX",
    get: function get() {
      return this[getAttribute]('radiusX');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('radiusX', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "radiusY",
    get: function get() {
      return this[getAttribute]('radiusY');
    },
    set: function set(value) {
      value = (0, _attribute_value.toNumber)(value);

      if (this[setAttribute]('radiusY', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "radius",
    get: function get() {
      return [this.radiusX, this.radiusY];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (!Array.isArray(value)) value = [value, value];
      this.radiusX = value[0];
      this.radiusY = value[1];
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
  }, {
    key: "direction",
    get: function get() {
      return this[getAttribute]('direction');
    },
    set: function set(value) {
      if (value != null && value !== 'clockwise' && value !== 'anticlockwise') throw new TypeError('Invalid direction type.');
      this[setAttribute]('direction', value);
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
    key: "closeType",
    get: function get() {
      return this[getAttribute]('closeType');
    },
    set: function set(value) {
      if (value != null && value !== 'none' && value !== 'sector' && value !== 'normal') throw new TypeError('Invalid closeType type.');

      if (this[setAttribute]('closeType', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }]);
  return Ellipse;
}(_path.default);

exports.default = Ellipse;