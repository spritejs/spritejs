
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

export function createLinearGradients(context, rect, linearGradients) {
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

export function createRadialGradient(context, rect, linearGradients) {
  // TODO
  return null
}
