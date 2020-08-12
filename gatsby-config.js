module.exports = {
  siteMetadata: {
    title: `Morgan Billingsley`,
    description: `Morgan Billingsley is an entrepreneur and software developer in Phoenix, Arizona. He owns a software development shop called Dylate.`,
    author: `Morgan Billingsley`
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-local-search',
      options: {
        name: 'articles',
        engine: 'flexsearch',
        engineOptions: 'speed',
        query: `
          {
            allMarkdownRemark {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    author
                    category
                  }
                  excerpt
                  rawMarkdownBody
                  fields {
                    slug
                  }
                }
              }
            }
          }
        `,
        ref: 'id',
        index: ['id', 'title', 'author', 'category', 'body'],
        store: ['id', 'title', 'author', 'category', 'excerpt', 'slug'],
        normalizer: ({ data }) =>
          data.allMarkdownRemark.edges.map(({ node }) => ({
            id: node.id,
            title: node.frontmatter.title,
            author: node.frontmatter.author,
            category: node.frontmatter.category,
            excerpt: node.excerpt,
            body: node.rawMarkdownBody,
            slug: node.fields.slug
          }))
      }
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: true,
              noInlineHighlight: false,
              escapeEntities: {},
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        query: `
          {
            allSitePage {
              nodes {
                path
              }
            }
        }`,
        resolveSiteUrl: () => `https://morganbillingsley.com`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.nodes.map(node => {
            return {
              url: `https://morganbillingsley.com${node.path}`,
              changefreq: `daily`,
              priority: 0.7,
            }
          })
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
