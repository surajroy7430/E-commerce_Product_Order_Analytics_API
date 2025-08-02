const Product = require("../models/Product");
const Order = require("../models/Order");

const placeOrder = async ({ user, products }) => {
  let total = 0;

  for (let i = 0; i < products.length; i++) {
    const p = await Product.findById(products[i].productId);
    if (!p) throw new Error("Product Not Found");
    total += products[i].price * quantity;
  }

  return Order.create({ user, products, totalAmount: total });
};

const getAllOrders = ({ afterDate, category }) => {
  const filter = {};

  if (afterDate) {
    filter.orderedAt = { $gt: new Date(afterDate) };
  }

  if (category) {
    filter["products.productId"] = {
      $in: Product.find({ category }, "_id").then((p) => p.map((x) => x._id)),
    };
  }

  return Order.find(filter).populate("products.productId");
};

const getTopProducts = () => {
  Order.aggregate([
    { $unwind: "$products" },
    {
      $group: {
        _id: "products.productId",
        totalQuantity: { $sum: "products.quantity" },
      },
    },
    { $sort: { totalQuantity: -1 } },
    { $limit: 3 },
  ]);
};

const deleteOrder = (id) => Product.findByIdAndDelete(id);

module.exports = {
  placeOrder,
  getAllOrders,
  getTopProducts,
  deleteOrder,
};
