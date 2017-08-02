//http://www.runoob.com/cssref/css3-pr-filter.html

export default {
  blur( px){
    return `blur(${px})`
  },
  brightness(percent){
    return `brightness(${percent})`
  },
  contrast(percent){
    return `contrast(${percent})`
  },
  /*
  dropShadow(context, offsetX, offsetY, shadowRadius, color)
   */
  grayscale(percent){
    return `grayscale(${percent})`
  },
  hueRotate(deg){
    return `hueRotate(${deg})`
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
  toStr(filter = {}){
    return  Object.entries(filter).reduce((p, c, index, array) => {
        return p.concat(this[c[0]](c[1]))
      }, []).join(' ')
  }
}
