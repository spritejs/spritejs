import ParallelAttr from '../../src/attribute/parallel';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new ParallelAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.sides = [10, 20];
    expect(attr.d).toMatchSnapshot();

    let angle = Math.PI / 2;
    let x1 = 20 * Math.cos(angle);
    let y1 = 20 * Math.sin(angle);
    expect(attr.points).toEqual([0, 0, 10, 0, x1 + 10, y1, x1, y1]);

    attr.angle = 60;
    angle = Math.PI / 3;
    x1 = 20 * Math.cos(angle);
    y1 = 20 * Math.sin(angle);
    expect(attr.points).toEqual([0, 0, 10, 0, x1 + 10, y1, x1, y1]);

    attr.sides = [0, 0];
    expect(attr.d).toBe('M0 0L0 0L0 0L0 0Z');
  });
});