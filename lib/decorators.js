
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

