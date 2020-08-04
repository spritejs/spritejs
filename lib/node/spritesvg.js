"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _sprite = _interopRequireDefault(require("./sprite"));

var _spritesvg = _interopRequireDefault(require("../attribute/spritesvg"));

var _document = _interopRequireDefault(require("../document"));

var _selector = require("../selector");

var _attribute_value = require("../utils/attribute_value");

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0, _getPrototypeOf2.default)(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0, _getPrototypeOf2.default)(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0, _possibleConstructorReturn2.default)(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

// This class only avaliable for browser
var namespace = 'http://www.w3.org/2000/svg';
var setAttribute = Symbol.for('spritejs_setAttribute');

var _root = Symbol('root');

var _updateTextureTask = Symbol('task');

function updateTexture(svgNode) {
  var flexible = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var root = svgNode[_root];

  if (root && root.children[0]) {
    if (flexible && svgNode.attributes.flexible) {
      var svg = svgNode.svg;

      if (!svg.hasAttribute('data-original-width')) {
        var w = svg.getAttribute('width');
        w = w ? (0, _attribute_value.sizeToPixel)(w) : 300;
        var h = svg.getAttribute('height');
        h = h ? (0, _attribute_value.sizeToPixel)(h) : 150;

        if (!svg.hasAttribute('viewBox')) {
          svg.setAttribute('viewBox', "0 0 ".concat(Math.round(w), " ").concat(Math.round(h))); // svg.setAttribute('width', '100%');
          // svg.setAttribute('height', '100%');
        }

        svg.setAttribute('data-original-width', w);
        svg.setAttribute('data-original-height', h);
      }

      var width = svgNode.attributes.width || Number(svg.getAttribute('data-original-width'));
      var height = svgNode.attributes.height || Number(svg.getAttribute('data-original-height')); // let {width, height} = svgNode.getBoundingClientRect();
      // width = width || w;
      // height = height || h;

      var scale = svgNode.attributes.scale[0];
      var displayRatio = svgNode.layer ? svgNode.layer.displayRatio : 1;
      width *= scale * displayRatio;
      height *= scale * displayRatio;
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);

      if (width && height && svgNode.textureImage) {
        var imgWidth = svgNode.textureImage.width;
        var imgHeight = svgNode.textureImage.height;
        var boxSize = svgNode.clientSize;
        svgNode.attributes.textureRect = [0, 0, Math.round(boxSize[0] * imgWidth / width), Math.round(boxSize[1] * imgHeight / height)];
      }
    } else if (!svgNode[_updateTextureTask]) {
      svgNode[_updateTextureTask] = Promise.resolve().then(function () {
        delete svgNode[_updateTextureTask];
        var svgText = root.innerHTML;
        var blob = new Blob([svgText], {
          type: 'image/svg+xml'
        });
        var textureURL = URL.createObjectURL(blob);
        var img = new Image();

        img.onload = function () {
          if (img.width && img.height) {
            svgNode.attributes[setAttribute]('texture', img);

            if (svgNode.attributes.flexible) {
              svgNode.attributes.textureRect = null;
            }
          } else {
            svgNode.attributes[setAttribute]('texture', null);
          }
        };

        img.src = textureURL;
      });
    }
  }
}

