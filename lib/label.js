'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function calculTextboxSize(text, font, lineHeight) {
  var lines = text.split(/\n/);
  var width = 0,
      height = 0;

  lines.forEach(function (line) {
    var _measureText = (0, _crossPlatform.measureText)(line, font, lineHeight),
        _measureText2 = (0, _slicedToArray3.default)(_measureText, 2),
        w = _measureText2[0],
        h = _measureText2[1];

    width = Math.max(width, w);
    height += h;
  });

  return [width, height];
}

var LabelSpriteAttr = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(LabelSpriteAttr, _BaseSprite$Attr);

  function LabelSpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, LabelSpriteAttr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (LabelSpriteAttr.__proto__ || (0, _getPrototypeOf2.default)(LabelSpriteAttr)).call(this, subject));

    _this.setDefault({
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
      this.clearCache();
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
      this.clearCache();
      this.set('textboxSize', calculTextboxSize(this.text, val, this.lineHeight));
      this.set('font', val);
    },
    get: function get() {
      return this.get('font');
    }
  }, {
    key: 'lineHeight',
    set: function set(val) {
      this.clearCache();
      this.set('textboxSize', calculTextboxSize(this.text, this.font, val));
      this.set('lineHeight', val);
    },
    get: function get() {
      return this.get('lineHeight');
    }
  }, {
    key: 'textAlign',
    set: function set(val) {
      this.clearCache();
      this.set('textAlign', val);
    },
    get: function get() {
      return this.get('textAlign');
    }
  }, {
    key: 'renderMode',
    set: function set(val) {
      this.clearCache();
      this.set('renderMode', val);
    },
    get: function get() {
      return this.get('renderMode');
    }
  }, {
    key: 'color',
    set: function set(val) {
      this.clearCache();
      this.set('color', (0, _utils.parseColorString)(val));
    },
    get: function get() {
      return this.get('color');
    }
  }]);
  return LabelSpriteAttr;
}(_basesprite2.default.Attr);

var Label = (_temp = _class = function (_BaseSprite) {
  (0, _inherits3.default)(Label, _BaseSprite);

  function Label(text, opts) {
    (0, _classCallCheck3.default)(this, Label);

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Label.__proto__ || (0, _getPrototypeOf2.default)(Label)).call(this, opts));

    _this2.text = String(text);
    return _this2;
  }

  (0, _createClass3.default)(Label, [{
    key: 'render',
    value: function render(t, drawingContext) {
      var context = (0, _get3.default)(Label.prototype.__proto__ || (0, _getPrototypeOf2.default)(Label.prototype), 'render', this).call(this, t, drawingContext),
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

          var _measureText3 = (0, _crossPlatform.measureText)(line, font, attr.lineHeight),
              _measureText4 = (0, _slicedToArray3.default)(_measureText3, 2),
              w = _measureText4[0],
              h = _measureText4[1];

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
}(_basesprite2.default), _class.Attr = LabelSpriteAttr, _temp);
exports.default = Label;