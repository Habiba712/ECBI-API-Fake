// models/product.model.js
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  libele: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  // image: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: 'FileUpload',
  //   required: true,
  // },
  image: {
    type: String, // Change from ObjectId to String
    required: true,
  },
  options: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Option',
    required:false 
    
    // Reference to Option model
  }],
}, {
  timestamps: true,
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
