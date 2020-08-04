"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _core = require("@mesh.js/core");

var _texture = require("../utils/texture");

var _node = _interopRequireDefault(require("./node"));

var _document = _interopRequireDefault(require("../document"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _amount = Symbol('amount');

var _meshCloud = Symbol('meshCloud');

var Cloud = /*#__PURE__*/function (_Node) {
  (0, _inherits2.default)(Cloud, _Node);

  var _super = _createSuper(Cloud);

  function Cloud(node) {
    var _this;

    var amount = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    (0, _classCallCheck2.default)(this, Cloud);
    _this = _super.call(this);
    _this.meshNode = node;
    node.connect((0, _assertThisInitialized2.default)(_this));
    _this[_amount] = amount;
    _this[_meshCloud] = null;
    return _this;
  }

  (0, _createClass2.default)(Cloud, [{
    key: "brightness",
    value: function brightness(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.brightness(idx, p);
        this.forceUpdate();
      }
    }
  }, {
    key: "contrast",
    value: function contrast(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.contrast(idx, p);
        this.forceUpdate();
      }
    }
  }, {
    key: "delete",
    value: function _delete(idx) {
      if (this.meshCloud) {
        this.meshCloud.delete(idx);
        this[_amount]--;
        this.forceUpdate();
      }
    }
    /* override */

  }, {
    key: "draw",
    value: function draw() {
      var _this2 = this;

      var meshes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      (0, _get2.default)((0, _getPrototypeOf2.default)(Cloud.prototype), "draw", this).call(this, meshes);

      if (this.meshCloud) {
        if (this.program) {
          this.meshCloud.setProgram(this.program);
          var shaderAttrs = this.shaderAttrs;

          if (shaderAttrs) {
            Object.entries(shaderAttrs).forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                  key = _ref2[0],
                  setter = _ref2[1];

              _this2.meshCloud.mesh.setAttribute(key, setter);
            });
          }

          var uniforms = this.uniforms;

          if (this.uniforms) {
            var _uniform = {};
            Object.entries(uniforms).forEach(function (_ref3) {
              var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                  key = _ref4[0],
                  value = _ref4[1];

              if (typeof value === 'function') {
                value = value(_this2, key);
              }

              _uniform[key] = value;
            });
            this.meshCloud.mesh.setUniforms(_uniform);
          }
        }

        if (this.meshNode.textureImage) {
          (0, _texture.drawTexture)(this.meshNode, this.meshNode.mesh);
        }

        meshes.push(this.meshCloud);
      }

      return meshes;
    }
  }, {
    key: "getTransform",
    value: function getTransform(idx) {
      if (this.meshCloud) return this.meshCloud.getTransform(idx);
    }
  }, {
    key: "grayscale",
    value: function grayscale(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.grayscale(idx, p);
        this.forceUpdate();
      }
    }
  }, {
    key: "hueRotate",
    value: function hueRotate(idx, deg) {
      if (this.meshCloud) {
        this.meshCloud.hueRotate(idx, deg);
        this.forceUpdate();
      }
    }
  }, {
    key: "invert",
    value: function invert(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.invert(idx, p);
        this.forceUpdate();
      }
    }
    /* override */

  }, {
    key: "isPointCollision",
    value: function isPointCollision(x, y) {
      if (!this.meshCloud) return false;
      var pointerEvents = this.attributes.pointerEvents;
      if (pointerEvents === 'none') return false;
      if (pointerEvents !== 'all' && !this.isVisible) return false;
      var which = 'both';
      if (pointerEvents === 'visibleFill') which = 'fill';
      if (pointerEvents === 'visibleStroke') which = 'stroke';

      for (var i = 0; i < this[_amount]; i++) {
        if (!this.meshCloud.isPointCollision(i, [x, y], which)) return false;
      }

      return true;
    }
  }, {
    key: "setOpacity",
    value: function setOpacity(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.opacity(idx, p);
        this.forceUpdate();
      }
    }
  }, {
    key: "rotate",
    value: function rotate(idx, ang) {
      var _ref5 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0],
          _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
          ox = _ref6[0],
          oy = _ref6[1];

      var rad = Math.PI * ang / 180;

      if (this.meshCloud) {
        var _this$meshNode$attrib = this.meshNode.attributes,
            x0 = _this$meshNode$attrib.x,
            y0 = _this$meshNode$attrib.y;
        this.meshCloud.rotate(idx, rad, [ox + x0, oy + y0]);
        this.forceUpdate();
      }
    }
  }, {
    key: "saturate",
    value: function saturate(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.saturate(idx, p);
        this.forceUpdate();
      }
    }
  }, {
    key: "scale",
    value: function scale(idx, _ref7) {
      var _ref8 = (0, _slicedToArray2.default)(_ref7, 2),
          x = _ref8[0],
          _ref8$ = _ref8[1],
          y = _ref8$ === void 0 ? x : _ref8$;

      var _ref9 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0],
          _ref10 = (0, _slicedToArray2.default)(_ref9, 2),
          ox = _ref10[0],
          oy = _ref10[1];

      if (this.meshCloud) {
        var _this$meshNode$attrib2 = this.meshNode.attributes,
            x0 = _this$meshNode$attrib2.x,
            y0 = _this$meshNode$attrib2.y;
        var t = 1e-5;
        if (Math.abs(x) < t) x = 1 / x > 0 ? t : -t;
        if (Math.abs(y) < t) y = 1 / y > 0 ? t : -t;
        this.meshCloud.scale(idx, [x, y], [ox + x0, oy + y0]);
        this.forceUpdate();
      }
    }
  }, {
    key: "setColorTransform",
    value: function setColorTransform(idx, m) {
      if (this.meshCloud) {
        this.meshCloud.setColorTransform(idx, m);
        this.forceUpdate();
      }
    }
  }, {
    key: "setFillColor",
    value: function setFillColor(idx, color) {
      if (this.meshCloud) {
        if (Array.isArray(color)) {
          color = (0, _toConsumableArray2.default)(color);
          color[0] /= 255;
          color[1] /= 255;
          color[2] /= 255;
        }

        this.meshCloud.setFillColor(idx, color);
        this.forceUpdate();
      }
    }
  }, {
    key: "sepia",
    value: function sepia(idx, p) {
      if (this.meshCloud) {
        this.meshCloud.sepia(idx, p);
        this.forceUpdate();
      }
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref11) {
      var width = _ref11.width,
          height = _ref11.height;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Cloud.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });
      this.meshNode.setResolution({
        width: width,
        height: height
      });
    }
  }, {
    key: "setStrokeColor",
    value: function setStrokeColor(idx, color) {
      if (this.meshCloud) {
        if (Array.isArray(color)) {
          color = (0, _toConsumableArray2.default)(color);
          color[0] /= 255;
          color[1] /= 255;
          color[2] /= 255;
        }

        this.meshCloud.setStrokeColor(idx, color);
        this.forceUpdate();
      }
    }
  }, {
    key: "setTransform",
    value: function setTransform(idx, m) {
      if (this.meshCloud) {
        this.meshCloud.setTransform(idx, m);
        this.forceUpdate();
      }
    }
  }, {
    key: "skew",
    value: function skew(idx, _ref12) {
      var _ref13 = (0, _slicedToArray2.default)(_ref12, 2),
          x = _ref13[0],
          _ref13$ = _ref13[1],
          y = _ref13$ === void 0 ? x : _ref13$;

      var _ref14 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [0, 0],
          _ref15 = (0, _slicedToArray2.default)(_ref14, 2),
          ox = _ref15[0],
          oy = _ref15[1];

      if (this.meshCloud) {
        var _this$meshNode$attrib3 = this.meshNode.attributes,
            x0 = _this$meshNode$attrib3.x,
            y0 = _this$meshNode$attrib3.y;
        this.meshCloud.skew(idx, [x, y], [ox + x0, oy + y0]);
        this.forceUpdate();
      }
    }
  }, {
    key: "transform",
    value: function transform(idx, m) {
      if (this.meshCloud) {
        this.meshCloud.transform(idx, m);
        this.forceUpdate();
      }
    }
  }, {
    key: "transformColor",
    value: function transformColor(idx, m) {
      if (this.meshCloud) {
        this.meshCloud.transformColor(idx, m);
        this.forceUpdate();
      }
    }
  }, {
    key: "translate",
    value: function translate(idx, _ref16) {
      var _ref17 = (0, _slicedToArray2.default)(_ref16, 2),
          x = _ref17[0],
          y = _ref17[1];

      if (this.meshCloud) {
        this.meshCloud.translate(idx, [x, y]);
        this.forceUpdate();
      }
    }
  }, {
    key: "updateMesh",
    value: function updateMesh() {
      if (this[_meshCloud]) {
        this[_meshCloud].mesh = this.meshNode.mesh;
        this.forceUpdate();
      }
    }
  }, {
    key: "meshCloud",
    get: function get() {
      var meshNode = this.meshNode;
      var amount = this[_amount];

      if (!this[_meshCloud] && meshNode.mesh) {
        this[_meshCloud] = new _core.MeshCloud(meshNode.mesh, amount); // const {bgcolor, fillColor} = meshNode.attributes;
        // for(let i = 0; i < this[_amount]; i++) {
        //   if(bgcolor) {
        //     this[_meshCloud].setFillColor(i, bgcolor);
        //   } else if(fillColor) {
        //     this[_meshCloud].setFillColor(i, fillColor);
        //   }
        // }
      } // if(this[_meshCloud] && meshNode.mesh !== this[_meshCloud].mesh) {
      //   this[_meshCloud].mesh = meshNode.mesh;
      // }


      return this[_meshCloud];
    }
    /* override */

  }, {
    key: "isVisible",
    get: function get() {
      return !!this.meshNode && this.meshNode.isVisible;
    }
  }, {
    key: "amount",
    get: function get() {
      return this[_amount];
    },
    set: function set(value) {
      this[_amount] = value;
      if (this[_meshCloud]) this[_meshCloud].amount = value;
    }
  }]);
  return Cloud;
}(_node.default);

exports.default = Cloud;

_document.default.registerNode(Cloud, 'cloud');