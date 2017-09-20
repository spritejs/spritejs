import Path from './path'
import SpriteAttr from './attr'
import Label from './label'

import {TextureAttr, Sprite} from './sprite'

import {attr, readonly, parseValue, immutable} from './decorators'
import {parseStringFloat} from './utils'

const _attr = SpriteAttr.symbolFor('attr'),
  _axisPath = Symbol('axisPath'),
  _labels = Symbol('labels')

function ticksToD(axis) {
  if(!axis) return

  let {direction, ticks, length, vLength, font, lineWidth, color, axisScales} = axis.attr()

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
      d += `M${point} 0 v${vLength}`
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

  // axis[_attr].d = d
  // console.log(d)

  const path = axis[_axisPath]
  path.attr({
    d,
    lineWidth,
    color,
  })
  textures.push({src: path, rect})

  axis.attr({textures})
}

class AxisSpriteAttr extends TextureAttr {
  constructor(subject) {
    super(subject)
    Object.assign(this[_attr], {
      length: 'auto',
      vLength: 10,
      ticks: [0, 100],
      direction: 'top',

      lineWidth: 1,
      color: 'black',
      renderMode: 'stroke',   // stroke, fill

      font: '24px Arial',
      axisScales: [],
    })
  }

  @attr('repaint')
  set font(val) {
    this[_attr].font = val
    ticksToD(this.subject)
  }
  get font() {
    return this[_attr].font
  }

  @attr('repaint')
  set direction(val) {
    this[_attr].direction = val
    ticksToD(this.subject)
  }
  get direction() {
    return this[_attr].direction
  }

  @attr('repaint')
  set length(val) {
    this[_attr].length = Math.round(val)
    ticksToD(this.subject)
  }
  get length() {
    return this[_attr].length
  }

  @attr('repaint')
  set vLength(val) {
    this[_attr].vLength = Math.round(val)
    ticksToD(this.subject)
  }
  get vLength() {
    return this[_attr].vLength
  }

  @attr('repaint')
  @parseValue(parseStringFloat)
  set ticks(ticks) {
    this[_attr].ticks = ticks.sort((a, b) => a - b)
    ticksToD(this.subject)
  }
  get ticks() {
    return this[_attr].ticks
  }

  // set d3 scales
  @attr('repaint')
  set axisScales(val) {
    this[_attr].axisScales = val
    ticksToD(this.subject)
  }
  @immutable('plainArray')
  get axisScales() {
    return this[_attr].axisScales
  }

  @readonly
  get d() {
    if(this.subject && this.subject[_axisPath]) {
      return this.subject[_axisPath].d
    }
  }

  @attr('repaint')
  set lineWidth(val) {
    this[_attr].lineWidth = val
    ticksToD(this.subject)
  }
  get lineWidth() {
    return this[_attr].lineWidth
  }

  @attr('repaint')
  set color(val) {
    this[_attr].color = val
    ticksToD(this.subject)
  }
  get color() {
    return this[_attr].color
  }
}

export default class Axis extends Sprite {
  constructor(ticks = [0, 100], opts) {
    super(null, opts, AxisSpriteAttr)
    this[_axisPath] = new Path()
    this[_labels] = []
    if(ticks) {
      this.attr({ticks})
    }
  }
  render(t) {
    const context = super.render(t)
    return context
  }
  merge(attrs) {
    super.merge(attrs)
    ticksToD(this)
  }
}
