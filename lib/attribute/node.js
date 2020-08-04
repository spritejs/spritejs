"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _glMatrix = require("gl-matrix");

var _core = require("@mesh.js/core");

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var _setDefault = Symbol.for('spritejs_setAttributeDefault');

var _declareAlias = Symbol.for('spritejs_declareAlias');

var _setAttribute = Symbol.for('spritejs_setAttribute');

var _getAttribute = Symbol.for('spritejs_getAttribute');

var attributes = Symbol.for('spritejs_attributes');
var changedAttrs = Symbol.for('spritejs_changedAttrs');

var _subject = Symbol('subject');

var _attr = Symbol('attr');

var _default = Symbol('default');

var _alias = Symbol('alias');

function getMatrix(transformMap, _ref) {
  var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
      ox = _ref2[0],
      oy = _ref2[1];

  var m = _glMatrix.mat2d.fromValues(1, 0, 0, 1, 0, 0);

  (0, _toConsumableArray2.default)(transformMap).forEach(function (_ref3) {
    var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];

    if (ox || oy) m = _glMatrix.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), m, [ox, oy]);

    if (key === 'matrix') {
      m = _glMatrix.mat2d.multiply(m, m, value);
    } else if (key === 'offsetTranslate') {
      m[4] += value[0];
      m[5] += value[1];
    } else if (key === 'offsetRotate') {
      m = _glMatrix.mat2d.rotate(Array.of(0, 0, 0, 0, 0, 0), m, value);
    } else if (key === 'skew') {
      var _value = (0, _slicedToArray2.default)(value, 2),
          x = _value[0],
          y = _value[1];

      m = _glMatrix.mat2d.multiply(m, m, _glMatrix.mat2d.fromValues(1, Math.tan(y), Math.tan(x), 1, 0, 0));
    } else {
      _glMatrix.mat2d[key](m, m, value);
    }

    if (ox || oy) m = _glMatrix.mat2d.translate(Array.of(0, 0, 0, 0, 0, 0), m, [-ox, -oy]);
  });
  return m;
}

var _transformMatrix = Symbol('transformMatrix');

var _transforms = Symbol('transforms');

var _changedAttrs = Symbol('changedAttrs');

var _lastChangedAttr = Symbol('lastChangedAttr');

var _offsetFigure = Symbol('offsetFigure');

function setTransform(attr, type, value) {
  var oldValue = attr[_attr][type];

  var changed = attr[_setAttribute](type, value, false);

  if (changed || attr[_lastChangedAttr] !== type) {
    var transformMap = attr[_transforms];

    if (transformMap.has(type)) {
      transformMap.delete(type);
    }

    if (value) {
      if (type === 'rotate') value = Math.PI * value / 180;

      if (type === 'scale') {
        value = value.map(function (v) {
          var t = 1e-5;

          if (Math.abs(v) > t) {
            return v;
          }

          return 1 / v > 0 ? t : -t;
        });
      }

      transformMap.set(type, value);
    }

    attr[_transformMatrix] = null;

    attr[_subject].onPropertyChange(type, value, oldValue, attr);
  }
}

function updateOffset(attr) {
  var offsetFigure = attr[_offsetFigure];
  var distance = attr.offsetDistance * offsetFigure.getTotalLength();
  var point = offsetFigure.getPointAtLength(distance);

  if (point) {
    var transformMap = attr[_transforms];
    var rotateValue = attr.offsetRotate;

    if (rotateValue === 'auto') {
      rotateValue = point.angle;
    } else if (rotateValue === 'reverse') {
      /* istanbul ignore next */
      rotateValue = Math.PI + point.angle;
    } else {
      rotateValue = Math.PI * rotateValue / 180;
    }

    transformMap.set('offsetRotate', rotateValue);
    transformMap.set('offsetTranslate', [point.x, point.y]);
    attr[_transformMatrix] = null;
  }
} // 规范：属性只能是原始类型或元素是原始类型的数组


