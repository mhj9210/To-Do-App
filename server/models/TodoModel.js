const mongoose = require("mongoose");
const todoModel = mongoose.Schema({
  title: {
    type: String,
    unique: true,
    required: true,
    max: 200,
  },
  task: {
    type: String,
    required: true,
    max: 2000,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Todo", todoModel);
