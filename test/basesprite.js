import {BaseSprite} from 'sprite-core'
import {compare, drawSprites} from './helpers'
import {createCanvas} from '../src/platform'

const test = require('ava')

test('test attr', (t) => {
  const sprite = new BaseSprite()
  sprite.attr('pos', [10, 10])
  t.deepEqual(sprite.attr('pos'), [10, 10])
})

test('test bgcolor red', async (t) => {
  const s = new BaseSprite()

  s.attr({
    bgcolor: 'red',
    anchor: [0.5, 0.5],
    pos: [100, 100],
    size: [50, 50],
  })

  const canvas = createCanvas(200, 200),
    context = canvas.getContext('2d')

  s.connect(context).draw()

  const isEqual = await compare(canvas, 'basesprite-bgcolor-red')

  t.truthy(isEqual)
})

test('test bgcolor green opacity=0.5', async (t) => {
  const s = new BaseSprite()

  s.attr({
    bgcolor: 'green',
    opacity: 0.5,
    anchor: [0.5, 0.5],
    pos: [100, 100],
    size: [50, 50],
  })

  const canvas = createCanvas(200, 200),
    context = canvas.getContext('2d')

  s.connect(context).draw()

  const isEqual = await compare(canvas, 'basesprite-bgcolor-green-opacity')

  t.truthy(isEqual)
})

test('test basesprite-s1-s2-rotate', async (t) => {
  const s1 = new BaseSprite()

  s1.attr({
    bgcolor: '#c0c',
    anchor: [0.5, 0.5],
    pos: [100, 100],
    size: [50, 50],
  })

  const s2 = new BaseSprite()
  s2.attr({
    bgcolor: '#37c',
    anchor: [0.5, 0.5],
    pos: [100, 100],
    size: [50, 50],
    opacity: '0.5',
    rotate: 45,
  })

  const canvas = createCanvas(200, 200)
  drawSprites(canvas, [s1, s2])

  const isEqual = await compare(canvas, 'basesprite-s1-s2-rotate')
  t.truthy(isEqual)
})
