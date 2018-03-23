const test = require('ava')

import {
  parseColor,
  parseColorString,
  parseStringTransform,
  parseStringInt,
  parseStringFloat,
  fourValuesShortCut,
  oneOrTwoValues,
  boxIntersect,
  boxToRect,
  rectToBox,
  boxUnion,
  appendUnit,
  rectVertices,
} from '../src/utils'

function floatEqual(a, b, precision = 0.01) {
  return Math.abs(a - b) < precision
}

test('color', (t) => {
  const red = parseColor('red')
  t.is(red.toString(), 'rgba(255,0,0,1)')

  const c1 = parseColor('#ff0')
  t.deepEqual(c1.value, [255, 255, 0, 1])

  const c2 = parseColor('rgba(0,0,0,.5)')
  t.truthy(floatEqual(c2.value[3], 0.5))
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

test('oneOrTwoValues', (t) => {
  const v = 1
  t.deepEqual(oneOrTwoValues(v), [1, 1])
  const w = [1, 2]
  t.deepEqual(oneOrTwoValues(w), [1, 2])
  const u = [3]
  t.deepEqual(oneOrTwoValues(u), [3, 3])
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

test('boxToRect', (t) => {
  const box = [1, 1, 3, 3]
  t.deepEqual(boxToRect(box), [1, 1, 2, 2])
})

test('rectToBox', (t) => {
  const rect = [1, 1, 3, 3]
  t.deepEqual(rectToBox(rect), [1, 1, 4, 4])
})

test('rectVertices', (t) => {
  const rect = [1, 1, 3, 3]
  const vertices = rectVertices(rect)
  t.deepEqual(vertices, [[1, 1], [4, 1], [4, 4], [1, 4]])
})

test('boxUnion', (t) => {
  const box1 = [1, 1, 3, 4]
  const box2 = [-1, 0, 4, 5]
  t.deepEqual(boxUnion(box1, box2), [-1, 0, 4, 5])
})

test('appendUnit', (t) => {
  t.is(appendUnit(''), '')
  t.is(appendUnit(16), '16px')
  t.is(appendUnit('128'), '128px')
  t.is(appendUnit('12rem'), '12rem')
  t.is(appendUnit('3', 'pt'), '3pt')
})
