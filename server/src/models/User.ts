import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    createdAt: {type: Date, default: Date.now}
  }, {
    versionKey: false
  }
);

const User = mongoose.model("User", UserSchema);

export default User;
