export = spritejs; // make it a module
export as namespace spritejs; // keep a global namespace called Office

type AnyAttrs = { [ x: string ]: any }

/**
 * Sprite Node's Attributes.
 */
type BaseAttrs = {
  anchor: [number, number],
  anchorX: number,
  anchorY: number,
  bgcolor: string,
  border: [number, string],
  borderBottomLeftRadius: [number, number],
  borderBottomRightRadius: [number, number],
  borderColor: string,
  borderDash: number,
  borderDashOffset: number,
  borderRadius: [number, number, number, number, number, number, number, number],
  borderTopLeftRadius: [number, number],
  borderTopRightRadius: [number, number],
  borderWidth: number,
  boxSizing: 'content-box' | 'border-box',
  class: string,
  height: number,
  padding: [number, number, number, number],
  paddingBottom: number,
  paddingLeft: number,
  paddingRight: number,
  paddingTop: number,
  pos: [number, number],
  size: [number, number],
  sourceRect: Array<any>,
  texture: string,
  textureRect: [number, number, number, number],
  textureRepeat: boolean,
  width: number,
  id: string,
  name: string,
  className: string,
  /* class */
  x: number,
  y: number,
  /* pos */
  transformOrigin: [number, number],
  transform: string,
  translate: [number, number],
  rotate: number,
  scale: [number, number],
  skew: [number, number],
  opacity: number,
  zIndex: number,
  offsetPath: string,
  offsetDistance: number,
  offsetRotate: 'auto' | 'reverse' | number,
  pointerEvents: 'none' | 'visible' | 'visibleFill' | 'visibleStroke' | 'all', // none | visible | visibleFill | visibleStroke | all
  filter: 'none' | string,
  display: '' | string,
};

type NumberOrArrayArgKey = 'scale' | 'skew' | 'anchor' | 'transformOrigin'
type NumberOrArrayAttrs<T, K extends string> = { [ index in K ]: number | [ number, number ] }
type AttrBorderRadius = 'borderRadius'
type AttrPadding = 'padding'

declare namespace spritejs {
  /**
   * Sprite Node's Attributes.
   */
  type Attrs = BaseAttrs & AnyAttrs
  /**
   * attr's argument
   */
  type ArgAttrs = Partial<Omit<BaseAttrs, NumberOrArrayArgKey | AttrBorderRadius | AttrPadding>
    & NumberOrArrayAttrs<BaseAttrs, NumberOrArrayArgKey>
    & { [ k in AttrBorderRadius ]: number | [ number, number ] | [ number, number, number, number ] |
      [ number, number, number, number, number, number ] | [ number, number, number, number, number, number, number, number ] }
    & { [ k in AttrPadding ]: number | [ number, number ] | [ number, number, number ] | [ number | number | number | number ] }
    & AnyAttrs>
  /**
   * Animation playstate.
   */
  type playState = 'idel'|'running'|'pending'|'paused'|'finished';

  /**
   * Custom timeline. https://github.com/spritejs/sprite-timeline
   */
  interface Timeline {
    /**
     * Speed up or slow down the time-lapse. If playbackRate set to negative the time go backwards.
     */
    playbackRate: number;
  }

  /**
   * Timing properties of an animation.
   */
  interface Timing {
    /**
     * The number of milliseconds to delay the start of the animation.
     * Defaults to 0.
     */
    delay?: number;
    /**
     * The number of milliseconds to delay after the end of an animation. 
     * This is primarily of use when sequencing animations based on the end time of another animation.
     * Defaults to 0.
     */
    endDelay?: number;
    /**
     * Dictates whether the animation's effects should be reflected by the element(s) 
     * prior to playing ("backwards"), retained after the animation has completed playing ("forwards"), 
     * or both.
     * @default "none"
     */
    fill?: string;
    /**
     * The number of times the animation should repeat. 
     * Defaults to 1, and can also take a value of Infinity to make it repeat for as long as the element exists.
     */
    iterations?: number;
    /**
     * Whether the animation runs forwards (normal), backwards (reverse), 
     * switches direction after each iteration (alternate), or runs backwards and switches 
     * direction after each iteration (alternate-reverse). Defaults to "normal".
     */
    direction?: string;
    /**
     * The number of milliseconds each iteration of the animation takes to complete. 
     */
    duration: number;
    /**
     * The rate of the animation's change over time. Accepts the pre-defined values "linear", 
     * "ease", "ease-in", "ease-out", and "ease-in-out", or a custom "cubic-bezier" value 
     * like "cubic-bezier(0.42, 0, 0.58, 1)". Defaults to "linear".
     */
    easing?: string;
  }

  /**
   * Web animation for sprite nodes.
   */
  interface Animation {
    readonly effects: Record<string, any>;
    /**
     * The finished promise resolved when the animation's playstate is finished.
     */
    readonly finished: Promise<void>;
    /**
     * The current frame props of the animation.
     */
    readonly frame: Partial<Attrs>;
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
    /**
     * Timing properties of an animation.
     */
    readonly timing: Timing;
    /**
     * Custom timeline. https://github.com/spritejs/sprite-timeline
     */
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
    applyEffects(effects: Record<string, Function>): Record<string, Function>;
    /**
     * Cancel the animation.
     * @param preserveState Whether the frame state is preserved when the animation is canceled.
     */
    cancel(preserveState?: boolean): void;
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

  /**
   * Sprite filter description.
   */
  interface Filter {
    /**
     * The type of filter. It should be 'opacity', 'grayscale', 'drop-shadow' etc.
     */
    type: string;
    /**
     * The arguments of the correspond filter.
     */
    args: Array<string|number>;
  }

