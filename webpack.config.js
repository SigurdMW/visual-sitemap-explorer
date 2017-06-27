var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');

var extractPlugin = new ExtractTextPlugin({
  filename: 'main.css'
})

module.exports = {
  entry: {
    main: './src/index.js',
    getpagesource: './src/getPagesSource.js',
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].bundle.js',
    publicPath: '/build'
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
             loader: 'babel-loader',
             options: {
               presets: ['es2015']
             }
          }
        ]
      },
      {
        test: /\.css$/,
        use: extractPlugin.extract({
          use: ['css-loader']
        })
      }
    ]
  },
  plugins: [
    extractPlugin,
    new HtmlWebpackPlugin({
     title: 'Output Management',
     template: 'static/index.html',
     chunks: ['main'],
   })
  ]
}
