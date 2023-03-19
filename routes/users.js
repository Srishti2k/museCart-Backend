const express = require("express");
const router = express.Router();
const { createusers, getusers } = require("../controllers/users");

router.route("/createUsers").post(createusers);
router.route("/getAllUsers").get(getusers);
module.exports = router;

//now send this to main app.js