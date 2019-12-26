import PolylineAttr from '../../src/attribute/polyline';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new PolylineAttr(subject);

  test('set points', () => {
    expect(attr.d).toBe('');
    attr.points = [10, 10, 20, 20, 20, 10];
    expect(attr.d).toBe('M10 10L20 20L20 10');
    expect(attr.close).toBeFalsy();
    expect(attr.closeType).toBe('none');
    attr.close = true;
    expect(attr.close).toBeTruthy();
    expect(attr.d).toBe('M10 10L20 20L20 10Z');
    expect(attr.closeType).toBe('normal');
    expect(attr.smooth).toBeFalsy();
    attr.smooth = true;
    expect(attr.d).toMatchSnapshot();
    attr.points = [[10, 10], [20, 20], [10, 20]];
    attr.smooth = false;
    expect(attr.d).toBe('M10 10L20 20L10 20Z');
    attr.points = null;
    expect(attr.d).toBe('');
  });
});