const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    NameProduct: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Img: {
      type: String,
      required: true,
    },
    Price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    Category: {
      type: mongoose.Types.ObjectId,
      required: true,
    },
    State: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    aversionKey: true,
  }
);
module.exports = mongoose.model("Product", ProductSchema);
