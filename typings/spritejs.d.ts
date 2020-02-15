export = spritejs; // make it a module
export as namespace spritejs; // keep a global namespace called Office

declare namespace spritejs {
  type Attrs = Record<string, any>;
  type playState = 'idel'|'running'|'pending'|'paused'|'finished';

  interface Timeline {
    playbackRate: number;
  }

  interface Timing {
    delay?: number;
    endDelay?: number;
    fill?: string;
    iterations?: number;
    direction?: string;
    duration: number;
    playbackRate?: number;
    easing?: string;
    effect?: null|Function;
  }

  /**
   * Web animation for sprite nodes.
   */
  interface Animation {
    /**
     * The finished promise resolved when the animation's playstate is finished.
     */
    readonly finished: Promise<void>;
    /**
     * The current frame props of the animation.
     */
    readonly frame: Attrs;
    /**
     * The playState of the animation.
     * Valid values are 'idel' or 'running' or 'pending' or 'paused' or 'finished'.
     */
    readonly playState: playState;
    /**
     * The progress of the animation.
     * The value is between [0, 1].
     */
    readonly progress: number;
    /**
     * The ready promise resolved when the animation's playstate is ready.
     */
    readonly ready: Promise<void>;
    readonly timing: Timing;
    baseTimeline: Timeline;
    /**
     * Sets the rate at which the animation is being played back. 
     */
    playbackRate: number;
    /**
     * Apply animation effects to the animation.
     * @param effects The effect function maps.
     * @returns All effect function maps.
     */
    applyEffects(effects: Record<string, Function>):Record<string, Function>;
    /**
     * Cancel the animation.
     * @param preserveState Whether the frame state is preserved when the animation is canceled.
     */
    cancel(preserveState?: boolean):void;
    /**
     * Finish the animation.
     */
    finish(): void;
    /**
     * Pause the animation. Set the timeline's playbackRate to 0.
     */
    pause(): void;
    /**
     * Play the animation.
     */
    play(): void;
  }

  interface Filter {
    type: string;
    args: Array<string|number>;
  }

  interface Renderer {

  }

  interface EventOptions {
    capture: boolean;
    once?: boolean;
  }

  interface Event {

  }

  interface Mesh2d {
    readonly width: number;
    readonly height: number;
    readonly program: WebGLProgram;
    readonly boundingBox: Array<any>;
    readonly boundingCenter: Array<any>;
    readonly lineWidth: number;
    readonly lineCap: string;
    readonly lineJoin: string;
    readonly miterLimit: number;
    readonly strokeStyle: string;
    readonly lineDash: Array<any>|null;
    readonly lineDashOffset: number;
    readonly fillStyle: string;
    readonly gradient: any;
    readonly texture: any;
    readonly enableBlend: boolean;
    readonly filterCanvas: boolean;
    readonly filter: string;
    readonly transformMatrix: Array<number>;
    readonly transformScale: number;
    readonly uniforms: any;
    readonly pass: any;
    readonly meshData: any;
    contours: Array<any>;
    blend: boolean;
    setProgram(program: WebGLProgram|null): void;
    setAttribute(key: string, setter: Function|null): void;
    getOpacity(): number;
    setOpacity(value: number): void;
    getPointAtLength(length: number): number;
    getTotalLength(): number;
    accurate(scale: number): void;
    setResolution(resolution: Resolution): void;
    canIgnore(): boolean;
    setStroke(stroke: any): this;
    setFill(fill: any): this;
    setTexture(texture: any, options?: Record<string, any>): this;
    setCircularGradient(gradient: any): this;
    setLinearGradient(gradient: any): this;
    setRadialGradient(gradient: any): this;
    setGradient(gradient: any): this;
    setUniforms(uniforms: Record<string, any>): this;
    setTransform(...m: Array<number>): this;
    transform(...m: Array<number>): this;
    translate(x: number, y: number): this;
    rotate(rad: number, origin?: Array<number>): this;
    scale(x: number, y: number, origin?: Array<number>): this;
    skew(x: number, y: number, origin?: Array<number>): this;
    clearFilter(): this;
    setColorTransform(...m: Array<number>): this;
    transformColor(...m: Array<number>): this;
    blur(length: number): this;
    brightness(p: number): this;
    contrast(p: number): this;
    dropShadow(offsetX: number, offsetY: number, blurRadius: number, color: Array<number>): this;
    grayscale(p: number): this;
    hueRotate(deg: number): this;
    invert(p: number): this;
    opacity(p: number): this;
    saturate(p: number): this;
    sepia(p: number): this;
    url(svgFilter: string): this;
    isPointCollision(x: number, y: number, type?: string): boolean;
    isPointInPath(x: number, y: number): boolean;
    isPointInStroke(x: number, y: number): boolean;
    addPass(program: WebGLProgram|null, uniforms?: Record<string, any>): void;
  }

