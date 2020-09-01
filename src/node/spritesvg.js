import Sprite from './sprite';
import SpriteSvgAttr from '../attribute/spritesvg';
import ownerDocument from '../document';
import {querySelector, querySelectorAll} from '../selector';
import {sizeToPixel} from '../utils/attribute_value';

// This class only avaliable for browser

const namespace = 'http://www.w3.org/2000/svg';
const setAttribute = Symbol.for('spritejs_setAttribute');
const _root = Symbol('root');

const _updateTextureTask = Symbol('task');

function updateTexture(svgNode, flexible = true) {
  const root = svgNode[_root];
  if(root && root.children[0]) {
    if(flexible && svgNode.attributes.flexible) {
      const svg = svgNode.svg;

      if(!svg.hasAttribute('data-original-width')) {
        let w = svg.getAttribute('width');
        w = w ? sizeToPixel(w) : 300;
        let h = svg.getAttribute('height');
        h = h ? sizeToPixel(h) : 150;

        if(!svg.hasAttribute('viewBox')) {
          svg.setAttribute('viewBox', `0 0 ${Math.round(w)} ${Math.round(h)}`);
          // svg.setAttribute('width', '100%');
          // svg.setAttribute('height', '100%');
        }
        svg.setAttribute('data-original-width', w);
        svg.setAttribute('data-original-height', h);
      }

      let width = svgNode.attributes.width || Number(svg.getAttribute('data-original-width'));
      let height = svgNode.attributes.height || Number(svg.getAttribute('data-original-height'));

      // let {width, height} = svgNode.getBoundingClientRect();
      // width = width || w;
      // height = height || h;
      const scale = svgNode.attributes.scale[0];

      const displayRatio = svgNode.layer ? svgNode.layer.displayRatio : 1;
      width *= scale * displayRatio;
      height *= scale * displayRatio;
      svg.setAttribute('width', width);
      svg.setAttribute('height', height);

      if(width && height && svgNode.textureImage) {
        const imgWidth = svgNode.textureImage.width;
        const imgHeight = svgNode.textureImage.height;
        const boxSize = svgNode.clientSize;
        svgNode.attributes.textureRect = [0, 0, Math.round(boxSize[0] * imgWidth / width), Math.round(boxSize[1] * imgHeight / height)];
      }
    } else if(!svgNode[_updateTextureTask]) {
      svgNode[_updateTextureTask] = Promise.resolve().then(() => {
        delete svgNode[_updateTextureTask];
        const svgText = root.innerHTML;
        const blob = new Blob([svgText], {type: 'image/svg+xml'});
        const textureURL = URL.createObjectURL(blob);
        const img = new Image();
        img.onload = function () {
          if(img.width && img.height) {
            svgNode.attributes[setAttribute]('texture', img);
            if(svgNode.attributes.flexible) {
              svgNode.attributes.textureRect = null;
            }
          } else {
            svgNode.attributes[setAttribute]('texture', null);
          }
        };
        img.src = textureURL;
      });
    }
  }
}

export default class SpriteSvg extends Sprite {
  static Attr = SpriteSvgAttr;

  constructor(attrs = {}) {
    if(typeof attrs === 'string') attrs = {svgText: attrs};
    let {svgText, ..._attrs} = attrs;
    super(_attrs);
    this[_root] = document.createElement('div');
    if(svgText) {
      this[_root].innerHTML = svgText;
      const svg = this[_root].children[0];
      if(svg) svg.setAttribute('xmlns', namespace);
      else {
        // not svg text
        fetch(svgText).then((res) => {
          return res.text();
        }).then((text) => {
          this[_root].innerHTML = text;
          if(!this.observer || this.attributes.flexible) updateTexture(this);
        });
        svgText = null;
      }
    }
    if(!svgText) {
      const svg = document.createElementNS(namespace, 'svg');
      svg.setAttribute('xmlns', namespace);
      this[_root].appendChild(svg);
    }
    // updateTexture(this);

    if(typeof MutationObserver === 'function') {
      const observer = new MutationObserver((mutationsList) => {
        updateTexture(this, false);
      });

      observer.observe(this[_root], {
        attributes: true,
        subtree: true,
        characterData: true,
        childList: true,
      });

      this.observer = observer;
    }
  }

