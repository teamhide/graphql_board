import { GraphQLServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const app = new GraphQLServer({
    typeDefs: "graphql/schema.graphql",
    resolvers
})
app.start(() => console.log('[*] GraphQL Server Running Port: 4000'))