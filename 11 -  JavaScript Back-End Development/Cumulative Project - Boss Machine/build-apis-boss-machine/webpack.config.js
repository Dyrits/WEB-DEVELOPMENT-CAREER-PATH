'use strict';

const webpack = require('webpack'); // eslint-disable-line no-unused-vars

module.exports = {
  mode: 'production',
  entry: './browser/index.js',
  output: {
    path: __dirname,
    filename: 'public/js/bundle.js',
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /jsx?$/,
        exclude: /node_modules/, 
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-react', ['@babel/preset-env', {targets: 'defaults'}]],
        }
      }
    ]
  }
};