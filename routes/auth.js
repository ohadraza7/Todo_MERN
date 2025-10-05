import express from "express";
const router = express.Router();

import user from "../model/user.js";
import bcrypt from "bcryptjs";

// signup
router.post("/register", async (req, res) => {
  try {
    console.log("📩 POST /api/v1/register hit");
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);

    const newUser = new user({ email, username, password: hashpassword });
    await newUser.save();

    res.status(200).json({ message: "User Signup Successfully" });
  } catch (error) {
    console.error("❌ Error during signup:", error);
    res
      .status(200)
      .json({ message: "Error during signup", error: error.message });
  }
});

// signin
router.post("/login", async (req, res) => {
  try {
    console.log("📩 POST /api/v1/login hit");

    const useremail = await user.findOne({ email: req.body.email });

    if (!useremail) {
      return res.status(200).json({ message: "Please Signup First" });
    }

    const isMatchPassword = bcrypt.compareSync(
      req.body.password,
      useremail.password
    );

    if (!isMatchPassword) {
      return res.status(200).json({ message: "Invalid Credentials" });
    }

    const { password, ...other } = useremail._doc;
    res.status(200).json({ other, message: "Login Successfully" });
  } catch (error) {
    res
      .status(200)
      .json({ message: "Error in logging in user", error: error.message });
  }

  console.log("📩 POST /api/auth/login hit END");
});

export default router;
