const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Phase } = require("./resolvers/Phase");
const { Task } = require("./resolvers/Task");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./db");
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Task, Phase, Mutation },
  context: {
    db,
  },
});
server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
