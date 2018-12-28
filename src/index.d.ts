export = spritejs;
export as namespace spritejs;

declare namespace spritejs {
  interface IColor {
    model: string;
    value: Array<number>;
  }
  
  interface ITransformMatrix extends Array<number> {
    [0]: number;
    [1]: number;
    [2]: number;
    [3]: number;
    [4]: number;
    [5]: number;      
  }
  
  interface IPoint extends Array<number> {
    [0]: number;
    [1]: number;
  }

  interface ISize extends Array<number> {
    [0]: number;
    [1]: number;
  }
  
  interface IPoint3D extends Array<number> {
    [0]: number;
    [1]: number;
    [2]: number;
  }
  
  interface IEventArguments {
    type: string;
    originalEvent: Object;
    terminated: boolean;
    x?: number;
    y?: number;
    layerX?: number;
    layerY?: number;
    parentX?: number;
    parentY?: number;
  }
  
  interface IBox extends Array<number> {
    [0]: number;
    [1]: number;
    [2]: number;
    [3]: number;
  }

  interface IRelativePos extends Array<number> {
    [0]: number;
    [1]: number;
    [2]: number;
    [3]: number;
  }
  
  interface IRect extends Array<number> {
    [0]: number;
    [1]: number;
    [2]: number;
    [3]: number;
  }
  
  interface ITransform {
    translate?: IPoint;
    rotate?: number;
    scale?: IPoint;
    skew?: IPoint;
    matrix?: ITransformMatrix;
  }

  interface IElementDecsriptor {
    kind: string;
    key: string|symbol;
    placement: string;
    descriptor: PropertyDecorator;
    initializer?: Function;
    extras?: IElementDecsriptor;
    finishier?: Function;
  }
  
  interface IDecorator {
    (elementDescriptor: IElementDecsriptor): IElementDecsriptor;
  }

  interface IAttributeDescriptor {
    decorators: Array<Function>;
    value: any;
    set?: Function;
    get?: Function;
  }
  
  interface IBorder {
    width: number,
    color: string,
    style: string,
  }

  interface ITransition {
    end();
    reverse(): Promise<Object>;
    attr(name: string, value: any): Promise<Object>;
  }

  interface ITiming {
    duration: number;
    iterations: number;
    easing: string;
    fill: string;
    delay: number;
    endDelay: number;
    direction: string;
  }

  interface IPath {
    d: string;
    transform: ITransform;
    trim: boolean;
  }

  class Color {
    constructor(color: String|IColor);
    toString(): string;
    readonly str: string;
  }

  namespace math {
    class Matrix {
      constructor(m: ITransformMatrix);
      unit(): Matrix;
      multiply(m: ITransformMatrix): Matrix;
      inverse(): Matrix;
      translate(x: number, y: number): Matrix;
      rotate(deg: number): Matrix;
      skew(x: number, y: number): Matrix;
      scale(x: number, y: number): Matrix;
      transformPoint(x: number, y: number): IPoint;
      transformVector(x: number, y: number): IPoint;
    }

    class Vector {
      constructor(p1: IPoint3D, p2: IPoint3D);
      readonly length: number;
      unit(): Vector;
      dot(v: Vector): number;
      cross(v: Vector): Vector;
    }
  }

  class Attr {
    static relatedAttributes: Set;
    static attributeNames: Set;
    static addAttributes(attrs: Array<Function|IAttributeDescriptor>);
    constructor(subject: BaseNode);
    setDefault(attrs: Array<Object>);
    getDefaultValue(key: string, value: any): any;
    saveObj(key: string, value: any);
    loadObj(key: string): any;
    quietSet(key: string, value: any);
    set(key: string, value: any);
    get(key: string): any;
    clearStyle();
    clearLayout();
    readonly style: Object;
    readonly attrs: Object;
    merge(attrs: string|Object): Attr;
    serialize(): string;
    readonly subject: BaseNode;
    id: string;
    name: string;
    class: string;
  }

