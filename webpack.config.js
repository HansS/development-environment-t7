var path = require('path');

var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var autoprefixer = require('autoprefixer');

function getStyleLoader () {
  return (process.env.BABEL_ENV === 'production')
    ? ExtractTextPlugin.extract(
      'style-loader',
      'css-loader',
      'postcss-loader',
      'sass-loader'
    )
    : 'style-loader!css-loader!postcss-loader!sass-loader'
}

module.exports = {
  entry: [
    './source'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'index.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Custom template',
      template: 'source/index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('index.css')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'source')
    }, {
      test: /\.scss$/,
      loader: getStyleLoader()
    }]
  },
  postcss: function () {
    return [autoprefixer]
  }
};
