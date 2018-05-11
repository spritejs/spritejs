'use strict';

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

(function () {
  var handleExternalScript = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
      var container, scripts, i, script;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              container = Docsify.dom.getNode('#main');
              scripts = Docsify.dom.findAll(container, 'script');

              /* eslint-disable no-await-in-loop */

              i = 0;

            case 3:
              if (!(i < scripts.length)) {
                _context.next = 11;
                break;
              }

              script = scripts[i];

              if (!(script && script.src)) {
                _context.next = 8;
                break;
              }

              _context.next = 8;
              return loadScript(script);

            case 8:
              i++;
              _context.next = 3;
              break;

            case 11:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function handleExternalScript() {
      return _ref.apply(this, arguments);
    };
  }();

  function loadScript(script) {
    var newScript = document.createElement('script');

    Array.prototype.slice.call(script.attributes).forEach(function (attribute) {
      newScript[attribute.name] = attribute.value;
    });
    var ret = new Promise(function (resolve) {
      newScript.onload = function () {
        resolve(script);
      };
    });
    script.parentNode.insertBefore(newScript, script);
    script.parentNode.removeChild(script);
    return ret;
  }


  var install = function install(hook) {
    hook.doneEach(handleExternalScript);
  };

  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
})();