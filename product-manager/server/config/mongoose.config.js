const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/product-database',{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => {
        console.log('Established connection to database')
    })
    .catch((err) => {
        console.log(err)
    });