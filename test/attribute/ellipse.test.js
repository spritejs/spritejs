import EllipseAttr from '../../src/attribute/ellipse';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new EllipseAttr(subject);

  test('d', () => {
    expect(attr.d).toBe('');
    attr.radius = [10, 10];
    expect(attr.d).toBe('M 10 0A 10 10 0 1 1 9.999995000000418 -0.009999998333339206Z');
    attr.radius = [0, 0];
    expect(attr.d).toBe('');
  });

  test('radius', () => {
    expect(attr.radius).toEqual([0, 0]);
    attr.radius = 10;
    expect(attr.radius).toEqual([10, 10]);
    expect(attr.radiusX).toBe(10);
    expect(attr.radiusY).toBe(10);
    attr.radiusY = '2rem';
    expect(attr.radius).toEqual([10, 32]);
    attr.radius = null;
    expect(attr.radius).toEqual([0, 0]);
  });

  test('angle', () => {
    expect(attr.angle).toEqual([0, 360]);
    attr.startAngle = 30;
    expect(attr.angle).toEqual([30, 360]);
    attr.endAngle = 180;
    expect(attr.angle).toEqual([30, 180]);
    attr.angle = null;
    expect(attr.angle).toEqual([0, 360]);
  });

  test('direction', () => {
    expect(attr.direction).toBe('clockwise');
    attr.direction = 'anticlockwise';
    expect(attr.direction).toBe('anticlockwise');
    expect(() => { attr.direction = 'foobar' }).toThrow(TypeError);
    attr.direction = null;
    expect(attr.direction).toBe('clockwise');
  });

  test('closeType', () => {
    expect(attr.closeType).toBe('none');
    attr.closeType = 'sector';
    expect(attr.closeType).toBe('sector');
    attr.closeType = 'normal';
    expect(attr.closeType).toBe('normal');
    expect(() => { attr.closeType = 'foobar' }).toThrow(TypeError);
    attr.closeType = null;
    expect(attr.closeType).toBe('none');
  });
});