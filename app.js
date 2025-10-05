import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import "./connection/conn.js"; // MongoDB connection

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", auth);
app.use("/api/list", list);

// Optional: basic root route for testing
app.get("/", (req, res) => {
  res.send("Backend is running 🚀");
});

// ✅ Export the app for Vercel
export default app;