  interface Renderer2d {
    /**
     * The canvas instance.
     */
    readonly canvas: HTMLCanvasElement|OffscreenCanvas;
    /**
     * If the renderer is a canvas2d render, canvasRenderer is CanvasRenderingContext2D,
     * otherwise is undefined.
     */
    readonly canvasRenderer: CanvasRenderingContext2D|undefined;
    /**
     * If the renderer is a webgl render, glRenderer is WebGL2RenderingContext
     * or WebGLRenderingContext, otherwise is undefined.
     */    
    readonly glRenderer: WebGL2RenderingContext|WebGLRenderingContext|undefined;
    /**
     * Whether the rendering context is webgl2.
     */
    readonly isWebGL2: boolean;
    /**
     * The renderer options.
     */
    readonly options: Record<string, any>;
    /**
     * The transform matrix of the renderer. It affects all meshes.
     */
    readonly globalTransformMatrix: Array<number>;
    /**
     * Creates webgl texture through an image, a bitmap or a canvas object.
     * @param img 
     */
    createTexture(img: any): WebGLTexture;
    /**
     * Load and create texture from an image URL.
     * loadTexture(textureURL, {useImageBitmap = false} = {})
     * @param textureURL 
     * @param options 
     */
    loadTexture(textureURL: string, options?: Record<string, any>): Promise<WebGLTexture>;
    /**
     * createText(text, {font = '16px arial', fillColor = null, strokeColor = null, strokeWidth = 1} = {})
     * @param text 
     * @param options 
     */
    createText(text: string, options?: Record<string, any>): WebGLTexture|Record<string, any>;
    /**
     * Create a webgl program.
     * createProgram({vertex, fragment, options} = {})
     * @param options 
     */
    createProgram(options?: Record<string, any>): WebGLProgram;
    /**
     * Create a webgl programe as a pass channel.
     * createPassProgram({vertex = defaultPassVertex, fragment = defaultPassFragment, options} = {})
     * @param options 
     */
    createPassProgram(options?: Record<string, any>): WebGLProgram;
    /**
     * Apply program to renderer.
     * @param program 
     * @param attributeOptions 
     */
    useProgram(program: WebGLProgram, attributeOptions?: Record<string, any>): WebGLProgram;
    /**
     * Delete texture.
     * @param texture 
     */
    deleteTexture(texture: WebGLTexture): void;
    /**
     * Clear renderer.
     * @param rect 
     */
    clear(...rect: Array<number>): void;
    /**
     * drawMeshCloud(cloud, {clear = false, program = null} = {})
     * @param cloud 
     * @param options 
     */
    drawMeshCloud(cloud: MeshCloud, options?: Record<string, any>): void;
    /**
     * drawMeshes(meshes, {clear = false, program: drawProgram = null} = {}) 
     * @param meshes 
     * @param options 
     */
    drawMeshes(meshes: Array<Mesh2d>, options?: Record<string, any>): void;
  }

  /**
   * Event options
   */
  interface EventOptions {
    /**
     * A Boolean indicating that events of this type will be dispatched to the registered listener 
     * before being dispatched to any EventTarget beneath it in the DOM tree.
     * Defaults to false.
     */
    capture: boolean;
    /**
     * A Boolean indicating that the listener should be invoked at most once after being added. 
     * If true, the listener would be automatically removed when invoked.
     * Defaults to false.
     */
    once?: boolean;
  }

  class Event {
    /**
     * constructor(originalEvent: any, {bubbles = null} = {})
     * @param originalEvent 
     * @param options
     */
    constructor(originalEvent: any, options: Record<string, any>);
    /**
     * The original event.
     */
    get originalEvent(): any;
    /**
     * The event type.
     */
    get type(): string;
    /**
     * Whether the event bubbles.
     */
    get bubbles(): boolean;
    /**
     * Event detail.
     */
    get detail(): any;
    /**
     * Cancel bubbling.
     */
    cancelBubble: boolean;
    /**
     * Event target.
     */
    target: Node;
    currentTarget: Node;
    layerX: number;
    layerY: number;
    originalX: number;
    originalY: number;
    x: number;
    y: number;
    /**
     * Reset original event object.
     * @param originalEvent 
     */
    setOriginalEvent(originalEvent: any): void;
    /**
     * Stop bubbling.
     */
    stopPropagation(): void;
  }

