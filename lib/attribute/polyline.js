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

var _path = _interopRequireDefault(require("./path"));

var _attribute_value = require("../utils/attribute_value");

var _smooth_curve = require("../utils/smooth_curve");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var setDefault = Symbol.for('spritejs_setAttributeDefault');
var setAttribute = Symbol.for('spritejs_setAttribute');
var getAttribute = Symbol.for('spritejs_getAttribute');
var declareAlias = Symbol.for('spritejs_declareAlias');

function getPath(attr) {
  var points = attr.points,
      smooth = attr.smooth,
      smoothRange = attr.smoothRange,
      close = attr.close;
  var p = [];

  for (var i = 0; i < points.length; i += 2) {
    p.push([points[i], points[i + 1]]);
  }

  var d = '';

  if (smooth) {
    // if(close) {
    //   p.push([...p[0]]);
    // }
    d = (0, _smooth_curve.makeSmoothCurveLine)(p, smoothRange);
  } else if (p.length) {
    d = "M".concat(p.map(function (v) {
      return v.join(' ');
    }).join('L'));
  }

  if (d && close) {
    d += 'Z';
  }

  return d;
}

var Polyline = /*#__PURE__*/function (_Path) {
  (0, _inherits2.default)(Polyline, _Path);

  var _super = _createSuper(Polyline);

  function Polyline(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, Polyline);
    _this = _super.call(this, subject);

    _this[setDefault]({
      points: [],
      smooth: false,
      smoothRange: [0],
      closeType: 'none' // none | normal

      /* close */

    });

    _this[declareAlias]('close');

    return _this;
  } // readonly


  (0, _createClass2.default)(Polyline, [{
    key: "d",
    get: function get() {
      return this[getAttribute]('d');
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "close",
    get: function get() {
      return this.closeType !== 'none';
    },
    set: function set(value) {
      value = value ? 'normal' : 'none';
      this.closeType = value;
    }
  }, {
    key: "closeType",
    get: function get() {
      return this[getAttribute]('closeType');
    },
    set: function set(value) {
      if (value != null && value !== 'none' && value !== 'normal') throw new TypeError('Invalid closeType type.');

      if (this[setAttribute]('closeType', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "smooth",
    get: function get() {
      return this[getAttribute]('smooth');
    },
    set: function set(value) {
      if (this[setAttribute]('smooth', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }, {
    key: "smoothRange",
    get: function get() {
      return this[getAttribute]('smoothRange');
    },
    set: function set(value) {
      if (value && !Array.isArray(value)) value = [value];

      if (this[setAttribute]('smoothRange', value)) {
        if (this.smooth) {
          var d = getPath(this);
          this[setAttribute]('d', d);
        }
      }
    }
  }, {
    key: "points",
    get: function get() {
      return this[getAttribute]('points');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);

      if (Array.isArray(value)) {
        value = value.reduce(function (a, b) {
          if (Array.isArray(b)) {
            return [].concat((0, _toConsumableArray2.default)(a), (0, _toConsumableArray2.default)(b.map(function (v) {
              return (0, _attribute_value.toNumber)(v);
            })));
          }

          return [].concat((0, _toConsumableArray2.default)(a), [(0, _attribute_value.toNumber)(b)]);
        }, []);
      }

      if (this[setAttribute]('points', value)) {
        var d = getPath(this);
        this[setAttribute]('d', d);
      }
    }
  }]);
  return Polyline;
}(_path.default);

exports.default = Polyline;