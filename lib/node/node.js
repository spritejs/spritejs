"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _glMatrix = require("gl-matrix");

var _node = _interopRequireDefault(require("../attribute/node"));

var _animation2 = _interopRequireDefault(require("../animation"));

var _document = _interopRequireDefault(require("../document"));

var _event = _interopRequireDefault(require("../event/event"));

var _filter = require("../utils/filter");

var _render_event = _interopRequireDefault(require("../utils/render_event"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var changedAttrs = Symbol.for('spritejs_changedAttrs');
var attributes = Symbol.for('spritejs_attributes');

var _resolution = Symbol('resolution');

var _animations = Symbol('animations');

var _eventListeners = Symbol('eventListeners');

var _captureEventListeners = Symbol('captureEventListeners');

var _filters = Symbol('filters');

var _display = Symbol('display');

var _program = Symbol('program');

var _shaderAttrs = Symbol('shaderAttrs');

var _uniforms = Symbol('uniforms');

var Node = /*#__PURE__*/function () {
  function Node() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, Node);
    this.attributes = new this.constructor.Attr(this);
    this[_resolution] = {
      width: 300,
      height: 150
    };
    Object.assign(this.attributes, attrs); // if(Object.seal) {
    //   Object.seal(this.attributes);
    // }

    this[_animations] = new Set();
    this[_eventListeners] = {};
    this[_captureEventListeners] = {};
  }

  (0, _createClass2.default)(Node, [{
    key: "activateAnimations",
    value: function activateAnimations() {
      var layer = this.layer;

      if (layer) {
        var animations = this[_animations];
        animations.forEach(function (animation) {
          animation.baseTimeline = layer.timeline;
          animation.play();
          animation.finished.then(function () {
            animations.delete(animation);
          });
        });
        var children = this.children;

        if (children) {
          children.forEach(function (child) {
            if (child.activateAnimations) child.activateAnimations();
          });
        }
      }
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (typeof options === 'boolean') options = {
        capture: options
      };
      var _options = options,
          capture = _options.capture,
          once = _options.once;
      var eventListeners = capture ? _captureEventListeners : _eventListeners;
      this[eventListeners][type] = this[eventListeners][type] || [];
      this[eventListeners][type].push({
        listener: listener,
        once: once
      });
      return this;
    }
  }, {
    key: "animate",
    value: function animate(frames, timing) {
      var _this = this;

      var animation = new _animation2.default(this, frames, timing);
      if (this.effects) animation.applyEffects(this.effects);

      if (this.layer) {
        animation.baseTimeline = this.layer.timeline;
        animation.play();
        animation.finished.then(function () {
          _this[_animations].delete(animation);
        });
      }

      this[_animations].add(animation);

      return animation;
    }
  }, {
    key: "attr",
    value: function attr() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (args.length === 0) return this.attributes[attributes];

      if (args.length > 1) {
        var key = args[0],
            value = args[1];

        if (typeof value === 'function') {
          value = value(this.attr(key));
        }

        this.setAttribute(key, value);
        return this;
      }

      if (typeof args[0] === 'string') {
        return this.getAttribute(args[0]);
      }

      Object.assign(this.attributes, args[0]);
      return this;
    }
  }, {
    key: "cloneNode",
    value: function cloneNode() {
      var cloned = new this.constructor();
      var attrs = this.attributes[changedAttrs];
      cloned.attr(attrs);
      return cloned;
    }
  }, {
    key: "connect",
    value: function connect(parent, zOrder) {
      Object.defineProperty(this, 'parent', {
        value: parent,
        writable: false,
        configurable: true
      });
      Object.defineProperty(this, 'zOrder', {
        value: zOrder,
        writable: false,
        configurable: true
      });
      if (parent.timeline) this.activateAnimations();
      this.setResolution(parent.getResolution());
      this.forceUpdate();
      this.dispatchEvent({
        type: 'append',
        detail: {
          parent: parent,
          zOrder: zOrder
        }
      });
    }
  }, {
    key: "contains",
    value: function contains(node) {
      while (node && this !== node) {
        node = node.parent;
      }

      return !!node;
    }
  }, {
    key: "deactivateAnimations",
    value: function deactivateAnimations() {
      this[_animations].forEach(function (animation) {
        return animation.cancel();
      });

      var children = this.children;

      if (children) {
        children.forEach(function (child) {
          if (child.deactivateAnimations) child.deactivateAnimations();
        });
      }
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      var parent = this.parent,
          zOrder = this.zOrder;
      delete this.parent;
      delete this.zOrder;
      this.deactivateAnimations();
      this.dispatchEvent({
        type: 'remove',
        detail: {
          parent: parent,
          zOrder: zOrder
        }
      });
      if (parent) parent.forceUpdate();
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(event) {
      var _this2 = this;

      if (!(event instanceof _event.default)) {
        event = new _event.default(event);
      }

      event.target = this;
      var type = event.type;
      var elements = [this];
      var parent = this.parent;

      while (event.bubbles && parent) {
        elements.push(parent);
        parent = parent.parent;
      } // capture phase


      for (var i = elements.length - 1; i >= 0; i--) {
        var element = elements[i];
        var listeners = element[_captureEventListeners] && element[_captureEventListeners][type];

        if (listeners && listeners.length) {
          event.currentTarget = element;
          listeners.forEach(function (_ref) {
            var listener = _ref.listener,
                once = _ref.once;
            listener.call(_this2, event);
            if (once) elements.removeEventListener(listener);
          });
          delete event.currentTarget;
        }

        if (!event.bubbles && event.cancelBubble) break;
      } // bubbling


      if (!event.cancelBubble) {
        for (var _i = 0; _i < elements.length; _i++) {
          var _element = elements[_i];

          var _listeners = _element[_eventListeners] && _element[_eventListeners][type];

          if (_listeners && _listeners.length) {
            event.currentTarget = _element;

            _listeners.forEach(function (_ref2) {
              var listener = _ref2.listener,
                  once = _ref2.once;
              listener.call(_this2, event);
              if (once) elements.removeEventListener(listener);
            });

            delete event.currentTarget;
          }

          if (!event.bubbles || event.cancelBubble) break;
        }
      }
    }
  }, {
    key: "dispatchPointerEvent",
    value: function dispatchPointerEvent(event) {
      var x = event.x,
          y = event.y;

      if (this.isPointCollision(x, y)) {
        this.dispatchEvent(event);
        return true;
      }

      return false;
    }
  }, {
    key: "draw",
    value: function draw() {
      var _this3 = this;

      var meshes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var mesh = this.mesh;

      if (mesh) {
        (0, _filter.applyFilters)(mesh, this.filters);
        meshes.push(mesh);

        if (this[_program]) {
          mesh.setProgram(this[_program]);
          var shaderAttrs = this[_shaderAttrs];

          if (shaderAttrs) {
            Object.entries(shaderAttrs).forEach(function (_ref3) {
              var _ref4 = (0, _slicedToArray2.default)(_ref3, 2),
                  key = _ref4[0],
                  setter = _ref4[1];

              mesh.setAttribute(key, setter);
            });
          }

          var uniforms = this[_uniforms];

          if (this[_uniforms]) {
            var _uniform = {};
            Object.entries(uniforms).forEach(function (_ref5) {
              var _ref6 = (0, _slicedToArray2.default)(_ref5, 2),
                  key = _ref6[0],
                  value = _ref6[1];

              if (typeof value === 'function') {
                value = value(_this3, key);
              }

              _uniform[key] = value;
            });
            mesh.setUniforms(_uniform);
          }
        }

        (0, _render_event.default)(this, mesh);
      }

      return meshes;
    }
  }, {
    key: "forceUpdate",
    value: function forceUpdate() {
      if (this.parent) this.parent.forceUpdate();
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(key) {
      return this.attributes[key];
    }
  }, {
    key: "getListeners",
    value: function getListeners(type) {
      var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          _ref7$capture = _ref7.capture,
          capture = _ref7$capture === void 0 ? false : _ref7$capture;

      var eventListeners = capture ? _captureEventListeners : _eventListeners;
      return (0, _toConsumableArray2.default)(this[eventListeners][type] || []);
    }
  }, {
    key: "getNodeNearBy",
    value: function getNodeNearBy() {
      var distance = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      if (!this.parent) return null;
      if (distance === 0) return this;
      var children = this.parent.children;
      var idx = children.indexOf(this);
      return children[idx + distance];
    }
  }, {
    key: "getWorldPosition",
    value: function getWorldPosition(offsetX, offsetY) {
      var m = this.renderMatrix;
      var x = offsetX * m[0] + offsetY * m[2] + m[4];
      var y = offsetX * m[1] + offsetY * m[3] + m[5];
      return [x, y];
    }
  }, {
    key: "getOffsetPosition",
    value: function getOffsetPosition(x, y) {
      var m = _glMatrix.mat2d.invert(Array.of(0, 0, 0, 0, 0, 0), this.renderMatrix);

      var offsetX = x * m[0] + y * m[2] + m[4];
      var offsetY = x * m[1] + y * m[3] + m[5];
      return [offsetX, offsetY];
    }
  }, {
    key: "getResolution",
    value: function getResolution() {
      return _objectSpread({}, this[_resolution]);
    }
  }, {
    key: "isPointCollision",
    value: function isPointCollision(x, y) {
      if (!this.mesh) return false;
      var pointerEvents = this.attributes.pointerEvents;
      if (pointerEvents === 'none') return false;
      if (pointerEvents !== 'all' && !this.isVisible) return false;
      var which = 'both';
      if (pointerEvents === 'visibleFill') which = 'fill';
      if (pointerEvents === 'visibleStroke') which = 'stroke';
      return this.mesh.isPointCollision(x, y, which);
    }
  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      if (key !== 'id' && key !== 'name' && key !== 'className' && key !== 'pointerEvents' && key !== 'passEvents') {
        this.forceUpdate();
      }

      if (key === 'filter') {
        this[_filters] = (0, _filter.parseFilterString)(newValue);
      }

      if (key === 'zIndex' && this.parent) {
        this.parent.reorder();
      }
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(key, value) {
      if (key === 'attrs') {
        this.attr(value);
      }

      this.attributes[key] = value;
    }
  }, {
    key: "setMouseCapture",
    value: function setMouseCapture() {
      if (this.layer) {
        this.layer.__mouseCapturedTarget = this;
      }
    } // layer.renderer.createProgram(fragmentShader, vertexShader, attributeOptions)

  }, {
    key: "setProgram",
    value: function setProgram(program) {
      this[_program] = program;
      this.forceUpdate();
    }
  }, {
    key: "setShaderAttribute",
    value: function setShaderAttribute(attrName, setter) {
      this[_shaderAttrs] = this[_shaderAttrs] || {};
      this[_shaderAttrs][attrName] = setter;
      this.forceUpdate();
    }
  }, {
    key: "setUniforms",
    value: function setUniforms(uniforms) {
      this[_uniforms] = this[_uniforms] || {};
      Object.assign(this[_uniforms], uniforms);
      this.forceUpdate();
    }
  }, {
    key: "setResolution",
    value: function setResolution(_ref8) {
      var width = _ref8.width,
          height = _ref8.height;
      var _this$_resolution = this[_resolution],
          w = _this$_resolution.width,
          h = _this$_resolution.height;

      if (w !== width || h !== height) {
        this[_resolution] = {
          width: width,
          height: height
        }; // this.updateContours();

        this.forceUpdate();
        this.dispatchEvent({
          type: 'resolutionchange',
          detail: {
            width: width,
            height: height
          }
        });
      }
    }
  }, {
    key: "show",
    value: function show() {
      if (this.attributes.display === 'none') {
        this.attributes.display = this[_display] || '';
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      if (this.attributes.display !== 'none') {
        this[_display] = this.attributes.display;
        this.attributes.display = 'none';
      }
    }
  }, {
    key: "releaseMouseCapture",
    value: function releaseMouseCapture() {
      if (this.layer && this.layer.__mouseCapturedTarget === this) {
        this.layer.__mouseCapturedTarget = null;
      }
    }
  }, {
    key: "remove",
    value: function remove() {
      if (this.parent && this.parent.removeChild) {
        this.parent.removeChild(this);
        return true;
      }

      return false;
    }
  }, {
    key: "removeAllListeners",
    value: function removeAllListeners(type) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      if (typeof options === 'boolean') options = {
        capture: options
      };
      var capture = options.capture;
      var eventListeners = capture ? _captureEventListeners : _eventListeners;

      if (this[eventListeners][type]) {
        this[eventListeners][type] = [];
      }

      return this;
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(key) {
      this.setAttribute(key, null);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, listener) {
      var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      if (typeof options === 'boolean') options = {
        capture: options
      };
      var capture = options.capture;
      var eventListeners = capture ? _captureEventListeners : _eventListeners;

      if (this[eventListeners][type]) {
        var listeners = this[eventListeners][type];

        if (listeners) {
          for (var i = 0; i < listeners.length; i++) {
            var _listener = listeners[i].listener;

            if (_listener === listener) {
              this[eventListeners][type].splice(i, 1);
              break;
            }
          }
        }
      }

      return this;
    }
  }, {
    key: "transition",
    value: function transition(sec) {
      var _ref11;

      var easing = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'linear';

      var that = this,
          _animation = Symbol('animation');

      easing = easing || 'linear';
      var delay = 0;

      if ((0, _typeof2.default)(sec) === 'object') {
        delay = sec.delay || 0;
        sec = sec.duration;
      }

      return _ref11 = {}, (0, _defineProperty2.default)(_ref11, _animation, null), (0, _defineProperty2.default)(_ref11, "cancel", function cancel() {
        var preserveState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var animation = this[_animation];

        if (animation) {
          animation.cancel(preserveState);
        }
      }), (0, _defineProperty2.default)(_ref11, "end", function end() {
        var animation = this[_animation];

        if (animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      }), (0, _defineProperty2.default)(_ref11, "reverse", function reverse() {
        var animation = this[_animation];

        if (animation) {
          if (animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            var direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }

        return animation.finished;
      }), (0, _defineProperty2.default)(_ref11, "attr", function attr(prop, val) {
        this.end();

        if (typeof prop === 'string') {
          prop = (0, _defineProperty2.default)({}, prop, val);
        }

        Object.entries(prop).forEach(function (_ref9) {
          var _ref10 = (0, _slicedToArray2.default)(_ref9, 2),
              key = _ref10[0],
              value = _ref10[1];

          if (typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing: easing
        });
        return this[_animation].finished;
      }), _ref11;
    }
  }, {
    key: "updateContours",
    value: function updateContours() {// override
    }
  }, {
    key: "ancestors",
    get: function get() {
      var parent = this.parent;
      var ret = [];

      while (parent) {
        ret.push(parent);
        parent = parent.parent;
      }

      return ret;
    }
  }, {
    key: "animations",
    get: function get() {
      return this[_animations];
    }
  }, {
    key: "filters",
    get: function get() {
      return this[_filters] || this.parent && this.parent.filters;
    }
  }, {
    key: "isVisible",
    get: function get() {
      return false;
    }
  }, {
    key: "layer",
    get: function get() {
      if (this.parent) return this.parent.layer;
      return null;
    }
  }, {
    key: "localMatrix",
    get: function get() {
      var m = this.transformMatrix;
      var _this$attributes = this.attributes,
          x = _this$attributes.x,
          y = _this$attributes.y;
      m[4] += x;
      m[5] += y;
      return m;
    }
  }, {
    key: "opacity",
    get: function get() {
      var opacity = this.attributes.opacity;

      if (this.parent && this.parent.opacity != null) {
        opacity *= this.parent.opacity;
      }

      return opacity;
    }
  }, {
    key: "parentNode",
    get: function get() {
      return this.parent;
    }
  }, {
    key: "nextSibling",
    get: function get() {
      return this.getNodeNearBy(1);
    }
  }, {
    key: "previousSibling",
    get: function get() {
      return this.getNodeNearBy(-1);
    }
  }, {
    key: "program",
    get: function get() {
      return this[_program];
    }
    /* get parent defined by connect method */

  }, {
    key: "renderer",
    get: function get() {
      if (this.parent) return this.parent.renderer;
      return null;
    }
  }, {
    key: "renderMatrix",
    get: function get() {
      if (this.__cacheRenderMatrix) return this.__cacheRenderMatrix;
      var m = this.localMatrix;
      var parent = this.parent;

      if (parent) {
        var renderMatrix = parent.__cacheRenderMatrix || parent.renderMatrix;

        if (renderMatrix) {
          m = _glMatrix.mat2d.multiply(Array.of(0, 0, 0, 0, 0, 0), renderMatrix, m);
        }
      }

      return m;
    }
  }, {
    key: "worldScaling",
    get: function get() {
      var m = this.renderMatrix;
      return [Math.hypot(m[0], m[1]), Math.hypot(m[2], m[3])];
    }
  }, {
    key: "worldRotation",
    get: function get() {
      var m = this.renderMatrix;
      return Math.atan2(m[1], m[3]);
    }
  }, {
    key: "worldPosition",
    get: function get() {
      var m = this.renderMatrix;
      return [m[4], m[5]];
    }
  }, {
    key: "uniforms",
    get: function get() {
      return this[_uniforms];
    }
    /* get zOrder defined by connect method */

    /* attributes */

  }, {
    key: "className",
    get: function get() {
      return this.attributes.className;
    },
    set: function set(value) {
      this.attributes.className = value;
    }
  }, {
    key: "id",
    get: function get() {
      return this.attributes.id;
    },
    set: function set(value) {
      this.attributes.id = value;
    }
  }, {
    key: "name",
    get: function get() {
      return this.attributes.name;
    },
    set: function set(value) {
      this.attributes.name = value;
    }
  }, {
    key: "zIndex",
    get: function get() {
      return this.attributes.zIndex;
    },
    set: function set(value) {
      this.attributes.zIndex = value;
    }
  }, {
    key: "mesh",
    get: function get() {
      return null;
    }
  }, {
    key: "shaderAttrs",
    get: function get() {
      return this[_shaderAttrs] || {};
    }
  }]);
  return Node;
}();

exports.default = Node;
(0, _defineProperty2.default)(Node, "Attr", _node.default);

_document.default.registerNode(Node, 'node');