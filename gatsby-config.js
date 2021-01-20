module.exports = {
  pathPrefix: '/portfolio',

  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Gatsby Website`,
        short_name: `Website`,
        start_url: `/`,
        background_color: `#777`,
        theme_color: `#02aab0`,
        display: `standalone`,
      },
    },
  ],
};
/* "deploy": "gatsby build --prefix-paths && gh-pages -d public", */
