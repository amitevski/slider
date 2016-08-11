var path = require('path');
var webpack = require('webpack');

var typeLib = path.join(__dirname, 'typings.d.ts');

var config = {
  cache: true,
  devtool: 'source-map',
  entry: {
    slider:      './src/slider'
  },

  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].library.js',
    library: 'Slider',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  module: {
    loaders: [
      { test: /\.ts$/,   loader: 'awesome-typescript-loader' , exclude: /node_modules/},
      { test: /\.html/,  loader: 'raw-loader' },
      { test: /\.css$/,  loader: 'to-string-loader!css-loader' }
    ]
  },

  // plugins: [
  //   new webpack.optimize.CommonsChunkPlugin({ name: ['polyfills', 'vendor', 'main'].reverse(), minChunks: Infinity }),
  // ],

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  devServer: {
    historyApiFallback: true,
    watchOptions: { aggregateTimeout: 300, poll: 1000 }
  },

  node: {
    global: true,
    process: true,
    Buffer: false,
    crypto: 'empty',
    child_process: 'empty',
    fs: 'empty',
    module: false,
    clearImmediate: false,
    setImmediate: false,
    clearTimeout: true,
    setTimeout: true
  }
};
module.exports = config;
