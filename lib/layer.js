import BaseNode from './basenode'

const _children = Symbol('children'),
  _parent = Symbol('parent'),
  _updateSet = Symbol('updateSet'),
  _deleteSet = Symbol('deleteSet'),
  _zOrder = Symbol('zOrder'),
  _state = Symbol('state'),
  _id = Symbol('id')

import {boxIntersect, boxToRect} from './utils'

class Layer extends BaseNode {
  constructor(id, paper, handleEvent = true) {
    super()

    this[_id] = id
    this[_parent] = paper
    this.handleEvent = handleEvent

    const {container, viewport, resolution} = paper,
          [width, height] = viewport

    const canvas = document.createElement('canvas')
    
    canvas.width = resolution[0]
    canvas.height = resolution[1]

    canvas.style.width = `${width}px`
    canvas.style.height = `${height}px`
    canvas.style.position = 'absolute'
    canvas.style.left = 0
    canvas.style.top = 0
    container.appendChild(canvas)

    const shadowCanvas = canvas.cloneNode(true)
    this.shadowContext = shadowCanvas.getContext('2d')
    this.outputContext = canvas.getContext('2d')

    this[_children] = []
    this[_updateSet] = new Set()
    this[_deleteSet] = new Set()
    this[_zOrder] = 0
    this[_state] = {}

    this.setResolution(...paper.resolution)
  }
  get resolution(){
    return this[_parent] ? this[_parent].resolution : [0, 0]
  }
  get viewport(){
    return this[_parent] ? this[_parent].viewport : [0, 0]
  }
  get id() {
    return this[_id]
  }
  update(target) {
    if(target && this[_updateSet].has(target)) return

    // 如果之前不可见，update 之后也不可见，直接返回
    if(!target.lastRenderBox && !this.isVisible(target)) return

    if(target) this[_updateSet].add(target)

    if(!this[_state].prepareRender) {
      this[_state].prepareRender = true

      requestAnimationFrame((t) => {
        this.render(t).then(() => {
          this[_state].prepareRender = false
          if(this[_updateSet].size) {
            this.update()
          }
        })
        this[_updateSet].clear()
      })
    }
  }
  isVisible(sprite) {
    const opacity = sprite.attr('opacity')
    if(opacity <= 0) {
      return false
    }

    const [width, height] = sprite.offsetSize
    if(width <= 0 || height <= 0) {
      return false
    }

    const [maxWidth, maxHeigth] = this.resolution

    const box = sprite.renderBox
    if(box[0] > maxWidth || box[1] > maxHeigth
      || box[2] < 0 || box[3] < 0) {
      return false
    }

    return true
  }
  // async render(t) {
  //   const renderEls = this[_children].slice(0) //所有元素
  //   const {width, height} = this.outputContext.canvas

  //   const shadowCanvas = document.createElement('canvas')
  //   shadowCanvas.width = width
  //   shadowCanvas.height = height

  //   const shadowContext = shadowCanvas.getContext('2d')
  //   const outputContext = this.outputContext
  //   outputContext.clearRect(0, 0, width, height)

  //   renderEls.sort((a, b) => {
  //     const a_zidx = a.attr('zIndex'),
  //           b_zidx = b.attr('zIndex')
  //     if(a_zidx === b_zidx){
  //       return a.zOrder - b.zOrder
  //     }else{
  //       return a_zidx - b_zidx
  //     }
  //   })

  //   for(let i = 0; i < renderEls.length; i++){
  //     const child = renderEls[i]
  //     if(child.parent === this){
  //       //依次渲染，因为图片加载是异步的
  //       const context = await child.render(t)
  //       child.lastRenderBox = child.renderBox
  //       shadowContext.drawImage(context.canvas, ...child.renderRect)
  //     }
  //   }

  //   //将 shadowCanvas 的内容输出到实际的 canvas
  //   outputContext.drawImage(shadowCanvas, 0, 0)
  // }
  async render(t) {
    const [width, height] = this.resolution
    const updateEls = [...this[_updateSet]] // 待刷新元素
    const children = this[_children].filter(e => this.isVisible(e)) // 所有可见元素

    const shadowContext = this.shadowContext
    const outputContext = this.outputContext

    const shadowCanvas = this.shadowContext.canvas

    // 不刷新的元素
    const restEls = children.filter(e => updateEls.indexOf(e) === -1)

    const affectedEls = new Set(),
      unaffectedEls = new Set()

    // 判断与待刷新元素相交的不刷新元素，这些元素也要刷新
    for(let i = 0; i < restEls.length; i++) {
      const unaffectedEl = restEls[i]
      let affected = false

      for(let j = 0; j < updateEls.length; j++) {
        const affectedEl = updateEls[j]

        const box1 = affectedEl.renderBox,
          box2 = unaffectedEl.renderBox,
          box3 = affectedEl.lastRenderBox

        if(boxIntersect(box1, box2) || box3 && boxIntersect(box3, box2)) {
          affected = true
          break
        }
      }
      if(affected) affectedEls.add(unaffectedEl)
      else unaffectedEls.add(unaffectedEl)
    }

    // 继续判断这些受影响的元素，因为它们也可以与其他元素相交
    if(affectedEls.size > 0 && unaffectedEls.size > 0) {
      let changed
      do {
        changed = false
        for(const affectedEl of affectedEls) {
          for(const unaffectedEl of unaffectedEls) {
            const box1 = affectedEl.renderBox,
              box2 = unaffectedEl.renderBox

            if(boxIntersect(box1, box2)) {
              affectedEls.add(unaffectedEl)
              unaffectedEls.delete(unaffectedEl)
              changed = true
            }
          }
        }
      } while(changed)
    }

    shadowContext.save()
    outputContext.save()

    shadowContext.beginPath()
    outputContext.beginPath()

    // 通过 clip 来设置 canvas 最小刷新区域

    // updateEls 是当前刷新元素，需要同时刷新 box 和 lastRenderBox
    for(let i = 0; i < updateEls.length; i++) {
      const updateEl = updateEls[i],
        box = updateEl.renderBox

      let dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }

      if(updateEl.lastRenderBox) {
        dirtyBox = boxIntersect(updateEl.lastRenderBox, [0, 0, width, height])

        if(dirtyBox) {
          const dirtyRect = boxToRect(dirtyBox)

          shadowContext.rect(...dirtyRect)
          outputContext.rect(...dirtyRect)
        }
      }
    }

