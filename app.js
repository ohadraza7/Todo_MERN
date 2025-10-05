import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

import auth from "./routes/auth.js";
import list from "./routes/list.js";

// ✅ Load .env if available (optional but safe)
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ✅ MongoDB connection
const MONGO_URI =
  process.env.MONGO_URI ||
  "mongodb+srv://ohad58444_db_user:JIT6Vrr19vMHs7Rc@cluster0.8njyvwz.mongodb.net/";

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err.message));

// Default route
app.get("/", (req, res) => {
  res.send("🚀 Backend is running on Vercel");
});

// API Routes
app.use("/api/auth", auth);
app.use("/api/list", list);

// ❌ Don't use app.listen()
// ✅ Export the app for Vercel serverless function
export default app;
