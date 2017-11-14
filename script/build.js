#!/usr/bin/env node

const webpack = require('webpack')
const fs = require('fs')
const path = require('path')

const webpackConf = require('../webpack.config.js')

webpack(webpackConf(), (err, stats) => {
  webpack(webpackConf({production: true}), (err, stats) => {
    const cdnUploader = require('./cdn-uploader'),
      output = stats.compilation.compiler.options.output,
      file = path.resolve(output.path, output.filename)

    console.log('uploading file: %s', file)
    cdnUploader.upload(file).then((res) => {
      console.log('file uploaded, CDN URL: %s', res[file])
      const readmeFile = path.resolve(__dirname, '..', 'README.md')
      let content = fs.readFileSync(readmeFile, 'utf-8')
      content = content.replace(/script src="(.*)"/igm, `script src="${res[file]}"`)
      fs.writeFileSync(readmeFile, content)
    })
  })
})

