const Category = require(".../models/category");

const Products = require(".../models/products");
const asyncWrapper = require(".../middleware/asyncwrapper");

//get with attribute
const productsWithAttribute = async (req, res) => {
  const condition = req.params.filter;
  //const products = await Products.find().select("name image"); //if we want to include more than one atrribute
  const products = await Products.find().select(condition);

  if (!products) {
    res.status(500).json({ success: false });
  }
  res.json({ products });
};

//filter by category from query parameters

//filter by query params 

module.exports = {
  productsWithAttribute,
};
