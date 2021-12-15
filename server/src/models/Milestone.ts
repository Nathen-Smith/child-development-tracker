import mongoose, { Schema } from "mongoose";

const MilestoneEntry = new Schema(
  {
    title: { type: String, required: true },
    timeline: { type: Number, required: true }, // age range in months for this milestone
    email: { type: String, required: true },
    category: {type: String, required: true},
    createdAt: { type: Date, default: Date.now },
  }, {
    versionKey: false
  }
);

const Milestone = mongoose.model("Milestone", MilestoneEntry);

export default Milestone;


