const express = require("express");
const router = express.Router();
const { createOrders, getOrders } = require("../controllers/orders");

router.route("/createOrders").post(createOrders);
router.route("/getAllOrders").get(getOrders);
module.exports = router;

//now send this to main app.js