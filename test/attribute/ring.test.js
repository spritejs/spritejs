import RingAttr from '../../src/attribute/ring';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new RingAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.innerRadius = 5;
    attr.outerRadius = 15;
    expect(attr.radius).toEqual([5, 15]);
    expect(attr.d).toMatchSnapshot();
    attr.radius = [15, 30];
    expect(attr.d).toMatchSnapshot();
    expect(attr.angle).toEqual([0, 360]);
    attr.endAngle = 180;
    expect(attr.d).toMatchSnapshot();
    expect(attr.angle).toEqual([0, 180]);
    attr.angle = [70, 210];
    expect(attr.startAngle).toBe(70);
    expect(attr.endAngle).toBe(210);
    expect(attr.d).toMatchSnapshot();
    attr.angle = [210, 70];
    expect(attr.d).toMatchSnapshot();
  });
});