"use strict";

(function () {
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

  function handleExternalScript() {
    var container, scripts, i, script;
    return regeneratorRuntime.async(function handleExternalScript$(_context) {
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
            return regeneratorRuntime.awrap(loadScript(script));

          case 8:
            i++;
            _context.next = 3;
            break;

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  var install = function install(hook) {
    hook.doneEach(handleExternalScript);
  };

  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
})();