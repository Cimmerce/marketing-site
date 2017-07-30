module.exports = {
  siteMetadata: {
    title: `Cimmerse - 3D and Virtual Reality for ecommerce`,
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [
          require('autoprefixer')
        ]
      }
    }
  ]
}
