const mongoose = require("mongoose");
const userschema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  List: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "List",
    },
  ],
});

module.exports = mongoose.model("User", userschema);
