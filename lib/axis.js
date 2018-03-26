'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _dec, _dec2, _desc, _value, _class, _class2, _temp;

var _path = require('./path');

var _path2 = _interopRequireDefault(_path);

var _spriteCore = require('sprite-core');

var _spriteUtils = require('sprite-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

function ticksToD(axis) {
  if (!axis) return;

  var _axis$attr = axis.attr(),
      direction = _axis$attr.direction,
      ticks = _axis$attr.ticks,
      length = _axis$attr.length,
      vLength = _axis$attr.vLength,
      font = _axis$attr.font,
      lineWidth = _axis$attr.lineWidth,
      color = _axis$attr.color,
      axisScales = _axis$attr.axisScales;

  var originTicks = ticks.slice(0);

  var axisTicks = ticks.slice(0);
  if (axisScales.length) {
    axisTicks = axisTicks.map(function (tick) {
      return axisScales.reduce(function (v, s) {
        return s(v);
      }, tick);
    });
    axisTicks = axisTicks.filter(function (tick) {
      return tick >= 0;
    });
  }

  if (axisTicks.length <= 0) {
    return;
  }
  ticks = ticks.slice(-axisTicks.length);

  if (axisScales.length) {
    var scale = axisScales[axisScales.length - 1],
        _scale$range = scale.range(),
        _scale$range2 = (0, _slicedToArray3.default)(_scale$range, 2),
        start = _scale$range2[0],
        end = _scale$range2[1],
        _scale$domain = scale.domain(),
        _scale$domain2 = (0, _slicedToArray3.default)(_scale$domain, 2),
        from = _scale$domain2[0],
        to = _scale$domain2[1];


    if (start < axisTicks[0]) {
      ticks.unshift(from);
      axisTicks.unshift(start);
    }
    if (end > axisTicks[axisTicks.length - 1]) {
      ticks.push(to);
      axisTicks.push(end);
    }
  }

  var dist = axisTicks[axisTicks.length - 1] - axisTicks[0];
  if (length === 'auto') length = dist;

  var d = void 0;

  var points = axisTicks.map(function (tick) {
    return length * (tick - axisTicks[0]) / dist;
  });

  var offsetY = 0,
      offsetX = 0,
      offsetX0 = 0;

  axis.remove();
  ticks.forEach(function (data, i) {
    if (originTicks.indexOf(data) === -1) return;

    var label = new _spriteCore.Label();

    label.text = data;
    label.attr({ font: font, fillColor: color });

    var _label$contentSize = (0, _slicedToArray3.default)(label.contentSize, 2),
        w = _label$contentSize[0],
        h = _label$contentSize[1];

    offsetY = Math.max(offsetY, h);
    offsetX = Math.max(offsetX, w);

    if (i === 0) {
      offsetX0 = w;
    }

    var x = points[i];
    if (x != null) {
      if (direction === 'top') {
        label.attr({
          pos: [offsetX0 + x - Math.round(w / 2), 0]
        });
      } else if (direction === 'bottom') {
        label.attr({
          pos: [offsetX0 + x - Math.round(w / 2), vLength + 5]
        });
      } else if (direction === 'left') {
        label.attr({
          pos: [vLength + 5, x]
        });
      } else if (direction === 'right') {
        label.attr({
          pos: [0, x]
        });
      }
      axis.appendChild(label);
    }
  });

  var rect = void 0;
  if (direction === 'top') {
    d = 'M0 ' + vLength + ' h' + length;
    points.forEach(function (point) {
      d += 'M' + point + ' 0 v' + vLength;
    });
    rect = [offsetX0, offsetY + 5, length, vLength];
  } else if (direction === 'bottom') {
    d = 'M0 0 h' + length;
    points.forEach(function (point) {
      d += 'M' + Math.round(point) + ' 0 v' + vLength;
    });
    rect = [offsetX0, 0, length, vLength];
  } else if (direction === 'left') {
    d = 'M0 0 v' + length;
    points.forEach(function (point) {
      d += 'M0 ' + point + ' h' + vLength;
    });
    rect = [0, offsetY / 2, vLength, length];
  } else if (direction === 'right') {
    d = 'M' + (offsetX + 5) + ' 0 v' + length;
    points.forEach(function (point) {
      d += 'M' + (offsetX + 5 - vLength) + ' ' + point + ' h' + vLength;
    });

    rect = [offsetX + 5, offsetY / 2, vLength, length];
  }

  var path = new _path2.default();
  path.attr({
    d: d,
    lineWidth: lineWidth,
    strokeColor: color,
    pos: [rect[0], rect[1]]
  });

  axis.appendChild(path);
}

var AxisSpriteAttr = (_dec = (0, _spriteUtils.parseValue)(_spriteUtils.parseStringFloat), _dec2 = (0, _spriteUtils.parseValue)(_spriteUtils.parseColorString), (_class = function (_Group$Attr) {
  (0, _inherits3.default)(AxisSpriteAttr, _Group$Attr);

  function AxisSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, AxisSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AxisSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(AxisSpriteAttr)).call(this, subject));

    _this.setDefault({
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke', // stroke, fill

      font: '24px Arial',
      axisScales: []
    });
    return _this;
  }

  (0, _createClass3.default)(AxisSpriteAttr, [{
    key: 'font',
    set: function set(val) {
      this.clearCache();
      this.set('font', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'direction',
    set: function set(val) {
      this.clearCache();
      this.set('direction', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'length',
    set: function set(val) {
      this.clearCache();
      this.set('length', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'vLength',
    set: function set(val) {
      this.clearCache();
      this.set('vLength', Math.round(val));
      ticksToD(this.subject);
    }
  }, {
    key: 'ticks',
    set: function set(ticks) {
      this.clearCache();
      this.set('ticks', ticks.sort(function (a, b) {
        return a - b;
      }));
      ticksToD(this.subject);
    }

    // set d3 scales

  }, {
    key: 'axisScales',
    set: function set(val) {
      this.clearCache();
      this.set('axisScales', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.clearCache();
      this.set('lineWidth', val);
      ticksToD(this.subject);
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.clearCache();
      this.set('color', val);
      ticksToD(this.subject);
    }
  }]);
  return AxisSpriteAttr;
}(_spriteCore.Group.Attr), (_applyDecoratedDescriptor(_class.prototype, 'font', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'direction', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'direction'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'length', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'length'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'vLength', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'vLength'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'ticks', [_spriteUtils.attr, _dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'ticks'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'axisScales', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'axisScales'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_spriteUtils.attr, _dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype)), _class));
var Axis = (_temp = _class2 = function (_Group) {
  (0, _inherits3.default)(Axis, _Group);

  function Axis() {
    var ticks = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [0, 100];
    var opts = arguments[1];
    (0, _classCallCheck3.default)(this, Axis);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Axis.__proto__ || (0, _getPrototypeOf2.default)(Axis)).call(this, opts));

    if (ticks) {
      _this2.attr({ ticks: ticks });
    }
    return _this2;
  }

  (0, _createClass3.default)(Axis, [{
    key: 'render',
    value: function render(t, drawingContext) {
      var context = (0, _get3.default)(Axis.prototype.__proto__ || (0, _getPrototypeOf2.default)(Axis.prototype), 'render', this).call(this, t, drawingContext);
      return context;
    }
  }, {
    key: 'initAttributes',
    value: function initAttributes(attrs) {
      (0, _get3.default)(Axis.prototype.__proto__ || (0, _getPrototypeOf2.default)(Axis.prototype), 'initAttributes', this).call(this, attrs);
      ticksToD(this);
    }
  }]);
  return Axis;
}(_spriteCore.Group), _class2.Attr = AxisSpriteAttr, _temp);
exports.default = Axis;