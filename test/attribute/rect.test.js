import RectAttr from '../../src/attribute/rect';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new RectAttr(subject);

  test('get set', () => {
    expect(attr.d).toBe('');
    attr.width = 100;
    attr.height = 150;
    expect(attr.d).toBe('M0 0L100 0L100 150L0 150Z');

    expect(attr.size).toEqual([100, 150]);
    attr.size = [10, 30];
    expect(attr.d).toBe('M0 0L10 0L10 30L0 30Z');
  });
});