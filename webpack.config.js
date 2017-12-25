module.exports = function (env = {}) {
  const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs'),
    packageConf = JSON.parse(fs.readFileSync('package.json', 'utf-8'))

  const version = packageConf.version,
    proxyPort = 9091,
    plugins = [],
    jsLoaders = []

  if(env.production) {
    // compress js in production environment

    plugins.push(
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false,  // remove all comments
        },
        compress: {
          warnings: false,
          drop_console: false
        }
      })
    )
  }

  if(fs.existsSync('./.babelrc')) {
    // use babel
    const babelConf = JSON.parse(fs.readFileSync('.babelrc'))
    jsLoaders.push({
      loader: 'babel-loader',
      options: babelConf
    })
  }

  return {
    entry: './lib/index.js',
    output: {
      filename: env.production ? `spritejs.min.js` : 'spritejs.js',
      path: path.resolve(__dirname, 'dist'),
      publicPath: '/js/',
      library: 'spritejs',
      libraryTarget: 'umd'
    },

    plugins,

    module: {
      rules: [{
        test: /\.js$/,
        exclude: /(node_modules\/(?!sprite-)|bower_components)/,
        use: jsLoaders
      }]
    },

    devServer: {
      open: true,
      proxy: {
        '*': `http://127.0.0.1:${proxyPort}`
      }
    },
    // devtool: 'inline-source-map',
  }
}
