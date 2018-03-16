#!/usr/bin/env node

const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const webpackConf = require('../webpack.config.js')

function buildTask(options = {}) {
  return new Promise((resolve, reject) => {
    webpack(webpackConf(options), (err, status) => {
      if(err) reject(err)
      else {
        resolve(status)
      }
    })
  })
}

function uploadToCDN(stats) {
  const cdnUploader = require('./cdn-uploader'),
    output = stats.compilation.compiler.options.output,
    file = path.resolve(output.path, output.filename)

  console.log('uploading file: %s', file)

  return cdnUploader.upload(file).then((res) => {
    console.log('file uploaded, CDN URL: %s', res[file])
    const readmeFile = path.resolve(__dirname, '..', 'README.md')
    let content = fs.readFileSync(readmeFile, 'utf-8')
    content = content.replace(/script src="(.*)"/igm, `script src="${res[file]}"`)
    fs.writeFileSync(readmeFile, content)
  })
}

(async function () {
  await buildTask() // build uncompressed file
  const stats = await buildTask({production: true}) // build compressed file
  await uploadToCDN(stats)
}())
