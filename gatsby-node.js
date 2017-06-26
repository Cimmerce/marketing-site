const ExtractTextPlugin = require('extract-text-webpack-plugin')
const rucksack = require('rucksack-css')
const lost = require('lost')
const cssnext = require('postcss-cssnext')
const cssnested = require('postcss-nested')
const atImport = require('postcss-import')

exports.modifyWebpackConfig = function (config, env) {
  config.removeLoader('sass')

  if (env === 'develop') {
    config.loader('sass', {
      test: /\.(sass|scss$)/,
      loaders: ['style', 'css?modules', 'sass'],
    })
  } else {
    config.loader('sass', {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract('style', ['css?modules', 'postcss', 'sass']),
    })
  }

  config.merge({
    postcss: [
      atImport(),
      cssnested,
      lost(),
      rucksack(),
      cssnext({
        browsers: ['>1%', 'last 2 versions']
      })
    ]
  })

  return config
}
