'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getOwnPropertyDescriptor = require('babel-runtime/core-js/object/get-own-property-descriptor');

var _getOwnPropertyDescriptor2 = _interopRequireDefault(_getOwnPropertyDescriptor);

var _toConsumableArray2 = require('babel-runtime/helpers/toConsumableArray');

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _entries = require('babel-runtime/core-js/object/entries');

var _entries2 = _interopRequireDefault(_entries);

var _slicedToArray2 = require('babel-runtime/helpers/slicedToArray');

var _slicedToArray3 = _interopRequireDefault(_slicedToArray2);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _assign = require('babel-runtime/core-js/object/assign');

var _assign2 = _interopRequireDefault(_assign);

var _map = require('babel-runtime/core-js/map');

var _map2 = _interopRequireDefault(_map);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _symbol = require('babel-runtime/core-js/symbol');

var _symbol2 = _interopRequireDefault(_symbol);

var _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _desc, _value, _class;

var _decorators = require('./decorators');

var _math = require('./math');

var _utils = require('./utils');

var _crossPlatform = require('./cross-platform');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
  var desc = {};
  Object['ke' + 'ys'](descriptor).forEach(function (key) {
    desc[key] = descriptor[key];
  });
  desc.enumerable = !!desc.enumerable;
  desc.configurable = !!desc.configurable;

  if ('value' in desc || desc.initializer) {
    desc.writable = true;
  }

  desc = decorators.slice().reverse().reduce(function (desc, decorator) {
    return decorator(target, property, desc) || desc;
  }, desc);

  if (context && desc.initializer !== void 0) {
    desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
    desc.initializer = undefined;
  }

  if (desc.initializer === void 0) {
    Object['define' + 'Property'](target, property, desc);
    desc = null;
  }

  return desc;
}

var _attr = (0, _symbol2.default)('attr'),
    _temp = (0, _symbol2.default)('store'),
    _subject = (0, _symbol2.default)('subject'),
    _default = (0, _symbol2.default)('default');

