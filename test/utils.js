const test = require('ava')

import {parseColor,
  parseColorString,
  parseStringTransform,
  parseStringInt,
  parseStringFloat,
  fourValuesShortCut,
  boxIntersect}
  from '../src/utils'

function floatEqual(a, b, precision = 0.01) {
  return Math.abs(a - b) < precision
}

test('color', (t) => {
  const red = parseColor('red')
  t.is(red.toString(), 'rgba(255,0,0,1)')

  const c1 = parseColor('#ff0')
  t.is(c1.red, 255)
  t.is(c1.green, 255)
  t.is(c1.blue, 0)

  const c2 = parseColor('rgba(0,0,0,.5)')
  t.truthy(floatEqual(c2.alpha, 0.5))
})

test('parseColorString', (t) => {
  const red = parseColorString('red')
  t.is(red, 'rgba(255,0,0,1)')
})

test('parseStringInt', (t) => {
  const r = parseStringInt('200, 30.5, 55, 4')
  t.deepEqual(r, [200, 30, 55, 4])
})

test('parseStringFloat', (t) => {
  const r = parseStringFloat('200, 30.5, 55, 4')
  t.deepEqual(r, [200, 30.5, 55, 4])
})

test('parseStringTransform', (t) => {
  const transform = 'rotate(60) scale(30, 30)'
  const r = parseStringTransform(transform)
  t.is(r.rotate, 60)
  t.deepEqual(r.scale, [30, 30])
})

test('fourValuesShortCut', (t) => {
  let r = fourValuesShortCut(1)
  t.deepEqual(r, [1, 1, 1, 1])

  r = fourValuesShortCut([2])
  t.deepEqual(r, [2, 2, 2, 2])

  r = fourValuesShortCut([3, 4])
  t.deepEqual(r, [3, 4, 3, 4])

  r = fourValuesShortCut([3, 4, 5])
  t.deepEqual(r, [3, 4, 5, 0])
})

test('boxIntersect', (t) => {
  const box1 = [1, 1, 3, 3]
  const box2 = [2, 2, 4, 4]

  t.deepEqual(boxIntersect(box1, box2), [2, 2, 3, 3])

  const box3 = [3.5, 3.5, 5, 5]
  t.is(boxIntersect(box1, box3), null)
  t.deepEqual(boxIntersect(box2, box3), [3.5, 3.5, 4, 4])
})