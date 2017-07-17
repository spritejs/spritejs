const test = require("ava")

import Matrix from "../lib/matrix"

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
  console.log(invm.multiply(m).m)
  t.is(1, 1)
})
