import BaseSprite from '../src/basesprite'

const test = require('ava')

test('test attr', (t) => {
  const sprite = new BaseSprite()
  sprite.attr('pos', [10, 10])
  t.deepEqual(sprite.attr('pos'), [10, 10])
})
