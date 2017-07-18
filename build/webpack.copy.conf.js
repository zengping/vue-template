var CopyWebpackPlugin = require('copy-webpack-plugin')

var webpackConfig = {
  entry: {
    app: './src/main.js'
  },
  plugins: [
    // copy custom static assets
    new CopyWebpackPlugin([
      {
        from: __dirname + '/../demo/assets',
        to: __dirname + '/../static/assets',
        ignore: ['.*']
      }
    ])
  ]
}

module.exports = webpackConfig
