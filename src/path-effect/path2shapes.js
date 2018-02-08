// https://github.com/AlloyTeam/pasition

import arcToBezier from './arc2bezier'
import parser from './parser'

function q2b(x1, y1, x2, y2, x3, y3) {
  return [x1, y1, (x1 + 2 * x2) / 3, (y1 + 2 * y2) / 3, (x3 + 2 * x2) / 3, (y3 + 2 * y2) / 3, x3, y3]
}

export default function (path) {
  // https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Paths
  // M = moveto
  // L = lineto
  // H = horizontal lineto
  // V = vertical lineto
  // C = curveto
  // S = smooth curveto
  // Q = quadratic Belzier curve
  // T = smooth quadratic Belzier curveto
  // A = elliptical Arc
  // Z = closepath
  // 以上所有命令均允许小写字母。大写表示绝对定位，小写表示相对定位(从上一个点开始)。
  const cmds = parser(path),
    len = cmds.length,
    shapes = []

  let preX = 0,
    preY = 0,
    j = 0,
    current = null,
    closeX,
    closeY,
    preCX,
    preCY,
    sLen,
    curves,
    lastCurve


  for(; j < len; j++) {
    const item = cmds[j]
    const action = item[0]
    const preItem = cmds[j - 1]

    switch (action) {
      case 'm':
        sLen = shapes.length
        shapes[sLen] = []
        current = shapes[sLen]
        preX += item[1]
        preY += item[2]
        break
      case 'M':

        sLen = shapes.length
        shapes[sLen] = []
        current = shapes[sLen]
        preX = item[1]
        preY = item[2]
        break

      case 'l':
        current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY + item[2]])
        preX += item[1]
        preY += item[2]
        break

      case 'L':

        current.push([preX, preY, item[1], item[2], item[1], item[2], item[1], item[2]])
        preX = item[1]
        preY = item[2]

        break

      case 'h':

        current.push([preX, preY, preX, preY, preX, preY, preX + item[1], preY])
        preX += item[1]
        break


      case 'H':
        current.push([preX, preY, item[1], preY, item[1], preY, item[1], preY])
        preX = item[1]
        break

      case 'v':
        current.push([preX, preY, preX, preY, preX, preY, preX, preY + item[1]])
        preY += item[1]
        break

      case 'V':
        current.push([preX, preY, preX, item[1], preX, item[1], preX, item[1]])
        preY = item[1]
        break


      case 'C':

        current.push([preX, preY, item[1], item[2], item[3], item[4], item[5], item[6]])
        preX = item[5]
        preY = item[6]
        break
      case 'S':
        if(preItem[0] === 'C' || preItem[0] === 'c') {
          current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], item[1], item[2], item[3], item[4]])
        } else if(preItem[0] === 'S' || preItem[0] === 's') {
          current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], item[1], item[2], item[3], item[4]])
        }
        preX = item[3]
        preY = item[4]
        break

      case 'c':
        current.push([preX, preY, preX + item[1], preY + item[2], preX + item[3], preY + item[4], preX + item[5], preY + item[6]])
        preX += item[5]
        preY += item[6]
        break
      case 's':
        if(preItem[0] === 'C' || preItem[0] === 'c') {
          current.push([preX, preY, preX + preItem[5] - preItem[3], preY + preItem[6] - preItem[4], preX + item[1], preY + item[2], preX + item[3], preY + item[4]])
        } else if(preItem[0] === 'S' || preItem[0] === 's') {
          current.push([preX, preY, preX + preItem[3] - preItem[1], preY + preItem[4] - preItem[2], preX + item[1], preY + item[2], preX + item[3], preY + item[4]])
        }

        preX += item[3]
        preY += item[4]

        break
      case 'a':
        curves = arcToBezier({
          rx: item[1],
          ry: item[2],
          px: preX,
          py: preY,
          xAxisRotation: item[3],
          largeArcFlag: item[4],
          sweepFlag: item[5],
          cx: preX + item[6],
          cy: preX + item[7],
        })
        lastCurve = curves[curves.length - 1]


        curves.forEach((curve, index) => {
          if(index === 0) {
            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y])
          } else {
            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y])
          }
        })

        preX = lastCurve.x
        preY = lastCurve.y

        break

      case 'A':

        curves = arcToBezier({
          rx: item[1],
          ry: item[2],
          px: preX,
          py: preY,
          xAxisRotation: item[3],
          largeArcFlag: item[4],
          sweepFlag: item[5],
          cx: item[6],
          cy: item[7],
        })
        lastCurve = curves[curves.length - 1]


        curves.forEach((curve, index) => {
          if(index === 0) {
            current.push([preX, preY, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y])
          } else {
            current.push([curves[index - 1].x, curves[index - 1].y, curve.x1, curve.y1, curve.x2, curve.y2, curve.x, curve.y])
          }
        })

        preX = lastCurve.x
        preY = lastCurve.y

        break
      case 'Q':
        current.push(q2b(preX, preY, item[1], item[2], item[3], item[4]))
        preX = item[3]
        preY = item[4]

        break
      case 'q':
        current.push(q2b(preX, preY, preX + item[1], preY + item[2], item[3] + preX, item[4] + preY))
        preX += item[3]
        preY += item[4]
        break

      case 'T':

        if(preItem[0] === 'Q' || preItem[0] === 'q') {
          preCX = preX + preItem[3] - preItem[1]
          preCY = preY + preItem[4] - preItem[2]
          current.push(q2b(preX, preY, preCX, preCY, item[1], item[2]))
        } else if(preItem[0] === 'T' || preItem[0] === 't') {
          current.push(q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, item[1], item[2]))
          preCX = preX + preX - preCX
          preCY = preY + preY - preCY
        }

        preX = item[1]
        preY = item[2]
        break


      case 't':
        if(preItem[0] === 'Q' || preItem[0] === 'q') {
          preCX = preX + preItem[3] - preItem[1]
          preCY = preY + preItem[4] - preItem[2]
          current.push(q2b(preX, preY, preCX, preCY, preX + item[1], preY + item[2]))
        } else if(preItem[0] === 'T' || preItem[0] === 't') {
          current.push(q2b(preX, preY, preX + preX - preCX, preY + preY - preCY, preX + item[1], preY + item[2]))
          preCX = preX + preX - preCX
          preCY = preY + preY - preCY
        }

        preX += item[1]
        preY += item[2]
        break

      case 'Z':
        closeX = current[0][0]
        closeY = current[0][1]
        current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY])
        break
      case 'z':
        closeX = current[0][0]
        closeY = current[0][1]
        current.push([preX, preY, closeX, closeY, closeX, closeY, closeX, closeY])
        break

      default:
        throw new Error('unknown action')
    }
  }

  return shapes
}
