import SpriteAttr from './attr'

const _attr = Symbol('attr'),
      _children = Symbol('children'),
      _parent = Symbol('parent'),
      _isDirty = Symbol('isDirty')

class Sprite {
  /**
    new Sprite({
      attr: {
        ...
      },
      attributeChangedCallback: function(prop, oldValue, newValue){

      }
    })
   */
  constructor(opts = {attr: {}}) {
    this[_attr] = new SpriteAttr(this)
    this.attr(opts.attr)
    delete opts.attr
    Object.assign(this, opts)
    this.markDirty()
  }
  attr(props, val) {
    if(typeof props === 'object') {
      Object.assign(this[_attr], props)
    } else if(typeof props === 'string') {
      if(val !== undefined) {
        Object.assign(this[_attr], {[props]: val})
      } else {
        return this[_attr][props]
      }
    } else {
      const ret = {}
      for(let prop in this[_attr]){
        ret[prop] = this[_attr][prop]
      }
      return ret
    }
  }
  remove(){
    if(this[_parent]){
      //todo remove from parent

      return true;
    }
    return false;
  }
  get context(){
    return this.parent && this.parent.context
  }
  appendTo(parent){
    parent.appendChild(this)
  }
  markDirty(){
    this[_isDirty] = true;
  }
/** abstract
  connectedCallback() {

  }
  disconnectedCallback() {

  }
  attributeChangedCallback() {

  }
*/
  appendChild() {

  }
  getTransformMatrix(){
    const attr = this.attr();
  }
  render() {
    //if(!this[_isDirty]) return;

    //this[_isDirty] = false;

    const attr = this.attr(),
          bgcolor = attr.bgcolor,
          rotate = attr.rotate,
          context = this.context,
          anchor = attr.anchor

    if(attr.width === 0 || attr.height === 0){
      return  //don't need to render
    }

    const box = document.createElement('canvas'),
          bound = attr.boundRect;

    box.width = bound[2] - bound[0]
    box.height = bound[3] - bound[1]

    const boxctx = box.getContext('2d')

    boxctx.translate(box.width / 2, box.height / 2);
    boxctx.transform(...attr.computedTransform)

    if(bgcolor && bgcolor.opacity){
      boxctx.fillStyle = `rgba(${bgcolor.red}, 
                              ${bgcolor.green}, 
                              ${bgcolor.blue}, 
                              ${Math.round(bgcolor.opacity * 255)})`


      const rect = [-attr.width / 2, -attr.height / 2, attr.width, attr.height]

      boxctx.fillRect(...rect)      
    }

    context.drawImage(box, ...[attr.pos[0] + bound[0], attr.pos[1] + bound[1]])
  }
}

export default Sprite
