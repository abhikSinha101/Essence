import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, require: true },
  userName: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  image: { type: String },
  bio: { type: String },
  campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  onBoarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
