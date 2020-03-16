// polyfill for node-canvas
import EventEmitter from 'events';
import {createCanvas, loadImage} from 'node-canvas-webgl';

export function polyfill({ENV}) {
  ENV.createCanvas = createCanvas;
  const imageCache = {};
  ENV.loadImage = function (src, {alias}) {
    if(imageCache[src]) return imageCache[src];
    return loadImage(src).then((img) => {
      imageCache[src] = img;
      if(alias) imageCache[alias] = img;
      return img;
    });
  };
  ENV.Container = class extends EventEmitter {
    constructor(width = 800, height = 600) {
      super();
      this.children = [];
      this.clientWidth = width;
      this.clientHeight = height;
    }

    get childNodes() {
      return this.children;
    }

    appendChild(node) {
      if(node.parent) node.parent.removeChild(node);
      node.parent = this;
      this.children.push(node);
    }

    removeChild(node) {
      const idx = this.children.indexOf(node);
      if(idx !== -1) {
        this.children.splice(idx, 1);
        node.parent = null;
      }
      return node;
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
  };
}