'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _get2 = require('babel-runtime/helpers/get');

var _get3 = _interopRequireDefault(_get2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _class, _temp;

var _basesprite = require('./basesprite');

var _basesprite2 = _interopRequireDefault(_basesprite);

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

var _filters = require('./filters');

var _filters2 = _interopRequireDefault(_filters);

var _utils = require('./utils');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _texturesCache = (0, _symbol2.default)('_texturesCache');

function getTextureSize(attr, textures) {
  var subject = attr.subject;

  // adaptive textures
  var promises = textures.map(function (texture) {
    return _resource2.default.loadTexture(texture);
  });
  _promise2.default.all(promises).then(function (textures) {
    var width = 0,
        height = 0;
    textures.forEach(function (_ref) {
      var img = _ref.img,
          texture = _ref.texture;

      var w = void 0,
          h = void 0;
      if (texture && texture.rect) {
        w = texture.rect[2] + texture.rect[0];
        h = texture.rect[3] + texture.rect[1];
      } else if (texture && texture.srcRect) {
        w = texture.srcRect[2];
        h = texture.srcRect[3];
      } else {
        w = img.width;
        h = img.height;
      }
      if (width < w) {
        width = w;
      }
      if (height < h) {
        height = h;
      }
    });

    var _attr$texturesSize = (0, _slicedToArray3.default)(attr.texturesSize, 2),
        ow = _attr$texturesSize[0],
        oh = _attr$texturesSize[1];

    attr.set('texturesSize', [width, height]);

    // Asynchronously loaded new texture
    if (ow !== width || oh !== height) {
      subject.forceUpdate(true);
    }
  });
}

var TextureAttr = function (_BaseSprite$Attr) {
  (0, _inherits3.default)(TextureAttr, _BaseSprite$Attr);

  function TextureAttr() {
    (0, _classCallCheck3.default)(this, TextureAttr);
    return (0, _possibleConstructorReturn3.default)(this, (TextureAttr.__proto__ || (0, _getPrototypeOf2.default)(TextureAttr)).apply(this, arguments));
  }

  (0, _createClass3.default)(TextureAttr, [{
    key: 'textures',

    /*
      {
        src: ...,   //texture path
        srcRect: ...,  //texture clip
        rect: ....,  //texture in sprite offset
        filter: ...  //texture filters
      }
     */
    set: function set(textures) {
      if (!Array.isArray(textures)) {
        textures = [textures];
      }

      textures = textures.map(function (texture) {
        if (typeof texture === 'string') {
          texture = { src: texture };
        } else if (texture instanceof _basesprite2.default) {
          texture = { src: texture };
        }

        return texture;
      });

      var _size = (0, _slicedToArray3.default)(this.size, 2),
          width = _size[0],
          height = _size[1];

      if (width === '' || height === '') {
        getTextureSize(this, textures);
      }

      this.set('textures', textures);
    },
    get: function get() {
      return this.get('textures');
    }
  }, {
    key: 'texturesSize',
    get: function get() {
      return this.get('texturesSize') || [0, 0];
    }
  }]);
  return TextureAttr;
}(_basesprite2.default.Attr);

var Sprite = (_temp = _class = function (_BaseSprite) {
  (0, _inherits3.default)(Sprite, _BaseSprite);

  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){
       }
    })
   */
  function Sprite(textures) {
    var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : { attr: {} };
    var AttrModel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : TextureAttr;
    (0, _classCallCheck3.default)(this, Sprite);

    if (typeof textures === 'string') {
      textures = [textures];
    } else if (textures && !Array.isArray(textures)) {
      opts = textures;
      textures = opts.textures;
    }
    var attr = opts.attr;
    delete opts.attr;

    var _this2 = (0, _possibleConstructorReturn3.default)(this, (Sprite.__proto__ || (0, _getPrototypeOf2.default)(Sprite)).call(this, opts, AttrModel));

    _this2[_texturesCache] = new _map2.default();
    if (textures) {
      _this2.textures = textures;
    }
    if (attr) {
      _this2.attr(attr);
    }
    return _this2;
  }

  (0, _createClass3.default)(Sprite, [{
    key: 'pointCollision',
    value: function pointCollision(evt) {
      var _this3 = this;

      if ((0, _get3.default)(Sprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(Sprite.prototype), 'pointCollision', this).call(this, evt)) {
        var textures = this.textures;

        if (textures) {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;

          evt.targetTextures = [];

          var _attr = this.attr('anchor'),
              _attr2 = (0, _slicedToArray3.default)(_attr, 2),
              anchorX = _attr2[0],
              anchorY = _attr2[1],
              _contentSize = (0, _slicedToArray3.default)(this.contentSize, 2),
              width = _contentSize[0],
              height = _contentSize[1];

          offsetX += width * anchorX;
          offsetY += height * anchorY;

          textures.forEach(function (texture) {
            var _ref2 = texture.rect || [0, 0].concat((0, _toConsumableArray3.default)(_this3.innerSize)),
                _ref3 = (0, _slicedToArray3.default)(_ref2, 4),
                x = _ref3[0],
                y = _ref3[1],
                w = _ref3[2],
                h = _ref3[3];

            if (offsetX >= x && offsetX - x < w && offsetY >= y && offsetY - y < h) {
              // touched textures
              evt.targetTextures.push(texture);
            }
          });
        }
        return true;
      }
    }
  }, {
    key: 'render',
    value: function () {
      var _ref4 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(t, drawingContext) {
        var _this4 = this;

        var context, textures, attr, borderWidth, promises, texturesWithImg;
        return _regenerator2.default.wrap(function _callee$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                context = void 0;
                textures = this.textures;

                if (!textures) {
                  _context5.next = 12;
                  break;
                }

                attr = this.attr(), borderWidth = attr.border[0];

                // load textures

                promises = textures.map(function (texture) {
                  return _resource2.default.loadTexture(texture);
                });
                _context5.next = 7;
                return _promise2.default.all(promises);

              case 7:
                texturesWithImg = _context5.sent;


                context = (0, _get3.default)(Sprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(Sprite.prototype), 'render', this).call(this, t, drawingContext);

                texturesWithImg.forEach(function (_ref5) {
                  var texture = _ref5.texture,
                      img = _ref5.img,
                      sprite = _ref5.sprite;

                  var rect = (texture.rect || [0, 0].concat((0, _toConsumableArray3.default)(_this4.innerSize))).slice(0);
                  var srcRect = texture.srcRect;

                  rect[0] += borderWidth;
                  rect[1] += borderWidth;

                  context.save();

                  var bound = [0, 0];

                  if (img instanceof _basesprite2.default) {
                    var _context;

                    var transform = img.transform.m,
                        pos = img.attr('pos');

                    bound = img.originRect;

                    context.translate(pos[0], pos[1]);
                    (_context = context).transform.apply(_context, (0, _toConsumableArray3.default)(transform));
                    context.globalAlpha = img.attr('opacity');

                    img = img.context.canvas;
                  }

                  if (texture.filter) {
                    var _context2;

                    var imgCanvas = (0, _crossPlatform.createCanvas)();
                    var imgContext = imgCanvas.getContext('2d');

                    var outterRect = void 0;
                    var imgRect = srcRect ? [0, 0, srcRect[2], srcRect[3]] : [0, 0, img.width, img.height];

                    if (texture.filter.dropShadow) {
                      var dsArr = texture.filter.dropShadow;
                      var shadowRect = [Math.round(dsArr[0] - 2 * dsArr[2]), Math.round(dsArr[1] - 2 * dsArr[2]), imgRect[2] + 4 * dsArr[2], imgRect[3] + 4 * dsArr[2]];

                      outterRect = (0, _utils.boxToRect)((0, _utils.boxUnion)((0, _utils.rectToBox)(shadowRect), (0, _utils.rectToBox)(imgRect))).map(function (val) {
                        return Math.abs(val);
                      });
                    } else {
                      outterRect = imgRect;
                    }
                    imgCanvas.width = outterRect[2];
                    imgCanvas.height = outterRect[3];

                    imgContext.filter = _filters2.default.compile(texture.filter);

                    if (srcRect) {
                      imgContext.drawImage.apply(imgContext, [img].concat((0, _toConsumableArray3.default)(srcRect), [bound[0] + outterRect[0], bound[1] + outterRect[1], srcRect[2], srcRect[3]]));
                    } else {
                      imgContext.drawImage(img, bound[0] + outterRect[0], bound[1] + outterRect[1], img.width, img.height);
                    }
                    (_context2 = context).drawImage.apply(_context2, [imgCanvas].concat((0, _toConsumableArray3.default)(rect)));
                  } else if (srcRect) {
                    var _context3;

                    (_context3 = context).drawImage.apply(_context3, [img].concat((0, _toConsumableArray3.default)(srcRect), [bound[0] + rect[0], bound[1] + rect[1], rect[2], rect[3]]));
                  } else {
                    var _context4;

                    (_context4 = context).drawImage.apply(_context4, [img].concat([bound[0] + rect[0], bound[1] + rect[1], rect[2], rect[3]]));
                  }

                  context.restore();
                });
                _context5.next = 13;
                break;

              case 12:
                context = (0, _get3.default)(Sprite.prototype.__proto__ || (0, _getPrototypeOf2.default)(Sprite.prototype), 'render', this).call(this, t, drawingContext);

              case 13:
                return _context5.abrupt('return', context);

              case 14:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee, this);
      }));

      function render(_x3, _x4) {
        return _ref4.apply(this, arguments);
      }

      return render;
    }()
  }, {
    key: 'textures',
    set: function set(textures) {
      this.attr('textures', textures);
    },
    get: function get() {
      return this.attr('textures');
    }

    // override to adapt textures' size

  }, {
    key: 'contentSize',
    get: function get() {
      var _attr3 = this.attr('size'),
          _attr4 = (0, _slicedToArray3.default)(_attr3, 2),
          width = _attr4[0],
          height = _attr4[1];

      var boxSize = this.attr('texturesSize');

      if (width === '') {
        width = boxSize[0] | 0;
      }
      if (height === '') {
        height = boxSize[1] | 0;
      }

      return [width, height];
    }
  }, {
    key: 'cache',
    set: function set(context) {
      if (context == null) {
        this[_texturesCache].clear();
        return;
      }
      var key = (0, _stringify2.default)(this.textures),
          cacheMap = this[_texturesCache];

      if (!cacheMap.has(key)) {
        cacheMap.set(key, context);
      }
    },
    get: function get() {
      var key = (0, _stringify2.default)(this.textures),
          cacheMap = this[_texturesCache];
      if (cacheMap.has(key)) {
        return cacheMap.get(key);
      }
      return null;
    }
  }]);
  return Sprite;
}(_basesprite2.default), _class.Attr = TextureAttr, _temp);
exports.default = Sprite;