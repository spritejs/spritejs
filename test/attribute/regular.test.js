import RegularAttr from '../../src/attribute/regular';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new RegularAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.radius = 10;
    expect(attr.d).toMatchSnapshot();
    attr.edges = 7;
    expect(attr.d).toMatchSnapshot();
    attr.offsetAngle = 60;
    expect(attr.d).toMatchSnapshot();
    expect(attr.closeType).toBe('normal');
  });
});