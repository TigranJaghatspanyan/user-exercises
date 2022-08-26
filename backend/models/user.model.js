const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    trim: true,
    minlength: 3,
  },
  age: {
    type: Number,
    require: true,
    minlength: 1,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
