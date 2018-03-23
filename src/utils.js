const colorString = require('color-string')

class Color {
  constructor(color) {
    if(typeof color === 'string') {
      const {model, value} = colorString.get(color)
      this.model = model
      this.value = value
    } else {
      this.model = color.model
      this.value = color.value
    }
  }
  toString() {
    const [a, b, c, d] = this.value
    const model = this.model

    return `${model}a(${a},${b},${c},${d})`
  }
  get str() {
    return String(this)
  }
}

export {Color}

const parseColor = (color) => {
  return new Color(color)
}

function parseColorString(color) {
  return parseColor(color).toString()
}

function parseStringTransform(str) {
  if(typeof str !== 'string') return str

  const rules = str.match(/((?:scale|rotate|translate|skew|matrix)\([^()]+\))/g)
  const ret = {}
  if(rules) {
    rules.forEach((rule) => {
      const matched = rule.match(/(scale|rotate|translate|skew|matrix)\(([^()]+)\)/)
      if(matched) {
        const [, m, v] = matched
        if(m === 'rotate') {
          ret[m] = parseStringFloat(v)[0]
        } else {
          ret[m] = parseStringFloat(v)
        }
      }
    })
  }

  return ret
}

function parseValuesString(str, isInt = true) {
  if(typeof str === 'string') {
    const values = str.split(/[\s,]+/g)
    return values.map((v) => { return isInt ? parseInt(v, 10) : parseFloat(v) })
  }
  return str
}

function parseStringInt(str) {
  return parseValuesString(str, true)
}

function parseStringFloat(str) {
  return parseValuesString(str, false)
}

function oneOrTwoValues(val) {
  if(!Array.isArray(val)) {
    return [val, val]
  } else if(val.length === 1) {
    return [val[0], val[0]]
  }
  return val
}

function fourValuesShortCut(val) {
  if(!Array.isArray(val)) {
    return [val, val, val, val]
  } else if(val.length === 1) {
    return [val[0], val[0], val[0], val[0]]
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
  return [box[0], box[1], box[2] - box[0], box[3] - box[1]]
}

function boxEqual(box1, box2) {
  return box1[0] === box2[0]
         && box1[1] === box2[1]
         && box1[2] === box2[2]
         && box1[3] === box2[3]
}

function rectToBox(rect) {
  return [rect[0], rect[1], rect[0] + rect[2], rect[1] + rect[3]]
}

function rectVertices(rect) {
  const [x1, y1, x2, y2] = rectToBox(rect)

  return [
    [x1, y1],
    [x2, y1],
    [x2, y2],
    [x1, y2],
  ]
}

function boxUnion(box1, box2) {
  if(!box1) return box2
  if(!box2) return box1

  return [Math.min(box1[0], box2[0]),
    Math.min(box1[1], box2[1]),
    Math.max(box1[2], box2[2]),
    Math.max(box1[3], box2[3])]
}

function appendUnit(value, defaultUnit = 'px') {
  if(value === '') {
    return value
  }
  if(typeof value === 'string' && Number.isNaN(Number(value))) {
    return value
  }
  return value + defaultUnit
}

function gradientBox(angle, rect) {
  const [x, y, w, h] = rect

  angle %= 360
  if(angle < 0) {
    angle += 360
  }

  if(angle >= 0 && angle < 90) {
    const tan = Math.tan(Math.PI * angle / 180)

    let d = tan * w

    if(d <= h) {
      return [x, y, x + w, y + d]
    }
    d = h / tan
    return [x, y, x + d, y + h]
  } else if(angle >= 90 && angle < 180) {
    const tan = Math.tan(Math.PI * (angle - 90) / 180)

    let d = tan * h

    if(d <= w) {
      return [x + w, y, x + w - d, y + h]
    }
    d = w / tan
    return [x + w, y, x, y + d]
  } else if(angle >= 180 && angle < 270) {
    const tan = Math.tan(Math.PI * (angle - 180) / 180)

    let d = tan * w

    if(d <= h) {
      return [x + w, y + h, x, y + h - d]
    }
    d = h / tan
    return [x + w, y + h, x + w - d, y]
  } else if(angle >= 270 && angle < 360) {
    const tan = Math.tan(Math.PI * (angle - 270) / 180)

    let d = tan * h

    if(d <= w) {
      return [x, y + h, x + d, y]
    }
    d = w / tan
    return [x, y + h, x + w, y + h - d]
  }

  return [x, y, x + w, y + h]
}

function getLinearGradients(context, rect, linearGradients) {
  const {colors, direction, vector} = linearGradients,
    [x, y, w, h] = rect

  let x0,
    y0,
    x1,
    y1

  if(direction != null) {
    [x0, y0, x1, y1] = gradientBox(direction, [x, y, w, h])
  } else if(vector) {
    [x0, y0, x1, y1] = vector
  }

  const gradient = context.createLinearGradient(x0, y0, x1, y1)

  colors.forEach((o) => {
    gradient.addColorStop(o.offset, o.color)
  })

  return gradient
}

export {
  parseColor,
  oneOrTwoValues,
  parseStringInt,
  parseStringFloat,
  parseColorString,
  fourValuesShortCut,
  parseStringTransform,
  boxIntersect,
  boxToRect,
  boxEqual,
  boxUnion,
  rectToBox,
  rectVertices,
  appendUnit,
  getLinearGradients,
}
