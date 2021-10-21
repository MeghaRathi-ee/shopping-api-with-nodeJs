const mongoose = require('mongoose');
const {categorySchema} = require('./category');

const Product = mongoose.model('Products', new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true, 
      minlength: 5,
      maxlength: 255
    },
    category: { 
      type: categorySchema,  
      required: true
    }
  }));
  
  
  exports.Product = Product; 