  class BaseAttr extends Attr {
    constructor(subject: BaseNode);
    clearFlow();
    set(key: string, value: any);
    merge(attrs: string|Object): Attr;
    serialize(): string;
    enableCache: boolean;
    anchor: IPoint;
    display: string;
    x: number;
    y: number;
    layoutX: number;
    layoutY: number;
    pos: IPoint;
    bgcolor: string;
    flex: string;
    flexGrow: number;
    flexShrink: number;
    flexBasis: string;
    order: number;
    alignSelf: string;
    width: number|string;
    height: number|string;
    layoutWidth: number|string;
    layoutHeight: number|string;
    size: Array<number|string>;
    borderWidth: number;
    borderStyle: string;
    borderColor: string;
    border: IBorder;
    paddingTop: number;
    paddingRight: number;
    paddingBottom: number;
    paddingLeft: number;
    padding: Array<number>;
    borderRadius: Array<number>;
    boxSizing: string;
    dashOffset: number;
    transform: string;
    transformOrigin: string|number;
    rotate: number;
    scale: IPoint;
    translate: IPoint;
    skew: IPath;
    zIndex: number;
    offsetPath: string;
    offsetDistance: number;
    offsetRotate: number;
    filter: string|Object;
    shadow: string|Object;
    position: string;
    marginTop: number;
    marginRight: number;
    marginBottom: number;
    marginTop: number;
    margin: Array<number>;
    bgimage: string|Object;
    clipOverflow: boolean;
    state: string;
    states: Object;
    actions: Object;
    enterMode: string;
    exitMode: string; 
  }

  class GroupAttr extends BaseAttr {
    static inits: Array<Function>;
    clip: string|IPath;
    layoutWidth: number|string;
    layoutHeight: number|string;
    display: string;
    scrollLeft: number;
    scrollTop: number;
    flexDirection: string;
    flexWrap: string;
    justifyContent: string;
    alignItems: string;
    alignContent: string;
  }

  class LabelAttr extends BaseAttr {
    retypesetting();
    widthRetypeseeting();
    text: string;
    font: string;
    fontSize: number;
    fontFamily: string;
    fontStyle: string;
    fontVariant: string;
    fontWeight: number|string;
    lineHeight: number;
    textAlign: string;
    strokeColor: string;
    fillColor: string;
    color: string;
    flexible: boolean;
    lineBreak: string;
    wordBreak: string;
    letterSpacing: number;
    textIndent: number;
    width: number;
    layoutWidth: number;
  }

  class PathAttr extends BaseAttr {
    path: string|IPath;
    d: string;
    lineWidth: number|string;
    lineDash?: Array<number>;
    lineDashOffset: number;
    lineCap: string;
    lineJoin: string;
    strokeColor: string;
    fillColor: string;
    flexible: boolean;
    bounding: string;
    color: string;
  }

  class TextureAttr extends BaseAttr {
    constructor(subject: Sprite);
    textures: Array<Object|string>;
  }

  class BaseNode {
    static Attr:Attr;
    constructor(attrs?: Object);
    serialize();
    clearLayout();
    merge(attrs: Object);
    cloneNode();
    attr(name: string): any;
    attr(name: string, value: any): BaseNode;
    attr(attrs: Object): BaseNode;
    attr(): Object;
    forceUpdate();
    restyle();
    draw();
    readonly layer: Layer;
    data(prop: string, val?: any): any;
    updateStyles(nextSibling: boolean);
    readonly dataset: Object;
    getEventHandlers(type?:string): Array<Function>;
    on(type: string, handler: Function): BaseNode;
    once(type: string, handler: Function): BaseNode;
    off(type: string, handler?: Function): BaseNode;
    remove(exit: boolean);
    addEventListener(type: string, handler: Function): BaseNode;
    removeEventListener(type: string, handler?: Function): BaseNode;
    pointCollision(event: IEventArguments): boolean;
    setMouseCapture();
    releaseMouseCapture();
    dispatchEvent(type: string, event: IEventArguments, collisionState: boolean, swallow: boolean): boolean;
    connect(parent: BaseNode, zOrder: number): BaseNode;
    disconnect(parent: BaseNode): BaseNode;
    enter(): BaseNode;
    exit(): BaseNode;
    id: string;
    name: string;
    className: string;
    readonly attributes: Object;
    readonly style: Object;
    readonly parent: BaseNode;
    readonly parentNode: BaseNode;
    readonly nextSibling: BaseNode;
    readonly previousSibling: BaseNode;
    readonly nextElementSibling: BaseNode;
    readonly previousElementSibling: BaseNode;
    getNodeNearBy(distance: number, isElement: boolean): BaseNode;
    getAttribute(key: string): any;
    setAttribute(key: string, value: any);
    removeAttribute(key: string);
    contains(node: BaseNode): boolean;
    readonly zOrder: number;
    readonly nodeType: string;
    readonly tagName: string;
    readonly nodeName: string;
  }

