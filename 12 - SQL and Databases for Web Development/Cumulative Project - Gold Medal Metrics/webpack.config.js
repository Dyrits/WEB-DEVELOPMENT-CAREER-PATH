var path = require('path');
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: './index.js',
  output: {
      path: path.resolve(__dirname, 'build'),
      filename: 'app.bundle.js'
  },
  module: {
      rules: [
          {
              test: /\.js$/,
              exclude: /node_modules/,
              loader: 'babel-loader',
              options: {
                  presets: ['@babel/preset-react', ['@babel/preset-env', {targets: 'defaults'}]]
              }
          }
      ]
  },
  stats: {
      colors: true
  },
  devtool: 'source-map'
};

