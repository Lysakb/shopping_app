const mongoose = require("mongoose");
const productModel = require("./product");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
 {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product"
    },
    
    quantity: {
     type: Number,
     required: true
    },

  },

  { timestamps: true }
);

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;