const Users = require("../models/users");
const asyncWrapper = require("../middleware/asyncwrapper");

//get
const getusers = async (req, res) => {
  const users = await Users.find({});

  if (!users) {
    res.status(500).json({ success: false });
  }

  res.json({ users });
};

//post
const createusers = asyncWrapper(async (req, res) => {
  const users = await Users.create(req.body);
  res.status(200).json({ users });
});

module.exports = { getusers, createusers };
