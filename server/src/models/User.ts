import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    pendingTasks: [String],
    dateCreated: Date,
  },
  { timestamps: { createdAt: "dateCreated", updatedAt: false } }
);

const User = mongoose.model("User", UserSchema);

export default User;
