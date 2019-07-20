import { prisma } from './../generated/prisma-client/index'
import { GraphQLServer } from 'graphql-yoga'

const resolvers = {
  Query: {
    users(parent, args, context) {
      return context.prisma.users()
    }
  }
}

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  context: { prisma },
  resolvers
})

server.start(() => console.log('Server is up on port 4000'))
