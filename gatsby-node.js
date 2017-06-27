const ExtractTextPlugin = require('extract-text-webpack-plugin')
const cssnested = require('postcss-nested')
const atImport = require('postcss-import')

exports.modifyWebpackConfig = function (config, env) {
  config.removeLoader('sass')

  if (env === 'develop') {
    config.loader('sass', {
      test: /\.(sass|scss$)/,
      loaders: ['style', 'css?modules', 'sass']
    })
  } else {
    config.loader('sass', {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract('style', ['css?modules', 'postcss', 'sass'])
    })
  }

  config.merge({
    postcss: [
      atImport(),
      cssnested
    ]
  })

  return config
}
