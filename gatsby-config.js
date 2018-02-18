module.exports = {
  siteMetadata: {
    title: 'Augmented Reality for lifestyle ecommerce - Cimmerse',
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
