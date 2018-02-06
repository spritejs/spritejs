import {Animator, Effects} from 'sprite-animator'

import Matrix from './matrix'
import {parseColor, parseStringTransform} from './utils'

const defaultEffect = Effects.default

function arrayEffect(arr1, arr2, p, start, end) {
  if(Array.isArray(arr1)) {
    return arr1.map((o, i) => defaultEffect(o, arr2[i], p, start, end))
  }
  return defaultEffect(arr1, arr2, p, start, end)
}

function transformMatrix(trans) {
  if(Array.isArray(trans)) {
    return trans
  }
  const transform = new Matrix()
  for(const [key, value] of Object.entries(trans)) {
    if(Array.isArray(value)) {
      transform[key](...value)
    } else {
      transform[key](value)
    }
  }
  return transform
}

function objectEffect(obj1, obj2, p, start, end) {
  const t1 = Object.assign({}, obj2, obj1),
    t2 = Object.assign({}, obj1, obj2)

  for(const [key, value] of Object.entries(t1)) {
    t1[key] = arrayEffect(value, t2[key], p, start, end)
  }

  return t1
}

function transformEffect(trans1, trans2, p, start, end) {
  trans1 = parseStringTransform(trans1)
  trans2 = parseStringTransform(trans2)

  if(Array.isArray(trans1) || Array.isArray(trans2)) {
    trans1 = transformMatrix(trans1)
    trans2 = transformMatrix(trans2)
    return arrayEffect(trans1, trans2, p, start, end)
  }
  return objectEffect(trans1, trans2, p, start, end)
}

function colorEffect(color1, color2, p, start, end) {
  color1 = parseColor(color1)
  color2 = parseColor(color2)

  return objectEffect(color1, color2, p, start, end)
}

Object.assign(Effects, {
  pos: arrayEffect,
  size: arrayEffect,
  transform: transformEffect,
  bgcolor: colorEffect,
  border(v1, v2, p, start, end) {
    return [defaultEffect(v1[0], v2[0], p, start, end), colorEffect(v1[1], v2[1], p, start, end)]
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  zIndex(v1, v2, p, start, end) {
    return Math.round(defaultEffect(v1, v2, p, start, end))
  },
  color: colorEffect,
  strokeColor: colorEffect,
  fillColor: colorEffect,
})

export default class extends Animator {
  constructor(sprite, frames, timing) {
    super(sprite.attr(), frames, timing)
    this.target = sprite
  }

  get playState() {
    if(!this.target.parent) {
      return 'idle'
    }
    return super.playState
  }

  play() {
    if(!this.target.parent || this.playState === 'running') {
      return
    }

    super.play()

    const sprite = this.target,
      layer = sprite.parent

    if(!layer) {
      throw new Error('no context')
    }

    sprite.attr(this.frame)

    const that = this
    this.ready.then(() => {
      requestAnimationFrame(function update() {
        if(that.playState === 'idle') return
        sprite.attr(that.frame)
        if(that.playState === 'running') {
          requestAnimationFrame(update)
        } else if(that.playState === 'paused') {
          that.ready.then(() => {
            requestAnimationFrame(update)
          })
        }
      })
    })
  }

  // 防止异步设置了不该设置的属性
  cancel() {
    super.cancel()
    this.target.attr(this.frame)
  }
}
