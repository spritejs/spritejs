import {_debugger, setDebugToolsObserver, removeDebugToolsObserver} from './devtools';

export function createCanvas(width = 300, height = 150) {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  return canvas;
}

export function loadImage(src) {
  const img = document.createElement('img');
  if(typeof src === 'string' && !/^data:image\/(.*);base64/.test(src)) {
    // base64 dont need crossOrigin - fix early webkit cross domain bug
    img.crossOrigin = 'anonymous';
  }

  const promise = new Promise((resolve) => {
    img.addEventListener('load', () => {
      resolve(img);
    });
  });
  img.src = src;
  return promise;
}

export function getContainer(container) {
  if(typeof container === 'string') {
    container = document.querySelector(container);
  }
  if(!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}

export {_debugger, setDebugToolsObserver, removeDebugToolsObserver};

export function shim() {
  // CustomEvent polyfill https://developer.mozilla.org/zh-CN/docs/Web/API/CustomEvent/CustomEvent
  try {
    // a : While a window.CustomEvent object exists, it cannot be called as a constructor.
    // b : There is no window.CustomEvent object
    new window.CustomEvent('T');
  } catch (e) {
    const CustomEvent = function (event, params) {
      params = params || {bubbles: false, cancelable: false, detail: undefined};

      const evt = document.createEvent('CustomEvent');

      evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);

      return evt;
    };

    CustomEvent.prototype = window.Event.prototype;

    window.CustomEvent = CustomEvent;
  }
}
