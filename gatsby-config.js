/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */
require("dotenv").config({
   path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
   plugins: [
      {
         resolve: "gatsby-source-gathercontent",
         options: {
            userName: process.env.GATSBY_GC_USER_NAME,
            apiKey: process.env.GATSBY_GC_API_KEY,
            projectId: process.env.GATSBY_GC_PROJECT_ID,
         },
      },
      'gatsby-plugin-svgr',
      'gatsby-plugin-react-helmet',
   ],
}
