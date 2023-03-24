const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  icon: {
    type: String,
  },
  color: {
    type: String,
  },
});

module.exports = mongoose.model("Category", categorySchema);
