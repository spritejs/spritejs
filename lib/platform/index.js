"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createCanvas = createCanvas;
exports.loadImage = loadImage;
exports.getContainer = getContainer;
exports.shim = shim;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var fs = require('fs');

var axios = require('axios');

var nodeCanvas = null;

try {
  nodeCanvas = require('canvas');
} catch (ex) {
  /* istanbul ignore next  */
  throw new Error('Node runtime require node-canvas. please follow https://github.com/Automattic/node-canvas to install node-canvas@2.x');
}

function createCanvas() {
  var width = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 300;
  var height = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 150;
  var _createCanvas = nodeCanvas.createCanvas;

  var canvas = _createCanvas(width, height);

  canvas.style = {};
  canvas.dataset = {};

  canvas.cloneNode = function () {
    return createCanvas(this.width, this.height);
  };

  return canvas;
}

function loadImage(src) {
  var Image = nodeCanvas.Image;
  var img = new Image();
  var base64Pattern = /^data:image\/\w+;base64,/;
  var promise = new Promise(function (resolve) {
    img.onload = function () {
      Object.defineProperty(img, 'src', {
        get: function get() {
          return src;
        }
      });
      resolve(img);
    };
  });

  if (typeof src === 'string') {
    if (base64Pattern.test(src)) {
      var base64Data = src.replace(base64Pattern, '');
      img.src = Buffer.from(base64Data, 'base64');
    } else if (/^https?:\/\//.test(src)) {
      axios.get(src, {
        responseType: 'arraybuffer'
      }).then(function (_ref) {
        var data = _ref.data;
        img.src = data;
      });
    } else {
      fs.readFile(src, function (err, squid) {
        /* istanbul ignore if  */
        if (err) {
          throw err;
        } else {
          img.src = squid;
        }
      });
    }
  } else {
    img.src = src;
  }

  return promise;
}

var EventEmitter = require('events');

var Container =
/*#__PURE__*/
function (_EventEmitter) {
  (0, _inherits2.default)(Container, _EventEmitter);

  function Container(id) {
    var _this;

    (0, _classCallCheck2.default)(this, Container);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Container).call(this));
    _this.id = id;
    _this.children = [];
    _this.clientWidth = 800;
    _this.clientHeight = 600;
    _this.attrs = {};
    return _this;
  }

  (0, _createClass2.default)(Container, [{
    key: "appendChild",
    value: function appendChild(node) {
      var _this2 = this;

      if (node.remove) {
        node.remove();
      }

      this.children.push(node);

      node.remove = function () {
        var idx = _this2.children.indexOf(node);

        if (idx !== -1) {
          _this2.children.splice(idx, 1);
        }
      };
    }
  }, {
    key: "removeChild",
    value: function removeChild(node) {
      var idx = this.children.indexOf(node);

      if (idx >= 0) {
        return this.children.splice(idx, 1)[0];
      }

      return null;
    }
  }, {
    key: "insertBefore",
    value: function insertBefore(node, next) {
      var idx = this.children.indexOf(next);

      if (idx === -1) {
        throw new Error('ERR: no such element');
      } else {
        var _idx = this.children.indexOf(node);

        if (_idx >= 0) {
          this.children.splice(_idx, 1);
        }

        this.children.splice(idx, 0, node);
      }
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(evt) {
      evt.target = this;
      return this.emit(evt.type, evt);
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(type, handler) {
      return this.addListener(type, handler);
    }
  }, {
    key: "removeEventListener",
    value: function removeEventListener(type, handler) {
      if (handler) {
        return this.removeListener(type, handler);
      }

      return this.removeAllListeners(type);
    }
  }, {
    key: "setAttribute",
    value: function setAttribute(name, value) {
      this.attrs[name] = value;
    }
  }, {
    key: "getAttribute",
    value: function getAttribute(name) {
      return this.attrs[name] != null ? this.attrs[name] : null;
    }
  }, {
    key: "removeAttribute",
    value: function removeAttribute(name) {
      this.attrs[name] = null;
    }
  }, {
    key: "childNodes",
    get: function get() {
      return this.children;
    }
  }]);
  return Container;
}(EventEmitter);

function getContainer(container) {
  if (typeof container === 'string') {
    container = new Container(container);
  }

  if (!container) {
    throw new Error('Container is not defined or cannot found.');
  }

  return container;
}

function shim() {
  global.IS_NODE_ENV = true;

  global.requestAnimationFrame = function (fn) {
    return setTimeout(function () {
      var _process$hrtime = process.hrtime(),
          _process$hrtime2 = (0, _slicedToArray2.default)(_process$hrtime, 2),
          s = _process$hrtime2[0],
          ns = _process$hrtime2[1];

      var t = s * 1e3 + ns * 1e-6;
      fn(t);
    }, 16);
  };

  global.cancelAnimationFrame = function (id) {
    return clearTimeout(id);
  };

  var CustomEvent = function CustomEvent(type) {
    var evt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    (0, _classCallCheck2.default)(this, CustomEvent);
    this.type = type;
    Object.assign(this, evt);
  };

  global.CustomEvent = CustomEvent;
}