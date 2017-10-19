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
  // d3-friendly
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
    if(!evt.terminated && (forceTrigger || this.pointCollision(evt))) {
      evt.target = this
      if(evt.type !== type) {
        if(evt.type) {
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
          _evt.terminated = false

          this.dispatchEvent('mouseenter', _evt)
        }
        this[_collisionState] = true
      }
    } else if(type === 'mousemove') {
      if(this[_collisionState]) {
        const _evt = Object.assign({}, evt)
        _evt.type = 'mouseleave'
        _evt.target = this
        _evt.terminated = false

        this.dispatchEvent('mouseleave', _evt, true)
      }
      this[_collisionState] = false
    }

    return this[_collisionState]
  }
  // called when layer appendChild
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

  // override to recycling resources
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
