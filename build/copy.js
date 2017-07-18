require('./check-versions')()

process.env.NODE_ENV = 'production'

var ora = require('ora')
var rm = require('rimraf')
var path = require('path')
var chalk = require('chalk')
var webpack = require('webpack')
var config = require('../config')
var webpackConfig = require('./webpack.copy.conf')

var spinner = ora('copy the assets...')
spinner.start()

webpack(webpackConfig, function (err, stats) {
  spinner.stop()
  console.log(chalk.cyan('  assets copy complete.\n'))

  rm(__dirname + '/../app.js', err => {
    if (err) throw err
    console.log(chalk.cyan('  app.js delete complete.\n'))
  })
})
