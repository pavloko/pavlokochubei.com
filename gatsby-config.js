module.exports = {
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-react-next',
    {
      resolve: 'gatsby-plugin-hotjar',
      options: {
        sv: 6,
        id: 700184
      }
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-57412185-4',
        anonymize: true
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        trackingId: '37769640',
        webvisor: true,
        trackHash: true,
        version: 2,
      },
    },
  ],
}