  interface MeshCloud {
    readonly hasCloudColor: boolean;
    readonly hasCloudFilter: boolean;
    readonly enableBlend: boolean;
    readonly meshData: any;
    amount: number;
    mesh: Mesh2d;
    canIgnore(): boolean;
    getFilter(idx: number): string;
    setColorTransform(idx: number, m: Array<number>): this;
    getColorTransform(idx: number): Array<number>;
    transformColor(idx: number, m: Array<number>): this;
    setFillColor(idx: number, color: any): void; 
    setStrokeColor(idx: number, color: any): void;
    getCloudRGBA(idx: number): string;
    grayscale(idx: number, p: number): this;
    brightness(idx: number, p: number): this;
    saturate(idx: number, p: number): this;
    contrast(idx: number, p: number): this;
    invert(idx: number, p: number): this;
    sepia(idx: number, p: number): this;
    opacity(idx: number, p: number): this;
    hueRotate(idx: number, deg: number): this;
    setTransform(idx: number, m: Array<number>): this;
    getTransform(idx: number): Array<number>;
    getTextureFrame(idx: number): Array<any>;
    setTextureFrames(frames: Array<any>, options?: Record<string, any>): void;
    setFrameIndex(idx: number, frameIndex: number): void;
    delete(idx: number): void;
    transform(idx:number, m: Array<number>): this;
    translate(idx:number, xy: Array<number>): this;
    rotate(idx:number, rad: number, origin?: Array<number>): this;
    scale(idx:number, xy: Array<number>, origin?: Array<number>): this;
    skew(idx:number, xy: Array<number>, origin?: Array<number>): this;
    isPointCollision(idx:number, xy: Array<number>, type?: string): boolean;
    isPointInPath(idx:number, xy: Array<number>,): boolean;
    isPointInStroke(idx:number, xy: Array<number>,): boolean;    
  }

  interface Resolution {
    width: number;
    height: number;
  }

  interface Trasition {
    cancel(preserveState: boolean): void;
    end(): void;
    reverse(): void;
    attr(prop: string, val: any): Promise<void>;
    attr(attrs: Record<string, any>): Promise<void>;
  }

  interface BoundingClientRect {
    x: number;
    y: number;
    width: number;
    height: number;
    left: number;
    top: number;
    right: number;
    bottom: number;
  }

  export class Arc extends Ellipse {}

  export class Block extends Node {
    get borderSize(): Array<number>;
    get clientSize(): Array<number>;
    get contentSize(): Array<number>;
    get hasBorder(): boolean;
    get isVisible(): boolean;
    get mesh(): Mesh2d;
    get offsetSize(): Array<number>;
    get originalClientRect(): Array<number>;
    get originalContentRect(): Array<number>;
    getBoundingClientRect(): BoundingClientRect;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    updateContours(): void;    
  }

