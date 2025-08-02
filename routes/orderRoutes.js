const express = require("express");
const orderRoutes = express.Router();
const controller = require("../controllers/orderController");

orderRoutes.post("/", controller.create);
orderRoutes.get("/", controller.getAll);
orderRoutes.delete("/:id", controller.remove);
orderRoutes.get("/analytics/top-products", controller.getTop);

module.exports = orderRoutes;
