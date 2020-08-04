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

var _texture = require("../utils/texture");

var _block = _interopRequireDefault(require("./block"));

var _sprite = _interopRequireDefault(require("../attribute/sprite"));

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _textureTask = Symbol('textureTask');

var Sprite = /*#__PURE__*/function (_Block) {
  (0, _inherits2.default)(Sprite, _Block);

  var _super = _createSuper(Sprite);

  function Sprite() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Sprite);
    if (typeof attrs === 'string') attrs = {
      texture: attrs
    };
    return _super.call(this, attrs);
  }
  /* override */


  (0, _createClass2.default)(Sprite, [{
    key: "draw",

    /* override */
    value: function draw() {
      var meshes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      (0, _get4.default)((0, _getPrototypeOf2.default)(Sprite.prototype), "draw", this).call(this, meshes);
      var mesh = this.mesh;

      if (mesh) {
        (0, _texture.drawTexture)(this, mesh);
      }

      return meshes;
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get4.default)((0, _getPrototypeOf2.default)(Sprite.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'texture') {
        this[_textureTask] = (0, _texture.applyTexture)(this, newValue, true); // this.setTexture(newValue);
      }

      if (key === 'textureRect') {
        var _this$attributes = this.attributes,
            width = _this$attributes.width,
            height = _this$attributes.height;

        if (width == null || height == null) {
          this.updateContours();
        }
      }
    }
  }, {
    key: "contentSize",
    get: function get() {
      var _get2 = (0, _get4.default)((0, _getPrototypeOf2.default)(Sprite.prototype), "contentSize", this),
          _get3 = (0, _slicedToArray2.default)(_get2, 2),
          w = _get3[0],
          h = _get3[1];

      var _this$attributes2 = this.attributes,
          width = _this$attributes2.width,
          height = _this$attributes2.height;

      if (width == null || height == null) {
        var img = this.textureImage;
        var textureRect = this.attributes.textureRect;
        var sourceRect = this.attributes.sourceRect;

        if (textureRect) {
          if (width == null) w = textureRect[0] + textureRect[2];
          if (height == null) h = textureRect[1] + textureRect[3];
        } else if (sourceRect) {
          var ratio = this.layer ? this.layer.displayRatio : 1;
          if (width == null) w = sourceRect[2] / ratio;
          if (height == null) h = sourceRect[3] / ratio;
        } else if (img) {
          var _ratio = this.layer ? this.layer.displayRatio : 1;

          if (width == null) w = img.width / _ratio;
          if (height == null) h = img.height / _ratio;
        }
      }

      return [w, h];
    }
  }, {
    key: "textureImageReady",
    get: function get() {
      return this[_textureTask] || Promise.resolve();
    }
  }]);
  return Sprite;
}(_block.default);

exports.default = Sprite;
(0, _defineProperty2.default)(Sprite, "Attr", _sprite.default);

_document.default.registerNode(Sprite, 'sprite');