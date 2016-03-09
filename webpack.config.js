var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

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
    './source/source'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'source/index.html',
      inject: 'body'
    }),

    new ExtractTextPlugin('bundle.css', {
      allChunks: true
    }),

    /*
      This adds the `window.fetch` Ajax helper.

      Documentation here:

      https://github.com/github/fetch
    */
    new webpack.ProvidePlugin({
      'Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'window.Promise': 'imports?this=>global!exports?global.Promise!es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch',
      'window.fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
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
    return [
      autoprefixer
    ]
  }
}
