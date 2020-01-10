import LabelAttr from '../../src/attribute/label';

describe('attribute set get', () => {
  const subject = {
    onPropertyChange(key, value, oldValue, attributes) { },
  };
  const attr = new LabelAttr(subject);

  test('radius', () => {
    expect(attr.text).toBe(' ');
    attr.text = 'foobar';
    expect(attr.text).toBe('foobar');
    attr.text = null;
    expect(attr.text).toBe(' ');
  });

  test('fontSize', () => {
    expect(attr.fontSize).toBe(16);
    attr.fontSize = '1.5rem';
    expect(attr.fontSize).toBe(24);
    attr.fontSize = null;
    expect(attr.fontSize).toBe(16);
  });

  test('fontFamily', () => {
    expect(attr.fontFamily).toBe('Helvetica,Arial,sans-serif');
    attr.fontFamily = 'Arial';
    expect(attr.fontFamily).toBe('Arial');
    attr.fontFamily = null;
    expect(attr.fontFamily).toBe('Helvetica,Arial,sans-serif');
  });

  test('fontStyle', () => {
    expect(attr.fontStyle).toBe('normal');
    attr.fontStyle = 'italic';
    expect(attr.fontStyle).toBe('italic');
    attr.fontStyle = null;
    expect(attr.fontStyle).toBe('normal');
  });

  test('fontVariant', () => {
    expect(attr.fontVariant).toBe('normal');
    attr.fontVariant = 'small-caps';
    expect(attr.fontVariant).toBe('small-caps');
    attr.fontVariant = null;
    expect(attr.fontVariant).toBe('normal');
  });

  test('fontWeight', () => {
    expect(attr.fontWeight).toBe('normal');
    attr.fontWeight = 'bold';
    expect(attr.fontWeight).toBe('bold');
    attr.fontWeight = null;
    expect(attr.fontWeight).toBe('normal');
  });

  test('fontStretch', () => {
    expect(attr.fontStretch).toBe('normal');
    attr.fontStretch = 'wider';
    expect(attr.fontStretch).toBe('wider');
    attr.fontStretch = null;
    expect(attr.fontStretch).toBe('normal');
  });

  test('lineHeight', () => {
    expect(attr.lineHeight).toBe(16);
    attr.fontSize = '2rem';
    expect(attr.lineHeight).toBe(32);
    attr.lineHeight = 48;
    expect(attr.lineHeight).toBe(48);
    attr.lineHeight = null;
    expect(attr.lineHeight).toBe(32);
    attr.fontSize = null;
    expect(attr.lineHeight).toBe(16);
  });

  test('textAlign', () => {
    expect(attr.textAlign).toBe('left');
    attr.textAlign = 'center';
    expect(attr.textAlign).toBe('center');
    attr.textAlign = null;
    expect(attr.textAlign).toBe('left');
  });

  test('verticalAlign', () => {
    expect(attr.verticalAlign).toBe('middle');
    attr.verticalAlign = 'top';
    expect(attr.verticalAlign).toBe('top');
    attr.verticalAlign = null;
    expect(attr.verticalAlign).toBe('middle');
  });

  test('fillColor', () => {
    expect(attr.fillColor).toBe(undefined);
    attr.fillColor = 'red';
    expect(attr.fillColor).toBe('rgba(255,0,0,1)');
    attr.fillColor = null;
    expect(attr.fillColor).toBe(undefined);
  });

  test('strokeColor', () => {
    expect(attr.strokeColor).toBe(undefined);
    attr.strokeColor = 'green';
    expect(attr.strokeColor).toBe('rgba(0,128,0,1)');
    attr.strokeColor = null;
    expect(attr.strokeColor).toBe(undefined);
  });

  test('strokeWidth', () => {
    expect(attr.strokeWidth).toBe(1);
    attr.strokeWidth = '1rem';
    expect(attr.strokeWidth).toBe(16);
    attr.strokeWidth = null;
    expect(attr.strokeWidth).toBe(1);
  });

  test('font', () => {
    expect(attr.font).toBe('normal normal normal normal 16px/16px Helvetica,Arial,sans-serif');
    attr.fontFamily = 'Arial';
    attr.fontWeight = 'bold';
    attr.fontSize = '1.5rem';
    expect(attr.font).toBe('normal normal bold normal 24px/24px Arial');
    attr.font = 'italic 900 12px/18px "楷体"';
    expect(attr.fontStyle).toBe('italic');
    expect(attr.fontWeight).toBe('900');
    expect(attr.fontSize).toBe(12);
    expect(attr.lineHeight).toBe(18);
    expect(attr.fontFamily).toBe('"楷体"');
    attr.font = null;
    expect(attr.font).toBe('normal normal normal normal 16px/16px Helvetica,Arial,sans-serif');
  });
});