<<<<<<< HEAD
const {category, Category} = require('../models/category');
const express = require('express');
const { Product } = require('../models/product');
const route = express.Router();

route.get('/', async (req, res) =>{
    const categoryList = await Category.find();

    if(!categoryList) {
        res.status(5000).json({success: false})
    }
    res.send(productList);
})

route.post('/', async (req, res) =>{
    const category = await category.findById(req.body.Category);
    if(!category) return res.status(400).send('Invalid Category')

    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        richDescription: req.body.richDescription,
        image: req.body.image,
        brand: req.body.brand,
        price: req.body.price,
        category: req.body.category,
        countInStock: req.body.countInStock,
        rating: req.body.rating,
        numReviews: req.body.numReviews,
        isFeatured: req.body.isFeatured,
    })

    product = await product.save();
    
    if(!product)
        return res.status(500).send('The product cannot be created')

    res.send(product);
})

module.exports =router;
=======
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
>>>>>>> c17ecd9cdf6b00c9ed68190ea679dfa7e6409f3c
