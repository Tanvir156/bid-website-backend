const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv");
const userRoutes = require("./routes/userRoutes");
const path = require("path");
const mongoose = require("mongoose");
const app = express();

dotenv.config();
mongoose.set("strictQuery", true);
connectDB();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("API is running..");
});
app.use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://bid-website-frontend-l3on-irxdefx17-tanvir156.vercel.app"
  ); // Allow requests from this origin
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE"); // Allow specific HTTP methods
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization"); // Allow specific headers
  next();
});
app.use("/api/users", userRoutes);

const PORT = process.env.PORT;

app.listen(PORT, console.log("Server runing in 5000"));
