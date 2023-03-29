/***
 * The index.js file is the entry point for our server.
 * In the code above we imported ApolloServer constructor and created an 
 * instance by passing our typeDefs schema and resolvers as parameters.
 */

const { ApolloServer } = require("@apollo/server");
const { startStandaloneServer } = require("@apollo/server/standalone");
const { resolvers } = require("./resolvers.js");
const { typeDefs } = require("./models/typeDefs.js");
const db = require('./services/dbconnection')
require("dotenv").config({ path: "./.env" });


//connect to database

db.connectToServer(function (err) {
    if (err) console.error(err);
});

const server = new ApolloServer({ typeDefs, resolvers });


startStandaloneServer(server, {
  listen: { port: 4000 },
}).then(({ url }) => {
  console.log(`Server ready at ${url}`);
});