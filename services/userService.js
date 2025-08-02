const User = require("../models/User");

const registerUser = (data) => User.create(data);

const getAllUsers = () => User.find();

module.exports = {
  registerUser,
  getAllUsers,
};
