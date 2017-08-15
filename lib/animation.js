import {Animator, Effects} from 'sprite-animator'

import Matrix from './matrix'
import {parseColor} from './utils'

const defaultEffect = Effects.default

function arrayEffect(arr1, arr2, p, start, end) {
  if(Array.isArray(arr1)) {
    return arr1.map((o, i) => defaultEffect(o, arr2[i], p, start, end))
  } else {
    return defaultEffect(arr1, arr2, p, start, end)
  }
}

function transformMatrix(trans) {
  if(Array.isArray(trans)){
    return trans
  }
  let transform = new Matrix()
  for(let [key, value] of Object.entries(trans)){
    if(Array.isArray(value)){
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

  for(let [key, value] of Object.entries(t1)){
    t1[key] = arrayEffect(value, t2[key], p, start, end)
  }
  return t1
}

function transformEffect(trans1, trans2, p, start, end) {
  if(Array.isArray(trans1) || Array.isArray(trans2)){
    trans1 = transformMatrix(trans1)
    trans2 = transformMatrix(trans2)
    return arrayEffect(trans1, trans2, p, start, end)
  } else {
    return objectEffect(trans1, trans2, p, start, end)
  }
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
  border: function(v1, v2, p, start, end){
    return [defaultEffect(v1[0], v2[0], p, start, end), colorEffect(v1[1], v2[1], p, start, end)]
  },
  scale: arrayEffect,
  translate: arrayEffect,
  skew: arrayEffect,
  zIndex: function(v1, v2, p, start, end){
    return Math.round(defaultEffect(v1, v2, p, start, end))
  },
  color: colorEffect,
})

//当 Animation 状态 ready 的时候添加到 layer 的 running animations 列表中，
//并触发 layer 的 prepareRender()
//layer 每次执行 prepareRender 的时候将不在 running 状态的 animations 移除
//当 sprite 删除的时候，判断有没有 animations，有的话，依次移除每个 animation
//移除的做法是先执行 animation 的 finish 方法，再删除引用，同时执行 layer 的 prepareRender() 
//这样 layer 也清除了 animation
export default class extends Animator {
  constructor(sprite, frames, timing){
    super(sprite.attr(), frames, timing)
    this.target = sprite
  }
  
  get playState(){
    if(!this.target.parent){
      return 'idle'
    }
    return super.playState
  }

  play() {
    if(!this.target.parent || this.playState === 'running'){
      return
    }

    super.play()
    
    const sprite = this.target,
          layer = sprite.parent

    if(!layer){
      throw new Error('no context')
      return
    }

    sprite.attr(this.frame)

    this.ready.then(() => {
      layer.applyAnimation(this)
    })
  }
}
