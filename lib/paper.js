const _children = Symbol('children'),
      _updateList = Symbol('updateList')

function boxIntersect(rect1, rect2, prec = 0){
  //增加一个误差数值，不然的话边界条件下可能会导致边缘有一像素问题？
  //left, top, right, buttom
  const [l1, t1, r1, b1] = [rect1[0] - prec, rect1[1] - prec, 
                            rect1[2] + prec, rect1[3] + prec],
        [l2, t2, r2, b2] = [rect2[0] - prec, rect2[1] - prec, 
                            rect2[2] + prec, rect2[3] + prec]

  const t = Math.max(t1, t2),
        r = Math.min(r1, r2),
        b = Math.min(b1, b2),
        l = Math.max(l1, l2)

  if(b >= t && r >= l) {
    return [l, t, r, b]
  } else{
    return null
  }
}

class Paper2D {
  constructor(container, width, height) {
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }

    const canvas = document.createElement('canvas')
    canvas.width = width || container.clientWidth
    canvas.height = height || container.clientHeight
    canvas.style.position = 'absolute'
    canvas.style.width = `${canvas.width}px`
    canvas.style.height = `${canvas.height}px`

    container.appendChild(canvas)

    this.canvas = canvas

    this[_children] = []
    this[_updateList] = []
  }
  get outputContext(){
    return this.canvas.getContext('2d')
  }
  get context(){
    return this.shadowCanvas.getContext('2d')
  }
  destory() {
    // todo
  }
  update(target, action = 'attributeChange') {
    this[_updateList].push({target, action});

    if(this[_updateList].length === 1){
      requestAnimationFrame(t => {
        this.render(t)

        this[_updateList].length = 0
      })
    }
  }
  render(t) {
    const updateList = this[_updateList].slice(0)
    const children = this[_children].slice(0)
    let rerenderList = new Set();

    //判断有相交的元素
    for(let i = 0; i < updateList.length; i++){
      for(let j = 0; j < children.length; j++){        
        const updateEl = updateList[i]
        const childEl = children[j]
        if(!rerenderList.has(childEl)){
          if(updateEl.target === childEl ||
            boxIntersect(updateEl.target.attr('box'), 
                          childEl.attr('box')) || 
            boxIntersect(updateEl.target.lastRenderBox, 
                          childEl.attr('box'))){
            rerenderList.add(childEl)
          }
        }
      }
    }
    rerenderList = [...rerenderList]

    //当前更新的元素有两个不同的 box
    //当前不更新的元素的两个 box 相同
    //当前新增的元素只有一个 box
    const boxes = rerenderList.reduce((b, e) => {
      if(e.lastRenderBox) b.push(e.lastRenderBox)
      b.push(e.attr('box'))
      return b
    }, [])

    const dirtyBox = boxes.reduce((b1, b2) => {
      return [Math.min(b1[0], b2[0]), Math.min(b1[1], b2[1]),
              Math.max(b1[2], b2[2]), Math.max(b1[3], b2[3])]
    })
    
    const dirtyRect = [dirtyBox[0], dirtyBox[1], 
                       dirtyBox[2] - dirtyBox[0],
                       dirtyBox[3] - dirtyBox[1]]

    console.log(boxes)

    this.outputContext.clearRect(...dirtyRect)

    //prepare offline rendering
    this.shadowCanvas = this.canvas.cloneNode(true)

    console.log(rerenderList.length)
    rerenderList.forEach((child) => {
      //记录上一次渲染位置，下一次刷新用
      child.lastRenderBox = child.attr('box') 
      child.render()
    })

    this.outputContext.drawImage(this.shadowCanvas, 0, 0)
  }
  appendChild(...sprites) {
    sprites.forEach(sprite => {
      this.removeChild(sprite)

      this[_children].push(sprite)

      Object.defineProperty(sprite, 'parent', {
        get: () => this,
        configurable: true,
      })

      if(sprite.connectedCallback) {
        sprite.connectedCallback(this)
      }

      this.update(sprite)
    })
  }
  removeChild(...sprites) {
    sprites.forEach(sprite => {
      const idx = this[_children].indexOf(sprite)
      if(idx === -1) {
        return false
      }

      this[_children].splice(idx, 1)

      delete sprite.parent

      sprite.disconnectedCallback(this)

      this.update(sprite, 'disconnect')
    })
  }
}

const paper = {
  Paper2D(...args) {
    return new Paper2D(...args)
  }
}

export default paper
