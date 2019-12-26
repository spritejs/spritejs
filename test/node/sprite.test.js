import {Scene, Sprite} from '../../src';
import {wait, loadImage} from '../lib';

describe('draw guanguan', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
  });

  const layer2d = scene.layer('layer2d', {contextType: '2d'});

  test('draw guanguan 2d', async () => {
    const imgURL = 'https://p0.ssl.qhimg.com/t01a72262146b87165f.png';

    const s = new Sprite();
    s.attr({
      texture: imgURL,
      pos: [150, 150],
      anchor: 0.5,
    });
    layer2d.append(s);
    await wait(1000);
    layer2d.render();
    const data = layer2d.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });

  const layergl = scene.layer('layergl');
  test('draw guanguan gl', async () => {
    const imgURL = 'https://p0.ssl.qhimg.com/t01a72262146b87165f.png';

    const s = new Sprite();
    s.attr({
      texture: imgURL,
      pos: [150, 150],
      anchor: 0.5,
    });
    layergl.append(s);
    await wait(1000);

    layergl.render();
    const data = layergl.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });
});

describe('draw guanguan body', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
  });

  const layer2d = scene.layer('layer2d', {contextType: '2d'});

  test('guanguan body 2d', async () => {
    const img = await loadImage('https://p3.ssl.qhimg.com/t010ded517024020e10.png');
    const s = new Sprite();
    s.attr({
      texture: img,
      sourceRect: [0, 41, 86, 56],
      pos: [150, 150],
      anchor: 0.5,
    });
    layer2d.append(s);

    layer2d.render();
    const data = layer2d.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });

  const layergl = scene.layer('layergl');
  test('guanguan body gl', async () => {
    const img = await loadImage('https://p3.ssl.qhimg.com/t010ded517024020e10.png');
    const s = new Sprite();
    s.attr({
      texture: img,
      sourceRect: [0, 41, 86, 56],
      pos: [150, 150],
      anchor: 0.5,
    });
    layergl.append(s);

    layergl.render();
    const data = layergl.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });
});