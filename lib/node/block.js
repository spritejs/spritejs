"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@mesh.js/core");

var _node = _interopRequireDefault(require("./node"));

var _block = _interopRequireDefault(require("../attribute/block"));

var _color = require("../utils/color");

var _border_radius = require("../utils/border_radius");

var _document = _interopRequireDefault(require("../document"));

var _bounding_box = _interopRequireDefault(require("../utils/bounding_box"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _mesh = Symbol('mesh');

var Block = /*#__PURE__*/function (_Node) {
  (0, _inherits2.default)(Block, _Node);

  var _super = _createSuper(Block);

  function Block() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Block);
    return _super.call(this, attrs);
  }

  (0, _createClass2.default)(Block, [{
    key: "getBoundingClientRect",
    value: function getBoundingClientRect() {
      var boundingBox = null;

      if (this.mesh) {
        boundingBox = (0, _toConsumableArray2.default)(this.mesh.boundingBox);
        var borderWidth = this.attributes.borderWidth;

        if (borderWidth) {
          boundingBox[0] = [boundingBox[0][0] - borderWidth, boundingBox[0][1] - borderWidth];
          boundingBox[1] = [boundingBox[1][0] + borderWidth, boundingBox[1][1] + borderWidth];
        }
      }

      return (0, _bounding_box.default)(boundingBox, this.renderMatrix);
    } // transformPoint(x, y) {
    //   const m = mat2d.invert(this.renderMatrix);
    //   const newX = x * m[0] + y * m[2] + m[4];
    //   const newY = x * m[1] + y * m[3] + m[5];
    //   return [newX, newY];
    // }

    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      // eslint-disable-line complexity
      (0, _get2.default)((0, _getPrototypeOf2.default)(Block.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'anchorX' || key === 'anchorY' || key === 'boxSizing' || key === 'width' || key === 'height' || key === 'borderWidth' || key === 'paddingLeft' || key === 'paddingRight' || key === 'paddingTop' || key === 'paddingBottom' || /^border(TopLeft|TopRight|BottomRight|BottomLeft)Radius$/.test(key)) {
        this.updateContours();
      } // if(key === 'opacity') {
      //   if(this[_mesh]) this[_mesh].setOpacity(this.opacity);
      // }
      // if(key === 'anchorX' || key === 'anchorY' || key === 'boxSizing') {
      //   if(this[_mesh]) {
      //     const bgcolor = this.attributes.bgcolor;
      //     if(bgcolor && bgcolor.vector) {
      //       setFillColor(this[_mesh], {color: bgcolor});
      //     }
      //     const borderColor = this.attributes.borderColor;
      //     if(borderColor && borderColor.vector) {
      //       const {borderWidth, borderDash, borderDashOffset} = this.attributes;
      //       setStrokeColor(this[_mesh],
      //         {color: borderColor, lineWidth: borderWidth, lineDash: borderDash, lineDashOffset: borderDashOffset});
      //     }
      //   }
      // }


      if (this[_mesh] && key === 'clipPath') {
        this[_mesh].setClipPath(newValue);
      }

      if (this[_mesh] && key === 'bgcolor') {
        (0, _color.setFillColor)(this[_mesh], {
          color: newValue
        });
      }

      if (this[_mesh] && (key === 'borderColor' || key === 'borderWidth' || key === 'borderDash' || key === 'borderDashOffset')) {
        var _this$attributes = this.attributes,
            borderColor = _this$attributes.borderColor,
            borderWidth = _this$attributes.borderWidth,
            borderDash = _this$attributes.borderDash,
            borderDashOffset = _this$attributes.borderDashOffset;
        (0, _color.setStrokeColor)(this[_mesh], {
          color: borderColor,
          lineWidth: borderWidth,
          lineDash: borderDash,
          lineDashOffset: borderDashOffset
        });
      }
    }
    /* override */

  }, {
    key: "updateContours",
    value: function updateContours() {
      var _this$attributes2 = this.attributes,
          anchorX = _this$attributes2.anchorX,
          anchorY = _this$attributes2.anchorY,
          borderWidth = _this$attributes2.borderWidth,
          borderRadius = _this$attributes2.borderRadius;

      var _this$borderSize = (0, _slicedToArray2.default)(this.borderSize, 2),
          width = _this$borderSize[0],
          height = _this$borderSize[1];

      var offsetSize = this.offsetSize;
      var bw = 0.5 * borderWidth;
      var left = -anchorX * offsetSize[0] + bw;
      var top = -anchorY * offsetSize[1] + bw;
      this.clientBox = new _core.Figure2D();
      (0, _border_radius.createRadiusBox)(this.clientBox, [left, top, width, height], borderRadius);
    }
  }, {
    key: "borderSize",
    get: function get() {
      var _this$attributes3 = this.attributes,
          paddingTop = _this$attributes3.paddingTop,
          paddingRight = _this$attributes3.paddingRight,
          paddingBottom = _this$attributes3.paddingBottom,
          paddingLeft = _this$attributes3.paddingLeft,
          borderWidth = _this$attributes3.borderWidth;

      var _this$contentSize = (0, _slicedToArray2.default)(this.contentSize, 2),
          width = _this$contentSize[0],
          height = _this$contentSize[1];

      return [paddingLeft + width + paddingRight + borderWidth, paddingTop + height + paddingBottom + borderWidth];
    } // content + padding

  }, {
    key: "clientSize",
    get: function get() {
      var _this$attributes4 = this.attributes,
          paddingTop = _this$attributes4.paddingTop,
          paddingRight = _this$attributes4.paddingRight,
          paddingBottom = _this$attributes4.paddingBottom,
          paddingLeft = _this$attributes4.paddingLeft;

      var _this$contentSize2 = (0, _slicedToArray2.default)(this.contentSize, 2),
          width = _this$contentSize2[0],
          height = _this$contentSize2[1];

      return [paddingLeft + width + paddingRight, paddingTop + height + paddingBottom];
    }
  }, {
    key: "contentSize",
    get: function get() {
      var _this$attributes5 = this.attributes,
          width = _this$attributes5.width,
          height = _this$attributes5.height,
          boxSizing = _this$attributes5.boxSizing,
          paddingTop = _this$attributes5.paddingTop,
          paddingRight = _this$attributes5.paddingRight,
          paddingBottom = _this$attributes5.paddingBottom,
          paddingLeft = _this$attributes5.paddingLeft;
      width = width || 0;
      height = height || 0;

      if (boxSizing === 'border-box') {
        var bw = 2 * this.attributes.borderWidth;
        width -= bw + paddingRight + paddingLeft;
        height -= bw + paddingTop + paddingBottom;
        width = Math.max(0, width);
        height = Math.max(0, height);
      }

      return [width, height];
    }
  }, {
    key: "hasBorder",
    get: function get() {
      var borderWidth = this.attributes.borderWidth;
      return borderWidth > 0;
    }
    /* override */

  }, {
    key: "isVisible",
    get: function get() {
      var _this$borderSize2 = (0, _slicedToArray2.default)(this.borderSize, 2),
          width = _this$borderSize2[0],
          height = _this$borderSize2[1];

      return width > 0 && height > 0;
    }
  }, {
    key: "mesh",
    get: function get() {
      if (this.attributes.display === 'none') return null;
      var box = this.clientBox;

      if (box) {
        var _mesh2;

        var mesh = this[_mesh];

        if (!mesh) {
          mesh = new _core.Mesh2D(box);
          mesh.box = box;
          var fillColor = this.attributes.bgcolor;
          (0, _color.setFillColor)(mesh, {
            color: fillColor
          });

          if (this.hasBorder) {
            var _this$attributes6 = this.attributes,
                borderColor = _this$attributes6.borderColor,
                borderWidth = _this$attributes6.borderWidth,
                borderDash = _this$attributes6.borderDash,
                borderDashOffset = _this$attributes6.borderDashOffset;
            (0, _color.setStrokeColor)(mesh, {
              color: borderColor,
              lineWidth: borderWidth,
              lineDash: borderDash,
              lineDashOffset: borderDashOffset
            });
          } // mesh.setOpacity(this.attributes.opacity);


          this[_mesh] = mesh;
          var clipPath = this.attributes.clipPath;

          if (clipPath) {
            this[_mesh].setClipPath(clipPath);
          }
        } else if (mesh.box !== box) {
          mesh.contours = box.contours;
          mesh.box = box;
        }

        var opacity = this.opacity;

        if (mesh.getOpacity() !== opacity) {
          mesh.setOpacity(opacity);
        }

        (_mesh2 = mesh).setTransform.apply(_mesh2, (0, _toConsumableArray2.default)(this.renderMatrix));

        return mesh;
      }

      return null;
    } // content + padding + border

  }, {
    key: "offsetSize",
    get: function get() {
      var _this$attributes7 = this.attributes,
          paddingTop = _this$attributes7.paddingTop,
          paddingRight = _this$attributes7.paddingRight,
          paddingBottom = _this$attributes7.paddingBottom,
          paddingLeft = _this$attributes7.paddingLeft,
          borderWidth = _this$attributes7.borderWidth;

      var _this$contentSize3 = (0, _slicedToArray2.default)(this.contentSize, 2),
          width = _this$contentSize3[0],
          height = _this$contentSize3[1];

      var bw2 = 2 * borderWidth;
      return [paddingLeft + width + paddingRight + bw2, paddingTop + height + paddingBottom + bw2];
    }
  }, {
    key: "originalClientRect",
    get: function get() {
      if (this.mesh) {
        var boundingBox = this.mesh.boundingBox;
        return [boundingBox[0][0], boundingBox[0][1], boundingBox[1][0] - boundingBox[0][0], boundingBox[1][1] - boundingBox[0][1]];
      }

      return [0, 0, 0, 0];
    }
  }, {
    key: "originalContentRect",
    get: function get() {
      var _this$originalClientR = (0, _slicedToArray2.default)(this.originalClientRect, 4),
          left = _this$originalClientR[0],
          top = _this$originalClientR[1],
          width = _this$originalClientR[2],
          height = _this$originalClientR[3];

      var padding = this.attributes.padding;
      return [left + padding[0], top + padding[1], width - padding[0] - padding[2], height - padding[1] - padding[3]];
    }
  }]);
  return Block;
}(_node.default);

exports.default = Block;
(0, _defineProperty2.default)(Block, "Attr", _block.default);

_document.default.registerNode(Block, 'block');