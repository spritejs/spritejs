import {stylesheet, BaseNode, utils, querySelector, querySelectorAll} from 'sprite-core';
import Layer from './layer';
import Resource from './resource';
import {createCanvas, getContainer, setDebugToolsObserver, removeDebugToolsObserver} from './platform';

const {setDeprecation, sortOrderedSprites} = utils;

const _layerMap = Symbol('layerMap'),
  _zOrder = Symbol('zOrder'),
  _layers = Symbol('layers'),
  _snapshot = Symbol('snapshot'),
  _viewport = Symbol('viewport'),
  _resolution = Symbol('resolution'),
  _resizeHandler = Symbol('resizeHandler'),
  _attrs = Symbol('attrs'),
  _events = Symbol('events'),
  _subscribe = Symbol('subscribe'),
  _displayRatio = Symbol('displayRatio');

export default class Scene extends BaseNode {
  constructor(container, options = {}) {
    super();

    container = getContainer(container);

    this.container = container;
    container.scene_ = this;

    /* istanbul ignore if */
    if(arguments.length === 3) {
      setDeprecation('Scene(container, width, height)', 'Instead use Scene(container, {viewport, resolution}).');
      /* eslint-disable prefer-rest-params */
      options = {viewport: [arguments[1], arguments[2]]};
      /* eslint-enabel prefer-rest-params */
    }

    this[_zOrder] = 0;
    this[_layerMap] = {};
    this[_layers] = [];
    this[_snapshot] = createCanvas();

    const viewport = options.viewport || ['', ''];
    this.viewport = viewport;

    // scale, width, height, top, bottom, left, right
    // width-extend, height-extend, top-extend, bottom-extend, left-extend, right-extend
    this.stickMode = options.stickMode || 'scale';
    this.stickExtend = !!options.stickExtend;
    this.stickOffset = [0, 0];
    this.resolution = options.resolution || [...this.viewport];

    this.maxDisplayRatio = options.maxDisplayRatio || Infinity;
    this.displayRatio = options.displayRatio || 1.0;

    if(options.useDocumentCSS) {
      stylesheet.fromDocumentCSS();
    }

    // d3-friendly
    this.namespaceURI = 'http://spritejs.org/scene';
    const that = this;
    Object.defineProperty(this, 'ownerDocument', {
      get() {
        return {
          createElementNS(uri, name) {
            return that.layer(name);
          },
          documentElement: typeof document !== 'undefined' ? document : null,
        };
      },
    });

    this[_events] = new Set();

    const events = ['mousedown', 'mouseup', 'mousemove',
      'touchstart', 'touchend', 'touchmove',
      'click', 'dblclick'];

    events.forEach(event => this.delegateEvent(event));

    /* istanbul ignore next */
    container.addEventListener('DOMNodeRemovedFromDocument', () => {
      if(this[_resizeHandler]) {
        window.removeEventListener('resize', this[_resizeHandler]);
        delete this[_resizeHandler];
      }
    });

    this[_attrs] = new Set(['resolution', 'viewport', 'stickMode', 'stickExtend',
      'subscribe', 'displayRatio', 'maxDisplayRatio']);
    this[_subscribe] = null;
  }

  // unit vw、rw (default 1rw ?)
  set displayRatio(value) {
    const oldRatio = this[_displayRatio];
    this[_displayRatio] = value;
    if(oldRatio != null && oldRatio !== value) {
      const layers = this[_layers];
      layers.forEach((layer) => {
        if(layer.canvas) {
          layer.setDisplayRatio(this[_displayRatio], this.maxDisplayRatio);
        }
      });
      this.dispatchEvent('ratioChange', {target: this, layers});
    }
    return this;
  }

  get displayRatio() {
    return this[_displayRatio];
  }

  get subscribe() {
    return this[_subscribe];
  }

  set subscribe(events) {
    this[_subscribe] = events;
    events.forEach(event => this.delegateEvent(event));
  }

  get width() {
    return this.viewport[0];
  }

  get height() {
    return this.viewport[1];
  }

  get children() {
    return this.childNodes.filter(layer => layer.canvas);
  }

  get childNodes() {
    return Object.values(this[_layerMap]);
  }

  get sortedChildNodes() {
    return this[_layers];
  }

  get id() {
    if(this.container) {
      return this.container.id;
    }
    return undefined;
  }

  get style() {
    return this.container.style;
  }

