//grab controlllers
const Orders = require("../models/orders");
const asyncWrapper = require("../middleware/asyncwrapper");

//get
const getOrders = asyncWrapper(async (req, res) => {
  const orders = await Orders.find({});
  if (!orders) {
    res.status(500).json({ success: false });
  }
  res.json({ orders });
});

//post
const createOrders = asyncWrapper(async (req, res) => {
  const orders = await Orders.create(req.body);
  res.status(200).json({ orders });
});

module.exports = { getOrders, createOrders };
