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
    },

    findSingle: (req, res) => {
        
        Product.findOne({_id: req.params.id})
            .then((singleItem) => {
                res.json(singleItem)
            })
            .catch((err) => {
                console.log('Error in find one', err)
            });
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({_id: req.params.id}, req.body, {new: true})
            .then((updatedProduct) => {
                res.json(updatedProduct)
            })
            .catch((err) => {
                console.log('Error in update', err)
            })
    },

    deleteProduct: (req, res) => {
        Product.deleteOne({_id: req.params.id})
            .then((deleteConfirm) => {
                res.json(deleteConfirm)
            })
            .catch((err) => {
                console.log('Error in delete', err)
            })
    }
}

