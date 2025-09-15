import jwt from "jsonwebtoken";
import User from "../models/User.js";

const protect = async (req, res, next) => {
  try {
    const token = req.cookies.jwt;

    if (!token) {
      return res.status(200).json({ loggedIn: false, user: null });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.userId).select(
      "-password"
    );

    if (!user) {
      return res.status(200).json({ loggedIn: false, user: null });
    }

    // Attach user object to request
    req.user = user;
    next();
  } catch (error) {
    console.error("AuthMiddleware error:", error.message);
    return res.status(200).json({ loggedIn: false, user: null });
  }
};

export default protect;
