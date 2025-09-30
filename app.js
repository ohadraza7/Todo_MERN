import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import authRoutes from "./routes/auth.js";
import listRoutes from "./routes/list.js";
import "./connection/conn.js"; // MongoDB

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());

// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/list", listRoutes);

// Serve frontend static files
app.use(express.static(path.join(__dirname, "frontend/dist")));

// React SPA fallback for refresh
app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "frontend/dist", "index.html"));
});

const PORT = process.env.PORT || 1000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
