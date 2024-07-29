const User = require('../models/userModel');

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const getUserById = async (req, res) => {
  try {
      console.log('Id: <',req.params.id);
      const user = await User.findById(req.params.id);
      console.log('User',user);
      if (!user) {
          return res.status(404).json({ message: 'User not found' });
      }
      res.json(user);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

const createUser = async (req, res) => {
  const { username, email, password } = req.body;

  const newUser = new User({
    username,
    email,
    password
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = { getUsers, createUser, getUserById };
