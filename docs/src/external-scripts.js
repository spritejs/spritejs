(function () {
  function loadScript(script) {
    const newScript = document.createElement('script');

    Array.prototype.slice.call(script.attributes).forEach((attribute) => {
      newScript[attribute.name] = attribute.value;
    });
    const ret = new Promise((resolve) => {
      newScript.onload = function () {
        resolve(script);
      };
    });
    script.parentNode.insertBefore(newScript, script);
    script.parentNode.removeChild(script);
    return ret;
  }
  async function handleExternalScript() {
    const container = Docsify.dom.getNode('#main');
    const scripts = Docsify.dom.findAll(container, 'script');

    /* eslint-disable no-await-in-loop */
    for(let i = 0; i < scripts.length; i++) {
      const script = scripts[i];

      if(script && script.src) {
        await loadScript(script);
      }
    }
    /* eslint-enable no-await-in-loop */
  }

  const install = function (hook) {
    hook.doneEach(handleExternalScript);
  };

  window.$docsify.plugins = [].concat(install, window.$docsify.plugins);
}());