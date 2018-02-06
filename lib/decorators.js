'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.attr = attr;
exports.deprecate = deprecate;
exports.readonly = readonly;
exports.parseValue = parseValue;
exports.memoize = memoize;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var deepEqual = require('deep-equal');

/**
  attr
  attr('repaint')
 */
function attr() {
  var repaint = void 0;

  function decorator(target, prop, descriptor) {
    descriptor.enumerable = true;

    var setter = descriptor.set,
        getter = descriptor.get;

    descriptor.set = function (val) {
      var subject = this.subject || this,
          oldVal = this.get(prop);

      if (val === null) {
        this.remove(prop);
      } else {
        setter.call(this, val);
      }

      var newVal = this.get(prop);

      if (!deepEqual(newVal, oldVal)) {
        if (repaint === 'repaint') {
          subject.cache = null;
        }

        subject.forceUpdate();
      }

      if (subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, newVal, oldVal, this);
      }
    };

    return descriptor;
  }

  if (arguments.length === 1) {
    repaint = arguments.length <= 0 ? undefined : arguments[0];
    return decorator;
  }
  return decorator.apply(undefined, arguments);
}

function deprecate() {
  for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var msg = '';
  function decorator(target, prop, descriptor) {
    var defaultMsg = target.constructor.name + '#' + prop + ' has been deprecated.';
    if (typeof descriptor.value === 'function') {
      var func = descriptor.value;
      descriptor.value = function () {
        console.warn(defaultMsg, msg);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return func.apply(this, args);
      };
    }
    if (descriptor.set) {
      var setter = descriptor.set;
      descriptor.set = function (val) {
        console.warn(defaultMsg, msg);
        return setter.call(this, val);
      };
    }
    if (descriptor.get) {
      var getter = descriptor.get;
      descriptor.get = function () {
        console.warn(defaultMsg, msg);
        return getter.call(this);
      };
    }
  }
  if (args.length === 1) {
    msg = args[0];
    return decorator;
  }
  return decorator.apply(undefined, args);
}

function readonly(target, prop, descriptor) {
  descriptor.enumerable = true;
}

function parseValue() {
  for (var _len3 = arguments.length, parsers = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
    parsers[_key3] = arguments[_key3];
  }

  return function (target, prop, descriptor) {
    var setter = descriptor.set;

    descriptor.set = function (val) {
      val = parsers.reduce(function (v, parser) {
        return parser(v);
      }, val);

      setter.call(this, val);
    };

    return descriptor;
  };
}

// export function defaultValue(val){
//   return function(target, prop, descriptor){
//     const getter = descriptor.get

//     descriptor.get = function () {
//       const ret = getter.call(this)
//       return ret != null ? ret : val
//     }

//     return descriptor
//   }
// }

// functional decorators

function memoize(fn) {
  var serializer = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _stringify2.default;

  var cache = {};
  return function () {
    for (var _len4 = arguments.length, args = Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    var key = serializer(args);
    if (!(key in cache)) {
      cache[key] = fn.apply(this, args);
    }

    return cache[key];
  };
}