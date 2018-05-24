'use strict';

window.helpers = function () {
  function showPerformance(layer) {
    setInterval(function () {
      // TODO: showFPS
      // console.log(layer.fps)
    }, 1000);
  }
  function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);

    return new Promise(function (resolve) {
      script.onload = function () {
        resolve();
      };
    });
  }

  return {
    showPerformance: showPerformance,
    loadScript: loadScript
  };
}();