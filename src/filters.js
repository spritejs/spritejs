// http://www.runoob.com/cssref/css3-pr-filter.html
import {appendUnit} from 'sprite-utils'
export default {
  blur(px) {
    return `blur(${appendUnit(px)})`
  },
  brightness(percent) {
    return `brightness(${percent})`
  },
  contrast(percent) {
    return `contrast(${percent})`
  },

  dropShadow([offsetX, offsetY, shadowRadius, color]) {
    return `drop-shadow(${appendUnit(offsetX)} ${appendUnit(offsetY)} ${appendUnit(shadowRadius)} ${color})`
  },

  grayscale(percent) {
    return `grayscale(${percent})`
  },
  hueRotate(value) {
    return `hue-rotate(${appendUnit(value, 'deg')})`
  },
  invert(percent) {
    return `invert(${percent})`
  },
  opacity(percent) {
    return `opacity(${percent})`
  },
  saturate(percent) {
    return `saturate(${percent})`
  },
  sepia(percent) {
    return `sepia(${percent})`
  },
  url(path) {
    return `url(${path})`
  },
  compile(filter = {}) {
    return Object.entries(filter).reduce((accumulator, curVal) => {
      return accumulator.concat(this[curVal[0]](curVal[1]))
    }, []).join(' ')
  },
}
