import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, required: true },
  username: { type: String, unique: true, required: true },
  name: { type: String, required: true },
  image: String,
  bio: String,
  campaigns: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
  onBoarded: {
    type: Boolean,
    default: false,
  },
  teams: [{ type: mongoose.Schema.Types.ObjectId, ref: "Teams" }],
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
