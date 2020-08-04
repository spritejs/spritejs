"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polyfill = polyfill;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

/* globals GameGlobal, wx */
function polyfill(_ref) {
  var ENV = _ref.ENV;
  var firstCanvas = wx.createCanvas();
  var getFirstCanvas = false;
  var width = firstCanvas.width,
      height = firstCanvas.height;

  ENV.createCanvas = function () {
    if (!getFirstCanvas) {
      getFirstCanvas = true;
      return firstCanvas;
    }

    var canvas = wx.createCanvas();
    canvas._offscreen = true;
    return canvas;
  };

  GameGlobal.Image = function () {
    return wx.createImage();
  };

  function wrap(type, event) {
    event.type = type;
    event.target = {
      getBoundingClientRect: function getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: width,
          height: height
        };
      },
      width: width,
      height: height
    };
    return event;
  }

  var Container = /*#__PURE__*/function () {
    function Container() {
      (0, _classCallCheck2.default)(this, Container);
      this.children = [];
    }

    (0, _createClass2.default)(Container, [{
      key: "addEventListener",
      value: function addEventListener(type, listener) {
        if (type === 'touchstart') {
          wx.onTouchStart(function (e) {
            listener(wrap('touchstart', e));
          });
        }

        if (type === 'touchmove') {
          wx.onTouchMove(function (e) {
            listener(wrap('touchmove', e));
          });
        }

        if (type === 'touchend') {
          wx.onTouchEnd(function (e) {
            listener(wrap('touchend', e));
          });
        }

        if (type === 'touchcancel') {
          wx.onTouchCancel(function (e) {
            listener(wrap('touchcancel', e));
          });
        }
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
        return width;
      }
    }, {
      key: "clientHeight",
      get: function get() {
        return height;
      }
    }]);
    return Container;
  }();

  ENV.Container = Container;
}