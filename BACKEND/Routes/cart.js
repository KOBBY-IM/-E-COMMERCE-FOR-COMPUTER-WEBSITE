const router = require("express").Router();
const Cart = require('../Models/Cart');

// Get user's cart
router.get('/', async (req, res) => {
    const userId = req.user.id;
    try {
        const cart = await Cart.findOne({ user: userId }).populate('items.product');
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add to cart
router.post('/add', async (req, res) => {
    const userId = req.user.id;
    const { productId, quantity } = req.body;

    try {
        let cart = await Cart.findOne({ user: userId });
        if (!cart) {
            cart = new Cart({ user: userId, items: [] });
        }
        const itemIndex = cart.items.findIndex(item => item.product.toString() === productId);
        if (itemIndex > -1) {
            cart.items[itemIndex].quantity += quantity;
        } else {
            cart.items.push({ product: productId, quantity });
        }
        await cart.save();
        res.status(201).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Remove from cart
router.post('/remove', async (req, res) => {
    const userId = req.user.id;
    const { productId } = req.body;

    try {
        const cart = await Cart.findOne({ user: userId });
        cart.items = cart.items.filter(item => item.product.toString() !== productId);
        await cart.save();
        res.status(200).json(cart);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;