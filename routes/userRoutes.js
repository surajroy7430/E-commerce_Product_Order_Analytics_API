const express = require("express");
const userRoutes = express.Router();
const controller = require("../controllers/userController");

userRoutes.post("/", controller.register);
userRoutes.get("/", controller.getAll);

module.exports = userRoutes;
