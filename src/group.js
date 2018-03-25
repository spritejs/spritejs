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
  constructor(attr) {
    super(attr)
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
    if(sprites.length === 0) {
      sprites = this[_children].slice(0)
    }
    sprites.forEach(sprite => this.removeChild(sprite))
  }
  get contentSize() {
    let [width, height] = this.attr('size')

    if(width === '' || height === '') {
      let right,
        bottom

      right = 0
      bottom = 0
      this[_children].forEach((sprite) => {
        const renderBox = sprite.renderBox
        right = Math.max(right, renderBox[2])
        bottom = Math.max(bottom, renderBox[3])
      })
      width = right
      height = bottom
    }
    return [width, height]
  }
  dispatchEvent(type, evt, forceTrigger = false) {
    if(!evt.terminated && (forceTrigger || this.pointCollision(evt))) {
      const parentX = evt.offsetX - this.originRect[0]
      const parentY = evt.offsetY - this.originRect[1]
      // console.log(evt.parentX, evt.parentY)

      const _evt = Object.assign({}, evt)
      _evt.parentX = parentX
      _evt.parentY = parentY

      const targetSprites = []
      this[_children].forEach((sprite) => {
        const hit = sprite.dispatchEvent(type, _evt, forceTrigger)
        if(hit) {
          targetSprites.push(sprite)
        }
      })

      evt.targetSprites = targetSprites
      super.dispatchEvent(type, evt, forceTrigger)
    }
  }
  render(t, drawingContext) {
    drawingContext = super.render(t, drawingContext)

    const children = this[_children]

    /* eslint-disable no-await-in-loop */
    for(let i = 0; i < children.length; i++) {
      const child = children[i]
      child.draw(drawingContext, false, t)
    }
    /* eslint-enable no-await-in-loop */

    return drawingContext
  }
}
