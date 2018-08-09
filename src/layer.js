import {Layer, createNode} from 'sprite-core';
import {createCanvas} from './platform';

const _resolution = Symbol('resolution');

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
      autoRender = true} = opts;

    context = context || createCanvas().getContext('2d');
    const canvas = context.canvas;
    canvas.dataset.layerId = id;
    canvas.style.position = 'absolute';

    super({context, handleEvent, evaluateFPS, renderMode, autoRender});

    if(resolution) {
      this.resolution = resolution;
    } else {
      this[_resolution] = [this.canvas.width, this.canvas.height, 0, 0];
    }
  }

  get id() {
    return this.canvas.dataset.layerId;
  }

  get resolution() {
    return this[_resolution];
  }

  get viewport() {
    const canvas = this.canvas;
    if(canvas && canvas.clientWidth) {
      return [canvas.clientWidth, canvas.clientHeight];
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

  set resolution(resolution) {
    const [width, height, offsetLeft, offsetTop] = resolution;
    const outputCanvas = this.outputContext.canvas;
    outputCanvas.width = width;
    outputCanvas.height = height;
    this.outputContext.clearRect(0, 0, width, height);

    if(offsetLeft || offsetTop) {
      this.outputContext.translate(offsetLeft, offsetTop);
    }

    this.children.forEach((child) => {
      delete child.lastRenderBox;
      child.forceUpdate();
    });

    this[_resolution] = resolution;
    this.dispatchEvent('resolutionChange', {target: this}, true, true);
  }

  clearContext(context = this.outputContext) {
    if(context.canvas) {
      const resolution = this.resolution,
        offsetTop = resolution[3],
        offsetLeft = resolution[2];

      context.clearRect(-offsetLeft, -offsetTop, context.canvas.width, context.canvas.height);
    }
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

  async takeSnapshot() {
    await this.prepareRender();
    const snapshotCanvas = this.canvas.cloneNode(true),
      context = snapshotCanvas.getContext('2d');

    context.drawImage(this.canvas, 0, 0);
    const children = this.children.map(child => child.serialize());
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

    for(let i = 0; i < this.children.length; i++) {
      const child = this.children[i];
      child.dispatchEvent(
        'update',
        {
          target: child, context: child.context, renderBox: child.renderBox, lastRenderBox: child.lastRenderBox,
        },
        true
      );

      child.lastRenderBox = child.renderBox;
    }

    return this.children;
  }

  get zIndex() {
    return this.canvas.style.zIndex;
  }

  set zIndex(zIndex) {
    this.canvas.style.zIndex = zIndex;
  }
}

export default ExLayer;
