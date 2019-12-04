"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _platform = require("./platform");

var axios = require('axios');

var loadedResources = new Map();
/**
  loadTexture({
    id: 'bird1',
    src: 'http://some.path/brid1.png'
  })
 */

var Resource = {
  loadTimeout: 30000,
  loadedResources: loadedResources,
  loadTexture: function loadTexture(texture) {
    var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Resource.loadTimeout;

    if (typeof texture === 'string') {
      texture = {
        src: texture
      };
    }

    if (!texture.id) {
      texture.id = texture.src;
    }

    var mapKey = texture.id;

    if (!loadedResources.has(mapKey)) {
      var promise = new Promise(function (resolve, reject) {
        var timer = setTimeout(function () {
          reject(new Error('load img timeout'));
        }, timeout);
        (0, _platform.loadImage)(texture.src).then(function (img) {
          // save image not canvas for svg preserveAspectRatio
          resolve({
            img: img,
            texture: texture,
            fromCache: false
          });
          loadedResources.set(mapKey, img);
          clearTimeout(timer);
        });
      });
      loadedResources.set(mapKey, promise);
      return promise;
    }

    var img = loadedResources.get(mapKey);

    if (img instanceof Promise) {
      return img.then(function (res) {
        return {
          img: res.img,
          texture: texture,
          fromCache: false
        };
      });
    }

    return {
      img: img,
      texture: texture,
      fromCache: true
    };
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
  loadFrames: function loadFrames(src, frameData) {
    var texture, frames;
    return _regenerator.default.async(function loadFrames$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(typeof frameData === 'string')) {
              _context.next = 5;
              break;
            }

            _context.next = 3;
            return _regenerator.default.awrap(axios.get(frameData));

          case 3:
            frameData = _context.sent;
            frameData = frameData.data;

          case 5:
            _context.next = 7;
            return _regenerator.default.awrap(this.loadTexture(src));

          case 7:
            texture = _context.sent;
            frames = frameData.frames;
            Object.entries(frames).forEach(function (_ref) {
              var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
                  key = _ref2[0],
                  frame = _ref2[1];

              var _frame$sourceSize = frame.sourceSize,
                  w = _frame$sourceSize.w,
                  h = _frame$sourceSize.h;
              var canvas = (0, _platform.createCanvas)(w, h),
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
            return _context.abrupt("return", texture);

          case 11:
          case "end":
            return _context.stop();
        }
      }
    }, null, this);
  }
};
var _default = Resource;
exports.default = _default;