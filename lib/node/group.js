"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _core = require("@mesh.js/core");

var _block = _interopRequireDefault(require("./block"));

var _group = _interopRequireDefault(require("../attribute/group"));

var _document = _interopRequireDefault(require("../document"));

var _selector = require("../selector");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

var _zOrder = Symbol('zOrder');

var _ordered = Symbol('ordered');

var _children = Symbol('children');

var _sealed = Symbol('sealed');

var Group = /*#__PURE__*/function (_Block) {
  (0, _inherits2.default)(Group, _Block);

  var _super = _createSuper(Group);

  function Group() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Group);
    _this = _super.call(this, attrs);
    _this[_children] = [];
    _this[_ordered] = null;
    _this[_zOrder] = 0;
    return _this;
  }

  (0, _createClass2.default)(Group, [{
    key: "append",
    value: function append() {
      var _this2 = this;

      for (var _len = arguments.length, els = new Array(_len), _key = 0; _key < _len; _key++) {
        els[_key] = arguments[_key];
      }

      return els.map(function (el) {
        return _this2.appendChild(el);
      });
    }
  }, {
    key: "appendChild",
    value: function appendChild(el) {
      el.remove();

      this[_children].push(el);

      el.connect(this, this[_zOrder]++);

      if (this[_ordered]) {
        if (this[_ordered].length && el.zIndex < this[_ordered][this[_ordered].length - 1].zIndex) {
          this.reorder();
        } else {
          this[_ordered].push(el);
        }
      }

      return el;
    }
    /* override */
    // get isVisible() {
    //   return this.attributes.opacity > 0 && this[_children].length > 0;
    // }

    /* override */

  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var deep = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      var node = (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "cloneNode", this).call(this);

      if (deep) {
        this[_children].forEach(function (child) {
          var childNode = child.cloneNode(deep);
          node.appendChild(childNode);
        });
      }

      return node;
    }
    /* override */

  }, {
    key: "dispatchPointerEvent",
    value: function dispatchPointerEvent(event) {
      var children = this.orderedChildren;

      for (var i = children.length - 1; i >= 0; i--) {
        var child = children[i];
        if (child.dispatchPointerEvent(event)) return true;
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "dispatchPointerEvent", this).call(this, event);
    }
    /* override */

  }, {
    key: "draw",
    value: function draw() {
      var meshes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      this.__cacheRenderMatrix = this.renderMatrix;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "draw", this).call(this, meshes);

      if (!this[_sealed] && this.attributes.display !== 'none') {
        var children = this.orderedChildren;

        for (var i = 0; i < children.length; i++) {
          var child = children[i];
          child.draw(meshes);
        }
      }

      this.__cacheRenderMatrix = null;
      return meshes;
    }
  }, {
    key: "getElementById",
    value: function getElementById(id) {
      return (0, _selector.querySelector)("#".concat(id), this);
    }
  }, {
    key: "getElementsByClassName",
    value: function getElementsByClassName(className) {
      return (0, _selector.querySelectorAll)(".".concat(className), this);
    }
  }, {
    key: "getElementsByName",
    value: function getElementsByName(name) {
      return (0, _selector.querySelectorAll)("[name=\"".concat(name, "\"]"), this);
    }
  }, {
    key: "getElementsByTagName",
    value: function getElementsByTagName(tagName) {
      return (0, _selector.querySelectorAll)(tagName, this);
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(el, ref) {
      if (ref == null) return this.appendChild(el);
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      var zOrder = ref.zOrder;

      for (var i = refIdx; i < this[_children].length; i++) {
        var order = this[_children][i].zOrder;
        var child = this[_children][i];
        delete child.zOrder;
        Object.defineProperty(child, 'zOrder', {
          value: order + 1,
          writable: false,
          configurable: true
        });
      }

      this[_children].splice(refIdx, 0, el);

      el.connect(this, zOrder);

      if (this[_ordered]) {
        if (el.zIndex !== ref.zIndex) {
          this.reorder();
        } else {
          var idx = this[_ordered].indexOf(ref);

          this[_ordered].splice(idx, 0, el);
        }
      }

      return el;
    }
  }, {
    key: "querySelector",
    value: function querySelector(selector) {
      return (0, _selector.querySelector)(selector, this);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return (0, _selector.querySelectorAll)(selector, this);
    }
  }, {
    key: "replaceChild",
    value: function replaceChild(el, ref) {
      el.remove();

      var refIdx = this[_children].indexOf(ref);

      if (refIdx < 0) {
        throw new Error('Invalid reference node.');
      }

      this[_children][refIdx] = el;
      el.connect(this, ref.zOrder);

      if (this[_ordered]) {
        if (el.zIndex !== ref.zIndex) {
          this.reorder();
        } else {
          var idx = this[_ordered].indexOf(ref);

          this[_ordered][idx] = el;
        }
      }

      ref.disconnect(this);
      return el;
    }
  }, {
    key: "removeAllChildren",
    value: function removeAllChildren() {
      var children = this[_children];

      for (var i = children.length - 1; i >= 0; i--) {
        children[i].remove();
      }
    }
  }, {
    key: "removeChild",
    value: function removeChild(el) {
      var idx = this[_children].indexOf(el);

      if (idx >= 0) {
        this[_children].splice(idx, 1);

        if (this[_ordered]) {
          var _idx = this[_ordered].indexOf(el);

          this[_ordered].splice(_idx, 1);
        }

        el.disconnect(this);
        return el;
      }

      return null;
    }
  }, {
    key: "reorder",
    value: function reorder() {
      this[_ordered] = null;
    }
  }, {
    key: "seal",
    value: function seal() {
      function transform(path, m) {
        var ret = [];

        for (var i = 0; i < path.length; i++) {
          var cmd = (0, _toConsumableArray2.default)(path[i]);

          for (var j = 1; j < cmd.length; j += 2) {
            var x = cmd[j];
            var y = cmd[j + 1];
            cmd[j] = x * m[0] + y * m[2] + m[4];
            cmd[j + 1] = x * m[1] + y * m[3] + m[5];
          }

          ret.push(cmd);
        }

        return ret;
      }

      var children = this.orderedChildren;
      var clientBox = new _core.Figure2D();
      var localMatrix = this.localMatrix;

      for (var i = 0; i < children.length; i++) {
        var child = children[i];

        if (child instanceof Group) {
          child = child.seal();
        }

        if (child.clientBox) {
          var path = child.clientBox.contours.path;
          path = transform(path, child.localMatrix);
          clientBox.addPath(path);
        }

        if (child.path) {
          var _path = child.path.contours.path;
          _path = transform(_path, child.localMatrix);
          clientBox.addPath(_path);
        }
      }

      this[_sealed] = true;
      this.clientBox = clientBox;
      return {
        clientBox: clientBox,
        localMatrix: localMatrix
      };
    }
    /* override */

  }, {
    key: "setResolution",
    value: function setResolution(_ref) {
      var width = _ref.width,
          height = _ref.height;
      (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "setResolution", this).call(this, {
        width: width,
        height: height
      });

      this[_children].forEach(function (child) {
        child.setResolution({
          width: width,
          height: height
        });
      });
    }
    /* override */

  }, {
    key: "updateContours",
    value: function updateContours() {
      if (!this[_sealed]) (0, _get2.default)((0, _getPrototypeOf2.default)(Group.prototype), "updateContours", this).call(this);
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "children",
    get: function get() {
      return this[_children];
    }
  }, {
    key: "orderedChildren",
    get: function get() {
      if (!this[_ordered]) {
        this[_ordered] = (0, _toConsumableArray2.default)(this[_children]);

        this[_ordered].sort(function (a, b) {
          return a.zIndex - b.zIndex || a.zOrder - b.zOrder;
        });
      }

      return this[_ordered];
    }
  }]);
  return Group;
}(_block.default);

exports.default = Group;
(0, _defineProperty2.default)(Group, "Attr", _group.default);

_document.default.registerNode(Group, 'group');