  setAttribute(name, value) {
    if(this[_attrs].has(name)) {
      this[name] = value;
    } else {
      this.container.setAttribute(name, value);
    }
  }

  getAttribute(name) {
    if(this[_attrs].has(name)) {
      return this[name];
    }
    return this.container.getAttribute(name);
  }

  removeAttribute(name) {
    if(this[_attrs].has(name)) {
      this[name] = null;
    } else {
      this.container.removeAttribute(name);
    }
  }

  insertBefore(newchild, refchild) {
    if(refchild == null) {
      return this.appendLayer(newchild);
    }
    if(!this.hasLayer(refchild)) {
      throw new Error('Failed to execute \'insertBefore\' on \'Node\': The node before which the new node is to be inserted is not a child of this node.');
    }
    this.appendLayer(newchild, false);
    this.container.insertBefore(newchild.canvas || newchild, refchild.canvas || refchild);
    const els = this.container.children;
    [...els].forEach((el, i) => {
      const id = el.dataset.layerId;
      if(id) {
        const layer = this.layer(id);
        delete layer.zOrder;
        Object.defineProperty(layer, 'zOrder', {
          value: i,
          writable: false,
          configurable: true,
        });
      }
    });
    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
  }

  replaceChild(newLayer, oldLayer) {
    this.insertBefore(newLayer, oldLayer);
    this.removeChild(oldLayer);
  }

  appendChild(layer) {
    return this.appendLayer(layer);
  }

  removeChild(layer) {
    return this.removeLayer(layer);
  }

  get layerViewport() {
    const [rw, rh] = this.resolution,
      [vw, vh] = this.viewport,
      stickMode = this.stickMode,
      stickExtend = this.stickExtend;

    let width = vw,
      height = vh;

    if(!stickExtend) {
      if(stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        height = vw * rh / rw;
      } else if(stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        width = vh * rw / rh;
      }
    }

    return [width, height];
  }

  updateViewport(layer) {
    const [width, height] = this.layerViewport,
      stickMode = this.stickMode,
      stickExtend = this.stickExtend;
    let layers = layer ? [layer] : this[_layers];

    layers = layers.filter((layer) => {
      const canvas = layer.canvas;
      if(!canvas) return false; // ignore not canvas layer
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      Object.assign(canvas.style, {
        top: '',
        right: '',
        bottom: '',
        left: '',
        transform: '',
      });
      if(!stickExtend && (stickMode === 'width' || stickMode === 'height')) {
        canvas.style.top = '50%';
        canvas.style.left = '50%';
        canvas.style.transform = 'translate(-50%, -50%)';
      } else if(!stickExtend && (stickMode === 'right' || stickMode === 'bottom')) {
        canvas.style.right = '0';
        canvas.style.bottom = '0';
      } else {
        canvas.style.top = '0';
        canvas.style.left = '0';
      }
      if(stickExtend) {
        layer.resolution = this.layerResolution;
      }
      return true;
    });

    this.dispatchEvent('viewportChange', {target: this, layers});
    return this;
  }

  get distortion() /* istanbul ignore next */ {
    if(this.stickMode !== 'scale') {
      return 1.0;
    }
    const [rw, rh] = this.resolution,
      [vw, vh] = this.viewport;

    const dw = rw === 'flex' ? 2 : rw / vw,
      dh = rh === 'flex' ? 2 : rh / vh;

    return dw / dh;
  }

  set viewport(viewport) {
    if(!Array.isArray(viewport)) viewport = [viewport, viewport];
    const [width, height] = viewport;
    this[_viewport] = [width, height];
    /* istanbul ignore next */
    if(width === 'auto' || height === 'auto') {
      if(!this[_resizeHandler]) {
        this[_resizeHandler] = () => {
          this.updateViewport();
          if(this.resolution[0] === 'flex' || this.resolution[1] === 'flex') {
            this.updateResolution();
          }
        };
        window.addEventListener('resize', this[_resizeHandler]);
      }
    } else if(this[_resizeHandler]) {
      window.removeEventListener('resize', this[_resizeHandler]);
      delete this[_resizeHandler];
    }
    if(this[_layers].length) {
      this.updateViewport();
    }
  }

  get viewport() {
    let [width, height] = this[_viewport];
    if(width === '' || Number.isNaN(Number(width))) {
      width = this.container.clientWidth;
    }
    if(height === '' || Number.isNaN(Number(height))) {
      height = this.container.clientHeight;
    }
    return [width, height];
  }

