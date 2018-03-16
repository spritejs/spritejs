import {Path2D} from './index'
global.IS_NODE_ENV = true

global.requestAnimationFrame = (fn) => {
  setTimeout(() => {
    const [s, ns] = process.hrtime()
    const t = s * 1e3 + ns * 1e-6
    fn(t)
  }, 16)
}

global.Path2D = Path2D

class CustomEvent {
  constructor(type, evt = {}) {
    this.type = type
    Object.assign(this, evt)
  }
}

global.CustomEvent = CustomEvent

export default {}
