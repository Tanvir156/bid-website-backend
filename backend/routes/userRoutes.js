const express = require("express");
const router = express.Router();
const {
  registerUser,
  authUser,
  updateProfile,
  userProfile,
  allUserList,
  SendLink,
  UserValidation,
  ChangePassword,
} = require("../controllers/userController");
const { protect } = require("../middleware/authMiddleware");
router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/changepass/:id/:token").post(ChangePassword);
router.route("/resetpassword/:id/:token").get(UserValidation);
router.route("/resetpass").post(SendLink);
router.route("/userlist").get(allUserList);
router.route("/updateprofile").post(protect, updateProfile);
router.route("/userprofile").get(protect, userProfile);
module.exports = router;
