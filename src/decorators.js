const deprecationSet = new Set()

export function setDeprecation(apiName, msg = '') {
  msg = `[Deprecation] ${apiName} has been deprecated.${msg}`
  if(!deprecationSet.has(msg)) {
    deprecationSet.add(msg)
    console.warn(msg)
  }
}

export function deprecate(...args) {
  let msg = '',
    apiName = ''
  function decorator(target, prop, descriptor) {
    apiName = apiName || `${target.constructor.name}#${prop}`
    if(typeof descriptor.value === 'function') {
      const func = descriptor.value
      descriptor.value = function (...args) {
        setDeprecation(apiName, msg)
        return func.apply(this, args)
      }
    }
    if(descriptor.set) {
      const setter = descriptor.set
      descriptor.set = function (val) {
        setDeprecation(apiName, msg)
        return setter.call(this, val)
      }
    }
    if(descriptor.get) {
      const getter = descriptor.get
      descriptor.get = function () {
        setDeprecation(apiName, msg)
        return getter.call(this)
      }
    }
  }
  if(args.length === 1) {
    msg = args[0]
    return decorator
  }
  if(args.length === 2) {
    apiName = args[0]
    msg = args[1]
    return decorator
  }
  return decorator(...args)
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
