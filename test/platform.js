const test = require('ava')

import {createCanvas, loadImage, measureText} from '../src/cross-platform'

test('createCanvas', (t) => {
  const canvas = createCanvas()
  t.is(canvas.width, 300)
  t.is(canvas.height, 150)
})

test('load image', async (t) => {
  const img = await loadImage('https://s3.ssl.qhres.com/static/6357de62c1c630e1.svg')
  t.is(img.width, 400)
  t.is(img.height, 400)
})

test('measureText', (t) => {
  const r = measureText('中国', '16px Arial')
  t.deepEqual(r, [32, 17])
  const r2 = measureText('中国', '16px Arial', 101)
  t.deepEqual(r2, [32, 101])
})