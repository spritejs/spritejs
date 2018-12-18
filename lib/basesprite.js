"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _basesprite = _interopRequireDefault(require("sprite-core/src/core/basesprite"));

var _resource = _interopRequireDefault(require("./resource"));

var _loadBgImagePassport = Symbol('loadBgImagePassport');

_basesprite.default.prototype.loadBgImage = function (val) {
  var _this = this;

  var res;

  if (val.id) {
    res = _resource.default.loadTexture({
      id: val.id
    });
  } else if (val.src) {
    res = _resource.default.loadTexture(val.src);
  }

  if (res instanceof Promise) {
    var passport = Symbol('passport');
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

var _default = _basesprite.default;
exports.default = _default;