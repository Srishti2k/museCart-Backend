const express = require("express");
const router = express.Router();
const { createProducts, getproducts, removeProducts , getProductDetails, productsWithAttribute, filterByCategory} = require("../controllers/products");

router.route("/createProducts").post(createProducts);
router.route("/getAllProducts").get(getproducts);
//router.route("/:id").delete(removeProducts).get(getProductDetails)
router.route("/by/:filter").get(productsWithAttribute); 
router.route("/filter").get(filterByCategory);
module.exports = router;

//now send this to main app.js
