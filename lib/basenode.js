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
  pointCollision(evt) {
    throw Error('you mast override this method')
  }
  dispatchEvent(type, evt, forceTrigger = false) {
    if(forceTrigger || this.pointCollision(evt)) {
      evt.target = this

      const handlers = this[_eventHandlers][type]
      if(handlers) {
        handlers.forEach(handler => handler.call(this, evt))
      }

      if(type === 'mousemove'){
        if(!this[_collisionState]){
          const _evt = Object.assign({}, evt)
          _evt.type = 'mouseenter'

          this.dispatchEvent('mouseenter', _evt)
        }
        this[_collisionState] = true
      }
    } else {
      if(type === 'mousemove'){
        if(this[_collisionState]){
          const _evt = Object.assign({}, evt)
          _evt.type = 'mouseleave'
          _evt.target = this
          this.dispatchEvent('mouseleave', _evt, true)
        }
        this[_collisionState] = false
      }
    }
    
    return this[_collisionState]
  }
}

export default BaseNode
