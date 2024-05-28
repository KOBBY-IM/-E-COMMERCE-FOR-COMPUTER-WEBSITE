const mongoose = require ('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: Strings,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    richDescription: {
        type: String,
        default: ''
    },
    image: {
        type: String,
        default: ''
    },
    image: [{
        type: String,
    }],
    brand: {
        type: String,
        default: ''
    },
    price: {
        type: Number,
        default:0
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true
    },

    countInStock: {
        type: Number,
        required: true,
        min: 0,
        maxx: 255
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        defualt:0
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dataCreated: {
        type: Date,
        defualt: Date.now,
    },
})

exports.Product = mongoose.model
{'Product', productSchema};
