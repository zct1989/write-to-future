module.exports = {
  client: {
    service: {
      name: 'write-for-future',
      // URL to the GraphQL API
      url: 'http://localhost:3000/graphql'
    },
    // Files processed by the extension
    includes: [
      'src/client/**/*.vue',
      'src/client/**/*.js',
      'src/client/**/*.ts'
    ]
  }
}
