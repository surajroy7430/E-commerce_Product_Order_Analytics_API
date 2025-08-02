const express = require("express");
const connectToDB = require("./mongoose.config");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
const orderRoutes = require("./routes/orderRoutes");

const app = express();
app.use(express.json());

connectToDB();

app.use("/test", (req, res) => {
  res.status(200).json({ msg: "This is test route" });
});

app.use("/products", productRoutes);
app.use("/users", userRoutes);
app.use("/orders", orderRoutes);

app.use((req, res) => {
  res.json({ error: "Cannot get this route" });
});

app.listen(3000, () => {
  console.log(`Server is running on https://localhost:${3000}`);
});
