import mongoose, { Schema } from "mongoose";

const JournalSchema = new Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    subCategory: { type: String, required: true },
    date: {type: Date, default: Date.now}
  },
);

const Journal = mongoose.model("Journal", JournalSchema);

export default Journal;
