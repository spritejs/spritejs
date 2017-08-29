import {attr, readonly, immutable, memoize} from './decorators'
import Matrix from './matrix'

const parseColor = memoize((colorStr) => {
  if(typeof colorStr === 'string') {
    const canvas = document.createElement('canvas'),
      context = canvas.getContext('2d')

    context.fillStyle = colorStr
    context.fillRect(0, 0, 1, 1)
    const data = context.getImageData(0, 0, 1, 1).data

    return {
      red: data[0],
      green: data[1],
      blue: data[2],
      alpha: data[3] / 255,
    }
  }
  return colorStr
})

// attr 装饰器的转换器，用来转换属性参数简写
function oneOrTwoValues(val) {
  if(!Array.isArray(val)) {
    return [val, val]
  }
  return val
}

// attr 装饰器的转换器，用来转换属性参数简写
function fourValuesShortCut(val) {
  if(!Array.isArray(val)) {
    return [val, val, val, val]
  } else if(val.length === 2) {
    return [val[0], val[1], val[0], val[1]]
  }
  return [...val, 0, 0, 0, 0].slice(0, 4)
}

function boxIntersect(box1, box2) {
  // left, top, right, buttom
  const [l1, t1, r1, b1] = [box1[0], box1[1],
      box1[2], box1[3]],
    [l2, t2, r2, b2] = [box2[0], box2[1],
      box2[2], box2[3]]

  const t = Math.max(t1, t2),
    r = Math.min(r1, r2),
    b = Math.min(b1, b2),
    l = Math.max(l1, l2)

  if(b >= t && r >= l) {
    return [l, t, r, b]
  }
  return null
}

function boxToRect(box) {
  return [box[0], box[1], Math.round(box[2] - box[0]), Math.round(box[3] - box[1])]
}

function boxEqual(box1, box2) {
  return box1[0] === box2[0]
         && box1[1] === box2[1]
         && box1[2] === box2[2]
         && box1[3] === box2[3]
}

function rectToBox(rect){
  return [rect[0], rect[1], Math.round(rect[0] + rect[2]), Math.round(rect[1] + rect[3])]
}

function boxUnion(box1, box2) {
  // 增加一个误差数值，不然的话边界条件下可能会导致边缘有一像素问题？
  if(!box1) return box2
  if(!box2) return box1

  return [Math.min(box1[0], box2[0]),
    Math.min(box1[1], box2[1]),
    Math.max(box1[2], box2[2]),
    Math.max(box1[3], box2[3])]
}
// 取得文字的宽高，在显示的时候要用，canvas 的 measureText 只能返回 width，所以不能用
const getTextSize = memoize((text, font, lineHeight = '100%') => {
  const tmpEl = document.createElement('font')

  if(font) tmpEl.style.font = font

  Object.assign(tmpEl.style, {
    visibility: 'hidden',
    position: 'absolute',
    display: 'inline-block',
    lineHeight,
    padding: '0'
  })

  tmpEl.innerHTML = text
  document.documentElement.appendChild(tmpEl)
  const size = [tmpEl.clientWidth, tmpEl.clientHeight]
  document.documentElement.removeChild(tmpEl)

  return size
})

// 保证每个参数都是有单位的
function addUnitSuffix(str, unit) {
  const rule = new RegExp(unit)
  return rule.test(str) ? str : str + unit
}

// 去除单位
function removeUnit(str) {
  return str.match(/-?[0-9]+\.?[0-9]*/) ? Number(str.match(/-?[0-9]+\.?[0-9]*/)[0]) : str
}

// 获取 svg path 对象
function createPath(d) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path")
  path.setAttribute('d', d)

  return path  
}

export {
  parseColor,
  oneOrTwoValues,
  fourValuesShortCut,
  boxIntersect,
  boxToRect,
  boxEqual,
  boxUnion,
  rectToBox,
  getTextSize,
  addUnitSuffix,
  removeUnit,
  createPath,
}
