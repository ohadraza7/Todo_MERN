import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import auth from "./routes/auth.js";
import list from "./routes/list.js";
import "./connection/conn.js"; // MongoDB connection

const app = express();

// Needed to fix __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  next();
});

// API routes
app.use("/api/auth", auth);
app.use("/api/list", list);

// ✅ Serve frontend (React Vite build)
app.use(express.static(path.join(__dirname, "../frontend/dist")));

// ✅ Fallback for React Router (refresh issue fix)
app.use((req, res) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
