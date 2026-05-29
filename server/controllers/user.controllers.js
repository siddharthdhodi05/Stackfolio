import UserModel from "#models/user.model.js";

/**
 * @desc		Auth user
 * @route		POST /api/users/login
 * @access	Public
 */
const authUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await UserModel.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      name: user.name,
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
