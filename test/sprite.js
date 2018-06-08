const test = require('ava')
import {compare, wait} from './helpers'
import {Scene, Sprite} from '../src'
import {loadImage} from '../src/platform'

test('robot', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [300, 300],
  })
  const robot = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png')
  robot.attr({
    anchor: 0.5,
    pos: [150, 150],
  })
  scene.layer().append(robot)

  // await for load image
  let i = 0
  while(i++ < 100 && robot.contentSize[0] === 0) {
    await wait(100) // eslint-disable-line no-await-in-loop
  }
  t.deepEqual(robot.contentSize, [196, 256])

  const canvas = await scene.snapshot()
  const isEqual = await compare(canvas, 'scene-robot')
  t.truthy(isEqual)
})

test('robot-load-img', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [300, 300],
  })
  const image = await loadImage('https://p0.ssl.qhimg.com/t01a72262146b87165f.png')

  const robot = new Sprite()
  robot.attr({
    textures: image,
    anchor: 0.5,
    pos: [150, 150],
  })
  scene.layer().append(robot)

  t.deepEqual(robot.contentSize, [196, 256])

  const canvas = await scene.snapshot()
  const isEqual = await compare(canvas, 'scene-robot')
  t.truthy(isEqual)
})
