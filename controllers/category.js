const Category = require("../models/category");
const asyncWrapper = require("../middleware/asyncwrapper");

//get
const getCategory = async (req, res) => {
  const category = await Category.find({});

  if (!category) {
    res.status(500).json({ success: false });
  }

  res.json({ category });
};
//post
const createCategory = asyncWrapper(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(200).json({ category });
});

module.exports = { getCategory, createCategory };
