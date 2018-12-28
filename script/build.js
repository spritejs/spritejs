#!/usr/bin/env node
const fs = require('fs');
const buildTask = require('./build-task');

/* eslint-enable no-console */
(async function () {
  const helperPath = './node_modules/@babel/helpers/lib/helpers.js';
  let content;
  if(fs.existsSync(helperPath)) {
    content = fs.readFileSync(helperPath).toString('utf-8');
    const modified = content.replace('helpers.decorate = helper("7.1.5")`', 'helpers.decorate = helper("7.0.0-beta.0")`');
    fs.writeFileSync(helperPath, modified);
  }
  await buildTask();
  await buildTask({production: true});
  await buildTask({mode: 'lite'});
  await buildTask({production: true, mode: 'lite'});
  await buildTask({mode: 'core'});
  await buildTask({production: true, mode: 'core'});
  await buildTask({esnext: true});
  await buildTask({production: true, esnext: true});
  if(content) {
    fs.writeFileSync(helperPath, content);
  }
}());
