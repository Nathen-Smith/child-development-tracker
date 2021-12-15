import mongoose, { Schema } from "mongoose";

const FoodSchema = new Schema(
  {
    typesOfFood: { type: [String], required: true },
    hour: { type: Number, required: true},
    minutes: {type: Number, required: true},
    notes: { type: String, required: true },
    email: { type: String, required: true },
    createdAt: {type: Date, default: Date.now}
  }, {
    versionKey: false
  }
);

const Food = mongoose.model("Food", FoodSchema);

export default Food;

