const Author = require('../models/author.model');

module.exports = {
    createAuthor: (req, res) => {
        Author.create(req.body)
            .then((newAuthor) => {
                res.json(newAuthor)
            })
            .catch((err) => {
                res.status(400).json(err)
            })
    },

    findAll: (req, res) => {
        Author.find({})
            .then((allAuthors) => {
                res.json(allAuthors)
            })
            .catch((err) => {
                console.log('Error in find all', err)
            })
    },

    findOne: (req, res) => {
        Author.findOne({_id: req.params.id})
        .then((singleItem)=> {
            res.json(singleItem)
        })
        .catch((err)=> {
            console.log(err)
        })
    },

    deleteOne: (req, res) => {
        Author.deleteOne({_id: req.params.id})
        .then((confirm) => {
            res.json(confirm)
        })
        .catch((err) => {
            console.log(err)
        })
    },

    updateOne: (req, res) => {
        Author.findOneAndUpdate({_id: req.params.id}, req.body, {new: true,
            runValidators: true})
        .then((updatedItem)=> {
            res.json(updatedItem)
        })
        .catch((err)=> {
            res.status(400).json(err)
        })
    }




}