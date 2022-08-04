const Joke = require('../Models/jokes.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allJokes) => {
            res.json({jokes: allJokes})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.findSingleJoke = (req, res) => {
    Joke.findOne({_id: req.params.id})
        .then((singleJoke) => {
            res.json({joke: singleJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.createJoke = (req, res) => {
    Joke.create(req.body)
        .then((newJoke) => {
            console.log(newJoke)
            res.json(newJoke)
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.updateJoke = (req, res) => {
    Joke.findOneAndUpdate(
        {_id: req.params.id}, 
        req.body, 
        {new: true, runValidators: true}
        )
        .then((updatedJoke) => {
            res.json({update: updatedJoke})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}

module.exports.deleteJoke = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
        .then((result) => {
            res.json({result: result})
        })
        .catch((err) => {
            res.json({message: 'Something went wrong', error: err})
        });
}