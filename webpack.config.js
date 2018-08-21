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
    filename: env.esnext ? 'spritejs.es6' : 'spritejs',
    publicPath: '/js/',
    library: 'spritejs',
    libraryTarget: env.esnext ? 'commonjs2' : 'umd',
  };

  if(env.production) {
    output.filename += '.min.js';
  } else {
    output.filename += '.js';
  }

  return {
    mode: env.production ? 'production' : 'none',
    entry: './src/index',
    output,

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules\/(?!(sprite-\w+)\/|svg-path-to-canvas|fast-animation-frame).*/,
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
    },
    externals,
    // Don't follow/bundle these modules, but request them at runtime from the environment

    stats: 'errors-only',
    // lets you precisely control what bundle information gets displayed

    devServer: {
      contentBase: path.join(__dirname, env.server || 'example'),
      compress: true,
      port: 9090,
      // ...
    },

    plugins: [
      // ...
    ],
    // list of additional plugins


    /* Advanced configuration (click to show) */
  };
};
