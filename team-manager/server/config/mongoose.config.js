const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/player-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(()=> {
    console.log('Connected to player database')
})
.catch((err)=> {
    console.log('Could not connect to database', err)
});