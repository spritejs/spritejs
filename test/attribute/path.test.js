import PathAttr from '../../src/attribute/path';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new PathAttr(subject);

  test('attr obj', () => {
    expect(attr instanceof PathAttr).toBeTruthy();
  });

  test('d', () => {
    expect(attr.d).toBe('');
    attr.d = 'M0 0L20 0L20 20L0 20Z';
    expect(attr.d).toBe('M0 0L20 0L20 20L0 20Z');
    expect(attr.d).toBe('M0 0L20 0L20 20L0 20Z');
    attr.d = null;
    expect(attr.d).toBe('');
  });

  test('normalize', () => {
    expect(attr.normalize).toBe(false);
    attr.normalize = true;
    expect(attr.normalize).toBe(true);
    attr.normalize = null;
    expect(attr.normalize).toBe(false);
  });

  test('fillColor', () => {
    expect(attr.fillColor).toBe(undefined);
    attr.fillColor = 'red';
    expect(attr.fillColor).toBe('rgba(255,0,0,1)');
    attr.fillColor = null;
    expect(attr.fillColor).toBe(undefined);
  });

  test('strokeColor', () => {
    expect(attr.strokeColor).toBe(undefined);
    attr.strokeColor = 'red';
    expect(attr.strokeColor).toBe('rgba(255,0,0,1)');
    attr.strokeColor = null;
    expect(attr.strokeColor).toBe(undefined);
  });

  test('lineWidth', () => {
    expect(attr.lineWidth).toBe(1);
    attr.lineWidth = '2rem';
    expect(attr.lineWidth).toBe(32);
    attr.lineWidth = null;
    expect(attr.lineWidth).toBe(1);
  });

  test('lineJoin', () => {
    expect(attr.lineJoin).toBe('miter');
    attr.lineJoin = 'bevel';
    expect(attr.lineJoin).toBe('bevel');
    expect(() => { attr.lineJoin = 'foobar' }).toThrow(TypeError);
    attr.lineJoin = null;
    expect(attr.lineJoin).toBe('miter');

    expect(attr.miterLimit).toBe(10);
    attr.miterLimit = '2rem';
    expect(attr.miterLimit).toBe(32);
    attr.miterLimit = null;
    expect(attr.miterLimit).toBe(10);
  });

  test('lineCap', () => {
    expect(attr.lineCap).toBe('butt');
    attr.lineCap = 'square';
    expect(attr.lineCap).toBe('square');
    expect(() => { attr.lineCap = 'foobar' }).toThrow(TypeError);
    attr.lineCap = null;
    expect(attr.lineCap).toBe('butt');
  });

  test('lineDash', () => {
    expect(attr.lineDash).toBe(undefined);
    attr.lineDash = '1rem 2rem';
    expect(attr.lineDash).toEqual([16, 32]);
    attr.lineDash = [5];
    expect(attr.lineDash).toEqual([5]);
    attr.lineDash = null;
    expect(attr.lineDash).toBe(undefined);

    expect(attr.lineDashOffset).toBe(0);
    attr.lineDashOffset = '1rem';
    expect(attr.lineDashOffset).toBe(16);
    attr.lineDashOffset = null;
    expect(attr.lineDashOffset).toBe(0);
  });

  test('texture', () => {
    expect(attr.texture).toBe(undefined);
    expect(attr.textureRect).toBe(undefined);
    expect(attr.textureRepeat).toBe(false);
    expect(attr.sourceRect).toBe(undefined);
    attr.texture = 'https://p4.ssl.qhimg.com/t012170360e1552ce17.png';
    expect(attr.texture).toBe('https://p4.ssl.qhimg.com/t012170360e1552ce17.png');
    attr.textureRect = [0, 0, 100, 100];
    expect(attr.textureRect).toEqual([0, 0, 100, 100]);
    attr.textureRepeat = true;
    expect(attr.textureRepeat).toBeTruthy();
    attr.sourceRect = [0, 0, 50, 50];
    expect(attr.sourceRect).toEqual([0, 0, 50, 50]);
  });
});