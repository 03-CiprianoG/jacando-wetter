require("dotenv").config();

//importing Apollo libs and utils
const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./typeDefs");
const { resolvers } = require("./resolvers");

const PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true,
});

server.listen({ port: process.env.PORT || 4000 }, () => {
  console.log(`server is listening on port ${PORT}`);
});
