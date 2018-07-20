// const conf = require('./package.json')

module.exports = function (env = {}) {
  const webpack = require('webpack'),
    path = require('path'),
    fs = require('fs')

  const outputPath = path.resolve(__dirname, env.outputPath || 'dist')

  const proxyPort = 9091,
    plugins = [],
    jsLoaders = []

  
  let babelConf = {};
  let babelFile = env.es6 ? './.es6.babelrc' : './.babelrc';
  if(fs.existsSync(babelFile)) {
    // use babel
    babelConf = JSON.parse(fs.readFileSync(babelFile))
    babelConf.babelrc = false;
  }

  if(env.production) {
    // compress js in production environment
    plugins.push(new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false, // remove all comments
      },
      compress: {
        warnings: false,
        drop_console: false,
      },
    }))
  }
  jsLoaders.push({
    loader: 'babel-loader',
    options: babelConf,
  })
  const filename = `spritejs.${env.es6 ? 'es6.': ''}${env.production ? 'min.' : ''}js`
  const exclude =  env.es6 ? /node_modules\/(?!(sprite\-\w+|svg-path-to-canvas)\/).*/ : /(node_modules)/;
  return {
    entry: './src/index.js',
    output: {
      filename,
      path: outputPath,
      publicPath: '/js/',
      library: 'spritejs',
      libraryTarget: 'umd',
    },

    plugins,

    module: {
      rules: [{
        test: /\.js$/,
        exclude,
        use: jsLoaders,
      }],
    },

    devServer: {
      open: true,
      proxy: {
        '*': `http://127.0.0.1:${proxyPort}`,
      },
    },
    // devtool: 'inline-source-map',
  }
}
