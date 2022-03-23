module.exports = {
  plugins: [
    'gatsby-plugin-styled-components', 'gatsby-plugin-image', 'gatsby-plugin-react-helmet', 'gatsby-plugin-sitemap',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Retrospect',
        short_name: 'Retrospect',
        start_url: '/',
        background_color: '#55AAAA',
        display: 'fullscreen',
        icon: 'src/images/icon.png'
      }
    },
    'gatsby-plugin-sharp', 'gatsby-transformer-sharp', 'gatsby-plugin-offline',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'daily-life',
        path: './contents/daily-life/'
      },
      __key: 'daily-life'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'review',
        path: './contents/review/'
      },
      __key: 'review'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'poem',
        path: './contents/poem/'
      },
      __key: 'poem'
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'music',
        path: './contents/music/'
      },
      __key: 'music'
    },
    {
      resolve: `gatsby-plugin-page-creator`,
      options: {
        path: `./contents/`
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        defaultLayouts: {
          default: require.resolve("./src/components/Post.js")
        },
      }
    }
  ]
};