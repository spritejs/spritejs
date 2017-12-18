import BaseSprite from './basesprite'

const _children = Symbol('children'),
      _zOrder = Symbol('zOrder')

function sortChildren(children) {
  children.sort((a, b) => {
    const a_zidx = a.attr('zIndex'),
      b_zidx = b.attr('zIndex')
    if(a_zidx === b_zidx) {
      return a.zOrder - b.zOrder
    }
    return a_zidx - b_zidx
  })
}

export default class Group extends BaseSprite {
  constructor(opts = {attr: {}}) {
    super(opts)
    this[_children] = []
    this[_zOrder] = 0
  }
  appendChild(sprite, sort = true) {
    this[_children].push(sprite)
    sprite.connect(this, this[_zOrder]++)
    if(sort) sortChildren(this[_children])
  }
  append(...sprites) {
    sprites.forEach(sprite => this.appendChild(sprite, false))
    sortChildren(this[_children])
  }
  removeChild(sprite) {
    const idx = this[_children].indexOf(sprite)
    if(idx === -1) {
      return null
    }
    this[_children].splice(idx, 1)
    sprite.disconnect(this)
    return sprite    
  }
  remove(...sprites) {
    sprites.forEach(sprite => this.removeChild(sprite))
  }
  get contentSize() {
    let [width, height] = this.attr('size')

    if(width === '' || height === '') {
      width = 0, height = 0
      for(let sprite of this[_children]) {
        const renderBox = sprite.renderBox
        width = Math.max(width, renderBox[2])
        height = Math.max(width, renderBox[3])
      }
    }

    return [width, height]
  }
  dispatchEvent(type, evt, forceTrigger = false) {
    if(!evt.terminated && (forceTrigger || this.pointCollision(evt))) {
      const originRect = this.originRect
      const parentX = evt.offsetX - this.originRect[0]
      const parentY = evt.offsetY - this.originRect[1]
      //console.log(evt.parentX, evt.parentY)

      const _evt = Object.assign({}, evt)
      _evt.parentX = parentX
      _evt.parentY = parentY

      const targetSprites = []
      this[_children].forEach(sprite => {
        const hit = sprite.dispatchEvent(type, _evt, forceTrigger)
        if(hit) {
          targetSprites.push(sprite)
        }
      })

      evt.targetSprites = targetSprites
      super.dispatchEvent(type, evt, forceTrigger)
    }
  }
  async render(t) {
    const context = super.render(t)
    const children = this[_children]
    for(let child of children) {
      let ctx = await child.render(t)
      const transform = child.transform.m,
        pos = child.attr('pos'),
        bound = child.originRect

      context.save()
      context.translate(pos[0], pos[1])
      context.transform(...transform)
      context.globalAlpha = child.attr('opacity')
      context.drawImage(ctx.canvas, bound[0], bound[1])
      context.restore()      
    }

    return context
  }
}
