import mongoose, { Schema } from "mongoose";

const MilestoneSchema = new Schema(
  {
    description: { type: String, required: true },
    timeline: { type: Number, required: true},
    category: { type: String, required: true },
    date: {type: Date, default: Date.now}
  },
);

const Milestone = mongoose.model("Milestone", MilestoneSchema);

export default Milestone;
