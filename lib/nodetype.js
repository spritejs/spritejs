const nodeTypes = new Map()

export function registerNodeType(type, Class) {
  Object.defineProperty(Class, 'nodeType', {
    get() {
      return type
    }
  })
  nodeTypes.set(type, Class)
}

export function createNode(type, attrs) {
  const Class = nodeTypes.get(type)
  if(Class) {
    const sprite = new Class()
    if(attrs){
      sprite.initAttributes(attrs)
    }
    return sprite
  }
  return null
}

export function getNodeType(type) {
  return nodeTypes.get(type)
}
