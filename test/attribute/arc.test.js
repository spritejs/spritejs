import ArcAttr from '../../src/attribute/arc';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new ArcAttr(subject);

  test('radius', () => {
    expect(attr.radius).toBe(0);
    attr.radius = 10;
    expect(attr.radius).toBe(10);
    attr.radius = null;
    expect(attr.radius).toBe(0);
  });
});