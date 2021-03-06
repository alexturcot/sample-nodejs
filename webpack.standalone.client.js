var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './src/react-client/main.js',
  output: { path: __dirname + './src/react-client/', filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  devServer: {
      host: 'localhost',
      port: 8085,
    }
};