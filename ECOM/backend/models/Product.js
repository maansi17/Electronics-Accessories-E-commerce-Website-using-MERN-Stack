const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, // Minimum price
  },
  countInStock: {
    type: Number,
    required: true,
    min: 0, // Minimum countInStock
  },
  imageUrl: {
    type: String,
    required: true,
    // Add custom validation or transformation logic if needed
  },
});

// Optionally, define indexes
productSchema.index({ name: 1 });

// Optionally, provide default values
// productSchema.set('toJSON', { getters: true, virtuals: true });

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
