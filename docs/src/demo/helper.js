window.helpers = (function () {
  function showPerformance(layer) {
    setInterval(() => {
      // TODO: showFPS
      // console.log(layer.fps)
    }, 1000);
  }
  function loadScript(url) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    document.body.appendChild(script);

    return new Promise((resolve) => {
      script.onload = () => {
        resolve();
      };
    });
  }

  return {
    showPerformance,
    loadScript,
  };
}());
