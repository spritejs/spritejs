import BaseSprite from './basesprite'
import {createNode} from './nodetype'
import {createCanvas, loadImage} from './cross-platform'

const axios = require('axios')

const loadedResources = new Map()

const Resource = {
  loadTexture(texture, timeout = 30000) {
    if(typeof texture === 'string' || texture instanceof BaseSprite || texture.tagName === 'CANVAS') {
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
          let node = texture.src
          if(node.tagName === 'CANVAS') {
            resolve({img: node, texture})
            loadedResources.set(mapKey, node)
          } else {
            if(!(node instanceof BaseSprite)) {
              node = createNode(node.nodeType, node.attrs)
              node.id = texture.id
            }
            Promise.resolve(node.render())
              .then((context) => {
                resolve({img: node, texture})
                loadedResources.set(mapKey, node)
              })
            texture.src = node.serialize()
          }
        } else {
          const timer = setTimeout(() => {
            reject(new Error('load img timeout'))
          }, timeout)

          loadImage(texture.src).then((img) => {
            const {width, height} = img
            const canvas = createCanvas(width, height)
            const ctx = canvas.getContext('2d')
            let imgRect

            if(imgRect) {
              ctx.drawImage(img, imgRect[0], imgRect[1], width, height)
            } else {
              ctx.drawImage(img, 0, 0)
            }
            resolve({img: canvas, texture})
            loadedResources.set(mapKey, canvas)
            clearTimeout(timer)
          })
        }
      })
    }
    return Promise.resolve({
      img: loadedResources.get(mapKey),
      texture,
    })
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

    Object.entries(frames).forEach(([key, frame]) => {
      const {w, h} = frame.sourceSize

      const canvas = createCanvas(w, h),
        srcRect = frame.frame,
        rect = frame.spriteSourceSize,
        context = canvas.getContext('2d')

      const rotated = frame.rotated

      context.save()

      if(rotated) {
        context.translate(0, h)
        context.rotate(-0.5 * Math.PI)

        const tmp = rect.y
        rect.y = rect.x
        rect.x = h - srcRect.h - tmp

        context.drawImage(
          texture.img,
          srcRect.x, srcRect.y, srcRect.h, srcRect.w,
          rect.x, rect.y, rect.h, rect.w
        )
      } else {
        context.drawImage(
          texture.img,
          srcRect.x, srcRect.y, srcRect.w, srcRect.h,
          rect.x, rect.y, rect.w, rect.h
        )
      }

      context.restore()

      loadedResources.set(key, canvas)
    })

    return texture
  },
}

export default Resource
