const express = require("express");
const cors = require("cors");
const path = require("path");

const auth = require("./routes/auth");
const list = require("./routes/list");

require("./connection/conn"); // MongoDB connection

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// API routes
app.use("/api/auth", auth);
app.use("/api/list", list);

// ✅ Serve frontend (React Vite build)
app.use(express.static(path.join(__dirname, "frontend", "dist")));

// ✅ Fallback for React Router (refresh issue fix)
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
