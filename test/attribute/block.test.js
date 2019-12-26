import BlockAttr from '../../src/attribute/block';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new BlockAttr(subject);

  test('anchor', () => {
    expect(attr.anchorX).toBe(0);
    attr.anchorX = 0.5;
    expect(attr.anchorX).toBe(0.5);
    expect(attr.anchorY).toBe(0);
    attr.anchorY = 0.7;
    expect(attr.anchorY).toBe(0.7);
    expect(attr.anchor).toEqual([0.5, 0.7]);
    attr.anchor = 0.3;
    expect(attr.anchor).toEqual([0.3, 0.3]);
    attr.anchor = null;
    expect(attr.anchor).toEqual([0, 0]);
  });

  test('size', () => {
    expect(attr.width).toBe(undefined);
    attr.width = '2rem';
    expect(attr.width).toBe(32);
    expect(attr.height).toBe(undefined);
    attr.height = '2em';
    expect(attr.height).toBe(32);
    expect(attr.size).toEqual([32, 32]);
    attr.size = [100, '1rem'];
    expect(attr.size).toEqual([100, 16]);
    attr.size = null;
    expect(attr.size).toEqual([undefined, undefined]);
  });

  test('border', () => {
    expect(attr.borderWidth).toBe(0);
    attr.borderWidth = '0.5rem';
    expect(attr.borderWidth).toBe(8);

    expect(attr.borderColor).toBe('rgba(0,0,0,1)');
    attr.borderColor = 'red';
    expect(attr.borderColor).toBe('rgba(255,0,0,1)');

    expect(attr.border).toEqual([8, 'rgba(255,0,0,1)']);

    expect(attr.borderDash).toBe(undefined);
    attr.borderDash = '1rem 2rem';
    expect(attr.borderDash).toEqual([16, 32]);

    expect(attr.borderDashOffset).toBe(0);
    attr.borderDashOffset = '1em';
    expect(attr.borderDashOffset).toBe(16);

    attr.border = [1, 'blue'];
    expect(attr.border).toEqual([1, 'rgba(0,0,255,1)']);
  });

  test('border radius', () => {
    expect(attr.borderRadius).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
    attr.borderTopLeftRadius = [1, '2em'];
    expect(attr.borderTopLeftRadius).toEqual([1, 32]);
    expect(attr.borderRadius).toEqual([1, 32, 0, 0, 0, 0, 0, 0]);
    attr.borderBottomRightRadius = '1rem';
    expect(attr.borderRadius).toEqual([1, 32, 0, 0, 16, 16, 0, 0]);
    attr.borderTopRightRadius = [20, 30];
    expect(attr.borderRadius).toEqual([1, 32, 20, 30, 16, 16, 0, 0]);
    attr.borderBottomLeftRadius = [8, 7];
    expect(attr.borderRadius).toEqual([1, 32, 20, 30, 16, 16, 8, 7]);
    attr.borderRadius = [20, 30];
    expect(attr.borderRadius).toEqual([20, 30, 20, 30, 20, 30, 20, 30]);
    attr.borderRadius = [10, 20, 30, 40];
    expect(attr.borderRadius).toEqual([10, 20, 30, 40, 10, 20, 30, 40]);
    attr.borderRadius = [10, 20, 30, 40, 50, 60];
    expect(attr.borderRadius).toEqual([10, 20, 30, 40, 50, 60, 30, 40]);
    expect(() => { attr.borderRadius = [1, 2, 3] }).toThrow(TypeError);
    attr.borderRadius = 0;
    expect(attr.borderRadius).toEqual([0, 0, 0, 0, 0, 0, 0, 0]);
  });

  test('padding', () => {
    expect(attr.padding).toEqual([0, 0, 0, 0]);
    attr.paddingTop = '2rem';
    expect(attr.paddingTop).toBe(32);
    expect(attr.padding).toEqual([32, 0, 0, 0]);
    attr.paddingLeft = 100;
    expect(attr.padding).toEqual([32, 0, 0, 100]);
    attr.paddingBottom = 50;
    expect(attr.padding).toEqual([32, 0, 50, 100]);
    attr.paddingRight = 5;
    expect(attr.padding).toEqual([32, 5, 50, 100]);
    attr.padding = 20;
    expect(attr.padding).toEqual([20, 20, 20, 20]);
    attr.padding = [20, 30];
    expect(attr.padding).toEqual([20, 30, 20, 30]);
    attr.padding = '2rem 1rem 1.5rem';
    expect(attr.padding).toEqual([32, 16, 24, 16]);
    attr.padding = [50];
    expect(attr.padding).toEqual([50, 50, 50, 50]);
    attr.padding = null;
    expect(attr.padding).toEqual([0, 0, 0, 0]);
  });

  test('box-sizing', () => {
    expect(attr.boxSizing).toEqual('content-box');
    expect(() => { attr.boxSizing = 'foobar' }).toThrow(TypeError);
    attr.boxSizing = 'border-box';
    expect(attr.boxSizing).toEqual('border-box');
    attr.boxSizing = null;
    expect(attr.boxSizing).toEqual('content-box');
  });
});