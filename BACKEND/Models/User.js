const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/\S+@\S+\.\S+/, 'Please use a valid email address.'] // Validate email format
    },
    passwordHash: {
        type: String,
        required: true,
    },
    phoneCountryCode: {
        type: String,
        required: true,
        match: [/^\+\d{1,3}$/, 'Please use a valid country code.'] // Validate country code format
    },
    phoneNumber: {
        type: String,
        required: true,
        match: [/^\d{10}$/, 'Please use a valid 10-digit phone number.'] // Validate phone number format
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
    street: {
        type: String,
        default: ''
    },
    apartment: {
        type: String,
        default: ''
    },
    zip: {
        type: String,
        default: ''
    },
    city: {
        type: String,
        default: ''
    },
    country: {
        type: String,
        default: ''
    }
}, {
    timestamps: true, // Automatically manage createdAt and updatedAt fields
});

// Virtual field for id
userSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are serialized
userSchema.set('toJSON', {
    virtuals: true,
});

// Indexes
userSchema.index({ email: 1 }, { unique: true }); // Ensure email index for faster searches

module.exports = mongoose.model("User", userSchema);