  get children() {
    return [this.svg];
  }

  get childNodes() {
    return [this.svg];
  }

  get svg() {
    if(this[_root]) {
      return this[_root].children[0];
    }
    return null;
  }

  /* override */
  setResolution({width, height}) {
    super.setResolution({width, height});
    updateTexture(this);
  }

  /* override */
  dispatchPointerEvent(event) {
    // 派发事件给 svg 元素，但是目前只支持派发给 svg 根元素，不支持派发给子元素
    const ret = super.dispatchPointerEvent(event);
    if(ret && this.attributes.passEvents && typeof MouseEvent === 'function') {
      const {x, y} = event;
      let [offsetX, offsetY] = this.getOffsetPosition(x, y);
      const originalEvent = event.originalEvent;
      const anchor = this.attributes.anchor;
      const cz = this.clientSize;
      offsetX = (offsetX + anchor[0] * cz[0]) / 2;
      offsetY = (offsetY + anchor[1] * cz[1]) / 2;

      const type = event.type;
      if(type === originalEvent.type) {
        let newEvent = null;
        if(originalEvent instanceof MouseEvent) {
          newEvent = new MouseEvent(type, {
            screenX: offsetX,
            screenY: offsetY,
            clientX: offsetX,
            clientY: offsetY,
            bubbles: originalEvent.bubbles,
            button: originalEvent.button,
            buttons: originalEvent.buttons,
            cancelBubble: originalEvent.cancelBubble,
            cancelable: originalEvent.cancelable,
            currentTarget: originalEvent.currentTarget,
            fromElement: originalEvent.fromElement,
            relatedTarget: originalEvent.relatedTarget,
            returnValue: originalEvent.returnValue,
            srcElement: originalEvent.srcElement,
            target: originalEvent.target,
            toElement: originalEvent.toElement,
            // view: originalEvent.view,
            which: originalEvent.witch,
          });
        } else if(originalEvent instanceof TouchEvent) {
          let originalTouch = null;
          const pointers = originalEvent.changedTouches || [originalEvent];
          for(let i = 0; i < pointers.length; i++) {
            const pointer = pointers[i];
            if(event.identifier === pointer.identifier) {
              originalTouch = pointer;
              break;
            }
          }
          if(originalTouch) {
            const newTouch = new Touch({
              identifier: originalTouch.identifier,
              target: originalTouch.target,
              clientX: offsetX,
              clientY: offsetY,
              screenX: offsetX,
              screenY: offsetY,
              pageX: offsetX,
              pageY: offsetY,
              radiusX: originalTouch.radiusX,
              radiusY: originalTouch.radiusY,
              rotationAngle: originalTouch.rotationAngle,
              force: originalTouch.force});

            newEvent = new TouchEvent(type, {
              cancelable: originalEvent.cancelable,
              bubbles: originalEvent.bubbles,
              composed: originalEvent.composed,
              touches: [newTouch],
              targetTouches: [newTouch],
              changedTouches: [newTouch],
            });
          }
        } else {
          newEvent = originalEvent;
        }
        if(newEvent) this.svg.dispatchEvent(newEvent);
      }
    }
    return ret;
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

  querySelector(selector) {
    return querySelector(selector, this);
  }

  querySelectorAll(selector) {
    return querySelectorAll(selector, this);
  }

  /* override */
  onPropertyChange(key, newValue, oldValue) {
    super.onPropertyChange(key, newValue, oldValue);
    if(key === 'flexible') {
      updateTexture(this);
    }
    if(this.attributes.flexible && (key === 'width' || key === 'height' || key === 'scale' || key === 'transform')) {
      updateTexture(this);
    }
  }
}

ownerDocument.registerNode(SpriteSvg, 'spritesvg');