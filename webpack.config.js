var autoprefixer = require('autoprefixer')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var path = require('path')
var webpack = require('webpack')

// Returns *.scss loader.
function getStyleLoader () {
  var x = 'style!css!postcss!sass'

  if (process.env.BABEL_ENV === 'production') {
    x = ExtractTextPlugin.extract('style', 'css!postcss!sass')
  }

  return x
}

module.exports = {
  entry: [
    './source'
  ],
  output: {
    path: path.join(__dirname, 'build'),
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './source/index.html',
      inject: 'body',
      minify: {
        removeComments: true,
        removeCommentsFromCDATA: true,
        removeCDATASectionsFromCDATA: true,
        collapseWhitespace: true,
        collapseInlineTagWhitespace: true,
        useShortDoctype: true,
        removeScriptTypeAttributes: true,
        removeStyleLinkTypeAttributes: true
      }
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
    },
    {
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
