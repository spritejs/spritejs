import {ENV} from '@mesh.js/core';

const _inited = Symbol('inited');

let LayerWorker = null; // eslint-disable-line import/no-mutable-exports

if(typeof Worker === 'function') {
  LayerWorker = class extends Worker {
    constructor(options) {
      if(options.worker === true) {
        options.worker = `./${options.id}.worker.js`;
      }
      super(options.worker);
      this.options = options;

      if(!options.canvas) {
        const {width, height} = this.getResolution();
        const canvas = ENV.createCanvas(width, height, {offscreen: false});
        if(canvas.style) canvas.style.position = 'absolute';
        if(canvas.dataset) canvas.dataset.layerId = options.id;
        options.canvas = canvas;
      }

      this.canvas = options.canvas;
    }

    get id() {
      return this.options.id;
    }

    setResolution({width, height}) {
      if(!this[_inited]) {
        this.canvas.width = width;
        this.canvas.height = height;

        const options = this.options;

        const offscreenCanvas = options.canvas.transferControlToOffscreen();
        const opts = {...options};
        delete opts.container;
        opts.canvas = offscreenCanvas;

        this.postMessage({
          type: 'create',
          options: opts,
        }, [offscreenCanvas]);

        this[_inited] = true;
      } else {
        this.postMessage({
          type: 'resolution_change',
          width,
          height,
        });
        // throw new Error('Cannot change resolution of layer-worker.');
      }
    }

    getResolution() {
      if(this.canvas) {
        const {width, height} = this.canvas;
        return {width, height};
      }
      return {width: 300, height: 150};
    }

    remove() {
      if(this.parent && this.parent.removeChild) {
        this.parent.removeChild(this);
        return true;
      }
      return false;
    }

    connect(parent, zOrder) {
      Object.defineProperty(this, 'parent', {
        value: parent,
        writable: false,
        configurable: true,
      });
      Object.defineProperty(this, 'zOrder', {
        value: zOrder,
        writable: false,
        configurable: true,
      });
    }

    disconnect() {
      delete this.parent;
      delete this.zOrder;
    }

    dispatchPointerEvent(event) {
      this.postMessage({
        type: 'event',
        event: {
          cancelBubble: event.cancelBubble,
          bubbles: event.bubbles,
          detail: event.detail,
          identifier: event.identifier,
          layerX: event.layerX,
          layerY: event.layerY,
          originalX: event.originalX,
          originalY: event.originalY,
          type: event.type,
          x: event.x,
          y: event.y,
        },
      });
    }
  };
}

export default LayerWorker;