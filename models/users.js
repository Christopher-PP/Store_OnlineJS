const mongoose = require("mongoose");
const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    Psw: {
      type: String,
      required: true,
    },
    userType: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: true,
  }
);
module.exports = mongoose.model("User", userSchema);
