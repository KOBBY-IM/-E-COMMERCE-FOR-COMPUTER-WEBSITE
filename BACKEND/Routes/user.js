const express = require("express");
const bcrypt = require("bcrypt");
const mongoose = require("mongoose");
const User = require("../Models/User");

const router = express.Router();

// Middleware to check if the ID is a valid ObjectId
const isValidObjectId = (req, res, next) => {
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
        return res.status(400).json({ message: "Invalid ID format" });
    }
    next();
};

// Get all users
router.get(`/`, async (req, res) => {
    try {
        const userList = await User.find().select('-passwordHash');
        res.status(200).json(userList);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get user by ID
router.get('/:id', isValidObjectId, async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-passwordHash');
        if (!user) {
            return res.status(404).json({ message: 'The user with the given ID was not found.' });
        }
        res.status(200).send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Update user
router.put('/:id', isValidObjectId, async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found.' });
        }

        let newPassword = userExist.passwordHash;
        if (req.body.password) {
            newPassword = bcrypt.hashSync(req.body.password, 10);
        }

        // Check if the new email address already exists in the database
        const existingUser = await User.findOne({ email: req.body.email });
        if (existingUser && existingUser._id.toString() !== req.params.id) {
            return res.status(400).json({ message: 'Email address is already in use.' });
        }

        const user = await User.findByIdAndUpdate(
            req.params.id,
            {
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                passwordHash: newPassword,
                phoneCountryCode: req.body.phoneCountryCode,
                phoneNumber: req.body.phoneNumber,
                isAdmin: req.body.isAdmin,
                street: req.body.street,
                apartment: req.body.apartment,
                zip: req.body.zip,
                city: req.body.city,
                country: req.body.country,
            },
            { new: true }
        );

        if (!user) {
            return res.status(400).send('The user cannot be updated!');
        }

        res.send(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get user count
router.get(`/get/count`, async (req, res) => {
    try {
        const userCount = await User.countDocuments({});
        res.send({ userCount });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
});

// Delete user
router.delete('/:id', isValidObjectId, async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully.' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
