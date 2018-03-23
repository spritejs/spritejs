import Path from './path'
import Label from './label'
import Sprite from './sprite'

import {parseValue, attr} from './decorators'
import {parseStringFloat, parseColorString} from './utils'

const _axisPath = Symbol('axisPath'),
  _labels = Symbol('labels')

function ticksToD(axis) {
  if(!axis) return

  let {
    direction, ticks, length, vLength, font, lineWidth, color, axisScales,
  } = axis.attr()

  const originTicks = ticks.slice(0)

  let axisTicks = ticks.slice(0)
  if(axisScales.length) {
    axisTicks = axisTicks.map(tick => axisScales.reduce((v, s) => s(v), tick))
    axisTicks = axisTicks.filter(tick => tick >= 0)
  }

  if(axisTicks.length <= 0) {
    return
  }
  ticks = ticks.slice(-axisTicks.length)

  if(axisScales.length) {
    const scale = axisScales[axisScales.length - 1],
      [start, end] = scale.range(),
      [from, to] = scale.domain()

    if(start < axisTicks[0]) {
      ticks.unshift(from)
      axisTicks.unshift(start)
    }
    if(end > axisTicks[axisTicks.length - 1]) {
      ticks.push(to)
      axisTicks.push(end)
    }
  }

  const dist = axisTicks[axisTicks.length - 1] - axisTicks[0]
  if(length === 'auto') length = dist

  let rect,
    d
  const textures = []

  const points = axisTicks.map(tick => length * (tick - axisTicks[0]) / dist)

  let offsetY = 0,
    offsetX = 0,
    offsetX0 = 0

  ticks.forEach((data, i) => {
    if(originTicks.indexOf(data) === -1) return

    let label = axis[_labels][i]
    if(!label) {
      label = new Label()
      axis[_labels][i] = label
    }
    label.text = data

    label.attr({font, color})
    const [w, h] = label.contentSize

    offsetY = Math.max(offsetY, h)
    offsetX = Math.max(offsetX, w)

    if(i === 0) {
      offsetX0 = w
    }

    const x = points[i]
    if(x != null) {
      if(direction === 'top') {
        textures.push({src: label, rect: [offsetX0 + x - Math.round(w / 2), 0, w, h]})
      } else if(direction === 'bottom') {
        textures.push({src: label, rect: [offsetX0 + x - Math.round(w / 2), vLength + 5, w, h]})
      } else if(direction === 'left') {
        textures.push({src: label, rect: [vLength + 5, x, w, h]})
      } else if(direction === 'right') {
        textures.push({src: label, rect: [0, x, w, h]})
      }
    }
  })

  if(direction === 'top') {
    d = `M0 ${vLength} h${length}`
    points.forEach((point) => {
      d += `M${point} 0 v${vLength}`
    })
    rect = [offsetX0, offsetY + 5, length, vLength]
  } else if(direction === 'bottom') {
    d = `M0 0 h${length}`
    points.forEach((point) => {
      d += `M${Math.round(point)} 0 v${vLength}`
    })
    rect = [offsetX0, 0, length, vLength]
  } else if(direction === 'left') {
    d = `M0 0 v${length}`
    points.forEach((point) => {
      d += `M0 ${point} h${vLength}`
    })
    rect = [0, offsetY / 2, vLength, length]
  } else if(direction === 'right') {
    d = `M${offsetX + 5} 0 v${length}`
    points.forEach((point) => {
      d += `M${offsetX + 5 - vLength} ${point} h${vLength}`
    })

    rect = [offsetX + 5, offsetY / 2, vLength, length]
  }

  const path = axis[_axisPath]
  path.attr({
    d,
    lineWidth,
    color,
  })
  textures.push({src: path, rect})

  axis.attr({textures})
}

class AxisSpriteAttr extends Sprite.Attr {
  constructor(subject) {
    super(subject)

    this.setDefault({
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke', // stroke, fill

      font: '24px Arial',
      axisScales: [],
    })
  }

  @attr
  set font(val) {
    this.clearCache()
    this.set('font', val)
    ticksToD(this.subject)
  }

  @attr
  set direction(val) {
    this.clearCache()
    this.set('direction', val)
    ticksToD(this.subject)
  }

  @attr
  set length(val) {
    this.clearCache()
    this.set('length', val)
    ticksToD(this.subject)
  }

  @attr
  set vLength(val) {
    this.clearCache()
    this.set('vLength', Math.round(val))
    ticksToD(this.subject)
  }

  @attr
  @parseValue(parseStringFloat)
  set ticks(ticks) {
    this.clearCache()
    this.set('ticks', ticks.sort((a, b) => a - b))
    ticksToD(this.subject)
  }

  // set d3 scales
  @attr
  set axisScales(val) {
    this.clearCache()
    this.set('axisScales', val)
    ticksToD(this.subject)
  }

  @attr
  set lineWidth(val) {
    this.clearCache()
    this.set('lineWidth', val)
    ticksToD(this.subject)
  }

  @attr
  @parseValue(parseColorString)
  set color(val) {
    this.clearCache()
    this.set('color', val)
    ticksToD(this.subject)
  }
}

export default class Axis extends Sprite {
  static Attr = AxisSpriteAttr

  constructor(ticks = [0, 100], opts) {
    super(null, opts)
    this[_axisPath] = new Path()
    this[_labels] = []
    if(ticks) {
      this.attr({ticks})
    }
  }
  render(t, drawingContext) {
    const context = super.render(t, drawingContext)
    return context
  }
  initAttributes(attrs) {
    super.initAttributes(attrs)
    ticksToD(this)
  }
}
