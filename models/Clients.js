const mongoose = require("mongoose");

const clientSchema = mongoose.Schema(
  {
    Name: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
    },
    Comment: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: true,
  }
);

module.exports = mongoose.model("Client", clientSchema);