  get layerResolution() {
    let [rw, rh] = this.resolution;
    const [vw, vh] = this.viewport,
      stickMode = this.stickMode,
      stickExtend = this.stickExtend;

    if(rw === 'flex') {
      rw = 2 * vw;
    }
    if(rh === 'flex') {
      rh = 2 * vh;
    }

    let width = rw,
      height = rh,
      offsetTop = 0,
      offsetLeft = 0;

    if(stickExtend) {
      if(stickMode === 'width' || stickMode === 'top' || stickMode === 'bottom') {
        const vrh = rw * vh / vw;
        height = vrh;

        if(stickMode === 'width') {
          offsetTop = Math.round((vrh - rh) / 2);
        } else if(stickMode === 'bottom') {
          offsetTop = vrh - rh;
        }
      } else if(stickMode === 'height' || stickMode === 'left' || stickMode === 'right') {
        const vrw = rh * vw / vh;
        width = vrw;

        if(stickMode === 'height') {
          offsetLeft = Math.round((vrw - rw) / 2);
        } else if(stickMode === 'right') {
          offsetLeft = vrw - rw;
        }
      }
    }
    this.stickOffset = [offsetLeft, offsetTop];
    return [width, height, offsetLeft, offsetTop];
  }

  updateResolution(layer) {
    const layers = layer ? [layer] : this[_layers];

    layers.forEach((layer) => {
      if(layer.canvas) {
        layer.resolution = this.layerResolution;
      }
    });
    this.dispatchEvent('resolutionChange', {target: this, layers});
    return this;
  }

  set resolution(resolution) {
    if(!Array.isArray(resolution)) {
      resolution = [resolution, resolution];
    }
    const [width, height] = resolution;
    this[_resolution] = [width, height];
    this.updateResolution();
  }

  get resolution() {
    return this[_resolution];
  }

  setViewport(width, height) {
    this.viewport = [width, height];
    return this;
  }

  setResolution(width, height) {
    this.resolution = [width, height];
    return this;
  }

  delegateEvent(event, receiver = this.container) {
    if(typeof event === 'string') {
      event = {type: event, passive: true};
    }

    if(this[_events].has(event.type)) {
      return false;
    }

    this[_events].add(event.type);

    const {type, passive} = event;

    receiver.addEventListener(type, (e) => {
      const layers = this[_layers];
      const evtArgs = {
        originalEvent: e,
        type,
        stopDispatch() {
          this.terminated = true;
        },
      };

      // mouse event layerX, layerY value change while browser scaled.
      let originalX,
        originalY,
        x,
        y;

      /* istanbul ignore else */
      if(e instanceof CustomEvent) {
        Object.assign(evtArgs, e.detail);
        if(evtArgs.x != null && evtArgs.y != null) {
          x = evtArgs.x;
          y = evtArgs.y;
        } else if(evtArgs.originalX != null && evtArgs.originalY != null) {
          originalX = evtArgs.originalX;
          originalY = evtArgs.originalY;
        }
      } else {
        const {left, top} = e.target.getBoundingClientRect();
        const {clientX, clientY} = e.changedTouches ? e.changedTouches[0] : e;

        if(clientX != null && clientY != null) {
          originalX = Math.round((clientX | 0) - left);
          originalY = Math.round((clientY | 0) - top);
        }
      }
      // else {
      //   originalX = NaN;
      //   originalY = NaN;
      // }

      for(let i = 0; i < layers.length; i++) {
        const layer = layers[i];
        if(layer.handleEvent) {
          if(originalX != null && originalY != null) {
            [x, y] = layer.toLocalPos(originalX, originalY);
          } else if(x != null && y != null) {
            [originalX, originalY] = layer.toGlobalPos(x, y);
          }

          layer.dispatchEvent(type, Object.assign({}, evtArgs, {
            layerX: x, layerY: y, originalX, originalY, x, y,
          }));
        }
      }
    }, {passive});

    return true;
  }

  dispatchEvent(type, evt = {}) {
    const container = this.container;
    container.dispatchEvent(new CustomEvent(type, {detail: evt}));
    super.dispatchEvent(type, evt, true);
  }

