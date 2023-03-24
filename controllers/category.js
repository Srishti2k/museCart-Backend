const Category = require("../models/category");
const asyncWrapper = require("../middleware/asyncwrapper");

//get listOfAllCategory
const getCategorylist = async (req, res) => {
  const category = await Category.find({});

  if (!category) {
    res.status(500).json({ success: false });
  }

  res.json({ category });
};
//get DetailOfSpecificCategory
const getCategory = async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (!category) {
    res.status(500).json({ success: false });
  }

  res.json({ category });
};
//post createCategory
const createCategory = asyncWrapper(async (req, res) => {
  const category = await Category.create(req.body);
  res.status(200).json({ category });
});
//delete
const removeCategory = asyncWrapper(async (req, res) => {
  const deletedCategory = await Category.findByIdAndRemove(req.params.id);
  if (!deletedCategory) {
    res.status(500).json({ success: false, message: "this id doesnt exists" });
  }
  res
    .status(200)
    .json({ success: true, message: "Category Deleted", deletedCategory });
});
module.exports = {
  getCategorylist,
  getCategory,
  createCategory,
  removeCategory,
};
