import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js"; // corrected
import morgan from "morgan";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
app.use(morgan("dev"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/leads", leadRoutes);

// Health check
app.get("/", (req, res) => res.send("API is running..."));

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Server error", error: err.message });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
