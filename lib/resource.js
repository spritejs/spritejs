const axios = require('axios')

const loadedResources = new Map()

const Resource = {
  loadTexture(texture, timeout = 30000){
    if(typeof texture === 'string'){
      texture = {src: texture}
    }
    if(!loadedResources.has(texture.src)){
      return new Promise((resolve, reject) => {
        const img = document.createElement('img')
        
        const timer = setTimeout(() => {
          reject(new Error('load img timeout'))
        }, timeout)

        img.src = texture.src
        img.onload = function(){
          let {width, height} = img
          const canvas = document.createElement('canvas')
          canvas.width = width
          canvas.height = height
          canvas.getContext('2d').drawImage(img, 0, 0)
          resolve({img: canvas, texture})
          loadedResources.set(texture.src, canvas)
          clearTimeout(timer)
        }
      }) 
    }else{
      return Promise.resolve({img: loadedResources.get(texture.src), 
              texture: texture})
    }
  },
  /**
    采用 u3d json 格式，但不支持 rotation
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  async loadFrames(src, frameData){
    if(typeof frameData === 'string'){
      frameData = await axios.get(frameData)
      frameData = frameData.data
    }
    //console.log(frames);
    const texture = await this.loadTexture(src)
    const frames = frameData.frames;

    for(let key in frames){
      const frame = frames[key],
            {w, h} = frame.sourceSize

      const canvas = document.createElement('canvas'),
            srcRect = frame.frame,
            rect = frame.spriteSourceSize

      canvas.width = w
      canvas.height = h

      canvas.getContext('2d').drawImage(texture.img, 
              srcRect.x, srcRect.y, srcRect.w, srcRect.h,
              rect.x, rect.y, rect.w, rect.h)

      loadedResources.set(key, canvas)
    }
  },
  get(key){

  }
}

export default Resource
