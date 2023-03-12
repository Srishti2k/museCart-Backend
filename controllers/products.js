/* logics of all callback functions , which we will use in routes */

const Products = require("../models/products");
const asyncWrapper = require('../middleware/asyncwrapper')

//get
const getproducts = async (req, res) => {
    const products = await Products.find({})
    res.json({ products })
  
}
//post
const createProducts = asyncWrapper (async (req, res) => {
        const products = await Products.create(req.body)
        res.status(200).json({ products })
})

module.exports = { getproducts, createProducts }
//now send this to routes

