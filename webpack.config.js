'use strict'

module.exports = {
  entry: './index.js',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['', '.js', '.css']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: [/node_modules/]
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5'
      }
    ]
  },
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-vue-jsx']
  }
}