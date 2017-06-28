const ExtractTextPlugin = require('extract-text-webpack-plugin')
const autoprefixer = require('autoprefixer')

exports.modifyWebpackConfig = function (config, env) {
  config.removeLoader('sass')

  const cssModuleLoaderConfig = 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]&sourceMap&-minimize'

  if (env === 'develop') {
    config.loader('sass', {
      test: /\.(sass|scss$)/,
      loaders: ['style', cssModuleLoaderConfig, 'postcss', 'sass']
    })
  } else {
    config.loader('sass', {
      test: /\.(sass|scss)$/,
      loader: ExtractTextPlugin.extract(
        'style', [cssModuleLoaderConfig, 'postcss', 'sass']
      )
    })
  }

  config.merge({
    postcss: [autoprefixer]
  })

  return config
}
