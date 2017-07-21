import BaseNode from './basenode'

const _children = Symbol('children'),
      _parent = Symbol('parent'),
      _updateSet = Symbol('updateSet'),
      _zOrder = Symbol('zOrder'),
      _state = Symbol('state'),
      _id = Symbol('id')

function boxIntersect(box1, box2){
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

function boxUnion(box1, box2, preset = 0){
  //增加一个误差数值，不然的话边界条件下可能会导致边缘有一像素问题？
  if(!box1) return box2
  if(!box2) return box1

  return [Math.min(box1[0], box2[0]) - preset, 
          Math.min(box1[1], box2[1]) - preset,
          Math.max(box1[2], box2[2]) + preset, 
          Math.max(box1[3], box2[3]) + preset]
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

class Layer extends BaseNode{
  constructor(id, paper, handleEvent = true) {
    super()

    this[_id] = id
    this[_parent] = paper
    this.handleEvent = handleEvent

    const {container, width, height} = paper

    const canvas = document.createElement('canvas')
    canvas.width = width || container.clientWidth
    canvas.height = height || container.clientHeight
    canvas.style.width = canvas.width + 'px'
    canvas.style.height = canvas.height + 'px'
    canvas.style.position = 'absolute'
    canvas.style.left = canvas.style.top = 0

    container.appendChild(canvas)

    this.outputContext = canvas.getContext('2d') //背景层，不变的元素绘制于这一层

    container.appendChild(canvas)

    this[_children] = []
    this[_updateSet] = new Set()
    this[_zOrder] = 0
    this[_state] = {}
  }
  get id(){
    return this[_id]
  }
  remove(...args) {
    if(args.length === 0){
      this[_children].forEach(child => this.removeChild(child, false))
      this.container.removeChild(this.outputContext.canvas)
      this[_parent].removeLayer(this.id)
    }else{
      args.forEach(child => this.removeChild(child, false))
    }
  }
  update(target) {
    if(target && this[_updateSet].has(target)) return;
    
    if(target) this[_updateSet].add(target);

    if(!this[_state].prepareRender){
      this[_state].prepareRender = true;

      requestAnimationFrame(t => {
        this.render2(t).then(() => {
          this[_state].prepareRender = false
          if(this[_updateSet].size){
            this.update()
          }
        })
        this[_updateSet].clear()
      })
    }
  }
  async render(t) {
    const renderEls = this[_children].slice(0) //所有元素
    const {width, height} = this.outputContext.canvas

    const shadowCanvas = document.createElement('canvas')
    shadowCanvas.width = width
    shadowCanvas.height = height

    const context = shadowCanvas.getContext('2d')
    const outputContext = this.outputContext
    outputContext.clearRect(0, 0, width, height)

    renderEls.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
            b_zidx = b.attr('zIndex')
      if(a_zidx === b_zidx){
        return a.zOrder - b.zOrder
      }else{
        return a_zidx - b_zidx
      }
    })

    for(let i = 0; i < renderEls.length; i++){
      const child = renderEls[i]
      if(child.parent === this){
        //依次渲染，因为图片加载是异步的
        let {canvas, rect} = await child.render(t)
        context.drawImage(canvas, ...rect)
      }
    }

    //将 shadowCanvas 的内容输出到实际的 canvas
    outputContext.drawImage(shadowCanvas, 0, 0)
  }
  async render2(t) {
    const {width, height} = this.outputContext.canvas;
    const updateEls = [...this[_updateSet]] //待刷新元素
    const children = this[_children].slice(0) //所有元素 

    const shadowCanvas = document.createElement('canvas')
    shadowCanvas.width = width
    shadowCanvas.height = height

    const context = shadowCanvas.getContext('2d')
    const outputContext = this.outputContext

    //不刷新的元素
    let restEls = children.filter(e => updateEls.indexOf(e) === -1)

    let affectedEls = new Set(), unaffectedEls = new Set();

    //判断与待刷新元素相交的不刷新元素，这些元素也要刷新
    for(let i = 0; i < restEls.length; i++){
      const unaffectedEl = restEls[i]
      let affected = false
      
      for(let j = 0; j < updateEls.length; j++){
        const affectedEl = updateEls[j]

        const box1 = affectedEl.attr('box'),
              box2 = unaffectedEl.attr('box'),
              box3 = affectedEl.lastRenderBox

        if(boxIntersect(box1, box2) || boxIntersect(box3, box2)){
          affected = true
          break
        }
      }
      if(affected) affectedEls.add(unaffectedEl)
      else unaffectedEls.add(unaffectedEl)
    }

    //继续判断这些受影响的元素，因为它们也可以与其他元素相交
    if(affectedEls.size > 0 && unaffectedEls.size > 0){
      let changed
      do{
        changed = false
        for(let affectedEl of affectedEls){
          for(let unaffectedEl of unaffectedEls){
            const box1 = affectedEl.attr('box'),
                  box2 = unaffectedEl.attr('box')

            if(boxIntersect(box1, box2)){
              affectedEls.add(unaffectedEl)
              unaffectedEls.delete(unaffectedEl)
              changed = true
            }
          }
        }
      }while(changed)
    }

    context.save()
    outputContext.save()

    context.beginPath()
    outputContext.beginPath()

    //通过 clip 来设置 canvas 最小刷新区域

    //updateEls 是当前刷新元素，需要同时刷新 box 和 lastRenderBox
    for(let i = 0; i < updateEls.length; i++){
      const updateEl = updateEls[i],
            box = updateEl.attr('box')

      let dirtyRect = boxToViewRect(box, width, height)

      context.rect(...dirtyRect)
      outputContext.rect(...dirtyRect)

      if(updateEl.lastRenderBox){
        dirtyRect = boxToViewRect(updateEl.lastRenderBox, width, height)
        context.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)        
      }
    }

    //affectedEls 是被 updateEls 影响到的元素，只需要刷新 box
    for(let affectedEl of affectedEls){
      const box = affectedEl.attr('box')
      const dirtyRect = boxToViewRect(box, width, height)

      context.rect(...dirtyRect)
      outputContext.rect(...dirtyRect)
    }

    context.clip()
    outputContext.clip()
    
    //清除要刷新的内容
    context.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)

    //全部渲染的元素包括 updateEls 和 affectedEls
    let renderEls = updateEls.concat(...affectedEls)

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
        let {canvas, rect} = await child.render(t)
        context.drawImage(canvas, ...rect)
      }
    }

    //将 shadowCanvas 的内容输出到 outputCanvas
    outputContext.drawImage(shadowCanvas, 0, 0)

    context.restore()
    outputContext.restore()
  }
  appendChild(sprite) {
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
  }
  append(...sprites){
    sprites.forEach(sprite => this.appendChild(sprite))
  }
  removeChild(sprite, forceUpdate = true) {
    const idx = this[_children].indexOf(sprite)
    if(idx === -1) {
      return false
    }

    this[_children].splice(idx, 1)

    delete sprite.parent

    if(sprite.disconnectedCallback){
      sprite.disconnectedCallback(this)
    }

    if(forceUpdate) this.update(sprite)
  }
  pointCollision(layerX, layerY){
    const {width, height} = this.outputContext.canvas

    if(layerX >= 0 && layerY >= 0 && layerX < width && layerY < height){
      return [layerX, layerY]
    }
  }
  dispatchEvent(type, evt){
    const sprites = this[_children].slice(0)
    sprites.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
            b_zidx = b.attr('zIndex')

      if(a_zidx === b_zidx){
        return b.zOrder - a.zOrder
      }else{
        return b_zidx - a_zidx
      }            
    })

    for(let i = 0; i < sprites.length; i++){
      const sprite = sprites[i]
      sprite.dispatchEvent(type, evt)
      if(evt.terminated){
        break
      }
    }

    super.dispatchEvent(type, evt)
  }
}

export default Layer
