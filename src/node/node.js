import {mat2d} from 'gl-matrix';
import Attr from '../attribute/node';
import Animation from '../animation';
import ownerDocument from '../document';
import SpriteEvent from '../event/event';
import {parseFilterString, applyFilters} from '../utils/filter';
import applyRenderEvent from '../utils/render_event';

const changedAttrs = Symbol.for('spritejs_changedAttrs');
const attributes = Symbol.for('spritejs_attributes');

const _resolution = Symbol('resolution');
const _animations = Symbol('animations');

const _eventListeners = Symbol('eventListeners');
const _captureEventListeners = Symbol('captureEventListeners');
const _filters = Symbol('filters');
const _display = Symbol('display');

const _program = Symbol('program');
const _shaderAttrs = Symbol('shaderAttrs');
const _uniforms = Symbol('uniforms');

export default class Node {
  static Attr = Attr;

  constructor(attrs = {}) {
    this.attributes = new this.constructor.Attr(this);
    this[_resolution] = {width: 300, height: 150};
    Object.assign(this.attributes, attrs);
    // if(Object.seal) {
    //   Object.seal(this.attributes);
    // }
    this[_animations] = new Set();
    this[_eventListeners] = {};
    this[_captureEventListeners] = {};
  }

  get ancestors() {
    let parent = this.parent;
    const ret = [];
    while(parent) {
      ret.push(parent);
      parent = parent.parent;
    }
    return ret;
  }

  get animations() {
    return this[_animations];
  }

  get filters() {
    return this[_filters] || (this.parent && this.parent.filters);
  }

  get isVisible() {
    return false;
  }

  get layer() {
    if(this.parent) return this.parent.layer;
    return null;
  }

  get localMatrix() {
    const m = this.transformMatrix;
    const {x, y} = this.attributes;
    m[4] += x;
    m[5] += y;
    return m;
  }

  get opacity() {
    let opacity = this.attributes.opacity;
    if(this.parent && this.parent.opacity != null) {
      opacity *= this.parent.opacity;
    }
    return opacity;
  }

  get parentNode() {
    return this.parent;
  }

  get nextSibling() {
    return this.getNodeNearBy(1);
  }

  get previousSibling() {
    return this.getNodeNearBy(-1);
  }

  get program() {
    return this[_program];
  }

  /* get parent defined by connect method */

  get renderer() {
    if(this.parent) return this.parent.renderer;
    return null;
  }

  get renderMatrix() {
    if(this.__cacheRenderMatrix) return this.__cacheRenderMatrix;
    let m = this.localMatrix;
    const parent = this.parent;
    if(parent) {
      const renderMatrix = parent.__cacheRenderMatrix || parent.renderMatrix;
      if(renderMatrix) {
        m = mat2d(renderMatrix) * mat2d(m);
      }
    }
    return m;
  }

  get worldScaling() {
    const m = this.renderMatrix;
    return [Math.hypot(m[0], m[1]), Math.hypot(m[2], m[3])];
  }

  get worldRotation() {
    const m = this.renderMatrix;
    return Math.atan2(m[1], m[3]);
  }

  get worldPosition() {
    const m = this.renderMatrix;
    return [m[4], m[5]];
  }

  get uniforms() {
    return this[_uniforms];
  }

  /* get zOrder defined by connect method */

  /* attributes */

  get className() {
    return this.attributes.className;
  }

  set className(value) {
    this.attributes.className = value;
  }

  get id() {
    return this.attributes.id;
  }

  set id(value) {
    this.attributes.id = value;
  }

  get name() {
    return this.attributes.name;
  }

  set name(value) {
    this.attributes.name = value;
  }

  get zIndex() {
    return this.attributes.zIndex;
  }

  set zIndex(value) {
    this.attributes.zIndex = value;
  }

  get mesh() {
    return null;
  }

  get shaderAttrs() {
    return this[_shaderAttrs] || {};
  }

  activateAnimations() {
    const layer = this.layer;
    if(layer) {
      const animations = this[_animations];
      animations.forEach((animation) => {
        animation.baseTimeline = layer.timeline;
        animation.play();
        animation.finished.then(() => {
          animations.delete(animation);
        });
      });
      const children = this.children;
      if(children) {
        children.forEach((child) => {
          if(child.activateAnimations) child.activateAnimations();
        });
      }
    }
  }

  addEventListener(type, listener, options = {}) {
    if(type === 'mousewheel') type = 'wheel';
    if(typeof options === 'boolean') options = {capture: options};
    const {capture, once} = options;
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    this[eventListeners][type] = this[eventListeners][type] || [];
    this[eventListeners][type].push({listener, once});

    return this;
  }

  animate(frames, timing) {
    const animation = new Animation(this, frames, timing);
    if(this.effects) animation.applyEffects(this.effects);
    if(this.layer) {
      animation.baseTimeline = this.layer.timeline;
      animation.play();
      animation.finished.then(() => {
        this[_animations].delete(animation);
      });
    }
    this[_animations].add(animation);
    return animation;
  }

