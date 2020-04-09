"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _sprite = _interopRequireDefault(require("./sprite"));

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

var getAttribute = Symbol.for('spritejs_getAttribute');
var setAttribute = Symbol.for('spritejs_setAttribute');
var setDefault = Symbol.for('spritejs_setAttributeDefault');

var SpriteSvg =
/*#__PURE__*/
function (_Sprite) {
  (0, _inherits2.default)(SpriteSvg, _Sprite);

  function SpriteSvg(subject) {
    var _this;

    (0, _classCallCheck2.default)(this, SpriteSvg);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(SpriteSvg).call(this, subject));

    _this[setDefault]({
      passEvents: false,
      flexible: false
    });

    return _this;
  } // readonly


  (0, _createClass2.default)(SpriteSvg, [{
    key: "texture",
    get: function get() {
      return this[getAttribute]('texture');
    },
    set: function set(value) {} // eslint-disable-line no-empty-function

  }, {
    key: "passEvents",
    get: function get() {
      return this[getAttribute]('passEvents');
    },
    set: function set(value) {
      return this[setAttribute]('passEvents', value);
    }
  }, {
    key: "flexible",
    get: function get() {
      return this[getAttribute]('flexible');
    },
    set: function set(value) {
      return this[setAttribute]('flexible', value);
    }
  }]);
  return SpriteSvg;
}(_sprite.default);

exports.default = SpriteSvg;