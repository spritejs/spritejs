const test = require('ava')

import {createCanvas, loadImage} from '../src/cross-platform'

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
/* eslint-enable no-console */
