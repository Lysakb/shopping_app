const mongoose = require("mongoose");
const productModel = require("./product");
const Schema = mongoose.Schema;

const orderSchema = new Schema(
 {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },

    cart: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Cart"
    },

    total_price: {
        type: Number,
        required: true
    },

    delivery_address:{
        type: String,
        required: true
    },

    createdAt:{
        type: Date,
        required: true
    }
},

);

const orderModel = mongoose.model("Order", orderSchema);
module.exports = orderModel;