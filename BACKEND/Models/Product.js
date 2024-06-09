const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    richDescription: {
        type: String,
        default: '',
    },
    images: [{
        type: String,
    }],
    brand: {
        type: String,
        default: '',
    },
    price: {
        type: Number,
        required: true,
        default: 0,
    },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        required: true,
    },
    countInStock: {
        type: Number,
        required: true,
        min: 0,
        max: 255,
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews: {
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
    cpu: {
        type: String,
        default: '', 
    },
    gpu: {
        type: String,
        default: '', 
    },
    ram: {
        type: String,
        default: '', 
    },
    storage: {
        type: String,
        default: '', 
    },
    motherboard: {
        type: String,
        default: '',  
    },
    psu: {
        type: String,
        default: '',  
    },
    coolingSystem: {
        type: String,
        default: '',
    },
    dimensions: {
        type: String,
        default: '',
    },
    weight: {
        type: String,
        default: '',
    },
    color: {
        type: String,
        default: '',
    },
});

module.exports = mongoose.model('Product', productSchema);
