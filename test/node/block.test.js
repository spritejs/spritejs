import {Scene, Block} from '../../src';

describe('renderer', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
    // contextType: '2d',
    // displayRatio: 2,
  });

  test('renderer', () => {
    const layer = scene.layer();
    expect(typeof layer.renderer).toBe('object');
    expect(layer.renderer.options.contextType).toBe('webgl');
  });
});

describe('draw block elements', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
    // contextType: '2d',
    // displayRatio: 2,
  });

  const layer = scene.layer();

  test('150px blocks', () => {
    const b1 = new Block({
      size: [150, 150],
      bgcolor: 'red',
    });

    layer.append(b1);
    let data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b2 = b1.cloneNode();
    b2.attr({
      pos: [150, 0],
      bgcolor: 'blue',
    });
    layer.append(b2);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b3 = b2.cloneNode();
    b3.attr({
      y: 150,
      bgcolor: 'green',
    });
    layer.append(b3);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b4 = b3.cloneNode();
    b4.attr({
      x: 0,
      bgcolor: 'yellow',
    });
    layer.append(b4);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();
  });
});

describe('draw block elements with opacity', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
    contextType: '2d',
    // displayRatio: 2,
  });

  const layer = scene.layer();

  test('200px blocks with opacity', () => {
    const b1 = new Block({
      size: [200, 200],
      bgcolor: 'red',
      opacity: 0.5,
    });

    layer.append(b1);
    let data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b2 = b1.cloneNode();
    b2.attr({
      pos: [100, 0],
      bgcolor: 'blue',
    });
    layer.append(b2);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b3 = b2.cloneNode();
    b3.attr({
      y: 100,
      bgcolor: 'green',
    });
    layer.append(b3);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b4 = b3.cloneNode();
    b4.attr({
      x: 0,
      bgcolor: 'yellow',
    });
    layer.append(b4);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();
  });
});

describe('draw block elements with opacity - webgl', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
    // displayRatio: 2,
  });

  const layer = scene.layer();

  test('200px blocks with opacity', () => {
    const b1 = new Block({
      size: [200, 200],
      bgcolor: 'red',
      opacity: 0.5,
    });

    layer.append(b1);
    let data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b2 = b1.cloneNode();
    b2.attr({
      pos: [100, 0],
      bgcolor: 'blue',
    });
    layer.append(b2);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b3 = b2.cloneNode();
    b3.attr({
      y: 100,
      bgcolor: 'green',
    });
    layer.append(b3);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();

    const b4 = b3.cloneNode();
    b4.attr({
      x: 0,
      bgcolor: 'yellow',
    });
    layer.append(b4);
    data = scene.snapshot().toDataURL();
    expect(data).toMatchSnapshot();
  });
});

describe('draw block rotation', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 300,
    height: 300,
    // displayRatio: 2,
  });

  const layer2d = scene.layer('layer2d', {contextType: '2d'});
  const layergl = scene.layer('layergl');

  test('transform origin 2d', () => {
    const s = new Block();
    s.attr({
      anchor: 0.5,
      pos: [150, 150],
      bgcolor: 'red',
      size: [20, 40],
    });
    expect(s.transformMatrix).toEqual([1, 0, 0, 1, 0, 0]);

    const s2 = s.cloneNode();
    s2.attr({
      transformOrigin: [0, -150],
      pos: [150, 150],
      bgcolor: 'blue',
    });

    s.attr({
      rotate: 45,
    });

    s2.attr({
      rotate: 45,
    });

    layer2d.append(s, s2);
    layer2d.render();
    const data = layer2d.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });

  test('transform origin gl', () => {
    const s = new Block();
    s.attr({
      anchor: 0.5,
      pos: [150, 150],
      bgcolor: 'red',
      size: [20, 40],
    });
    expect(s.transformMatrix).toEqual([1, 0, 0, 1, 0, 0]);

    const s2 = s.cloneNode();
    s2.attr({
      transformOrigin: [0, -150],
      pos: [150, 150],
      bgcolor: 'blue',
    });

    s.attr({
      rotate: 45,
    });

    s2.attr({
      rotate: 45,
    });

    layergl.append(s, s2);
    layergl.render();
    const data = layergl.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });
});

describe('draw circle', () => {
  const container = document.getElementById('stage');
  const scene = new Scene({
    container,
    width: 600,
    height: 600,
    // displayRatio: 2,
  });

  const layer2d = scene.layer('layer2d', {contextType: '2d'});

  test('circle 2d', () => {
    const s = new Block({
      anchor: 0.5,
      bgcolor: 'hsl(180,50%,50%)',
      pos: [300, 300],
      size: [300, 300],
      borderRadius: 150,
      borderWidth: 6,
      borderColor: 'red',
    });
    layer2d.append(s);
    layer2d.render();
    const data = layer2d.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });

  const layergl = scene.layer('layergl');

  test('circle gl', () => {
    const s = new Block({
      anchor: 0.5,
      bgcolor: 'hsl(180,50%,50%)',
      pos: [300, 300],
      size: [300, 300],
      borderRadius: 150,
      borderWidth: 6,
      borderColor: 'red',
    });
    layergl.append(s);
    layergl.render();
    const data = layergl.canvas.toDataURL();
    expect(data).toMatchSnapshot();
  });
});