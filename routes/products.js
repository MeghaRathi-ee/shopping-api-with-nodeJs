const {Product} = require('../models/product'); 
const {Category} = require('../models/category');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  const products = await Product.find().sort('name');
  res.send(products);
});

router.post('/', async (req, res) => {
  //if (error) return res.status(400).send(error.details[0].message);

  const category = await Category.findById(req.body.categoryId);
  if (!category) return res.status(400).send('Invalid category.');

  const product = new Product({ 
    name: req.body.name,
    category: {
      _id: category._id,
      name: category.name
    }
  });
  await product.save();
  
  res.send(product);
});

router.get('/:id', async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (!product) return res.status(404).send('The product with the given ID was not found.');

  res.send(product);
});

module.exports = router; 