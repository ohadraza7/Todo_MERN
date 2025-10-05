import mongoose from "mongoose";

import dotenv from "dotenv";

dotenv.config();
const conn = async (req, res) => {
  try {
    await mongoose.connect(process.env.MONGO_URI).then(() => {
      console.log("connected to mongoDB");
    });
  } catch (error) {
    res.status(200).json({ message: "not connected to DB" });
  }
};
export default conn;
