const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler");
const uploadProducts = asyncHandler(async (req, res) => {
  try {
    const data = req.body;
    const newDocument = new Product(data);
    await newDocument.save();
    console.log("Data inserted successfully");
    res.status(200).json({ message: "Data inserted successfully" });
  } catch (error) {
    console.error("Error inserting data:", error);
    res.status(500).json({ error: "Error inserting data" });
  }
});

const productList = asyncHandler(async (req, res) => {
  const productList = await Product.find();
  res.json(productList);
});
const specificproduct = asyncHandler(async (req, res) => {
  const specificproduct = await Product.findById(req.params.id);
  res.json(specificproduct);
});
const ownProducts = asyncHandler(async (req, res) => {
  const ownProducts = await Product.find({ userId: req.params.id });
  res.json(ownProducts);
});

module.exports = {
  uploadProducts,
  productList,
  specificproduct,
  ownProducts,
};
