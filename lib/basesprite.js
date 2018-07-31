'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _spriteCore = require('sprite-core');

var _resource = require('./resource');

var _resource2 = _interopRequireDefault(_resource);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _loadBgImagePassport = (0, _symbol2.default)('loadBgImagePassport');

var passport = void 0;

_spriteCore.BaseSprite.prototype.loadBgImage = function (val) {
  var _this = this;

  var res = void 0;
  if (val.id) {
    res = _resource2.default.loadTexture({ id: val.id });
  } else if (val.src) {
    res = _resource2.default.loadTexture(val.src);
  }
  if (res instanceof _promise2.default) {
    passport = (0, _symbol2.default)('passport');
    this[_loadBgImagePassport] = passport;
    res.then(function (_ref) {
      var img = _ref.img,
          texture = _ref.texture;

      if (passport === _this[_loadBgImagePassport]) {
        var bgimage = _this.attr('bgimage');
        bgimage.image = img;
        _this.attr('bgimage', null);
        _this.attr('bgimage', bgimage);
      }
    });
  } else if (res) {
    val.image = res.img;
  }

  return val;
};

exports.default = _spriteCore.BaseSprite;