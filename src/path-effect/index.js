// https://github.com/AlloyTeam/pasition

import path2shapes from './path2shapes'
import {sort, sortCurves} from './sort'

function _subShapes(shapes, count) {
  for(let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1]
    const newShape = []
    const x = shape[0][0],
      y = shape[0][1]
    shape.forEach(() => {
      newShape.push([x, y, x, y, x, y, x, y])
    })

    shapes.push(newShape)
  }
}

function _upShapes(shapes, count) {
  for(let i = 0; i < count; i++) {
    const shape = shapes[shapes.length - 1]
    const newShape = []

    shape.forEach((curve) => {
      newShape.push(curve.slice(0))
    })
    shapes.push(newShape)
  }
}


function split(x1, y1, x2, y2, x3, y3, x4, y4, t) {
  return {
    left: _split(x1, y1, x2, y2, x3, y3, x4, y4, t),
    right: _split(x4, y4, x3, y3, x2, y2, x1, y1, 1 - t, true),
  }
}

function _split(x1, y1, x2, y2, x3, y3, x4, y4, t, reverse) {
  const x12 = (x2 - x1) * t + x1
  const y12 = (y2 - y1) * t + y1

  const x23 = (x3 - x2) * t + x2
  const y23 = (y3 - y2) * t + y2

  const x34 = (x4 - x3) * t + x3
  const y34 = (y4 - y3) * t + y3

  const x123 = (x23 - x12) * t + x12
  const y123 = (y23 - y12) * t + y12

  const x234 = (x34 - x23) * t + x23
  const y234 = (y34 - y23) * t + y23

  const x1234 = (x234 - x123) * t + x123
  const y1234 = (y234 - y123) * t + y123

  if(reverse) {
    return [x1234, y1234, x123, y123, x12, y12, x1, y1]
  }
  return [x1, y1, x12, y12, x123, y123, x1234, y1234]
}

function _splitCurves(curves, count) {
  let i = 0,
    index = 0

  for(; i < count; i++) {
    const curve = curves[index]
    const cs = split(curve[0], curve[1], curve[2], curve[3], curve[4], curve[5], curve[6], curve[7], 0.5)
    curves.splice(index, 1)
    curves.splice(index, 0, cs.left, cs.right)

    index += 2
    if(index >= curves.length - 1) {
      index = 0
    }
  }
}

// 将两段 path 对齐
function match(pathA, pathB, minCurves = 100) {
  let shapesA = path2shapes(pathA)
  const shapesB = path2shapes(pathB)

  const lenA = shapesA.length,
    lenB = shapesB.length

  if(lenA > lenB) {
    _subShapes(shapesB, lenA - lenB)
  } else if(lenA < lenB) {
    _upShapes(shapesA, lenB - lenA)
  }

  shapesA = sort(shapesA, shapesB)

  shapesA.forEach((curves, index) => {
    const lenA = curves.length,
      lenB = shapesB[index].length

    if(lenA > lenB) {
      if(lenA < minCurves) {
        _splitCurves(curves, minCurves - lenA)
        _splitCurves(shapesB[index], minCurves - lenB)
      } else {
        _splitCurves(shapesB[index], lenA - lenB)
      }
    } else if(lenA < lenB) {
      if(lenB < minCurves) {
        _splitCurves(curves, minCurves - lenA)
        _splitCurves(shapesB[index], minCurves - lenB)
      } else {
        _splitCurves(curves, lenB - lenA)
      }
    }
  })


  shapesA.forEach((curves, index) => {
    shapesA[index] = sortCurves(curves, shapesB[index])
  })

  return [shapesA, shapesB]
}

function lerpPoints(x1, y1, x2, y2, t) {
  return [x1 + (x2 - x1) * t, y1 + (y2 - y1) * t]
}

function lerpCurve(curveA, curveB, t) {
  return lerpPoints(curveA[0], curveA[1], curveB[0], curveB[1], t)
    .concat(lerpPoints(curveA[2], curveA[3], curveB[2], curveB[3], t))
    .concat(lerpPoints(curveA[4], curveA[5], curveB[4], curveB[5], t))
    .concat(lerpPoints(curveA[6], curveA[7], curveB[6], curveB[7], t))
}

function lerp(pathA, pathB, t) {
  const [shapesA, shapesB] = match(pathA, pathB)

  return `${shapesA.map((shapeA, i) => {
    const shapeB = shapesB[i]
    return shapeA.map((curveA, i) => {
      const curveB = shapeB[i]
      const curve = lerpCurve(curveA, curveB, t)
      if(i === 0) {
        return `M${curve[0]} ${curve[1]} C${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`
      }
      return `${curve[2]} ${curve[3]}, ${curve[4]} ${curve[5]}, ${curve[6]} ${curve[7]}`
    })
  }).join(' ')}z`
}

export default function (pathA, pathB, p, s, e) {
  const ep = (p - s) / (e - s)
  if(ep <= 0) return pathA
  if(ep >= 1) return pathB
  return lerp(pathA, pathB, ep)
}

