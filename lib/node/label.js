"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@mesh.js/core");

var _animationFrame = require("../utils/animation-frame");

var _texture = require("../utils/texture");

var _block = _interopRequireDefault(require("./block"));

var _label = _interopRequireDefault(require("../attribute/label"));

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var _textImage = Symbol('textImage');

var _textImageTask = Symbol('textImageTask');

var _textureContext = Symbol('textureContext');

var _updateTextureRect = Symbol('updateTextureRect');

var Label =
/*#__PURE__*/
function (_Block) {
  (0, _inherits2.default)(Label, _Block);

  function Label() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Label);
    if (typeof attrs === 'string') attrs = {
      text: attrs
    };
    return (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Label).call(this, attrs));
  }
  /* override */


  (0, _createClass2.default)(Label, [{
    key: "draw",

    /* override */
    value: function draw(meshes) {
      (0, _get4.default)((0, _getPrototypeOf2.default)(Label.prototype), "draw", this).call(this, meshes);
      var mesh = this.mesh;

      if (mesh) {
        var textImage = this[_textImage];

        if (textImage) {
          var texture = mesh.texture;

          if (!texture || this[_textureContext] && this[_textureContext] !== this.renderer || texture.image !== textImage.image) {
            texture = (0, _texture.createTexture)(textImage.image, this.renderer);
            this[_updateTextureRect] = true;
          } else {
            texture = mesh.uniforms.u_texSampler;
          }

          if (this[_updateTextureRect]) {
            var _textImage$rect$slice = textImage.rect.slice(2),
                _textImage$rect$slice2 = (0, _slicedToArray2.default)(_textImage$rect$slice, 2),
                width = _textImage$rect$slice2[0],
                height = _textImage$rect$slice2[1];

            var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
                w = _this$contentSize[0],
                h = _this$contentSize[1];

            var textAlign = this.attributes.textAlign;
            var verticalAlign = this.attributes.verticalAlign;
            var x = 0;

            if (textAlign === 'center') {
              x = (w - width) / 2;
            } else if (textAlign === 'right' || textAlign === 'end') {
              x = w - width;
            }

            var y;

            if (verticalAlign === 'top') {
              y = 0;
            } else if (verticalAlign === 'bottom') {
              y = h - height;
            } else {
              y = (h - height) / 2;
            }

            var _this$attributes = this.attributes,
                paddingLeft = _this$attributes.paddingLeft,
                paddingTop = _this$attributes.paddingTop;
            x += paddingLeft;
            y += paddingTop;
            var _this$attributes2 = this.attributes,
                anchorX = _this$attributes2.anchorX,
                anchorY = _this$attributes2.anchorY;
            x -= this.clientSize[0] * anchorX;
            y -= this.clientSize[1] * anchorY;
            mesh.setTexture(texture, {
              rect: [x, y, width, height]
            });
            this[_updateTextureRect] = false;
            this[_textureContext] = this.renderer;
          }
        }
      }

      return meshes;
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      if (key === 'text' || key === 'fontSize' || key === 'fontFamily' || key === 'fontStyle' || key === 'fontVariant' || key === 'fontWeight' || key === 'fontStretch' || key === 'lineHeight' || key === 'strokeColor' || key === 'fillColor' || key === 'strokeWidth') {
        this.updateText();
      } else {
        if (key === 'textAlign' || key === 'verticalAlign') {
          this[_updateTextureRect] = true;
        }

        (0, _get4.default)((0, _getPrototypeOf2.default)(Label.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);
      }
    }
    /* override */

  }, {
    key: "updateContours",
    value: function updateContours() {
      (0, _get4.default)((0, _getPrototypeOf2.default)(Label.prototype), "updateContours", this).call(this);
      this[_updateTextureRect] = true;
    }
  }, {
    key: "updateText",
    value: function updateText() {
      var _this = this;

      if (!this[_textImageTask]) {
        this[_textImageTask] = Promise.resolve().then(function () {
          _this[_textImageTask] = null;
          var _this$attributes3 = _this.attributes,
              text = _this$attributes3.text,
              font = _this$attributes3.font,
              fillColor = _this$attributes3.fillColor,
              strokeColor = _this$attributes3.strokeColor,
              strokeWidth = _this$attributes3.strokeWidth;

          if (_core.ENV.createText) {
            _this[_textImage] = _core.ENV.createText(text, {
              font: font,
              fillColor: fillColor,
              strokeColor: strokeColor,
              strokeWidth: strokeWidth,
              parseFont: _core.parseFont
            });
          } else {
            _this[_textImage] = (0, _core.createText)(text, {
              font: font,
              fillColor: fillColor,
              strokeColor: strokeColor,
              strokeWidth: strokeWidth
            });
          }

          _this.updateContours();

          _this.forceUpdate();

          return _this[_textImage];
        });
      }
    }
  }, {
    key: "contentSize",
    get: function get() {
      var _get2 = (0, _get4.default)((0, _getPrototypeOf2.default)(Label.prototype), "contentSize", this),
          _get3 = (0, _slicedToArray2.default)(_get2, 2),
          w = _get3[0],
          h = _get3[1];

      var _this$attributes4 = this.attributes,
          width = _this$attributes4.width,
          height = _this$attributes4.height;

      if (width == null || height == null) {
        var img = this[_textImage];

        if (img) {
          if (width == null) w = img.rect[2];
          if (height == null) h = img.rect[3];
        }
      }

      return [w, h];
    }
  }, {
    key: "text",
    get: function get() {
      return this.attributes.text;
    },
    set: function set(value) {
      this.attributes.text = value;
    }
  }]);
  return Label;
}(_block.default);

exports.default = Label;
(0, _defineProperty2.default)(Label, "Attr", _label.default);

_document.default.registerNode(Label, 'label');