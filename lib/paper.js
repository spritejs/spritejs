const _children = Symbol('children');

class Paper2D {
  constructor(container, width, height) {
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }

    const canvas = document.createElement('canvas')
    canvas.width = width || container.clientWidth
    canvas.height = height || container.clientHeight

    container.appendChild(canvas)

    this.canvas = canvas
    this.context = canvas.getContext('2d')

    this._children = []
    
    let self = this;
    requestAnimationFrame(function update(t){
      self.update(t);
      //requestAnimationFrame(update);
    });
  }
  destory(){
    //todo 
  }
  update(t){
    const dirtyRect = this.updateRect()
    this.context.clearRect(...dirtyRect)

    this._children.forEach(child => {
      child.render()
    })
  }
  updateRect(){
    return [0, 0, this.canvas.width, this.canvas.height]
  }
  appendChild(sprite){
    this._children.push(sprite)

    delete sprite.parent
    
    Object.defineProperty(sprite, 'parent', {
      get: () => this,
      configurable: true,
    })
  }
}

const paper = {
  Paper2D(...args) {
    return new Paper2D(...args)
  }
}

export default paper
