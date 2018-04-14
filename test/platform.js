const test = require('ava')

import {createCanvas, loadImage} from '../src/platform'

/* eslint-disable no-console */
test('createCanvas', (t) => {
  const canvas = createCanvas()
  t.is(canvas.width, 300)
  t.is(canvas.height, 150)
})

// https://s3.ssl.qhres.com/static/6357de62c1c630e1.svg

test('load image', async (t) => {
  const img = await loadImage('https://p0.ssl.qhimg.com/t01300d8189b2edf8ca.jpg')
  t.is(img.width, 700)
  t.is(img.height, 1075)
})
/* eslint-enable no-console */
