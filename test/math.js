const test = require('ava')

import {Matrix, Vector} from '../src/math'

function matrixEqual(m1, m2) {
  const diff = m1.m.filter((o, i) => Math.abs(o - m2.m[i]) > 0.00001)
  return diff.length === 0
}

test('unit', (t) => {
  const m = new Matrix()
  t.deepEqual(m.m, [1, 0, 0, 1, 0, 0])
})

test('multiply', (t) => {
  const m = new Matrix()
  m.multiply([1, 2, 3, 4, 5, 6])
  t.deepEqual(m.m, [1, 2, 3, 4, 5, 6])
  m.unit().multiply(new Matrix([6, 5, 4, 3, 2, 1]))
  t.deepEqual(m.m, [6, 5, 4, 3, 2, 1])
})

test('translate', (t) => {
  const m = new Matrix()
  m.translate(10, 10)
  t.deepEqual(m.m, [1, 0, 0, 1, 10, 10])
})

test('inverse', (t) => {
  const m = new Matrix()
  m.skew(30, 30)
  const invm = m.inverse()
  t.is(matrixEqual(invm.multiply(m), new Matrix()), true)
})

test('rotate', (t) => {
  const m = new Matrix()
  m.rotate(90)
  t.is(matrixEqual(m, new Matrix([0, 1, -1, 0, 0, 0])), true)
})

test('scale', (t) => {
  const m = new Matrix()
  m.scale(2, 3)
  t.deepEqual(m.m, [2, 0, 0, 3, 0, 0])
})

test('transformPoint', (t) => {
  const m = new Matrix([1, 2, 3, 4, 5, 6])
  const v = m.transformPoint(2, 3)
  t.deepEqual(v, [16, 22])
})

test('transformVector', (t) => {
  const m = new Matrix([1, 2, 3, 4, 5, 6])
  const v = m.transformVector(2, 3)
  t.deepEqual(v, [11, 16])
})

test('vector length', (t) => {
  const v = new Vector([3, 4])
  t.is(v.length, 5)
})

test('vector unit', (t) => {
  const v = new Vector([3, 4])
  const w = v.unit()
  t.is(w.length, 1)
  t.is(w.x, 0.6)
  t.is(w.y, 0.8)
})
