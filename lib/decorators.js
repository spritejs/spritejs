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
        oldVal = this.get(prop)

      setter.call(this, val)

      const newVal = this.get(prop)

      if(!deepEqual(newVal, oldVal)) {
        if(repaint === 'repaint') {
          subject.cache = null
        }

        // 修改过属性，通知引擎渲染
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
