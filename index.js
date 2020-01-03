const { ApolloServer, gql } = require('apollo-server')

const typeDefs = gql`
  type Item {
    name: String
    completed: Boolean
  }

  type Query {
    items: [Item]
  }
`

const items = [
  {
    name: 'Run yarn init',
    completed: true
  },
  {
    name: 'Get apollo server running',
    completed: false
  }
]

const resolvers = {
  Query: {
    items: () => items
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`)
})
