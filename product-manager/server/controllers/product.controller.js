const Product = require('../models/product.model');

module.exports = {
    addProduct: (req, res) => {
        Product.create(req.body)
            .then((newProduct) => {
                res.json(newProduct)
            })
            .catch((err) => {
                console.log('Error in create', err)
            });
    },

    findAll: (req, res) => {
        Product.find({})
            .then((allProducts) => {
                console.log('find')
                res.json(allProducts)
            })
            .catch((err) => {
                console.log('Error in find all', err)
            });
    }
}

