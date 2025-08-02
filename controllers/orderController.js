const service = require("../services/orderService");

exports.create = async (req, res) => {
  try {
    const order = await service.placeOrder(req.body);
    res.status(201).json({ msg: "Order Placed" }, order);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.getAll = async (req, res) => {
  try {
    const { after, category } = req.query;
    if (!after || !category)
      return res.json({ err: "Cannot get after or category query" });

    const orders = await service.getAllOrders(after, category);
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.getTop = async (req, res) => {
  try {
    const orders = await service.getTopProducts();
    res.status(200).json({ msg: "Top 3 Products" }, orders);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};

exports.remove = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.json({ err: "Cannot get id params" });

    const order = await service.deleteOrder(id);
    res.status(204).json({ msg: "Order Removed" }, order);
  } catch (error) {
    res.status(500).json({ err: "Interval Server Error" });
  }
};
