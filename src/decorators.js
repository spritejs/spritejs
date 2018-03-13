const deepEqual = require('deep-equal')

/**
  attr
  attr('repaint')
 */
export function attr(...args) {
  let repaint

  function decorator(target, prop, descriptor) {
    descriptor.enumerable = true

    const setter = descriptor.set,
      getter = descriptor.get

    descriptor.set = function (val) {
      const subject = this.subject || this,
        oldVal = getter.call(this, prop)

      if(val === null && this.remove) {
        this.remove(prop)
      } else {
        setter.call(this, val)
      }

      const newVal = getter.call(this, prop)

      if(!deepEqual(newVal, oldVal)) {
        if(repaint === 'repaint') {
          subject.cache = null
        }
        subject.forceUpdate()
      }

      if(subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, newVal, oldVal, this)
      }
    }

    return descriptor
  }

  if(args.length === 1) {
    repaint = args[0]
    return decorator
  }
  return decorator(...args)
}

export function deprecate(...args) {
  let msg = ''
  function decorator(target, prop, descriptor) {
    const defaultMsg = `${target.constructor.name}#${prop} has been deprecated.`
    if(typeof descriptor.value === 'function') {
      const func = descriptor.value
      descriptor.value = function (...args) {
        console.warn(defaultMsg, msg)
        return func.apply(this, args)
      }
    }
    if(descriptor.set) {
      const setter = descriptor.set
      descriptor.set = function (val) {
        console.warn(defaultMsg, msg)
        return setter.call(this, val)
      }
    }
    if(descriptor.get) {
      const getter = descriptor.get
      descriptor.get = function () {
        console.warn(defaultMsg, msg)
        return getter.call(this)
      }
    }
  }
  if(args.length === 1) {
    msg = args[0]
    return decorator
  }
  return decorator(...args)
}

export function readonly(target, prop, descriptor) {
  descriptor.enumerable = true
}

export function parseValue(...parsers) {
  return function (target, prop, descriptor) {
    const setter = descriptor.set

    descriptor.set = function (val) {
      val = parsers.reduce((v, parser) => parser(v), val)

      setter.call(this, val)
    }

    return descriptor
  }
}

// export function defaultValue(val){
//   return function(target, prop, descriptor){
//     const getter = descriptor.get

//     descriptor.get = function () {
//       const ret = getter.call(this)
//       return ret != null ? ret : val
//     }

//     return descriptor
//   }
// }

// functional decorators

export function memoize(fn, serializer = JSON.stringify) {
  const cache = {}
  return function (...args) {
    const key = serializer(args)
    if(!(key in cache)) {
      cache[key] = fn.apply(this, args)
    }

    return cache[key]
  }
}
