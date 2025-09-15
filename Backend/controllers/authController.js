import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";

// Signup
export const registerUser = async (req, res) => {
  try {
    const { username, email, password, serviceType, planType } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: "User already exists" });

    const user = await User.create({
      username,
      email,
      password,
      serviceType,
      planType
    });

    if (user) {
      generateToken(res, user._id);
      res.status(201).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        serviceType: user.serviceType,
        planType: user.planType,
        subscriptionStatus: user.subscriptionStatus,
      });
    } else {
      res.status(400).json({ message: "Invalid user data" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (user && (await user.matchPassword(password))) {
      generateToken(res, user._id);
      res.json({
        _id: user._id,
        username: user.username,
        email: user.email,
        serviceType: user.serviceType,
        planType: user.planType,
        subscriptionStatus: user.subscriptionStatus,
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Logout
export const logoutUser = (req, res) => {
  res.cookie("jwt", "", { httpOnly: true, expires: new Date(0) });
  res.json({ message: "Logged out successfully" });
};

// Profile
export const getProfile = (req, res) => {
  if (!req.user) {
    return res.status(200).json({ loggedIn: false, user: null });
  }

  res.json({
    loggedIn: true,
    _id: req.user._id,
    username: req.user.username,
    email: req.user.email,
    serviceType: req.user.serviceType,
    planType: req.user.planType,
    subscriptionStatus: req.user.subscriptionStatus,
  });
};
