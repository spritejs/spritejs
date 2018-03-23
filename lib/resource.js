'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _nodetype = require('./nodetype');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var axios = require('axios');

var loadedResources = new _map2.default();

var Resource = {
  loadTexture: function loadTexture(texture) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 30000;

    if (typeof texture === 'string' || texture instanceof _basesprite2.default || texture.tagName === 'CANVAS') {
      texture = { src: texture };
    }
    if (typeof texture.src !== 'string' && texture.src.id == null) {
      texture.src.id = 'texture' + Math.random();
    }
    if (texture.src && texture.src.id) {
      texture.id = texture.src.id;
    }

    var mapKey = texture.id || texture.src;
    if (!loadedResources.has(mapKey)) {
      return new _promise2.default(function (resolve, reject) {
        if (typeof texture.src !== 'string') {
          // support sprites as textures
          var node = texture.src;
          if (node.tagName === 'CANVAS') {
            resolve({ img: node, texture: texture });
            loadedResources.set(mapKey, node);
          } else {
            if (!(node instanceof _basesprite2.default)) {
              node = (0, _nodetype.createNode)(node.nodeType, node.attrs);
              node.id = texture.id;
            }
            var bound = node.originRect;
            _promise2.default.resolve(node.render(0, (0, _crossPlatform.createCanvas)(bound[2], bound[3]).getContext('2d'))).then(function (context) {
              resolve({ img: node, texture: texture });
              loadedResources.set(mapKey, node);
            });
            texture.src = node.serialize();
          }
        } else {
          var timer = setTimeout(function () {
            reject(new Error('load img timeout'));
          }, timeout);

          (0, _crossPlatform.loadImage)(texture.src).then(function (img) {
            var width = img.width,
                height = img.height;

            var canvas = (0, _crossPlatform.createCanvas)(width, height);
            var ctx = canvas.getContext('2d');
            var imgRect = void 0;

            if (imgRect) {
              ctx.drawImage(img, imgRect[0], imgRect[1], width, height);
            } else {
              ctx.drawImage(img, 0, 0);
            }
            resolve({ img: canvas, texture: texture });
            loadedResources.set(mapKey, canvas);
            clearTimeout(timer);
          });
        }
      });
    }
    return _promise2.default.resolve({
      img: loadedResources.get(mapKey),
      texture: texture
    });
  },

  /**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  loadFrames: function () {
    var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(src, frameData) {
      var texture, frames;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!(typeof frameData === 'string')) {
                _context.next = 5;
                break;
              }

              _context.next = 3;
              return axios.get(frameData);

            case 3:
              frameData = _context.sent;

              frameData = frameData.data;

            case 5:
              _context.next = 7;
              return this.loadTexture(src);

            case 7:
              texture = _context.sent;
              frames = frameData.frames;


              (0, _entries2.default)(frames).forEach(function (_ref2) {
                var _ref3 = (0, _slicedToArray3.default)(_ref2, 2),
                    key = _ref3[0],
                    frame = _ref3[1];

                var _frame$sourceSize = frame.sourceSize,
                    w = _frame$sourceSize.w,
                    h = _frame$sourceSize.h;


                var canvas = (0, _crossPlatform.createCanvas)(w, h),
                    srcRect = frame.frame,
                    rect = frame.spriteSourceSize,
                    context = canvas.getContext('2d');

                var rotated = frame.rotated;

                context.save();

                if (rotated) {
                  context.translate(0, h);
                  context.rotate(-0.5 * Math.PI);

                  var tmp = rect.y;
                  rect.y = rect.x;
                  rect.x = h - srcRect.h - tmp;

                  context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.h, srcRect.w, rect.x, rect.y, rect.h, rect.w);
                } else {
                  context.drawImage(texture.img, srcRect.x, srcRect.y, srcRect.w, srcRect.h, rect.x, rect.y, rect.w, rect.h);
                }

                context.restore();

                loadedResources.set(key, canvas);
              });

              return _context.abrupt('return', texture);

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function loadFrames(_x2, _x3) {
      return _ref.apply(this, arguments);
    }

    return loadFrames;
  }()
};

exports.default = Resource;