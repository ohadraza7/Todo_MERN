import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import "./connection/conn.js";

const app = express();

app.use(cors());
app.use(express.json());

// Simple test route
app.get("/", (req, res) => {
  res.send("✅ Backend running successfully on Vercel");
});

conn();
// Routes
app.use("/api/auth", auth);
app.use("/api/list", list);

// ✅ Important: Export app (no app.listen)
export default app;
