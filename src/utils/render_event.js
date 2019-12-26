export default function applyRenderEvent(target, mesh) {
  if(!mesh) return;
  const beforeRenderHandlers = target.getListeners('beforerender');
  const afterRenderHandlers = target.getListeners('afterrender');

  if(beforeRenderHandlers.length && !mesh.beforeRender) {
    mesh.beforeRender = (context) => {
      target.dispatchEvent({
        type: 'beforerender',
        detail: {context},
      });
    };
  } else if(!beforeRenderHandlers.length) {
    mesh.beforeRender = null;
  }

  if(afterRenderHandlers.length && !mesh.afterRender) {
    mesh.afterRender = (context) => {
      target.dispatchEvent({
        type: 'afterrender',
        detail: {context},
      });
    };
  } else if(!afterRenderHandlers.length) {
    mesh.afterRender = null;
  }
}