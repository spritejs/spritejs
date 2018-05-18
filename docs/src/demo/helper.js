window.helpers = (function () {
  function showPerformance(layer) {
    setInterval(() => {
      console.log(layer.fps)
    }, 1000)
  }
  return {
    showPerformance,
  }
}())
