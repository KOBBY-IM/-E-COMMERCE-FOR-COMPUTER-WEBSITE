const router = require('express').Router();
const Review = require('../Models/Review');

// Get all reviews for a product
router.get('/product/:productId', async (req, res) => {
    try {
        const reviews = await Review.find({ product: req.params.productId });
        res.status(200).json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Create a new review
router.post('/', async (req, res) => {
    const review = new Review(req.body);
    try {
        const savedReview = await review.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;