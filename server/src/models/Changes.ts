import mongoose, { Schema } from "mongoose";

const ChangesSchema = new Schema(
  {
    consistency: { type: String, required: true },
    time: { type: Date, required: true },
    notes: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
  },
);

const Changes = mongoose.model("Changes", ChangesSchema);

export default Changes;
