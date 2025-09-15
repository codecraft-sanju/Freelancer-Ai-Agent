import express from "express";
import {
  registerUser,
  loginUser,
  logoutUser,
  getProfile,
} from "../controllers/authController.js";
import protect from "../middlewares/authMiddleware.js";

const router = express.Router();

// @route   POST /api/auth/register
// @desc    Register new freelancer
router.post("/register", registerUser);

// @route   POST /api/auth/login
// @desc    Login freelancer
router.post("/login", loginUser);

// @route   POST /api/auth/logout
// @desc    Logout freelancer
router.post("/logout", logoutUser);

// @route   GET /api/auth/profile
// @desc    Get logged-in freelancer profile
// @access  Private
router.get("/profile", protect, getProfile);

export default router;