var SpriteAttr = (_dec = (0, _decorators.parseValue)(_utils.parseStringFloat, _utils.oneOrTwoValues), _dec2 = (0, _decorators.parseValue)(_utils.parseStringInt), _dec3 = (0, _decorators.parseValue)(_utils.parseColorString), _dec4 = (0, _decorators.parseValue)(_utils.parseStringInt), _dec5 = (0, _decorators.parseValue)(_utils.parseStringInt, _utils.fourValuesShortCut), _dec6 = (0, _decorators.parseValue)(_utils.parseStringTransform), (_class = function () {
  function SpriteAttr(subject) {
    (0, _classCallCheck3.default)(this, SpriteAttr);

    this[_subject] = subject;
    this[_default] = {};
    this[_attr] = {};
    this.setDefault({
      anchor: [0, 0],
      x: 0,
      y: 0,
      opacity: 1,
      width: '',
      height: '',
      bgcolor: '',
      rotate: 0,
      scale: [1, 1],
      translate: [0, 0],
      skew: [0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      transformStr: 'matrix(1,0,0,1,0,0)',
      border: [0, 'rgba(0,0,0,0)'],
      borderRadius: 0,
      padding: [0, 0, 0, 0],
      zIndex: 0,
      offsetRotate: 'auto',
      linearGradients: {},
      offsetDistance: 0
    });
    this[_temp] = new _map2.default(); // save non-serialized values
  }

  (0, _createClass3.default)(SpriteAttr, [{
    key: 'setDefault',
    value: function setDefault(attrs) {
      (0, _assign2.default)(this[_default], attrs);
      (0, _assign2.default)(this[_attr], attrs);
    }
  }, {
    key: 'getAttrState',
    value: function getAttrState() {
      return this[_attr];
    }
  }, {
    key: 'saveObj',
    value: function saveObj(key, val) {
      this[_temp].set(key, val);
    }
  }, {
    key: 'loadObj',
    value: function loadObj(key) {
      return this[_temp].get(key);
    }
  }, {
    key: 'quietSet',
    value: function quietSet(key, val) {
      this[_attr][key] = val;
    }
  }, {
    key: 'set',
    value: function set(key, val) {
      if (val == null) {
        val = this[_default][key];
      }
      this.quietSet(key, val);
      this.forceUpdate();
    }
  }, {
    key: 'get',
    value: function get(key) {
      return this[_attr][key];
    }
  }, {
    key: 'clearCache',
    value: function clearCache() {
      if (this.subject) {
        this.subject.cache = null;
      }
      return this;
    }
  }, {
    key: 'forceUpdate',
    value: function forceUpdate(clearCache) {
      if (this.subject) {
        this.subject.forceUpdate(clearCache);
      }
      return this;
    }
  }, {
    key: 'merge',
    value: function merge(attrs) {
      if (typeof attrs === 'string') {
        attrs = JSON.parse(attrs);
      }

      (0, _assign2.default)(this[_attr], attrs);

      return this;
    }
  }, {
    key: 'serialize',
    value: function serialize() {
      return (0, _stringify2.default)(this[_attr]);
    }
  }, {
    key: 'resetOffset',
    value: function resetOffset() {
      var offsetPath = this.get('offsetPath');
      var dis = this.offsetDistance;

      if (offsetPath) {
        var pathObj = this.loadObj('offsetPath');
        if (pathObj) {
          offsetPath = pathObj;
        } else {
          offsetPath = (0, _crossPlatform.createPath)(offsetPath);
          this.saveObj('offsetPath', offsetPath);
        }
      }

      if (offsetPath != null) {
        var len = dis * offsetPath.getTotalLength(),
            _offsetPath$getPointA = offsetPath.getPointAtLength(len),
            x = _offsetPath$getPointA.x,
            y = _offsetPath$getPointA.y;


        var angle = this.offsetRotate;
        if (angle === 'auto' || angle === 'reverse') {
          var delta = offsetPath.getPointAtLength(angle === 'auto' ? len + 1 : len - 1);
          var x1 = delta.x,
              y1 = delta.y;

          if (x1 === x && y1 === y) {
            // last point
            angle = this.get('offsetAngle');
          } else {
            angle = 180 * Math.atan2(y1 - y, x1 - x) / Math.PI;
          }

          if (this.offsetRotate === 'reverse') {
            angle = -angle;
          }
        }

        var offsetAngle = this.get('offsetAngle');

        if (offsetAngle) {
          this.rotate -= offsetAngle;
        }

        this.set('offsetAngle', angle);
        this.rotate += angle;

        var offsetPoint = this.get('offsetPoint');
        if (offsetPoint) {
          this.pos = [this.x - offsetPoint[0], this.y - offsetPoint[1]];
        }

        this.set('offsetPoint', [x, y]);
        this.pos = [this.x + x, this.y + y];
      }
    }
  }, {
    key: 'attrs',
    get: function get() {
      return this[_attr];
    }
  }, {
    key: 'subject',
    get: function get() {
      return this[_subject];
    }
  }, {
    key: 'id',
    set: function set(val) {
      return this.saveObj('id', String(val));
    },
    get: function get() {
      return this.loadObj('id');
    }
  }, {
    key: 'name',
    set: function set(val) {
      return this.quietSet('name', String(val));
    },
    get: function get() {
      return this.get('name');
    }
  }, {
    key: 'anchor',
    set: function set(val) {
      this.set('anchor', val);
    },
    get: function get() {
      return this.get('anchor');
    }
  }, {
    key: 'x',
    set: function set(val) {
      this.set('x', Math.round(val));
    },
    get: function get() {
      return this.get('x');
    }
  }, {
    key: 'y',
    set: function set(val) {
      this.set('y', Math.round(val));
    },
    get: function get() {
      return this.get('y');
    }
  }, {
    key: 'pos',
    set: function set(val) {
      if (val == null) {
        val = [0, 0];
      }

      var _val = val,
          _val2 = (0, _slicedToArray3.default)(_val, 2),
          x = _val2[0],
          y = _val2[1];

      this.x = x;
      this.y = y;
    },
    get: function get() {
      return [this.x, this.y];
    }
  }, {
    key: 'bgcolor',
    set: function set(val) {
      this.clearCache();
      this.set('bgcolor', val);
    },
    get: function get() {
      return this.get('bgcolor');
    }
  }, {
    key: 'opacity',
    set: function set(val) {
      this.set('opacity', val);
    },
    get: function get() {
      return this.get('opacity');
    }
  }, {
    key: 'width',
    set: function set(val) {
      this.clearCache();
      this.set('width', Math.round(val));
    },
    get: function get() {
      return this.get('width');
    }
  }, {
    key: 'height',
    set: function set(val) {
      this.clearCache();
      this.set('height', Math.round(val));
    },
    get: function get() {
      return this.get('height');
    }
  }, {
    key: 'size',
    set: function set(val) {
      if (val == null) {
        val = ['', ''];
      }

      var _val3 = val,
          _val4 = (0, _slicedToArray3.default)(_val3, 2),
          width = _val4[0],
          height = _val4[1];

      this.width = width;
      this.height = height;
    },
    get: function get() {
      return [this.width, this.height];
    }
  }, {
    key: 'border',
    set: function set(val) {
      this.clearCache();

      var _val5 = (0, _slicedToArray3.default)(val, 2),
          width = _val5[0],
          color = _val5[1];

      this.set('border', [width, (0, _utils.parseColorString)(color)]);
    },
    get: function get() {
      return this.get('border');
    }
  }, {
    key: 'padding',
    set: function set(val) {
      this.clearCache();
      this.set('padding', val);
    },
    get: function get() {
      return this.get('padding');
    }
  }, {
    key: 'borderRadius',
    set: function set(val) {
      this.clearCache();
      this.set('borderRadius', val);
    },
    get: function get() {
      return this.get('borderRadius');
    }

    // transform attributes

  }, {
    key: 'transform',
    set: function set(val) {
      var _this = this;

      /*
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0],
        matrix: [1,0,0,1,0,0],
       */
      this.merge({
        rotate: 0,
        scale: [1, 1],
        translate: [0, 0],
        skew: [0, 0]
      });

      if (Array.isArray(val)) {
        this.set('transform', val);
        this.set('transformStr', 'matrix(' + val + ')');
      } else {
        this.set('transform', [1, 0, 0, 1, 0, 0]);
        var transformStr = [];

        (0, _entries2.default)(val).forEach(function (_ref) {
          var _ref2 = (0, _slicedToArray3.default)(_ref, 2),
              key = _ref2[0],
              value = _ref2[1];

          if (key === 'matrix' && Array.isArray(value)) {
            _this.set('transform', new _math.Matrix(value).m);
          } else {
            _this[key] = value;
          }
          transformStr.push(key + '(' + value + ')');
        });

        this.set('transformStr', transformStr.join(' '));
      }
    },
    get: function get() {
      return this.get('transformStr');
    }
  }, {
    key: 'rotate',
    set: function set(val) {
      var delta = this.get('rotate') - val;
      this.set('rotate', val);
      var transform = new _math.Matrix(this.get('transform')).rotate(-delta);
      this.set('transform', transform.m);
    },
    get: function get() {
      return this.get('rotate');
    }
  }, {
    key: 'scale',
    set: function set(val) {
      val = (0, _utils.oneOrTwoValues)(val);
      var oldVal = this.get('scale');
      var delta = [val[0] / oldVal[0], val[1] / oldVal[1]];
      this.set('scale', val);

      var offsetAngle = this.get('offsetAngle');
      if (offsetAngle) {
        this.rotate -= offsetAngle;
      }

      var transform = new _math.Matrix(this.get('transform'));
      transform.scale.apply(transform, delta);
      this.set('transform', transform.m);

      if (offsetAngle) {
        this.rotate += offsetAngle;
      }
    },
    get: function get() {
      return this.get('scale');
    }
  }, {
    key: 'translate',
    set: function set(val) {
      var oldVal = this.get('translate');
      var delta = [val[0] - oldVal[0], val[1] - oldVal[1]];
      this.set('translate', val);
      var transform = new _math.Matrix(this.get('transform'));
      transform.translate.apply(transform, delta);
      this.set('transform', transform.m);
    },
    get: function get() {
      return this.get('translate');
    }
  }, {
    key: 'skew',
    set: function set(val) {
      var _ref3, _transform$multiply;

      var oldVal = this.get('skew');
      var invm = (_ref3 = new _math.Matrix()).skew.apply(_ref3, (0, _toConsumableArray3.default)(oldVal)).inverse();
      this.set('skew', val);
      var transform = new _math.Matrix(this.get('transform'));
      (_transform$multiply = transform.multiply(invm)).skew.apply(_transform$multiply, (0, _toConsumableArray3.default)(val));
      this.set('transform', transform.m);
    },
    get: function get() {
      return this.get('skew');
    }
  }, {
    key: 'zIndex',
    set: function set(val) {
      this.set('zIndex', val);
    },
    get: function get() {
      return this.get('zIndex');
    }

    /**
      linearGradients : {
        bgcolor: {
          direction: 30,  //angle，[0,360)
          rect: [x, y, w, h],
          vector: [x1, y1, x2, y2], // direction/rect or from/to
          colors: [
            {offset: 0, color: 'red'},
            {offset: 1, color: 'black'}
          ]
        }
      }
     */

  }, {
    key: 'linearGradients',
    set: function set(val) {
      this.clearCache();
      this.set('linearGradients', val);
    },
    get: function get() {
      return this.get('linearGradients');
    }
  }, {
    key: 'offsetPath',
    set: function set(val) {
      var offsetPath = (0, _crossPlatform.createPath)(val);

      this.set('offsetPath', offsetPath.getAttribute('d'));
      this.saveObj('offsetPath', offsetPath);
      this.resetOffset();
    },
    get: function get() {
      return this.get('offsetPath');
    }
  }, {
    key: 'offsetDistance',
    set: function set(val) {
      this.set('offsetDistance', val);
      this.resetOffset();
    },
    get: function get() {
      return this.get('offsetDistance');
    }
  }, {
    key: 'offsetRotate',
    set: function set(val) {
      this.set('offsetRotate', val);
      this.resetOffset();
    },
    get: function get() {
      return this.get('offsetRotate');
    }
  }]);
  return SpriteAttr;
}(), (_applyDecoratedDescriptor(_class.prototype, 'anchor', [_dec], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'anchor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'pos', [_dec2], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'pos'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'bgcolor', [_dec3], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'bgcolor'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'size', [_dec4], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'size'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'padding', [_dec5], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'padding'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'transform', [_dec6], (0, _getOwnPropertyDescriptor2.default)(_class.prototype, 'transform'), _class.prototype)), _class));
exports.default = SpriteAttr;