const _children = Symbol('children'),
      _updateSet = Symbol('updateSet'),
      _zOrder = Symbol('zOrder')

function boxIntersect(box1, box2){
  //增加一个误差数值，不然的话边界条件下可能会导致边缘有一像素问题？
  //left, top, right, buttom
  const [l1, t1, r1, b1] = [box1[0], box1[1], 
                            box1[2], box1[3]],
        [l2, t2, r2, b2] = [box2[0], box2[1], 
                            box2[2], box2[3]]

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

function boxEqual(box1, box2){
  return box1[0] === box2[0] &&
         box1[1] === box2[1] &&
         box1[2] === box2[2] &&
         box1[3] === box2[3]
}

function boxUnion(box1, box2){
  if(!box1) return box2
  if(!box2) return box1

  return [Math.min(box1[0], box2[0]), 
          Math.min(box1[1], box2[1]),
          Math.max(box1[2], box2[2]), 
          Math.max(box1[3], box2[3])]
}

function boxToViewRect(box, width, height){
  let [x, y, x2, y2] = box,
      w = x2 - x,
      h = y2 - y;

  x = Math.max(x, 0);
  y = Math.max(y, 0);
  w = Math.min(w, width);
  h = Math.min(h, height);

  return [x, y, w, h];
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
    canvas.style.left = canvas.style.top = 0
    canvas.style.width = '100%'
    canvas.style.height = '100%'

    const innerWrapper = document.createElement('div')
    innerWrapper.style.width = `${canvas.width}px`
    innerWrapper.style.height = `${canvas.height}px`
    innerWrapper.style.position = 'relative'

    container.appendChild(innerWrapper)

    innerWrapper.appendChild(canvas)

    this.canvas = canvas

    this[_children] = []
    this[_updateSet] = new Set()
    this[_zOrder] = 0
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
  update(target) {
    if(this[_updateSet].has(target)) return;
    
    this[_updateSet].add(target);

    if(this[_updateSet].size === 1){
      requestAnimationFrame(t => {
        this.render(t)

        this[_updateSet].clear()
      })
    }
  }
  async render(t) {
    const updateEls = [...this[_updateSet]] //待刷新元素
    const children = this[_children].slice(0) //所有元素

    //先把所有待刷新元素计算出一个最大的 dirtyBox 区域
    let maxDirtyBox = updateEls.reduce((dirtyBox, updateEl) => {
      const box = updateEl.attr('box')
      dirtyBox = boxUnion(box, dirtyBox)

      //待渲染元素要同时计算原始 box 和刷新后的 box 两个区域
      const lastRenderBox = updateEl.lastRenderBox
      if(lastRenderBox){
        dirtyBox = boxUnion(box, lastRenderBox)
      }
      return dirtyBox
    }, 0)

    //再用这个区域来计算它影响到的元素
    const affectedEls = []

    //当前不被影响到的元素
    let unaffectedEls = children.filter(e => updateEls.indexOf(e) === -1)

    let needRecalc

    //TODO: 这里应该有更快的算法
    do {
      const restEls = [];

      needRecalc = false

      maxDirtyBox = unaffectedEls.reduce((dirtyBox, el) => {
        const box = el.attr('box')

        //如果元素在 dirtyBox 区域中
        if(boxIntersect(box, dirtyBox)){
          dirtyBox = boxUnion(box, dirtyBox)
          affectedEls.push(el)
          //修改了 dirtyBox, 有可能影响到之前判定过的元素
          //所以需要重新计算一下
          needRecalc = true
        }else{
          restEls.push(el)
        }

        return dirtyBox;
      }, maxDirtyBox)

      unaffectedEls = restEls;
    } while(needRecalc && unaffectedEls.length > 0)

    const {width, height} = this.canvas;

    const dirtyRect = boxToViewRect(maxDirtyBox, width, height)

    this.outputContext.clearRect(...dirtyRect)

    //为了性能，离线渲染
    this.shadowCanvas = this.canvas.cloneNode(true)

    //全部渲染的元素包括 updateEls 和 affectedEls
    let renderEls = updateEls.concat(affectedEls)

    //按照它们的 zIndex 排序，zIndex 大的后渲染
    //zIndex 相同的按照 zOrder 排序，zOrder 后的后渲染
    renderEls.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
            b_zidx = b.attr('zIndex')
      if(a_zidx === b_zidx){
        return a.zOrder - b.zOrder
      }else{
        return a_zidx - b_zidx
      }
    })

    //依次执行渲染
    for(let i = 0; i < renderEls.length; i++){
      const child = renderEls[i]
      if(child.parent === this){
        child.lastRenderBox = child.attr('box') 
        await child.render()
      }
    }

    //将 shadowCanvas 的内容输出到实际的 canvas
    this.outputContext.drawImage(this.shadowCanvas, 0, 0)
  }
  appendChild(...sprites) {
    sprites.forEach(sprite => {
      this.removeChild(sprite)

      this[_children].push(sprite)

      delete sprite.zOrder

      Object.defineProperty(sprite, 'zOrder', {
        value: this[_zOrder]++,
        writable: false
      })

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

      if(sprite.disconnectedCallback){
        sprite.disconnectedCallback(this)
      }

      this.update(sprite)
    })
  }
}

const paper = {
  Paper2D(...args) {
    return new Paper2D(...args)
  }
}

export default paper
