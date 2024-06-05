const router = require("express").Router();
const bcrypt = require("bcrypt");
const User = require("../Models/User");

router.get(`/`, async (req, res) =>{
    try {
        const userList = await User.find().select('-passwordHash');
        if (!userList) {
            return res.status(500).json({ success: false });
        }
        res.send(userList);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

router.get('/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-passwordHash');
        if (!user) {
            return res.status(404).json({ message: 'The user with the given ID was not found.' });
        }
        res.status(200).send(user);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

router.put('/:id', async (req, res) => {
    try {
        const userExist = await User.findById(req.params.id);
        if (!userExist) {
            return res.status(404).json({ message: 'User not found.' });
        }

        let newPassword;
        if (req.body.password) {
            newPassword = bcrypt.hashSync(req.body.password, 10);
        } else {
            newPassword = userExist.passwordHash;
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
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

router.get(`/get/count`, async (req, res) => {
    try {
        const userCount = await User.countDocuments({});
        res.send({
            userCount: userCount
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, error: error });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        const deletedUser = await User.findOneAndDelete({ _id: req.params.id });
        if (!deletedUser) {
            return res.status(404).json({ message: 'User not found.' });
        }
        res.status(200).json({ success: true, message: 'User deleted successfully.' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
