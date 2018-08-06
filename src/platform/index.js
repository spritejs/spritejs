const fs = require('fs');
const axios = require('axios');

let nodeCanvas = null;
try {
  nodeCanvas = require('canvas');
} catch (ex) {
  /* istanbul ignore next  */
  throw new Error('Node runtime require node-canvas. please follow https://github.com/Automattic/node-canvas to install node-canvas@2.x');
}

export function createCanvas(width = 300, height = 150) {
  const _createCanvas = nodeCanvas.createCanvas;
  const canvas = _createCanvas(width, height);
  canvas.style = {};
  canvas.dataset = {};

  canvas.cloneNode = function () {
    return createCanvas(this.width, this.height);
  };

  return canvas;
}

export function loadImage(src) {
  const Image = nodeCanvas.Image;
  const img = new Image();
  const base64Pattern = /^data:image\/\w+;base64,/;

  const promise = new Promise((resolve) => {
    img.onload = function () {
      Object.defineProperty(img, 'src', {
        get() {
          return src;
        },
      });
      resolve(img);
    };
  });

  if(typeof src === 'string') {
    if(base64Pattern.test(src)) {
      const base64Data = src.replace(base64Pattern, '');
      img.src = Buffer.from(base64Data, 'base64');
    } else if(/^https?:\/\//.test(src)) {
      axios.get(src, {responseType: 'arraybuffer'}).then(({data}) => {
        img.src = data;
      });
    } else {
      fs.readFile(src, (err, squid) => {
        /* istanbul ignore if  */
        if(err) {
          throw err;
        } else {
          img.src = squid;
        }
      });
    }
  } else {
    img.src = src;
  }

  return promise;
}

const EventEmitter = require('events');
class Container extends EventEmitter {
  constructor(id) {
    super();
    this.id = id;
    this.children = [];
    this.clientWidth = 800;
    this.clientHeight = 600;
  }

  appendChild(node) {
    if(node.remove) {
      node.remove();
    }
    this.children.push(node);
    node.remove = () => {
      const idx = this.children.indexOf(node);
      if(idx !== -1) {
        this.children.splice(idx, 1);
      }
    };
  }

  insertBefore(node, next) {
    const idx = this.children.indexOf(next);
    if(idx === -1) {
      throw new Error('ERR: no such element');
    } else {
      const _idx = this.children.indexOf(node);
      if(_idx >= 0) {
        this.children.splice(_idx, 1);
      }
      this.children.splice(idx, 0, node);
    }
  }

  dispatchEvent(evt) {
    evt.target = this;
    return this.emit(evt.type, evt);
  }

  addEventListener(type, handler) {
    return this.addListener(type, handler);
  }

  removeEventListener(type, handler) {
    if(handler) {
      return this.removeListener(type, handler);
    }
    return this.removeAllListeners(type);
  }
}

export function getContainer(container) {
  if(typeof container === 'string') {
    container = new Container(container);
  }
  if(!container) {
    throw new Error('Container is not defined or cannot found.');
  }
  return container;
}

export const _debugger = null;
export const setDebugToolsObserver = null;
export const removeDebugToolsObserver = null;

export function shim() {
  global.IS_NODE_ENV = true;

  global.requestAnimationFrame = (fn) => {
    return setTimeout(() => {
      const [s, ns] = process.hrtime();
      const t = s * 1e3 + ns * 1e-6;
      fn(t);
    }, 16);
  };
  global.cancelAnimationFrame = (id) => {
    return clearTimeout(id);
  };

  class CustomEvent {
    constructor(type, evt = {}) {
      this.type = type;
      Object.assign(this, evt);
    }
  }

  global.CustomEvent = CustomEvent;
}
