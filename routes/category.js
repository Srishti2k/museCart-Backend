const express = require("express");
const router = express.Router();
const { createCategory, getCategory } = require("../controllers/category");

router.route("/createCategory").post(createCategory);
router.route("/getAllcategory").get(getCategory);
module.exports = router;

//now send this to main app.js