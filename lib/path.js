'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathSpriteAttr = undefined;

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

var _dec, _desc, _value, _class, _class2, _temp;

var _spriteCore = require('sprite-core');

var _spriteUtils = require('sprite-utils');

var _spriteAnimator = require('sprite-animator');

var _pathEffect = require('./path-effect');

var _pathEffect2 = _interopRequireDefault(_pathEffect);

var _crossPlatform = require('./cross-platform');

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

_spriteAnimator.Effects.d = _pathEffect2.default;

function getBoundingBox(lineWidth, pathRect) {
  var _pathRect = (0, _slicedToArray3.default)(pathRect, 4),
      x = _pathRect[0],
      y = _pathRect[1],
      width = _pathRect[2],
      height = _pathRect[3],
      lw = Math.ceil(lineWidth / 2);

  return [-lw, -lw, x + width + lw, y + height + lw];
}

var PathSpriteAttr = exports.PathSpriteAttr = (_dec = (0, _spriteUtils.deprecate)('Instead use strokeColor.'), (_class = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(PathSpriteAttr, _BaseSprite$Attr);

  function PathSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, PathSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PathSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(PathSpriteAttr)).call(this, subject));

    _this.setDefault({
      lineWidth: 1,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: '',
      fillColor: '',
      // d: path2d,
      boxSize: [0, 0],
      pathRect: [0, 0, 0, 0]
    }, {
      color: {
        get: function get() {
          return this.strokeColor;
        }
      }
    });
    return _this;
  }

  (0, _createClass3.default)(PathSpriteAttr, [{
    key: 'd',
    set: function set(val) {
      this.clearCache();
      if (val != null) {
        var path = (0, _crossPlatform.createPath)(val);
        this.set('d', path.getAttribute('d'));
      } else {
        this.set('d', val); // undefined
      }

      var pathRect = (0, _crossPlatform.calPathRect)(this);
      this.set('pathRect', pathRect);

      var box = getBoundingBox(this.lineWidth, pathRect);
      this.set('boxSize', [box[2] - box[0], box[3] - box[1]]);

      var _translate = (0, _slicedToArray3.default)(this.translate, 2),
          x0 = _translate[0],
          y0 = _translate[1];

      var offset = this.get('dOffset') || [0, 0];

      this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]];
      this.set('dOffset', [box[0], box[1]]);
    }
  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.clearCache();
      this.set('lineWidth', Math.round(val));

      if (this.d) {
        var pathRect = this.get('pathRect');
        var box = getBoundingBox(this.lineWidth, pathRect);
        this.set('boxSize', [box[2] - box[0], box[3] - box[1]]);

        var _translate2 = (0, _slicedToArray3.default)(this.translate, 2),
            x0 = _translate2[0],
            y0 = _translate2[1];

        var offset = this.get('dOffset') || [0, 0];

        this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]];
        this.set('dOffset', [box[0], box[1]]);
      }
    }

    /**
      lineCap: butt|round|square
     */

  }, {
    key: 'lineCap',
    set: function set(val) {
      this.clearCache();
      this.set('lineCap', val);
    }

    /**
      lineJoin: miter|round|bevel
     */

  }, {
    key: 'lineJoin',
    set: function set(val) {
      this.clearCache();
      this.set('lineJoin', val);
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.strokeColor = val;
    }
  }, {
    key: 'strokeColor',
    set: function set(val) {
      this.clearCache();
      this.set('strokeColor', (0, _spriteUtils.parseColorString)(val));
    }
  }, {
    key: 'fillColor',
    set: function set(val) {
      this.clearCache();
      this.set('fillColor', (0, _spriteUtils.parseColorString)(val));
    }
  }]);
  return PathSpriteAttr;
}(_spriteCore.BaseSprite.Attr), (_applyDecoratedDescriptor(_class.prototype, 'd', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'd'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineWidth', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineWidth'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineCap', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineCap'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineJoin', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineJoin'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_spriteUtils.attr, _dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'strokeColor', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'strokeColor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'fillColor', [_spriteUtils.attr], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'fillColor'), _class.prototype)), _class));
var Path = (_temp = _class2 = function (_BaseSprite) {
  (0, _inherits3.default)(Path, _BaseSprite);

  function Path(attr) {
    (0, _classCallCheck3.default)(this, Path);

    if (typeof attr === 'string') {
      attr = { d: attr };
    }
    return (0, _possibleConstructorReturn3.default)(this, (Path.__proto__ || (0, _getPrototypeOf2.default)(Path)).call(this, attr));
  }

  (0, _createClass3.default)(Path, [{
    key: 'getPointAtLength',
    value: function getPointAtLength(length) {
      var path = (0, _crossPlatform.createPath)(this.attr('d'));

      var _path$getPointAtLengt = path.getPointAtLength(length),
          x = _path$getPointAtLengt.x,
          y = _path$getPointAtLengt.y;

      return [x, y];
    }
  }, {
    key: 'getPathLength',
    value: function getPathLength() {
      var path = (0, _crossPlatform.createPath)(this.attr('d'));
      return path.getTotalLength();
    }
  }, {
    key: 'render',
    value: function render(t, drawingContext) {
      var context = (0, _get3.default)(Path.prototype.__proto__ || (0, _getPrototypeOf2.default)(Path.prototype), 'render', this).call(this, t, drawingContext),
          attr = this.attr();

      if (attr.d) {
        var box = getBoundingBox(attr.lineWidth, attr.pathRect);

        context.translate(-box[0], -box[1]);

        var p = this.createPath(attr.d);
        var strokeColor = attr.strokeColor,
            fillColor = attr.fillColor;


        if (!strokeColor && !fillColor) {
          strokeColor = (0, _spriteUtils.parseColorString)('black');
        }

        context.lineWidth = attr.lineWidth;
        context.lineCap = attr.lineCap;
        context.lineJoin = attr.lineJoin;

        var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
            width = _contentSize[0],
            height = _contentSize[1],
            _attr$border = (0, _slicedToArray3.default)(attr.border, 1),
            borderWidth = _attr$border[0];

        var linearGradients = attr.linearGradients;

        if (linearGradients && linearGradients.fillColor) {
          var rect = linearGradients.fillColor.rect || [borderWidth, borderWidth, width, height];

          context.fillStyle = (0, _spriteCore.createLinearGradients)(context, rect, linearGradients.fillColor);
        } else if (fillColor) {
          context.fillStyle = fillColor;
        }

        if (linearGradients && linearGradients.strokeColor) {
          var _rect = linearGradients.strokeColor.rect || [borderWidth, borderWidth, width, height];

          context.strokeStyle = (0, _spriteCore.createLinearGradients)(context, _rect, linearGradients.strokeColor);
        } else if (strokeColor) {
          context.strokeStyle = strokeColor;
        }

        if (fillColor) context.fill(p);
        if (strokeColor) context.stroke(p);

        this.path = p;
      }

      return context;
    }
  }, {
    key: 'contentSize',
    get: function get() {
      var _attr = this.attr('size'),
          _attr2 = (0, _slicedToArray3.default)(_attr, 2),
          width = _attr2[0],
          height = _attr2[1];

      var boxSize = this.attr('boxSize');

      if (width === '') {
        width = boxSize[0] | 0;
      }
      if (height === '') {
        height = boxSize[1] | 0;
      }

      return [width, height];
    }
  }, {
    key: 'pathRect',
    get: function get() {
      return this.attr('pathRect');
    }
  }]);
  return Path;
}(_spriteCore.BaseSprite), _class2.Attr = PathSpriteAttr, _temp);
exports.default = Path;