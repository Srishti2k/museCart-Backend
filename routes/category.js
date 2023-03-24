const express = require("express");
const router = express.Router();
const { getCategorylist, createCategory, getCategory ,removeCategory} = require("../controllers/category");

router.route("/createCategory").post(createCategory);
router.route("/getCategory/:id").get(getCategory)
router.route("/getAllcategory").get(getCategorylist);
router.route("/:id").get(removeCategory)

module.exports = router;

//now send this to main app.js