const _eventHandlers = Symbol('eventHandlers')

class BaseNode {
  constructor(){
    this[_eventHandlers] = {}
  }
  on(type, handler){
    this[_eventHandlers][type] = this[_eventHandlers][type] || []
    this[_eventHandlers][type].push(handler)
  }
  off(type, handler){
    if(handler && this[_eventHandlers][type]){
      const idx  = this[_eventHandlers][type].indexOf(handler)

      if(idx >= 0){
        this[_eventHandlers][type].splice(idx, 1)
      }
    } else {
      delete this[_eventHandlers][type]
    }
  }
  pointCollision(evt){
    throw Error('you mast override this method')
  }
  dispatchEvent(type, evt){
    if(this.pointCollision(evt)){
      evt.target = this

      const handlers = this[_eventHandlers][type]
      if(handlers){
        handlers.forEach(handler => handler.call(this, evt))
      }
    }
  }
}

export default BaseNode
