const test = require('ava')
const colors = require('colors')

import {createCanvas, loadImage, measureText} from '../src/cross-platform'

/* eslint-disable no-console */
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
  const r = measureText('Hellow World!', '16px Arial')
  console.log(colors.yellow(`Text measured: ${r}`))
  const r2 = measureText('Sprite.js', '16px Arial', 101)
  console.log(colors.yellow(`Text measured: ${r2}`))
  t.pass('Depend on environment.')
})
/* eslint-enable no-console */
