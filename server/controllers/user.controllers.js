import UserModel from "#models/user.model.js";
import generateToken from "#utils/generate-token.utils.js";

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
    generateToken(res, user._id);
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
  const { name, username, email, password } = req.body;
  const userExists = await UserModel.findOne({
    $or: [{ email }, { username }],
  });

  if (userExists) {
    res.status(400);
    throw new Error("Email or username already exists");
  }

  const user = await UserModel.create({ name, username, email, password });

  if (user) {
    generateToken(res, user._id);
    res.status(201).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
};

/**
 * @desc		Logout user
 * @route		POST /api/users
 * @access	Private
 */
const logoutUser = async (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  res.status(200).json({ message: "User logged out" });
};

/**
 * @desc		Get user profile
 * @route		GET /api/users/profile
 * @access	Private
 */
const getUserProfile = async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    res.status(200).json({
      _id: user._id,
      name: user.name,
      username: user.username,
      email: user.email,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

/**
 * @desc		Update user profile
 * @route		PUT /api/users/profile
 * @access	Private
 */
const updateUserProfile = async (req, res) => {
  const user = await UserModel.findById(req.user._id);
  if (user) {
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.username = req.body.username || user.username;

    if (req.body.password) {
      user.password = req.body.password;
    }
    const updatedUser = await user.save();

    generateToken(res, updatedUser._id);

    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
    });
  } else {
    res.status(404);
    throw new Error("User not found");
  }
};

export {
  authUser,
  getUserProfile,
  logoutUser,
  registerUser,
  updateUserProfile,
};
