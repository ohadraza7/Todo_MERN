import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import "./connection/conn.js"; // MongoDB connection

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("✅ Backend is running locally!");
});

app.use("/api/auth", auth);
app.use("/api/list", list);

// Server
const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
