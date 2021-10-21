const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    maxlength: 50
  }
});

const Category = mongoose.model('Category', categorySchema);

exports.categorySchema = categorySchema;
exports.Category = Category; 