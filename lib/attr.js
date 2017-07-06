import Matrix from './matrix'

const _attr = Symbol('attr'),
      _subject = Symbol('subject')

function readonly(target, prop, descriptor){
  descriptor.enumerable = true;
  return descriptor;
}

function attr(...args) {
  let propParser;

  function decorator(target, prop, descriptor){
    descriptor.enumerable = true;

    const setter = descriptor.set

    descriptor.set = function (val) {
      const subject = this[_subject],
        oldVal = this[prop]

      if(propParser) val = propParser(val);

      setter.call(this, val)
      subject.markDirty();

      if(subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, oldVal, val)
      }
    }

    return descriptor
  }

  if(args.length === 1) {
    propParser = args[0];
    return decorator
  }else{
    return decorator(...args)
  }
}

function parseColor(colorStr, format){
  const canvas = document.createElement('canvas'),
        context = canvas.getContext("2d");

  context.fillStyle = colorStr
  context.fillRect(0, 0, 1, 1)
  const data = context.getImageData(0, 0, 1, 1).data

  return {
    red: data[0],
    green: data[1],
    blue: data[2],
    opacity: data[3] / 255,
  }
}

function computeTransformMatrix(attr){
  let {transform, translate, scale, rotate, skew} = attr,
      matrix = new Matrix(transform);

  attr[_attr].computedTransform = matrix.translate(...translate)
                                        .scale(...scale)
                                        .rotate(rotate)
                                        .skew(...skew)
                                        .m;
}

class SpriteAttr {
  constructor(subject) {
    this[_subject] = subject
    this[_attr] = {
      anchor: [0, 0],
      x: 0,
      y: 0,
      width: 0,
      height: 0,
      bgcolor: 'transparent',
      rotate: 0,
      scale: [1, 1],
      rotate: 0,
      translate: [0, 0],
      skew: [0, 0],
      transform: [1, 0, 0, 1, 0, 0],
      computedTransform: [1, 0, 0, 1, 0, 0],
    }
  }

  @attr
  set anchor(val) {
    this[_attr].anchor = val;
  }
  get anchor() {
    return this[_attr].anchor;
  }

  @attr
  set x(val) {
    this[_attr].x = val
  }
  get x() {
    return this[_attr].x
  }

  @attr
  set y(val) {
    this[_attr].y = val
  }
  get y() {
    return this[_attr].y
  }

  @attr
  set pos(val) {
    const [x, y] = val
    this.x = x
    this.y = y
  }
  get pos() {
    return [this.x, this.y]
  }

  @attr(parseColor)
  set bgcolor(val) {
    this[_attr].bgcolor = val;
  }
  get bgcolor() {
    return this[_attr].bgcolor;
  }

  @attr
  set width(val) {
    this[_attr].width = val;
  }
  get width() {
    return this[_attr].width;
  }

  @attr
  set height(val) {
    this[_attr].height = val;
  }
  get height() {
    return this[_attr].height;
  }

  @attr
  set size(val) {
    const [width, height] = val;
    this.width = width;
    this.height = height;
  }
  get size() {
    return [this.width, this.height];
  }

  //transform attributes
  @attr 
  set transform(val){
    this[_attr].transform = val;
    computeTransformMatrix(this);
  }
  get transform(){
    return this[_attr].transform;
  }
  @attr
  set rotate(val){
    this[_attr].rotate = val;
    computeTransformMatrix(this);
    console.log(this[_attr].computedTransform);
  }
  get rotate(){
    return this[_attr].rotate;
  }
  @attr
  set scale(val){
    this[_attr].scale = val;
    computeTransformMatrix(this);
  }
  get scale(){
    return this[_attr].scale;
  }
  @attr
  set translate(val){
    this[_attr].translate = val;
    computeTransformMatrix(this);
  }
  get translate() {
    return this[_attr].translate;
  }
  @attr
  set skew(val){
    this[_attr].skew = val;
    computeTransformMatrix(this);
  }
  get skew(){
    return this[_attr].skew;
  }

  @readonly
  get computedTransform(){
    return this[_attr].computedTransform;
  }
  @readonly
  get boundRect(){
    const {width, height, computedTransform, anchor} = this[_attr];

    const [anchorX, anchorY] = anchor; 

    const vertexs = [[-anchorX * width, -anchorY * height], 
                     [(1 - anchorX) * width, -anchorY * height], 
                     [-anchorX * width, (1 - anchorY) * height], 
                     [(1 - anchorX) * width, (1 - anchorY) * height]];

    const matrix = new Matrix(computedTransform); 

    const transformed = vertexs.map(v => matrix.transformPoint(v[0], v[1]));
    const vx = transformed.map(v => v[0]),
          vy = transformed.map(v => v[1]);

    const minX = Math.min(...vx),
          minY = Math.min(...vy),
          maxX = Math.max(...vx),
          maxY = Math.max(...vy);

    return [...[minX, minY], ...[maxX, maxY]];
  }
}

export default SpriteAttr;