  export class Cloud extends Node {
    get meshCloud(): MeshCloud;
    get isVisible(): boolean;
    get amount(): number;
    set amount(value: number);
    brightness(idx: number, p: number): this;
    contrast(idx: number, p: number): this;
    delete(idx: number): void;
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    getTransform(idx: number): Array<number>;
    grayscale(idx: number, p: number): this;
    hueRotate(idx: number, deg: number): this;
    invert(idx: number, p: number): this;
    isPointCollision(x: number, y: number): boolean;
    opacity(idx: number, p: number): this;
    rotate(idx:number, rad: number, origin?: Array<number>): this;
    saturate(idx: number, p: number): this;
    scale(idx:number, xy: Array<number>, origin?: Array<number>): this;
    setColorTransform(idx: number, m: Array<number>): this;
    setFillColor(idx: number, color: any): void; 
    sepia(idx: number, p: number): this;
    setResolution(resolution: Resolution): void;
    setStrokeColor(idx: number, color: any): void;
    setTransform(idx: number, m: Array<number>): this;
    skew(idx:number, xy: Array<number>, origin?: Array<number>): this;
    transform(idx:number, m: Array<number>): this;
    transformColor(idx: number, m: Array<number>): this;
    translate(idx:number, xy: Array<number>): this;
    updateMesh(): void;
  }

  export class Ellipse extends Path {
    get isVisible(): boolean;
  }

  class Group extends Block {
    get childNodes(): Array<any>;
    get children(): Array<any>;
    get orderedChildren(): Array<any>;
    append(...els: Array<any>): Array<any>;
    appendChild(el: any): any;
    cloneNode(deep: boolean): Node;
    dispatchPointerEvent(event: Event): void;
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    getElementById(id: string): Node|null;
    getElementsByClassName(className: string): Array<Node>;
    getElementsByName(name: string): Array<Node>;
    getElementsByTagName(tagName: string): Array<Node>;
    insertBefore(el: any, ref: any): any;
    querySelector(selector: string): Node|null;
    querySelectorAll(selector: string): Array<Node>;
    replaceChild(el: any, ref: any): any;
    removeAllChildren(): void;
    removeChild(el: any): any;
    reorder(): void;
    seal(): any;
    setResolution(resolution: Resolution): void;
    updateContours(): void;
  }

  export class Label extends Block {
    get contentSize(): Array<number>;
    get text(): string;
    set text(value: string);
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    updateContours(): void;
    updateText(): Promise<any>|null;
  }

  export class LayerWorker extends Worker {
    get id(): string;
    setResolution(resolution: Resolution): void;
    getResolution(): Resolution;
    remove(): void;
    connect(parent: Node, zOrder: number): void;
    disconnect(parent?: Node): void; // TODO: fix disconnect
    dispatchPointerEvent(event: Event): void;
  }

  export class Parallel extends Polyline {
    get isVisible(): boolean;
  }

  export class Path extends Node {
    get isVisible(): boolean;
    get mesh(): Mesh2d;
    get originalContentRect(): Array<number>;
    get originalClientRect(): Array<number>;
    get originalClientCenter(): Array<number>;
    get d(): string;
    set d(value: string);
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    getBoundingClientRect(): BoundingClientRect;
    getPathLength(): number;
    getPointAtLength(len: number): number;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    updateContours(): void;
  }

  export class Polyline extends Path {
    get isVisible(): boolean;
  }

  export class Layer extends Group {
    constructor(attrs?: Attrs);
    get autoRender(): boolean;
    get displayRatio(): number;
    get height(): number;
    get layer(): this;
    get offscreen(): boolean;
    get pass(): Array<Mesh2d>;
    get prepareRender(): Promise<void>;
    get renderer(): Renderer;
    get renderOffset(): Array<number>;
    get timeline(): Timeline;
    get width(): number;
    addPass(options: Record<string, any>): void;
    dispatchPointerEvent(event: any): void;
    forceUpdate(): void;
    getFBO(): any;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    render(options?: Record<string, any>): void;
    setResolution(resolution: Resolution): void;
    tick(handler: Function, options?: Record<string, any>): void;
    toGlobalPos(x: number, y: number): Array<number>;
    toLocalPos(x: number, y: number): Array<number>;   
  }

