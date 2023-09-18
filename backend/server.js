const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const productsRoutes = require("./routes/productsRoutes");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const fileUpload = require("express-fileupload");

const app = express();

dotenv.config();
mongoose.set("strictQuery", true);
connectDB();
app.use(express.json());

// Middleware for handling JSON and form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for handling file uploads
app.use(fileUpload());
app.get("/", (req, res) => {
  res.send("API is running..");
});
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "http://localhost:3000"
    // "https://bid-website-frontend-l3on-irxdefx17-tanvir156.vercel.app"
  ); // Allow requests from this origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  next();
});
app.use("/api/users", userRoutes);
app.use("/api/products", productsRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server runing in 5000"));
