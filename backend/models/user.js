const mongoose = require("mongoose");
const { isEmail, isAlpha } = require("validator");

const { Schema } = mongoose;

const UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    validate: [isEmail, "Please enter a valid email id"],
  },
  fname: {
    type: String,
    validate: [isAlpha, "Please enter a valid input with only A-Z or a-z"],
    required: [true, "Please enter your First name"],
  },
  lname: {
    type: String,
    validate: [isAlpha, "Please enter a valid input with only A-Z or a-z"],
    required: [true, "Please enter your Last name"],
  },
  phone_number: {
    type: String,
    unique: true,
    required: [true, "Please enter an 10-digit phone-number"],
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
