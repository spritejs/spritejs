'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class, _class2, _temp;

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _decorators = require('./decorators');

var _utils = require('./utils');

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

function calculTextboxSize(text, font, lineHeight) {
  var lines = text.split(/\n/);
  var width = 0,
      height = 0;

  lines.forEach(function (line) {
    var _getTextSize = (0, _utils.getTextSize)(line, font, lineHeight),
        _getTextSize2 = (0, _slicedToArray3.default)(_getTextSize, 2),
        w = _getTextSize2[0],
        h = _getTextSize2[1];

    width = Math.max(width, w);
    height += h;
  });

  return [width, height];
}

var LabelSpriteAttr = (_dec = (0, _decorators.attr)('repaint'), _dec2 = (0, _decorators.attr)('repaint'), _dec3 = (0, _decorators.attr)('repaint'), _dec4 = (0, _decorators.attr)('repaint'), _dec5 = (0, _decorators.attr)('repaint'), _dec6 = (0, _decorators.attr)('repaint'), (_class = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(LabelSpriteAttr, _BaseSprite$Attr);

  function LabelSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, LabelSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LabelSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(LabelSpriteAttr)).call(this, subject));

    _this.merge({
      font: '16px Arial',
      textAlign: 'left',
      color: (0, _utils.parseColorString)('black'),
      lineHeight: '',
      renderMode: 'fill',
      text: '',
      textboxSize: [0, 0]
    });
    return _this;
  }

  (0, _createClass3.default)(LabelSpriteAttr, [{
    key: 'text',
    set: function set(val) {
      val = String(val);
      this.set('textboxSize', calculTextboxSize(val, this.font, this.lineHeight));
      this.set('text', val);
    },
    get: function get() {
      return this.get('text');
    }
  }, {
    key: 'textboxSize',
    get: function get() {
      return this.get('textboxSize');
    }
  }, {
    key: 'font',
    set: function set(val) {
      this.set('textboxSize', calculTextboxSize(this.text, val, this.lineHeight));
      this.set('font', val);
    },
    get: function get() {
      return this.get('font');
    }
  }, {
    key: 'lineHeight',
    set: function set(val) {
      this.set('textboxSize', calculTextboxSize(this.text, this.font, val));
      this.set('lineHeight', val);
    },
    get: function get() {
      return this.get('lineHeight');
    }
  }, {
    key: 'textAlign',
    set: function set(val) {
      this.set('textAlign', val);
    },
    get: function get() {
      return this.get('textAlign');
    }
  }, {
    key: 'renderMode',
    set: function set(val) {
      this.set('renderMode', val);
    },
    get: function get() {
      return this.get('renderMode');
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.set('color', (0, _utils.parseColorString)(val));
    },
    get: function get() {
      return this.get('color');
    }
  }]);
  return LabelSpriteAttr;
}(_basesprite2.default.Attr), (_applyDecoratedDescriptor(_class.prototype, 'text', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'text'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textboxSize', [_decorators.readonly], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textboxSize'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'font', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'font'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'lineHeight', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'lineHeight'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'textAlign', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'textAlign'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'renderMode', [_dec5], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'renderMode'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'color', [_dec6], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'color'), _class.prototype)), _class));
var Label = (_temp = _class2 = function (_BaseSprite) {
  (0, _inherits3.default)(Label, _BaseSprite);

  function Label(text, opts) {
    (0, _classCallCheck3.default)(this, Label);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call(this, opts));

    _this2.text = String(text);
    return _this2;
  }

  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render(t) {
      var context = (0, _get3.default)(Label.prototype.__proto__ || (0, _getPrototypeOf2.default)(Label.prototype), 'render', this).call(this, t),
          attr = this.attr(),
          text = this.text,
          font = attr.font,
          renderMode = attr.renderMode;

      if (text) {
        context.font = attr.font;
        var color = attr.color;
        var lines = this.text.split(/\n/);

        context.textBaseline = 'top';

        var align = attr.textAlign,
            _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
            width = _contentSize[0],
            height = _contentSize[1];


        context.strokeStyle = context.fillStyle = color;
        context.textBaseline = 'middle';

        var _attr = this.attr('border'),
            _attr2 = (0, _slicedToArray3.default)(_attr, 1),
            borderWidth = _attr2[0];

        var linearGradients = attr.linearGradients;

        if (linearGradients && linearGradients.text) {
          var rect = linearGradients.text.rect || [borderWidth, borderWidth, width, height];

          context.strokeStyle = context.fillStyle = (0, _utils.getLinearGradients)(context, rect, linearGradients.text);
        }

        var top = borderWidth;

        lines.forEach(function (line) {
          var left = borderWidth;

          var _getTextSize3 = (0, _utils.getTextSize)(line, font, attr.lineHeight),
              _getTextSize4 = (0, _slicedToArray3.default)(_getTextSize3, 2),
              w = _getTextSize4[0],
              h = _getTextSize4[1];

          if (align === 'center') {
            left += (width - w) / 2;
          } else if (align === 'right') {
            left += width - w;
          }

          if (renderMode === 'fill') {
            context.fillText(line, left, top + h / 2);
          } else {
            context.strokeText(line, left, top + h / 2);
          }

          top += h;
        });
      }

      return context;
    }
  }, {
    key: 'text',
    set: function set(val) {
      this.attr('text', val);
    },
    get: function get() {
      return this.attr('text');
    }

    // override to adapt content size

  }, {
    key: 'contentSize',
    get: function get() {
      var _attr3 = this.attr('size'),
          _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
          width = _attr4[0],
          height = _attr4[1];

      var boxSize = this.attr('textboxSize');

      if (width === '') {
        width = boxSize[0] | 0;
      }
      if (height === '') {
        height = boxSize[1] | 0;
      }

      return [width, height];
    }
  }]);
  return Label;
}(_basesprite2.default), _class2.Attr = LabelSpriteAttr, _temp);
exports.default = Label;