const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: String,
    price: String,
    desc: String
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema);

