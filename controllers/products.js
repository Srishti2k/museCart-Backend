/* logics of all callback functions , which we will use in routes */

const Products = require("../models/products");
const asyncWrapper = require("../middleware/asyncwrapper");

//get
const getproducts = async (req, res) => {
  const products = await Products.find({});

  if (!products) {
    res.status(500).json({ success: false });
  }

  res.json({ products });
};
//post
const createProducts = asyncWrapper(async (req, res) => {
  const products = await Products.create(req.body);
  res.status(200).json({ products });
});

module.exports = { getproducts, createProducts };
//now send this to routes


//notes
/* document: An instance of a model is called a document. Creating them and saving to the database is easy.

The Model.create() method of the Mongoose API is used to create single or many documents in the collection. Mongoose by default triggers save() internally when we use the create() method on any model. */