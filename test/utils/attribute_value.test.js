import {
  sizeToPixel,
  toString,
  toNumber,
  toArray,
  compareValue,
} from '../../src/utils/attribute_value';

const _toString = toString;

test('export api', () => {
  expect(typeof sizeToPixel).toBe('function');
  expect(typeof toString).toBe('function');
  expect(typeof toNumber).toBe('function');
  expect(typeof toArray).toBe('function');
  expect(typeof compareValue).toBe('function');
});

describe('sizeToPixel', () => {
  test('default and px', () => {
    const value = sizeToPixel('100');
    expect(value).toBe(100);

    const value2 = sizeToPixel('200px');
    expect(value2).toBe(200);

    expect(() => sizeToPixel(100)).toThrow(TypeError);
  });

  test('pt', () => {
    const value = sizeToPixel('12pt');
    expect(value).toBe(16);
  });

  test('pc', () => {
    const value = sizeToPixel('2pc');
    expect(value).toBe(32);
  });

  test('in', () => {
    const value = sizeToPixel('0.25in');
    expect(value).toBeCloseTo(24, 5);
  });

  test('cm', () => {
    const value = sizeToPixel('0.5cm');
    expect(value).toBeCloseTo(48 / 2.54, 5);
  });

  test('mm', () => {
    const value = sizeToPixel('5mm');
    expect(value).toBeCloseTo(48 / 2.54, 5);
  });

  test('em', () => {
    const value = sizeToPixel('1.5em');
    expect(value).toBeCloseTo(24, 5);

    document.documentElement.style.fontSize = '32px';

    const value2 = sizeToPixel('1.5em');
    expect(value2).toBeCloseTo(48, 5);

    document.documentElement.style.fontSize = '16px';
  });

  test('rem', () => {
    const value = sizeToPixel('1.5rem');
    expect(value).toBeCloseTo(24, 5);

    document.documentElement.style.fontSize = '32px';

    const value2 = sizeToPixel('1.5rem');
    expect(value2).toBeCloseTo(48, 5);

    document.documentElement.style.fontSize = '16px';
  });

  test('ex', () => {
    const value = sizeToPixel('1.5ex');
    expect(value).toBeCloseTo(12, 5);

    document.documentElement.style.fontSize = '2em';

    const value2 = sizeToPixel('1.5ex');
    expect(value2).toBeCloseTo(24, 5);

    document.documentElement.style.fontSize = '16px';
  });

  test('q', () => {
    const value = sizeToPixel('20q');
    expect(value).toBeCloseTo(18.89764, 4);
  });

  test('vw vh vmax vmin', () => {
    window.innerWidth = 1200;
    window.innerHeight = 800;

    const value = sizeToPixel('1vw');
    expect(value).toBe(12);

    const value2 = sizeToPixel('2vh');
    expect(value2).toBe(16);

    const value3 = sizeToPixel('1vmax');
    expect(value3).toBe(12);

    const value4 = sizeToPixel('2vmin');
    expect(value4).toBe(16);
  });

  test('unknow unit', () => {
    const value = sizeToPixel('120foobar123');
    expect(value).toBe(120);
  });
});

describe('parse value', () => {
  test('to string', () => {
    expect(_toString(null)).toBe(null);
    expect(_toString(800)).toEqual('800');
    expect(_toString([1, 2, 3])).toBe('1,2,3');
  });

  test('to number', () => {
    expect(toNumber(null)).toBe(null);
    expect(toNumber(42)).toBe(42);
    expect(() => toNumber(Infinity)).toThrow(TypeError);
    expect(toNumber('42')).toBe(42);
    expect(toNumber('42px')).toBe(42);
    expect(toNumber('2rem')).toBe(32);
  });

  test('to array', () => {
    expect(toArray(null)).toBe(null);
    expect(toArray(123)).toBe(123);
    expect(toArray('10,20,30')).toEqual(['10', '20', '30']);
    expect(toArray('bold 20px')).toEqual(['bold', '20px']);
    expect(toArray('1rem')).toBe('1rem');
    expect(toArray('')).toBe(null);
  });
});

describe('compare value', () => {
  test('not array', () => {
    expect(compareValue(null, undefined)).toBeTruthy();
    expect(compareValue(123, 123)).toBeTruthy();
    expect(compareValue(123, 456)).toBeFalsy();
    const foo = {x: 1};
    const bar = {x: 1};
    expect(compareValue(foo, bar)).toBeFalsy();
    expect(compareValue(foo, foo)).toBeTruthy();
    expect(compareValue(bar, bar)).toBeTruthy();
  });

  test('array', () => {
    const arr1 = [1, 2, 3];
    const arr2 = [1, 2, 3];
    expect(compareValue(arr1, arr2)).toBeTruthy();
    arr2.pop();
    expect(compareValue(arr1, arr2)).toBeFalsy();
    arr1.pop();
    expect(compareValue(arr1, arr2)).toBeTruthy();
    arr2.push(3);
    arr1.push(4);
    expect(compareValue(arr1, arr2)).toBeFalsy();
  });
});