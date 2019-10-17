/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Nice Nux game studios`,
    description: `Nice Nux game studios`,
    author: `Drew MacLean / Ian Karasz`,
  },
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/media`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `lixbo4eywy36`,
        accessToken: `ZmTvGHX6ur8qj6Hf9YdJc_X8xcWHdm43VKGI7xy377U`
      }
    },
  ]
}
