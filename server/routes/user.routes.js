import {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
} from "#controllers/user.controllers.js";
import express from "express";

const router = express.Router();

router.route("/").post(registerUser);
router.route("/login").post(authUser);
router.route("/logout").post(logoutUser);
router.route("/profile").get(getUserProfile).put(updateUserProfile);

export default router;
