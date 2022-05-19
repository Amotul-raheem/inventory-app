import mongoose from "mongoose";

const Schema = mongoose.Schema;

const productSchema = new Schema({
    product_name: {
        type: String,
        required: true
    },
    product_code: {
        type: Number,
        required: true
    },
    description: {
        type: String
    },
    inventory_on_hand:{
        type: Number,
        default: 0
    },
    price_per_unit: {
        type: Number,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    }
})

const Product = mongoose.model('product', productSchema);
export default Product