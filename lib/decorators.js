
export function attr(...args){
  let propParser

  function decorator(target, prop, descriptor) {
    descriptor.enumerable = true

    const setter = descriptor.set,
          getter = descriptor.get

    descriptor.set = function (val) {
      const subject = this.subject || this,
        oldVal = this[prop]

      if(propParser) val = propParser(val)

      setter.call(this, val)

      //修改过属性，通知引擎渲染
      subject.forceUpdate()

      if(subject.attributeChangedCallback) {
        subject.attributeChangedCallback(prop, oldVal, getter.call(this), this)
      }
    }

    return descriptor
  }

  if(args.length === 1) {
    propParser = args[0]
    return decorator
  }
  return decorator(...args)
}

export function readonly(target, prop, descriptor) {
  descriptor.enumerable = true
  return descriptor
}

const replicators = {
  json(val){
    if(typeof val === 'object'){
      return JSON.parse(JSON.stringify(val))
    }
    return val
  },
  plainObject(obj){
    return Object.assign({}, obj)
  },
  plainArray(arr){
    return arr.slice(0)
  }
}   

export function immutable(...args) {
  let replicator = replicators.json

  function decorator(target, prop, descriptor){
    const getter = descriptor.get
    if(typeof replicator === 'string'){
      replicator = replicators[replicator]
    }
    
    descriptor.get = function(){
      return replicator(getter.call(this))
    }
    
    return descriptor
  }

  if(args.length === 1){
    replicator = args[0]
    return decorator
  } 
  return decorator(...args)
}

//functional decorators

export function memorize(fn, serializer = JSON.stringify) {
  const cache = {}
  return function(...args){
    const key = serializer(args)
    if(!(key in cache)){
      cache[key] = fn.apply(this, args)
    }
    
    return cache[key]
  }
}
