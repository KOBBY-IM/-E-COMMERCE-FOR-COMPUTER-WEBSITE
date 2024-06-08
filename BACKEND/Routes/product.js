const router = require('express').Router();
const Product = require('../Models/Product');

// Get all products
router.get('/', async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get a single product
router.get('/:id', getProduct, (req, res) => {
    res.json(res.product);
});

// Create a new product
router.post('/', async (req, res) => {
    try {
        const product = new Product(req.body);
        const savedProduct = await product.save();
        res.status(201).json(savedProduct);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Update a product
router.patch('/:id', getProduct, async (req, res) => {
    try {
        if (req.body.name != null) {
            res.product.name = req.body.name;
        }
        if (req.body.description != null) {
            res.product.description = req.body.description;
        }
        // Update other fields as needed

        const updatedProduct = await res.product.save();
        res.json(updatedProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

// Delete a product
router.delete('/:id', getProduct, async (req, res) => {
    try {
        await res.product.remove();
        res.json({ message: 'Product deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search products by name
router.get('/search/:query', async (req, res) => {
    const query = req.params.query;
    try {
        // Perform case-insensitive search on product name
        const products = await Product.find({
            name: { $regex: query, $options: 'i' }
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Search products by category
router.get('/category/:category', async (req, res) => {
    const category = req.params.category;
    try {
        // Perform case-insensitive search on product category
        const products = await Product.find({
            category: { $regex: category, $options: 'i' }
        });
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});



// Middleware function to get single product by ID
async function getProduct(req, res, next) {
    let product;
    try {
        product = await Product.findById(req.params.id);
        if (product == null) {
            return res.status(404).json({ message: 'Product not found' });
        }
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }

    res.product = product;
    next();
}

module.exports = router;
