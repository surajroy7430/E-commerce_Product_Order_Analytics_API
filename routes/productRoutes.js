const express = require("express");
const productRoutes = express.Router();
const controller = require("../controllers/productController");

productRoutes.post("/", controller.create);
productRoutes.get("/", controller.getAll);
productRoutes.patch("/:id", controller.update);
productRoutes.delete("/:id", controller.remove);

module.exports = productRoutes;
