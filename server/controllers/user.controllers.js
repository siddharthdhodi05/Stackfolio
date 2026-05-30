import jwt from "jsonwebtoken";

import UserModel from "#models/user.model.js";

/**
 * @desc		Auth user
 * @route		POST /api/users/login
 * @access	Public
 */
const authUser = async (req, res) => {
  const { identifier, password } = req.body;
  const user = await UserModel.findOne({
    $or: [{ email: identifier }, { username: identifier }],
  });

  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "30d",
    });

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      sameSite: "strict",
      maxAge: 30 * 24 * 60 * 60 * 1000,
    });

    res.json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(401);
    throw new Error("Invalid email or password");
  }
};

/**
 * @desc		Register user
 * @route		POST /api/users
 * @access	Public
 */
const registerUser = async (req, res) => {
  res.send("Register user");
};

/**
 * @desc		Logout user
 * @route		POST /api/users
 * @access	Private
 */
const logoutUser = async (req, res) => {
  res.send("Logout user");
};

/**
 * @desc		Get user profile
 * @route		GET /api/users/profile
 * @access	Private
 */
const getUserProfile = async (req, res) => {
  res.send("Get user profile");
};

/**
 * @desc		Update user profile
 * @route		PUT /api/users/profile
 * @access	Private
 */
const updateUserProfile = async (req, res) => {
  res.send("Update user profile");
};

export {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
};
