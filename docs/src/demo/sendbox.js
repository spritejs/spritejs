function exec(code) {
  const script = document.createElement('script');
  script.innerHTML = code;
  document.body.appendChild(script);
}

function makeOutput(logger, level = 'info') {
  const output = window.parent.document.getElementById('output');
  return (...args) => {
    output.innerHTML += `<div class="${level}">&gt; ${args.map((arg) => {
      try {
        return typeof arg === 'string' ? arg : JSON.stringify(arg);
      } catch (ex) {
        return arg;
      }
    }).join(' ')}</div>`;

    output.scrollTop = output.scrollHeight;

    return logger(...args);
  };
}

/* eslint-disable no-console */
console.log = makeOutput(console.log);
console.warn = makeOutput(console.warn, 'warn');
console.error = makeOutput(console.error, 'error');
/* eslint-enable no-console */

window.exec = exec;

window.top.codeChange();
