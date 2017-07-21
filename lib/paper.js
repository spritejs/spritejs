import Layer from './layer'
import Resource from './resource'

class Paper {
  constructor(container, width, height){
    if(typeof container === 'string') {
      container = document.querySelector(container)
    }

    this.container = container
    this.width = width
    this.height = height
    this.layers = []
  }
  async preload(...resources){
    const ret = []
    for(let i = 0; i < resources.length; i++){
      const res = resources[i]
      if(typeof res === 'string'){
        ret.push(await Resource.loadTexture(res))
      } else if(Array.isArray(res)){
        ret.push(await Resource.loadFrames(...res))
      }
    }
    return ret
  }
  layer(id = 'default'){
    this.layers[id] = new Layer(this)

    return this.layers[id]
  }
}


const paper = {
  Paper2D(...args){
    return new Paper(...args)
  }
};

export default paper
