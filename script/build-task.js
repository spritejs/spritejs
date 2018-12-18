const webpack = require('webpack');
const webpackConf = require('../webpack.config.js');

module.exports = function buildTask(options = {}) {
  return new Promise((resolve, reject) => {
    webpack(webpackConf(options), (err, status) => {
      if(err) reject(err);
      else {
        resolve(status);
      }
    });
  });
};