  interface Mesh2d {
    /**
     * The corresponding WebGLProgram.
     * Defaults to null.
     */
    readonly program: WebGLProgram|null;
    /**
     * The bounding box of the mesh. [[x, y], [width, height]]
     */
    readonly boundingBox: Array<any>;
    /**
     * The center point of the mesh.
     */
    readonly boundingCenter: Array<any>;
    readonly fillRule: string;
    /**
     * Stroke lineWidth.
     */
    readonly lineWidth: number;
    /**
     * Stroke lineCap.
     */
    readonly lineCap: string;
    /**
     * Stroke lineJoin.
     */
    readonly lineJoin: string;
    /**
     * Stroke miterLimit.
     */
    readonly miterLimit: number;
    /**
     * Stroke style.
     */
    readonly strokeStyle: string;
    /**
     * Stroke lineDash.
     */
    readonly lineDash: Array<any>|null;
    /**
     * Stroke lineDash offset.
     */
    readonly lineDashOffset: number;
    /**
     * Fill style.
     */
    readonly fillStyle: string;
    /**
     * Color gradients.
     */
    readonly gradient: any;
    /**
     * The texture of the mesh.
     */
    readonly texture: any;
    /**
     * Whether enable opacity.
     */
    readonly enableBlend: boolean;
    /**
     * Whether to use canvas to apply filter.
     */
    readonly filterCanvas: boolean;
    /**
     * The filters applied to the mesh.
     */
    readonly filter: string;
    /**
     * The transform matrix of the mesh.
     */
    readonly transformMatrix: Array<number>;
    readonly transformScale: number;
    /**
     * The uniforms apply to the webgl program when drawing the mesh.
     */
    readonly uniforms: any;
    /**
     * The pass channel of the mesh.
     */
    readonly pass: Array<Mesh2d>;
    /**
     * The mesh data for rendering.
     */
    readonly meshData: any;
    /**
     * The 2d polylines. https://github.com/mattdesl/svg-path-contours
     */
    contours: Array<any>;
    /**
     * Force renderer to render or not to render alpha opacity. 
     */
    blend: boolean;
    /**
     * Use a custom WebGLProgram when drawing the mesh.
     * @param program 
     */
    setProgram(program: WebGLProgram|null): void;
    /**
     * Set shader attributes to program.
     * @param key 
     * @param setter 
     */
    setAttribute(key: string, setter: Function|null): void;
    /**
     * Get opacity of the mesh.
     */
    getOpacity(): number;
    /**
     * Set opacity of the mesh.
     * @param value 
     * @returns the opacity of the mesh.
     */
    setOpacity(value: number): void;
    /**
     * The point at a given distance along the path.
     * @param length 
     * @returns the point at a given distance along the path.
     */
    getPointAtLength(length: number): Array<number>;
    /**
     * The total length of the path.
     * @returns the total length of the path.
     */
    getTotalLength(): number;
    accurate(scale: number): void;
    /**
     * Whether the mesh can ignore when rendering.
     */
    canIgnore(): boolean;
    setClipPath(path: string): void;
    /**
     * Set stroke options.
     * @param stroke 
     */
    setStroke(stroke: any): this;
    /**
     * Set fill options.
     * @param fill 
     */
    setFill(fill: any): this;
    /**
     * Set texture of the mesh.
     * @param texture 
     * @param options 
     */
    setTexture(texture: any, options?: Record<string, any>): this;
    setCircularGradient(gradient: any): this;
    setLinearGradient(gradient: any): this;
    setRadialGradient(gradient: any): this;
    /**
     * Set the color gradient of the mesh.
     * @param gradient 
     */
    setGradient(gradient: any): this;
    /**
     * Set the uniforms to the program before rendering.
     * @param uniforms 
     */
    setUniforms(uniforms: Record<string, any>): this;
    /**
     * Update the transform matrix.
     * @param m 
     */
    setTransform(...m: Array<number>): this;
    transform(...m: Array<number>): this;
    translate(x: number, y: number): this;
    rotate(rad: number, origin?: Array<number>): this;
    scale(x: number, y: number, origin?: Array<number>): this;
    skew(x: number, y: number, origin?: Array<number>): this;
    /**
     * Remove all filters.
     */
    clearFilter(): this;
    /**
     * Update the color filter matrix.
     * @param m 
     */
    setColorTransform(...m: Array<number>): this;
    transformColor(...m: Array<number>): this;
    /**
     * Applies a Gaussian blur to the drawing. It defines the value of the standard deviation to 
     * the Gaussian function, i.e., how many pixels on the screen blend into each other; thus, 
     * a larger value will create more blur. A value of 0 leaves the input unchanged.
     * @param length 
     */
    blur(length: number): this;
    /**
     * Applies a linear multiplier to the drawing, making it appear brighter or darker. 
     * A value under 1 darkens the image, while a value over 1 brightens it. A value of 0 
     * will create an image that is completely black, while a value of 1 leaves the input 
     * unchanged.
     * @param p 
     */
    brightness(p: number): this;
    /**
     * Adjusts the contrast of the drawing. A value of 0 will create a drawing that is 
     * completely black. A value of 1 leaves the drawing unchanged.
     * @param p 
     */
    contrast(p: number): this;
    /**
     * Applies a drop shadow effect to the drawing. A drop shadow is effectively a blurred, 
     * offset version of the drawing's alpha mask drawn in a particular color, composited 
     * below the drawing. 
     * @param offsetX Specifies the horizontal distance of the shadow.
     * @param offsetY Specifies the vertical distance of the shadow.
     * @param blurRadius The larger this value, the bigger the blur, so the shadow becomes bigger and lighter. Negative values are not allowed.
     * @param color 
     */
    dropShadow(offsetX: number, offsetY: number, blurRadius: number, color: Array<number>): this;
    /**
     * Converts the drawing to grayscale. A value of 1 is completely grayscale. 
     * A value of 0 leaves the drawing unchanged.
     * @param p 
     */
    grayscale(p: number): this;
    /**
     * A CSS <angle>. Applies a hue rotation on the drawing. A value of 0deg leaves
     * the input unchanged.
     * @param deg 
     */
    hueRotate(deg: number): this;
    /**
     * Inverts the drawing. A value of 1 means complete inversion. A value of 0
     * leaves the drawing unchanged.
     * @param p 
     */
    invert(p: number): this;
    /**
     * Applies transparency to the drawing. A value of 0 means completely transparent.
     * A value of 1 leaves the drawing unchanged.
     * @param p 
     */
    opacity(p: number): this;
    /**
     * Saturates the drawing. A value of 0 means completely un-saturated. A value of 1 
     * leaves the drawing unchanged.
     * @param p 
     */
    saturate(p: number): this;
    /**
     * Converts the drawing to sepia. A value of 1 means completely sepia. A value of 0
     * leaves the drawing unchanged.
     * @param p 
     */
    sepia(p: number): this;
    /**
     * A CSS <url>. Takes an IRI pointing to an SVG filter element, which may be embedded
     * in an external XML file.
     * @param svgFilter 
     */
    url(svgFilter: string): this;
    /**
     * Determines whether a given point is within the fill or stroke shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the fill or stroke.
     * @param x 
     * @param y 
     * @param type 'fill'|'stroke'
     */
    isPointCollision(x: number, y: number, type?: string): boolean;
    /**
     * Determines whether a given point is within the fill shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the fill.
     * @param x 
     * @param y 
     */
    isPointInFill(x: number, y: number): boolean;
    /**
     * Determines whether a given point is within the stroke shape of an element. Normal hit 
     * testing rules apply; the value of the pointer-events property on the element determines 
     * whether a point is considered to be within the stroke.
     * @param x 
     * @param y 
     */
    isPointInStroke(x: number, y: number): boolean;
    /**
     * Add a pass channel to the mesh.
     * @param program 
     * @param uniforms 
     */
    addPass(program: WebGLProgram|null, uniforms?: Record<string, any>): void;
  }