var SpriteSvg = /*#__PURE__*/function (_Sprite) {
  (0, _inherits2.default)(SpriteSvg, _Sprite);

  var _super = _createSuper(SpriteSvg);

  function SpriteSvg() {
    var _this;

    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck2.default)(this, SpriteSvg);
    if (typeof attrs === 'string') attrs = {
      svgText: attrs
    };

    var _attrs2 = attrs,
        svgText = _attrs2.svgText,
        _attrs = (0, _objectWithoutProperties2.default)(_attrs2, ["svgText"]);

    _this = _super.call(this, _attrs);
    _this[_root] = document.createElement('div');

    if (svgText) {
      _this[_root].innerHTML = svgText;
      var svg = _this[_root].children[0];
      if (svg) svg.setAttribute('xmlns', namespace);else {
        // not svg text
        fetch(svgText).then(function (res) {
          return res.text();
        }).then(function (text) {
          _this[_root].innerHTML = text;
          if (!_this.observer || _this.attributes.flexible) updateTexture((0, _assertThisInitialized2.default)(_this));
        });
        svgText = null;
      }
    }

    if (!svgText) {
      var _svg = document.createElementNS(namespace, 'svg');

      _svg.setAttribute('xmlns', namespace);

      _this[_root].appendChild(_svg);
    }

    updateTexture((0, _assertThisInitialized2.default)(_this));

    if (typeof MutationObserver === 'function') {
      var observer = new MutationObserver(function (mutationsList) {
        updateTexture((0, _assertThisInitialized2.default)(_this), false);
      });
      observer.observe(_this[_root], {
        attributes: true,
        subtree: true,
        characterData: true,
        childList: true
      });
      _this.observer = observer;
    }

    return _this;
  }

  (0, _createClass2.default)(SpriteSvg, [{
    key: "dispatchPointerEvent",

    /* override */
    // setResolution({width, height}) {
    //   super.setResolution({width, height});
    //   updateTexture(this);
    // }

    /* override */
    value: function dispatchPointerEvent(event) {
      // 派发事件给 svg 元素，但是目前只支持派发给 svg 根元素，不支持派发给子元素
      var ret = (0, _get2.default)((0, _getPrototypeOf2.default)(SpriteSvg.prototype), "dispatchPointerEvent", this).call(this, event);

      if (ret && this.attributes.passEvents && typeof MouseEvent === 'function') {
        var x = event.x,
            y = event.y;

        var _this$getOffsetPositi = this.getOffsetPosition(x, y),
            _this$getOffsetPositi2 = (0, _slicedToArray2.default)(_this$getOffsetPositi, 2),
            offsetX = _this$getOffsetPositi2[0],
            offsetY = _this$getOffsetPositi2[1];

        var originalEvent = event.originalEvent;
        var anchor = this.attributes.anchor;
        var cz = this.clientSize;
        offsetX = (offsetX + anchor[0] * cz[0]) / 2;
        offsetY = (offsetY + anchor[1] * cz[1]) / 2;
        var type = event.type;

        if (type === originalEvent.type) {
          var newEvent = null;

          if (originalEvent instanceof MouseEvent) {
            newEvent = new MouseEvent(type, {
              screenX: offsetX,
              screenY: offsetY,
              clientX: offsetX,
              clientY: offsetY,
              bubbles: originalEvent.bubbles,
              button: originalEvent.button,
              buttons: originalEvent.buttons,
              cancelBubble: originalEvent.cancelBubble,
              cancelable: originalEvent.cancelable,
              currentTarget: originalEvent.currentTarget,
              fromElement: originalEvent.fromElement,
              relatedTarget: originalEvent.relatedTarget,
              returnValue: originalEvent.returnValue,
              srcElement: originalEvent.srcElement,
              target: originalEvent.target,
              toElement: originalEvent.toElement,
              // view: originalEvent.view,
              which: originalEvent.witch
            });
          } else if (originalEvent instanceof TouchEvent) {
            var originalTouch = null;
            var pointers = originalEvent.changedTouches || [originalEvent];

            for (var i = 0; i < pointers.length; i++) {
              var pointer = pointers[i];

              if (event.identifier === pointer.identifier) {
                originalTouch = pointer;
                break;
              }
            }

            if (originalTouch) {
              var newTouch = new Touch({
                identifier: originalTouch.identifier,
                target: originalTouch.target,
                clientX: offsetX,
                clientY: offsetY,
                screenX: offsetX,
                screenY: offsetY,
                pageX: offsetX,
                pageY: offsetY,
                radiusX: originalTouch.radiusX,
                radiusY: originalTouch.radiusY,
                rotationAngle: originalTouch.rotationAngle,
                force: originalTouch.force
              });
              newEvent = new TouchEvent(type, {
                cancelable: originalEvent.cancelable,
                bubbles: originalEvent.bubbles,
                composed: originalEvent.composed,
                touches: [newTouch],
                targetTouches: [newTouch],
                changedTouches: [newTouch]
              });
            }
          } else {
            newEvent = originalEvent;
          }

          if (newEvent) this.svg.dispatchEvent(newEvent);
        }
      }

      return ret;
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
    key: "querySelector",
    value: function querySelector(selector) {
      return (0, _selector.querySelector)(selector, this);
    }
  }, {
    key: "querySelectorAll",
    value: function querySelectorAll(selector) {
      return (0, _selector.querySelectorAll)(selector, this);
    }
    /* override */

  }, {
    key: "onPropertyChange",
    value: function onPropertyChange(key, newValue, oldValue) {
      (0, _get2.default)((0, _getPrototypeOf2.default)(SpriteSvg.prototype), "onPropertyChange", this).call(this, key, newValue, oldValue);

      if (key === 'flexible') {
        updateTexture(this);
      }

      if (this.attributes.flexible && (key === 'width' || key === 'height' || key === 'scale' || key === 'transform')) {
        updateTexture(this);
      }
    }
  }, {
    key: "children",
    get: function get() {
      return [this.svg];
    }
  }, {
    key: "childNodes",
    get: function get() {
      return [this.svg];
    }
  }, {
    key: "svg",
    get: function get() {
      if (this[_root]) {
        return this[_root].children[0];
      }

      return null;
    }
  }]);
  return SpriteSvg;
}(_sprite.default);

exports.default = SpriteSvg;
(0, _defineProperty2.default)(SpriteSvg, "Attr", _spritesvg.default);

_document.default.registerNode(SpriteSvg, 'spritesvg');