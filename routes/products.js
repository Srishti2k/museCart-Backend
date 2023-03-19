const express = require("express");
const router = express.Router();
const { createProducts, getproducts } = require("../controllers/products");

router.route("/createProducts").post(createProducts);
router.route("/getAllProducts").get(getproducts);
module.exports = router;

//now send this to main app.js
