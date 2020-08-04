"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get4 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@mesh.js/core");

var _texture = require("../utils/texture");

var _block = _interopRequireDefault(require("./block"));

var _label = _interopRequireDefault(require("../attribute/label"));

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _textImage = Symbol('textImage');

var _textImageTask = Symbol('textImageTask');

var _textureContext = Symbol('textureContext');

var _updateTextureRect = Symbol('updateTextureRect');

var _textCanvas = Symbol('textCanvas');

var Label = /*#__PURE__*/function (_Block) {
  (0, _inherits2.default)(Label, _Block);

  var _super = _createSuper(Label);

  function Label() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Label);
    if (typeof attrs === 'string') attrs = {
      text: attrs
    };
    return _super.call(this, attrs);
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

          if (!texture || this[_textureContext] && this[_textureContext] !== this.renderer || textImage.needsUpdate) {
            textImage.needsUpdate = false;
            (0, _texture.deleteTexture)(textImage.image, this.renderer);
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

            var fontHeight = this.attributes.fontSize;
            var lineHeight = this.attributes.lineHeight;
            var y = 0; // middle

            if (verticalAlign === 'top') {
              y = (fontHeight - lineHeight) / 2;
            } else if (verticalAlign === 'bottom') {
              y = (lineHeight - fontHeight) / 2;
            }

            var _this$attributes = this.attributes,
                paddingLeft = _this$attributes.paddingLeft,
                paddingTop = _this$attributes.paddingTop;
            var borderWidth = this.attributes.borderWidth;
            x += paddingLeft + borderWidth;
            y += paddingTop + borderWidth;
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
          var ratio = _this.layer ? _this.layer.displayRatio : 1;
          _this[_textCanvas] = _this[_textCanvas] || _core.ENV.createCanvas(1, 1);
          _this[_textImage] = _core.ENV.createText(text, {
            font: font,
            fillColor: fillColor,
            strokeColor: strokeColor,
            strokeWidth: strokeWidth,
            parseFont: _core.parseFont,
            ratio: ratio,
            textCanvas: _this[_textCanvas]
          });
          _this[_textImage].needsUpdate = true;

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
  }, {
    key: "textContent",
    get: function get() {
      return this.attributes.text;
    },
    set: function set(value) {
      this.attributes.text = value;
    }
  }, {
    key: "textImage",
    get: function get() {
      return this[_textImage] || {};
    }
  }, {
    key: "textImageReady",
    get: function get() {
      return this[_textImageTask] || Promise.resolve();
    }
  }]);
  return Label;
}(_block.default);

exports.default = Label;
(0, _defineProperty2.default)(Label, "Attr", _label.default);

_document.default.registerNode(Label, 'label');