const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');
const path = require('path');
const fs = require('fs');

module.exports = function (env = {}) {
  let babelConf;

  const babelRC = env.esnext ? './.es6.babelrc' : './.babelrc';
  if(fs.existsSync(babelRC)) {
    babelConf = JSON.parse(fs.readFileSync(babelRC));
    babelConf.babelrc = false;
  }

  const externals = {};

  const aliasFields = ['browser', 'esnext'];
  const outputPath = path.resolve(__dirname, env.outputPath || 'dist');

  const output = {
    path: outputPath,
    filename: env.esnext ? 'spritejs.esm' : 'spritejs',
    publicPath: '/js/',
    library: 'spritejs',
    libraryTarget: env.esnext ? 'var' : 'umd',
  };

  const plugins = [];

  if(env.esnext) {
    plugins.push(new EsmWebpackPlugin());
  }

  const alias = {
    'sprite-core': 'sprite-core/src/index.js',
    'sprite-math': 'sprite-math/src/index',
    'svg-path-to-canvas': 'svg-path-to-canvas/src/index',
    'sprite-animator': 'sprite-animator/src/index',
    'sprite-flex-layout': 'sprite-flex-layout/src/index',
    'sprite-timeline': 'sprite-timeline/src/index',
  };
  let entry = './src/index';

  if(env.mode === 'lite') {
    output.filename += '.lite';
    entry = './src/index.lite';
    alias['sprite-core'] = 'sprite-core/src/index.dom.js';
  } else if(env.mode === 'core') {
    output.filename += '.core';
    entry = './src/index.core';
    alias['sprite-core'] = 'sprite-core/src/index.basic.js';
  }

  if(env.production) {
    output.filename += '.min.js';
  } else {
    output.filename += '.js';
  }

  return {
    mode: env.production ? 'production' : 'none',
    entry,
    output,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(sprite-[\w-]+)\/|svg-path-to-canvas).*/,
          use: {
            loader: 'babel-loader',
            options: babelConf,
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },
    resolve: {
      aliasFields,
      alias,
    },
    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || 'example'),
      compress: true,
      host: '0.0.0.0',
      port: 9090,
      // ...
    },

    plugins,
    // list of additional plugins


    /* Advanced configuration (click to show) */
  };
};
