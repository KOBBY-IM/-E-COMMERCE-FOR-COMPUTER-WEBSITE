const express = require('express');
const router = express.Router();
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
    const product = new Product(req.body);
    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
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
