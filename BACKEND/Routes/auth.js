const router = require("express").Router();
const User = require("../Models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");


// Register
router.post("/register", async (req, res) => {
    try {
        const { name, email, password, phone, isAdmin, street, apartment, zip, city, country, username } = req.body;

        // Validate incoming data
        if (!name || !email || !password || !username) {
            return res.status(400).json({ message: "Name, email, password, and username are required" });
        }

        const passwordHash = bcrypt.hashSync(password, 10);
        
        const newUser = new User({
            username,
            name,
            email,
            passwordHash,
            phone,
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
            return res.status(400).send('User not found');
        }


        // Ensure both password and hash are defined before comparison
        if (!password || !user.passwordHash) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        const isPasswordCorrect = bcrypt.compareSync(password, user.passwordHash);
        if (!isPasswordCorrect) {
            return res.status(400).send('Incorrect password');
        }

        const token = jwt.sign(
            {
                userId: user.id,
                isAdmin: user.isAdmin
            },
            JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).send({ user: user.email, token });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Error logging in", error: err });
    }
});


module.exports = router;
