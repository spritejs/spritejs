import {
  parseFilterString,
  applyFilters,
} from '../../src/utils/filter';

test('export api', () => {
  expect(typeof parseFilterString).toBe('function');
  expect(typeof applyFilters).toBe('function');
});

describe('parseFilterString', () => {
  test('default', () => {
    const value = parseFilterString('');
    expect(value).toEqual(null);

    const value2 = parseFilterString('none');
    expect(value2).toEqual(null);
  });

  test('single filter', () => {
    const value = parseFilterString('url("filters#filter-id")');
    expect(value).toEqual([{args: ['"filters#filter-id"'], type: 'url'}]);

    const value2 = parseFilterString('blur(12px)');
    expect(value2).toEqual([{args: [12], type: 'blur'}]);

    const value3 = parseFilterString('brightness(150%)');
    expect(value3).toEqual([{args: [1.5], type: 'brightness'}]);

    const value4 = parseFilterString('contrast(200%)');
    expect(value4).toEqual([{args: [2], type: 'contrast'}]);

    const value5 = parseFilterString('drop-shadow(15, 15, 5, #033)');
    expect(value5).toEqual([{args: [15, 15, 5, '#033'], type: 'drop-shadow'}]);

    const value6 = parseFilterString('grayscale(50%)');
    expect(value6).toEqual([{args: [0.5], type: 'grayscale'}]);

    const value7 = parseFilterString('hue-rotate(90deg)');
    expect(value7).toEqual([{args: [90], type: 'hue-rotate'}]);

    const value8 = parseFilterString('invert(75%)');
    expect(value8).toEqual([{args: [0.75], type: 'invert'}]);

    const value9 = parseFilterString('opacity(25%)');
    expect(value9).toEqual([{args: [0.25], type: 'opacity'}]);

    const value10 = parseFilterString('saturate(30%)');
    expect(value10).toEqual([{args: [0.3], type: 'saturate'}]);

    const value11 = parseFilterString('sepia(60%)');
    expect(value11).toEqual([{args: [0.6], type: 'sepia'}]);

    expect(() => parseFilterString('blur(none)')).toThrow(TypeError);
  });

  test('decimal & percentage value', () => {
    const value1 = parseFilterString('brightness(150%)');
    expect(value1).toEqual([{args: [1.5], type: 'brightness'}]);

    const value2 = parseFilterString('brightness(1.5)');
    expect(value2).toEqual([{args: [1.5], type: 'brightness'}]);
  });

  test('upper case filter name', () => {
    const value = parseFilterString('DROP-SHADOW(15, 15, 5, #033)');
    expect(value).toEqual([{args: [15, 15, 5, '#033'], type: 'drop-shadow'}]);
  });

  test('drop-shadow with css functional notations', () => {
    const value = parseFilterString('drop-shadow(15, 15, 5, rgba(0, 0, 0, 0.5))');
    expect(value).toEqual([{args: [15, 15, 5, 'rgba(0, 0, 0, 0.5)'], type: 'drop-shadow'}]);
  });

  test('multiple filters', () => {
    const value = parseFilterString('opacity(70%)blur(12px)');
    expect(value).toEqual([{args: [0.7], type: 'opacity'}, {args: [12], type: 'blur'}]);

    const value2 = parseFilterString('opacity(70%); blur(12px)');
    expect(value2).toEqual([{args: [0.7], type: 'opacity'}, {args: [12], type: 'blur'}]);
  });
});
