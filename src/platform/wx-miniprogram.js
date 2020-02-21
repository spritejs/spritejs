/* globals wx */
export function polyfill({ENV}) {
  class Container {
    constructor(width, height) {
      this.width = width;
      this.height = height;
      this.children = [];
      this._listeners = {};
    }

    get clientWidth() {
      return this.width;
    }

    get clientHeight() {
      return this.height;
    }

    dispatchEvent(event, {left = 0, top = 0, width = this.width, height = this.height} = {}) {
      if(this.children.length > 0) {
        const type = event.type;
        const target = event.target;
        target.getBoundingClientRect = function () {
          return {left, top, width, height};
        };
        target.width = this.children[0].width;
        target.height = this.children[0].height;
        this._listeners[type].forEach((listener) => {
          listener(event);
        });
      }
    }

    addEventListener(type, listener) {
      this._listeners[type] = this._listeners[type] || [];
      this._listeners[type].push(listener);
    }

    appendChild(el) {
      this.children.push(el);
    }

    removeChild(el) {
      const idx = this.children.indexOf(el);
      if(idx >= 0) {
        this.children.splice(idx, 1);
        return el;
      }
      return null;
    }

    insertBefore(el, ref) {
      if(ref == null) return this.appendChild(el);
      const idx = this.children.indexOf(ref);
      if(idx >= 0) {
        this.children.splice(idx, 0, el);
      }
      return null;
    }

    replaceChild(el, ref) {
      const idx = this.children.indexOf(ref);
      if(idx >= 0) {
        this.children.splice(idx, 1, el);
        return el;
      }
      return null;
    }
  }

  class CanvasWrap {
    constructor(width, height, ctx) {
      this._ctx = ctx;
      this.width = width;
      this.height = height;
      ctx.canvas = this;
      // ctx.canvas = ctx._context.canvas;
    }

    get width() {
      return this._width;
    }

    set width(value) {
      this._width = value;
      // this._ctx._context.canvas.width = value;
    }

    get height() {
      return this._height;
    }

    set height(value) {
      this._height = value;
      // this._ctx._context.canvas.height = value;
    }

    get contextType() {
      return '2d';
    }

    getContext() {
      return this._ctx;
    }

    draw(reserve) {
      this._ctx.draw(reserve);
    }
  }

  function createCanvas(width, height, options = {}) {
    // const offscreen = options.offscreen !== false;
    // if (offscreen && wx.createOffscreenCanvas) {
    //   const offscreenCanvas = wx.createOffscreenCanvas(width, height);
    //   return offscreenCanvas;
    // }
    if(!options.id) return null;
    const context = wx.createCanvasContext(options.id, options.extra);
    const canvas = new CanvasWrap(width, height, context);
    return canvas;
  }

  ENV.Container = Container;
  ENV.createCanvas = createCanvas;

  let textContext = null;
  ENV.createText = (text, {font, fillColor, strokeColor, strokeWidth, parseFont}) => {
    if(!textContext) textContext = wx.createCanvasContext('textCanvas');
    textContext.save();
    textContext.font = font;
    let {width} = textContext.measureText(text);
    const fontInfo = parseFont(font);
    const height = Math.max(fontInfo.pxLineHeight, fontInfo.pxHeight * 1.13);
    if(/italic|oblique/.test(font)) {
      width += height * Math.tan(15 * Math.PI / 180);
    }
    return {image: {font, fillColor, strokeColor, strokeWidth, text}, rect: [0, 0, width, height]};
  };
}