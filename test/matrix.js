const test = require("ava")

import Matrix from "../lib/matrix"

function matrixEqual(m1, m2){
  let diff = m1.m.filter((o, i) => Math.abs(o - m2.m[i]) > 0.00001)
  return diff.length === 0 
}

test('unit', t => {
  let m = new Matrix()
  t.deepEqual(m.m, [1,0,0,1,0,0])
})

test('multiply', t => {
  let m = new Matrix()

  m.multiply([1,2,3,4,5,6])

  t.deepEqual(m.m, [1,2,3,4,5,6])
})

test('translate', t => {
  let m = new Matrix()

  m.translate(10, 10);

  t.deepEqual(m.m, [1,0,0,1,10,10]);
})

test('inverse', t => {
  let m = new Matrix()
  m.skew(30, 30)
  let invm = m.inverse()
  t.is(matrixEqual(invm.multiply(m), new Matrix()), true)
})
