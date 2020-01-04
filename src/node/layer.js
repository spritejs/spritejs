import {Renderer, ENV} from '@mesh.js/core';
import {Timeline} from 'sprite-animator';
import {requestAnimationFrame, cancelAnimationFrame} from '../utils/animation-frame';
import Group from './group';
import ownerDocument from '../document';

const defaultOptions = {
  antialias: true,
  autoRender: true,
};

const _autoRender = Symbol('autoRender');
const _renderer = Symbol('renderer');
const _timeline = Symbol('timeline');

const _prepareRender = Symbol('prepareRender');

export default class Layer extends Group {
  constructor(options = {}) {
    super();
    if(!options.canvas) {
      const {width, height} = this.getResolution();
      const canvas = ENV.createCanvas(width, height, {
        offscreen: !!options.offscreen,
        id: options.id,
        extra: options.extra,
      });
      if(canvas.style) canvas.style.position = 'absolute';
      if(canvas.dataset) canvas.dataset.layerId = options.id;
      if(canvas.contextType) options.contextType = canvas.contextType;
      options.canvas = canvas;
    }
    const canvas = options.canvas;
    const opts = Object.assign({}, defaultOptions, options);
    this[_autoRender] = opts.autoRender;
    delete options.autoRender;
    const _Renderer = opts.Renderer || Renderer;
    this[_renderer] = new _Renderer(canvas, opts);
    if(canvas.__gl__) {
      // fix blendFunc for node-canvas-webgl
      const gl = canvas.__gl__;
      gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
    }
    this.options = options;
    this.id = options.id;
    this.setResolution(canvas);
    this.canvas = canvas;
    this[_timeline] = new Timeline();
    this.__mouseCapturedTarget = null;
  }

  get autoRender() {
    return this[_autoRender];
  }

  get displayRatio() {
    if(this.parent && this.parent.options) {
      return this.parent.options.displayRatio;
    }
    return 1.0;
  }

  get height() {
    const {height} = this.getResolution();
    return height / this.displayRatio;
  }

  /* override */
  get layer() {
    return this;
  }

  get offscreen() {
    return !!this.options.offscreen || this.canvas._offscreen;
  }

  get prepareRender() {
    return this[_prepareRender] ? this[_prepareRender] : Promise.resolve();
  }

  /* override */
  get renderer() {
    return this[_renderer];
  }

  get renderOffset() {
    if(this.parent && this.parent.options) {
      const {left, top} = this.parent.options;
      return [left, top];
    }
    return [this.options.left | 0, this.options.top | 0];
  }

  get timeline() {
    return this[_timeline];
  }

  get width() {
    const {width} = this.getResolution();
    return width / this.displayRatio;
  }

  // isPointCollision(x, y) {
  //   return true;
  // }

  /* override */
  dispatchPointerEvent(event) {
    const type = event.type;
    if(type === 'mousedown' || type === 'mouseup' || type === 'mousemove') {
      const capturedTarget = this.__mouseCapturedTarget;
      if(capturedTarget) {
        if(capturedTarget.layer === this) {
          capturedTarget.dispatchEvent(event);
          return true;
        }
        this.__mouseCapturedTarget = null;
      }
    }
    return super.dispatchPointerEvent(event);
  }

  /* override */
  forceUpdate() {
    if(!this[_prepareRender]) {
      if(this.parent && this.parent.hasOffscreenCanvas) {
        this.parent.forceUpdate();
        let _resolve = null;
        const prepareRender = new Promise((resolve) => {
          _resolve = resolve;
        });
        prepareRender._resolve = _resolve;
        this[_prepareRender] = prepareRender;
      } else {
        let _resolve = null;
        let _requestID = null;
        const prepareRender = new Promise((resolve) => {
          _resolve = resolve;

          if(this[_autoRender]) {
            _requestID = requestAnimationFrame(() => {
              delete prepareRender._requestID;
              this.render();
            });
          }
        });

        prepareRender._resolve = _resolve;
        prepareRender._requestID = _requestID;

        this[_prepareRender] = prepareRender;
      }
    }
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'zIndex') {
      this.canvas.style.zIndex = newValue;
    }
  }

  render({clear = true} = {}) {
    if(clear) this[_renderer].clear();
    const meshes = this.draw();
    if(meshes && meshes.length) {
      this.renderer.drawMeshes(meshes);
      if(this.canvas.draw) this.canvas.draw();
    }
    if(this[_prepareRender]) {
      if(this[_prepareRender]._requestID) {
        cancelAnimationFrame(this[_prepareRender]._requestID);
      }
      this[_prepareRender]._resolve();
      delete this[_prepareRender];
    }
  }

  /* override */
  setResolution({width, height}) {
    const renderer = this.renderer;
    const m = renderer.globalTransformMatrix;
    const offsetLeft = m[4];
    const offsetTop = m[5];
    const previousDisplayRatio = m[0];
    const {width: w, height: h} = this.getResolution();
    if(w !== width || h !== height) {
      super.setResolution({width, height});
      if(this.canvas) {
        this.canvas.width = width;
        this.canvas.height = height;
      }
      if(renderer.glRenderer) {
        renderer.glRenderer.gl.viewport(0, 0, width, height);
      }
      this.attributes.size = [width, height];
      this.dispatchEvent({type: 'resolutionchange', width, height});
    }
    const [left, top] = this.renderOffset;
    const displayRatio = this.displayRatio;
    if(offsetLeft !== left || offsetTop !== top || previousDisplayRatio !== displayRatio) {
      // console.log(displayRatio, this.parent);
      renderer.setGlobalTransform(displayRatio, 0, 0, displayRatio, left, top);
      this.forceUpdate();
    }
  }

  toGlobalPos(x, y) {
    const {width, height} = this.getResolution();
    const offset = this.renderOffset;
    const viewport = [this.canvas.clientWidth, this.canvas.clientHeight];

    x = x * viewport[0] / width + offset[0];
    y = y * viewport[1] / height + offset[1];

    const displayRatio = this.displayRatio;

    return [x * displayRatio, y * displayRatio];
  }

  toLocalPos(x, y) {
    const {width, height} = this.getResolution();
    const offset = this.renderOffset;
    const viewport = [this.canvas.clientWidth, this.canvas.clientHeight];
    x = x * width / viewport[0] - offset[0];
    y = y * height / viewport[1] - offset[1];

    const displayRatio = this.displayRatio;

    return [x / displayRatio, y / displayRatio];
  }
}

ownerDocument.registerNode(Layer, 'layer');