import {Layer, createNode} from 'sprite-core';
import {createCanvas} from './platform';

const _resolution = Symbol('resolution');
const _attrs = Symbol('attrs');
const _displayRatio = Symbol('displayRatio');

class ExLayer extends Layer {
  constructor(id, opts = {}) {
    if(typeof id === 'object') {
      opts = id;
      id = opts.id || `id_${Math.random().toString().slice(2, 10)}`;
    }
    let {context,
      resolution,
      handleEvent = true,
      evaluateFPS = false,
      renderMode = 'repaintAll',
      autoRender = true,
      useDocumentCSS = false} = opts;

    context = context || createCanvas().getContext('2d');
    const canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';

    super({context, handleEvent, evaluateFPS, renderMode, autoRender, useDocumentCSS});

    if(resolution) {
      this.resolution = resolution;
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0];
    }

    this[_attrs] = new Set(['renderMode', 'autoRender', 'evaluateFps', 'handleEvent', 'displayRatio']);
  }

  get id() {
    return this.canvas.dataset.layerId;
  }

  setAttribute(name, value) {
    if(this[_attrs].has(name)) {
      this[name] = value;
    } else {
      super.setAttribute(name, value);
    }
  }

  getAttribute(name) {
    if(this[_attrs].has(name)) {
      return this[name];
    }
    return super.getAttribute(name);
  }

  removeAttribute(name) {
    if(this[_attrs].has(name)) {
      this[name] = null;
    } else {
      super.removeAttribute(name);
    }
  }

  get resolution() {
    return this[_resolution];
  }

  get viewport() {
    const canvas = this.canvas;
    if(canvas) {
      if(canvas.getBoundingClientRect) {
        const {width, height} = canvas.getBoundingClientRect();
        if(width > 0) {
          return [width, height];
        }
      }
      if(canvas.clientWidth) return [canvas.clientWidth, canvas.clientHeight];
    }
    if(this.parent) {
      return this.parent.layerViewport;
    }
    const [width, height] = this[_resolution];
    return [width, height];
  }

  get offset() {
    return [this.resolution[2], this.resolution[3]];
  }

  get center() {
    const [width, height] = this.resolution;
    return [width / 2, height / 2];
  }

  pointCollision(evt) {
    if(this.outputContext.canvas) {
      let layerX = evt.layerX | 0,
        layerY = evt.layerY | 0;
      const [width, height, offsetLeft, offsetTop] = this.resolution;
      layerX += offsetLeft;
      layerY += offsetTop;

      if(layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
        return true;
      }
      return false;
    }
    /* istanbul ignore next  */
    return true;
  }

  setDisplayRatio(ratio, maxDisplayRatio = Infinity, updateDisplay = true) {
    if(typeof ratio === 'string') {
      if(ratio.endsWith('rw')) {
        ratio = parseFloat(ratio);
      } else if(ratio.endsWith('vw')) {
        ratio = parseFloat(ratio) * this.viewport[0] / this.resolution[0];
      } else if(ratio === 'auto') {
        if(typeof window !== 'undefined' && window.devicePixelRatio) {
          ratio = window.devicePixelRatio * this.viewport[0] / this.resolution[0];
        } else {
          ratio = this.viewport[0] / this.resolution[0];
        }
      } else {
        ratio = parseFloat(ratio);
      }
    }
    if(Number.isFinite(ratio)) {
      ratio = Math.min(ratio, maxDisplayRatio);
    } else {
      ratio = 1;
    }
    this[_displayRatio] = ratio;
    if(updateDisplay) this.updateDisplay();
    this.dispatchEvent('ratioChange', {target: this}, true, true);
  }

  get displayRatio() {
    return this[_displayRatio];
  }

  updateDisplay() {
    const ratio = this[_displayRatio];
    const resolution = this[_resolution];

    const [width, height, offsetLeft, offsetTop] = resolution.map(r => r * ratio);
    const outputCanvas = this.outputContext.canvas;
    outputCanvas.width = width;
    outputCanvas.height = height;
    // this.outputContext.clearRect(0, 0, width, height);

    if(offsetLeft || offsetTop) {
      this.outputContext.translate(offsetLeft, offsetTop);
    }

    this.beforeDrawTransform = () => {
      this.outputContext.scale(ratio, ratio);
    };

    this.childNodes.forEach((child) => {
      delete child.lastRenderBox;
      child.forceUpdate();
    });
  }

  set resolution(resolution) {
    this[_resolution] = resolution;
    if(this[_displayRatio] == null) {
      this.setDisplayRatio(this.parent.displayRatio, this.parent.maxDisplayRatio, false);
    }
    this.updateDisplay();
    this.dispatchEvent('resolutionChange', {target: this}, true, true);
  }

  toLocalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport;

    x = x * resolution[0] / viewport[0] - resolution[2];
    y = y * resolution[1] / viewport[1] - resolution[3];

    return [x, y];
  }

  toGlobalPos(x, y) {
    const resolution = this.resolution,
      viewport = this.viewport;

    x = x * viewport[0] / resolution[0] + resolution[2];
    y = y * viewport[1] / resolution[1] + resolution[3];

    return [x, y];
  }

  clearContext(context = this.outputContext) {
    if(context.canvas) {
      const {width, height} = context.canvas;
      const resolution = this.resolution;
      context.clearRect(-(resolution[2] | 0), -(resolution[3] | 0), width, height);
    }
  }

  async takeSnapshot() {
    await this.prepareRender();
    const snapshotCanvas = this.canvas.cloneNode(true),
      context = snapshotCanvas.getContext('2d');

    context.drawImage(this.canvas, 0, 0);
    const children = this.childNodes.map(child => child.serialize());
    return {context, children};
  }

  putSnapshot(snapshot) {
    const outputContext = this.outputContext;

    this.clearContext(outputContext);
    outputContext.drawImage(snapshot.context.canvas, 0, 0);

    this.clearUpdate();

    snapshot.children.forEach((child) => {
      const node = createNode(child.nodeType);
      if(child.id) {
        node.id = child.id;
      }
      node.attr(JSON.parse(child.attrs));
      this.appendChild(node, false);
    });

    for(let i = 0; i < this.childNodes.length; i++) {
      const child = this.childNodes[i];
      child.dispatchEvent(
        'update',
        {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox,
        },
        true
      );

      child.lastRenderBox = child.renderBox;
    }

    return this.childNodes;
  }

  get zIndex() {
    return this.attr('zIndex');
  }

  set zIndex(zIndex) {
    this.attr('zIndex', zIndex);
    this.canvas.style.zIndex = zIndex;
    this.parent.layers.reverse();
  }
}

export default ExLayer;
