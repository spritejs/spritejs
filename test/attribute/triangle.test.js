import TriangleAttr from '../../src/attribute/triangle';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new TriangleAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.sides = [10, 20];
    const angle = Math.PI * attr.angle / 180;
    expect(attr.points).toEqual([0, 0, 10, 0, 20 * Math.cos(angle), 20 * Math.sin(angle)]);
    expect(attr.d).toMatchSnapshot();
    attr.angle = 0;
    expect(attr.points).toEqual([0, 0, 10, 0, 20, 0]);
    expect(attr.d).toMatchSnapshot();
  });
});