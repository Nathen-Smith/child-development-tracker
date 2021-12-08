import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema(
  {
    typesOfFood: { type: [String], required: true },
    time: { type: Date, required: true },
    notes: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
  },
);

const Food = mongoose.model("Food", FoodSchema);

export default Food;

