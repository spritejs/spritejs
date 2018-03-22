'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PathSpriteAttr = undefined;

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

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

var _class, _temp;

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _utils = require('./utils');

var _spriteAnimator = require('sprite-animator');

var _pathEffect = require('./path-effect');

var _pathEffect2 = _interopRequireDefault(_pathEffect);

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var PathSpriteAttr = exports.PathSpriteAttr = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(PathSpriteAttr, _BaseSprite$Attr);

  function PathSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, PathSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (PathSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(PathSpriteAttr)).call(this, subject));

    _this.setDefault({
      lineWidth: 1,
      lineCap: 'butt',
      lineJoin: 'miter',
      strokeColor: (0, _utils.parseColorString)('black'),
      fillColor: '',
      // d: path2d,
      boxSize: [0, 0],
      pathRect: [0, 0, 0, 0]
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
    },
    get: function get() {
      return this.get('d');
    }
  }, {
    key: 'boxSize',
    get: function get() {
      return this.get('boxSize');
    }
  }, {
    key: 'pathRect',
    get: function get() {
      return this.get('pathRect');
    }
  }, {
    key: 'lineWidth',
    set: function set(val) {
      this.clearCache();
      this.set('lineWidth', Math.round(val));

      if (this.d) {
        var pathRect = this.pathRect;
        var box = getBoundingBox(this.lineWidth, pathRect);
        this.set('boxSize', [box[2] - box[0], box[3] - box[1]]);

        var _translate2 = (0, _slicedToArray3.default)(this.translate, 2),
            x0 = _translate2[0],
            y0 = _translate2[1];

        var offset = this.get('dOffset') || [0, 0];

        this.translate = [x0 + box[0] - offset[0], y0 + box[1] - offset[1]];
        this.set('dOffset', [box[0], box[1]]);
      }
    },
    get: function get() {
      return this.get('lineWidth');
    }

    /**
      lineCap: butt|round|square
     */

  }, {
    key: 'lineCap',
    set: function set(val) {
      this.clearCache();
      this.set('lineCap', val);
    },
    get: function get() {
      return this.get('lineCap');
    }

    /**
      lineJoin: miter|round|bevel
     */

  }, {
    key: 'lineJoin',
    set: function set(val) {
      this.clearCache();
      this.set('lineJoin', val);
    },
    get: function get() {
      return this.get('lineJoin');
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.strokeColor = val;
    },
    get: function get() {
      return this.strokeColor;
    }
  }, {
    key: 'strokeColor',
    set: function set(val) {
      this.clearCache();
      this.set('strokeColor', (0, _utils.parseColorString)(val));
    },
    get: function get() {
      return this.get('strokeColor');
    }
  }, {
    key: 'fillColor',
    set: function set(val) {
      this.clearCache();
      this.set('fillColor', (0, _utils.parseColorString)(val));
    },
    get: function get() {
      return this.get('fillColor');
    }
  }]);
  return PathSpriteAttr;
}(_basesprite2.default.Attr);

var Path = (_temp = _class = function (_BaseSprite) {
  (0, _inherits3.default)(Path, _BaseSprite);

  function Path(d, opts) {
    (0, _classCallCheck3.default)(this, Path);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Path.__proto__ || (0, _getPrototypeOf2.default)(Path)).call(this, opts));

    if (d) {
      _this2.attr({ d: d });
    }
    return _this2;
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

        var p = this.createPath(attr.d),
            strokeColor = attr.strokeColor,
            fillColor = attr.fillColor;


        context.lineWidth = attr.lineWidth;
        context.lineCap = attr.lineCap;
        context.lineJoin = attr.lineJoin;

        var _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
            width = _contentSize[0],
            height = _contentSize[1],
            _attr$border = (0, _slicedToArray3.default)(attr.border, 1),
            borderWidth = _attr$border[0];

        var linearGradients = attr.linearGradients;

        if (linearGradients && linearGradients.strokeColor) {
          var rect = linearGradients.strokeColor.rect || [borderWidth, borderWidth, width, height];

          context.strokeStyle = (0, _utils.getLinearGradients)(context, rect, linearGradients.strokeColor);
        } else {
          context.strokeStyle = strokeColor;
        }

        context.stroke(p);

        if (fillColor) {
          if (linearGradients && linearGradients.fillColor) {
            var _rect = linearGradients.fillColor.rect || [borderWidth, borderWidth, width, height];

            context.fillStyle = (0, _utils.getLinearGradients)(context, _rect, linearGradients.fillColor);
          } else {
            context.fillStyle = fillColor;
          }

          context.fill(p);
        }

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
}(_basesprite2.default), _class.Attr = PathSpriteAttr, _temp);
exports.default = Path;