  /**
   * MeshCloud can draw multiple meshes of other elements on the canvas at the same time.
   */
  interface MeshCloud {
    /**
     * Whether the meshes has fill color or stroke color.
     */
    readonly hasCloudColor: boolean;
    /**
     * Whether the meshes has color filter.
     */
    readonly hasCloudFilter: boolean;
    /**
     * Whether enable opacity.
     */
    readonly enableBlend: boolean;
    /**
     * The mesh data for rendering.
     */
    readonly meshData: any;
    readonly program: WebGLProgram;
    readonly uniforms: Record<string, any>;
    /**
     * The number of meshes drawn.
     */
    amount: number;
    /**
     * Get the geometry mesh.
     */
    mesh: Mesh2d;
    /**
     * Whether the mesh can ignore when rendering.
     */
    canIgnore(): boolean;
    delete(idx: number): void;
    /**
     * Get filter string.
     * @param idx 
     */
    getFilter(idx: number): string;
    /**
     * Update the color filter matrix.
     * @param idx
     * @param m 
     */
    setColorTransform(idx: number, m: Array<number>): this;
    initBuffer(offset: number): void;
    /**
     * Get the color filter matrix.
     * @param idx
     */    
    getColorTransform(idx: number): Array<number>;
    transformColor(idx: number, m: Array<number>): this;
    /**
     * Set fill color to specified mesh.
     * @param idx 
     * @param color 
     */
    setFillColor(idx: number, color: any): void; 
    /**
     * Set stroke color to specified mesh.
     * @param idx 
     * @param color 
     */
    setStrokeColor(idx: number, color: any): void;
    /**
     * Use a custom WebGLProgram when drawing the mesh.
     * @param program 
     */
    setProgram(program: WebGLProgram|null): void;
    /**
     * Set the uniforms to the program before rendering.
     * @param uniforms 
     */
    setUniforms(uniforms: Record<string, any>): this;
    /**
     * Get the rgba color of specified mesh.
     * @param idx 
     */
    getCloudRGBA(idx: number): string;
    /**
     * Converts the drawing to grayscale. A value of 1 is completely grayscale. 
     * A value of 0 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    grayscale(idx: number, p: number): this;
    /**
     * Adjusts the contrast of the drawing. A value of 0 will create a drawing that is 
     * completely black. A value of 1 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    brightness(idx: number, p: number): this;
    /**
     * Saturates the drawing. A value of 0 means completely un-saturated. A value of 1 
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    saturate(idx: number, p: number): this;
    /**
     * Adjusts the contrast of the drawing. A value of 0 will create a drawing that is 
     * completely black. A value of 1 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    contrast(idx: number, p: number): this;
    /**
     * Inverts the drawing. A value of 1 means complete inversion. A value of 0
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    invert(idx: number, p: number): this;
    /**
     * Converts the drawing to sepia. A value of 1 means completely sepia. A value of 0
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    sepia(idx: number, p: number): this;
    /**
     * Applies transparency to the drawing. A value of 0 means completely transparent.
     * A value of 1 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    opacity(idx: number, p: number): this;
    /**
     * A CSS <angle>. Applies a hue rotation on the drawing. A value of 0deg leaves
     * the input unchanged.
     * @param idx 
     * @param deg 
     */
    hueRotate(idx: number, deg: number): this;
    /**
     * Update the transform matrix.
     * @param idx 
     * @param m 
     */
    setTransform(idx: number, m: Array<number>): this;
    /**
     * Get the transform matrix of the specified mesh.
     * @param idx
     */
    getTransform(idx: number): Array<number>;
    getTextureFrame(idx: number): Array<any>;
    setTextureFrames(frames: Array<any>, options?: Record<string, any>): void;
    setFrameIndex(idx: number, frameIndex: number): void;
    transform(idx:number, m: Array<number>): this;
    translate(idx:number, xy: Array<number>): this;
    rotate(idx:number, rad: number, origin?: Array<number>): this;
    scale(idx:number, xy: Array<number>, origin?: Array<number>): this;
    skew(idx:number, xy: Array<number>, origin?: Array<number>): this;
    /**
     * Determines whether a given point is within the fill or stroke shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the fill or stroke.
     * @param idx
     * @param xy
     * @param type 'fill'|'stroke'
     */
    isPointCollision(idx:number, xy: Array<number>, type?: string): boolean;
    /**
     * Determines whether a given point is within the fill shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the fill.
     * @param idx
     * @param xy
     * @param type 'fill'|'stroke'
     */
    isPointInFill(idx:number, xy: Array<number>): boolean;
    /**
     * Determines whether a given point is within the stroke shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the stroke.
     * @param idx
     * @param xy
     * @param type 'fill'|'stroke'
     */
    isPointInStroke(idx:number, xy: Array<number>): boolean;    
  }

  interface Resolution {
    /**
     * The width of the coordinate.
     */
    width: number;
    /**
     * The height of the coordinate.
     */
    height: number;
  }

  /**
   * Transitions enable you to define the transition between two states of an element. 
   */
  interface Trasition {
    /**
     * Cancel the trasition.
     * @param preserveState 
     */
    cancel(preserveState: boolean): void;
    /**
     * Finish the transition.
     */
    end(): void;
    /**
     * Reverse the states of the transition.
     */    
    reverse(): void;
    /**
     * Set element attribute.
     * @param prop 
     * @param val 
     */
    attr<T extends keyof BaseAttrs | string & {}>(prop: T, val: ArgAttrs[T]): Promise<void>;
    /**
     * Set element attributes.
     * @param attrs 
     */
    attr(attrs: ArgAttrs): Promise<void>;
  }

  /**
   * Returns a RectReadOnly which in essence describes a rectangle describing the smallest 
   * rectangle that contains the entire target element.
   */
  interface BoundingClientRect {
    /**
     * The x coordinate of the Rect's origin.
     */
    x: number;
    /**
     * The y coordinate of the Rect's origin.
     */
    y: number;
    /**
     * The width of the Rect.
     */
    width: number;
    /**
     * The height of the Rect.
     */
    height: number;
    /**
     * Returns the left coordinate value of the Rect (usually the same as x).
     */
    left: number;
    /**
     * Returns the top coordinate value of the Rect (usually the same as y.)
     */
    top: number;
    /**
     * Returns the right coordinate value of the Rect (usually the same as x + width).
     */
    right: number;
    /**
     * Returns the bottom coordinate value of the Rect (usually the same as y + height).
     */
    bottom: number;
  }

  /**
   * Arc element can draw an arc, sector or circle.
   */
  export class Arc extends Ellipse {
    static Attr: any;
  }

  /**
   * Block is the base class of all block elements.
   */
  export class Block extends Node {
    /**
     * Element's border size, equal to [content + padding + half of border].
     */
    get borderSize(): Array<number>;
    /**
     * Element's content box size, equal to [content + padding].
     */
    get clientSize(): Array<number>;
    /**
     * Element's content size.
     */
    get contentSize(): Array<number>;
    /**
     * If there is a border.
     */
    get hasBorder(): boolean;
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
    /**
     * Get the element's geometry mesh data.
     */
    get mesh(): Mesh2d;
    /**
     * Element's content box and border size, equal to [content + padding + border].
     */
    get offsetSize(): Array<number>;
    /**
     * Client box area before transform.
     */
    get originalClientRect(): Array<number>;
    /**
     * Content rect before transform.
     */
    get originalContentRect(): Array<number>;
    /**
     * Returns a RectReadOnly which in essence describes a rectangle describing the smallest 
     * rectangle that contains the entire target element.
     */
    getBoundingClientRect(): BoundingClientRect;
    /**
     * The element's attribute value change.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Recalculate the mesh geometries.
     */
    updateContours(): void;    
  }

