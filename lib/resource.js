import BaseSprite from './basesprite'
import {createNode} from './nodetype'

const axios = require('axios')

const loadedResources = new Map()

const Resource = {
  loadTexture(texture, timeout = 30000) {
    if(typeof texture === 'string' || texture instanceof BaseSprite) {
      texture = {src: texture}
    }
    if(typeof texture.src !== 'string' && texture.src.id == null) {
      texture.src.id = `texture${Math.random()}`
    }
    if(texture.src && texture.src.id) {
      texture.id = texture.src.id
    }

    const mapKey = texture.id || texture.src
    if(!loadedResources.has(mapKey)) {
      return new Promise((resolve, reject) => {
        if(typeof texture.src !== 'string') { // support sprites as textures
          if(!(texture.src instanceof BaseSprite)) {
            const node = createNode(texture.src.nodeType, texture.src.attrs)
            node.id = texture.id
            texture.src = node
          }
          Promise.resolve(texture.src.render())
              .then((context) => {
                resolve({img: context.canvas, texture})
                loadedResources.set(mapKey, context.canvas)
              })
          texture.src = texture.src.serialize()
        } else {
          const img = document.createElement('img')
          img.crossOrigin = 'anonymous'

          const timer = setTimeout(() => {
            reject(new Error('load img timeout'))
          }, timeout)

          img.src = texture.src
          img.onload = function () {
            const {width, height} = img
            const canvas = document.createElement('canvas')
            const ctx = canvas.getContext('2d')
            let imgRect

            canvas.width = width
            canvas.height = height

            if(imgRect) {
              ctx.drawImage(img, imgRect[0], imgRect[1], width, height)
            } else {
              ctx.drawImage(img, 0, 0)
            }
            resolve({img: canvas, texture})
            loadedResources.set(mapKey, canvas)
            clearTimeout(timer)
          }
        }
      })
    }
    return Promise.resolve({img: loadedResources.get(mapKey),
      texture})
  },
  /**
    u3d-json compatible: https://www.codeandweb.com/texturepacker
    {
      frames: {
        key: {
          frame: {x, y, w, h},
          trimmed: ...,
          rotated: true|false, 
          spriteSourceSize: {x, y, w, h},
          sourceSize: {w, h}
        }
      }
    }
   */
  async loadFrames(src, frameData) {
    if(typeof frameData === 'string') {
      frameData = await axios.get(frameData)
      frameData = frameData.data
    }

    const texture = await this.loadTexture(src)
    const frames = frameData.frames

    for(const key in frames) {
      const frame = frames[key],
        {w, h} = frame.sourceSize

      const canvas = document.createElement('canvas'),
        srcRect = frame.frame,
        rect = frame.spriteSourceSize,
        context = canvas.getContext('2d')

      const rotated = frame.rotated

      canvas.width = w
      canvas.height = h

      context.save()

      if(rotated) {
        context.translate(0, h)
        context.rotate(-0.5 * Math.PI)

        const tmp = rect.y
        rect.y = rect.x
        rect.x = h - srcRect.h - tmp

        context.drawImage(texture.img,
              srcRect.x, srcRect.y, srcRect.h, srcRect.w,
              rect.x, rect.y, rect.h, rect.w)
      } else {
        context.drawImage(texture.img,
              srcRect.x, srcRect.y, srcRect.w, srcRect.h,
              rect.x, rect.y, rect.w, rect.h)
      }

      context.restore()

      loadedResources.set(key, canvas)
    }
    return texture
  }
}

export default Resource
