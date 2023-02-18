const mongoose = require("mongoose");
const User = require("./user");
const { Schema } = mongoose;

const AddressSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: User,
  },
  full_name: {
    type: String,
  },
  phone: {
    type: String,
  },
  address: {
    type: String,
  },
  city: {
    type: String,
  },
  state: {
    type: String,
  },
  pin_code: {
    type: String,
  },
  is_default: {
    type: Boolean,
    default: false,
  },
  updated: Date,
  created: {
    type: Date,
    default: Date.now,
  },
});

const Address = mongoose.model("Address", AddressSchema);

module.exports = Address;
