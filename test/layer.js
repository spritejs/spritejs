import {compare, wait} from './helpers';
import {Scene, Layer, Sprite} from '../src';
const test = require('ava');

test('robot-snapshot', async (t) => {
  const scene = new Scene('#test', {
    viewport: [300, 300],
    resolution: [300, 300],
  });
  const robot = new Sprite('https://p0.ssl.qhimg.com/t01a72262146b87165f.png');
  robot.attr({
    id: 'robot',
    anchor: 0.5,
    pos: [150, 150],
  });
  const layer = scene.layer('layer1');
  layer.append(robot);

  // await for load image
  let i = 0;
  while(i++ < 100 && robot.contentSize[0] === 0) {
    await wait(100); // eslint-disable-line no-await-in-loop
  }

  const snapshot = await layer.takeSnapshot();
  const layer2 = new Layer({shadowContext: false});

  t.truthy(layer2.id.startsWith('id_'));
  t.truthy(layer2.id.length, 11);

  scene.appendChild(layer2);

  layer2.putSnapshot(snapshot);
  scene.removeChild(layer);

  scene.setResolution(600, 600);

  const robot2 = layer2.querySelector('#robot');
  robot2.attr({
    rotate: 45,
  });

  t.deepEqual(layer2.toLocalPos(10, 10), [20, 20]);
  t.deepEqual(layer2.toGlobalPos(20, 20), [10, 10]);

  const canvas = await scene.snapshot();
  const isEqual = await compare(canvas, 'scene-snapshot');
  t.truthy(isEqual);

  robot2.attr({
    pos: [-100, -100],
  });
  t.truthy(robot2.isVisible());
  robot2.attr({
    opacity: 0,
  });
  t.falsy(robot2.isVisible());

  layer.resolution = [300, 300, 150, 150];
  t.deepEqual(layer.toLocalPos(200, 200), [50, 50]);
  t.deepEqual(layer.toGlobalPos(50, 50), [200, 200]);
});
