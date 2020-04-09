"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyRenderEvent;

require("gl-matrix").glMatrix.setMatrixArrayType(Array);

function applyRenderEvent(target, mesh) {
  if (!mesh) return;
  var beforeRenderHandlers = target.getListeners('beforerender');
  var afterRenderHandlers = target.getListeners('afterrender');

  if (beforeRenderHandlers.length && !mesh.beforeRender) {
    mesh.beforeRender = function (context) {
      target.dispatchEvent({
        type: 'beforerender',
        detail: {
          context: context
        }
      });
    };
  } else if (!beforeRenderHandlers.length) {
    mesh.beforeRender = null;
  }

  if (afterRenderHandlers.length && !mesh.afterRender) {
    mesh.afterRender = function (context) {
      target.dispatchEvent({
        type: 'afterrender',
        detail: {
          context: context
        }
      });
    };
  } else if (!afterRenderHandlers.length) {
    mesh.afterRender = null;
  }
}