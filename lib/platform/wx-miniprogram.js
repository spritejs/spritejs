"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

/* globals wx */
function polyfill(_ref) {
  var ENV = _ref.ENV;

  var Container =
  /*#__PURE__*/
  function () {
    function Container(width, height) {
      (0, _classCallCheck2.default)(this, Container);
      this.width = width;
      this.height = height;
      this.children = [];
      this._listeners = {};
    }

    (0, _createClass2.default)(Container, [{
      key: "dispatchEvent",
      value: function dispatchEvent(event) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            _ref2$left = _ref2.left,
            left = _ref2$left === void 0 ? 0 : _ref2$left,
            _ref2$top = _ref2.top,
            top = _ref2$top === void 0 ? 0 : _ref2$top,
            _ref2$width = _ref2.width,
            width = _ref2$width === void 0 ? this.width : _ref2$width,
            _ref2$height = _ref2.height,
            height = _ref2$height === void 0 ? this.height : _ref2$height;

        if (this.children.length > 0) {
          var type = event.type;
          var target = event.target;

          target.getBoundingClientRect = function () {
            return {
              left: left,
              top: top,
              width: width,
              height: height
            };
          };

          target.width = this.children[0].width;
          target.height = this.children[0].height;

          this._listeners[type].forEach(function (listener) {
            listener(event);
          });
        }
      }
    }, {
      key: "addEventListener",
      value: function addEventListener(type, listener) {
        this._listeners[type] = this._listeners[type] || [];

        this._listeners[type].push(listener);
      }
    }, {
      key: "appendChild",
      value: function appendChild(el) {
        this.children.push(el);
      }
    }, {
      key: "removeChild",
      value: function removeChild(el) {
        var idx = this.children.indexOf(el);

        if (idx >= 0) {
          this.children.splice(idx, 1);
          return el;
        }

        return null;
      }
    }, {
      key: "insertBefore",
      value: function insertBefore(el, ref) {
        if (ref == null) return this.appendChild(el);
        var idx = this.children.indexOf(ref);

        if (idx >= 0) {
          this.children.splice(idx, 0, el);
        }

        return null;
      }
    }, {
      key: "replaceChild",
      value: function replaceChild(el, ref) {
        var idx = this.children.indexOf(ref);

        if (idx >= 0) {
          this.children.splice(idx, 1, el);
          return el;
        }

        return null;
      }
    }, {
      key: "clientWidth",
      get: function get() {
        return this.width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return this.height;
      }
    }]);
    return Container;
  }();

  var CanvasWrap =
  /*#__PURE__*/
  function () {
    function CanvasWrap(width, height, ctx) {
      (0, _classCallCheck2.default)(this, CanvasWrap);
      this._ctx = ctx;
      this.width = width;
      this.height = height;
      ctx.canvas = this; // ctx.canvas = ctx._context.canvas;
    }

    (0, _createClass2.default)(CanvasWrap, [{
      key: "getContext",
      value: function getContext() {
        return this._ctx;
      }
    }, {
      key: "draw",
      value: function draw(reserve) {
        this._ctx.draw(reserve);
      }
    }, {
      key: "width",
      get: function get() {
        return this._width;
      },
      set: function set(value) {
        this._width = value; // this._ctx._context.canvas.width = value;
      }
    }, {
      key: "height",
      get: function get() {
        return this._height;
      },
      set: function set(value) {
        this._height = value; // this._ctx._context.canvas.height = value;
      }
    }, {
      key: "contextType",
      get: function get() {
        return '2d';
      }
    }]);
    return CanvasWrap;
  }();

  function createCanvas(width, height) {
    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    // const offscreen = options.offscreen !== false;
    // if (offscreen && wx.createOffscreenCanvas) {
    //   const offscreenCanvas = wx.createOffscreenCanvas(width, height);
    //   return offscreenCanvas;
    // }
    if (!options.id) return null;
    var context = wx.createCanvasContext(options.id, options.extra);
    var canvas = new CanvasWrap(width, height, context);
    return canvas;
  }

  ENV.Container = Container;
  ENV.createCanvas = createCanvas;
  var textContext = null;

  ENV.createText = function (text, _ref3) {
    var font = _ref3.font,
        fillColor = _ref3.fillColor,
        strokeColor = _ref3.strokeColor,
        strokeWidth = _ref3.strokeWidth,
        parseFont = _ref3.parseFont;
    if (!textContext) textContext = wx.createCanvasContext('textCanvas');
    textContext.save();
    textContext.font = font;

    var _textContext$measureT = textContext.measureText(text),
        width = _textContext$measureT.width;

    var fontInfo = parseFont(font);
    var height = Math.max(fontInfo.pxLineHeight, fontInfo.pxHeight * 1.13);

    if (/italic|oblique/.test(font)) {
      width += height * Math.tan(15 * Math.PI / 180);
    }

    return {
      image: {
        font: font,
        fillColor: fillColor,
        strokeColor: strokeColor,
        text: text
      },
      rect: [0, 0, width, height]
    };
  };
}