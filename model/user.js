import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

const user = mongoose.model("User", userSchema);

export default user;
