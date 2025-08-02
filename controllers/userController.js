const service = require("../services/userService");

exports.register = async (req, res) => {
  try {
    const user = await service.registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const users = await service.getAllUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};
