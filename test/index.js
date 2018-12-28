import * as spritejs from '../src';
const test = require('ava');

test('platform', (t) => {
  t.is(typeof spritejs.version, 'string');
  t.is(global.IS_NODE_ENV, true);
});

test.cb('animation frame', (t) => {
  let i = 0;
  t.plan(1);
  requestAnimationFrame(function f() {
    i++;
    if(i < 60) {
      requestAnimationFrame(f);
    } else {
      t.is(i, 60);
      t.end();
    }
  });
  const id = requestAnimationFrame(() => {
    // never called
    t.truthy(true);
  });
  cancelAnimationFrame(id);
});