  /**
   * Cloud can draw multiple meshes of other elements on the canvas at the same time.
   */
  export class Cloud extends Node {
    /**
     * Create cloud elements with node elements as a template.
     * @param node 
     * @param amount 
     */
    constructor(node: Mesh2d, amount: number);
    /**
     * Get the mesh-cloud object.
     */
    get meshCloud(): MeshCloud;
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
    /**
     * Get the number of elements drawn.
     */
    get amount(): number;
    /**
     * Set the number of elements drawn.
     */
    set amount(value: number);
    /**
     * Adjusts the contrast of the drawing. A value of 0 will create a drawing that is 
     * completely black. A value of 1 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    brightness(idx: number, p: number): this;
    /**
     * Applies a drop shadow effect to the drawing. A drop shadow is effectively a blurred, 
     * offset version of the drawing's alpha mask drawn in a particular color, composited 
     * below the drawing. 
     * @param idx 
     * @param p 
     */
    contrast(idx: number, p: number): this;
    /**
     * Delete the specified mesh data.
     * @param idx
     */
    delete(idx: number): void;
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * Get the transform matrix of the specified mesh.
     * @param idx
     */
    getTransform(idx: number): Array<number>;
    /**
     * Converts the drawing to grayscale. A value of 1 is completely grayscale. 
     * A value of 0 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    grayscale(idx: number, p: number): this;
    /**
     * A CSS <angle>. Applies a hue rotation on the drawing. A value of 0deg leaves
     * the input unchanged.
     * @param idx 
     * @param deg 
     */
    hueRotate(idx: number, deg: number): this;
    /**
     * Inverts the drawing. A value of 1 means complete inversion. A value of 0
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    invert(idx: number, p: number): this;
    /**
     * Determines whether a given point is within the fill or stroke shape of an element. Normal hit
     * testing rules apply; the value of the pointer-events property on the element determines
     * whether a point is considered to be within the fill or stroke.
     * @param x 
     * @param y 
     * @param type 'fill'|'stroke'
     */
    isPointCollision(x: number, y: number): boolean;
    /**
     * Applies transparency to the drawing. A value of 0 means completely transparent.
     * A value of 1 leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    setOpacity(idx: number, p: number): this;
    rotate(idx:number, rad: number, origin?: Array<number>): this;
    /**
     * Saturates the drawing. A value of 0 means completely un-saturated. A value of 1 
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    saturate(idx: number, p: number): this;
    scale(idx:number, xy: Array<number>, origin?: Array<number>): this;
    /**
     * Update the color filter matrix.
     * @param idx
     * @param m 
     */
    setColorTransform(idx: number, m: Array<number>): this;
    /**
     * Set fill color to specified mesh.
     * @param idx 
     * @param color 
     */
    setFillColor(idx: number, color: any): void;
    /**
     * Converts the drawing to sepia. A value of 1 means completely sepia. A value of 0
     * leaves the drawing unchanged.
     * @param idx 
     * @param p 
     */
    sepia(idx: number, p: number): this;
    /**
     * Set the resolution of the mesh.
     * @param resolution {width, height}
     */
    setResolution(resolution: Resolution): void;
    /**
     * Set stroke color to specified mesh.
     * @param idx 
     * @param color 
     */
    setStrokeColor(idx: number, color: any): void;
    /**
     * Update the transform matrix.
     * @param idx 
     * @param m 
     */
    setTransform(idx: number, m: Array<number>): this;
    skew(idx:number, xy: Array<number>, origin?: Array<number>): this;
    transform(idx:number, m: Array<number>): this;
    transformColor(idx: number, m: Array<number>): this;
    translate(idx:number, xy: Array<number>): this;
    /**
     * Update mesh data.
     */
    updateMesh(): void;
  }

  /**
   * The ellipse element can draw an elliptical arc, sector or ellipse.
   */
  export class Ellipse extends Path {
    static Attr: any;
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  export class Color {
    /**
     * constructor(r = 0, g = 0, b = 0, a = 0)
     * @param r 
     * @param g 
     * @param b 
     * @param a 
     */
    constructor(r: number, g: number, b: number, a: number);
    get r(): number;
    set r(v: number);
    get g(): number;
    set g(v: number);
    get b(): number;
    set b(v: number);
    get a(): number;
    set a(v: number);
    get hex(): string;
    get rgba(): string;
    fromColor(color: any): this;
  }

  /**
   * Create a gradient object.
   */
  class Gradient {
    /**
     * constructor({vector, colors})
     * @param options 
     */
    constructor(options: Record<string, any>);
    /**
     * Returns the corresponding gradient string.
     */
    toString(): string;
  }

  /**
   * The Group element creates a group.
   */
  class Group extends Block {
    /**
     * The child elements.
     */
    get childNodes(): Array<any>;
    /**
     * The child elements.
     */
    get children(): Array<any>;
    /**
     * Child elements sorted by zindex and zorder.
     */
    get orderedChildren(): Array<any>;
    /**
     * Add elements to the group.
     * @param els 
     */
    append(...els: Array<any>): Array<any>;
    /**
     * Add an element to the group.
     * @param el 
     */
    appendChild(el: any): any;
    /**
     * Copy a group. If deep parameter is true, the child elements in the group
     * are copied at the same time.
     * @param deep 
     */
    cloneNode(deep?: boolean): Node;
    /**
     * Dispatch a mouse or touch event.
     * @param event 
     */
    dispatchPointerEvent(event: Event): void;
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * Returns the child element of the specified ID.
     * @param id 
     */
    getElementById(id: string): Node|null;
    /**
     * Returns the list of child elements for the specified className.
     * @param className 
     */
    getElementsByClassName(className: string): Array<Node>;
    /**
     * Returns a list of child elements for the specified name.
     * @param name 
     */
    getElementsByName(name: string): Array<Node>;
    /**
     * Returns a list of child elements of the specified type.
     * @param tagName 
     */
    getElementsByTagName(tagName: string): Array<Node>;
    /**
     * Before inserting the specified element into the ref element, if ref is null, 
     * then el will be added to the end of the group. If ref is not null and is not 
     * a child element of the group, an exception will be thrown.
     * @param el 
     * @param ref 
     */
    insertBefore(el: any, ref: any): any;
    /**
     * Returns the specified child element based on the selector.
     * @param selector 
     */
    querySelector(selector: string): Node|null;
    /**
     * Returns a list of all matching child elements based on the selector.
     * @param selector 
     */
    querySelectorAll(selector: string): Array<Node>;
    /**
     * Replace the ref element with a new el element. If the ref element is not in the current group,
     * an exception is thrown.
     * @param el 
     * @param ref 
     */
    replaceChild(el: any, ref: any): any;
    /**
     * Remove all child elements of the group.
     */
    removeAllChildren(): void;
    /**
     * Moves the specified element out of the group.
     * @param el 
     */
    removeChild(el: any): any;
    /**
     * Reorder children in the order of zindex and zorder, which updates orderedChildren.
     */
    reorder(): void;
    /**
     * Seal child elements to improve performance.
     */
    seal(): any;
    /**
     * Set the context resolution of the element.
     * @param resolution 
     */
    setResolution(resolution: Resolution): void;
    /**
     * Update the geometric figure of the drawing.
     */
    updateContours(): void;
  }
  
