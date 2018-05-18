'use strict';

function exec(code) {
  var script = document.createElement('script');
  script.innerHTML = code;
  document.body.appendChild(script);
}

function makeOutput(logger) {
  var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';

  var output = window.parent.document.getElementById('output');
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    output.innerHTML += '<div class="' + level + '">&gt; ' + args.map(function (arg) {
      try {
        return typeof arg === 'string' ? arg : JSON.stringify(arg);
      } catch (ex) {
        return arg;
      }
    }).join(' ') + '</div>';

    output.scrollTop = output.scrollHeight;

    return logger.apply(undefined, args);
  };
}

/* eslint-disable no-console */
console.log = makeOutput(console.log);
console.warn = makeOutput(console.warn, 'warn');
console.error = makeOutput(console.error, 'error');
/* eslint-enable no-console */

window.exec = exec;

window.top.codeChange();