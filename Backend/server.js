import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";            
import connectDB from "./db.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();


app.use(
  cors({
    origin: "http://localhost:5173", 
    credentials: true,               
  })
);

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
});
