const router = require("express").Router();
const Wishlist = require('../Models/Wishlist');

// Get user's wishlist
router.get('/', async (req, res) => {
    const userId = req.user.id;
    try {
        const wishlist = await Wishlist.findOne({ user: userId }).populate('products');
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add to wishlist
router.post('/add', async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.body;

    try {
        let wishlist = await Wishlist.findOne({ user: userId });
        if (!wishlist) {
            wishlist = new Wishlist({ user: userId, products: [] });
        }
        if (!wishlist.products.includes(productId)) {
            wishlist.products.push(productId);
        }
        await wishlist.save();
        res.status(201).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove from wishlist
router.post('/remove', async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.body;

    try {
        const wishlist = await Wishlist.findOne({ user: userId });
        wishlist.products = wishlist.products.filter(product => product.toString() !== productId);
        await wishlist.save();
        res.status(200).json(wishlist);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;