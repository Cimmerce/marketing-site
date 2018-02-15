module.exports = {
  siteMetadata: {
    title: 'Cimmerse: AR-enabled mobile web sales',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-W62CRPZ',
        // Include GTM in development.
        includeInDevelopment: true
      },
    }
  ],
};
