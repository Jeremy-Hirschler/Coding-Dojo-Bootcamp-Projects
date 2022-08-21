const Player = require('../models/player.model');

module.exports = {
    findAllPlayers: (req, res) => {
        Player.find({})
        .then((allPlayers)=> {
            res.json(allPlayers)
        })
        .catch((err)=> {
            console.log('Error in find all', err)
        })
    },

    createPlayer: (req, res) => {
        Player.create(req.body)
        .then((newPlayer)=> {
            res.json(newPlayer)
        })
        .catch((err)=> {
            res.status(400).json(err)
        })
    },

    deletePlayer: (req, res) => {
        Player.deleteOne({_id: req.params.id})
        .then((confirm)=> {
            res.json(confirm)
        })
        .catch((err)=> {
            console.log('Error in delete', err)
        })
    },

    findOnePlayer: (req, res) => {
        Player.findOne({_id: req.params.id})
        .then((onePlayer)=> {
            res.json(onePlayer)
        })
        .catch((err)=> {
            console.log('Error in find one', err)
        })
    },

    updateStatus: (req, res)=> {
        Player.findOneAndUpdate({_id: req.params.id}, req.body, {
            new:true, runValidators: true
        })
        .then((updated)=>{
            res.json(updated)
        })
        .catch((err)=>{
            console.log(err)
        })
    }
};