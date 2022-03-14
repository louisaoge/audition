const { ApolloServer } = require("apollo-server");
const { typeDefs } = require("./schema");
const { Stage } = require("./resolvers/Stage");
const { Step } = require("./resolvers/Step");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");
const { db } = require("./db");
const server = new ApolloServer({
  typeDefs,
  resolvers: { Query, Step, Stage, Mutation },
  context: {
    db,
  },
});
server.listen().then(({ url }) => {
  console.log("Server is ready at " + url);
});
