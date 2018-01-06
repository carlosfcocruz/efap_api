const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({
  name: String
});

ProductSchema.methods.myMethod = () => {};

module.exports = mongoose.model('Product', ProductSchema);
