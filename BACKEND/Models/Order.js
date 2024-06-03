const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    products: [
        {
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
            }
        }
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    status: {
        type: String,
        default: 'pending',
        enum: ['pending', 'shipped', 'delivered'],
    },
    paymentMethod: {
        type: String,
        required: true,
    },
}, { timestamps: true });

module.exports = mongoose.model("Order", OrderSchema);
