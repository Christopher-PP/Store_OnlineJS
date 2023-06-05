const mongoose = require("mongoose");

const order_detailsSchema = mongoose.Schema({
  orderId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  ProdcutId: {
    type: mongoose.Types.ObjectId,
    required: true,
  },
  Price: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
  Quantity: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Order_Detail;s", order_detailsSchema);
