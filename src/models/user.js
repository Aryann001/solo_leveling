import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is Required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email is Required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is Required"],
    minLength: [8, "Password should be atleast 8 characters"],
    select: false,
  },

  level: {
    type: Number,
    default: 0,
  },

  job: {
    type: String,
    default: "None",
  },

  title: {
    type: String,
    default: "None",
  },

  hp: {
    type: Number,
    default: 0,
  },

  mp: {
    type: Number,
    default: 0,
  },

  str: {
    type: Number,
    default: 0,
  },

  agi: {
    type: Number,
    default: 0,
  },

  per: {
    type: Number,
    default: 0,
  },

  vit: {
    type: Number,
    default: 0,
  },

  int: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model("User", userSchema);

export default User;
