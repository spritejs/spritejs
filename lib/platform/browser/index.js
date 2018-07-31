'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeDebugToolsObserver = exports.setDebugToolsObserver = exports._debugger = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

exports.createCanvas = createCanvas;
exports.loadImage = loadImage;
exports.getContainer = getContainer;
exports.shim = shim;

var _devtools = require('./devtools');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;

  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

function loadImage(src) {
  var img = document.createElement('img');
  if (typeof src === 'string' && !/^data:image\/(.*);base64/.test(src)) {
    // base64 dont need crossOrigin - fix early webkit cross domain bug
    img.crossOrigin = 'anonymous';
  }

  var promise = new _promise2.default(function (resolve) {
    img.addEventListener('load', function () {
      resolve(img);
    });
  });
  img.src = src;
  return promise;
}

function getContainer(container) {
  if (typeof container === 'string') {
    container = document.querySelector(container);
  }
  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}

exports._debugger = _devtools._debugger;
exports.setDebugToolsObserver = _devtools.setDebugToolsObserver;
exports.removeDebugToolsObserver = _devtools.removeDebugToolsObserver;
function shim() {
  // CustomEvent polyfill https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch (e) {
    var CustomEvent = function CustomEvent(event, params) {
      params = params || { bubbles: false, cancelable: false, detail: undefined };

      var evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }
}