  async preload(...resources) {
    const ret = [],
      tasks = [];

    for(let i = 0; i < resources.length; i++) {
      const res = resources[i];
      let task;

      if(typeof res === 'string') {
        task = Resource.loadTexture(res);
      } else if(Array.isArray(res)) {
        task = Resource.loadFrames(...res);
      } else {
        const {id, src} = res;
        task = Resource.loadTexture({id, src});
      }
      /* istanbul ignore if  */
      if(!(task instanceof Promise)) {
        task = Promise.resolve(task);
      }

      tasks.push(task.then((r) => {
        ret.push(r);
        this.dispatchEvent('preload', {
          target: this, current: r, loaded: ret, resources,
        });
      }));
    }

    await Promise.all(tasks);
    return ret;
  }

  layer(id = 'default', opts = {handleEvent: true}) {
    if(!this.hasLayer(id)) {
      /* istanbul ignore if  */
      if(typeof window !== 'undefined' && window.getComputedStyle) {
        const pos = window.getComputedStyle && window.getComputedStyle(this.container).position;

        if(this.container.style && (pos !== 'absolute' && pos !== 'fixed')) {
          this.container.style.position = 'relative';
        }
      }
      this.appendLayer(new Layer(id, opts));
    }

    return this[_layerMap][id];
  }

  get layers() {
    return this[_layers];
  }

  appendLayer(layer, appendDOMElement = true) {
    if(!(layer instanceof Layer)) {
      // append dom element
      layer.id = layer.id || `_layer${Math.random()}`;
      if(!layer.dataset) {
        layer.dataset = {};
      }
      layer.dataset.layerId = layer.id;
      layer.connect = (parent, zOrder) => {
        layer.parent = parent;
        Object.defineProperty(layer, 'zOrder', {
          value: zOrder,
          writable: false,
          configurable: true,
        });
      };
      layer.disconnect = (parent) => {
        delete layer.zOrder;
      };
    }
    const id = layer.id;

    if(this.hasLayer(id) && this[_layerMap][id] !== layer) {
      throw new Error(`layer ${id} already exists! remove first...`);
    }

    this.removeLayer(layer);

    this[_layerMap][id] = layer;
    layer.connect(this, this[_zOrder]++);
    this.updateViewport(layer);
    // layer.setDisplayRatio(this.displayRatio, this.maxDisplayRatio, false);
    if(!this.stickExtend) {
      layer.resolution = this.layerResolution;
    }

    this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
    /* istanbul ignore if  */
    if(setDebugToolsObserver && layer.id !== '__debuglayer__') {
      setDebugToolsObserver(this, layer);
    }
    if(appendDOMElement) this.container.appendChild(layer.canvas || layer);
    return layer;
  }

  removeLayer(layer) {
    if(typeof layer === 'string') {
      layer = this[_layerMap][layer];
    }
    if(this.hasLayer(layer)) {
      layer.disconnect(this);
      this.container.removeChild(layer.canvas || layer);
      delete this[_layerMap][layer.id];
      this[_layers] = sortOrderedSprites(Object.values(this[_layerMap]), true);
      /* istanbul ignore if  */
      if(removeDebugToolsObserver) {
        removeDebugToolsObserver(layer);
      }
      return layer;
    }

    return null;
  }

  hasLayer(layer) {
    let layerID;
    if(typeof layer === 'string') {
      layerID = layer;
      layer = this[_layerMap][layer];
    } else {
      layerID = layer.id;
    }
    return layer && this[_layerMap][layerID] === layer;
  }

  querySelector(selector) {
    return querySelector(selector, this);
  }

  querySelectorAll(selector) {
    return querySelectorAll(selector, this);
  }

  async snapshot() {
    const [width, height] = this.viewport;
    const canvas = this[_snapshot];
    canvas.width = width;
    canvas.height = height;

    const [sw, sh] = this.layerViewport;

    const layers = this[_layers].slice(0).reverse();
    const ctx = canvas.getContext('2d');

    const renderTasks = layers.map(layer => layer.prepareRender());
    await Promise.all(renderTasks);

    const rect = [0, 0, sw, sh];

    if(!this.stickExtend) {
      if(this.stickMode === 'width' || this.stickMode === 'height') {
        rect[0] = (width - sw) / 2;
        rect[1] = (height - sh) / 2;
      } else if(this.stickMode === 'bottom' || this.stickMode === 'right') {
        rect[0] = width - sw;
        rect[1] = height - sh;
      }
    }

    layers.forEach((layer) => {
      if(layer.canvas) {
        ctx.drawImage(layer.canvas, ...rect);
      }
    });

    return canvas;
  }
}
