import mongoose, { Schema } from "mongoose";

const JournalSchema = new Schema(
  {
    title: { type: String, required: true },
    body: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
  },
);

const Journal = mongoose.model("Journal", JournalSchema);

export default Journal;
