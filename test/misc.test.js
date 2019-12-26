import {Scene, Sprite} from '../src';

function sum(x, y) {
  return x + y;
}

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('canvas 2d', () => {
  const canvas = document.createElement('canvas');
  const ctx = canvas.getContext('2d');

  ctx.beginPath();
  ctx.arc(1, 2, 3, 4, 5);
  ctx.moveTo(6, 7);
  ctx.rect(6, 7, 8, 9);
  ctx.closePath();

  ctx.fillStyle = 'red';
  ctx.fill();

  /**
  * Any method that modifies the current path (and subpath) will be pushed to an event array. When
  * using the `__getPath` method, that array will sliced and usable for snapshots.
  */
  const data = ctx.canvas.toDataURL();
  expect(data).toMatchSnapshot();
});


test('scene 2d', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 256,
    height: 256,
    displayRatio: 2,
    contextType: '2d',
  });

  const sprite = new Sprite({
    size: [100, 100],
    pos: [128, 128],
    anchor: 0.5,
    bgcolor: 'red',
  });

  const layer = scene.layer();
  layer.append(sprite);

  const data = scene.snapshot().toDataURL();
  expect(data).toMatchSnapshot();
});

test('scene webgl', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 256,
    height: 256,
    displayRatio: 2,
  });

  const sprite = new Sprite({
    size: [100, 100],
    pos: [128, 128],
    anchor: 0.5,
    bgcolor: 'red',
  });

  const layer = scene.layer();
  layer.append(sprite);

  const data = scene.snapshot().toDataURL();
  expect(data).toMatchSnapshot();
});