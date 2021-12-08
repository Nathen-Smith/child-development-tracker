import mongoose, { Schema } from "mongoose";

const SleepSchema = new Schema(
  {
    typeOfSleep: { type: String, required: true },
    time: { type: Date, required: true },
    notes: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
  },
);

const Sleep = mongoose.model("Sleep", SleepSchema);

export default Sleep;
