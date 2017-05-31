const path = require('path');
const webpack = require('webpack');
const bs = require('browser-sync').create();
const log = require('npmlog');

const vueWebpackConfig = require('./webpack.config.js')[0];
const weexWebpackConfig = require('./webpack.config.js')[1];

bs.init({
  server: {
    baseDir: path.resolve(__dirname, '..'),
    index: 'index.html',
  },
});

const compilerVue = webpack(vueWebpackConfig);
const compilerWeex = webpack(weexWebpackConfig);

compilerVue.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true, // use polling instead of native watchers
  // pass a number to set the polling interval
}, function(err, stats) {
  bs.reload();
  log.info('[webpack:dev]', stats.toString({
    chunks: false,
    modules: false,
    assets: false
  }));
});

compilerWeex.watch({ // watch options:
  aggregateTimeout: 300, // wait so long for more changes
  poll: true // use polling instead of native watchers
  // pass a number to set the polling interval
}, function() {
});