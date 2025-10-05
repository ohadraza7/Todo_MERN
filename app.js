import express from "express";
import cors from "cors";
import auth from "./routes/auth.js";
import list from "./routes/list.js";
import "./connection/conn.js"; // MongoDB connection

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res) => {
  res.send("✅ Backend is running on Vercel");
});

app.use("/api/auth", auth);
app.use("/api/list", list);

// 🚀 Export app — don't use app.listen()
export default app;