  class BaseSprite extends BaseNode{
    static Attr: BaseAttr;
    static setAttributeEffects(effects: Object);
    static addAttributes(attrs: Object);
    static defineAttributes(attrs: Object, effects: Object): Attr;
    constructor(attr?: Object);
    readonly effects: Object;
    setReleaseKey(key: string);
    reflow();
    flow(prop: string, value: any);
    readonly hasLayout: boolean;
    zIndex: number;
    readonly isVirtual: boolean;
    isVisible(): boolean;
    readonly transform: ITransformMatrix;
    transition(sec: number, easing: string): ITransition;
    animate(frames: Array<Object>, timing: ITiming): Animation;
    connect(parent: Group|Layer, zOrder:number);
    disconnect(parent: Group|Layer);
    readonly xy: IPoint;
    readonly attrSize: ISize;
    readonly contentSize: ISize;
    readonly clientSize: ISize;
    readonly offsetSize: ISize;
    readonly outerSize: ISize;
    readonly innerSize: ISize;
    readonly layoutSize: ISize;
    getParentXY(lx: number, ly: number): IPoint;
    getLayerXY(dx: number, dy: number): IPoint;
    readonly boundingRect: IRect;
    readonly originalRect: IRect;
    readonly originalRenderRect: IRect;
    readonly renderBox: IBox;
    readonly renderRect: IRect;
    readonly verticles: Array<IPoint>;
    cache: CanvasRenderingContext2D;
    remove();
    appendTo(parent: Group|Layer);
    forceUpdate(clearCache: boolean);
    pointToOffset(x: number, y: number): IPoint;
    offsetToPoint(dx: number, dy: number): IPoint;
    pointCollision(event: IEventArguments): boolean;
    OBBCollision(sprite: BaseNode): boolean;
    relayout();
    draw(t: number, context: CanvasRenderingContext2D);
    render(t: number, context: CanvasRenderingContext2D);
    readonly needRender: boolean;
    show(): BaseNode;
    hide(): BaseNode;
  }

  class Batch {
    constructor(layer: Layer);
    readonly baseNode: BaseNode;
    add(...nodes: Array<BaseNode>);
    remove(...nodes: Array<BaseNode>);
  }

  class Sprite extends BaseSprite {
    static Attr;
    constructor(attr?: Object);
    cloneNode(): Sprite;
    images: Array<ImageBitmap>;
    textures: Array<Object|string>;
    readonly clientSize: ISize;
    pointCollision(event: IEventArguments): boolean;
    cache: CanvasRenderingContext2D;
    render(t: number, context: CanvasRenderingContext2D);
  }
  
  class Label extends BaseSprite {
    static Attr;
    constructor(attr?: Object);
    text: string;
    readonly textBoxSize: ISize;
    readonly flexibleFont: string;
    readonly contentSize: ISize;
    retypesetting();
    restyle();
    render(t: number, context: CanvasRenderingContext2D);
  }

  class Path extends BaseSprite {
    static Attr;
    constructor(attr?: Object);
    path: IPath;
    getPointAtLength(length: number): IPoint;
    getPathLength(): number;
    findPath(offsetX: number, offsetY: number): SvgPath;
    readonly lineWidth: number;
    readonly pathOffset: IPoint;
    readonly pathSize: ISize;
    readonly contentSize: ISize;
    readonly originalRect: IRect;
    pointCollision(event: IEventArguments): boolean;
    render(t: number, context: CanvasRenderingContext2D);
  }

  interface ILayout {
    attrs: Object;
    relayout(container: Group, items: Array<BaseNode>);
  }