  interface TextImage {
    image?: HTMLCanvasElement,
    rect?: [number, number, number, number]
  }
  /**
   * Label draws a piece of text.
   */
  export class Label extends Block {
    constructor(text: string);
    constructor(attrs?: Record<string, any>);
    /**
     * Element's content size.
     */
    get contentSize(): Array<number>;
    get textImage(): TextImage;
    get textImageReady(): Promise<any>;
    get text(): string;
    set text(value: string);
    get textContent(): string;
    set textContent(value: string);
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * The action when an element attribute value is changed.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Update the geometric figure of the drawing.
     */
    updateContours(): void;
    updateText(): Promise<any>|null;
  }

  /**
   * The layer element represents a layer that binds to a canvas context.
   */
  export class Layer extends Group {
    constructor(options?: Record<string, any>);
    canvas: HTMLCanvasElement|OffscreenCanvas;
    /**
     * Whether to render automatically depends on the parameters when creating a layer.
     */
    get autoRender(): boolean;
    /**
     * The display pixel ratio is determined according to the scene parameters. 
     */
    get displayRatio(): number;
    /**
     * The resolution height.
     */
    get height(): number;
    /**
     * Get the layer object in the current paint context.
     */
    get layer(): this;
    get gl(): WebGLRenderingContext|WebGL2RenderingContext|null;
    /**
     * If the canvas of the layer is offscreen, this property is true.
     */
    get offscreen(): boolean;
    /**
     * Get the pass channel of the layer.
     */
    get pass(): Array<Mesh2d>;
    /**
     * A promise, corresponding to the current frame rendering state, is only valid when autoRender is true.
     */
    get prepareRender(): Promise<void>;
    /**
     * Get the rendered object in the current paint context.
     */
    get renderer(): any;
    /**
     * The coordinate offset of the layer from the scene's container.
     */
    get renderOffset(): Array<number>;
    /**
     * The timeline used to control the animations.
     */
    get timeline(): Timeline;
    /**
     * The resolution width.
     */
    get width(): number;
    /**
     * Add pass channel of the layer.
     * @param options 
     */
    addPass(options: Record<string, any>): void;
    deleteTexture(image:any): boolean;
    /**
     * Dispatch a mouse or touch event.
     * @param event 
     */
    dispatchPointerEvent(event: any): void;
    forceContextLoss(): boolean;
    /**
     * Force the canvas to be redrawn.
     */
    forceUpdate(): void;
    /**
     * Get the frame buffer object.
     */
    getFBO(): any;
    /**
     * The action when an element attribute value is changed.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Draw content onto canvas.
     * @param options 
     */
    render(options?: Record<string, any>): void;
    /**
     * Set the context resolution of the element.
     * @param resolution 
     */
    setResolution(resolution: Resolution): void;
    /**
     * Set animation frame to update layer periodically.
     * @param handler 
     * @param options 
     */
    tick(handler: (t: number, p: number) => void, options?: Record<string, any>): any;
    /**
     * Convert the layer coordinates to DOM event coordinates.
     * @param x 
     * @param y 
     */
    toGlobalPos(x: number, y: number): Array<number>;
    /**
     * Convert DOM event coordinates to layer coordinates.
     * @param x 
     * @param y 
     */
    toLocalPos(x: number, y: number): Array<number>;   
  }

  /**
   * LayerWorker inherits from a worker object. It can render a layer in the web worker.
   */
  export class LayerWorker extends Worker {
    /**
     * The ID of the LayerWorker.
     */
    get id(): string;
    /**
     * Set the resolution of the LayerWorker.
     * @param resolution 
     */
    setResolution(resolution: Resolution): void;
    /**
     * Get the resolution of the LayerWorker.
     * @param resolution 
     */
    getResolution(): Resolution;
    /**
     * Remove from parent.
     */
    remove(): void;
    /**
     * When the element is added to the context tree, the function is called 
     * and parent and zorder are assigned to the element.
     * @param parent 
     * @param zOrder 
     */
    connect(parent: Node, zOrder: number): void;
    /**
     * When the element is removed from the context tree, the function is called
     * and the parent and zorder properties are removed.
     * @param parent 
     */
    disconnect(parent?: Node): void; // TODO: fix disconnect
    /**
     * Dispatch a mouse or touch event.
     * @param event 
     */
    dispatchPointerEvent(event: Event): void;
  }

