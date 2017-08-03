//http://www.runoob.com/cssref/css3-pr-filter.html
import {addUnitSuffix} from 'sprite-utils'
export default {
  blur(px){
    const content = /px/.test(px) ? px : px + 'px'
    return `blur(${content})`
  },
  brightness(percent){
    return `brightness(${percent})`
  },
  contrast(percent){
    return `contrast(${percent})`
  },
  
  dropShadow(params) {
    const [offsetX, offsetY, shadowRadius, color] = params
    return `drop-shadow(${addUnitSuffix(offsetX, 'px')} ${addUnitSuffix(offsetY, 'px')} ${addUnitSuffix(shadowRadius, 'px')} ${color})`
  },
   
  grayscale(percent){
    return `grayscale(${percent})`
  },
  hueRotate(deg){
    const content = /px|turn/.test(deg) ? deg : (/^[-+]?[0-9]*\.[0-9]+$/.test(deg) ? deg + 'turn' : deg + 'deg')
    return `hue-rotate(${content})`
  },
  invert(percent){
    return `invert(${percent})`
  },
  opacity(percent){
    return `opacity(${percent})`
  },
  saturate(percent){
    return `saturate(${percent})`
  },
  sepia(percent){
    return `sepia(${percent})`
  },
  url(path){

  },
  // 将所有的filter合并
  compile(filter = {}){
    return  Object.entries(filter).reduce((accumulator, curVal, curIndex, arr) => {
      curVal[1] = typeof curVal[1] === 'string' ? curVal[1].split(' ') : curVal[1]
      return accumulator.concat(this[curVal[0]](curVal[1]))
        }, []).join(' ')
  },

}
