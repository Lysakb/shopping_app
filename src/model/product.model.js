const mongoose = require("mongoose");
const commentModel = require("./comment");
const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },

    category: {
        type: String,
        required: true
    },

    description: {
        type: String,
        required: true
    },

    price: {
        type: Number,
        required: true
    }


}) 

const productModel = mongoose.model("Product", productSchema);
module.exports = productModel; 