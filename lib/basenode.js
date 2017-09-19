const _eventHandlers = Symbol('eventHandlers'),
  _collisionState = Symbol('collisionState')

class BaseNode {
  constructor() {
    this[_eventHandlers] = {}
  }
  on(type, handler) {
    this[_eventHandlers][type] = this[_eventHandlers][type] || []
    this[_eventHandlers][type].push(handler)
  }
  off(type, handler) {
    if(handler && this[_eventHandlers][type]) {
      const idx = this[_eventHandlers][type].indexOf(handler)

      if(idx >= 0) {
        this[_eventHandlers][type].splice(idx, 1)
      }
    } else {
      delete this[_eventHandlers][type]
    }
  }
  //对 d3.js 友好
  addEventListener(type, handler) {
    return this.on(type, handler)
  }
  removeEventListener(type, handler) {
    return this.off(type, handler)
  }
  
  pointCollision(evt) {
    throw Error('you mast override this method')
  }
  dispatchEvent(type, evt, forceTrigger = false) {
    if(forceTrigger || this.pointCollision(evt)) {
      evt.target = this
      if(evt.type !== type) {
        if(evt.type){
          evt.originalType = evt.type
        }
        evt.type = type
      }

      const handlers = this[_eventHandlers][type]
      if(handlers) {
        handlers.forEach(handler => handler.call(this, evt))
      }

      if(type === 'mousemove') {
        if(!this[_collisionState]) {
          const _evt = Object.assign({}, evt)
          _evt.type = 'mouseenter'

          this.dispatchEvent('mouseenter', _evt)
        }
        this[_collisionState] = true
      }
    } else if(type === 'mousemove') {
      if(this[_collisionState]) {
        const _evt = Object.assign({}, evt)
        _evt.type = 'mouseleave'
        _evt.target = this
        this.dispatchEvent('mouseleave', _evt, true)
      }
      this[_collisionState] = false
    }

    return this[_collisionState]
  }
  // 当 parent 将 child 添加到自己之上时，调用该方法
  connect(parent, zOrder) {
    if(this.parent) {
      throw new Error('This node belongs to another parent node! Remove it first...')
    }

    Object.defineProperty(this, 'zOrder', {
      value: zOrder,
      writable: false,
      configurable: true,
    })

    Object.defineProperty(this, 'parent', {
      get: () => parent,
      configurable: true,
    })

    if(this.connectedCallback) {
      this.connectedCallback(parent)
    }

    return this
  }
  // 可重写，用于回收资源
  disconnect(parent) {
    if(!this.parent || parent !== this.parent) {
      throw new Error('Invalid node to disconnect')
    }

    delete this.zOrder

    if(this.disconnectedCallback) {
      this.disconnectedCallback(this.parent)
    }

    delete this.parent

    return this
  }
}

export default BaseNode
