import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  phone: String,
  company: String,
  occupation: String,
  incomes: String,
  learning_experience: String,
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
