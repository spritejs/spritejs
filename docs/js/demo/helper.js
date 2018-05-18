"use strict";

window.helpers = function () {
  function showPerformance(layer) {
    setInterval(function () {
      console.log(layer.fps);
    }, 1000);
  }
  return {
    showPerformance: showPerformance
  };
}();