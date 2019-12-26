import StarAttr from '../../src/attribute/star';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new StarAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.innerRadius = 5;
    attr.outerRadius = 15;
    expect(attr.radius).toEqual([5, 15]);
    expect(attr.d).toMatchSnapshot();
    attr.radius = [15, 30];
    expect(attr.d).toMatchSnapshot();
    attr.angles = 3;
    expect(attr.d).toMatchSnapshot();
    attr.offsetAngle = 60;
    expect(attr.d).toMatchSnapshot();
  });
});