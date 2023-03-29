const mongoose = require("mongoose");

const todoSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  isDone: { type: Boolean, default: false },
  userId : { type: String, required: true}
});


module.exports = mongoose.model('Todo',todoSchema);