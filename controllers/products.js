/* logics of all callback functions , which we will use in routes */
const Category = require("../models/category");
const Products = require("../models/products");
const asyncWrapper = require("../middleware/asyncwrapper");

//get
const getproducts = async (req, res) => {
  const products = await Products.find({}).populate("category");
  //const products = await Products.find(req.query)

  if (!products) {
    res.status(500).json({ success: false });
  }

  res.json({ results: products.length, products });
};

//get details of product
const getProductDetails = async (req, res) => {
  const products = await Products.findById(req.params.id);

  if (!products) {
    res.status(500).json({ success: false });
  }

  res.json({ products });
};
//post
const createProducts = asyncWrapper(async (req, res) => {
  const category = await Category.findById(req.body.category);
  if (!category) {
    res.status(404).json({
      message: "This Category is not listed! Please confirm the category ID. ",
    });
  }
  const products = await Products.create(req.body);
  res.status(200).json({ products });
});

const removeProducts = asyncWrapper(async (req, res) => {
  const deletedProduct = await Products.findByIdAndRemove(req.params.id);
  if (!deletedProduct) {
    res.status(500).json({ success: false, message: "this id doesnt exists" });
  }
  res
    .status(200)
    .json({ success: true, message: "Product Deleted", deletedProduct });
  //why error is not handled here of wrong id
});

//filters

//get with attribute
const productsWithAttribute = asyncWrapper(async (req, res) => {
  const condition = req.params.filter;
  //const products = await Products.find().select("name image"); //if we want to include more than one atrribute
  const products = await Products.find().select(condition);
  if (!products) {
    res.status(500).json({ success: false });
  }
  res.json({ products });
});

//filterByCategory
const filterByCategory = asyncWrapper(async (req, res) => {
  /* method 1 filter by hardcode data and single item
  //const products= await Products.find({category : "641b55b8b9af5d84c8af0335"}).populate("category");
  */

  /* method 2 filter by any attribute: 
  //GET /api/v1/products/filter?category=641b55b8b9af5d84c8af0335&category=64181fae768b940182cd20db
    const products = await Products.find(req.query).populate("category");

   */

  /* method 3 filter specifically by category comma seperated */
  let filter = {};
  if (req.query.categories) {
    filter = { category: req.query.categories.split(",") }; //split method is used in strings which returns an array.
    console.log(filter);
  }
  //manually: const products= await Products.find({category: [ '64181fae768b940182cd20db', '641b55b8b9af5d84c8af0335' ] })
  const products = await Products.find(filter);

  if (!products) {
    res.status(500).json({ success: false });
  }
  res.json({ results: products.length, products });
});

module.exports = {
  getproducts,
  createProducts,
  removeProducts,
  getProductDetails,
  productsWithAttribute,
  filterByCategory,
};
//now send this to routes

//notes
/* document: An instance of a model is called a document. Creating them and saving to the database is easy.

The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model. */
