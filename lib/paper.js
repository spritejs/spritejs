const _children = Symbol('children');

class Paper2D {
  constructor(container, width, height) {
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }

    const canvas = document.createElement('canvas')
    canvas.width = width || container.clientWidth
    canvas.height = height || container.clientHeight
    canvas.style.position = 'absolute';
    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';

    container.appendChild(canvas)

    this.canvas = canvas
    this.context = canvas.getContext('2d')

    this[_children] = []
    
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

    this[_children].forEach(child => {
      child.render()
    })
  }
  updateRect(){
    return [0, 0, this.canvas.width, this.canvas.height]
  }
  appendChild(sprite){
    this.removeChild(sprite)

    this[_children].push(sprite)
    
    Object.defineProperty(sprite, 'parent', {
      get: () => this,
      configurable: true,
    })

    if(sprite.connectedCallback){
      sprite.connectedCallback(this)
    }
  }
  removeChild(sprite){
    const idx = this[_children].indexOf(sprite)
    if(idx === -1){
      return false
    }

    this[_children].splice(idx, 1);

    delete sprite.parent

    sprite.disconnectedCallback(this);
  }
}

const paper = {
  Paper2D(...args) {
    return new Paper2D(...args)
  }
}

export default paper
