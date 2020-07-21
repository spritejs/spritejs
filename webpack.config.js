const webpack = require('webpack');
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

  const plugins = [];

  if(env.mode === 'development') {
    plugins.push(new webpack.HotModuleReplacementPlugin({
      multiStep: true,
    }));
  }

  if(env.module) {
    plugins.push(new EsmWebpackPlugin());
  }

  plugins.push(new webpack.DefinePlugin({
    __DEV__: env.mode === 'development',
  }));

  let filename = '[name]';
  if(env.esnext) filename += '.es';
  if(env.module) filename += 'm';

  if(env.mode === 'production') filename += '.min';
  filename += '.js';

  const entry = {
    spritejs: './src/index',
    'spritejs.worker': './src/index.worker',
  };

  plugins.push(new webpack.DefinePlugin({
    __SPRITEVER__: `"${require('./package.json').version}"`,
  }));

  return {
    mode: env.mode || 'none',
    entry,
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename,
      publicPath: '/js/',
      library: ['spritejs'],
      libraryTarget: env.module ? 'var' : 'umd',
      // libraryExport: 'default',
      globalObject: 'this',
    },
    resolve: {
      alias: {
        'gl-renderer': 'gl-renderer/src',
        '@mesh.js/core': '@mesh.js/core/src',
      },
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!@mesh.js|gl-renderer).*/,
          use: {
            loader: 'babel-loader',
            options: babelConf,
          },
        },
        {
          test: /\.(frag|vert|glsl)$/,
          use: {
            loader: 'raw-loader',
            options: {},
          },
        },
      ],

      /* Advanced module configuration (click to show) */
    },

    externals: {

    },
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || '.'),
      compress: true,
      port: 9090,
      hot: true,
      // ...
    },

    plugins,
    // list of additional plugins

    /* Advanced configuration (click to show) */
  };
};
