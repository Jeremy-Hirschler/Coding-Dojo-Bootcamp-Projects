const AuthorController = require('../controllers/author.controllers');

module.exports = (app) => {
    app.get('/api/authors', AuthorController.findAll);
    app.post('/api/authors', AuthorController.createAuthor);
    app.get('/api/authors/:id', AuthorController.findOne);
    app.delete('/api/authors/:id', AuthorController.deleteOne);
    app.put('/api/authors/edit/:id', AuthorController.updateOne);
}