
export function attr(...args) {
  let repaint

  function decorator(target, prop, descriptor) {
    descriptor.enumerable = true

    const setter = descriptor.set,
      getter = descriptor.get

    descriptor.set = function (val) {
      const subject = this.subject || this,
        oldVal = this[prop]

      setter.call(this, val)

      if(repaint === 'repaint') {
        subject.clearCache({target: this, propChange: prop})
      }

      // 修改过属性，通知引擎渲染
      subject.forceUpdate()

      if(subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, getter.call(this), oldVal,  this)
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
  return descriptor
}

const replicators = {
  json(val) {
    if(typeof val === 'object') {
      return JSON.parse(JSON.stringify(val))
    }
    return val
  },
  plainObject(obj) {
    return Object.assign({}, obj)
  },
  plainArray(arr) {
    return arr.slice(0)
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

export function immutable(...args) {
  let replicator = replicators.json

  function decorator(target, prop, descriptor) {
    const getter = descriptor.get
    if(typeof replicator === 'string') {
      replicator = replicators[replicator]
    }

    descriptor.get = function () {
      return replicator(getter.call(this))
    }

    return descriptor
  }

  if(args.length === 1) {
    replicator = args[0]
    return decorator
  }
  return decorator(...args)
}

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
