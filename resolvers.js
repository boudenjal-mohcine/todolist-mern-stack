//Resolvers contain logic to fetch and process data from an API or a database.
//The resolver function acts as a GraphQL query handler, they must match a field name defined in the Schema.
// GraphQL Resolvers

const Todo = require("./models/todo");

const resolvers = {
  Query: {
    greetings: () => "GraphQL is Awesome",
    welcome: (parent, args) => `Hello ${args.name}`,
    todos: async () => await Todo.find({}),
    todo: async (parent, args) => await Todo.findById(args.id),
  },
  Mutation: {
    create: async (parent, args) => {
      const { title, description, userId } = args;
      const newTodo = new Todo({
        title,
        description,
        userId,
      });
      await newTodo.save();
      return newTodo;
    },
    update: async (parent, args) => {
      const { id } = args;
      const result = await Todo.findByIdAndUpdate(id, args);
      return result;
    },
    delete: async (parent, args) => {
      const { id } = args;
      const deleteTodo = await Todo.findByIdAndDelete(id);
      if (!deleteTodo) {
        throw new Error(`Todo with ID ${id} not found`);
      }
      return deleteTodo;
    },
  },
};

module.exports = { resolvers };
