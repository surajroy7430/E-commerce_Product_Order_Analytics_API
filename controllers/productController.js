const service = require("../services/productService");

exports.create = async (req, res) => {
  try {
    const product = await service.createProduct(req.body);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { price } = req.query;
    if (!price) return res.json({ err: "Please add price query" });

    const product = await service.getAllProducts(price);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ err: "Cannot get id params" });

    const product = await service.updateProduct(id, req.body);
    res.status(201).json({ msg: "Product Updated" }, product);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ err: "Cannot get id params" });

    const product = await service.deleteProduct(id);
    res.status(204).json({ msg: "Product Deleted" }, product);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};
