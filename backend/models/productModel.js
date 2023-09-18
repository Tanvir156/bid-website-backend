const mongoose = require("mongoose");

const productModel = new mongoose.Schema({
  userId:{
    type:String,
    required:true
  },
  selectedCategory: {
    type: String,
    required: true,
  },
  selectedSubcategory: {
    type: String,
    required: true,
  },
  selectedDivision: {
    type: String,
    required: true,
  },
  selectedDistric: {
    type: String,
    required: true,
  },
  condition: {
    type: String,
    required: true,
  },
  condition2: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
  },
  model: {
    type: String,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  images: {
    type: [String],
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  number1: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
});

const Product = mongoose.model("Product", productModel);

module.exports = Product;
