import mongoose from "mongoose";

const campaignSchema = new mongoose.Schema({
  text: { type: String, require: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
  teams: { type: mongoose.Schema.Types.ObjectId, ref: "Teams" },
  createdAt: { type: Date, default: Date.now },
  parentId: { type: String },
  children: [{ type: mongoose.Schema.Types.ObjectId, ref: "Campaign" }],
});

const Campaign =
  mongoose.models.Campaign || mongoose.model("Campaign", campaignSchema);

export default Campaign;