  export class Node {
    constructor(attrs?: Attrs);
    readonly parent?: Node;
    readonly zOrder?: number;
    get ancestors(): Array<Node>;
    get animations(): Set<Animation>;
    get filters(): Array<Filter>;
    get isVisible(): boolean;
    get layers(): Layer;
    get localMatrix(): Array<number>;
    get program(): WebGLProgram;
    get renderer(): Renderer;
    get renderMatrix(): Array<number>;
    get uniforms(): Record<string, any>;
    get className(): string;
    set className(value: string);
    get id(): string;
    set id(value: string);
    get name(): string;
    set name(value: string);
    get zIndex(): number;
    set zIndex(value: number);
    activateAnimations(): void;
    addEventListener(type: string, listener: Function, options?: EventOptions): this;
    animate(frames: Array<Attrs>, timing: Timing): Animation;
    attr(): Attrs;
    attr(key: number): any;
    attr(key: number, value: any): this;
    attr(key: Attrs): this;
    cloneNode(deep: boolean): Node;
    connect(parent: Node, zOrder: number): void;
    deactivateAnimations(): void;
    disconnect(parent?: Node): void; // TODO: fix disconnect
    dispatchEvent(event: any): void;
    dispatchPointerEvent(event: Event): void;
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    forceUpdate(): void;
    getAttribute(key: string): any;
    getListeners(type: string, options?: EventOptions): Array<Function>; 
    getOffsetPosition(x: number, y: number): Array<number>;
    getResolution(): Resolution;
    isPointCollision(x: number, y: number): boolean;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    setAttribute(key: string, value: any): void;
    setMouseCapture(): void;
    setProgram(program: WebGLProgram): void;
    setShaderAttribute(attrName: string, setter: Function | null): void;
    setUniforms(uniforms: Record<string, any>): void;
    setResolution(resolution: Resolution): void;
    show(): void;
    hide(): void;
    releaseMouseCapture(): void;
    remove(): boolean;
    removeAllListeners(type: string, options?: EventOptions): this;
    removeAttribute(key: string): void;
    removeEventListener(type: string, listener: Function, options?: EventOptions): this;
    transition(sec: number, easing?: string): Trasition;
    updateContours(): void;
  }

  export class Rect extends Path {
    get isVisible(): boolean;
  }

  export class Regular extends Polyline {}

  export class Ring extends Path {
    get isVisible(): boolean;
  }

  class Scene extends Group {
    get hasOffscreenCanvas(): boolean;
    get displayRatio(): number;
    set displayRatio(value: number);
    get height(): number;
    set height(value: number);
    get mode(): string;
    set mode(value: string);
    get width(): number;
    set width(value: number);
    appendChild(layer: any): any;
    forceUpdate(): void;
    insertBefore(layer: any, ref: any): any;
    layer(id?: string, options?: Record<string, any>): Layer|LayerWorker;
    preload(...resources: Array<any>): Promise<Array<any>>;
    removeChild(layer: any): any;
    render(): void;
    replaceChild(layer: any, ref: any): any;
    resize(): void;
    setResolution(resolution: Resolution): void;
    snapshot(options?: Record<string, any>): HTMLCanvasElement|OffscreenCanvas; 
  }

  export class Sprite extends Block {
    get contentSize(): Array<number>;
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
  }

  export class Star extends Polyline {}

  export class Triangle extends Polyline {
    get isVisible(): boolean;
  }

  namespace helpers {
    export function parseColor(color: any): string;
    export function sizeToPixel(value: string, defaultWidth?: number): number;
    export function toArray(value: any, parseNumber?: boolean): Array<any>;
    export function toString(value: any): string|null;
    export function toNumber(value: any): number|null;
  }

  export function createElement(nodeName: string, attrs?: Record<string, any>, children?: Array<any>): Node;
  export function isSpriteNode(node: any): boolean;
  export function registerNode(Node: any, nodeName?: string, nodeType?: number): void;
  export function requestAnimationFrame(callback: Function): number|Symbol;
  export function cancelAnimationFrame(id: number|Symbol): void;

  namespace ENV {
    export const Container: Function|null;
    export const createCanvas: Function|null;
    export const loadImage: Function|null;
  }
}