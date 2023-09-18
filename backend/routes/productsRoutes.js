const express = require("express");
const router = express.Router();
const {
  uploadProducts,
  productList,
  specificproduct,
  ownProducts,
} = require("../controllers/productsController");
const { protect } = require("../middleware/authMiddleware");
const handleFileUploads = require("../middleware/uploadMiddleware");
router.route("/upload").post(protect, uploadProducts);
router.route("/productlist").get(productList);
router.route("/:id").get(specificproduct);
router.route("/own/:id").get(ownProducts);

module.exports = router;
