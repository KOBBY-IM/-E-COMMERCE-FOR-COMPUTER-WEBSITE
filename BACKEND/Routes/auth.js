const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register
router.post("/register", async (req, res) => {
    try {
        const { firstName, lastName, email, password, phoneCountryCode, phoneNumber, isAdmin, street, apartment, zip, city, country, username } = req.body;

        // Validate incoming data
        if (!firstName || !lastName || !email || !password || !phoneCountryCode || !phoneNumber || !username) {
            return res.status(400).json({ message: "First name, last name, email, password, phone country code, phone number, and username are required" });
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }

        const passwordHash = bcrypt.hashSync(password, 10);
        
        const newUser = new User({
            username,
            firstName,
            lastName,
            email,
            passwordHash,
            phoneCountryCode,
            phoneNumber,
            isAdmin,
            street,
            apartment,
            zip,
            city,
            country,
        });

        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error registering user", error: err });
    }
});

// Login
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const JWT_SECRET = process.env.JWT_SECRET;

        // Validate incoming data
        if (!email || !password) {
            return res.status(400).json({ message: "Email and password are required" });
        }

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.passwordHash);
        if (!isPasswordCorrect) {
            return res.status(400).json({ message: 'Incorrect password' });
        }

        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({ user: user.email, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error logging in", error: err });
    }
});

module.exports = router;
