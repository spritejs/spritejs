#!/usr/bin/env node
const buildTask = require('./build-task')
const fs = require('fs')
const path = require('path')

function compressSpriteJSES6File() {
  const filepath = path.join(__dirname, '../dist/spritejs.es6.min.js')
  let content = fs.readFileSync(filepath, 'utf8')
  content = require("babel-core").transform(content, {
    presets: ["minify"]
  });
  fs.writeFileSync(filepath, content.code);
}

/* eslint-enable no-console */
;(async function () {
  await buildTask() // build uncompressed file
  await buildTask({production: true}) // build compressed file
  await buildTask({es6: true})
  await buildTask({es6: true, production: true})
  compressSpriteJSES6File();
}())
