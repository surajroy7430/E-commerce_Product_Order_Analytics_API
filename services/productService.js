const Product = require("../models/Product");

const createProduct = (data) => Product.create(data);

const getAllProducts = (price) =>
  Product.find(price ? { price: { $gte: price } } : {});

const updateProduct = (data, id) => Product.findByIdAndUpdate(id, data);

const deleteProduct = (id) => Product.findByIdAndDelete(id);


module.exports = {
  createProduct,
  getAllProducts,
  updateProduct,
  deleteProduct,
};