  /**
   * Node is the common base class for all SpriteJS elements.
   */
  export class Node {
    static Attr: any;
    constructor(attrs?: Record<string, any>|any);
    /**
     * The attribute object of the current element.
     */
    attributes: Partial<Attrs>;
    /**
     * The parent of the node.
     */
    readonly parent?: Node;
    readonly parentNode?: Node;
    /**
     * Group sort children by zIndex and zOrder.
     */
    readonly zOrder?: number;
    readonly nodeType?: number;
    readonly nodeName?: string;
    readonly tagName?: string;
    readonly ownerDocument?: Record<string, any>;
    readonly namespaceURI?: string;
    /**
     * Get a list of ancestor elements for the current element.
     */
    get ancestors(): Array<Node>;
    /**
     * Get all animations in the execution of the current element.
     */
    get animations(): Set<Animation>;
    /**
     * Get the filters on the current element.
     */
    get filters(): Array<Filter>;
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
    /**
     * Get the layer object in the current paint context.
     */
    get layers(): Layer;
    /**
     * Get the transform matrix of the current element relative to the parent element.
     */
    get localMatrix(): Array<number>;
    get nextSibling(): Node|undefined;
    get previousSibling(): Node|undefined;
    get opacity(): number;
    /**
     * Get custom WebGLProgram.
     */
    get program(): WebGLProgram;
    /**
     * Get the rendered object in the current paint context.
     */
    get renderer(): any;
    /**
     * Get the transform matrix of the current element relative to the canvas coordinate system.
     */
    get renderMatrix(): Array<number>;
    /**
     * Get uniforms of the WebGLProgram.
     */
    get uniforms(): Record<string, any>;
    get className(): string;
    set className(value: string);
    get id(): string;
    set id(value: string);
    get name(): string;
    set name(value: string);
    get zIndex(): number;
    set zIndex(value: number);
    get shaderAttrs(): Record<string, any>;
    get worldPosition(): Array<number>;
    get worldRotation(): number;
    get worldScaling(): Array<number>;
    /**
     * Activate all animations in progress on the element.
     */
    activateAnimations(): void;
    /**
     * Register event listeners.
     * @param type 
     * @param listener 
     * @param options 
     */
    addEventListener(type: string, listener: (event: Event) => void, options?: EventOptions): this;
    /**
     * Perform the animations.
     * @param frames 
     * @param timing 
     */
    animate(frames: Array<ArgAttrs>, timing: Timing): Animation;
    /**
     * Get all attributes.
     */
    attr(): Attrs;
    /**
     * Get attribute by key.
     * @param key 
     */
    attr<T extends keyof BaseAttrs | string & {}>(key: T): ArgAttrs[T];
    /**
     * Set attribute by key and value.
     * @param key 
     * @param value 
     */
    attr<T extends keyof BaseAttrs | string & {}>(key: T, value: ArgAttrs[T]): this;
    /**
     * Set attributes.
     * @param key 
     */
    attr(key: ArgAttrs): this;
    /**
     * Copy the entire element.
     * @param deep 
     */
    cloneNode(deep?: boolean): Node;
    /**
     * When the element is added to the context tree, the function is called
     * and parent and zorder are assigned to the element.
     * @param parent 
     * @param zOrder 
     */
    connect(parent: Node, zOrder: number): void;
    contains(node: Node): boolean;
    /**
     * Stops all animations in progress on the element.
     */
    deactivateAnimations(): void;
    /**
     * When the element is added to the context tree, the function is called
     * and parent and zorder are assigned to the element.
     * @param parent 
     */
    disconnect(parent?: Node): void; // TODO: fix disconnect
    /**
     * Dispatch a custom event.
     * @param event 
     */
    dispatchEvent(event: any): void;
    /**
     * Dispatch a mouse or touch event.
     * @param event 
     */
    dispatchPointerEvent(event: Event): void;
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * Force the canvas to be redrawn.
     */
    forceUpdate(): void;
    /**
     * Get element attribute values.
     * @param key 
     */
    getAttribute(key: string): any;
    /**
     * Get the event listeners.
     * @param type 
     * @param options 
     */
    getListeners(type: string, options: EventOptions): Array<(event: Event) =>void>;
    getNodeNearBy(distance: number): Node|undefined;
    /**
     * Transform the specified [x, y] coordinates relative of the layer to the coordinates
     * of the current element, with the anchor as the origin [0, 0].
     * @param x 
     * @param y 
     */
    getOffsetPosition(x: number, y: number): Array<number>;
    getWorldPosition(offsetX: number, offsetY: number): Array<number>;
    /**
     * Get the context resolution of the element.
     */
    getResolution(): Resolution;
    /**
     * Determine whether the event coordinates intersect the element.
     * @param x 
     * @param y 
     */
    isPointCollision(x: number, y: number): boolean;
    /**
     * The action when an element attribute value is changed.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Set the element attribute value.
     * @param key 
     * @param value 
     */
    setAttribute(key: string, value: any): void;
    /**
     * Capture mouse pointer.
     */
    setMouseCapture(): void;
    /**
     * Set custom WebGLProgram to the element.
     * @param program 
     */
    setProgram(program: WebGLProgram): void;
    /**
     * Set custom shader attributes to custom WebGLProgram.
     * @param attrName 
     * @param setter 
     */
    setShaderAttribute(attrName: string, setter: Function | null): void;
    /**
     * Set custom uniforms to custom WebGLProgram.
     * @param uniforms 
     */
    setUniforms(uniforms: Record<string, any>): void;
    /**
     * Set the context resolution of the element.
     * @param resolution 
     */
    setResolution(resolution: Resolution): void;
    show(): void;
    hide(): void;
    /**
     * Release mouse pointer.
     */
    releaseMouseCapture(): void;
    /**
     * Remove the element from its parent.
     */
    remove(): boolean;
    /**
     * Remove all listeners of the specified type.
     * @param type 
     * @param options 
     */
    removeAllListeners(type: string, options?: EventOptions): this;
    /**
     * Remove the element attribute value and restore it to the default value.
     * @param key 
     */
    removeAttribute(key: string): void;
    /**
     * Remove the event listener.
     * @param type 
     * @param listener 
     * @param options 
     */
    removeEventListener(type: string, listener: (event: Event) => void, options?: EventOptions): this;
    /**
     * Create a transition animation.
     * @param sec 
     * @param easing 
     */
    transition(sec: number, easing?: string): Trasition;
    /**
     * Update the geometric figure of the drawing.
     */
    updateContours(): void;
  }

  /**
   * The Parallel element draws a parallelogram.
   */
  export class Parallel extends Polyline {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  /**
   * The path element draws an SVG path.
   */
  export class Path extends Node {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
    /**
     * Get the element's geometry mesh data.
     */
    get mesh(): Mesh2d;
    /**
     * Content box area before transform.
     */
    get originalContentRect(): Array<number>;
    /**
     * Content box area before transform.
     */
    get originalClientRect(): Array<number>;
    /**
     * Client center point before transform.
     */
    get originalClientCenter(): Array<number>;
    /**
     * Get the svg-path string.
     */
    get d(): string;
    /**
     * Set the svg-path string.
     */
    set d(value: string);
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * Get the actual drawing area information of the element.
     */
    getBoundingClientRect(): BoundingClientRect;
    /**
     * Get the total length of path.
     */
    getPathLength(): number;
    /**
     * Get the original coordinates of the point where the specified length is located.
     * @param len 
     */
    getPointAtLength(len: number): Array<number>;
    /**
     * The action when an element attribute value is changed.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
    /**
     * Update the geometric figure of the drawing.
     */
    updateContours(): void;
  }

  /**
   * The Polyline element draws a polyline or polygon.
   */
  export class Polyline extends Path {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  /**
   * The Rect element draws a rectangle.
   */
  export class Rect extends Path {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  /**
   * The Regular element draws a regular polygon.
   */
  export class Regular extends Polyline {}

  /**
   * The Ring element draws a torus or arc.
   */
  export class Ring extends Path {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  interface WorkerOptions {
    worker: true,
  }

