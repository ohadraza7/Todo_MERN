import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
const conn = async (req, res) => {
  try {
    await mongoose
      .connect(
        "mongodb+srv://ohad58444_db_user:JIT6Vrr19vMHs7Rc@cluster0.8njyvwz.mongodb.net/"
      )
      .then(() => {
        console.log("connected to mongoDB");
      });
  } catch (error) {
    res.status(200).json({ message: "not connected to DB" });
  }
};
conn();