  attr(...args) {
    if(args.length === 0) return this.attributes[attributes];
    if(args.length > 1) {
      let [key, value] = args;
      if(typeof value === 'function') {
        value = value(this.attr(key));
      }
      this.setAttribute(key, value);
      return this;
    }
    if(typeof args[0] === 'string') {
      return this.getAttribute(args[0]);
    }
    Object.assign(this.attributes, args[0]);
    return this;
  }

  cloneNode() {
    const cloned = new this.constructor();
    const attrs = this.attributes[changedAttrs];
    cloned.attr(attrs);
    return cloned;
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
    if(parent.timeline) this.activateAnimations();
    this.setResolution(parent.getResolution());
    this.forceUpdate();
    this.dispatchEvent({type: 'append', detail: {parent, zOrder}});
  }

  contains(node) {
    while(node && this !== node) {
      node = node.parent;
    }
    return !!node;
  }

  deactivateAnimations() {
    this[_animations].forEach(animation => animation.cancel());
    const children = this.children;
    if(children) {
      children.forEach((child) => {
        if(child.deactivateAnimations) child.deactivateAnimations();
      });
    }
  }

  disconnect() {
    const {parent, zOrder} = this;
    delete this.parent;
    delete this.zOrder;
    this.deactivateAnimations();
    this.dispatchEvent({type: 'remove', detail: {parent, zOrder}});
    if(parent) parent.forceUpdate();
  }

  dispatchEvent(event) {
    if(!(event instanceof SpriteEvent)) {
      event = new SpriteEvent(event);
    }
    event.target = this;
    let type = event.type;
    if(type === 'mousewheel') type = 'wheel';

    const elements = [this];
    let parent = this.parent;
    while(event.bubbles && parent) {
      elements.push(parent);
      parent = parent.parent;
    }

    // capture phase
    for(let i = elements.length - 1; i >= 0; i--) {
      const element = elements[i];
      const listeners = element[_captureEventListeners] && element[_captureEventListeners][type];
      if(listeners && listeners.length) {
        event.currentTarget = element;
        listeners.forEach(({listener, once}) => {
          listener.call(this, event);
          if(once) elements.removeEventListener(listener);
        });
        delete event.currentTarget;
      }
      if(!event.bubbles && event.cancelBubble) break;
    }
    // bubbling
    if(!event.cancelBubble) {
      for(let i = 0; i < elements.length; i++) {
        const element = elements[i];
        const listeners = element[_eventListeners] && element[_eventListeners][type];
        if(listeners && listeners.length) {
          event.currentTarget = element;
          listeners.forEach(({listener, once}) => {
            listener.call(this, event);
            if(once) elements.removeEventListener(listener);
          });
          delete event.currentTarget;
        }
        if(!event.bubbles || event.cancelBubble) break;
      }
    }
  }

  dispatchPointerEvent(event) {
    const {x, y} = event;
    if(this.isPointCollision(x, y)) {
      this.dispatchEvent(event);
      return true;
    }
    return false;
  }

  draw(meshes = []) {
    const mesh = this.mesh;

    if(mesh) {
      applyFilters(mesh, this.filters);
      meshes.push(mesh);
      if(this[_program]) {
        mesh.setProgram(this[_program]);
        const shaderAttrs = this[_shaderAttrs];
        if(shaderAttrs) {
          Object.entries(shaderAttrs).forEach(([key, setter]) => {
            mesh.setAttribute(key, setter);
          });
        }
        const uniforms = this[_uniforms];
        if(this[_uniforms]) {
          const _uniform = {};
          Object.entries(uniforms).forEach(([key, value]) => {
            if(typeof value === 'function') {
              value = value(this, key);
            }
            _uniform[key] = value;
          });
          mesh.setUniforms(_uniform);
        }
      }
      applyRenderEvent(this, mesh);
    }
    return meshes;
  }

  forceUpdate() {
    if(this.parent) this.parent.forceUpdate();
  }

  getAttribute(key) {
    return this.attributes[key];
  }

  getListeners(type, {capture = false} = {}) {
    const eventListeners = capture ? _captureEventListeners : _eventListeners;
    return [...(this[eventListeners][type] || [])];
  }

  getNodeNearBy(distance = 1) {
    if(!this.parent) return null;
    if(distance === 0) return this;
    const children = this.parent.children;
    const idx = children.indexOf(this);
    return children[idx + distance];
  }

  getWorldPosition(offsetX, offsetY) {
    const m = this.renderMatrix;
    const x = offsetX * m[0] + offsetY * m[2] + m[4];
    const y = offsetX * m[1] + offsetY * m[3] + m[5];
    return [x, y];
  }

  getOffsetPosition(x, y) {
    const m = mat2d.invert(this.renderMatrix);
    const offsetX = x * m[0] + y * m[2] + m[4];
    const offsetY = x * m[1] + y * m[3] + m[5];
    return [offsetX, offsetY];
  }

  getResolution() {
    return {...this[_resolution]};
  }