var Node = /*#__PURE__*/function () {
  (0, _createClass2.default)(Node, null, [{
    key: "setDefault",
    value: function setDefault(attr) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      return attr[_setDefault].apply(attr, args);
    }
  }, {
    key: "declareAlias",
    value: function declareAlias(attr) {
      for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
        args[_key2 - 1] = arguments[_key2];
      }

      return attr[_declareAlias].apply(attr, args);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(attr) {
      for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        args[_key3 - 1] = arguments[_key3];
      }

      return attr[_setAttribute].apply(attr, args);
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(attr) {
      for (var _len4 = arguments.length, args = new Array(_len4 > 1 ? _len4 - 1 : 0), _key4 = 1; _key4 < _len4; _key4++) {
        args[_key4 - 1] = arguments[_key4];
      }

      return attr[_getAttribute].apply(attr, args);
    }
  }, {
    key: "getAttributes",
    value: function getAttributes(attr) {
      return attr[attributes];
    }
  }, {
    key: "getChangedAttributes",
    value: function getChangedAttributes(attr) {
      return attr[changedAttrs];
    }
  }]);

  function Node(subject) {
    var _this = this;

    (0, _classCallCheck2.default)(this, Node);
    this[_subject] = subject;
    this[_attr] = {};
    this[_transformMatrix] = _glMatrix.mat2d.fromValues(1, 0, 0, 1, 0, 0);
    this[_transforms] = new Map();
    this[_default] = {};
    this[_alias] = [];
    Object.defineProperty(subject, 'transformMatrix', {
      get: function get() {
        if (!_this[_transformMatrix]) {
          _this[_transformMatrix] = getMatrix(_this[_transforms], _this.transformOrigin);
        }

        return (0, _toConsumableArray2.default)(_this[_transformMatrix]);
      }
    });

    this[_setDefault]({
      id: '',
      name: '',
      className: '',

      /* class */
      x: 0,
      y: 0,

      /* pos */
      transformOrigin: [0, 0],
      transform: '',
      translate: [0, 0],
      rotate: 0,
      scale: [1, 1],
      skew: [0, 0],
      opacity: 1,
      zIndex: 0,
      offsetPath: undefined,
      offsetDistance: 0,
      offsetRotate: 'auto',
      pointerEvents: 'visible',
      // none | visible | visibleFill | visibleStroke | all
      filter: 'none',
      display: ''
    });

    this[_declareAlias]('class', 'pos');

    this[_changedAttrs] = new Set();
    this[_offsetFigure] = new _core.Figure2D({
      scale: 5,
      simplify: 0
    });
  }

  (0, _createClass2.default)(Node, [{
    key: _setDefault,
    value: function value(attrs) {
      Object.assign(this[_default], attrs);
      Object.assign(this[_attr], attrs);
    }
  }, {
    key: _declareAlias,
    value: function value() {
      var _this$_alias;

      (_this$_alias = this[_alias]).push.apply(_this$_alias, arguments);
    }
  }, {
    key: _setAttribute,
    value: function value(key, _value2) {
      var notice = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      var oldValue = this[_attr][key];
      var subject = this[_subject];
      if (_value2 == null) _value2 = this[_default][key];

      if (!(0, _attribute_value.compareValue)(oldValue, _value2)) {
        this[_attr][key] = _value2;
        if (this[_changedAttrs].has(key)) this[_changedAttrs].delete(key);

        this[_changedAttrs].add(key);

        this[_lastChangedAttr] = key;
        if (notice) subject.onPropertyChange(key, _value2, oldValue, this);
        return true;
      }

      return false;
    }
  }, {
    key: _getAttribute,
    value: function value(key) {
      return this[_attr][key];
    }
  }, {
    key: changedAttrs,
    get: function get() {
      var _this2 = this;

      var ret = {};
      (0, _toConsumableArray2.default)(this[_changedAttrs]).forEach(function (key) {
        ret[key] = _this2[_attr][key];
      });
      return ret;
    }
  }, {
    key: attributes,
    get: function get() {
      var ret = Object.assign({}, this[_attr]);

      for (var i = 0; i < this[_alias].length; i++) {
        var key = this[_alias][i];
        ret[key] = this[key];
      }

      return ret;
    }
  }, {
    key: "id",
    set: function set(value) {
      this[_setAttribute]('id', value);
    },
    get: function get() {
      return this[_getAttribute]('id');
    }
  }, {
    key: "name",
    set: function set(value) {
      this[_setAttribute]('name', value);
    },
    get: function get() {
      return this[_getAttribute]('name');
    }
  }, {
    key: "className",
    set: function set(value) {
      this[_setAttribute]('className', value);
    },
    get: function get() {
      return this[_getAttribute]('className');
    }
  }, {
    key: "class",
    set: function set(value) {
      this.className = value;
    },
    get: function get() {
      return this.className;
    }
  }, {
    key: "x",
    get: function get() {
      return this[_getAttribute]('x');
    },
    set: function set(value) {
      this[_setAttribute]('x', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "y",
    get: function get() {
      return this[_getAttribute]('y');
    },
    set: function set(value) {
      this[_setAttribute]('y', (0, _attribute_value.toNumber)(value));
    }
  }, {
    key: "pos",
    get: function get() {
      return [this.x, this.y];
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value);
      if (!Array.isArray(value)) value = [value, value];
      this.x = value[0];
      this.y = value[1];
    }
  }, {
    key: "transform",
    get: function get() {
      return this[_getAttribute]('transform');
    },
    set: function set(value) {
      var _matrixValue = null;

      if (Array.isArray(value)) {
        _matrixValue = value;
        value = "matrix(".concat(value.map(_attribute_value.toNumber).join(), ")");
      }

      if (typeof value === 'string') value = value.replace(/\s*,\s*/g, ',');else if (value != null) {
        throw new TypeError('Invalid transform value.');
      }

      if (this[_setAttribute]('transform', value)) {
        var transformMap = this[_transforms];

        if (transformMap.has('matrix')) {
          transformMap.delete('matrix');
        }

        if (_matrixValue) {
          transformMap.set('matrix', _matrixValue);
        } else if (value) {
          var transforms = value.match(/(matrix|translate|rotate|scale|skew)\([^()]+\)/g);

          if (transforms) {
            var m = _glMatrix.mat2d.fromValues(1, 0, 0, 1, 0, 0);

            for (var i = 0; i < transforms.length; i++) {
              var t = transforms[i];
              var matched = t.match(/^(matrix|translate|rotate|scale|skew)\(([^()]+)\)/);

              if (matched) {
                var _matched = (0, _slicedToArray2.default)(matched, 3),
                    method = _matched[1],
                    _value3 = _matched[2];

                if (method === 'rotate') _value3 = Math.PI * parseFloat(_value3) / 180;else _value3 = _value3.trim().split(/[\s,]+/).map(function (v) {
                  return (0, _attribute_value.toNumber)(v);
                });

                if (method === 'matrix') {
                  m = _glMatrix.mat2d.multiply(m, m, _value3);
                } else if (method === 'skew') {
                  m = _glMatrix.mat2d.multiply(m, m, _glMatrix.mat2d.fromValues(1, Math.tan(_value3[1]), Math.tan(_value3[0]), 1, 0, 0));
                } else {
                  _glMatrix.mat2d[method](m, m, _value3);
                }

                transformMap.set('matrix', m);
              }
            }
          } else {
            throw new TypeError('Invalid transform value.');
          }
        }

        this[_transformMatrix] = null;
      }
    }
  }, {
    key: "transformOrigin",
    get: function get() {
      return this[_getAttribute]('transformOrigin');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);

      if (value != null && !Array.isArray(value)) {
        value = [value, value];
      }

      if (this[_setAttribute]('transformOrigin', value)) {
        this[_transformMatrix] = null;
      }
    }
  }, {
    key: "rotate",
    get: function get() {
      return this[_getAttribute]('rotate');
    },
    set: function set(value) {
      setTransform(this, 'rotate', value);
    }
  }, {
    key: "translate",
    get: function get() {
      return this[_getAttribute]('translate');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value, value];
      setTransform(this, 'translate', value);
    }
  }, {
    key: "scale",
    get: function get() {
      return this[_getAttribute]('scale');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value, value];
      setTransform(this, 'scale', value);
    }
  }, {
    key: "skew",
    get: function get() {
      return this[_getAttribute]('skew');
    },
    set: function set(value) {
      value = (0, _attribute_value.toArray)(value, true);
      if (value != null && !Array.isArray(value)) value = [value, value];
      setTransform(this, 'skew', value);
    }
  }, {
    key: "opacity",
    get: function get() {
      return this[_getAttribute]('opacity');
    },
    set: function set(value) {
      if (value != null) value = Number(value);

      this[_setAttribute]('opacity', value);
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this[_getAttribute]('zIndex');
    },
    set: function set(value) {
      if (value != null) value = Number(value);

      this[_setAttribute]('zIndex', value);
    }
  }, {
    key: "offsetPath",
    get: function get() {
      return this[_getAttribute]('offsetPath');
    },
    set: function set(value) {
      if (this[_setAttribute]('offsetPath', value)) {
        this[_offsetFigure].beginPath();

        if (value != null) this[_offsetFigure].addPath(value);
        updateOffset(this);
      }
    }
  }, {
    key: "offsetDistance",
    get: function get() {
      return this[_getAttribute]('offsetDistance');
    },
    set: function set(value) {
      if (this[_setAttribute]('offsetDistance', (0, _attribute_value.toNumber)(value))) {
        updateOffset(this);
      }
    }
  }, {
    key: "offsetRotate",
    get: function get() {
      return this[_getAttribute]('offsetRotate');
    },
    set: function set(value) {
      this[_setAttribute]('offsetRotate', value);

      updateOffset(this);
    }
  }, {
    key: "pointerEvents",
    get: function get() {
      return this[_getAttribute]('pointerEvents');
    },
    set: function set(value) {
      if (value != null && value !== 'none' && value !== 'visible' && value !== 'visibleFill' && value !== 'visibleStroke' && value !== 'all') {
        throw new TypeError('Invalid pointerEvents type.');
      }

      this[_setAttribute]('pointerEvents', value);
    }
  }, {
    key: "filter",
    get: function get() {
      return this[_getAttribute]('filter');
    },
    set: function set(value) {
      this[_setAttribute]('filter', value);
    }
  }, {
    key: "display",
    get: function get() {
      return this[_getAttribute]('display');
    },
    set: function set(value) {
      this[_setAttribute]('display', value);
    }
    /* istanbul ignore next */

  }, {
    key: "offset",
    set: function set(value) {
      /* ignore setting offset for animations */
    }
  }]);
  return Node;
}();

exports.default = Node;