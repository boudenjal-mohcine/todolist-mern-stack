const mongoose = require("mongoose");
const beautifyUnique = require('mongoose-beautiful-unique-validation')

const userSchema = mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

userSchema.plugin(beautifyUnique);


module.exports = mongoose.model("User", userSchema);