  isPointCollision(x, y) {
    if(!this.mesh) return false;
    const pointerEvents = this.attributes.pointerEvents;
    if(pointerEvents === 'none') return false;
    if(pointerEvents !== 'all' && !this.isVisible) return false;
    let which = 'both';
    if(pointerEvents === 'visibleFill') which = 'fill';
    if(pointerEvents === 'visibleStroke') which = 'stroke';
    return this.mesh.isPointCollision(x, y, which);
  }

  onPropertyChange(key, newValue, oldValue) {
    if(key !== 'id' && key !== 'name' && key !== 'className' && key !== 'pointerEvents' && key !== 'passEvents') {
      this.forceUpdate();
    }
    if(key === 'filter') {
      this[_filters] = parseFilterString(newValue);
    }
    if(key === 'zIndex' && this.parent) {
      this.parent.reorder();
    }
  }

  setAttribute(key, value) {
    if(key === 'attrs') {
      this.attr(value);
    }
    this.attributes[key] = value;
  }

  setMouseCapture() {
    if(this.layer) {
      this.layer.__mouseCapturedTarget = this;
    }
  }

  // layer.renderer.createProgram(fragmentShader, vertexShader, attributeOptions)
  setProgram(program) {
    this[_program] = program;
    this.forceUpdate();
  }

  setShaderAttribute(attrName, setter) {
    this[_shaderAttrs] = this[_shaderAttrs] || {};
    this[_shaderAttrs][attrName] = setter;
    this.forceUpdate();
  }

  setUniforms(uniforms) {
    this[_uniforms] = this[_uniforms] || {};
    Object.assign(this[_uniforms], uniforms);
    this.forceUpdate();
  }

  setResolution({width, height}) {
    const {width: w, height: h} = this[_resolution];
    if(w !== width || h !== height) {
      this[_resolution] = {width, height};
      // this.updateContours();
      this.forceUpdate();
      this.dispatchEvent({type: 'resolutionchange', detail: {width, height}});
    }
  }

  show() {
    if(this.attributes.display === 'none') {
      this.attributes.display = this[_display] || '';
    }
  }

  hide() {
    if(this.attributes.display !== 'none') {
      this[_display] = this.attributes.display;
      this.attributes.display = 'none';
    }
  }

  releaseMouseCapture() {
    if(this.layer && this.layer.__mouseCapturedTarget === this) {
      this.layer.__mouseCapturedTarget = null;
    }
  }

  remove() {
    if(this.parent && this.parent.removeChild) {
      this.parent.removeChild(this);
      return true;
    }
    return false;
  }

  removeAllListeners(type, options = {}) {
    if(typeof options === 'boolean') options = {capture: options};
    const capture = options.capture;

    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if(this[eventListeners][type]) {
      this[eventListeners][type] = [];
    }
    return this;
  }

  removeAttribute(key) {
    this.setAttribute(key, null);
  }

  removeEventListener(type, listener, options = {}) {
    if(typeof options === 'boolean') options = {capture: options};
    const capture = options.capture;

    const eventListeners = capture ? _captureEventListeners : _eventListeners;

    if(this[eventListeners][type]) {
      const listeners = this[eventListeners][type];
      if(listeners) {
        for(let i = 0; i < listeners.length; i++) {
          const {listener: _listener} = listeners[i];
          if(_listener === listener) {
            this[eventListeners][type].splice(i, 1);
            break;
          }
        }
      }
    }

    return this;
  }

  transition(sec, easing = 'linear') {
    const that = this,
      _animation = Symbol('animation');

    easing = easing || 'linear';

    let delay = 0;
    if(typeof sec === 'object') {
      delay = sec.delay || 0;
      sec = sec.duration;
    }

    return {
      [_animation]: null,
      cancel(preserveState = false) {
        const animation = this[_animation];
        if(animation) {
          animation.cancel(preserveState);
        }
      },
      end() {
        const animation = this[_animation];
        if(animation && (animation.playState === 'running' || animation.playState === 'pending')) {
          animation.finish();
        }
      },
      reverse() {
        const animation = this[_animation];
        if(animation) {
          if(animation.playState === 'running' || animation.playState === 'pending') {
            animation.playbackRate = -animation.playbackRate;
          } else {
            const direction = animation.timing.direction;
            animation.timing.direction = direction === 'reverse' ? 'normal' : 'reverse';
            animation.play();
          }
        }
        return animation.finished;
      },
      attr(prop, val) {
        this.end();
        if(typeof prop === 'string') {
          prop = {[prop]: val};
        }
        Object.entries(prop).forEach(([key, value]) => {
          if(typeof value === 'function') {
            prop[key] = value(that.attr(key));
          }
        });
        this[_animation] = that.animate([prop], {
          duration: sec * 1000,
          delay: delay * 1000,
          fill: 'forwards',
          easing,
        });
        return this[_animation].finished;
      },
    };
  }

  updateContours() {
    // override
  }
}

ownerDocument.registerNode(Node, 'node');