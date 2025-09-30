const router = require("express").Router();
const user = require("../model/user");
const bcrypt = require("bcryptjs");

//signup
router.post("/register", async (req, res) => {
  try {
    console.log("📩 POST /api/v1/register hit");
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password); //hash password

    //check if user already exists
    const newUser = new user({ email, username, password: hashpassword });
    await newUser.save().then(() => {
      res.status(200).json({ message: "User Signup Successfully" });
    });
  } catch (error) {
    res
      .status(200)
      .json({ message: "User Already Exists", error: error.message });
  }
});

//signin
router.post("/login", async (req, res) => {
  try {
    console.log("📩 POST /api/v1/login hit");

    const useremail = await user.findOne({ email: req.body.email }); // find user
    // by email

    if (!useremail) {
      res.status(200).json({ message: "Please Sigup First" });
    }

    const isMatchPassword = bcrypt.compareSync(
      req.body.password,
      useremail.password
    ); // compare password with hashed password in DB

    if (!isMatchPassword) {
      res.status(200).json({ message: "Invalid Credentials" });
    } else {
      const { password, ...other } = useremail._doc; // this logic is to not send password in response
      res.status(200).json({ other, message: "Login Successfully" });
    }
  } catch (error) {
    res
      .status(200)
      .json({ message: "Error in logging in user", error: error.message });
  }
  console.log("📩 POST /api/auth/login hit END");
});

module.exports = router;
