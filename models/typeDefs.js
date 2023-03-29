/***
 *  This query will be parsed and validated against a schema defined in the server. 
 * If the query passes the schema validation, then an associated resolver function will be executed.
 */

const gql = require("graphql-tag");

const typeDefs = gql`
  type Query {
    greetings: String
    welcome(name: String!): String
    todos: [Todo] #return array of todos
    todo(id: ID): Todo #return todo by id
  }

  # Student object
  type Todo {
    id: ID
    title: String
    description: String
    userId: ID
  }

  # Mutation
  type Mutation {
    create(title: String, description: String, userId: ID): Todo
    update(id: ID, title: String, description: String, idDone: Boolean): Todo
    delete(id:ID): Todo

  }

`;

//Where ! indicates a non-nullable unique identifier field and it returns a String value just like our previous greetings field.

module.exports = { typeDefs };