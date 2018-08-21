#!/usr/bin/env node
const buildTask = require('./build-task')

/* eslint-enable no-console */
;(async function () {
  await buildTask(); // build uncompressed file
  await buildTask({production: true}); // build compressed file
  await buildTask({esnext: true});
  // await buildTask({esnext: true, production: true})
}());
