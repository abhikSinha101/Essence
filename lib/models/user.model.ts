import mongoose, { Mongoose } from "mongoose";

const userSchema = new mongoose.Schema({
  id: { type: String, require: true },
  userName: { type: String, require: true, unique: true },
  name: { type: String, require: true },
  image: { type: String },
  bio: { type: String },
  threads: [{ type: mongoose.Schema.Types.ObjectId, ref: "Thread" }],
  onBoarded: {
    type: Boolean,
    default: false,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;

/**communities: [{ type: mongoose.Schema.Types.ObjectId, ref: "community" }],*/
