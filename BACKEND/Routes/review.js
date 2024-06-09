const router = require('express').Router();
const Review = require('../Models/Review');

// Create a new review
router.post('/', async (req, res) => {
    try {
        // Check if both user and product fields are provided
        if (!req.body.user || !req.body.product) {
            return res.status(400).json({ message: "Both user and product fields are required." });
        }

        const review = new Review({
            user: req.body.user,
            product: req.body.product,
            rating: req.body.rating,
            comment: req.body.comment
        });

        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;