    // affectedEls 是被 updateEls 影响到的元素，只需要刷新 box
    for(const affectedEl of affectedEls) {
      const box = affectedEl.renderBox
      const dirtyBox = boxIntersect(box, [0, 0, width, height])

      if(dirtyBox) {
        const dirtyRect = boxToRect(dirtyBox)

        shadowContext.rect(...dirtyRect)
        outputContext.rect(...dirtyRect)
      }
    }

    shadowContext.clip()
    outputContext.clip()

    // 清除要刷新的内容
    shadowContext.clearRect(0, 0, width, height)
    outputContext.clearRect(0, 0, width, height)

    // 全部渲染的元素包括 updateEls 和 affectedEls
    const renderEls = updateEls.concat(...affectedEls)

    // 按照它们的 zIndex 排序，zIndex 大的后渲染
    // zIndex 相同的按照 zOrder 排序，zOrder 后的后渲染
    renderEls.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
        b_zidx = b.attr('zIndex')
      if(a_zidx === b_zidx) {
        return a.zOrder - b.zOrder
      }
      return a_zidx - b_zidx
    })

    // 依次执行渲染
    for(let i = 0; i < renderEls.length; i++) {
      const child = renderEls[i]
      if(child.parent === this) {
        if(this.isVisible(child) && !this[_deleteSet].has(child)) {
          let context = child.fromCache()

          if(!context) {
            // 这里要作为异步处理，是因为如果没有预加载资源
            // textures 是图片，会被异步加载
            // 而 sprite 是有层级的，必须按顺序渲染
            context = await child.render(t)
            child.cache(context)
          }

          child.lastRenderBox = child.renderBox
          shadowContext.drawImage(context.canvas, ...child.renderRect)
        } else {
          // 如果当前不可见，删除之前的 lastRenderBox
          delete child.lastRenderBox
        }
      }
    }

    // 将 shadowCanvas 的内容输出到 outputCanvas
    outputContext.drawImage(shadowCanvas, 0, 0)

    shadowContext.restore()
    outputContext.restore()

    // 渲染完之后真正删除需要 remove 的元素
    if(this[_deleteSet].size > 0) {
      for(const sprite of this[_deleteSet]) {
        this.removeChild(sprite, true)
      }
    }
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
  append(...sprites) {
    sprites.forEach(sprite => this.appendChild(sprite))
  }
  removeChild(sprite, immediate = false) {
    const idx = this[_children].indexOf(sprite)
    if(idx === -1) {
      return null
    }

    // 如果需要直接删除或当前 sprite 不可见且不用重绘
    if(immediate || !this.isVisible(sprite) && !sprite.lastRenderBox) {
      this[_children].splice(idx, 1)

      delete sprite.parent

      if(this[_deleteSet].has(sprite)) {
        this[_deleteSet].delete(sprite)
      }

      if(sprite.disconnectedCallback) {
        sprite.disconnectedCallback(this)
      }
      // console.log('deleted!')
    } else if(!this[_deleteSet].has(sprite)) {
      // 添加到待删除列表里并 update
      this[_deleteSet].add(sprite)
      sprite.forceUpdate()
    }
    return sprite
  }
  remove(...args) {
    if(args.length === 0) {
      args = this[_children].slice(0)
    }
    return args.map(child => this.removeChild(child))
  }
  pointCollision(evt) {
    const {layerX, layerY} = evt
    const [width, height] = this.resolution

    if(layerX >= 0 && layerY >= 0 && layerX < width && layerY < height) {
      return [layerX, layerY]
    }
  }
  dispatchEvent(type, evt) {
    const sprites = this[_children].slice(0)
    sprites.sort((a, b) => {
      const a_zidx = a.attr('zIndex'),
        b_zidx = b.attr('zIndex')

      if(a_zidx === b_zidx) {
        return b.zOrder - a.zOrder
      }
      return b_zidx - a_zidx
    })

    for(let i = 0; i < sprites.length; i++) {
      const sprite = sprites[i]
      sprite.dispatchEvent(type, evt)
      if(evt.terminated) {
        break
      }
    }

    if(!evt.terminated) super.dispatchEvent(type, evt)
  }
  setResolution(width, height){

  }
}

export default Layer
