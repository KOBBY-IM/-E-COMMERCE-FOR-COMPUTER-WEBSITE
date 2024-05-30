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