  class Group extends BaseSprite {
    static Attr;
    static applyLayout(name, layout: ILayout);
    constructor(attr: Object);
    readonly isVirtual: boolean;
    scrollTo(x: number, y: number);
    scrollBy(dx: number, dy: number);
    cloneNode(): BaseNode;
    cloneNode(deepCopy: boolean): BaseNode;
    readonly childNodes: Array<BaseNode>;
    readonly children: Array<BaseNode>;
    readonly sortedChildNodes: Array<BaseNode>;
    update(child: BaseNode);
    pointCollision(event: IEventArguments);
    readonly contentSize: ISize;
    dispatchEvent(type: string, event: IEventArguments, collisionState: boolean, swallow: boolean): boolean;
    relayout();
    clearLayout();
    render(t: number, context: CanvasRenderingContext2D);
    appendChild(sprite: BaseNode, update: boolean): BaseNode;
    append(...sprites: Array<BaseNode>);
    removeChild(sprite: BaseNode): BaseNode;
    replaceChild(newChild: BaseNode, oldChild: BaseNode);
    clear(): Array<BaseNode>;
    insertBefore(newChild: BaseNode, refChild: BaseNode): BaseNode;
    getElementById(id: string): BaseNode;
    getElementsByName(name: string): Array<BaseNode>;
    getElementsByClassName(className: string): Array<BaseNode>;
    getElementsByTagName(tagName: string): Array<BaseNode>;
    querySelector(selector: string): BaseNode;
    querySelectorAll(selector: string): Array<BaseNode>;
  }

  interface ILayerOptions {
    context: CanvasRenderingContext2D;
    handleEvent: boolean;
    autoRender: boolean;
  }

  interface ITimeMark {
    globalTime: number;
    localTime: number;
    entropy: number;
    playbackRate: number;
    globalEntropy: number;
  }

  class Timeline {
    constructor(options: Object, parent?: Timeline);
    readonly parent: Timeline;
    readonly lastTimeMark: ITimeMark;
    markTime(time: Object);
    currentTime: number;
    entropy: number;
    readonly globalEntropy: number;
    readonly globalTime: number;
    fork(options: Object): Timeline;
    seekGlobalTime(entropy: number): number;
    seekLocalTime(entropy: number): number;
    seekTimeMark(entropy: number): ITimeMark;
    playbackRate: number;
    readonly paused: boolean;
    updateTimers();
    clearTimeout(id: symbol);
    clearInterval(id: symbol);
    clear();
    setTimeout(handler: Function, time): symbol;
    setInterval(handler: Function, time): symbol;
  }

  class Layer extends BaseNode {
    constructor(options: ILayerOptions);
    fromDocumentCSS();
    autoRender: boolean;
    readonly layer: Layer;
    readonly childNodes: Array<BaseNode>;
    readonly children: Array<BaseNode>;
    readonly sortedChildNodes: Array<BaseNode>;
    readonly timeline: Timeline;
    readonly context: CanvasRenderingContext2D;
    readonly canvas: HTMLCanvasElement;
    readonly offset: IPoint;
    clearContext(context: CanvasRenderingContext2D);
    remove(...children: Array<BaseNode>): Array<BaseNode>;
    prepareRender(): Promise<Object>;
    draw(clearContext: boolean);
    update(target: BaseNode);
    isVisible(sprite: BaseNode): boolean;
    drawSprites(renderEls: Array<BaseNode>, t: number);
    repaint(t: number, clearContext);
    pointCollision(event: IEventArguments): boolean;
    dispatchEvent(type: string, event: IEventArguments, collisionState: boolean, swallow: boolean): boolean;
    group(...sprites: Array<BaseNode>): Group;
    batch(...sprites: Array<BaseNode>): Batch;
    adjust(handler: Function, update: boolean);
    clearUpdate();
    appendChild(sprite: BaseNode, update): BaseNode;
    append(...sprites: Array<BaseNode>);
    removeChild(sprite: BaseNode): BaseNode;
    replaceChild(newChild: BaseNode, oldChild: BaseNode);
    clear(): Array<BaseNode>;
    insertBefore(newChild: BaseNode, refChild: BaseNode): BaseNode;
    readonly id: string;
    resolution: Array<number>;
    readonly viewport: Array<number>;
    readonly offset: IPoint;
    readonly center: IPoint;
    setDisplayRatio(ratio: number|string, maxDisplayRatio: number, updateDisplay: boolean);
    readonly displayRatio: number;
    updateDisplay();
    toLocalPos(x: number, y: number);
    toGolbalPos(x: number, y: number);
    zIndex: number;
  }
  
  interface Easings {
    linear: (p) => number;
    ease: (p) => number;
    'ease-in': (p) => number;
    'ease-out': (p) => number;
    'ease-in-out': (p) => number;
    'step-start': (p) => number;
    'step-end': (p) => number;
  }

  function registerNodeType();
  function createNode();
  function createElement();

