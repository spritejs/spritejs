import {Figure2D} from '@mesh.js/core';
import Block from './block';
import Attr from '../attribute/group';
import ownerDocument from '../document';
import {querySelector, querySelectorAll} from '../selector';

const _zOrder = Symbol('zOrder');

const _ordered = Symbol('ordered');
const _children = Symbol('children');

const _sealed = Symbol('sealed');

export default class Group extends Block {
  static Attr = Attr;

  constructor(attrs = {}) {
    super(attrs);
    this[_children] = [];
    this[_ordered] = null;
    this[_zOrder] = 0;
  }

  get childNodes() {
    return this[_children];
  }

  get children() {
    return this[_children];
  }

  get orderedChildren() {
    if(!this[_ordered]) {
      this[_ordered] = [...this[_children]];
      this[_ordered].sort((a, b) => {
        return a.zIndex - b.zIndex || a.zOrder - b.zOrder;
      });
    }
    return this[_ordered];
  }

  append(...els) {
    return els.map((el) => {
      return this.appendChild(el);
    });
  }

  appendChild(el) {
    el.remove();
    this[_children].push(el);
    el.connect(this, this[_zOrder]++);
    if(this[_ordered]) {
      if(this[_ordered].length && el.zIndex < this[_ordered][this[_ordered].length - 1].zIndex) {
        this.reorder();
      } else {
        this[_ordered].push(el);
      }
    }
    return el;
  }

  /* override */
  // get isVisible() {
  //   return this.attributes.opacity > 0 && this[_children].length > 0;
  // }

  /* override */
  // get hasBackground() {
  //   return this[_children].length > 0;
  // }

  /* override */
  cloneNode(deep = false) {
    const node = super.cloneNode();
    if(deep) {
      this[_children].forEach((child) => {
        const childNode = child.cloneNode(deep);
        node.appendChild(childNode);
      });
    }
    return node;
  }

  /* override */
  dispatchPointerEvent(event) {
    const children = this.orderedChildren;
    for(let i = children.length - 1; i >= 0; i--) {
      const child = children[i];
      if(child.dispatchPointerEvent(event)) return true;
    }
    return super.dispatchPointerEvent(event);
  }

  /* override */
  draw(meshes = []) {
    this.__cacheRenderMatrix = this.renderMatrix;
    super.draw(meshes);
    if(!this[_sealed]) {
      const children = this.orderedChildren;
      for(let i = 0; i < children.length; i++) {
        const child = children[i];
        child.draw(meshes);
      }
    }
    this.__cacheRenderMatrix = null;

    return meshes;
  }

  getElementById(id) {
    return querySelector(`#${id}`, this);
  }

  getElementsByClassName(className) {
    return querySelectorAll(`.${className}`, this);
  }

  getElementsByName(name) {
    return querySelectorAll(`[name="${name}"]`, this);
  }

  getElementsByTagName(tagName) {
    return querySelectorAll(tagName, this);
  }

  insertBefore(el, ref) {
    if(ref == null) return this.appendChild(el);
    el.remove();
    const refIdx = this[_children].indexOf(ref);
    if(refIdx < 0) {
      throw new Error('Invalid reference node.');
    }
    const zOrder = ref.zOrder;
    for(let i = refIdx; i < this[_children].length; i++) {
      const order = this[_children][i].zOrder;
      const child = this[_children][i];
      delete child.zOrder;
      Object.defineProperty(child, 'zOrder', {
        value: order + 1,
        writable: false,
        configurable: true,
      });
    }
    this[_children].splice(refIdx, 0, el);
    el.connect(this, zOrder);
    if(this[_ordered]) {
      if(el.zIndex !== ref.zIndex) {
        this.reorder();
      } else {
        const idx = this[_ordered].indexOf(ref);
        this[_ordered].splice(idx, 0, el);
      }
    }
    return el;
  }

  querySelector(selector) {
    return querySelector(selector, this);
  }

  querySelectorAll(selector) {
    return querySelectorAll(selector, this);
  }

  replaceChild(el, ref) {
    el.remove();
    const refIdx = this[_children].indexOf(ref);
    if(refIdx < 0) {
      throw new Error('Invalid reference node.');
    }
    this[_children][refIdx] = el;
    el.connect(this, ref.zOrder);
    if(this[_ordered]) {
      if(el.zIndex !== ref.zIndex) {
        this.reorder();
      } else {
        const idx = this[_ordered].indexOf(ref);
        this[_ordered][idx] = el;
      }
    }
    ref.disconnect();
    return el;
  }

  removeAllChildren() {
    const children = this[_children];
    for(let i = children.length - 1; i >= 0; i--) {
      children[i].remove();
    }
  }

  removeChild(el) {
    const idx = this[_children].indexOf(el);
    if(idx >= 0) {
      this[_children].splice(idx, 1);
      if(this[_ordered]) {
        const _idx = this[_ordered].indexOf(el);
        this[_ordered].splice(_idx, 1);
      }
      el.disconnect();
      return el;
    }
    return null;
  }

  reorder() {
    this[_ordered] = null;
  }

  seal() {
    function transform(path, m) {
      const ret = [];
      for(let i = 0; i < path.length; i++) {
        const cmd = [...path[i]];
        for(let j = 1; j < cmd.length; j += 2) {
          const x = cmd[j];
          const y = cmd[j + 1];
          cmd[j] = x * m[0] + y * m[2] + m[4];
          cmd[j + 1] = x * m[1] + y * m[3] + m[5];
        }
        ret.push(cmd);
      }
      return ret;
    }
    const children = this.orderedChildren;
    const clientBox = new Figure2D();
    const localMatrix = this.localMatrix;

    for(let i = 0; i < children.length; i++) {
      let child = children[i];
      if(child instanceof Group) {
        child = child.seal();
      }
      if(child.clientBox) {
        let path = child.clientBox.contours.path;
        path = transform(path, child.localMatrix);
        clientBox.addPath(path);
      }
      if(child.path) {
        let path = child.path.contours.path;
        path = transform(path, child.localMatrix);
        clientBox.addPath(path);
      }
    }

    this[_sealed] = true;
    this.clientBox = clientBox;

    return {clientBox, localMatrix};
  }

  /* override */
  setResolution({width, height}) {
    super.setResolution({width, height});
    this[_children].forEach((child) => {
      child.setResolution({width, height});
    });
  }

  /* override */
  updateContours() {
    if(!this[_sealed]) super.updateContours();
  }
}

ownerDocument.registerNode(Group, 'group');