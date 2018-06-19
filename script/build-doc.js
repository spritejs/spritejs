#!/usr/bin/env node

const buildTask = require('./build-task')

;(async function () {
  await buildTask({outputPath: 'docs/js'}) // build uncompressed file
}())
