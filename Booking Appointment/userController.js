const User = require('../models/user');

const addUser = async (req, res) => {
  try {
    const { name, email, phone } = req.body;
    await User.create({ name, email, phone });
    res.status(201).send(`User ${name} added successfully`);
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to add user");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (err) {
    res.status(500).send("Failed to fetch users");
  }
};

module.exports = { addUser, getAllUsers };
