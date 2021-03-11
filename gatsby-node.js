/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/node-apis/
 */

// You can delete this file if you're not using it

const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    
    const result = await graphql(`
      query {
        pages: allStrapiPages {
            edges {
              node {
                slug
              }
            }
          }
      }
    `)

    const pages = result.data.pages.edges;

    pages.forEach(pageinfo => {
        createPage({
          path: pageinfo.node.slug,
          component: path.resolve(`./src/templates/pages.js`),
          context: {
            slug: pageinfo.node.slug,
          },
        })
      })
  }