  /**
   * Scene manages one or more layers.
   */
  class Scene extends Group {
    constructor(options: Record<string, any>);
    /**
     * If there is offscreen canvas, different rendering modes will be choosen 
     * according to the situation.
     */
    get hasOffscreenCanvas(): boolean;
    /**
     * Get the pixel ratio.
     */
    get displayRatio(): number;
    /**
     * Set the pixel ratio.
     */
    set displayRatio(value: number);
    /**
     * Get the resolution height.
     */
    get height(): number;
    /**
     * Set the resolution height.
     */
    set height(value: number);
    /**
     * Get the adaptation mode.
     */
    get mode(): string;
    /**
     * Set the adaptation mode.
     */
    set mode(value: string);
    /**
     * Get the resolution width.
     */
    get width(): number;
    /**
     * Set the resolution width.
     */
    set width(value: number);
    /**
     * Add a layer to the scene.
     * @param layer 
     */
    appendChild(layer: any): any;
    /**
     * Force the canvas to be redrawn.
     */
    forceUpdate(): void;
    /**
     * Before inserting the specified element into the ref element, if ref is null, 
     * then el will be added to the end of the group. If ref is not null and is not 
     * a child element of the group, an exception will be thrown.
     * @param layer 
     * @param ref 
     */
    insertBefore(layer: any, ref: any): any;
    /**
     * Create and get the corresponding layer.
     * @param id 
     * @param options 
     */
    layer(id: string, options: WorkerOptions): LayerWorker;
    /**
     * Create and get the corresponding layer.
     * @param id 
     * @param options 
     */
    layer(id?: string, options?: Record<string, any>): Layer;
    /**
     * Create a 3d layer from sprite-extend-3d.
     * @param id 
     * @param options 
     */
    layer3d(id: string, options: Record<string, any>): Layer;  
    /**
     * Load resources asynchronously.
     * @param resources 
     */
    preload(...resources: Array<any>): Promise<Array<any>>;
    /**
     * Moves the specified element out of the group.
     * @param layer 
     */
    removeChild(layer: any): any;
    /**
     * When there is an offscreen canvas in the layer, this method will be called to render.
     */
    render(): void;
    /**
     * Replace the ref element with a new el element. If the ref element is not in the 
     * current group, an exception is thrown.
     * @param layer 
     * @param ref 
     */
    replaceChild(layer: any, ref: any): any;
    /**
     * Resize according to the outer container.
     */
    resize(): void;
    /**
     * Set the context resolution of the element.
     * @param resolution 
     */
    setResolution(resolution: Resolution): void;
    /**
     * Take a snapshot of the current scene.
     * @param options 
     */
    snapshot(options?: Record<string, any>): HTMLCanvasElement|OffscreenCanvas; 
  }

  /**
   * Sprite elements can be used to draw pictures.
   */
  export class Sprite extends Block {
    constructor(texture: string);
    constructor(attrs?: Record<string, any>);
    /**
     * Element's content size.
     */
    get contentSize(): Array<number>;
    get textureImageReady(): Promise<any>;
    /**
     * Get a list of element related geometric meshes for rendering.
     * @param meshes 
     */
    draw(meshes?: Array<Mesh2d>): Array<Mesh2d>;
    /**
     * The action when an element attribute value is changed.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
  }

  export class SpriteSvg extends Sprite {
    constructor(svgText: string);
    constructor(attrs?: Record<string, any>);
    get children(): Array<any>;
    get childNodes(): Array<any>;
    get svg(): HTMLOrSVGElement;
    /**
     * Set the resolution of the mesh.
     * @param resolution {width, height}
     */
    setResolution(resolution: Resolution): void;
    /**
     * Dispatch a mouse or touch event.
     * @param event 
     */
    dispatchPointerEvent(event: Event): void;
    /**
     * Returns the child element of the specified ID.
     * @param id 
     */
    getElementById(id: string): Node|null;
    /**
     * Returns the list of child elements for the specified className.
     * @param className 
     */
    getElementsByClassName(className: string): Array<Node>;
    /**
     * Returns a list of child elements for the specified name.
     * @param name 
     */
    getElementsByName(name: string): Array<Node>;
    /**
     * Returns a list of child elements of the specified type.
     * @param tagName 
     */
    getElementsByTagName(tagName: string): Array<Node>;
    /**
     * Returns the specified child element based on the selector.
     * @param selector 
     */
    querySelector(selector: string): Node|null;
    /**
     * Returns a list of all matching child elements based on the selector.
     * @param selector 
     */
    querySelectorAll(selector: string): Array<Node>;
    /**
     * The element's attribute value change.
     * @param key 
     * @param newValue 
     * @param oldValue 
     */
    onPropertyChange(key: string, newValue: any, oldValue: any): void;
  }

  /**
   * The Star element draws a polygonal star.
   */
  export class Star extends Polyline {}

  /**
   * The Triangle element draws a triangle.
   */
  export class Triangle extends Polyline {
    /**
     * Whether the element is visible.
     */
    get isVisible(): boolean;
  }

  namespace helpers {
    /**
     * Parse color to a RGBA string.
     * @param color 
     */
    export function parseColor(color: any): string|Gradient;
    /**
     * Convert the CSS <length> to number.
     * @param value 
     * @param defaultWidth 
     */
    export function sizeToPixel(value: string, defaultWidth?: number): number;
    /**
     * Convert values to array, if the values is divided by spaces.
     * @param value 
     * @param parseNumber 
     */
    export function toArray(value: any, parseNumber?: boolean): any;
    /**
     * Convert a value to string, if the value is not null.
     * @param value 
     */
    export function toString(value: any): string|null;
    /**
     * Convert a string value to number.
     * @param value 
     */
    export function toNumber(value: any): number|null;
  }

  /**
   * Create an element by nodeNome.
   * @param nodeName 
   * @param attrs 
   * @param children 
   */
  export function createElement(nodeName: string, attrs?: Record<string, any>, children?: Array<any>): Node;
  /**
   * Check if the object is a sprite node.
   * @param node 
   */
  export function isSpriteNode(node: any): boolean;
  /**
   * Register a class of Node to a specified nodeName.
   * @param Node 
   * @param nodeName 
   * @param nodeType 
   */
  export function registerNode(Node: any, nodeName?: string, nodeType?: number): void;
  /**
   * requestAnimation polyfill.
   * @param callback 
   */
  export function requestAnimationFrame(callback: (t: number) => void): any;
  /**
   * cancelAnimationFrame polyfill.
   * @param id 
   */
  export function cancelAnimationFrame(id: any): void;

  namespace ENV {
    /**
     * Container polyfill.
     */
    export const Container: any;
    /**
     * createCanvas polyfill.
     */
    export const createCanvas: Function|null;
    /**
     * loadImage polyfill.
     */
    export const loadImage: Function|null;
    /**
     * createText polyfill.
     */
    export const createText: Function|null;
  }
}