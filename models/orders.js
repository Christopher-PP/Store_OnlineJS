const mongoose = require("mongoose");

const orderSchema = mongoose.Schema(
  {
    clientID: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    Total: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", orderSchema);