  class SvgPath {
    constructor(d: string);
    save();
    restore();
    readonly bounds: IRect;
    readonly size: ISize;
    readonly center: IPoint;
    readonly d: string;
    readonly path: IPath;
    isPointInPath(x: number, y: number): boolean;
    getPointAtLength(len: number): IPoint;
    getTotalLength(): number;
    transform(...args: Array<number>): SvgPath;
    translate(x: number, y: number): SvgPath;
    rotate(deg: number): SvgPath;
    scale(x: number, y: number): SvgPath;
    skew(x: number, y: number): SvgPath;
    trim(): SvgPath;
    beginPath(): SvgPath;
    to(context: CanvasRenderingContext2D);
    strokeStyle(value: string): SvgPath;
    fillStyle(value: string): SvgPath;
    lineWidth(value: number): SvgPath;
    lineCap(value: string): SvgPath;
    lineJoin(value: string): SvgPath;
  }

  class Scene extends BaseNode {
    constructor(container: HTMLElement, options: Object);
    displayRatio: number|string;
    subscribe: Array<string>;
    readonly childNodes: Array<BaseNode>;
    readonly children: Array<BaseNode>;
    readonly sortedChildNodes: Array<BaseNode>;
    insertBefore(newChild: BaseNode, refChild: BaseNode): BaseNode;
    appendChild(sprite: BaseNode, update): BaseNode;
    removeChild(sprite: BaseNode): BaseNode;
    replaceChild(newChild: BaseNode, oldChild: BaseNode);
    readonly layerViewport: Array<number>;
    updateViewport(layer: Layer);
    readonly distortion: number;
    viewport: Array<number>;
    resolution: Array<number>;
    readonly layerResolution: Array<number>;
    updateResolution(layer: Layer);
    setViewport(width: number, height: number);
    setResolution(width: number, height: number);
    delegateEvent(event: string, receiver: HTMLElement);
    dispatchEvent(type: string, event: IEventArguments);
    preload(...resources: Array<any>): Promise;
    layer(id: string, options: Object);
    readonly layers: Array<Layer>;
    appendLayer(layer: Layer, appendDOMElement: boolean): Layer;
    removeLayer(layer: Layer): Layer;
    hasLayer(layer: Layer): boolean;
    querySelector(selector: string): BaseNode;
    querySelectorAll(selector: string): Array<BaseNode>;
    snapshot(): Promise;
  }

  namespace utils {
    function cachable(elementDescriptor: IElementDecsriptor): IElementDecsriptor;
    function composit(struct: Object): Function;
    function findColor(context: CanvasRenderingContext2D, sprite: BaseNode, prop: string): string|Object;
    interface cacheContextPool {
      get: (context: CanvasRenderingContext2D) => CanvasRenderingContext2D;
      put: (...contexts: Array<CanvasRenderingContext2D>) => undefined;
      readonly size: number;
    }
    function drawRadiusBox(context: CanvasRenderingContext2D, rect: IRect, radius: Array<number>);
    function appendUnit(value: number|string, defaultUnit: string): string;
    function attr(elementDescriptor: IElementDecsriptor): IElementDecsriptor;
    function attr(options: Object): Function;
    function deprecate(elementDescriptor: IElementDecsriptor): IElementDecsriptor;
    function deprecate(...args: Array<string>): IDecorator;
    function flow(elementDescriptor: IElementDecsriptor): IElementDecsriptor;
    function fourValuesShortCut(value: number|Array<number>): Array<number>;
    function eightValuesShortCut(value: number|Array<number>): Array<number>;
    function notice(msg: string, level: string);
    function oneOrTwoValues(value: number|Array<number>): Array<number>;
    function absolute(elementDescriptor: IElementDecsriptor): Function;
    function relative(type: string): Function;
    function inherit(defaultValue: any): Function;
    function parseColor(color: string|IColor): Color;
    function parseColorString(color: string|IColor): string;
    function praseString(str: string): Array<any>;
    function parseStringFloat(str: string): Array<number>;
    function parseStringInt(str: string): Array<number>;
    function parseStringTransform(str: string): ITransform;
    function parseValue(...parsers: Array<Function>): IDecorator;
    function parseFont(str: string, defaultHeight: number): Object;
    function rectVertices(rect: IRect): Array<IPoint>;
    function sortOrderedSprites(sprites: Array<BaseNode>, reversed: boolean);
    function generateID(): string;
    function sizeToPixel(value: number|string, defaultWidth: number);
    function decorators(...funcs: Array<Function>): Function;
    function createSvgPath(path: string|Object): SvgPath;
  }
}