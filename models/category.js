const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "must provide name"],
    trim: true,
  },
  completed: { type: Boolean, default: false },
});

module.exports = mongoose.model("category", categorySchema);
