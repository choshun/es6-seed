var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var webpack = require('webpack');

module.exports = {
  entry: path.resolve(__dirname, '../src/client/page.js'),
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /src\/.+.js$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('css!sass')
      }
    ]
  },

  sassLoader: {
    includePaths: [path.resolve(__dirname, '../src/client/sass')]
  },

  plugins: [
    new ExtractTextPlugin('style.css', {
        allChunks: true
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true
    })
  ]
};
